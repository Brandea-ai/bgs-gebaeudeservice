import FaqBlock from "@/components/FaqBlock";
import { uebersichtKontext, type UebersichtProps } from "./kontext";

/** Allgemeine Fragen zu allen Leistungen mit Bild und Kontakt, öffnen beim Überfahren (E82) */
export default function UebersichtFragen(props: UebersichtProps) {
  const { ui, servicesOverview } = uebersichtKontext(props);
  return <FaqBlock title={ui.faq} items={servicesOverview.faq} image="detail-unterhaltsreinigung" lang={props.lang} />;
}
