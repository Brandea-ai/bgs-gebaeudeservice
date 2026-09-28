import {
  CalendarBlank,
  Clock,
  FileText,
  SealCheck,
  ShieldCheck,
  Translate,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { RevealGroup } from "./Reveal";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

const icons: Record<string, Icon> = {
  seit: CalendarBlank,
  versichert: ShieldCheck,
  register: SealCheck,
  sprachen: Translate,
  antwort: Clock,
  offerte: FileText,
};

/**
 * Vertrauensleiste (F7, F14, E18): nur belegte Angaben aus shared/company.ts und
 * den Eigenangaben des Kunden. Keine Siegel, keine Bewertungen, keine
 * Zertifikate. Icons ohne Fläche dahinter, eine gestaffelte Gruppe.
 * only wählt einzelne Einträge, wenn die Seite andere schon selbst nennt.
 */
export default function TrustStrip({
  lang = "de",
  tone = "light",
  compact = false,
  only,
  reveal = false,
}: {
  lang?: Locale;
  /** premium: helle Premium-Welt mit Champagner-Symbolen */
  tone?: "light" | "dark" | "premium";
  compact?: boolean;
  only?: string[];
  /** Gestaffelt einblenden; aus, weil die Leiste meist im ersten Bildschirm steht */
  reveal?: boolean;
}) {
  const all = navDicts[lang].chrome.trust;
  const trust = only ? all.filter(item => only.includes(item.key)) : all;
  const dark = tone === "dark";
  const lux = tone === "premium";
  const cols =
    trust.length >= 6
      ? "min-[360px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-6"
      : trust.length === 4
        ? "min-[360px]:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-3";
  const className = `grid gap-px ${cols} ${dark ? "bg-white/10" : lux ? "bg-brass-dark/20" : "bg-line"}`;
  const rows = (
    <>
      {trust.map(item => {
        const Glyph = icons[item.key] ?? SealCheck;
        return (
          <li
            key={item.key}
            className={`flex items-start gap-3 ${compact ? "p-3 sm:p-4" : "p-4 sm:p-5 lg:p-6"} ${dark ? "bg-ink" : "bg-white"}`}
          >
            <Glyph
              weight="duotone"
              className={`mt-0.5 size-6 shrink-0 ${dark ? "text-brass" : lux ? "text-brass-dark" : "text-signal"}`}
              aria-hidden="true"
            />
            <span className="min-w-0">
              <span
                className={`hyphens block font-display text-[1.0625rem] font-bold leading-tight ${dark ? "text-white" : lux ? "text-anthracite" : "text-ink"}`}
                lang={lang === "de" ? "de-CH" : undefined}
              >
                {item.label}
              </span>
              <span
                className={`mt-1 block text-[0.8125rem] font-medium leading-snug ${dark ? "text-white/90" : "text-ink-600"}`}
              >
                {item.text}
              </span>
            </span>
          </li>
        );
      })}
    </>
  );
  return reveal ? (
    <RevealGroup as="ul" className={className}>
      {rows}
    </RevealGroup>
  ) : (
    <ul className={className}>{rows}</ul>
  );
}
