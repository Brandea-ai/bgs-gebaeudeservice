import { MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import ConsentMap from "@/components/ConsentMap";
import SectionHead from "@/components/SectionHead";
import { company } from "../../../../shared/company";
import { kontaktKontext, type KontaktProps } from "./kontext";

/** Anfahrt: Karte lädt erst nach Klick (E20), Ziel der Adresse in den Kontaktwegen */
export default function KontaktKarte(props: KontaktProps) {
  const { dict, contact } = kontaktKontext(props);
  return (
    <section id="karte" aria-labelledby="karte-titel" className="section border-t border-line bg-stone">
      <div className="container grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
        <div className="min-w-0 lg:col-span-4">
          <SectionHead id="karte-titel" title={contact.map.title} intro={contact.map.text} />
          <address className="mt-8 space-y-3 border-t border-line pt-6 not-italic">
            <p className="flex items-start gap-3 font-medium leading-relaxed text-ink">
              <MapPin weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-signal" aria-hidden="true" />
              <span>
                <span className="block font-display font-bold">{company.legalName}</span>
                {company.address.street}, {company.address.postalCode} {company.address.city}
              </span>
            </p>
            <p>
              <a
                href={company.phone.href}
                className="inline-flex min-h-11 items-center gap-3 font-semibold tabular-nums text-ink transition-colors hover:text-signal"
              >
                <Phone weight="duotone" className="size-5 shrink-0 text-signal" aria-hidden="true" />
                {company.phone.display}
              </a>
            </p>
          </address>
        </div>
        <div className="min-w-0 overflow-hidden rounded-[3px] border border-line bg-white lg:col-span-8">
          <ConsentMap texts={dict.misc.map} />
        </div>
      </div>
    </section>
  );
}
