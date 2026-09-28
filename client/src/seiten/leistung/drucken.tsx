"use client";

import { Printer } from "@phosphor-icons/react/dist/ssr";

/**
 * Knopf «Drucken» eines Werkzeugs (E85): markiert das Werkzeug, setzt am
 * html-Element die Klasse print-tool und öffnet den Druck. Das Druck-CSS
 * (globals.css) zeigt dann nur dieses Werkzeug mit Seitentitel, Firma und
 * Stand. Nach dem Druck räumt afterprint beides wieder weg.
 */
export default function DruckKnopf({
  targetId,
  label,
  title,
  premium = false,
}: {
  targetId: string;
  label: string;
  /** Titel des Werkzeugs, für den zugänglichen Namen */
  title: string;
  premium?: boolean;
}) {
  const print = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const html = document.documentElement;
    const cleanup = () => {
      html.classList.remove("print-tool");
      target.removeAttribute("data-print-target");
      window.removeEventListener("afterprint", cleanup);
    };
    target.setAttribute("data-print-target", "");
    html.classList.add("print-tool");
    window.addEventListener("afterprint", cleanup);
    window.print();
  };
  return (
    <button
      type="button"
      onClick={print}
      aria-label={`${label}: ${title}`}
      className={`no-print press inline-flex min-h-11 shrink-0 items-center gap-2 rounded-[3px] border px-4 text-[0.9375rem] font-semibold transition-colors ${
        premium
          ? "border-brass-dark/35 bg-white text-anthracite hover:border-anthracite"
          : "border-ink/20 bg-white text-ink hover:border-ink"
      }`}
    >
      <Printer weight="duotone" className={`size-5 ${premium ? "text-brass-dark" : "text-signal"}`} aria-hidden="true" />
      {label}
    </button>
  );
}
