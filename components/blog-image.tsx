"use client"
import { useState } from "react"

interface BlogImageProps {
  src: string
  alt: string
}

export function BlogImage({ src, alt }: BlogImageProps) {
  const [isError, setIsError] = useState(false)

  // Ensure the src starts with a slash if it doesn't already
  const imageSrc = src.startsWith("/") ? src : `/${src}`

  return (
    <div className="my-4 relative">
      <img
        src={isError ? "/placeholder.png" : imageSrc}
        alt={alt || "Blog image"}
        className="max-w-full h-auto rounded"
        onError={() => {
          console.error(`Failed to load image: ${imageSrc}`)
          setIsError(true)
        }}
      />
    </div>
  )
}
