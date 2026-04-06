"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RevealImageBreak({
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
      scale: 1,
      ease: 'none',
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
    <div ref={containerRef} className="relative h-screen -mt-[100vh] z-0">
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ scale: '1.2' } as React.CSSProperties}
      />
    </div>
  );
}
