import CantonMap from "@/components/CantonMap";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { cantonTitle, kantonGerman } from "../../../../shared/cantons";
import { navDicts } from "../../../../content/navigation";
import { abschnitte, kantonKontext, kartenPins, type KantonProps } from "./kontext";

/**
 * Regionen und Orte (Umbau 9, 25-AUDIT/visuell.md): links die Karte mit dem
 * Kanton in Signalrot, zugeschnitten auf Kanton und Sitz, die übrigen Kantone
 * des Gebiets zurückgenommen; rechts die Regionen mit ihren Orten als ruhiger
 * Fliesstext statt knopfartiger Kennungen. Die Karte steht still, die Liste
 * ist kürzer als die Karte.
 */
export default function KantonRegionen(props: KantonProps) {
  const { kanton, lang } = props;
  const { dict, kui, page } = kantonKontext(props);
  const texts = {
    ...dict.misc.map,
    seat: navDicts[lang].chrome.seat,
    activeLabel: cantonTitle(kantonGerman[kanton], lang),
  };
  return (
    <section id={abschnitte.regionen} aria-labelledby="regionen-titel" className="section">
      <div className="container">
        <SectionHead id="regionen-titel" title={kui.regionen} />
        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="min-w-0 lg:col-span-5">
            <CantonMap
              lang={lang}
              texts={texts}
              active={kanton}
              focus
              pins={kartenPins(kanton, lang)}
              className="mx-auto w-full max-w-[30rem]"
            />
          </div>
          <RevealGroup as="ul" className="min-w-0 divide-y divide-line border-y border-line lg:col-span-7">
            {page.regionen.map((region, index) => {
              const id = `region-${index + 1}`;
              return (
                <li key={region.title} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6 lg:py-7">
                  <h3 id={id} className="t-h3 text-ink sm:col-span-5">
                    {region.title}
                  </h3>
                  <ul
                    aria-labelledby={id}
                    className="flex flex-wrap gap-x-2 gap-y-1 text-[1.0625rem] font-semibold leading-relaxed text-ink-600 sm:col-span-7"
                  >
                    {region.orte.map((ort, i) => (
                      <li key={ort} className="inline-flex items-center gap-2">
                        {ort}
                        {i < region.orte.length - 1 && (
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
      </div>
    </section>
  );
}
