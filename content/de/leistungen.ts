import type { ServicePageContent } from '../types'
import { answers, steps } from './common'

/**
 * Texte der neun Leistungsseiten unter /leistungen (M29, Zielbild v2 in
 * Webseite-Analyse/03, Abschnitt 2a). Entwürfe des Agenten nach E23, fachlich
 * vom Kunden gegenzulesen. Grundlage je Seite steht im Kommentar darüber.
 * Allgemeine Beschreibungen einer Leistung («typisch sind») sind keine Zusage,
 * der verbindliche Umfang steht in der Offerte.
 */

// Grundlage: R3a (Leistung, Nachfüllservice), R10c (Rhythmus), E28 (keine Privathaushalte), K01, K08
const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Laufende Reinigung',
  h1: 'Unterhaltsreinigung für Liegenschaften und Gewerbe',
  lead: [
    'Treppenhaus, Eingang und Gemeinschaftsräume prägen den Eindruck einer Liegenschaft, für Mieterinnen und Mieter ebenso wie für Kundschaft und Besuch. Mit einer Unterhaltsreinigung bleiben sie sauber, ohne dass Sie sich selbst darum kümmern müssen.',
    'Wir reinigen Mehrfamilienhäuser, Wohn- und Geschäftshäuser und Gewerbeflächen in einem festen Rhythmus, den wir nach der Besichtigung mit Ihnen festlegen. Verbrauchsmaterial füllen wir dabei nach.',
  ],
  facts: [
    { label: 'Für', value: 'Mehrfamilienhäuser, Wohn- und Geschäftshäuser, Gewerbeflächen' },
    { label: 'Rhythmus', value: 'Mehrmals pro Woche, je nach Fläche und Nutzung' },
    { label: 'Inbegriffen', value: 'Nachfüllservice für Verbrauchsmaterial' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Was wir reinigen und wie oft, halten wir nach der Besichtigung fest. Typisch sind:',
    items: [
      'Treppenhäuser, Eingänge und Lifte',
      'Böden in allen vereinbarten Räumen',
      'Türen, Handläufe, Schalter und Glas im Eingangsbereich',
      'Sanitärräume, Küchen und Aufenthaltsräume',
      'Waschküchen, Keller- und Nebenräume',
      'Abfall leeren und Verbrauchsmaterial nachfüllen',
    ],
    notIncluded: [
      'Büros und Praxen: siehe [Büro- und Praxisreinigung](/leistungen/bueroreinigung).',
      'Einmalige Grundreinigungen: siehe [Grund- und Sonderreinigung](/leistungen/sonderreinigungen), Endreinigungen vor der Übergabe unter [Umzugsreinigung](/leistungen/umzugsreinigung).',
      'Fenster aussen und Fassaden: siehe [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
      'Privathaushalte. Für Villen und Residenzen gibt es unseren [Premium-Bereich](/premium).',
    ],
  },
  sections: [
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Eine Unterhaltsreinigung lohnt sich überall dort, wo viele Menschen dieselben Flächen nutzen. Im Mehrfamilienhaus sind das Treppenhaus, Lift und Waschküche. Im Wohn- und Geschäftshaus kommen Eingänge mit Publikumsverkehr dazu, in Gewerbeflächen Empfang, Gänge und Sanitärräume.',
        'Häufig kommt die Anfrage, wenn die bisherige Lösung nicht mehr trägt: Die Reinigung durch die Mieterschaft klappt nicht, die bisherige Firma hört auf, oder eine Verwaltung übernimmt eine neue Liegenschaft.',
      ],
    },
    {
      title: 'Nachfüllservice',
      paragraphs: [
        'Verbrauchsmaterial füllen wir im Rahmen der Unterhaltsreinigung nach. Welche Artikel dazugehören und wer sie beschafft, halten wir in der Offerte fest.',
      ],
      items: [
        'Toilettenpapier, Papierhandtücher und Seife',
        'Abfallsäcke und Reinigungstücher',
        'Weiteres Verbrauchsmaterial nach Absprache',
      ],
    },
    {
      title: 'Planung und Rhythmus',
      paragraphs: [
        'Wie oft gereinigt wird, hängt von der Nutzung ab, nicht nur von der Fläche. Ein Eingang mit viel Publikumsverkehr braucht mehr Pflege als ein Kellergang, den nur wenige betreten. Sinnvoll ist deshalb ein Rhythmus je Bereich statt eines einzigen für das ganze Haus. Unseren Vorschlag besprechen wir nach der Besichtigung mit Ihnen.',
      ],
      items: [
        'Eingang, Lift und Treppenhaus: häufiger, weil hier der meiste Schmutz von aussen hereinkommt',
        'Sanitärräume und Küchen: häufiger, aus hygienischen Gründen',
        'Keller, Estrich und Nebenräume: seltener, je nach Nutzung',
        'Glas im Eingangsbereich: nach Bedarf, bei Regenwetter und im Winter öfter',
      ],
    },
    {
      title: 'Woran Sie eine gute Unterhaltsreinigung erkennen',
      paragraphs: [
        'Sauber heisst mehr als ein gewischter Boden. Diese Punkte zeigen Ihnen bei einem Rundgang schnell, wie gründlich gereinigt wird:',
      ],
      items: [
        'Handläufe, Lichtschalter und Liftknöpfe sind sauber, nicht nur die Böden',
        'In Ecken, auf Treppenkanten und hinter Türen bleibt kein Schmutz liegen',
        'Sanitärräume riechen frisch, Seife und Papier sind aufgefüllt',
        'Glastüren im Eingang sind ohne Schlieren und Fingerabdrücke',
        'Der vereinbarte Umfang ist schriftlich festgehalten, damit beide Seiten wissen, was gilt',
      ],
    },
    {
      title: 'Zusammenarbeit mit Verwaltung und Eigentümerschaft',
      paragraphs: [
        'Vor dem Start klären wir mit Ihnen den Zugang zur Liegenschaft, etwa mit Schlüssel oder Badge, und wo Geräte und Reinigungsmittel stehen dürfen. Ein abschliessbarer Putzraum oder ein Kellerabteil erleichtert die Arbeit.',
        'Für die Mieterschaft hilft ein kurzer Aushang, an welchen Tagen gereinigt wird. Dann bleiben Treppen und Gänge an diesen Tagen frei von Schuhen, Velos und anderen Gegenständen.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Vereinbarung',
      text: 'Mit Ihrer Zusage steht fest, welche Räume wir wie oft reinigen und was wir nachfüllen.',
    },
    {
      title: 'Start',
      text: 'Wir beginnen zum vereinbarten Termin. Ändert sich die Nutzung, besprechen wir mit Ihnen einen neuen Umfang oder Rhythmus.',
    },
  ],
  faq: [
    {
      question: 'Wie oft sollte gereinigt werden?',
      answer:
        'Das hängt davon ab, wie stark die Flächen genutzt werden. Nach der Besichtigung schlagen wir Ihnen einen Rhythmus vor. Die Unterhaltsreinigung ist für Objekte gedacht, die mehrmals pro Woche gereinigt werden.',
    },
    {
      question: 'Was ist der Unterschied zur Grundreinigung?',
      answer:
        'Die Unterhaltsreinigung hält Flächen in einem festen Rhythmus sauber. Eine Grundreinigung ist ein einmaliger, gründlicher Einsatz, der auch Verschmutzungen entfernt, die die laufende Reinigung nicht erreicht. Mehr dazu unter [Grund- und Sonderreinigung](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Können wir den Rhythmus später ändern?',
      answer: 'Ja. Wenn sich die Nutzung ändert, besprechen wir mit Ihnen einen neuen Umfang oder Rhythmus.',
    },
    {
      question: 'Müssen die Mieterinnen und Mieter etwas vorbereiten?',
      answer:
        'Nein. Hilfreich ist, wenn Treppen und Gänge an den Reinigungstagen frei von Schuhen, Velos und anderen Gegenständen sind. Ein kurzer Aushang im Treppenhaus reicht dafür meist.',
    },
    { question: 'Reinigen Sie mit umweltfreundlichen Mitteln?', answer: answers.mittel },
    { question: 'Was kostet eine Unterhaltsreinigung?', answer: `${answers.kosten} Mehr dazu im Ratgeber: [Wovon die Kosten einer Unterhaltsreinigung abhängen](/blog/reinigungskosten-schweiz).` },
    {
      question: 'Worauf sollten wir bei der Wahl einer Reinigungsfirma achten?',
      answer:
        'Auf einen klar beschriebenen Leistungsumfang, eine belegte Versicherung, eine feste Ansprechperson und eine Offerte nach Besichtigung. Mehr dazu im Ratgeber: [Wie finde ich die richtige Reinigungsfirma?](/blog/richtige-reinigungsfirma-finden)',
    },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/bueroreinigung', text: 'Wenn es vor allem um Büros oder eine Praxis geht.' },
    { path: '/leistungen/hauswartung', text: 'Wenn neben der Reinigung auch Kontrollgänge, Kleinreparaturen und Entsorgung dazukommen.' },
    { path: '/leistungen/sonderreinigungen', text: 'Für eine Grundreinigung, etwa vor dem Start oder nach einer intensiven Nutzung.' },
  ],
  cta: {
    title: 'Offerte für Ihre Liegenschaft',
    text: 'Beschreiben Sie uns Objekt, Fläche und gewünschten Rhythmus. Wir kommen für die Besichtigung vorbei und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3d (eigene Seite, Büros als Hauptzielgruppe), R10a (Praxen), E17, K01, E18 (Sprachen)
const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Laufende Reinigung',
  h1: 'Reinigung für Büros und Praxen',
  lead: [
    'In Büros und Praxen soll die Reinigung den Betrieb nicht stören: kein Staubsauger in der Besprechung, kein nasser Boden in der Sprechstunde. Deshalb legen wir die Einsatzzeiten mit Ihnen fest, passend zu Ihren Arbeits- und Öffnungszeiten.',
    'Wir reinigen Büros, Verwaltungen und Praxen in einem festen Rhythmus. Unsere Mitarbeitenden sprechen Deutsch, Englisch, Französisch und Italienisch, praktisch für Betriebe mit internationalem Team.',
  ],
  facts: [
    { label: 'Für', value: 'Büros, Verwaltungen und Praxen' },
    { label: 'Zeiten', value: 'Nach Absprache, passend zu Ihren Arbeits- und Öffnungszeiten' },
    { label: 'Rhythmus', value: 'Mehrmals pro Woche, je nach Fläche und Nutzung' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den genauen Umfang halten wir nach der Besichtigung fest. Typisch sind:',
    items: [
      'Arbeitsplätze und freie Oberflächen',
      'Böden in Büros, Gängen und Sitzungszimmern',
      'Empfang, Eingangsbereich und Glastüren',
      'Teeküchen und Aufenthaltsräume',
      'Sanitärräume',
      'Abfall und Altpapier, Verbrauchsmaterial nachfüllen',
    ],
    notIncluded: [
      'Treppenhäuser und Gemeinschaftsräume ganzer Liegenschaften: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Einmalige Grundreinigungen: siehe [Grund- und Sonderreinigung](/leistungen/sonderreinigungen).',
      'Aufbereitung von Instrumenten und Medizinprodukten, sie bleibt bei Ihrem Praxisteam.',
    ],
  },
  sections: [
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Kleine Büros mit wenigen Arbeitsplätzen, Verwaltungen über mehrere Etagen, Arzt- und Therapiepraxen mit Wartezimmer: Die Räume sind verschieden, der Anspruch ist derselbe. Morgens soll alles sauber und bereit sein, ohne dass jemand die Reinigung bemerkt.',
        'Häufig kommt die Anfrage beim Umzug in neue Räume, wenn das Team wächst oder wenn die bisherige Reinigung nicht mehr zu den Arbeitszeiten passt.',
      ],
    },
    {
      title: 'Was bei einem Einsatz passiert',
      paragraphs: [
        'Bewährt ist eine feste Reihenfolge, von oben nach unten und von sauber nach schmutzig: Abfall und Altpapier leeren, freie Oberflächen und Arbeitsplätze abwischen, Teeküche und Sanitärräume reinigen, Verbrauchsmaterial nachfüllen und zum Schluss die Böden. So wird kein gereinigter Boden wieder verschmutzt.',
        'Ob auch Bildschirme, Tastaturen, Telefone oder Pflanzen dazugehören, klären wir bei der Besichtigung und halten es in der Offerte fest.',
      ],
    },
    {
      title: 'Reinigung in Praxen',
      paragraphs: [
        'In Praxen richten wir uns nach Ihrem Hygieneplan. Welche Räume und Flächen wir reinigen und was Ihr Praxisteam selbst übernimmt, klären wir bei der Besichtigung und halten es in der Offerte fest.',
        'Im Empfang und im Wartezimmer werden Türgriffe, Theke, Stühle und Ablagen von vielen Menschen berührt. Welche Mittel für diese Flächen gelten, steht in Ihrem Hygieneplan. Behandlungsräume und Geräte bleiben so, wie Ihr Praxisteam es vorgibt.',
      ],
    },
    {
      title: 'Zeiten und Zugang',
      paragraphs: [
        'Die meisten Büros werden ausserhalb der Arbeitszeit gereinigt, früh am Morgen oder am Abend. In Praxen richtet sich die Zeit nach der Sprechstunde. Die Einsatzzeiten legen wir mit Ihnen fest.',
        'Für den Zugang braucht es meist einen Schlüssel oder Badge und klare Regeln für Alarmanlage, Licht und Abschliessen. Das klären wir vor dem ersten Einsatz.',
      ],
    },
    {
      title: 'Was den Aufwand bestimmt',
      paragraphs: [
        'Wie lange ein Einsatz dauert und wie oft wir kommen, hängt weniger von der Fläche allein ab als davon, wie die Räume genutzt werden. Diese Punkte klären wir bei der Besichtigung:',
      ],
      items: [
        'Fläche und Art der Räume, etwa Einzelbüros, Grossraum, Sitzungszimmer und Empfang',
        'Anzahl Arbeitsplätze und wie stark die Räume genutzt werden',
        'Teeküchen und Sanitärräume, sie brauchen mehr Zeit als Büroflächen',
        'Bodenbeläge wie Teppich, Parkett, Stein oder Kunststoff',
        'Glastüren, Glaswände und andere Glasflächen',
        'Rhythmus und Einsatzzeiten',
        'Zugang über Schlüssel, Badge oder Alarmanlage',
        'Ob Verbrauchsmaterial wie Seife, Papier und Abfallsäcke dazugehört',
      ],
    },
    {
      title: 'Welche Angaben in Ihre Offertanfrage gehören',
      paragraphs: [
        'Je genauer Ihre Anfrage ist, desto gezielter können wir die Besichtigung vorbereiten. Hilfreich sind diese Angaben:',
      ],
      items: [
        'Adresse und Art des Betriebs, etwa Büro, Verwaltung oder Praxis',
        'Ungefähre Fläche und Anzahl Etagen',
        'Anzahl Arbeitsplätze, Sitzungszimmer, Teeküchen und Sanitärräume',
        'Gewünschter Rhythmus und Zeiten, zu denen gereinigt werden soll',
        'Besonderheiten wie Praxisräume mit Hygieneplan, vertrauliche Bereiche oder grosse Glasflächen',
        'Ob Sie umweltfreundliche Reinigungsmittel wünschen',
        'Gewünschter Start und Ansprechperson für die Besichtigung',
      ],
    },
    {
      title: 'Woran Sie eine gute Büroreinigung erkennen',
      items: [
        'Papierkörbe sind geleert und mit neuen Säcken versehen',
        'Die Teeküche ist ohne Kaffeeränder, die Spüle sauber und trocken',
        'Glastüren und Glaswände sind ohne Fingerabdrücke',
        'Seifen- und Papierspender in den Sanitärräumen sind aufgefüllt',
        'Unterlagen und persönliche Dinge liegen so, wie Sie sie verlassen haben',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Zeiten und Zugang',
      text: 'Wir legen fest, wann wir reinigen und wie wir ins Gebäude kommen, etwa mit Schlüssel oder Badge.',
    },
    {
      title: 'Start',
      text: 'Wir beginnen zum vereinbarten Termin. Ändert sich Ihr Bedarf, passen wir Umfang und Rhythmus mit Ihnen an.',
    },
  ],
  faq: [
    {
      question: 'Reinigen Sie ausserhalb unserer Arbeitszeiten?',
      answer:
        'Die Einsatzzeiten legen wir mit Ihnen fest, passend zu Ihren Arbeits- und Öffnungszeiten. Sagen Sie uns bei der Anfrage, wann gereinigt werden soll.',
    },
    {
      question: 'Reinigen Sie auch Arzt- und Therapiepraxen?',
      answer:
        'Ja. In Praxen richten wir uns nach Ihrem Hygieneplan und klären bei der Besichtigung, welche Räume und Flächen wir übernehmen.',
    },
    {
      question: 'Müssen wir die Arbeitsplätze vor der Reinigung aufräumen?',
      answer:
        'Wir reinigen freie Oberflächen. Je weniger auf den Tischen liegt, desto gründlicher lässt sich reinigen. Wie Sie es mit Unterlagen, Bildschirmen und Tastaturen halten möchten, klären wir bei der Besichtigung.',
    },
    {
      question: 'Wie läuft die Schlüsselübergabe, und wie kommt Ihr Team ins Gebäude?',
      answer:
        'Vor dem ersten Einsatz legen wir mit Ihnen fest, welche Schlüssel, Badges oder Codes unser Team erhält und welche Regeln für Alarmanlage, Licht und Abschliessen gelten.',
    },
    {
      question: 'Sprechen Ihre Mitarbeitenden auch Englisch?',
      answer: `${answers.sprachen} Das ist praktisch, wenn in Ihrem Büro mehrere Sprachen gesprochen werden.`,
    },
    {
      question: 'Wer haftet, wenn bei der Reinigung etwas beschädigt wird?',
      answer:
        'Wir haben eine Betriebshaftpflichtversicherung mit einer Deckung von CHF 10 Mio. Fällt Ihnen nach einem Einsatz ein Schaden auf, melden Sie ihn uns bitte gleich.',
    },
    {
      question: 'Wie lange läuft der Vertrag, und wie kann man kündigen?',
      answer: 'Laufzeit und Kündigung werden in der Offerte vereinbart. Sprechen Sie Ihre Wünsche dazu bei der Besichtigung an.',
    },
    { question: 'Reinigen Sie auch mit umweltfreundlichen Mitteln?', answer: answers.mittel },
    { question: 'Was kostet die Büroreinigung?', answer: `${answers.kosten} Mehr dazu im Ratgeber: [Wovon die Kosten einer Unterhaltsreinigung abhängen](/blog/reinigungskosten-schweiz).` },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Für Treppenhäuser und Gemeinschaftsräume der ganzen Liegenschaft.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Fenster und Glasflächen, auch aussen.' },
    { path: '/leistungen/facility-services', text: 'Wenn Reinigung, Hauswartung und Umgebung aus einer Hand kommen sollen.' },
  ],
  cta: {
    title: 'Offerte für Ihr Büro oder Ihre Praxis',
    text: 'Nennen Sie uns Fläche, Räume und gewünschte Zeiten. Wir kommen vorbei und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3b (fünf Sonderreinigungen), W01 und E28 (Umzugsreinigung nicht für Mieter), K07,
// 24-SEO-KEYWORDS (geschärft auf Grund- und Sonderreinigung, Endreinigung auf eigener Seite)
const sonderreinigungen: ServicePageContent = {
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
    steps.anfrage,
    steps.besichtigung,
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

// Grundlage: E56 (Abnahmegarantie bestätigt, Wortlaut unverändert), E28 (nicht für Mieter), W01,
// 24-SEO-KEYWORDS (eigene Seite, Nutzerfragen), E18 (keine Preise)
const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Umzugs- und Endreinigung mit Abnahmegarantie',
  lead: [
    'Bei der Wohnungsabgabe prüft die Verwaltung jeden Raum: Küche, Bad, Fenster, Storen, Schränke und Nebenräume. Damit die Abnahme ohne Beanstandung klappt, muss die Wohnung gründlich gereinigt sein, und das auf einen festen Termin.',
    'Wir übernehmen die Umzugs- und Endreinigung von Wohnungen und Geschäftsflächen für Verwaltungen, Eigentümer und Unternehmen, mit Abnahmegarantie: Beanstandet die Verwaltung bei der Abnahme etwas an unserer Reinigung, reinigen wir kostenlos nach.',
  ],
  facts: [
    { label: 'Für', value: 'Verwaltungen, Eigentümer, Stockwerkeigentümerschaften und Unternehmen' },
    { label: 'Objekte', value: 'Wohnungen und Geschäftsflächen vor der Übergabe' },
    { label: 'Garantie', value: 'Abnahmegarantie, Einzelheiten in der Offerte' },
  ],
  scope: {
    title: 'Was zur Endreinigung gehört',
    intro: 'Den genauen Umfang der Wohnungsreinigung halten wir nach der Besichtigung in der Offerte fest. Typisch sind:',
    items: [
      'Küche mit Backofen, Kochfeld, Dampfabzug, Kühlschrank und Schränken, innen und aussen',
      'Bad und WC mit Armaturen, Plättli, Fugen und Spiegeln, von Kalk befreit',
      'Fenster innen und aussen, mit Rahmen, Falzen und Fensterbänken',
      'Storen und Fensterläden nach Absprache',
      'Einbauschränke, Türen, Zargen, Schalter und Steckdosen',
      'Böden und Sockelleisten in allen Räumen',
      'Balkon oder Sitzplatz, Keller- und Estrichabteil',
    ],
    notIncluded: [
      'Umzugsreinigungen im Auftrag von Mieterinnen und Mietern einzelner Wohnungen. Für Villen und Residenzen gibt es unseren [Premium-Bereich](/premium).',
      'Umzugstransport und Räumung von Möbeln.',
      'Reparaturen, Malerarbeiten und das Beheben von Schäden.',
      'Grundreinigung ohne Übergabe: siehe [Grund- und Sonderreinigung](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'Die Abnahmegarantie',
      paragraphs: [
        'Beanstandet die Verwaltung bei der Abnahme etwas an unserer Reinigung, reinigen wir kostenlos nach. Die Einzelheiten stehen in der Offerte.',
        'Die Garantie bezieht sich auf unsere Reinigung. Schäden, Abnutzung oder Reparaturen, die bei der Abnahme festgehalten werden, betreffen nicht die Reinigung und gehören deshalb nicht dazu.',
      ],
    },
    {
      title: 'Wie sauber muss eine Wohnung bei der Übergabe sein?',
      paragraphs: [
        'Wie gründlich gereinigt werden muss, regelt meist der Mietvertrag. Üblich ist in der Schweiz eine gründliche Reinigung der ganzen Wohnung samt Nebenräumen. Bei der Abnahme sieht die Verwaltung deshalb auch dorthin, wo im Alltag selten jemand putzt: in den Backofen, in den Dampfabzug, auf die Storen, in die Fensterfalze und in die Schränke.',
        'Was im Einzelfall gilt, steht im Mietvertrag und im Abnahmeprotokoll. Diese Seite gibt einen Überblick und ersetzt keine Rechtsberatung.',
      ],
    },
    {
      title: 'Planung und Termin',
      paragraphs: [
        'Die Endreinigung liegt zwischen Auszug und Abnahme. Am besten sind die Räume dann leer, damit auch Schränke, Böden hinter Möbeln und Einbauten gereinigt werden können. Planen Sie die Reinigung so, dass zwischen Reinigung und Abnahme möglichst wenig Zeit liegt.',
        'Buchen Sie früh, sobald der Abgabetermin feststeht. Um die Monatsenden und zu den ortsüblichen Umzugsterminen sind viele Termine gefragt.',
      ],
      items: [
        'Möbel und persönliche Gegenstände sind ausgeräumt',
        'Strom und Wasser sind noch angeschlossen',
        'Schlüssel für Wohnung, Keller, Estrich und Briefkasten sind verfügbar',
      ],
    },
    {
      title: 'Für wen wir die Umzugsreinigung übernehmen',
      paragraphs: [
        'Für Verwaltungen, die Wohnungen zwischen zwei Mietverhältnissen bezugsbereit machen. Für Eigentümer und Stockwerkeigentümer, die eine Wohnung verkaufen, übergeben oder neu vermieten. Und für Unternehmen, die Büro- oder Geschäftsflächen abgeben.',
        'Mieterinnen und Mieter einzelner Wohnungen bedienen wir nicht. Bei Villen und Residenzen übernehmen wir die Endreinigung im [Premium-Bereich](/premium) auch für Privatpersonen.',
      ],
    },
    {
      title: 'Woran Sie eine gute Endreinigung erkennen',
      items: [
        'Backofen, Bleche und Dampfabzug sind ohne Fettfilm',
        'Armaturen, Duschglas und Plättli sind ohne Kalkränder',
        'Fenster, Rahmen und Falze sind ohne Schlieren und Staub',
        'Schränke sind innen sauber und trocken',
        'Entlang der Sockelleisten bleiben keine Staubränder',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Besichtigung und Offerte',
      text: 'Wir sehen uns die Wohnung oder Fläche an, möglichst vor dem Auszug, und klären mit Ihnen Umfang und Termin. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Endreinigung',
      text: 'Wir reinigen zwischen Auszug und Abnahme, zum vereinbarten Termin.',
    },
    {
      title: 'Abnahme',
      text: 'Bei der Abnahme gilt die Abnahmegarantie gemäss Offerte.',
    },
  ],
  faq: [
    {
      question: 'Wie viel kostet eine Umzugsreinigung?',
      answer:
        'Das hängt vor allem von Grösse und Zustand der Wohnung ab, von der Anzahl Fenster und Storen, von Nebenräumen wie Keller, Estrich oder Balkon und vom Termin. Preise nennen wir deshalb erst in der Offerte, nachdem wir das Objekt gesehen haben. Besichtigung und Offerte sind kostenlos und unverbindlich.',
    },
    {
      question: 'Wie sauber muss eine Wohnung bei der Übergabe in der Schweiz sein?',
      answer:
        'Üblich ist eine gründliche Reinigung der ganzen Wohnung samt Nebenräumen: Küche mit Geräten, Bad und WC, Fenster innen und aussen samt Rahmen, Storen, Schränke, Böden, Keller, Estrich und Balkon. Was im Einzelfall gilt, regeln Mietvertrag und Abnahmeprotokoll. Diese Antwort ist keine Rechtsberatung.',
    },
    {
      question: 'Was passiert, wenn die Verwaltung bei der Abnahme etwas beanstandet?',
      answer:
        'Beanstandet die Verwaltung bei der Abnahme etwas an unserer Reinigung, reinigen wir kostenlos nach. Die Einzelheiten stehen in der Offerte.',
    },
    {
      question: 'Wann buche ich die Umzugsreinigung am besten?',
      answer:
        'Sobald der Abgabetermin feststeht. Um die Monatsenden und zu den ortsüblichen Umzugsterminen sind viele Termine gefragt. Die Reinigung legen wir zwischen Auszug und Abnahme.',
    },
    {
      question: 'Müssen die Räume für die Endreinigung leer sein?',
      answer:
        'Am besten ja. In leeren Räumen lassen sich auch Schränke, Einbauten und Böden hinter Möbeln reinigen, und genau diese Stellen prüft die Verwaltung bei der Abnahme.',
    },
    {
      question: 'Übernehmen Sie die Umzugsreinigung auch für Mieterinnen und Mieter?',
      answer:
        'Nein. Wir übernehmen die Umzugsreinigung für Verwaltungen, Eigentümer und Unternehmen. Bei Villen und Residenzen gibt es sie im [Premium-Bereich](/premium) auch für Privatpersonen.',
    },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Für eine Grundreinigung ohne Übergabe, etwa vor dem Start einer Unterhaltsreinigung.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Glasflächen und Fassaden der ganzen Liegenschaft.' },
    { path: '/leistungen/hauswartung', text: 'Wenn die Hauswartung bei Wohnungsübergaben mitwirken soll.' },
  ],
  cta: {
    title: 'Offerte für Ihre Umzugsreinigung',
    text: 'Nennen Sie uns Objekt, Grösse und Abgabetermin. Wir sehen uns die Räume an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3a (Baureinigung), R3b (Bauendreinigung), R10b, E17
const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Bau- und Bauendreinigung für Neubau und Umbau',
  lead: [
    'Nach Bau- und Umbauarbeiten liegen Staub, Mörtelreste und Schutzfolien überall. Bevor Mieter, Käuferinnen oder Ihr Team einziehen, muss alles bezugsbereit sein, oft auf einen festen Übergabetermin.',
    'Wir reinigen während und nach den Arbeiten, bis die Räume übergeben werden können. Für Bauherrschaften, Architekturbüros, Generalunternehmen und Verwaltungen.',
  ],
  facts: [
    { label: 'Für', value: 'Bauherrschaften, Architekturbüros, Generalunternehmen und Verwaltungen' },
    { label: 'Objekte', value: 'Neubauten, Umbauten und Renovationen' },
    { label: 'Zeitpunkt', value: 'Während der Bauphase und vor der Übergabe' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro:
      'Eine Baureinigung läuft meist in Etappen, abgestimmt auf den Baufortschritt. Welche Etappen wir übernehmen, legen wir mit Ihnen fest.',
    items: [
      'Grobreinigung während der Bauphase',
      'Zwischenreinigungen, etwa vor dem Innenausbau',
      'Bauendreinigung vor der Übergabe',
      'Fenster, Rahmen und Glas von Staub und Rückständen befreien',
      'Klebereste und Schutzfolien entfernen',
      'Böden, Sanitärräume, Küchen und Einbauschränke bezugsbereit reinigen',
    ],
    notIncluded: [
      'Laufende Reinigung nach dem Bezug: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Fassaden: siehe [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  sections: [
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Neubauten von Wohn- und Geschäftshäusern, Umbauten einzelner Etagen, renovierte Wohnungen vor der Wiedervermietung oder Ladenlokale vor der Eröffnung. Gemeinsam ist allen ein fester Termin: Übergabe, Bezug oder Eröffnung.',
        'Oft wird die Reinigung erst kurz vor diesem Termin angefragt. Besser ist es, sie früh in den Terminplan aufzunehmen, damit sie nach den letzten Handwerksarbeiten und vor der Abnahme Platz hat.',
      ],
    },
    {
      title: 'Was bei der Bauendreinigung passiert',
      paragraphs: [
        'Baustaub ist fein und setzt sich überall ab: auf Böden, in Fensterfalzen, auf Türrahmen, in Schränken und Schubladen. Deshalb wird von oben nach unten gereinigt und oft in mehr als einem Durchgang.',
        'Dazu kommen Rückstände wie Klebereste, Etiketten und Schutzfolien. Sie werden mit Mitteln und Werkzeugen entfernt, die zur Oberfläche passen, damit Glas, Armaturen und neue Böden nicht zerkratzen.',
      ],
    },
    {
      title: 'Die Etappen im Überblick',
      items: [
        'Grobreinigung: groben Schmutz und Staub entfernen, damit die nächsten Arbeiten auf sauberem Grund beginnen',
        'Zwischenreinigung: vor dem Innenausbau, etwa bevor Böden verlegt oder Küchen montiert werden',
        'Bauendreinigung: gründlich und bezugsbereit, nach den letzten Handwerksarbeiten und vor der Abnahme',
      ],
      paragraphs: [
        'Arbeiten nach der Bauendreinigung noch Handwerker in den Räumen, entsteht neuer Staub. Planen Sie die Endreinigung deshalb nach den letzten Arbeiten ein.',
      ],
    },
    {
      title: 'Zusammenarbeit mit der Bauleitung',
      paragraphs: [
        'Auf der Baustelle gelten die Regeln der Bauleitung. Vor dem ersten Einsatz klären wir Zutritt, Sicherheitsregeln, Strom und Wasser, einen Platz für Geräte und den Umgang mit Abfall.',
        'Hilfreich ist eine Ansprechperson auf der Baustelle, die Termine und Zugang bestätigt. Verschiebt sich der Terminplan, stimmen wir die Einsätze neu mit Ihnen ab.',
      ],
    },
    {
      title: 'Woran Sie eine gute Bauendreinigung erkennen',
      items: [
        'Kein Staubfilm auf Fensterbänken, Türrahmen und in Schubladen',
        'Glas ohne Kleberreste, Schlieren und Kratzer',
        'Schutzfolien an Fenstern, Türen und Geräten sind entfernt',
        'Armaturen und Plättli sind ohne Rückstände',
        'Böden sind sauber, auch in Ecken und entlang der Sockelleisten',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Besichtigung und Offerte',
      text: 'Wir sehen uns die Baustelle an und klären mit Ihnen Umfang und Termine. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Etappen planen',
      text: 'Wir stimmen die Einsätze mit Bauleitung und Terminplan ab, damit die Reinigung zum Baufortschritt passt.',
    },
    {
      title: 'Übergabe',
      text: 'Vor der Übergabe reinigen wir die Räume bezugsbereit. Den Termin richten wir nach Ihrem Übergabe- oder Bezugstermin.',
    },
  ],
  faq: [
    {
      question: 'Was ist der Unterschied zwischen Baureinigung und Bauendreinigung?',
      answer:
        'Zur Baureinigung gehören Einsätze während der Bauphase, etwa eine Grobreinigung oder Zwischenreinigungen. Die Bauendreinigung ist die letzte, gründliche Reinigung vor der Übergabe, danach sind die Räume bezugsbereit.',
    },
    {
      question: 'Wann sollten wir die Bauendreinigung einplanen?',
      answer:
        'Sobald der Übergabetermin feststeht. Die Reinigung kommt nach den letzten Handwerksarbeiten und vor der Abnahme. Je früher wir den Termin kennen, desto besser können wir planen.',
    },
    {
      question: 'Gehört die Reinigung der Fenster dazu?',
      answer:
        'Ja, Fenster, Rahmen und Glas reinigen wir bei der Bauendreinigung mit. Für Fassaden gibt es die [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
    },
    {
      question: 'Was braucht es auf der Baustelle für die Reinigung?',
      answer:
        'Zugang zu den Räumen, Strom und Wasser sowie einen Platz für Geräte. Wo wir das vorfinden, klären wir bei der Besichtigung mit Ihnen oder der Bauleitung.',
    },
    { question: 'Was kostet eine Baureinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Für eine Grundreinigung, wenn Flächen nach längerer Nutzung wieder gründlich sauber werden sollen.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Glasflächen und Fassaden am fertigen Bau.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Für die laufende Reinigung nach dem Bezug.' },
  ],
  cta: {
    title: 'Offerte für Ihre Baustelle',
    text: 'Nennen Sie uns Objekt, Fläche und Übergabetermin. Wir sehen uns die Baustelle an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3b (Fenster und Glas, Fassade und Hochdruck), E17, K05 (keine Höhen- oder Gerätezusagen ohne Beleg)
const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Fenster- und Fassadenreinigung für Unternehmen und Liegenschaften',
  lead: [
    'Verschmutzte Fenster und graue Fassaden fallen auf, bei Geschäftshäusern ebenso wie bei Wohnliegenschaften. Wir reinigen Glas und Fassaden einmalig oder in regelmässigen Abständen.',
    'Für Fassaden setzen wir auch Hochdruck ein. Welche Methode zum Material passt, klären wir bei der Besichtigung am Objekt.',
  ],
  facts: [
    { label: 'Für', value: 'Unternehmen, Verwaltungen und Eigentümer' },
    { label: 'Flächen', value: 'Fenster, Glasflächen, Rahmen und Fassaden' },
    { label: 'Rhythmus', value: 'Einmalig oder in regelmässigen Abständen' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den Umfang halten wir nach der Besichtigung fest. Typisch sind:',
    items: [
      'Fenster innen und aussen, mit Rahmen und Falzen',
      'Glasfassaden, Glastüren und Glaswände',
      'Schaufenster und Eingangsbereiche',
      'Fensterbänke und Storen nach Absprache',
      'Fassadenreinigung, auch mit Hochdruck',
    ],
    notIncluded: [
      'Reinigung der Innenräume: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) oder [Büro- und Praxisreinigung](/leistungen/bueroreinigung).',
      'Renovation, Anstrich und Reparaturen an der Fassade.',
    ],
  },
  sections: [
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Bürogebäude mit Glasfassaden, Ladenlokale mit Schaufenstern, Wohnliegenschaften mit vielen Fenstern im Treppenhaus, Gewerbebauten mit grauer oder grüner Fassade. Überall dort prägt Glas den ersten Eindruck, und Schmutz fällt im Gegenlicht sofort auf.',
        'Häufig steht die Reinigung im Frühling nach dem Winter an, wenn Blütenstaub dazukommt, oder vor einem Anlass, einer Vermietung oder einem Verkauf.',
      ],
    },
    {
      title: 'Wie Glas und Fassade gereinigt werden',
      paragraphs: [
        'Glas wird meist mit Wasser, einem milden Reinigungsmittel und einem Abzieher gereinigt, danach werden Rahmen und Falze nachgewischt. Für grosse und hohe Glasflächen gibt es Teleskopstangen mit aufbereitetem Reinwasser, das ohne Rückstände trocknet.',
        'Bei Fassaden entscheidet das Material. Glatte, feste Oberflächen vertragen oft Hochdruck, empfindlicher Putz, Holz oder alter Naturstein brauchen ein schonenderes Vorgehen. Welche Methode passt, klären wir bei der Besichtigung am Objekt.',
      ],
    },
    {
      title: 'Planung und Rhythmus',
      paragraphs: [
        'Wie oft Glas gereinigt werden sollte, hängt von Lage, Nutzung und Anspruch ab. Schaufenster und Eingänge sieht jeder, die Fenster eines Lagers kaum jemand.',
      ],
      items: [
        'Eingänge, Schaufenster und Glastüren: häufiger, weil sie jeder sieht und berührt',
        'Fenster in Büros und Treppenhäusern: in regelmässigen Abständen, oft nach Jahreszeit',
        'Fassaden: seltener, wenn Verschmutzung, Algen oder ein Grauschleier sichtbar werden',
        'Bei Frost, Sturm oder starkem Regen lässt sich aussen nicht sauber arbeiten, planen Sie deshalb etwas Spielraum ein',
      ],
    },
    {
      title: 'Was wir bei der Besichtigung klären',
      items: [
        'Wie hoch die Flächen sind und wie man sie sicher erreicht',
        'Ob sich die Fenster öffnen lassen oder nur von aussen erreichbar sind',
        'Aus welchem Material Rahmen und Fassade sind',
        'Zugang, Parkplatz und Absperrungen, etwa auf dem Trottoir vor dem Gebäude',
        'Ob Mieterinnen und Mieter informiert werden müssen, weil Fenster von innen gereinigt werden',
      ],
    },
    {
      title: 'Woran Sie eine gute Fensterreinigung erkennen',
      items: [
        'Im Gegenlicht sind keine Schlieren zu sehen',
        'Das Glas ist bis in die Ecken sauber, auch am Rand zum Rahmen',
        'Rahmen, Falze und Fensterbänke sind mitgereinigt, soweit vereinbart',
        'Innen bleiben keine Tropfen und Wasserflecken auf Böden und Fensterbänken',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Besichtigung und Offerte',
      text: 'Wir sehen uns Glasflächen und Fassade vor Ort an, klären Zugang und Methode und erstellen Ihnen eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Einsatz',
      text: 'Wir reinigen zum vereinbarten Termin, auf Wunsch in festen Abständen.',
    },
  ],
  faq: [
    {
      question: 'Wie oft sollten Fenster gereinigt werden?',
      answer:
        'Das hängt von Lage und Nutzung ab. An einer stark befahrenen Strasse verschmutzt Glas schneller als im Grünen. Nach der Besichtigung schlagen wir Ihnen einen Rhythmus vor.',
    },
    {
      question: 'Reinigen Sie Fassaden mit Hochdruck?',
      answer: 'Ja, wenn das Material es zulässt. Welche Methode zu Ihrer Fassade passt, klären wir bei der Besichtigung am Objekt.',
    },
    {
      question: 'Wie reinigen Sie hohe Fenster und Fassaden?',
      answer:
        'Das hängt vom Gebäude und vom Zugang ab. Wir klären es bei der Besichtigung und halten in der Offerte fest, wie wir die Flächen erreichen.',
    },
    {
      question: 'Müssen die Mieterinnen und Mieter zu Hause sein?',
      answer:
        'Für Fenster, die sich nur von innen reinigen lassen, braucht es Zugang zur Wohnung oder zum Büro. Das klären wir bei der Besichtigung, damit Sie die Mieterschaft rechtzeitig informieren können.',
    },
    { question: 'Was kostet die Reinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Für die regelmässige Reinigung von Liegenschaften und Gewerbeflächen.' },
    { path: '/leistungen/bueroreinigung', text: 'Für Büros und Praxen, abgestimmt auf Ihre Arbeitszeiten.' },
    { path: '/leistungen/baureinigung', text: 'Für Glas und Rahmen nach Bau- und Umbauarbeiten.' },
  ],
  cta: {
    title: 'Offerte für Fenster und Fassade',
    text: 'Nennen Sie uns Gebäude, Flächen und gewünschten Termin. Wir sehen uns alles vor Ort an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3a (Industrie, Hallen, Maschinen), R10b, E17 (Abschnitt Maschinen), K04, keine Normzusagen ohne Beleg
const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Industrie- und Hallenreinigung für Produktion und Lager',
  lead: [
    'In Produktion und Lager entstehen Staub, Späne, Öl- und Fettfilme. Sie machen Böden rutschig und setzen sich in Anlagen fest. Gleichzeitig darf die Reinigung den Betrieb nicht aufhalten.',
    'Wir reinigen Hallen, Böden, Maschinen und Anlagen, einmalig oder regelmässig, zu Zeiten, die wir mit Ihnen auf Produktion und Schichten abstimmen.',
  ],
  facts: [
    { label: 'Für', value: 'Industrie- und Gewerbebetriebe, Logistik und Lager' },
    { label: 'Flächen', value: 'Produktions- und Lagerhallen, Werkstätten, Maschinen und Anlagen' },
    { label: 'Zeiten', value: 'Abgestimmt auf Produktion und Schichtbetrieb' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den Umfang halten wir nach einem Rundgang durch Ihren Betrieb fest. Typisch sind:',
    items: [
      'Hallen- und Produktionsböden',
      'Lagerbereiche, Regale und Verkehrswege',
      'Werkstätten und Nebenräume',
      'Maschinen und Anlagen nach Ihren Vorgaben',
      'Sozialräume, Garderoben und Sanitärräume',
    ],
    notIncluded: [
      'Wartung und Reparatur von Maschinen.',
      'Büros im Betrieb: siehe [Büro- und Praxisreinigung](/leistungen/bueroreinigung).',
    ],
  },
  sections: [
    {
      title: 'Maschinen und Anlagen',
      paragraphs: [
        'Maschinen reinigen wir nach Ihren Vorgaben und in Absprache mit Ihrer Instandhaltung. Wann eine Anlage stillsteht, was gereinigt wird und welche Mittel geeignet sind, legen wir vor dem Einsatz fest.',
        'Ihre Sicherheits- und Betriebsregeln gelten auch für unser Team. Wir klären sie vor dem ersten Einsatz mit Ihnen.',
      ],
    },
    {
      title: 'Hallenböden und Verkehrswege',
      paragraphs: [
        'Hallenböden tragen Staub, Späne, Reifenabrieb und Öl- oder Fettfilme. Grosse Flächen werden meist mit Scheuersaugmaschinen gereinigt, die in einem Durchgang schrubben und das Schmutzwasser aufnehmen. Der Boden ist danach schnell wieder begehbar und befahrbar.',
        'Welches Vorgehen und welches Mittel passen, hängt vom Belag ab, etwa Beton, Beschichtung oder Industrieparkett, und von der Art der Verschmutzung. Das klären wir beim Rundgang.',
      ],
    },
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Produktionsbetriebe, Werkstätten, Lager- und Logistikhallen, Gewerbebetriebe mit Werkstatt und Büro unter einem Dach. Anlässe sind etwa ein Audit oder ein Kundenbesuch, eine Umstellung der Produktion, Betriebsferien oder der Wunsch nach festen Reinigungszeiten statt Reinigung nebenbei.',
      ],
    },
    {
      title: 'Sicherheit im Betrieb',
      paragraphs: [
        'In Produktion und Lager gelten eigene Regeln: Schutzausrüstung, Fahrwege von Staplern, abgesperrte Bereiche, Umgang mit Gefahrstoffen. Diese Regeln klären wir vor dem ersten Einsatz mit Ihnen.',
        'Bei Maschinen gehört dazu, wer sie abschaltet und sichert und wer sie nach der Reinigung wieder freigibt. Das legen wir vor dem Einsatz mit Ihrer Instandhaltung fest.',
      ],
    },
    {
      title: 'Planung und Rhythmus',
      paragraphs: [
        'Nicht jeder Bereich braucht denselben Rhythmus. Sozial- und Sanitärräume brauchen häufige Pflege. Hallenböden, Regale und Maschinen brauchen eine gründliche Reinigung in grösseren Abständen.',
        'Oft ist eine Kombination sinnvoll: regelmässige Reinigung im laufenden Betrieb und eine Grundreinigung in den Betriebsferien oder bei geplanten Stillständen.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Rundgang und Offerte',
      text: 'Wir sehen uns Hallen, Anlagen und Abläufe vor Ort an. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Einsatzplanung',
      text: 'Wir legen Zeiten, Bereiche und Reihenfolge fest, abgestimmt auf Produktion, Schichten und Stillstände.',
    },
    {
      title: 'Einsatz',
      text: 'Wir reinigen nach Plan. Ändert sich Ihr Betrieb, passen wir den Plan mit Ihnen an.',
    },
  ],
  faq: [
    {
      question: 'Können Sie während des laufenden Betriebs reinigen?',
      answer:
        'Das klären wir beim Rundgang. Manche Bereiche lassen sich im Betrieb reinigen, andere nur in Pausen, zwischen Schichten oder bei Stillständen. Die Zeiten legen wir mit Ihnen fest.',
    },
    {
      question: 'Reinigen Sie auch Maschinen?',
      answer: 'Ja. Was an einer Maschine gereinigt wird und wann sie dafür stillsteht, legen wir mit Ihnen und Ihrer Instandhaltung fest.',
    },
    {
      question: 'Welche Regeln gelten für Ihr Team in unserem Betrieb?',
      answer: 'Ihre Sicherheits- und Betriebsregeln. Wir klären sie vor dem ersten Einsatz mit Ihnen.',
    },
    {
      question: 'Wie wird ein Hallenboden gereinigt?',
      answer:
        'Meist mit einer Scheuersaugmaschine, die schrubbt und das Schmutzwasser gleich aufnimmt. Welches Mittel passt, hängt vom Belag und von der Verschmutzung ab, etwa Staub, Öl oder Abrieb. Das klären wir beim Rundgang.',
    },
    { question: 'Was kostet eine Industriereinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Für eine einmalige, gründliche Grundreinigung.' },
    { path: '/leistungen/bueroreinigung', text: 'Für Büros und Sozialräume im Betrieb.' },
    { path: '/leistungen/facility-services', text: 'Wenn Reinigung, Hauswartung und Umgebung aus einer Hand kommen sollen.' },
  ],
  cta: {
    title: 'Offerte für Ihren Betrieb',
    text: 'Nennen Sie uns Flächen, Maschinen und Betriebszeiten. Wir machen einen Rundgang und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3c (acht Aufgaben, ohne Winterdienst und Pikett), E29, E53 (keine Partner), W08, K02
const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Hauswartung für Wohn- und Geschäftshäuser',
  lead: [
    'Eine Liegenschaft braucht mehr als Reinigung: Jemand muss regelmässig nach dem Rechten sehen, kleine Schäden beheben, die Entsorgung organisieren und bei Wohnungsübergaben dabei sein. Das übernimmt die Hauswartung.',
    'Für Verwaltungen, Eigentümer und Stockwerkeigentümerschaften, die nicht selbst nach dem Rechten sehen können oder wollen. Welche Aufgaben wir übernehmen, wie oft wir vor Ort sind und wem wir Mängel melden, halten wir schriftlich fest.',
  ],
  facts: [
    { label: 'Für', value: 'Verwaltungen, Eigentümer und Stockwerkeigentümerschaften' },
    { label: 'Objekte', value: 'Wohn- und Geschäftsliegenschaften' },
    { label: 'Umfang', value: 'Aufgaben nach Bedarf, schriftlich festgehalten' },
  ],
  scope: {
    title: 'Was die Hauswartung übernimmt',
    intro: 'Aus diesen Aufgaben stellen wir die Hauswartung für Ihre Liegenschaft zusammen:',
    items: [
      'Kontrollgänge: regelmässig nach dem Rechten sehen und Mängel melden',
      'Treppenhaus: reinigen und in Ordnung halten',
      'Waschküche und Trockenräume sauber halten',
      'Kleinreparaturen, etwa Leuchtmittel ersetzen',
      'Haustechnik im Blick behalten und Störungen melden',
      'Bei Wohnungsübergaben mitwirken',
      'Entsorgung von Abfall und Wertstoffen organisieren',
      'Umgebungspflege, mehr dazu unter [Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Winterdienst bieten wir nicht an.',
      'Pikett- und Notfalldienst rund um die Uhr.',
      'Grössere Reparaturen und Handwerksarbeiten.',
    ],
  },
  sections: [
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Mehrfamilienhäuser und Wohnanlagen, Stockwerkeigentum, Wohn- und Geschäftshäuser mit Läden oder Büros im Erdgeschoss. Überall dort braucht es jemanden, der regelmässig vorbeikommt, die Waschküche in Ordnung hält und sieht, wenn etwas nicht stimmt.',
        'Häufig kommt die Anfrage, wenn der bisherige Hauswart aufhört, wenn eine Verwaltung eine Liegenschaft neu übernimmt oder wenn in einer Stockwerkeigentümerschaft niemand die Aufgaben mehr übernehmen will.',
      ],
    },
    {
      title: 'Was beim Kontrollgang passiert',
      paragraphs: [
        'Beim Kontrollgang sehen wir nach dem Rechten, so oft wie mit Ihnen vereinbart. Was wir selbst beheben können, etwa ein Leuchtmittel ersetzen, erledigen wir. Alles andere melden wir der Stelle, die wir mit Ihnen festgelegt haben.',
      ],
      items: [
        'Beleuchtung im Treppenhaus, im Keller und in der Umgebung',
        'Türen, Schlösser und Briefkastenanlage',
        'Waschküche, Trockenräume und Keller',
        'Heizraum und Haustechnik auf sichtbare Störungen',
        'Abfallplatz und Umgebung',
      ],
    },
    {
      title: 'Haustechnik im Blick',
      paragraphs: [
        'Hauswartung heisst nicht Wartung der Anlagen. Heizung, Lüftung, Lift und Brandschutz warten Fachfirmen. Die Hauswartung sieht regelmässig hin, bemerkt Störungen früh und meldet sie, etwa eine Fehlermeldung an der Heizung, einen tropfenden Hahn in der Waschküche oder einen Lift, der nicht richtig hält.',
      ],
    },
    {
      title: 'Wohnungsübergaben',
      paragraphs: [
        'Wie wir bei Wohnungsübergaben mitwirken, legen wir mit der Verwaltung fest, etwa ob wir die Wohnung öffnen, Schlüssel übergeben oder Zählerstände notieren. Abnahme und Protokoll bleiben bei der Verwaltung.',
        'Braucht die Wohnung vor der Übergabe eine Endreinigung, gibt es dafür die [Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung).',
      ],
    },
    {
      title: 'Zusammenarbeit mit Verwaltung und Eigentümerschaft',
      paragraphs: [
        'Eine gute Hauswartung lebt von klaren Absprachen: welche Aufgaben, wie oft, wer Meldungen empfängt und welche kleinen Arbeiten ohne Rückfrage erledigt werden dürfen. Das halten wir schriftlich fest.',
        'Auch die Mieterschaft sollte wissen, an wen sie sich wendet. Wer dafür Ansprechperson ist, legen wir gemeinsam mit Ihnen fest.',
      ],
    },
    {
      // Suchbegriff «Pflichtenheft Hauswartung» (SEO 28.09.2026), Zielgruppe Verwaltungen, ohne Winterdienst (E29)
      title: 'Pflichtenheft für die Hauswartung: was hineingehört',
      paragraphs: [
        'Ein Pflichtenheft hält fest, was die Hauswartung in einer Liegenschaft übernimmt, wie oft und wer wofür zuständig ist. Es schafft Klarheit für Verwaltung, Eigentümerschaft, Mieterschaft und Hauswartung und macht Offerten vergleichbar.',
        'Bei uns entsteht diese Aufstellung nach dem Rundgang: Welche Aufgaben wir übernehmen, wie oft wir vor Ort sind und wem wir Mängel melden, halten wir schriftlich fest. Diese Punkte gehören in ein Pflichtenheft:',
      ],
      items: [
        'Aufgaben und Rhythmus je Bereich: Treppenhaus, Eingang, Waschküche und Trockenräume, Keller und Abfallplatz, jeweils mit Tätigkeit und Häufigkeit',
        'Kontrollgänge: wie oft, welche Räume und Anlagen dazugehören und wie festgehalten wird, was auffällt',
        'Umgebung: welche Flächen gepflegt werden, etwa Rasen, Hecken, Beete, Wege und Plätze',
        'Zuständigkeiten und Meldewege: wer Meldungen der Hauswartung empfängt, welche kleinen Arbeiten ohne Rückfrage erledigt werden und an wen sich die Mieterschaft wendet',
        'Schlüssel und Zugang: welche Schlüssel, Badges und Codes die Hauswartung erhält und wie sie aufbewahrt werden',
        'Material: wer Reinigungsmittel, Verbrauchsmaterial und Geräte stellt und wo sie gelagert werden',
        'Abgrenzung zu Handwerkern: welche Arbeiten Fachbetriebe übernehmen, etwa grössere Reparaturen und die Wartung von Heizung, Lift und Brandschutz, und wer sie beauftragt',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Rundgang und Offerte',
      text: 'Wir sehen uns die Liegenschaft an und klären mit Ihnen, welche Aufgaben anfallen. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Aufgaben festlegen',
      text: 'Wir halten fest, welche Aufgaben wir übernehmen, wie oft wir vor Ort sind und wem wir Mängel melden.',
    },
    {
      title: 'Start',
      text: 'Wir beginnen zum vereinbarten Datum. Braucht die Liegenschaft später mehr oder weniger, passen wir die Aufgaben mit Ihnen an.',
    },
  ],
  faq: [
    {
      question: 'Welche Aufgaben übernimmt eine Hauswartung?',
      answer:
        'Typisch sind Kontrollgänge, die Reinigung von Treppenhaus, Waschküche und Trockenräumen, Kleinreparaturen, der Blick auf die Haustechnik, die Entsorgung, die Mitwirkung bei Wohnungsübergaben und die Umgebungspflege. Welche Aufgaben wir in Ihrer Liegenschaft übernehmen und wie oft, halten wir mit Ihnen schriftlich fest, wie in einem Pflichtenheft.',
    },
    {
      question: 'Was ist der Unterschied zur Unterhaltsreinigung?',
      answer:
        'Die Unterhaltsreinigung reinigt in einem festen Rhythmus. Die Hauswartung geht weiter: Kontrollgänge, Kleinreparaturen, Haustechnik, Entsorgung, Wohnungsübergaben und Umgebungspflege. Wer nur Reinigung braucht, ist mit der [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) richtig.',
    },
    {
      question: 'Übernehmen Sie auch grössere Reparaturen?',
      answer:
        'Nein, wir übernehmen Kleinreparaturen. Für grössere Arbeiten braucht es einen Fachbetrieb. Schäden, die wir bei Kontrollgängen feststellen, melden wir Ihnen.',
    },
    {
      question: 'Bieten Sie Winterdienst oder einen Pikettdienst an?',
      answer: 'Nein. Winterdienst und Pikettdienst gehören nicht zu unserem Angebot.',
    },
    {
      question: 'Können wir einzelne Aufgaben wählen?',
      answer: 'Ja. Wir stellen die Hauswartung aus den Aufgaben zusammen, die Ihre Liegenschaft braucht.',
    },
    {
      question: 'Wie oft kommt die Hauswartung vorbei?',
      answer:
        'Das hängt von Grösse, Alter und Nutzung der Liegenschaft ab. Wie oft wir vor Ort sind, halten wir mit den übrigen Aufgaben schriftlich fest.',
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'Was kostet die Hauswartung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Für Umgebung und Grünflächen der Liegenschaft.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn nur die Reinigung vergeben werden soll.' },
    { path: '/leistungen/facility-services', text: 'Wenn Reinigung, Hauswartung und Umgebung in einen Vertrag gehören.' },
  ],
  cta: {
    title: 'Offerte für Ihre Liegenschaft',
    text: 'Nennen Sie uns Objekt, Anzahl Wohnungen oder Flächen und die Aufgaben, die Sie abgeben möchten. Wir machen einen Rundgang und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3a, R3c (Umgebungspflege), M45 (ein Name, ohne Winterdienst), E29
const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Aussen- und Grünflächenpflege für Liegenschaften',
  lead: [
    'Die Umgebung ist das Erste, was Mieter, Kundschaft und Besuch von einer Liegenschaft sehen. Gepflegte Grünflächen, saubere Wege und Plätze gehören deshalb genauso zur Pflege wie das Treppenhaus.',
    'Wir pflegen die Umgebung Ihrer Liegenschaft, einzeln oder als Teil der [Hauswartung](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Für', value: 'Verwaltungen, Eigentümer und Unternehmen' },
    { label: 'Einsatz', value: 'Einzeln oder als Teil der Hauswartung' },
    { label: 'Nicht im Angebot', value: 'Winterdienst' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Welche Arbeiten wir übernehmen, halten wir nach der Besichtigung fest. Typisch sind:',
    items: [
      'Rasen mähen und Ränder schneiden',
      'Hecken, Sträucher und Beete pflegen',
      'Laub entfernen',
      'Wege, Plätze und Parkflächen sauber halten',
      'Unkraut auf Plätzen und in Fugen entfernen',
      'Abfall in der Umgebung einsammeln',
    ],
    notIncluded: ['Winterdienst bieten wir nicht an.', 'Gartenbau und Neuanlagen.'],
  },
  sections: [
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Wohnanlagen mit Rasen, Hecken und Spielplatz, Geschäftsliegenschaften mit Parkplatz und Eingangsbereich, Gewerbebauten mit Rabatten und Kiesflächen. Die Umgebung ist das Erste, was Besuch sieht, und das, was die Mieterschaft jeden Tag nutzt.',
        'Häufig kommt die Anfrage, wenn die Umgebung bisher nebenbei gepflegt wurde und das nicht mehr reicht, oder wenn Reinigung, Hauswartung und Umgebung zusammen vergeben werden sollen.',
      ],
    },
    {
      title: 'Pflege im Jahreslauf',
      paragraphs: [
        'Die Arbeiten folgen der Jahreszeit. Typisch ist dieser Ablauf:',
      ],
      items: [
        'Frühling: Wege und Plätze vom Winterschmutz befreien, Beete pflegen, erster Rasenschnitt',
        'Sommer: Rasen regelmässig mähen, Unkraut auf Plätzen und in Fugen entfernen, Durchgänge bei Bedarf leicht freischneiden',
        'Herbst: Laub entfernen, Beete für den Winter vorbereiten',
        'Winter: Hecken und Sträucher schneiden, ausserhalb der Brutzeit der Vögel. Winterdienst bieten wir nicht an, Schneeräumung und Salzen braucht eine andere Lösung',
      ],
    },
    {
      title: 'Planung und Rhythmus',
      paragraphs: [
        'Wie oft gepflegt wird, richtet sich nach Jahreszeit und Wetter. In der Wachstumszeit braucht der Rasen mehr Aufmerksamkeit als im Spätherbst. Den Pflegeplan halten wir fest, zusätzliche Einsätze, etwa vor einem Anlass, sprechen Sie mit uns ab.',
        'Als Teil der [Hauswartung](/leistungen/hauswartung) lassen sich Umgebungspflege und Kontrollgänge verbinden: Wer draussen arbeitet, sieht auch, wenn am Haus etwas nicht stimmt.',
      ],
    },
    {
      title: 'Woran Sie eine gepflegte Umgebung erkennen',
      items: [
        'Die Rasenkanten sind sauber geschnitten',
        'Wege und Plätze sind ohne Laub, Abfall und Unkraut in den Fugen',
        'Hecken sind in Form, Durchgänge und Sichtfelder bleiben frei',
        'Beete sind gepflegt und ohne Unkraut',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Pflegeplan',
      text: 'Wir halten fest, welche Arbeiten wir wie oft übernehmen, abgestimmt auf die Jahreszeit.',
    },
    {
      title: 'Pflege',
      text: 'Wir pflegen die Umgebung nach Plan. Zusätzliche Einsätze, etwa vor einem Anlass, sprechen Sie mit uns ab.',
    },
  ],
  faq: [
    { question: 'Machen Sie auch Winterdienst?', answer: 'Nein, Winterdienst bieten wir nicht an.' },
    {
      question: 'Kann ich die Umgebungspflege ohne Hauswartung vergeben?',
      answer: 'Ja. Die Aussen- und Grünflächenpflege gibt es einzeln oder als Teil der [Hauswartung](/leistungen/hauswartung).',
    },
    {
      question: 'Wann werden Hecken am besten geschnitten?',
      answer:
        'Ausserhalb der Brutzeit, die bei vielen Arten vom Frühling bis in den Spätsommer reicht. Die Schweizerische Vogelwarte in Sempach empfiehlt den Gehölzschnitt im Winter, von November bis März. Wachsen Durchgänge oder Sichtfelder im Sommer zu, genügt meist ein leichter Formschnitt mit Blick auf Nester. Den Zeitpunkt für Ihre Hecken halten wir im Pflegeplan fest.',
    },
    {
      question: 'Legen Sie auch neue Gärten an?',
      answer: 'Nein. Gartenbau und Neuanlagen gehören nicht zu unserem Angebot. Wir pflegen bestehende Umgebungen.',
    },
    { question: 'Was kostet die Umgebungspflege?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Wenn neben der Umgebung auch Haus und Haustechnik betreut werden sollen.' },
    { path: '/leistungen/facility-services', text: 'Wenn Reinigung, Hauswartung und Umgebung in einen Vertrag gehören.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Fassaden und Glasflächen.' },
  ],
  cta: {
    title: 'Offerte für Ihre Umgebungspflege',
    text: 'Nennen Sie uns Liegenschaft und Flächen. Wir sehen uns die Umgebung an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: 03 Abschnitt 2a (ein Vertrag, eine Ansprechperson, nur bestätigte Leistungen), K02, E17, E29, E53
const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Facility Services: Reinigung, Hauswartung und Umgebung aus einer Hand',
  lead: [
    'Wer Reinigung, Hauswartung und Umgebungspflege an verschiedene Firmen vergibt, hat mehrere Verträge, mehrere Ansprechpersonen und viel Abstimmung. Mit Facility Services kommt alles von uns.',
    'Sie haben einen Vertrag und eine Ansprechperson. Welche Leistungen dazugehören, stellen wir mit Ihnen zusammen.',
  ],
  facts: [
    { label: 'Für', value: 'Verwaltungen, Eigentümer und Unternehmen' },
    { label: 'Umfang', value: 'Aus unseren Leistungen nach Bedarf zusammengestellt' },
    { label: 'Vertrag', value: 'Ein Vertrag, eine Ansprechperson' },
  ],
  scope: {
    title: 'Was sich verbinden lässt',
    intro: 'Facility Services stellen wir aus unseren eigenen Leistungen zusammen:',
    items: [
      '[Unterhaltsreinigung](/leistungen/unterhaltsreinigung) mit Nachfüllservice',
      '[Büro- und Praxisreinigung](/leistungen/bueroreinigung)',
      '[Hauswartung](/leistungen/hauswartung)',
      '[Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung)',
      '[Grund- und Sonderreinigungen](/leistungen/sonderreinigungen)',
      '[Industrie- und Hallenreinigung](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Technisches Facility Management wie die Wartung von Heizung, Lüftung oder Liften.',
      'Winterdienst.',
      'Die Vermittlung von Drittfirmen, etwa Handwerksbetrieben.',
    ],
  },
  sections: [
    {
      title: 'Typische Situationen',
      paragraphs: [
        'Eine Verwaltung betreut mehrere Liegenschaften und will nicht für jede Aufgabe eine eigene Firma koordinieren. Ein Unternehmen hat Büros, eine Halle und eine Umgebung und will eine Stelle für alles. Oder eine Eigentümerschaft übernimmt eine Liegenschaft und sucht eine Lösung, die von Anfang an zusammenpasst.',
      ],
    },
    {
      title: 'Wie aus einzelnen Leistungen ein Vertrag wird',
      paragraphs: [
        'Beim Rundgang sehen wir uns an, was Ihr Objekt braucht: Reinigung innen, Glas, Hauswartung, Umgebung. Daraus entsteht ein Vertrag, in dem jede Leistung mit Umfang und Rhythmus steht.',
        'Kommt später etwas dazu oder fällt etwas weg, besprechen Sie es an einer Stelle, mit Ihrer Ansprechperson bei uns.',
      ],
    },
    {
      title: 'Was Sie davon haben',
      items: [
        'Eine Ansprechperson für Reinigung, Hauswartung und Umgebung',
        'Ein Vertrag statt mehrerer, mit einem Überblick über alle Leistungen',
        'Weniger Abstimmung zwischen Firmen, etwa wer das Treppenhaus nach Arbeiten in der Umgebung reinigt',
        'Ein Blick auf das ganze Objekt: Wer im Haus reinigt, sieht auch, wenn draussen etwas nicht stimmt',
      ],
    },
    {
      title: 'Grenzen und Zusammenarbeit',
      paragraphs: [
        'Facility Services heisst bei uns: die Leistungen, die wir selbst erbringen. Technisches Facility Management, etwa die Wartung von Heizung, Lüftung oder Liften, gehört nicht dazu, ebenso wenig die Vermittlung von Handwerksbetrieben.',
        'Störungen, die wir bei der Arbeit bemerken, melden wir Ihnen, damit Sie die passende Fachfirma beauftragen können.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Rundgang und Offerte',
      text: 'Wir sehen uns Ihre Liegenschaften an und klären, welche Leistungen anfallen. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Ein Vertrag',
      text: 'Die Leistungen, die Ihr Objekt braucht, halten wir in einem Vertrag fest.',
    },
    {
      title: 'Eine Ansprechperson',
      text: 'Für alle Leistungen haben Sie eine Ansprechperson bei uns. Änderungen besprechen Sie an einer Stelle.',
    },
  ],
  faq: [
    {
      question: 'Was verstehen Sie unter Facility Services?',
      answer:
        'Reinigung, Hauswartung und Umgebungspflege aus einer Hand, in einem Vertrag und mit einer Ansprechperson. Technisches Facility Management, etwa die Wartung von Heizung und Lüftung, gehört nicht dazu.',
    },
    {
      question: 'Können wir mit einer einzelnen Leistung beginnen?',
      answer:
        'Ja. Sie können mit einer Leistung beginnen, etwa der [Unterhaltsreinigung](/leistungen/unterhaltsreinigung), und später weitere dazunehmen.',
    },
    {
      question: 'Was ist der Unterschied zur Hauswartung?',
      answer:
        'Die [Hauswartung](/leistungen/hauswartung) ist eine einzelne Leistung mit Kontrollgängen, Kleinreparaturen, Haustechnik und Entsorgung. Facility Services verbinden sie mit Reinigung und Umgebungspflege in einem Vertrag.',
    },
    {
      question: 'Wer ist unsere Ansprechperson?',
      answer: 'Für alle Leistungen haben Sie eine Ansprechperson bei uns. Änderungen besprechen Sie an einer Stelle.',
    },
    { question: 'Was kosten Facility Services?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Kontrollgänge, Kleinreparaturen, Haustechnik, Entsorgung und Wohnungsübergaben.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Regelmässige Reinigung von Liegenschaften und Gewerbeflächen.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Pflege von Umgebung und Grünflächen.' },
  ],
  cta: {
    title: 'Offerte für Facility Services',
    text: 'Nennen Sie uns Ihre Liegenschaften und die Leistungen, die Sie abgeben möchten. Wir machen einen Rundgang und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

export const leistungen = {
  unterhaltsreinigung,
  bueroreinigung,
  sonderreinigungen,
  umzugsreinigung,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}
