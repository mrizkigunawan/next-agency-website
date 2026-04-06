"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const teamMembers = [
  { name: "Sarah Johnson", role: "CEO & Founder", image: "/images/sarah-johnson.jpg" },
  { name: "Michael Chen", role: "Creative Director", image: "/images/michael-chen.jpg" },
  { name: "Emily Davis", role: "Lead Developer", image: "/images/emily-davis.jpg" },
  { name: "James Wilson", role: "Strategy Lead", image: "/images/james-wilson.jpg" },
];

export default function TeamPreview() {
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

    tl.from(
      ".reveal-scale",
      { scale: 0.85, opacity: 0, duration: 0.7, ease: "power3.out" },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-28 px-6 bg-[#f5f5f4]">
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
            deeply about their craft.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="reveal-item bg-white p-8 rounded-2xl text-center group hover:bg-stone-50 transition-colors duration-300"
            >
              <div className="reveal-scale w-32 h-32 rounded-full mx-auto mb-5 overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-lg text-[#1c1917]">
                {member.name}
              </h3>
              <p className="text-sm text-stone-400 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="reveal-item inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-cyan-600 transition-colors group"
          >
            Learn More About Us
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
