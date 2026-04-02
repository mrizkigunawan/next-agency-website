"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const featuredWork = [
  {
    title: "TechStart Landing Page",
    category: "Web Design",
    desc: "A modern landing page for a fintech startup with interactive elements and conversion-focused design.",
  },
  {
    title: "Bloom Brand Identity",
    category: "Branding",
    desc: "Complete brand identity for an eco-friendly lifestyle brand rooted in authenticity and warmth.",
  },
  {
    title: "Finance Dashboard",
    category: "Web App",
    desc: "A comprehensive dashboard for financial data visualization with real-time analytics.",
  },
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
      ".project-item",
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".preview-image",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    tl.fromTo(
      ".view-all",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 section-label">
              Selected work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] section-title">
              Featured Work
            </h2>
            <p className="text-stone-500 mt-4 max-w-md leading-relaxed section-desc">
              Every project is a story of collaboration, creativity, and
              relentless attention to detail. Here are a few we&apos;re proud
              of.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="view-all mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-cyan-600 transition-colors group"
          >
            View All Projects
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Project List */}
          <div className="lg:col-span-2 space-y-0">
            {featuredWork.map((project, i) => (
              <button
                key={i}
                className="project-item group w-full text-left py-8 border-t border-stone-200 first:border-t-0 focus:outline-none"
                onMouseEnter={() => setActiveIndex(i)}
              >
                <span className="text-xs font-mono text-stone-400 mb-2 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-mono text-cyan-600 uppercase tracking-wider mb-1 block">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl text-[#1c1917] group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-500 mt-2 leading-relaxed text-sm max-w-xs">
                  {project.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Preview Image */}
          <div className="lg:col-span-3">
            <div className="preview-image sticky top-28">
              <div className="bg-stone-200 rounded-2xl aspect-[4/3] overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 transition-all duration-500"
                  style={{
                    transform: `scale(${activeIndex === 0 ? 1 : activeIndex === 1 ? 1.05 : 1.1})`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-stone-500 text-sm font-mono">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
