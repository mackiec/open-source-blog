"use client"

import { useState } from "react"

interface PostListImageProps {
  src: string | undefined
  alt: string
}

export function PostListImage({ src, alt }: PostListImageProps) {
  const [isError, setIsError] = useState(false)

  return (
    <div className="h-36 w-full relative">
      <img 
        src={isError || !src ? "/placeholder.png" : src} 
        alt={alt}
        className="object-cover h-full w-full"
        onError={() => setIsError(true)}
      />
    </div>
  )
}
