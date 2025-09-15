import { MapPin, Ship, Building2, Truck } from "lucide-react"

export function RoutesCoverageSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🌍</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Rutas y Cobertura Nacional</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Transporte Ventura brindamos soluciones logísticas para la importación y exportación de contenedores,
            conectando los principales puertos y zonas estratégicas del país con el interior de Panamá.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Puertos Principales */}
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ship className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Puertos Principales</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Balboa</li>
              <li>• Manzanillo</li>
              <li>• PSA</li>
              <li>• CCT</li>
              <li>• Cristóbal</li>
            </ul>
          </div>

          {/* Cobertura Interior */}
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cobertura Interior</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Chiriquí</li>
              <li>• Azuero</li>
              <li>• Santiago</li>
              <li>• Penonomé</li>
              <li>• Colón y otras regiones</li>
            </ul>
          </div>
        </div>

        {/* Mapa Visual Representativo */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Ship className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-gray-600">Puertos</span>
            </div>
            <div className="w-8 border-t-2 border-dashed border-gray-400"></div>
            <Truck className="w-6 h-6 text-orange-600" />
            <div className="w-8 border-t-2 border-dashed border-gray-400"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-green-600" />
              <span className="text-sm text-gray-600">Destinos</span>
            </div>
          </div>
          <p className="text-lg font-medium text-gray-800 mb-2">
            Gracias a nuestra experiencia, ofrecemos un servicio seguro y puntual en la movilización de carga de
            importación y exportación
          </p>
          <p className="text-gray-600">Garantizando eficiencia en cada kilómetro recorrido</p>
        </div>
      </div>
    </section>
  )
}
