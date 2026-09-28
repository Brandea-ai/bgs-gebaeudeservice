import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import SectionHead from "@/components/SectionHead";
import { kontaktKontext, type KontaktProps } from "./kontext";

/**
 * Die Besichtigung vorbereiten (Audit Inhalt, Baustein 9.1): was beim Termin vor
 * Ort bereitliegen sollte, als Liste mit Haken.
 *
 * Daneben das Bildband, das früher im Kontaktbereich jeder Seite stand und es
 * nur noch hier gibt (Audit visuell, Umbau 3): Hände haken im Materiallager
 * eine Checkliste ab. Ohne Glas mit Text: Dass Besichtigung und Offerte nichts
 * kosten und die Offerte schriftlich kommt, sagen Ablauf und Fragen schon
 * (Prüfbefund K8).
 */
export default function KontaktBesichtigung(props: KontaktProps) {
  const { contact } = kontaktKontext(props);
  const { visit } = contact;
  return (
    <section id="besichtigung" aria-labelledby="besichtigung-titel" className="section border-t border-line bg-white">
      <div className="container grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
        <div className="min-w-0 lg:col-span-6">
          <SectionHead id="besichtigung-titel" title={visit.title} intro={visit.intro} />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {visit.items.map(item => (
              <li key={item} className="flex items-start gap-4 py-4 font-medium leading-relaxed text-ink">
                <CheckCircle weight="duotone" className="mt-0.5 size-6 shrink-0 text-signal" aria-hidden="true" />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 overflow-hidden rounded-[3px] lg:col-span-5 lg:col-start-8">
          <ImageSlot
            image="detail-facility-services"
            lang={props.lang}
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="aspect-[16/10] w-full lg:aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}
