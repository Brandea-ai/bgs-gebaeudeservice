import Link from "next/link";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import IntroBand from "@/components/IntroBand";
import PageHero from "@/components/PageHero";
import { premiumPageIcons } from "@/components/PremiumIcons";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { localizePath } from "../../../../shared/i18n";
import { premiumKontext, type PremiumProps } from "./kontext";

/**
 * Kopf der Premium-Welt: Hintergrundbild in Anthrazit, Titel in Serifenschrift,
 * ein Satz, diskrete Anfrage und Telefon (P03, E84). Darunter im IntroBand in
 * Elfenbein die Einleitung und rechts die drei Wege zu Villen, Privatjet und
 * Yacht als Links mit Bereichsnamen (N7). Statisch, ohne Einblendung.
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
          <nav aria-labelledby="premium-wege">
            <p id="premium-wege" className="t-eyebrow text-brass-dark">
              {content.pathsTitle}
            </p>
            <ul className="mt-5 divide-y divide-brass/30 border-y border-brass/30">
              {content.offers.map(offer => {
                const Glyph = premiumPageIcons[offer.path];
                return (
                  <li key={offer.path}>
                    <Link
                      href={localizePath(offer.path, lang)}
                      className="group flex min-h-11 items-start gap-4 py-5 text-anthracite"
                    >
                      {Glyph && (
                        <Glyph className="mt-0.5 size-8 shrink-0 text-brass-dark" aria-hidden="true" />
                      )}
                      <span className="min-w-0 flex-1">
                        <span className="block font-premium text-[1.5rem] font-semibold leading-tight underline decoration-brass-dark/0 underline-offset-[0.2em] transition-colors group-hover:decoration-brass-dark">
                          {offer.title}
                        </span>
                        <span className="mt-1 block font-medium leading-snug text-ink">{offer.text}</span>
                      </span>
                      <ArrowRight
                        weight="duotone"
                        className="mt-1.5 size-5 shrink-0 text-brass-dark transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        }
      />
    </>
  );
}
