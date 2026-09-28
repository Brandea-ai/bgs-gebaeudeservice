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
 * Aussage (H07, E80, E84): statisch, ohne Einblendung, damit die H1 sofort steht.
 * Volles Bild unter der schwebenden Kopfzeile, Titel, ein Satz, Aktionen und
 * Sprachwahl. Kennzahlen und Profilsatz stehen darunter in «Auf einen Blick».
 */
export default function StartHero(props: StartseiteProps) {
  const { lang } = props;
  const { dict, ui, seiten, nav } = startseiteKontext(props);
  return (
    <Hero
      image="hero-start"
      lang={lang}
      size="home"
      title={seiten.home.h1}
      titleId="start-titel"
      lead={<p className="max-w-[46ch]">{dict.heroLines["/"]}</p>}
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
      {/* Sprachwahl im Hero (E80): die Seite gibt es in vier Sprachen, beraten wird in allen vier (E18).
          Unter md Abstand nach unten, damit die feste Mobil-Leiste (rund 78 px) die Knöpfe nicht verdeckt */}
      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 max-md:mb-10">
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
