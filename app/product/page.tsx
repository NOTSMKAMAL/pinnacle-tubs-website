import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Product() {
  const product = {
    name: "Pinnacle Elite Series",
    tagline: "The Ultimate Luxury Spa Experience",
    price: "$14,999",
    features: [
      "8-Person Capacity",
      "56 Hydrotherapy Jets",
      "LED Lighting System",
      "Bluetooth Audio System",
      "Energy-Efficient Insulation",
      "Digital Control Panel",
      "Waterfall Feature",
      "Premium Acrylic Shell",
      "Ozone Water Purification",
      "5-Year Warranty",
    ],
    specifications: {
      dimensions: '92" x 92" x 38"',
      weight: "950 lbs (empty)",
      voltage: "240V / 50 Amp",
      pumps: "Dual Speed, 2 Pumps",
      heater: "4kW",
      capacity: "425 gallons",
    },
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image Placeholder */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <p className="text-white text-2xl font-semibold">
                  Product Image
                </p>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-muted rounded flex items-center justify-center text-xs"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2">Featured Product</Badge>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {product.tagline}
                </p>
                <p className="text-3xl font-bold text-primary">
                  {product.price}
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-2">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between border-b pb-2"
                        >
                          <dt className="font-medium capitalize">{key}:</dt>
                          <dd className="text-muted-foreground">{value}</dd>
                        </div>
                      )
                    )}
                  </dl>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90">
                  Request Quote
                </button>
                <button className="px-6 py-3 border rounded-md font-semibold hover:bg-muted">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Free Delivery</CardTitle>
                <CardDescription>On all orders over $5,000</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Professional Installation</CardTitle>
                <CardDescription>
                  Certified technicians included
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>5-Year Warranty</CardTitle>
                <CardDescription>Full coverage and support</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
