"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "We learn about your business, goals, and audience to define a clear project scope and strategy.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We create wireframes and visual designs that align with your brand and delight your users.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "We build your project with clean code, modern technologies, and rigorous quality standards.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "We test, deploy, and provide ongoing support to ensure your project succeeds in the wild.",
  },
];

export default function Process() {
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

    tl.from(
      ".reveal-item",
      { y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.3"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-28 px-6 bg-[#1c1917] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 mb-4 section-label">
            How we work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl section-title">
            Our Process
          </h2>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto leading-relaxed section-desc">
            No guesswork, no surprises. Our four-step methodology keeps
            things clear, efficient, and focused on outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {processSteps.map((item, i) => (
            <div key={i} className="reveal-item relative">
              <span className="text-6xl font-serif text-cyan-400/40 mb-6 block">
                {item.step}
              </span>
              <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed">{item.desc}</p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-12 border-t border-stone-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
