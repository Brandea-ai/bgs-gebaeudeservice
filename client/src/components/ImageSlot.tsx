import { imagesArePlaceholders } from '../../../shared/features'

/**
 * Bildfläche ohne Animation (E19, E59): Bis echte Bilder freigegeben sind, ein
 * neutraler Platzhalter in derselben Grösse, damit das Layout stehen bleibt.
 * alt beschreibt das echte Bild und gilt erst, wenn es erscheint.
 */
export default function ImageSlot({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  if (imagesArePlaceholders) {
    return (
      <div
        role="img"
        aria-label="Platzhalter, Bild folgt"
        className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 ${className}`}
      >
        <span className="text-sm text-white/90">Bild folgt</span>
      </div>
    )
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`rounded-2xl object-cover ${className}`} />
}
