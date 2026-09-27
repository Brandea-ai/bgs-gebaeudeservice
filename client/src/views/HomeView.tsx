import Link from "next/link";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import PageFrame from "@/components/PageFrame";
import AppointmentButton from "@/components/AppointmentButton";
import { LazyIndustryAdvisor } from "@/components/LazyChat";
import HeroBackground from "@/components/HeroBackground";
import SectionHead from "@/components/SectionHead";
import CantonMap from "@/components/CantonMap";
import ImageSlot from "@/components/ImageSlot";
import Faq from "@/components/Faq";
import ProcessScrolly from "@/components/ProcessScrolly";
import { RevealGroup } from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { chatEnabled, imagesArePlaceholders } from "../../../shared/features";
import { company } from "../../../shared/company";
import { cantonName } from "../../../shared/cantons";
import { placePins } from "../../../shared/canton-map";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

type ProofItem = { value: string; label: string };

/**
 * Kennzahlen (E18) als statischer Text: kein Zähler, kein Layoutsprung (H04).
 * dt vor dd im HTML (H15), der Wert steht optisch zuerst. Schriftstufe je
 * Raster so gewählt, dass auch «CHF 10 millions» (FR) nicht abgeschnitten wird;
 * wo es eng wird, bricht der Wert um statt überzulaufen.
 */
function ProofCells({
  items,
  cell,
  figure,
}: {
  items: readonly ProofItem[];
  cell: string;
  figure: string;
}) {
  return items.map(item => (
    <div
      key={item.label}
      className={`flex min-w-0 flex-col gap-2 bg-ink-800 ${cell}`}
    >
      <dt className="order-2 text-sm font-medium leading-snug text-white/85">
        {item.label}
      </dt>
      <dd className={`t-figure order-1 text-white ${figure}`}>
        {item.value}
      </dd>
    </div>
  ));
}

/**
 * Startseite (F3, F8, F15, M39): Server-Komponente, alle Texte im HTML (M21).
 * Aufbau nach dem Brief: Aussage (statischer Kopf, H1 als LCP, H07),
 * Vertrauensleiste, Leistungen als drei Gruppenkarten, Ablauf als gepinnte
 * Prozess-Sektion (H02, einzige gepinnte Sektion), Zusagen, Einwände (H11),
 * Einzugsgebiet mit Karte, Formular mit dem Abschluss der Seite (PageFrame).
 * Einblendungen nur als Gruppe auf Listen unterhalb des ersten Bildschirms.
 */
