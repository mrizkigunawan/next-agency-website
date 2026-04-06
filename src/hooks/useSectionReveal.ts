import { gsap, useGSAP } from "@/lib/gsap";

export function useSectionReveal(
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  useGSAP(
    () => {
      const scope = containerRef.current;
      if (!scope) return;

      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        const label = section.querySelector(".section-label");
        const title = section.querySelector(".section-title");
        const desc = section.querySelector(".section-desc");
        const items = gsap.utils.toArray<HTMLElement>(
          ".reveal-item",
          section
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });

        if (label) {
          tl.fromTo(
            label,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          );
        }

        if (title) {
          tl.fromTo(
            title,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          );
        }

        if (desc) {
          tl.fromTo(
            desc,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "-=0.3"
          );
        }

        if (items.length > 0) {
          tl.from(
            items,
            {
              y: 50,
              opacity: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.3"
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
        gsap.fromTo(
          el,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((el) => {
        gsap.fromTo(
          el,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );
}
