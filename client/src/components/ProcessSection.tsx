"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Client-Hülle der Prozess-Sektion (F14): Ein Beobachter auf den Schritten
 * setzt data-active direkt am DOM, ohne React-Zustand. Das CSS hebt den
 * aktiven Schritt und den passenden Teil der Figur hervor. Ohne JavaScript
 * fehlt das Attribut, und alles ist voll sichtbar.
 */
export default function ProcessSection({
  n,
  className,
  labelledBy,
  children,
}: {
  n: number;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const steps = Array.from(el.querySelectorAll<HTMLElement>("[data-step]"));
    if (!steps.length) return;
    const observer = new IntersectionObserver(
      entries => {
        // Der Schritt, der das Band um die Bildschirmmitte schneidet; sonst bleibt der letzte
        const hit = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!hit) return;
        const step = (hit.target as HTMLElement).dataset.step;
        el.dataset.active = step;
        // Nur das Video des aktiven Schritts spielt (E80)
        el.querySelectorAll<HTMLVideoElement>("video[data-step-video]").forEach(video => {
          if (video.dataset.stepVideo === step) {
            if (video.preload !== "auto") video.preload = "auto";
            void video.play().catch(() => undefined);
          } else if (!video.paused) {
            video.pause();
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
    );
    steps.forEach(step => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  // Ohne eigenen Namen kein zweites section in der Sektion (Landmarke ohne Namen)
  const Tag = labelledBy ? "section" : "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      aria-labelledby={labelledBy}
      className={`process ${className ?? ""}`}
      style={{ "--n": n } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
