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
    description: `Gebäudereinigung, Hauswartung, Facility Services und Premium-Reinigung für Unternehmen und Liegenschaften in ${region}.`,
  },
  '/premium': {
    label: premiumLabel,
    title: 'Premium: Reinigung für hohe Ansprüche',
    description: company.premiumBrand
      ? `${company.premiumBrand}, die Premium-Linie von ${company.brand}: diskrete Reinigung für Villen, Zweitwohnungen, Hotels, Family Offices, Privatjets und Yachten.`
      : 'Diskrete Reinigung für Villen, Zweitwohnungen, Hotels, Family Offices, Privatjets und Yachten am Vierwaldstättersee, am Zugersee und in der Region.',
  },
  '/premium/luxusimmobilien': {
    label: 'Luxusimmobilien',
    title: 'Villen- und Luxusimmobilienreinigung',
    description: 'Diskrete Reinigung und Pflege von Villen, Lofts und Residenzen am Vierwaldstättersee, am Zugersee und in der Region. Feste Teams, Offerte vor Ort.',
  },
  '/premium/privatjet': {
    label: 'Privatjet',
    title: 'Privatjet-Reinigung',
    description: 'Kabinenreinigung für Privatjets mit Rücksicht auf hochwertige Materialien. Diskret, nach Absprache und mit festen Teams.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Yacht- und Bootsreinigung',
    description: 'Reinigung von Yachten und Motorbooten am Vierwaldstättersee und am Zugersee: Innenraum, Polster, Teak und Gelcoat. Diskret und nach Absprache.',
  },
  '/leistungen': {
    label: 'Leistungen',
    title: 'Leistungen: Reinigung und Hauswartung',
    description: `Unterhalts-, Büro-, Sonder-, Bau-, Fenster- und Industriereinigung, Hauswartung und Facility Services von ${company.brand} in Luzern, Zug und Umgebung.`,
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
    title: 'Umzugsreinigung Luzern für Verwaltungen, Eigentümer',
    description: 'Umzugsreinigung und Endreinigung mit Abnahmegarantie für Verwaltungen, Eigentümer und Unternehmen in Luzern und Zug. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/baureinigung': {
    label: 'Bau- und Bauendreinigung',
    title: 'Baureinigung und Bauendreinigung Luzern, Zug',
    description: 'Baureinigung und Bauendreinigung in Luzern, Zug und Umgebung, in Etappen bis zur Abnahme, mit Checklisten zum Ausdrucken. Kostenlose Offerte nach Besichtigung.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Fenster- und Fassadenreinigung',
    title: 'Fenster- und Fassadenreinigung',
    description: `Reinigung von Fenstern, Glasflächen und Fassaden, auch mit Hochdruck, für Unternehmen und Liegenschaften in ${region}.`,
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Industrie- und Hallenreinigung',
    title: 'Industrie- und Hallenreinigung',
    description: `Reinigung von Produktions- und Lagerhallen, Maschinen und Anlagen, abgestimmt auf Ihren Betrieb. In ${region}.`,
  },
  '/leistungen/hauswartung': {
    label: 'Hauswartung',
    title: 'Hauswartung in Luzern und Zug',
    description: 'Hauswartung für Ihre Liegenschaft: Kontrollgänge, Treppenhaus, Waschküche, Kleinreparaturen, Haustechnik, Wohnungsübergaben, Entsorgung und Umgebung.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Aussen- und Grünflächenpflege',
    title: 'Aussen- und Grünflächenpflege',
    description: `Pflege von Umgebung und Grünflächen Ihrer Liegenschaft, einzeln oder als Teil der Hauswartung. In ${region}.`,
  },
  '/leistungen/facility-services': {
    label: 'Facility Services',
    title: 'Facility Services aus einer Hand',
    description: 'Reinigung, Hauswartung und Umgebungspflege in einem Vertrag mit einer Ansprechperson. Für Verwaltungen und Unternehmen in Luzern, Zug und Umgebung.',
  },
  '/einzugsgebiet': {
    label: 'Einzugsgebiet',
    title: 'Einzugsgebiet: Zentralschweiz, Aargau',
    description: `Von ${company.address.city} aus in den Kantonen ${region}, auch an den Seeufern und in Engelberg. Alle Leistungen im ganzen Gebiet.`,
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
    description: `Ratgeber von ${company.brand}: worauf Sie bei der Wahl einer Reinigungsfirma achten sollten und wovon die Kosten einer Unterhaltsreinigung abhängen.`,
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Reinigungsfirma finden',
    title: 'Die richtige Reinigungsfirma finden',
    description: 'Reinigungsfirma beauftragen: Leistungsumfang, Versicherung, Qualitätskontrolle, Referenzen und Offerte vorher klären. Mit Ablauf bis zum Vertrag.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Kosten der Unterhaltsreinigung',
    title: 'Was kostet eine Unterhaltsreinigung?',
    description: 'Wovon der Preis einer Unterhaltsreinigung abhängt: Fläche, Rhythmus, Nutzung und Einsatzzeiten. Mit Hinweisen zum Vergleich von Offerten.',
  },
  '/ueber-uns': {
    label: 'Über uns',
    title: 'Über uns',
    description: `${company.legalName} aus ${company.address.city}: seit 2006, über 50 Mitarbeitende, über 120 Kunden, Beratung auf Deutsch, Englisch, Französisch und Italienisch.`,
  },
  '/kontakt': {
    label: 'Kontakt',
    title: 'Kontakt und Offerte',
    description: `Rufen Sie uns an unter ${company.phone.display} oder schreiben Sie uns. Kostenlose Offerte vor Ort, Antwort ${company.responseTime}.`,
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

