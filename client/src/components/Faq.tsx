import { Plus } from 'lucide-react'
import RichText from './RichText'
import type { Locale } from '../../../shared/i18n'

/** Häufige Fragen als details im HTML, Antworten ohne JavaScript lesbar (M22) */
export default function Faq({ items, lang = 'de' }: { items: { question: string; answer: string }[]; lang?: Locale }) {
  return (
    <div className="border-t border-ink">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[1.1875rem] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-signal">
              {item.question}
            </h3>
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-open:border-ink group-open:bg-ink group-open:text-white">
              <Plus className="h-4 w-4 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
            </span>
          </summary>
          <p className="max-w-[68ch] pb-7 pr-12 leading-relaxed text-mute">
            <RichText text={item.answer} lang={lang} />
          </p>
        </details>
      ))}
    </div>
  )
}
