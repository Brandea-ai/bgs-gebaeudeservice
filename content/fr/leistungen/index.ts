import { unterhaltsreinigung } from './unterhaltsreinigung'
import { bueroreinigung } from './bueroreinigung'
import { sonderreinigungen } from './sonderreinigungen'
import { umzugsreinigung } from './umzugsreinigung'
import { baureinigung } from './baureinigung'
import { fensterUndFassade } from './fenster-und-fassadenreinigung'
import { industrieUndHallen } from './industrie-und-hallenreinigung'
import { hauswartung } from './hauswartung'
import { aussenUndGruen } from './aussen-und-gruenflaechenpflege'
import { facilityServices } from './facility-services'

/**
 * Textes des neuf pages de prestations sous /leistungen en français (M29, M60).
 * Traduction fidèle de content/de/leistungen/. Les descriptions générales
 * d’une prestation (« prestations typiques ») ne sont pas un engagement, l’étendue
 * contractuelle figure dans le devis.
 *
 * Un fichier par prestation dans ce dossier (E85), l’export reste le même.
 */
export const leistungen = {
  unterhaltsreinigung,
  bueroreinigung,
  sonderreinigungen,
  umzugsreinigung,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}
