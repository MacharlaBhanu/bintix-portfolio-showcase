import { useEffect, useRef } from "react";

export function useScrollReveal(staggerDelay = 80) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal the section
            const sectionEls = el.querySelectorAll(".section-reveal");
            sectionEls.forEach((s) => s.classList.add("revealed"));

            // Stagger cards
            const cards = el.querySelectorAll(".card-stagger");
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("revealed"), i * staggerDelay);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
}
