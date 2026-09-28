import { Check } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import { premiumLightLink } from "@/components/premiumStyles";
import type { Locale } from "../../../../shared/i18n";

/** Häkchen-Liste ohne Kreis (L06); ab drei Einträgen eine gestaffelte Gruppe (L12); premium mit Champagner */
export default function Checkliste({
  items,
  lang,
  premium = false,
}: {
  items: string[];
  lang: Locale;
  premium?: boolean;
}) {
  const rows = items.map(item => (
    <li
      key={item}
      className={`flex items-start gap-3 rounded-[3px] border bg-white px-4 py-3.5 ${premium ? "border-brass-dark/20 text-anthracite" : "border-line text-ink"}`}
    >
      <Check weight="duotone" className={`mt-[0.2em] size-5 shrink-0 ${premium ? "text-brass-dark" : "text-signal"}`} aria-hidden="true" />
      <span className="min-w-0 font-medium leading-relaxed">
        <RichText text={item} lang={lang} linkClassName={premium ? premiumLightLink : undefined} />
      </span>
    </li>
  ));
  const grid = "grid gap-3 sm:grid-cols-2";
  return items.length >= 3 ? (
    <RevealGroup as="ul" className={grid}>
      {rows}
    </RevealGroup>
  ) : (
    <ul className={grid}>{rows}</ul>
  );
}
