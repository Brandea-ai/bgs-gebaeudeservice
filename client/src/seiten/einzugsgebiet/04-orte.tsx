import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import { QuellenListe } from "../kanton/quelle";
import { abschnitte, gebietKontext, type GebietProps } from "./kontext";

/**
 * Seeufer und Ferienorte (E42, Baustein 6.2): was in Ferienorten anders ist,
 * mit den Zweitwohnungsanteilen des Bundes als Quelle. Die Orte als ruhiger
 * Fliesstext mit Trennpunkt, nicht als knopfartige Kennungen ohne Funktion
 * (Audit visuell). Keine eigenen Ortsseiten (M48, Doorway-Risiko).
 */
export default function GebietOrte(props: GebietProps) {
  const { lang } = props;
  const { dict, ui, area } = gebietKontext(props);
  const { places } = area;
  return (
    <section id={abschnitte.orte} aria-labelledby="orte-titel" className="section bg-stone">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-12">
        <div className="min-w-0 lg:col-span-5">
          <SectionHead id="orte-titel" title={places.title} />
          <p className="mt-6 max-w-[62ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">
            <RichText text={places.text} lang={lang} />
          </p>
          <QuellenListe sources={places.sources.map(key => dict.kantone.ui.quellen[key])} label={ui.tool.sources} external={ui.tool.external} className="mt-7 max-w-[62ch]" />
        </div>
        <RevealGroup as="ul" className="min-w-0 divide-y divide-line self-start border-y border-line lg:col-span-7">
          {places.groups.map((group, index) => {
            const id = `orte-gruppe-${index + 1}`;
            return (
              <li key={group.title} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <h3 id={id} className="t-h3 text-ink sm:col-span-5">
                  {group.title}
                </h3>
                <ul
                  aria-labelledby={id}
                  className="flex flex-wrap gap-x-2 gap-y-1 text-[1.0625rem] font-semibold leading-relaxed text-ink-600 sm:col-span-7"
                >
                  {group.items.map((place, i) => (
                    <li key={place} className="inline-flex items-center gap-2">
                      {place}
                      {i < group.items.length - 1 && (
                        <span className="text-signal" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
