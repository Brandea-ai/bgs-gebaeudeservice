"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  HandSwipeRight,
} from "@phosphor-icons/react/dist/ssr";

/** Lange Leistungsgruppen mobil durchblättern, ab sm wieder die vollständige senkrechte Liste. */
export default function Leistungsreihe({
  id,
  count,
  swipe,
  previous,
  next,
  children,
}: {
  id: string;
  count: number;
  swipe: string;
  previous: string;
  next: string;
  children: ReactNode;
}) {
  const rail = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  useEffect(() => setEnhanced(true), []);
  const move = (index: number) => {
    const element = rail.current;
    const item = element?.children[Math.max(0, Math.min(index, count - 1))] as
      | HTMLElement
      | undefined;
    if (!element || !item) return;
    element.scrollTo({
      left: item.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  const update = () => {
    const element = rail.current;
    if (!element) return;
    const items = Array.from(element.children) as HTMLElement[];
    const distances = items.map(item =>
      Math.abs(item.offsetLeft - element.scrollLeft)
    );
    setCurrent(distances.indexOf(Math.min(...distances)));
  };

  return (
    <>
      <div className="[html:not(.js)_&]:hidden print:hidden mb-3 flex min-h-11 items-center justify-between gap-3 sm:hidden">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600">
          <HandSwipeRight
            weight="duotone"
            className="size-5 text-signal"
            aria-hidden="true"
          />
          {swipe}
        </span>
        {enhanced && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(current - 1)}
              disabled={current === 0}
              aria-label={previous}
              aria-controls={id}
              className="grid size-11 place-items-center rounded-[3px] border border-line text-ink disabled:opacity-40"
            >
              <ArrowLeft weight="bold" className="size-5" aria-hidden="true" />
            </button>
            <span
              role="status"
              aria-live="polite"
              className="min-w-10 text-center text-sm font-semibold tabular-nums text-ink"
            >
              {current + 1} / {count}
            </span>
            <button
              type="button"
              onClick={() => move(current + 1)}
              disabled={current === count - 1}
              aria-label={next}
              aria-controls={id}
              className="grid size-11 place-items-center rounded-[3px] border border-line text-ink disabled:opacity-40"
            >
              <ArrowRight weight="bold" className="size-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <div
        id={id}
        ref={rail}
        onScroll={update}
        className="relative [html:not(.js)_&]:block [html:not(.js)_&]:overflow-visible [html:not(.js)_&]:snap-none max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:gap-4 max-sm:overflow-x-auto max-sm:pb-3 max-sm:[scrollbar-width:thin] max-sm:[&>article]:basis-[88%] max-sm:[&>article]:shrink-0 max-sm:[&>article]:snap-start max-sm:[&>article]:rounded-[3px] max-sm:[&>article]:border max-sm:[&>article]:border-line max-sm:[&>article]:px-4"
      >
        {children}
      </div>
    </>
  );
}
