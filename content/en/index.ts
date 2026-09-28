import type { Dictionary } from '../de'
import { answers, premiumLine, premiumTitleBrand, register, steps, ui } from './common'
import { kantone, kantonUi, kantoneUebersicht } from './kantone'
import { leistungen } from './leistungen'
import { nav } from './navigation'
import { premium } from './premium'
import { ratgeber, ratgeberUebersicht } from './ratgeber'
import { datenschutz, impressum } from './recht'
import { about, area, contact, home, premiumOverview, proof, servicesOverview } from './seiten'
import { pages } from './seo'
import { bilder } from './bilder'

/**
 * All English texts in one place (M60), same shape as content/de (type
 * Dictionary). Internal links in running text keep their German address, the
 * rendering inserts the address of the language (shared/i18n.ts).
 */
export const en: Dictionary = {
  pages,
  ui,
  steps,
  answers,
  leistungen,
  premium,
  ratgeber: { overview: ratgeberUebersicht, articles: ratgeber },
  seiten: { proof, home, about, contact, area, servicesOverview, premiumOverview },
  kantone: { seiten: kantone, uebersicht: kantoneUebersicht, ui: kantonUi },
  recht: { impressum, datenschutz },
  nav,
  bilder,
  misc: {
    dateLocale: 'en-GB',
    breadcrumbs: 'Breadcrumb',
    imagePlaceholder: 'Image to follow',
    imagePlaceholderLabel: 'Placeholder, image to follow',
    premiumLine,
    premiumTitleBrand,
    map: {
      label: 'Map',
      notice: 'The map is loaded from Google Maps. This transfers data to Google.',
      load: 'Load map',
      open: 'Open in Google Maps',
      source: 'Map data: © swisstopo',
      areaLabel: 'Service area',
    },
    registerCourt: register,
  },
}
