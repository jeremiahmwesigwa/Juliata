"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [messageSent, setMessageSent] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessageSent(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setMessageSent(false), 5000)
      } else {
        // Handle error
        console.error("Failed to send message")
      }
    } catch (error) {
      console.error("An error occurred:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to experience exceptional cuisine? Contact us for reservations, catering services, or any inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-serif text-accent">Phone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-accent p-0 h-auto"
                  asChild
                >
                  <a href="tel:+256708715261">+256 708715261</a>
                </Button>
                <br />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-accent p-0 h-auto"
                  asChild
                >
                  <a href="tel:+256773961002">+256 773961002</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-serif text-accent">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-accent p-0 h-auto"
                  asChild
                >
                  <a href="https://wa.me/256703667896" target="_blank" rel="noopener noreferrer">
                    +256 703667896
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-serif text-accent">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-accent p-0 h-auto text-xs"
                  asChild
                >
                  <a href="mailto:julita'scuisinejc@gmail.com">julita'scuisinejc@gmail.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-serif text-accent">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mpererwe–Gayaza Road</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-accent">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {messageSent && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-500 font-medium">Message sent successfully!</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-input border-border"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Hours */}
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-accent">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757631539343!2d32.57609631475948!3d0.3220479997424428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb863814ac8d%3A0x746f3b4845b85d6c!2sMpererwe%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <CardTitle className="text-xl font-serif text-accent">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">8:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">9:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">10:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-accent mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/JulitasCuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/JulitasCuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.718.01 3.702.054 1.022.048 1.73.213 2.36.465.65.265 1.17.625 1.695 1.15.525.525.885 1.045 1.15 1.695.252.63.417 1.338.465 2.36C21.99 8.282 22 8.57 22 11s-.01 2.718-.054 3.702c-.048 1.022-.213 1.73-.465 2.36-.265.65-.625 1.17-1.15 1.695-.525.525-1.045.885-1.695 1.15-.63.252-1.338.417-2.36.465C15.032 21.99 14.745 22 12 22s-2.718-.01-3.702-.054c-1.022-.048-1.73-.213-2.36-.465-.65-.265-1.17-.625-1.695-1.15-.525-.525-.885-1.045-1.15-1.695-.252-.63-.417-1.338-.465-2.36C2.01 13.718 2 13.43 2 11s.01-2.718.054-3.702c.048-1.022.213-1.73.465-2.36.265-.65.625-1.17 1.15-1.695.525-.525 1.045-.885 1.695-1.15.63-.252 1.338-.417 2.36-.465C8.282 2.01 8.57 2 11 2h1.315zM11 5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@JulitasCuisine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.85-2.33-4.35-2.22-6.87.09-2.5.99-4.9 2.24-6.81 1.25-1.91 3.28-3.26 5.48-3.55.01 2.56-.01 5.12.01 7.68.02 1.43-.63 2.79-1.75 3.66-1.12.87-2.66 1.05-3.97.46-.35-.16-.68-.38-.97-.62-.29-.24-.54-.53-.74-.84-.19-.31-.34-.66-.46-1.02s-.18-.73-.18-1.11c.01-1.4.59-2.77 1.7-3.66 1.11-.89 2.66-1.08 3.97-.52.35.16.68.38.97.62.29.24.54.53.74.84.19.31.34.66.46-1.02.12-.36.18-.73.18-1.11.01-2.56.01-5.12.01-7.68z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
