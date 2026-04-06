"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MIN_DISPLAY_TIME = 800;

export default function InitialLoader() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLParagraphElement>(null);
  const brandRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let hasDismissed = false;
    let progressTween: gsap.core.Tween | null = null;
    const progressObj = { val: 0 };

    gsap.set(brandRef.current, { opacity: 0, scale: 0.95 });

    const animateProgress = (target: number, duration: number) => {
      if (progressTween) progressTween.kill();
      progressObj.val = progressRef.current;
      progressTween = gsap.to(progressObj, {
        val: target,
        duration,
        ease: "power1.inOut",
        onUpdate: function () {
          progressRef.current = progressObj.val;
          setProgress(progressObj.val);
        },
      });
    };

    const dismiss = () => {
      if (hasDismissed) return;
      hasDismissed = true;

      if (progressTween) progressTween.kill();

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

      setTimeout(() => {
        if (curtainRef.current) {
          gsap.to(curtainRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => setIsVisible(false),
          });
        }
      }, remaining);
    };

    const handleLoad = () => {
      animateProgress(100, 0.6);
      setTimeout(() => {
        if (circleRef.current && progressTextRef.current && brandRef.current) {
          gsap.to([circleRef.current, progressTextRef.current], {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.to(brandRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
                onComplete: dismiss,
              });
            },
          });
        }
      }, 800);
    };

    window.addEventListener("load", handleLoad, { once: true });

    const fallbackTimeout = setTimeout(() => {
      animateProgress(100, 0.6);
      setTimeout(() => {
        if (circleRef.current && progressTextRef.current && brandRef.current) {
          gsap.to([circleRef.current, progressTextRef.current], {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.to(brandRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
                onComplete: dismiss,
              });
            },
          });
        }
      }, 800);
    }, 5000);

    animateProgress(85, 4.5);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimeout);
      if (progressTween) progressTween.kill();
    };
  }, []);

  if (!isVisible) return null;

  const circumference = 2 * Math.PI * 56;
  const offset = circumference - (circumference * progress) / 100;

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#fafaf9]"
    >
      <div className="relative w-40 h-40">
        <div ref={circleRef} className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 140 140">
            <circle
              cx="70"
              cy="70"
              r="56"
              fill="none"
              stroke="#e7e5e4"
              strokeWidth="2"
            />
            <circle
              cx="70"
              cy="70"
              r="56"
              fill="none"
              stroke="#a8a29e"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 70 70)"
            />
          </svg>
        </div>
        <p
          ref={progressTextRef}
          className="absolute inset-0 flex items-center justify-center text-sm font-mono text-stone-500 tracking-wider"
        >
          {Math.round(progress)}%
        </p>
        <p
          ref={brandRef}
          className="absolute inset-0 flex items-center justify-center text-4xl font-serif font-bold text-stone-800 opacity-0"
        >
          Agency
        </p>
      </div>
    </div>
  );
}
