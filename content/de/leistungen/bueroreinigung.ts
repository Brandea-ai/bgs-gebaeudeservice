import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: R3d (eigene Seite, Büros als Hauptzielgruppe), R10a (Praxen), E17, K01, E18 (Sprachen)
export const bueroreinigung: ServicePageContent = {
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
