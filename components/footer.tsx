"use client"

import { Truck, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  company: [
    { name: "Quiénes Somos", href: "#quienes-somos" },
    { name: "Misión y Visión", href: "#quienes-somos" },
    { name: "Nuestro Equipo", href: "#quienes-somos" },
    { name: "Certificaciones", href: "#" },
  ],
  services: [
    { name: "Transporte Industrial", href: "#servicios" },
    { name: "Carga Pesada", href: "#servicios" },
    { name: "Logística Integral", href: "#servicios" },
    { name: "Consultoría", href: "#servicios" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  const handleQuoteRequest = () => {
    const subject = "Solicitud de Cotización - TRANSPORTE VENTURA"
    const body =
      "Estimados,\n\nMe gustaría solicitar una cotización para sus servicios de transporte.\n\nPor favor proporcionen información sobre:\n- Tipo de carga:\n- Origen:\n- Destino:\n- Fecha estimada:\n- Observaciones adicionales:\n\nQuedo atento a su respuesta.\n\nSaludos cordiales."
    const mailtoLink = `mailto:operaciones@transventura.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, "_blank")
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Truck className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TRANSPORTE VENTURA</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Líderes en transporte de carga terrestre con más de 30 años de experiencia, brindando soluciones
              logísticas confiables y seguras en todo Panamá.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Villa Las Acacias, Urbanización ANASA, Local #380, Ciudad de Panamá
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>+507 6781-1718</p>
                  <p>+507 6070-7231</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">operaciones@transventura.com</p>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>Lun – Vie: 8:00 AM – 5:00 PM</p>
                  <p>Sáb: 8:00 AM – 12:00 MD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Contáctenos</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              ¿Necesita una cotización personalizada? Nuestro equipo está listo para brindarle la mejor solución
              logística para su empresa.
            </p>
            <Button
              onClick={handleQuoteRequest}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 TRANSPORTE VENTURA. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
