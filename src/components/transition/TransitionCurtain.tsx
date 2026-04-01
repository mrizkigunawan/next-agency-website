"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TransitionCurtain() {
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathRef.current) {
      setIsVisible(true);

      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          prevPathRef.current = pathname;
        },
      });

      tl.set(curtainRef.current, { yPercent: 0 })
        .to(curtainRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
        });
    }
  }, [pathname]);

  if (!isVisible) return null;

  return (
      <div
        ref={curtainRef}
        id="page-curtain"
        className="fixed inset-0 z-50 bg-cyan-600 pointer-events-none"
      />
  );
}