import { Code, Database, Users, Lightbulb, Settings, MessageSquare } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Desarrollo de Software",
      icon: Code,
      color: "primary", // Usando primary como color principal
      skills: [
        "Programación Orientada a Objetos",
        "Desarrollo Web",
        "Metodologías Ágiles",
        "Análisis de Sistemas",
        "Diseño de Software",
        "Testing y Debugging",
      ],
    },
    {
      title: "Bases de Datos",
      icon: Database,
      color: "accent", // Un color secundario para variedad
      skills: [
        "Diseño de BD Relacionales",
        "SQL Avanzado",
        "Modelado de Datos",
        "Optimización de Consultas",
        "Administración de BD",
        "Integridad de Datos",
      ],
    },
    {
      title: "Gestión de Proyectos",
      icon: Settings,
      color: "secondary",
      skills: [
        "Planificación de Proyectos",
        "Metodologías SCRUM",
        "Gestión de Recursos",
        "Control de Calidad",
        "Documentación Técnica",
        "Seguimiento y Control",
      ],
    },
    {
      title: "Trabajo en Equipo",
      icon: Users,
      color: "chart-4",
      skills: [
        "Colaboración Efectiva",
        "Liderazgo de Equipos",
        "Coordinación de Tareas",
        "Resolución de Conflictos",
        "Adaptabilidad",
        "Mentoría Técnica",
      ],
    },
    {
      title: "Resolución de Problemas",
      icon: Lightbulb,
      color: "chart-1",
      skills: [
        "Análisis Crítico",
        "Pensamiento Lógico",
        "Debugging Avanzado",
        "Optimización de Procesos",
        "Innovación Técnica",
        "Toma de Decisiones",
      ],
    },
    {
      title: "Comunicación Efectiva",
      icon: MessageSquare,
      color: "destructive", // Un tono de rojo más suave
      skills: [
        "Presentaciones Técnicas",
        "Documentación Clara",
        "Comunicación Cliente",
        "Capacitación de Usuarios",
        "Reportes de Progreso",
        "Negociación Técnica",
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      "primary": "bg-primary/5 border-primary/20 text-primary",
      "accent": "bg-accent/5 border-accent/20 text-accent-foreground",
      "secondary": "bg-secondary/5 border-secondary/20 text-secondary-foreground",
      "chart-4": "bg-chart-4/5 border-chart-4/20 text-chart-4",
      "chart-1": "bg-chart-1/5 border-chart-1/20 text-chart-1",
      "destructive": "bg-destructive/5 border-destructive/20 text-destructive",
    }
    return colors[color as keyof typeof colors] || colors["primary"]
  }

  const getIconColor = (color: string) => {
    const colors = {
      "primary": "text-primary",
      "accent": "text-accent-foreground",
      "secondary": "text-secondary-foreground",
      "chart-4": "text-chart-4",
      "chart-1": "text-chart-1",
      "destructive": "text-destructive",
    }
    return colors[color as keyof typeof colors] || colors["primary"]
  }

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Competencias Profesionales</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Habilidades técnicas y blandas desarrolladas durante mi formación académica y experiencia laboral
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.title}
                className="bg-card border-2 border-border rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-full ${getColorClasses(category.color).split(" ")[0]}`}>
                    <IconComponent className={`h-6 w-6 ${getIconColor(category.color)}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-4 py-2 rounded-lg border ${getColorClasses(category.color)} text-sm font-medium`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tecnologías adicionales */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Tecnologías y Herramientas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Java",
              "Python",
              "JavaScript",
              "SQL",
              "HTML/CSS",
              "Git",
              "MySQL",
              "PostgreSQL",
              "MongoDB",
              "React",
              "Node.js",
              "Spring Boot",
              "Docker",
              "Linux",
              "Windows Server",
              "Agile/Scrum",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted text-foreground rounded-full font-medium hover:bg-muted/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
