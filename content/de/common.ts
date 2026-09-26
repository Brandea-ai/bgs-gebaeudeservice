import { cantonList, company, listDe, premiumLine } from '../../shared/company'
import type { Step } from '../types'

/**
 * Gemeinsame Texte der Leistungsseiten auf Deutsch (M29). Für weitere Sprachen
 * (M60) entsteht je Sprache eine Datei mit denselben Schlüsseln.
 */
export const ui = {
  offerCta: 'Kostenlose Offerte anfragen',
  atAGlance: 'Auf einen Blick',
  notIncluded: 'Nicht Teil dieser Leistung',
  steps: 'So läuft es ab',
  faq: 'Häufige Fragen',
  related: 'Passt auch dazu',
  premiumLine,
  factArea: 'Gebiet',
  factAreaValue: `Kantone ${cantonList}`,
  factOffer: 'Offerte',
  factOfferValue: 'Kostenlos und unverbindlich, nach einer Besichtigung vor Ort',
  factAnswer: 'Rückmeldung',
  factAnswerValue: company.responseTime.charAt(0).toUpperCase() + company.responseTime.slice(1),
}

/**
 * Die ersten beiden Schritte sind bei allen Leistungen gleich: Anfrage beim
 * Geschäftsführer (R5d) und Offerte nach Besichtigung (N014, R3e).
 */
export const steps = {
  anfrage: {
    title: 'Anfrage',
    text: `Sie rufen an oder schreiben uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.`,
  },
  besichtigung: {
    title: 'Besichtigung und Offerte',
    text: 'Wir sehen uns das Objekt vor Ort an und klären mit Ihnen Umfang und Zeiten. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
  },
} satisfies Record<string, Step>

/** Antworten, die auf mehreren Seiten gleich lauten (E18, R3e, E30, E44) */
export const answers = {
  kosten:
    'Das hängt vom Objekt und vom Aufwand ab. Preise nennen wir deshalb erst in der Offerte, nachdem wir das Objekt gesehen haben. Besichtigung und Offerte sind kostenlos und unverbindlich.',
  gebiet: `In den ganzen Kantonen ${cantonList}, mit allen Leistungen und überall zu denselben Bedingungen. Mehr dazu unter [Einzugsgebiet](/einzugsgebiet).`,
  versicherung: 'Ja. Wir haben eine Betriebshaftpflichtversicherung mit einer Deckung von CHF 10 Mio.',
  mittel: 'Ja, auf Wunsch reinigen wir mit umweltfreundlichen Mitteln. Sagen Sie es uns bei der Besichtigung.',
  sprachen: `Unsere Mitarbeitenden sprechen ${listDe(company.languages)}.`,
}
