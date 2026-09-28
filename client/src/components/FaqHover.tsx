"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Absichtsverzögerung: ein kurzes Überstreifen öffnet noch nichts */
const INTENT_MS = 150;
/** Etwas länger als das Öffnen und Schliessen in globals.css (--dur-state 320 ms) */
const SETTLE_MS = 420;

/**
 * Fragen öffnen sich beim Überfahren (E82, wie FIMI): auf Geräten mit Maus
 * öffnet der Zeiger nach kurzer Absicht eine Frage und schliesst die übrigen.
 * Schliesst dabei eine Antwort darüber, gleicht die Seite die Höhe Bild für
 * Bild aus, damit die gewählte Frage unter dem Zeiger stehen bleibt (Audit E84:
 * vorher rutschte die Liste hoch und öffnete die nächste Frage). Die Kopfzeile
 * behält währenddessen ihren Zustand (data-nav-hold). Klick, Tastatur und Touch
 * bleiben wie bei details gewohnt; die Antworten stehen im HTML.
 */
export default function FaqHover({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const html = document.documentElement;
    const items = Array.from(root.querySelectorAll<HTMLDetailsElement>("details"));
    let timer: number | undefined;
    let frame: number | undefined;

    const keepInPlace = (item: HTMLDetailsElement, startTop: number) => {
      if (frame) cancelAnimationFrame(frame);
      const until = performance.now() + SETTLE_MS;
      html.dataset.navHold = "1";
      const step = () => {
        const drift = item.getBoundingClientRect().top - startTop;
        if (Math.abs(drift) > 0.5) window.scrollBy({ top: drift, behavior: "instant" });
        if (performance.now() < until) frame = requestAnimationFrame(step);
        else html.dataset.navHold = "0";
      };
      frame = requestAnimationFrame(step);
    };

    const offs = items.map(item => {
      const enter = () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          if (item.open && items.every(other => other === item || !other.open)) return;
          const startTop = item.getBoundingClientRect().top;
          items.forEach(other => (other.open = other === item));
          keepInPlace(item, startTop);
        }, INTENT_MS);
      };
      const cancel = () => window.clearTimeout(timer);
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", cancel);
      return () => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", cancel);
      };
    });

    return () => {
      window.clearTimeout(timer);
      if (frame) cancelAnimationFrame(frame);
      html.dataset.navHold = "0";
      offs.forEach(off => off());
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}
