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
 * English texts of the service pages under /leistungen (M29, M60).
 * Faithful translation of content/de/leistungen/. General descriptions of a
 * service («typically») are not a commitment, the binding scope is in the quote.
 *
 * One file per service in this folder (E85), the export stays the same.
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
