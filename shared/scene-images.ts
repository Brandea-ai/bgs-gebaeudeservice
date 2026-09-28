import type { ImageKey } from './images'
import type { PagePath } from './seo'

/**
 * Zusätzliche Motive je Seite (E84), damit kein Bild auf einer Seite doppelt
 * erscheint (Audit visuell, Umbau 4). Hero und Detailbild stehen in hero-images.ts.
 */

/** Zweite Zickzack-Zeile: eigenes Motiv aus dem Alltag der Leistung */
export const sceneImage: Partial<Record<PagePath, ImageKey>> = {}

/** Fragen-Bereich: eigenes Motiv, etwa Besichtigung oder Beratung zur Leistung */
export const faqImage: Partial<Record<PagePath, ImageKey>> = {}
