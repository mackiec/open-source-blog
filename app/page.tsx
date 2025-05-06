import Link from "next/link"
import { getPosts } from "@/lib/posts"
import { DatePill } from "@/components/date-pill"
import { PostListImage } from "@/components/post-list-image"

/**
 * Home Page Component
 * 
 * This is the main landing page of the blog.
 * It displays the author profile and a list of all blog posts.
 */
export default async function Home() {
  // Fetch all posts
  const posts = await getPosts()

  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      {/* Author Profile Section */}
      <header className="mb-12 pb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-6">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img 
                src="/profile-pic.png" 
                alt="Your Name" 
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-700 rounded-full border-2 border-gray-100 dark:border-gray-700">
              <span className="text-lg">👋</span>
            </div>
          </div>
          
          {/* Author Info */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">Your Name</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Your Location</p>
            <div className="flex items-center gap-3 mt-3">
              <a 
                href="https://your-website.com" 
                className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 rounded-full text-gray-700 dark:text-gray-300 text-sm"
              >
                your-website.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Bio Card */}
        <div className="mt-8 bg-white dark:bg-neutral-800 text-foreground rounded-3xl p-8 shadow-lg dark:shadow-black/20">
          <p className="mt-2">Hi! 👋</p>
          <p className="mt-4">
            Welcome to my blog! This is where I share my thoughts, ideas, and experiences.
            Feel free to explore the posts below and get in touch if you have any questions.
          </p>
          <p className="mt-4">
            Find me on social media or visit my website:{" "}
            <a href="https://your-website.com" className="text-[#0000FF] dark:text-[#fdbd72] hover:underline">
              your-website.com
            </a>
          </p>
        </div>
      </header>

      {/* Posts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-foreground">Posts Archive</h2>
        <ul className="space-y-12">
          {posts.map((post) => {
            // Format the date
            const postDate = new Date(post.date);
            const month = postDate.toLocaleDateString("en-US", { month: "short" });
            const day = postDate.getDate();
            const year = postDate.getFullYear();
            
            return (
              <li key={post.slug} className="group bg-gray-50 dark:bg-neutral-800/70 rounded-lg hover:shadow-md dark:hover:shadow-black/20 transition-shadow duration-200 relative mb-8">
                {/* Container for content with overflow hidden */}
                <div className="overflow-hidden rounded-lg">
                {/* Use the DatePill component */}
                <DatePill date={postDate} />
                
                  <Link href={`/posts/${post.slug}`} className="block md:grid md:grid-cols-[80px_1fr_180px] md:gap-8 md:items-center p-6">
                  {/* Desktop date display (hidden on mobile) */}
                  <div className="hidden md:block text-center">
                    <div className="text-xl font-medium text-gray-500 dark:text-gray-400">{month}</div>
                    <div className="text-2xl font-bold text-[#0000FF] dark:text-[#fdbd72]">{day}</div>
                    <div className="text-sm text-gray-400 dark:text-gray-500">{year}</div>
                  </div>
                  
                  {/* Content column - centered on mobile */}
                  <div className="text-center md:text-left mt-2 md:mt-0">
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-[#0000FF] dark:group-hover:text-[#fdbd72] group-hover:underline">{post.title}</h3>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 line-clamp-3 hidden md:block">{post.excerpt}</p>
                  </div>
                  
                  {/* Image column - full width on mobile */}
                  <div className="mt-3 md:mt-0 rounded-lg overflow-hidden shadow-sm mx-auto md:mx-0 max-w-[250px] md:max-w-none">
                    <PostListImage src={post.imageUrl} alt={post.title} />
                  </div>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  )
}
