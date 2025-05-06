/**
 * Create New Post Script
 * 
 * This script helps create a new blog post with the correct frontmatter.
 * Run it with: npm run new-post
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const postsDirectory = path.join(process.cwd(), 'posts');

// Ensure the posts directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

// Function to create a slug from the title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .trim();
}

// Function to format the date as YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Ask for post details
console.log('\n📝 Create a New Blog Post\n');

rl.question('Post title: ', (title) => {
  rl.question('Author name: ', (author) => {
    rl.question('Brief excerpt (optional): ', (excerpt) => {
      // Generate slug from title
      const slug = createSlug(title);
      
      // Get current date
      const today = new Date();
      const formattedDate = formatDate(today);
      
      // Create frontmatter
      const frontmatter = `---
title: "${title}"
date: "${formattedDate}"
author: "${author}"
excerpt: "${excerpt}"
---

# ${title}

Write your post content here using Markdown syntax.

## Introduction

Start with an introduction to your topic.

## Main Content

Add your main content here.

## Conclusion

Wrap up your post with a conclusion.

`;

      // Create the file
      const filePath = path.join(postsDirectory, `${slug}.md`);
      
      // Check if file already exists
      if (fs.existsSync(filePath)) {
        console.log(`\n⚠️  A post with the slug "${slug}" already exists.`);
        console.log(`Please choose a different title or manually edit the existing file.`);
      } else {
        fs.writeFileSync(filePath, frontmatter);
        console.log(`\n✅ Post created successfully!`);
        console.log(`File: ${filePath}`);
        console.log(`\nYou can now edit this file to add your content.`);
      }
      
      rl.close();
    });
  });
});

rl.on('close', () => {
  process.exit(0);
});
