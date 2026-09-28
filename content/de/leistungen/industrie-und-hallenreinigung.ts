import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: R3a (Industrie, Hallen, Maschinen), R10b, E17 (Abschnitt Maschinen), K04, keine Normzusagen ohne Beleg
export const industrieUndHallen: ServicePageContent = {
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
