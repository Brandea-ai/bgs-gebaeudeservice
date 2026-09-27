import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import type { Locale } from "../../../shared/i18n";

/**
 * Rote Offerte-Fläche (F3, F14): eine Hauptaktion (Offerte) und das Telefon als
 * zweite Aktion (M31). Ohne Bewegung, das Rot ist das Signal. Steht nicht mehr
 * direkt über dem Formular, sondern dort, wo eine Seite einen Zwischenabschluss
 * braucht (nach Ablauf oder FAQ); den Formularabschnitt beschriftet PageFrame
 * mit dem seitenspezifischen cta.
 */
export default function OfferCta({
  title,
  text,
  lang = "de",
}: {
  title: string;
  text: string;
  lang?: Locale;
}) {
  const { ui } = getDict(lang);
  return (
    <section
      aria-label={title}
      className="on-dark relative overflow-hidden bg-signal text-white"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-signal-dark [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)] lg:block"
        aria-hidden="true"
      />
      <div className="container relative grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:py-20">
        <div className="lg:col-span-7">
          <h2 className="t-h2 text-white">{title}</h2>
          <p className="t-lead mt-5 max-w-[48ch] text-white/90">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Button asChild size="xl" variant="ink" className="arrow-link">
            <a href="#kontakt-formular" data-cta="band">
              {ui.offerCta}
              <ArrowRight weight="regular" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="xl" variant="inverse">
            <a href={company.phone.href} className="tabular-nums">
              <Phone weight="regular" aria-hidden="true" />
              {company.phone.display}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
