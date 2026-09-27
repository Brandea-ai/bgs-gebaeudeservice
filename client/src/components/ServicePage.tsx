import Link from 'next/link'
import { ArrowRight, Check, Minus, Phone } from 'lucide-react'
import SwissNavigation from './SwissNavigation'
import SwissFooter from './SwissFooter'
import AppointmentButton from './AppointmentButton'
import Breadcrumbs from './Breadcrumbs'
import ImageSlot from './ImageSlot'
import Faq from './Faq'
import JsonLd from './JsonLd'
import OfferCta from './OfferCta'
import RichText from './RichText'
import Steps from './Steps'
import TocNav from './TocNav'
import { Button } from './ui/button'
import { company } from '../../../shared/company'
import { chatEnabled } from '../../../shared/features'
import { serviceJsonLd } from '../../../shared/structured-data'
import { getDict } from '../../../content'
import { localizePath, type Locale } from '../../../shared/i18n'
import type { ServicePageContent } from '../../../content/types'

/**
 * Vorlage für Leistungs- und Premiumseiten (M29, M54, F4): Server-Komponente,
 * alle Texte im HTML, auch die Antworten der FAQ (M21, M22). Hero ohne
 * Einblendung (M23). Aufbau: Kopf mit Bildfläche, Eckdaten über die ganze
 * Breite, dann Inhalt mit klebendem Inhaltsverzeichnis links.
 * Premium-Seiten in Graphit mit Messington (Premium-Linie, E47).
 */
