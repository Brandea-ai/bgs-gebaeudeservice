import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { kontaktKontext, type KontaktProps } from "./kontext";

/** Kopf (E80): statisch, die Einleitung trägt die Antwortzeit; Offerte und Telefon als Aktionen */
export default function KontaktHero(props: KontaktProps) {
  const { ui, contact } = kontaktKontext(props);
  return (
    <PageHero path="/kontakt" lang={props.lang} title={contact.h1} lead={contact.lead} size="compact">
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
  );
}
