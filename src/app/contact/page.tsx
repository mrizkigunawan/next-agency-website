"use client";

import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(containerRef);
  useSectionReveal(containerRef);

  return (
    <div ref={containerRef}>
      <section className="py-32 md:py-44 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4 hero-label">
            Contact
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1c1917] leading-[0.95] tracking-tight max-w-4xl hero-title">
            Get in <span className="text-cyan-600">Touch</span>
          </h1>
          <p className="text-lg text-stone-500 mt-8 max-w-2xl leading-relaxed hero-desc">
            Every great partnership starts with a conversation. Tell us what
            you&apos;re working on and we&apos;ll help you figure out the next
            step.
          </p>
        </div>
      </section>

      <section className="reveal-section py-12 px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal-left">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4">
                Send us a message
              </p>
              <h2 className="font-serif text-3xl text-[#1c1917] mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-stone-500 mb-8 leading-relaxed">
                Fill out the form below and we&apos;ll get back to you within 24
                hours. The more details you share, the better we can understand
                your needs.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm text-stone-500 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-transparent focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm text-stone-500 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-transparent focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-stone-500 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-transparent focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-stone-500 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-transparent focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#1c1917] text-white font-medium rounded-full hover:bg-cyan-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="reveal-right">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-4">
                Contact Information
              </p>
              <h2 className="font-serif text-3xl text-[#1c1917] mb-4">
                Reach Us Directly
              </h2>
              <p className="text-stone-500 mb-8 leading-relaxed">
                Prefer to reach out directly? Here are all the ways you can get
                in touch with our team. We&apos;re here to help.
              </p>
              <div className="space-y-8">
                {[
                  { label: "Email", value: "hello@agency.com" },
                  { label: "Phone", value: "+1 (555) 123-4567" },
                  { label: "Address", value: "123 Creative Street\nSan Francisco, CA 94102" },
                  { label: "Business Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-lg text-[#1c1917] whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
