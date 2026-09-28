import type { ServicePageContent } from '../../types'

// Grundlage: R3a (Baureinigung), R3b (Bauendreinigung), R10b, E17; Umbau E85 nach 25-AUDIT/inhalt.md 3.5
// (Bausteine 3.5.1 bis 3.5.3), seo.md T2, keywords-mehrsprachig.md.
// Quellen am 28.09.2026 gelesen: OR Art. 367 und 370 (Fassung 1.1.2026, Baumängel), VVEA Art. 17
// (Fassung 1.8.2026), SIGAB-Fachartikel «Verschmutzte Gläser und falsche Reinigung führen zu Schäden»
// (metall, April 2020) und SIGAB «Fensterputzen ohne Kratzer zu verursachen» (22.03.2021).
// Offene Kundenfragen (F5: Übergabeblatt mit Fotos) bewusst nicht beantwortet.
export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Baureinigung und Bauendreinigung für Neubau und Umbau',
  lead: [
    'Nach dem Innenausbau liegt feiner Staub auf jeder Fläche, Schutzfolien kleben an Fenstern und Geräten, auf Glas und Plättli sitzen Mörtel- und Farbspritzer. Bis zur Abnahme muss daraus ein Objekt werden, in das Mieter, Käufer oder Ihr Team am Übergabetag einziehen können.',
    'Wir reinigen in den Etappen, die Ihr Bau braucht: grob nach dem Rohbau, zwischendurch vor dem Innenausbau und gründlich vor der Übergabe. Die Einsätze richten sich nach dem Terminplan der Bauleitung. So beginnt die Abnahme auf sauberen Flächen, auf denen Mängel zu sehen sind.',
  ],
  facts: [
    { label: 'Für', value: 'Bauherrschaften, Generalunternehmen, Architekturbüros und Verwaltungen' },
    { label: 'Etappen', value: 'Grobreinigung, Zwischenreinigung und Bauendreinigung, einzeln oder zusammen' },
    { label: 'Endreinigung', value: 'Nach dem letzten Handwerker, vor der Abnahme' },
    { label: 'Vor Ort nötig', value: 'Zugang, Strom, Wasser und ein Platz für Geräte' },
    { label: 'Nicht enthalten', value: 'Fassade und laufende Reinigung nach dem Bezug' },
  ],
  scope: {
    title: 'Was die Baureinigung umfasst',
    intro:
      'Die Baureinigung läuft in Etappen, passend zum Baufortschritt. Sie können alle Etappen vergeben oder nur die Bauendreinigung vor der Übergabe.',
    items: [
      'Grobreinigung nach dem Rohbau: groben Schmutz und Staub aus den Geschossen entfernen',
      'Zwischenreinigungen, bevor Böden verlegt oder Küchen montiert werden',
      'Bauendreinigung vor der Abnahme, von oben nach unten und wo nötig in mehreren Durchgängen',
      'Fenster, Rahmen, Fensterfalze und Glas von Baustaub und Rückständen befreien',
      'Schutzfolien, Etiketten, Klebereste sowie Mörtel- und Farbspritzer entfernen',
      'Böden, Sanitärräume, Küchen und Einbauschränke innen und aussen bezugsbereit reinigen',
    ],
    notIncluded: [
      'Die Fassade am fertigen Bau gehört zur [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
      'Nach dem Bezug übernimmt die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) die laufende Reinigung.',
    ],
  },
  sections: [
    {
      title: 'Baustaub, Folien und Spritzer: was die Bauendreinigung löst',
      paragraphs: [
        'Baustaub ist fein und setzt sich überall ab: auf Böden, in Fensterfalzen, auf Türrahmen, in Schränken und Schubladen. Gereinigt wird deshalb von oben nach unten, oft in mehr als einem Durchgang, damit kein Staub auf fertige Flächen fällt.',
        'Dazu kommen Schutzfolien, Etiketten, Klebereste, Mörtel- und Farbspritzer. Jede Oberfläche braucht dafür ihr eigenes Mittel und Werkzeug, denn Glas, Chromstahl, Armaturen und neue Böden sollen ohne Kratzer übergeben werden. Worauf es beim Glas ankommt, zeigt die Tabelle weiter unten.',
      ],
    },
    {
      title: 'Grobreinigung im Rohbau, damit der Ausbau sauber beginnt',
      paragraphs: [
        'Ist der Rohbau geschlossen, entfernt die Grobreinigung groben Schmutz und Staub aus den Geschossen. Bodenleger, Gipser und Küchenbauer beginnen dann auf sauberem Grund, und weniger Staub wandert in die späteren Etappen.',
        'Vor empfindlichen Arbeiten folgt eine Zwischenreinigung, etwa bevor Parkett verlegt oder die Küche montiert wird. Wer diese Einsätze früh in den Terminplan aufnimmt, entlastet das Ende des Baus: Die Bauendreinigung beginnt dann nicht bei null.',
      ],
    },
    {
      title: 'Umbau im bewohnten oder genutzten Haus',
      paragraphs: [
        'Bei einer Strangsanierung oder dem Umbau einer Etage bleibt der Rest des Hauses in Betrieb. Jeder Arbeitstag trägt Staub ins Treppenhaus, in den Lift und bis vor die Wohnungstüren. Eine Zwischenreinigung dieser gemeinsamen Wege in festem Rhythmus hält die Belastung für Bewohner und Mitarbeitende klein.',
        'Die Bauendreinigung folgt Etappe für Etappe, sobald die Handwerker eine Wohnung oder einen Abschnitt verlassen. Fertige Wohnungen lassen sich so übergeben, bevor die ganze Sanierung abgeschlossen ist.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bauablauf',
      title: 'Die Reinigung im Bauablauf',
      intro: 'Welche Reinigung wann kommt und wer den Bereich dafür freigibt. Zum Ausdrucken für die Bauleitung oder als Grundlage der Ausschreibung.',
      columns: ['Etappe', 'Wann im Bau', 'Was gereinigt wird', 'Wer gibt frei'],
      rows: [
        [
          'Grobreinigung',
          'Nach dem Rohbau, bevor der Innenausbau beginnt',
          'Groben Schmutz und Staub aus den Geschossen entfernen, damit die nächsten Arbeiten auf sauberem Grund beginnen',
          'Bauleitung',
        ],
        [
          'Zwischenreinigung',
          'Vor empfindlichen Arbeiten, etwa bevor Böden verlegt oder Küchen montiert werden',
          'Staub von Böden, Fenstern, Installationen und schon eingebauten Teilen',
          'Bauleitung',
        ],
        [
          'Bauendreinigung',
          'Nach den letzten Handwerksarbeiten, vor der Abnahme',
          'Alles bezugsbereit: von oben nach unten, Folien und Rückstände weg, oft in mehr als einem Durchgang',
          'Bauleitung oder Bauherrschaft',
        ],
        [
          'Nachreinigung',
          'Wenn nach der Endreinigung noch gearbeitet wird, etwa zur Behebung von Mängeln',
          'Nur die Räume, in denen nach der Endreinigung noch Handwerker waren',
          'Bauleitung',
        ],
      ],
      note: 'Arbeiten nach der Bauendreinigung noch Handwerker in den Räumen, entsteht neuer Staub. Legen Sie die Endreinigung deshalb hinter die letzten Arbeiten und halten Sie ein Zeitfenster für Nachreinigungen frei.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'ausschreibung',
      title: 'Bauendreinigung ausschreiben: diese Angaben machen Offerten vergleichbar',
      intro: 'Erhalten alle Anbieter dieselben Angaben, lassen sich die Offerten Zeile für Zeile vergleichen. Die Liste taugt auch als Vorlage für Ihre Anfrage bei uns.',
      groups: [
        {
          title: 'Objekt und Flächen',
          items: [
            'Art des Objekts, Geschosse und Nutzfläche',
            'Anzahl Wohnungen, Büros oder Einheiten',
            'Grundrisse oder Pläne mit den Räumen, die gereinigt werden sollen',
            'Bodenbeläge, vor allem empfindliche wie Naturstein, Parkett oder geölte Böden',
            'Keller, Tiefgarage, Technikräume und Treppenhäuser: mit oder ohne',
          ],
        },
        {
          title: 'Glas und Fenster',
          items: [
            'Anzahl und Art der Fenster, Glastüren und Glasbrüstungen',
            'Glas in grosser Höhe, etwa Oberlichter oder Verglasungen im Treppenhaus',
            'Wo Einscheiben-Sicherheitsglas (ESG) verbaut ist',
            'Storen und Rollläden: mitreinigen oder nicht',
          ],
        },
        {
          title: 'Termine',
          items: [
            'Gewünschte Etappen mit Datum',
            'Übergabetermin und Termin der Abnahme',
            'Zeitfenster zwischen den letzten Handwerksarbeiten und der Abnahme',
            'Reserve für eine Nachreinigung',
          ],
        },
        {
          title: 'Baustelle',
          items: [
            'Zufahrt, Zutritt und Schlüssel oder Badges',
            'Strom, Wasser, Lift oder Bauaufzug und Platz für Geräte',
            'Sicherheitsregeln und Ansprechperson auf der Baustelle',
            'Mulden für Abfälle: wer sie stellt und wer entsorgt',
          ],
        },
      ],
      note: 'Die Abfallverordnung VVEA verlangt, Bauabfälle auf der Baustelle zu trennen: Sonderabfälle separat, dazu Glas, Metalle, Holz und Kunststoffe möglichst sortenrein (Art. 17 VVEA). Klären Sie deshalb in der Ausschreibung, wer Mulden stellt und wohin Folien und Verpackungen aus der Reinigung gehören.',
      sources: [
        { label: 'Abfallverordnung VVEA, Art. 17: Trennung von Bauabfällen', href: 'https://www.fedlex.admin.ch/eli/cc/2015/891/de#art_17' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'glas',
      title: 'Neues Glas: was schadet und was die Glasbranche empfiehlt',
      intro: 'Fenster sind oft Monate vor der Übergabe eingebaut und bekommen alles ab, was auf der Baustelle anfällt. Die Empfehlungen stammen vom Schweizerischen Institut für Glas am Bau (SIGAB).',
      columns: ['Situation', 'Warum heikel', 'Empfehlung'],
      rows: [
        [
          'Zementschlamm, Mörtel oder Putz auf der Scheibe',
          'Sie sind hochalkalisch und können das Glas verätzen und blind machen. Starke Verätzungen lassen sich nicht beheben, dann muss das Glas ersetzt werden.',
          'Sofort entfernen. Betonreste zuerst einweichen und dann sorgfältig abwischen.',
        ],
        [
          'Angetrockneter Baustaub',
          'Wer mit einem feuchten Tuch über trockenen Schmutz reibt, zieht spitze Körner über die Scheibe und verkratzt sie.',
          'Mit viel sauberem Wasser arbeiten: Schmutz einweichen, lösen, abwaschen. Mikrofasertücher nur mit Vorsicht.',
        ],
        [
          'Farb- und Mörtelspritzer',
          'Wird die ganze Scheibe mit Klinge oder Glashobel abgezogen, reibt die Klinge Schmutzpartikel ins Glas. Es entsteht ein Netz feiner Haarkratzer.',
          'Klingen höchstens punktuell und sehr sorgfältig einsetzen, nie über die ganze Fläche.',
        ],
        [
          'Etiketten und Klebeband',
          'Reiniger mit Laugen oder Säuren können Beschichtung und Glasoberfläche zerstören.',
          'Kleber möglichst bald entfernen, vor allem auf beschichtetem Glas und im Sommer, vorsichtig mit Isopropanol oder Aceton.',
        ],
        [
          'Einscheiben-Sicherheitsglas (ESG)',
          'Kratzempfindlicher als normales Floatglas, ohne dass die Qualität schlechter wäre. Vorgespanntes Glas darf nachträglich nicht bearbeitet werden, Kratzer lassen sich also nicht auspolieren.',
          'Besonders sorgfältig reinigen und in der Ausschreibung angeben, wo ESG verbaut ist.',
        ],
      ],
      note: 'Nach langjähriger Gutachtertätigkeit des SIGAB entsteht ein Grossteil der Kratzer bei einer unsachgemässen Bauendreinigung, sichtbar oft erst bei flach einfallender Sonne. Sehen Sie die Verglasung deshalb vor der Endreinigung mit der Bauleitung an und halten Sie vorhandene Schäden fest. Sonst muss später oft ein Gutachten klären, wann ein Kratzer entstanden ist.',
      sources: [
        {
          label: 'SIGAB: Verschmutzte Gläser und falsche Reinigung führen zu Schäden (metall, April 2020)',
          href: 'https://www.sigab.ch/fileadmin/dam/upload/sigab/news/Fachartikel_DE/2020_04_Metall_Glaeser-im-Baualltag.pdf',
        },
        { label: 'SIGAB: Fensterputzen ohne Kratzer zu verursachen (März 2021)', href: 'https://www.sigab.ch/de/wissen/detail/fensterputzen-ohne-kratzer-zu-verursachen' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'uebergabe',
      title: 'Übergabe-Checkliste Bauendreinigung',
      intro: 'Für den Rundgang vor der Abnahme, Raum für Raum. Prüfen Sie bei Tageslicht und schauen Sie auf Glas auch schräg gegen das Licht.',
      groups: [
        {
          title: 'Glas, Fenster und Türen',
          items: [
            'Schutzfolien an Fenstern, Türen und Geräten entfernt',
            'Etiketten und Klebereste auf Glas, Plättli und Geräten entfernt',
            'Glas ohne Schlieren, Spritzer und Kratzer, auch schräg gegen das Licht geprüft',
            'Fensterfalze, Rahmen und Türrahmen ohne Baustaub',
          ],
        },
        {
          title: 'Küche, Bad und Einbauten',
          items: [
            'Armaturen und Sanitärapparate ohne Mörtel- und Farbreste',
            'Schränke und Schubladen innen ohne Staubfilm',
            'Einbaugeräte innen und aussen sauber, Folien entfernt',
            'Plättli und Fugen ohne Rückstände',
          ],
        },
        {
          title: 'Böden und Flächen',
          items: [
            'Böden sauber, auch in Ecken und entlang der Sockelleisten',
            'Kein Staubfilm auf Fensterbänken, Türen und Lichtschaltern',
            'Treppen, Geländer und Handläufe ohne Staub',
          ],
        },
        {
          title: 'Vor der Abnahme',
          items: [
            'Endreinigung abgeschlossen, keine Handwerker mehr in den Räumen',
            'Schäden, die schon vor der Reinigung bestanden, sind festgehalten',
            'Mängelliste mit Raum und Bauteil vorbereitet',
            'Frist für die Mängelrüge notiert: bei Bauten 60 Tage',
          ],
        },
      ],
      note: 'Das OR sieht vor, dass die Bauherrschaft das Werk nach der Ablieferung prüft und Mängel meldet (Art. 367 OR). Bei Bauten beträgt die Frist für die Mängelrüge seit dem 1. Januar 2026 60 Tage, eine kürzere Frist lässt sich nicht vereinbaren. Mängel, die bei der Abnahme nicht erkennbar waren, sind innert 60 Tagen nach ihrer Entdeckung anzuzeigen (Art. 370 OR). Auf sauberen Flächen fallen Kratzer, Abplatzungen und Flecken schon bei der Abnahme auf. Was Ihr Werkvertrag im Einzelnen regelt, klären Sie mit Ihrer Bauleitung oder Rechtsberatung.',
      sources: [
        { label: 'Obligationenrecht, Art. 367: Prüfung des Werks und Frist für die Mängelrüge', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_367' },
        { label: 'Obligationenrecht, Art. 370: Genehmigung des Werks', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_370' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Etappen im Terminplan',
      text: 'Grob-, Zwischen- und Endreinigung stehen mit Datum im Terminplan der Bauleitung. Verschiebt sich der Bau, verschieben sich die Einsätze mit.',
      figure: 'start',
    },
    {
      title: 'Bauendreinigung Raum für Raum',
      text: 'Nach dem letzten Handwerker wird jeder Raum von oben nach unten gereinigt, Folien und Rückstände kommen weg, bis die Fläche bezugsbereit ist.',
      figure: 'besichtigung',
    },
    {
      title: 'Abnahme auf sauberen Flächen',
      text: 'Sie oder Ihre Bauleitung prüfen mit der Übergabe-Checkliste. Auf sauberen Flächen zeigen sich auch Mängel am Bau, die unter dem Staub verborgen waren.',
      figure: 'offerte',
    },
  ],
  faq: [
    {
      question: 'Was ist der Unterschied zwischen Baureinigung, Bauendreinigung und Baufeinreinigung?',
      answer:
        'Baureinigung ist der Oberbegriff für alle Einsätze auf der Baustelle, von der Grobreinigung nach dem Rohbau bis zu den Zwischenreinigungen. Die Bauendreinigung ist die letzte, gründliche Reinigung vor der Abnahme, danach ist das Objekt bezugsbereit. Baufeinreinigung und Bauschlussreinigung sind andere Namen für die Bauendreinigung.',
    },
    {
      question: 'Wann gehört die Bauendreinigung in den Terminplan?',
      answer:
        'Sobald Sie den Übergabetermin kennen. Sie kommt nach den letzten Handwerksarbeiten und vor der Abnahme und braucht ein eigenes Zeitfenster. Wie lang es sein muss, hängt von Fläche, Glasanteil und Zahl der Durchgänge ab. Rechnen Sie zusätzlich mit einer Reserve, falls Handwerker für Mängel zurückkommen.',
    },
    {
      question: 'Was kostet eine Baureinigung?',
      answer:
        'Den Aufwand bestimmen vor allem die Fläche und die Zahl der Geschosse, der Anteil an Glas und wie hoch es liegt, die Menge an Folien, Kleber und Spritzern, die Zahl der Etappen und Durchgänge, das Zeitfenster bis zur Übergabe sowie Strom, Wasser und Lift auf der Baustelle. Mit der Checkliste zur Ausschreibung auf dieser Seite haben Sie die Angaben beisammen, die wir für die Offerte brauchen.',
    },
    {
      question: 'Warum hat neues Glas nach der Baureinigung manchmal Kratzer?',
      answer:
        'Laut den Glasbauexperten des SIGAB meist wegen falscher Reinigung: Eine Klinge wird über die ganze Scheibe gezogen, oder ein Tuch reibt über angetrockneten Baustaub. Einscheiben-Sicherheitsglas (ESG) ist dafür besonders empfindlich. Solche Haarkratzer sieht man oft nicht sofort, sondern erst bei flach einfallender Sonne.',
    },
    {
      question: 'Wer entfernt Schutzfolien, Etiketten und Klebereste?',
      answer:
        'Das gehört zur Bauendreinigung, mit Mitteln, die zur jeweiligen Oberfläche passen. Kleber auf Glas sollte möglichst bald weg, vor allem auf beschichtetem Glas und im Sommer. Nennen Sie uns deshalb schon bei der Anfrage Glasflächen, auf denen Etiketten oder Klebeband sitzen.',
    },
    {
      question: 'Was passiert, wenn nach der Bauendreinigung noch Handwerker kommen?',
      answer:
        'Dann entsteht neuer Staub, und die betroffenen Räume brauchen eine Nachreinigung, etwa wenn nach der Abnahme Mängel behoben werden. Legen Sie die Endreinigung deshalb möglichst hinter die letzten Arbeiten und reservieren Sie ein Zeitfenster für Nachreinigungen.',
    },
    {
      question: 'Baureinigung oder Umzugsreinigung: was passt nach einer Renovation?',
      answer:
        'Wurden in der Wohnung Böden, Küche oder Bad erneuert, liegt Baustaub in Fensterfalzen, Schränken und auf allen Flächen, dazu kommen Folien und Spritzer: Das ist eine Baureinigung. Zieht eine Mieterschaft ohne Umbau aus, passt die [Umzugsreinigung](/leistungen/umzugsreinigung) mit Abnahmegarantie.',
    },
    {
      question: 'Gehören die Fenster zur Bauendreinigung?',
      answer:
        'Ja. Fenster, Rahmen, Fensterfalze und Glas sind Teil der Bauendreinigung. Die Fassade selbst reinigen wir im Rahmen der [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
    },
  ],
  related: [
    {
      path: '/leistungen/umzugsreinigung',
      text: 'Wenn eine Wohnung ohne Umbau an die nächste Mieterschaft geht und die Endreinigung mit Abnahmegarantie gefragt ist.',
    },
    {
      path: '/leistungen/fenster-und-fassadenreinigung',
      text: 'Wenn am fertigen Bau Fassade und Glasflächen regelmässig gereinigt werden sollen.',
    },
    {
      path: '/leistungen/unterhaltsreinigung',
      text: 'Wenn das Haus bezogen ist und Treppenhaus, Allgemeinflächen oder Büros laufend sauber bleiben sollen.',
    },
  ],
  cta: {
    title: 'Bauendreinigung für Ihr Objekt anfragen',
    text: 'Nennen Sie uns Art des Objekts, Nutzfläche, Zahl der Wohnungen oder Einheiten, die gewünschten Etappen und den Übergabetermin. Damit bereiten wir die Besichtigung der Baustelle vor, die wie die Offerte kostenlos und unverbindlich ist.',
  },
}
