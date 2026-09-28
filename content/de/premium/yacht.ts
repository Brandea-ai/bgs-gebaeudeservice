import type { ServicePageContent, Source } from '../../types'

/**
 * Yacht und Boot (E85, 25-AUDIT/inhalt.md 4.3). Über das Unternehmen nur Belegtes:
 * Vierwaldstättersee und Zugersee, innen und aussen, einmalig oder regelmässig,
 * Teak, Gelcoat und Polster (E41), feste Teams, Regeln für Schlüssel, Einsätze
 * abends, am Wochenende und in Abwesenheit (E41), umweltfreundliche Mittel auf
 * Wunsch (E18). Fachwissen und Regeln nur mit gelesener Quelle, Stand 28.09.2026.
 */
const quellen = {
  sika: { label: 'Sika Marine Application Guide: Teak Decking, Maintenance and Repair (2017)', href: 'https://gbr.sika.com/dms/getdocument.get/5f0d4442-0769-310e-8a04-89d6f3cb5c90/Marine%20Application%20Guide_12_Teak%20Decking_Maintenance_and_Repair.pdf' },
  hallbergRassy: { label: 'Hallberg-Rassy: Teak deck', href: 'https://shop.hallberg-rassy.com/deck-hull-mooring/teak.html' },
  axopar: { label: 'Axopar Owner’s Manual, 7.1 Cleaning and maintaining the gelcoat surface', href: 'https://manuals.axopar.com/content/p7len/2.0.1.0/en/189.html' },
  iser: { label: 'Informationsstelle Edelstahl Rostfrei: Merkblatt 824, Reinigung von Edelstahl Rostfrei (2024)', href: 'https://www.edelstahl-rostfrei.de/fileadmin/user_upload/ISER/images/publikationen/iser_MB824_2025.pdf' },
  roehm: { label: 'Röhm: Reinigen und Desinfizieren von PLEXIGLAS (211-13)', href: 'https://www.plexiglas.de/files/plexiglas-content/pdf/technische-informationen/211-13-Reinigen-und-Desinfizieren-von-PLEXIGLAS.pdf' },
  sunbrella: { label: 'Sunbrella: Clean Sunbrella Marine Upholstery', href: 'https://www.sunbrella.com/clean-sunbrella-marine-upholstery' },
  meteo: { label: 'MeteoSchweiz: Pollensaison 2022, der Rückblick', href: 'https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog/de/2022/8/pollensaison-2022-der-rueckblick.html' },
  gschg: { label: 'Bundesgesetz über den Schutz der Gewässer (GSchG, SR 814.20), Art. 6 Grundsatz', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/de#art_6' },
  bsv: { label: 'Binnenschifffahrtsverordnung (BSV, SR 747.201.1), Art. 10 und 108', href: 'https://www.fedlex.admin.ch/eli/cc/1979/337_337_337/de#art_10' },
  hafenLuzern: { label: 'Bootshafen Luzern: Hafenreglement (gültig seit 1. April 2024)', href: 'https://bootshafen-luzern.ch/hafenreglement/' },
  hafenKehrsiten: { label: 'Bootshafen Hostatt, Kehrsiten: Hafenordnung vom 1. Januar 2018, Ziffer 10', href: 'https://s9de133486e03e91b.jimcontent.com/download/version/1466356984/module/10266661993/name/Hafenordnung.pdf' },
  smrv: { label: 'Kanton Luzern: Schiffsmelde- und Reinigungsverordnung (SMRV), Erläuterungen (17.03.2026)', href: 'https://lawa.lu.ch/-/media/LAWA/Dokumente/njf/lebensraeume/neobiota/Schiffe/Erlaeuterungen_zur_Verordnung.pdf?rev=d06e1b64f51c48c9a2ef5613ea8ef1ce' },
  smrp: { label: 'Umwelt Zentralschweiz: FAQ Schiffsmelde- und -reinigungspflicht', href: 'https://www.umwelt-zentralschweiz.ch/was-wir-machen/themen/gebietsfremde-arten/aquatische-neobiota/faq-schiffsmelde-und-reinigungspflicht/' },
  zug: { label: 'Kanton Zug: Schiffsreinigungspflicht', href: 'https://zg.ch/de/natur-umwelt-tiere/arten-und-lebensraeume/artenmanagement-gewaesser/schiffsreinigungspflicht' },
} satisfies Record<string, Source>

export const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Bootsreinigung und Yachtreinigung am Liegeplatz',
  lead: [
    'Blütenstaub, Vogelkot und Feuchtigkeit setzen einem Boot am See jede Saison zu. Wir reinigen es dort, wo es liegt, am Steg oder im Hafen: innen und aussen, einmalig vor einem Anlass oder regelmässig über die Saison.',
    'Was vom Deck läuft, landet im See. Deshalb gehören die Hafenordnung Ihres Liegeplatzes und die Pflegeanleitung Ihrer Werft zu den ersten Unterlagen, die wir uns ansehen.',
  ],
  facts: [
    { label: 'Einsatzort', value: 'Am Liegeplatz, am Vierwaldstättersee und am Zugersee' },
    { label: 'Einsatzzeiten', value: 'Auch abends, am Wochenende und wenn Sie nicht an Bord sind' },
    { label: 'Rhythmus', value: 'Einmalig vor einem Anlass oder regelmässig bis zum Winterlager' },
    { label: 'Nicht enthalten', value: 'Unterwasserschiff, Antifouling, Motor und Bordtechnik' },
  ],
  sections: [
    {
      title: 'Warum ein Boot anders gereinigt wird als ein Haus',
      paragraphs: [
        'An Bord stecken Materialien, die im Haus kaum vorkommen. Teak hat weiche Fasern, die harte Bürsten und Hochdruck herauslösen: Das Deck wird rau, die Fugen stehen vor. Gelcoat verliert durch Sonne und ungeeignete Reiniger den Glanz, Edelstahl rostet an, wenn Stahlwolle oder chlorhaltige Mittel im Spiel sind.',
        'Haushaltsreiniger sind an Bord deshalb meist die falsche Wahl. Wir arbeiten mit Mitteln, die zum jeweiligen Material passen, und halten uns an die Pflegeanleitung Ihrer Werft, wenn es eine gibt.',
      ],
    },
    {
      title: 'Am See ist vieles anders',
      paragraphs: [
        'Auf dem Vierwaldstättersee und dem Zugersee fehlt das Salz, das am Meer die Beschläge angreift. Dafür bringt das Ufer anderes an Bord: im Frühling den gelben Blütenstaub der Nadelbäume, dazu Laub, Spinnweben und Vogelkot, vor allem an Liegeplätzen unter Bäumen. Im geschlossenen Salon hält sich die Feuchtigkeit, Polster und Kissen bekommen Stockflecken.',
        'Dazu kommt das Wasser rundum. Welche Mittel am Steg erlaubt sind, regeln Gesetz und Hafenordnung, die Übersicht weiter unten nennt die Regeln mit Quelle. Umweltfreundliche Mittel setzen wir auf Wunsch ein, und auch sie gehören nur sparsam aufs Deck.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'materialien',
      title: 'Teak, Gelcoat, Edelstahl: was hilft und was schadet',
      intro: 'Die Hinweise stammen aus Pflegeanleitungen von Herstellern und Fachstellen. Gibt es für Ihr Boot eine eigene Anleitung der Werft, geht sie vor.',
      columns: ['Material', 'So wird es gereinigt', 'Das schadet'],
      rows: [
        [
          'Teakdeck',
          'Mit Schwamm oder weicher Bürste in Faserrichtung, mit einem milden Teakreiniger, danach gründlich mit klarem Wasser spülen. Die Faserrichtung empfehlen Sika als Hersteller von Teakdeck-Systemen und die Werft Hallberg-Rassy.',
          'Hochdruckreiniger und harte Bürsten tragen die weichen Fasern ab, die Planken werden dünner. Bleichmittel, starke Säuren und aggressive Chemikalien sollen laut Sika nie aufs Deck.',
        ],
        [
          'Gelcoat an Deck und Aufbauten',
          'Mit einem Reiniger für Boote, verdünnt nach Anleitung, und einer weichen Bürste waschen, vorher und nachher mit klarem Wasser spülen.',
          'Haushaltsreiniger, Chlor und Säuren. Ihr pH-Wert passt nicht und kann die Oberfläche beschädigen.',
        ],
        [
          'Edelstahl an Reling, Klampen und Beschlägen',
          'Mit weichem Tuch in Schliffrichtung wischen. Flugrost früh entfernen, etwa mit einem schwach sauren Edelstahlreiniger auf Basis von Zitronensäure.',
          'Stahlwolle und Drahtbürsten aus gewöhnlichem Stahl, Scheuermilch, Mittel mit Salzsäure oder Chlor. Eisenteilchen aus Stahlwolle bleiben in der Oberfläche und lösen bei Feuchtigkeit Rost aus.',
        ],
        [
          'Fenster und Luken aus Acrylglas',
          'Mit Wasser, etwas Spülmittel und einem weichen, fusselfreien Tuch reinigen, danach leicht feucht nachwischen.',
          'Trocken abwischen, übliche Glasreiniger, Mittel mit Alkohol, Lösungs- oder Verdünnungsmitteln. Sie hinterlassen Kratzer oder greifen das Acrylglas an.',
        ],
        [
          'Polster und Kissen aus Outdoorstoff',
          'Losen Schmutz abbürsten, mit milder Seifenlösung und weicher Bürste reinigen, alle Seifenreste ausspülen und an der Luft trocknen lassen.',
          'Bleichmittel in der Nähe des Wassers, davon rät auch der Stoffhersteller ab. Schmutz, der liegen bleibt: Auf ihm wächst Schimmel.',
        ],
      ],
      note: 'Bleibt ein Teakdeck nach dem Nassreinigen an einzelnen Stellen länger nass oder verfärbt sich das Holz dort, kann eine Fuge undicht sein. Das gehört in die Werft.',
      sources: [quellen.sika, quellen.hallbergRassy, quellen.axopar, quellen.iser, quellen.roehm, quellen.sunbrella],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'saisonkalender',
      title: 'Saisonkalender für Ihr Boot',
      intro: 'Wann am See welche Reinigung ansteht. Die Monate sind Richtwerte, Blüte und Wetter verschieben sich von Jahr zu Jahr.',
      entries: [
        {
          label: 'März und April',
          text: 'Vor dem ersten Ausfahren: Salon und Kabinen lüften und reinigen, Polster aus dem Winterlager auf Stockflecken prüfen, Deck, Gelcoat und Fenster für die Saison bereit machen.',
        },
        {
          label: 'April und Mai',
          text: 'Fichten und Föhren blühen. Ihr Blütenstaub legt sich als gelber Film auf Deck, Polster und Wasser. Liegt das Boot unter Bäumen, lohnt sich in diesen Wochen eine häufigere Reinigung.',
        },
        {
          label: 'Juni bis August',
          text: 'Hauptsaison mit Ausfahrten und Gästen an Bord. Der Bootshersteller Axopar empfiehlt in seinem Handbuch, das Boot nach jeder Ausfahrt zu waschen und jede Woche, wenn es ohne Abdeckung im Freien liegt.',
        },
        {
          label: 'September und Oktober',
          text: 'Saisonende: gründlich reinigen und alles trocknen lassen, bevor das Boot eingewintert wird. Eine Plastikfolie als Abdeckung schliesst Feuchtigkeit ein, besser ist eine Plane aus Stoff.',
        },
        {
          label: 'Vor einem Seewechsel',
          text: 'Kommt das Boot nach dem Winterlager in einen anderen See, planen Sie Meldung und Reinigung bei einer autorisierten Reinigungsstelle vor dem Einwassern ein.',
        },
      ],
      sources: [quellen.meteo, quellen.axopar],
    },
    {
      kind: 'table',
      id: 'regeln-am-see',
      title: 'Was am Liegeplatz gilt',
      intro: 'Gesetz, Verordnung und Hafenordnung bestimmen, was beim Reinigen ins Wasser darf. Die Übersicht fasst die Regeln zusammen und ersetzt keine Rechtsberatung, im Einzelfall zählt der Wortlaut.',
      columns: ['Regel', 'Was sie verlangt', 'Was das für die Pflege heisst'],
      rows: [
        [
          'Gewässerschutzgesetz, Art. 6',
          'Verboten ist, Stoffe, die Wasser verunreinigen können, mittelbar oder unmittelbar in ein Gewässer einzubringen.',
          'Jedes Mittel an Deck kann mit dem Spülwasser in den See laufen. Deshalb so wenig wie möglich davon, und nur, was zum Material passt.',
        ],
        [
          'Binnenschifffahrtsverordnung, Art. 10',
          'Die Schifffahrt kennt dasselbe Verbot. Gelangen wassergefährdende Stoffe wie Öl oder Treibstoff ins Wasser und kann der Schiffsführer die Gefahr nicht selbst beseitigen, benachrichtigt er unverzüglich die Polizei.',
          'Ölfilm in der Bilge oder Treibstoffspuren am Rumpf nicht einfach wegspülen, sondern der Eignerin oder dem Eigner melden.',
        ],
        [
          'Binnenschifffahrtsverordnung, Art. 108',
          'Schiffe mit Wohn-, Koch- oder Sanitäreinrichtungen müssen Behälter für Fäkalien, Abwasser und Abfälle haben, die sich an Land entleeren lassen.',
          'Putzwasser aus Nasszelle und Pantry gehört in diese Behälter oder an Land, nicht über Bord.',
        ],
        [
          'Hafenordnung',
          'Die Häfen regeln das Waschen am Platz selbst und verschieden streng. Der Bootshafen Luzern verbietet umweltschädigende Mittel, der Bootshafen Hostatt in Kehrsiten Reinigungsmittel und Abdampfgeräte ganz.',
          'Die Hafenordnung Ihres Liegeplatzes legt fest, welche Mittel am Steg erlaubt sind. Sie gehört zu den Unterlagen vor dem ersten Einsatz.',
        ],
        [
          'Schiffsmelde- und Reinigungspflicht',
          'Wechselt ein immatrikuliertes Schiff das Gewässer, etwa in einen anderen See, muss der Wechsel vorher gemeldet und das Schiff von einer autorisierten Reinigungsstelle gereinigt werden. Erst mit der Freigabe darf es ins neue Gewässer. Anlass ist die Quaggamuschel, die im Sommer 2024 erstmals im Vierwaldstättersee entdeckt wurde.',
          'Das gilt in allen Zentralschweizer Kantonen, in Luzern seit dem 1. April 2026 mit eigener Verordnung. Trocknen lassen zählt nicht als Reinigung, und die Pflege am Liegeplatz ersetzt diese Reinigung nicht.',
        ],
      ],
      sources: [quellen.gschg, quellen.bsv, quellen.hafenLuzern, quellen.hafenKehrsiten, quellen.smrv, quellen.smrp, quellen.zug],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'erster-einsatz',
      title: 'Vor dem ersten Einsatz am Liegeplatz',
      intro: 'Mit diesen Angaben wird der erste Termin am Steg kurz. Drucken Sie die Liste aus oder geben Sie sie Ihrem Skipper.',
      groups: [
        {
          title: 'Boot',
          items: [
            'Werft, Modell und Länge',
            'Pflegeanleitung der Werft oder des Deckherstellers, falls vorhanden',
            'Materialien an Bord: Teak, Gelcoat, Edelstahl, Acrylglas, Leder oder Outdoorstoff',
            'Bekannte Schäden, etwa offene Fugen im Teak oder Risse im Gelcoat',
            'Stauräume und Bereiche, die wir nicht öffnen sollen',
          ],
        },
        {
          title: 'Liegeplatz',
          items: [
            'Hafen, Steg und Platznummer',
            'Hafenordnung mit den Regeln zum Waschen am Platz',
            'Wasser und Strom am Steg',
            'Zufahrt und Parkplatz in der Nähe des Stegs',
            'Entsorgung im Hafen: Abfall, Absaugung für Fäkalien und Bilge',
          ],
        },
        {
          title: 'Zugang und Termine',
          items: [
            'Schlüssel, Badge oder Code für Tor und Steg',
            'Wer das Boot öffnet, wenn Sie nicht da sind',
            'Geplante Ausfahrten, Gäste an Bord und der Termin fürs Winterlager',
            'Ansprechperson am See: Sie selbst, Ihr Skipper oder der Hafenmeister',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Umfang der Bootsreinigung',
    intro: 'Am Liegeplatz, einmalig oder regelmässig über die Saison:',
    items: [
      'Deck und Teakflächen, mit den Beschlägen aus Edelstahl',
      'Gelcoat an Deck und Aufbauten',
      'Fenster und Luken, auch aus Acrylglas',
      'Polster, Kissen und Textilien',
      'Salon, Kabinen und Pantry',
      'Nasszellen',
    ],
    notIncluded: [
      'Unterwasserschiff und Antifouling. Das ist Arbeit für die Werft.',
      'Technische Wartung von Motor und Bordtechnik, auch das Einwintern des Motors.',
      'Reparaturen an Deck, Fugen oder Gelcoat.',
      'Die vorgeschriebene Reinigung vor einem Seewechsel. Sie ist Sache einer autorisierten Reinigungsstelle.',
    ],
  },
  steps: [
    {
      title: 'Schlüssel und Zugang',
      text: 'Wie wir an Bord kommen, bestimmen Sie: mit Schlüssel, mit Badge für den Steg oder über eine Person, die das Boot öffnet. Dafür gelten feste Regeln, auch während Ihrer Abwesenheit.',
    },
    {
      title: 'Einsätze nach Saisonplan',
      text: 'Wir kommen zu den vereinbarten Terminen, einmalig vor einem Anlass oder regelmässig von Frühling bis Herbst, auch abends und am Wochenende.',
    },
    {
      title: 'Ein festes Team',
      text: 'Ihr Boot betreut ein festes Team. Es kennt nach dem ersten Einsatz Stauräume, Anschlüsse und die Hafenordnung.',
    },
  ],
  faq: [
    {
      question: 'Was kostet die Reinigung eines Bootes?',
      answer:
        'Den Aufwand bestimmen vor allem Länge und Aufbau des Bootes, also ob es ein offenes Motorboot ist oder eine Yacht mit Salon, Kabinen und Nasszellen. Dazu kommen die Teakfläche, der Zustand, ob wir innen, aussen oder beides reinigen, wie oft wir kommen und wie gut der Liegeplatz mit Material erreichbar ist. Einen Preis nennen wir, sobald wir das Boot gesehen haben.',
    },
    {
      question: 'Wie oft braucht ein Boot am Liegeplatz eine Reinigung?',
      answer:
        'Entscheidend sind Lage und Nutzung. Unter Bäumen und zur Blütezeit im April und Mai verschmutzt ein Boot schneller als an einem freien Steg. Für die Hauptsaison ist ein fester Rhythmus sinnvoll, etwa jede Woche oder vor Wochenenden mit Gästen. Was ein Bootshersteller dazu empfiehlt, steht im Saisonkalender oben.',
    },
    {
      question: 'Ist ein graues Teakdeck schmutzig?',
      answer:
        'Nicht unbedingt. Teak verwittert in der Sonne mit der Zeit zu einer silbergrauen Patina, und manche Eigner wünschen genau diese Farbe. Rau und fleckig wird das Deck dagegen durch harte Bürsten, Hochdruck oder aggressive Mittel. Soll es seinen ursprünglichen Farbton behalten, braucht es Pflegeprodukte für Teak, die zu Deck und Fugen passen.',
    },
    {
      question: 'Was hilft gegen Stockflecken im Salon?',
      answer:
        'Luft und Trockenheit. Polster und Kissen nach der Reinigung ganz trocknen lassen, Schmutz nicht liegen lassen, denn Schimmel wächst auf ihm, und das Boot im Winter nicht luftdicht in Plastikfolie einpacken. Sind die Flecken schon da, reinigen wir die Bezüge nach der Anleitung des Stoffherstellers.',
    },
    {
      question: 'Müssen wir an Bord sein, während Sie reinigen?',
      answer:
        'Nein. Sie müssen weder am Steg noch an Bord sein, wir kommen auch abends oder am Wochenende. Wer das Boot öffnet und wieder abschliesst, regeln wir mit Ihnen einmal fest, danach gilt es für jeden Einsatz.',
    },
    {
      question: 'Kann unser Skipper oder der Hafenmeister die Termine vereinbaren?',
      answer:
        'Ja. Nennen Sie uns die Person, die das Boot kennt und am Steg Auskunft geben kann. Die Offerte geht an Sie oder an die Stelle, die Sie bestimmen.',
    },
    {
      question: 'Können Sie unser Boot für einen Seewechsel reinigen?',
      answer:
        'Nein. Vor einem Wechsel in einen anderen See verlangen die Zentralschweizer Kantone eine Reinigung durch eine autorisierte Reinigungsstelle, meist eine Werft. Sie melden den Wechsel online bei Umwelt Zentralschweiz und erhalten nach der Reinigung die Freigabe fürs neue Gewässer. Unsere Pflege am Liegeplatz ersetzt diese Reinigung nicht.',
    },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Wenn zum Boot ein Haus oder eine Zweitwohnung am See gehört, die vor Ihrer Ankunft bereit sein soll.' },
    { path: '/premium/privatjet', text: 'Wenn Sie auch die Kabine Ihres Privatjets zwischen zwei Flügen reinigen lassen möchten.' },
    { path: '/premium', text: 'Alle Angebote der Premium-Linie, von der Geheimhaltungsvereinbarung bis zum festen Team.' },
  ],
  cta: {
    title: 'Offerte für Ihr Boot anfragen',
    text: 'Nennen Sie uns Werft, Modell und Länge, den Hafen oder Steg und ob wir innen, aussen oder beides reinigen sollen, dazu Ihre Wunschtermine in der Saison. Sobald wir das Boot am Liegeplatz gesehen haben, schicken wir Ihnen die Offerte, kostenlos und unverbindlich.',
  },
}
