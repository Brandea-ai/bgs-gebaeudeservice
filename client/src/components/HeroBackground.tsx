import { imagesArePlaceholders } from '../../../shared/features'

/**
 * Hintergrund der Startseite ohne Animationsbibliothek (M25). Bis zur Freigabe
 * echter Bilder ein dunkler Verlauf (E19, E59), die Überlagerung hält die weisse
 * Schrift lesbar.
 */
export default function HeroBackground({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {imagesArePlaceholders ? (
        <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
      ) : (
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
    </div>
  )
}
