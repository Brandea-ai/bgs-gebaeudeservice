import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

// Grundlage: /premium («Kabinenreinigung mit Rücksicht auf hochwertige Materialien, nach Absprache»), E41, E52 (kein Flugfeld)
export const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Kabinenreinigung für Privatjets',
  lead: [
    'In der Kabine eines Privatjets treffen Leder, Holz, Hochglanzflächen und feine Textilien auf engem Raum zusammen. Die Reinigung braucht Sorgfalt, Diskretion und eine Planung, die zu Ihren Flügen passt.',
    'Wir reinigen die Kabine nach Absprache mit Ihnen und Ihrem Flugbetrieb, mit Rücksicht auf hochwertige Materialien.',
  ],
  facts: [
    { label: 'Für', value: 'Eigentümer und Betreiber von Privatjets' },
    { label: 'Umfang', value: 'Reinigung der Kabine' },
    { label: 'Termine', value: 'Nach Absprache, passend zu Ihrem Flugplan' },
    { label: 'Diskretion', value: 'Auf Wunsch mit Geheimhaltungsvereinbarung' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den Umfang legen wir vorab mit Ihnen fest. Typisch sind:',
    items: [
      'Sitze und Polster aus Leder und Stoff',
      'Teppiche und Böden',
      'Holz- und Hochglanzflächen',
      'Fenster, Spiegel und Glas in der Kabine',
      'Bordküche und Waschraum',
    ],
  },
  sections: [
    {
      title: 'Materialien in der Kabine',
      paragraphs: [
        'Leder, lackiertes Holz, Hochglanzflächen, Teppich und feine Textilien liegen in einer Kabine dicht beieinander. Jedes Material braucht ein eigenes Mittel und ein eigenes Tuch, damit nichts ausbleicht, austrocknet oder zerkratzt.',
        'Welche Mittel für Ihre Kabine geeignet sind, klären wir vorab mit Ihnen und Ihrem Flugbetrieb.',
      ],
    },
    {
      title: 'Planung rund um Ihre Flüge',
      paragraphs: [
        'Wo und wann wir die Kabine reinigen, stimmen wir mit Ihnen und Ihrem Flugbetrieb ab. So passt der Einsatz in Ihren Flugplan.',
        'Häufig liegt die Reinigung zwischen zwei Flügen, nach einer längeren Reise oder vor einem Flug mit Gästen. Ist das Zeitfenster knapp, hilft es, die Termine früh abzusprechen.',
      ],
    },
    {
      title: 'Was vor dem Einsatz feststehen muss',
      items: [
        'Standort des Flugzeugs und wie der Zugang für unser Team geregelt ist',
        'Das Zeitfenster zwischen den Flügen',
        'Welche Bereiche der Kabine dazugehören',
        'Welche Mittel für die Materialien freigegeben sind',
        'Wer die Kabine nach der Reinigung übernimmt',
      ],
    },
    {
      title: 'Diskretion an Bord',
      paragraphs: [
        'Wie wir mit persönlichen Gegenständen und Unterlagen an Bord umgehen, legen Sie fest. Bei Ihnen arbeitet immer dasselbe Team, überprüft von uns. Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung.',
      ],
    },
  ],
  steps: [
    {
      title: 'Reinigung',
      text: 'Wir reinigen die Kabine zum vereinbarten Zeitpunkt.',
    },
    team,
  ],
  faq: [
    {
      question: 'Wie planen Sie die Reinigung rund um unsere Flüge?',
      answer: 'Den Zeitpunkt stimmen wir mit Ihnen und Ihrem Flugbetrieb ab, damit die Kabine vor dem nächsten Flug bereit ist.',
    },
    {
      question: 'Wie gehen Sie mit Leder und Holz um?',
      answer: 'Wir reinigen mit Rücksicht auf die Materialien und klären vorab, welche Mittel für Ihre Kabine geeignet sind.',
    },
    {
      question: 'Reinigen Sie auch das Flugzeug von aussen?',
      answer: 'Nein. Unser Angebot umfasst die Reinigung der Kabine.',
    },
    {
      question: 'Wer arbeitet in unserer Kabine?',
      answer:
        'Immer dasselbe Team. Wer bei Ihnen arbeitet, ist von uns überprüft. Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung.',
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'In welchen Sprachen können wir uns verständigen?', answer: answers.sprachen },
    { question: 'Was kostet die Reinigung?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Für Villen, Residenzen und Zweitwohnungen.' },
    { path: '/premium/yacht', text: 'Für Yachten und Motorboote am Vierwaldstättersee und am Zugersee.' },
    { path: '/premium', text: 'Alle Angebote und Zusagen unserer Premium-Linie.' },
  ],
  cta,
}
