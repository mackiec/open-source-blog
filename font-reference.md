# Font Reference Guide

This file provides a quick reference for changing the font in your Next.js application.

## How to Change Fonts

To change the font for your entire application, modify the `app/layout.tsx` file:

1. Change the import statement to import your desired font
2. Update the font variable initialization

## Available Google Fonts

Here are some popular Google Fonts you can use with their import statements:

### Inter (Default)
```typescript
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
```

### Montserrat
```typescript
import { Montserrat } from "next/font/google"
const inter = Montserrat({ subsets: ["latin"] })
```

### Roboto
```typescript
import { Roboto } from "next/font/google"
const inter = Roboto({ weight: ["400", "700"], subsets: ["latin"] })
```

### Open Sans
```typescript
import { Open_Sans } from "next/font/google"
const inter = Open_Sans({ subsets: ["latin"] })
```

### Lato
```typescript
import { Lato } from "next/font/google"
const inter = Lato({ weight: ["400", "700"], subsets: ["latin"] })
```

### Poppins (Currently Active)
```typescript
import { Poppins } from "next/font/google"
const inter = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] })
```

### Source Sans 3 (updated version of Source Sans Pro)
```typescript
import { Source_Sans_3 } from "next/font/google"
const inter = Source_Sans_3({ subsets: ["latin"] })
```

### Nunito
```typescript
import { Nunito } from "next/font/google"
const inter = Nunito({ subsets: ["latin"] })
```

### Raleway
```typescript
import { Raleway } from "next/font/google"
const inter = Raleway({ subsets: ["latin"] })
```

### Playfair Display (Serif font)
```typescript
import { Playfair_Display } from "next/font/google"
const inter = Playfair_Display({ subsets: ["latin"] })
```

### Merriweather (Serif font)
```typescript
import { Merriweather } from "next/font/google"
const inter = Merriweather({ weight: ["400", "700"], subsets: ["latin"] })
```

## Font Weights and Styles

For most fonts, you can specify weights and styles:

```typescript
import { Roboto } from "next/font/google"
const inter = Roboto({ 
  weight: ["400", "500", "700"], // Available weights vary by font
  style: ["normal", "italic"],   // Optional: include italic styles
  subsets: ["latin"],
})
```

## Variable Fonts

Some fonts are available as variable fonts, which provide more flexibility:

```typescript
import { Inter } from "next/font/google"
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Creates a CSS variable you can use
})
```

Then use it in your layout:

```tsx
<body className={`${inter.variable} font-sans`}>
```

And in your Tailwind config:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
  },
},
