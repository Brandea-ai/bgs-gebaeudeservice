import FaqBlock from "@/components/FaqBlock";
import { startseiteKontext, type StartseiteProps } from "./kontext";

/** Einwände vor dem Abschluss (H11) mit Bild und Kontakt, öffnen beim Überfahren (E82) */
export default function StartFragen(props: StartseiteProps) {
  const { ui, seiten } = startseiteKontext(props);
  return <FaqBlock title={ui.faq} items={seiten.home.faq} image="detail-facility-services" lang={props.lang} />;
}
