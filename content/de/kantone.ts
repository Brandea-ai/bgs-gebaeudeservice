import { company } from '../../shared/company'
import { answers } from './common'

/**
 * Texte der fünf Kantonsseiten unter /einzugsgebiet/<kanton> (Entscheid Brandea
 * zu E78, Runde 11/12). Jede Seite hat eigenen Inhalt: Regionen und Orte, typische
 * Objekte, gefragte Leistungen, Planung und Fragen des Kantons. So bleiben die
 * Seiten nützlich und keine austauschbaren Ortsvarianten (Google Spam-Richtlinien,
 * Doorway abuse, S33; K09).
 *
 * Regeln wie in content/types.ts: über das Unternehmen nur Belegtes (E18), alle
 * Leistungen im ganzen Gebiet zu denselben Bedingungen (E30), kein Winterdienst,
 * keine Privathaushalte ausser über den Premium-Bereich (E28). Geografische
 * Angaben nur, wenn sicher; Quellen im Bericht kantone-bericht.md. Titel ohne
 * Marke (höchstens 50 Zeichen), shared/seo.ts hängt sie an.
 */

export type KantonKey = 'luzern' | 'zug' | 'aargau' | 'nidwalden' | 'obwalden'

export type KantonPage = {
  name: string
  kuerzel: string
  seo: { title: string; description: string }
  h1: string
  lead: string[]
  facts: { label: string; value: string }[]
  regionen: { title: string; orte: string[] }[]
  objekte: { title: string; text: string }[]
  leistungen: { path: string; title: string; text: string }[]
  planung: { title: string; paragraphs: string[] }
  faq: { question: string; answer: string }[]
  imageAlt: string
  /** Kurzer Satz für das Mega-Menü, höchstens 60 Zeichen */
  menuText: string
}

