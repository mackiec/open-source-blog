# Open Source Blog

A minimalist, content-focused blog built with Next.js and Tailwind CSS. This project provides a clean, fast, and customizable blogging platform that anyone can download, modify, and host.

## Features

- **Content-First Design**: Clean, distraction-free reading experience
- **Responsive Layout**: Optimized for both desktop and mobile viewing
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Markdown Support**: Write posts in markdown with frontmatter for metadata
- **Code Highlighting**: Syntax highlighting with language badges
- **Image Zoom**: Interactive image viewing with pinch-to-zoom on mobile
- **Fast Performance**: Static generation for quick page loads
- **SEO Optimized**: Proper metadata and semantic HTML

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- npm, yarn, or pnpm

### Installation

1. Clone this repository or download it as a ZIP file
2. Navigate to the project directory
3. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn

# Using pnpm
pnpm install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## Customization

### Basic Configuration

1. **Site Information**:
   - Edit `app/layout.tsx` to update the site title, description, and metadata
   - Edit `app/page.tsx` to update the homepage content and profile information

2. **Styling**:
   - The project uses Tailwind CSS for styling
   - Modify `tailwind.config.ts` to customize colors, fonts, and other design elements
   - Update global styles in `app/globals.css`

3. **Fonts**:
   - Change the font in `app/layout.tsx`
   - The default font is Poppins, but you can use any Google Font
   - See `font-reference.md` for more font options

### Creating Posts

Posts are written in Markdown format with frontmatter for metadata:

1. Create a new `.md` file in the `posts` directory
2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
author: "Your Name"
excerpt: "A brief description of your post"
---
```

3. Write your content in Markdown below the frontmatter
4. See the example post `getting-started.md` for more details on Markdown features

### Images

- Add images to your posts using standard Markdown syntax: `![Alt text](image-url)`
- For local images, place them in the `public` directory and reference them as `/image-name.png` or `/image-name.jpg`
- A default profile image (`profile-pic.png`) is included in the `public` directory
- Images support zooming when clicked

### Code Blocks

- Use triple backticks to create code blocks
- Specify the language for syntax highlighting
- Example:

````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

## Technical Implementation

- Built with **Next.js 15** for server components and static generation
- Styled with **Tailwind CSS** for utility-first styling
- **Markdown Processing** via remark/rehype ecosystem
- **Theme Switching** with next-themes
- **TypeScript** for type safety
- **Component-Based Architecture** for maintainability
- **Responsive Images** with lazy loading and zoom capability

## Project Structure

```
open-source-blog/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Homepage component
│   └── posts/            # Post page components
├── components/           # Reusable React components
│   └── ui/               # UI components
├── lib/                  # Utility functions
│   ├── mdx.tsx           # Markdown processing
│   └── posts.ts          # Post data fetching
├── posts/                # Markdown post files
├── public/               # Static assets
├── styles/               # Additional styles
└── types/                # TypeScript type definitions
```

## Deployment

### Vercel

The easiest way to deploy this blog is using [Vercel](https://vercel.com/):

1. Push your repository to GitHub, GitLab, or Bitbucket
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy your site

### Other Platforms

You can also deploy to other platforms that support Next.js:

- **Netlify**: Connect your repository and set the build command to `npm run build`
- **AWS Amplify**: Follow the AWS Amplify documentation for Next.js deployment
- **GitHub Pages**: Requires additional configuration with a custom GitHub Action

## Analytics

By default, this project includes Vercel Analytics. To use it:

1. Deploy your site to Vercel
2. Analytics will be automatically enabled

To use a different analytics provider:

1. Remove the `<Analytics />` component from `app/layout.tsx`
2. Add your preferred analytics solution following their documentation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [remark](https://github.com/remarkjs/remark) - Markdown processing
