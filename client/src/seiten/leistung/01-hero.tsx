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
import { leistungKontext, type LeistungProps } from "./kontext";

/**
 * Kopf (E84): Bild, Titel, ein Satz Nutzen, nächster Schritt. Die ausführliche
 * Einleitung und die Eckdaten stehen direkt darunter im hellen IntroBand.
 */
export default function LeistungHero(props: LeistungProps) {
  const { content, lang } = props;
  const { ui, premium, facts } = leistungKontext(props);
  const tone = premium ? "premium" : "light";
  return (
    <>
      <Hero
        image={heroImage[content.path]}
        path={content.path}
        lang={lang}
        variant={premium ? "premium" : "standard"}
        eyebrow={premium && company.premiumBrand ? ui.premiumLine : undefined}
        title={content.h1}
        lead={<p>{getDict(lang).heroLines[content.path as HeroPath]}</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            asChild
            size="xl"
            className={`arrow-link ${premium ? "bg-brass text-anthracite hover:bg-brass-light" : "btn-lift"}`}
          >
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
        title={ui.atAGlance}
        paragraphs={content.lead}
        lang={lang}
        tone={tone}
        aside={
          <FactList facts={facts} labelledBy="auf-einen-blick" tone={tone} />
        }
      />
    </>
  );
}