const sameTerms = 'Alle, zu denselben Bedingungen wie im ganzen Gebiet'
const seat = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`

// Grundlage: Sitz Emmenbrücke (company.ts), Orte aus seiten.ts (area), E30, E42
const luzern: KantonPage = {
  name: 'Luzern',
  kuerzel: 'LU',
  seo: {
    title: 'Reinigungsfirma Luzern: Reinigung und Hauswartung',
    description:
      'Gebäudereinigung und Hauswartung im Kanton Luzern, vom Sitz in Emmenbrücke aus: Stadt, Agglomeration, Seeufer, Sursee und Seetal. Offerte vor Ort.',
  },
  h1: 'Reinigung und Hauswartung im Kanton Luzern',
  lead: [
    'Unser Sitz liegt in Emmenbrücke, mitten in der Agglomeration Luzern. Von hier aus reinigen und betreuen wir Liegenschaften, Büros und Gewerbeflächen im ganzen Kanton, von der Stadt Luzern über den Sempachersee bis ins Entlebuch.',
    'Seit 2006 arbeiten wir in Reinigung und Hauswartung. Bevor Sie eine Offerte erhalten, sehen wir uns Ihr Objekt vor Ort an. Besichtigung und Offerte sind kostenlos und unverbindlich.',
  ],
  facts: [
    { label: 'Unser Sitz', value: `${company.address.city}, Gemeinde Emmen` },
    { label: 'Hauptort', value: 'Luzern' },
    { label: 'Seen', value: 'Vierwaldstättersee, Sempachersee, Baldeggersee' },
    { label: 'Leistungen', value: sameTerms },
  ],
  regionen: [
    { title: 'Stadt und Agglomeration', orte: ['Luzern', 'Emmen', 'Kriens', 'Horw', 'Ebikon', 'Adligenswil'] },
    { title: 'Am Vierwaldstättersee', orte: ['Meggen', 'Weggis', 'Vitznau', 'Greppen'] },
    { title: 'Sursee und Sempachersee', orte: ['Sursee', 'Sempach', 'Nottwil', 'Eich'] },
    { title: 'Seetal', orte: ['Hochdorf', 'Hitzkirch'] },
    { title: 'Willisau und Entlebuch', orte: ['Willisau', 'Entlebuch', 'Schüpfheim', 'Escholzmatt-Marbach'] },
  ],
  objekte: [
    {
      title: 'Mehrfamilienhäuser und Stockwerkeigentum',
      text: 'In der Stadt und den Agglomerationsgemeinden stehen viele Wohn- und Geschäftshäuser. Wir halten Treppenhaus, Waschküche und Umgebung sauber und sehen auf Wunsch regelmässig nach dem Rechten.',
    },
    {
      title: 'Büros und Praxen',
      text: 'In der Stadt Luzern und in Zentren wie Sursee reinigen wir Büros und Praxen zu Zeiten, die wir mit Ihnen auf Ihren Betrieb abstimmen.',
    },
    {
      title: 'Wohnungswechsel',
      text: 'Bei einem Mieterwechsel reinigen wir die Wohnung vor der Übergabe, mit Abnahmegarantie. Die Hauswartung wirkt bei der Übergabe mit.',
    },
    {
      title: 'Liegenschaften am See',
      text: 'Für Villen und Residenzen am Vierwaldstättersee, etwa in Meggen, Weggis oder Vitznau, gibt es unseren Premium-Bereich: immer dasselbe Team, auf Wunsch mit Geheimhaltungsvereinbarung.',
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', title: 'Hauswartung', text: 'Für Verwaltungen und Stockwerkeigentümerschaften, die ihre Liegenschaft betreuen lassen.' },
    { path: '/leistungen/unterhaltsreinigung', title: 'Unterhaltsreinigung', text: 'Treppenhäuser, Eingänge und Gemeinschaftsräume in einem festen Rhythmus.' },
    { path: '/leistungen/sonderreinigungen', title: 'Sonderreinigungen', text: 'Umzugs- und Wohnungsendreinigung mit Abnahmegarantie, dazu Grundreinigungen.' },
    { path: '/leistungen/bueroreinigung', title: 'Büro- und Praxisreinigung', text: 'Für Büros und Praxen, abgestimmt auf Ihre Arbeits- und Öffnungszeiten.' },
    { path: '/premium/luxusimmobilien', title: 'Villen und Residenzen', text: 'Diskrete Reinigung und Pflege von Häusern am See.' },
  ],
  planung: {
    title: 'Anreise und Planung',
    paragraphs: [
      'Weil unser Sitz im Kanton liegt, sind die Wege in die Stadt und die Agglomeration kurz. Für Objekte im Seetal, in Willisau oder im Entlebuch legen wir Rhythmus und Einsatzzeiten bei der Besichtigung fest.',
      'Klären Sie mit uns vor dem ersten Einsatz, wo unser Team parkieren kann und wie es zu Schlüssel und Räumen kommt. Gerade in der Innenstadt hilft ein fester Platz für Fahrzeug und Material.',
    ],
  },
  faq: [
    { question: 'Wo ist Ihr Sitz?', answer: `An der Adresse ${seat}, in der Agglomeration Luzern.` },
    {
      question: 'Arbeiten Sie auch ausserhalb der Stadt Luzern?',
      answer: 'Ja, im ganzen Kanton, vom Seetal bis ins Entlebuch, mit allen Leistungen und zu denselben Bedingungen.',
    },
    {
      question: 'Übernehmen Sie die Reinigung bei einem Mieterwechsel?',
      answer: 'Ja. Die Umzugs- und Wohnungsendreinigung mit Abnahmegarantie gehört zu unseren [Sonderreinigungen](/leistungen/sonderreinigungen).',
    },
    { question: 'Übernehmen Sie auch kurzfristige Einsätze?', answer: 'Rufen Sie uns an. Wir klären mit Ihnen, was kurzfristig möglich ist.' },
  ],
  imageAlt: 'Symbolbild: Wohn- und Geschäftshäuser in der Agglomeration Luzern',
  menuText: 'Unser Sitz: Stadt, Agglomeration und Seeufer',
}

// Grundlage: Sprachen (E18), Büroreinigung, Family Offices und Geheimhaltung (/premium), Orte aus seiten.ts
const zug: KantonPage = {
  name: 'Zug',
  kuerzel: 'ZG',
  seo: {
    title: 'Reinigungsfirma Zug: Büro- und Gebäudereinigung',
    description:
      'Büroreinigung, Glas und Hauswartung im Kanton Zug: für Firmensitze, Praxen und Liegenschaften von Zug und Baar bis ins Ägerital. Beratung in vier Sprachen.',
  },
  h1: 'Reinigung für Büros und Liegenschaften im Kanton Zug',
  lead: [
    'Im Kanton Zug haben viele Unternehmen ihren Sitz, auch internationale. Gefragt ist eine Reinigung, die sich nach dem Geschäftsbetrieb richtet und den Arbeitstag nicht stört.',
    'Unsere Mitarbeitenden sprechen Deutsch, Englisch, Französisch und Italienisch. Das erleichtert die Abstimmung mit Teams, deren Arbeitssprache nicht Deutsch ist.',
  ],
  facts: [
    { label: 'Hauptort', value: 'Zug' },
    { label: 'Seen', value: 'Zugersee, Ägerisee' },
    { label: 'Gemeinden', value: 'Alle elf Gemeinden des Kantons' },
    { label: 'Sprachen', value: 'Deutsch, Englisch, Französisch, Italienisch' },
  ],
  regionen: [
    { title: 'Zug, Baar und Steinhausen', orte: ['Zug', 'Baar', 'Steinhausen'] },
    { title: 'Am Zugersee', orte: ['Cham', 'Hünenberg', 'Risch mit Rotkreuz', 'Walchwil'] },
    { title: 'Ägerital und Berggemeinden', orte: ['Unterägeri', 'Oberägeri', 'Menzingen', 'Neuheim'] },
  ],
  objekte: [
    {
      title: 'Büros und Firmensitze',
      text: 'Vom kleinen Büro bis zum Firmensitz über mehrere Etagen: Arbeitsplätze, Sitzungszimmer, Empfang, Teeküchen und Sanitärräume, zu Zeiten, die wir mit Ihnen festlegen.',
    },
    {
      title: 'Family Offices und vertrauliche Räume',
      text: 'Wo vertrauliche Unterlagen liegen, arbeitet bei Ihnen immer dasselbe Team, auch ausserhalb Ihrer Arbeitszeiten. Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung.',
    },
    {
      title: 'Glas und Fassaden',
      text: 'Bürobauten haben oft grosse Glasflächen. Fenster, Glastüren und Fassaden reinigen wir einzeln oder zusätzlich zur Büroreinigung.',
    },
    {
      title: 'Wohnen am Zuger- und Ägerisee',
      text: 'Für Villen und Residenzen am See, etwa in Walchwil oder Oberägeri, gibt es unseren Premium-Bereich. Boote und Yachten auf dem Zugersee reinigen wir ebenfalls.',
    },
  ],
  leistungen: [
    { path: '/leistungen/bueroreinigung', title: 'Büro- und Praxisreinigung', text: 'Für Büros, Verwaltungen und Praxen, abgestimmt auf Ihre Arbeitszeiten.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', title: 'Fenster- und Fassadenreinigung', text: 'Für Fenster, Glasflächen und Fassaden von Geschäftshäusern.' },
    { path: '/leistungen/facility-services', title: 'Facility Services', text: 'Reinigung, Hauswartung und Umgebung in einem Vertrag mit einer Ansprechperson.' },
    { path: '/leistungen/sonderreinigungen', title: 'Sonderreinigungen', text: 'Grundreinigung beim Bürowechsel, Umzugsreinigung mit Abnahmegarantie.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Innenraum, Polster, Teak und Gelcoat, am Zugersee und am Vierwaldstättersee.' },
  ],
  planung: {
    title: 'Anreise und Planung',
    paragraphs: [
      'Von Emmenbrücke erreichen wir den Kanton Zug über die Autobahn A14. Die Einsätze in Büros legen wir so, dass sie Ihren Betrieb nicht stören, zum Beispiel ausserhalb Ihrer Bürozeiten.',
      'In Geschäftshäusern mit Empfang, Zutrittskarten oder Alarmanlage klären wir den Zutritt vor dem ersten Einsatz. Haben Sie mehrere Standorte im Einzugsgebiet, nennen Sie uns alle bei der Anfrage.',
    ],
  },
  faq: [
    {
      question: 'Können wir uns auf Englisch verständigen?',
      answer: `${answers.sprachen} Sagen Sie uns bei der Anfrage, welche Sprache Ihnen am liebsten ist.`,
    },
    {
      question: 'Reinigen Sie ausserhalb der Bürozeiten?',
      answer: 'Die Einsatzzeiten legen wir mit Ihnen fest, passend zu Ihren Arbeits- und Öffnungszeiten.',
    },
    {
      question: 'Sind Sie auch in Baar, Cham oder im Ägerital tätig?',
      answer: 'Ja, in allen Gemeinden des Kantons Zug, mit allen Leistungen und zu denselben Bedingungen.',
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  imageAlt: 'Symbolbild: Bürogebäude mit Glasfassade in Zug',
  menuText: 'Büros, Firmensitze und Wohnen am See',
}

// Grundlage: Industrie- und Hallenreinigung (leistungen.ts), Orte aus seiten.ts, E30 (gleiche Bedingungen)
const aargau: KantonPage = {
  name: 'Aargau',
  kuerzel: 'AG',
  seo: {
    title: 'Reinigungsfirma Aargau: Industrie und Hauswartung',
    description:
      'Industrie- und Hallenreinigung, Baureinigung und Hauswartung im Aargau: vom Freiamt und Seetal bis Aarau und Baden, zu denselben Bedingungen wie in Luzern.',
  },
  h1: 'Reinigung für Industrie, Gewerbe und Liegenschaften im Aargau',
  lead: [
    'Im Aargau gibt es viele Industrie- und Gewerbebetriebe. Produktions- und Lagerhallen, Werkstätten und Gewerbebauten brauchen eine Reinigung, die sich nach Schichten und Abläufen richtet.',
    'Vom Freiamt und dem Seetal an der Luzerner Grenze bis in die Regionen Aarau und Baden arbeiten wir im ganzen Kanton, mit allen Leistungen und zu denselben Bedingungen wie in Luzern.',
  ],
  facts: [
    { label: 'Hauptort', value: 'Aarau' },
    { label: 'Gewässer', value: 'Hallwilersee, Aare, Reuss, Limmat und Rhein' },
    { label: 'Schwerpunkt', value: 'Hallen, Lager, Werkstätten und Wohnliegenschaften' },
    { label: 'Leistungen', value: sameTerms },
  ],
  regionen: [
    { title: 'Freiamt', orte: ['Muri', 'Wohlen', 'Bremgarten', 'Sins'] },
    { title: 'Seetal und Hallwilersee', orte: ['Meisterschwanden', 'Seengen', 'Beinwil am See'] },
    { title: 'Aarau, Lenzburg und Zofingen', orte: ['Aarau', 'Lenzburg', 'Zofingen', 'Oftringen'] },
    { title: 'Region Baden und Mutschellen', orte: ['Baden', 'Wettingen', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
    { title: 'Brugg und Fricktal', orte: ['Brugg', 'Windisch', 'Rheinfelden', 'Frick'] },
  ],
  objekte: [
    {
      title: 'Produktions- und Lagerhallen',
      text: 'Hallenböden, Lagerbereiche, Regale und Verkehrswege reinigen wir einmalig oder regelmässig, zu Zeiten, die wir auf Produktion und Schichtbetrieb abstimmen.',
    },
    {
      title: 'Maschinen und Anlagen',
      text: 'Maschinen reinigen wir nach Ihren Vorgaben und in Absprache mit Ihrer Instandhaltung. Wann eine Anlage stillsteht und welche Mittel geeignet sind, legen wir vor dem Einsatz fest.',
    },
    {
      title: 'Neu- und Umbauten',
      text: 'Nach dem Bau einer Halle oder dem Umbau eines Gewerbegebäudes reinigen wir bis zur Übergabe, damit der Betrieb starten kann.',
    },
    {
      title: 'Wohnliegenschaften',
      text: 'Für Mehrfamilienhäuser und Stockwerkeigentum übernehmen wir Unterhaltsreinigung und Hauswartung. Villen am Hallwilersee oder in der Region Baden betreut unser Premium-Bereich.',
    },
  ],
  leistungen: [
    { path: '/leistungen/industrie-und-hallenreinigung', title: 'Industrie- und Hallenreinigung', text: 'Produktions- und Lagerhallen, Werkstätten, Maschinen und Anlagen.' },
    { path: '/leistungen/baureinigung', title: 'Bau- und Bauendreinigung', text: 'Während und nach Bau- und Umbauarbeiten, bis zur Übergabe.' },
    { path: '/leistungen/bueroreinigung', title: 'Büro- und Praxisreinigung', text: 'Für Büros, Sozialräume und Garderoben im Betrieb.' },
    { path: '/leistungen/hauswartung', title: 'Hauswartung', text: 'Kontrollgänge, Waschküche, Kleinreparaturen und Entsorgung für Wohnliegenschaften.' },
    { path: '/leistungen/facility-services', title: 'Facility Services', text: 'Reinigung, Hauswartung und Umgebung für Ihr Betriebsareal aus einer Hand.' },
  ],
  planung: {
    title: 'Anreise und Planung',
    paragraphs: [
      'Die Wege von Emmenbrücke in den Aargau sind je nach Region unterschiedlich lang. Deshalb legen wir Rhythmus, Einsatzzeiten und Stillstände der Anlagen bei der Besichtigung fest und halten sie in der Offerte fest.',
      'Vor der Offerte sehen wir uns Hallen, Anlagen und Abläufe bei einem Rundgang an. Ihre Sicherheits- und Betriebsregeln gelten auch für unser Team, wir klären sie vor dem ersten Einsatz mit Ihnen.',
    ],
  },
  faq: [
    {
      question: 'Gelten im Aargau dieselben Bedingungen wie in Luzern?',
      answer: 'Ja. Alle Leistungen bieten wir im ganzen Einzugsgebiet zu denselben Bedingungen an.',
    },
    {
      question: 'Reinigen Sie auch während des Schichtbetriebs?',
      answer: 'Die Einsatzzeiten stimmen wir mit Ihnen auf Produktion und Schichten ab, damit die Reinigung den Betrieb nicht aufhält.',
    },
    {
      question: 'Gehört die Wartung von Maschinen dazu?',
      answer: 'Nein. Wir reinigen Maschinen und Anlagen nach Ihren Vorgaben, Wartung und Reparatur bleiben bei Ihrer Instandhaltung.',
    },
    { question: 'Reinigen Sie mit umweltfreundlichen Mitteln?', answer: answers.mittel },
  ],
  imageAlt: 'Symbolbild: Produktionshalle mit sauberem Hallenboden',
  menuText: 'Industrie, Hallen, Lager und Liegenschaften',
}

// Grundlage: Zweitwohnungen und Kontrollgänge (/premium), Yacht (/premium/yacht), Orte aus seiten.ts, ARE-Wohnungsinventar (S59)
const nidwalden: KantonPage = {
  name: 'Nidwalden',
  kuerzel: 'NW',
  seo: {
    title: 'Reinigungsfirma und Hauswartung Nidwalden',
    description:
      'Reinigung und Hauswartung in Nidwalden: Liegenschaften am Vierwaldstättersee, Zweitwohnungen und Villen von Hergiswil bis Beckenried. Offerte vor Ort.',
  },
  h1: 'Reinigung und Hauswartung in Nidwalden',
  lead: [
    'Nidwalden reicht vom Ufer des Vierwaldstättersees bei Hergiswil und Ennetbürgen bis ins Engelbergertal. Viele Liegenschaften liegen nahe am See, manche werden nur zeitweise bewohnt.',
    'Wir reinigen und betreuen Wohn- und Geschäftshäuser, Zweitwohnungen und Villen im ganzen Kanton. Die Offerte erstellen wir nach einer Besichtigung, kostenlos und unverbindlich.',
  ],
  facts: [
    { label: 'Hauptort', value: 'Stans' },
    { label: 'See', value: 'Vierwaldstättersee' },
    { label: 'Gemeinden', value: 'Alle elf Gemeinden des Kantons' },
    { label: 'Leistungen', value: sameTerms },
  ],
  regionen: [
    { title: 'Am Vierwaldstättersee', orte: ['Hergiswil', 'Stansstad', 'Ennetbürgen', 'Buochs', 'Beckenried'] },
    { title: 'Stans und Umgebung', orte: ['Stans', 'Oberdorf', 'Ennetmoos'] },
    { title: 'Engelbergertal und Emmetten', orte: ['Dallenwil', 'Wolfenschiessen', 'Emmetten'] },
  ],
  objekte: [
    {
      title: 'Zweitwohnungen',
      text: 'In Emmetten ist laut Wohnungsinventar des Bundes rund ein Drittel der Wohnungen eine Zweitwohnung. Wir reinigen vor Ihrer Ankunft und nach Ihrer Abreise und sehen während Ihrer Abwesenheit nach dem Rechten.',
    },
    {
      title: 'Villen und Residenzen am See',
      text: 'In Häusern mit Naturstein, Parkett und grossen Glasflächen reinigen wir materialgerecht. Bei Ihnen arbeitet immer dasselbe Team, auf Wunsch mit Geheimhaltungsvereinbarung.',
    },
    {
      title: 'Stockwerkeigentum',
      text: 'Wohnen die Eigentümer nicht alle vor Ort, übernimmt die Hauswartung Kontrollgänge, Waschküche, Entsorgung und Wohnungsübergaben und meldet Mängel an die vereinbarte Stelle.',
    },
    {
      title: 'Boote am Vierwaldstättersee',
      text: 'Yachten und Motorboote reinigen wir innen und aussen, mit Rücksicht auf Teak, Gelcoat und Polster.',
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', title: 'Hauswartung', text: 'Für Stockwerkeigentümerschaften und Verwaltungen, schriftlich vereinbart.' },
    { path: '/premium/luxusimmobilien', title: 'Villen und Zweitwohnungen', text: 'Reinigung vor Ankunft und nach Abreise, Kontrollgänge während Ihrer Abwesenheit.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', title: 'Fenster- und Fassadenreinigung', text: 'Für grosse Fensterfronten und Glasflächen.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', title: 'Aussen- und Grünflächenpflege', text: 'Für Garten und Umgebung Ihrer Liegenschaft.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Für Boote und Yachten am Vierwaldstättersee.' },
  ],
  planung: {
    title: 'Anreise und Planung',
    paragraphs: [
      'Von Emmenbrücke führt der Weg über Luzern und die Autobahn A2 nach Nidwalden. Reinigungen vor Ihrer Ankunft planen wir am besten mit etwas Vorlauf, sagen Sie uns Ihre Daten deshalb möglichst früh.',
      'Bei Zweitwohnungen vereinbaren wir feste Regeln für Schlüssel und Alarm und legen fest, wem wir melden, was uns bei Kontrollgängen auffällt.',
    ],
  },
  faq: [
    {
      question: 'Betreuen Sie Zweitwohnungen während unserer Abwesenheit?',
      answer: 'Ja. Wir reinigen vor Ihrer Ankunft und nach Ihrer Abreise und machen Kontrollgänge. Mehr dazu unter [Luxusimmobilien](/premium/luxusimmobilien).',
    },
    {
      question: 'Reinigen Sie auch Boote?',
      answer: 'Ja, Yachten und Motorboote am Vierwaldstättersee: Innenraum, Polster, Teak und Gelcoat. Mehr unter [Yacht](/premium/yacht).',
    },
    {
      question: 'Wie kommen wir zu einer Offerte?',
      answer: `Rufen Sie uns an oder schreiben Sie uns. Wir melden uns ${company.responseTime}, sehen uns das Objekt an und schicken Ihnen die Offerte schriftlich.`,
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  imageAlt: 'Symbolbild: Wohnhaus am Ufer des Vierwaldstättersees',
  menuText: 'Seeufer, Zweitwohnungen und Hauswartung',
}

// Grundlage: Zweitwohnungen und Hotels (/premium), kein Winterdienst (leistungen.ts), ARE-Wohnungsinventar (S59)
const obwalden: KantonPage = {
  name: 'Obwalden',
  kuerzel: 'OW',
  seo: {
    title: 'Reinigungsfirma Obwalden: Sarnen und Engelberg',
    description:
      'Reinigung und Hauswartung in Obwalden: Liegenschaften im Sarneraatal, Zweitwohnungen und Hotels in Engelberg. Kostenlose Offerte nach Besichtigung.',
  },
  h1: 'Reinigung und Hauswartung in Obwalden',
  lead: [
    'Obwalden besteht aus zwei Teilen: dem Sarneraatal mit dem Hauptort Sarnen und dem Hochtal von Engelberg, das man über Nidwalden erreicht.',
    'Im Sarneraatal reinigen und betreuen wir Wohn- und Geschäftshäuser und Gewerbe. Engelberg prägen Zweitwohnungen und Hotels, für beide bieten wir Reinigung und Betreuung an.',
  ],
  facts: [
    { label: 'Hauptort', value: 'Sarnen' },
    { label: 'Seen', value: 'Sarnersee, Lungerersee' },
    { label: 'Gemeinden', value: 'Alle sieben Gemeinden, auch Engelberg' },
    { label: 'Nicht im Angebot', value: 'Winterdienst' },
  ],
  regionen: [
    { title: 'Sarneraatal', orte: ['Sarnen', 'Kerns', 'Sachseln', 'Alpnach'] },
    { title: 'Richtung Brünig', orte: ['Giswil', 'Lungern'] },
    { title: 'Hochtal', orte: ['Engelberg'] },
  ],
  objekte: [
    {
      title: 'Zweitwohnungen in Engelberg',
      text: 'In Engelberg ist laut Wohnungsinventar des Bundes mehr als die Hälfte der Wohnungen eine Zweitwohnung. Wir reinigen vor Ihrer Ankunft und nach Ihrer Abreise und sehen während Ihrer Abwesenheit nach dem Rechten.',
    },
    {
      title: 'Hotels',
      text: 'Für Hotels übernehmen wir Grund- und Spezialreinigungen, etwa vor einer Eröffnung, vor Saisonbeginn oder nach einer Renovation.',
    },
    {
      title: 'Liegenschaften im Sarneraatal',
      text: 'In Sarnen, Kerns, Sachseln und Alpnach reinigen wir Treppenhäuser, Büros und Gewerbeflächen und übernehmen die Hauswartung von Wohn- und Geschäftshäusern.',
    },
    {
      title: 'Umzug und Übergabe',
      text: 'Wechselt eine Wohnung den Besitzer oder die Mieterschaft, reinigen wir vor der Übergabe, mit Abnahmegarantie.',
    },
  ],
  leistungen: [
    { path: '/premium/luxusimmobilien', title: 'Villen und Zweitwohnungen', text: 'Reinigung vor Ankunft und nach Abreise, Kontrollgänge während Ihrer Abwesenheit.' },
    { path: '/leistungen/sonderreinigungen', title: 'Sonderreinigungen', text: 'Grundreinigung für Hotels und Wohnungen, Umzugsreinigung mit Abnahmegarantie.' },
    { path: '/leistungen/baureinigung', title: 'Bau- und Bauendreinigung', text: 'Nach Umbau und Renovation, bis zur Übergabe.' },
    { path: '/leistungen/hauswartung', title: 'Hauswartung', text: 'Kontrollgänge, Waschküche, Entsorgung und Wohnungsübergaben.' },
    { path: '/leistungen/unterhaltsreinigung', title: 'Unterhaltsreinigung', text: 'Treppenhäuser und Gewerbeflächen in einem festen Rhythmus.' },
  ],
  planung: {
    title: 'Anreise und Planung',
    paragraphs: [
      'Ins Sarneraatal fahren wir von Emmenbrücke über Luzern und die Autobahn A8. Nach Engelberg führt der Weg durch Nidwalden und das Engelbergertal.',
      'In Engelberg stimmen wir die Einsätze auf Ankunft, Abreise und Saison ab. Klären Sie bei der Besichtigung Zufahrt, Parkplatz und Schlüsselübergabe.',
      'Winterdienst bieten wir nicht an. Die Schneeräumung rund um die Liegenschaft vergeben Sie deshalb separat.',
    ],
  },
  faq: [
    {
      question: 'Kommen Sie auch nach Engelberg?',
      answer: 'Ja. Engelberg gehört zum Kanton Obwalden und damit zu unserem Einzugsgebiet, mit allen Leistungen und zu denselben Bedingungen.',
    },
    {
      question: 'Reinigen Sie vor unserer Ankunft?',
      answer: 'Ja. Wir reinigen vor Ihrer Ankunft und nach Ihrer Abreise. Sagen Sie uns Ihre Daten möglichst früh.',
    },
    { question: 'Übernehmen Sie Winterdienst?', answer: 'Nein, Winterdienst bieten wir nicht an.' },
    { question: 'Was kostet die Reinigung?', answer: answers.kosten },
  ],
  imageAlt: 'Symbolbild: Chalets und Ferienwohnungen in einem Bergtal',
  menuText: 'Sarnen, Engelberg, Zweitwohnungen und Hotels',
}

export const kantone: Record<KantonKey, KantonPage> = { luzern, zug, aargau, nidwalden, obwalden }

/** Überleitung auf /einzugsgebiet zu den Kantonsseiten */
export const kantoneUebersicht = {
  title: 'Ihr Kanton im Detail',
  text: 'Für jeden Kanton gibt es eine eigene Seite: welche Regionen und Orte dazugehören, welche Objekte dort typisch sind und worauf wir bei der Planung achten.',
}
