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
  { value: 'Über 50', label: 'Mitarbeitende' },
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

// Startseite (E85): drei Kundengruppen statt vier (K6), jede mit dem Weg zu einem Werkzeug
type HomeAudienceKey = 'verwaltungen' | 'unternehmen' | 'premium'
type HomeAudience = Card & {
  key: HomeAudienceKey
  /** Kurzname für den Reiter auf dem Handy */
  short: string
  points: string[]
  /** hash: Werkzeug auf der Zielseite, etwa #pflichtenheft */
  link: { path: PagePath; hash?: string; text: string }
}
type HomeFactKey = 'register' | 'persoenlich' | 'umwelt'

/**
 * Startseite (E85, Audit 25: inhalt.md Abschnitt 1, seo.md M4 und T5, visuell.md
 * Umbau 5, 7 und 8). Jede Aussage steht einmal: Kennzahlen, Register und
 * Sprachen nur in «Auf einen Blick», die Antwortzeit nur im Kontaktbereich.
 * Kartentexte eigenständig, nicht die Einstiege der Leistungsseiten (E18).
 */
export const home = {
  h1: 'Gebäudereinigung und Hauswartung für Luzern, Zug und Umgebung',
  // Zitierfähiger Profilsatz unter den Kennzahlen (T5). Der erste Satz nur mit NEW_BRAND:
  // premiumBrand ist nur dann gesetzt (wie alternateName in T7). Sitz ist die Gemeinde Emmen (UID-Register,
  // Impressum), Emmenbrücke nur die Postadresse. Der zweite Satz wörtlich wie Über uns.
  profile: {
    title: 'Auf einen Blick',
    brand: company.premiumBrand
      ? `${company.brand} ist die Marke der ${company.legalName} mit Sitz in ${company.seat} ${company.address.region}.`
      : null,
    text: `Seit 2006 sind wir in der Reinigung und Hauswartung tätig. Heute betreuen über 50 Mitarbeitende mehr als 120 Kunden in den Kantonen ${cantonList}, auf ${listDe(company.languages)}.`,
    // Vertrauensleiste und Zusagen in einem Baustein (Umbau 8), nur Belegtes (E18)
    facts: [
      { key: 'register', label: 'Handelsregister', value: `Kanton Luzern, UID ${company.uid}` },
      { key: 'persoenlich', label: 'Ihre Anfrage', value: 'Bearbeitet der Geschäftsführer persönlich' },
      { key: 'umwelt', label: 'Reinigungsmittel', value: 'Auf Wunsch umweltfreundlich' },
    ] satisfies { key: HomeFactKey; label: string; value: string }[] as { key: HomeFactKey; label: string; value: string }[],
  },
  // Leistungen nach Gruppen (Umbau 5): Gruppen und Namen aus servicesOverview, eigene Kurztexte
  // nur für die grossen und mittleren Karten; die fünf schmalen Karten tragen nur den Namen
  services: {
    title: 'Unsere Leistungen',
    intro: 'Zehn Leistungen in drei Gruppen: was regelmässig anfällt, was einmal gründlich erledigt werden muss und was eine ganze Liegenschaft braucht.',
    all: 'Alle Leistungen im Überblick',
    swipe: 'Seitlich wischen',
    cards: {
      '/leistungen/unterhaltsreinigung': 'Treppenhaus, Eingang und Lift bleiben sauber, ohne dass jemand im Haus zum Besen greift. Seife und Papier füllen wir nach.',
      '/leistungen/bueroreinigung': 'Arbeitsplätze, Sitzungszimmer, Teeküchen und Praxisräume, gereinigt zu Zeiten, die zu Ihrem Betrieb passen.',
      '/leistungen/hauswartung': 'Kontrollgänge, kleine Reparaturen, Entsorgung und die Mitwirkung bei Wohnungsübergaben.',
      '/leistungen/aussen-und-gruenflaechenpflege': 'Eine gepflegte Umgebung übers ganze Jahr, vom ersten Rasenschnitt bis zum Laub im Herbst.',
      '/leistungen/facility-services': 'Mehrere unserer Leistungen gebündelt, mit einem Vertrag und einer Ansprechperson.',
    } satisfies Partial<Record<PagePath, string>> as Partial<Record<PagePath, string>>,
    premium: {
      title: premiumLabel,
      text: 'Eine eigene Linie für Villen, Lofts und Residenzen, Privatjets und Yachten, dazu Hotels und Family Offices. Diskret und mit festen Teams.',
      link: 'Zum Premium-Bereich',
    },
  },
  // Für wen (K6, E28, E34): drei Gruppen, Premium als eine Gruppe; Wahlbaustein statt Kartenraster
  audiences: {
    title: 'Für wen wir arbeiten',
    intro: 'Eine Verwaltung braucht etwas anderes als ein Betrieb oder eine Villa. Wählen Sie Ihre Gruppe.',
    items: [
      {
        key: 'verwaltungen',
        short: 'Verwaltungen',
        title: 'Verwaltungen und Stockwerkeigentümerschaften',
        text: 'Sie betreuen Wohn- oder Geschäftsliegenschaften für Eigentümer oder eine Gemeinschaft. Vor Ort braucht es jemanden, der regelmässig kommt und meldet, was auffällt.',
        points: [
          'Treppenhaus, Waschküche und Umgebung in einem festen Rhythmus',
          'Regelmässige Kontrollgänge, Mängel melden wir direkt an Sie',
          'Endreinigung beim Mieterwechsel, mit Abnahmegarantie',
        ],
        link: { path: '/leistungen/hauswartung', hash: 'pflichtenheft', text: 'Pflichtenheft Hauswartung als Vorlage' },
      },
      {
        key: 'unternehmen',
        short: 'Unternehmen',
        title: 'Unternehmen',
        text: 'Büros, Praxen, Gewerbe und Produktion. Die Reinigung richtet sich nach Ihren Abläufen, nicht umgekehrt.',
        points: [
          'Einsatzzeiten, die zu Arbeits- und Öffnungszeiten passen',
          'Nachfüllservice für Verbrauchsmaterial',
          'Hallen und Maschinen zu Zeiten, die auf die Produktion abgestimmt sind',
        ],
        link: { path: '/leistungen/bueroreinigung', hash: 'leistungsverzeichnis', text: 'Leistungsverzeichnis für Ihr Büro' },
      },
      {
        key: 'premium',
        short: 'Premium',
        title: 'Villen, Jets, Yachten und Hotels',
        text: 'Naturstein, Parkett, Leder und Edelholz verzeihen kein falsches Mittel. Wer so etwas pflegen lässt, braucht ein Team, das die Materialien kennt und diskret arbeitet.',
        points: [
          'Ein festes Team, das Ihr Haus kennt',
          'Geheimhaltungsvereinbarung, wenn Sie sie wünschen',
          'In Hotels Reinigung vor der Eröffnung und nach einer Renovation',
        ],
        link: { path: '/premium/luxusimmobilien', hash: 'materialkunde', text: 'Materialkunde für Naturstein, Parkett und Hochglanz' },
      },
    ] satisfies HomeAudience[] as HomeAudience[],
  },
  // Baustein 1.1 (ersetzt die Zusagen) und 1.2; den Ablauf in Kürze zeigt der Kontaktbereich («So geht es weiter»)
  agreed: {
    title: 'Klar geregelt, bevor wir anfangen',
    intro: 'Vor dem ersten Einsatz steht das Wichtige auf Papier. So wissen Verwaltung, Eigentümerschaft und unser Team, was gilt.',
    written: {
      title: 'Was Sie schriftlich erhalten',
      items: [
        { title: 'Offerte', text: 'nach der Besichtigung, mit Umfang und Preis' },
        { title: 'Umfang', text: 'welche Räume und Aufgaben dazugehören, wie oft und zu welchen Zeiten' },
        { title: 'Hauswartung', text: 'wie oft wir vor Ort sind und wem wir Mängel melden' },
        { title: 'Nachfüllservice', text: 'welche Artikel dazugehören und wer sie beschafft' },
        { title: 'Umzugsreinigung', text: 'die Abnahmegarantie mit ihren Einzelheiten' },
      ] satisfies Card[] as Card[],
      note: 'Kommt später eine Fläche dazu, ergänzen wir die Vereinbarung schriftlich.',
    },
    limits: {
      title: 'Was wir nicht übernehmen',
      intro: 'Damit Sie keine Zeit verlieren, sagen wir es gleich.',
      items: [
        'Winterdienst und Schneeräumung',
        'Einen Pikettdienst, der Tag und Nacht für Notfälle erreichbar ist',
        'Umzugsreinigungen im Auftrag von Mieterinnen und Mietern einzelner Wohnungen',
        'Normale Privathaushalte. Villen, Residenzen und Zweitwohnungen betreuen wir im [Premium-Bereich](/premium).',
        'Wartung von Heizung, Lüftung, Lift und Brandschutz, grössere Reparaturen, Gartenbau und Neuanlagen',
      ],
    },
  },
  area: {
    title: 'Unser Einzugsgebiet',
    text: `Von ${company.address.city} aus arbeiten wir in fünf ganzen Kantonen, mit jeder Leistung. Je Kanton finden Sie Orte, typische Objekte und Hinweise für die Planung.`,
    link: 'Zum Einzugsgebiet',
  },
  // Eigene Fragen der Startseite (inhalt.md 08): keine Standardfragen, die Kostenfrage mit Faktoren.
  // Nur Fragen über das ganze Angebot; Einzelthemen wie Treppenhaus-Rhythmus oder Firmenwechsel
  // beantworten die Leistungsseiten selbst (Prüfbefund S1).
  faq: [
    {
      question: 'Was kostet eine Reinigungsfirma pro Stunde?',
      answer:
        'Ohne das Objekt zu kennen, lässt sich das nicht seriös beantworten. Entscheidend ist der Aufwand: wie gross die Flächen sind, welche Böden dort liegen, wie stark sie genutzt werden, wie oft und zu welchen Zeiten gereinigt wird und wer das Verbrauchsmaterial stellt. Wie sich diese Faktoren auswirken, erklärt der Ratgeber [Reinigungskosten in der Schweiz](/blog/reinigungskosten-schweiz).',
    },
    {
      question: 'Brauche ich eine Unterhaltsreinigung oder eine Hauswartung?',
      answer:
        'Geht es nur ums Reinigen, reicht die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung): Treppenhaus, Böden und Gemeinschaftsräume in einem festen Rhythmus. Die [Hauswartung](/leistungen/hauswartung) kümmert sich zusätzlich um die Liegenschaft selbst, mit Kontrollgängen, kleinen Reparaturen, Entsorgung und bei Wohnungsübergaben.',
    },
    {
      question: 'Welche Leistung passt zu meinem Objekt?',
      answer:
        'Das zeigt der [Wegweiser in der Leistungsübersicht](/leistungen#wegweiser): Er ordnet zehn typische Situationen der passenden Leistung zu. Auf derselben Seite vergleicht eine Tabelle die vier Leistungen, die am häufigsten verwechselt werden. Trifft keine Situation genau zu, beschreiben Sie Ihr Objekt im Formular unten.',
    },
    {
      question: 'Kann ich Sie auch für einen einzelnen Einsatz beauftragen?',
      answer:
        'Ja, etwa die [Grundreinigung](/leistungen/sonderreinigungen), die [Umzugsreinigung](/leistungen/umzugsreinigung) vor einer Übergabe, die [Baureinigung](/leistungen/baureinigung) nach Neu- und Umbauten oder die [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung). Einen Vertrag für die laufende Reinigung brauchen Sie dafür nicht.',
    },
    {
      question: 'Muss ich mehrere Leistungen zusammen beauftragen?',
      answer:
        'Nein. Sie können jede Leistung auch allein beauftragen, etwa nur die Fensterreinigung oder nur die Pflege der Umgebung. Brauchen Sie für dieselbe Liegenschaft mehrere, lassen sie sich als [Facility Services](/leistungen/facility-services) bündeln: ein Vertrag statt mehrerer.',
    },
    {
      question: 'Worauf sollte ich bei der Wahl einer Reinigungsfirma achten?',
      answer:
        'Vor allem auf Offerten, die sich wirklich vergleichen lassen. Das gelingt nur, wenn jeder Anbieter das Objekt gesehen hat und mit denselben Räumen, demselben Rhythmus und denselben Einsatzzeiten rechnet. Welche Fragen Sie ausserdem stellen sollten, von der Versicherung bis zum Vertrag, zeigt der Ratgeber [Wie finde ich die richtige Reinigungsfirma?](/blog/richtige-reinigungsfirma-finden).',
    },
  ] as { question: string; answer: string }[],
  // Abschluss mit Formular (PageFrame), auch auf Ratgeber und Rechtstexten; die Antwortzeit nennt der Kontaktbereich
  cta: {
    title: 'Offerte für Ihr Objekt',
    text: 'Beschreiben Sie kurz Objekt, Ort und Anliegen. Den Termin für die Besichtigung vereinbaren wir danach mit Ihnen.',
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

/**
 * Leistungsübersicht /leistungen (E85, Audit 25: inhalt.md Abschnitt 2, visuell.md
 * Umbau 5 und 7). Eigene Kurztexte je Leistung, nicht die Einstiege der
 * Leistungsseiten. Dazu zwei Werkzeuge: Vergleich (Baustein 2.1, Werte aus den
 * Leistungsseiten) und Jahresplan (Baustein 2.2, Quellen gelesen am 28.09.2026:
 * Vogelwarte, BAFU, OR Art. 266a, 266c und 266d auf Fedlex, Stand 1. Januar 2026).
 */
export const servicesOverview = {
  h1: 'Reinigung und Hauswartung für Liegenschaften, Büros und Gewerbe',
  lead: 'Zehn Leistungen für Verwaltungen, Eigentümer und Unternehmen, geordnet nach Anlass. Hier sehen Sie, wofür jede gedacht ist, wie sich ähnliche Leistungen unterscheiden und wann im Jahr was ansteht.',
  // Auswahlhilfe nach Anlass (Zielbild v2, 03 Abschnitt 2a), nur bestätigte Leistungen (R3a bis R3c)
  groups: [
    {
      title: 'Laufende Reinigung',
      text: 'Wiederkehrende Reinigung, deren Rhythmus sich nach der Nutzung richtet.',
      items: [
        {
          title: 'Unterhaltsreinigung',
          path: '/leistungen/unterhaltsreinigung',
          text: 'Für Mehrfamilienhäuser, Wohn- und Geschäftshäuser und Gewerbeflächen: Wir reinigen Treppenhaus, Böden und Nebenräume, meist mehrmals pro Woche, und füllen das Verbrauchsmaterial nach.',
        },
        {
          title: 'Büro- und Praxisreinigung',
          path: '/leistungen/bueroreinigung',
          text: 'Büros, Verwaltungen und Praxen, gereinigt zu Zeiten, die sich nach Ihren Besprechungen und Sprechstunden richten.',
        },
      ],
    },
    {
      title: 'Einmalige und besondere Reinigung',
      text: 'Einsätze mit einem festen Anlass, etwa eine Übergabe, das Ende einer Baustelle oder ein Stillstand in der Produktion.',
      items: [
        {
          title: 'Grund- und Sonderreinigung',
          path: '/leistungen/sonderreinigungen',
          text: 'Gegen Kalk, Fett, Schmutz in Fugen und alte Pflegeschichten, die die laufende Reinigung in Wohnungen, Büros und Gewerbeflächen nicht mehr löst.',
        },
        {
          title: 'Umzugsreinigung',
          path: '/leistungen/umzugsreinigung',
          text: 'Endreinigung von Wohnungen und Geschäftsflächen vor der Abnahme, im Auftrag von Verwaltungen, Eigentümern und Unternehmen. Mit Abnahmegarantie.',
        },
        {
          title: 'Bau- und Bauendreinigung',
          path: '/leistungen/baureinigung',
          text: 'Reinigung während der Arbeiten und Bauendreinigung vor der Übergabe an Mieterschaft, Käufer oder Ihr Team.',
        },
        {
          title: 'Fenster- und Fassadenreinigung',
          path: '/leistungen/fenster-und-fassadenreinigung',
          text: 'Fenster, Schaufenster und andere Glasflächen, dazu Fassaden, bei Bedarf mit Hochdruck. Als einzelner Auftrag oder im festen Turnus.',
        },
        {
          title: 'Industrie- und Hallenreinigung',
          path: '/leistungen/industrie-und-hallenreinigung',
          text: 'Böden, Hallen, Maschinen und Anlagen in Produktion und Lager, abgestimmt auf Schichten und Stillstände.',
        },
      ],
    },
    {
      title: 'Betreuung von Liegenschaften',
      text: 'Wenn jemand regelmässig nach der ganzen Liegenschaft sehen soll, innen wie aussen.',
      items: [
        {
          title: 'Hauswartung',
          path: '/leistungen/hauswartung',
          text: 'Kontrollgänge mit Meldung an die Verwaltung, Treppenhaus und Waschküche, Kleinreparaturen, Entsorgung und Wohnungsübergaben. Welche Aufgaben es sind, richtet sich nach Ihrer Liegenschaft.',
        },
        {
          title: 'Aussen- und Grünflächenpflege',
          path: '/leistungen/aussen-und-gruenflaechenpflege',
          text: 'Rasen, Hecken, Beete, Wege und Plätze, einzeln vergeben oder zusammen mit der Hauswartung.',
        },
        {
          title: 'Facility Services',
          path: '/leistungen/facility-services',
          text: 'Reinigung, Hauswartung und Umgebung unter einem Vertrag. Technische Anlagen wie Heizung, Lüftung oder Lifte gehören nicht dazu.',
        },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  // Wegweiser nach Situation (E80: mehr Information für die Entscheidung), nur bestätigte Leistungen
  guide: {
    title: 'Welche Leistung passt?',
    intro: 'Zehn häufige Situationen und die Leistung, die dazu passt.',
    items: [
      { situation: 'Das Treppenhaus und die Gemeinschaftsräume sollen regelmässig sauber sein.', path: '/leistungen/unterhaltsreinigung' },
      { situation: 'Büro oder Praxis sollen gereinigt werden, ohne den Betrieb zu stören.', path: '/leistungen/bueroreinigung' },
      { situation: 'Eine Wohnung oder Geschäftsfläche wird übergeben.', path: '/leistungen/umzugsreinigung' },
      { situation: 'Böden, Fugen und Sanitärräume brauchen eine gründliche Reinigung.', path: '/leistungen/sonderreinigungen' },
      { situation: 'Ein Neubau oder Umbau steht vor der Übergabe.', path: '/leistungen/baureinigung' },
      { situation: 'Fenster, Schaufenster oder Fassade sind verschmutzt.', path: '/leistungen/fenster-und-fassadenreinigung' },
      { situation: 'Halle, Lager oder Maschinen sollen gereinigt werden.', path: '/leistungen/industrie-und-hallenreinigung' },
      { situation: 'Die Liegenschaft braucht jemanden, der regelmässig nach dem Rechten sieht.', path: '/leistungen/hauswartung' },
      { situation: 'Rasen, Hecken, Wege und Plätze sollen gepflegt sein.', path: '/leistungen/aussen-und-gruenflaechenpflege' },
      { situation: 'Statt mehrerer Firmen soll eine einzige alles übernehmen.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  // Kurze Namen der Werkzeuge für die Abschnittsleiste (die Titel sind dafür zu lang)
  toolNav: { vergleich: 'Vergleich', jahresplan: 'Jahresplan' } as Record<string, string>,
  // Werkzeuge (E85) im Aufbau der Leistungsseiten: Vergleich und Jahresplan
  tools: [
    {
      kind: 'table',
      id: 'vergleich',
      title: 'Reinigung, Grundreinigung, Hauswartung oder alles zusammen?',
      intro: 'Vier Leistungen, die sich leicht verwechseln lassen, im direkten Vergleich.',
      columns: ['Leistung', 'Was', 'Wie oft', 'Typischer Anlass', 'Nicht enthalten'],
      rows: [
        [
          '[Unterhaltsreinigung](/leistungen/unterhaltsreinigung)',
          'Reinigung in einem festen Rhythmus, mit Nachfüllservice',
          'Meist mehrmals pro Woche',
          'Treppenhaus, Allgemeinflächen oder Gewerbefläche sollen laufend sauber sein',
          'Büros und Praxen, Grundreinigung, Fenster aussen und Fassaden',
        ],
        [
          '[Grund- und Sonderreinigung](/leistungen/sonderreinigungen)',
          'Ein gründlicher Einsatz gegen Kalk, Fett und alte Schichten',
          'Einmalig, bei Bedarf in grossen Abständen wieder',
          'Vor einer Neuvermietung oder nach intensiver Nutzung',
          'Laufende Reinigung. Die Endreinigung vor der Abgabe übernimmt die Umzugsreinigung',
        ],
        [
          '[Hauswartung](/leistungen/hauswartung)',
          'Betreuung der Liegenschaft: Kontrollgänge, Kleinreparaturen, Meldungen',
          'So oft, wie im Pflichtenheft vereinbart',
          'Der bisherige Hauswart hört auf, oder eine Liegenschaft wird neu übernommen',
          'Winterdienst, Pikett rund um die Uhr, grössere Reparaturen',
        ],
        [
          '[Facility Services](/leistungen/facility-services)',
          'Mehrere unserer Leistungen in einem Vertrag',
          'Je nach Leistung',
          'Mehrere Firmen sollen durch eine ersetzt werden',
          'Technisches Facility Management, Winterdienst, Vermittlung von Handwerkern',
        ],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'jahresplan',
      title: 'Welche Arbeit wann ansteht',
      intro: 'Viele Arbeiten an einer Liegenschaft haben ihre Jahreszeit. So verteilen sie sich typischerweise:',
      entries: [
        {
          label: 'Januar bis März',
          text: 'Grundreinigung von Büro- und Gewerbeflächen in ruhigen Wochen. Hecken und Sträucher jetzt schneiden: Die Vogelwarte Sempach rät, Gehölze ausserhalb der Brutzeit zu schneiden, am besten zwischen November und März.',
        },
        {
          label: 'April bis Juni',
          text: 'Fenster und Glas nach dem Winter und dem Blütenstaub reinigen. Wege und Plätze vom Winterschmutz befreien, den Rasen zum ersten Mal mähen. Was danach bis zum Herbst im Garten anfällt, zeigt der [Pflegekalender der Gartenpflege](/leistungen/aussen-und-gruenflaechenpflege#pflegekalender).',
        },
        {
          label: 'Juli und August',
          text: 'Grundreinigung während der Betriebsferien, Hallen und Maschinen bei geplanten Stillständen. Unkraut in Fugen und auf Plätzen von Hand oder mit Geräten entfernen, denn auf und an Wegen und Plätzen sind Herbizide verboten. Wo Spritzmittel verboten sind und was stattdessen wirkt, zeigt die Seite [Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege#spritzmittelverbot).',
        },
        {
          label: 'September bis November',
          text: 'Laub von Wegen, Plätzen und Rasen entfernen, Beete für den Winter vorbereiten und die Fenster vor der dunklen Jahreszeit reinigen. Ab November beginnt die Zeit für den Heckenschnitt.',
        },
        {
          label: 'Vor dem ersten Schnee',
          text: 'Schneeräumung und Salzen gehören nicht zu unserem Angebot. Vergeben Sie den Winterdienst frühzeitig an eine Firma, die ihn übernimmt.',
        },
        {
          label: 'Rund um Kündigungstermine',
          text: 'Das OR sieht für Wohnungen drei Monate Kündigungsfrist vor, für Geschäftsräume sechs, jeweils auf einen ortsüblichen Termin oder, wo es keinen gibt, auf das Ende einer dreimonatigen Mietdauer. Der Mietvertrag kann längere Fristen oder andere Termine festlegen. Planen Sie die Endreinigung mit dem Abgabetermin, die [Termine je Kanton](/leistungen/umzugsreinigung#kuendigungstermine) stehen bei der Umzugsreinigung.',
        },
      ],
      note: 'Die Monate sind Richtwerte. Wann bei Ihrem Objekt was ansteht, hängt von Nutzung, Lage und Vertrag ab.',
      sources: [
        {
          label: 'Schweizerische Vogelwarte: Schnitt von Sträuchern und Hecken in Siedlungen',
          href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
        },
        { label: 'BAFU: Pflanzenschutz in der Gemeinde', href: 'https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde' },
        { label: 'Obligationenrecht, Art. 266a, 266c und 266d (Fedlex, Stand 1. Januar 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_266_c' },
      ],
    },
  ] satisfies import('../types').Tool[] as import('../types').Tool[],
  // Was bei allen Leistungen gilt (inhalt.md 06: gekürzt auf zwei Punkte)
  principles: {
    title: 'Bei jeder Leistung gleich',
    items: [
      {
        title: 'Umfang schriftlich',
        text: 'Räume, Aufgaben, Rhythmus und Einsatzzeiten stehen fest, bevor wir anfangen. Wird ein Büro umgebaut oder anders genutzt, passen wir die Vereinbarung an.',
      },
      {
        title: 'Klare Grenzen',
        text: 'Jede Leistungsseite sagt auch, was nicht dazugehört, etwa Winterdienst oder die Wartung technischer Anlagen.',
      },
    ] satisfies Card[] as Card[],
  },
  // Eigene Fragen der Übersicht (inhalt.md 08): Unterschiede und Grenzen zwischen den Leistungen.
  // Die Mieterfrage beantwortet die Umzugsreinigung selbst (Prüfbefund S1).
  faq: [
    {
      question: 'Wovon hängen die Kosten der einzelnen Leistungen ab?',
      answer:
        'Jede Leistung hat ihre eigenen Kostentreiber. Bei der Unterhaltsreinigung sind es Fläche, Rhythmus, Einsatzzeiten und das Verbrauchsmaterial. Bei der Grundreinigung zählen Zustand, Bodenbelag und wie viel Mobiliar im Weg steht. Die Hauswartung richtet sich nach den Aufgaben und der Zahl der Kontrollgänge, die Fensterreinigung nach Glasfläche, Höhe und Zugang. Den Preis erhalten Sie deshalb nach der Besichtigung, schriftlich.',
    },
    {
      question: 'Was unterscheidet die Unterhaltsreinigung von der Büroreinigung?',
      answer:
        'Die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) kümmert sich um die gemeinsam genutzten Flächen einer Liegenschaft, also Treppenhaus, Eingang, Lift und Waschküche. Die [Büro- und Praxisreinigung](/leistungen/bueroreinigung) reinigt die Räume, in denen gearbeitet wird, und richtet sich nach Arbeits- und Öffnungszeiten. In einem Geschäftshaus kommt oft beides vor.',
    },
    {
      question: 'Gehört die Fensterreinigung zur Unterhaltsreinigung?',
      answer:
        'Zum Teil. Glas im Eingangsbereich, etwa an Glastüren, gehört zur Unterhaltsreinigung. Fenster aussen und Fassaden übernimmt die [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung), einmalig oder in festen Abständen.',
    },
    {
      question: 'Was gehört bei Ihnen zu Facility Services?',
      answer:
        'Unsere eigenen Leistungen, zusammengestellt nach Bedarf: Reinigung, Hauswartung, Umgebung, Fenster, Grund- und Industriereinigung. Dafür gibt es einen einzigen Vertrag mit einer Ansprechperson. Heizung, Lüftung und Lifte warten wir nicht, und wir vermitteln keine Handwerksbetriebe.',
    },
    {
      question: 'Reinigen Sie auch Arzt- und Therapiepraxen?',
      answer:
        'Ja, Praxen gehören zur [Büro- und Praxisreinigung](/leistungen/bueroreinigung). Die Einsatzzeiten richten sich nach Ihren Sprechstunden. Instrumente und Medizinprodukte bereitet weiterhin Ihr Praxisteam auf.',
    },
    {
      question: 'Wann brauche ich eine Grundreinigung, wann eine Umzugsreinigung?',
      answer:
        'Das entscheidet der Anlass. Die [Umzugsreinigung](/leistungen/umzugsreinigung) bereitet eine Wohnung oder Geschäftsfläche auf die Abnahme vor, wenn sie übergeben wird, und kommt mit Abnahmegarantie. Die [Grundreinigung](/leistungen/sonderreinigungen) bringt Böden, Fugen und Sanitärräume in einen Zustand zurück, den die laufende Reinigung wieder halten kann, auch in Räumen, die weiter genutzt werden.',
    },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Villen, Privatjets oder Yachten?',
    text: 'Für Privatkundschaft mit besonderen Ansprüchen und für Hotels gibt es eine eigene Linie.',
    detail: 'Villen und Residenzen, Kabinen von Privatjets, Yachten am Vierwaldstättersee und am Zugersee. Mit festen Teams, die mit empfindlichen Materialien umgehen können.',
    link: 'Zum Premium-Bereich',
  },
  cta: {
    title: 'Nicht sicher, was Sie brauchen?',
    text: 'Schreiben Sie uns in ein paar Sätzen, worum es geht. Wir sehen uns das Objekt an und schlagen Ihnen die passende Leistung vor.',
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
  // Diskretion aus bestätigten Zusagen (E41), ohne die zurückgestellten (E52)
  discretion: {
    title: 'Diskretion von der ersten Nachricht an',
    paragraphs: [
      'Ihre Anfrage bearbeitet der Geschäftsführer persönlich. Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung.',
      'Bei Ihnen arbeitet immer dasselbe Team, überprüft von uns. Es kennt Ihr Haus, Ihre Wünsche und die Regeln für Schlüssel und Alarmanlage, die wir mit Ihnen vereinbaren.',
      'Kunstwerke reinigen wir nur nach Ihrer Freigabe. Zeiten richten sich nach Ihnen, auch abends, am Wochenende oder während Ihrer Abwesenheit.',
    ],
  },
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
