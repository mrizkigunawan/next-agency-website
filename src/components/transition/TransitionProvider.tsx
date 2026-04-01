"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const COLUMNS = 5;

const COLORS = [
  "#0e7490",
  "#0891b2",
  "#06b6d4",
  "#22d3ee",
  "#67e8f9",
];

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimatingRef = useRef(false);
  const hasNavigatedRef = useRef(false);

  useEffect(() => {
    gsap.set(columnsRef.current, { yPercent: 100 });
  }, []);

  const animateIn = useCallback(
    (onComplete: () => void) => {
      const columns = columnsRef.current;
      if (!columns.length) {
        onComplete();
        return;
      }

      gsap.set(containerRef.current, { display: "flex" });

      gsap.fromTo(
        columns,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.inOut",
          onComplete,
        }
      );
    },
    []
  );

  const animateOut = useCallback(() => {
    const columns = columnsRef.current;
    if (!columns.length) return;

    gsap.to(columns, {
      yPercent: -100,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(containerRef.current, { display: "none" });
        isAnimatingRef.current = false;
      },
    });
  }, []);

  const navigate = useCallback(
    (href: string) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      hasNavigatedRef.current = true;

      animateIn(() => {
        router.push(href);
      });
    },
    [router, animateIn]
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isInternal =
        anchor.origin === window.location.origin &&
        !anchor.hasAttribute("target") &&
        !href.startsWith("#") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:");

      if (isInternal && href !== pathname) {
        e.preventDefault();
        navigate(href);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, navigate]);

  useEffect(() => {
    if (!hasNavigatedRef.current) return;

    gsap.set(columnsRef.current, { yPercent: 0 });
    gsap.set(containerRef.current, { display: "flex" });
    animateOut();
  }, [pathname, animateOut]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 z-[9999] flex pointer-events-none"
        style={{ display: "none" }}
      >
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              columnsRef.current[i] = el;
            }}
            className="flex-1 h-full"
            style={{ backgroundColor: COLORS[i] }}
          />
        ))}
      </div>
      {children}
    </>
  );
}
