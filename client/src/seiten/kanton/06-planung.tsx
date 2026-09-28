import { Check, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import RichText from "@/components/RichText";
import { company } from "../../../../shared/company";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";
import { QuellenListe } from "./quelle";

/**
 * Planung für diesen Kanton als Fliesstext, bei Bedarf mit einer Punkteliste
 * (etwa Zutritt im Geschäftshaus) und den gelesenen Quellen darunter. Daneben
 * der Sitz mit Telefon, ohne vierten Offerte-Knopf (Audit visuell). Der Sitz
 * ist ein div, kein aside: er gehört zum Abschnitt und ist keine eigene
 * Landmarke (offener Punkt vom Fundament).
 */
export default function KantonPlanung(props: KantonProps) {
  const { lang } = props;
  const { ui, kui, page } = kantonKontext(props);
  const { planung } = page;
  return (
    <section id={abschnitte.planung} aria-labelledby="planung-titel" className="section border-y border-line bg-stone">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-7">
          <h2 id="planung-titel" className="t-h2 text-ink">
            {planung.title}
          </h2>
          <div className="mt-7 max-w-[62ch] space-y-5">
            {planung.paragraphs.map(paragraph => (
              <p key={paragraph} className="text-[1.0625rem] font-medium leading-relaxed text-ink-600">
                <RichText text={paragraph} lang={lang} />
              </p>
            ))}
          </div>
          {planung.list && (
            <div className="mt-8 max-w-[62ch] rounded-[3px] border border-line bg-white p-6 lg:p-7">
              <h3 className="t-h3 text-ink">{planung.list.title}</h3>
              <ul className="mt-4 divide-y divide-line">
                {planung.list.items.map(item => (
                  <li key={item} className="flex gap-3 py-3 font-medium leading-relaxed text-ink">
                    <Check weight="duotone" className="mt-1 size-5 shrink-0 text-signal" aria-hidden="true" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {planung.sources && (
            <QuellenListe
              sources={planung.sources.map(key => kui.quellen[key])}
              label={ui.tool.sources}
              external={ui.tool.external}
              className="mt-8 max-w-[62ch]"
            />
          )}
        </div>
        <div className="on-dark min-w-0 self-start rounded-[3px] bg-ink p-7 text-white lg:col-span-5 lg:p-9 xl:col-span-4 xl:col-start-9">
          <p className="t-eyebrow flex items-center gap-2 text-white/90">
            <MapPin weight="duotone" className="size-5 text-white" aria-hidden="true" />
            {kui.seat}
          </p>
          <p className="mt-4 font-display text-xl font-semibold leading-snug">
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
          </p>
          <a
            href={company.phone.href}
            className="mt-6 flex min-h-11 items-center gap-2 border-t border-white/15 pt-5 font-semibold tabular-nums text-white underline-offset-4 hover:underline"
          >
            <Phone weight="duotone" className="size-5" aria-hidden="true" />
            {company.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
