import { Briefcase, Calendar, MapPin, Wrench, HardHat } from "lucide-react"

export function Experience() {
  // Asegúrate de que sea 'export function' y no 'export default function'
  const experiences = [
    {
      title: "Asistente de Carpintería",
      year: "2023",
      icon: Wrench,
      color: "emerald", // Usando emerald como color principal
      responsibilities: [
        "Apoyo en tareas generales de carpintería",
        "Asistencia en el uso de herramientas básicas",
        "Colaboración en el mantenimiento del taller",
        "Organización de materiales y herramientas",
      ],
      skills: ["Trabajo manual", "Atención al detalle", "Organización", "Responsabilidad"],
    },
    {
      title: "Asistente de Armador de Fierro",
      year: "2022",
      icon: HardHat,
      color: "orange", // Un color secundario para variedad
      responsibilities: [
        "Apoyo en labores básicas de construcción",
        "Asistencia en el manejo de materiales",
        "Colaboración con el equipo de trabajo",
        "Seguimiento de protocolos de seguridad",
      ],
      skills: ["Trabajo en equipo", "Resistencia física", "Seguridad laboral", "Adaptabilidad"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-primary/5 border-primary/20",
      orange: "bg-accent/5 border-accent/20",
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  const getIconColor = (color: string) => {
    const colors = {
      emerald: "text-primary",
      orange: "text-accent-foreground",
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <section id="experience" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Experiencia Laboral</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experiencia práctica que me ha permitido desarrollar habilidades de trabajo en equipo, responsabilidad y
          adaptabilidad en diferentes entornos laborales
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            const colorClasses = getColorClasses(exp.color).split(" ")
            const bgClass = colorClasses[0]
            const borderClass = colorClasses[1]
            const iconColorClass = getIconColor(exp.color)

            return (
              <div
                key={index}
                className={`bg-card rounded-3xl shadow-lg p-8 border-l-4 ${borderClass.replace("border-", "border-")} transform hover-shadow-xl transition-shadow duration-300 transform hover-translate-y-1`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Información principal */}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${bgClass}`}>
                      <IconComponent className={`h-8 w-8 ${iconColorClass}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Chiguayante, Chile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  {/* Responsabilidades */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                      Responsabilidades
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Habilidades desarrolladas */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Habilidades Desarrolladas</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${bgClass} ${iconColorClass}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mensaje adicional */}
        <div className="mt-12 text-center bg-card p-8 rounded-3xl shadow-lg border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Experiencia Complementaria</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aunque mi experiencia laboral ha sido en áreas diferentes a la informática, estas experiencias me han
            permitido desarrollar habilidades fundamentales como el trabajo en equipo, la responsabilidad, la
            adaptabilidad y la capacidad de aprender rápidamente. Estas competencias son transferibles y valiosas para
            cualquier entorno de desarrollo de software.
          </p>
        </div>
      </div>
    </section>
  )
}
