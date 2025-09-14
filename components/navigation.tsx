"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-card border-2 border-accent">
              <Image
                src="/images/julitas-logo.png"
                alt="Julita's Cuisine Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-bold text-accent">Julita's</span>
              <span className="font-serif text-xl font-bold text-foreground ml-1">Cuisine</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-foreground hover:text-accent transition-colors">
              Menu
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="tel:+256708715261">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit" asChild>
                <a href="tel:+256708715261">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
