import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import Image from "next/image"

const menuSections = [
  {
    title: "Chicken Dishes",
    items: [
      {
        name: "Grilled Chicken",
        price: "UGX 15,000",
        description: "Tender grilled chicken with herbs",
        image: "/chicken-curry-african-style.jpg",
      },
      {
        name: "Chicken Curry",
        price: "UGX 18,000",
        description: "Aromatic chicken curry with coconut milk",
        image: "/chicken-curry-african-style.jpg",
      },
      {
        name: "Fried Chicken",
        price: "UGX 12,000",
        description: "Crispy fried chicken with spices",
        image: "/chicken-curry-african-style.jpg",
      },
    ],
  },
  {
    title: "Meat Section",
    items: [
      {
        name: "Beef Stew",
        price: "UGX 20,000",
        description: "Tender beef with local vegetables",
        image: "/african-beef-stew-with-vegetables.jpg",
      },
      {
        name: "Grilled Beef",
        price: "UGX 25,000",
        description: "Premium beef grilled to perfection",
        image: "/african-beef-stew-with-vegetables.jpg",
      },
      {
        name: "Pork Ribs",
        price: "UGX 22,000",
        description: "Succulent pork ribs with BBQ sauce",
        image: "/african-beef-stew-with-vegetables.jpg",
      },
    ],
  },
  {
    title: "Fish Section",
    items: [
      {
        name: "Grilled Tilapia",
        price: "UGX 25,000",
        description: "Fresh tilapia with African spices",
        image: "/grilled-tilapia-african-style.jpg",
      },
      {
        name: "Fish Curry",
        price: "UGX 20,000",
        description: "Fish cooked in aromatic curry sauce",
        image: "/grilled-tilapia-african-style.jpg",
      },
      {
        name: "Fried Fish",
        price: "UGX 18,000",
        description: "Crispy fried fish with lemon",
        image: "/grilled-tilapia-african-style.jpg",
      },
    ],
  },
  {
    title: "Local Food",
    items: [
      {
        name: "Matooke",
        price: "UGX 8,000",
        description: "Traditional steamed green bananas",
        image: "/matooke-bananas-ugandan-dish.jpg",
      },
      {
        name: "Posho & Beans",
        price: "UGX 6,000",
        description: "Classic Ugandan staple meal",
        image: "/posho-beans-ugandan-meal.jpg",
      },
      {
        name: "Rice & Groundnut Sauce",
        price: "UGX 10,000",
        description: "Rice with rich groundnut sauce",
        image: "/groundnut-stew-african-peanut.jpg",
      },
    ],
  },
  {
    title: "Pizza",
    items: [
      {
        name: "Margherita Pizza",
        price: "UGX 15,000",
        description: "Classic pizza with tomato and cheese",
        image: "/placeholder.jpg",
      },
      {
        name: "Chicken Pizza",
        price: "UGX 18,000",
        description: "Pizza topped with grilled chicken",
        image: "/placeholder.jpg",
      },
      {
        name: "Vegetarian Pizza",
        price: "UGX 16,000",
        description: "Fresh vegetables on crispy crust",
        image: "/placeholder.jpg",
      },
    ],
  },
  {
    title: "Snacks",
    items: [
      {
        name: "Samosas",
        price: "UGX 2,000",
        description: "Crispy pastries with savory filling",
        image: "/mandazi-african-donuts-fried.jpg",
      },
      {
        name: "Spring Rolls",
        price: "UGX 3,000",
        description: "Fresh vegetables wrapped in pastry",
        image: "/rolex-chapati-eggs-ugandan-street-food.jpg",
      },
      {
        name: "Chapati",
        price: "UGX 1,500",
        description: "Soft flatbread, perfect with any meal",
        image: "/mandazi-african-donuts-fried.jpg",
      },
    ],
  },
  {
    title: "Juices & Drinks",
    items: [
      {
        name: "Fresh Orange Juice",
        price: "UGX 3,000",
        description: "Freshly squeezed orange juice",
        image: "/placeholder.jpg",
      },
      {
        name: "Passion Fruit Juice",
        price: "UGX 3,500",
        description: "Sweet and tangy passion fruit",
        image: "/placeholder.jpg",
      },
      {
        name: "Smoothies",
        price: "UGX 5,000",
        description: "Mixed fruit smoothies",
        image: "/placeholder.jpg",
      },
      {
        name: "Milkshakes",
        price: "UGX 4,000",
        description: "Creamy milkshakes in various flavors",
        image: "/placeholder.jpg",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-accent">Delicious</span> Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our carefully crafted menu featuring authentic African dishes, continental cuisine, and refreshing
            beverages.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={`https://wa.me/256703667896?text=I'd like to order the ${item.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <Card className="bg-card border-border overflow-hidden h-full hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                        <div className="relative h-48">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg font-serif text-accent">{item.name}</CardTitle>
                            <Badge variant="secondary" className="bg-primary text-primary-foreground">
                              {item.price}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                          <p className="text-xs text-accent mt-2">Click to order via WhatsApp</p>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
