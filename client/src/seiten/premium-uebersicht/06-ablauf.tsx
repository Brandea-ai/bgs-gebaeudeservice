import ProcessScrolly from "@/components/ProcessScrolly";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/** Ablauf aus den Schritten der Luxusimmobilien-Seite, vertikal ohne Pinning (P04) */
export default function PremiumAblauf(props: PremiumProps) {
  const { lang } = props;
  const { dict, ui } = premiumKontext(props);
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="on-dark section bg-anthracite text-white">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <PremiumTitel id="ablauf-titel" title={ui.steps} className="lg:col-span-4" />
        <div className="lg:col-span-7 lg:col-start-6">
          <ProcessScrolly
            steps={dict.premium.luxusimmobilien.steps}
            lang={lang}
            tone="dark"
            variant="vertical"
            figureKeys={["anfrage", "besichtigung", "offerte", "start"]}
            idPrefix="ablauf-schritt"
          />
        </div>
      </div>
    </section>
  );
}
