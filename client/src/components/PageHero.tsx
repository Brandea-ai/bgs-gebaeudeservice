import type { ReactNode } from 'react'
import Breadcrumbs from './Breadcrumbs'
import type { Locale } from '../../../shared/i18n'
import type { PagePath } from '../../../shared/seo'

/**
 * Kopf der Übersichts- und Inhaltsseiten (F5): Brotkrumen, Kennzeile, Titel und
 * Einleitung links, rechts Platz für eine Übersicht oder Eckdaten.
 */
export default function PageHero({
  path,
  lang,
  eyebrow,
  title,
  lead,
  tone = 'light',
  aside,
  children,
}: {
  path: PagePath
  lang: Locale
  eyebrow?: string
  title: string
  lead?: ReactNode
  tone?: 'light' | 'dark'
  aside?: ReactNode
  children?: ReactNode
}) {
  const dark = tone === 'dark'
  return (
    <section className={dark ? 'relative overflow-hidden bg-ink text-white' : 'border-b border-line bg-stone'}>
      {dark && <div className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden" aria-hidden="true" />}
      <div className="container relative grid gap-12 pt-10 pb-16 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="min-w-0 lg:col-span-7">
          {path !== '/' && <Breadcrumbs path={path} tone={dark ? 'dark' : 'light'} lang={lang} />}
          {eyebrow && (
            <p className={`t-eyebrow mb-6 flex items-center gap-3 ${dark ? 'text-brass' : 'text-signal'}`}>
              <span className={`inline-block h-px w-8 ${dark ? 'bg-brass' : 'bg-signal'}`} aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className={`t-h1 max-w-[20ch] hyphens-auto break-words ${dark ? 'text-white' : 'text-ink'}`}>{title}</h1>
          {lead && <p className={`t-lead mt-8 max-w-[52ch] ${dark ? 'text-white/75' : 'text-mute'}`}>{lead}</p>}
          {children}
        </div>
        {aside && <div className="min-w-0 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9 lg:self-end">{aside}</div>}
      </div>
    </section>
  )
}
