import { ArrowRight, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/** Anreise und Planung als Fliesstext, daneben der Sitz mit Offerte und Telefon */
export default function KantonPlanung(props: KantonProps) {
  const { lang } = props;
  const { ui, kui, page } = kantonKontext(props);
  return (
    <section
      id={abschnitte.planung}
      aria-labelledby="planung-titel"
      className="section border-y border-line bg-stone"
    >
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-7">
          <h2 id="planung-titel" className="t-h2 text-ink">
            {page.planung.title}
          </h2>
          <div className="mt-7 space-y-5">
            {page.planung.paragraphs.map(paragraph => (
              <p key={paragraph} className="prose-body text-[1.0625rem] leading-relaxed">
                <RichText text={paragraph} lang={lang} />
              </p>
            ))}
          </div>
        </div>
        <aside
          aria-labelledby="sitz-titel"
          className="on-dark min-w-0 self-start rounded-[3px] bg-ink p-7 text-white lg:col-span-5 lg:p-9 xl:col-span-4 xl:col-start-9"
        >
          <p id="sitz-titel" className="t-eyebrow flex items-center gap-2 text-white/70">
            <MapPin weight="duotone" className="size-5 text-brass" aria-hidden="true" />
            {kui.seat}
          </p>
          <p className="mt-4 font-display text-xl font-semibold leading-snug">
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
          </p>
          <Button asChild size="lg" className="arrow-link btn-lift mt-7 w-full">
            <a href="#kontakt-formular" data-cta="planung">
              {ui.offerCta}
              <ArrowRight weight="duotone" aria-hidden="true" />
            </a>
          </Button>
          <a
            href={company.phone.href}
            className="mt-3 flex min-h-11 items-center justify-center gap-2 py-2 text-sm font-semibold tabular-nums text-white transition-colors hover:text-brass"
          >
            <Phone weight="duotone" className="size-4" aria-hidden="true" />
            {company.phone.display}
          </a>
        </aside>
      </div>
    </section>
  );
}
