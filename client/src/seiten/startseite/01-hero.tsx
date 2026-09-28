import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import AppointmentButton from "@/components/AppointmentButton";
import Hero from "@/components/Hero";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LazyIndustryAdvisor } from "@/components/LazyChat";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { chatEnabled } from "../../../../shared/features";
import { startseiteKontext, type StartseiteProps } from "./kontext";

/**
 * Aussage (H07, E80): statisch, ohne Einblendung, damit die H1 sofort steht.
 * Volles Bild unter der schwebenden Kopfzeile, Kennzahlen als Glas-Karte,
 * Sprachwahl im Hero. Kennzahlen als statischer Text (E18): kein Zähler, kein
 * Layoutsprung; dt vor dd im HTML, der Wert steht optisch zuerst.
 */
export default function StartHero(props: StartseiteProps) {
  const { lang } = props;
  const { ui, seiten, nav } = startseiteKontext(props);
  const { home, proof } = seiten;
  return (
    <Hero
      image="hero-start"
      lang={lang}
      size="home"
      title={home.h1}
      titleId="start-titel"
      lead={<p className="max-w-[46ch]">{home.lead}</p>}
      aside={
        <div className="glass-dark rounded-[3px] p-2">
          <h2 id="kennzahlen-titel" className="sr-only">
            {home.proofTitle}
          </h2>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px]">
            {proof.map(item => (
              <div key={item.label} className="flex min-w-0 flex-col gap-2 bg-white/[0.05] px-4 py-5 sm:p-6">
                <dt className="order-2 text-sm font-medium leading-snug text-white/90">{item.label}</dt>
                <dd className="t-figure order-1 text-[1.5rem] text-white sm:text-[1.875rem] xl:text-[2.125rem]">
                  {item.value}
                </dd>
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
      {/* Sprachwahl im Hero (E80): die Seite gibt es in vier Sprachen, beraten wird in allen vier (E18) */}
      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
        <span className="text-sm font-medium text-white/90">{nav.chrome.heroLanguages}</span>
        <LanguageSwitcher lang={lang} path="/" label={nav.chrome.heroLanguages} tone="dark" as="div" />
      </div>
      {chatEnabled && (
        <div className="mt-12 max-w-3xl">
          <LazyIndustryAdvisor />
        </div>
      )}
    </Hero>
  );
}
