import FaqBlock from "@/components/FaqBlock";
import { uebersichtKontext, type UebersichtProps } from "./kontext";

/**
 * Fragen zur Abgrenzung der Leistungen, öffnen beim Überfahren (E82). Eigenes
 * Motiv (Rundgang am Eingang), das sonst nicht auf der Seite steht (Umbau 4).
 */
export default function UebersichtFragen(props: UebersichtProps) {
  const { ui, servicesOverview } = uebersichtKontext(props);
  return <FaqBlock title={ui.faq} items={servicesOverview.faq} image="frage-hauswartung" lang={props.lang} />;
}
