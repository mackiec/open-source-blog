import Link from "next/link"
import { getPostBySlug, getPosts } from "@/lib/posts"
import { notFound } from "next/navigation"
import { markdownToHtml } from "@/lib/mdx"
import { HydrateImages } from "@/components/hydrate-images"
import type { Metadata } from "next"

/**
 * Generate Metadata for SEO
 * 
 * This function generates metadata for each post page based on the post content.
 * It's used by Next.js for SEO optimization and proper page titles.
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    // Explicitly not including OpenGraph or Twitter metadata here
    // This ensures post pages don't have the social sharing tags
  }
}

/**
 * Generate Static Params
 * 
 * This function pre-generates all post pages at build time.
 * It improves performance by creating static pages instead of server-rendering them on demand.
 */
export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * Post Page Component
 * 
 * This component renders an individual blog post page.
 * It fetches the post content, converts markdown to HTML, and displays it.
 */
export default async function PostPage({ params }: { params: { slug: string } }) {
  // Fetch the post by its slug
  const post = await getPostBySlug(params.slug)

  // If post not found, show 404 page
  if (!post) {
    notFound()
  }

  // Convert markdown content to HTML
  const contentHtml = await markdownToHtml(post.content)

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Back link to homepage */}
      <Link href="/" className="text-[#0000FF] dark:text-[#fdbd72] hover:underline mb-4 inline-block">
        &larr; Back to Archive
      </Link>

      <article className="mt-6">
        {/* Post header with title, date and excerpt */}
        <header className="mb-6 border-b-2 border-[#0000FF] dark:border-[#fdbd72] pb-4">
          <h1 className="text-3xl font-bold text-foreground">{post.title}</h1>
          <div className="mt-2 text-xs text-gray-600 dark:text-gray-300">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <br></br>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{post.excerpt}</p>
          <br></br>
        </header>

        {/* Debug section - only visible in development mode */}
        {process.env.NODE_ENV === "development" && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 mb-6 rounded border border-yellow-200 dark:border-yellow-800 hidden">
            <h3 className="font-bold">Debug Info:</h3>
            <p>Post slug: {params.slug}</p>
          </div>
        )}

        {/* Post content */}
        <div className="prose prose-blue dark:prose-invert max-w-none blog-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        
        {/* Component to handle image zooming functionality */}
        <HydrateImages />
      </article>
    </main>
  )
}
