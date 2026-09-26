import { cantonList, company, listDe } from '../../shared/company'
import type { ArticleContent } from '../types'

/**
 * Ratgeber (M53, Seitenberichte P27 bis P31). Allgemeine Ratschläge sind als
 * solche formuliert. Aussagen über das Unternehmen nur nach E18 (Erfahrung,
 * Mitarbeitende, Kunden, Versicherung, Sprachen), keine Preise (R3e), keine
 * Zertifikate, Referenzen oder Kundenstimmen.
 *
 * - P30 bleibt und nimmt die brauchbaren Teile aus P28 auf, P28 leitet weiter.
 * - P29 erscheint ohne Zahlen, nur mit Kostenfaktoren (R3e).
 * - P31 ist zurückgestellt, bis Angaben zu Mitteln und Methoden vorliegen.
 * Datum: «Stand» ist der Stand des Textes. Das Veröffentlichungsdatum wird
 * erst zum Launch eingetragen (M19, GLOBAL-031).
 */

export const ratgeberUebersicht = {
  h1: 'Ratgeber Gebäudereinigung',
  intro: `Antworten auf Fragen rund um die Vergabe, die Kosten und den Ablauf einer Gebäudereinigung. Von ${company.brand}, für Unternehmen, Verwaltungen und Eigentümer in den Kantonen ${cantonList}.`,
  services:
    'Direkt zu den Leistungen: [Unterhaltsreinigung](/leistungen/unterhaltsreinigung), [Hauswartung](/leistungen/hauswartung) und [alle Leistungen](/leistungen).',
  byline: `Ein Ratgeber von ${company.brand}`,
  updatedLabel: 'Stand',
  publishedLabel: 'Veröffentlicht am',
}

