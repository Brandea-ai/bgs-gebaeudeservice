import RichText from "@/components/RichText";
import Zigzag from "@/components/Zigzag";
import { heroImage } from "../../../../shared/hero-images";
import PremiumTitel from "./titel";
import { darkLink, premiumKontext, type PremiumProps } from "./kontext";

/**
 * Die drei Bereiche im Zickzack mit ihren Bildern (E80). Text aus dem Einstieg
 * der jeweiligen Seite, damit Übersicht und Unterseite dasselbe sagen.
 */
export default function PremiumBereiche(props: PremiumProps) {
  const { lang } = props;
  const { dict, ui, pages, content, eyebrow } = premiumKontext(props);
  const pagesByPath = Object.values(dict.premium);
  return (
    <section id="bereiche" aria-labelledby="bereiche-titel" className="on-dark section bg-anthracite text-white">
      <div className="container">
        <PremiumTitel
          id="bereiche-titel"
          title={dict.seiten.servicesOverview.premium.title}
          className="mb-16 max-w-3xl lg:mb-24"
        />
        <Zigzag
          lang={lang}
          tone="premium"
          headingLevel="h3"
          items={content.offers.map(offer => {
            const page = pagesByPath.find(item => item.path === offer.path);
            return {
              image: heroImage[offer.path],
              eyebrow,
              title: pages[offer.path].label,
              href: offer.path,
              linkLabel: ui.toService,
              body: (
                <>
                  {(page?.lead ?? [offer.text]).map(paragraph => (
                    <p key={paragraph}>
                      <RichText text={paragraph} lang={lang} linkClassName={darkLink} />
                    </p>
                  ))}
                </>
              ),
            };
          })}
        />
      </div>
    </section>
  );
}
