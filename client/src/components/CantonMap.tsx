import { cantonShapes, mapViewBox, seatPoint } from '../../../shared/canton-map'
import { cantonInfo, cantonName } from '../../../shared/cantons'
import { company } from '../../../shared/company'
import { getDict } from '../../../content'
import { navDicts } from '../../../content/navigation'
import type { Locale } from '../../../shared/i18n'

/**
 * Karte des Einzugsgebiets (F3, E30): Zentralschweiz und Aargau aus den
 * Kantonsgrenzen von swisstopo, die fünf Kantone rot, der Sitz als Punkt.
 * Reines SVG im HTML, ohne Kartendienst und ohne Daten an Dritte.
 */
export default function CantonMap({ lang = 'de', tone = 'light', className = '' }: { lang?: Locale; tone?: 'light' | 'dark'; className?: string }) {
  const served = new Map(company.cantons.map((name) => [cantonInfo[name]?.bfs, name]))
  const { map } = getDict(lang).misc
  const dark = tone === 'dark'
  const names = company.cantons.map((name) => cantonName(name, lang)).join(', ')
  return (
    <figure className={className}>
      <svg viewBox={mapViewBox} role="img" aria-label={`${map.areaLabel}: ${names}`} className="h-auto w-full">
        <g strokeLinejoin="round">
          {cantonShapes.map((shape) => {
            const active = served.has(shape.id)
            return (
              <path
                key={shape.id}
                d={shape.d}
                fillRule="evenodd"
                className={
                  active
                    ? dark
                      ? 'fill-signal stroke-ink'
                      : 'fill-signal stroke-white'
                    : dark
                      ? 'fill-ink-700 stroke-ink'
                      : 'fill-stone-200 stroke-white'
                }
                strokeWidth={active ? 2.5 : 2}
              />
            )
          })}
        </g>
        <g className="font-mono" fontSize="17" letterSpacing="1.5">
          {cantonShapes
            .filter((shape) => served.has(shape.id))
            .map((shape) => (
              <text key={shape.id} x={shape.label[0]} y={shape.label[1]} textAnchor="middle" className="fill-white" fontWeight="500">
                {cantonInfo[served.get(shape.id) as string].code}
              </text>
            ))}
        </g>
        <g>
          <circle cx={seatPoint.x} cy={seatPoint.y} r="22" className={dark ? 'fill-white/15' : 'fill-ink/10'} />
          <circle cx={seatPoint.x} cy={seatPoint.y} r="8" className={dark ? 'fill-white stroke-ink' : 'fill-ink stroke-white'} strokeWidth="3" />
          <text
            x={seatPoint.x + 30}
            y={seatPoint.y + 6}
            className={dark ? 'fill-white stroke-ink' : 'fill-ink stroke-white'}
            fontSize="20"
            fontWeight="600"
            strokeWidth="5"
            paintOrder="stroke"
            strokeLinejoin="round"
          >
            {company.address.city}
          </text>
        </g>
      </svg>
      <figcaption className={`mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-xs ${dark ? 'text-white/55' : 'text-mute'}`}>
        <span className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 bg-signal" aria-hidden="true" />
          {map.areaLabel}
          <span className="mx-1" aria-hidden="true">·</span>
          <span className={`inline-block h-2.5 w-2.5 rounded-full ${dark ? 'bg-white' : 'bg-ink'}`} aria-hidden="true" />
          {navDicts[lang].chrome.seat}
        </span>
        <span>{map.source}</span>
      </figcaption>
    </figure>
  )
}
