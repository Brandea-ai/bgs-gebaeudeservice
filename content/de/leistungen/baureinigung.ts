import type { ServicePageContent } from '../../types'

// Grundlage: R3a (Baureinigung), R3b (Bauendreinigung), R10b, E17; Umbau E85 nach 25-AUDIT/inhalt.md 3.5
// (Bausteine 3.5.1 bis 3.5.3), seo.md T2, keywords-mehrsprachig.md.
// Quellen am 28.09.2026 gelesen: OR Art. 367 und 370 (Fassung 1.1.2026, Baumängel), VVEA Art. 17
// (Fassung 1.8.2026), SIGAB-Fachartikel «Verschmutzte Gläser und falsche Reinigung führen zu Schäden»
// (metall, April 2020) und SIGAB «Fensterputzen ohne Kratzer zu verursachen» (22.03.2021).
// Runde 2 (Prüfbefunde R1 bis R6, BR-SO-1 bis BR-SO-9), am 28.09.2026 gelesen: Botschaft Baumängel
// BBl 2022 2743, Ziff. 4.2 Übergangsrecht (60 Tage nur für Werkverträge ab 1.1.2026), sigab.ch
// (Technische Fachstelle SIGAB des Schweizerischen Flachglasverbands SFV-ASVP).
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
        'Folien, Kleber und angetrocknete Spritzer haften fester als Staub. Jede Oberfläche braucht dafür ihr eigenes Mittel und Werkzeug, denn Glas, Chromstahl, Armaturen und neue Böden sollen ohne Kratzer übergeben werden. Worauf es beim Glas ankommt, zeigt die Tabelle weiter unten.',
      ],
    },
    {
      title: 'Grobreinigung im Rohbau, damit der Ausbau sauber beginnt',
      paragraphs: [
        'Solange die Geschosse leer sind, lassen sich Schutt und Staub schnell und gründlich entfernen. Bodenleger, Gipser und Küchenbauer beginnen dann auf sauberem Grund, und mit jedem Arbeitsgang wandert weniger Staub in die späteren Etappen.',
        'Jede Zwischenreinigung nimmt der Bauendreinigung Arbeit ab. Das zählt vor allem, wenn zwischen dem letzten Handwerker und der Übergabe nur wenige Tage liegen: Die Endreinigung beginnt dann nicht bei null.',
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
      intro: 'Welche Reinigung wann kommt und wer den Bereich dafür freigibt, als Vorlage für Bauleitung und Ausschreibung.',
      columns: ['Etappe', 'Wann im Bau', 'Was gereinigt wird', 'Wer gibt frei'],
      rows: [
        [
          'Grobreinigung',
          'Nach dem Rohbau, bevor der Innenausbau beginnt',
          'Groben Schmutz und Staub aus den Geschossen entfernen',
          'Bauleitung',
        ],
        [
          'Zwischenreinigung',
          'Vor empfindlichen Arbeiten wie Parkett, Plättli oder Küchenmontage',
          'Staub von Böden, Fenstern, Installationen und schon eingebauten Teilen',
          'Bauleitung',
        ],
        [
          'Bauendreinigung',
          'Am Schluss, wenn alle Gewerke fertig sind',
          'Alles bezugsbereit, von oben nach unten, oft in mehreren Durchgängen',
          'Bauleitung oder Bauherrschaft',
        ],
        [
          'Nachreinigung',
          'Wenn nach der Endreinigung noch gearbeitet wird, etwa zur Behebung von Mängeln',
          'Nur die Räume, in denen nach der Endreinigung noch Handwerker waren',
          'Bauleitung',
        ],
      ],
      note: 'Arbeiten nach der Bauendreinigung noch Handwerker in den Räumen, entsteht neuer Staub. Halten Sie deshalb ein Zeitfenster für Nachreinigungen frei.',
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
            'Pläne mit den Räumen, die zu reinigen sind',
            'Naturstein, Parkett oder geölte Böden',
            'Keller und Tiefgarage: mit oder ohne',
          ],
        },
        {
          title: 'Glas und Fenster',
          items: [
            'Fenster, Glastüren und Glasbrüstungen',
            'Glas in grosser Höhe, etwa Oberlichter',
            'Wo Sicherheitsglas (ESG) verbaut ist',
            'Storen und Rollläden: mit oder ohne',
          ],
        },
        {
          title: 'Termine',
          items: [
            'Gewünschte Etappen mit Datum',
            'Übergabetermin und Termin der Abnahme',
            'Zeitfenster vor der Abnahme',
            'Reserve für eine Nachreinigung',
          ],
        },
        {
          title: 'Baustelle',
          items: [
            'Zufahrt, Zutritt und Schlüssel oder Badges',
            'Lift oder Bauaufzug, Strom und Wasser',
            'Sicherheitsregeln und Ansprechperson',
            'Mulden: wer sie stellt und wer entsorgt',
          ],
        },
      ],
      note: 'Die Abfallverordnung VVEA verlangt, Sonderabfälle separat zu entsorgen und die übrigen Bauabfälle auf der Baustelle zu trennen. Wo das betrieblich nicht geht, sind sie in einer geeigneten Anlage zu trennen (Art. 17 VVEA). Klären Sie deshalb auch, wohin Folien und Verpackungen aus der Reinigung gehören.',
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
      intro: 'Fenster sind oft Monate vor der Übergabe eingebaut und bekommen alles ab, was auf der Baustelle anfällt. Die Empfehlungen stammen von der Technischen Fachstelle SIGAB des Schweizerischen Flachglasverbands.',
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
          'Wird die ganze Scheibe mit Klinge oder Glashobel abgezogen, reibt die Klinge Schmutzpartikel ins Glas. Es entsteht ein Netz feiner Haarkratzer. Polieren müsste dann die ganze Sichtfläche erfassen und wird teurer als neues Glas.',
          'Klingen höchstens punktuell und sehr sorgfältig einsetzen, nie über die ganze Fläche.',
        ],
        [
          'Etiketten und Klebeband',
          'Auf beschichtetem Glas und bei Wärme besonders heikel. Reiniger mit Laugen oder Säuren können Beschichtung und Glasoberfläche zerstören.',
          'Kleber möglichst bald entfernen, vorsichtig mit Isopropanol oder Aceton.',
        ],
        [
          'Einscheiben-Sicherheitsglas (ESG)',
          'Kratzempfindlicher als normales Floatglas, ohne dass die Qualität schlechter wäre. Nach den Produktnormen darf vorgespanntes Glas nach dem Vorspannen nicht mehr bearbeitet werden, also auch nicht poliert.',
          'Besonders sorgfältig reinigen.',
        ],
      ],
      note: 'Nach langjähriger Gutachtertätigkeit der SIGAB entsteht ein Grossteil der Kratzer bei einer unsachgemässen Bauendreinigung, sichtbar oft erst bei flach einfallender Sonne. Sehen Sie die Verglasung deshalb vor der Endreinigung mit der Bauleitung an und halten Sie vorhandene Schäden fest. Sonst muss später oft ein Gutachten klären, wann ein Kratzer entstanden ist.',
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
      intro: 'Für den Rundgang vor der Abnahme. Glas bei Tageslicht auch schräg ansehen.',
      groups: [
        {
          title: 'Glas, Fenster und Türen',
          items: [
            'Folien, Etiketten und Kleber entfernt',
            'Glas ohne Schlieren, Spritzer und Kratzer',
            'Fensterfalze und Rahmen ohne Baustaub',
          ],
        },
        {
          title: 'Küche, Bad und Einbauten',
          items: [
            'Armaturen und Sanitärapparate ohne Mörtel- und Farbreste',
            'Schränke und Schubladen innen sauber',
            'Plättli und Fugen ohne Rückstände',
          ],
        },
        {
          title: 'Böden und Flächen',
          items: [
            'Böden sauber bis in die Ecken',
            'Fensterbänke und Türen ohne Staub',
            'Treppen und Handläufe ohne Staub',
          ],
        },
        {
          title: 'Vor der Abnahme des Baus',
          items: [
            'Keine Handwerker mehr in den Räumen',
            'Vorbestehende Schäden festgehalten',
            'Mängelliste nach Raum und Bauteil',
            'Rügefrist am Bau geklärt (siehe Hinweis)',
          ],
        },
      ],
      note: 'Das OR sieht vor, dass die Bauherrschaft den Bau nach der Ablieferung prüft und Mängel den Unternehmern meldet (Art. 367 OR). Für Werkverträge über Bauten, die ab dem 1. Januar 2026 geschlossen wurden, beträgt die Frist mindestens 60 Tage, bei Mängeln, die erst später erkennbar werden, ab ihrer Entdeckung (Art. 370 OR). Für ältere Verträge gilt weiter das alte Recht, also sofort rügen. Was Ihr Werkvertrag regelt, klären Sie mit Ihrer Bauleitung oder Rechtsberatung.',
      sources: [
        { label: 'Obligationenrecht, Art. 367 und 370: Prüfung des Werks, Mängelrüge und Genehmigung', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_367' },
        { label: 'Botschaft Baumängel, BBl 2022 2743, Ziff. 4.2: Übergangsrecht', href: 'https://www.fedlex.admin.ch/eli/fga/2022/2743/de' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Etappen im Terminplan',
      text: 'Grob-, Zwischen- und Endreinigung stehen mit Datum im Terminplan der Bauleitung. Verschiebt sich der Bau, werden die Einsätze mit der Bauleitung neu abgestimmt.',
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
        'Sobald Sie den Übergabetermin kennen. Sie kommt nach den letzten Handwerksarbeiten und vor der Abnahme und braucht ein eigenes Zeitfenster. Wie lang es sein muss, hängt von Fläche, Glasanteil und Zahl der Durchgänge ab.',
    },
    {
      question: 'Was kostet eine Baureinigung?',
      answer:
        'Den Aufwand bestimmen vor allem die Fläche und die Zahl der Geschosse, der Anteil an Glas und wie hoch es liegt, die Menge an Folien, Kleber und Spritzern, die Zahl der Etappen und Durchgänge, das Zeitfenster bis zur Übergabe sowie Strom, Wasser und Lift auf der Baustelle. Mit der Checkliste zur Ausschreibung auf dieser Seite haben Sie die Angaben beisammen, die wir für die Offerte brauchen.',
    },
    {
      question: 'Warum hat neues Glas nach der Baureinigung manchmal Kratzer?',
      answer:
        'Laut den Glasbauexperten der SIGAB meist wegen falscher Reinigung: Eine Klinge wird über die ganze Scheibe gezogen, oder ein Tuch reibt über angetrockneten Baustaub. Einscheiben-Sicherheitsglas (ESG) ist dafür besonders empfindlich. Solche Haarkratzer sieht man oft nicht sofort, sondern erst bei flach einfallender Sonne.',
    },
    {
      question: 'Wer entfernt Schutzfolien, Etiketten und Klebereste?',
      answer:
        'Das gehört zur Bauendreinigung, mit Mitteln, die zur jeweiligen Oberfläche passen. Was dabei auf Glas zu beachten ist, zeigt die Tabelle zum neuen Glas. Nennen Sie uns schon bei der Anfrage die Glasflächen, auf denen Etiketten oder Klebeband sitzen.',
    },
    {
      question: 'Baureinigung oder Umzugsreinigung: was passt nach einer Renovation?',
      answer:
        'Wurden in der Wohnung Böden, Küche oder Bad erneuert, liegt Baustaub in Fensterfalzen, Schränken und auf allen Flächen, dazu kommen Folien und Spritzer: Das ist eine Baureinigung. Zieht eine Mieterschaft ohne Umbau aus, passt die [Umzugsreinigung](/leistungen/umzugsreinigung) mit Abnahmegarantie.',
    },
    {
      question: 'Gehören die Fenster zur Bauendreinigung?',
      answer:
        'Ja, samt Rahmen, Fensterfalzen und Glas. Die regelmässige Pflege von Glas und Fassade am bezogenen Haus übernimmt die [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
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
