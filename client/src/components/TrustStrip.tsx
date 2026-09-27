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
}: {
  lang?: Locale;
  tone?: "light" | "dark";
  compact?: boolean;
  only?: string[];
}) {
  const all = navDicts[lang].chrome.trust;
  const trust = only ? all.filter(item => only.includes(item.key)) : all;
  const dark = tone === "dark";
  const cols =
    trust.length >= 6
      ? "sm:grid-cols-3 xl:grid-cols-6"
      : trust.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-3";
  return (
    <RevealGroup
      as="ul"
      className={`grid gap-px ${cols} ${dark ? "bg-white/10" : "bg-line"}`}
    >
      {trust.map(item => {
        const Glyph = icons[item.key] ?? SealCheck;
        return (
          <li
            key={item.key}
            className={`flex items-start gap-3 ${compact ? "p-4" : "p-5 lg:p-6"} ${dark ? "bg-ink" : "bg-white"}`}
          >
            <Glyph
              weight="duotone"
              className={`mt-0.5 size-6 shrink-0 ${dark ? "text-brass" : "text-signal"}`}
              aria-hidden="true"
            />
            <span className="min-w-0">
              <span
                className={`hyphens block font-display text-[1.0625rem] font-bold leading-tight ${dark ? "text-white" : "text-ink"}`}
                lang={lang === "de" ? "de-CH" : undefined}
              >
                {item.label}
              </span>
              <span
                className={`mt-1 block text-[0.8125rem] font-medium leading-snug ${dark ? "text-white/80" : "text-ink-600"}`}
              >
                {item.text}
              </span>
            </span>
          </li>
        );
      })}
    </RevealGroup>
  );
}
