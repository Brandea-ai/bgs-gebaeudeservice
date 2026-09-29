"use client";

import { useEffect, useState, type ReactNode } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

/** Alle Situationen bleiben im HTML. Mobil öffnet man die Entscheidungshilfe bei Bedarf. */
export default function MobilerWegweiser({
  showLabel,
  hideLabel,
  children,
}: {
  showLabel: string;
  hideLabel: string;
  children: ReactNode;
}) {
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const apply = () => {
      setMobile(media.matches);
      setExpanded(!media.matches || window.location.hash === "#wegweiser");
    };
    const reveal = () => {
      if (window.location.hash === "#wegweiser") setExpanded(true);
    };
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null;
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (
        url.origin === location.origin &&
        url.pathname === location.pathname &&
        url.hash === "#wegweiser"
      ) {
        setExpanded(true);
      }
    };
    apply();
    media.addEventListener("change", apply);
    window.addEventListener("hashchange", reveal);
    document.addEventListener("click", onClick);
    return () => {
      media.removeEventListener("change", apply);
      window.removeEventListener("hashchange", reveal);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="min-w-0 lg:col-span-8">
      {mobile && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="wegweiser-situationen"
          className="print:hidden flex min-h-12 w-full items-center justify-between gap-4 rounded-[3px] border border-line px-4 py-3 text-left font-semibold text-ink transition-colors hover:border-signal hover:text-signal sm:hidden"
          onClick={() => setExpanded(value => !value)}
        >
          {expanded ? hideLabel : showLabel}
          <CaretDown
            weight="bold"
            className={`size-5 shrink-0 text-signal transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      )}
      <div
        id="wegweiser-situationen"
        hidden={!expanded}
        className={`print:!block ${mobile ? "mt-4" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
