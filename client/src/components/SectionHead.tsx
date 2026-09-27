import type { ReactNode } from 'react'

/**
 * Kopf eines Abschnitts (F1): Kennzeile, Titel und Einleitung in festen
 * Schriftstufen. tone passt die Farben an dunkle Flächen an.
 */
export default function SectionHead({
  id,
  eyebrow,
  title,
  intro,
  tone = 'light',
  as: Tag = 'h2',
  className = '',
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  intro?: ReactNode
  tone?: 'light' | 'dark'
  as?: 'h1' | 'h2'
  className?: string
  children?: ReactNode
}) {
  const dark = tone === 'dark'
  return (
    <div className={className}>
      {eyebrow && (
        <p className={`t-eyebrow mb-5 flex items-center gap-3 ${dark ? 'text-brass' : 'text-signal'}`}>
          <span className={`inline-block h-px w-8 ${dark ? 'bg-brass' : 'bg-signal'}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag id={id} className={`${Tag === 'h1' ? 't-h1' : 't-h2'} ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </Tag>
      {intro && <p className={`t-lead mt-6 max-w-[46ch] ${dark ? 'text-white/70' : 'text-mute'}`}>{intro}</p>}
      {children}
    </div>
  )
}
