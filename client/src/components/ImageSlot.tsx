import { imagesArePlaceholders } from '../../../shared/features'
import { getDict } from '../../../content'
import type { Locale } from '../../../shared/i18n'

/**
 * Bildfläche ohne Animation (E19, E59): Bis echte Bilder freigegeben sind, ein
 * neutraler Platzhalter in derselben Grösse, damit das Layout stehen bleibt.
 * alt beschreibt das echte Bild und gilt erst, wenn es erscheint.
 */
export default function ImageSlot({
  src,
  alt = '',
  className = '',
  lang = 'de',
}: {
  src?: string
  alt?: string
  className?: string
  lang?: Locale
}) {
  const { misc } = getDict(lang)
  // Ohne freigegebenes Bild (src) bleibt die Fläche ein Platzhalter
  if (imagesArePlaceholders || !src) {
    return (
      <div
        role="img"
        aria-label={misc.imagePlaceholderLabel}
        className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 ${className}`}
      >
        <span className="text-sm text-white/90">{misc.imagePlaceholder}</span>
      </div>
    )
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`rounded-2xl object-cover ${className}`} />
}
