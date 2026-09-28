import { ArrowDown, ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { groupId, uebersichtKontext, type UebersichtProps } from "./kontext";

/**
 * Kopf: Bild, Einleitung, nächster Schritt. Rechts als Glaskarte der Einstieg
 * nach Anlass: drei Gruppen als Sprungliste, kein zweites nav-Landmark (L14).
 * Statisch, ohne Einblendung.
 */
export default function UebersichtHero(props: UebersichtProps) {
  const { lang } = props;
  const { ui, servicesOverview } = uebersichtKontext(props);
  return (
    <PageHero
      path="/leistungen"
      lang={lang}
      title={servicesOverview.h1}
      lead={<p>{servicesOverview.lead}</p>}
      aside={
        <div className="glass-dark rounded-[3px] p-6 text-white md:p-7">
          <p id="anlass-titel" className="t-eyebrow text-white/75">
            {ui.onThisPage}
          </p>
          <ul aria-labelledby="anlass-titel" className="mt-3 divide-y divide-white/15">
            {servicesOverview.groups.map((group, index) => (
              <li key={group.title}>
                <a
                  href={`#${groupId(index)}`}
                  className="group flex min-h-11 items-start gap-4 py-4 transition-colors hover:text-brass-light"
                >
                  <ArrowDown weight="duotone" className="mt-1 size-5 shrink-0 text-white/80" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="hyphens block font-display text-lg font-semibold leading-tight">{group.title}</span>
                    <span className="mt-1 block text-sm font-medium leading-snug text-white/80">{group.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
