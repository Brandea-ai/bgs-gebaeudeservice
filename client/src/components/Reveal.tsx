"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Einblendung beim Scrollen (F7): Das Element bekommt die Klasse «in», sobald es
 * in den Bildschirm kommt. Die Bewegung selbst steht in globals.css (.rv) und
 * gilt nur mit JavaScript (html.js) und ohne Wunsch nach weniger Bewegung. Ohne
 * JavaScript, für Suchmaschinen und Vorschaubilder ist alles sofort sichtbar.
 * delay staffelt Kinder derselben Gruppe.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure" | "header";
  variant?: "up" | "fade" | "scale" | "left" | "right";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("in");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`rv rv-${variant} ${className}`}
      style={{ "--rv-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
