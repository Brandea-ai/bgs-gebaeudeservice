import type { ServicePageContent, Source } from '../../types'

// Grundlage: /premium (Luxusimmobilien, Zweitwohnungen, Räume mit Kunst, Privatanlässe), E40, E41, K06.
// Umbau E85 nach 25-AUDIT/inhalt.md 4.1: Materialkunde als Tabelle (4.1.1), Rundgang als Checkliste (4.1.2),
// dazu Gemälde nach Konservierungsfachstellen. Quellen am 28.09.2026 gelesen (WebFetch).
// Über das Unternehmen nur Belegtes (E18, E41): feste Teams, überprüftes Personal, Regeln für Schlüssel
// und Alarm, Einsätze abends, am Wochenende und während Abwesenheiten, Materialkenntnis,
// Geheimhaltungsvereinbarung auf Wunsch, Kunstwerke nur nach Freigabe, Endreinigung bei Villen (umzugsreinigung.ts).

const nvs: Source = {
  label: 'Naturstein-Verband Schweiz NVS: Merkblatt «Reinigung von Naturstein-Belägen» (Januar 2018)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}

export const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Villenreinigung mit Materialkenntnis und festem Team',
  lead: [
    'Ein Waschtisch aus Marmor, daneben eine Armatur aus Messing, im Wohnraum geöltes Eichenparkett: In einer Villa verlangt fast jede Fläche ein anderes Mittel. Was die Armatur vom Kalk befreit, kann den Stein daneben matt ätzen.',
    'Wir reinigen Villen, Lofts und Residenzen mit einem festen Team, das Ihre Materialien und Ihre Regeln kennt. Es kommt regelmässig, rund um Ihre Anlässe oder dann, wenn Sie verreist sind. Die Materialtabelle und die Liste für den ersten Rundgang auf dieser Seite können Sie ausdrucken.',
  ],
  facts: [
    { label: 'Für', value: 'Eigentümer, ihre Verwaltungen und Makler' },
    { label: 'Einsatzzeiten', value: 'Werktags, abends, am Wochenende oder während Ihrer Reise' },
    { label: 'Team', value: 'Fest zugeteilt und von uns überprüft' },
    { label: 'Nicht enthalten', value: 'Restaurierung von Kunst und Antiquitäten' },
  ],
  scope: {
    title: 'Was die Pflege Ihres Hauses umfasst',
    intro: 'Welche Räume und Flächen dazugehören, bestimmen Sie beim ersten Rundgang. Häufig sind es diese:',
    items: [
      'Wohn-, Schlaf- und Gästeräume',
      'Küchen und Bäder, mit Mitteln passend zu Stein, Lack und Armatur',
      'Böden aus Naturstein und Parkett nach der Pflegeanleitung des Belags',
      'Hochglanzflächen, Glas und Spiegel',
      'Reinigung vor Ihrer Ankunft, nach Ihrer Abreise und Kontrollgänge in der Zeit dazwischen',
      'Einsätze vor und nach Empfängen oder Familienfesten, auch am Wochenende',
      'Räume mit Kunst und Antiquitäten, die Werke selbst nur mit Ihrer Freigabe',
      'Kurzfristige Einsätze vor Verkauf, Fototermin oder Übergabe, auch im Auftrag von Makler oder Verwaltung',
    ],
    notIncluded: [
      'Restaurierung von Kunstwerken und Antiquitäten.',
      'Die Reinigung der Kunstwerke selbst, solange Sie sie nicht ausdrücklich freigeben.',
    ],
  },
  sections: [
    {
      title: 'Ein Bad, drei Materialien',
      paragraphs: [
        'Im Bad zeigt sich, warum Materialkenntnis mehr ist als Vorsicht. Gegen Kalk an der Armatur empfiehlt ein grosser Armaturenhersteller Zitronensäure. Auf dem Marmorwaschtisch daneben greift genau diese Säure die Politur an, und der Küchenschwamm mit dem grünen Pad zerkratzt sie.',
        'Deshalb gibt es bei uns kein Mittel für alles. Beim ersten Rundgang gehen wir Raum für Raum durch, welcher Stein, welches Holz und welche Oberfläche verbaut sind. Liegen Pflegeanleitungen von Hersteller, Schreinerei oder Innenarchitektur vor, gelten sie vor jeder Faustregel.',
      ],
    },
    {
      title: 'Zweitwohnung und Reisen: bereit bei Ihrer Ankunft',
      paragraphs: [
        'Ein Haus am See oder eine Wohnung in den Bergen steht oft wochenlang leer. Vor Ihrer Ankunft reinigen wir, damit Sie ankommen und nichts mehr tun müssen. Nach Ihrer Abreise bringen wir das Haus wieder in Ordnung.',
        'Dazwischen sehen wir so oft nach dem Rechten, wie Sie es wünschen. Sie bestimmen, worauf wir achten, etwa ob Fenster und Türen geschlossen sind oder ob irgendwo Wasser austritt. Was uns auffällt, erfährt die Person, die Sie benennen: Sie selbst, Ihre Verwaltung oder eine Vertrauensperson.',
      ],
    },
    {
      title: 'Vor Verkauf, Fototermin und Übergabe',
      paragraphs: [
        'Makler und Verwaltungen können uns im Namen der Eigentümerschaft beauftragen, auch kurzfristig. Für Fotos zählt, was die Kamera sieht: Glas, Spiegel, polierte Böden und Küchenfronten zeigen im Streiflicht jeden Streifen.',
        'Nennen Sie uns den Termin der Fotografin oder der ersten Besichtigung, die Räume, die gezeigt werden, und wie wir ins Haus kommen. Ist das Haus geräumt, folgt die Endreinigung vor der Übergabe an neue Eigentümer über die [Umzugsreinigung](/leistungen/umzugsreinigung).',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'materialkunde',
      title: 'Welche Pflege welches Material braucht',
      intro:
        'Die Faustregeln der Fachverbände und Hersteller für die Flächen, die in Villen am häufigsten vorkommen. Zum Ausdrucken für alle, die in Ihrem Haus reinigen.',
      columns: ['Material', 'So bleibt es schön', 'Was schadet'],
      rows: [
        [
          'Marmor, Kalkstein, Travertin',
          'Sand und Staub zuerst trocken entfernen. Danach neutraler Reiniger oder Steinseife, mit klarem Wasser nachwischen und polierte Flächen trocknen, sonst bleiben Wasserflecken.',
          'Jede Säure, auch Essig, Zitrone und Kalklöser: Sie ätzt die Oberfläche matt. Scheuermittel sowie Schwämme mit grünem oder blauem Pad zerkratzen die Politur.',
        ],
        [
          'Granit, Gneis, Quarzit',
          'Säurebeständig. Laut Naturstein-Verband sind hier alle üblichen Reinigungsmethoden möglich.',
          'Verwechslung: Ist unklar, welcher Stein verbaut ist, klärt eine Probe an versteckter Stelle, ob er säureempfindlich ist.',
        ],
        [
          'Parkett, versiegelt oder geölt',
          'Staubsaugen und gelegentlich feucht wischen. Mikrofasertücher nur mit Freigabe des Herstellers. Geöltes Parkett braucht regelmässige Nachbehandlung nach seinem Pflegesystem.',
          'Nassreinigung, Reinigungsautomaten und Dampfgeräte',
        ],
        [
          'Hochglanzlack, etwa an Küchenfronten',
          'Fensterleder oder weiche Lederlappen, warmes Wasser mit mildem Haushaltsreiniger, immer ohne Druck wischen',
          'Mikrofasertücher, verhärtete Lappen und scharfe Mittel: Sie hinterlassen bleibende Kratzer.',
        ],
        [
          'Armaturen',
          'Mittel auf ein weiches Baumwolltuch geben, nicht direkt aufsprühen. Gegen Kalk empfiehlt ein Hersteller Zitronensäure, nie aber auf den Naturstein daneben.',
          'Essig, Essig-, Ameisen-, Phosphor- und Salzsäure, Chlorbleichlauge, Kratzschwämme, Bürsten und Mikrofasertücher',
        ],
        [
          'Polster, Vorhänge, Teppiche',
          'Pflegeetikett und Angaben des Herstellers',
          'Jede Behandlung, deren Pflegesymbol auf dem Etikett durchgestrichen ist',
        ],
      ],
      note:
        'Massgebend sind immer die Pflegeanleitungen Ihrer Hersteller. Weichen sie von dieser Tabelle ab, richten wir uns nach ihnen.',
      sources: [
        nvs,
        { label: 'Natural Stone Institute: Care & Cleaning of Natural Stone', href: 'https://www.naturalstoneinstitute.org/consumers/care/' },
        { label: 'Interessengemeinschaft Schweizer Parkettmarkt ISP: Parkett ABC und Pflegeanleitungen', href: 'https://www.parkett-verband.ch/de/Parkett/Parkett-ABC-und-Pflegeanleitungen' },
        { label: 'Kurt Keller AG: Pflegehinweise für Fronten, Oberflächen und Schränke', href: 'https://www.kkag.ch/de/reinigung-und-pflege/pflegehinweise-fur-fronten-oberflachen-und-schranke/' },
        { label: 'hansgrohe: Armaturen entkalken und reinigen', href: 'https://www.hansgrohe.de/bad/ratgeber/pflege-wartung/armaturen-entkalken' },
        { label: 'GINETEX Germany: Pflegesymbole', href: 'https://ginetex.de/pflegekennzeichnung/pflegesymbole/' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'text',
      id: 'gemaelde-und-kunst',
      title: 'Gemälde und Kunstwerke: wo die Reinigung aufhört',
      paragraphs: [
        'Kunstwerke selbst reinigen wir nur, wenn Sie es ausdrücklich freigeben. Der Grund steht in den Empfehlungen der Fachstellen für Konservierung: Schon falsches Abstauben kann einem Gemälde dauerhaft schaden.',
      ],
      items: [
        'Staubtücher, trocken oder feucht, harte Borsten und Staubwedel gehören nicht an ein Gemälde. Fäden bleiben an erhabener Farbe hängen, Borsten und Wedel zerkratzen, Feuchtigkeit kann Farbe lösen.',
        'Lose oder abblätternde Farbe wird nicht berührt. Matte Malflächen können schon beim Abpinseln dauerhaft glänzende Stellen bekommen.',
        'Die Oberfläche eines Gemäldes reinigen und Schäden beheben gehört in die Hände einer Konservatorin oder eines Restaurators.',
        'Für den Standort raten die Fachleute: nicht über dem Cheminée, nie in direkter Sonne und bei möglichst gleichmässiger Luftfeuchtigkeit zwischen 40 und 60 Prozent.',
      ],
      note:
        'Die Restaurierung gehört nicht zu unserer Leistung. Fachpersonen in der Schweiz führt der Schweizerische Verband für Konservierung und Restaurierung SKR in seinem Verzeichnis.',
      sources: [
        { label: 'Smithsonian Museum Conservation Institute: Caring for Your Paintings', href: 'https://mci.si.edu/caring-your-paintings' },
        { label: 'Canadian Conservation Institute: Basic care, Paintings', href: 'https://www.canada.ca/en/conservation-institute/services/care-objects/fine-art/basic-care-paintings.html' },
        { label: 'Schweizerischer Verband für Konservierung und Restaurierung SKR', href: 'https://restaurierung.swiss/de' },
      ],
    },
    {
      kind: 'checklist',
      id: 'erster-rundgang',
      title: 'Vor dem ersten Einsatz: die Liste für den Rundgang',
      intro:
        'Diese Punkte gehen wir beim ersten Rundgang mit Ihnen durch. Ausgedruckt hilft die Liste Ihnen, Ihrer Verwaltung oder Ihrem Makler bei der Vorbereitung.',
      groups: [
        {
          title: 'Räume und Materialien',
          items: [
            'Welche Räume gereinigt werden und welche niemand betritt',
            'Welche Steine, Hölzer und Oberflächen verbaut sind, soweit bekannt',
            'Pflegeanleitungen von Hersteller, Schreinerei oder Innenarchitektur',
            'Mittel, die Sie bevorzugen oder ausschliessen',
          ],
        },
        {
          title: 'Kunst und Wertgegenstände',
          items: [
            'Welche Kunstwerke und Antiquitäten nur mit Ihrer Freigabe berührt werden',
            'Vitrinen, Sammlungen und Schränke, die geschlossen bleiben',
            'Wo empfindliche Stücke stehen, damit beim Reinigen der Räume niemand anstösst',
            'Pflegehinweise von Galerie, Restauratorin oder Restaurator, falls vorhanden',
          ],
        },
        {
          title: 'Schlüssel, Alarm und Zutritt',
          items: [
            'Wie Schlüssel übergeben und aufbewahrt werden',
            'Wer die Alarmanlage ein- und ausschaltet und wie',
            'Wer im Haus ist, wenn das Team kommt',
            'Ob Sie eine Geheimhaltungsvereinbarung wünschen',
          ],
        },
        {
          title: 'Zeiten und Meldungen',
          items: [
            'Feste Einsatzzeiten, auch abends oder am Wochenende',
            'Ihre Reisedaten, damit das Haus vor der Ankunft bereit ist',
            'Wie oft während Ihrer Abwesenheit jemand vorbeischaut',
            'Wer erfährt, was uns auffällt, und auf welchem Weg',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Regeln für Schlüssel und Alarm',
      text: 'Nach Ihrer Zusage vereinbaren wir Übergabe und Aufbewahrung der Schlüssel, den Umgang mit der Alarmanlage und, wenn Sie es wünschen, eine Geheimhaltungsvereinbarung.',
    },
    {
      title: 'Erster Einsatz',
      text: 'Das Team, das künftig zu Ihnen kommt, arbeitet vom ersten Tag an nach den Pflegehinweisen aus dem Rundgang.',
    },
    {
      title: 'Laufende Pflege',
      text: 'Das Team kommt zu den vereinbarten Zeiten, bei Abwesenheit auch zu Kontrollgängen. Ändern sich Ihre Pläne, etwa vor einem Anlass oder einer Reise, passen wir die Einsätze an.',
    },
  ],
  faq: [
    {
      question: 'Wovon hängt der Preis für die Pflege einer Villa ab?',
      answer:
        'Einen Pauschalpreis gibt es nicht, weil sich Häuser stark unterscheiden. Den Aufwand bestimmen vor allem die Wohnfläche und die Zahl der Räume, der Anteil empfindlicher Flächen wie Naturstein, Hochglanz und geöltes Parkett und der Rhythmus: wöchentlich, monatlich oder nur vor Anlässen. Dazu kommen Zusätze wie Kontrollgänge während Ihrer Abwesenheit. Den Preis nennen wir nach dem Rundgang, dann für genau Ihr Haus.',
    },
    {
      question: 'Was brauchen Sie von uns vor dem ersten Einsatz?',
      answer:
        'Den Zugang zum Haus, die Regeln für die Alarmanlage, vorhandene Pflegeanleitungen für Böden, Stein und Küche und eine Person, die erfährt, was uns auffällt. Die Liste zum Ausdrucken finden Sie weiter oben unter «Vor dem ersten Einsatz».',
    },
    {
      question: 'Kommen immer dieselben Personen?',
      answer:
        'Ja. Ihr Haus betreut ein festes Team, das Ihre Räume, Ihre Materialien und Ihre Regeln für Schlüssel und Alarm kennt. Alle im Team sind von uns überprüft.',
    },
    {
      question: 'Reinigen Sie auch unsere Gemälde und Skulpturen?',
      answer:
        'Nur mit Ihrer ausdrücklichen Freigabe. Die Räume mit Kunst reinigen wir sorgfältig, die Werke selbst bleiben sonst unberührt. Die Oberflächenreinigung eines Gemäldes und jede Restaurierung gehören nach den Konservierungsfachstellen in die Hände einer Fachperson.',
    },
    {
      question: 'Dürfen wir die Pflegemittel vorgeben?',
      answer:
        'Ja. Empfiehlt der Hersteller Ihrer Böden, Ihrer Küche oder Ihrer Armaturen bestimmte Mittel, arbeiten wir damit. Bei Marmor, Kalkstein und Travertin raten wir von Produkten mit Säure ab, auch wenn sie als mild gelten.',
    },
    {
      question: 'Übernehmen Sie auch die Reinigung vor und nach einem Empfang?',
      answer:
        'Ja, zusätzlich zur laufenden Pflege und auch am Wochenende. Nennen Sie uns Datum, ungefähre Zahl der Gäste und die Räume, die genutzt werden.',
    },
    {
      question: 'Wie finden wir heraus, welcher Stein in unserem Haus verbaut ist?',
      answer:
        'Am zuverlässigsten aus den Bauunterlagen oder beim Steinlieferanten, der nach dem Naturstein-Verband Schweiz auch das passende Reinigungsverfahren nennen kann. Fehlen die Angaben, zeigt eine Probe an versteckter Stelle, ob der Stein säureempfindlich ist. Weil die Probe die Stelle aufraut, gehört sie in die Hand einer Fachperson.',
    },
  ],
  related: [
    { path: '/premium/yacht', text: 'Wenn zum Haus am See ein Boot gehört: Teak, Gelcoat und Polster am Liegeplatz.' },
    { path: '/leistungen/umzugsreinigung', text: 'Beim Auszug oder Verkauf: Endreinigung vor der Übergabe, bei Villen auch für Privatpersonen.' },
    { path: '/premium', text: 'Alle Premium-Leistungen, von der Zweitwohnung bis zum Family Office, auf einer Seite.' },
  ],
  cta: {
    title: 'Rundgang durch Ihr Haus vereinbaren',
    text: 'Für die Offerte brauchen wir den Ort, die ungefähre Wohnfläche und die Zahl der Räume, besondere Materialien, soweit Sie sie kennen, und ob es um laufende Pflege, eine Zweitwohnung oder einen einzelnen Anlass geht. Den Rundgang machen wir mit Ihnen, Ihrer Verwaltung oder Ihrem Makler, auf Wunsch unter Geheimhaltung. Rundgang und Offerte sind für Sie kostenlos und verpflichten zu nichts.',
  },
}
