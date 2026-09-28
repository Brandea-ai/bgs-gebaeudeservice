import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import IntroBand, { FigureGrid } from "@/components/IntroBand";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Kopf (E84): Bild, «seit 2006» als Titel, ein Satz, Aktionen. Die belegten
 * Kennzahlen (E18, E58) stehen im IntroBand darunter, statisch und ohne Zähler.
 */
export default function UeberUnsHero(props: UeberUnsProps) {
  const { lang } = props;
  const { dict, ui, seiten, about } = ueberUnsKontext(props);
  return (
    <>
      <PageHero
        path="/ueber-uns"
        lang={lang}
        title={about.h1}
        lead={<p>{dict.heroLines["/ueber-uns"]}</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl" className="arrow-link btn-lift">
            <a href="#kontakt-formular" data-cta="hero">
              {ui.offerCta}
              <ArrowRight weight="duotone" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="xl" variant="inverse" className="glass-dark">
            <a href={company.phone.href} className="tabular-nums">
              <Phone weight="duotone" aria-hidden="true" />
              {company.phone.display}
            </a>
          </Button>
        </div>
      </PageHero>
      <IntroBand
        id="kennzahlen-titel"
        title={about.statsLabel}
        paragraphs={[about.lead]}
        lang={lang}
        aside={
          <FigureGrid items={seiten.proof} labelledBy="kennzahlen-titel" />
        }
      />
    </>
  );
}
