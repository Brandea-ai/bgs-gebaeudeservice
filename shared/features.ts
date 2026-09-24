/**
 * Schalter für Funktionen, die erst nach einer Freigabe aktiv werden.
 *
 * Chat und KI-Berater bleiben, werden aber erst repariert (E14, M03):
 * Modell und Zugang legt Brandea fest. Bis NEXT_PUBLIC_CHAT_ENABLED=true
 * gesetzt ist, erscheint das Chatfenster nicht, und "Termin vereinbaren"
 * führt zum Kontaktformular.
 */
export const chatEnabled = process.env.NEXT_PUBLIC_CHAT_ENABLED === 'true'
