import { imagesArePlaceholders } from '../../../shared/features'
import { getDict } from '../../../content'
import type { Locale } from '../../../shared/i18n'

/**
 * Bildfläche ohne Animation (E19, E59): Bis echte Bilder freigegeben sind, ein
 * ruhiger Platzhalter in derselben Grösse, damit das Layout stehen bleibt.
 * alt beschreibt das echte Bild und gilt erst, wenn es erscheint.
 */
export default function ImageSlot({
  src,
  alt = '',
  className = '',
  lang = 'de',
  tone = 'light',
}: {
  src?: string
  alt?: string
  className?: string
  lang?: Locale
  tone?: 'light' | 'dark'
}) {
  const { misc } = getDict(lang)
  // Ohne freigegebenes Bild (src) bleibt die Fläche ein Platzhalter
  if (imagesArePlaceholders || !src) {
    const dark = tone === 'dark'
    return (
      <div
        role="img"
        aria-label={misc.imagePlaceholderLabel}
        className={`relative flex items-end overflow-hidden ${dark ? 'bg-ink-700' : 'bg-stone-200'} ${className}`}
        style={{
          backgroundImage: `linear-gradient(${dark ? 'rgba(255,255,255,0.05)' : 'rgba(14,17,22,0.06)'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(14,17,22,0.06)'} 1px, transparent 1px)`,
          backgroundSize: '2.5rem 2.5rem',
        }}
      >
        <span className={`t-eyebrow m-5 ${dark ? 'text-white/60' : 'text-mute'}`}>{misc.imagePlaceholder}</span>
      </div>
    )
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`object-cover ${className}`} />
}
