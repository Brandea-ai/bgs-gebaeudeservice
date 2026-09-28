import type { KantonKey } from '../../shared/cantons'
import { company } from '../../shared/company'
import type { Source } from '../types'
import { kantonMenu } from './navigation'

/**
 * Texte der fünf Kantonsseiten unter /einzugsgebiet/<kanton> (E80, Umbau E85).
 * Jede Seite trägt Information, die es nur für diesen Kanton gibt: Regionen und
 * Orte, typische Objekte, Planung und den Kasten «Kantonsdaten für die Planung»
 * mit Angaben, die an der Primärquelle geprüft sind (Quelle je Angabe, Stand in
 * kantonUi.datenStand). So bleiben die Seiten keine austauschbaren Ortsvarianten
 * (Google Spam-Richtlinien, Doorway abuse; 25-AUDIT/inhalt.md Abschnitt 7).
 *
 * Regeln: über das Unternehmen nur Belegtes (E18), alle Leistungen im ganzen
 * Gebiet zu denselben Bedingungen, auch bei der Anfahrt (E30, E44), kein
 * Winterdienst (E29), keine Privathaushalte ausser über den Premium-Bereich
 * (E28), keine Preise. Keine Standardantworten (Versicherung, Mittel, Sprachen):
 * die stehen auf Kontakt. Die Kostenfrage steht nur bei Luzern, kurz und mit
 * Link auf den Ratgeber. Zweitwohnungsanteile ohne Rangfolge zwischen
 * Gemeinden: laut ARE sind sie nicht direkt vergleichbar. Titel ohne Marke,
 * shared/seo.ts hängt sie an (Titel nach 25-AUDIT/seo.md T6, H1 mit dem
 * Hauptbegriff nach T2).
 */

export type { KantonKey }

/** Typisches Objekt; premium zeigt die Karte in der Premium-Welt (Elfenbein, Champagner) */
export type KantonObjekt = { title: string; text: string; premium?: boolean }

/**
 * Angabe im Kasten «Kantonsdaten für die Planung»: nur mit gelesener
 * Primärquelle (Schlüssel in kantonUi.quellen). items für Aufzählungen wie
 * Feiertage, als Liste statt als langer Satz; text für Regel und Einordnung.
 */
export type KantonDatum = { label: string; text?: string; items?: string[]; source: QuelleKey }

export type KantonPage = {
  name: string
  kuerzel: string
  seo: { title: string; description: string }
  h1: string
  lead: string[]
  facts: { label: string; value: string }[]
  regionen: { title: string; orte: string[] }[]
  objekte: KantonObjekt[]
  /** Gefragte Leistungen; ohne title steht der Seitenname aus seo.ts (Ankertext nennt das Ziel) */
  leistungen: { path: string; title?: string; text: string }[]
  planung: {
    title: string
    paragraphs: string[]
    /** Punkte nach dem Text, etwa was vor dem ersten Einsatz geregelt sein sollte */
    list?: { title: string; items: string[] }
    /** Gelesene Quellen zu Aussagen im Text (etwa Vogelwarte), Schlüssel in kantonUi.quellen */
    sources?: QuelleKey[]
  }
  /** Kasten «Kantonsdaten für die Planung», 3 bis 4 Angaben mit Quelle */
  daten: KantonDatum[]
  faq: { question: string; answer: string }[]
  /** Kurzer Satz für Mega-Menü und Übersicht, steht in navigation.ts (kantonMenu) */
  menuText: string
}