// Grundlage: P30 und die verwertbaren Teile aus P28 (Seitenberichte, Abschnitt 4)
const reinigungsfirmaFinden: ArticleContent = {
  path: '/blog/richtige-reinigungsfirma-finden',
  h1: 'Wie finde ich die richtige Reinigungsfirma?',
  subtitle: 'Welche Fragen Sie vor der Vergabe klären sollten, vom Leistungsumfang bis zum Vertrag.',
  teaser: 'Welche Fragen Sie vor der Vergabe klären sollten: Leistungsumfang, Versicherung, Qualitätskontrolle, Referenzen, Offerte und Vertrag.',
  updated: '2026-09-26',
  intro: [
    'Saubere und gepflegte Räume schaffen eine angenehme Arbeitsatmosphäre und hinterlassen bei Kundschaft einen guten ersten Eindruck. Welche Reinigungsfirma dafür sorgt, entscheiden Sie meist für mehrere Jahre. Dieser Ratgeber zeigt, worauf Sie bei der Auswahl achten sollten.',
  ],
  summary: {
    title: 'Kurz gesagt',
    items: [
      'Klären Sie zuerst Ihren Bedarf: welche Leistung, wie oft und zu welchen Zeiten.',
      'Holen Sie drei bis fünf Offerten ein, jeweils nach einer Besichtigung.',
      'Vergleichen Sie Leistungsumfang, Versicherung, Qualitätskontrolle, Referenzen, Offerte und Vertrag.',
      'Fragen Sie nach, wo etwas unklar bleibt, und lassen Sie sich die Antworten schriftlich geben.',
    ],
  },
  sections: [
    {
      title: 'Zuerst den Bedarf klären',
      paragraphs: ['Bevor Sie Anbieter vergleichen, sollten Sie wissen, was Sie brauchen. Die wichtigsten Leistungen:'],
      definitions: [
        {
          term: 'Unterhaltsreinigung',
          text: 'Die wiederkehrende Reinigung in einem festen Rhythmus, zum Beispiel mehrmals pro Woche. Sie hält Räume sauber und hygienisch. Mehr unter [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
        },
        {
          term: 'Grundreinigung',
          text: 'Eine gründliche Reinigung in grösseren Abständen. Sie entfernt Verschmutzungen, die bei der regelmässigen Reinigung zurückbleiben. Mehr unter [Grund- und Sonderreinigungen](/leistungen/sonderreinigungen).',
        },
        {
          term: 'Hauswartung',
          text: 'Die Betreuung einer Liegenschaft über die Reinigung hinaus, etwa mit Kontrollgängen, Kleinreparaturen und Entsorgung. Mehr unter [Hauswartung](/leistungen/hauswartung).',
        },
      ],
      note: 'Legen Sie ausserdem fest, wie oft und zu welchen Zeiten gereinigt werden soll, zum Beispiel vor Arbeitsbeginn oder nach Ladenschluss. Diese Angaben brauchen alle Anbieter, damit die Offerten vergleichbar sind.',
    },
    {
      title: 'Worauf Sie achten sollten',
      subsections: [
        {
          title: 'Leistungsumfang und Grenzen',
          text: 'Lassen Sie sich schriftlich geben, welche Räume und Tätigkeiten enthalten sind und was nicht. Fragen Sie: Was gehört zur regelmässigen Reinigung, und was wird separat verrechnet?',
        },
        {
          title: 'Versicherung',
          text: 'Bei der Arbeit in Ihren Räumen kann etwas beschädigt werden. Fragen Sie nach einer Betriebshaftpflichtversicherung und lassen Sie sich die Deckungssumme belegen.',
        },
        {
          title: 'Qualitätskontrolle und Ansprechperson',
          text: 'Fragen Sie, wie neue Mitarbeitende eingearbeitet werden und wer die Arbeit vor Ort kontrolliert. Wichtig ist auch, wer Ihre Ansprechperson ist und wie Beanstandungen behandelt werden.',
        },
        {
          title: 'Zertifikate richtig einordnen',
          text: 'Zertifikate können zeigen, dass Abläufe nach einer Norm geprüft wurden. Fragen Sie nach Norm, Zertifizierungsstelle, Geltungsbereich und Gültigkeit. Ebenso wichtig ist, wie die Firma die Qualität im Alltag kontrolliert und Mängel behebt.',
        },
        {
          title: 'Referenzen und Bewertungen',
          text: 'Fragen Sie nach Referenzen mit vergleichbaren Objekten. Ob ein Gespräch mit Referenzkunden möglich ist, hängt von deren Einverständnis ab. Prüfen Sie auch Online-Bewertungen.',
        },
        {
          title: 'Offerte und Preis',
          text: 'Eine belastbare Offerte gibt es erst nach einer Besichtigung. Achten Sie darauf, dass Nebenkosten wie Anfahrt und Reinigungsmittel ausgewiesen und Sonderreinigungen separat aufgeführt sind. Fragen Sie bei sehr günstigen Offerten nach, welche Leistungen und welcher Zeitaufwand enthalten sind. Mehr dazu: [Wovon die Kosten einer Unterhaltsreinigung abhängen](/blog/reinigungskosten-schweiz).',
        },
        {
          title: 'Vertrag',
          text: 'Laufzeit, Kündigungsfrist und die Vertretung bei Ferien oder Krankheit gehören in den Vertrag.',
        },
        {
          title: 'Nähe und Erreichbarkeit',
          text: 'Fragen Sie, wie schnell bei einem Mangel jemand vor Ort ist und wie Sie Ihre Ansprechperson erreichen.',
        },
      ],
    },
    {
      title: 'Schritt für Schritt zur Reinigungsfirma',
      ordered: true,
      items: [
        'Bedarf klären: Leistung, Rhythmus, Zeiten und Flächen notieren.',
        'Drei bis fünf Anbieter auswählen, die in Ihrer Region arbeiten.',
        'Besichtigungen vereinbaren. Ohne Besichtigung gibt es keine vergleichbare Offerte.',
        'Offerten vergleichen: Umfang, Rhythmus, Nebenkosten und Laufzeit.',
        'Offene Fragen klären, am besten schriftlich.',
        'Fragen, ob eine Probereinigung oder ein Start mit einer Probezeit möglich ist.',
        'Vertrag abschliessen und die Ansprechperson festhalten.',
      ],
    },
    {
      title: 'Fragen für die Besichtigung',
      items: [
        'Was genau ist enthalten, und was nicht?',
        'Wie oft und zu welchen Zeiten wird gereinigt?',
        'Wer ist meine Ansprechperson?',
        'Wie wird die Qualität kontrolliert?',
        'Wie ist die Vertretung bei Ferien oder Krankheit geregelt?',
        'Welche Versicherung besteht, mit welcher Deckung?',
        'Wie wird abgerechnet, und was kostet extra?',
      ],
    },
    {
      title: `So beantwortet ${company.brand} diese Fragen`,
      items: [
        'Offerte: kostenlos und unverbindlich, nach einer Besichtigung vor Ort.',
        `Ansprechperson: Ihre Anfrage bearbeitet der Geschäftsführer persönlich. Sie hören ${company.responseTime} von uns.`,
        'Versicherung: Betriebshaftpflicht mit einer Deckung von CHF 10 Mio.',
        'Erfahrung: seit 2006, heute über 50 Mitarbeitende und über 120 Kunden (Stand September 2026).',
        `Sprachen: ${listDe(company.languages)}.`,
        `Gebiet: die Kantone ${cantonList}, mit allen Leistungen. Mehr unter [Einzugsgebiet](/einzugsgebiet).`,
      ],
    },
  ],
  cta: {
    title: 'Offerte vor Ort',
    text: 'Wir kommen für eine kostenlose, unverbindliche Offerte bei Ihnen vorbei. Beschreiben Sie uns Objekt, Fläche und gewünschten Rhythmus.',
  },
}

