/**
 * Bildregister (E80), erzeugt von Webseite-Analyse/werkzeuge/bilder_register.py.
 * Symbolbilder nach E19: keine Gesichter, keine Schrift, kein «Team». Echte Fotos
 * ersetzen die Dateien in public/bilder unter demselben Namen. Alt-Texte je
 * Sprache stehen in content/<sprache>/bilder.ts.
 */
export const images = {
  'detail-aussen-gruenflaechen': { src: '/bilder/detail-aussen-gruenflaechen.jpg', width: 1536, height: 1024 },
  'detail-baureinigung': { src: '/bilder/detail-baureinigung.jpg', width: 1536, height: 1024 },
  'detail-bueroreinigung': { src: '/bilder/detail-bueroreinigung.jpg', width: 1536, height: 1024 },
  'detail-facility-services': { src: '/bilder/detail-facility-services.jpg', width: 1536, height: 1024 },
  'detail-fenster-fassaden': { src: '/bilder/detail-fenster-fassaden.jpg', width: 1536, height: 1024 },
  'detail-grundreinigung': { src: '/bilder/detail-grundreinigung.jpg', width: 1536, height: 1024 },
  'detail-hauswartung': { src: '/bilder/detail-hauswartung.jpg', width: 1536, height: 1024 },
  'detail-industrie-hallen': { src: '/bilder/detail-industrie-hallen.jpg', width: 1536, height: 1024 },
  'detail-premium-luxusimmobilien': { src: '/bilder/detail-premium-luxusimmobilien.jpg', width: 1536, height: 1024 },
  'detail-premium-privatjet': { src: '/bilder/detail-premium-privatjet.jpg', width: 1536, height: 1024 },
  'detail-premium-yacht': { src: '/bilder/detail-premium-yacht.jpg', width: 1536, height: 1024 },
  'detail-sonderreinigungen': { src: '/bilder/detail-sonderreinigungen.jpg', width: 1536, height: 1024 },
  'detail-unterhaltsreinigung': { src: '/bilder/detail-unterhaltsreinigung.jpg', width: 1536, height: 1024 },
  'hero-artikel-kosten': { src: '/bilder/hero-artikel-kosten.jpg', width: 2400, height: 1350 },
  'hero-artikel-reinigungsfirma': { src: '/bilder/hero-artikel-reinigungsfirma.jpg', width: 2400, height: 1350 },
  'hero-aussen-gruenflaechen': { src: '/bilder/hero-aussen-gruenflaechen.jpg', width: 2400, height: 1350 },
  'hero-baureinigung': { src: '/bilder/hero-baureinigung.jpg', width: 2400, height: 1350 },
  'hero-bueroreinigung': { src: '/bilder/hero-bueroreinigung.jpg', width: 2400, height: 1350 },
  'hero-einzugsgebiet': { src: '/bilder/hero-einzugsgebiet.jpg', width: 2400, height: 1350 },
  'hero-facility-services': { src: '/bilder/hero-facility-services.jpg', width: 2400, height: 1350 },
  'hero-fenster-fassaden': { src: '/bilder/hero-fenster-fassaden.jpg', width: 2400, height: 1350 },
  'hero-grundreinigung': { src: '/bilder/hero-grundreinigung.jpg', width: 2400, height: 1350 },
  'hero-hauswartung': { src: '/bilder/hero-hauswartung.jpg', width: 2400, height: 1350 },
  'hero-industrie-hallen': { src: '/bilder/hero-industrie-hallen.jpg', width: 2400, height: 1350 },
  'hero-kanton-aargau': { src: '/bilder/hero-kanton-aargau.jpg', width: 2400, height: 1350 },
  'hero-kanton-luzern': { src: '/bilder/hero-kanton-luzern.jpg', width: 2400, height: 1350 },
  'hero-kanton-nidwalden': { src: '/bilder/hero-kanton-nidwalden.jpg', width: 2400, height: 1350 },
  'hero-kanton-obwalden': { src: '/bilder/hero-kanton-obwalden.jpg', width: 2400, height: 1350 },
  'hero-kanton-zug': { src: '/bilder/hero-kanton-zug.jpg', width: 2400, height: 1350 },
  'hero-kontakt': { src: '/bilder/hero-kontakt.jpg', width: 2400, height: 1350 },
  'hero-leistungen': { src: '/bilder/hero-leistungen.jpg', width: 2400, height: 1350 },
  'hero-premium-luxusimmobilien': { src: '/bilder/hero-premium-luxusimmobilien.jpg', width: 2400, height: 1350 },
  'hero-premium-privatjet': { src: '/bilder/hero-premium-privatjet.jpg', width: 2400, height: 1350 },
  'hero-premium-yacht': { src: '/bilder/hero-premium-yacht.jpg', width: 2400, height: 1350 },
  'hero-premium': { src: '/bilder/hero-premium.jpg', width: 2400, height: 1350 },
  'hero-ratgeber': { src: '/bilder/hero-ratgeber.jpg', width: 2400, height: 1350 },
  'hero-recht': { src: '/bilder/hero-recht.jpg', width: 2400, height: 1350 },
  'hero-sonderreinigungen': { src: '/bilder/hero-sonderreinigungen.jpg', width: 2400, height: 1350 },
  'hero-start': { src: '/bilder/hero-start.jpg', width: 2400, height: 1350 },
  'hero-ueber-uns': { src: '/bilder/hero-ueber-uns.jpg', width: 2400, height: 1350 },
  'hero-unterhaltsreinigung': { src: '/bilder/hero-unterhaltsreinigung.jpg', width: 2400, height: 1350 },
} as const

export type ImageKey = keyof typeof images
