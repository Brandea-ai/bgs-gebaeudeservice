import ConsentMap from "@/components/ConsentMap";
import SectionHead from "@/components/SectionHead";
import { abschnitte, gebietKontext, type GebietProps } from "./kontext";

/**
 * Sitz (EG-09): Titel und ein Satz, daneben die Karte nach Klick (E20,
 * Datenschutz K4). Die Adresse steht nur im Kartenplatzhalter und danach im
 * Kontaktblock, Telefon und E-Mail nur dort (Prüfung Welle 2: keine doppelten
 * Kontaktangaben).
 */
export default function GebietSitz(props: GebietProps) {
  const { dict, chrome, area } = gebietKontext(props);
  return (
    <section id={abschnitte.sitz} aria-labelledby="sitz-titel" className="section">
      <div className="container grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionHead id="sitz-titel" title={chrome.seat} />
          <p className="mt-6 max-w-[48ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">{area.seatText}</p>
        </div>
        <div className="overflow-hidden border border-line bg-white lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
          <ConsentMap texts={dict.misc.map} />
        </div>
      </div>
    </section>
  );
}
