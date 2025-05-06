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

  // Fallback to a placeholder if the image fails to load
  const handleError = () => {
    console.error(`Failed to load image: ${imageSrc}`)
    setIsError(true)
  }

  return (
    <div className="my-4 relative">
      {isError ? (
        <div className="border border-gray-300 bg-gray-100 rounded p-4 text-center">
          <p className="text-gray-500">Image failed to load: {alt || imageSrc}</p>
        </div>
      ) : (
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={alt || "Blog image"}
          className="max-w-full h-auto rounded"
          onError={handleError}
        />
      )}
    </div>
  )
}
