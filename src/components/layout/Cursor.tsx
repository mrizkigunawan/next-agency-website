"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;

    const quickX = gsap.quickTo(cursor, "x", {
      duration: 0.3,
      ease: "power2.out",
    });
    const quickY = gsap.quickTo(cursor, "y", {
      duration: 0.3,
      ease: "power2.out",
    });

    const onMouseMove = (e: MouseEvent) => {
      quickX(e.clientX - 16);
      quickY(e.clientY - 16);
    };

    window.addEventListener("mousemove", onMouseMove);

    const hoverSelector =
      "a, button, [role='button'], input, textarea, select, .cursor-pointer";

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(hoverSelector);
      if (target) setIsHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(hoverSelector);
      if (target) setIsHovering(false);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      scale: isHovering ? 1.2 : 1,
      backgroundColor: isHovering ? "#ffffff" : "transparent",
      borderColor: isHovering ? "transparent" : "#1c1917",
      mixBlendMode: isHovering ? "difference" : "normal",
      duration: 0.2,
      ease: "power2.out",
    });
  }, [isHovering]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#1c1917] pointer-events-none z-[9999] hidden md:block"
      style={{ willChange: "transform" }}
    />
  );
}
