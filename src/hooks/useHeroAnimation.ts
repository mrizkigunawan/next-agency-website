import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export function useHeroAnimation(
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  const splitsRef = useRef<ReturnType<typeof SplitText.create>[]>([]);

  useGSAP(
    () => {
      const scope = containerRef.current;
      if (!scope) return;

      const heroLabel = scope.querySelector(".hero-label");
      const heroTitle = scope.querySelector(".hero-title");
      const heroDesc = scope.querySelector(".hero-desc");

      const heroTl = gsap.timeline();

      if (heroLabel) {
        const split = SplitText.create(heroLabel, {
          type: "words",
          mask: "words",
        });
        splitsRef.current.push(split);

        heroTl.fromTo(
          split.words,
          { yPercent: 100 },
          { yPercent: 0, stagger: 0.05, ease: "power3.out" }
        );
      }

      if (heroTitle) {
        const split = SplitText.create(heroTitle, {
          type: "chars",
          mask: "chars",
        });
        splitsRef.current.push(split);

        heroTl.fromTo(
          split.chars,
          { yPercent: 100 },
          { yPercent: 0, stagger: 0.05, ease: "power3.out" },
          "-=0.3"
        );
      }

      if (heroDesc) {
        const split = SplitText.create(heroDesc, {
          type: "words",
          mask: "words",
        });
        splitsRef.current.push(split);

        heroTl.fromTo(
          split.words,
          { yPercent: 100 },
          { yPercent: 0, stagger: 0.03, ease: "power3.out" },
          "<"
        );
      }

      return () => {
        splitsRef.current.forEach((split) => split.revert());
        splitsRef.current = [];
      };
    },
    { scope: containerRef }
  );

  return splitsRef;
}
