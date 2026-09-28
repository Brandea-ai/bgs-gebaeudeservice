import ProcessScrolly from "@/components/ProcessScrolly";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/**
 * Eigener Ablauf jeder Premium-Anfrage (K3), alle vier Schritte aus
 * premiumOverview.steps (Befund PU-1). Ohne Bühne: Für die Anfrage gibt es kein
 * passendes Premium-Motiv, und Premium zeigt keine Videos (Signalrot). Deshalb
 * stehen die Schritte ruhig ab lg nebeneinander auf einer Champagner-Linie
 * (Befund PU-4, Vertrag: lieber keine Figur als eine unpassende).
 */
export default function PremiumAblauf(props: PremiumProps) {
  const { lang } = props;
  const { content } = premiumKontext(props);
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="section border-t border-brass/25 bg-white text-anthracite">
      <div className="container">
        <PremiumTitel id="ablauf-titel" title={content.stepsTitle} className="mb-12 lg:mb-16" />
        <ProcessScrolly
          steps={content.steps}
          lang={lang}
          tone="premium"
          variant="row"
          labelledBy="ablauf-titel"
          idPrefix="ablauf-schritt"
        />
      </div>
    </section>
  );
}
