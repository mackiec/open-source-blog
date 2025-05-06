"use client"

import { useEffect, useState } from "react"

interface PostImageProps {
  src: string
  alt?: string
}

export function PostImage({ src, alt = "Blog image" }: PostImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Clean up the source path
    let cleanSrc = src

    // If it doesn't start with a slash or http, add a slash
    if (!cleanSrc.startsWith("/") && !cleanSrc.startsWith("http")) {
      cleanSrc = `/${cleanSrc}`
    }

    setImageSrc(cleanSrc)
  }, [src])

  const handleError = () => {
    console.error(`Failed to load image: ${imageSrc}`)
    setError(true)

    // Try alternative path as fallback
    if (!imageSrc.startsWith("/public/")) {
      setImageSrc(`/public${imageSrc}`)
    }
  }

  if (error) {
    return (
      <div className="border border-red-200 bg-red-50 p-4 rounded my-4 text-center">
        <p className="text-red-500">Image could not be loaded: {alt || src}</p>
      </div>
    )
  }

  return (
    <img
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      className="max-w-full h-auto my-4 rounded shadow-md"
      onError={handleError}
    />
  )
}
