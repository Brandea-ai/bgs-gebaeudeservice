import { activeLocales, hreflang, languageNames, localizePath, type Locale } from '../../../shared/i18n'
import type { PagePath } from '../../../shared/seo'

/**
 * Sprachumschalter (M60): führt zur selben Seite in der anderen Sprache, keine
 * automatische Umleitung (14, Abschnitt 5). Normale Links, weil jede Sprache ein
 * eigenes Grundlayout hat. Erscheint erst, wenn weitere Sprachen aktiv sind.
 */
export default function LanguageSwitcher({
  lang,
  path,
  label,
  className = '',
  tone = 'light',
  compact = false,
}: {
  lang: Locale
  path: PagePath
  label: string
  className?: string
  tone?: 'light' | 'dark'
  compact?: boolean
}) {
  if (activeLocales.length < 2) return null
  const idle = tone === 'dark' ? 'text-white/55 hover:text-white' : 'text-mute hover:text-signal'
  const current = tone === 'dark' ? 'text-white' : 'text-ink'
  const size = compact ? 'px-1.5 py-1 text-xs' : 'px-2 py-1.5 text-sm'
  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-1">
        {activeLocales.map((locale) => (
          <li key={locale}>
            <a
              href={localizePath(path, locale)}
              hrefLang={hreflang[locale]}
              lang={hreflang[locale]}
              aria-current={locale === lang ? 'true' : undefined}
              title={languageNames[locale]}
              className={`inline-block font-mono font-medium uppercase tracking-wider transition-colors ${size} ${locale === lang ? `${current} underline decoration-signal decoration-2 underline-offset-[0.4em]` : idle}`}
            >
              <span aria-hidden="true">{locale}</span>
              <span className="sr-only">{languageNames[locale]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
