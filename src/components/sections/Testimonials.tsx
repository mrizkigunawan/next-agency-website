"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const testimonials = [
  {
    quote: "They transformed our outdated website into a modern, high-converting platform. Our traffic increased by 200% in three months.",
    name: "Sarah Mitchell",
    role: "CEO, TechStart",
  },
  {
    quote: "The team's attention to detail and creative approach exceeded our expectations. They truly understood our vision from day one.",
    name: "James Chen",
    role: "Founder, Bloom Studios",
  },
  {
    quote: "Working with them felt like having an in-house team. Their monthly support plan has been invaluable for our growth.",
    name: "Emily Rodriguez",
    role: "Marketing Director, Nexus Digital",
  },
  {
    quote: "From day one, they made us feel like their only client. The results speak for themselves — our conversion rate doubled.",
    name: "David Park",
    role: "COO, Horizon Labs",
  },
  {
    quote: "We tried three agencies before them. They were the first to actually listen to what we needed instead of pushing a template.",
    name: "Lisa Tran",
    role: "Founder, Pulse Media",
  },
  {
    quote: "Their monthly plan gave us the flexibility to scale without the overhead of hiring internally. Best decision we made this year.",
    name: "Marcus Webb",
    role: "VP of Product, Acme Corp",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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
  }, { scope: containerRef });

  useEffect(() => {
    if (marqueeRef.current) {
      const inner = marqueeRef.current.querySelector(".marquee-inner");
      if (inner) {
        const totalWidth = inner.scrollWidth / 2;
        const tween = gsap.to(inner, {
          x: -totalWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
        });

        const onEnter = () => tween.pause();
        const onLeave = () => tween.play();

        marqueeRef.current.addEventListener("mouseenter", onEnter);
        marqueeRef.current.addEventListener("mouseleave", onLeave);

        return () => {
          marqueeRef.current?.removeEventListener("mouseenter", onEnter);
          marqueeRef.current?.removeEventListener("mouseleave", onLeave);
          tween.kill();
        };
      }
    }
  }, []);

  return (
    <section ref={containerRef} className="py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 section-label">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] section-title">
            What Our Clients Say
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto leading-relaxed section-desc">
            Don&apos;t take our word for it. Here&apos;s what our clients have
            to say about working with us.
          </p>
        </div>
      </div>
      <div ref={marqueeRef} className="marquee-container relative">
        <div className="marquee-inner flex gap-8 w-max">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[380px] md:w-[420px] bg-[#f5f5f4] p-8 md:p-10 rounded-2xl border border-stone-200"
            >
              <div className="text-cyan-600 text-5xl font-serif leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-stone-600 leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-serif text-lg text-[#1c1917]">
                  {testimonial.name}
                </div>
                <div className="text-sm text-stone-400 mt-1">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
