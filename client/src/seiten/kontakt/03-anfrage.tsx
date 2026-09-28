import {
  ArrowRight,
  Broom,
  Buildings,
  CalendarCheck,
  Clock,
  Envelope,
  Key,
  MapPin,
  Ruler,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { kontaktKontext, type KontaktProps } from "./kontext";

const symbols: Record<string, Icon> = {
  objekt: Buildings,
  ort: MapPin,
  groesse: Ruler,
  leistung: Broom,
  rhythmus: Clock,
  start: CalendarCheck,
  zugang: Key,
};

/**
 * Was die Anfrage enthalten sollte (E80): dieselben Punkte, nach denen das
 * Formular fragt, als Karten mit Symbol. Titel und Aktion bleiben links stehen.
 */
export default function KontaktAnfrage(props: KontaktProps) {
  const { ui, contact } = kontaktKontext(props);
  const { brief } = contact;
  return (
    <section id="anfrage" aria-labelledby="anfrage-titel" className="section border-t border-line bg-stone">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
            <SectionHead id="anfrage-titel" title={brief.title} intro={brief.intro} />
            <p className="mt-6 flex max-w-[46ch] items-start gap-3 font-medium leading-relaxed text-ink-700">
              <Envelope weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-signal" aria-hidden="true" />
              <span className="min-w-0">
                {brief.note}
                <a href={`mailto:${company.email}`} className="link-inline mt-1 block w-fit break-all">
                  {company.email}
                </a>
              </span>
            </p>
            <Button asChild size="lg" className="arrow-link btn-lift mt-8">
              <a href="#kontakt-formular" data-cta="anfrage">
                {ui.offerCta}
                <ArrowRight weight="duotone" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <RevealGroup as="ul" className="grid min-w-0 gap-4 sm:grid-cols-2 lg:col-span-8">
          {brief.items.map((item, index) => {
            const Glyph = symbols[item.key] ?? SealCheck;
            const last = index === brief.items.length - 1 && brief.items.length % 2 === 1;
            return (
              <li
                key={item.key}
                className={`flex min-w-0 items-start gap-4 rounded-[3px] border border-line bg-white p-5 md:p-6 ${last ? "sm:col-span-2" : ""}`}
              >
                <Glyph weight="duotone" className="size-8 shrink-0 text-signal" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-display text-[1.125rem] font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="mt-1.5 font-medium leading-relaxed text-ink-600">{item.text}</p>
                </div>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
