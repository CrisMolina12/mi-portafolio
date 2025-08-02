"use client" // Aseguramos que este componente sea un Client Component

import { useState } from "react" // Importamos useState
import Link from "next/link"
import Image from "next/image"
import { Github, Code, Database, Globe, Smartphone, Maximize } from "lucide-react" // Importamos Maximize
import { ImageViewerModal } from "./image-viewer-modal" // Importamos el nuevo componente modal

// Importamos las imágenes directamente. Next.js las resolverá a su URL pública.
// Asegúrate de que las imágenes estén en public/images/
import AngelesImage from "/images/angeles.png"
import SchaubImage from "/images/schaub.png" // Importamos la imagen de Schaub
import MercadoLibreLogo from "/images/ml.png" // Importamos la nueva imagen de MercadoLibre
import PresupuestoImage from "/images/presupuesto.png" // Importamos la nueva imagen de Presupuesto

export function Projects() {
  const [showImageViewer, setShowImageViewer] = useState(false)
  const [currentImageSrc, setCurrentImageSrc] = useState("")
  const [currentImageAlt, setCurrentImageAlt] = useState("")

  const handleImageClick = (src: string, alt: string) => {
    setCurrentImageSrc(src)
    setCurrentImageAlt(alt)
    setShowImageViewer(true)
  }

  const handleCloseImageViewer = () => {
    setShowImageViewer(false)
    setCurrentImageSrc("")
    setCurrentImageAlt("")
  }

  const projects = [
    {
      title: "Schaub - Gestión de Equipos Deportivos",
      description:
        "Aplicación web completa para la gestión de equipos deportivos con funcionalidades avanzadas de organización de partidos, pizarra táctica interactiva, sistema de calificaciones y gestión de jugadores.",
      image: SchaubImage.src, // Usamos la propiedad .src de la imagen importada
      technologies: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Lucide Icons"],
      category: "Aplicación Web Deportiva",
      status: "Completado",
      githubUrl: "https://github.com/CrisMolina12/Schaub.git",
      features: [
        "Gestión completa de eventos deportivos",
        "Pizarra táctica interactiva con drag & drop",
        "Sistema de calificaciones de jugadores",
        "Chat en tiempo real para cada evento",
        "Gestión de perfiles y asistencias",
        "Dashboard responsivo con modo oscuro",
        "Autenticación y base de datos en tiempo real",
        "Sistema de notificaciones y comentarios",
      ],
    },
    {
      title: "Sistema de Presupuesto de Construcción",
      description:
        "Aplicación web para la gestión y cálculo de presupuestos de construcción, enfocada en la estimación de costos de materiales y otros insumos, excluyendo la mano de obra.",
      image: PresupuestoImage.src, // Usamos la nueva imagen de Presupuesto
      technologies: ["Next.js", "TypeScript", "CSS"],
      category: "Aplicación Web",
      status: "Completado",
      githubUrl: "https://github.com/CrisMolina12/presupuesto_contruccion.git",
      features: [
        "Cálculo automático de presupuestos de materiales",
        "Gestión de insumos y costos directos",
        "Generación de reportes detallados",
        "Interfaz intuitiva para la planificación de proyectos",
      ],
    },
    {
      title: "WooCommerce - MercadoLibre Sync",
      description:
        "Plugin de sincronización entre WooCommerce y MercadoLibre que automatiza la gestión de productos, inventario y pedidos entre ambas plataformas.",
      image: MercadoLibreLogo.src, // Usamos la nueva imagen generada
      technologies: ["PHP", "WordPress", "WooCommerce API", "MercadoLibre API", "MySQL"],
      category: "Plugin E-commerce",
      status: "Completado",
      githubUrl: "https://github.com/CrisMolina12/woo-ml-sync.git",
      features: [
        "Sincronización automática de productos",
        "Gestión unificada de inventario",
        "Integración con APIs de MercadoLibre",
        "Panel de control administrativo",
      ],
    },
    {
      title: "Ángeles Web",
      description:
        "Sistema web diseñado para la gestión de citas y agenda de clientes en negocios de estética y belleza. Permite a los clientes agendar horas y a los administradores gestionar servicios y disponibilidad.",
      image: AngelesImage.src, // Usamos la propiedad .src de la imagen importada
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      category: "Sistema de Agendamiento",
      status: "Completado",
      githubUrl: "https://github.com/CrisMolina12/angelesWeb.git",
      features: [
        "Agendamiento de citas online para clientes",
        "Gestión de disponibilidad de servicios y personal",
        "Panel administrativo para control de agenda",
        "Registro y gestión de clientes",
        "Optimización para dispositivos móviles",
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    const colors = {
      Completado: "bg-primary/10 text-primary",
      "En desarrollo": "bg-secondary/10 text-secondary-foreground",
      Prototipo: "bg-chart-1/10 text-chart-1",
      Planificado: "bg-muted/10 text-muted-foreground",
    }
    return colors[status as keyof typeof colors] || colors["Completado"]
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      "Desarrollo Web": Globe,
      "Backend API": Database,
      "Proyecto Académico": Code,
      "Aplicación Móvil": Smartphone,
      "Sistema de Gestión": Code,
      "Aplicación Web": Globe,
      "Plugin E-commerce": Code,
      "Sitio Web Corporativo": Globe,
      "Aplicación Web Deportiva": Globe,
      "Sistema de Agendamiento": Code,
    }
    return icons[category as keyof typeof icons] || Code
  }

  return (
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground animate-fadeInUp">
          Mis Proyectos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fadeInUp animate-delay-100">
          Proyectos académicos y personales que demuestran mis habilidades técnicas y conocimientos adquiridos durante
          mi formación
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)
            const isPlaceholder = typeof project.image === "string" && project.image.includes("/placeholder.svg")

            return (
              <div
                key={index}
                className={`bg-card border border-border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fadeInUp animate-delay-${200 + index * 100}`}
              >
                {/* Imagen del proyecto con botón de expandir */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 group">
                  {isPlaceholder ? (
                    <img // Usa <img> para placeholders SVG
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image // Usa <Image> de Next.js para imágenes reales
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800} // Ancho de la imagen para la vista de tarjeta
                      height={500} // Alto de la imagen para la vista de tarjeta
                      quality={85} // Calidad de la imagen para la vista de tarjeta
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Overlay con botón de expandir */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleImageClick(project.image, project.title)}
                      className="p-3 rounded-full bg-background text-foreground hover:bg-muted transition-colors"
                      aria-label={`Expandir imagen de ${project.title}`}
                    >
                      <Maximize className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Header del proyecto */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground font-medium">{project.category}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                  {/* Características principales */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 text-base">Características:</h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium transform hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enlaces */}
                  <div className="flex gap-3">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors font-medium text-sm"
                    >
                      <Github className="h-4 w-4" />
                      Ver Código
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Llamada a la acción */}
        <div className="mt-12 text-center bg-card p-8 rounded-2xl shadow-lg border border-border animate-fadeInUp animate-delay-900">
          <h3 className="text-xl font-semibold text-foreground mb-4">¿Quieres ver más?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Estos son algunos de mis proyectos más destacados. Estoy constantemente trabajando en nuevos proyectos y
            aprendiendo nuevas tecnologías. ¡No dudes en contactarme para conocer más sobre mi trabajo!
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold shadow-md"
          >
            Contactar
          </Link>
        </div>
      </div>

      {/* Visor de imágenes modal */}
      {showImageViewer && (
        <ImageViewerModal
          src={currentImageSrc || "/placeholder.svg"}
          alt={currentImageAlt}
          onClose={handleCloseImageViewer}
        />
      )}
    </section>
  )
}
