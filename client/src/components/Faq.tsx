import { Plus } from "@phosphor-icons/react/dist/ssr";
import RichText from "./RichText";
import { premiumLightLink } from "./premiumStyles";
import type { Locale } from "../../../shared/i18n";

/**
 * Häufige Fragen als details im HTML, Antworten ohne JavaScript lesbar (M22).
 * Plus ohne Ring, dreht zum Kreuz; das Öffnen gleitet, wo der Browser Höhen
 * interpolieren kann (globals.css, .faq-item). tone für dunkle Flächen,
 * premium für die helle Premium-Welt (Champagner statt Signalrot).
 */
export default function Faq({
  items,
  lang = "de",
  tone = "light",
}: {
  items: { question: string; answer: string }[];
  lang?: Locale;
  tone?: "light" | "dark" | "premium";
}) {
  const dark = tone === "dark";
  const lux = tone === "premium";
  return (
    <div className={`border-t ${dark ? "border-white/40" : lux ? "border-anthracite" : "border-ink"}`}>
      {items.map(item => (
        <details
          key={item.question}
          className={`faq-item group border-b ${dark ? "border-white/15" : lux ? "border-brass-dark/25" : "border-line"}`}
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <h3
              className={`font-display text-[1.1875rem] font-bold leading-snug tracking-[-0.01em] transition-colors ${dark ? "text-white group-hover:text-brass" : lux ? "text-anthracite group-hover:text-brass-dark" : "text-ink group-hover:text-signal"}`}
            >
              {item.question}
            </h3>
            <Plus
              weight="duotone"
              className={`mt-0.5 size-5 shrink-0 transition-transform duration-300 group-open:rotate-45 ${dark ? "text-white/90 group-open:text-white" : lux ? "text-brass-dark group-open:text-anthracite" : "text-mute group-open:text-ink"}`}
              aria-hidden="true"
            />
          </summary>
          <p
            className={`max-w-[68ch] pb-7 pr-12 font-medium leading-relaxed ${dark ? "text-white/90" : "text-ink-600"}`}
          >
            <RichText
              text={item.answer}
              lang={lang}
              linkClassName={
                dark
                  ? "font-semibold text-white underline underline-offset-4 decoration-brass"
                  : lux
                    ? premiumLightLink
                    : undefined
              }
            />
          </p>
        </details>
      ))}
    </div>
  );
}
