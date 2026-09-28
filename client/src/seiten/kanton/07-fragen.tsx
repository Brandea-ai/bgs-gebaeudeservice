import FaqBlock from "@/components/FaqBlock";
import { heroImage } from "../../../../shared/hero-images";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/** Fragen zum Kanton mit Bild und Kontakt, öffnen beim Überfahren (E82) */
export default function KantonFragen(props: KantonProps) {
  const { ui, page, path } = kantonKontext(props);
  return <FaqBlock id={abschnitte.fragen} title={ui.faq} items={page.faq} image={heroImage[path]} lang={props.lang} />;
}
