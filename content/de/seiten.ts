import { cantonList, company, listDe, premiumLabel, premiumLine } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Step, Tool } from '../types'
import { answers, steps, ui } from './common'

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
type BriefKey = 'objekt' | 'ort' | 'groesse' | 'leistung' | 'rhythmus' | 'start' | 'zugang'
// Schlüssel wählen Symbol und Bild in der Darstellung; die Übersetzungen tragen dieselben Schlüssel
type Audience = Card & { key: AudienceKey; points: string[]; link: { path: PagePath; text: string } }
type KeyedCard<K> = Card & { key: K }
/** Werkzeug-Tabelle (E85), hier für die Firmenangaben zum Nachprüfen */
type TableTool = Extract<Tool, { kind: 'table' }>

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
    { question: 'Was kostet eine Reinigungsfirma pro Stunde?', answer: answers.kostenFaktoren },
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

/**
 * Über uns (E85, Audit 25 Abschnitt 8): nur Belegtes (E18, E58). «2006» steht
 * im Hauptinhalt nur in H1 und Steckbrief, als Erfahrung und nie im selben Satz
 * oder Band wie die eingetragene Firma: Zefix nennt für die GmbH eine frühere
 * Firma ohne Bezug zur Reinigung, der jüngste SHAB-Eintrag stammt vom 20.11.2012
 * (gelesen 28.09.2026). Worauf sich 2006 bezieht, ist als Rückfrage an Brandea
 * offen (Befund UU-01).
 * Der Name des Geschäftsführers steht nicht hier (offene Frage F6), nur im Impressum.
 */
const uidRegister = `https://www.uid.admin.ch/Detail.aspx?uid_id=${company.uid.replace(/[-.]/g, '')}&lang=de`
// Im Fliesstext bricht der Firmenname nicht am Bindestrich um (Audit visuell, 390 px). Geschützte Leerzeichen allein
// genügen nicht, nach «-» darf der Browser trotzdem umbrechen (UAX #14, LB12a); der Wortverbinder U+2060 verhindert das.
// Die Tabelle zeigt den Registerwert unverändert.
const legalNameText = company.legalName.replace(' - ', '\u00a0-\u2060\u00a0')

