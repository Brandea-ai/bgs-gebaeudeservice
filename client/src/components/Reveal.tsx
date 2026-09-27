"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Tag = "div" | "section" | "li" | "article" | "figure" | "header" | "ul" | "ol" | "dl";

function useInView(ref: React.RefObject<HTMLElement | null>) {
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

/**
 * Einblendung eines einzelnen Blocks (F7, F14): Das Element bekommt die Klasse
 * «in», sobald es in den Bildschirm kommt. Die Bewegung selbst steht in
 * globals.css (.rv) und gilt nur mit JavaScript (html.js) und ohne Wunsch nach
 * weniger Bewegung. Nie für den ersten Bildschirm, Überschriften oder Formulare.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useInView(ref);
  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`rv ${className}`}
      style={delay ? ({ "--rv-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

/**
 * Gestaffelte Gruppe (F14): ein Beobachter je Gruppe, die Kinder erscheinen mit
 * kleinem Versatz (nth-child in globals.css, höchstens sechs Stufen). Für Listen
 * ab drei gleichartigen Elementen: Kennzahlen, Karten, Checklisten.
 */
export function RevealGroup({
  children,
  className = "",
  as: Tag = "div",
  id,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  id?: string;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  useInView(ref);
  return (
    <Tag ref={ref as never} id={id} className={`rv-group ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
