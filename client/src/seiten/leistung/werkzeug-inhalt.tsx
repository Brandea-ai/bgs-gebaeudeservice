"use client";

import { useEffect, useState, type ReactNode } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

/** Mobil einklappbar. Ohne JavaScript bleiben Inhalt und Druck vollständig lesbar. */
export default function WerkzeugInhalt({
  id,
  title,
  showLabel,
  hideLabel,
  premium,
  children,
}: {
  id: string;
  title: string;
  showLabel: string;
  hideLabel: string;
  premium: boolean;
  children: ReactNode;
}) {
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const section = document.getElementById(id);
    let frame = 0;
    const targetOf = (hash: string) => {
      try {
        const target = document.getElementById(
          decodeURIComponent(hash.slice(1))
        );
        return target && (target === section || section?.contains(target))
          ? target
          : null;
      } catch {
        return null;
      }
    };
    const apply = () => {
      setMobile(media.matches);
      setExpanded(!media.matches || Boolean(targetOf(window.location.hash)));
    };
    const reveal = (hash: string) => {
      const target = targetOf(hash);
      if (!target) return;
      setExpanded(true);
      // Ein Anker innerhalb des zugeklappten Inhalts erhält nach dem Öffnen seine Position.
      if (target !== section) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() =>
          target.scrollIntoView({ block: "start" })
        );
      }
    };
    const onHash = () => reveal(window.location.hash);
    const onClick = (event: MouseEvent) => {
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null;
      if (
        !link ||
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const url = new URL(link.href, window.location.href);
      if (
        url.origin === location.origin &&
        url.pathname === location.pathname &&
        url.search === location.search
      )
        reveal(url.hash);
    };
    apply();
    onHash();
    media.addEventListener("change", apply);
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onClick);
    return () => {
      media.removeEventListener("change", apply);
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
    };
  }, [id]);

  const label = expanded ? hideLabel : showLabel;
  return (
    <>
      {mobile && (
        <button
          type="button"
          className={`no-print mt-5 flex min-h-11 w-full items-center justify-between gap-4 border-t pt-3 text-left font-semibold md:hidden ${premium ? "border-brass-dark/25 text-anthracite" : "border-line text-ink"}`}
          aria-expanded={expanded}
          aria-controls={`${id}-inhalt`}
          aria-label={`${label}: ${title}`}
          onClick={() => setExpanded(value => !value)}
        >
          {label}
          <CaretDown
            weight="bold"
            className={`size-5 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      )}
      <div id={`${id}-inhalt`} className="tool-content" hidden={!expanded}>
        {children}
      </div>
    </>
  );
}
