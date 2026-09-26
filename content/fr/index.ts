import type { Dictionary } from '../de'
import { answers, premiumLine, premiumTitleBrand, register, steps, ui } from './common'
import { leistungen } from './leistungen'
import { nav } from './navigation'
import { premium } from './premium'
import { ratgeber, ratgeberUebersicht } from './ratgeber'
import { datenschutz, impressum } from './recht'
import { about, area, contact, home, premiumOverview, proof, servicesOverview } from './seiten'
import { pages } from './seo'

/**
 * Tous les textes français (M60), même forme que l’objet allemand (type
 * Dictionary). Les liens internes restent avec l’adresse allemande, l’affichage
 * insère l’adresse de la langue (shared/i18n.ts). Projet soumis à la relecture de Brandea (E50).
 */
export const fr: Dictionary = {
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
    dateLocale: 'fr-CH',
    breadcrumbs: 'Fil d’Ariane',
    imagePlaceholder: 'Image à venir',
    imagePlaceholderLabel: 'Espace réservé, image à venir',
    premiumLine,
    premiumTitleBrand,
    map: {
      label: 'Carte',
      notice: 'La carte est chargée depuis Google Maps. Des données sont alors transmises à Google.',
      load: 'Charger la carte',
      open: 'Ouvrir dans Google Maps',
    },
    // Le type allemand reprend la valeur littérale de company.register, le texte français la remplace
    registerCourt: register as Dictionary['misc']['registerCourt'],
  },
}
