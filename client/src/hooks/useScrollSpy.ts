"use client";

import { useEffect, useState } from "react";

/**
 * Scrollspy (F14): Welcher Abschnitt liegt gerade im Leseband? Ein Beobachter
 * für alle Abschnitte, ein Set der schneidenden ids; aktiv ist die erste in
 * Dokumentreihenfolge. Am Seitenende gilt der letzte Eintrag, nach einem
 * Sprung per Anker sofort das Ziel. Ohne JavaScript bleiben Sprunglinks.
 */
export function useScrollSpy(
  ids: string[],
  options: { rootMargin?: string } = {}
): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join("|");
  const { rootMargin = "-20% 0px -60% 0px" } = options;

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const targets = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;
    const order = new Map(targets.map((el, i) => [el.id, i]));
    let frame = 0;

    const pick = () => {
      frame = 0;
      const nearEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (nearEnd) {
        setActive(targets[targets.length - 1].id);
        return;
      }
      // Aktiv ist der letzte Abschnitt, dessen Oberkante über der Landelinie liegt
      // (scroll-padding-top): so stimmt die Markierung auch direkt nach einem Ankerklick
      const line =
        (parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop
        ) || 0) + 2;
      let current: string | null = null;
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };

    const observer = new IntersectionObserver(
      () => schedule(),
      { rootMargin, threshold: 0 }
    );
    targets.forEach(el => observer.observe(el));

    const onHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (order.has(id)) setActive(id);
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("scroll", schedule, { passive: true });
    onHash();
    schedule();
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, rootMargin]);

  return active;
}
