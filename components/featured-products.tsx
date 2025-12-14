import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturedProducts() {
  const features = [
    {
      title: "Premium Quality",
      description:
        "Built with the finest materials and expert craftsmanship for lasting durability.",
      icon: "⭐",
    },
    {
      title: "Energy Efficient",
      description:
        "Advanced insulation technology keeps your operating costs low year-round.",
      icon: "⚡",
    },
    {
      title: "Therapeutic Jets",
      description:
        "Customizable hydrotherapy jets target specific muscle groups for relief.",
      icon: "💆",
    },
    {
      title: "Easy Maintenance",
      description:
        "Simple care routines and quality components make upkeep a breeze.",
      icon: "🔧",
    },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Pinnacle Tubs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to delivering exceptional quality, comfort, and
            value in every hot tub we offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6 opacity-90">
            Visit our showroom to see our collection in person and find the
            perfect hot tub for your home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-background text-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
