import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: R3b (fünf Sonderreinigungen), W01 und E28 (Umzugsreinigung nicht für Mieter), K07,
// 24-SEO-KEYWORDS (geschärft auf Grund- und Sonderreinigung, Endreinigung auf eigener Seite)
export const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Grund- und Sonderreinigung für Liegenschaften und Gewerbe',
  lead: [
    'Manche Verschmutzungen erreicht die laufende Reinigung nicht mehr: Kalk in Sanitärräumen, Fett in Küchen, Schmutz in Fugen und Ecken, alte Schichten auf Böden. Dann braucht es eine Grundreinigung, einmalig oder in grösseren Abständen.',
    'Wir übernehmen Grund- und Sonderreinigungen für Verwaltungen, Eigentümer und Unternehmen. Für die Endreinigung bei der Wohnungsabgabe gibt es die [Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung).',
  ],
  facts: [
    { label: 'Für', value: 'Verwaltungen, Eigentümer, Stockwerkeigentümerschaften und Unternehmen' },
    { label: 'Art', value: 'Einmalig oder in grösseren Abständen' },
    { label: 'Flächen', value: 'Wohn-, Büro- und Gewerbeflächen' },
  ],
  scope: {
    title: 'Unsere Grund- und Sonderreinigungen',
    items: [
      'Grundreinigung von Wohn-, Büro- und Gewerbeflächen',
      '[Umzugs- und Wohnungsendreinigung](/leistungen/umzugsreinigung) mit Abnahmegarantie',
      '[Bauendreinigung](/leistungen/baureinigung) nach Bau- und Umbauarbeiten',
      '[Fenster- und Glasreinigung](/leistungen/fenster-und-fassadenreinigung)',
      '[Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung), auch mit Hochdruck',
    ],
    notIncluded: [
      'Regelmässige Reinigung: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Umzugsreinigungen im Auftrag von Mieterinnen und Mietern einzelner Wohnungen.',
    ],
  },
  sections: [
    {
      title: 'Was eine Grundreinigung ausmacht',
      paragraphs: [
        'Eine Grundreinigung geht tiefer als die laufende Reinigung. Sie entfernt Verschmutzungen, die sich über längere Zeit festgesetzt haben: Kalk und Urinstein in Sanitärräumen, Fett in Küchen, Schmutz in Fugen, Ecken und auf Sockelleisten, Rückstände alter Pflegemittel auf Böden.',
        'Bei Böden hängt das Vorgehen vom Belag ab, etwa Naturstein, Plättli, Linoleum oder Parkett. Welche Methode und welche Mittel passen, klären wir bei der Besichtigung.',
      ],
    },
    {
      title: 'Typische Anlässe',
      paragraphs: [
        'Eine Grundreinigung lohnt sich immer dann, wenn eine Fläche neu beginnt oder lange stark genutzt wurde:',
      ],
      items: [
        'Vor der Neuvermietung von Büro- oder Gewerbeflächen',
        'Nach einer intensiven Nutzung oder einem längeren Leerstand',
        'Bevor eine [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) beginnt',
        'Wenn die laufende Reinigung festsitzende Verschmutzungen nicht mehr entfernt',
      ],
    },
    {
      title: 'Umzugs- und Wohnungsendreinigung',
      paragraphs: [
        'Für die Endreinigung bei der Übergabe einer Wohnung oder Geschäftsfläche gibt es eine eigene Seite mit allen Einzelheiten: [Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung). Wir bieten sie Verwaltungen, Eigentümern und Unternehmen an, bei Villen und Residenzen im [Premium-Bereich](/premium) auch Privatpersonen.',
      ],
    },
    {
      title: 'Planung und Rhythmus',
      paragraphs: [
        'Eine Grundreinigung braucht Zeit und möglichst freie Räume. In Büros und Gewerbeflächen lässt sie sich oft auf ein Wochenende, auf Betriebsferien oder auf die Zeit zwischen zwei Mietverhältnissen legen. In Liegenschaften mit Mieterschaft braucht es eine Ankündigung, weil etwa Treppenhaus oder Waschküche für kurze Zeit nicht nutzbar sind.',
        'Wie oft eine Grundreinigung sinnvoll ist, hängt von Nutzung und Belastung ab. Mit einer guten laufenden Reinigung wird sie seltener nötig.',
      ],
    },
    {
      title: 'Woran Sie eine gute Grundreinigung erkennen',
      items: [
        'Die Fugen sind wieder hell, nicht nur die Platten',
        'Armaturen und Plättli sind ohne Kalkränder',
        'Der Boden ist ohne Schlieren und klebrige Stellen',
        'Sockelleisten, Türen und Zargen sind mitgereinigt',
        'Empfindliche Oberflächen sind unbeschädigt, weil die Mittel zum Material passen',
      ],
    },
  ],
  steps: [
    {
      title: 'Termin',
      text: 'Wir legen den Einsatz auf den Termin, der zu Ihrer Nutzung oder zu Ihrem Betrieb passt.',
    },
    {
      title: 'Übergabe',
      text: 'Nach dem Einsatz übergeben wir die Räume. Soll danach regelmässig gereinigt werden, besprechen wir das gerne mit Ihnen.',
    },
  ],
  faq: [
    {
      question: 'Was ist eine Grundreinigung?',
      answer:
        'Ein einmaliger, gründlicher Einsatz, der auch Verschmutzungen entfernt, die sich über längere Zeit festgesetzt haben, etwa Kalk, Fett, Schmutz in Fugen oder alte Pflegeschichten auf Böden.',
    },
    {
      question: 'Wann lohnt sich eine Grundreinigung?',
      answer:
        'Etwa vor einer Neuvermietung, nach einer intensiven Nutzung oder wenn die laufende Reinigung festsitzende Verschmutzungen nicht mehr entfernt. Bei der Besichtigung sagen wir Ihnen, ob eine Grundreinigung nötig ist.',
    },
    {
      question: 'Was ist der Unterschied zur Unterhaltsreinigung?',
      answer:
        'Die Unterhaltsreinigung hält Flächen in einem festen Rhythmus sauber, die Grundreinigung ist ein einmaliger, gründlicher Einsatz. Beides lässt sich verbinden: zuerst eine Grundreinigung, danach die laufende [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
    },
    {
      question: 'Müssen die Räume für die Grundreinigung leer sein?',
      answer:
        'Nicht ganz, aber je freier die Flächen sind, desto gründlicher lässt sich reinigen. Was stehen bleibt und wer es verschiebt, klären wir bei der Besichtigung.',
    },
    {
      question: 'Übernehmen Sie auch Umzugsreinigungen?',
      answer:
        'Ja, mit Abnahmegarantie, für Verwaltungen, Eigentümer und Unternehmen. Alles Weitere steht unter [Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung).',
    },
    { question: 'Was kostet eine Grundreinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/umzugsreinigung', text: 'Für die Endreinigung vor der Übergabe einer Wohnung oder Geschäftsfläche, mit Abnahmegarantie.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn nach der Grundreinigung regelmässig gereinigt werden soll.' },
    { path: '/leistungen/baureinigung', text: 'Für die Reinigung während und nach Bau- und Umbauarbeiten.' },
  ],
  cta: {
    title: 'Offerte für Ihre Grundreinigung',
    text: 'Beschreiben Sie uns Objekt, Anlass und Termin. Wir sehen uns die Räume an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}