export const about = {
  h1: 'Über uns: Reinigung und Hauswartung seit 2006',
  // Gebiet mit den fünf Kantonen (E30). Marke und eingetragene Firma nennt erst «Firmenangaben zum Nachprüfen» (check.intro)
  lead: `Wir reinigen und betreuen Liegenschaften, Büros, Praxen und Hallen in den Kantonen ${cantonList}.`,
  // Zusagen mit Schlüssel für das Symbol (E18, M47). Nur die Startseite zeigt sie (06-zusagen.tsx).
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
  // Steckbrief statt Kennzahlen-Kacheln und Zeitleiste (Audit visuell: «2006» sechsmal)
  profile: {
    title: 'Steckbrief',
    items: [
      { value: 'Seit 2006', label: 'Erfahrung' },
      { value: 'Über 50', label: 'Mitarbeitende' },
      { value: 'Über 120', label: 'Kunden' },
      // Zahl und Einheit bleiben zusammen; umbrechen darf nur nach «CHF» (gemessen bei 360, 390 und 1024 px)
      { value: 'CHF 10\u00a0Mio.', label: 'Deckung der Betriebshaftpflicht' },
    ],
    note: 'Stand September 2026',
  },
  // Baustein 8.2: filtert Anfragen, die nicht passen (E28, E29, E34, R10c, GARTEN)
  fit: {
    title: 'Wann wir passen, und wann nicht',
    intro: 'Das sagen wir lieber vor dem ersten Termin. So verliert niemand Zeit mit einer Anfrage, die nicht zu uns passt.',
    yesTitle: 'Gut passen wir, wenn Sie',
    yes: [
      'als Verwaltung, Eigentümerschaft oder Stockwerkeigentümerschaft ein Haus reinigen oder betreuen lassen, mit [Hauswartung](/leistungen/hauswartung) und [Unterhaltsreinigung](/leistungen/unterhaltsreinigung)',
      'Büros, Praxen, Gewerbeflächen oder Hallen mehrmals pro Woche reinigen lassen: [Büro- und Praxisreinigung](/leistungen/bueroreinigung), [Industrie- und Hallenreinigung](/leistungen/industrie-und-hallenreinigung)',
      'Reinigung, Hauswartung und Umgebung in einem Vertrag bündeln möchten, als [Facility Services](/leistungen/facility-services)',
      'einen einzelnen Einsatz planen, etwa eine [Grundreinigung](/leistungen/sonderreinigungen), die [Baureinigung](/leistungen/baureinigung) vor der Übergabe oder die [Umzugsreinigung](/leistungen/umzugsreinigung) zwischen zwei Mietverhältnissen',
      `privat eine Villa, eine Zweitwohnung oder eine Yacht pflegen oder die Kabine Ihres Privatjets reinigen lassen: dafür gibt es [${premiumLabel}](/premium)`,
    ],
    noTitle: 'Nicht passen wir für',
    no: [
      'Winterdienst und Schneeräumung',
      'Pikett rund um die Uhr',
      'die Endreinigung einer einzelnen Mietwohnung im Auftrag der Mieterin oder des Mieters',
      'die Reinigung normaler Privathaushalte',
      'Gartenbau und Neuanlagen',
    ],
    // Nur die Seiten unter /leistungen haben diesen Abschnitt (die Privatjet-Seite nicht)
    note: `Was eine Leistung nicht umfasst, nennt ihre Seite unter [Leistungen](/leistungen) im Abschnitt «${ui.notIncluded}».`,
  },
  // Arbeitsweise (E80): Werte als Handlungen, nur bestätigte Punkte (E18, E56, E41). Nichts zu
  // Schlüsseln, Alarm oder festem Team im B2B (offene Fragen F2, F7), die Premium-Regeln stehen auf /premium
  work: {
    title: 'So arbeiten wir',
    intro: 'Vier Grundsätze, nach denen wir Aufträge angehen.',
    items: [
      {
        title: 'Erst das Objekt, dann der Preis',
        paragraphs: [
          'Wie viel Arbeit eine Reinigung macht, zeigt sich erst vor Ort: an Bodenbelägen und Glasflächen, an der Nutzung, an Wegen und Zugängen.',
          'Einen Preis am Telefon nennen wir deshalb nicht. Ohne Besichtigung würde er oft nicht stimmen.',
          'Die Offerte folgt nach diesem Termin, schriftlich und ohne Kosten für Sie.',
        ],
      },
      {
        title: 'Umfang und Grenzen schriftlich',
        paragraphs: [
          'Die Offerte nennt Räume und Aufgaben, den Rhythmus und die Einsatzzeiten. Mit Ihrer Zusage wird daraus die Vereinbarung, samt der Regel, wie wir ins Gebäude kommen, etwa mit Schlüssel oder Badge.',
          'Was nicht dazugehört, nennen wir ebenso deutlich, zusammen mit der Leistung, die dafür passt.',
          // Garantiesatz im bestätigten Wortlaut der Umzugsseite (E56), dazu der Vorbehalt der Offerte
          'Bei der [Umzugsreinigung](/leistungen/umzugsreinigung) gilt unsere Abnahmegarantie: Beanstandet die Verwaltung bei der Abnahme etwas an unserer Reinigung, reinigen wir kostenlos nach. Was die Garantie im Einzelnen umfasst, regelt die Offerte.',
        ],
      },
      {
        title: 'Kurze Wege',
        paragraphs: [
          // Bestandsformulierung (R5d); ganz zutreffend erst nach der Umstellung der Adresse (E15, E31, M58).
          // Die Antwortzeit nennt der Kontaktbereich unten schon zweimal.
          'Ihre Anfrage bearbeitet der Geschäftsführer persönlich.',
          'Beziehen Sie mehrere Leistungen als [Facility Services](/leistungen/facility-services), haben Sie dafür eine Ansprechperson bei uns.',
        ],
      },
      {
        title: 'Passend zum Material',
        paragraphs: [
          'Marmor und Kalkstein vertragen keine sauren Reiniger, geöltes Parkett nur wenig Wasser. Mittel und Geräte richten sich deshalb nach dem Belag, nicht nach der Gewohnheit.',
          'Papier, Seife und anderes Verbrauchsmaterial füllen wir bei der laufenden Reinigung nach. Wer das Material beschafft, Sie oder wir, steht in der Vereinbarung.',
          'Umweltfreundliche Mittel setzen wir ein, wenn Sie das wünschen.',
        ],
      },
    ] satisfies { title: string; paragraphs: string[] }[],
  },
  // Baustein 8.1: Registerdaten zum Nachprüfen, gelesen am 28.09.2026 (UID-Register in allen vier Sprachen, Fedlex).
  // Zefix und den Handelsregisterauszug Luzern erst wieder verlinken, wenn Brandea geklärt hat, worauf sich 2006
  // bezieht (Befund UU-01): Beide zeigen die frühere Firma. Das UID-Register führt alle fünf Angaben selbst.
  check: {
    kind: 'table',
    id: 'firmenangaben',
    title: 'Firmenangaben zum Nachprüfen',
    intro: `${company.premiumBrand ? `${company.brand} ist die Marke der ${legalNameText}. ` : ''}Für Ihre Lieferantenakte: Jede Angabe unten finden Sie im [UID-Register](${uidRegister}) des Bundesamts für Statistik, jeweils mit dem Feld, in dem sie dort steht.`,
    columns: ['Angabe', 'Eintrag', 'Feld im UID-Register'],
    rows: [
      ['Firma', company.legalName, '«Name»'],
      // Sitz ist die Gemeinde, Emmenbrücke der Ort der Postadresse (Befund UU-05, zweite Prüfung)
      ['Sitz und Adresse', `Sitz ${company.seat} LU. Die Adresse ${company.address.street}, ${company.address.postalCode} ${company.address.city} liegt in der Gemeinde ${company.seat}.`, '«Gemeinde» und Sitzadresse'],
      ['Firmennummer', `${company.registerNumber}, ${company.register}`, '«Referenznummer» unter Handelsregisterdaten'],
      ['UID', company.uid, '«UID» unter Kernmerkmale'],
      ['Mehrwertsteuernummer', company.vat, '«MWST-Nummer» unter Mehrwertsteuerdaten'],
    ],
    note: 'Zum Abgleich von Offerte und Rechnung: Das OR sieht vor, dass die im Handelsregister eingetragene Firma in der Korrespondenz und auf Rechnungen vollständig und unverändert steht (Art. 954a OR). Kurzbezeichnungen, Logos und Geschäftsbezeichnungen dürfen zusätzlich erscheinen. Nach dem Mehrwertsteuergesetz nennt eine Rechnung in der Regel auch die Nummer, unter der die Firma im MWST-Register eingetragen ist (Art. 26 MWSTG).',
    sources: [
      { label: `UID-Register, ${company.uid}`, href: uidRegister },
      { label: 'Art. 954a Obligationenrecht (OR)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_954_a' },
      { label: 'Art. 26 Mehrwertsteuergesetz (MWSTG)', href: 'https://www.fedlex.admin.ch/eli/cc/2009/615/de#art_26' },
    ],
    printable: true,
    updated: '2026-09-28',
  } satisfies TableTool as TableTool,
  languages: {
    title: 'Vier Sprachen',
    text: 'Rückfragen und Absprachen führen wir auf Deutsch, Englisch, Französisch oder Italienisch. Das hilft internationalen Firmen, Eigentümern mit Wohnsitz im Ausland und Mieterinnen und Mietern, die ihre Frage lieber in der eigenen Sprache stellen.',
    switchLabel: 'Diese Seite auf',
  },
  region: {
    title: 'Fünf Kantone, gleiche Bedingungen',
    text: `Von ${company.address.city} aus bieten wir jede Leistung im ganzen Gebiet an, zu denselben Anfahrtsbedingungen.`,
    listLabel: 'Die Kantone im Einzelnen',
    link: 'Zum Einzugsgebiet mit Karte',
  },
  cta: {
    title: 'Besichtigung vereinbaren',
    text: 'Nennen Sie uns Objekt, Ort und die gewünschte Leistung. Besichtigung und Offerte sind kostenlos und unverbindlich.',
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
        { title: 'Grund- und Sonderreinigung', path: '/leistungen/sonderreinigungen', text: 'Grundreinigung von Wohn-, Büro- und Gewerbeflächen, einmalig oder in grösseren Abständen.' },
        { title: 'Umzugsreinigung', path: '/leistungen/umzugsreinigung', text: 'Endreinigung vor der Übergabe einer Wohnung oder Geschäftsfläche, mit Abnahmegarantie.' },
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
  // Wegweiser nach Situation (E80: mehr Information für die Entscheidung), nur bestätigte Leistungen
  guide: {
    title: 'Welche Leistung passt?',
    intro: 'Häufige Situationen und die Leistung, die dazu passt. Nicht sicher? Wir klären es bei der Besichtigung.',
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
      { situation: 'Reinigung, Hauswartung und Umgebung sollen aus einer Hand kommen.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  // Was bei allen Leistungen gilt, nur belegte Angaben (E18, R3e, R5d)
  principles: {
    title: 'Bei jeder Leistung gleich',
    items: [
      { title: 'Besichtigung vor der Offerte', text: 'Wir sehen uns das Objekt an, bevor wir einen Preis nennen. Besichtigung und Offerte sind kostenlos und unverbindlich.' },
      { title: 'Umfang schriftlich', text: 'Was wir wie oft übernehmen, halten wir in der Offerte fest.' },
      { title: 'Persönliche Anfrage', text: `Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.` },
      { title: 'Rhythmus nach Nutzung', text: 'Wie oft wir kommen, richtet sich nach der Nutzung Ihres Objekts. Ändert sie sich, passen wir Umfang und Rhythmus mit Ihnen an.' },
      { title: 'Umweltfreundlich auf Wunsch', text: 'Auf Wunsch reinigen wir mit umweltfreundlichen Mitteln.' },
      { title: 'Klare Grenzen', text: 'Jede Leistungsseite nennt auch, was nicht dazugehört, etwa Winterdienst oder die Wartung technischer Anlagen.' },
    ] satisfies Card[] as Card[],
  },
  faq: [
    { question: 'Was kosten Ihre Leistungen?', answer: answers.kosten },
    {
      question: 'Kann ich mehrere Leistungen verbinden?',
      answer: 'Ja. Mit [Facility Services](/leistungen/facility-services) kommen Reinigung, Hauswartung und Umgebungspflege in einen Vertrag, mit einer Ansprechperson.',
    },
    {
      question: 'Reinigen Sie auch Privathaushalte?',
      answer: 'Privathaushalte nur im [Premium-Bereich](/premium), für Villen, Lofts und Residenzen.',
    },
    { question: 'Bieten Sie Winterdienst an?', answer: 'Nein. Winterdienst gehört nicht zu unserem Angebot.' },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Villen, Privatjets oder Yachten?',
    text: 'Für besondere Ansprüche gibt es unseren Premium-Bereich.',
    detail: 'Villen und Residenzen, Kabinen von Privatjets, Yachten am Vierwaldstättersee und am Zugersee. Immer dasselbe Team, diskret und mit Kenntnis empfindlicher Materialien.',
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
