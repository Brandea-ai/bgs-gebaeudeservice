"use client";

import { useEffect, useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

/**
 * Abschnittsleiste mit Scrollspy (F14): Auf dem Handy eine statische, seitlich
 * scrollbare Reihe unter dem Kopf; ab lg klebt sie unter der Kopfzeile. Sie
 * meldet ihre Höhe als --subnav-h, damit Sprungziele nicht darunter landen.
 * Ohne JavaScript normale Sprunglinks.
 */
export default function SectionNav({
  label,
  items,
  tone = "light",
  sticky = true,
  className = "",
}: {
  label: string;
  items: { id: string; title: string }[];
  /** premium: helle Premium-Welt, Linie in Champagner statt Signalrot */
  tone?: "light" | "dark" | "premium";
  sticky?: boolean;
  className?: string;
}) {
  const active = useScrollSpy(items.map(item => item.id));
  const ref = useRef<HTMLElement>(null);
  const dark = tone === "dark";
  const lux = tone === "premium";

  useEffect(() => {
    if (!sticky) return;
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    const media = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      root.style.setProperty(
        "--subnav-h",
        media.matches ? `${el.offsetHeight}px` : "0px"
      );
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(el);
    media.addEventListener("change", apply);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", apply);
      root.style.removeProperty("--subnav-h");
    };
  }, [sticky]);

  // Aktiven Eintrag auf dem Handy ins Bild rücken, ohne die Seite zu bewegen
  useEffect(() => {
    if (!active || !ref.current) return;
    const link = ref.current.querySelector<HTMLAnchorElement>(
      `a[href="#${active}"]`
    );
    if (!link) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const list = link.closest("ol");
    if (list && list.scrollWidth > list.clientWidth) {
      const target = link.offsetLeft - list.clientWidth / 2 + link.offsetWidth / 2;
      list.scrollTo({ left: target, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={`subnav ${sticky ? "subnav--sticky" : ""} border-b ${dark ? "border-white/10 bg-ink text-white" : lux ? "border-brass/30 bg-white text-anthracite" : "border-line bg-white text-ink"} ${className}`}
    >
      <div className="container">
        <ol className="subnav -mx-1 flex gap-1 overflow-x-auto py-1 lg:mx-0 lg:gap-2">
          {items.map(item => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative inline-flex min-h-11 items-center whitespace-nowrap px-3 py-2 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left ${lux ? "after:bg-brass-dark" : "after:bg-signal"} after:transition-transform after:duration-300 ${
                    isActive
                      ? `${dark ? "text-white" : lux ? "font-semibold text-anthracite" : "text-ink"} after:scale-x-100`
                      : `${dark ? "text-white/90 hover:text-white" : lux ? "text-ink-600 hover:text-anthracite" : "text-mute hover:text-ink"} after:scale-x-0`
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
