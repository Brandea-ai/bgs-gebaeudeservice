import { Check } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import { premiumLightLink } from "@/components/premiumStyles";
import type { Locale } from "../../../../shared/i18n";

/**
 * Häkchen-Liste ohne Kreis (L06) als Haarlinienliste (Audit visuell, Umbau 8):
 * keine Einzelkästen, damit ungerade Zahlen keine Lücke lassen und mobil kein
 * Kastenstapel entsteht. Ab drei Einträgen eine gestaffelte Gruppe (L12);
 * premium mit Champagner statt Signalrot.
 */
export default function Checkliste({
  items,
  lang,
  premium = false,
}: {
  items: string[];
  lang: Locale;
  premium?: boolean;
}) {
  const line = premium ? "border-brass-dark/20" : "border-line";
  const rows = items.map(item => (
    <li
      key={item}
      className={`flex items-start gap-3 border-b py-3.5 ${line} ${premium ? "text-anthracite" : "text-ink"}`}
    >
      <Check weight="duotone" className={`mt-[0.2em] size-5 shrink-0 ${premium ? "text-brass-dark" : "text-signal"}`} aria-hidden="true" />
      <span className="min-w-0 font-medium leading-relaxed">
        <RichText text={item} lang={lang} linkClassName={premium ? premiumLightLink : undefined} />
      </span>
    </li>
  ));
  // Zweispaltig mit eigener Linie oben je Spalte, damit beide Spalten gleich beginnen
  const grid = `grid border-t sm:grid-cols-2 sm:gap-x-10 sm:border-t-0 sm:[&>li:nth-child(-n+2)]:border-t ${line}`;
  return items.length >= 3 ? (
    <RevealGroup as="ul" className={grid}>
      {rows}
    </RevealGroup>
  ) : (
    <ul className={grid}>{rows}</ul>
  );
}
