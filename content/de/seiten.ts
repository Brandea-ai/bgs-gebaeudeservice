import { cantonList, company, listDe, premiumLabel, premiumLine } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Step } from '../types'
import { answers, steps } from './common'

/**
 * Texte der Startseite, von Über uns, Kontakt, Einzugsgebiet und den beiden
 * Übersichten (M39, M47, M49, M54). Regeln wie in content/types.ts: nur
 * Belegtes (E18), Schweizer Rechtschreibung, Kantone und Sprachen aus
 * shared/company.ts. Titel und Beschreibungen stehen in shared/seo.ts.
 */

type Card = { title: string; text: string }
type LinkCard = Card & { path: PagePath }

/** Belegte Kennzahlen (E18, Stand September 2026) */
export const proof = [
  { value: 'Seit 2006', label: 'Erfahrung in Reinigung und Hauswartung' },
  { value: 'Über 120', label: 'Kunden' },
  { value: 'Über 50', label: 'Mitarbeitende, vier Sprachen' },
  { value: 'CHF 10 Mio.', label: 'Betriebshaftpflicht' },
]

/** Ablauf bis zum ersten Einsatz, gleich auf Startseite und Kontakt */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Start',
    text: 'Mit Ihrer Zusage legen wir den ersten Einsatz fest und stimmen Zeiten und Zugang mit Ihnen ab.',
  },
]

export const home = {
  eyebrow: `Reinigung und Hauswartung aus ${company.address.city}`,
  h1: 'Gebäudereinigung und Hauswartung für Luzern, Zug und Umgebung',
  lead: 'Für Unternehmen, Verwaltungen und anspruchsvolle Privatkunden. Wir kommen für eine kostenlose und unverbindliche Offerte vorbei.',
  proofTitle: 'Auf einen Blick',
  services: {
    title: 'Unsere Leistungen',
    intro: 'Gebäudereinigung und Hauswartung für Unternehmen und Liegenschaften, dazu Reinigung für besondere Ansprüche.',
    // Kernleistungen zuerst, Premium als zweiter Einstieg (M39, Zielbild v2 in 03, Abschnitt 2a)
    groups: [
      {
        key: 'reinigung',
        title: 'Reinigung',
        text: 'Für Liegenschaften, Büros, Praxen und Gewerbe.',
        items: ['Unterhalts- und Büroreinigung', 'Sonder- und Baureinigung', 'Fenster und Fassaden', 'Industrie und Hallen'],
        link: { path: '/leistungen', text: 'Alle Leistungen' },
      },
      {
        key: 'hauswartung',
        title: 'Hauswartung und Pflege',
        text: 'Für Verwaltungen, Eigentümer und Unternehmen, die ihre Liegenschaft betreuen lassen.',
        items: ['Hauswartung', 'Aussen- und Grünflächenpflege', 'Facility Services'],
        link: { path: '/leistungen/hauswartung', text: 'Zur Hauswartung' },
      },
      {
        key: 'premium',
        title: premiumLabel,
        text: 'Reinigung für besondere Ansprüche, diskret und in Ihrer Sprache.',
        items: ['Villen, Lofts und Luxusimmobilien', 'Privatjets', 'Yachten'],
        link: { path: '/premium', text: 'Zum Premium-Bereich' },
      },
    ] satisfies (Card & { key: string; items: string[]; link: { path: PagePath; text: string } })[],
  },
  steps: { title: 'So kommen Sie zu Ihrer Offerte', items: offerSteps },
  area: {
    title: 'Unser Einzugsgebiet',
    text: `Von unserem Sitz in ${company.address.city} aus arbeiten wir in den Kantonen ${cantonList}. Alle Leistungen bieten wir im ganzen Gebiet an.`,
    link: 'Zum Einzugsgebiet',
  },
  cta: {
    title: 'Offerte für Ihr Objekt',
    text: `Beschreiben Sie uns kurz Objekt und Anliegen. Wir melden uns ${company.responseTime} und kommen für die Besichtigung vorbei.`,
  },
}

