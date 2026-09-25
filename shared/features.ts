/**
 * Schalter für Funktionen, die erst nach einer Freigabe aktiv werden.
 *
 * Chat und KI-Berater bleiben, werden aber erst repariert (E14, M03):
 * Modell und Zugang legt Brandea fest. Bis NEXT_PUBLIC_CHAT_ENABLED=true
 * gesetzt ist, erscheint das Chatfenster nicht, und "Termin vereinbaren"
 * führt zum Kontaktformular.
 */
export const chatEnabled = process.env.NEXT_PUBLIC_CHAT_ENABLED === 'true'

/**
 * Bilder als Platzhalter (R6g, E19): Die bisherigen Bilder sind überwiegend
 * KI-generiert und stellen teils Team, Einsätze oder Vorher/Nachher dar.
 * Bis die neuen Bilder freigegeben sind, zeigen alle Bildflächen einen
 * neutralen Platzhalter. Mit NEXT_PUBLIC_REAL_IMAGES=true wieder Bilder.
 */
export const imagesArePlaceholders = process.env.NEXT_PUBLIC_REAL_IMAGES !== 'true'
