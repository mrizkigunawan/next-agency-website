"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 7, suffix: "", label: "Years of Experience" },
  { value: 12, suffix: "", label: "Industry Awards" },
];

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      ".section-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".section-desc",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".reveal-left",
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".reveal-item",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" },
      "-=0.4"
    );

    statRefs.current.forEach((ref, i) => {
      if (ref) {
        const target = stats[i].value;
        const suffix = stats[i].suffix;
        const obj = { val: 0 };

        ref.textContent = `0${suffix}`;

        tl.to(
          obj,
          {
            val: target,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              ref.textContent = Math.round(obj.val) + suffix;
            },
          },
          "<"
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 section-label">
              Why choose us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] leading-tight section-title">
              We combine creativity with strategy to deliver{" "}
              <span className="text-cyan-600">results</span> that matter.
            </h2>
            <p className="text-stone-500 mt-6 leading-relaxed section-desc">
              Great design is only half the equation. We pair creative vision
              with strategic thinking so every project delivers both beauty
              and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="reveal-item">
                <div
                  ref={(el) => {
                    statRefs.current[i] = el;
                  }}
                  className="font-serif text-4xl md:text-5xl text-cyan-600 mb-1"
                >
                  0{stat.suffix}
                </div>
                <div className="text-sm text-stone-500 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
