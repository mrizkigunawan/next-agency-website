"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-line",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-sub",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-cta",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.7, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-36 px-6 relative overflow-hidden">
      <div className="absolute top-10 right-20 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[30rem] h-[30rem] bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative flex items-center justify-center min-h-[60vh]">
        <div className="max-w-4xl text-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1c1917] leading-[0.95] tracking-tight">
            <span className="hero-line block">We craft digital</span>
            <span className="hero-line block">experiences that</span>
            <span className="hero-line block">
              <span className="text-cyan-600">inspire</span> &amp;{" "}
              <span className="text-cyan-600">engage</span>
            </span>
          </h1>
          <p className="hero-sub text-lg md:text-xl text-stone-500 mt-8 max-w-xl mx-auto leading-relaxed">
            A full-service digital studio helping brands connect with their
            audience through innovative design and strategic thinking.
          </p>
          <div className="hero-cta flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-[#1c1917] text-white font-medium rounded-full hover:bg-cyan-600 transition-colors duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-stone-300 text-[#1c1917] font-medium rounded-full hover:border-cyan-600 hover:text-cyan-600 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
