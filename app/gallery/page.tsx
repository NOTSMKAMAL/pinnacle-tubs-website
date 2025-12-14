import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Gallery() {
  const categories = [
    {
      name: "Luxury Spas",
      images: 6,
    },
    {
      name: "Outdoor Installations",
      images: 8,
    },
    {
      name: "Indoor Installations",
      images: 4,
    },
    {
      name: "Customer Spotlights",
      images: 10,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Gallery</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore our collection of beautiful hot tub installations and happy
            customers.
          </p>

          {categories.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{category.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: category.images }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <p className="text-white font-semibold">
                      {category.name} {i + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 bg-muted rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-muted-foreground mb-6">
              We&apos;d love to see your Pinnacle Tubs installation! Share your
              photos with us.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90">
              Upload Your Photos
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
