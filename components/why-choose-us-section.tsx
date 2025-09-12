import { Truck, Shield, Clock, Building2, Users, FileText } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Truck,
      title: "Experiencia comprobada",
      description: "Más de 30 años en el transporte de contenedores a nivel nacional.",
    },
    {
      icon: Shield,
      title: "Seguridad garantizada",
      description: "Flota en óptimas condiciones y personal altamente capacitado.",
    },
    {
      icon: Clock,
      title: "Cumplimiento y puntualidad",
      description: "Respetamos los tiempos de entrega y las necesidades de cada cliente.",
    },
    {
      icon: Building2,
      title: "Cobertura nacional",
      description: "Conexión desde los principales puertos y zonas francas hasta el interior del país.",
    },
    {
      icon: Users,
      title: "Atención personalizada",
      description: "Somos una empresa familiar que valora la cercanía y la confianza.",
    },
    {
      icon: FileText,
      title: "Respaldo integral",
      description: "Apoyo en procesos logísticos y documentación portuaria.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            En Transporte Ventura ofrecemos más que transporte: brindamos confianza y tranquilidad en cada servicio.
            Estas son algunas de las razones por las que nuestros clientes nos prefieren:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="bg-blue-600 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              En cada movimiento, demostramos que somos más que un proveedor de transporte:
              <span className="font-semibold"> somos un aliado estratégico para tu negocio.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
