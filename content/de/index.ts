import { company, premiumLine, premiumTitleBrand } from '../../shared/company'
import { answers, steps, ui } from './common'
import { leistungen } from './leistungen'
import { nav } from './navigation'
import { premium } from './premium'
import { ratgeber, ratgeberUebersicht } from './ratgeber'
import { datenschutz, impressum } from './recht'
import { about, area, contact, home, premiumOverview, proof, servicesOverview } from './seiten'
import { pages } from './seo'

/**
 * Alle deutschen Texte an einer Stelle (M60). Jede Sprache liefert ein Objekt
 * derselben Form (Typ Dictionary), TypeScript meldet fehlende Einträge.
 * Interne Links im Fliesstext bleiben mit deutscher Adresse, die Darstellung
 * setzt die Adresse der Sprache ein (shared/i18n.ts).
 */
export const de = {
  pages,
  ui,
  steps,
  answers,
  leistungen,
  premium,
  ratgeber: { overview: ratgeberUebersicht, articles: ratgeber },
  seiten: { proof, home, about, contact, area, servicesOverview, premiumOverview },
  recht: { impressum, datenschutz },
  nav,
  misc: {
    /** Sprache für Datumsangaben */
    dateLocale: 'de-CH',
    breadcrumbs: 'Brotkrumen',
    imagePlaceholder: 'Bild folgt',
    imagePlaceholderLabel: 'Platzhalter, Bild folgt',
    premiumLine,
    premiumTitleBrand,
    map: {
      label: 'Karte',
      notice: 'Die Karte wird von Google Maps geladen. Dabei werden Daten an Google übertragen.',
      load: 'Karte laden',
      open: 'In Google Maps öffnen',
    },
    registerCourt: company.register,
  },
}

export type Dictionary = typeof de
