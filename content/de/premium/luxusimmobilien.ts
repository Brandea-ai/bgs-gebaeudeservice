import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

// Grundlage: /premium (Luxusimmobilien, Zweitwohnungen, Räume mit Kunst, Privatanlässe), E40, E41, K06
export const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Reinigung und Pflege von Villen und Residenzen',
  lead: [
    'In einem Haus mit Naturstein, Parkett und Hochglanzflächen zählt jedes Detail, und ebenso das Vertrauen in die Menschen, die dort arbeiten. Wir reinigen Villen, Lofts und Residenzen regelmässig oder vor besonderen Anlässen, mit Rücksicht auf empfindliche Materialien.',
    'Bei Ihnen arbeitet immer dasselbe Team, zu Zeiten, die zu Ihnen passen: auch abends, am Wochenende oder während Ihrer Abwesenheit.',
  ],
  facts: [
    { label: 'Für', value: 'Villen, Lofts, Residenzen und Zweitwohnungen' },
    { label: 'Rhythmus', value: 'Regelmässig oder vor besonderen Anlässen' },
    { label: 'Team', value: 'Immer dasselbe Team' },
    { label: 'Diskretion', value: 'Auf Wunsch mit Geheimhaltungsvereinbarung' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den Umfang legen wir nach einem Rundgang durch Ihr Haus fest. Typisch sind:',
    items: [
      'Wohn-, Schlaf- und Gästeräume',
      'Küchen und Bäder',
      'Naturstein, Parkett und Hochglanzflächen, materialgerecht gereinigt',
      'Glasflächen und Spiegel',
      'Reinigung vor Ihrer Ankunft und nach Ihrer Abreise',
      'Kontrollgänge während Ihrer Abwesenheit',
      'Reinigung vor und nach Anlässen, auch am Wochenende',
      'Räume mit Kunst und Antiquitäten, Kunstwerke nur nach Ihrer Freigabe',
      'Für Makler und Verwaltungen: kurzfristig vor Verkauf, Fototermin oder Übergabe',
    ],
    notIncluded: ['Restaurierung von Kunstwerken und Antiquitäten.'],
  },
  sections: [
    {
      title: 'Materialien mit Sorgfalt',
      paragraphs: [
        'Naturstein wie Marmor und Kalkstein reagiert empfindlich auf Säure, auch auf milde Haushaltsreiniger und Essig. Parkett verträgt wenig Wasser, Hochglanzflächen zerkratzen mit falschen Tüchern. Messing und Armaturen verlieren mit scharfen Mitteln ihre Oberfläche.',
        'Deshalb klären wir beim Rundgang, welche Materialien in Ihrem Haus verbaut sind und welche Pflege sie brauchen. Haben Sie Pflegehinweise von Hersteller oder Innenarchitektur, richten wir uns danach.',
      ],
    },
    {
      title: 'Schlüssel, Alarm und Diskretion',
      paragraphs: [
        'Für Schlüssel und Alarmanlage vereinbaren wir mit Ihnen feste Regeln. Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung.',
        'Ihre Anfrage bearbeitet der Geschäftsführer persönlich. Wer bei Ihnen arbeitet, ist von uns überprüft.',
      ],
    },
    {
      title: 'Typische Situationen',
      items: [
        'Regelmässige Pflege Ihres Wohnsitzes, zu festen Zeiten und immer mit demselben Team',
        'Zweitwohnung: Reinigung vor Ihrer Ankunft und nach Ihrer Abreise, Kontrollgänge dazwischen',
        'Vor und nach einem Anlass, auch am Wochenende',
        'Räume mit Kunst und Antiquitäten, Kunstwerke nur nach Ihrer Freigabe',
        'Für Makler und Verwaltungen: kurzfristig vor Verkauf, Fototermin oder Übergabe',
      ],
    },
    {
      title: 'Während Ihrer Abwesenheit',
      paragraphs: [
        'Bei Zweitwohnungen und längeren Reisen sehen wir nach dem Rechten, so oft wie mit Ihnen vereinbart. Was wir dabei ansehen und wem wir Auffälligkeiten melden, legen wir vorab mit Ihnen fest.',
        'Vor Ihrer Ankunft reinigen wir das Haus, damit Sie ankommen und nichts mehr tun müssen. Nach Ihrer Abreise bringen wir es wieder in Ordnung.',
      ],
    },
  ],
  steps: [
    {
      title: 'Feste Regeln',
      text: 'Wir vereinbaren Zeiten, Schlüsselübergabe und den Umgang mit der Alarmanlage, auf Wunsch mit Geheimhaltungsvereinbarung.',
    },
    team,
  ],
  faq: [
    {
      question: 'Arbeitet bei uns immer dasselbe Team?',
      answer: 'Ja. Bei Ihnen arbeitet immer dasselbe Team, das Ihr Haus und Ihre Wünsche kennt.',
    },
    {
      question: 'Wie gehen Sie mit Kunstwerken und Antiquitäten um?',
      answer: 'Die Räume reinigen wir sorgfältig. Kunstwerke selbst reinigen wir nur, wenn Sie es ausdrücklich freigeben.',
    },
    {
      question: 'Wie pflegen Sie Naturstein und Parkett?',
      answer:
        'Materialgerecht: Naturstein wie Marmor nie mit säurehaltigen Mitteln, Parkett mit wenig Feuchtigkeit. Welche Mittel wir in Ihrem Haus verwenden, klären wir beim Rundgang mit Ihnen.',
    },
    {
      question: 'Können Sie reinigen, während wir abwesend sind?',
      answer: 'Ja, auch während Ihrer Abwesenheit, abends oder am Wochenende. Für Schlüssel und Alarm vereinbaren wir feste Regeln.',
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'In welchen Sprachen können wir uns verständigen?', answer: answers.sprachen },
    { question: 'Was kostet die Reinigung?', answer: answers.kosten },
    { question: 'Wo sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/premium/yacht', text: 'Für Yachten und Motorboote am Vierwaldstättersee und am Zugersee.' },
    { path: '/premium/privatjet', text: 'Für die Kabine Ihres Privatjets.' },
    { path: '/premium', text: 'Alle Angebote und Zusagen unserer Premium-Linie.' },
  ],
  cta,
}
