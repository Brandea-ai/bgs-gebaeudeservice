import { Check } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import type { Locale } from "../../../../shared/i18n";

/** Häkchen-Liste ohne Kreis (L06); ab drei Einträgen eine gestaffelte Gruppe (L12) */
export default function Checkliste({ items, lang }: { items: string[]; lang: Locale }) {
  const rows = items.map(item => (
    <li
      key={item}
      className="flex items-start gap-3 rounded-[3px] border border-line bg-white px-4 py-3.5 text-ink"
    >
      <Check weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-signal" aria-hidden="true" />
      <span className="min-w-0 font-medium leading-relaxed">
        <RichText text={item} lang={lang} />
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
