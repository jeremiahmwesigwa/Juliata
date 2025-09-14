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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:julita'scuisinejc@gmail.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink

    setMessageSent(true)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setMessageSent(false), 5000)
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
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Hours */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-accent">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Mpererwe–Gayaza Road</p>
                      <p className="text-sm text-muted-foreground mt-2">Interactive map coming soon</p>
                    </div>
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

      <Footer />
    </main>
  )
}
