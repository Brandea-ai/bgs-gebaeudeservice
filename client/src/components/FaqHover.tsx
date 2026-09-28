"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fragen öffnen sich beim Überfahren (E82, wie FIMI): auf Geräten mit Maus
 * öffnet der Zeiger eine Frage und schliesst die übrigen. Klick, Tastatur und
 * Touch bleiben wie bei details gewohnt; die Antworten stehen im HTML.
 */
export default function FaqHover({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const items = Array.from(root.querySelectorAll<HTMLDetailsElement>("details"));
    const handlers = items.map(item => {
      const open = () => items.forEach(other => (other.open = other === item));
      item.addEventListener("mouseenter", open);
      return () => item.removeEventListener("mouseenter", open);
    });
    return () => handlers.forEach(off => off());
  }, []);
  return <div ref={ref}>{children}</div>;
}
