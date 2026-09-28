import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import AppointmentButton from "@/components/AppointmentButton";
import Hero from "@/components/Hero";
import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { chatEnabled } from "../../../../shared/features";
import { heroImage } from "../../../../shared/hero-images";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Kopf: Bild, Anlass, Lösung, nächster Schritt; Eckdaten als Glasleiste am unteren Rand */
export default function LeistungHero(props: LeistungProps) {
  const { content, lang } = props;
  const { ui, premium, facts } = leistungKontext(props);
  const [lead, ...more] = content.lead;
  const eyebrow = premium
    ? company.premiumBrand
      ? ui.premiumLine
      : undefined
    : content.eyebrow;
  return (
    <Hero
      image={heroImage[content.path]}
      path={content.path}
      lang={lang}
      variant={premium ? "premium" : "standard"}
      eyebrow={eyebrow}
      title={content.h1}
      lead={
        <>
          <p>
            <RichText text={lead} lang={lang} linkClassName="font-semibold text-white underline decoration-white/50 underline-offset-4" />
          </p>
          {more.map(paragraph => (
            <p key={paragraph} className="mt-4 text-base font-medium leading-relaxed text-white/90">
              <RichText text={paragraph} lang={lang} linkClassName="font-semibold text-white underline decoration-white/50 underline-offset-4" />
            </p>
          ))}
        </>
      }
      below={
        <div className="container relative pb-10 lg:pb-14">
          <h2 id="auf-einen-blick" className="sr-only">
            {ui.atAGlance}
          </h2>
          <dl
            aria-labelledby="auf-einen-blick"
            className="glass-dark grid gap-px overflow-hidden rounded-[3px] min-[480px]:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none"
          >
            {facts.map(fact => (
              <div key={fact.label} className="min-w-0 px-5 py-4 lg:px-6 lg:py-5">
                <dt className={`t-eyebrow ${premium ? "text-brass" : "text-white/90"}`}>
                  {fact.label}
                </dt>
                <dd className="hyphens mt-1.5 font-medium leading-snug text-white [overflow-wrap:anywhere]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild size="xl" className={`arrow-link ${premium ? "bg-brass text-anthracite hover:bg-brass-light" : "btn-lift"}`}>
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
  );
}