export default function ServicePage({ content, lang = 'de' }: { content: ServicePageContent; lang?: Locale }) {
  const { ui, pages } = getDict(lang)
  const premium = content.area === 'premium'
  // Gebiet, Offerte und Rückmeldung gelten überall, eine Seite kann sie mit eigenem Text ersetzen
  const standardFacts = [
    { label: ui.factArea, value: ui.factAreaValue },
    { label: ui.factOffer, value: ui.factOfferValue },
    { label: ui.factAnswer, value: ui.factAnswerValue },
  ]
  const facts = [
    ...content.facts,
    ...standardFacts.filter((fact) => !content.facts.some((own) => own.label === fact.label)),
  ]

  const sectionId = (index: number) => `abschnitt-${index + 1}`
  const toc = [
    { id: 'umfang', title: content.scope.title },
    ...(content.sections ?? []).map((section, index) => ({ id: sectionId(index), title: section.title })),
    { id: 'ablauf', title: ui.steps },
    { id: 'fragen', title: ui.faq },
    { id: 'verwandt', title: ui.related },
  ]

  // Zweite Handlungsaufforderung: Telefon, solange der Chat aus ist (M31, E14)
  const secondaryAction = chatEnabled ? (
    <AppointmentButton size="xl" variant={premium ? 'inverse' : 'outline'} />
  ) : (
    <Button asChild size="xl" variant={premium ? 'inverse' : 'outline'}>
      <a href={company.phone.href} className="tabular-nums">
        <Phone aria-hidden="true" />
        {company.phone.display}
      </a>
    </Button>
  )

  const checkList = (items: string[]) => (
    <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 border-b border-line py-4 text-ink">
          <Check className="mt-1 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
          <span className="leading-relaxed">
            <RichText text={item} lang={lang} />
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path={content.path} />
      <JsonLd data={serviceJsonLd(content.path, lang)} />

      <main id="inhalt">
        {/* Kopf */}
        <section className={premium ? 'relative overflow-hidden bg-ink text-white' : 'bg-stone'}>
          {premium && <div className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden" aria-hidden="true" />}
          <div className="container relative grid gap-12 pt-10 pb-16 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24">
            <div className="min-w-0 lg:col-span-7">
              <Breadcrumbs path={content.path} tone={premium ? 'dark' : 'light'} lang={lang} />
              <p className={`t-eyebrow mb-6 flex items-center gap-3 ${premium ? 'text-brass' : 'text-signal'}`}>
                <span className={`inline-block h-px w-8 ${premium ? 'bg-brass' : 'bg-signal'}`} aria-hidden="true" />
                {premium ? ui.premiumLine : content.eyebrow}
              </p>
              <h1 className={`t-h1 max-w-[20ch] hyphens-auto break-words ${premium ? 'text-white' : 'text-ink'}`}>{content.h1}</h1>
              <div className="mt-8 space-y-4">
                {content.lead.map((paragraph) => (
                  <p key={paragraph} className={`t-lead max-w-[52ch] ${premium ? 'text-white/75' : 'text-mute'}`}>
                    <RichText
                      text={paragraph}
                      lang={lang}
                      linkClassName={premium ? 'font-medium text-white underline decoration-brass underline-offset-4 hover:decoration-white' : undefined}
                    />
                  </p>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="xl" className="arrow-link">
                  <a href="#kontakt-formular">
                    {ui.offerCta}
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                {secondaryAction}
              </div>
            </div>

            {/* Bildfläche, bis zur Freigabe ein Platzhalter (E59, E66), nur ab Tablet quer */}
            <div className="hidden lg:col-span-5 lg:block">
              <ImageSlot
                src={content.image?.src}
                alt={content.image?.alt}
                className="aspect-[4/5] w-full max-h-[40rem]"
                lang={lang}
                tone={premium ? 'dark' : 'light'}
              />
            </div>
          </div>

          {/* Eckdaten über die ganze Breite */}
          <div className={`border-t ${premium ? 'border-white/10' : 'border-line bg-white'}`}>
            <div className="container">
              <h2 id="auf-einen-blick" className="sr-only">{ui.atAGlance}</h2>
              <dl aria-labelledby="auf-einen-blick" className={`grid sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] ${premium ? 'divide-white/10' : 'divide-line'} lg:divide-x`}>
                {facts.map((fact) => (
                  <div key={fact.label} className={`py-6 lg:px-6 lg:first:pl-0 ${premium ? 'border-white/10' : 'border-line'} max-lg:border-b`}>
                    <dt className={`t-eyebrow mb-2 ${premium ? 'text-white/50' : 'text-mute'}`}>{fact.label}</dt>
                    <dd className={`leading-snug ${premium ? 'text-white' : 'text-ink'}`}>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Inhalt mit klebendem Verzeichnis */}
        <div className="container grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-[calc(var(--header-h)+2.5rem)] space-y-10">
              <TocNav label={ui.onThisPage} items={toc} />
              <div className="border-t border-ink pt-6">
                <p className="font-display text-lg font-semibold leading-snug text-ink">{content.cta.title}</p>
                <a href="#kontakt-formular" className="arrow-link mt-4 inline-flex items-center gap-2 text-sm font-medium text-signal hover:text-signal-dark">
                  {ui.offerCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={company.phone.href} className="mt-3 flex items-center gap-2 text-sm text-mute tabular-nums hover:text-ink">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {company.phone.display}
                </a>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-20 lg:col-span-9 lg:space-y-28 xl:col-span-8 xl:col-start-5">
            <section aria-labelledby="umfang">
              <h2 id="umfang" className="t-h2 text-ink">{content.scope.title}</h2>
              {content.scope.intro && (
                <p className="t-lead mt-6 max-w-[60ch] text-mute">
                  <RichText text={content.scope.intro} lang={lang} />
                </p>
              )}
              <div className="mt-10">{checkList(content.scope.items)}</div>
              {content.scope.notIncluded && (
                <aside aria-labelledby="nicht-enthalten" className="mt-10 border-l-2 border-ink bg-stone p-6 md:p-8">
                  <h3 id="nicht-enthalten" className="t-eyebrow mb-4 text-ink">{ui.notIncluded}</h3>
                  <ul className="space-y-3">
                    {content.scope.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-700">
                        <Minus className="mt-1 h-4 w-4 shrink-0 text-mute" aria-hidden="true" />
                        <span>
                          <RichText text={item} lang={lang} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </section>

            {content.sections?.map((section, index) => (
              <section key={section.title} aria-labelledby={sectionId(index)} className="reveal">
                <h2 id={sectionId(index)} className="t-h2 text-ink">{section.title}</h2>
                <div className="mt-6 space-y-4">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="prose-body leading-relaxed text-[1.0625rem]">
                      <RichText text={paragraph} lang={lang} />
                    </p>
                  ))}
                </div>
                {section.items && <div className="mt-8">{checkList(section.items)}</div>}
              </section>
            ))}

            <section aria-labelledby="ablauf">
              <h2 id="ablauf" className="t-h2 mb-12 text-ink">{ui.steps}</h2>
              <Steps steps={content.steps} lang={lang} narrow />
            </section>

            <section aria-labelledby="fragen">
              <h2 id="fragen" className="t-h2 mb-10 text-ink">{ui.faq}</h2>
              <Faq items={content.faq} lang={lang} />
            </section>
          </div>
        </div>

        <section aria-labelledby="verwandt" className="section-tight bg-stone">
          <div className="container">
            <h2 id="verwandt" className="t-h2 mb-10 text-ink">{ui.related}</h2>
            <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {content.related.map((item) => (
                <li key={item.path} className="bg-white sm:[&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1">
                  <Link href={localizePath(item.path, lang)} className="arrow-link group flex h-full flex-col p-8 transition-colors hover:bg-ink">
                    <span className="flex items-start justify-between gap-4">
                      <span className="t-h3 min-w-0 text-ink transition-colors group-hover:text-white">{pages[item.path].label}</span>
                      <ArrowRight className="mt-1.5 h-5 w-5 shrink-0 text-signal transition-colors group-hover:text-brass" aria-hidden="true" />
                    </span>
                    <span className="mt-4 block leading-relaxed text-mute transition-colors group-hover:text-white/70">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <OfferCta title={content.cta.title} text={content.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path={content.path} />
    </div>
  )
}
