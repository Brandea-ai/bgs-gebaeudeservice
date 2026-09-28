import { MapPin } from "@phosphor-icons/react/dist/ssr";
import ConsentMap from "@/components/ConsentMap";
import SectionHead from "@/components/SectionHead";
import { company } from "../../../../shared/company";
import { abschnitte, gebietKontext, type GebietProps } from "./kontext";

/**
 * Sitz (EG-09): Adresse und Karte nach Klick (E20, Datenschutz K4). Telefon
 * und E-Mail stehen direkt danach im Kontaktblock, deshalb hier nur die
 * Adresse (Audit visuell: keine doppelten Kontaktangaben).
 */
export default function GebietSitz(props: GebietProps) {
  const { dict, chrome } = gebietKontext(props);
  return (
    <section id={abschnitte.sitz} aria-labelledby="sitz-titel" className="section">
      <div className="container grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionHead id="sitz-titel" title={chrome.seat} />
          <p className="relative mt-8 border-y border-line py-5 pl-9 text-[1.0625rem] font-medium leading-snug text-ink">
            <MapPin weight="duotone" className="absolute left-0 top-5 size-5 text-signal" aria-hidden="true" />
            <span className="block font-semibold">{company.legalName}</span>
            <span className="block">{company.address.street}</span>
            <span className="block">
              {company.address.postalCode} {company.address.city}
            </span>
          </p>
        </div>
        <div className="overflow-hidden border border-line bg-white lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
          <ConsentMap texts={dict.misc.map} />
        </div>
      </div>
    </section>
  );
}
