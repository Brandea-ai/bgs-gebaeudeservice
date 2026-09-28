import { company } from '../../shared/company'
import type { ServicePageContent, Step } from '../types'
import { answers } from './common'

/**
 * Texte der drei Premium-Seiten unter /premium (M29, M57). Grundlage sind die
 * Angebote und Zusagen der Premium-Linie aus Runde 3 (E40, E41), wie sie auf
 * /premium stehen. Die drei zurückgestellten Zusagen bleiben weg (E52): keine
 * Deckung für Kunst und Wertgegenstände, kein Zutritt zu einem Flugfeld, keine
 * Prüfmethode für das Personal. Keine Referenzen, Zahlen oder Preise (E18).
 */

const anfrage: Step = {
  title: 'Diskrete Anfrage',
  text: `Rufen Sie uns an oder schreiben Sie uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.`,
}

const team: Step = {
  title: 'Ihr Team',
  text: 'Bei Ihnen arbeitet immer dasselbe Team. Wer bei Ihnen arbeitet, ist von uns überprüft.',
}

const cta = {
  title: 'Diskret anfragen',
  text: `Rufen Sie uns an oder schreiben Sie uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.`,
}

// Grundlage: /premium (Luxusimmobilien, Zweitwohnungen, Räume mit Kunst, Privatanlässe), E40, E41, K06
const luxusimmobilien: ServicePageContent = {
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
    anfrage,
    {
      title: 'Rundgang und Offerte',
      text: 'Wir sehen uns Ihr Haus an und klären Materialien, Zeiten und Zugang. Danach erhalten Sie eine Offerte, kostenlos und unverbindlich.',
    },
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

// Grundlage: /premium («Kabinenreinigung mit Rücksicht auf hochwertige Materialien, nach Absprache»), E41, E52 (kein Flugfeld)
const privatjet: ServicePageContent = {
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
    anfrage,
    {
      title: 'Besichtigung und Offerte',
      text: 'Wir sehen uns die Kabine an und klären Materialien, Standort und Zeitfenster mit Ihnen und Ihrem Flugbetrieb. Danach erhalten Sie eine Offerte, kostenlos und unverbindlich.',
    },
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

// Grundlage: /premium (Vierwaldstättersee, Zugersee; Teak, Gelcoat und Polster), E41, E42
const yacht: ServicePageContent = {
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
    anfrage,
    {
      title: 'Besichtigung am Liegeplatz',
      text: 'Wir sehen uns das Boot an und klären Materialien und Zugang zum Liegeplatz. Danach erhalten Sie eine Offerte, kostenlos und unverbindlich.',
    },
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

export const premium = { luxusimmobilien, privatjet, yacht }
