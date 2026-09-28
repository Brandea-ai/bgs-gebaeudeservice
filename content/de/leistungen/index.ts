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
 * Texte der neun Leistungsseiten unter /leistungen (M29, Zielbild v2 in
 * Webseite-Analyse/03, Abschnitt 2a). Entwürfe des Agenten nach E23, fachlich
 * vom Kunden gegenzulesen. Grundlage je Seite steht im Kommentar darüber.
 * Allgemeine Beschreibungen einer Leistung («typisch sind») sind keine Zusage,
 * der verbindliche Umfang steht in der Offerte.
 *
 * Je Leistung eine Datei im selben Ordner (E85, 26-UMBAU-SPEZ Abschnitt 2), der Export bleibt gleich.
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
