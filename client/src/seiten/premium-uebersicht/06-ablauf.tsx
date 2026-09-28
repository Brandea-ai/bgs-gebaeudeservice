import ProcessScrolly from "@/components/ProcessScrolly";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/**
 * Ablauf aus den Schritten der Luxusimmobilien-Seite wie auf den
 * Leistungsseiten: Titel oben, links die gepinnte Video-Bühne in Anthrazit mit
 * Champagner-Ring, rechts die Schritte (P04, Premium hell).
 */
export default function PremiumAblauf(props: PremiumProps) {
  const { lang } = props;
  const { dict, ui } = premiumKontext(props);
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="section border-t border-brass/25 bg-white text-anthracite">
      <div className="container">
        <PremiumTitel id="ablauf-titel" title={ui.steps} className="mb-12 lg:mb-16" />
        <ProcessScrolly
          steps={dict.premium.luxusimmobilien.steps}
          lang={lang}
          tone="premium"
          variant="wide"
          figureKeys={["anfrage", "besichtigung", "offerte", "start"]}
          idPrefix="ablauf-schritt"
        />
      </div>
    </section>
  );
}
