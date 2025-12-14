import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Welcome to Pinnacle Tubs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Transform your backyard into a luxury retreat with our premium hot
            tubs and spas. Experience ultimate relaxation and therapeutic
            benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/hot-tubs"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Browse Hot Tubs
            </Link>
            <Link
              href="/contact"
              className="border border-primary text-primary px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
