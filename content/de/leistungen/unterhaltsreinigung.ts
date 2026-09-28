import type { ServicePageContent } from '../../types'

// Grundlage: R3a (Leistung, Nachfüllservice), R10c und E56 (Rhythmus mehrmals pro Woche, Material
// beschafft BGS oder Auftraggeber), E28 (keine Privathaushalte), 25-AUDIT/inhalt.md 3.1 (Bausteine
// 3.1.1 bis 3.1.3), seo.md M1 (Treppenhausreinigung) und T4. Rechtsquellen am 28.09.2026 auf
// fedlex.admin.ch gelesen: OR Art. 257a, 257b, 269d; VMWG Art. 4; ZGB Art. 712h, 712m.
// Offene Fragen F1 (Qualitätskontrolle), F2 (Vertretung) und F7 (Schlüsselregeln) bleiben unbeantwortet.
export const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Laufende Reinigung',
  h1: 'Unterhaltsreinigung und Treppenhausreinigung für Liegenschaften',
  lead: [
    'Treppenhaus, Eingang, Lift und Waschküche teilen sich alle Parteien einer Liegenschaft, und Beschwerden über Schmutz landen bei der Verwaltung. Wir reinigen diese Allgemeinflächen mehrmals pro Woche in einem schriftlich vereinbarten Umfang.',
    'Seife, Papier und Abfallsäcke füllen wir dabei nach. Weiter unten finden Sie ein Muster-Leistungsverzeichnis für den Offertvergleich, eine Übersicht zu Nebenkosten und Stockwerkeigentum und ein Protokoll für Ihren Rundgang.',
  ],
  facts: [
    { label: 'Für', value: 'Mehrfamilienhäuser, Stockwerkeigentum, Wohn- und Geschäftshäuser, Gewerbeflächen' },
    { label: 'Rhythmus', value: 'Mehrmals pro Woche, Häufigkeit je Bereich' },
    { label: 'Inbegriffen', value: 'Nachfüllen von Seife, Papier und Abfallsäcken' },
    { label: 'Nicht enthalten', value: 'Wohnungen, Büros, Fenster aussen, Grundreinigung' },
  ],
  sections: [
    {
      title: 'Wann eine Firma das Treppenhaus übernehmen sollte',
      paragraphs: [
        'In vielen Mehrfamilienhäusern reinigt die Mieterschaft das Treppenhaus reihum nach Plan. Das trägt, solange alle mitmachen. Wechseln Parteien, bleiben Stockwerke verschieden sauber oder häufen sich Beschwerden, ist eine feste Reinigung durch eine Firma meist die ruhigere Lösung.',
        'Ebenso typisch: Die bisherige Firma oder der Hauswart hört auf, eine Verwaltung übernimmt eine Liegenschaft, oder im Erdgeschoss zieht ein Geschäft mit Kundschaft ein. Dann ändert sich auch, wie oft Eingang und Lift gereinigt werden müssen.',
        'Wer die Kosten nach dem Wechsel trägt, regeln Mietvertrag und Gesetz. Die Übersicht zu Nebenkosten und Stockwerkeigentum auf dieser Seite zeigt, was dabei gilt.',
      ],
    },
    {
      title: 'Nachfüllservice für Seife, Papier und Abfallsäcke',
      paragraphs: [
        'Ein leerer Seifenspender fällt Mieterschaft und Kundschaft schneller auf als ein staubiges Podest. Deshalb gehört das Nachfüllen von Verbrauchsmaterial zur Unterhaltsreinigung.',
        'Das Material beschaffen entweder wir oder Sie. Welche Artikel dazugehören und wer sie einkauft, legt die schriftliche Offerte fest.',
      ],
      items: [
        'Toilettenpapier und Papierhandtücher für die WC-Anlagen',
        'Flüssigseife für die Spender an den Lavabos',
        'Abfallsäcke für Eimer und Sammelbehälter',
        'Weitere Artikel, wenn Sie sie in der Anfrage nennen',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'leistungsverzeichnis',
      title: 'Muster-Leistungsverzeichnis für Treppenhaus und Allgemeinflächen',
      intro:
        'Ein Leistungsverzeichnis macht Offerten vergleichbar, weil jede Firma mit denselben Bereichen, Tätigkeiten und Häufigkeiten rechnet. Das Muster gilt für ein Mehrfamilienhaus mit Lift und Laden im Erdgeschoss und ist keine Offerte. Streichen Sie, was bei Ihnen fehlt. Fenster aussen, Fassaden und Grundreinigung gehören in eigene Positionen.',
      columns: ['Bereich', 'Tätigkeit', 'Häufigkeit (Beispiel)'],
      rows: [
        ['Eingang und Windfang', 'Boden feucht reinigen, Schmutzmatte absaugen, Glastür beidseitig reinigen', 'Bei jedem Einsatz'],
        ['Treppen, Podeste und Handläufe', 'Stufen wischen und feucht reinigen, auch Kanten und Ecken; Handläufe, Geländer und Lichtschalter feucht abwischen', 'Bei jedem Einsatz'],
        ['Lift', 'Kabinenboden, Wände, Spiegel, Bedientableau und Türen reinigen', 'Bei jedem Einsatz'],
        ['Briefkastenanlage, Wohnungstüren und Zargen', 'Abwischen, Fingerabdrücke entfernen', 'Wöchentlich'],
        ['Waschküche und Trockenraum', 'Boden reinigen, Waschtrog und Ablagen abwischen', 'Wöchentlich'],
        ['Keller- und Estrichgänge, Veloraum', 'Wischen, Spinnweben entfernen', 'Monatlich'],
        ['Empfang, Gänge und WC der Gewerbefläche', 'Böden, Sanitärapparate und Armaturen reinigen', 'Bei jedem Einsatz'],
        ['Abfall und Verbrauchsmaterial', 'Eimer leeren, Seife, Papier und Säcke nachfüllen', 'Bei jedem Einsatz, soweit vereinbart'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'nebenkosten',
      title: 'Wer die Reinigung bezahlt: Mietrecht und Stockwerkeigentum',
      intro:
        'Ob die Kosten der Treppenhausreinigung bei der Eigentümerschaft bleiben oder weiterverrechnet werden, regeln das Obligationenrecht, die Verordnung über die Miete von Wohn- und Geschäftsräumen (VMWG) und das Zivilgesetzbuch. Die Übersicht fasst die Bestimmungen für die häufigsten Fälle zusammen.',
      columns: ['Fall', 'Was das Gesetz vorsieht', 'Was das praktisch heisst'],
      rows: [
        [
          'Mietliegenschaft, Reinigung als Nebenkosten vereinbart',
          'Nebenkosten sind das Entgelt für Leistungen des Vermieters oder eines Dritten, die mit dem Gebrauch zusammenhängen (Art. 257a Abs. 1 OR). Abgerechnet werden die tatsächlichen Aufwendungen (Art. 257b Abs. 1 OR).',
          'Die Rechnung weist die Reinigung am besten je Liegenschaft aus. Die Mieterschaft darf die Belege einsehen (Art. 257b Abs. 2 OR).',
        ],
        [
          'Abrechnung oder Pauschale',
          'Eine Nebenkostenabrechnung ist mindestens einmal jährlich zu erstellen und vorzulegen. Eine Pauschale muss sich auf Durchschnittswerte dreier Jahre stützen (Art. 4 VMWG).',
          'Reinigungskosten je Liegenschaft und Jahr getrennt ablegen, dann lässt sich später auch eine Pauschale begründen.',
        ],
        [
          'Mietliegenschaft, Reinigung nicht als Nebenkosten vereinbart',
          'Die Mieterschaft muss Nebenkosten nur bezahlen, wenn sie dies besonders vereinbart hat (Art. 257a Abs. 2 OR).',
          'Die Kosten bleiben bei der Eigentümerschaft. Eine Weiterverrechnung braucht eine Vertragsänderung (nächste Zeile).',
        ],
        [
          'Bisher reinigt die Mieterschaft, neu eine Firma',
          'Neue Nebenkosten sind eine einseitige Vertragsänderung. Sie gelten ab dem nächstmöglichen Kündigungstermin und sind begründet auf dem vom Kanton genehmigten Formular mitzuteilen, mindestens zehn Tage vor Beginn der Kündigungsfrist (Art. 269d Abs. 1 und 3 OR).',
          'Start der Firma und Termin der neuen Nebenkosten gemeinsam planen. Bis dahin trägt die Eigentümerschaft die Kosten.',
        ],
        [
          'Stockwerkeigentum',
          'Die Stockwerkeigentümer tragen die Kosten für den laufenden Unterhalt der gemeinschaftlichen Teile nach Wertquoten (Art. 712h Abs. 1 und 2 ZGB). Dienen Teile einzelnen Einheiten kaum oder gar nicht, ist das bei der Verteilung zu berücksichtigen (Art. 712h Abs. 3 ZGB).',
          'Die Versammlung genehmigt jährlich Kostenvoranschlag, Rechnung und Verteilung (Art. 712m Abs. 1 Ziff. 4 ZGB). Kosten je Bereich zeigen, ob etwa der Lift für den Laden im Erdgeschoss anders zu verteilen ist.',
        ],
      ],
      note: 'Die Übersicht gibt die Bestimmungen vereinfacht wieder und ersetzt keine Rechtsberatung. Klären Sie den Einzelfall anhand von Mietvertrag und Reglement, bei Bedarf mit einer Fachperson.',
      sources: [
        { label: 'Obligationenrecht (OR), Art. 257a, 257b und 269d', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_257_a' },
        { label: 'Verordnung über die Miete und Pacht von Wohn- und Geschäftsräumen (VMWG), Art. 4', href: 'https://www.fedlex.admin.ch/eli/cc/1990/835_835_835/de#art_4' },
        { label: 'Zivilgesetzbuch (ZGB), Art. 712h und 712m', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de#art_712_h' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'rundgang',
      title: 'Rundgang-Protokoll zum Ausdrucken',
      intro:
        'Mit diesem Protokoll sehen Sie in wenigen Minuten, ob die Reinigung hält, was vereinbart ist. Gehen Sie am Reinigungstag oder am Tag danach durch das Haus. Später beurteilen Sie eher die Nutzung als die Reinigung, bei Regenwetter schon nach wenigen Stunden.',
      groups: [
        {
          title: 'Eingang und Treppenhaus',
          items: [
            'Schmutzmatte abgesaugt, kein Sand im Windfang',
            'Glastür beidseitig ohne Schlieren und Fingerabdrücke',
            'Treppenkanten, Ecken und Flächen hinter Türen ohne Staub',
            'Handläufe und Lichtschalter sauber, nicht nur die Böden',
          ],
        },
        {
          title: 'Lift und Nebenräume',
          items: [
            'Liftkabine: Boden, Spiegel und Bedientableau sauber',
            'Waschküche: Boden trocken, Waschtrog ohne Rückstände',
            'Keller- und Estrichgänge ohne Spinnweben',
            'Briefkastenanlage ohne Staub und Fingerabdrücke',
          ],
        },
        {
          title: 'Sanitär und Material',
          items: [
            'WC und Lavabo sauber, der Raum riecht frisch',
            'Seife, Papier und Abfallsäcke aufgefüllt',
            'Abfalleimer geleert',
          ],
        },
        {
          title: 'Unterlagen',
          items: [
            'Aktuelles Leistungsverzeichnis liegt vor',
            'Reinigungstage im Treppenhaus angeschlagen',
            'Datum, Uhrzeit und Stockwerk jeder Auffälligkeit notiert',
          ],
        },
      ],
      note: 'Fällt Ihnen etwas auf, schicken Sie uns das Protokoll mit Datum und Stockwerk. Ein Foto zeigt den Punkt genauer als jede Beschreibung.',
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Umfang der Unterhaltsreinigung',
    intro: 'Kern ist die Treppenhausreinigung. Je nach Liegenschaft kommen Nebenräume und die Allgemeinflächen einer Gewerbeetage dazu:',
    items: [
      'Treppenhausreinigung: Stufen, Podeste, Geländer und Handläufe',
      'Eingänge mit Windfang, Schmutzmatte und Glastür',
      'Liftkabinen mit Boden, Wänden, Spiegel und Bedientableau',
      'Wohnungstüren und Zargen, Lichtschalter, Briefkästen',
      'Waschküchen, Trockenräume sowie Keller- und Estrichgänge',
      'Empfang, Gänge, WC-Anlagen und Küchen auf Gewerbeflächen',
      'Böden in allen vereinbarten Räumen',
      'Abfalleimer leeren, Seife und Papier nachfüllen',
    ],
    notIncluded: [
      'Reinigung in den Wohnungen selbst. Villen, Residenzen und andere Privathaushalte betreut der [Premium-Bereich](/premium).',
      'Büros und Praxen mit Arbeitsplätzen: dafür gibt es die [Büro- und Praxisreinigung](/leistungen/bueroreinigung).',
      'Fugen und Steinböden, die eine einmalige Grundreinigung brauchen: [Grund- und Sonderreinigung](/leistungen/sonderreinigungen). Endreinigung vor der Wohnungsübergabe: [Umzugsreinigung](/leistungen/umzugsreinigung).',
      'Fenster von aussen und Fassaden: [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
      'Kontrollgänge, Haustechnik und Kleinreparaturen: [Hauswartung](/leistungen/hauswartung).',
    ],
  },
  steps: [
    {
      title: 'Start vorbereiten',
      text: 'Schlüssel oder Badge, ein Platz für Geräte und Mittel und ein Aushang mit den Reinigungstagen: Diese drei Punkte sind vor dem ersten Einsatz geregelt.',
    },
    {
      title: 'Reinigen und nachfüllen',
      text: 'Wir reinigen an den vereinbarten Tagen nach dem Leistungsverzeichnis und füllen dabei Seife, Papier und Abfallsäcke nach.',
    },
    {
      title: 'Anpassen bei neuer Nutzung',
      text: 'Zieht ein Geschäft ein oder steht ein Stockwerk leer, vereinbaren wir mit Ihnen einen neuen Umfang und Rhythmus, schriftlich wie beim Start.',
    },
  ],
  faq: [
    {
      question: 'Wie häufig ist eine Treppenhausreinigung sinnvoll?',
      answer:
        'Das hängt davon ab, wie viele Parteien das Treppenhaus nutzen und wie viel Schmutz von aussen hereinkommt. Unsere Unterhaltsreinigung ist für Liegenschaften gedacht, in denen mehrmals pro Woche gereinigt wird. Eingang und Lift brauchen dabei meist mehr Pflege als Keller- und Estrichgänge. Eine mögliche Aufteilung zeigt das Muster-Leistungsverzeichnis auf dieser Seite.',
    },
    {
      question: 'Was kostet eine Unterhaltsreinigung?',
      answer:
        'Den Aufwand bestimmen vor allem die Zahl der Geschosse und Treppenläufe, ein Lift, die Nebenräume, der Rhythmus und die Nutzung. Ein Eingang mit Laden im Erdgeschoss braucht mehr Zeit als einer, den nur die Mieterschaft nutzt. Dazu kommt, ob wir das Verbrauchsmaterial beschaffen oder Sie. Den Preis nennen wir nach der Besichtigung in der schriftlichen Offerte. Kostenfaktoren und Offertvergleich erklärt der [Ratgeber zu den Reinigungskosten](/blog/reinigungskosten-schweiz).',
    },
    {
      question: 'Können wir die Reinigung über die Nebenkosten abrechnen?',
      answer:
        'Das OR sieht vor, dass die Mieterschaft Nebenkosten nur bezahlt, wenn sie besonders vereinbart sind (Art. 257a Abs. 2 OR). Steht die Reinigung im Mietvertrag, werden die tatsächlichen Kosten abgerechnet. Soll sie neu dazukommen, gilt das wie eine Mietzinserhöhung: mit dem vom Kanton genehmigten Formular und auf den nächstmöglichen Kündigungstermin (Art. 269d OR). Klären Sie den Einzelfall anhand Ihres Mietvertrags.',
    },
    {
      question: 'Braucht es in der Liegenschaft einen Putzraum?',
      answer:
        'Er erleichtert die Arbeit. In einem abschliessbaren Putzraum oder Kellerabteil bleiben Geräte und Reinigungsmittel zwischen den Einsätzen im Haus. Ein Wasseranschluss mit Ausguss in der Nähe spart zusätzlich Wege.',
    },
    {
      question: 'Müssen die Mieterinnen und Mieter etwas vorbereiten?',
      answer:
        'Nein. Hilfreich ist, wenn Treppen und Gänge an den Reinigungstagen frei von Schuhen, Velos und anderen Gegenständen sind. Ein Aushang mit den Reinigungstagen im Treppenhaus reicht dafür meist.',
    },
    {
      question: 'Reicht die Unterhaltsreinigung, oder braucht es auch eine Grundreinigung?',
      answer:
        'Die Unterhaltsreinigung entfernt den Schmutz, der zwischen zwei Einsätzen anfällt. Über Jahre setzen sich aber Rückstände in Fugen und auf Steinböden fest, und Pflegeschichten nutzen sich ab. Dann hilft eine einmalige [Grundreinigung](/leistungen/sonderreinigungen), am besten vor dem Start einer neuen Unterhaltsreinigung.',
    },
    {
      question: 'Wir wechseln die Reinigungsfirma. Worauf sollten wir achten?',
      answer:
        'Planen Sie den Start so, dass zwischen dem letzten Einsatz der bisherigen Firma und dem ersten der neuen keine Lücke entsteht. Die Kündigungsfrist steht im bisherigen Vertrag. Legen Sie allen Anbietern dasselbe Leistungsverzeichnis vor, sonst vergleichen Sie verschiedene Leistungen. Schlüssel und Badges lassen Sie sich von der bisherigen Firma gegen Quittung zurückgeben.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Wenn neben dem Treppenhaus auch Kontrollgänge, Haustechnik und Wohnungsübergaben betreut werden sollen.' },
    { path: '/leistungen/sonderreinigungen', text: 'Wenn sich in Fugen und auf Steinböden alter Schmutz festgesetzt hat, am besten vor dem Start der Unterhaltsreinigung.' },
    { path: '/leistungen/bueroreinigung', text: 'Wenn die Gewerbefläche vor allem aus Büros oder einer Praxis mit Arbeitsplätzen besteht.' },
  ],
  cta: {
    title: 'Offerte für Treppenhaus und Allgemeinflächen',
    text: 'Für die Offerte brauchen wir die Adresse, die Zahl der Geschosse und Wohnungen, ob es einen Lift und Gewerbe im Haus gibt und welchen Rhythmus Sie sich vorstellen. Haben Sie schon ein Leistungsverzeichnis oder Pflichtenheft, schicken Sie es mit. Wir besichtigen die Liegenschaft und schicken Ihnen danach die schriftliche Offerte, beides kostenlos und unverbindlich.',
  },
}
