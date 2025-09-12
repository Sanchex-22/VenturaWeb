"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    title: "Transporte de Contenedores",
    subtitle: "Soluciones logísticas confiables para tu empresa",
    description: "Más de 30 años moviendo contenedores con seguridad y puntualidad",
    image: "/heavy-duty-truck-carrying-shipping-container-on-pa.jpg",
  },
  {
    id: 2,
    title: "Cobertura Nacional",
    subtitle: "Conectamos puertos con todo Panamá",
    description: "Red de distribución desde puertos principales hasta el interior del país",
    image: "/modern-container-port-terminal-with-trucks-and-shi.jpg",
  },
  {
    id: 3,
    title: "Patio de Almacenamiento",
    subtitle: "Espacios seguros para tu carga",
    description: "Patio propio en Las Acacias para almacenamiento temporal y alquiler de espacios",
    image: "/container-storage-yard-with-organized-shipping-con.jpg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-4 text-balance">{slide.subtitle}</p>
              <p className="text-lg mb-8 text-pretty leading-relaxed">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
