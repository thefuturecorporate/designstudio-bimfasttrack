"use client";
import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".fade-in-up");
      children.forEach((child) => {
        child.setAttribute("data-animate", "true");
        observer.observe(child);
      });
      if (el.classList.contains("fade-in-up")) {
        el.setAttribute("data-animate", "true");
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
