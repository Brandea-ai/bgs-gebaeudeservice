import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Reveal from "./Reveal";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

/**
 * Abschluss einer Seite (F3, F7): eine Hauptaktion (Offerte) und das Telefon als
 * zweite Aktion (M31). Das Formular folgt direkt darunter (#kontakt-formular).
 * Rote Fläche mit Schräge als Kontrast zum Formular in Stein.
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
  const { chrome } = navDicts[lang];
  return (
    <section
      aria-label={title}
      className="relative overflow-hidden bg-signal text-white"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-signal-dark [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)] lg:block"
        aria-hidden="true"
      />
      <div className="container relative grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
        <Reveal className="lg:col-span-7">
          <h2 className="t-h2 text-white">{title}</h2>
          <p className="t-lead mt-5 max-w-[48ch] text-white/90">{text}</p>
          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/85">
            <span
              className="inline-block h-2 w-2 rounded-full bg-white"
              aria-hidden="true"
            />
            {chrome.answer}
          </p>
        </Reveal>
        <Reveal
          delay={150}
          className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end"
        >
          <Button asChild size="xl" variant="ink" className="arrow-link">
            <a href="#kontakt-formular">
              {ui.offerCta}
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="xl" variant="inverse">
            <a href={company.phone.href} className="tabular-nums">
              <Phone aria-hidden="true" />
              {company.phone.display}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
