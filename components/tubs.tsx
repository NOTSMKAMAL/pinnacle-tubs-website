//tubs.tsx

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TME_EVO from "../lib/assests/TME_EVO.jpeg";
import TACO from "../lib/assests/TACO.jpeg";
import VIEW_BIG_BEAR from "../lib/assests/VIEW_BIG_BEAR.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function Tubs() {
  useGSAP(() => {
    // ✅ match the original behavior
    gsap.set(".jason", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(".jason .img-box", {
      scrollTrigger: {
        trigger: ".jason",
        start: "top center",
        end: "80% center",
        scrub: 2,
      },
      y: -300,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="jason relative w-full px-6 md:px-10 lg:px-16 py-24 lg:py-32">
      {/* ✅ container + 2-column layout on desktop */}
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
        {/* LEFT: text */}
        <div className="jason-content w-full max-w-lg">
          <h1 className="text-4xl md:text-5xl font-semibold">Pinnacle Tubs</h1>
          <h2 className="mt-4 text-lg md:text-xl text-muted-foreground">
            Relaxation, built for the outdoors.
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            Designed for comfort and durability—whether you’re hosting friends,
            winding down after a long day, or enjoying a weekend getaway.
          </p>

          {/* “jason-2” image under the text */}
          <div className="jason-2 mt-10">
            <img
              src={TACO.src}
              alt="Taco"
              className="block w-full max-w-md rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* RIGHT: images (aligned to the right on desktop) */}
        <div className="img-box w-full lg:w-auto lg:mt-96">
          <div className="space-y-6 lg:space-y-8 lg:flex lg:flex-col lg:items-end">
            <div className="jason-1 w-full max-w-md">
              <img
                src={TME_EVO.src}
                alt="TME EVO"
                className="block w-full rounded-2xl object-cover"
              />
            </div>

            <div className="jason-3 w-full max-w-md">
              <img
                src={VIEW_BIG_BEAR.src}
                alt="View Big Bear"
                className="block w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
