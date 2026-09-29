import type { ImageKey } from './images'
import type { PagePath } from './seo'

/**
 * Zusätzliche Motive je Seite (E84), damit kein Bild auf einer Seite doppelt
 * erscheint (Audit visuell, Umbau 4). Hero und Detailbild stehen in hero-images.ts.
 */

/** Zweite Zickzack-Zeile: eigenes Motiv aus dem Alltag der Leistung */
export const sceneImage: Partial<Record<PagePath, ImageKey>> = {
  '/leistungen/unterhaltsreinigung': 'szene-unterhaltsreinigung',
  '/leistungen/bueroreinigung': 'szene-bueroreinigung',
  '/leistungen/sonderreinigungen': 'szene-sonderreinigungen',
  '/leistungen/umzugsreinigung': 'szene-umzugsreinigung',
  '/leistungen/baureinigung': 'szene-baureinigung',
  '/leistungen/fenster-und-fassadenreinigung': 'szene-fenster-und-fassadenreinigung',
  '/leistungen/industrie-und-hallenreinigung': 'detail-industrie-hallen',
  '/leistungen/hauswartung': 'szene-hauswartung',
  '/leistungen/aussen-und-gruenflaechenpflege': 'szene-aussen-und-gruenflaechenpflege',
  '/leistungen/facility-services': 'szene-facility-services',
  '/premium/luxusimmobilien': 'szene-luxusimmobilien',
  '/premium/privatjet': 'szene-privatjet',
  '/premium/yacht': 'szene-yacht',
}

/** Fragen-Bereich: eigenes Motiv, etwa Besichtigung oder Beratung zur Leistung */
export const faqImage: Partial<Record<PagePath, ImageKey>> = {
  '/leistungen/unterhaltsreinigung': 'frage-unterhaltsreinigung',
  '/leistungen/bueroreinigung': 'frage-bueroreinigung',
  '/leistungen/sonderreinigungen': 'frage-sonderreinigungen',
  '/leistungen/umzugsreinigung': 'frage-umzugsreinigung',
  '/leistungen/baureinigung': 'frage-baureinigung',
  '/leistungen/fenster-und-fassadenreinigung': 'frage-fenster-und-fassadenreinigung',
  '/leistungen/industrie-und-hallenreinigung': 'frage-industrie-und-hallenreinigung',
  '/leistungen/hauswartung': 'frage-hauswartung',
  '/leistungen/aussen-und-gruenflaechenpflege': 'frage-aussen-und-gruenflaechenpflege',
  '/leistungen/facility-services': 'frage-facility-services',
  '/premium/luxusimmobilien': 'frage-luxusimmobilien',
  '/premium/privatjet': 'frage-privatjet',
  '/premium/yacht': 'frage-yacht',
}
