import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const dishes = [
  {
    name: "Grilled Tilapia",
    category: "Fish",
    price: "UGX 25,000",
    image: "/grilled-tilapia-african-style.jpg",
    description: "Fresh tilapia grilled to perfection with African spices",
  },
  {
    name: "Beef Stew",
    category: "Meat",
    price: "UGX 20,000",
    image: "/african-beef-stew-with-vegetables.jpg",
    description: "Tender beef slow-cooked with local vegetables and herbs",
  },
  {
    name: "Chicken Curry",
    category: "Chicken",
    price: "UGX 18,000",
    image: "/chicken-curry-african-style.jpg",
    description: "Aromatic chicken curry with coconut milk and spices",
  },
  {
    name: "Matooke",
    category: "Local Food",
    price: "UGX 12,000",
    image: "/matooke-bananas-ugandan-dish.jpg",
    description: "Traditional steamed green bananas with groundnut sauce",
  },
  {
    name: "Posho & Beans",
    category: "Local Food",
    price: "UGX 8,000",
    image: "/posho-beans-ugandan-meal.jpg",
    description: "Classic Ugandan staple with maize flour and seasoned beans",
  },
  {
    name: "Luwombo",
    category: "Local Food",
    price: "UGX 22,000",
    image: "/luwombo-banana-leaves-ugandan.jpg",
    description: "Traditional dish steamed in banana leaves with meat or chicken",
  },
  {
    name: "Groundnut Stew",
    category: "Local Food",
    price: "UGX 15,000",
    image: "/groundnut-stew-african-peanut.jpg",
    description: "Rich peanut-based stew with vegetables and your choice of meat",
  },
  {
    name: "Rolex",
    category: "Snacks",
    price: "UGX 5,000",
    image: "/rolex-chapati-eggs-ugandan-street-food.jpg",
    description: "Popular Ugandan street food - chapati rolled with eggs and vegetables",
  },
  {
    name: "Mandazi",
    category: "Snacks",
    price: "UGX 2,000",
    image: "/mandazi-african-donuts-fried.jpg",
    description: "Sweet fried dough pastries, perfect with tea or coffee",
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Dishes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our most popular dishes, including authentic local cuisine crafted with traditional flavors and
            premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div
                  className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${dish.image}')` }}
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{dish.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold text-accent">{dish.name}</h3>
                  <span className="text-primary font-bold">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
