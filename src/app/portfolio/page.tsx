"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import RevealImageBreak from "@/components/sections/RevealImageBreak";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const projects = [
  {
    title: "TechStart Landing Page",
    category: "Web Design",
    description: "A modern landing page for a fintech startup with interactive elements and conversion-focused design.",
    year: "2024",
  },
  {
    title: "Bloom Brand Identity",
    category: "Branding",
    description: "Complete brand identity for an eco-friendly lifestyle brand rooted in authenticity and warmth.",
    year: "2024",
  },
  {
    title: "Finance Dashboard",
    category: "Web App",
    description: "A comprehensive dashboard for financial data visualization with real-time analytics.",
    year: "2023",
  },
  {
    title: "Artisan E-commerce",
    category: "E-commerce",
    description: "Online store for handmade crafts with seamless checkout and inventory management.",
    year: "2023",
  },
  {
    title: "Health & Wellness App",
    category: "Mobile App",
    description: "Fitness tracking app with social features, gamification, and personalized coaching.",
    year: "2023",
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    description: "Professional website for a management consulting firm with case studies and team profiles.",
    year: "2022",
  },
];

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitsRef = useRef<ReturnType<typeof SplitText.create>[]>([]);

  useGSAP(() => {
    // Hero animations
    const heroLabel = document.querySelector(".hero-label");
    const heroTitle = document.querySelector(".hero-title");
    const heroDesc = document.querySelector(".hero-desc");

    const heroTl = gsap.timeline();

    if (heroLabel) {
      const split = SplitText.create(heroLabel, {
        type: "words",
        mask: "words",
      });
      splitsRef.current.push(split);

      heroTl.fromTo(
        split.words,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }
      );
    }

    if (heroTitle) {
      const split = SplitText.create(heroTitle, {
        type: "chars",
        mask: "chars",
      });
      splitsRef.current.push(split);

      heroTl.fromTo(
        split.chars,
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.05, ease: "power3.out" },
        "-=0.3"
      );
    }

    if (heroDesc) {
      const split = SplitText.create(heroDesc, {
        type: "words",
        mask: "words",
      });
      splitsRef.current.push(split);

      heroTl.fromTo(
        split.words,
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.03, ease: "power3.out" },
        "<"
      );
    }

    // Project sections
    gsap.utils.toArray<HTMLElement>(".project-section").forEach((section, i) => {
      const image = section.querySelector(".project-image");
      const yearEl = section.querySelector(".project-year");
      const categoryEl = section.querySelector(".project-category");
      const titleEl = section.querySelector(".project-title");
      const descEl = section.querySelector(".project-desc");
      const linkEl = section.querySelector(".project-link");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });

      if (image) {
        tl.fromTo(
          image,
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }

      const textElements = [yearEl, categoryEl, titleEl, descEl];
      const textAnimations: ReturnType<typeof gsap.fromTo>[] = [];

      textElements.forEach((el) => {
        if (!el) return;

        const split = SplitText.create(el, {
          type: "words",
          mask: "words",
        });

        splitsRef.current.push(split);

        textAnimations.push(
          gsap.fromTo(
            split.words,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 0.6,
              stagger: 0.05,
              ease: "power3.out",
            }
          )
        );
      });

      if (textAnimations.length > 0) {
        tl.add(textAnimations, "-=0.5");
      }

      if (linkEl) {
        tl.fromTo(
          linkEl,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        );
      }
    });

    return () => {
      splitsRef.current.forEach((split) => split.revert());
      splitsRef.current = [];
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <section className="py-32 md:py-44 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 hero-label">
            Portfolio
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1c1917] leading-[0.95] tracking-tight max-w-4xl hero-title">
            Our <span className="text-cyan-600">Work</span>
          </h1>
          <p className="text-lg text-stone-500 mt-8 max-w-2xl leading-relaxed hero-desc">
            A selection of projects we&apos;ve had the privilege of working on
            with amazing clients. Every project is a story of collaboration,
            creativity, and relentless attention to detail.
          </p>
        </div>
      </section>

      {projects.map((project, i) => {
        const isEven = i % 2 === 0;

        return (
          <section
            key={i}
            className="project-section py-28 px-6 relative bg-white z-2"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div className={`project-image lg:col-span-3 ${!isEven ? "lg:col-start-3" : ""}`}>
                  <div className="rounded-2xl aspect-[16/10] overflow-hidden relative">
                    <img
                      src={`https://placehold.co/800x500/e7e5e4/1c1917?text=${String(i + 1).padStart(2, "0")}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`project-text lg:col-span-2 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="project-year text-xs font-mono text-stone-400">
                      {project.year}
                    </span>
                    <span className="w-8 h-px bg-stone-300" />
                    <span className="project-category text-xs font-mono text-cyan-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="project-title font-serif text-3xl md:text-4xl text-[#1c1917] leading-tight">
                    {project.title}
                  </h2>
                  <p className="project-desc text-stone-500 mt-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    href="/contact"
                    className="project-link inline-flex items-center gap-2 mt-6 text-sm font-medium text-stone-500 hover:text-cyan-600 transition-colors group"
                  >
                    View Project
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <RevealImageBreak
        src="https://placehold.co/1920x1080/e5e7eb/1c1917"
        alt="Our portfolio showcase"
      />

      <section className="reveal-section py-28 px-6 bg-cyan-600">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-200 mb-4 section-label">
            Ready to start?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 section-title">
            Have a project in mind?
          </h2>
          <p className="text-cyan-100 text-lg mb-10 max-w-xl mx-auto section-desc">
            We&apos;d love to hear about your ideas. Let&apos;s create something
            extraordinary together — your next success story starts here.
          </p>
          <Link
            href="/contact"
            className="reveal-item inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-medium rounded-full hover:bg-cyan-50 transition-colors duration-300"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
