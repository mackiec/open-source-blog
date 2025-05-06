---
title: "Getting Started with Your Open Source Blog"
date: "2025-01-01"
author: "Your Name"
excerpt: "Learn how to customize this blog, create new posts, and make it your own."
---

# Welcome to Your New Blog!

This is a template post that demonstrates how to create content for your blog. This post will guide you through the basics of customizing your blog, creating new posts, and deploying your site.

## Writing Posts

Posts are written in Markdown format with frontmatter for metadata. Each post should be created as a `.md` file in the `posts` directory with the following structure:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
author: "Your Name"
excerpt: "A brief description of your post that will appear in previews."
---

Your content goes here, written in Markdown.
```

### Frontmatter Fields

- **title**: The title of your post
- **date**: The publication date in "YYYY-MM-DD" format
- **author**: Your name or username
- **excerpt**: A brief description of your post (optional - will be auto-generated if omitted)

## Markdown Features

This blog supports standard Markdown syntax as well as some additional features:

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
```

### Lists

```markdown
- Unordered item 1
- Unordered item 2
  - Nested item

1. Ordered item 1
2. Ordered item 2
```

### Links

```markdown
[Link text](https://example.com)
```

### Images

```markdown
![Alt text](https://example.com/image.jpg)
```

Images will be automatically optimized and support zooming when clicked.

### Code Blocks

````markdown
```javascript
// This is a code block with syntax highlighting
function hello() {
  console.log("Hello, world!");
}
```
````

### Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

## Customizing Your Blog

### Site Information

To customize the site information:

1. Edit `app/layout.tsx` to update the site title, description, and metadata
2. Edit `app/page.tsx` to update the homepage content, including your profile information

### Theme and Styling

The blog comes with built-in dark and light mode support. You can customize the colors and styling by:

1. Modifying the Tailwind configuration in `tailwind.config.ts`
2. Updating the global styles in `app/globals.css`
3. Changing the font in `app/layout.tsx`

### Adding Your Own Images

You can add your own images to the public directory and reference them in your posts:

```markdown
![My Image](/my-image.jpg)
```

## Deployment

This blog is built with Next.js and can be deployed to various platforms:

### Vercel (Recommended)

1. Push your repository to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Other Platforms

You can also deploy to other platforms that support Next.js, such as:

- Netlify
- AWS Amplify
- GitHub Pages (with some additional configuration)

## Need Help?

If you need help or want to contribute to this project, check out the README.md file for more information.

Happy blogging!
