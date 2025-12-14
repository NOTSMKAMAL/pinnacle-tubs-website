import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Pinnacle Tubs
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Your trusted partner in premium hot tubs and spa solutions since
            2010.
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg mb-6">
              At Pinnacle Tubs, we believe that everyone deserves a sanctuary of
              relaxation in their own backyard. For over a decade, we&apos;ve
              been providing premium hot tubs and spas that combine innovative
              technology, superior craftsmanship, and stunning design.
            </p>
            <p className="text-lg mb-6">
              Our commitment to excellence has made us a leader in the industry,
              with thousands of satisfied customers enjoying the therapeutic
              benefits and luxury of our products every day.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Quality Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every hot tub is built with premium materials and attention to
                  detail, ensuring years of reliable enjoyment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expert Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our certified technicians provide professional installation
                  and ongoing support for your complete satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Energy Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced insulation and smart technology keep operating costs
                  low while maintaining perfect temperatures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Warranty Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive warranties and dedicated support give you peace
                  of mind for years to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
