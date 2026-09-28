import FaqBlock from "@/components/FaqBlock";
import { startseiteKontext, type StartseiteProps } from "./kontext";

/**
 * Fragen vor dem Abschluss (H11), öffnen beim Überfahren (E82). Eigenes Motiv:
 * Beratung am Tisch. detail-facility-services gehört dem Kontaktbereich darunter,
 * kein Bild steht zweimal auf der Seite (visuell.md Umbau 4).
 */
export default function StartFragen(props: StartseiteProps) {
  const { ui, seiten } = startseiteKontext(props);
  return <FaqBlock title={ui.faq} items={seiten.home.faq} image="frage-facility-services" lang={props.lang} />;
}
