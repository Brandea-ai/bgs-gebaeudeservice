import SectionNav from "@/components/SectionNav";
import TrustStrip from "@/components/TrustStrip";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/** Belegte Angaben (E18) direkt unter dem Kopf, darunter die Abschnittsleiste mit Scrollspy */
export default function KantonVertrauen(props: KantonProps) {
  const { ui, kui, page } = kantonKontext(props);
  const items = [
    { id: abschnitte.regionen, title: kui.regionen },
    { id: abschnitte.objekte, title: kui.objekte },
    { id: abschnitte.leistungen, title: kui.leistungen },
    { id: abschnitte.planung, title: page.planung.title },
    { id: abschnitte.fragen, title: ui.faq },
  ];
  return (
    <>
      <div className="border-b border-line bg-white">
        <div className="container py-6">
          <TrustStrip lang={props.lang} compact />
        </div>
      </div>
      <SectionNav label={ui.onThisPage} items={items} />
    </>
  );
}
