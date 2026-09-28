import FaqBlock from "@/components/FaqBlock";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/**
 * Fragen zum Kanton, öffnen beim Überfahren (E82). Kantonseigene Fragen statt
 * der früheren Standardantworten (25-AUDIT/inhalt.md, K-07). Ohne Bild: das
 * Kantonsbild steht schon im Kopf, und für Kantone gibt es kein eigenes
 * Fragen-Motiv (shared/scene-images.ts › faqImage).
 */
export default function KantonFragen(props: KantonProps) {
  const { ui, page } = kantonKontext(props);
  return <FaqBlock id={abschnitte.fragen} title={ui.faq} items={page.faq} lang={props.lang} />;
}
