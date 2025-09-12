"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Villa Las Acacias, Urbanización ANASA,\n Local #380, Ciudad de Panamá",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+507 6781-1718\n+507 6070-7231",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@transporteventura.com\nventas@transporteventura.com",
  },
  {
    icon: Clock,
    title: "Horarios",
    content: "Lun – Vie: 8:00 AM – 5:00 PM\nSáb: 8:00 AM – 12:00 MD",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleWhatsAppContact = () => {
    const message = "Hola, me interesa conocer más sobre sus servicios de transporte de carga."
    const phoneNumber = "+50767811718" // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Estamos aquí para ayudarte. Contáctanos para una cotización personalizada o para resolver cualquier consulta
            sobre nuestros servicios.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Solicitar Cotización</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+507 0000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe tu necesidad de transporte: tipo de carga, origen, destino, fechas, etc."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Enviar Solicitud
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  onClick={handleWhatsAppContact}
                  variant="outline"
                  size="lg"
                  className="w-full border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
