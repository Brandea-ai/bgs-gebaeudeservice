import Link from "next/link";
import { ArrowRight, Check, Phone, X } from "@phosphor-icons/react/dist/ssr";
import PageFrame from "@/components/PageFrame";
import AppointmentButton from "./AppointmentButton";
import Breadcrumbs from "./Breadcrumbs";
import Faq from "./Faq";
import ImageSlot from "./ImageSlot";
import JsonLd from "./JsonLd";
import ProcessScrolly from "./ProcessScrolly";
import Reveal, { RevealGroup } from "./Reveal";
import RichText from "./RichText";
import TocNav from "./TocNav";
import TrustStrip from "./TrustStrip";
import { Button } from "./ui/button";
import { company } from "../../../shared/company";
import { chatEnabled } from "../../../shared/features";
import { serviceJsonLd } from "../../../shared/structured-data";
import { getDict } from "../../../content";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { ServicePageContent } from "../../../content/types";

/**
 * Vorlage für Leistungs- und Premiumseiten (M29, M54, F4, F11, F15): Server-
 * Komponente, alle Texte im HTML, auch die Antworten der FAQ (M21, M22).
 * Aufbau entlang der Kundenentscheidung: statischer Kopf (Anlass, Lösung,
 * nächster Schritt), Eckdaten, Vertrauensleiste, Inhalt mit klebendem
 * Verzeichnis und Offerte-Karte links, Umfang mit Abgrenzung, Ablauf als
 * Prozess-Sektion, Fragen, verwandte Leistungen; den Abschluss beschriftet
 * PageFrame mit dem cta der Seite (L09). Premium-Seiten in Tinte mit Messing
 * (Premium-Linie, E47), dort nie Signalrot auf Tinte.
 */
