import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Julita's Cuisine - Premium African & Continental Dishes in Mpererwe",
  description:
    "Discover the best catering and restaurant in Mpererwe–Gayaza Road. Julita's Cuisine offers premium African and continental dishes, indoor/outdoor catering, lunch packs, and custom cakes. Taste the flavor, feel the love.",
  keywords: [
    "Julita's Cuisine",
    "Best Catering in Mpererwe",
    "African Food Kampala",
    "Ugandan Food Mpererwe",
    "Restaurant on Gayaza Road",
    "Lunch Packs Kampala",
    "Wedding Cakes Uganda",
    "Outdoor Catering Kampala",
  ],
  authors: [{ name: "Julita's Cuisine" }],
  openGraph: {
    title: "Julita's Cuisine - Taste the Flavor, Feel the Love",
    description: "Premium dining and catering services in Mpererwe, Uganda.",
    url: "https://julitascuisine.com", // Replace with actual domain
    siteName: "Julita's Cuisine",
    images: [
      {
        url: "/og-image.jpg", // Replace with an actual OG image path
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julita's Cuisine - Premium African & Continental Dishes",
    description: "The best place for authentic Ugandan food and catering services in Mpererwe.",
    images: ["/twitter-image.jpg"], // Replace with an actual Twitter image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
