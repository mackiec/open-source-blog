"use client"

import { useEffect, useRef } from "react"
import { ZoomableImage } from "./zoomable-image"
import { createRoot } from "react-dom/client"

export function HydrateImages() {
  const hasHydrated = useRef(false)

  useEffect(() => {
    if (hasHydrated.current) return
    
    // Find all image containers with the data-zoomable-image attribute
    const imageContainers = document.querySelectorAll('[data-zoomable-image]')
    
    imageContainers.forEach((container) => {
      // Get the img element inside the container
      const img = container.querySelector('img')
      if (!img) return
      
      // Extract the src and alt attributes
      const src = img.getAttribute('src') || ''
      const alt = img.getAttribute('alt') || ''
      
      // Create a new div to render our ZoomableImage component
      const mountPoint = document.createElement('div')
      
      // Replace the container with our mount point
      container.parentNode?.replaceChild(mountPoint, container)
      
      // Render the ZoomableImage component
      const root = createRoot(mountPoint)
      root.render(<ZoomableImage src={src} alt={alt} className="my-4" />)
    })
    
    hasHydrated.current = true
  }, [])
  
  // This component doesn't render anything itself
  return null
}
