"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealImageBreak from "@/components/sections/RevealImageBreak";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "TechStart Landing Page",
      category: "Web Design",
      description: "A modern landing page for a fintech startup with interactive elements.",
    },
    {
      title: "Bloom Brand Identity",
      category: "Branding",
      description: "Complete brand identity for an eco-friendly lifestyle brand.",
    },
    {
      title: "Finance Dashboard",
      category: "Web App",
      description: "A comprehensive dashboard for financial data visualization.",
    },
    {
      title: "Artisan E-commerce",
      category: "E-commerce",
      description: "Online store for handmade crafts with seamless checkout.",
    },
    {
      title: "Health & Wellness App",
      category: "Mobile App",
      description: "Fitness tracking app with social features and gamification.",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional website for a management consulting firm.",
    },
  ];

  useGSAP(() => {
    // Hero entrance
    gsap.fromTo(
      ".hero-label",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-title",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-desc",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.35, ease: "power3.out" }
    );

    // Section reveals
    gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
      const label = section.querySelector(".section-label");
      const title = section.querySelector(".section-title");
      const desc = section.querySelector(".section-desc");
      const items = gsap.utils.toArray<HTMLElement>(".reveal-item", section);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });

      if (label) {
        tl.fromTo(
          label,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      }

      if (title) {
        tl.fromTo(
          title,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
      }

      if (desc) {
        tl.fromTo(
          desc,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        );
      }

      if (items.length > 0) {
        tl.from(
          items,
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      }
    });
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

      <section className="reveal-section py-12 px-6 pb-28 relative z-2 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="reveal-item group cursor-pointer">
                <div className="bg-stone-200 rounded-2xl aspect-[4/3] mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-stone-500 text-sm font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-600 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl text-[#1c1917] mt-2 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-500 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
