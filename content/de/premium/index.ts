import { luxusimmobilien } from './luxusimmobilien'
import { privatjet } from './privatjet'
import { yacht } from './yacht'

/**
 * Texte der drei Premium-Seiten unter /premium (M29, M57). Grundlage sind die
 * Angebote und Zusagen der Premium-Linie aus Runde 3 (E40, E41), wie sie auf
 * /premium stehen. Die drei zurückgestellten Zusagen bleiben weg (E52): keine
 * Deckung für Kunst und Wertgegenstände, kein Zutritt zu einem Flugfeld, keine
 * Prüfmethode für das Personal. Keine Referenzen, Zahlen oder Preise (E18).
 *
 * Je Leistung eine Datei im selben Ordner (E85, 26-UMBAU-SPEZ Abschnitt 2), der Export bleibt gleich.
 */
export const premium = {
  luxusimmobilien,
  privatjet,
  yacht,
}
