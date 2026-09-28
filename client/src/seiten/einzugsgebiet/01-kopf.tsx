import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import SectionNav from "@/components/SectionNav";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { abschnitte, gebietKontext, type GebietProps } from "./kontext";

/**
 * Kopf der Übersicht (E84): Bild, Titel, ein Satz, Aktionen. Die Karte steht
 * nicht mehr im Kopf, sondern nur unten im Abschnitt «Kantone», dort mit
 * Funktion (Audit visuell, /einzugsgebiet: dieselbe Karte stand zweimal).
 * Darunter die Belege und die Abschnittsleiste mit Scrollspy.
 */
export default function GebietKopf(props: GebietProps) {
  const { lang } = props;
  const { dict, ui, area, chrome } = gebietKontext(props);
  const items = [
    { id: abschnitte.kantone, title: area.cantonsTitle },
    { id: abschnitte.vergleich, title: area.vergleich.nav },
    { id: abschnitte.orte, title: area.places.title },
    { id: abschnitte.sitz, title: chrome.seat },
  ];
  return (
    <>
      <PageHero
        path="/einzugsgebiet"
        lang={lang}
        title={area.h1}
        lead={<p>{dict.heroLines["/einzugsgebiet"]}</p>}
        below={
          <div className="relative bg-white">
            <div className="container py-5 md:py-6">
              <TrustStrip lang={lang} compact />
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="xl" className="arrow-link btn-lift">
            <a href="#kontakt-formular" data-cta="kopf-seite">
              {ui.offerCta}
              <ArrowRight weight="duotone" aria-hidden="true" />
            </a>
          </Button>
          {/* Echter Pfeil nach unten, ohne arrow-link: der Hover würde sonst diagonal schieben (EG-14) */}
          <Button asChild size="xl" variant="inverse" className="glass-dark">
            <a href={`#${abschnitte.kantone}`}>
              {area.cantonsTitle}
              <ArrowDown weight="duotone" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </PageHero>
      <SectionNav label={ui.onThisPage} items={items} />
    </>
  );
}