export default function ServicePage({
  content,
  lang = "de",
}: {
  content: ServicePageContent;
  lang?: Locale;
}) {
  const { ui, pages } = getDict(lang);
  const premium = content.area === "premium";

  // Eckdaten: das Gebiet ergänzt die Vorlage, ausser die Seite nennt es selbst.
  // Offerte und Rückmeldung stehen in der Vertrauensleiste direkt darunter (L13, F08).
  const facts = content.facts.some(fact => fact.label === ui.factArea)
    ? content.facts
    : [...content.facts, { label: ui.factArea, value: ui.factAreaValue }];
  // Spalten nach Anzahl, damit keine halbleere Zeile entsteht (L05, F03)
  const factCols =
    facts.length <= 4
      ? "min-[480px]:grid-cols-2 lg:grid-cols-4"
      : facts.length === 5
        ? "min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        : "min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6";

  // Ankerziele liegen auf den Sektionen, nicht auf den Überschriften (L04)
  const sectionId = (index: number) => `abschnitt-${index + 1}`;
  const toc = [
    { id: "umfang", title: content.scope.title },
    ...(content.sections ?? []).map((section, index) => ({
      id: sectionId(index),
      title: section.title,
    })),
    { id: "ablauf", title: ui.steps },
    { id: "fragen", title: ui.faq },
    { id: "verwandt", title: ui.related },
  ];

  // Zweite Handlungsaufforderung: Telefon, solange der Chat aus ist (M31, E14)
  const secondaryAction = chatEnabled ? (
    <AppointmentButton size="xl" variant={premium ? "inverse" : "outline"} />
  ) : (
    <Button asChild size="xl" variant={premium ? "inverse" : "outline"}>
      <a href={company.phone.href} className="tabular-nums">
        <Phone weight="regular" aria-hidden="true" />
        {company.phone.display}
      </a>
    </Button>
  );

  // Checkliste: Häkchen ohne Kreis (L06, F04); ab drei Einträgen eine gestaffelte Gruppe (L12, F10)
  const checkList = (items: string[]) => {
    const rows = items.map(item => (
      <li
        key={item}
        className="flex items-start gap-3 bg-stone px-4 py-3.5 text-ink"
      >
        <Check
          weight="regular"
          className="mt-[0.2em] size-5 shrink-0 text-signal"
          aria-hidden="true"
        />
        <span className="min-w-0 font-medium leading-relaxed">
          <RichText text={item} lang={lang} />
        </span>
      </li>
    ));
    const grid = "grid gap-3 sm:grid-cols-2";
    return items.length >= 3 ? (
      <RevealGroup as="ul" className={grid}>
        {rows}
      </RevealGroup>
    ) : (
      <ul className={grid}>{rows}</ul>
    );
  };

  const tone = premium ? "dark" : "light";

  return (
    <PageFrame lang={lang} path={content.path} contact={content.cta}>
      <JsonLd data={serviceJsonLd(content.path, lang)} />

      {/* Kopf: statisch, ohne Einblendung, der Titel bleibt das grösste Element beim Laden (LCP) */}
      <section
        className={
          premium
            ? "on-dark relative overflow-hidden bg-ink text-white"
            : "relative overflow-hidden bg-stone"
        }
      >
        {premium && (
          <div
            className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
            aria-hidden="true"
          />
        )}
        <div className="container relative grid gap-10 pt-6 pb-10 md:pt-10 lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:gap-y-12 lg:pb-14">
          <div className="min-w-0 lg:col-span-7 lg:row-start-1 xl:col-span-6">
            <Breadcrumbs path={content.path} tone={tone} lang={lang} />
            {/* Kennzeile ohne Pille (F12). Premium nur mit eigener Marke, sonst
                stünde «Premium» direkt unter der Brotkrume «Premium» (S12, E38). */}
            {premium
              ? company.premiumBrand && (
                  <p className="t-eyebrow mb-4 flex items-center gap-3 text-brass before:h-px before:w-8 before:bg-brass">
                    {ui.premiumLine}
                  </p>
                )
              : content.eyebrow && (
                  <p className="t-eyebrow mb-4 text-signal">{content.eyebrow}</p>
                )}
            <h1
              className={`t-h1 max-w-[22ch] ${premium ? "text-white" : "text-ink"}`}
            >
              {content.h1}
            </h1>
            {/* Erster Absatz als Lead (Anlass), weitere kleiner, damit der
                nächste Schritt auf Laptops im ersten Bildschirm bleibt (F02) */}
            {content.lead.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? `t-lead mt-6 max-w-[52ch] ${premium ? "text-white/90" : "text-ink-600"}`
                    : `mt-4 max-w-[56ch] font-medium leading-relaxed ${premium ? "text-white/85" : "text-ink-600"}`
                }
              >
                <RichText
                  text={paragraph}
                  lang={lang}
                  linkClassName={
                    premium
                      ? "font-semibold text-white underline decoration-brass underline-offset-4 hover:decoration-white"
                      : undefined
                  }
                />
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="xl" className="arrow-link">
                <a href="#kontakt-formular" data-cta="hero">
                  {ui.offerCta}
                  <ArrowRight weight="regular" aria-hidden="true" />
                </a>
              </Button>
              {secondaryAction}
            </div>
          </div>

          {/* Bildfläche, bis zur Freigabe ein Platzhalter (E59, E66). Auf dem
              Handy erst nach den Eckdaten, damit kein leerer Bildschirm
              vor dem ersten Beleg steht (L10, F05). */}
          <div className="order-last min-w-0 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 xl:col-span-6 xl:col-start-7">
            <ImageSlot
              src={content.image?.src}
              alt={content.image?.alt}
              label={pages[content.path].label}
              className="aspect-[16/9] w-full sm:aspect-[4/3] lg:aspect-[5/4] xl:aspect-[16/10]"
              lang={lang}
              tone={tone}
              parallax="drift"
            />
          </div>

          {/* Eckdaten als eine gestaffelte Gruppe; lange Werte trennen statt überlaufen (L05, F03) */}
          <div
            className={`min-w-0 border-t lg:col-span-12 lg:row-start-2 ${premium ? "border-white/10" : "border-line"}`}
          >
            <h2 id="auf-einen-blick" className="sr-only">
              {ui.atAGlance}
            </h2>
            <RevealGroup
              as="dl"
              aria-labelledby="auf-einen-blick"
              className={`grid gap-x-6 ${factCols}`}
            >
              {facts.map(fact => (
                <div
                  key={fact.label}
                  className={`min-w-0 border-b py-4 lg:border-b-0 lg:border-l lg:py-5 lg:pl-6 lg:first:border-l-0 lg:first:pl-0 ${premium ? "border-white/10" : "border-line"}`}
                >
                  <dt
                    className={`t-eyebrow ${premium ? "text-brass" : "text-signal"}`}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className={`hyphens mt-1.5 font-medium leading-snug [overflow-wrap:anywhere] ${premium ? "text-white" : "text-ink"}`}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Vertrauensleiste: belegte Angaben (E18), kompakt, eine Gruppe */}
      <div
        className={
          premium
            ? "on-dark border-y border-white/10 bg-ink"
            : "border-b border-line"
        }
      >
        <div className="container py-6">
          <TrustStrip lang={lang} compact tone={tone} />
        </div>
      </div>

      {/* Inhalt mit klebender Spalte: Verzeichnis und Offerte-Karte */}
      <div className="container grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-[calc(var(--header-h)+2rem)] space-y-8">
            <TocNav label={ui.onThisPage} items={toc} />
            {/* Offerte-Karte auf Tinte: Fokusring über on-dark (L03); die
                Antwortzeit nennt die Vertrauensleiste bereits (L13) */}
            <div className="on-dark bg-ink p-6 text-white">
              <p className="font-display text-lg font-bold leading-snug">
                {content.cta.title}
              </p>
              <Button asChild size="lg" className="arrow-link mt-5 w-full">
                <a href="#kontakt-formular" data-cta="aside">
                  {ui.offerCta}
                  <ArrowRight weight="regular" aria-hidden="true" />
                </a>
              </Button>
              <a
                href={company.phone.href}
                className="mt-3 flex min-h-11 items-center justify-center gap-2 py-2 text-sm font-semibold tabular-nums text-white transition-colors hover:text-brass"
              >
                <Phone
                  weight="regular"
                  className="size-4"
                  aria-hidden="true"
                />
                {company.phone.display}
              </a>
            </div>
          </div>
        </aside>

        <div className="min-w-0 space-y-16 lg:col-span-9 lg:space-y-24 xl:col-span-8 xl:col-start-5">
          {/* Umfang: Lösung und ehrliche Abgrenzung */}
          <section id="umfang" aria-labelledby="umfang-titel">
            <h2 id="umfang-titel" className="t-h2 text-ink">
              {content.scope.title}
            </h2>
            {content.scope.intro && (
              <p className="t-lead mt-5 max-w-[60ch] text-ink-600">
                <RichText text={content.scope.intro} lang={lang} />
              </p>
            )}
            <div className="mt-8">{checkList(content.scope.items)}</div>
            {content.scope.notIncluded && (
              <Reveal
                as="div"
                className="on-dark mt-8 bg-ink p-6 text-white md:p-8"
              >
                <h3
                  id="nicht-enthalten"
                  className="font-display text-lg font-bold"
                >
                  {ui.notIncluded}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {content.scope.notIncluded.map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-medium leading-relaxed text-white/90"
                    >
                      {/* X in Messing, kein Kreis, kein Signalrot auf Tinte (F04) */}
                      <X
                        weight="regular"
                        className="mt-[0.2em] size-5 shrink-0 text-brass"
                        aria-hidden="true"
                      />
                      <span className="min-w-0">
                        <RichText
                          text={item}
                          lang={lang}
                          linkClassName="font-semibold text-brass underline underline-offset-4 hover:text-white"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </section>

          {content.sections?.map((section, index) => (
            <section
              key={section.title}
              id={sectionId(index)}
              aria-labelledby={`${sectionId(index)}-titel`}
            >
              <h2 id={`${sectionId(index)}-titel`} className="t-h2 text-ink">
                {section.title}
              </h2>
              {section.paragraphs && (
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map(paragraph => (
                    <p key={paragraph} className="prose-body text-[1.0625rem]">
                      <RichText text={paragraph} lang={lang} />
                    </p>
                  ))}
                </div>
              )}
              {section.items && (
                <div className="mt-7">{checkList(section.items)}</div>
              )}
            </section>
          ))}

          {/* Ablauf als Prozess-Sektion: Figur bleibt stehen, der aktive
              Schritt ist hervorgehoben (L07, F06). Auf Premium-Seiten auf
              Tinte als eigene Bühne der Premium-Linie. */}
          <section
            id="ablauf"
            aria-labelledby="ablauf-titel"
            className={
              premium ? "on-dark bg-ink p-6 text-white sm:p-8 lg:p-10" : undefined
            }
          >
            <h2
              id="ablauf-titel"
              className={`t-h2 mb-8 ${premium ? "text-white" : "text-ink"}`}
            >
              {ui.steps}
            </h2>
            <ProcessScrolly
              steps={content.steps}
              lang={lang}
              tone={tone}
              variant="narrow"
              figureKeys={["anfrage", "besichtigung", "offerte", "start"]}
              idPrefix="schritt"
            />
          </section>

          {/* Einwände: Antworten im HTML, ohne JavaScript lesbar (M22) */}
          <section id="fragen" aria-labelledby="fragen-titel">
            <h2 id="fragen-titel" className="t-h2 mb-8 text-ink">
              {ui.faq}
            </h2>
            <Faq items={content.faq} lang={lang} />
          </section>
        </div>
      </div>

      {/* Verwandte Leistungen als Bildkarten, die ganze Karte ist der Link;
          Beschriftung nennt das Ziel (ui.toService), nicht die Offerte */}
      <section
        id="verwandt"
        aria-labelledby="verwandt-titel"
        className={`section-tight ${premium ? "on-dark bg-ink text-white" : "border-t border-line bg-white"}`}
      >
        <div className="container">
          <h2
            id="verwandt-titel"
            className={`t-h2 mb-8 ${premium ? "text-white" : "text-ink"}`}
          >
            {ui.related}
          </h2>
          <RevealGroup
            as="ul"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {content.related.map(item => (
              <li
                key={item.path}
                className={`card-lift group min-w-0 ${
                  premium
                    ? "bg-ink-800"
                    : "border border-line bg-white shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.25)]"
                }`}
              >
                <Link
                  href={localizePath(item.path, lang)}
                  className="arrow-link flex h-full flex-col"
                >
                  {/* Ohne Label: der Kartentitel trägt den Namen schon (L15, F15) */}
                  <ImageSlot
                    lang={lang}
                    tone={tone}
                    hover
                    decorative
                    className="aspect-[16/9] w-full"
                  />
                  <span className="flex flex-1 flex-col p-6">
                    <span
                      className={`t-h3 min-w-0 transition-colors ${premium ? "text-white group-hover:text-brass" : "text-ink group-hover:text-signal"}`}
                    >
                      {pages[item.path].label}
                    </span>
                    <span
                      className={`mt-3 block font-medium leading-relaxed ${premium ? "text-white/80" : "text-ink-600"}`}
                    >
                      {item.text}
                    </span>
                    <span
                      className={`mt-auto inline-flex items-center gap-2 pt-6 font-semibold ${premium ? "text-brass" : "text-signal"}`}
                    >
                      {ui.toService}
                      <ArrowRight
                        weight="regular"
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </RevealGroup>
        </div>
      </section>
    </PageFrame>
  );
}
