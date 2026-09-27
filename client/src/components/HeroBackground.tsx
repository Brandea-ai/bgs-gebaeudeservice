import { imagesArePlaceholders } from "../../../shared/features";

/**
 * Hintergrund dunkler Kopfbereiche ohne Animationsbibliothek (M25, F14). Bis
 * zur Freigabe echter Bilder (E19, E59) Graphit mit Haarlinien-Raster, danach
 * das Foto unter einer Überlagerung, die weisse Schrift lesbar hält. Die
 * Bildebene trägt .hero-media: sie driftet beim Wegscrollen um 6 % langsamer
 * als die Seite (globals.css, nur ab lg, mit Unterstützung und ohne reduced
 * motion) und ist dafür 12 % höher, damit keine Kante freiliegt.
 */
export default function HeroBackground({ src }: { src?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden="true">
      {!imagesArePlaceholders && src && (
        <>
          <div
            className="hero-media absolute inset-x-0 top-0 h-[112%] bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_85%_10%,rgba(57,64,74,0.55),transparent_70%)]" />
      <div className="container grid-lines absolute inset-0 max-md:hidden" />
    </div>
  );
}