// Grundlage: P29 in der Fassung ohne Zahlen (R3e), Kostenfaktoren als allgemeine Erklärung, E44 (Anfahrt)
const kosten: ArticleContent = {
  path: '/blog/reinigungskosten-schweiz',
  h1: 'Was kostet eine Unterhaltsreinigung?',
  subtitle: 'Die wichtigsten Kostenfaktoren und wie Sie zu einer verlässlichen Offerte kommen.',
  teaser: 'Wovon der Preis einer Unterhaltsreinigung abhängt, wie abgerechnet wird und wie Sie Offerten vergleichen.',
  updated: '2026-09-26',
  intro: [
    'Dieser Ratgeber bezieht sich auf die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung), also die regelmässige Reinigung von Liegenschaften, Büros und Gewerbeflächen. Er erklärt, wovon der Preis abhängt und was in einer Offerte stehen sollte.',
  ],
  summary: {
    title: 'Kurz gesagt',
    items: [
      'Der Preis hängt vor allem von Fläche, Rhythmus, Nutzung und Einsatzzeiten ab.',
      'Eine belastbare Zahl gibt es erst nach einer Besichtigung.',
      'Vergleichen Sie Offerten nach Leistungsumfang und Betrag pro Monat, nicht nach dem Stundensatz allein.',
      'Wir kommen für die Besichtigung kostenlos und unverbindlich vorbei.',
    ],
  },
  sections: [
    {
      title: 'Die Kostenfaktoren',
      definitions: [
        { term: 'Fläche und Raumarten', text: 'Grösse, Bodenbeläge, Sanitärräume und Glasflächen bestimmen den Zeitaufwand.' },
        {
          term: 'Rhythmus',
          text: 'Bei häufiger Reinigung sinkt oft der Aufwand je Einsatz, dafür steigt die Zahl der Einsätze. Massgeblich ist der Betrag pro Monat in der Offerte.',
        },
        { term: 'Nutzung', text: 'Stark begangene Eingänge, Küchen und Sanitärräume brauchen mehr Zeit als wenig genutzte Räume.' },
        {
          term: 'Einsatzzeiten',
          text: 'Reinigung am Abend, in der Nacht oder am Wochenende kann Zuschläge auslösen. Fragen Sie, ob solche Zuschläge in der Offerte enthalten sind.',
        },
        {
          term: 'Zusatzleistungen',
          text: 'Verbrauchsmaterial, Fensterreinigung oder eine [Grundreinigung](/leistungen/sonderreinigungen) vor dem Start können separat aufgeführt sein.',
        },
      ],
    },
    {
      title: 'Warum wir keine Preise im Internet nennen',
      paragraphs: [
        'Zwei Objekte mit gleicher Fläche können sehr unterschiedlich viel Aufwand bedeuten, je nach Bodenbelag, Nutzung und Zugang. Ein Preis ohne Besichtigung wäre deshalb entweder zu hoch angesetzt oder würde später nicht stimmen. Wir nennen Preise erst in der Offerte, nachdem wir das Objekt gesehen haben.',
      ],
    },
    {
      title: 'Wie abgerechnet wird',
      paragraphs: [
        'Üblich sind Stundensätze, Pauschalen pro Monat oder Preise nach Fläche. Fragen Sie, wie abgerechnet wird und was jeweils enthalten ist. Nur dann lassen sich Offerten vergleichen.',
      ],
    },
    {
      title: 'Offerten vergleichen',
      paragraphs: ['Eine vergleichbare Offerte nennt mindestens:'],
      items: [
        'welche Räume und Tätigkeiten enthalten sind',
        'Rhythmus und Einsatzzeiten',
        'Verbrauchsmaterial und Reinigungsmittel',
        'allfällige Zuschläge und Nebenkosten wie die Anfahrt',
        'Laufzeit und Kündigungsfrist',
      ],
      note: 'Mehr dazu: [Worauf Sie bei der Wahl einer Reinigungsfirma achten sollten](/blog/richtige-reinigungsfirma-finden).',
    },
    {
      title: `So kommen Sie bei ${company.brand} zu Ihrer Offerte`,
      ordered: true,
      items: [
        `Sie rufen an oder schreiben uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.`,
        'Wir sehen uns das Objekt vor Ort an und klären Umfang, Rhythmus und Zeiten.',
        'Sie erhalten eine schriftliche Offerte, kostenlos und unverbindlich.',
      ],
      note: `Für die Anfahrt gelten in den ganzen Kantonen ${cantonList} dieselben Bedingungen.`,
    },
  ],
  cta: {
    title: 'Offerte für Ihr Objekt',
    text: 'Beschreiben Sie uns Objekt, Fläche und gewünschten Rhythmus. Wir kommen für die Besichtigung vorbei und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

/** Artikel in der Reihenfolge der Übersicht, neuester Stand zuerst */
export const artikel = [reinigungsfirmaFinden, kosten]

export const ratgeber = { reinigungsfirmaFinden, kosten }
