import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import IntroBand, { FigureGrid } from "@/components/IntroBand";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Kopf (E84): Bild, Titel, ein Satz, Aktionen. Darunter der Steckbrief: links
 * Leistungen und Gebiet in einem Satz, rechts die belegten Kennzahlen (E18,
 * E58) mit Stichtag, statisch und ohne Zähler. Die eingetragene Firma steht
 * bewusst nicht in diesem Band, sondern bei den Firmenangaben (Befund UU-01:
 * «seit 2006» nicht an die GmbH koppeln, solange Brandea die Frage offen hat).
 * Die Zeitleiste und die zweite Kennzahlenreihe sind entfallen (Audit visuell).
 */
export default function UeberUnsHero(props: UeberUnsProps) {
  const { lang } = props;
  const { dict, ui, about } = ueberUnsKontext(props);
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
        id="steckbrief-titel"
        title={about.profile.title}
        paragraphs={[about.lead]}
        lang={lang}
        aside={
          <>
            <FigureGrid items={about.profile.items} labelledBy="steckbrief-titel" />
            <p className="mt-3 text-sm font-semibold text-ink-600">{about.profile.note}</p>
          </>
        }
      />
    </>
  );
}
