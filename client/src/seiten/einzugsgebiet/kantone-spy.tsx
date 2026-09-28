"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Kanton aus dem Element unter Zeiger oder Fokus: Karte der Liste oder Fläche auf der Karte */
function keyOf(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) return null;
  const card = target.closest<HTMLElement>("[data-kanton-karte]");
  if (card) return card.dataset.kantonKarte ?? null;
  const shape = target.closest<SVGElement>("[data-kanton]");
  return shape?.getAttribute("data-kanton") ?? null;
}

/**
 * Scrollspy der Kantonskarte (Umbau 9, 25-AUDIT/visuell.md): Ab lg steht die
 * Karte klebend links, rechts laufen die fünf Kantonskarten vorbei. Der Kanton,
 * dessen Karte der Bildschirmmitte am nächsten liegt, tritt auf der Karte voll
 * rot hervor, die übrigen treten zurück. Zeiger oder Tastaturfokus auf einer
 * Karte oder einer Kantonsfläche haben Vorrang. Der Zustand steht nur als
 * data-map-active am Wrapper; Karte und Karten sind Server-Komponenten und
 * reagieren per CSS (CantonMap, KantonKarte mit spy). Ohne JavaScript und
 * unter lg bleiben alle fünf Kantone gleich rot.
 */
export default function KantoneSpy({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spied, setSpied] = useState<string | null>(null);
  const [pointed, setPointed] = useState<string | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-kanton-karte]"));
    const wide = window.matchMedia("(min-width: 1024px)");
    let frame = 0;
    const pick = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      const box = root.getBoundingClientRect();
      if (!wide.matches || box.top > mid || box.bottom < mid) {
        setSpied(null);
        return;
      }
      let best: string | null = null;
      let distance = Infinity;
      for (const card of cards) {
        const r = card.getBoundingClientRect();
        const d = Math.abs((r.top + r.bottom) / 2 - mid);
        if (d < distance) {
          distance = d;
          best = card.dataset.kantonKarte ?? null;
        }
      }
      setSpied(best);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    wide.addEventListener("change", schedule);
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      wide.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const active = pointed ?? spied;
  return (
    <div
      ref={ref}
      data-map-active={active ?? undefined}
      className={className}
      onPointerOver={event => setPointed(keyOf(event.target))}
      onPointerLeave={() => setPointed(null)}
      onFocus={event => setPointed(keyOf(event.target))}
      onBlur={() => setPointed(null)}
    >
      {children}
    </div>
  );
}
