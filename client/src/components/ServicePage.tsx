import Link from "next/link";
import { ArrowRight, Check, Phone, X } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import AppointmentButton from "./AppointmentButton";
import Breadcrumbs from "./Breadcrumbs";
import ImageSlot from "./ImageSlot";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import OfferCta from "./OfferCta";
import Reveal from "./Reveal";
import RichText from "./RichText";
import Steps from "./Steps";
import TocNav from "./TocNav";
import TrustStrip from "./TrustStrip";
import { Button } from "./ui/button";
import { company } from "../../../shared/company";
import { chatEnabled } from "../../../shared/features";
import { serviceJsonLd } from "../../../shared/structured-data";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { ServicePageContent } from "../../../content/types";

/**
 * Vorlage für Leistungs- und Premiumseiten (M29, M54, F4, F11): Server-Komponente,
 * alle Texte im HTML, auch die Antworten der FAQ (M21, M22). Aufbau: Kopf mit
 * Bildfläche, Eckdaten, Vertrauensleiste, Inhalt mit klebendem Verzeichnis und
 * Offerte-Karte links, verwandte Leistungen als Bildkarten.
 * Premium-Seiten in Graphit mit Messington (Premium-Linie, E47).
 */
export default function ServicePage({
  content,
  lang = "de",
}: {
  content: ServicePageContent;
  lang?: Locale;
}) {
  const { ui, pages } = getDict(lang);
  const { chrome } = navDicts[lang];
  const premium = content.area === "premium";
  // Gebiet, Offerte und Rückmeldung gelten überall, eine Seite kann sie mit eigenem Text ersetzen
  const standardFacts = [
    { label: ui.factArea, value: ui.factAreaValue },
    { label: ui.factOffer, value: ui.factOfferValue },
    { label: ui.factAnswer, value: ui.factAnswerValue },
  ];
  const facts = [
    ...content.facts,
    ...standardFacts.filter(
      fact => !content.facts.some(own => own.label === fact.label)
    ),
  ];

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
        <Phone aria-hidden="true" />
        {company.phone.display}
      </a>
    </Button>
  );

  const checkList = (items: string[]) => (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item}
          delay={index * 50}
          className="flex items-start gap-3 bg-stone px-4 py-3.5 text-ink"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal text-white">
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="font-medium leading-relaxed">
            <RichText text={item} lang={lang} />
          </span>
        </Reveal>
      ))}
    </ul>
  );

  return (
    <PageFrame lang={lang} path={content.path}>
      <JsonLd data={serviceJsonLd(content.path, lang)} />
      {/* Kopf */}
      <section
        className={
          premium
            ? "relative overflow-hidden bg-ink text-white"
            : "relative overflow-hidden bg-stone"
        }
      >
        {premium && (
          <div
            className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
            aria-hidden="true"
          />
        )}
        <div className="container relative grid gap-10 pt-8 pb-12 md:pt-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-16">
          <div className="min-w-0 lg:col-span-6">
            <Breadcrumbs
              path={content.path}
              tone={premium ? "dark" : "light"}
              lang={lang}
            />
            <Reveal>
              {premium && (
                <p className="mb-5 inline-flex rounded-full bg-white/10 px-3 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brass">
                  {ui.premiumLine}
                </p>
              )}
              <h1
                className={`t-h1 max-w-[20ch] ${premium ? "text-white" : "text-ink"}`}
              >
                {content.h1}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-7 space-y-4">
                {content.lead.map(paragraph => (
                  <p
                    key={paragraph}
                    className={`t-lead max-w-[52ch] ${premium ? "text-white/90" : "text-ink-600"}`}
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
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="xl" className="arrow-link">
                  <a href="#kontakt-formular">
                    {ui.offerCta}
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                {secondaryAction}
              </div>
            </Reveal>
          </div>

          {/* Bildfläche, bis zur Freigabe ein Platzhalter (E59, E66) */}
          <Reveal
            variant="scale"
            delay={150}
            className="lg:col-span-6 lg:col-start-7"
          >
            <ImageSlot
              src={content.image?.src}
              alt={content.image?.alt}
              label={pages[content.path].label}
              className="aspect-[4/3] w-full lg:aspect-[5/4] xl:aspect-[16/10]"
              lang={lang}
              tone={premium ? "dark" : "light"}
            />
          </Reveal>
        </div>

        {/* Eckdaten */}
        <div
          className={`relative border-t ${premium ? "border-white/10" : "border-line bg-white"}`}
        >
          <div className="container">
            <h2 id="auf-einen-blick" className="sr-only">
              {ui.atAGlance}
            </h2>
            <dl
              aria-labelledby="auf-einen-blick"
              className="grid grid-cols-2 gap-x-6 lg:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]"
            >
              {facts.map((fact, index) => (
                <Reveal
                  as="div"
                  key={fact.label}
                  delay={index * 60}
                  className={`py-5 lg:py-6 ${premium ? "border-white/10" : "border-line"} border-b lg:border-b-0`}
                >
                  <dt
                    className={`font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${premium ? "text-brass" : "text-signal"}`}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className={`mt-1.5 font-medium leading-snug ${premium ? "text-white" : "text-ink"}`}
                  >
                    {fact.value}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className={`border-b border-line ${premium ? "bg-ink" : ""}`}>
        <div className="container py-6">
          <TrustStrip lang={lang} compact tone={premium ? "dark" : "light"} />
        </div>
      </div>

      {/* Inhalt mit klebendem Verzeichnis */}
      <div className="container grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-[calc(var(--header-h)+2rem)] space-y-8">
            <TocNav label={ui.onThisPage} items={toc} />
            <div className="bg-ink p-6 text-white">
              <p className="font-display text-lg font-bold leading-snug">
                {content.cta.title}
              </p>
              <p className="mt-2 text-sm font-medium text-white/80">
                {chrome.answer}
              </p>
              <Button asChild size="lg" className="arrow-link mt-5 w-full">
                <a href="#kontakt-formular">
                  {ui.offerCta}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <a
                href={company.phone.href}
                className="mt-3 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-white tabular-nums hover:text-brass"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone.display}
              </a>
            </div>
          </div>
        </aside>

        <div className="min-w-0 space-y-16 lg:col-span-9 lg:space-y-24 xl:col-span-8 xl:col-start-5">
          <section aria-labelledby="umfang">
            <Reveal>
              <h2 id="umfang" className="t-h2 text-ink">
                {content.scope.title}
              </h2>
              {content.scope.intro && (
                <p className="t-lead mt-5 max-w-[60ch] text-ink-600">
                  <RichText text={content.scope.intro} lang={lang} />
                </p>
              )}
            </Reveal>
            <div className="mt-8">{checkList(content.scope.items)}</div>
            {content.scope.notIncluded && (
              <Reveal
                as="section"
                delay={100}
                className="mt-8 bg-ink p-6 text-white md:p-8"
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
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <X className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span>
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
            <section key={section.title} aria-labelledby={sectionId(index)}>
              <Reveal>
                <h2 id={sectionId(index)} className="t-h2 text-ink">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs?.map(paragraph => (
                    <p key={paragraph} className="prose-body text-[1.0625rem]">
                      <RichText text={paragraph} lang={lang} />
                    </p>
                  ))}
                </div>
              </Reveal>
              {section.items && (
                <div className="mt-7">{checkList(section.items)}</div>
              )}
            </section>
          ))}

          <section aria-labelledby="ablauf">
            <Reveal>
              <h2 id="ablauf" className="t-h2 mb-8 text-ink">
                {ui.steps}
              </h2>
            </Reveal>
            <Steps steps={content.steps} lang={lang} narrow />
          </section>

          <section aria-labelledby="fragen">
            <Reveal>
              <h2 id="fragen" className="t-h2 mb-8 text-ink">
                {ui.faq}
              </h2>
            </Reveal>
            <Faq items={content.faq} lang={lang} />
          </section>
        </div>
      </div>

      <section aria-labelledby="verwandt" className="section-tight bg-stone">
        <div className="container">
          <Reveal>
            <h2 id="verwandt" className="t-h2 mb-8 text-ink">
              {ui.related}
            </h2>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.related.map((item, index) => (
              <Reveal
                as="li"
                key={item.path}
                delay={index * 100}
                className="card-lift group bg-white shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]"
              >
                <Link
                  href={localizePath(item.path, lang)}
                  className="flex h-full flex-col"
                >
                  <ImageSlot
                    lang={lang}
                    hover
                    label={pages[item.path].label}
                    className="aspect-[16/9] w-full"
                  />
                  <span className="flex flex-1 flex-col p-6">
                    <span className="flex items-start justify-between gap-4">
                      <span className="t-h3 min-w-0 text-ink transition-colors group-hover:text-signal">
                        {pages[item.path].label}
                      </span>
                      <ArrowRight
                        className="mt-1.5 h-5 w-5 shrink-0 text-signal"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-3 block font-medium leading-relaxed text-ink-600">
                      {item.text}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <OfferCta title={content.cta.title} text={content.cta.text} lang={lang} />
    </PageFrame>
  );
}
