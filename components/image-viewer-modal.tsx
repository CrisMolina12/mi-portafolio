"use client"

import type React from "react"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

interface ImageViewerModalProps {
  src: string
  alt: string
  onClose: () => void
}

export function ImageViewerModal({ src, alt, onClose }: ImageViewerModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    // Deshabilitar el scroll del cuerpo cuando el modal está abierto
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset" // Habilitar el scroll al cerrar
    }
  }, [onClose])

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-background/80 p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Visor de imagen: ${alt}`}
    >
      <div
        ref={modalRef}
        className="relative max-w-5xl max-h-90vh w-full h-full bg-card rounded-lg overflow-hidden flex items-center justify-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
          aria-label="Cerrar visor de imagen"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="relative w-full h-full">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill // La imagen llenará el contenedor
            style={{ objectFit: "contain" }} // Asegura que la imagen se ajuste sin recortarse
            quality={90} // Alta calidad para la vista expandida
            className="p-4" // Pequeño padding para que no toque los bordes del modal
          />
        </div>
      </div>
    </div>
  )
}
