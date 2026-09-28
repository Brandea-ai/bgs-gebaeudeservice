import { ArrowRight, CheckCircle, Phone } from "@phosphor-icons/react/dist/ssr";
import IntroBand from "@/components/IntroBand";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { premiumKontext, type PremiumProps } from "./kontext";

/**
 * Kopf der Premium-Welt: Hintergrundbild in Anthrazit, Titel in Serifenschrift,
 * ein Satz, diskrete Anfrage und Telefon (P03, E84). Darunter im IntroBand in
 * Elfenbein die Einleitung und rechts, was in die erste Nachricht gehört. Die
 * drei Bereiche stehen erst im Zickzack darunter, damit Hero-Zeile, Band und
 * Zickzack nicht dreimal dieselbe Aufzählung zeigen (Befund PU-3). Statisch,
 * ohne Einblendung.
 */
export default function PremiumHero(props: PremiumProps) {
  const { lang } = props;
  const { dict, ui, content, eyebrow } = premiumKontext(props);
  return (
    <>
      <PageHero
        path="/premium"
        lang={lang}
        eyebrow={eyebrow}
        title={content.h1}
        lead={<p>{dict.heroLines["/premium"]}</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            asChild
            size="xl"
            className="arrow-link bg-brass text-anthracite hover:bg-brass-light"
          >
            <a href="#kontakt-formular" data-cta="kopf-seite">
              {content.cta.title}
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
        title={ui.atAGlance}
        paragraphs={
          content.nameMeaning
            ? [content.lead, content.nameMeaning]
            : [content.lead]
        }
        lang={lang}
        tone="premium"
        aside={
          <div>
            <h3
              id="erste-nachricht"
              className="font-premium text-[1.625rem] font-bold leading-snug text-anthracite"
            >
              {content.firstMessage.title}
            </h3>
            <ul
              aria-labelledby="erste-nachricht"
              className="mt-5 divide-y divide-brass/30 border-y border-brass/30"
            >
              {content.firstMessage.items.map(item => (
                <li key={item} className="flex items-start gap-3 py-4 font-semibold leading-snug text-ink">
                  <CheckCircle
                    weight="duotone"
                    className="mt-0.5 size-6 shrink-0 text-brass-dark"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </>
  );
}
