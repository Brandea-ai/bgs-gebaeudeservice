import type { ServicePageContent } from '../types'
import { answers, steps } from './common'

/**
 * Texte der neun Leistungsseiten unter /leistungen (M29, Zielbild v2 in
 * Webseite-Analyse/03, Abschnitt 2a). Entwürfe des Agenten nach E23, fachlich
 * vom Kunden gegenzulesen. Grundlage je Seite steht im Kommentar darüber.
 * Allgemeine Beschreibungen einer Leistung («typisch sind») sind keine Zusage,
 * der verbindliche Umfang steht in der Offerte.
 */

// Grundlage: R3a (Leistung, Nachfüllservice), R10c (Rhythmus), E28 (keine Privathaushalte), K01, K08
const unterhaltsreinigung: ServicePageContent = {
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
      'Einmalige Grund- oder Umzugsreinigungen: siehe [Sonderreinigungen](/leistungen/sonderreinigungen).',
      'Fenster aussen und Fassaden: siehe [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
      'Privathaushalte. Für Villen und Residenzen gibt es unseren [Premium-Bereich](/premium).',
    ],
  },
  sections: [
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
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
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
        'Die Unterhaltsreinigung hält Flächen in einem festen Rhythmus sauber. Eine Grundreinigung ist ein einmaliger, gründlicher Einsatz, der auch Verschmutzungen entfernt, die die laufende Reinigung nicht erreicht. Sie gehört zu unseren [Sonderreinigungen](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Können wir den Rhythmus später ändern?',
      answer: 'Ja. Wenn sich die Nutzung ändert, besprechen wir mit Ihnen einen neuen Umfang oder Rhythmus.',
    },
    { question: 'Reinigen Sie mit umweltfreundlichen Mitteln?', answer: answers.mittel },
    { question: 'Was kostet eine Unterhaltsreinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/bueroreinigung', text: 'Wenn es vor allem um Büros oder eine Praxis geht.' },
    { path: '/leistungen/hauswartung', text: 'Wenn neben der Reinigung auch Kontrollgänge, Kleinreparaturen und Entsorgung dazukommen.' },
    { path: '/leistungen/sonderreinigungen', text: 'Für eine Grundreinigung oder eine Umzugsreinigung mit Abnahmegarantie.' },
  ],
  cta: {
    title: 'Offerte für Ihre Liegenschaft',
    text: 'Beschreiben Sie uns Objekt, Fläche und gewünschten Rhythmus. Wir kommen für die Besichtigung vorbei und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3d (eigene Seite, Büros als Hauptzielgruppe), R10a (Praxen), E17, K01, E18 (Sprachen)
const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Laufende Reinigung',
  h1: 'Reinigung für Büros und Praxen',
  lead: [
    'In Büros und Praxen soll die Reinigung den Betrieb nicht stören: kein Staubsauger in der Besprechung, kein nasser Boden in der Sprechstunde. Deshalb legen wir die Einsatzzeiten mit Ihnen fest, passend zu Ihren Arbeits- und Öffnungszeiten.',
    'Wir reinigen Büros, Verwaltungen und Praxen in einem festen Rhythmus. Unsere Mitarbeitenden sprechen Deutsch, Englisch, Französisch und Italienisch, praktisch für Betriebe mit internationalem Team.',
  ],
  facts: [
    { label: 'Für', value: 'Büros, Verwaltungen und Praxen' },
    { label: 'Zeiten', value: 'Nach Absprache, passend zu Ihren Arbeits- und Öffnungszeiten' },
    { label: 'Rhythmus', value: 'Mehrmals pro Woche, je nach Fläche und Nutzung' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro: 'Den genauen Umfang halten wir nach der Besichtigung fest. Typisch sind:',
    items: [
      'Arbeitsplätze und freie Oberflächen',
      'Böden in Büros, Gängen und Sitzungszimmern',
      'Empfang, Eingangsbereich und Glastüren',
      'Teeküchen und Aufenthaltsräume',
      'Sanitärräume',
      'Abfall und Altpapier, Verbrauchsmaterial nachfüllen',
    ],
    notIncluded: [
      'Treppenhäuser und Gemeinschaftsräume ganzer Liegenschaften: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Einmalige Grundreinigungen: siehe [Sonderreinigungen](/leistungen/sonderreinigungen).',
      'Aufbereitung von Instrumenten und Medizinprodukten, sie bleibt bei Ihrem Praxisteam.',
    ],
  },
  sections: [
    {
      title: 'Reinigung in Praxen',
      paragraphs: [
        'In Praxen richten wir uns nach Ihrem Hygieneplan. Welche Räume und Flächen wir reinigen und was Ihr Praxisteam selbst übernimmt, klären wir bei der Besichtigung und halten es in der Offerte fest.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Zeiten und Zugang',
      text: 'Wir legen fest, wann wir reinigen und wie wir ins Gebäude kommen, etwa mit Schlüssel oder Badge.',
    },
    {
      title: 'Start',
      text: 'Wir beginnen zum vereinbarten Termin. Ändert sich Ihr Bedarf, passen wir Umfang und Rhythmus mit Ihnen an.',
    },
  ],
  faq: [
    {
      question: 'Reinigen Sie ausserhalb unserer Arbeitszeiten?',
      answer:
        'Die Einsatzzeiten legen wir mit Ihnen fest, passend zu Ihren Arbeits- und Öffnungszeiten. Sagen Sie uns bei der Anfrage, wann gereinigt werden soll.',
    },
    {
      question: 'Reinigen Sie auch Arzt- und Therapiepraxen?',
      answer:
        'Ja. In Praxen richten wir uns nach Ihrem Hygieneplan und klären bei der Besichtigung, welche Räume und Flächen wir übernehmen.',
    },
    {
      question: 'Sprechen Ihre Mitarbeitenden auch Englisch?',
      answer: `${answers.sprachen} Das ist praktisch, wenn in Ihrem Büro mehrere Sprachen gesprochen werden.`,
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'Was kostet die Büroreinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Für Treppenhäuser und Gemeinschaftsräume der ganzen Liegenschaft.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Fenster und Glasflächen, auch aussen.' },
    { path: '/leistungen/facility-services', text: 'Wenn Reinigung, Hauswartung und Umgebung aus einer Hand kommen sollen.' },
  ],
  cta: {
    title: 'Offerte für Ihr Büro oder Ihre Praxis',
    text: 'Nennen Sie uns Fläche, Räume und gewünschte Zeiten. Wir kommen vorbei und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3b (fünf Sonderreinigungen), W01 und E28 (Umzugsreinigung nicht für Mieter), K07
const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Sonderreinigungen: Grundreinigung und Umzugsreinigung',
  lead: [
    'Manche Reinigungen fallen nicht jede Woche an: vor der Übergabe einer Wohnung, wenn sich Schmutz über längere Zeit festgesetzt hat oder wenn nach Bauarbeiten Staub zurückbleibt. Dafür gibt es unsere Sonderreinigungen.',
    'Wir übernehmen sie für Verwaltungen, Eigentümer und Unternehmen, einmalig oder in grösseren Abständen.',
  ],
  facts: [
    { label: 'Für', value: 'Verwaltungen, Eigentümer, Stockwerkeigentümerschaften und Unternehmen' },
    { label: 'Art', value: 'Einmalig oder in grösseren Abständen' },
    { label: 'Umzugsreinigung', value: 'Mit Abnahmegarantie' },
  ],
  scope: {
    title: 'Unsere Sonderreinigungen',
    items: [
      'Grundreinigung von Wohn-, Büro- und Gewerbeflächen',
      'Umzugs- und Wohnungsendreinigung mit Abnahmegarantie',
      '[Bauendreinigung](/leistungen/baureinigung) nach Bau- und Umbauarbeiten',
      '[Fenster- und Glasreinigung](/leistungen/fenster-und-fassadenreinigung)',
      '[Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung), auch mit Hochdruck',
    ],
    notIncluded: [
      'Regelmässige Reinigung: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Umzugsreinigungen im Auftrag von Mieterinnen und Mietern einzelner Wohnungen.',
    ],
  },
  sections: [
    {
      title: 'Grundreinigung',
      paragraphs: [
        'Eine Grundreinigung geht tiefer als die laufende Reinigung. Sie entfernt Verschmutzungen, die sich über längere Zeit festgesetzt haben, auf Böden, in Sanitärräumen und Küchen, an Türen und Oberflächen.',
        'Sinnvoll ist sie etwa vor der Neuvermietung von Büro- oder Gewerbeflächen, nach einer intensiven Nutzung oder bevor eine [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) beginnt.',
      ],
    },
    {
      title: 'Umzugs- und Wohnungsendreinigung mit Abnahmegarantie',
      paragraphs: [
        'Bei der Übergabe einer Wohnung oder Geschäftsfläche muss alles sauber sein, damit die Abnahme ohne Beanstandung klappt. Wir reinigen die Räume vor der Übergabe gründlich, mit Abnahmegarantie: Beanstandet die Verwaltung bei der Abnahme etwas an unserer Reinigung, reinigen wir kostenlos nach. Die Einzelheiten stehen in der Offerte.',
        'Die Umzugsreinigung bieten wir Verwaltungen, Eigentümern und Unternehmen an, bei Villen und Residenzen im [Premium-Bereich](/premium) auch Privatpersonen.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Termin',
      text: 'Wir legen den Einsatz auf den Termin, der zu Ihrer Übergabe oder zu Ihrem Betrieb passt.',
    },
    {
      title: 'Übergabe',
      text: 'Nach dem Einsatz übergeben wir die Räume. Bei der Umzugsreinigung gilt die Abnahmegarantie gemäss Offerte.',
    },
  ],
  faq: [
    {
      question: 'Was bedeutet Abnahmegarantie?',
      answer:
        'Beanstandet die Verwaltung bei der Abnahme etwas an unserer Reinigung, reinigen wir kostenlos nach. Die Einzelheiten stehen in der Offerte.',
    },
    {
      question: 'Wann lohnt sich eine Grundreinigung?',
      answer:
        'Etwa vor einer Neuvermietung, nach einer intensiven Nutzung oder wenn die laufende Reinigung festsitzende Verschmutzungen nicht mehr entfernt. Bei der Besichtigung sagen wir Ihnen, ob eine Grundreinigung nötig ist.',
    },
    {
      question: 'Was ist der Unterschied zur Unterhaltsreinigung?',
      answer:
        'Die Unterhaltsreinigung hält Flächen in einem festen Rhythmus sauber, die Grundreinigung ist ein einmaliger, gründlicher Einsatz. Beides lässt sich verbinden: zuerst eine Grundreinigung, danach die laufende [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
    },
    { question: 'Was kostet eine Sonderreinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Für die Reinigung während und nach Bau- und Umbauarbeiten.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Glasflächen und Fassaden, auch mit Hochdruck.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn nach der Grundreinigung regelmässig gereinigt werden soll.' },
  ],
  cta: {
    title: 'Offerte für Ihre Sonderreinigung',
    text: 'Beschreiben Sie uns Objekt, Anlass und Termin. Wir sehen uns die Räume an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3a (Baureinigung), R3b (Bauendreinigung), R10b, E17
const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Bau- und Bauendreinigung für Neubau und Umbau',
  lead: [
    'Nach Bau- und Umbauarbeiten liegen Staub, Mörtelreste und Schutzfolien überall. Bevor Mieter, Käuferinnen oder Ihr Team einziehen, muss alles bezugsbereit sein, oft auf einen festen Übergabetermin.',
    'Wir reinigen während und nach den Arbeiten, bis die Räume übergeben werden können. Für Bauherrschaften, Architekturbüros, Generalunternehmen und Verwaltungen.',
  ],
  facts: [
    { label: 'Für', value: 'Bauherrschaften, Architekturbüros, Generalunternehmen und Verwaltungen' },
    { label: 'Objekte', value: 'Neubauten, Umbauten und Renovationen' },
    { label: 'Zeitpunkt', value: 'Während der Bauphase und vor der Übergabe' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro:
      'Eine Baureinigung läuft meist in Etappen, abgestimmt auf den Baufortschritt. Welche Etappen wir übernehmen, legen wir mit Ihnen fest.',
    items: [
      'Grobreinigung während der Bauphase',
      'Zwischenreinigungen, etwa vor dem Innenausbau',
      'Bauendreinigung vor der Übergabe',
      'Fenster, Rahmen und Glas von Staub und Rückständen befreien',
      'Klebereste und Schutzfolien entfernen',
      'Böden, Sanitärräume, Küchen und Einbauschränke bezugsbereit reinigen',
    ],
    notIncluded: [
      'Laufende Reinigung nach dem Bezug: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Fassaden: siehe [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Besichtigung und Offerte',
      text: 'Wir sehen uns die Baustelle an und klären mit Ihnen Umfang und Termine. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Etappen planen',
      text: 'Wir stimmen die Einsätze mit Bauleitung und Terminplan ab, damit die Reinigung zum Baufortschritt passt.',
    },
    {
      title: 'Übergabe',
      text: 'Vor der Übergabe reinigen wir die Räume bezugsbereit. Den Termin richten wir nach Ihrem Übergabe- oder Bezugstermin.',
    },
  ],
  faq: [
    {
      question: 'Was ist der Unterschied zwischen Baureinigung und Bauendreinigung?',
      answer:
        'Zur Baureinigung gehören Einsätze während der Bauphase, etwa eine Grobreinigung oder Zwischenreinigungen. Die Bauendreinigung ist die letzte, gründliche Reinigung vor der Übergabe, danach sind die Räume bezugsbereit.',
    },
    {
      question: 'Wann sollten wir die Bauendreinigung einplanen?',
      answer:
        'Sobald der Übergabetermin feststeht. Die Reinigung kommt nach den letzten Handwerksarbeiten und vor der Abnahme. Je früher wir den Termin kennen, desto besser können wir planen.',
    },
    {
      question: 'Gehört die Reinigung der Fenster dazu?',
      answer:
        'Ja, Fenster, Rahmen und Glas reinigen wir bei der Bauendreinigung mit. Für Fassaden gibt es die [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
    },
    { question: 'Was kostet eine Baureinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Für Grundreinigungen und Umzugsreinigungen mit Abnahmegarantie.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Glasflächen und Fassaden am fertigen Bau.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Für die laufende Reinigung nach dem Bezug.' },
  ],
  cta: {
    title: 'Offerte für Ihre Baustelle',
    text: 'Nennen Sie uns Objekt, Fläche und Übergabetermin. Wir sehen uns die Baustelle an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3b (Fenster und Glas, Fassade und Hochdruck), E17, K05 (keine Höhen- oder Gerätezusagen ohne Beleg)
const fensterUndFassade: ServicePageContent = {
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
  steps: [
    steps.anfrage,
    {
      title: 'Besichtigung und Offerte',
      text: 'Wir sehen uns Glasflächen und Fassade vor Ort an, klären Zugang und Methode und erstellen Ihnen eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
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

// Grundlage: R3a (Industrie, Hallen, Maschinen), R10b, E17 (Abschnitt Maschinen), K04, keine Normzusagen ohne Beleg
const industrieUndHallen: ServicePageContent = {
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
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Rundgang und Offerte',
      text: 'Wir sehen uns Hallen, Anlagen und Abläufe vor Ort an. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
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

// Grundlage: R3c (acht Aufgaben, ohne Winterdienst und Pikett), E29, E53 (keine Partner), W08, K02
const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Hauswartung für Wohn- und Geschäftsliegenschaften',
  lead: [
    'Eine Liegenschaft braucht mehr als Reinigung: Jemand muss regelmässig nach dem Rechten sehen, kleine Schäden beheben, die Entsorgung organisieren und bei Wohnungsübergaben dabei sein. Das übernimmt die Hauswartung.',
    'Für Verwaltungen, Eigentümer und Stockwerkeigentümerschaften. Welche Aufgaben wir übernehmen, halten wir schriftlich fest.',
  ],
  facts: [
    { label: 'Für', value: 'Verwaltungen, Eigentümer und Stockwerkeigentümerschaften' },
    { label: 'Objekte', value: 'Wohn- und Geschäftsliegenschaften' },
    { label: 'Nicht im Angebot', value: 'Winterdienst und Pikettdienst' },
  ],
  scope: {
    title: 'Was die Hauswartung übernimmt',
    intro: 'Aus diesen Aufgaben stellen wir die Hauswartung für Ihre Liegenschaft zusammen:',
    items: [
      'Kontrollgänge: regelmässig nach dem Rechten sehen und Mängel melden',
      'Treppenhaus: reinigen und in Ordnung halten',
      'Waschküche und Trockenräume sauber halten',
      'Kleinreparaturen, etwa Leuchtmittel ersetzen',
      'Haustechnik im Blick behalten und Störungen melden',
      'Bei Wohnungsübergaben mitwirken',
      'Entsorgung von Abfall und Wertstoffen organisieren',
      'Umgebungspflege, mehr dazu unter [Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Winterdienst bieten wir nicht an.',
      'Pikett- und Notfalldienst rund um die Uhr.',
      'Grössere Reparaturen und Handwerksarbeiten.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Rundgang und Offerte',
      text: 'Wir sehen uns die Liegenschaft an und klären mit Ihnen, welche Aufgaben anfallen. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
    {
      title: 'Aufgaben festlegen',
      text: 'Wir halten fest, welche Aufgaben wir übernehmen, wie oft wir vor Ort sind und wem wir Mängel melden.',
    },
    {
      title: 'Start',
      text: 'Wir beginnen zum vereinbarten Datum. Braucht die Liegenschaft später mehr oder weniger, passen wir die Aufgaben mit Ihnen an.',
    },
  ],
  faq: [
    {
      question: 'Was ist der Unterschied zur Unterhaltsreinigung?',
      answer:
        'Die Unterhaltsreinigung reinigt in einem festen Rhythmus. Die Hauswartung geht weiter: Kontrollgänge, Kleinreparaturen, Haustechnik, Entsorgung, Wohnungsübergaben und Umgebungspflege. Wer nur Reinigung braucht, ist mit der [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) richtig.',
    },
    {
      question: 'Übernehmen Sie auch grössere Reparaturen?',
      answer:
        'Nein, wir übernehmen Kleinreparaturen. Für grössere Arbeiten braucht es einen Fachbetrieb. Schäden, die wir bei Kontrollgängen feststellen, melden wir Ihnen.',
    },
    {
      question: 'Bieten Sie Winterdienst oder einen Pikettdienst an?',
      answer: 'Nein. Winterdienst und Pikettdienst gehören nicht zu unserem Angebot.',
    },
    {
      question: 'Können wir einzelne Aufgaben wählen?',
      answer: 'Ja. Wir stellen die Hauswartung aus den Aufgaben zusammen, die Ihre Liegenschaft braucht.',
    },
    { question: 'Was kostet die Hauswartung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Für Umgebung und Grünflächen der Liegenschaft.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn nur die Reinigung vergeben werden soll.' },
    { path: '/leistungen/facility-services', text: 'Wenn Reinigung, Hauswartung und Umgebung in einen Vertrag gehören.' },
  ],
  cta: {
    title: 'Offerte für Ihre Liegenschaft',
    text: 'Nennen Sie uns Objekt, Anzahl Wohnungen oder Flächen und die Aufgaben, die Sie abgeben möchten. Wir machen einen Rundgang und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}

// Grundlage: R3a, R3c (Umgebungspflege), M45 (ein Name, ohne Winterdienst), E29
const aussenUndGruen: ServicePageContent = {
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
  steps: [
    steps.anfrage,
    steps.besichtigung,
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

// Grundlage: 03 Abschnitt 2a (ein Vertrag, eine Ansprechperson, nur bestätigte Leistungen), K02, E17, E29, E53
const facilityServices: ServicePageContent = {
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
      '[Sonderreinigungen](/leistungen/sonderreinigungen), etwa Grundreinigungen',
      '[Industrie- und Hallenreinigung](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Technisches Facility Management wie die Wartung von Heizung, Lüftung oder Liften.',
      'Winterdienst.',
      'Die Vermittlung von Drittfirmen, etwa Handwerksbetrieben.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Rundgang und Offerte',
      text: 'Wir sehen uns Ihre Liegenschaften an und klären, welche Leistungen anfallen. Danach erhalten Sie eine schriftliche Offerte, kostenlos und unverbindlich.',
    },
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

export const leistungen = {
  unterhaltsreinigung,
  bueroreinigung,
  sonderreinigungen,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}
