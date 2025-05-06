"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { useIsMobile } from "@/hooks/use-mobile"
import { Maximize2, X } from "lucide-react"

interface ZoomableImageProps {
  src: string
  alt?: string
  className?: string
}

export function ZoomableImage({ src, alt = "", className = "" }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const isMobile = useIsMobile()

  // Ensure the src starts with a slash if it doesn't already and isn't an external URL
  const imageSrc = src.startsWith("http") ? src : (src.startsWith("/") ? src : `/${src}`)

  // Reset zoom when dialog closes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setScale(1)
    }
  }

  // Handle touch events for mobile pinch zoom only
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Store the initial distance between two fingers for pinch zoom
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      // @ts-ignore - Adding a custom property to the event
      e.currentTarget.dataset.initialPinchDistance = distance
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Handle pinch zoom
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      
      // @ts-ignore - Reading the custom property from the event
      const initialDistance = parseFloat(e.currentTarget.dataset.initialPinchDistance) || distance
      
      if (initialDistance) {
        const delta = (distance - initialDistance) * 0.01
        const newScale = Math.min(Math.max(0.5, scale + delta), 5)
        setScale(newScale)
        // @ts-ignore - Updating the custom property
        e.currentTarget.dataset.initialPinchDistance = distance
      }
    }
  }

  return (
    <>
      <div className={`relative group ${className}`}>
        <img
          src={imageSrc}
          alt={alt}
          className="max-w-full h-auto rounded cursor-pointer transition-all hover:brightness-95"
          onClick={() => setIsOpen(true)}
          onError={(e) => {
            // If image fails to load, replace with placeholder
            e.currentTarget.src = '/placeholder.png';
          }}
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white p-1 rounded-full shadow-sm">
            <Maximize2 size={16} className="text-[#0000FF]" />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent 
          className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none [&>button]:hidden"
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
        >
          <DialogTitle>
            <VisuallyHidden>Image Preview: {alt || "Image"}</VisuallyHidden>
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={imageSrc}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain"
              style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.1s ease-out'
              }}
              onError={(e) => {
                // If image fails to load, replace with placeholder
                e.currentTarget.src = '/placeholder.png';
              }}
            />
            <button 
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={24} className="text-[#0000FF]" />
            </button>
            
            {isMobile && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-xs bg-white/80 py-1.5 px-3 mx-auto w-fit rounded-full shadow-sm">
                <span className="text-gray-800">Pinch to zoom</span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
