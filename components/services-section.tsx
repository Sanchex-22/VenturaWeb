import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Package, MapPin, ArrowRight, Warehouse, Shield } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Transporte de Contenedores",
    description: "Transporte de contenedores desde y hacia los principales puertos del país.",
    features: ["Conexión con puertos", "Equipos especializados", "Seguimiento GPS"],
  },
  {
    icon: MapPin,
    title: "Conexión con Zonas Francas",
    description: "Conexión con zonas francas y parques industriales.",
    features: ["Zonas francas", "Parques industriales", "Rutas optimizadas"],
  },
  {
    icon: Package,
    title: "Cargas Pesadas y Especiales",
    description: "Movilización de cargas pesadas y especiales, con escoltas cuando es necesario.",
    features: ["Cargas especiales", "Escoltas incluidas", "Permisos especiales"],
  },
  {
    icon: Warehouse,
    title: "Patio de Almacenamiento",
    description: "Patio propio para almacenamiento temporal de contenedores y alquiler de espacios para equipos.",
    features: ["Almacenamiento temporal", "Ubicación estratégica", "Seguridad 24/7"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Con cada servicio garantizamos eficiencia, cumplimiento y tranquilidad para nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Más información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance text-black">
                Equipos y Personal Especializado
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Equipos en óptimas condiciones, con mantenimiento actualizado y estándares de seguridad.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Personal experto en logística portuaria y manejo de documentación.</p>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
