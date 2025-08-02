import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Configuramos la fuente que vamos a usar
const inter = Inter({ subsets: ["latin"] })

// Metadatos para SEO (lo que aparece en Google)
export const metadata: Metadata = {
  title: "Mi Portafolio - Desarrollador Web",
  description: "Portafolio personal de [Tu Nombre], desarrollador web especializado en React y Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Aquí se renderiza todo el contenido de las páginas */}
        {children}
      </body>
    </html>
  )
}
