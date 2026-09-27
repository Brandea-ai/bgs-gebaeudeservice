"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Zählt eine Kennzahl hoch, sobald sie sichtbar wird (F7). Der Wert steht als
 * Text im HTML («Über 120»), der Zähler ersetzt nur die Ziffern, damit die
 * Aussage ohne JavaScript und für Suchmaschinen gleich bleibt.
 */
export default function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/\d+/);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = Number(match[0]);
    const start = target > 1000 ? Math.max(0, target - 60) : 0;
    let frame = 0;
    const run = () => {
      const t0 = performance.now();
      const duration = 1400;
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = Math.round(start + (target - start) * eased);
        setShown(value.replace(match[0], String(current)));
        if (p < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
