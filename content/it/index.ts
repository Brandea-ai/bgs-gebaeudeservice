import type { Dictionary } from '../de'
import { answers, premiumLine, premiumTitleBrand, registerIt, steps, ui } from './common'
import { leistungen } from './leistungen'
import { nav } from './navigation'
import { premium } from './premium'
import { ratgeber, ratgeberUebersicht } from './ratgeber'
import { datenschutz, impressum } from './recht'
import { about, area, contact, home, premiumOverview, proof, servicesOverview } from './seiten'
import { pages } from './seo'

/**
 * Tutti i testi italiani in un unico punto (M60), stessa forma dell’oggetto
 * tedesco (tipo Dictionary). I link interni nel testo mantengono l’indirizzo
 * tedesco; la visualizzazione inserisce l’indirizzo della lingua (shared/i18n.ts).
 */
export const it: Dictionary = {
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
    /** Lingua per le date */
    dateLocale: 'it-CH',
    breadcrumbs: 'Percorso di navigazione',
    imagePlaceholder: 'Immagine in arrivo',
    imagePlaceholderLabel: 'Segnaposto, immagine in arrivo',
    premiumLine,
    premiumTitleBrand,
    map: {
      label: 'Mappa',
      notice: 'La mappa viene caricata da Google Maps. In tal caso vengono trasmessi dati a Google.',
      load: 'Carica la mappa',
      open: 'Apri in Google Maps',
    },
    // Il tipo tedesco è un valore letterale (company è «as const»)
    registerCourt: registerIt as Dictionary['misc']['registerCourt'],
  },
}
