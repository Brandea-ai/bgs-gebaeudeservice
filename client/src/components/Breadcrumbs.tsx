import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import JsonLd from './JsonLd'
import { trailFor, type PagePath } from '../../../shared/seo'
import { localizePath, type Locale } from '../../../shared/i18n'
import { getDict } from '../../../content'
import { breadcrumbJsonLd } from '../../../shared/structured-data'

/**
 * Sichtbare Brotkrumen mit BreadcrumbList (M20, GLOBAL-033), auf Seiten ab der
 * zweiten Ebene. Aufbau nach dem Breadcrumb-Muster der W3C-ARIA-Praktiken:
 * Liste in einer benannten Navigation, die aktuelle Seite mit aria-current.
 */
export default function Breadcrumbs({ path, tone = 'light', lang = 'de' }: { path: PagePath; tone?: 'light' | 'dark'; lang?: Locale }) {
  const trail = trailFor(path, lang)
  const muted = tone === 'dark' ? 'text-slate-300' : 'text-slate-600'
  const current = tone === 'dark' ? 'text-white' : 'text-slate-900'

  return (
    <>
      <nav aria-label={getDict(lang).misc.breadcrumbs} className="mb-6">
        <ol className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm ${muted}`}>
          {trail.map((crumb, index) => {
            const isCurrent = index === trail.length - 1
            return (
              <li key={crumb.path} className="inline-flex items-center gap-1.5">
                {isCurrent ? (
                  <span aria-current="page" className={`font-medium ${current}`}>
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link href={localizePath(crumb.path, lang)} className="underline-offset-4 hover:underline">
                      {crumb.label}
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(path, lang)} />
    </>
  )
}
