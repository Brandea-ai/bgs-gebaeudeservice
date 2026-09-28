import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/** Typische Objekte des Kantons als ruhige Karten mit Duotone-Symbol, gleich hoch im Raster */
export default function KantonObjekte(props: KantonProps) {
  const { lang } = props;
  const { kui, page, symbol } = kantonKontext(props);
  return (
    <section id={abschnitte.objekte} aria-labelledby="objekte-titel" className="section border-y border-line bg-stone">
      <div className="container">
        <SectionHead id="objekte-titel" title={kui.objekte} />
        <RevealGroup as="ul" className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6">
          {page.objekte.map((objekt, index) => {
            const Glyph = symbol(index);
            return (
              <li
                key={objekt.title}
                className="flex min-w-0 flex-col rounded-[3px] border border-line bg-white p-7 shadow-[0_18px_40px_-32px_rgba(14,17,22,0.28)] lg:p-9"
              >
                <Glyph weight="duotone" className="size-9 text-signal" aria-hidden="true" />
                <h3 className="t-h3 mt-6 text-ink">{objekt.title}</h3>
                <p className="mt-3 max-w-[58ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">
                  <RichText text={objekt.text} lang={lang} />
                </p>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
