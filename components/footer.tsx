import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información personal */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Cristian Molina</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ingeniero en Informática recién titulado, apasionado por el desarrollo de software y siempre dispuesto a
              enfrentar nuevos desafíos tecnológicos.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Chiguayante, Chile</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-muted-foreground hover:text-primary transition-colors">
                  Educación
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:cristianmolinauc@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>cristianmolinauc@gmail.com</span>
              </a>
              <a
                href="tel:+56944546190"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(+569) 44546190</span>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://github.com/CrisMolina12" // Enlace de GitHub actualizado
                className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/cristian-molina-a14989221" // Enlace de LinkedIn actualizado
                className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:cristianmolinauc@gmail.com"
                className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2025 Cristian Manuel Molina Álvarez. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
