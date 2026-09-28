import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

// Grundlage: /premium (Vierwaldstättersee, Zugersee; Teak, Gelcoat und Polster), E41, E42
export const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Reinigung von Yachten und Motorbooten',
  lead: [
    'Ein Boot am See ist Wind, Wetter, Blütenstaub und Vogelkot ausgesetzt, im Innenraum setzen sich Feuchtigkeit und Staub fest. Wir reinigen Ihr Boot innen und aussen, am Vierwaldstättersee und am Zugersee.',
    'Teak, Gelcoat und Polster brauchen jeweils ihre eigene Behandlung. Welche Mittel wir für Ihr Boot verwenden, klären wir vorab mit Ihnen.',
  ],
  facts: [
    { label: 'Für', value: 'Eigentümer von Yachten und Motorbooten' },
    { label: 'Gebiet', value: 'Am Vierwaldstättersee und am Zugersee' },
    { label: 'Materialien', value: 'Teak, Gelcoat und Polster' },
    { label: 'Termine', value: 'Nach Absprache, einmalig oder regelmässig' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den Umfang legen wir nach einer Besichtigung am Liegeplatz fest. Typisch sind:',
    items: [
      'Deck und Teakflächen',
      'Gelcoat-Oberflächen an Deck und Aufbauten',
      'Polster und Textilien',
      'Salon, Kabinen und Pantry',
      'Nasszellen',
      'Fenster und Glas',
    ],
    notIncluded: ['Arbeiten am Unterwasserschiff, etwa Antifouling.', 'Technische Wartung von Motor und Bordtechnik.'],
  },
  sections: [
    {
      title: 'Materialien an Bord',
      paragraphs: [
        'Teak wird grau und rau, wenn es falsch gereinigt wird: Zu harte Bürsten und Hochdruck lösen die weichen Holzfasern heraus. Gelcoat verliert durch Sonne und Wasserflecken seinen Glanz, Edelstahl zeigt Flugrost, Polster nehmen Feuchtigkeit auf.',
        'Deshalb braucht jedes Material ein eigenes Vorgehen. Welche Mittel wir für Ihr Boot verwenden, klären wir vorab mit Ihnen.',
      ],
    },
    {
      title: 'Am See ist vieles anders',
      paragraphs: [
        'Auf dem Vierwaldstättersee und dem Zugersee fehlt das Salz, dafür bringen Blütenstaub, Laub, Spinnen und Vogelkot viel Schmutz aufs Boot, besonders im Frühling und Sommer. Im geschlossenen Innenraum setzen sich Feuchtigkeit und Staub fest.',
        'Weil Wasser vom Deck direkt in den See läuft, ist bei den Reinigungsmitteln Sorgfalt gefragt. Auf Wunsch reinigen wir mit umweltfreundlichen Mitteln.',
      ],
    },
    {
      title: 'Typische Anlässe',
      items: [
        'Vor dem ersten Ausfahren der Saison',
        'Regelmässig während der Saison',
        'Vor und nach Gästen an Bord',
        'Am Ende der Saison, bevor das Boot eingewintert wird',
      ],
    },
    {
      title: 'Zugang zum Liegeplatz',
      paragraphs: [
        'Den Zugang zu Steg oder Hafen klären wir vorab mit Ihnen, ebenso Strom und Wasser am Liegeplatz und wer das Boot für uns öffnet. Bei Ihnen arbeitet immer dasselbe Team.',
      ],
    },
  ],
  steps: [
    {
      title: 'Termine',
      text: 'Wir reinigen zu den Terminen, die wir mit Ihnen vereinbaren, einmalig oder regelmässig.',
    },
    team,
  ],
  faq: [
    {
      question: 'Wo reinigen Sie Boote?',
      answer: 'Am Liegeplatz, am Vierwaldstättersee und am Zugersee. Den Zugang zu Steg oder Hafen klären wir vorab mit Ihnen.',
    },
    {
      question: 'Welche Materialien reinigen Sie?',
      answer: 'Teak, Gelcoat und Polster sowie den Innenraum. Welche Mittel wir für Ihr Boot verwenden, klären wir bei der Besichtigung.',
    },
    {
      question: 'Wie oft sollte ein Boot am See gereinigt werden?',
      answer:
        'Das hängt von Liegeplatz, Nutzung und Jahreszeit ab. Unter Bäumen und in der Blütezeit verschmutzt ein Boot schneller. Nach der Besichtigung schlagen wir Ihnen Termine vor, einmalig oder regelmässig.',
    },
    {
      question: 'Arbeiten Sie auch am Unterwasserschiff oder am Motor?',
      answer: 'Nein. Arbeiten am Unterwasserschiff, etwa Antifouling, und die technische Wartung von Motor und Bordtechnik gehören nicht dazu.',
    },
    { question: 'Können Sie mit umweltfreundlichen Mitteln reinigen?', answer: answers.mittel },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'Was kostet die Reinigung?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Für Villen, Residenzen und Zweitwohnungen am See.' },
    { path: '/premium/privatjet', text: 'Für die Kabine Ihres Privatjets.' },
    { path: '/premium', text: 'Alle Angebote und Zusagen unserer Premium-Linie.' },
  ],
  cta: {
    title: cta.title,
    text: 'Nennen Sie uns Boot, Liegeplatz und gewünschte Termine. Wir sehen uns das Boot am Liegeplatz an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}
