import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: R3a (Leistung, Nachfüllservice), R10c (Rhythmus), E28 (keine Privathaushalte), K01, K08
export const unterhaltsreinigung: ServicePageContent = {
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
