/**
 * Blog Configuration
 * 
 * This file contains configuration options for your blog.
 * Edit these values to customize your blog's appearance and behavior.
 */

const config = {
  // Site Information
  site: {
    title: "Open Source Blog",
    description: "A minimalist, content-focused blog built with Next.js and Tailwind CSS.",
    language: "en-US",
    url: "https://your-domain.com",
  },
  
  // Author Information
  author: {
    name: "Your Name",
    bio: "Welcome to my blog! This is where I share my thoughts, ideas, and experiences.",
    location: "Your Location",
    avatar: "/profile-pic.png", // Profile image is already in the public directory
    social: {
      website: "https://your-website.com",
      twitter: "@yourusername",
      github: "yourusername",
      linkedin: "yourusername",
      // Add more social links as needed
    },
  },
  
  // Theme Configuration
  theme: {
    // Primary colors (used for links, accents, etc.)
    colors: {
      primary: {
        light: "#0000FF", // Blue for light mode
        dark: "#fdbd72",  // Orange for dark mode
      },
      // You can add more color variables here
    },
    
    // Default theme (system, light, or dark)
    defaultTheme: "system",
    
    // Font configuration is in app/layout.tsx
    // To change fonts, modify the font import and configuration there
  },
  
  // Blog Features
  features: {
    // Enable or disable dark mode toggle
    darkMode: true,
    
    // Enable or disable image zoom
    imageZoom: true,
    
    // Date format for posts (using Intl.DateTimeFormat options)
    dateFormat: {
      locale: "en-US",
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    },
  },
  
  // Navigation Links (if you want to add more pages)
  navigation: [
    { name: "Home", path: "/" },
    // Add more navigation items as needed
    // Example: { name: "About", path: "/about" },
  ],
  
  // Footer Configuration
  footer: {
    // Copyright notice (use %YEAR% to dynamically insert the current year)
    copyright: "© %YEAR% Your Name. All rights reserved.",
    
    // Footer links
    links: [
      { name: "GitHub", url: "https://github.com/yourusername" },
      { name: "Twitter", url: "https://twitter.com/yourusername" },
      // Add more footer links as needed
    ],
  },
}

export default config
