"use client";

import {
  Truck,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

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
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];
const message =
  "Hola, me interesa conocer más sobre sus servicios de transporte de carga.";
const phoneNumber = "+50767811718"; // Replace with actual WhatsApp number
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
export function Footer() {
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
              Líderes en transporte de carga terrestre con más de 30 años de
              experiencia, brindando soluciones logísticas confiables y seguras
              en todo Panamá.
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
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
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
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
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
                  Villa Las Acacias, Urbanización ANASA, Local #380, Ciudad de
                  Panamá
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
                <p className="text-muted-foreground text-sm">
                  operaciones@transventura.com
                </p>
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

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TRANSPORTE VENTURA. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
        <div
          id="whatsapp-button"
          className="btn-whatsapp-pulse-border fixed bottom-2 right-2 z-50 grid place-items-center rounded-full bg-green-600 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 md:bottom-6 md:right-6 print:hidden"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 15.286 15.411"
            >
              <g transform="translate(-1.69 0)">
                <path
                  d="M8.959.009A7.646,7.646,0,0,0,2.522,11.114l-.811,3.939a.3.3,0,0,0,.36.35l3.86-.914A7.644,7.644,0,1,0,8.959.009Zm4.605,11.866A5.988,5.988,0,0,1,6.67,13l-.538-.268L3.766,13.3l.5-2.418L4,10.36A5.99,5.99,0,0,1,5.1,3.412a5.985,5.985,0,1,1,8.463,8.463Z"
                  transform="translate(0 0)"
                  fill="#FAFEFF"
                ></path>
                <path
                  d="M112.141,112.759l-1.48-.425a.552.552,0,0,0-.546.144l-.362.369a.539.539,0,0,1-.586.124,7.9,7.9,0,0,1-2.55-2.248.539.539,0,0,1,.043-.6l.316-.369a.552.552,0,0,0,.068-.561l-.623-1.409a.552.552,0,0,0-.862-.2,2.49,2.49,0,0,0-.963,1.469c-.105,1.037.34,2.345,2.022,3.915,1.943,1.814,3.5,2.053,4.513,1.808a2.49,2.49,0,0,0,1.324-1.154A.552.552,0,0,0,112.141,112.759Z"
                  transform="translate(-99.098 -103.458)"
                  fill="#FAFEFF"
                ></path>
              </g>
            </svg>

            <span className="absolute -right-0 -top-2 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
              1
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
