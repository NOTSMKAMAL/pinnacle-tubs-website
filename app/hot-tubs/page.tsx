import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HotTubs() {
  const hotTubs = [
    {
      id: 1,
      name: "Luxury Spa 6-Person",
      description: "Perfect for family gatherings with premium jet system",
      capacity: "6 people",
      price: "$8,999",
    },
    {
      id: 2,
      name: "Compact Relaxer 2-Person",
      description: "Intimate spa experience for couples",
      capacity: "2 people",
      price: "$4,499",
    },
    {
      id: 3,
      name: "Premium Series 8-Person",
      description: "Ultimate luxury with advanced features",
      capacity: "8 people",
      price: "$12,999",
    },
    {
      id: 4,
      name: "Essential 4-Person",
      description: "Great value with all the essentials",
      capacity: "4 people",
      price: "$5,999",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Hot Tubs</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Explore our collection of premium hot tubs designed for comfort,
            durability, and style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotTubs.map((tub) => (
              <Card key={tub.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{tub.name}</CardTitle>
                  <CardDescription>{tub.capacity}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {tub.description}
                  </p>
                  <p className="text-2xl font-bold text-primary">{tub.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
