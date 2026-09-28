import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: R3a, R3c (Umgebungspflege), M45 (ein Name, ohne Winterdienst), E29
export const aussenUndGruen: ServicePageContent = {
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
