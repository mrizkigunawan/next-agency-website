"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
}: TransitionLinkProps) {
  const router = useRouter();
  const curtainRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const curtain = document.getElementById("page-curtain");

    if (curtain) {
      const tl = gsap.timeline({
        onComplete: () => {
          router.push(href);
        },
      });

      tl.set(curtain, { yPercent: 0 })
        .to(curtain, {
          yPercent: 100,
          duration: 0.6,
          ease: "power3.inOut",
        });
    } else {
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}