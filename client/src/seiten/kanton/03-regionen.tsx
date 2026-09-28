import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/**
 * Regionen und Orte des Kantons als Liste (wie die Orte auf /einzugsgebiet):
 * Region links mit Symbol, Orte rechts als ruhige Kennungen mit 3 px Radius.
 */
export default function KantonRegionen(props: KantonProps) {
  const { kui, page } = kantonKontext(props);
  return (
    <section id={abschnitte.regionen} aria-labelledby="regionen-titel" className="section">
      <div className="container">
        <SectionHead id="regionen-titel" title={kui.regionen} />
        <RevealGroup as="ul" className="mt-10 divide-y divide-line border-y border-line lg:mt-12">
          {page.regionen.map((region, index) => {
            const id = `region-${index + 1}`;
            return (
              <li key={region.title} className="grid gap-4 py-7 md:grid-cols-12 md:gap-8 md:py-8">
                <h3 id={id} className="t-h3 flex items-start gap-3 text-ink md:col-span-5 lg:col-span-4">
                  <MapPin weight="duotone" className="mt-[0.15em] size-6 shrink-0 text-signal" aria-hidden="true" />
                  <span className="min-w-0">{region.title}</span>
                </h3>
                <ul aria-labelledby={id} className="flex flex-wrap gap-2 md:col-span-7 lg:col-span-8">
                  {region.orte.map(ort => (
                    <li
                      key={ort}
                      className="inline-flex min-h-9 items-center rounded-[3px] border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink"
                    >
                      {ort}
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
