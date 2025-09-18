import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Heart, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Confianza",
    description: "Cumplimos lo que prometemos.",
  },
  {
    icon: Clock,
    title: "Responsabilidad",
    description: "Transportamos con seguridad y puntualidad.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Superamos expectativas en cada servicio.",
  },
  {
    icon: Heart,
    title: "Cercanía",
    description: "Valoramos las relaciones y la atención personalizada.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Evolucionamos con las necesidades del mercado.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protegemos cada carga como si fuera nuestra.",
  },
]

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Quiénes Somos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            En Transporte Ventura somos una empresa familiar con más de 30 años de experiencia en el transporte de
            contenedores a nivel nacional. Nos caracteriza la confianza, seguridad y puntualidad en cada movimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Nuestra Historia</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Lo que comenzó como un sueño familiar se ha convertido en una empresa sólida y reconocida en el transporte
              de carga terrestre. Durante más de tres décadas hemos recorrido Panamá llevando no solo contenedores, sino
              también proyectos, oportunidades y el esfuerzo de nuestros clientes hasta su destino.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nuestra historia está marcada por el trabajo constante, la dedicación de nuestro equipo y la confianza que
              depositan en nosotros quienes nos eligen cada día. En cada contenedor llevamos más que mercancía: llevamos
              los sueños y proyectos de quienes confían en nosotros.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <img
                src="/truck-with-container-highway.jpeg"
                alt="Camión TRANSPORTE VENTURA en carretera"
                className="rounded-lg shadow-md w-full h-36 object-cover"
              />
              <img
                src="/trucks-industrial-yard.jpg"
                alt="Flota en patio industrial"
                className="rounded-lg shadow-md w-full h-36 object-cover"
              />
            </div>
          </div>
          <div className="relative w-full h-full">
            <img
              src="/three-trucks-evening-lineup.jpeg"
              alt="Flota de TRANSPORTE VENTURA"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Misión y Visión</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4 text-primary">Misión</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Brindar soluciones logísticas seguras, eficientes y confiables en el transporte de contenedores a
                  nivel nacional, superando las expectativas de nuestros clientes con un servicio responsable y de
                  calidad.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4 text-primary">Visión</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la empresa de transporte de contenedores más confiable de Panamá, reconocida por su excelencia
                  operativa, su cercanía con los clientes y su compromiso con la innovación y la seguridad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Nuestros Valores</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
