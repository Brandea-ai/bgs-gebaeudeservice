import { cantonList, company, listDe, premiumLine } from '../../shared/company'
import type { Step } from '../types'

/**
 * Gemeinsame Texte der Leistungsseiten auf Deutsch (M29). Für weitere Sprachen
 * (M60) entsteht je Sprache eine Datei mit denselben Schlüsseln.
 */
export const ui = {
  offerCta: 'Kostenlose Offerte anfragen',
  toService: 'Zur Leistung',
  atAGlance: 'Auf einen Blick',
  notIncluded: 'Nicht Teil dieser Leistung',
  steps: 'So läuft es ab',
  faq: 'Häufige Fragen',
  related: 'Passt auch dazu',
  onThisPage: 'Auf dieser Seite',
  premiumLine,
  factArea: 'Gebiet',
  factAreaValue: `Kantone ${cantonList}`,
  factOffer: 'Offerte',
  factOfferValue: 'Kostenlos und unverbindlich, nach einer Besichtigung vor Ort',
  factAnswer: 'Rückmeldung',
  factAnswerValue: company.responseTime.charAt(0).toUpperCase() + company.responseTime.slice(1),
  /** Zeile über dem Ablauf (E85): die zwei Schritte, die bei jeder Leistung gleich sind (belegt: E18) */
  stepsBefore: {
    label: 'Vor jedem Auftrag',
    anfrage: 'Anfrage',
    anfragePremium: 'Diskrete Anfrage',
    /** Kanäle statt Antwortzeit: die 24 Stunden nennen Kontaktbereich und Fragen schon (F8) */
    anfrageText: 'Per Telefon, E-Mail oder Formular',
    besichtigung: 'Besichtigung vor Ort',
    besichtigungText: 'Danach erhalten Sie die schriftliche Offerte',
    /** Zweite Zeile: die seitentypischen Schritte (content.steps) */
    service: 'Bei dieser Leistung',
  },
  /** Werkzeuge im Hauptinhalt (E85) */
  tool: {
    print: 'Drucken',
    show: 'Werkzeug öffnen',
    hide: 'Werkzeug schliessen',
    form: { property: 'Liegenschaft', date: 'Datum', name: 'Name' },
    /** Anfang des Namens für den waagerecht scrollbaren Tabellenbereich, der Werkzeugtitel folgt */
    table: 'Tabelle: ',
    sources: 'Quellen',
    external: 'externer Link, öffnet in neuem Fenster',
    updated: 'Stand',
  },
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
  // Häufigste Nutzerfrage bei Google (Kosten pro Stunde, pro Fläche): Einflussfaktoren ohne Preise und Zahlen (E18)
  kostenFaktoren:
    'Ein Preis pro Stunde oder pro Quadratmeter allein sagt wenig, denn der Aufwand hängt vom Objekt ab: von Fläche und Art der Räume, ihrem Zustand, dem Rhythmus, den Einsatzzeiten, dem Zugang und davon, wer Verbrauchsmaterial und Reinigungsmittel stellt. Deshalb nennen wir Preise erst in der Offerte. Wir sehen uns das Objekt kostenlos an und schicken Ihnen danach die Offerte schriftlich. Mehr dazu im Ratgeber: [Wovon die Kosten einer Unterhaltsreinigung abhängen](/blog/reinigungskosten-schweiz).',
  gebiet: `In den ganzen Kantonen ${cantonList}, mit allen Leistungen und überall zu denselben Bedingungen. Mehr dazu unter [Einzugsgebiet](/einzugsgebiet).`,
  versicherung: 'Ja. Wir haben eine Betriebshaftpflichtversicherung mit einer Deckung von CHF 10 Mio.',
  mittel: 'Ja, auf Wunsch reinigen wir mit umweltfreundlichen Mitteln. Sagen Sie es uns bei der Besichtigung.',
  sprachen: `Unsere Mitarbeitenden sprechen ${listDe(company.languages)}.`,
}
