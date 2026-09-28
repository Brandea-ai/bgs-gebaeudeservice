"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Szene nur, wenn der Bildschirm hoch und breit genug ist (gleiche Grenze wie globals.css) */
const SCENE_QUERY = "(min-width: 1024px) and (min-height: 640px)";
/** Platz für die schwebende Kopfzeile und etwas Luft, wenn die Szene klebt */
const HEADER_ROOM = 112;

/**
 * Client-Hülle der Prozess-Sektion (F14, E85). Der Scroll setzt nur
 * data-active am DOM, ohne React-Zustand:
 * - Szene (process--area, ab lg): Fortschritt durch den Scrollweg, gemessen am
 *   Versatz der klebenden Szene in ihrem Bereich, verteilt auf die Schritte.
 *   Passt die Szene nicht in den Bildschirm, setzt die Hülle data-fit="0" und
 *   das CSS zeigt ein statisches Raster.
 * - Liste (Handy, vertikal): der letzte Schritt, der die Bildschirmmitte
 *   überschritten hat.
 * Nur das Video des aktiven Schritts spielt, und nur solange die Sektion im
 * Bild ist. Ohne JavaScript und mit reduced motion fehlt data-active: alles
 * ist voll sichtbar, die Szene steht still.
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
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scene = window.matchMedia(SCENE_QUERY);
    const screen = el.querySelector<HTMLElement>(".process-screen");
    const list = el.querySelector<HTMLElement>(".process-list");
    const figure = el.querySelector<HTMLElement>(".process-figure");
    const steps = Array.from(el.querySelectorAll<HTMLElement>("[data-step]"));
    const videos = Array.from(el.querySelectorAll<HTMLVideoElement>("video[data-step-video]"));
    if (!steps.length) return;
    let visible = false;
    let frame = 0;

    const playActive = () => {
      const step = el.dataset.active;
      videos.forEach(video => {
        if (visible && video.dataset.stepVideo === step) {
          if (video.preload !== "auto") video.preload = "auto";
          if (video.paused) void video.play().catch(() => undefined);
        } else if (!video.paused) {
          video.pause();
        }
      });
    };

    const measureFit = () => {
      if (!screen || !list) return;
      // Inhalt der Szene gegen die freie Höhe unter Kopfzeile und Abschnittsleiste (SectionNav)
      const subnav = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--subnav-h")) || 0;
      const need = Math.max(list.scrollHeight, figure?.offsetHeight ?? 0);
      el.dataset.fit = need <= window.innerHeight - HEADER_ROOM - subnav ? "1" : "0";
    };

    const update = () => {
      frame = 0;
      let active = 1;
      if (screen && scene.matches && el.dataset.fit !== "0") {
        const area = el.getBoundingClientRect();
        const stage = screen.getBoundingClientRect();
        const range = area.height - stage.height;
        const progress = range > 0 ? Math.min(1, Math.max(0, (stage.top - area.top) / range)) : 0;
        active = Math.min(n, Math.floor(progress * n) + 1);
      } else {
        const middle = window.innerHeight * 0.5;
        steps.forEach((step, i) => {
          if (step.getBoundingClientRect().top < middle) active = i + 1;
        });
      }
      const next = String(active);
      if (el.dataset.active !== next) {
        el.dataset.active = next;
        playActive();
      }
    };

    const schedule = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measureFit();
      schedule();
    };

    const observer = new IntersectionObserver(
      entries => {
        visible = entries.some(entry => entry.isIntersecting);
        if (visible) schedule();
        playActive();
      },
      { threshold: 0 }
    );
    measureFit();
    observer.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    scene.addEventListener("change", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      scene.removeEventListener("change", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [n]);

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
