"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.set(curtainRef.current, { yPercent: 0 })
        .to(curtainRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
        });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div
        ref={curtainRef}
        className="fixed inset-0 z-50 bg-cyan-600 pointer-events-none"
      />
      {children}
    </div>
  );
}