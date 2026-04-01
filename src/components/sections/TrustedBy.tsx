"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const clients = [
  "Acme Corp",
  "TechFlow",
  "Bloom Studios",
  "Nexus Digital",
  "Horizon Labs",
  "Pulse Media",
];

export default function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });

    tl.fromTo(
      ".section-label",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    );

    tl.fromTo(
      ".section-desc",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".reveal-item",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" },
      "-=0.3"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 px-6 border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 text-center mb-3 section-label">
          Trusted by innovative companies
        </p>
        <p className="text-stone-600 text-center max-w-xl mx-auto mb-10 section-desc leading-relaxed">
          We&apos;ve partnered with forward-thinking companies across
          industries to deliver digital solutions that drive real impact.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clients.map((client, i) => (
            <span
              key={i}
              className="reveal-item text-lg md:text-xl font-serif text-stone-600 hover:text-stone-800 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
