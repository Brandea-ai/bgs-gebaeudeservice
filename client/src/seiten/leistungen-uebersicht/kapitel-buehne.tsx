"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Klebendes Bild eines Kapitels (visuell.md Umbau 5, Muster era-residence
 * Dossier 06: sticky statt Pin, normale Höhe, kein überhoher Scrollweg). Die
 * Bilder liegen übereinander; sichtbar ist das Bild der letzten Zeile, deren
 * Oberkante die Lesemitte (45 % der Fensterhöhe) erreicht hat. Der Scrollspy
 * der Abschnittsleiste (useScrollSpy) misst an der Kopfkante, das wäre für ein
 * Bild neben dem Text zu spät. Ohne JavaScript und vor der ersten Zeile das
 * erste Bild. Die Bilder rendert der Server und reicht sie als Knoten herein,
 * damit kein Wörterbuch im Client-Bundle landet. Mit reduzierter Bewegung
 * wechselt das Bild ohne Überblendung. Unter lg ist die Bühne ausgeblendet
 * und rechnet nicht mit.
 */
export default function KapitelBuehne({
  ids,
  images,
  className = "",
}: {
  ids: string[];
  images: ReactNode[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const key = ids.join("|");

  useEffect(() => {
    const rows = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!rows.length) return;
    const wide = window.matchMedia("(min-width: 1024px)");
    let frame = 0;
    const pick = () => {
      frame = 0;
      if (!wide.matches) return;
      const line = window.innerHeight * 0.45;
      let current = 0;
      rows.forEach((row, i) => {
        if (row.getBoundingClientRect().top <= line) current = i;
      });
      setIndex(current);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <div className={`relative overflow-hidden rounded-[3px] bg-stone ${className}`} aria-hidden="true">
      {images.map((image, i) => (
        <div
          key={ids[i]}
          data-active={i === index ? "" : undefined}
          className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out data-[active]:opacity-100 motion-reduce:transition-none"
        >
          {image}
        </div>
      ))}
    </div>
  );
}
