import FaqBlock from "@/components/FaqBlock";
import { premiumKontext, type PremiumProps } from "./kontext";

/**
 * Eigene Fragen der Premium-Übersicht (K3, Baustein 5.1) in der hellen
 * Premium-Welt. Bild aus der Bordküche eines Jets: steht sonst nicht auf der
 * Seite (Diskretion zeigt den Waschtisch, der Ablauf die Rundgänge).
 */
export default function PremiumFragen(props: PremiumProps) {
  const { ui, content } = premiumKontext(props);
  return <FaqBlock title={ui.faq} items={content.faq} image="szene-privatjet" lang={props.lang} tone="premium" />;
}
