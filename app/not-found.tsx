"use client"
import { RefreshCcw } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const [isHovering, setIsHovering] = useState(false)
  const router = useRouter()

  const handleRefresh = () => {
    router.push("/")
  }

  return (
    <html lang="es">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-green-200 flex flex-col items-center justify-center px-4 overflow-hidden relative">
          {/* Carretera */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-800 transform perspective-1000 rotate-x-12">
            {/* Líneas de la carretera */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-400 transform -translate-y-1/2">
              <div className="flex space-x-8 animate-pulse">
                <div className="w-16 h-1 bg-yellow-400"></div>
                <div className="w-16 h-1 bg-transparent"></div>
                <div className="w-16 h-1 bg-yellow-400"></div>
                <div className="w-16 h-1 bg-transparent"></div>
                <div className="w-16 h-1 bg-yellow-400"></div>
              </div>
            </div>
          </div>

          {/* Camión animado */}
          <div className="absolute bottom-20 left-0 animate-bounce">
            <div className="animate-[moveRight_4s_ease-in-out_infinite] relative">
              <svg width="120" height="60" viewBox="0 0 120 60" className="drop-shadow-lg">
                {/* Cabina del camión */}
                <rect x="10" y="20" width="30" height="25" fill="#e74c3c" rx="3" />
                {/* Parabrisas */}
                <rect x="12" y="22" width="26" height="15" fill="#3498db" rx="2" />
                {/* Remolque */}
                <rect x="40" y="15" width="50" height="30" fill="#34495e" rx="3" />
                {/* Ruedas */}
                <circle cx="25" cy="50" r="8" fill="#2c3e50" />
                <circle cx="25" cy="50" r="5" fill="#95a5a6" />
                <circle cx="55" cy="50" r="8" fill="#2c3e50" />
                <circle cx="55" cy="50" r="5" fill="#95a5a6" />
                <circle cx="75" cy="50" r="8" fill="#2c3e50" />
                <circle cx="75" cy="50" r="5" fill="#95a5a6" />
                {/* Detalles */}
                <rect x="42" y="25" width="46" height="2" fill="#7f8c8d" />
                <rect x="42" y="30" width="46" height="2" fill="#7f8c8d" />
              </svg>
            </div>
          </div>

          {/* Nubes animadas */}
          <div className="absolute top-10 left-10 animate-[float_6s_ease-in-out_infinite]">
            <div className="w-16 h-8 bg-white rounded-full opacity-80"></div>
          </div>
          <div className="absolute top-20 right-20 animate-[float_8s_ease-in-out_infinite_reverse]">
            <div className="w-12 h-6 bg-white rounded-full opacity-70"></div>
          </div>

          <div className="flex flex-col items-center space-y-8 z-10">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-800 font-mono drop-shadow-lg">
              404
            </h1>
            <p className="text-xl md:text-3xl font-light text-gray-700 tracking-wide text-center">
              ¡Ups! Esta ruta no existe
            </p>
            <p className="text-lg text-gray-600 text-center max-w-md">
              Parece que el camión se perdió en el camino. Volvamos a la ruta principal.
            </p>

            <button
              onClick={handleRefresh}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="mt-6 px-6 py-3 bg-primary hover:bg-primary text-white rounded-lg transition-all duration-300 relative uppercase font-bold
                         flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-75 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <RefreshCcw
                className={`mr-2 transition-transform duration-300 ${isHovering ? "rotate-180" : ""}`}
                size={16}
              />
              Volver al inicio
            </button>
          </div>

          <style jsx>{`
            @keyframes moveRight {
              0%, 100% { transform: translateX(-100px); }
              50% { transform: translateX(calc(100vw + 100px)); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
        </div>
      </body>
    </html>
  )
}
