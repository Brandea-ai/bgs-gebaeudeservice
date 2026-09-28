import Zigzag from "@/components/Zigzag";
import { premiumPageIcons } from "@/components/PremiumIcons";
import { heroImage } from "../../../../shared/hero-images";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/**
 * Die drei Bereiche im Zickzack mit ihren Bildern (E80), in der hellen
 * Premium-Welt auf Weiss, je Bereich das eigene Premium-Symbol. Eigener Text
 * der Übersicht (wofür der Bereich passt und was nicht dazugehört), damit die
 * Einleitung der Unterseite nicht doppelt steht (K3). Der Link nennt den
 * Leistungsnamen (N7).
 */
export default function PremiumBereiche(props: PremiumProps) {
  const { lang } = props;
  const { content, eyebrow } = premiumKontext(props);
  return (
    <section id="bereiche" aria-labelledby="bereiche-titel" className="section bg-white text-anthracite">
      <div className="container">
        <PremiumTitel id="bereiche-titel" title={content.offersTitle} className="mb-16 max-w-3xl lg:mb-24" />
        <Zigzag
          lang={lang}
          tone="premium"
          headingLevel="h3"
          items={content.offers.map(offer => ({
            image: heroImage[offer.path],
            icon: premiumPageIcons[offer.path],
            eyebrow,
            title: offer.title,
            href: offer.path,
            linkLabel: offer.link,
            body: (
              <>
                <p className="font-medium">{offer.detail}</p>
                <p className="font-semibold text-anthracite">{offer.notIncluded}</p>
              </>
            ),
          }))}
        />
      </div>
    </section>
  );
}
