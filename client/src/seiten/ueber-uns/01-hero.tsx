import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Kopf (E80): Bild, «seit 2006» als Titel, Aktionen; die belegten Kennzahlen
 * (E18, E58) als Glasleiste am unteren Rand, statisch und ohne Zähler.
 */
export default function UeberUnsHero(props: UeberUnsProps) {
  const { lang } = props;
  const { ui, seiten, about } = ueberUnsKontext(props);
  return (
    <PageHero
      path="/ueber-uns"
      lang={lang}
      title={about.h1}
      lead={about.lead}
      below={
        <div className="container relative pb-10 lg:pb-14">
          <h2 id="kennzahlen-titel" className="sr-only">
            {about.statsLabel}
          </h2>
          <dl
            aria-labelledby="kennzahlen-titel"
            className="glass-dark grid grid-cols-1 gap-px overflow-hidden rounded-[3px] min-[480px]:grid-cols-2 lg:grid-cols-4"
          >
            {seiten.proof.map(item => (
              <div key={item.label} className="flex min-w-0 flex-col gap-1.5 px-5 py-4 lg:px-6 lg:py-5">
                <dt className="order-2 text-sm font-medium leading-snug text-white/80">{item.label}</dt>
                <dd className="t-figure order-1 text-[1.5rem] text-white xl:text-[1.875rem]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      }
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
  );
}
