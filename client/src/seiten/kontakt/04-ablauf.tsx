import ProcessScrolly from "@/components/ProcessScrolly";
import SectionHead from "@/components/SectionHead";
import { kontaktKontext, type KontaktProps } from "./kontext";

/**
 * Was nach dem Absenden passiert (Audit visuell /kontakt): direkt unter dem
 * Formular, eigene Schritte statt des Ablaufs der Startseite. Die vier Videos
 * passen zu den Schritten: Rückmeldung (Brief), Besichtigung (Ort), Offerte
 * (Dokument), Start (Kalender). «So geht es weiter» entfällt auf dieser Seite.
 */
export default function KontaktAblauf(props: KontaktProps) {
  const { contact } = kontaktKontext(props);
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="section border-t border-line bg-white">
      <div className="container">
        <SectionHead id="ablauf-titel" title={contact.steps.title} className="mb-12 lg:mb-16" />
        <ProcessScrolly
          steps={contact.steps.items}
          lang={props.lang}
          variant="wide"
          figureKeys={["anfrage", "besichtigung", "offerte", "start"]}
          idPrefix="ablauf-schritt"
        />
      </div>
    </section>
  );
}
