import { ArrowRight, Phone } from 'lucide-react'
import { Button } from './ui/button'
import { company } from '../../../shared/company'
import { getDict } from '../../../content'
import type { Locale } from '../../../shared/i18n'

/**
 * Abschluss einer Seite (F3): eine Hauptaktion (Offerte) und das Telefon als
 * zweite Aktion (M31). Das Formular folgt direkt darunter (#kontakt-formular).
 */
export default function OfferCta({ title, text, lang = 'de' }: { title: string; text: string; lang?: Locale }) {
  const { ui } = getDict(lang)
  return (
    <section aria-label={title} className="relative overflow-hidden bg-ink text-white">
      <div className="grid-lines pointer-events-none absolute inset-0 container max-md:hidden" aria-hidden="true" />
      <div className="container relative grid gap-10 py-20 lg:grid-cols-12 lg:items-end lg:py-28">
        <div className="lg:col-span-7">
          <h2 className="t-h2 text-white">{title}</h2>
          <p className="t-lead mt-6 max-w-[48ch] text-white/70">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Button asChild size="xl" className="arrow-link">
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
        </div>
      </div>
    </section>
  )
}
