import { company } from '../../shared/company'
import type { ServicePageContent, Step } from '../types'
import { answers } from './common'

/**
 * Texte der drei Premium-Seiten unter /premium (M29, M57). Grundlage sind die
 * Angebote und Zusagen der Premium-Linie aus Runde 3 (E40, E41), wie sie auf
 * /premium stehen. Die drei zurückgestellten Zusagen bleiben weg (E52): keine
 * Deckung für Kunst und Wertgegenstände, kein Zutritt zu einem Flugfeld, keine
 * Prüfmethode für das Personal. Keine Referenzen, Zahlen oder Preise (E18).
 */

const anfrage: Step = {
  title: 'Diskrete Anfrage',
  text: `Rufen Sie uns an oder schreiben Sie uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.`,
}

const team: Step = {
  title: 'Ihr Team',
  text: 'Bei Ihnen arbeitet immer dasselbe Team. Wer bei Ihnen arbeitet, ist von uns überprüft.',
}

const cta = {
  title: 'Diskret anfragen',
  text: `Rufen Sie uns an oder schreiben Sie uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.`,
}

// Grundlage: /premium (Luxusimmobilien, Zweitwohnungen, Räume mit Kunst, Privatanlässe), E40, E41, K06
const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Reinigung und Pflege von Villen und Residenzen',
  lead: [
    'In einem Haus mit Naturstein, Parkett und Hochglanzflächen zählt jedes Detail, und ebenso das Vertrauen in die Menschen, die dort arbeiten. Wir reinigen Villen, Lofts und Residenzen regelmässig oder vor besonderen Anlässen, mit Rücksicht auf empfindliche Materialien.',
    'Bei Ihnen arbeitet immer dasselbe Team, zu Zeiten, die zu Ihnen passen: auch abends, am Wochenende oder während Ihrer Abwesenheit.',
  ],
  facts: [
    { label: 'Für', value: 'Villen, Lofts, Residenzen und Zweitwohnungen' },
    { label: 'Rhythmus', value: 'Regelmässig oder vor besonderen Anlässen' },
    { label: 'Team', value: 'Immer dasselbe Team' },
    { label: 'Diskretion', value: 'Auf Wunsch mit Geheimhaltungsvereinbarung' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den Umfang legen wir nach einem Rundgang durch Ihr Haus fest. Typisch sind:',
    items: [
      'Wohn-, Schlaf- und Gästeräume',
      'Küchen und Bäder',
      'Naturstein, Parkett und Hochglanzflächen, materialgerecht gereinigt',
      'Glasflächen und Spiegel',
      'Reinigung vor Ihrer Ankunft und nach Ihrer Abreise',
      'Kontrollgänge während Ihrer Abwesenheit',
      'Reinigung vor und nach Anlässen, auch am Wochenende',
      'Räume mit Kunst und Antiquitäten, Kunstwerke nur nach Ihrer Freigabe',
      'Für Makler und Verwaltungen: kurzfristig vor Verkauf, Fototermin oder Übergabe',
    ],
    notIncluded: ['Restaurierung von Kunstwerken und Antiquitäten.'],
  },
  sections: [
    {
      title: 'Schlüssel, Alarm und Diskretion',
      paragraphs: [
        'Für Schlüssel und Alarmanlage vereinbaren wir mit Ihnen feste Regeln. Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung.',
        'Ihre Anfrage bearbeitet der Geschäftsführer persönlich. Wer bei Ihnen arbeitet, ist von uns überprüft.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Rundgang und Offerte',
      text: 'Wir sehen uns Ihr Haus an und klären Materialien, Zeiten und Zugang. Danach erhalten Sie eine Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Feste Regeln',
      text: 'Wir vereinbaren Zeiten, Schlüsselübergabe und den Umgang mit der Alarmanlage, auf Wunsch mit Geheimhaltungsvereinbarung.',
    },
    team,
  ],
  faq: [
    {
      question: 'Arbeitet bei uns immer dasselbe Team?',
      answer: 'Ja. Bei Ihnen arbeitet immer dasselbe Team, das Ihr Haus und Ihre Wünsche kennt.',
    },
    {
      question: 'Wie gehen Sie mit Kunstwerken und Antiquitäten um?',
      answer: 'Die Räume reinigen wir sorgfältig. Kunstwerke selbst reinigen wir nur, wenn Sie es ausdrücklich freigeben.',
    },
    {
      question: 'Können Sie reinigen, während wir abwesend sind?',
      answer: 'Ja, auch während Ihrer Abwesenheit, abends oder am Wochenende. Für Schlüssel und Alarm vereinbaren wir feste Regeln.',
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'In welchen Sprachen können wir uns verständigen?', answer: answers.sprachen },
    { question: 'Was kostet die Reinigung?', answer: answers.kosten },
    { question: 'Wo sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/premium/yacht', text: 'Für Yachten und Motorboote am Vierwaldstättersee und am Zugersee.' },
    { path: '/premium/privatjet', text: 'Für die Kabine Ihres Privatjets.' },
    { path: '/premium', text: 'Alle Angebote und Zusagen unserer Premium-Linie.' },
  ],
  cta,
}

// Grundlage: /premium («Kabinenreinigung mit Rücksicht auf hochwertige Materialien, nach Absprache»), E41, E52 (kein Flugfeld)
const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Kabinenreinigung für Privatjets',
  lead: [
    'In der Kabine eines Privatjets treffen Leder, Holz, Hochglanzflächen und feine Textilien auf engem Raum zusammen. Die Reinigung braucht Sorgfalt, Diskretion und eine Planung, die zu Ihren Flügen passt.',
    'Wir reinigen die Kabine nach Absprache mit Ihnen und Ihrem Flugbetrieb, mit Rücksicht auf hochwertige Materialien.',
  ],
  facts: [
    { label: 'Für', value: 'Eigentümer und Betreiber von Privatjets' },
    { label: 'Umfang', value: 'Reinigung der Kabine' },
    { label: 'Termine', value: 'Nach Absprache, passend zu Ihrem Flugplan' },
    { label: 'Diskretion', value: 'Auf Wunsch mit Geheimhaltungsvereinbarung' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den Umfang legen wir vorab mit Ihnen fest. Typisch sind:',
    items: [
      'Sitze und Polster aus Leder und Stoff',
      'Teppiche und Böden',
      'Holz- und Hochglanzflächen',
      'Fenster, Spiegel und Glas in der Kabine',
      'Bordküche und Waschraum',
    ],
  },
  sections: [
    {
      title: 'Planung rund um Ihre Flüge',
      paragraphs: [
        'Wo und wann wir die Kabine reinigen, stimmen wir mit Ihnen und Ihrem Flugbetrieb ab. So passt der Einsatz in Ihren Flugplan.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Besichtigung und Offerte',
      text: 'Wir sehen uns die Kabine an und klären Materialien, Standort und Zeitfenster mit Ihnen und Ihrem Flugbetrieb. Danach erhalten Sie eine Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Reinigung',
      text: 'Wir reinigen die Kabine zum vereinbarten Zeitpunkt.',
    },
    team,
  ],
  faq: [
    {
      question: 'Wie planen Sie die Reinigung rund um unsere Flüge?',
      answer: 'Den Zeitpunkt stimmen wir mit Ihnen und Ihrem Flugbetrieb ab, damit die Kabine vor dem nächsten Flug bereit ist.',
    },
    {
      question: 'Wie gehen Sie mit Leder und Holz um?',
      answer: 'Wir reinigen mit Rücksicht auf die Materialien und klären vorab, welche Mittel für Ihre Kabine geeignet sind.',
    },
    {
      question: 'Wer arbeitet in unserer Kabine?',
      answer:
        'Immer dasselbe Team. Wer bei Ihnen arbeitet, ist von uns überprüft. Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung.',
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'In welchen Sprachen können wir uns verständigen?', answer: answers.sprachen },
    { question: 'Was kostet die Reinigung?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Für Villen, Residenzen und Zweitwohnungen.' },
    { path: '/premium/yacht', text: 'Für Yachten und Motorboote am Vierwaldstättersee und am Zugersee.' },
    { path: '/premium', text: 'Alle Angebote und Zusagen unserer Premium-Linie.' },
  ],
  cta,
}

// Grundlage: /premium (Vierwaldstättersee, Zugersee; Teak, Gelcoat und Polster), E41, E42
const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Reinigung von Yachten und Motorbooten',
  lead: [
    'Ein Boot am See ist Wind, Wetter, Blütenstaub und Vogelkot ausgesetzt, im Innenraum setzen sich Feuchtigkeit und Staub fest. Wir reinigen Ihr Boot innen und aussen, am Vierwaldstättersee und am Zugersee.',
    'Teak, Gelcoat und Polster brauchen jeweils ihre eigene Behandlung. Welche Mittel wir für Ihr Boot verwenden, klären wir vorab mit Ihnen.',
  ],
  facts: [
    { label: 'Für', value: 'Eigentümer von Yachten und Motorbooten' },
    { label: 'Gebiet', value: 'Am Vierwaldstättersee und am Zugersee' },
    { label: 'Materialien', value: 'Teak, Gelcoat und Polster' },
    { label: 'Termine', value: 'Nach Absprache, einmalig oder regelmässig' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den Umfang legen wir nach einer Besichtigung am Liegeplatz fest. Typisch sind:',
    items: [
      'Deck und Teakflächen',
      'Gelcoat-Oberflächen an Deck und Aufbauten',
      'Polster und Textilien',
      'Salon, Kabinen und Pantry',
      'Nasszellen',
      'Fenster und Glas',
    ],
    notIncluded: ['Arbeiten am Unterwasserschiff, etwa Antifouling.', 'Technische Wartung von Motor und Bordtechnik.'],
  },
  steps: [
    anfrage,
    {
      title: 'Besichtigung am Liegeplatz',
      text: 'Wir sehen uns das Boot an und klären Materialien und Zugang zum Liegeplatz. Danach erhalten Sie eine Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Termine',
      text: 'Wir reinigen zu den Terminen, die wir mit Ihnen vereinbaren, einmalig oder regelmässig.',
    },
    team,
  ],
  faq: [
    {
      question: 'Wo reinigen Sie Boote?',
      answer: 'Am Liegeplatz, am Vierwaldstättersee und am Zugersee. Den Zugang zu Steg oder Hafen klären wir vorab mit Ihnen.',
    },
    {
      question: 'Welche Materialien reinigen Sie?',
      answer: 'Teak, Gelcoat und Polster sowie den Innenraum. Welche Mittel wir für Ihr Boot verwenden, klären wir bei der Besichtigung.',
    },
    { question: 'Können Sie mit umweltfreundlichen Mitteln reinigen?', answer: answers.mittel },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'Was kostet die Reinigung?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Für Villen, Residenzen und Zweitwohnungen am See.' },
    { path: '/premium/privatjet', text: 'Für die Kabine Ihres Privatjets.' },
    { path: '/premium', text: 'Alle Angebote und Zusagen unserer Premium-Linie.' },
  ],
  cta,
}

export const premium = { luxusimmobilien, privatjet, yacht }
