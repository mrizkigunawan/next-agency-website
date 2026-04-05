"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MIN_DISPLAY_TIME = 800;

export default function InitialLoader() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = Array.from(document.images);
    const totalImages = images.length;
    let loadedCount = 0;
    const startTime = Date.now();

    const updateProgress = () => {
      loadedCount++;
      const newProgress = totalImages > 0 ? (loadedCount / totalImages) * 100 : 100;
      setProgress(Math.min(newProgress, 100));

      if (loadedCount >= totalImages) {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

        setTimeout(() => {
          if (curtainRef.current) {
            gsap.to(curtainRef.current, {
              yPercent: -100,
              duration: 0.8,
              ease: "power3.inOut",
              onComplete: () => {
                setIsVisible(false);
                window.dispatchEvent(new CustomEvent("loader:complete"));
              },
            });
          }
        }, remaining);
      }
    };

    if (totalImages === 0) {
      setTimeout(() => {
        if (curtainRef.current) {
          gsap.to(curtainRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
              setIsVisible(false);
              window.dispatchEvent(new CustomEvent("loader:complete"));
            },
          });
        }
      }, MIN_DISPLAY_TIME);
    } else {
      images.forEach((img) => {
        if (img.complete) {
          updateProgress();
        } else {
          img.addEventListener("load", updateProgress, { once: true });
          img.addEventListener("error", updateProgress, { once: true });
        }
      });
    }
  }, []);

  if (!isVisible) return null;

  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (circumference * progress) / 100;

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#fafaf9]"
    >
      <div className="text-center">
        <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#e7e5e4"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#a8a29e"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <p className="mt-4 text-sm font-mono text-stone-500 tracking-wider">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
