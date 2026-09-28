import type { ReactNode } from "react";
import { HandSwipeRight } from "@phosphor-icons/react/dist/ssr";

/**
 * Kartengruppe mit Titel (visuell.md Umbau 5 und 7): ab lg ein Raster mit der
 * Spaltenzahl der Gruppe, darunter eine wischbare Schiene mit reinem CSS-Scroll-Snap.
 * Die Schiene reicht bis an den Bildschirmrand, die nächste Karte ragt sichtbar
 * herein, und ein Hinweis «Seitlich wischen» steht neben dem Gruppentitel.
 * Die Karten tragen selbst basis-[82%] shrink-0 snap-start (siehe Karte).
 */
export default function Schiene({
  id,
  title,
  swipe,
  cols,
  children,
}: {
  id: string;
  title: string;
  swipe: string;
  /** Spalten ab lg, etwa lg:grid-cols-5 */
  cols: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-end justify-between gap-4 border-b border-line pb-3">
        <h3 id={id} className="t-eyebrow text-ink">
          {title}
        </h3>
        <p className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-ink-600 lg:hidden" aria-hidden="true">
          <HandSwipeRight weight="duotone" className="size-5 text-signal" />
          {swipe}
        </p>
      </div>
      <ul
        aria-labelledby={id}
        className={`mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] max-lg:-mx-[var(--gutter)] max-lg:scroll-px-[var(--gutter)] max-lg:px-[var(--gutter)] lg:grid lg:snap-none lg:gap-6 lg:overflow-visible lg:pb-0 ${cols} [&::-webkit-scrollbar]:hidden`}
      >
        {children}
      </ul>
    </div>
  );
}