export const about = {
  h1: `Reinigung und Hauswartung aus ${company.address.city}`,
  imageAlt: 'Unser Team bei der Arbeit',
  lead: `Seit 2006 sind wir in der Reinigung und Hauswartung tätig. Heute betreuen über 50 Mitarbeitende mehr als 120 Kunden in den Kantonen ${cantonList}, auf ${listDe(company.languages)}.`,
  // Ersetzt «Unsere Werte» (M47): nur Zusagen, die belegt oder bestätigt sind (E18)
  promises: {
    title: 'Worauf Sie sich verlassen können',
    items: [
      { title: 'Persönlich', text: 'Ihre Anfrage bearbeitet der Geschäftsführer persönlich.' },
      { title: 'Offerte nach Besichtigung', text: 'Einen Preis nennen wir erst, wenn wir Ihr Objekt gesehen haben. Besichtigung und Offerte sind kostenlos und unverbindlich.' },
      { title: 'Im ganzen Gebiet', text: `Alle Leistungen in den Kantonen ${cantonList}, überall zu denselben Bedingungen.` },
      { title: 'Versichert', text: answers.versicherung.replace('Ja. ', '') },
      { title: 'Vier Sprachen', text: answers.sprachen },
      { title: 'Umweltfreundliche Mittel', text: 'Auf Wunsch reinigen wir mit umweltfreundlichen Mitteln.' },
    ] satisfies Card[],
  },
  contact: {
    title: 'Ihre Ansprechperson',
    text: `Ihre Anfrage bearbeitet der Geschäftsführer persönlich. Wir melden uns ${company.responseTime}.`,
  },
  register: { title: 'Registerdaten', court: company.register },
  cta: {
    title: 'Lernen wir uns kennen',
    text: 'Bei der Besichtigung sehen wir uns Ihr Objekt an und klären Umfang und Zeiten. Danach erhalten Sie eine schriftliche Offerte.',
  },
}

export const contact = {
  h1: 'Kontakt und Offerte',
  lead: `Rufen Sie uns an oder schreiben Sie uns. Wir melden uns ${company.responseTime}.`,
  formLink: 'Zum Kontaktformular',
  phone: { title: 'Telefon', text: 'Festnetz und Mobil', mobile: 'Mobil' },
  email: { title: 'E-Mail', text: 'Schreiben Sie uns eine Nachricht' },
  address: { title: 'Adresse', text: 'Unser Sitz' },
  steps: { title: 'Von der Anfrage bis zum ersten Einsatz', items: offerSteps },
  map: {
    title: 'So finden Sie uns',
    text: `Sitz in ${company.address.city}. Wir arbeiten in den Kantonen ${cantonList}.`,
  },
  faq: [
    {
      question: 'Wie schnell erhalte ich eine Offerte?',
      answer: `Wir melden uns ${company.responseTime} und vereinbaren einen Termin für die Besichtigung. Danach erhalten Sie die Offerte schriftlich.`,
    },
    { question: 'Was kostet die Reinigung?', answer: `${answers.kosten} Mehr dazu im Ratgeber: [Wovon die Kosten einer Unterhaltsreinigung abhängen](/blog/reinigungskosten-schweiz).` },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'Übernehmen Sie auch kurzfristige Einsätze?', answer: 'Rufen Sie uns an. Wir klären mit Ihnen, was kurzfristig möglich ist.' },
  ],
  cta: {
    title: 'Bereit für Ihre Offerte?',
    text: `Das Formular steht am Ende jeder Seite. Wir melden uns ${company.responseTime}.`,
  },
}

