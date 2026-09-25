import type { Metadata } from 'next'
import { company } from './company'

// Titel und Beschreibungen je Seite (M16). Eine Quelle für alle Seiten, damit
// Marke (M56) und spätere Übersetzungen (M60) an einer Stelle angepasst werden.
// Nur belegte Aussagen (E18, E41). Titel ohne Marke, metaFor() hängt sie an.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bgs-gebaeudeservice.vercel.app'

// Stand der Inhalte für die Sitemap (M17). Bei inhaltlichen Änderungen nachführen.
export const contentUpdated = '2026-09-25'

const region = 'Luzern, Zug, Aargau, Nidwalden und Obwalden'

export const pages = {
  '/': {
    title: `${company.brand} – Reinigung und Hauswartung in Luzern und Zug`,
    description: `Gebäudereinigung, Hauswartung und Facility Services für Unternehmen und Liegenschaften in ${region}, dazu Premium-Reinigung.`,
  },
  '/premium': {
    title: 'Premium: Reinigung für besondere Ansprüche',
    description: 'Diskrete Reinigung für Villen, Zweitwohnungen, Hotels, Family Offices, Privatjets und Yachten am Vierwaldstättersee, am Zugersee und in der Region.',
  },
  '/premium/luxusimmobilien': {
    title: 'Reinigung von Villen und Luxusimmobilien',
    description: 'Diskrete Reinigung und Pflege von Villen, Lofts und Residenzen am Vierwaldstättersee, am Zugersee und in der Region. Feste Teams, Offerte vor Ort.',
  },
  '/premium/privatjet': {
    title: 'Privatjet-Reinigung',
    description: 'Kabinenreinigung für Privatjets mit Rücksicht auf hochwertige Materialien. Diskret, nach Absprache und mit festen Teams.',
  },
  '/premium/yacht': {
    title: 'Yacht- und Bootsreinigung',
    description: 'Reinigung von Yachten und Motorbooten am Vierwaldstättersee und am Zugersee: Innenraum, Polster, Teak und Gelcoat. Diskret und nach Absprache.',
  },
  '/leistungen': {
    title: 'Leistungen: Reinigung und Hauswartung',
    description: `Unterhalts-, Büro-, Sonder-, Bau-, Fenster- und Industriereinigung, Hauswartung und Facility Services von ${company.brand} in Luzern, Zug und Umgebung.`,
  },
  '/leistungen/unterhaltsreinigung': {
    title: 'Unterhaltsreinigung in Luzern und Zug',
    description: `Regelmässige Reinigung von Liegenschaften, Treppenhäusern und Gewerbeflächen, mit Nachfüllservice. In ${region}.`,
  },
  '/leistungen/bueroreinigung': {
    title: 'Büro- und Praxisreinigung in Luzern und Zug',
    description: `Reinigung von Büros und Praxen, abgestimmt auf Ihre Arbeitszeiten. Kostenlose Offerte vor Ort in ${region}.`,
  },
  '/leistungen/sonderreinigungen': {
    title: 'Sonderreinigungen: Grund- und Umzugsreinigung',
    description: 'Grundreinigung sowie Umzugs- und Wohnungsendreinigung mit Abnahmegarantie für Verwaltungen, Eigentümer und Unternehmen in Luzern, Zug und Umgebung.',
  },
  '/leistungen/baureinigung': {
    title: 'Bau- und Bauendreinigung in Luzern und Zug',
    description: 'Reinigung während und nach Bau- und Umbauarbeiten, bis zur Übergabe. Für Bauherrschaften, Architekten und Verwaltungen in Luzern, Zug und Umgebung.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    title: 'Fenster- und Fassadenreinigung',
    description: `Reinigung von Fenstern, Glasflächen und Fassaden, auch mit Hochdruck, für Unternehmen und Liegenschaften in ${region}.`,
  },
  '/leistungen/industrie-und-hallenreinigung': {
    title: 'Industrie- und Hallenreinigung',
    description: `Reinigung von Produktions- und Lagerhallen, Maschinen und Anlagen, abgestimmt auf Ihren Betrieb. In ${region}.`,
  },
  '/leistungen/hauswartung': {
    title: 'Hauswartung in Luzern und Zug',
    description: 'Hauswartung für Ihre Liegenschaft: Kontrollgänge, Treppenhaus, Waschküche, Kleinreparaturen, Haustechnik, Wohnungsübergaben, Entsorgung und Umgebung.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    title: 'Aussen- und Grünflächenpflege',
    description: `Pflege von Umgebung und Grünflächen Ihrer Liegenschaft, einzeln oder als Teil der Hauswartung. In ${region}.`,
  },
  '/leistungen/facility-services': {
    title: 'Facility Services aus einer Hand',
    description: 'Reinigung, Hauswartung und Umgebungspflege in einem Vertrag mit einer Ansprechperson. Für Verwaltungen und Unternehmen in Luzern, Zug und Umgebung.',
  },
  '/einzugsgebiet': {
    title: 'Einzugsgebiet: Zentralschweiz und Aargau',
    description: `Von ${company.address.city} aus in den Kantonen ${region}, auch an den Seeufern und in Engelberg. Alle Leistungen im ganzen Gebiet.`,
  },
  '/blog': {
    title: 'Ratgeber Reinigung und Hauswartung',
    description: 'Ratgeber zur Gebäudereinigung: wie Sie eine passende Reinigungsfirma finden, was professionelle Reinigung ausmacht und wie umweltfreundlich gereinigt wird.',
  },
  '/blog/richtige-reinigungsfirma-finden': {
    title: 'Wie finde ich die richtige Reinigungsfirma?',
    description: 'Leitfaden für Unternehmen und Verwaltungen: Kriterien, regionale Besonderheiten in der Schweiz und der Auswahlprozess Schritt für Schritt.',
  },
  '/blog/professionelle-gebaeudereinigung': {
    title: 'Professionelle Gebäudereinigung erklärt',
    description: 'Was professionelle Gebäudereinigung ausmacht, welche Reinigungsarten es gibt und worauf Sie bei Qualität und Ablauf achten sollten.',
  },
  '/blog/umweltfreundliche-reinigung': {
    title: 'Umweltfreundliche Reinigung: Methoden und Mittel',
    description: 'Nachhaltige Reinigungsmethoden und umweltfreundliche Mittel im Überblick. Bei uns auf Wunsch für Ihre Reinigung.',
  },
  '/ueber-uns': {
    title: 'Über uns',
    description: `${company.legalName} aus ${company.address.city}: Erfahrung seit 2006, über 50 Mitarbeitende, über 120 Kunden, Beratung auf Deutsch, Englisch, Französisch und Italienisch.`,
  },
  '/kontakt': {
    title: 'Kontakt und Offerte',
    description: `Rufen Sie uns an unter ${company.phone.display} oder schreiben Sie uns. Kostenlose Offerte vor Ort, Antwort ${company.responseTime}.`,
  },
  '/impressum': {
    title: 'Impressum',
    description: `Impressum der ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city}: Handelsregister, UID und Kontakt.`,
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung',
    description: `Wie die ${company.legalName} Personendaten auf dieser Website bearbeitet und welche Rechte Sie haben.`,
  },
} satisfies Record<string, { title: string; description: string }>

export type PagePath = keyof typeof pages

export function metaFor(path: PagePath): Metadata {
  const { title, description } = pages[path]
  return {
    // Vollständiger Titel statt Vorlage: Ein Layout mit eigenem Titel (etwa /blog)
    // hebt die Vorlage für seine Unterseiten sonst auf. Die Startseite trägt die Marke schon.
    title: { absolute: path === '/' ? title : `${title} | ${company.brand}` },
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
