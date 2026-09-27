'use client'

import { useEffect, useState } from 'react'

/**
 * Inhaltsverzeichnis einer Seite (F4): klebt in der linken Spalte und markiert
 * den Abschnitt, der gerade gelesen wird. Ohne JavaScript bleiben es normale
 * Sprunglinks.
 */
export default function TocNav({ label, items, tone = 'light' }: { label: string; items: { id: string; title: string }[]; tone?: 'light' | 'dark' }) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const targets = items.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => Boolean(el))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [items])

  const dark = tone === 'dark'
  return (
    <nav aria-label={label}>
      <p className={`t-eyebrow mb-4 ${dark ? 'text-white/50' : 'text-mute'}`}>{label}</p>
      <ol className={`border-l ${dark ? 'border-white/15' : 'border-line'}`}>
        {items.map((item) => {
          const isActive = active === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-2 pl-4 text-[0.9375rem] leading-snug transition-colors ${
                  isActive
                    ? `font-medium ${dark ? 'border-brass text-white' : 'border-signal text-ink'}`
                    : `border-transparent ${dark ? 'text-white/65 hover:text-white' : 'text-mute hover:text-ink'}`
                }`}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
