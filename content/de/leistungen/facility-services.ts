import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: 03 Abschnitt 2a (ein Vertrag, eine Ansprechperson, nur bestätigte Leistungen), K02, E17, E29, E53
export const facilityServices: ServicePageContent = {
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
