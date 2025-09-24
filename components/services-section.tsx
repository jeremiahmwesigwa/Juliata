import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Users, Package, Cake } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Indoor Catering",
    description: "Elegant dining experiences for intimate gatherings and corporate events.",
  },
  {
    icon: Utensils,
    title: "Outdoor Catering",
    description: "Full-service catering for weddings, parties, and outdoor celebrations.",
  },
  {
    icon: Package,
    title: "Lunch Packs",
    description: "Convenient, delicious lunch packages for offices and events.",
  },
  {
    icon: Cake,
    title: "Custom Cakes",
    description: "Beautiful wedding cakes and birthday cakes made to order.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From intimate gatherings to grand celebrations, we provide exceptional catering services tailored to your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-accent">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
