import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Analytics } from "@vercel/analytics/react"

/**
 * Font Configuration
 * 
 * To change fonts, replace 'Poppins' with another Google Font name
 * Examples: Inter, Roboto, Open_Sans, Lato, Montserrat, Source_Sans_3, Nunito
 * 
 * You can also modify the weights array to include different font weights
 * Common weights: 100 (Thin), 200 (Extra Light), 300 (Light), 400 (Regular),
 * 500 (Medium), 600 (Semi Bold), 700 (Bold), 800 (Extra Bold), 900 (Black)
 */
const inter = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] })

/**
 * Site Metadata
 * 
 * This section defines the metadata for your site, including:
 * - title: The name of your blog/site
 * - description: A brief description that appears in search results
 * - openGraph: Information for social media sharing cards
 * - twitter: Twitter card configuration
 * 
 * Be sure to update all fields with your own information
 */
export const metadata: Metadata = {
  title: "Open Source Blog",
  description: "A minimalist, content-focused blog built with Next.js and Tailwind CSS.",
  openGraph: {
    title: "Open Source Blog",
    description: "A minimalist, content-focused blog built with Next.js and Tailwind CSS.",
    url: "https://your-domain.com",
    siteName: "Open Source Blog",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Blog",
    description: "A minimalist, content-focused blog built with Next.js and Tailwind CSS.",
    images: ["https://your-domain.com/og-image.png"],
    creator: "@yourusername",
  },
}

/**
 * Root Layout Component
 * 
 * This is the main layout wrapper for the entire site.
 * It includes:
 * - Theme provider for dark/light mode
 * - Theme toggle button
 * - Vercel Analytics (optional - remove if not using Vercel)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggle />
          {children}
          {/* 
            Vercel Analytics - Remove this component if you're not deploying to Vercel
            or replace with your preferred analytics solution
          */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
