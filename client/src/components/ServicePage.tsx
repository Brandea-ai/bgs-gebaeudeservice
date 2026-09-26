import Link from 'next/link'
import { ArrowRight, Check, ChevronDown, Phone } from 'lucide-react'
import SwissNavigation from './SwissNavigation'
import SwissFooter from './SwissFooter'
import AppointmentButton from './AppointmentButton'
import Breadcrumbs from './Breadcrumbs'
import JsonLd from './JsonLd'
import OfferCta from './OfferCta'
import RichText from './RichText'
import { Button } from './ui/button'
import { company } from '../../../shared/company'
import { chatEnabled } from '../../../shared/features'
import { pages } from '../../../shared/seo'
import { serviceJsonLd } from '../../../shared/structured-data'
import { ui } from '../../../content/de/common'
import type { ServicePageContent } from '../../../content/types'

/**
 * Vorlage für Leistungs- und Premiumseiten (M29, M54): Die Seite kommt als
 * Server-Komponente, alle Texte stehen im HTML, auch die Antworten der FAQ
 * (M21, M22). Hero ohne Einblendung (M23). Texte aus content/de/.
 */
export default function ServicePage({ content }: { content: ServicePageContent }) {
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

  // Zweite Handlungsaufforderung: Telefon, solange der Chat aus ist (M31, E14)
  const secondaryAction = chatEnabled ? (
    <AppointmentButton size="lg" variant="outline" />
  ) : (
    <Button asChild size="lg" variant="outline" className="text-sm sm:text-base px-6">
      <a href={company.phone.href}>
        <Phone className="w-4 h-4" aria-hidden="true" />
        {company.phone.display}
      </a>
    </Button>
  )

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <JsonLd data={serviceJsonLd(content.path)} />

      <main>
        <section className={`pt-28 md:pt-32 pb-14 md:pb-16 ${premium ? 'bg-slate-900 text-white' : 'bg-gradient-to-br from-slate-50 to-red-50/40'}`}>
          <div className="container max-w-6xl">
            <Breadcrumbs path={content.path} tone={premium ? 'dark' : 'light'} />
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wide mb-4 ${premium ? 'text-red-300' : 'text-red-700'}`}>
                  {premium ? ui.premiumLine : content.eyebrow}
                </p>
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${premium ? 'text-white' : 'text-slate-900'}`}>
                  {content.h1}
                </h1>
                {content.lead.map((paragraph) => (
                  <p key={paragraph} className={`text-base sm:text-lg leading-relaxed mb-4 max-w-2xl ${premium ? 'text-slate-300' : 'text-slate-700'}`}>
                    <RichText
                      text={paragraph}
                      linkClassName={premium ? 'font-medium text-white underline underline-offset-4 hover:no-underline' : undefined}
                    />
                  </p>
                ))}
                <div className="flex flex-wrap gap-3 mt-8">
                  <Button asChild size="lg" className="text-sm sm:text-base px-6">
                    <a href="#kontakt-formular">
                      {ui.offerCta}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                  {secondaryAction}
                </div>
              </div>

              <aside
                aria-labelledby="auf-einen-blick"
                className={`rounded-xl p-6 ${premium ? 'border border-white/15 bg-white/5' : 'border border-slate-200 bg-white shadow-sm'}`}
              >
                <h2 id="auf-einen-blick" className={`text-base font-semibold mb-4 ${premium ? 'text-white' : 'text-slate-900'}`}>
                  {ui.atAGlance}
                </h2>
                <dl className="space-y-4">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className={`text-sm ${premium ? 'text-slate-400' : 'text-slate-500'}`}>{fact.label}</dt>
                      <dd className={premium ? 'text-slate-100' : 'text-slate-900'}>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section aria-labelledby="umfang" className="py-16">
          <div className="container max-w-6xl grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <div>
              <h2 id="umfang" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {content.scope.title}
              </h2>
              {content.scope.intro && (
                <p className="text-slate-700 leading-relaxed mb-6 max-w-2xl">
                  <RichText text={content.scope.intro} />
                </p>
              )}
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {content.scope.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-800">
                    <Check className="w-5 h-5 text-red-700 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {content.scope.notIncluded && (
              <aside aria-labelledby="nicht-enthalten" className="rounded-xl bg-slate-50 p-6">
                <h3 id="nicht-enthalten" className="font-semibold text-slate-900 mb-3">
                  {ui.notIncluded}
                </h3>
                <ul className="space-y-3 text-slate-700">
                  {content.scope.notIncluded.map((item) => (
                    <li key={item}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>

        {content.sections && (
          <div className="bg-slate-50">
            {content.sections.map((section) => (
              <section key={section.title} className="py-14 border-b border-slate-200 last:border-b-0">
                <div className="container max-w-6xl">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-slate-700 leading-relaxed mb-4">
                        <RichText text={paragraph} />
                      </p>
                    ))}
                    {section.items && (
                      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 mt-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-slate-800">
                            <Check className="w-5 h-5 text-red-700 mt-0.5 shrink-0" aria-hidden="true" />
                            <span>
                              <RichText text={item} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}

        <section aria-labelledby="ablauf" className={`py-16 ${content.sections ? '' : 'border-t border-slate-200'}`}>
          <div className="container max-w-6xl">
            <h2 id="ablauf" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              {ui.steps}
            </h2>
            <ol className={`grid gap-6 md:grid-cols-2 ${content.steps.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
              {content.steps.map((step, index) => (
                <li key={step.title} className="rounded-xl border border-slate-200 p-6">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    <RichText text={step.text} />
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="fragen" className="py-16 bg-slate-50">
          <div className="container max-w-6xl">
            <h2 id="fragen" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              {ui.faq}
            </h2>
            <div className="max-w-4xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {content.faq.map((item) => (
                <details key={item.question} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">{item.question}</h3>
                    <ChevronDown className="w-5 h-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    <RichText text={item.answer} />
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="verwandt" className="py-16">
          <div className="container max-w-6xl">
            <h2 id="verwandt" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              {ui.related}
            </h2>
            <ul className="grid gap-6 md:grid-cols-3">
              {content.related.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="group block h-full rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-lg">
                    <span className="flex items-center justify-between gap-4 font-semibold text-slate-900">
                      {pages[item.path].label}
                      <ArrowRight className="w-5 h-5 shrink-0 text-red-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                    <span className="mt-2 block text-slate-600">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <OfferCta title={content.cta.title} text={content.cta.text} />
      </main>

      <SwissFooter />
    </div>
  )
}