export default function HomeView({ lang }: { lang: Locale }) {
  const { home, proof, about, contact, area } = getDict(lang).seiten;
  const { ui, misc } = getDict(lang);
  const { serviceGroups, chrome } = navDicts[lang];
  const href = (path: PagePath) => localizePath(path, lang);
  const pins = placePins.filter(pin =>
    ["Zug", "Aarau", "Stans", "Sarnen"].includes(pin.name)
  );
  // Einwände (H11, Conversion H8): Kosten, Schnelligkeit, kurzfristige Einsätze.
  // «Versichert» steht direkt darüber in den Zusagen, «Regionen» folgt als Abschnitt.
  const faq = [1, 0, 4]
    .map(index => contact.faq[index])
    .filter((item): item is (typeof contact.faq)[number] => Boolean(item));

  return (
    <PageFrame lang={lang} path="/" contact={home.cta}>
      {/* Aussage: statisch, ohne Einblendung, damit die H1 sofort steht (H07) */}
      <section
        id="start"
        aria-labelledby="start-titel"
        className="on-dark relative isolate overflow-hidden bg-ink text-white"
      >
        <HeroBackground />
        <div className="container relative grid gap-10 pt-12 pb-12 md:pt-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-20 xl:pt-24">
          <div className="min-w-0 lg:col-span-7 xl:col-span-6">
            <h1 id="start-titel" className="t-display max-w-[20ch] text-white">
              {home.h1}
            </h1>
            <p className="t-lead mt-7 max-w-[46ch] text-white/90">
              {home.lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" className="arrow-link">
                <a href="#kontakt-formular" data-cta="hero">
                  {ui.offerCta}
                  <ArrowRight weight="regular" aria-hidden="true" />
                </a>
              </Button>
              {chatEnabled ? (
                <AppointmentButton size="xl" variant="inverse" />
              ) : (
                <Button asChild size="xl" variant="inverse">
                  <a href={company.phone.href} className="tabular-nums">
                    <Phone weight="regular" aria-hidden="true" />
                    {company.phone.display}
                  </a>
                </Button>
              )}
            </div>
            {/* Antwortzeile nur, wo die schmale Kopfzeile sie nicht schon zeigt (S13, H12) */}
            <p className="mt-8 flex items-center gap-2 text-sm font-medium text-white/80 xl:hidden">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-brass"
                aria-hidden="true"
              />
              {chrome.answer} · {chrome.seat}
            </p>

            {/* KI-Berater erst mit Modell und Zugang (E35), bis dahin keine Handlungsaufforderung dorthin (M31) */}
            {chatEnabled && (
              <div className="mt-12 max-w-3xl">
                <LazyIndustryAdvisor />
              </div>
            )}
          </div>

          <div className="min-w-0 lg:col-span-5 lg:col-start-8 xl:col-span-6 xl:col-start-7">
            {imagesArePlaceholders ? (
              /* Bis zur Freigabe der Fotos (E19) tragen die Kennzahlen die rechte
                 Hälfte des ersten Bildschirms (H06): «warum wir» ohne Scrollen,
                 kein Platzhalter vor dem ersten Beleg. Statisch, weil im ersten
                 Bildschirm. Ab lg eine Spalte, ab xl zwei mal zwei. */
              <>
                <h2 id="kennzahlen-titel" className="sr-only">
                  {home.proofTitle}
                </h2>
                <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-1 xl:grid-cols-2">
                  <ProofCells
                    items={proof}
                    cell="px-4 py-5 sm:p-7 lg:px-6 lg:py-5 xl:p-7"
                    figure="text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[1.875rem] 2xl:text-[2.25rem]"
                  />
                </dl>
              </>
            ) : (
              /* Mit Foto (E19): Bildfläche mit leichtem Drift beim Wegscrollen */
              <ImageSlot
                src="/swiss-hero-main.jpg"
                alt={home.eyebrow}
                lang={lang}
                tone="dark"
                parallax="drift"
                className="aspect-[4/3] w-full lg:aspect-[5/4] xl:aspect-[4/3]"
              />
            )}
          </div>
        </div>

        {/* Mit Foto stehen die Kennzahlen als Reihe unter dem Raster (H06) */}
        {!imagesArePlaceholders && (
          <div className="container relative pb-12 lg:pb-16">
            <h2 id="kennzahlen-titel" className="sr-only">
              {home.proofTitle}
            </h2>
            <RevealGroup
              as="dl"
              className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4"
            >
              <ProofCells
                items={proof}
                cell="px-4 py-5 sm:px-7 sm:py-8"
                figure="text-[1.5rem] sm:text-[2rem] lg:text-[1.75rem] xl:text-[2.25rem] 2xl:text-[2.5rem]"
              />
            </RevealGroup>
          </div>
        )}
      </section>

      {/* Vertrauensleiste (H03, S07, E18): nur, was die Kennzahlen nicht schon
          sagen. Ohne eigenen Abschnittsnamen, die Liste genügt. */}
      <div className="border-b border-line bg-white">
        <div className="container py-6 lg:py-8">
          <TrustStrip
            lang={lang}
            only={["register", "sprachen", "antwort", "offerte"]}
          />
        </div>
      </div>

      {/* Leistungen: drei Gruppenkarten als eine gestaffelte Gruppe (M39) */}
      <section
        id="leistungen"
        aria-labelledby="leistungen-titel"
        className="section bg-white"
      >
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHead
              id="leistungen-titel"
              title={home.services.title}
              intro={home.services.intro}
              className="lg:col-span-8"
            />
            <div className="lg:col-span-4 lg:justify-self-end">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="arrow-link"
              >
                <Link href={href("/leistungen")}>
                  {home.services.groups[0].link.text}
                  <ArrowRight weight="regular" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <RevealGroup
            as="ul"
            className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {home.services.groups.map((group, index) => {
              // Einträge, zu denen der Kartenlink schon führt, fallen weg (H10)
              const links =
                serviceGroups[index]?.links.filter(
                  link =>
                    link.path !== "/leistungen" && link.path !== group.link.path
                ) ?? [];
              const premium = group.key === "premium";
              return (
                <li
                  key={group.key}
                  className={`card-lift group flex flex-col overflow-hidden ${
                    premium
                      ? // Zwischen md und xl quer: Bild links, Text rechts (H14)
                        "on-dark bg-ink text-white md:col-span-2 md:grid md:grid-cols-2 xl:col-span-1 xl:flex"
                      : "bg-white text-ink shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]"
                  }`}
                >
                  {/* Bildfläche: klickbar, aber kein eigener Tab-Stopp (H10) */}
                  <Link
                    href={href(group.link.path)}
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`block ${premium ? "md:h-full xl:h-auto" : ""}`}
                  >
                    <ImageSlot
                      lang={lang}
                      tone={premium ? "dark" : "light"}
                      hover
                      decorative
                      // Premium-Karte ohne Bildlabel, sonst dreimal «Premium» (S12)
                      label={premium ? undefined : group.title}
                      className={`aspect-[16/10] w-full ${premium ? "md:aspect-auto md:h-full xl:aspect-[16/10]" : ""}`}
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    {/* Kennzeile nur mit eigener Premium-Marke (S12, E38) */}
                    {premium && company.premiumBrand && (
                      <p className="t-eyebrow mb-3 text-brass">
                        {ui.premiumLine}
                      </p>
                    )}
                    <h3 className="t-h3">
                      <Link
                        href={href(group.link.path)}
                        className={`transition-colors ${premium ? "hover:text-brass" : "hover:text-signal"}`}
                      >
                        {group.title}
                      </Link>
                    </h3>
                    <p
                      className={`mt-3 font-medium leading-relaxed ${premium ? "text-white/85" : "text-ink-600"}`}
                    >
                      {group.text}
                    </p>
                    <ul
                      className={`mt-6 divide-y border-y ${premium ? "divide-white/15 border-white/15" : "divide-line border-line"}`}
                    >
                      {links.map(link => (
                        <li key={link.path}>
                          <Link
                            href={href(link.path)}
                            className={`arrow-link group/item flex min-h-11 items-center justify-between gap-4 py-3 text-[0.9875rem] font-medium transition-colors ${premium ? "text-white hover:text-brass" : "text-ink hover:text-signal"}`}
                          >
                            {link.label}
                            {/* Pfeil erst beim Überfahren oder Fokus, auf Touch immer (H13) */}
                            <ArrowRight
                              weight="regular"
                              className={`size-4 shrink-0 opacity-0 transition-opacity group-hover/item:opacity-100 group-focus-visible/item:opacity-100 [@media(hover:none)]:opacity-100 ${premium ? "text-brass" : "text-signal"}`}
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={href(group.link.path)}
                      className={`arrow-link mt-auto inline-flex items-center gap-2 pt-6 font-semibold ${premium ? "text-brass hover:text-white" : "text-signal hover:text-signal-dark"}`}
                    >
                      {group.link.text}
                      <ArrowRight
                        weight="regular"
                        className="size-4"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </li>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Ablauf bis zur Offerte: Höhepunkt der Seite, stehende Figur links,
          Schritte rechts, aktiver Schritt hervorgehoben (H02, F14) */}
      <section
        id="ablauf"
        aria-labelledby="ablauf-titel"
        className="section bg-stone"
      >
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHead
              id="ablauf-titel"
              title={home.steps.title}
              className="lg:col-span-7"
            />
            <div className="lg:col-span-5 lg:justify-self-end">
              <Button asChild size="lg" className="arrow-link">
                <a href="#kontakt-formular" data-cta="ablauf">
                  {ui.offerCta}
                  <ArrowRight weight="regular" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-16">
            <ProcessScrolly
              steps={home.steps.items}
              lang={lang}
              variant="wide"
              figureKeys={["anfrage", "besichtigung", "start"]}
              idPrefix="ablauf-schritt"
            />
          </div>
        </div>
      </section>

      {/* Zusagen (E18, M47): sechs belegte Punkte, Nummer statt Icon, keine Karten */}
      <section
        id="zusagen"
        aria-labelledby="zusagen-titel"
        className="section border-t border-line bg-white"
      >
        <div className="container">
          <SectionHead id="zusagen-titel" title={about.promises.title} />
          <RevealGroup
            as="ul"
            className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-3"
          >
            {about.promises.items.map((item, index) => (
              <li key={item.title} className="min-w-0 border-t border-ink pt-6">
                <span
                  className="font-display text-2xl font-bold leading-none tabular-nums text-signal"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3 mt-5 text-ink">{item.title}</h3>
                <p className="mt-3 max-w-[42ch] font-medium leading-relaxed text-ink-600">
                  {item.text}
                </p>
              </li>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Einwände vor dem Abschluss (H11): Antworten im HTML, keine FAQ-Strukturdaten */}
      <section
        id="fragen"
        aria-labelledby="fragen-titel"
        className="section bg-stone"
      >
        <div className="container grid gap-10 lg:grid-cols-12">
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

      {/* Einzugsgebiet: Karte erscheint einmal und bleibt, Chips ohne Einblendung */}
      <section
        id="gebiet"
        aria-labelledby="gebiet-titel"
        className="on-dark relative overflow-hidden bg-ink text-white"
      >
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
        <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="min-w-0 lg:col-span-5">
            <SectionHead
              id="gebiet-titel"
              title={home.area.title}
              intro={home.area.text}
              tone="dark"
            />
            <ul
              className="mt-8 flex flex-wrap gap-2"
              aria-label={area.cantonsTitle}
            >
              {company.cantons.map(name => (
                <li
                  key={name}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white"
                >
                  <span
                    className="inline-block h-2 w-2 bg-signal"
                    aria-hidden="true"
                  />
                  {cantonName(name, lang)}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              variant="inverse"
              className="arrow-link mt-8"
            >
              <Link href={href("/einzugsgebiet")}>
                {home.area.link}
                <ArrowRight weight="regular" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="min-w-0 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <CantonMap
              lang={lang}
              texts={{ ...misc.map, seat: chrome.seat }}
              tone="dark"
              pins={pins.map(pin => ({ x: pin.x, y: pin.y, label: pin.name }))}
              className="mx-auto max-w-[44rem]"
            />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
