import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeReact from "rehype-react"
import remarkGfm from "remark-gfm"
import { createElement, Fragment } from "react"
import { remark } from "remark"
import html from "remark-html"

/**
 * Custom MDX Components
 * 
 * These components define how different markdown elements are rendered.
 * You can customize the styling of your blog by modifying these components.
 * 
 * For example:
 * - Change link colors by modifying the 'a' component
 * - Adjust heading sizes and spacing in the 'h2', 'h3' components
 * - Customize code block styling in the 'pre' and 'code' components
 */
const components = {
  img: (props: any) => (
    <div className="my-4">
      <img
        src={props.src && props.src.startsWith("/") ? props.src : `/${props.src}`}
        alt={props.alt || ""}
        className="max-w-full h-auto"
      />
    </div>
  ),
  a: (props: any) => <a {...props} className="text-[#0000FF] hover:underline" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-bold mt-8 mb-4" />,
  h3: (props: any) => <h3 {...props} className="text-xl font-bold mt-6 mb-3" />,
  p: (props: any) => <p {...props} className="my-4" />,
  ul: (props: any) => <ul {...props} className="list-disc pl-6 my-4" />,
  ol: (props: any) => <ol {...props} className="list-decimal pl-6 my-4" />,
  blockquote: (props: any) => <blockquote {...props} className="border-l-4 border-[#0000FF] pl-4 italic my-4" />,
  code: (props: any) => <code {...props} className="bg-gray-100 px-1 py-0.5 rounded" />,
  pre: (props: any) => <pre {...props} className="bg-gray-100 p-4 rounded-md overflow-x-auto my-4" />,
}

/**
 * Compile MDX to React Components
 * 
 * This function converts markdown content to React components.
 * It's used for rendering markdown content with custom React components.
 * 
 * @param source - The markdown source to compile
 * @returns An object containing the compiled content as React components
 */
export async function compileMDX(source: string) {
  // First convert markdown to HTML
  const htmlResult = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(source)

  // Then convert HTML to React elements
  const content = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, {
      createElement,
      Fragment,
      components,
    })
    .process(source)

  return {
    content: content.result,
  }
}

/**
 * Convert Markdown to HTML
 * 
 * This function processes markdown content and converts it to HTML.
 * It includes special handling for:
 * - Image paths to ensure they're properly formatted
 * - Adding lazy loading to images
 * - Making images zoomable
 * - Adding language badges to code blocks
 * 
 * @param markdown - The markdown content to convert
 * @returns The processed HTML string
 */
export async function markdownToHtml(markdown: string) {
  // Process image paths in markdown
  // This regex looks for image syntax in markdown and ensures paths are properly formatted
  const processedMarkdown = markdown.replace(/!\[(.*?)\]$$(?!http)(.*?)$$/g, (match, alt, src) => {
    // Remove any leading slashes to prevent double slashes
    const cleanSrc = src.replace(/^\/+/, "")
    return `![${alt}](/${cleanSrc})`
  })

  // Convert markdown to HTML using remark
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false }) // Allow HTML in markdown
    .process(processedMarkdown)

  // Process image tags in the HTML output
  let htmlOutput = result.toString()

  // Replace image tags to ensure they have the correct path
  htmlOutput = htmlOutput.replace(/<img src="(?!http|\/)(.*?)"/g, '<img src="/$1"')

  // Add loading="lazy" and class for styling, and wrap in a div with data attributes for the client-side hydration
  htmlOutput = htmlOutput.replace(/<img(.*?)src="(.*?)"(.*?)>/g, 
    '<div data-zoomable-image><img$1src="$2"$3 loading="lazy" class="max-w-full h-auto my-4 rounded"></div>')
  
  // Process code blocks to add language badges
  htmlOutput = htmlOutput.replace(
    /<pre><code(?: class="language-([^"]+)")?>([^<]+)<\/code><\/pre>/g,
    (match: string, language: string | undefined, code: string) => {
      const langDisplay = language || 'Code';
      return `
        <div class="code-block-wrapper">
          <div class="code-language-badge">${langDisplay}</div>
          <pre><code${language ? ` class="language-${language}"` : ''}>${code}</code></pre>
        </div>
      `;
    }
  );

  return htmlOutput
}
