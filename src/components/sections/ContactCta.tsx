"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactCta() {
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
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 section-label">
          Get in touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] mb-6 section-title">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-stone-500 mb-12 max-w-xl mx-auto section-desc">
          Every great partnership starts with a conversation. Tell us what
          you&apos;re working on and we&apos;ll help you figure out the next
          step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <a
            href="mailto:hello@agency.com"
            className="reveal-item inline-flex items-center gap-3 text-lg text-stone-600 hover:text-cyan-600 transition-colors group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            hello@agency.com
          </a>
          <span className="hidden sm:block w-1 h-1 bg-stone-300 rounded-full" />
          <a
            href="tel:+15551234567"
            className="reveal-item inline-flex items-center gap-3 text-lg text-stone-600 hover:text-cyan-600 transition-colors group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +1 (555) 123-4567
          </a>
          <span className="hidden sm:block w-1 h-1 bg-stone-300 rounded-full" />
          <Link
            href="/contact"
            className="reveal-item inline-flex items-center gap-3 text-lg text-stone-600 hover:text-cyan-600 transition-colors group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
