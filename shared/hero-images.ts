import type { ImageKey } from './images'
import type { PagePath } from './seo'

/** Hintergrundbild des Kopfbereichs je Seite (E80), Schlüssel ist die deutsche Adresse */
export const heroImage: Record<PagePath, ImageKey> = {
  '/': 'hero-start',
  '/leistungen': 'hero-leistungen',
  '/leistungen/unterhaltsreinigung': 'hero-unterhaltsreinigung',
  '/leistungen/bueroreinigung': 'hero-bueroreinigung',
  '/leistungen/sonderreinigungen': 'hero-sonderreinigungen',
  '/leistungen/baureinigung': 'hero-baureinigung',
  '/leistungen/fenster-und-fassadenreinigung': 'hero-fenster-fassaden',
  '/leistungen/industrie-und-hallenreinigung': 'hero-industrie-hallen',
  '/leistungen/hauswartung': 'hero-hauswartung',
  '/leistungen/aussen-und-gruenflaechenpflege': 'hero-aussen-gruenflaechen',
  '/leistungen/facility-services': 'hero-facility-services',
  '/premium': 'hero-premium',
  '/premium/luxusimmobilien': 'hero-premium-luxusimmobilien',
  '/premium/privatjet': 'hero-premium-privatjet',
  '/premium/yacht': 'hero-premium-yacht',
  '/einzugsgebiet': 'hero-einzugsgebiet',
  '/einzugsgebiet/luzern': 'hero-kanton-luzern',
  '/einzugsgebiet/zug': 'hero-kanton-zug',
  '/einzugsgebiet/aargau': 'hero-kanton-aargau',
  '/einzugsgebiet/nidwalden': 'hero-kanton-nidwalden',
  '/einzugsgebiet/obwalden': 'hero-kanton-obwalden',
  '/blog': 'hero-ratgeber',
  '/blog/richtige-reinigungsfirma-finden': 'hero-artikel-reinigungsfirma',
  '/blog/reinigungskosten-schweiz': 'hero-artikel-kosten',
  '/ueber-uns': 'hero-ueber-uns',
  '/kontakt': 'hero-kontakt',
  '/impressum': 'hero-recht',
  '/datenschutz': 'hero-recht',
}

/** Zweites Bild einer Leistungs- oder Premiumseite für den Zickzack */
export const detailImage: Partial<Record<PagePath, ImageKey>> = {
  '/leistungen/unterhaltsreinigung': 'detail-unterhaltsreinigung',
  '/leistungen/bueroreinigung': 'detail-bueroreinigung',
  '/leistungen/sonderreinigungen': 'detail-sonderreinigungen',
  '/leistungen/baureinigung': 'detail-baureinigung',
  '/leistungen/fenster-und-fassadenreinigung': 'detail-fenster-fassaden',
  '/leistungen/industrie-und-hallenreinigung': 'detail-industrie-hallen',
  '/leistungen/hauswartung': 'detail-hauswartung',
  '/leistungen/aussen-und-gruenflaechenpflege': 'detail-aussen-gruenflaechen',
  '/leistungen/facility-services': 'detail-facility-services',
  '/premium/luxusimmobilien': 'detail-premium-luxusimmobilien',
  '/premium/privatjet': 'detail-premium-privatjet',
  '/premium/yacht': 'detail-premium-yacht',
}
