import ProcessScrolly from "@/components/ProcessScrolly";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/**
 * Ablauf aus den Schritten der Luxusimmobilien-Seite: Titel oben, darunter die
 * vier Schritte ab lg nebeneinander auf einer Champagner-Linie (P04, Premium
 * hell). Keine Bühne, weil Premium keine Videos mit Signalrot zeigt und eine
 * leere Symbolbühne nichts erklärt (E85, F4). Anfrage und Rundgang stehen seit
 * E85 in common.ts, hier bleibt der Ablauf vollständig.
 */
export default function PremiumAblauf(props: PremiumProps) {
  const { lang } = props;
  const { dict, ui } = premiumKontext(props);
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="section border-t border-brass/25 bg-white text-anthracite">
      <div className="container">
        <PremiumTitel id="ablauf-titel" title={ui.steps} className="mb-12 lg:mb-16" />
        <ProcessScrolly
          steps={[dict.steps.premiumAnfrage, dict.steps.premiumRundgang, ...dict.premium.luxusimmobilien.steps]}
          lang={lang}
          tone="premium"
          variant="row"
          idPrefix="ablauf-schritt"
        />
      </div>
    </section>
  );
}