export const area = {
  h1: `Einzugsgebiet: ${cantonList}`,
  lead: `Wir arbeiten von unserem Sitz in ${company.address.city} aus in fünf Kantonen. Alle Leistungen bieten wir im ganzen Gebiet an, für Unternehmen ebenso wie für anspruchsvolle Privatkunden.`,
  cantonsTitle: 'Kantone',
  seatTitle: 'Sitz und Kontakt',
  places: {
    title: 'Seeufer und Ferienorte',
    text: 'Auch an den Seeufern und in den Ferienorten der Region sind wir für Sie da, etwa für Villen, Zweitwohnungen und Hotels. Für besondere Ansprüche gibt es unseren [Premium-Bereich](/premium).',
    // Orte aus 13, Abschnitt 3, alle im Gebiet. Nur als Text, keine eigenen Ortsseiten (M48, K09).
    groups: [
      { title: 'Am Vierwaldstättersee', items: ['Luzern', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'Am Zuger- und Ägerisee', items: ['Zug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'Am Sempacher- und Hallwilersee', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Region Baden und Mutschellen', items: ['Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
      { title: 'In den Bergen', items: ['Engelberg'] },
    ],
  },
  cta: {
    title: 'Liegt Ihr Objekt im Gebiet?',
    text: `Beschreiben Sie uns Objekt und Ort. Wir kommen für eine kostenlose und unverbindliche Offerte vorbei und melden uns ${company.responseTime}.`,
  },
}

export const servicesOverview = {
  h1: 'Leistungen: Reinigung und Hauswartung',
  lead: `Wählen Sie nach Anlass. Alle Leistungen bieten wir in den Kantonen ${cantonList} an. Für eine Offerte kommen wir kostenlos und unverbindlich vorbei.`,
  // Auswahlhilfe nach Anlass (Zielbild v2, 03 Abschnitt 2a), nur bestätigte Leistungen (R3a–R3c)
  groups: [
    {
      title: 'Laufende Reinigung',
      text: 'Für Liegenschaften, Büros und Gewerbeflächen in einem festen Rhythmus.',
      items: [
        { title: 'Unterhaltsreinigung', path: '/leistungen/unterhaltsreinigung', text: 'Regelmässige Reinigung von Liegenschaften und Gewerbeflächen, Nachfüllservice inklusive.' },
        { title: 'Büro- und Praxisreinigung', path: '/leistungen/bueroreinigung', text: 'Reinigung von Büros und Praxen, abgestimmt auf Ihre Arbeitszeiten.' },
      ],
    },
    {
      title: 'Einmalige und besondere Reinigung',
      text: 'Für Bau, Umzug, Glasflächen und Produktion.',
      items: [
        { title: 'Sonderreinigungen', path: '/leistungen/sonderreinigungen', text: 'Grundreinigung sowie Umzugs- und Wohnungsendreinigung mit Abnahmegarantie.' },
        { title: 'Bau- und Bauendreinigung', path: '/leistungen/baureinigung', text: 'Reinigung während und nach Bau- und Umbauarbeiten.' },
        { title: 'Fenster- und Fassadenreinigung', path: '/leistungen/fenster-und-fassadenreinigung', text: 'Fenster, Glasflächen und Fassaden, auch mit Hochdruck.' },
        { title: 'Industrie- und Hallenreinigung', path: '/leistungen/industrie-und-hallenreinigung', text: 'Produktions- und Lagerhallen, Maschinen und Anlagen.' },
      ],
    },
    {
      title: 'Betreuung von Liegenschaften',
      text: 'Für Verwaltungen, Eigentümer und Unternehmen, die alles aus einer Hand wollen.',
      items: [
        { title: 'Hauswartung', path: '/leistungen/hauswartung', text: 'Kontrollgänge, Treppenhaus, Waschküche, Kleinreparaturen, Haustechnik, Wohnungsübergaben, Entsorgung und Umgebung.' },
        { title: 'Aussen- und Grünflächenpflege', path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Pflege von Umgebung und Grünflächen Ihrer Liegenschaft.' },
        { title: 'Facility Services', path: '/leistungen/facility-services', text: 'Mehrere Leistungen in einem Vertrag mit einer Ansprechperson.' },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  premium: {
    title: 'Villen, Privatjets oder Yachten?',
    text: 'Für besondere Ansprüche gibt es unseren Premium-Bereich.',
    link: 'Zum Premium-Bereich',
  },
  cta: {
    title: 'Nicht sicher, was Sie brauchen?',
    text: `Beschreiben Sie uns Objekt und Anliegen. Wir kommen vorbei, klären den Umfang mit Ihnen und melden uns ${company.responseTime}.`,
  },
}

export const premiumOverview = {
  line: premiumLine,
  h1: 'Reinigung für besondere Ansprüche',
  lead: 'Für Villen und Residenzen, Zweitwohnungen, Hotels mit besonderen Wünschen, Family Offices, Privatjets und Yachten. Diskret, sorgfältig und in Ihrer Sprache.',
  // Bedeutung des Namens nur mit dem neuen Namen (E38)
  nameMeaning: company.premiumBrand
    ? `Der Name ${company.premiumBrand} kommt vom lateinischen «clavis», dem Schlüssel. Sie vertrauen uns Ihr Haus an, wir gehen damit um, als wäre es unser eigenes.`
    : null,
  // Nischen und Zusagen laut Runde 3 (NISCHEN, VORAUS, ORTE), keine Referenzen (R6f).
  // Deckung für Kunst und Wertgegenstände sowie Zutritt zum Flugfeld erst mit Beleg (M59).
  offers: [
    { title: 'Luxusimmobilien', path: '/premium/luxusimmobilien', text: 'Villen, Lofts und Residenzen, regelmässig oder vor besonderen Anlässen, mit Pflege empfindlicher Materialien.' },
    { title: 'Privatjet', path: '/premium/privatjet', text: 'Kabinenreinigung mit Rücksicht auf hochwertige Materialien, nach Absprache mit Ihnen.' },
    { title: 'Yacht', path: '/premium/yacht', text: 'Reinigung von Booten und Yachten am Vierwaldstättersee und am Zugersee.' },
  ] satisfies LinkCard[],
  moreTitle: 'Ausserdem für',
  more: [
    { title: 'Zweitwohnungen und Residences', text: 'Reinigung vor Ihrer Ankunft und nach Ihrer Abreise, Kontrollgänge während Ihrer Abwesenheit.' },
    { title: 'Hotels', text: 'Spezial- und Grundreinigungen, Einsätze vor Eröffnungen und nach Renovationen.' },
    { title: 'Büros und Family Offices', text: 'Vertraulich, ausserhalb Ihrer Arbeitszeiten, mit festen Teams.' },
    { title: 'Räume mit Kunst und Antiquitäten', text: 'Sorgfältige Reinigung der Räume, Kunstwerke nur nach Ihrer Freigabe.' },
    { title: 'Privatanlässe', text: 'Reinigung vor und nach dem Anlass, auch am Wochenende.' },
    { title: 'Makler und Verwaltungen', text: 'Kurzfristige Reinigung vor Verkauf, Fototermin und Übergabe.' },
  ] satisfies Card[],
  promisesTitle: 'Worauf Sie sich verlassen können',
  // Reihenfolge wie die Symbole in app/premium/page.tsx
  promises: [
    { key: 'persoenlich', title: 'Persönlich', text: 'Ihre Anfrage bearbeitet der Geschäftsführer persönlich.' },
    { key: 'diskret', title: 'Diskret', text: 'Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung.' },
    { key: 'teams', title: 'Feste Teams', text: 'Bei Ihnen arbeitet immer dasselbe Team.' },
    { key: 'personal', title: 'Überprüftes Personal', text: 'Wer bei Ihnen arbeitet, ist von uns überprüft.' },
    { key: 'schluessel', title: 'Schlüssel und Alarm', text: 'Nach festen Regeln, die wir mit Ihnen vereinbaren.' },
    { key: 'zeiten', title: 'Zu Ihren Zeiten', text: 'Auch abends, am Wochenende und während Ihrer Abwesenheit.' },
    { key: 'material', title: 'Materialkenntnis', text: 'Naturstein, Parkett und Hochglanzflächen, bei Booten Teak, Gelcoat und Polster.' },
    { key: 'sprachen', title: 'Vier Sprachen', text: `${listDe(company.languages)}.` },
    { key: 'versichert', title: 'Versichert', text: 'Betriebshaftpflicht mit CHF 10 Mio. Deckung.' },
    { key: 'offerte', title: 'Offerte vor Ort', text: 'Kostenlos und unverbindlich, nach einer Besichtigung.' },
  ] as const,
  places: {
    title: 'Wo wir für Sie da sind',
    text: `Am Vierwaldstättersee von Luzern und Meggen bis Weggis, Vitznau, Hergiswil und Ennetbürgen, am Zuger- und Ägerisee von Zug und Walchwil bis Oberägeri, in Engelberg und in den ganzen Kantonen ${cantonList}. [Zum Einzugsgebiet](/einzugsgebiet)`,
  },
  cta: {
    title: 'Diskret anfragen',
    text: `Rufen Sie uns an oder schreiben Sie uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, auf Wunsch unter Geheimhaltung. Wir melden uns ${company.responseTime}.`,
  },
}
