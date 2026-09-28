import ProcessScrolly from "@/components/ProcessScrolly";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/**
 * Eigener Ablauf jeder Premium-Anfrage (K3): diskrete Anfrage und Rundgang aus
 * common.ts, danach Regeln und festes Team aus dem Seiteninhalt. Jeder Schritt
 * trägt ein Bild, das sonst nicht auf der Seite steht, deshalb die Bühne in
 * Elfenbein und Champagner (E85); Premium zeigt keine Videos (Signalrot).
 * Ohne Bild bei einem Schritt fiele ProcessScrolly auf die ruhige Liste zurück.
 */
export default function PremiumAblauf(props: PremiumProps) {
  const { lang } = props;
  const { dict, content } = premiumKontext(props);
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="section border-t border-brass/25 bg-white text-anthracite">
      <div className="container">
        <PremiumTitel id="ablauf-titel" title={content.stepsTitle} className="mb-12 lg:mb-16" />
        <ProcessScrolly
          steps={[dict.steps.premiumAnfrage, dict.steps.premiumRundgang, ...content.steps]}
          lang={lang}
          tone="premium"
          variant="wide"
          labelledBy="ablauf-titel"
          idPrefix="ablauf-schritt"
        />
      </div>
    </section>
  );
}
