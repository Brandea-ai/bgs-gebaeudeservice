import FaqBlock from "@/components/FaqBlock";
import { kontaktKontext, type KontaktProps } from "./kontext";

/** Einwände vor dem Abschluss mit Bild und Kontakt, öffnen beim Überfahren (E82) */
export default function KontaktFragen(props: KontaktProps) {
  const { ui, contact } = kontaktKontext(props);
  return <FaqBlock title={ui.faq} items={contact.faq} image="hero-kontakt" lang={props.lang} />;
}
