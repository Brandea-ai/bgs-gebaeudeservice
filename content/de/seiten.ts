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
type PromiseKey =
  | 'persoenlich'
  | 'diskret'
  | 'teams'
  | 'personal'
  | 'schluessel'
  | 'zeiten'
  | 'material'
  | 'sprachen'
  | 'versichert'
  | 'offerte'
type LinkCard = Card & { path: PagePath }
type AudienceKey = 'verwaltungen' | 'unternehmen' | 'privat' | 'premium'
type PromiseItemKey = 'persoenlich' | 'offerte' | 'gebiet' | 'versichert' | 'sprachen' | 'umwelt'
type ValueKey = 'ehrlich' | 'klar' | 'nachbessern' | 'versichert' | 'diskret' | 'umwelt'
type BriefKey = 'objekt' | 'ort' | 'groesse' | 'leistung' | 'rhythmus' | 'start' | 'zugang'
// Schlüssel wählen Symbol und Bild in der Darstellung; die Übersetzungen tragen dieselben Schlüssel
type Audience = Card & { key: AudienceKey; points: string[]; link: { path: PagePath; text: string } }
type KeyedCard<K> = Card & { key: K }

/** Belegte Kennzahlen (E18, Stand September 2026) */
export const proof = [
  { value: 'Seit 2006', label: 'Erfahrung in Reinigung und Hauswartung' },
  { value: 'Über 120', label: 'Kunden' },
  { value: 'Über 50', label: 'Mitarbeitende, vier Sprachen' },
  { value: 'CHF 10 Mio.', label: 'Betriebshaftpflicht' },
]

/**
 * Ablauf bis zum ersten Einsatz, gleich auf Startseite und Kontakt. Vier Schritte
 * wie auf den Leistungsseiten, damit jeder Schritt sein Video hat (E80).
 */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Vereinbarung',
    text: 'Sie prüfen die Offerte in Ruhe. Mit Ihrer Zusage steht fest, welche Leistungen wir wie oft und zu welchen Zeiten erbringen.',
  },
  {
    title: 'Start',
    text: 'Wir legen den ersten Einsatz fest und stimmen Zeiten und Zugang mit Ihnen ab, etwa mit Schlüssel oder Badge.',
  },
]

