import FaqBlock from "@/components/FaqBlock";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/** Einwände (Conversion H8) mit Bild und Kontakt, öffnen beim Überfahren (E82) */
export default function UeberUnsFragen(props: UeberUnsProps) {
  const { ui, about } = ueberUnsKontext(props);
  return <FaqBlock title={ui.faq} items={about.faq} image="detail-hauswartung" lang={props.lang} />;
}
