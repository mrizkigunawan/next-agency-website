"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ClipImageBreak({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      clipPath: "circle(75% at 50% 50%)",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden relative">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ clipPath: "circle(25% at 50% 50%)" }}
      />
    </div>
  );
}
