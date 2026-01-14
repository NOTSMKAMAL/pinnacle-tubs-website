import { Suspense } from "react";

import { Navigation } from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturedProducts from "@/components/featured-products";
import SlidingGallery from "@/components/SlidingGallery";
import Tubs from "@/components/tubs";
import VideoTwo from "@/components/video-two";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <SlidingGallery />
      <Tubs />
      <VideoTwo />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
