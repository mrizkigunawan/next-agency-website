"use client";

import Link from "next/link";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    const totalMovement = cards.length * 100;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalMovement}%`,
        pin: true,
        scrub: 1,
      },
    });

    tl.to(trackRef.current, {
      x: () => `-${totalMovement}vw`,
      ease: "none",
    });

    cards.forEach((card) => {
      const image = card.querySelector(".card-image") as HTMLElement;
      if (image) {
        gsap.fromTo(
          image,
          { scale: 0.92, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 80%",
              end: "left 30%",
              scrub: true,
            },
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative">
      <div className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4">
                Selected work
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917]">
                Featured Work
              </h2>
              <p className="text-stone-500 mt-4 max-w-md leading-relaxed">
                Every project is a story of collaboration, creativity, and
                relentless attention to detail. Here are a few we&apos;re proud
                of.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-cyan-600 transition-colors group"
            >
              View All Projects
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 px-6"
          style={{ width: "max-content" }}
        >
          {featuredWork.map((project, i) => (
            <div
              key={i}
              className="project-card flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[50vw]"
            >
              <div className="card-image bg-stone-200 rounded-2xl aspect-[16/10] overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-stone-500 text-6xl font-serif opacity-30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-600 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1c1917] mt-2">
                {project.title}
              </h3>
              <p className="text-stone-500 mt-3 leading-relaxed max-w-lg">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
