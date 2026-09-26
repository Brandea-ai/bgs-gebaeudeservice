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
}: {
  lang: Locale
  path: PagePath
  label: string
  className?: string
  tone?: 'light' | 'dark'
}) {
  if (activeLocales.length < 2) return null
  const idle = tone === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-primary'
  const current = tone === 'dark' ? 'text-white' : 'text-slate-900'
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
              className={`inline-block px-2 py-1.5 text-sm font-semibold uppercase transition-smooth ${locale === lang ? current : idle}`}
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
