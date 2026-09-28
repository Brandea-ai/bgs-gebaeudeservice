import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import type { Locale } from "../../../../shared/i18n";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Für wen wir passen (Audit 25, Baustein 8.2; E28, E29, E34): Titel links
 * stehend, rechts zwei redaktionelle Listen mit Haarlinien statt Kacheln
 * (Audit visuell, Umbau 8). Jede Zeile der ersten Liste verlinkt die passende
 * Leistung, die zweite nennt offen, was wir nicht übernehmen.
 */
export default function UeberUnsPassen(props: UeberUnsProps) {
  const { lang } = props;
  const { fit } = ueberUnsKontext(props).about;
  return (
    <section id="passen" aria-labelledby="passen-titel" className="section border-t border-line bg-stone">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <SectionHead
          id="passen-titel"
          title={fit.title}
          intro={fit.intro}
          className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)] lg:col-span-4 lg:self-start"
        />
        <div className="grid min-w-0 gap-12 lg:col-span-8">
          <Gruppe id="passen-ja" title={fit.yesTitle} items={fit.yes} glyph={CheckCircle} tone="yes" lang={lang} />
          <Gruppe id="passen-nein" title={fit.noTitle} items={fit.no} glyph={XCircle} tone="no" lang={lang} />
          <p className="max-w-[62ch] text-[0.9375rem] font-medium leading-relaxed text-ink-600">{fit.note}</p>
        </div>
      </div>
    </section>
  );
}

function Gruppe({
  id,
  title,
  items,
  glyph: Glyph,
  tone,
  lang,
}: {
  id: string;
  title: string;
  items: readonly string[];
  glyph: Icon;
  tone: "yes" | "no";
  lang: Locale;
}) {
  return (
    <div className="min-w-0">
      <h3 id={id} className="t-h3 text-ink">
        {title}
      </h3>
      <ul aria-labelledby={id} className="mt-4 divide-y divide-line border-y border-line">
        {items.map(item => (
          <li key={item} className="flex items-start gap-4 py-4">
            <Glyph
              weight="duotone"
              className={`mt-0.5 size-6 shrink-0 ${tone === "yes" ? "text-signal" : "text-ink-600"}`}
              aria-hidden="true"
            />
            <span className="min-w-0 text-[1.0625rem] font-medium leading-relaxed text-ink">
              <RichText text={item} lang={lang} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
