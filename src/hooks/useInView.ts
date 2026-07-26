import { useEffect, useRef, useState } from "react";

// Fires once, when the element crosses ~15% into the viewport, then stops
// observing — reveal-on-scroll should never re-trigger on scroll-back.
export function useInView<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
