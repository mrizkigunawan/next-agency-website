"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitsRef = useRef<ReturnType<typeof SplitText.create>[]>([]);

  useGSAP(() => {
    const heroTitle = containerRef.current?.querySelector(".hero-title");
    const heroSub = containerRef.current?.querySelector(".hero-sub");
    const heroCta = containerRef.current?.querySelector(".hero-cta");

    const tl = gsap.timeline();

    if (heroTitle) {
      const split = SplitText.create(heroTitle, {
        type: "words",
        mask: "words",
      });
      splitsRef.current.push(split);

      tl.fromTo(
        split.words,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.5, delay: 0.5, stagger: 0.05, ease: "power3.out" }
      );
    }

    if (heroSub) {
      const split = SplitText.create(heroSub, {
        type: "words",
        mask: "words",
      });
      splitsRef.current.push(split);

      tl.fromTo(
        split.words,
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.03, ease: "power3.out" },
        "<"
      );
    }

    if (heroCta) {
      tl.fromTo(
        heroCta,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );
    }

    return () => {
      splitsRef.current.forEach((split) => split.revert());
      splitsRef.current = [];
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-36 px-6 relative overflow-hidden">
      <div className="absolute top-10 right-20 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[30rem] h-[30rem] bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative flex items-center justify-center min-h-[60vh]">
        <div className="max-w-4xl text-center">
          <h1 className="hero-title font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1c1917] leading-[0.95] tracking-tight">
            We craft digital experiences that{" "}
            <span className="text-cyan-600">inspire</span> &amp;{" "}
            <span className="text-cyan-600">engage</span>
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
