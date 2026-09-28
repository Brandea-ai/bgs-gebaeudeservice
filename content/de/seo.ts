import { cantonList, company, premiumLabel } from '../../shared/company'
import { kantone } from './kantone'

/**
 * Name, Titel und Beschreibung je Seite (M16). Der Name (label) steht in
 * Brotkrumen und strukturierten Daten (M20). Nur belegte Aussagen (E18, E41).
 * Titel ohne Marke, metaFor() in shared/seo.ts hängt sie an. Schlüssel ist die
 * deutsche Adresse, die Übersetzungen nutzen dieselben Schlüssel (M60).
 */

const region = cantonList

export const pages = {
  '/': {
    label: 'Startseite',
    title: `${company.brand} | Reinigung und Hauswartung Luzern, Zug`,
    description: 'Reinigungsfirma für Verwaltungen und Unternehmen: Gebäudereinigung und Hauswartung in Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung.',
  },
  // Titel und H1 mit dem Hauptbegriff (N8, keywords-mehrsprachig), Beschreibung mit Nutzen und Handlungsaufruf (T4)
  '/premium': {
    label: premiumLabel,
    title: 'Premium-Reinigung: Villen, Jets, Yachten',
    description: company.premiumBrand
      ? `${company.premiumBrand}, die Premium-Linie von ${company.brand}: diskrete Reinigung für Villen, Privatjets und Yachten, mit festem Team. Kostenlose Offerte nach Besichtigung.`
      : 'Premium-Reinigung für Villen, Privatjets und Yachten am Vierwaldstättersee und Zugersee, diskret und mit festem Team. Kostenlose Offerte nach Besichtigung.',
  },
  '/premium/luxusimmobilien': {
    label: 'Luxusimmobilien',
    title: 'Villenreinigung und Pflege von Luxusimmobilien',
    description: 'Villenreinigung in Luzern, Zug und Umgebung: Naturstein, Parkett und Lack richtig gepflegt, auch in Ihrer Abwesenheit. Kostenlose Offerte nach Besichtigung.',
  },
  '/premium/privatjet': {
    label: 'Privatjet',
    title: 'Privatjet-Reinigung: Kabine und Bordküche',
    description: 'Privatjet-Reinigung für Kabine, Bordküche und Waschraum, mit den für Ihr Flugzeug freigegebenen Mitteln. Kostenlose Offerte nach Besichtigung.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Bootsreinigung und Yachtreinigung Luzern, Zug',
    description: 'Bootsreinigung und Yachtreinigung am Liegeplatz: Teak, Gelcoat, Polster und Salon, am Vierwaldstättersee und Zugersee. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen': {
    label: 'Leistungen',
    title: 'Leistungen: Reinigung und Hauswartung',
    description: 'Reinigung und Hauswartung im Überblick: zehn Leistungen, Vergleich und Jahresplan. In Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Unterhaltsreinigung',
    title: 'Unterhaltsreinigung in Luzern und Zug',
    description: 'Unterhaltsreinigung und Treppenhausreinigung für Liegenschaften, mit Nachfüllservice. In Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/bueroreinigung': {
    label: 'Büro- und Praxisreinigung',
    title: 'Büroreinigung und Praxisreinigung Luzern, Zug',
    description: 'Büroreinigung und Praxisreinigung zu Randzeiten, mit Leistungsverzeichnis zum Ausdrucken. In Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/sonderreinigungen': {
    label: 'Grund- und Sonderreinigung',
    title: 'Grundreinigung und Sonderreinigung Luzern, Zug',
    description: 'Grundreinigung und Sonderreinigung von Böden, Fugen und Sanitärräumen, passend zum Belag, in Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/umzugsreinigung': {
    label: 'Umzugsreinigung',
    title: 'Umzugsreinigung Luzern: Verwaltungen, Eigentümer',
    description: 'Umzugsreinigung und Endreinigung mit Abnahmegarantie für Verwaltungen, Eigentümer und Unternehmen in Luzern und Zug. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/baureinigung': {
    label: 'Bau- und Bauendreinigung',
    title: 'Baureinigung und Bauendreinigung Luzern, Zug',
    description: 'Baureinigung und Bauendreinigung in Luzern, Zug und Umgebung, in Etappen bis zur Abnahme, mit Checklisten zum Ausdrucken. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Fenster- und Fassadenreinigung',
    title: 'Fensterreinigung und Fassadenreinigung Luzern',
    description: 'Fensterreinigung und Fassadenreinigung mit Checkliste und Aushang-Vorlage für Verwaltungen, in Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Industrie- und Hallenreinigung',
    title: 'Industriereinigung und Hallenreinigung',
    description: 'Industriereinigung und Hallenreinigung für Produktion und Lager, geplant nach Zonen und Schichten, mit Checklisten. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/hauswartung': {
    label: 'Hauswartung',
    title: 'Hauswartung Luzern, Zug: Pflichtenheft-Vorlage',
    description: 'Hauswartung in Luzern, Zug und Umgebung: Kontrollgänge, Treppenhaus und Waschküche, dazu ein Pflichtenheft zum Ausdrucken. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Aussen- und Grünflächenpflege',
    title: 'Gartenpflege und Gartenunterhalt Luzern, Zug',
    description: 'Gartenpflege für Liegenschaften in Luzern, Zug und Umgebung: Rasen, Hecken im Winter, Unkraut und Laub auf Wegen. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/facility-services': {
    label: 'Facility Services',
    title: 'Facility Services aus einer Hand, Luzern und Zug',
    description: 'Facility Services in Luzern, Zug und Umgebung: Reinigung, Hauswartung und Umgebungspflege in einem Vertrag. Kostenlose Offerte nach Besichtigung.',
  },
  '/einzugsgebiet': {
    label: 'Einzugsgebiet',
    title: 'Einzugsgebiet: Zentralschweiz, Aargau',
    description: `Reinigung und Hauswartung ab ${company.address.city} in ${region}, auch am See und in Engelberg. Kostenlose Offerte nach Besichtigung.`,
  },
  // Kantonsseiten (E80): Titel und Beschreibung stehen bei den Inhalten in kantone.ts
  '/einzugsgebiet/luzern': { label: 'Kanton Luzern', ...kantone.luzern.seo },
  '/einzugsgebiet/zug': { label: 'Kanton Zug', ...kantone.zug.seo },
  '/einzugsgebiet/aargau': { label: 'Kanton Aargau', ...kantone.aargau.seo },
  '/einzugsgebiet/nidwalden': { label: 'Kanton Nidwalden', ...kantone.nidwalden.seo },
  '/einzugsgebiet/obwalden': { label: 'Kanton Obwalden', ...kantone.obwalden.seo },
  '/blog': {
    label: 'Ratgeber',
    title: 'Ratgeber Gebäudereinigung',
    description: 'Ratgeber für Verwaltungen und Unternehmen: Aufgaben der Hauswartung, Wohnungsabgabe, Bodenbeläge, Vergabe und Kosten. Vorlagen gleich ausdrucken.',
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Reinigungsfirma finden',
    title: 'Die richtige Reinigungsfirma finden',
    description: 'Reinigungsfirma beauftragen: Umfang, Versicherung, Arbeitsbedingungen und Offerte klären. Drucken Sie das Vergleichsraster aus und vergleichen Sie Offerten.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Kosten der Unterhaltsreinigung',
    title: 'Was kostet eine Unterhaltsreinigung?',
    description: 'Wovon die Kosten einer Unterhaltsreinigung abhängen: Stunden, Rhythmus, Einsatzzeiten und Löhne. Rechnen Sie Ihre Offerten mit dem Rechenweg nach.',
  },
  '/blog/hauswartung-aufgaben': {
    label: 'Aufgaben der Hauswartung',
    title: 'Aufgaben der Hauswartung festlegen und abrechnen',
    description: 'Aufgaben der Hauswartung im Pflichtenheft: Rhythmus, Kostengrenze, Meldewege und Nebenkosten, mit ausgefülltem Beispiel. Prüfen Sie damit Ihr Pflichtenheft.',
  },
  '/blog/wohnungsabgabe-protokoll': {
    label: 'Wohnungsabgabe',
    title: 'Wohnungsabgabe: Protokoll und Mängelrüge',
    description: 'Wohnungsabgabe für Verwaltungen: wie sauber die Wohnung sein muss und wie Sie Mängel genau festhalten und rügen. Protokollbeispiele gleich ausdrucken.',
  },
  '/blog/bodenbelaege-reinigen': {
    label: 'Bodenbeläge richtig reinigen',
    title: 'Bodenbeläge reinigen: pH-Wert, Fugen, Pflege',
    description: 'Welche Reinigungsmittel Naturstein, Plättli, Linoleum, Vinyl und Parkett vertragen. Drucken Sie die Tabelle für Ihren Putzraum aus und vermeiden Sie Schäden.',
  },
  '/ueber-uns': {
    label: 'Über uns',
    title: 'Über uns: Reinigung und Hauswartung seit 2006',
    description: 'Wie wir arbeiten, für wen wir passen und unsere Firmenangaben zum Nachprüfen im UID-Register. Kostenlose Offerte nach Besichtigung.',
  },
  '/kontakt': {
    label: 'Kontakt',
    title: 'Kontakt und Offerte',
    description: `Reinigungsofferte für Luzern, Zug und Umgebung: Antwort ${company.responseTime}, Besichtigung kostenlos. Rufen Sie an: ${company.phone.display}.`,
  },
  '/impressum': {
    label: 'Impressum',
    title: 'Impressum',
    description: `Impressum der ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city}: Vertretung, Handelsregister, UID, Mehrwertsteuernummer und Kontakt.`,
  },
  '/datenschutz': {
    label: 'Datenschutz',
    title: 'Datenschutzerklärung',
    description: `Wie die ${company.legalName} Personendaten auf dieser Website bearbeitet und welche Rechte Sie nach dem Schweizer Datenschutzgesetz (DSG) haben.`,
  },
} satisfies Record<string, { label: string; title: string; description: string }>

