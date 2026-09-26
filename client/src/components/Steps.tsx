import RichText from './RichText'
import type { Step } from '../../../content/types'
import type { Locale } from '../../../shared/i18n'

/** Ablauf als nummerierte Liste */
export default function Steps({ steps, lang = 'de' }: { steps: Step[]; lang?: Locale }) {
  return (
    <ol className={`grid gap-6 md:grid-cols-2 ${steps.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-xl border border-slate-200 bg-white p-6">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-slate-600 leading-relaxed">
            <RichText text={step.text} lang={lang} />
          </p>
        </li>
      ))}
    </ol>
  )
}
