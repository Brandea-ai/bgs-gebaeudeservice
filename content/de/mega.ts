/**
 * Zusatztexte im Mega-Menü «Leistungen»: Bildkarte unter «Hauswartung und
 * Pflege». Eigene Datei, weil das Menü im Browser läuft und nur kleine
 * Wörterbücher laden soll (M25). Nur belegte Aussagen (E18): Abnahmegarantie
 * und Zielgruppe stehen so auf der Leistungsseite.
 */
export const mega = {
  feature: {
    path: '/leistungen/umzugsreinigung' as const,
    eyebrow: 'Für Verwaltungen und Eigentümer',
    title: 'Umzugsreinigung mit Abnahmegarantie',
    text: 'Endreinigung vor der Übergabe einer Wohnung oder Geschäftsfläche.',
  },
}

export type MegaDictionary = typeof mega
