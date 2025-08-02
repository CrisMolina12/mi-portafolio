"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, User, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado correctamente! Te contactaré pronto.")

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-secondary to-accent/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Contacto</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ¿Tienes una oportunidad laboral o proyecto interesante? ¡Me encantaría conocer más detalles!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Información de Contacto</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estoy disponible para oportunidades laborales, colaboraciones en proyectos o simplemente para conversar
                sobre tecnología y desarrollo de software.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:cristianmolinauc@gmail.com" className="text-primary hover:text-blue-800">
                      cristianmolinauc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-lg">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <a href="tel:+56944546190" className="text-accent-foreground hover:text-green-800">
                      (+569) 44546190
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-lg">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ubicación</p>
                    <p className="text-secondary-foreground">
                      Pasaje Los Gladiolos, 2830
                      <br />
                      Chiguayante, Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Disponibilidad</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Disponible para trabajo inmediato</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                  <span className="text-muted-foreground">Abierto a oportunidades remotas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary-foreground rounded-full"></div>
                  <span className="text-muted-foreground">Interesado en proyectos desafiantes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-card rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-blue-600" />
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-muted-foreground mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-muted-foreground mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-muted-foreground mb-2">
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="oportunidad-laboral">Oportunidad Laboral</option>
                  <option value="colaboracion">Colaboración en Proyecto</option>
                  <option value="consultoria">Consultoría Técnica</option>
                  <option value="networking">Networking</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-muted-foreground mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Campos obligatorios. Responderé en un plazo máximo de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
