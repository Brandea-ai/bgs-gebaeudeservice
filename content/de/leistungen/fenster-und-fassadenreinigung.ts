import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: R3b (Fenster und Glas, Fassade und Hochdruck), E17, K05 (keine Höhen- oder Gerätezusagen ohne Beleg)
export const fensterUndFassade: ServicePageContent = {
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
