import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { premiumKontext, promiseIcons, type PremiumProps } from "./kontext";

/**
 * Kopf der Premium-Welt: Hintergrundbild in Anthrazit, Titel in Serifenschrift,
 * diskrete Anfrage und Telefon (P03). Rechts als Glaskarte drei belegte Zusagen.
 * Statisch, ohne Einblendung.
 */
export default function PremiumHero(props: PremiumProps) {
  const { lang } = props;
  const { content, promise, eyebrow } = premiumKontext(props);
  const highlights = (["persoenlich", "diskret", "teams"] as const)
    .map(key => ({ key, item: promise(key) }))
    .filter(entry => entry.item);
  return (
    <PageHero
      path="/premium"
      lang={lang}
      eyebrow={eyebrow}
      title={content.h1}
      lead={
        <>
          <p>{content.lead}</p>
          {content.nameMeaning && (
            <p className="mt-4 text-base font-medium leading-relaxed text-white/90">{content.nameMeaning}</p>
          )}
        </>
      }
      aside={
        <ul className="glass-dark divide-y divide-white/12 rounded-[3px] px-6 md:px-7">
          {highlights.map(({ key, item }) => {
            const Glyph = promiseIcons[key];
            return (
              <li key={key} className="flex items-start gap-4 py-5">
                <Glyph weight="duotone" className="mt-0.5 size-7 shrink-0 text-brass" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-premium text-[1.375rem] leading-tight text-white">{item!.title}</span>
                  <span className="mt-1 block text-[0.9375rem] font-medium leading-snug text-white/90">{item!.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild size="xl" className="arrow-link bg-brass text-anthracite hover:bg-brass-light">
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
  );
}
