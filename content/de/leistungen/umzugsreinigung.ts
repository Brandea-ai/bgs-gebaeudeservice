import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: E56 (Abnahmegarantie bestätigt, Wortlaut unverändert), E28 (nicht für Mieter), W01,
// 24-SEO-KEYWORDS (eigene Seite, Nutzerfragen), E18 (keine Preise)
export const umzugsreinigung: ServicePageContent = {
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