const seat = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`

/**
 * Primärquellen, gelesen am 28.09.2026 (Bericht kantone, Welle 2). Gesetze in der
 * geltenden Fassung der kantonalen Sammlung, ARE live über geo.admin.ch geprüft.
 * Ein Register je Sprache (kantonUi.quellen): dieselbe Quelle steht so nur
 * einmal im Inhalt, Kantonsseiten und Übersicht verweisen per Schlüssel.
 */
const quelle = {
  are: {
    label: 'Bundesamt für Raumentwicklung ARE, Wohnungsinventar und Zweitwohnungsanteil, Datenstand 31.03.2026',
    href: 'https://map.geo.admin.ch/?lang=de&layers=ch.are.wohnungsinventar-zweitwohnungsanteil',
  },
  luRuhetage: {
    label: 'Kanton Luzern, Gesetz über die Ruhetage (SRL Nr. 855), § 1a',
    href: 'https://srl.lu.ch/app/de/texts_of_law/855',
  },
  luMeldung: {
    label: 'Stadt Luzern, Mieterwechsel und Meldepflicht für Hauseigentümer',
    href: 'https://www.stadtluzern.ch/dienstleistungeninformation/28997',
  },
  vogelwarte: {
    label: 'Schweizerische Vogelwarte, Schnitt von Sträuchern und Hecken in Siedlungen',
    href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
  },
  zgMietrecht: {
    label: 'Kanton Zug, Häufige Fragen zum Mietrecht',
    href: 'https://zg.ch/de/recht-justiz/zivilverfahren/schlichtung/faq-zum-mietrecht',
  },
  zgFeiertage: {
    label: 'Kanton Zug, Arbeits- und Ruhezeiten, Feiertage',
    href: 'https://zg.ch/de/wirtschaft-arbeit/arbeitsbedingungen/arbeits-und-ruhezeiten',
  },
  zgFeiertagsaehnlich: {
    label: 'Amt für Wirtschaft und Arbeit Zug, Feiertage im Kanton Zug 2026 und 2027 (PDF)',
    href: 'https://cdn.zg.ch/dam/jcr:d241f3f6-4c0c-4bb2-9096-b53dd371501c/Feiertage_2026_2027_Kt-ZG_Daten.pdf',
  },
  agFeiertage: {
    label: 'Kanton Aargau, Amt für Wirtschaft und Arbeit, Merkblatt Gesetzliche Feiertage (PDF)',
    href: 'https://www.ag.ch/media/kanton-aargau/dvi/dokumente/awa/awa/arbeitnehmerschutz-im-betrieb/feiertage.pdf',
  },
  nwRuhetage: {
    label: 'Kanton Nidwalden, Ruhetagsgesetz (NG 921.1), Art. 2',
    href: 'https://gesetze.nw.ch/app/de/texts_of_law/921.1',
  },
  owSchlichtung: {
    label: 'Kanton Obwalden, Schlichtungsbehörde, Fragen zur Kündigung',
    href: 'https://www.ow.ch/fachbereiche/2131',
  },
  owRuhetage: {
    label: 'Kanton Obwalden, Ruhetagsgesetz (GDB 975.2), Art. 2',
    href: 'https://gdb.ow.ch/app/de/texts_of_law/975.2',
  },
} satisfies Record<string, Source>

/** Schlüssel einer Quelle; die Texte je Sprache stehen in kantonUi.quellen */
export type QuelleKey = keyof typeof quelle

/** Quellen per Schlüssel angeben, etwa q('are', 'agFeiertage') (auch in seiten.ts › area) */
export const q = (...keys: QuelleKey[]) => keys

// Sitz Emmenbrücke (company.ts), Orte aus seiten.ts (area), Ruhetage SRL 855, Stadt Luzern, ARE, Vogelwarte
const luzern: KantonPage = {
  name: 'Luzern',
  kuerzel: 'LU',
  seo: {
    title: 'Reinigungsfirma Luzern und Hauswartung',
    description:
      'Reinigungsfirma Luzern mit Sitz in Emmenbrücke: Hauswartung, Unterhalts- und Büroreinigung bis ins Entlebuch. Kostenlose Offerte nach Besichtigung.',
  },
  h1: 'Reinigungsfirma Luzern mit Sitz in Emmenbrücke',
  lead: [
    'Unser Sitz liegt in Emmenbrücke, mitten in der Agglomeration Luzern. Von hier aus reinigen und betreuen wir Liegenschaften, Büros und Gewerbeflächen im ganzen Kanton, von der Stadt Luzern über den Sempachersee bis ins Entlebuch.',
    'Für Verwaltungen und Stockwerkeigentümerschaften heisst das kurze Wege: Kriens, Horw, Ebikon und die Stadt liegen gleich nebenan, Sursee und Hochdorf nur wenig weiter.',
  ],
  facts: [
    { label: 'Unser Sitz', value: `${company.address.city}, Gemeinde Emmen` },
    { label: 'Schwerpunkt', value: 'Mehrfamilienhäuser, Stockwerkeigentum, Büros und Praxen' },
    { label: 'Öffentliche Ruhetage', value: 'Zehn im ganzen Kanton, der Josefstag je nach Gemeinde' },
    { label: 'Viele Zweitwohnungen', value: 'Flühli, Vitznau und Weggis' },
  ],
  regionen: [
    { title: 'Stadt und Agglomeration', orte: ['Luzern', 'Emmen', 'Kriens', 'Horw', 'Ebikon', 'Adligenswil'] },
    { title: 'Am Vierwaldstättersee', orte: ['Meggen', 'Weggis', 'Vitznau', 'Greppen'] },
    { title: 'Sursee und Sempachersee', orte: ['Sursee', 'Sempach', 'Nottwil', 'Eich', 'Triengen', 'Ruswil'] },
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
      text: 'In der Stadt Luzern und in Zentren wie Sursee reinigen wir Büros und Praxen zu Zeiten, die zu Ihren Sprechstunden und Bürozeiten passen.',
    },
    {
      title: 'Mieterwechsel im Auftrag der Verwaltung',
      text: 'Zieht eine Mietpartei aus, reinigen wir die Wohnung vor der Übergabe an die nächste, mit Abnahmegarantie. Die Hauswartung wirkt bei der Übergabe mit.',
    },
    {
      title: 'Zweitwohnungen und Villen am See',
      text: 'Rund um Weggis, Vitznau und in Sörenberg werden viele Wohnungen nur zeitweise bewohnt. Villen und Zweitwohnungen am Ufer von Meggen bis Vitznau betreut unser [Premium-Bereich](/premium).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', text: 'Für Verwaltungen und Stockwerkeigentümerschaften, die ihre Liegenschaft betreuen lassen.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Treppenhaus, Eingang und Gemeinschaftsräume, etwa in Emmen, Kriens oder Horw.' },
    { path: '/leistungen/umzugsreinigung', text: 'Endreinigung vor der Wohnungsabgabe, mit Abnahmegarantie.' },
    { path: '/leistungen/bueroreinigung', text: 'Für Praxen und Büros in der Stadt, in Kriens oder in Sursee.' },
    { path: '/premium/luxusimmobilien', title: 'Villen und Residenzen', text: 'Diskrete Reinigung und Pflege von Häusern am See.' },
  ],
  planung: {
    title: 'Wege ab Emmenbrücke',
    paragraphs: [
      'Weil unser Sitz im Kanton liegt, sind die Wege in die Stadt und die Agglomeration kurz. Ins Seetal, nach Willisau oder ins Entlebuch fahren wir länger. Dort lohnt es sich, mehrere Arbeiten auf einen Einsatz zu legen, etwa Treppenhaus und Umgebung am selben Tag.',
      'In der Innenstadt hilft ein fester Platz für Fahrzeug und Material. Regeln Sie vor dem ersten Einsatz, wo unser Team parkieren kann und wie es zu Schlüssel und Räumen kommt.',
      'Die Schweizerische Vogelwarte hat ihren Sitz in Sempach. Sie rät, Hecken und Sträucher ausserhalb der Brutzeit zu schneiden, am besten zwischen November und März. Für die [Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege) einer Luzerner Liegenschaft heisst das: den Heckenschnitt in den Winter legen.',
    ],
    sources: ['vogelwarte'],
  },
  daten: [
    {
      label: 'Öffentliche Ruhetage im ganzen Kanton',
      items: ['Neujahr', 'Karfreitag', 'Auffahrt', 'Fronleichnam', '1. August', 'Mariä Himmelfahrt', 'Allerheiligen', 'Mariä Empfängnis', 'Weihnachten', 'Stefanstag'],
      text: 'Ostermontag und Pfingstmontag gehören im Kanton Luzern nicht dazu.',
      source: 'luRuhetage',
    },
    {
      label: 'Josefstag und Patrozinium',
      text: 'Der 19. März und das Patrozinium der Kirchgemeinde sind nur dort Ruhetag, wo die Einwohnergemeinde sie dazu erklärt. Ob das für Ihre Liegenschaft gilt, weiss die Gemeindekanzlei.',
      source: 'luRuhetage',
    },
    {
      label: 'Mieterwechsel in der Stadt Luzern',
      text: 'Eigentümer und Vermieter melden Ein- und Auszüge ihrer Mieterinnen und Mieter den Einwohnerdiensten, mit Wohnungsnummer und Datum. Mit demselben Datum lässt sich die Endreinigung planen.',
      source: 'luMeldung',
    },
    {
      label: 'Zweitwohnungen über 20 %',
      text: 'Flühli mit Sörenberg 58,31 %, Vitznau 32,71 % und Weggis 24,95 %. In diesen drei Gemeinden gelten die Bauvorschriften des Zweitwohnungsgesetzes.',
      source: 'are',
    },
  ],
  faq: [
    { question: 'Wo ist Ihr Sitz?', answer: `An der Adresse ${seat}, in der Agglomeration Luzern.` },
    {
      question: 'Arbeiten Sie auch im Entlebuch oder im Seetal?',
      answer: 'Ja, im ganzen Kanton, von Hochdorf und Hitzkirch bis Schüpfheim und Escholzmatt-Marbach. Dort gelten dieselben Leistungen und Bedingungen wie in der Stadt Luzern.',
    },
    {
      question: 'Auf welche Termine werden Wohnungen im Kanton Luzern gekündigt?',
      answer: 'Massgebend ist zuerst der Mietvertrag. Nennt er keinen Termin, sieht Art. 266c OR einen ortsüblichen Termin vor und, wo es keinen gibt, das Ende einer dreimonatigen Mietdauer. Für Verwaltungen heisst das: die [Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung) anfragen, sobald die Kündigung eingeht.',
    },
    {
      question: 'Betreuen Sie Zweitwohnungen in Weggis, Vitznau oder Sörenberg?',
      answer: 'Ja. Zwischen zwei Aufenthalten reinigen wir die Wohnung und sehen nach dem Rechten, damit bei Ihrer Ankunft alles bereit ist. Mehr dazu im [Premium-Bereich](/premium).',
    },
    {
      question: 'Was kostet eine Reinigungsfirma im Kanton Luzern?',
      answer: 'Der Preis ergibt sich aus Fläche, Rhythmus, Einsatzzeiten, Zugang und Zustand des Objekts. Wie sich eine Offerte zusammensetzt, erklärt der Ratgeber [Reinigungskosten in der Schweiz](/blog/reinigungskosten-schweiz).',
    },
  ],
  menuText: kantonMenu.luzern.text,
}

// Sprachen (E18), Büroreinigung, Family Offices und Geheimhaltung (/premium), Kündigungstermine und Feiertage (zg.ch)
const zug: KantonPage = {
  name: 'Zug',
  kuerzel: 'ZG',
  seo: {
    title: 'Reinigungsfirma Zug und Büroreinigung',
    description:
      'Reinigungsfirma Zug für Firmensitze: Büroreinigung, Glas und Hauswartung von Baar bis ins Ägerital, auch auf Englisch. Kostenlose Offerte nach Besichtigung.',
  },
  h1: 'Reinigungsfirma Zug für Büros und Firmensitze',
  lead: [
    'Im Kanton Zug haben viele Unternehmen ihren Sitz, auch internationale. Gefragt ist eine Reinigung, die sich nach dem Geschäftsbetrieb richtet und den Arbeitstag nicht stört.',
    'Wo im Büro Englisch gesprochen wird, laufen Absprachen auch auf Englisch. Für Wohnliegenschaften am Zuger- und Ägerisee übernehmen wir Hauswartung und Unterhalt.',
  ],
  facts: [
    { label: 'Anfahrt', value: 'Über die Autobahn A14' },
    { label: 'Schwerpunkt', value: 'Büros, Firmensitze und Glasfassaden' },
    { label: 'Kündigungstermine', value: '31. März, 30. Juni, 30. September' },
    { label: 'Absprachen', value: 'Auch auf Englisch' },
  ],
  regionen: [
    { title: 'Zug, Baar und Steinhausen', orte: ['Zug', 'Baar', 'Steinhausen'] },
    { title: 'Am Zugersee', orte: ['Cham', 'Hünenberg', 'Risch mit Rotkreuz', 'Walchwil'] },
    { title: 'Ägerital und Berggemeinden', orte: ['Unterägeri', 'Oberägeri', 'Menzingen', 'Neuheim'] },
  ],
  objekte: [
    {
      title: 'Büros und Firmensitze',
      text: 'Vom kleinen Büro bis zum Firmensitz über mehrere Etagen: Arbeitsplätze, Sitzungszimmer, Empfang, Teeküchen und Sanitärräume, zu Zeiten, die Ihren Arbeitstag nicht stören.',
    },
    {
      title: 'Glas und Fassaden',
      text: 'Bürobauten haben oft grosse Glasflächen. Fenster, Glastüren und Fassaden reinigen wir einzeln oder zusätzlich zur Büroreinigung.',
    },
    {
      title: 'Family Offices und vertrauliche Räume',
      text: 'Wo vertrauliche Unterlagen liegen, arbeitet bei Ihnen immer dasselbe Team, auch ausserhalb Ihrer Arbeitszeiten. Wie wir Diskretion regeln, steht im [Premium-Bereich](/premium).',
      premium: true,
    },
    {
      title: 'Villen und Boote am See',
      text: 'Für Villen und Residenzen in Walchwil, Oberägeri oder Cham gibt es unseren Bereich [Villen und Luxusimmobilien](/premium/luxusimmobilien), für Boote auf dem Zugersee die [Yachtreinigung](/premium/yacht).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/bueroreinigung', text: 'Für Büroetagen, Empfang und Sitzungszimmer, ausserhalb Ihrer Bürozeiten.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Fenster, Glasflächen und Fassaden von Geschäftshäusern.' },
    { path: '/leistungen/facility-services', text: 'Ein Vertrag für mehrere Standorte, etwa in Zug, Baar und Luzern.' },
    { path: '/leistungen/sonderreinigungen', text: 'Grundreinigung beim Bürowechsel, gegen Kalk, Fett und alte Schichten.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Innenraum, Polster, Teak und Gelcoat, am Zugersee und am Vierwaldstättersee.' },
  ],
  planung: {
    title: 'Zutritt und Einsatzzeiten im Geschäftshaus',
    paragraphs: [
      'Von Emmenbrücke erreichen wir den Kanton Zug über die Autobahn A14. Gereinigt wird dann, wenn es Ihren Betrieb nicht stört, zum Beispiel ausserhalb Ihrer Bürozeiten.',
      'In Geschäftshäusern mit Empfang, Zutrittskarten oder Alarmanlage entscheidet der erste Einsatz über den Rest. Diese Punkte sollten vorher geregelt sein:',
    ],
    list: {
      title: 'Vor dem ersten Einsatz im Geschäftshaus',
      items: [
        'ob das Team über den Empfang, eine Zutrittskarte oder einen Schlüssel ins Gebäude kommt',
        'welche Etagen und Räume dazugehören und welche gesperrt bleiben',
        'wie Alarmanlage, Licht und Abschliessen geregelt sind',
        'in welcher Sprache Absprachen mit Ihrem Team laufen: Deutsch, Englisch, Französisch oder Italienisch',
        'wer bei Ihnen Ansprechperson ist, wenn etwas auffällt',
      ],
    },
  },
  daten: [
    {
      label: 'Kündigungstermine',
      text: 'Ohne andere Abmachung im Mietvertrag gelten der 31. März, der 30. Juni und der 30. September. Die Frist beträgt für Wohnungen drei, für Geschäftsräume sechs Monate.',
      source: 'zgMietrecht',
    },
    {
      label: 'Feiertage wie Sonntage',
      items: ['Neujahr', 'Karfreitag', 'Auffahrt', 'Fronleichnam', '1. August', 'Maria Himmelfahrt', 'Allerheiligen', 'Maria Empfängnis', 'Weihnachten'],
      text: 'Für Angestellte gilt an diesen Tagen ein Arbeitsverbot wie am Sonntag, vom Vorabend 23 Uhr bis 23 Uhr am Feiertag.',
      source: 'zgFeiertage',
    },
    {
      label: 'Feiertagsähnliche Tage',
      items: ['Berchtoldstag', 'Ostermontag', 'Pfingstmontag', 'Stefanstag'],
      text: 'Die meisten Zuger Betriebe haben freiwillig geschlossen, gearbeitet werden darf ohne Bewilligung und ohne Zuschlag. Ausnahme: Der 2. Januar oder der 26. Dezember fällt auf einen Sonntag.',
      source: 'zgFeiertagsaehnlich',
    },
  ],
  faq: [
    {
      question: 'Können wir uns auf Englisch verständigen?',
      answer: 'Ja. Absprachen sind auf Englisch möglich, ebenso auf Französisch und Italienisch. Geben Sie im Formular an, welche Sprache Ihr Team am liebsten nutzt.',
    },
    {
      question: 'Betreuen Sie auch mehrere Standorte, etwa in Zug und Luzern?',
      answer: 'Ja. Ein Firmensitz in Zug, eine Filiale in Luzern, ein Lager im Aargau: Mit [Facility Services](/leistungen/facility-services) laufen alle Standorte über einen Vertrag und eine Ansprechperson bei uns. Nennen Sie uns bei der Anfrage alle Adressen, dann planen wir die Besichtigungen zusammen.',
    },
    {
      question: 'Wir geben unser Büro in Zug ab. Wann fragen wir die Endreinigung an?',
      answer: 'Sobald die Kündigung feststeht. Geschäftsräume werden im Kanton Zug ohne andere Abmachung mit sechs Monaten Frist gekündigt, der Vorlauf reicht also gut für die [Endreinigung vor der Übergabe](/leistungen/umzugsreinigung).',
    },
    {
      question: 'Sind Sie auch in Baar, Cham oder im Ägerital tätig?',
      answer: 'Ja, in allen elf Zuger Gemeinden, von Risch mit Rotkreuz bis Menzingen und Neuheim, mit allen Leistungen und zu denselben Bedingungen.',
    },
    {
      question: 'Eignen sich die feiertagsähnlichen Tage für eine Grundreinigung?',
      answer: 'Oft ja. Laut Amt für Wirtschaft und Arbeit haben an Berchtoldstag, Ostermontag, Pfingstmontag und Stefanstag die meisten Zuger Betriebe geschlossen. Leere Büros sind ideal für Arbeiten, die im Alltag stören, etwa die [Grundreinigung von Böden](/leistungen/sonderreinigungen).',
    },
  ],
  menuText: kantonMenu.zug.text,
}

// Industrie- und Hallenreinigung (Link statt Kopie, K5), Orte aus seiten.ts, E44, Feiertage je Bezirk (Merkblatt ag.ch, spaltengenau gelesen)
const aargau: KantonPage = {
  name: 'Aargau',
  kuerzel: 'AG',
  seo: {
    title: 'Reinigungsfirma Aargau und Hauswartung',
    description:
      'Reinigungsfirma Aargau für Hallen und Liegenschaften: Industrie-, Bau- und Unterhaltsreinigung von Aarau bis ins Freiamt. Kostenlose Offerte nach Besichtigung.',
  },
  h1: 'Reinigungsfirma Aargau für Industrie, Gewerbe und Liegenschaften',
  lead: [
    'Im Aargau gibt es viele Industrie- und Gewerbebetriebe. Produktions- und Lagerhallen, Werkstätten und Gewerbebauten brauchen eine Reinigung, die sich nach Schichten und Abläufen richtet.',
    'Wir arbeiten im ganzen Kanton, vom Freiamt und dem Seetal an der Luzerner Grenze bis nach Aarau, Baden, Brugg und ins Fricktal.',
  ],
  facts: [
    { label: 'Anfahrt', value: 'Zu denselben Bedingungen wie in Luzern' },
    { label: 'Schwerpunkt', value: 'Industrie und Gewerbe, dazu Wohnbau' },
    { label: 'Feiertage', value: 'Sechs Regelungen je nach Bezirk' },
    { label: 'Kein Feiertag', value: 'Der 1. Mai, im ganzen Kanton' },
  ],
  regionen: [
    { title: 'Freiamt', orte: ['Muri', 'Wohlen', 'Bremgarten', 'Sins'] },
    { title: 'Seetal und Hallwilersee', orte: ['Meisterschwanden', 'Seengen', 'Beinwil am See'] },
    { title: 'Aarau, Lenzburg und Zofingen', orte: ['Aarau', 'Lenzburg', 'Zofingen', 'Oftringen'] },
    { title: 'Baden, Wettingen und Mutschellen', orte: ['Baden', 'Wettingen', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
    { title: 'Brugg und Fricktal', orte: ['Brugg', 'Windisch', 'Rheinfelden', 'Frick'] },
  ],
  objekte: [
    {
      title: 'Produktions- und Lagerhallen',
      text: 'Hallenböden, Lagerbereiche, Regale und Verkehrswege reinigen wir einmalig oder regelmässig, zu Zeiten, die Produktion und Schichtbetrieb zulassen.',
    },
    {
      title: 'Maschinen und Anlagen',
      text: 'Reinigung von Maschinen im Schichtbetrieb, in Pausen, zwischen Schichten oder bei geplanten Stillständen. Wie das mit Ihrer Instandhaltung zusammenspielt, steht unter [Industrie- und Hallenreinigung](/leistungen/industrie-und-hallenreinigung).',
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
    { path: '/leistungen/industrie-und-hallenreinigung', text: 'Hallenböden, Lagerzonen und Anlagen, geplant um Schichten und Stillstände.' },
    { path: '/leistungen/baureinigung', text: 'Während und nach Bau- und Umbauarbeiten, bis zur Übergabe.' },
    { path: '/leistungen/bueroreinigung', text: 'Für Büros, Sozialräume und Garderoben im Betrieb.' },
    { path: '/leistungen/hauswartung', text: 'Kontrollgänge, Waschküche, Kleinreparaturen und Entsorgung für Wohnliegenschaften.' },
    { path: '/leistungen/facility-services', text: 'Reinigung, Hauswartung und Umgebung für Ihr Betriebsareal aus einer Hand.' },
  ],
  planung: {
    title: 'Planung für Betriebe im Aargau',
    paragraphs: [
      'Die Wege von Emmenbrücke in den Aargau sind je nach Region unterschiedlich lang, die Bedingungen für die Anfahrt bleiben dieselben. Für Hallen mit Schichtbetrieb zählen drei Dinge: wann eine Anlage stillsteht, welche Zonen während der Produktion zugänglich sind und welche Sicherheitsregeln für Fremdpersonal gelten.',
      'Was in Ihrem Betrieb für Fremdfirmen gilt, gilt auch für das Reinigungsteam. Halten Sie Sperrzonen, Schutzausrüstung und die Ansprechperson für Notfälle schriftlich fest, bevor der erste Einsatz beginnt.',
    ],
  },
  daten: [
    {
      label: 'Feiertage in allen Bezirken',
      items: ['Neujahr', 'Karfreitag', 'Auffahrt', '1. August', 'Weihnachten'],
      text: 'Nur diese fünf Tage sind im ganzen Aargau dem Sonntag gleichgestellt. Die übrigen Feiertage legt der Regierungsrat je Bezirk fest, das Merkblatt nennt dafür sechs Regelungen.',
      source: 'agFeiertage',
    },
    {
      label: 'Ostermontag und Pfingstmontag',
      text: 'Feiertag in den Bezirken Aarau, Baden, Brugg, Kulm, Lenzburg und Zofingen und in acht Gemeinden des Bezirks Rheinfelden, darunter Rheinfelden, Möhlin und Kaiseraugst. In Bremgarten, Laufenburg, Muri und Zurzach gelten beide Tage nicht als Feiertag.',
      source: 'agFeiertage',
    },
    {
      label: 'Fronleichnam und Allerheiligen',
      text: 'Fronleichnam ist Feiertag in den Bezirken Baden ohne Bergdietikon, Bremgarten, Laufenburg, Muri und Zurzach sowie in sechs Gemeinden des Bezirks Rheinfelden. Allerheiligen gilt in Bremgarten, Laufenburg, Muri, Rheinfelden und Zurzach. In Aarau, Brugg, Kulm, Lenzburg und Zofingen ist keiner der beiden Tage ein Feiertag.',
      source: 'agFeiertage',
    },
    {
      label: 'Stephanstag und Berchtoldstag',
      text: 'Der Stephanstag ist Feiertag ausser in Laufenburg, Muri und sechs Gemeinden des Bezirks Rheinfelden. Den Berchtoldstag kennen nur Aarau, Brugg, Kulm, Lenzburg, Zofingen, Zurzach und Bergdietikon.',
      source: 'agFeiertage',
    },
  ],
  faq: [
    {
      question: 'Arbeiten Sie auch in Aarau, Baden oder Lenzburg?',
      answer: 'Ja, im ganzen Kanton: in Aarau, Lenzburg und Zofingen, in Baden und Wettingen, in Brugg und im Fricktal, im Freiamt und am Hallwilersee. Überall gelten dieselben Bedingungen wie in Luzern, auch für die Anfahrt.',
    },
    {
      question: 'Reinigen Sie auch während des Schichtbetriebs?',
      answer: 'Ja. Gereinigt wird in Pausen, zwischen den Schichten oder während geplanter Stillstände, je nachdem, welche Zonen gerade frei sind.',
    },
    {
      question: 'Können Sozialräume und Büros im Betrieb mitgereinigt werden?',
      answer: 'Ja. Garderoben, Sozialräume und Büros lassen sich zusammen mit der Halle in einem Rhythmus planen. Mehr dazu unter [Büro- und Praxisreinigung](/leistungen/bueroreinigung).',
    },
    {
      question: 'Welche Unterlagen helfen vor dem Rundgang durch die Halle?',
      answer: 'Ein Hallenplan mit den Zonen, die Zeiten der Stillstände und Ihre Sicherheitsregeln für Fremdfirmen. Schicken Sie diese Unterlagen per E-Mail, dann lässt sich der Rundgang gezielt vorbereiten.',
    },
    {
      question: 'Wir haben Standorte in mehreren Bezirken. Was heisst das für die Feiertage?',
      answer: 'Der Reinigungsplan richtet sich nach dem Bezirk jedes Standorts. Am Ostermontag ist zum Beispiel in Aarau Feiertag, in Muri ein gewöhnlicher Arbeitstag. Die Regeln je Bezirk stehen oben im Kasten.',
    },
  ],
  menuText: kantonMenu.aargau.text,
}

// Zweitwohnungen (/premium, ARE), Hauswartung (7.4.1), Ruhetage NG 921.1, Orte aus seiten.ts
const nidwalden: KantonPage = {
  name: 'Nidwalden',
  kuerzel: 'NW',
  seo: {
    title: 'Reinigungsfirma Nidwalden und Hauswartung',
    description:
      'Reinigungsfirma Nidwalden für Stockwerkeigentum und Zweitwohnungen am See, von Hergiswil bis Emmetten, mit Hauswartung. Kostenlose Offerte nach Besichtigung.',
  },
  h1: 'Reinigungsfirma Nidwalden für Liegenschaften am See',
  lead: [
    'Nidwalden reicht vom Ufer des Vierwaldstättersees bei Hergiswil und Ennetbürgen bis ins Engelbergertal. Viele Liegenschaften liegen nahe am See, manche werden nur zeitweise bewohnt.',
    'Für Stockwerkeigentümerschaften und Verwaltungen übernehmen wir Reinigung und Hauswartung. Bei Zweitwohnungen und Villen kommt die Betreuung während Ihrer Abwesenheit dazu.',
  ],
  facts: [
    { label: 'Anfahrt', value: 'A2 über Luzern' },
    { label: 'Schwerpunkt', value: 'Stockwerkeigentum und Liegenschaften am See' },
    { label: 'Viele Zweitwohnungen', value: 'Emmetten, fast jede dritte Wohnung' },
    { label: 'Eigener Feiertag', value: 'Josefstag, 19. März' },
  ],
  regionen: [
    { title: 'Am Vierwaldstättersee', orte: ['Hergiswil', 'Stansstad', 'Ennetbürgen', 'Buochs', 'Beckenried'] },
    { title: 'Stans und Umgebung', orte: ['Stans', 'Oberdorf', 'Ennetmoos'] },
    { title: 'Engelbergertal und Emmetten', orte: ['Dallenwil', 'Wolfenschiessen', 'Emmetten'] },
  ],
  objekte: [
    {
      title: 'Stockwerkeigentum mit auswärtigen Eigentümern',
      text: 'Wohnen die Eigentümer nicht alle vor Ort, übernimmt die [Hauswartung](/leistungen/hauswartung) die regelmässigen Gänge durchs Haus und die Wohnungsübergaben.',
    },
    {
      title: 'Zweitwohnungen',
      text: 'Besonders in Emmetten werden viele Wohnungen nur zeitweise genutzt. Betreut wird vor Ihrer Ankunft, nach Ihrer Abreise und mit Kontrollgängen dazwischen.',
    },
    {
      title: 'Villen und Residenzen am See',
      text: 'Für Häuser mit Naturstein, Parkett und grossen Glasflächen am Ufer von Hergiswil bis Beckenried gibt es unseren Bereich [Villen und Luxusimmobilien](/premium/luxusimmobilien).',
      premium: true,
    },
    {
      title: 'Boote am Vierwaldstättersee',
      text: 'Motorboote und Yachten an den Liegeplätzen in Stansstad, Buochs oder Beckenried pflegt unsere [Yachtreinigung](/premium/yacht).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', text: 'Für Stockwerkeigentümerschaften und Verwaltungen, schriftlich vereinbart.' },
    { path: '/premium/luxusimmobilien', title: 'Villen und Zweitwohnungen', text: 'Betreuung von Seeliegenschaften, auch wenn Sie nicht vor Ort sind.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für grosse Fensterfronten mit Seesicht und Glasflächen.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Für Garten, Wege und Umgebung Ihrer Liegenschaft.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Für Boote und Yachten am Vierwaldstättersee.' },
  ],
  planung: {
    title: 'Planung für Seegemeinden und Zweitwohnungen',
    paragraphs: [
      'Von Emmenbrücke führt der Weg über Luzern und die Autobahn A2 nach Nidwalden. Reinigungen vor Ihrer Ankunft brauchen etwas Vorlauf, nennen Sie uns Ihre Daten deshalb möglichst früh.',
      'Bei Zweitwohnungen gelten feste Regeln für Schlüssel und Alarm. Bestimmen Sie vorab, wer informiert wird, wenn bei einem Kontrollgang etwas auffällt: Sie selbst, die Verwaltung oder eine Vertrauensperson in der Nähe.',
    ],
  },
  daten: [
    {
      label: 'Öffentliche Ruhetage',
      items: ['Neujahr', 'Josefstag (19. März)', 'Auffahrt', 'Fronleichnam', '1. August', 'Maria Himmelfahrt', 'Allerheiligen', 'Maria Empfängnis', 'Karfreitag', 'Ostersonntag', 'Pfingstsonntag', 'Bettag', 'Weihnachtstag'],
      text: 'Die letzten fünf sind hohe Feiertage. Weitere Feiertage können die Nidwaldner Gemeinden in einem Reglement bestimmen.',
      source: 'nwRuhetage',
    },
    {
      label: 'Dem Sonntag gleichgestellt',
      items: ['Neujahr', 'Karfreitag', 'Auffahrt', 'Fronleichnam', 'Maria Himmelfahrt', 'Allerheiligen', 'Maria Empfängnis', 'Weihnachtstag'],
      text: 'So regelt es das Ruhetagsgesetz im Sinn des Arbeitsgesetzes. Der Josefstag ist öffentlicher Ruhetag, gehört aber nicht zu diesen Tagen.',
      source: 'nwRuhetage',
    },
    {
      label: 'Zweitwohnungsanteil',
      text: 'Emmetten 32,51 %. Die Gemeinde liegt als einzige in Nidwalden über 20 Prozent und untersteht damit den Bauvorschriften des Zweitwohnungsgesetzes.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Betreuen Sie Zweitwohnungen während unserer Abwesenheit?',
      answer: 'Ja. Wir reinigen vor Ihrer Ankunft und nach Ihrer Abreise und machen Kontrollgänge. Mehr dazu unter [Luxusimmobilien](/premium/luxusimmobilien).',
    },
    {
      question: 'Wer schaut nach der Liegenschaft, wenn die Eigentümer nicht vor Ort wohnen?',
      answer: 'In Seegemeinden gehören viele Wohnungen Eigentümern, die nur zeitweise da sind. Dann fehlt oft jemand, der regelmässig vorbeikommt. Die [Hauswartung](/leistungen/hauswartung) übernimmt Kontrollgänge, Waschküche, Entsorgung und Wohnungsübergaben und meldet Mängel an die Stelle, die die Stockwerkeigentümerschaft bestimmt, etwa an die Verwaltung.',
    },
    {
      question: 'Arbeiten Sie auch in Emmetten und im Engelbergertal?',
      answer: 'Ja, in allen elf Nidwaldner Gemeinden, von Hergiswil und Stansstad bis Wolfenschiessen und Emmetten, mit allen Leistungen und zu denselben Bedingungen.',
    },
    {
      question: 'Pflegen Sie auch Boote an den Liegeplätzen in Nidwalden?',
      answer: 'Ja, Yachten und Motorboote am Vierwaldstättersee, etwa in Stansstad, Buochs oder Beckenried: Innenraum, Polster, Teak und Gelcoat. Mehr unter [Yacht](/premium/yacht).',
    },
  ],
  menuText: kantonMenu.nidwalden.text,
}

// Zweitwohnungen und Hotels (/premium, ARE), kein Winterdienst (E29), Kündigungstermine (ow.ch), Ruhetage GDB 975.2
const obwalden: KantonPage = {
  name: 'Obwalden',
  kuerzel: 'OW',
  seo: {
    title: 'Reinigungsfirma Obwalden und Engelberg',
    description:
      'Reinigungsfirma Obwalden für das Sarneraatal und Engelberg: Hauswartung, Grundreinigung für Hotels und Zweitwohnungen. Kostenlose Offerte nach Besichtigung.',
  },
  h1: 'Reinigungsfirma Obwalden, vom Sarneraatal bis Engelberg',
  lead: [
    'Obwalden besteht aus zwei Teilen: dem Sarneraatal mit dem Hauptort Sarnen und dem Hochtal von Engelberg, das man über Nidwalden erreicht.',
    'Im Sarneraatal reinigen und betreuen wir Wohn- und Geschäftshäuser und Gewerbe. Engelberg prägen Zweitwohnungen und Hotels, für beide bieten wir Reinigung und Betreuung an.',
  ],
  facts: [
    { label: 'Anfahrt', value: 'A8, nach Engelberg durchs Engelbergertal' },
    { label: 'Kündigungstermine', value: 'Ende März, Ende Juni, Ende September' },
    { label: 'Eigener Feiertag', value: 'Bruderklausenfest, 25. September' },
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
      text: 'Viele Wohnungen im Klosterdorf stehen zwischen den Aufenthalten leer. Hier zählt die Reinigung zwischen zwei Aufenthalten mehr als ein fester Wochenrhythmus. Mehr im [Premium-Bereich](/premium).',
      premium: true,
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
      title: 'Wohnungswechsel',
      text: 'Wechselt die Mieterschaft, reinigen wir im Auftrag der Verwaltung oder der Eigentümerschaft vor der Übergabe, mit Abnahmegarantie.',
    },
  ],
  leistungen: [
    { path: '/premium/luxusimmobilien', title: 'Villen und Zweitwohnungen', text: 'Reinigung zwischen zwei Aufenthalten in Engelberg und am Sarnersee.' },
    { path: '/leistungen/sonderreinigungen', text: 'Grundreinigung für Hotels und Wohnungen, etwa vor der Saison.' },
    { path: '/leistungen/baureinigung', text: 'Nach Umbau und Renovation, bis zur Übergabe.' },
    { path: '/leistungen/hauswartung', text: 'Kontrollgänge, Waschküche, Entsorgung und Wohnungsübergaben.' },
    { path: '/leistungen/umzugsreinigung', text: 'Endreinigung beim Mieterwechsel im Sarneraatal, mit Abnahmegarantie.' },
  ],
  planung: {
    title: 'Saison, Zufahrt und Engelberg',
    paragraphs: [
      'Ins Sarneraatal fahren wir von Emmenbrücke über Luzern und die Autobahn A8. Nach Engelberg führt der Weg durch Nidwalden und das Engelbergertal.',
      'In Engelberg richten sich die Einsätze nach Ankunft, Abreise und Saison. Regeln Sie Zufahrt, Parkplatz und Schlüsselübergabe vor dem ersten Einsatz, besonders wenn Sie selbst nicht vor Ort sind.',
      'Den Winterdienst übernehmen wir nicht, auch nicht in Engelberg. Vergeben Sie die Schneeräumung für Zufahrt und Plätze deshalb separat, am besten vor Saisonbeginn.',
    ],
  },
  daten: [
    {
      label: 'Kündigungstermine',
      text: 'Ist im Mietvertrag nichts anderes abgemacht, lässt sich eine Wohnung auf Ende März, Ende Juni oder Ende September kündigen. Die Kündigung muss spätestens Ende Dezember, Ende März oder Ende Juni zugestellt werden können.',
      source: 'owSchlichtung',
    },
    {
      label: 'Öffentliche Ruhetage',
      items: ['Neujahr', 'Auffahrt', 'Fronleichnam', '1. August', 'Mariä Himmelfahrt', 'Bruderklausenfest (25. September)', 'Allerheiligen', 'Mariä Empfängnis', 'Karfreitag', 'Ostersonntag', 'Pfingstsonntag', 'Bettag', 'Weihnachten'],
      text: 'Das Bruderklausenfest ist den Sonntagen im Sinn des Arbeitsgesetzes nicht gleichgestellt. Jede Einwohnergemeinde kann zudem einen Lokalfeiertag festlegen, der einem Sonntag gleichkommt.',
      source: 'owRuhetage',
    },
    {
      label: 'Zweitwohnungsanteil',
      text: 'Engelberg 55,87 %, als einzige Obwaldner Gemeinde über 20 Prozent. Lungern liegt mit 18,92 % darunter.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Kommen Sie auch nach Engelberg?',
      answer: 'Ja. Engelberg gehört zum Kanton Obwalden und damit zu unserem Einzugsgebiet, mit allen Leistungen und zu denselben Bedingungen.',
    },
    {
      question: 'Reinigen Sie zwischen zwei Aufenthalten in unserer Ferienwohnung?',
      answer: 'Ja. Nennen Sie uns An- und Abreise möglichst früh, dann liegt die Reinigung zwischen Ihren Aufenthalten und nicht an Ihrem ersten Ferientag.',
    },
    {
      question: 'Wann ist der beste Zeitpunkt für eine Grundreinigung im Hotel?',
      answer: 'Dann, wenn wenige Gäste im Haus sind: in der Zwischensaison, vor einer Eröffnung oder nach einer Renovation. Planen Sie den Termin früh, denn in dieser Zeit laufen oft auch Handwerksarbeiten. Die Reinigung gehört ans Ende, damit kein neuer Staub entsteht. Mehr unter [Grund- und Sonderreinigung](/leistungen/sonderreinigungen) und [Bau- und Bauendreinigung](/leistungen/baureinigung).',
    },
    {
      question: 'Übernehmen Sie die Endreinigung bei einem Mieterwechsel?',
      answer: 'Ja, im Auftrag der Verwaltung oder der Eigentümerschaft und mit Abnahmegarantie. Weil in Obwalden ohne andere Abmachung auf Ende März, Juni oder September gekündigt wird, häufen sich die Übergaben an diesen Terminen. Mehr zur [Umzugsreinigung](/leistungen/umzugsreinigung).',
    },
  ],
  menuText: kantonMenu.obwalden.text,
}

export const kantone: Record<KantonKey, KantonPage> = { luzern, zug, aargau, nidwalden, obwalden }

/** Überschriften und Abschluss der Kantonsseiten (seiten/kanton) */
export const kantonUi = {
  regionen: 'Regionen und Orte',
  objekte: 'Typische Objekte',
  leistungen: 'Gefragte Leistungen',
  /** Kurzname des Planungsabschnitts in der Abschnittsleiste, der Titel steht je Kanton in planung.title */
  planung: 'Planung',
  weitere: 'Weitere Kantone',
  overview: 'Das ganze Einzugsgebiet',
  toCanton: 'Zur Kantonsseite',
  seat: 'Unser Sitz',
  /** Kasten mit geprüften Angaben je Kanton, Stand = Tag der Prüfung an der Quelle */
  daten: {
    title: 'Kantonsdaten für die Planung',
    nav: 'Kantonsdaten',
    intro: 'Kantonale Regeln und amtliche Zahlen, die für Reinigungspläne und Wohnungswechsel zählen, je mit Quelle. Im Einzelfall gilt der Wortlaut der Quelle.',
    /** Mit Satzzeichen, Französisch mit geschütztem Leerzeichen vor dem Doppelpunkt */
    source: 'Quelle:',
    stand: 'Stand der Angaben:',
  },
  datenStand: '2026-09-28',
  /** Quellen der Kantonsdaten, einmal je Sprache; Seiten verweisen per Schlüssel */
  quellen: quelle,
  /** Leistungs- und Premiumseiten (N6): die fünf Kantone als Links unter «Passt auch dazu» */
  gebiet: 'Im ganzen Einzugsgebiet, zu denselben Bedingungen',
  cta: {
    title: 'Besichtigung und Offerte',
    text: `Beschreiben Sie uns Objekt und Ort. Wir melden uns ${company.responseTime} und kommen für die Besichtigung vorbei, kostenlos und unverbindlich.`,
  },
}

/** Überleitung auf /einzugsgebiet zu den Kantonsseiten */
export const kantoneUebersicht = {
  title: 'Ihr Kanton im Detail',
  text: 'Jeder Kanton hat eine eigene Seite: Regionen und Orte, typische Objekte, Planung und die Kantonsdaten zu Ruhetagen, Kündigungsterminen und Zweitwohnungen.',
}
