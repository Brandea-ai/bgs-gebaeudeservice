import { CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { company } from "../../../../shared/company";
import { formatDate } from "../artikel/datum";
import DruckKnopf from "../leistung/drucken";
import type { KantonDatum, QuelleKey } from "../../../../content/de/kantone";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";
import QuelleLink from "./quelle";

/** Quellen einer Angabe als Liste von Schlüsseln */
const keysOf = (datum: KantonDatum): QuelleKey[] => (Array.isArray(datum.source) ? datum.source : [datum.source]);
/** Gleiche Quellen, unabhängig von der Reihenfolge */
const sameSource = (a: KantonDatum, b: KantonDatum) => keysOf(a).join("|") === keysOf(b).join("|");

/** Aufzählung mit rotem Trennpunkt, bricht nur zwischen den Einträgen um */
function Punkte({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex max-w-[68ch] flex-wrap gap-x-2 gap-y-1 font-semibold leading-relaxed text-ink ${className}`}>
      {items.map((item, i) => (
        <li key={item} className="inline-flex items-center gap-2">
          {item}
          {i < items.length - 1 && (
            <span className="text-signal" aria-hidden="true">
              ·
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Kasten «Kantonsdaten für die Planung» (25-AUDIT/inhalt.md, Massnahme 6):
 * kantonale Regeln und amtliche Zahlen, je Angabe mit der gelesenen
 * Primärquelle, darunter der Stand der Prüfung (kantonUi.datenStand, nie das
 * Build-Datum). Dünne Kontur rundum, kein Seitenstrich, 3 px Radius. «Drucken»
 * gibt nur diesen Kasten mit Seitentitel, Firma und Stand aus (wie die
 * Werkzeuge der Leistungsseiten, globals.css › .tool). Folgen Angaben mit
 * derselben Quelle aufeinander, stehen sie ohne Trennlinie als ein Block und
 * die Quelle nur einmal darunter (Prüfung Welle 2: keine vierfache Quellenzeile).
 */
export default function KantonDaten(props: KantonProps) {
  const { lang } = props;
  const { ui, kui, page } = kantonKontext(props);
  const boxId = `${abschnitte.daten}-kasten`;
  const stand = formatDate(kui.datenStand, lang);
  return (
    <section id={abschnitte.daten} aria-labelledby="kantonsdaten-titel" className="section bg-white">
      <div className="container">
        <div id={boxId} className="tool rounded-[3px] border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(14,17,22,0.3)] sm:p-8 lg:p-10">
          <div className="tool-print-head" aria-hidden="true">
            <p className="tool-print-page">{page.h1}</p>
            <p className="tool-print-meta">
              {company.legalName} · {ui.tool.updated} {stand}
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
            <div className="flex min-w-0 items-start gap-4">
              <CalendarCheck weight="duotone" className="mt-1 size-8 shrink-0 text-signal" aria-hidden="true" />
              <h2 id="kantonsdaten-titel" className="t-h2 text-ink">
                {kui.daten.title}
              </h2>
            </div>
            <DruckKnopf targetId={boxId} label={ui.tool.print} title={kui.daten.title} />
          </div>
          <p className="mt-5 max-w-[62ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">{kui.daten.intro}</p>
          <dl className="mt-8 border-b border-line">
            {page.daten.map((datum, index) => {
              const prev = page.daten[index - 1];
              const next = page.daten[index + 1];
              const joinedAbove = prev !== undefined && sameSource(prev, datum);
              const joinedBelow = next !== undefined && sameSource(datum, next);
              return (
                <div
                  key={datum.label}
                  className={`grid gap-2 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-8 ${
                    joinedAbove ? "pt-3 lg:pt-4" : "border-t border-line pt-5 lg:pt-6"
                  } ${joinedBelow ? "pb-3 lg:pb-4" : "pb-5 lg:pb-6"}`}
                >
                  <dt className="font-display text-[1.0625rem] font-bold leading-snug text-ink">{datum.label}</dt>
                  <dd className="min-w-0">
                    {datum.items && <Punkte items={datum.items} />}
                    {datum.text && (
                      <p className={`max-w-[68ch] font-medium leading-relaxed text-ink ${datum.items ? "mt-2" : ""}`}>{datum.text}</p>
                    )}
                    {datum.groups && (
                      <ul className={`max-w-[68ch] divide-y divide-line ${datum.items || datum.text ? "mt-3" : ""}`}>
                        {datum.groups.map(group => (
                          <li key={group.title} className="py-2.5 first:pt-0 last:pb-0">
                            <p className="font-semibold leading-snug text-ink-600">{group.title}</p>
                            <Punkte items={group.items} className="mt-1" />
                          </li>
                        ))}
                      </ul>
                    )}
                    {!joinedBelow && (
                      <div className="mt-3 flex flex-col gap-1 text-[0.8125rem] font-semibold text-ink-600">
                        {keysOf(datum).map(key => (
                          <p key={key} className="flex flex-wrap items-baseline gap-x-1.5">
                            <span>{kui.daten.source}</span>
                            <QuelleLink source={kui.quellen[key]} external={ui.tool.external} />
                          </p>
                        ))}
                      </div>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
          <p className="mt-5 text-[0.875rem] font-semibold text-ink-600">
            {kui.daten.stand} {stand}
          </p>
        </div>
      </div>
    </section>
  );
}
