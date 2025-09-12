import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const founder = {
    name: "Buenaventura Torres",
    position: "Fundador & Visionario",
    description:
      "Líder inspirador que transformó un sueño en una empresa familiar reconocida por su confianza y compromiso. Con más de 30 años dedicados al transporte de carga terrestre, su pasión y liderazgo han hecho de TRANSPORTE VENTURA un nombre sinónimo de esfuerzo, cercanía y excelencia.",
    image: "/buenaventura-torres-founder.jpeg",
    quote: "Un legado construido con confianza, esfuerzo y familia.",
  }

  const teamMembers = [
    {
      name: "Yamileth Victoria",
      position: "Gerente de Finanzas",
      description:
        "Especialista en gestión financiera y control presupuestario, garantiza la estabilidad económica y crecimiento sostenible de la empresa.",
      image: "/yamileth-victoria-photo.jpeg",
    },
    {
      name: "Luis Gabriel Torres",
      position: "Gerente de Operaciones",
      description:
        "Experto en coordinación logística y optimización de rutas, supervisa todas las operaciones de transporte para garantizar eficiencia en cada envío.",
      image: "/luis-gabriel-torres-photo.png",
    },
    {
      name: "Astrid Torres",
      position: "Gerente Administrativa",
      description:
        "Encargada de la gestión administrativa y recursos humanos, asegura el funcionamiento óptimo de todos los procesos internos de la empresa.",
      image: "/astrid-torres-photo.jpeg",
    },
  ]

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce a los profesionales que hacen posible nuestro servicio de excelencia en transporte de contenedores
          </p>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-2">EL VISIONARIO</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-background to-primary/15 shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full blur-lg"></div>
                    <div className="relative w-40 h-40 rounded-full border-4 border-primary/60 overflow-hidden">
                      <img
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-3xl font-bold text-primary mb-2">{founder.name}</h4>
                    <p className="text-xl text-primary/80 font-semibold mb-4">{founder.position}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{founder.description}</p>

                    <div className="bg-background border-l-4 border-primary p-4 rounded-r-lg shadow-sm">
                      <p className="text-foreground italic font-medium">"{founder.quote}"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Equipo de Élite</h3>
            <p className="text-muted-foreground">Profesionales especializados que garantizan la excelencia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
