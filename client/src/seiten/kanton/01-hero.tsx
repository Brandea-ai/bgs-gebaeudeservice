import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import AppointmentButton from "@/components/AppointmentButton";
import Hero from "@/components/Hero";
import IntroBand, { FactList } from "@/components/IntroBand";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { chatEnabled } from "../../../../shared/features";
import { heroImage } from "../../../../shared/hero-images";
import { getDict } from "../../../../content";
import type { HeroPath } from "../../../../content/de/hero";
import { kantonKontext, type KantonProps } from "./kontext";

/** Kopf (E84): Kantonsbild, Titel, ein Satz, Offerte. Einleitung und Eckdaten im IntroBand darunter. */
export default function KantonHero(props: KantonProps) {
  const { lang } = props;
  const { ui, page, path } = kantonKontext(props);
  const dict = getDict(lang);
  return (
    <>
      <Hero
        image={heroImage[path]}
        path={path}
        lang={lang}
        title={page.h1}
        lead={<p>{dict.heroLines[path as HeroPath]}</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="xl" className="arrow-link btn-lift">
            <a href="#kontakt-formular" data-cta="hero">
              {ui.offerCta}
              <ArrowRight weight="duotone" aria-hidden="true" />
            </a>
          </Button>
          {chatEnabled ? (
            <AppointmentButton size="xl" variant="inverse" />
          ) : (
            <Button asChild size="xl" variant="inverse" className="glass-dark">
              <a href={company.phone.href} className="tabular-nums">
                <Phone weight="duotone" aria-hidden="true" />
                {company.phone.display}
              </a>
            </Button>
          )}
        </div>
      </Hero>
      <IntroBand
        title={dict.ui.atAGlance}
        paragraphs={page.lead}
        lang={lang}
        aside={<FactList facts={page.facts} labelledBy="auf-einen-blick" />}
      />
    </>
  );
}
