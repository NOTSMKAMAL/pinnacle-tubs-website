"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MudTruck from "@/lib/assests/MudTruck.jpeg";
import W from "@/lib/assests/W.jpeg";
import ViewBigBear from "@/lib/assests/VIEW_BIG_BEAR.jpeg";
import Taco_two from "@/lib/assests/TACO_TWO.jpeg";
import SnowTwo from "@/lib/assests/SNOW_TWO.jpeg";

const images = [
  { src: MudTruck, alt: "Pinnacle Tubs hero" },
  { src: W, alt: "Tub detail finish" },
  { src: ViewBigBear, alt: "Mountain installation view" },
  { src: Taco_two, alt: "Outdoor tub scene" },
  { src: SnowTwo, alt: "Snowside tub setup" },
];

export default function SlidingGallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isExpanded]);

  return (
    <section className="relative w-full bg-black">
      <div className="relative h-[100svh] w-full overflow-hidden">
        <Image
          src={MudTruck}
          alt="Pinnacle Tubs featured gallery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-10 left-6 z-10 md:bottom-12 md:left-12">
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
          >
            View more
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex h-full flex-col bg-black/95 text-white transition duration-300 ${
          isExpanded ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isExpanded}
      >
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Gallery
          </span>
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="rounded-full border border-white/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/60 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-x-auto overflow-y-hidden">
          <div className="flex h-full items-center gap-6 px-6 pb-12 pr-10 snap-x snap-mandatory scroll-smooth md:px-12">
            {images.map((image, index) => (
              <div
                key={`${image.alt}-${index}`}
                className="relative h-[70vh] w-[80vw] max-w-[520px] shrink-0 snap-center overflow-hidden rounded-2xl bg-white/5 md:h-[75vh]"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 ring-1 ring-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
