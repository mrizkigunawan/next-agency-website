"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: isVisible ? "auto" : "none",
      });
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#1c1917] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-colors duration-300"
      style={{ opacity: 0, scale: 0.8 }}
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}
