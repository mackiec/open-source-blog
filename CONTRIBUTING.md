# Contributing to Open Source Blog

Thank you for considering contributing to the Open Source Blog project! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue with the following information:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Any relevant details about your environment (browser, OS, etc.)

### Suggesting Enhancements

We welcome suggestions for enhancements! Please create an issue with:

- A clear, descriptive title
- A detailed description of the proposed enhancement
- Any relevant examples, mockups, or references
- Why this enhancement would be useful to most users

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests if applicable
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

#### Pull Request Guidelines

- Follow the existing code style
- Update documentation as needed
- Keep pull requests focused on a single topic
- Write clear, descriptive commit messages
- Link the pull request to any related issues

## Development Setup

1. Fork and clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

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

## Styling Guidelines

- Use Tailwind CSS for styling
- Follow the existing color scheme and design patterns
- Ensure responsive design for all screen sizes

## Documentation Guidelines

- Keep documentation clear and concise
- Use code examples where appropriate
- Update the README.md when adding new features

## Testing

Before submitting a pull request, please test your changes thoroughly:

- Test on different browsers if applicable
- Test on different screen sizes
- Ensure there are no console errors

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License.
