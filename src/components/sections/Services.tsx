"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    title: "Web Design",
    desc: "Beautiful, functional websites that capture your brand essence and convert visitors into customers.",
  },
  {
    title: "Brand Identity",
    desc: "Strategic branding that differentiates you from the competition and builds lasting recognition.",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven campaigns that drive real results and measurable growth for your business.",
  },
  {
    title: "UI/UX Design",
    desc: "User-centered designs that create seamless, intuitive, and delightful digital experiences.",
  },
  {
    title: "Mobile Apps",
    desc: "Native and cross-platform applications that engage users and deliver value on the go.",
  },
  {
    title: "Consulting",
    desc: "Expert advice to help you navigate the digital landscape with confidence and clarity.",
  },
];

export default function Services() {
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
    <section ref={containerRef} className="py-28 px-6 bg-[#f5f5f4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 section-label">
            What we do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] section-title">
            Our Services
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto leading-relaxed section-desc">
            From concept to launch, we offer end-to-end digital solutions
            tailored to your unique challenges — not cookie-cutter templates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal-item bg-[#f5f5f4] p-8 md:p-10 group hover:bg-white transition-colors duration-300"
            >
              <span className="text-xs font-mono text-stone-400 mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl text-[#1c1917] mb-3 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