/** Fragen, die auf Startseite und Kontakt gleich lauten (E18) */
const faq = {
  schnell: {
    question: 'Wie schnell erhalte ich eine Offerte?',
    answer: `Wir melden uns ${company.responseTime} und vereinbaren einen Termin für die Besichtigung. Danach erhalten Sie die Offerte schriftlich.`,
  },
  kosten: {
    question: 'Was kostet die Reinigung?',
    answer: `${answers.kosten} Mehr dazu im Ratgeber: [Wovon die Kosten einer Unterhaltsreinigung abhängen](/blog/reinigungskosten-schweiz).`,
  },
  gebiet: { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  versichert: { question: 'Sind Sie versichert?', answer: answers.versicherung },
  kurzfristig: {
    question: 'Übernehmen Sie auch kurzfristige Einsätze?',
    answer: 'Rufen Sie uns an. Wir klären mit Ihnen, was kurzfristig möglich ist.',
  },
}

export const home = {
  eyebrow: `Reinigung und Hauswartung aus ${company.address.city}`,
  h1: 'Gebäudereinigung und Hauswartung für Luzern, Zug und Umgebung',
  lead: 'Saubere und gepflegte Liegenschaften, Büros und Hallen, ohne dass Sie sich selbst darum kümmern müssen. Für Unternehmen, Verwaltungen und anspruchsvolle Privatkunden. Wir sehen uns Ihr Objekt an und erstellen eine schriftliche Offerte.',
  proofTitle: 'Auf einen Blick',
  // Karten je Leistung mit Bild; Gruppen und Kartentexte kommen aus servicesOverview (eine Quelle)
  services: {
    title: 'Unsere Leistungen',
    intro: 'Laufende Reinigung, einmalige Einsätze und die Betreuung ganzer Liegenschaften. Wählen Sie nach Anlass, den Umfang klären wir bei der Besichtigung.',
    all: 'Alle Leistungen im Überblick',
    premium: {
      title: premiumLabel,
      text: 'Reinigung für besondere Ansprüche, diskret und in Ihrer Sprache: Villen, Lofts und Residenzen, Privatjets und Yachten, dazu Hotels und Family Offices.',
      link: 'Zum Premium-Bereich',
    },
  },
  // Für wen (E28, E34): Nutzen nur aus bestätigten Leistungstexten, Privatkunden nur im Premium-Segment
  audiences: {
    title: 'Für wen wir arbeiten',
    intro: 'Vier Kundengruppen mit verschiedenen Anliegen. Das haben Sie konkret davon.',
    items: [
      {
        key: 'verwaltungen',
        title: 'Verwaltungen und Stockwerkeigentümer',
        text: 'Sie betreuen Liegenschaften und brauchen jemanden, der vor Ort nach dem Rechten sieht.',
        points: [
          'Treppenhaus, Eingang und Umgebung in einem festen Rhythmus gepflegt',
          'Kontrollgänge, bei denen wir Ihnen Mängel melden',
          'Umzugsreinigung mit Abnahmegarantie beim Wohnungswechsel',
        ],
        link: { path: '/leistungen/hauswartung', text: 'Zur Hauswartung' },
      },
      {
        key: 'unternehmen',
        title: 'Unternehmen',
        text: 'Büros, Praxen, Gewerbe und Produktion bleiben sauber, ohne dass die Reinigung den Betrieb stört.',
        points: [
          'Einsatzzeiten passend zu Ihren Arbeits- und Öffnungszeiten',
          'Nachfüllservice für Verbrauchsmaterial',
          'Reinigung, Hauswartung und Umgebung auf Wunsch in einem Vertrag',
        ],
        link: { path: '/leistungen/bueroreinigung', text: 'Zur Büroreinigung' },
      },
      {
        key: 'privat',
        title: 'Private Eigentümer',
        text: 'Für Villen, Lofts, Residenzen und Zweitwohnungen. Normale Privathaushalte übernehmen wir nicht.',
        points: [
          'Bei Ihnen arbeitet immer dasselbe Team',
          'Naturstein, Parkett und Hochglanzflächen, materialgerecht gereinigt',
          'Schlüssel und Alarm nach Regeln, die wir mit Ihnen vereinbaren',
        ],
        link: { path: '/premium/luxusimmobilien', text: 'Zu den Luxusimmobilien' },
      },
      {
        key: 'premium',
        title: 'Privatjets, Yachten und Hotels',
        text: 'Für Kabinen, Decks und Räume mit hochwertigen Materialien, die besondere Sorgfalt brauchen.',
        points: [
          'Auf Wunsch mit Geheimhaltungsvereinbarung',
          'Auch abends, am Wochenende und während Ihrer Abwesenheit',
          'In Hotels Einsätze vor Eröffnungen und nach Renovationen',
        ],
        link: { path: '/premium', text: 'Zum Premium-Bereich' },
      },
    ] satisfies Audience[] as Audience[],
  },
  steps: {
    title: 'So kommen Sie zu Ihrer Offerte',
    intro: 'Vom ersten Anruf bis zum ersten Einsatz. Besichtigung und Offerte sind kostenlos und unverbindlich.',
    items: offerSteps,
  },
  area: {
    title: 'Unser Einzugsgebiet',
    text: `Von unserem Sitz in ${company.address.city} aus arbeiten wir in den Kantonen ${cantonList}. Alle Leistungen bieten wir im ganzen Gebiet an, überall zu denselben Bedingungen.`,
    link: 'Zum Einzugsgebiet',
  },
  faq: [
    faq.kosten,
    faq.schnell,
    {
      question: 'Brauche ich eine Unterhaltsreinigung oder eine Hauswartung?',
      answer:
        'Die Unterhaltsreinigung reinigt in einem festen Rhythmus. Die Hauswartung geht weiter: Kontrollgänge, Kleinreparaturen, Haustechnik, Entsorgung, Wohnungsübergaben und Umgebungspflege. Wer nur Reinigung braucht, ist mit der [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) richtig.',
    },
    {
      question: 'Reinigen Sie auch Privathaushalte?',
      answer: 'Normale Privathaushalte nicht. Für Villen, Lofts, Residenzen und Zweitwohnungen gibt es unseren [Premium-Bereich](/premium).',
    },
    faq.kurzfristig,
    { question: 'Reinigen Sie mit umweltfreundlichen Mitteln?', answer: answers.mittel },
  ],
  cta: {
    title: 'Offerte für Ihr Objekt',
    text: `Beschreiben Sie uns kurz Objekt und Anliegen. Wir melden uns ${company.responseTime} und kommen für die Besichtigung vorbei.`,
  },
}

export const about = {
  h1: `Reinigung und Hauswartung aus ${company.address.city}, seit 2006`,
  lead: `Seit 2006 sind wir in der Reinigung und Hauswartung tätig. Heute betreuen über 50 Mitarbeitende mehr als 120 Kunden in den Kantonen ${cantonList}, auf ${listDe(company.languages)}.`,
  // Zusagen mit Schlüssel für das Symbol (E18, M47). Die Startseite zeigt sie.
  promises: {
    title: 'Worauf Sie sich verlassen können',
    items: [
      { key: 'persoenlich', title: 'Persönlich', text: 'Ihre Anfrage bearbeitet der Geschäftsführer persönlich.' },
      { key: 'offerte', title: 'Offerte nach Besichtigung', text: 'Einen Preis nennen wir erst, wenn wir Ihr Objekt gesehen haben. Besichtigung und Offerte sind kostenlos und unverbindlich.' },
      { key: 'gebiet', title: 'Im ganzen Gebiet', text: `Alle Leistungen in den Kantonen ${cantonList}, überall zu denselben Bedingungen.` },
      { key: 'versichert', title: 'Versichert', text: answers.versicherung.replace('Ja. ', '') },
      { key: 'sprachen', title: 'Vier Sprachen', text: answers.sprachen },
      { key: 'umwelt', title: 'Umweltfreundliche Mittel', text: 'Auf Wunsch reinigen wir mit umweltfreundlichen Mitteln.' },
    ] satisfies KeyedCard<PromiseItemKey>[] as KeyedCard<PromiseItemKey>[],
  },
  // Arbeitsweise (E80): nur, was auf den Leistungsseiten bestätigt steht (E18, E56)
  work: {
    title: 'So arbeiten wir',
    intro: 'Vier Grundsätze, die bei jedem Auftrag gelten, von der Büroreinigung bis zur Hauswartung.',
    items: [
      {
        title: 'Erst ansehen, dann offerieren',
        paragraphs: [
          'Bodenbeläge, Glasflächen, Nutzung und Zugang bestimmen den Aufwand. Darum sehen wir uns Ihr Objekt zuerst vor Ort an und klären mit Ihnen Umfang, Rhythmus und Zeiten.',
          'Einen Preis nennen wir erst danach, schriftlich in der Offerte, kostenlos und unverbindlich.',
        ],
      },
      {
        title: 'Klar vereinbart',
        paragraphs: [
          'Mit Ihrer Zusage steht fest, welche Räume und Aufgaben dazugehören, wie oft wir kommen und zu welchen Zeiten. Den Zugang regeln wir vorher, etwa mit Schlüssel oder Badge.',
          'Was nicht dazugehört, sagen wir offen und nennen die passende Leistung.',
        ],
      },
      {
        title: 'Kurze Wege',
        paragraphs: [
          `Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.`,
          'Wer mehrere Leistungen braucht, bündelt sie als [Facility Services](/leistungen/facility-services) in einem Vertrag, mit einer Ansprechperson für alles.',
        ],
      },
      {
        title: 'Material und Mittel',
        paragraphs: [
          'Bei der Unterhaltsreinigung füllen wir Verbrauchsmaterial wie Papier und Seife nach. Auf Wunsch reinigen wir mit umweltfreundlichen Mitteln.',
          'Naturstein, Parkett und Hochglanzflächen reinigen wir materialgerecht, mit Rücksicht auf empfindliche Oberflächen.',
        ],
      },
    ] satisfies { title: string; paragraphs: string[] }[],
  },
  // Geschichte: nur belegte Eckdaten (E18, E58), keine erfundene Gründungsgeschichte
  history: {
    title: 'Seit 2006 in der Region',
    items: [
      { label: '2006', title: 'Der Anfang', text: 'Seit 2006 sind wir in der Reinigung und Hauswartung tätig.' },
      {
        label: 'Heute',
        title: 'Über 50 Mitarbeitende, über 120 Kunden',
        text: 'Stand September 2026. Wir arbeiten für Unternehmen, Verwaltungen, Eigentümer und Privatkunden mit besonderen Ansprüchen.',
      },
      {
        label: 'Sitz',
        title: company.address.city,
        text: `Die ${company.legalName} ist im ${company.register} eingetragen.`,
      },
    ],
  },
  languages: {
    title: 'Vier Sprachen',
    text: `Unsere Mitarbeitenden sprechen ${listDe(company.languages)}. Das erleichtert Absprachen mit internationalen Teams, mit Mieterinnen und Mietern und mit Kundinnen und Kunden, die lieber in ihrer Sprache sprechen. Diese Website gibt es in denselben vier Sprachen.`,
  },
  region: {
    title: 'Fünf Kantone, gleiche Bedingungen',
    text: `Von ${company.address.city} aus arbeiten wir in den Kantonen ${cantonList}. Alle Leistungen bieten wir im ganzen Gebiet an, und für die Anfahrt gelten überall dieselben Bedingungen.`,
    link: 'Zum Einzugsgebiet',
  },
  // Werte als Handlungen (E80): jede Zeile sagt, was wir tun, nicht was wir sind
  values: {
    title: 'Unsere Werte im Alltag',
    intro: 'Werte zeigen sich in dem, was man tut. Darum steht hier, was wir konkret machen.',
    items: [
      { key: 'ehrlich', title: 'Ehrlich beim Preis', text: 'Preise nennen wir erst in der schriftlichen Offerte, nachdem wir das Objekt gesehen haben. Ein Preis ohne Besichtigung würde später oft nicht stimmen.' },
      { key: 'klar', title: 'Klar im Umfang', text: 'Auf jeder Leistungsseite steht auch, was nicht dazugehört, mit einem Verweis auf die passende Leistung.' },
      { key: 'nachbessern', title: 'Wir stehen dafür ein', text: 'Beanstandet die Verwaltung nach einer Umzugsreinigung etwas an unserer Arbeit, reinigen wir kostenlos nach. Die Einzelheiten stehen in der Offerte.' },
      { key: 'versichert', title: 'Verantwortung', text: 'Für Schäden bei der Arbeit haben wir eine Betriebshaftpflichtversicherung mit einer Deckung von CHF 10 Mio.' },
      { key: 'diskret', title: 'Diskret', text: 'Im Premium-Bereich unterzeichnen wir auf Wunsch eine Geheimhaltungsvereinbarung. Schlüssel und Alarm handhaben wir nach festen Regeln.' },
      { key: 'umwelt', title: 'Rücksicht auf die Umwelt', text: 'Auf Wunsch reinigen wir mit umweltfreundlichen Mitteln. Sagen Sie es uns bei der Besichtigung.' },
    ] satisfies KeyedCard<ValueKey>[] as KeyedCard<ValueKey>[],
  },
  contact: {
    title: 'Ihre Ansprechperson',
    text: `Ihre Anfrage geht direkt an den Geschäftsführer. Er meldet sich ${company.responseTime}.`,
  },
  register: { title: 'Registerdaten', court: company.register as string, uid: 'UID' },
  statsLabel: 'In Zahlen',
  faq: [faq.kosten, faq.gebiet, faq.kurzfristig],
  cta: {
    title: 'Besichtigung vereinbaren',
    text: 'Bei der Besichtigung sehen wir uns Ihr Objekt an und klären Umfang und Zeiten. Danach erhalten Sie eine schriftliche Offerte.',
  },
}

export const contact = {
  h1: 'Kontakt und Offerte',
  lead: `Rufen Sie uns an oder schreiben Sie uns. Wir melden uns ${company.responseTime}.`,
  // Kontaktwege als Karten (E80): Hinweis, wofür sich der Weg eignet, und eine Aktion
  channels: {
    title: 'So erreichen Sie uns',
    phone: { title: 'Telefon', hint: 'Für Fragen und um einen Termin für die Besichtigung zu vereinbaren.', action: 'Anrufen' },
    mobile: { title: 'Mobil', hint: 'Unsere Mobilnummer, zusätzlich zum Festnetz.', action: 'Anrufen' },
    email: { title: 'E-Mail', hint: 'Für Anfragen mit Unterlagen, etwa Grundrissen, Flächenlisten oder Fotos.', action: 'E-Mail schreiben' },
    form: { title: 'Formular', value: 'Offerte anfragen', hint: 'Die wichtigsten Angaben in wenigen Feldern, die Leistung wählen Sie aus einer Liste.', action: 'Zum Formular' },
    address: { title: 'Adresse', hint: 'Unser Sitz. Die Besichtigung findet bei Ihnen vor Ort statt.', action: 'Zur Karte' },
  },
  // Was die Anfrage enthalten sollte: dieselben Punkte, nach denen das Formular fragt
  brief: {
    title: 'Was Ihre Anfrage enthalten sollte',
    intro: 'Je genauer Ihre Angaben, desto gezielter bereiten wir die Besichtigung vor. Fehlt etwas, klären wir es im Gespräch.',
    items: [
      { key: 'objekt', title: 'Objekt', text: 'Art des Objekts, zum Beispiel Büro, Praxis, Mehrfamilienhaus, Halle oder Villa.' },
      { key: 'ort', title: 'Ort', text: 'Adresse oder Postleitzahl des Objekts.' },
      { key: 'groesse', title: 'Grösse', text: 'Ungefähre Fläche, Anzahl Räume, Wohnungen oder Stockwerke.' },
      { key: 'leistung', title: 'Leistung', text: 'Was gemacht werden soll, etwa Unterhaltsreinigung, Hauswartung oder eine einmalige Reinigung.' },
      { key: 'rhythmus', title: 'Rhythmus und Zeiten', text: 'Wie oft und wann, zum Beispiel vor Arbeitsbeginn, abends oder am Wochenende.' },
      { key: 'start', title: 'Start', text: 'Ab wann Sie die Leistung brauchen, bei Bau- und Umzugsreinigungen den Übergabetermin.' },
      { key: 'zugang', title: 'Zugang und Besonderheiten', text: 'Schlüssel oder Badge, empfindliche Böden und Materialien, grosse Glasflächen.' },
    ] satisfies KeyedCard<BriefKey>[] as KeyedCard<BriefKey>[],
    note: 'Grundrisse, Flächenlisten oder Fotos können Sie uns per E-Mail schicken.',
  },
  steps: { title: 'Von der Anfrage bis zum ersten Einsatz', items: offerSteps },
  map: {
    title: 'So finden Sie uns',
    text: `Sitz in ${company.address.city}. Wir arbeiten in den Kantonen ${cantonList}.`,
  },
  faq: [faq.schnell, faq.kosten, faq.gebiet, faq.versichert, faq.kurzfristig],
  cta: {
    title: 'Beschreiben Sie uns Ihr Objekt',
    text: `Objekt und Anliegen im Formular gleich unten genügen. Wir melden uns ${company.responseTime} und vereinbaren die Besichtigung.`,
  },
}

export const area = {
  h1: 'Einzugsgebiet: Zentralschweiz und Aargau',
  lead: `Von unserem Sitz in ${company.address.city} aus arbeiten wir in den Kantonen ${cantonList}. Alle Leistungen bieten wir im ganzen Gebiet an, für Unternehmen ebenso wie für anspruchsvolle Privatkunden.`,
  cantonsTitle: 'Kantone',
  cantonLabels: company.cantons.map((canton) => `Kanton ${canton}`),
  // Orte je Kanton (S06, EG-01): nur Umgruppierung der Orte aus places.groups, keine neuen Orte. Schlüssel wie company.cantons.
  cantonPlaces: {
    Luzern: ['Luzern', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Eich'],
    Zug: ['Zug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'],
    Aargau: ['Meisterschwanden', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'],
    Nidwalden: ['Hergiswil', 'Stansstad', 'Ennetbürgen'],
    Obwalden: ['Engelberg'],
  } satisfies Record<(typeof company.cantons)[number], string[]>,
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
    text: `Beschreiben Sie uns Objekt und Ort. Wir melden uns ${company.responseTime} und kommen für die Besichtigung vorbei, kostenlos und unverbindlich.`,
  },
}

export const servicesOverview = {
  h1: 'Reinigung und Hauswartung für Liegenschaften, Büros und Gewerbe',
  lead: `Laufende Reinigung, einmalige Einsätze oder die Betreuung ganzer Liegenschaften: Wählen Sie nach Anlass. Für Unternehmen, Verwaltungen und Eigentümer in den Kantonen ${cantonList}. Nicht sicher, was passt? Wir klären es bei der Besichtigung.`,
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
  lead: 'Für Villen und Residenzen, Zweitwohnungen, Hotels mit besonderen Wünschen, Family Offices, Privatjets und Yachten. Immer dasselbe Team, diskret, mit Kenntnis empfindlicher Materialien und in Ihrer Sprache.',
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
  ] satisfies { key: PromiseKey; title: string; text: string }[] as { key: PromiseKey; title: string; text: string }[],
  places: {
    title: 'Wo wir für Sie da sind',
    text: `Am Vierwaldstättersee von Luzern und Meggen bis Weggis, Vitznau, Hergiswil und Ennetbürgen, am Zuger- und Ägerisee von Zug und Walchwil bis Oberägeri, in Engelberg und in den ganzen Kantonen ${cantonList}.`,
  },
  cta: {
    title: 'Diskret anfragen',
    text: 'Rufen Sie uns an oder schreiben Sie uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, auf Wunsch unter Geheimhaltung.',
  },
}
