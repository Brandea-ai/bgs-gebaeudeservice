"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

/**
 * Wahlbaustein «Für wen» (visuell.md, Startseite, Container 04): Reiter nach dem
 * WAI-ARIA-Muster Tabs mit automatischer Aktivierung. Pfeiltasten wechseln den
 * Reiter, Pos1 und Ende springen an den Rand. Beschriftung und Inhalt rendert der
 * Server und reicht sie als Knoten herein, damit kein Wörterbuch und kein Bild
 * im Client-Bundle landet. Ohne JavaScript steht der erste Reiter offen.
 * Beim Wechsel blendet das Feld kurz ein, nur ohne Wunsch nach weniger Bewegung.
 */
export default function FuerWenWahl({
  label,
  ids,
  tabs,
  panels,
}: {
  label: string;
  ids: string[];
  tabs: ReactNode[];
  panels: ReactNode[];
}) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const count = tabs.length;

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? (index + 1) % count
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? (index - 1 + count) % count
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? count - 1
              : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  };

  return (
    <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-12">
      <div
        role="tablist"
        aria-label={label}
        className="grid grid-cols-3 gap-2 lg:col-span-4 lg:grid-cols-1 lg:content-start lg:gap-0 lg:border-t lg:border-line"
      >
        {tabs.map((tab, index) => (
          <button
            key={ids[index]}
            ref={element => {
              buttons.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${ids[index]}-reiter`}
            aria-selected={active === index}
            aria-controls={`${ids[index]}-feld`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={event => onKeyDown(event, index)}
            className="group flex min-h-12 min-w-0 items-center justify-center gap-3 rounded-[3px] border border-line bg-white px-1 py-3 text-center text-[0.875rem] font-semibold sm:px-2 sm:text-base lg:text-left text-ink-600 transition-colors hover:text-ink aria-selected:border-ink aria-selected:bg-ink aria-selected:text-white lg:justify-start lg:rounded-none lg:border-0 lg:border-b lg:bg-transparent lg:px-0 lg:py-5 lg:text-left lg:aria-selected:border-line lg:aria-selected:bg-transparent lg:aria-selected:text-ink"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="min-w-0 lg:col-span-8">
        {panels.map((panel, index) => (
          <div
            key={ids[index]}
            role="tabpanel"
            id={`${ids[index]}-feld`}
            aria-labelledby={`${ids[index]}-reiter`}
            tabIndex={0}
            hidden={active !== index}
            className="rounded-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            <div className="motion-safe:duration-500 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2">{panel}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
