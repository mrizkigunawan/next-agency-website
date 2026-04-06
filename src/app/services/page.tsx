"use client";

import { useRef } from "react";
import Link from "next/link";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { gsap, useGSAP } from "@/lib/gsap";
import PinnedImageBreak from "@/components/sections/PinnedImageBreak";

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(containerRef);

  useGSAP(() => {
    const scope = containerRef.current;
    if (!scope) return;

    gsap.utils.toArray<HTMLElement>(".services-section").forEach((section) => {
      const items = gsap.utils.toArray<HTMLElement>(".service-card", section);

      gsap.from(items, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".cta-section").forEach((section) => {
      const label = section.querySelector(".cta-label");
      const title = section.querySelector(".cta-title");
      const desc = section.querySelector(".cta-desc");
      const button = section.querySelector(".cta-button");

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

      if (button) {
        tl.fromTo(
          button,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        );
      }
    });
  }, { scope: containerRef });

  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites that are beautiful, functional, and optimized for performance.",
      features: ["Responsive Design", "CMS Integration", "E-commerce", "SEO Optimized"],
    },
    {
      title: "Brand Identity",
      description: "Comprehensive branding that captures your unique essence and resonates with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that increase visibility, drive traffic, and generate leads.",
      features: ["SEO", "PPC Advertising", "Content Marketing", "Social Media"],
    },
    {
      title: "UI/UX Design",
      description: "User-centered designs that create seamless and delightful digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users on the go.",
      features: ["iOS Development", "Android Development", "App Design", "API Integration"],
    },
    {
      title: "Consulting",
      description: "Expert advice to help you navigate the digital landscape and make informed decisions.",
      features: ["Digital Strategy", "Technical Audit", "Performance Review", "Team Training"],
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="py-32 md:py-44 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 hero-label">
            What we do
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1c1917] leading-[0.95] tracking-tight max-w-4xl hero-title">
            Our <span className="text-cyan-600">Services</span>
          </h1>
          <p className="text-lg text-stone-500 mt-8 max-w-2xl leading-relaxed hero-desc">
            From concept to launch, we offer end-to-end digital solutions
            tailored to your unique challenges — not cookie-cutter templates.
          </p>
        </div>
      </section>

      <PinnedImageBreak
        src="/images/team-3.webp"
        alt="Our services in action"
      />

      <section className="services-section py-12 px-6 pb-28 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200">
            {services.map((service, i) => (
              <div
                key={i}
                className="service-card bg-[#fafaf9] p-8 md:p-12 group hover:bg-white transition-colors duration-300"
              >
                <span className="text-xs font-mono text-stone-400 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1c1917] mb-3 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-stone-500"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section py-28 px-6 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 mb-4 cta-label">
            Need something custom?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 cta-title">
            Let&apos;s Build It Together
          </h2>
          <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto cta-desc">
            We love a challenge. Tell us about your project and we&apos;ll help
            you bring it to life with a solution designed specifically for your
            needs.
          </p>
          <Link
            href="/contact"
            className="cta-button inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-medium rounded-full hover:bg-cyan-500 transition-colors duration-300"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
