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
 * Testi delle nove pagine dei servizi sotto /leistungen, in italiano (M29, M60).
 * Traduzione fedele di content/de/leistungen/. Le descrizioni generali di un
 * servizio («di norma») non sono un impegno: l’entità vincolante è nell’offerta.
 *
 * Un file per servizio in questa cartella (E85), l’export resta invariato.
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
