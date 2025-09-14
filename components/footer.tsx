import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-card border-2 border-accent">
                <Image
                  src="/images/julitas-logo.png"
                  alt="Julita's Cuisine Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-accent">Julita's</span>
                <span className="font-serif text-xl font-bold text-foreground ml-1">Cuisine</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Experience authentic African cuisine and continental dishes crafted with passion. From intimate dinners to
              grand celebrations.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-accent transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-accent mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">Mpererwe–Gayaza Road</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">0708715261</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">julita'scuisinejc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Julita's Cuisine. All rights reserved. | Taste the Flavor, Feel the Love
          </p>
        </div>
      </div>
    </footer>
  )
}
