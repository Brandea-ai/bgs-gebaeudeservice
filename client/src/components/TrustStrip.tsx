import {
  Award,
  BadgeCheck,
  Clock,
  FileCheck,
  Languages,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

const icons = {
  seit: Award,
  versichert: ShieldCheck,
  register: BadgeCheck,
  sprachen: Languages,
  antwort: Clock,
  offerte: FileCheck,
};

/**
 * Vertrauensleiste (F7, E18): nur belegte Angaben aus shared/company.ts und den
 * Eigenangaben des Kunden. Keine Siegel, keine Bewertungen, keine Zertifikate.
 */
export default function TrustStrip({
  lang = "de",
  tone = "light",
  compact = false,
}: {
  lang?: Locale;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const { trust } = navDicts[lang].chrome;
  const dark = tone === "dark";
  return (
    <ul
      className={`grid gap-px min-[420px]:grid-cols-2 md:grid-cols-3 ${compact ? "xl:grid-cols-6" : "lg:grid-cols-6"} ${dark ? "bg-white/10" : "bg-line"}`}
    >
      {trust.map((item, index) => {
        const Icon = icons[item.key as keyof typeof icons] ?? BadgeCheck;
        return (
          <Reveal
            as="li"
            key={item.key}
            delay={index * 70}
            className={`flex items-start gap-3 ${compact ? "p-4" : "p-5 lg:p-6"} ${dark ? "bg-ink" : "bg-white"}`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${dark ? "bg-white/10 text-brass" : "bg-signal-light/60 text-signal"}`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span
                className={`block break-words font-display text-[1.0625rem] font-bold leading-tight ${dark ? "text-white" : "text-ink"}`}
              >
                {item.label}
              </span>
              <span
                className={`mt-1 block text-[0.8125rem] font-medium leading-snug ${dark ? "text-white/80" : "text-ink-600"}`}
              >
                {item.text}
              </span>
            </span>
          </Reveal>
        );
      })}
    </ul>
  );
}
