import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import type { Post } from "@/types/post"

/**
 * Posts Directory Path
 * 
 * This constant defines the directory where blog posts are stored.
 * All markdown (.md and .mdx) files in this directory will be treated as blog posts.
 */
const postsDirectory = path.join(process.cwd(), "posts")

/**
 * Extract First Image URL
 * 
 * This helper function extracts the first image URL from markdown content.
 * It's used to generate preview images for post listings.
 * 
 * @param content - The markdown content to search for images
 * @returns The URL of the first image found, or undefined if no image is found
 */
function extractFirstImageUrl(content: string): string | undefined {
  // Match markdown image syntax ![alt](url) or HTML img tags <img src="url" />
  const markdownImageRegex = /!\[.*?\]\((.*?)\)/
  const htmlImageRegex = /<img.*?src=["'](.*?)["']/

  const markdownMatch = content.match(markdownImageRegex)
  const htmlMatch = content.match(htmlImageRegex)

  // Return the first match found
  if (markdownMatch && markdownMatch[1]) {
    return markdownMatch[1]
  } else if (htmlMatch && htmlMatch[1]) {
    return htmlMatch[1]
  }

  return undefined
}

/**
 * Get All Posts
 * 
 * This function retrieves all blog posts from the posts directory,
 * parses their frontmatter and content, and returns them as an array
 * sorted by date (newest first).
 * 
 * @returns A Promise resolving to an array of Post objects
 */
export async function getPosts(): Promise<Post[]> {
  try {
    const fileNames = await fs.readdir(postsDirectory)

    const allPostsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
        .map(async (fileName) => {
          // Extract slug from filename (remove extension)
          const slug = fileName.replace(/\.mdx?$/, "")

          // Read file contents
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = await fs.readFile(fullPath, "utf8")

          // Parse frontmatter and content
          const { data, content } = matter(fileContents)

          // Use custom excerpt from frontmatter if available, otherwise generate one
          const excerpt = data.excerpt || content.slice(0, 150).trim() + "..."
          
          // Extract the first image URL from the content for previews
          // Use placeholder image if no image is found in the content
          const imageUrl = extractFirstImageUrl(content) || '/placeholder.png'

          // Return post object
          return {
            slug,
            title: data.title,
            date: data.date,
            author: data.author,
            excerpt,
            content,
            imageUrl,
          }
        }),
    )

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error("Error getting posts:", error)
    return []
  }
}

/**
 * Get Post by Slug
 * 
 * This function retrieves a single blog post by its slug.
 * It checks for both .md and .mdx files with the given slug.
 * 
 * @param slug - The slug of the post to retrieve
 * @returns A Promise resolving to a Post object, or null if not found
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    let fullPath = path.join(postsDirectory, `${slug}.md`)
    let fileExists = false

    // Check if .md file exists
    try {
      await fs.access(fullPath)
      fileExists = true
    } catch {
      // If .md doesn't exist, try .mdx
      fullPath = path.join(postsDirectory, `${slug}.mdx`)
      try {
        await fs.access(fullPath)
        fileExists = true
      } catch {
        // Neither file exists
        return null
      }
    }

    if (!fileExists) {
      return null
    }

    // Read and parse the file
    const fileContents = await fs.readFile(fullPath, "utf8")
    const { data, content } = matter(fileContents)
    
    // Extract the first image URL from the content
    // Use placeholder image if no image is found in the content
    const imageUrl = extractFirstImageUrl(content) || '/placeholder.png'

    // Return post object
    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      content,
      excerpt: data.excerpt || content.slice(0, 150).trim() + "...",
      imageUrl,
    }
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    return null
  }
}
