// components/ContactSection.tsx - Enhanced with anti-spam and animations
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Loader2, CheckCircle2, XCircle } from "lucide-react";

// Ya no usaremos framer-motion, ni useToast
// import { AnimatePresence, motion } from "framer-motion"
// import { useToast } from "@/components/ui/use-toast"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

// --- Nuevo componente de Alerta de Mensaje (sin framer-motion) ---
interface AlertMessageProps {
  type: "success" | "error" | null;
  message: string;
  onClose: () => void; // Función para cerrar la alerta
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  type,
  message,
  onClose,
}) => {
  if (!type || !message) return null;

  const classes = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
  };

  const icons = {
    success: <CheckCircle2 className="h-5 w-5" />,
    error: <XCircle className="h-5 w-5" />, // Usamos XCircle para cerrar, pero puede ser una X simple también.
  };

  // Autocierre después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5 segundos
    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta o el tipo/mensaje cambian
  }, [type, message, onClose]);

  return (
    <div
      className={`p-4 rounded-md border flex items-center justify-between shadow-md mb-6 transition-opacity duration-300 ${classes[type]}`}
      role="alert" // Para accesibilidad
    >
      <div className="flex items-center">
        {icons[type]}
        <p className="ml-3 text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={onClose}
        className={`ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-md inline-flex h-8 w-8 focus:ring-2 ${
          type === "success"
            ? "hover:bg-green-200 focus:ring-green-400"
            : "hover:bg-red-200 focus:ring-red-400"
        }`}
        aria-label="Cerrar alerta"
      >
        {/* Usamos una X simple para el botón de cerrar la alerta */}
        <XCircle className="h-5 w-5" />
      </button>
    </div>
  );
};
// --- Fin del componente de Alerta de Mensaje ---

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "", // Honeypot field - should remain empty
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estados para el nuevo sistema de alerta
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      // Silently reject bot submissions
      return;
    }

    setIsSubmitting(true);
    setAlertType(null); // Reset alert on new submission
    setAlertMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          // Don't send honeypot field to server
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertType("success");
        setAlertMessage(
          "¡Cotización enviada exitosamente! Te estaremos contactando pronto. Gracias por tu interés."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          website: "", // Reset honeypot
        });
      } else {
        setAlertType("error");
        setAlertMessage(
          data.message ||
            "Hubo un problema al enviar tu solicitud. Intenta de nuevo."
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setAlertType("error");
      setAlertMessage(
        "No se pudo conectar con el servidor. Por favor, revisa tu conexión a internet."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const message =
    "Hola, me interesa conocer más sobre sus servicios de transporte de carga.";
  const phoneNumber = "+50767811718"; // Replace with actual WhatsApp number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Función para cerrar la alerta manualmente
  const handleCloseAlert = () => {
    setAlertType(null);
    setAlertMessage("");
  };

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Estamos aquí para ayudarte. Contáctanos para una cotización
            personalizada o para resolver cualquier consulta sobre nuestros
            servicios.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Solicitar Cotización</h3>

              {/* Aquí mostramos el AlertMessage de forma condicional, sin AnimatePresence */}
              {alertType && alertMessage && (
                <AlertMessage
                  type={alertType}
                  message={alertMessage}
                  onClose={handleCloseAlert}
                />
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
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
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+507 0000-0000"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
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
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Solicitud"
                  )}
                </Button>
              </form>

              <div className="w-auto mt-6 pt-6 border-t border-border flex justify-center">
                <div className="w-full flex justify-center border-green-500 border rounded py-2">
                  <a
                    href={url}
                    target="_blank"
                    className="w-full flex justify-center border-green-500 text-green-600 bg-transparent transition-colors duration-200"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    <span>Contactar por WhatsApp</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
