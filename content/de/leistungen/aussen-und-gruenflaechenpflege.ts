import type { ServicePageContent } from '../../types'

// Grundlage: R3a, R3c (Umgebungspflege), M45 (ein Name, ohne Winterdienst), E29,
// Audit 25 (inhalt.md 3.9, seo.md T2/T4/M1, keywords-mehrsprachig.md), E85.
// Quellen am 28.09.2026 gelesen: Vogelwarte (Gehölzschnitt), ChemRRV Anhänge 2.4 und 2.5,
// BAFU-Faktenblätter 2019 und 2021, FrSV Anhänge 2.1 und 2.2, BAFU zur FrSV-Änderung,
// Praxishilfe Neophyten der Zentralschweizer Kantone (2025), Stadt Luzern (Rückschnitt).
export const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Gartenpflege und Grünflächenpflege für Liegenschaften',
  lead: [
    'Rasen, Hecken und Plätze machen im Mai viel Arbeit und im Januar fast keine. Wir pflegen die Umgebung Ihrer Liegenschaft nach einem Pflegeplan, der diesem Jahreslauf folgt: Hecken im Winter, Unkraut ohne Gift, Laub weg, bevor es die Wege rutschig macht.',
    'Die Gartenpflege übernehmen wir für Verwaltungen, Stockwerkeigentümerschaften und Unternehmen, als eigene Leistung oder zusammen mit der [Hauswartung](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Heckenschnitt', value: 'November bis März, ausserhalb der Brutzeit' },
    { label: 'Unkraut', value: 'Mechanisch, ohne Spritzmittel' },
    { label: 'Rhythmus', value: 'Nach Pflegeplan, am dichtesten im Frühsommer' },
    { label: 'Einsatz', value: 'Einzeln oder mit der Hauswartung' },
    { label: 'Nicht im Angebot', value: 'Winterdienst, Gartenbau, Neuanlagen' },
  ],
  scope: {
    title: 'Was zur Gartenpflege gehört',
    intro: 'Diese Arbeiten übernehmen wir für die Flächen, die im Pflegeplan stehen:',
    items: [
      'Rasen mähen',
      'Rasenkanten stechen und Ränder schneiden',
      'Hecken und Sträucher schneiden, im Winter ausserhalb der Brutzeit',
      'Beete und Rabatten jäten und pflegen',
      'Laub von Rasen, Wegen und Plätzen entfernen',
      'Wege, Plätze und Parkflächen sauber halten',
      'Unkraut in Fugen und auf Kiesflächen mechanisch entfernen',
      'Abfall in der Umgebung einsammeln',
    ],
    notIncluded: [
      'Winterdienst mit Schneeräumung und Salzen',
      'Gartenbau und Neuanlagen, etwa eine neue Hecke oder ein neues Beet',
      'Kontrollgänge am Gebäude: Das übernimmt die [Hauswartung](/leistungen/hauswartung)',
      'Glas und Fassade reinigen: Das übernimmt die [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung)',
    ],
  },
  sections: [
    {
      title: 'Wenn die Umgebung nicht mehr nebenbei geht',
      paragraphs: [
        'Der Hauswart geht in Pension, die Stockwerkeigentümer mähen nicht mehr selbst, oder eine neue Überbauung ist bezogen und niemand ist für Rasen und Hecken zuständig. Dann braucht die Umgebung jemanden, der sie das ganze Jahr im Blick hat.',
        'Wir pflegen Wohnanlagen mit Spielplatz, Geschäftshäuser mit Parkplatz und Gewerbeareale mit Kiesflächen. Grundlage ist ein Pflegeplan, der jede Fläche mit ihrer Arbeit und ihrem Rhythmus nennt. So lässt sich der Mieterschaft sagen, wann gemäht und wann geschnitten wird.',
      ],
    },
    {
      title: 'Hecken im Winter schneiden, im Sommer nur freihalten',
      paragraphs: [
        'Jeden Sommer rufen Behörden zum Rückschnitt auf. Für Vögel ist das die schlechteste Zeit: Amsel, Grünfink und Gartengrasmücke brüten dann in dichten Hecken. Die Schweizerische Vogelwarte in Sempach empfiehlt den Gehölzschnitt deshalb von November bis März.',
        'Im Winter ist das Astgerüst gut zu sehen, der Schnitt kann der natürlichen Wuchsform folgen. An Wegen und Trottoirs schneiden wir dann so weit zurück, dass sie über den Sommer frei bleiben. Wächst trotzdem ein Durchgang zu, genügt ein leichter Schnitt, nachdem wir nach Nestern gesehen haben.',
      ],
    },
    {
      title: 'Gartenpflege und Kontrollgang in einem Einsatz',
      paragraphs: [
        'Läuft die Umgebungspflege zusammen mit der [Hauswartung](/leistungen/hauswartung), entfällt eine eigene Anfahrt. Wer draussen mäht und wischt, sieht auch die gelockerte Platte, die defekte Aussenleuchte oder den verstopften Schacht.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'pflegekalender',
      title: 'Pflegekalender für Rasen, Hecken und Plätze',
      intro: 'Die Umgebung macht nicht jeden Monat gleich viel Arbeit. Die Übersicht zeigt, was wann anfällt, und dient als Gerüst für den Pflegeplan Ihrer Liegenschaft.',
      columns: ['Zeitraum', 'Rasen', 'Hecken und Sträucher', 'Wege, Plätze und Beete'],
      rows: [
        [
          'März und April',
          'Äste und Laub vom Winter abrechen, erster Schnitt, sobald das Gras wächst',
          'Gehölzschnitt bis Ende März abschliessen',
          'Splitt und Winterschmutz wischen, Beete jäten und mit Mulch oder Rinde abdecken',
        ],
        [
          'Mai und Juni',
          'Hauptwachstum: regelmässig mähen, Kanten stechen',
          'Kein Rückschnitt. Wächst ein Weg zu, nur leicht schneiden und vorher nach Nestern sehen',
          'Fugen wischen und jäten, bevor das Unkraut Samen bildet',
        ],
        [
          'Juli und August',
          'Mähen nach Wuchs und Wetter',
          'Brutzeit: Hecken ruhen lassen',
          'Blütenstände invasiver Pflanzen vor der Samenreife abschneiden',
        ],
        [
          'September und Oktober',
          'Laub regelmässig abrechen, letzter Schnitt vor dem Winter',
          'Sträucher mit Beeren stehen lassen, sie sind Winterfutter für Vögel',
          'Laub von Wegen und Plätzen entfernen, unter Sträuchern darf es liegen bleiben',
        ],
        [
          'November bis Februar',
          'Ruhezeit, nur Laub und heruntergefallene Äste entfernen',
          'Hauptzeit für den Gehölzschnitt: formen, auslichten, an Wegen grosszügig zurückschneiden',
          'Laub und Äste von Wegen und Plätzen entfernen',
        ],
      ],
      note: 'An Strassen und Trottoirs gelten zusätzlich die Vorschriften von Kanton und Gemeinde. Die Stadt Luzern verlangt über Fuss- und Radwegen 2,50 m freie Höhe, über der Fahrbahn 4,50 m. Die Vogelwarte rät deshalb, an Wegen schon im Winter grosszügig auszuschneiden.',
      sources: [
        { label: 'Schweizerische Vogelwarte: Schnitt von Sträuchern und Hecken in Siedlungen', href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/' },
        { label: 'BAFU: 10 vorbeugende Massnahmen und Alternativen zum Herbizideinsatz (2019)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/9yHQQ2lBw2VU/merkblatt_10_vorbeugendemassnahmenundalternativenzumherbizideins.pdf' },
        { label: 'Stadt Luzern: Rückschnitt von Bepflanzungen', href: 'https://www.stadtluzern.ch/dienstleistungeninformation/54265' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'unkraut-ohne-gift',
      title: 'Unkraut und Moos: wo Spritzmittel verboten sind',
      intro: 'Auf befestigten Flächen fehlt die Humusschicht, die Wirkstoffe binden könnte, der Regen spült sie in Schächte und Gewässer. Deshalb verbietet die Chemikalien-Risikoreduktions-Verordnung (ChemRRV) dort Unkrautvertilgungsmittel, seit Dezember 2020 auch Mittel gegen Algen und Moos. Das gilt für Firmen wie für Private.',
      columns: ['Fläche', 'Was gilt', 'Was stattdessen wirkt'],
      rows: [
        [
          'Wege, Zufahrten, Plätze und Parkplätze, samt Randsteinen, Trottoirs, Schächten und Regenrinnen',
          'Verboten, auch auf Kies, Mergel, Pflästerungen und Rasengittersteinen und in einem 50 cm breiten Streifen daneben',
          'Regelmässig wischen, damit sich in den Fugen kein Feinmaterial sammelt, Fugen auskratzen, Unkraut vor dem Absamen ausreissen',
        ],
        [
          'Dächer und Terrassen',
          'Verboten, auch Mittel gegen Algen und Moos',
          'Von Hand jäten und bürsten',
        ],
        [
          'Böschungen und Grünstreifen entlang von Strassen',
          'Verboten, einzelne Problempflanzen nur, wenn Mähen nicht wirkt',
          'Mähen und das Schnittgut abführen',
        ],
        [
          'Hecken, Bäche und Teiche, je mit einem Streifen von 3 m',
          'Alle Pflanzenschutzmittel verboten, nicht nur gegen Unkraut. An Hecken sind einzelne Problempflanzen ausgenommen, wenn Mähen nicht wirkt',
          'Jäten, mähen, den Boden mit Mulch abdecken',
        ],
      ],
      note: 'Toleranz senkt die Kosten, schreibt das BAFU: Auf wenig begangenen Flächen muss nicht jede Fuge grünfrei sein. Wo Unkraut jedes Jahr am selben Ort wiederkommt, hilft auf Dauer nur, die Fugen neu zu füllen.',
      sources: [
        { label: 'ChemRRV (SR 814.81), Anhang 2.4 Ziff. 4bis und Anhang 2.5 Ziff. 1.1', href: 'https://www.fedlex.admin.ch/eli/cc/2005/478/de' },
        { label: 'BAFU: Verwendungsverbote für Herbizide und Biozide auf und an Strassen, Wegen, Plätzen, Terrassen und Dächern (2021)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/Cp1cASoaj-UD/merkblatt_verwendungsverbotefuerunkrautvertilgungsmittelaufundan.pdf' },
        { label: 'BAFU: Pflanzenschutz in der Gemeinde', href: 'https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'invasive-pflanzen',
      title: 'Invasive Pflanzen im Garten: was seit 2024 gilt',
      intro: 'Seit dem 1. September 2024 regelt die Freisetzungsverordnung (FrSV) invasive Gartenpflanzen strenger. Pflanzen aus Anhang 2.2 dürfen nicht mehr weitergegeben werden. Für Anhang 2.1 gilt ein Umgangsverbot, erlaubt ist nur noch die Bekämpfung.',
      columns: ['Pflanze', 'Was die FrSV sagt', 'Pflege und Entsorgung'],
      rows: [
        [
          'Kirschlorbeer',
          'Anhang 2.2: Bestehende Hecken dürfen bleiben und geschnitten werden, Verkauf und Weitergabe sind verboten',
          'Beeren vor der Samenreife abschneiden. Schnittgut ohne Früchte kompostieren, Früchte und Wurzeln in den Kehricht',
        ],
        [
          'Sommerflieder und Chinesische Hanfpalme («Tessinerpalme»)',
          'Anhang 2.2: gleiche Regeln wie beim Kirschlorbeer',
          'Blütenstände abschneiden, bevor Samen oder Früchte reifen, und in den Kehricht geben',
        ],
        [
          'Asiatische Knöteriche, etwa der Japanische Staudenknöterich',
          'Anhang 2.1: nicht pflegen, nicht verpflanzen, nur bekämpfen',
          'Alle Pflanzenteile in den Kehricht, schon kleine Wurzelstücke treiben wieder aus. Aushub mit Wurzeln nur fachgerecht entsorgen',
        ],
        [
          'Amerikanische Goldruten',
          'Anhang 2.1: nur bekämpfen',
          'Spätestens zur Blüte mähen, Teile mit Blüten, Samen oder Wurzeln im Sack in den Kehricht',
        ],
        [
          'Aufrechte Ambrosie',
          'Anhang 2.1, dazu Meldepflicht: Funde der kantonalen Fachstelle melden',
          'Mit Handschuhen und in der Blütezeit mit Staubmaske ausreissen, die ganze Pflanze in den Kehricht',
        ],
      ],
      note: 'Eine allgemeine Pflicht, invasive Pflanzen auf dem eigenen Grundstück zu entfernen, besteht nicht. Die Eigentümerschaft muss aber verhindern, dass sie sich ausbreiten. Samen und Wurzeln gehören deshalb nie in den Gartenkompost.',
      sources: [
        { label: 'Freisetzungsverordnung FrSV (SR 814.911), Art. 15 und Anhänge 2.1 und 2.2', href: 'https://www.fedlex.admin.ch/eli/cc/2008/614/de' },
        { label: 'BAFU: Änderung im Umgang mit invasiven gebietsfremden Pflanzen', href: 'https://www.bafu.admin.ch/de/anderung-im-umgang-mit-invasiven-gebietsfremden-pflanzen' },
        { label: 'Kantone der Zentralschweiz: Praxishilfe Neophyten (2025)', href: 'https://lawa.lu.ch/-/media/LAWA/Dokumente/njf/lebensraeume/neobiota/Praxishilfe_Neophyten.pdf' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'pflegeplan',
      title: 'Pflegeplan: das gehört hinein',
      intro: 'Je genauer Flächen und Wünsche erfasst sind, desto besser lassen sich Offerten vergleichen. Die Liste hilft, das Nötige vor dem Rundgang zu sammeln.',
      groups: [
        {
          title: 'Flächen',
          items: [
            'Rasen in Quadratmetern, am besten auf dem Umgebungsplan markiert',
            'Hecken: Länge in Laufmetern, Höhe, ein- oder beidseitig',
            'Beete, Rabatten und Pflanztröge',
            'Wege, Plätze, Parkflächen, Spielplatz und Dachterrassen mit Belag',
          ],
        },
        {
          title: 'Rhythmus und Zeiten',
          items: [
            'Mähen und Jäten: wie oft in der Wachstumszeit',
            'Wochentage und Uhrzeiten, die zu Mieterschaft oder Betrieb passen',
            'Anlässe, vor denen die Umgebung gepflegt sein soll',
            'Heckenschnitt im Winter, ausserhalb der Brutzeit',
          ],
        },
        {
          title: 'Schnittgut und Zuständigkeiten',
          items: [
            'Schnittgut: Grüncontainer, Grünabfuhr der Gemeinde oder Abtransport',
            'Bekannte Standorte invasiver Pflanzen',
            'Gartenanteile, die Mieter oder Eigentümer selbst pflegen',
            'Wasseranschluss, Geräteraum und Zufahrt für Maschinen',
          ],
        },
        {
          title: 'Nach dem Einsatz',
          items: [
            'Rasenkanten sauber gestochen',
            'Wege und Plätze ohne Laub, Schnittgut und Unkraut in den Fugen',
            'Durchgänge, Sichtzonen und Trottoirs frei',
            'Beete gejätet, Schnittgut am vereinbarten Ort',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Pflegeplan',
      text: 'Jede Fläche steht mit Arbeit und Rhythmus im Plan, von der Rasenkante bis zum Heckenschnitt.',
    },
    {
      title: 'Saison von März bis Oktober',
      text: 'In der Wachstumszeit mähen, jäten und wischen wir im vereinbarten Rhythmus. Einen zusätzlichen Einsatz, etwa vor einem Anlass, melden Sie uns dazu.',
    },
    {
      title: 'Gehölzschnitt im Winter',
      text: 'Zwischen November und März folgt der Schnitt von Hecken und Sträuchern, dazu Laub und Äste, wo sie anfallen.',
    },
  ],
  faq: [
    {
      question: 'Wovon hängen die Kosten der Gartenpflege ab?',
      answer:
        'Vor allem von der Fläche und davon, wie viel Handarbeit sie braucht. Offenen Rasen mäht eine Maschine schnell, Fugen, Kiesflächen und Böschungen brauchen Zeit. Dazu kommen Länge und Höhe der Hecken, die Zahl der Einsätze in der Wachstumszeit und der Weg des Schnittguts. Läuft der Gartenunterhalt mit der Hauswartung zusammen, sparen Sie Anfahrten.',
    },
    {
      question: 'Dürfen Sie auf dem Vorplatz Unkraut spritzen?',
      answer:
        'Nein, das darf niemand. Auf Wegen, Plätzen und Parkflächen und in einem Streifen von 50 cm daneben sind Unkrautvertilgungsmittel verboten, auf Dächern und Terrassen ebenso. Wir entfernen Unkraut deshalb mechanisch: wischen, Fugen auskratzen, jäten.',
    },
    {
      question: 'Muss unsere Kirschlorbeerhecke weg?',
      answer:
        'Nein. Bestehende Hecken dürfen bleiben und geschnitten werden, verboten sind seit dem 1. September 2024 Verkauf und Weitergabe. Das BAFU rät, die Beeren vor der Samenreife abzuschneiden. Sonst tragen Vögel die Samen weiter, bis in den Wald.',
    },
    {
      question: 'Die Gemeinde verlangt einen Rückschnitt, aber es ist Brutzeit. Was nun?',
      answer:
        'Der Raum über Trottoir und Strasse muss frei bleiben, im Kanton Luzern etwa nach §§ 86 und 87 des Strassengesetzes. Im Sommer schneiden wir nur, was in diesen Raum ragt, und erst nach einem Blick nach Nestern. Der grosse Rückschnitt folgt im Winter und fällt an Wegen so grosszügig aus, dass im Jahr darauf wenig nachzuschneiden bleibt.',
    },
    {
      question: 'Wohin kommen Rasenschnitt, Laub und Äste?',
      answer:
        'Es gibt drei Wege: den Grüncontainer der Liegenschaft, die Grünabfuhr der Gemeinde oder den Abtransport. Äste können auch als Haufen in einer ruhigen Ecke liegen bleiben, darunter überwintern Igel. Teile invasiver Pflanzen mit Blüten, Samen oder Wurzeln gehören in den Kehricht, nie in den Gartenkompost.',
    },
    {
      question: 'Können wir nur die Umgebung vergeben, ohne Hauswartung?',
      answer:
        'Ja, die Gartenpflege gibt es als eigene Leistung, auch neben einer bestehenden Hauswartung. Im Pflegeplan steht dann genau, welche Flächen wir übernehmen und welche bei der Hauswartung bleiben.',
    },
    {
      question: 'Pflanzen Sie auch neue Hecken oder legen Beete an?',
      answer:
        'Nein, Gartenbau und Neuanlagen bieten wir nicht an, wir pflegen bestehende Umgebungen. Ein Tipp der Vogelwarte für neue Hecken: beim Pflanzen genug Abstand zum Weg lassen, damit er auch nach Jahren frei bleibt.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Wenn neben Rasen und Hecken auch Treppenhaus, Haustechnik und Kontrollgänge betreut werden sollen.' },
    { path: '/leistungen/facility-services', text: 'Wenn Reinigung, Hauswartung und Gartenpflege mit einer Ansprechperson in einem Vertrag stehen sollen.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn Eingang und Treppenhaus im selben Rhythmus sauber bleiben sollen wie der Vorplatz.' },
  ],
  cta: {
    title: 'Pflegeplan und Offerte für Ihre Umgebung',
    text: 'Schreiben Sie uns Ort, Art der Liegenschaft und die ungefähren Flächen: Quadratmeter Rasen, Laufmeter Hecke, Wege und Plätze. Ein Umgebungsplan hilft zusätzlich. Nach dem Rundgang erhalten Sie Pflegeplan und Offerte, kostenlos und unverbindlich.',
  },
}
