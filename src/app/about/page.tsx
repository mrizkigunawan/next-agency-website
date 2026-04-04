"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import PinnedImageBreak from "@/components/sections/PinnedImageBreak";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitsRef = useRef<ReturnType<typeof SplitText.create>[]>([]);

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder" },
    { name: "Michael Chen", role: "Creative Director" },
    { name: "Emily Davis", role: "Lead Developer" },
    { name: "James Wilson", role: "Strategy Lead" },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "Always pushing boundaries and exploring new possibilities.",
    },
    {
      title: "Quality",
      desc: "Excellence in everything we do, from concept to execution.",
    },
    {
      title: "Collaboration",
      desc: "Working together as one team with our clients.",
    },
    {
      title: "Integrity",
      desc: "Honest, transparent, and accountable in all our relationships.",
    },
  ];

  useGSAP(() => {
    // Hero animations
    const heroLabel = document.querySelector(".hero-label");
    const heroTitle = document.querySelector(".hero-title");
    const heroDesc = document.querySelector(".hero-desc");

    const heroTl = gsap.timeline();

    if (heroLabel) {
      const split = SplitText.create(heroLabel, {
        type: "words",
        
      });
      splitsRef.current.push(split);

      heroTl.fromTo(
        split.words,
        { yPercent: 100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, stagger: 0.05, ease: "power3.out" }
      );
    }

    if (heroTitle) {
      const split = SplitText.create(heroTitle, {
        type: "chars",
        
      });
      splitsRef.current.push(split);

      heroTl.fromTo(
        split.chars,
        { yPercent: 100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, stagger: 0.05, ease: "power3.out" },
        "-=0.3"
      );
    }

    if (heroDesc) {
      const split = SplitText.create(heroDesc, {
        type: "words",
        
      });
      splitsRef.current.push(split);

      heroTl.fromTo(
        split.words,
        { yPercent: 100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, stagger: 0.03, ease: "power3.out" },
        "<"
      );
    }

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
          },
          "-=0.3"
        );
      }
    });

    // Split column animations
    gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
      gsap.fromTo(
        el,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((el) => {
      gsap.fromTo(
        el,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    // Scale reveals
    gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
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
            About us
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1c1917] leading-[0.95] tracking-tight max-w-4xl hero-title">
            We are a team of{" "}
            <span className="text-cyan-600">makers</span> and{" "}
            <span className="text-cyan-600">thinkers</span>.
          </h1>
          <div className="mt-12 max-w-2xl hero-desc">
            <p className="text-lg text-stone-500 leading-relaxed">
              Founded in 2018, we&apos;ve helped over 100 clients transform
              their digital presence. Our approach combines creativity with
              data-driven insights to deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      <section className="reveal-section py-28 px-6 bg-[#f5f5f4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 section-label">
              What drives us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] section-title">
              Our Values
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto leading-relaxed section-desc">
              These principles guide every decision we make and every project we
              touch. They&apos;re the foundation of how we work and the standard
              we hold ourselves to.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="reveal-item bg-white p-8 rounded-2xl border border-stone-200 group hover:border-cyan-600 transition-colors duration-300"
              >
                <span className="text-xs font-mono text-cyan-600 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-[#1c1917] mb-2 group-hover:text-cyan-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PinnedImageBreak
        src="https://placehold.co/1920x1080/e7e5e4/1c1917"
        alt="Our story in action"
      />

      <section className="reveal-section py-28 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4">
                Our story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] leading-tight mb-6">
                Built on passion, driven by results.
              </h2>
              <p className="text-stone-500 leading-relaxed">
                We started as a small team of designers and developers who
                believed that digital experiences should be both beautiful and
                effective. Today, we&apos;ve grown into a full-service agency
                that continues to push creative boundaries while delivering
                measurable results for our clients.
              </p>
            </div>
            <div className="reveal-right space-y-6 text-stone-600 leading-relaxed">
              <p>
                We are a passionate team of designers, developers, and
                strategists dedicated to creating exceptional digital
                experiences.
              </p>
              <p>
                We believe in the power of thoughtful design to create
                meaningful connections between brands and their audiences.
              </p>
              <p>
                Every project is an opportunity to push creative boundaries
                while delivering measurable business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal-section py-28 px-6 relative bg-[#f5f5f4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 section-label">
              Our people
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] section-title">
              Meet the Team
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto leading-relaxed section-desc">
              Behind every great project is a team of passionate people who care
              deeply about their craft. These are the people who bring your
              vision to life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="reveal-item bg-white p-8 rounded-2xl text-center group hover:bg-stone-50 transition-colors duration-300"
              >
                <img
                  src={`https://placehold.co/128x128/e7e5e4/1c1917?text=${member.name.split(" ").map((n) => n[0]).join("")}`}
                  alt={member.name}
                  className="reveal-scale w-32 h-32 rounded-full mx-auto mb-5 object-cover"
                />
                <h3 className="font-serif text-lg text-[#1c1917]">
                  {member.name}
                </h3>
                <p className="text-sm text-stone-400 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
