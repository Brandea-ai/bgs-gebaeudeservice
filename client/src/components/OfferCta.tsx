import { Phone } from 'lucide-react'
import { Button } from './ui/button'
import { company } from '../../../shared/company'
import { getDict } from '../../../content'
import type { Locale } from '../../../shared/i18n'

/**
 * Abschluss einer Seite: eine Hauptaktion (Offerte) und das Telefon als
 * zweite Aktion (M31). Das Formular steht im Footer (#kontakt-formular).
 */
export default function OfferCta({ title, text, lang = 'de' }: { title: string; text: string; lang?: Locale }) {
  const { ui } = getDict(lang)
  return (
    <section className="pb-20">
      <div className="container max-w-6xl">
        <div className="rounded-2xl bg-slate-900 p-8 md:p-12 text-white lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
            <p className="text-slate-300 leading-relaxed">{text}</p>
          </div>
          <div className="mt-8 lg:mt-0 flex flex-wrap gap-3 shrink-0">
            <Button asChild size="lg" className="text-sm sm:text-base px-6">
              <a href="#kontakt-formular">{ui.offerCta}</a>
            </Button>
            <a
              href={company.phone.href}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-white/30 px-6 text-sm sm:text-base font-medium text-white hover:bg-white/10"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {company.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
