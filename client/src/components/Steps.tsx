import RichText from './RichText'
import type { Step } from '../../../content/types'
import type { Locale } from '../../../shared/i18n'

/**
 * Ablauf als nummerierte Folge (F3): Die Reihenfolge ist Teil der Aussage,
 * deshalb Nummern und eine durchgehende Linie wie auf einem Zeitstrahl.
 */
export default function Steps({
  steps,
  lang = 'de',
  tone = 'light',
  narrow = false,
}: {
  steps: Step[]
  lang?: Locale
  tone?: 'light' | 'dark'
  /** In einer schmalen Spalte höchstens zwei nebeneinander */
  narrow?: boolean
}) {
  const dark = tone === 'dark'
  const cols = narrow ? '' : steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
  return (
    <ol className={`grid gap-x-10 gap-y-12 md:grid-cols-2 ${cols}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="reveal relative">
          <div className={`flex items-center gap-4 border-t pt-6 ${dark ? 'border-white/20' : 'border-ink'}`}>
            <span className={`font-mono text-sm font-medium tabular-nums ${dark ? 'text-brass' : 'text-signal'}`} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className={`t-h3 mt-5 ${dark ? 'text-white' : 'text-ink'}`}>{step.title}</h3>
          <p className={`mt-3 leading-relaxed ${dark ? 'text-white/70' : 'text-mute'}`}>
            <RichText text={step.text} lang={lang} linkClassName={dark ? 'font-medium text-white underline underline-offset-4' : undefined} />
          </p>
        </li>
      ))}
    </ol>
  )
}
