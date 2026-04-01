"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        y: isVisible ? 0 : "-100%",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isVisible]);

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();
      tl.set(menuRef.current, { display: "flex", opacity: 0, scale: 0.95 })
        .to(menuRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        .fromTo(
          linksRef.current,
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.25,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.15"
        );

      gsap.to(line1Ref.current, {
        rotate: 45,
        y: 8,
        duration: 0.2,
        ease: "power2.inOut",
      });
      gsap.to(line2Ref.current, {
        opacity: 0,
        scaleX: 0,
        duration: 0.15,
        ease: "power2.inOut",
      });
      gsap.to(line3Ref.current, {
        rotate: -45,
        y: -8,
        duration: 0.2,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });

      gsap.to(line1Ref.current, {
        rotate: 0,
        y: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });
      gsap.to(line2Ref.current, {
        opacity: 1,
        scaleX: 1,
        duration: 0.15,
        ease: "power2.inOut",
      });
      gsap.to(line3Ref.current, {
        rotate: 0,
        y: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 bg-[#fafaf9]/90 backdrop-blur-md border-b border-stone-200"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold font-serif text-[#1c1917] hover:text-cyan-600 transition-colors"
        >
          Agency
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-serif font-medium tracking-wide uppercase transition-colors ${
                    isActive
                      ? "text-cyan-600"
                      : "text-stone-600 hover:text-cyan-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span
            ref={line1Ref}
            className="block w-6 h-0.5 bg-[#1c1917] origin-center"
          />
          <span
            ref={line2Ref}
            className="block w-6 h-0.5 bg-[#1c1917]"
          />
          <span
            ref={line3Ref}
            className="block w-6 h-0.5 bg-[#1c1917] origin-center"
          />
        </button>
      </nav>

      <div
        ref={menuRef}
        className="fixed left-0 right-0 bottom-0 top-16 z-30 bg-[#fafaf9] hidden flex-col items-center justify-center gap-8 md:hidden! h-[calc(100dvh-64px)]"
      >
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
              className={`text-3xl font-serif transition-colors ${
                isActive
                  ? "text-cyan-600"
                  : "text-[#1c1917] hover:text-cyan-600"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
