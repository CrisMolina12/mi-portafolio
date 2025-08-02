import { Calendar, Award, Target, BookOpen, MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Sobre mí</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Información personal */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Mi perfil profesional</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Soy Cristian Manuel Molina Álvarez, Ingeniero en Informática recién titulado de Duoc UC. A mis 23 años,
                tengo una sólida formación académica en desarrollo de software y tecnologías de la información.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Mi formación me ha proporcionado conocimientos profundos en desarrollo de software, bases de datos,
                gestión de proyectos y metodologías de trabajo en equipo. Tengo una gran capacidad de adaptación,
                resolución de problemas y un fuerte compromiso con el aprendizaje continuo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Estoy emocionado por comenzar mi carrera profesional y busco oportunidades donde pueda aplicar mis
                conocimientos técnicos en proyectos desafiantes, contribuir al crecimiento de la organización y seguir
                desarrollándome como profesional.
              </p>
            </div>

            {/* Información personal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl shadow-sm border border-border">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Edad</p>
                  <p className="text-muted-foreground">23 años</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl shadow-sm border border-border">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">Chiguayante, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Objetivos y fortalezas */}
          <div className="space-y-6">
            <div className="bg-card border-2 border-border p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Objetivos Profesionales
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Desarrollar aplicaciones web modernas y funcionales</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Especializarme en tecnologías de desarrollo full-stack</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Contribuir en proyectos de impacto tecnológico</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Crecer profesionalmente en un ambiente colaborativo</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Mantenerme actualizado con las últimas tecnologías</p>
                </li>
              </ul>
            </div>

            {/* Fortalezas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-primary/5 rounded-xl shadow-sm">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-lg text-primary mb-1">Recién</h4>
                <p className="text-muted-foreground font-semibold">Titulado</p>
                <p className="text-sm text-muted-foreground">Enero 2025</p>
              </div>
              <div className="text-center p-6 bg-accent/5 rounded-xl shadow-sm">
                <Award className="h-8 w-8 text-accent-foreground mx-auto mb-2" />
                <h4 className="font-bold text-lg text-accent-foreground mb-1">Duoc UC</h4>
                <p className="text-muted-foreground font-semibold">Formación</p>
                <p className="text-sm text-muted-foreground">2021-2024</p>
              </div>
            </div>

            {/* Motivación */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">¿Por qué elegir trabajar conmigo?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Formación académica sólida y actualizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Gran motivación y ganas de aprender</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Capacidad de adaptación y trabajo en equipo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Compromiso con la excelencia y mejora continua</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
