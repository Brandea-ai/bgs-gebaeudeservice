"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Szene nur, wenn der Bildschirm hoch und breit genug ist (gleiche Grenze wie globals.css) */
const SCENE_QUERY = "(min-width: 1024px) and (min-height: 640px)";
/** Zeile nebeneinander ab lg (process--row, gleiche Grenze wie globals.css) */
const ROW_QUERY = "(min-width: 1024px)";
/**
 * Feste Höhe der schwebenden Kopfzeile in rem (--header-room in globals.css:
 * --nav-top 0.75rem plus --header-h 4rem). Bewusst fest und nicht
 * --header-offset, das beim Ein- und Ausfahren der Kopfzeile springt (F1).
 */
const HEADER_ROOM_REM = 4.75;

/**
 * Client-Hülle der Prozess-Sektion (F14, E85). Der Scroll setzt nur
 * data-active am DOM, ohne React-Zustand:
 * - Szene (process--scene, ab lg, ab drei Schritten): Fortschritt durch den
 *   Scrollweg, gemessen am Versatz der klebenden Szene in ihrem Bereich,
 *   verteilt auf die Schritte. Die Hülle meldet die Höhe der Szene als
 *   --scene-h, das CSS klebt sie damit mittig. Passt die Szene nicht in den
 *   Bildschirm, setzt die Hülle data-fit="0" und das CSS zeigt ein statisches
 *   Raster.
 * - Zeile (process--row, ab lg): kein aktiver Schritt, alles steht voll da.
 * - Liste und ruhiges Raster (Handy, vertikal, bis zwei Schritte): der letzte
 *   Schritt, der die Bildschirmmitte überschritten hat.
 * Nur das Video des aktiven Schritts spielt, nur solange die Sektion im Bild
 * und die Bühne sichtbar ist (auf dem Handy ist sie ausgeblendet, dann lädt
 * und spielt kein Video, P4). Ohne JavaScript und mit reduced motion fehlt
 * data-active: alles ist voll sichtbar, die Szene steht still.
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
    const wide = window.matchMedia(ROW_QUERY);
    const isScene = el.classList.contains("process--scene");
    const isRow = el.classList.contains("process--row");
    const screen = el.querySelector<HTMLElement>(".process-screen");
    const list = el.querySelector<HTMLElement>(".process-list");
    const figure = el.querySelector<HTMLElement>(".process-figure");
    const steps = Array.from(el.querySelectorAll<HTMLElement>("[data-step]"));
    const videos = Array.from(el.querySelectorAll<HTMLVideoElement>("video[data-step-video]"));
    if (!steps.length) return;
    let visible = false;
    let frame = 0;

    // Bühne ausgeblendet (Handy: hidden lg:block) heisst: kein Video laden oder spielen
    const stageShown = () => figure !== null && figure.offsetParent !== null;

    const playActive = () => {
      const step = el.dataset.active;
      const play = visible && stageShown();
      videos.forEach(video => {
        if (play && video.dataset.stepVideo === step) {
          if (video.preload !== "auto") video.preload = "auto";
          if (video.paused) void video.play().catch(() => undefined);
        } else if (!video.paused) {
          video.pause();
        }
      });
    };

    const measureFit = () => {
      if (!isScene || !screen || !list) return;
      // Inhalt der Szene gegen die freie Höhe unter Kopfzeile und Abschnittsleiste (SectionNav)
      const root = getComputedStyle(document.documentElement);
      const rem = parseFloat(root.fontSize) || 16;
      const subnav = parseFloat(root.getPropertyValue("--subnav-h")) || 0;
      const need = Math.max(list.scrollHeight, figure?.offsetHeight ?? 0) + 3 * rem;
      el.dataset.fit = need <= window.innerHeight - HEADER_ROOM_REM * rem - subnav ? "1" : "0";
      el.style.setProperty("--scene-h", `${screen.offsetHeight}px`);
    };

    const update = () => {
      frame = 0;
      if (isRow && wide.matches) {
        // Zeile nebeneinander: kein aktiver Schritt, Linie und Punkte stehen voll
        if (el.dataset.active !== undefined) delete el.dataset.active;
        return;
      }
      let active = 1;
      if (isScene && screen && scene.matches && el.dataset.fit !== "0") {
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
      playActive();
    };

    const observer = new IntersectionObserver(
      entries => {
        visible = entries.some(entry => entry.isIntersecting);
        if (visible) schedule();
        playActive();
      },
      { threshold: 0 }
    );
    // Höhe der Szene ändert sich auch ohne Fenstergrösse (Schriften geladen, Bilder)
    const sizes = isScene && "ResizeObserver" in window ? new ResizeObserver(() => measureFit()) : null;
    if (sizes && list) sizes.observe(list);
    if (sizes && figure) sizes.observe(figure);
    measureFit();
    observer.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    scene.addEventListener("change", onResize);
    wide.addEventListener("change", onResize);
    return () => {
      observer.disconnect();
      sizes?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      scene.removeEventListener("change", onResize);
      wide.removeEventListener("change", onResize);
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
