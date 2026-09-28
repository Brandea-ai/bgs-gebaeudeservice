import SectionNav from "@/components/SectionNav";
import TrustStrip from "@/components/TrustStrip";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/**
 * Belegte Angaben (E18) direkt unter dem Kopf, wie auf den Leistungsseiten nur
 * drei Punkte (V2, E85): Antwortzeit und kostenlose Offerte stehen weiter unten
 * in Fragen und Kontaktblock. Darunter die Abschnittsleiste mit Scrollspy.
 */
export default function KantonVertrauen(props: KantonProps) {
  const { ui, kui } = kantonKontext(props);
  const items = [
    { id: abschnitte.regionen, title: kui.regionen },
    { id: abschnitte.objekte, title: kui.objekte },
    { id: abschnitte.leistungen, title: kui.leistungen },
    { id: abschnitte.planung, title: kui.planung },
    { id: abschnitte.daten, title: kui.daten.nav },
    { id: abschnitte.fragen, title: ui.faq },
  ];
  return (
    <>
      <div className="border-b border-line bg-white">
        <div className="container py-6">
          <TrustStrip lang={props.lang} compact only={["seit", "versichert", "offerte"]} />
        </div>
      </div>
      <SectionNav label={ui.onThisPage} items={items} />
    </>
  );
}
