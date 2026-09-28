import {
  ArrowRight,
  CheckCircle,
  Envelope,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import PageFrame from "@/components/PageFrame";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ProcessScrolly from "@/components/ProcessScrolly";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import RichText from "@/components/RichText";
import { RevealGroup } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { pageJsonLd } from "../../../shared/structured-data";
import { getDict } from "../../../content";
import type { Locale } from "../../../shared/i18n";

/**
 * Über uns (F5, F11, F15, M47): Server-Komponente, Texte aus content/<sprache>/seiten.ts.
 * Aufbau nach dem Audit: statischer Kopf mit «seit 2006» als LCP (UU-05),
 * Kennzahlen als Text statt Zähler (UU-07, UU-08, UU-15), Zusagen als
 * Haarlinien-Liste mit stehender Überschrift statt Karten mit Häkchen (UU-03,
 * UU-06), Ablauf als vertikale Prozess-Sektion ohne Pinning (UU-04), Einwände
 * aus den Kontaktfragen (Conversion H8), Ansprechperson und Register als ein
 * Band auf Tinte mit Telefon und E-Mail (UU-12), Formular mit dem Abschluss
 * der Seite über PageFrame (kein rotes Band, UU-02). Vertrauensleiste entfällt,
 * jede ihrer Angaben steht hier schon in einem eigenen Block (UU-02, Pflicht 6).
 * Personen erst mit Einwilligung, Bildfläche bis zur Freigabe ein Platzhalter (E19, E59).
 */
export default function AboutView({ lang }: { lang: Locale }) {
  const { about, proof, contact } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  // Einwände (Conversion H8): Kosten, Regionen, kurzfristige Einsätze. «Wie schnell»
  // beantwortet der Ablauf direkt darüber, «Versichert» steht in den Zusagen (Pflicht 6).
  const faq = [1, 2, 4]
    .map(index => contact.faq[index])
    .filter((item): item is (typeof contact.faq)[number] => Boolean(item));
  // Überschrift bleibt ab lg in der linken Spalte stehen, während die Liste durchläuft
  const stickyHead =
    "lg:col-span-4 lg:sticky lg:top-[calc(var(--header-offset)+2rem)] lg:self-start";

  return (
    <PageFrame lang={lang} path="/ueber-uns" contact={about.cta}>
      <JsonLd data={pageJsonLd("/ueber-uns", "AboutPage", lang)} />

      {/* Kopf: statisch, ohne Einblendung; Bildfläche rechts mit leichtem Drift */}
      <PageHero
        path="/ueber-uns"
        lang={lang}
        title={about.h1}
        lead={about.lead}
        image={{
          src: "/ueber-uns-hero.jpg",
          alt: about.imageAlt,
          label: about.imageAlt,
        }}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl" className="arrow-link">
            <a href="#kontakt-formular" data-cta="hero">
              {ui.offerCta}
              <ArrowRight weight="duotone" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a href={company.phone.href} className="tabular-nums">
              <Phone weight="duotone" aria-hidden="true" />
              {company.phone.display}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Kennzahlen (E18): statischer Text, kein Zähler und kein Layoutsprung (UU-07);
          dt vor dd im HTML, der Wert steht optisch zuerst (UU-15); mobil eine Spalte,
          damit kein Wert innerhalb der Zahl umbricht (UU-08). Eine gestaffelte Gruppe. */}
      <section
        id="kennzahlen"
        aria-labelledby="kennzahlen-titel"
        className="on-dark bg-ink text-white"
      >
        <div className="container">
          <h2 id="kennzahlen-titel" className="sr-only">
            {about.statsLabel}
          </h2>
          <RevealGroup
            as="dl"
            className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {proof.map(item => (
              <div
                key={item.label}
                className="flex min-w-0 flex-col gap-2 bg-ink px-5 py-5 sm:px-7 sm:py-9 lg:px-6 xl:px-7"
              >
                <dt className="order-2 text-sm font-medium leading-snug text-white/85">
                  {item.label}
                </dt>
                <dd className="t-figure order-1 min-w-0 text-[1.75rem] text-white sm:text-[2rem] lg:text-[1.75rem] xl:text-[2.25rem] 2xl:text-[2.5rem]">
                  {item.value}
                </dd>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Zusagen (E18, M47): Liste mit Haarlinien statt Kartenraster, Nummer 01–06
          statt sechsmal dasselbe Häkchen (UU-03, UU-06); Text über RichText, damit
          Links aus der Inhaltsschicht greifen (UU-14). */}
      <section id="zusagen" aria-labelledby="zusagen-titel" className="section">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <SectionHead
            id="zusagen-titel"
            title={about.promises.title}
            className={stickyHead}
          />
          <RevealGroup
            as="ul"
            className="min-w-0 divide-y divide-line border-y border-line lg:col-span-8"
          >
            {about.promises.items.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 py-6 md:grid-cols-[3rem_minmax(0,2fr)_minmax(0,3fr)] md:gap-x-8 md:py-7"
              >
                <CheckCircle
                  weight="duotone"
                  className="size-7 self-start text-signal"
                  aria-hidden="true"
                />
                <h3 className="t-h3 min-w-0 text-ink">{item.title}</h3>
                <p className="col-start-2 min-w-0 font-medium leading-relaxed text-ink-600 md:col-start-3">
                  <RichText text={item.text} lang={lang} />
                </p>
              </li>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Ablauf (UU-04): vertikale Prozess-Sektion mit kleiner Marke je Schritt und
          hervorgehobenem aktivem Schritt; nichts gepinnt, der Scrolly bleibt der
          Startseite vorbehalten. Die Überschrift bleibt links stehen. */}
      <section
        id="ablauf"
        aria-labelledby="ablauf-titel"
        className="section border-t border-line bg-stone"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <SectionHead
            id="ablauf-titel"
            title={contact.steps.title}
            className={stickyHead}
          />
          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <ProcessScrolly
              steps={contact.steps.items}
              lang={lang}
              variant="vertical"
              figureKeys={["anfrage", "besichtigung", "start"]}
              idPrefix="ablauf-schritt"
            />
          </div>
        </div>
      </section>

      {/* Einwände (Conversion H8): Antworten im HTML, native details */}
      <section id="fragen" aria-labelledby="fragen-titel" className="section">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <SectionHead
            id="fragen-titel"
            title={ui.faq}
            className="lg:col-span-4"
          />
          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <Faq items={faq} lang={lang} />
          </div>
        </div>
      </section>

      {/* Ansprechperson und Register (R5d, N033, UU-12): ein Band auf Tinte statt
          zweier Karten. Links die Person mit Telefon und E-Mail, rechts die
          Registerdaten als Nebenangabe (h3), ohne Fläche und Schatten. */}
      <section
        id="ansprechperson"
        aria-labelledby="ansprechperson-titel"
        className="on-dark relative overflow-hidden bg-ink text-white"
      >
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
        <div className="container relative grid gap-12 py-16 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/15 lg:py-24">
          <div className="min-w-0 md:pr-12 lg:pr-16">
            <h2 id="ansprechperson-titel" className="t-h2 text-white">
              {about.contact.title}
            </h2>
            <p className="t-lead mt-5 max-w-[46ch] text-white/85">
              {about.contact.text}
            </p>
            <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
              <li>
                <a
                  href={company.phone.href}
                  className="inline-flex min-h-6 items-center gap-3 font-display text-lg font-bold text-white tabular-nums transition-colors hover:text-brass"
                >
                  <Phone
                    weight="duotone"
                    className="size-5 shrink-0 text-brass"
                    aria-hidden="true"
                  />
                  {company.phone.display}
                </a>
              </li>
              <li className="min-w-0">
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex min-h-6 max-w-full items-center gap-3 font-display text-lg font-bold text-white transition-colors hover:text-brass"
                >
                  <Envelope
                    weight="duotone"
                    className="size-5 shrink-0 text-brass"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 break-all">{company.email}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="min-w-0 md:pl-12 lg:pl-16">
            <h3 className="t-eyebrow text-brass">{about.register.title}</h3>
            <p className="mt-4 font-display text-xl font-bold leading-snug text-white">
              {company.legalName}
            </p>
            <p className="mt-1 font-medium leading-relaxed text-white/85">
              {company.address.street}, {company.address.postalCode}{" "}
              {company.address.city}
            </p>
            <p className="mt-6 font-mono text-sm leading-6 text-white/85">
              {about.register.court}
            </p>
            <dl className="mt-1 flex gap-3 font-mono text-sm leading-6">
              <dt className="text-white/70">{about.register.uid}</dt>
              <dd className="text-white">{company.uid}</dd>
            </dl>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
