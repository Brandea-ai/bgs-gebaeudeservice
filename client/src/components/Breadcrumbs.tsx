import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import JsonLd from './JsonLd'
import { trailFor, type PagePath } from '../../../shared/seo'
import { breadcrumbJsonLd } from '../../../shared/structured-data'

/**
 * Sichtbare Brotkrumen mit BreadcrumbList (M20, GLOBAL-033), auf Seiten ab der
 * zweiten Ebene. Aufbau nach dem Breadcrumb-Muster der W3C-ARIA-Praktiken:
 * Liste in einer benannten Navigation, die aktuelle Seite mit aria-current.
 */
export default function Breadcrumbs({ path, tone = 'light' }: { path: PagePath; tone?: 'light' | 'dark' }) {
  const trail = trailFor(path)
  const muted = tone === 'dark' ? 'text-slate-300' : 'text-slate-600'
  const current = tone === 'dark' ? 'text-white' : 'text-slate-900'

  return (
    <>
      <nav aria-label="Brotkrumen" className="mb-6">
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
                    <Link href={crumb.path} className="underline-offset-4 hover:underline">
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
      <JsonLd data={breadcrumbJsonLd(path)} />
    </>
  )
}
