import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-background to-secondary relative overflow-hidden"
    >
      {/* Fondo con formas sutiles para un toque moderno */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto py-12 relative z-10">
        {/* Foto de perfil con animación */}
        <div className="mb-8 animate-scaleIn">
          <div className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-background shadow-xl bg-primary text-primary-foreground flex items-center justify-center text-7xl font-bold transform hover:scale-105 transition-transform duration-300">
            CM
          </div>
        </div>

        {/* Título principal con animación */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight animate-fadeInUp animate-delay-200">
          <span className="text-primary">Cristian</span> Molina
        </h1>

        {/* Subtítulo y descripción con animación */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-semibold animate-fadeInUp animate-delay-300">
          Ingeniero en Informática
        </p>
        <p className="text-lg text-muted-foreground mb-8 animate-fadeInUp animate-delay-400">
          Recién egresado • Duoc UC • Chiguayante, Chile
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-500">
          Ingeniero en Informática recién titulado con sólida formación en desarrollo de software, bases de datos y
          gestión de proyectos. Apasionado por la tecnología y con gran capacidad de trabajo en equipo. Busco
          oportunidades para aplicar mis conocimientos y seguir creciendo profesionalmente en el área de desarrollo de
          software.
        </p>

        {/* Información de contacto rápida con animación */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground animate-fadeInUp animate-delay-600">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>cristianmolinauc@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>(+569) 44546190</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Chiguayante, Chile</span>
          </div>
        </div>

        {/* Botones de acción con animación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp animate-delay-700">
          <Link
            href="#projects"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver mis proyectos
          </Link>
          <Link
            href="#contact"
            className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-1"
          >
            Contactar
          </Link>
          <Link
            href="/CV_CRISTIAN.PDF"
            download="CV_CRISTIAN.PDF"
            className="flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full hover:bg-foreground/90 transition-all duration-300 font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-1"
          >
            <Download className="h-4 w-4" />
            Descargar CV
          </Link>
        </div>

        {/* Enlaces sociales con animación */}
        <div className="flex justify-center space-x-6 animate-fadeInUp animate-delay-800">
          <Link
            href="https://github.com/CrisMolina12"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-background/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-7 w-7" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/cristian-molina-a14989221"
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-background/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-7 w-7" />
          </Link>
          <Link
            href="mailto:cristianmolinauc@gmail.com"
            className="text-muted-foreground hover:text-destructive transition-colors p-2 rounded-full hover:bg-background/50"
          >
            <Mail className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </section>
  )
}
