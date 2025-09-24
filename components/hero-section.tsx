import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/delicious-african-cuisine-dishes-on-elegant-dark-t.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Rating Stars */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="ml-2 text-muted-foreground">Trusted by 500+ customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Taste the Flavor, Feel the Love — </span>
            <span className="text-accent">Julita’s Cuisine</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Experience authentic African cuisine and continental dishes crafted with passion. From intimate dinners to
            grand celebrations, we bring exceptional flavors to every occasion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#f97316] text-white hover:bg-[#f97316]/90 text-lg px-8">
              <Link href="/menu">
                See Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#facc15] text-[#facc15] hover:bg-[#facc15] hover:text-black text-lg px-8 bg-transparent"
            >
              <a href="https://wa.me/256703667896" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>

          {/* Location */}
          <p className="mt-8 text-muted-foreground">📍 Mpererwe–Gayaza Road | 📞 0708715261</p>
        </div>
      </div>
    </section>
  )
}
