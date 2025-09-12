"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María González",
    company: "Industrias Metalúrgicas SA",
    role: "Gerente de Logística",
    content:
      "TransCarga Pro ha sido nuestro socio logístico por más de 5 años. Su profesionalismo y puntualidad son excepcionales.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    company: "Construcciones del Norte",
    role: "Director de Operaciones",
    content:
      "La confiabilidad de sus servicios nos ha permitido cumplir con todos nuestros proyectos a tiempo. Altamente recomendados.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    id: 3,
    name: "Ana Martínez",
    company: "Petroquímica Industrial",
    role: "Jefa de Compras",
    content:
      "Su equipo especializado en cargas peligrosas maneja nuestros envíos con la máxima seguridad y cumplimiento normativo.",
    rating: 5,
    image: "/professional-woman-engineer.png",
  },
]

const clients = [
  { name: "Industrias Metalúrgicas", logo: "/metallic-company-logo.jpg" },
  { name: "Construcciones del Norte", logo: "/construction-company-logo.png" },
  { name: "Petroquímica Industrial", logo: "/petrochemical-company-logo.jpg" },
  { name: "Minera del Sur", logo: "/mining-company-logo.jpg" },
  { name: "Energía Renovable", logo: "/renewable-energy-logo.jpg" },
  { name: "Manufactura Avanzada", logo: "/manufacturing-company-logo.png" },
]

export function ClientsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="clientes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nuestros Clientes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            La confianza de empresas líderes respalda nuestro compromiso con la excelencia en cada servicio que
            brindamos.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`transition-opacity duration-1000 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <CardContent className="p-8 md:p-12 text-center">
                  <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
                  <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
