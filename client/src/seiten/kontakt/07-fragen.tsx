import FaqBlock from "@/components/FaqBlock";
import { kontaktKontext, type KontaktProps } from "./kontext";

/**
 * Fragen vor der Anfrage (E82, Spez. 26 Abschnitt 3): Offerte, Besichtigung,
 * Gebiet, Versicherung, Mittel, Sprache und kurzfristige Einsätze stehen hier
 * und nicht mehr auf jeder Leistungsseite. Unterlagen per E-Mail erklärt der
 * Hinweis am Formular, nicht noch einmal eine Frage (Prüfbefund K8). Ohne Bild: das Kopfbild der Seite
 * stünde sonst ein zweites Mal da (Audit visuell, Umbau 4).
 */
export default function KontaktFragen(props: KontaktProps) {
  const { ui, contact } = kontaktKontext(props);
  return <FaqBlock title={ui.faq} items={contact.faq} lang={props.lang} />;
}
