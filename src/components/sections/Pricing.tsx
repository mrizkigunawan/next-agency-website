"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const monthlyFeatures = [
  "Up to 40 hours of support & development",
  "Priority email & Slack support",
  "Monthly strategy review",
  "Performance monitoring",
  "Content updates & maintenance",
  "Cancel anytime",
];

const customFeatures = [
  "Full project scope & timeline",
  "Dedicated project manager",
  "Design & development team",
  "Post-launch support",
  "Custom integrations",
  "Tailored to your needs",
];

export default function Pricing() {
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
      { y: 50, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
      "-=0.3"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-28 px-6 relative z-2 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 section-label">
            Pricing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] section-title">
            Flexible Plans
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto leading-relaxed section-desc">
            Transparent, flexible pricing designed to scale with your needs —
            whether you need ongoing support or a one-time project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="reveal-item bg-white border-2 border-stone-200 rounded-2xl p-8 md:p-10 hover:border-cyan-600 transition-colors duration-300">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-2">
              Monthly
            </p>
            <h3 className="font-serif text-2xl text-[#1c1917] mb-4">
              Ongoing Support
            </h3>
            <div className="mb-8">
              <span className="font-serif text-5xl text-[#1c1917]">
                $2,500
              </span>
              <span className="text-stone-400">/month</span>
            </div>
            <ul className="space-y-4 mb-10">
              {monthlyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-cyan-600 rounded-full flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block text-center px-6 py-4 bg-[#1c1917] text-white font-medium rounded-full hover:bg-cyan-600 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>

          <div className="reveal-item bg-[#1c1917] rounded-2xl p-8 md:p-10 text-white">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-2">
              Custom
            </p>
            <h3 className="font-serif text-2xl mb-4">By Project</h3>
            <div className="mb-8">
              <span className="font-serif text-5xl">Let&apos;s Talk</span>
            </div>
            <ul className="space-y-4 mb-10">
              {customFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-cyan-400 rounded-full flex-shrink-0 mt-0.5" />
                  <span className="text-stone-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block text-center px-6 py-4 bg-cyan-600 text-white font-medium rounded-full hover:bg-cyan-500 transition-colors duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
