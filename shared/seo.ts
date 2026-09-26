import type { Metadata } from 'next'
import { cantonList, company } from './company'

// Name, Titel und Beschreibung je Seite (M16). Der Name (label) steht in Brotkrumen
// und strukturierten Daten (M20). Eine Quelle für alle Seiten, damit
// Marke (M56) und spätere Übersetzungen (M60) an einer Stelle angepasst werden.
// Nur belegte Aussagen (E18, E41). Titel ohne Marke, metaFor() hängt sie an.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bgs-gebaeudeservice.vercel.app'

// Stand der Inhalte für die Sitemap (M17). Bei inhaltlichen Änderungen nachführen.
export const contentUpdated = '2026-09-26'

const region = cantonList

export const pages = {
  '/': {
    label: 'Startseite',
    title: `${company.brand} – Reinigung und Hauswartung in Luzern und Zug`,
    description: `Gebäudereinigung, Hauswartung und Facility Services für Unternehmen und Liegenschaften in ${region}, dazu Premium-Reinigung.`,
  },
  '/premium': {
    label: `${company.premiumBrand} Premium`,
    title: 'Premium: Reinigung für besondere Ansprüche',
    description: `${company.premiumBrand}, die Premium-Linie von ${company.brand}: diskrete Reinigung für Villen, Zweitwohnungen, Hotels, Family Offices, Privatjets und Yachten.`,
  },
  '/premium/luxusimmobilien': {
    label: 'Luxusimmobilien',
    title: 'Reinigung von Villen und Luxusimmobilien',
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
    description: `Regelmässige Reinigung von Liegenschaften, Treppenhäusern und Gewerbeflächen, mit Nachfüllservice. In ${region}.`,
  },
  '/leistungen/bueroreinigung': {
    label: 'Büro- und Praxisreinigung',
    title: 'Büro- und Praxisreinigung in Luzern und Zug',
    description: `Reinigung von Büros und Praxen, abgestimmt auf Ihre Arbeitszeiten. Kostenlose Offerte vor Ort in ${region}.`,
  },
  '/leistungen/sonderreinigungen': {
    label: 'Sonderreinigungen',
    title: 'Sonderreinigungen: Grund- und Umzugsreinigung',
    description: 'Grundreinigung sowie Umzugs- und Wohnungsendreinigung mit Abnahmegarantie für Verwaltungen, Eigentümer und Unternehmen in Luzern, Zug und Umgebung.',
  },
  '/leistungen/baureinigung': {
    label: 'Bau- und Bauendreinigung',
    title: 'Bau- und Bauendreinigung in Luzern und Zug',
    description: 'Reinigung während und nach Bau- und Umbauarbeiten, bis zur Übergabe. Für Bauherrschaften, Architekten und Verwaltungen in Luzern, Zug und Umgebung.',
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
    title: 'Einzugsgebiet: Zentralschweiz und Aargau',
    description: `Von ${company.address.city} aus in den Kantonen ${region}, auch an den Seeufern und in Engelberg. Alle Leistungen im ganzen Gebiet.`,
  },
  '/blog': {
    label: 'Ratgeber',
    title: 'Ratgeber Gebäudereinigung',
    description: `Ratgeber von ${company.brand}: worauf Sie bei der Wahl einer Reinigungsfirma achten sollten und wovon die Kosten einer Unterhaltsreinigung abhängen.`,
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Reinigungsfirma finden',
    title: 'Reinigungsfirma finden: Kriterien und Fragen für die Vergabe',
    description: 'Leistungsumfang, Versicherung, Qualitätskontrolle, Referenzen und Offerte: Diese Punkte sollten Sie klären, bevor Sie eine Reinigungsfirma beauftragen. Mit Ablauf bis zum Vertrag.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Kosten der Unterhaltsreinigung',
    title: 'Was kostet eine Unterhaltsreinigung? Die Kostenfaktoren',
    description: 'Wovon der Preis einer Unterhaltsreinigung abhängt: Fläche, Rhythmus, Nutzung und Einsatzzeiten. Mit Hinweisen zum Vergleich von Offerten.',
  },
  '/ueber-uns': {
    label: 'Über uns',
    title: 'Über uns',
    description: `${company.legalName} aus ${company.address.city}: Erfahrung seit 2006, über 50 Mitarbeitende, über 120 Kunden, Beratung auf Deutsch, Englisch, Französisch und Italienisch.`,
  },
  '/kontakt': {
    label: 'Kontakt',
    title: 'Kontakt und Offerte',
    description: `Rufen Sie uns an unter ${company.phone.display} oder schreiben Sie uns. Kostenlose Offerte vor Ort, Antwort ${company.responseTime}.`,
  },
  '/impressum': {
    label: 'Impressum',
    title: 'Impressum',
    description: `Impressum der ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city}: Handelsregister, UID und Kontakt.`,
  },
  '/datenschutz': {
    label: 'Datenschutz',
    title: 'Datenschutzerklärung',
    description: `Wie die ${company.legalName} Personendaten auf dieser Website bearbeitet und welche Rechte Sie haben.`,
  },
} satisfies Record<string, { label: string; title: string; description: string }>

export type PagePath = keyof typeof pages

// Premium-Seiten tragen die Linie mit Dachmarke, alle anderen die Dachmarke (E37, E47)
function brandFor(path: string): string {
  return path.startsWith('/premium') ? `${company.premiumBrand} von ${company.brand}` : company.brand
}

export function metaFor(path: PagePath): Metadata {
  const { title, description } = pages[path]
  return {
    // Vollständiger Titel statt Vorlage: Ein Layout mit eigenem Titel (etwa /blog)
    // hebt die Vorlage für seine Unterseiten sonst auf. Die Startseite trägt die Marke schon.
    title: { absolute: path === '/' ? title : `${title} | ${brandFor(path)}` },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'de_CH',
      siteName: company.brand,
      url: path,
      title,
      description,
    },
  }
}

/**
 * Brotkrumen (M20): Startseite, dann jede Ebene der Adresse, die es als Seite gibt.
 * Beispiel: /leistungen/hauswartung → Startseite › Leistungen › Hauswartung.
 */
export function trailFor(path: PagePath): { path: PagePath; label: string }[] {
  const trail: { path: PagePath; label: string }[] = [{ path: '/', label: pages['/'].label }]
  let current = ''
  for (const segment of path.split('/').filter(Boolean)) {
    current += `/${segment}`
    if (current in pages) trail.push({ path: current as PagePath, label: pages[current as PagePath].label })
  }
  return trail
}
