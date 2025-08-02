import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Educación</h2>

        <div className="space-y-8">
          {/* Educación Superior */}
          <div className="bg-card rounded-3xl shadow-lg p-8 border-l-4 border-primary">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Ingeniería en Informática</h3>
                  <p className="text-lg text-primary font-semibold">Instituto Profesional Duoc UC</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>2021 - 2024</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Sede Concepción</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Detalles Académicos</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      <strong>Título Profesional</strong> obtenido en enero 2025
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      <strong>Registro N°:</strong> 252265
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Áreas de Especialización</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Desarrollo de Software</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Bases de Datos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Gestión de Proyectos Informáticos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Análisis y Diseño de Sistemas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Educación Secundaria */}
          <div className="bg-card rounded-3xl shadow-lg p-8 border-l-4 border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-muted rounded-full">
                  <GraduationCap className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Educación Secundaria</h3>
                  <p className="text-muted-foreground font-semibold">Liceo John F. Kennedy</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2016 - 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificaciones adicionales */}
        <div className="mt-12 text-center bg-card p-8 rounded-3xl shadow-md border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Certificaciones y Validaciones</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Título profesional validado bajo Firma Electrónica Avanzada según Ley N° 19.799. Certificación verificable
            mediante código QR oficial del Instituto Profesional Duoc UC.
          </p>
        </div>
      </div>
    </section>
  )
}
