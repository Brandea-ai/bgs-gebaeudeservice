import type { ServicePageContent } from '../../types'

// Grundlage: 03 Abschnitt 2a (ein Vertrag, eine Ansprechperson, nur eigene Leistungen), K02, E17, E29, E53,
// Umbau nach 25-AUDIT/inhalt.md 3.10 (Bausteine 3.10.1 und 3.10.2) und E85.
// Rechtsquellen am 28.09.2026 auf fedlex.admin.ch im Wortlaut gelesen: OR Art. 58, 257a, 257b, 335c;
// ZGB Art. 712h, 712m, 712s; VUV Art. 6, 9. Keine Aussagen zu F1 bis F7 (Qualitätskontrolle,
// Vertretung, Schlüsselregeln im B2B).
const or = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de'
const zgb = 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de'
const vuv = 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/de'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Facility Services: Reinigung, Hauswartung und Umgebung aus einer Hand',
  lead: [
    'Wer Reinigung, Hauswartung und Umgebungspflege an drei Firmen vergibt, führt drei Verträge mit eigenen Kündigungsfristen. Dazu kommen die Fragen dazwischen: Wer kehrt das Laub aus dem Eingang, wer ersetzt die Leuchte im Veloraum, wer füllt im WC die Seife nach?',
    'Bei Facility Services erbringen wir diese Leistungen selbst, in einem Vertrag. Heizung, Lift und Brandschutz warten weiterhin Ihre Fachbetriebe. Störungen, die uns dort auffallen, melden wir Ihnen.',
  ],
  facts: [
    { label: 'Umfang', value: 'Reinigung, Hauswartung, Umgebungspflege und Glas, nur was wir selbst erbringen' },
    { label: 'Nicht enthalten', value: 'Wartung von Heizung, Lüftung und Lift, grössere Reparaturen' },
    { label: 'Vertrag', value: 'Ein Vertrag und eine Ansprechperson für alle Leistungen' },
    { label: 'Einstieg', value: 'Mit einer Leistung beginnen, weitere dazunehmen, wenn alte Verträge enden' },
  ],
  scope: {
    title: 'Was sich in einem Vertrag verbinden lässt',
    intro: 'Facility Services stellen wir aus unseren eigenen Leistungen zusammen, für jede Liegenschaft und jeden Standort passend:',
    items: [
      '[Unterhaltsreinigung](/leistungen/unterhaltsreinigung) von Treppenhaus, Allgemeinräumen und Gewerbeflächen, mit Nachfüllservice',
      '[Büro- und Praxisreinigung](/leistungen/bueroreinigung) zu Einsatzzeiten, die zu Ihren Öffnungszeiten passen',
      '[Hauswartung](/leistungen/hauswartung) mit Kontrollgängen, Kleinreparaturen und Entsorgung',
      '[Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege) für Rasen, Hecken, Beete, Wege und Plätze',
      '[Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung) im vereinbarten Rhythmus',
      '[Grund- und Sonderreinigung](/leistungen/sonderreinigungen), wenn Böden oder Räume mehr brauchen als die laufende Reinigung',
      '[Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung) beim Wechsel der Mieterschaft',
      '[Industrie- und Hallenreinigung](/leistungen/industrie-und-hallenreinigung) für Hallen, Lager und Produktionsflächen',
    ],
    notIncluded: [
      'Technisches Facility Management: Wartung und Prüfung von Heizung, Lüftung, Liften und Brandschutzanlagen.',
      'Kaufmännisches Facility Management wie Mietverwaltung, Buchhaltung oder Nebenkostenabrechnung.',
      'Grössere Reparaturen und Handwerksarbeiten, auch nicht als Vermittlung an Handwerksbetriebe.',
      'Notfall- und Pikettdienst rund um die Uhr, etwa bei einem Wasserschaden in der Nacht.',
      'Winterdienst, auch nicht als Teil eines gemeinsamen Vertrags.',
    ],
  },
  sections: [
    {
      title: 'Wann ein Vertrag für alles passt',
      paragraphs: [
        'Eine Verwaltung betreut mehrere Liegenschaften und will nicht je Haus drei Firmen koordinieren. Ein Unternehmen hat Büros, eine Lagerhalle und einen Parkplatz und sucht eine Stelle für alles. Eine Stockwerkeigentümerschaft verliert ihren Hauswart und will Reinigung und Umgebung bei der Gelegenheit gleich mitregeln.',
        'Brauchen Sie nur eine einzelne Leistung, ist deren eigene Seite der bessere Einstieg, etwa die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung). Sinnvoll wird ein gemeinsamer Vertrag, sobald zwei oder mehr Leistungen am selben Objekt zusammenkommen.',
      ],
    },
    {
      title: 'Am Eingang treffen sich drei Aufträge',
      paragraphs: [
        'Auf dem Vorplatz liegt Laub, an der Glastür sind Fingerabdrücke, über dem Eingang flackert eine Leuchte. Bei getrennten Verträgen gehört jede dieser Stellen einer anderen Firma. Jede Grenze muss dann im Vertrag stehen, sonst bleibt etwas liegen oder wird zweimal gemacht.',
        'In einem gemeinsamen Vertrag steht jede Leistung mit Umfang und Rhythmus, und alle Einsätze kommen vom selben Betrieb. Wer den Vorplatz pflegt, sieht auch die Leuchte und meldet sie weiter.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'schnittstellen',
      title: 'Schnittstellen, die ein Vertrag regeln sollte',
      intro:
        'An diesen Stellen berühren sich Reinigung, Hauswartung und Umgebungspflege. Ob Sie eine Firma beauftragen oder mehrere: Die rechte Spalte gehört in den Vertrag oder ins Pflichtenheft.',
      columns: ['Stelle', 'Was dort zusammenkommt', 'Im Vertrag festhalten'],
      rows: [
        ['Eingang und Vorplatz', 'Laub und Schmutz von draussen, Fussmatten, Glas der Eingangstür, Briefkästen', 'Wer kehrt den Vorplatz, wer reinigt Matten und Glas, wie oft'],
        ['Treppenhaus und Lift', 'Böden, Geländer, Liftkabine, Beleuchtung', 'Ob die Kabine mit dem Treppenhaus gereinigt wird, wohin Störungen am Lift gehen'],
        ['Keller, Waschküche, Trockenraum', 'Reinigung, Ordnung, Geräte der Mieterschaft', 'Wer meldet eine defekte Waschmaschine, und an welche Stelle'],
        ['Abfallraum und Containerplatz', 'Reinigung, Container am Abfuhrtag, Wertstoffe', 'Wer stellt die Container bereit und holt sie zurück, wer reinigt den Platz'],
        ['Einstellhalle und Veloraum', 'Kehren, Beleuchtung, Tore', 'Rhythmus der Reinigung, wer meldet ein Tor, das nicht mehr schliesst'],
        ['WC und Teeküche im Betrieb', 'Reinigung und Verbrauchsmaterial', 'Wer stellt Seife, Papier und Abfallsäcke, wer füllt nach'],
        ['Nach Arbeiten von Handwerkern', 'Staub und Schmutz in Treppenhaus und Lift', 'Wer reinigt danach, und über welches Budget es abgerechnet wird'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zustaendigkeiten',
      title: 'Wer macht was im gemeinsamen Vertrag',
      intro:
        'Ein Vertrag für alles heisst nicht, dass alles bei uns liegt. Die Tabelle zeigt, was wir ausführen und was bei der Verwaltung oder Eigentümerschaft bleibt.',
      columns: ['Aufgabe', 'Wir', 'Verwaltung oder Eigentümerschaft'],
      rows: [
        ['Reinigung innen und Glas', 'reinigen nach Vertrag, im vereinbarten Rhythmus', 'Umfang bestimmen, Zugang zu Wohnungen oder Büros ankündigen'],
        ['Kontrollgänge', 'Allgemeinflächen, Keller und Umgebung ansehen, Mängel melden', 'Meldungen entgegennehmen, entscheiden, Aufträge erteilen'],
        ['Kleinreparaturen, etwa Leuchtmittel', 'bis zur vereinbarten Grenze selbst erledigen', 'die Grenze bestimmen, grössere Reparaturen an Handwerksbetriebe vergeben'],
        ['Heizung, Lüftung, Lift, Brandschutz', 'Störungen melden, die uns auffallen', 'Wartungsverträge mit Fachbetrieben führen und sie beauftragen'],
        ['Umgebung und Grünflächen', 'pflegen nach Pflegeplan', 'den Pflegeplan freigeben'],
        ['Verbrauchsmaterial', 'nachfüllen, wo der Nachfüllservice vereinbart ist', 'bestimmen, wer das Material stellt'],
        ['Entsorgung', 'Abfall und Wertstoffe organisieren, Abfallplatz sauber halten', 'Standort des Abfallplatzes und Zahl der Container bestimmen'],
      ],
      note:
        'Für Schäden aus mangelhaftem Unterhalt eines Gebäudes haftet nach Art. 58 OR die Eigentümerin, auch wenn sie Aufgaben vergeben hat. Deshalb gehört in den Vertrag, an wen Mängel gemeldet werden und wer entscheidet.',
      sources: [{ label: 'Obligationenrecht, Art. 58 (Haftung des Werkeigentümers)', href: `${or}#art_58` }],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'wechsel',
      title: 'Checkliste: von mehreren Firmen zu einem Vertrag',
      intro:
        'Der Wechsel gelingt am einfachsten Schritt für Schritt, entlang der Fristen der bisherigen Verträge. Die Punkte zum Abhaken:',
      groups: [
        {
          title: 'Laufende Verträge und Entscheid',
          items: [
            'Alle Verträge für Reinigung, Hauswartung, Umgebung und Glas zusammentragen',
            'Je Vertrag die Kündigungsfrist und den nächsten möglichen Termin notieren',
            'Ist der Hauswart bei Ihnen angestellt, gelten die Fristen des Arbeitsrechts: sofern Arbeitsvertrag, Normal- oder Gesamtarbeitsvertrag nichts anderes regeln, im ersten Dienstjahr ein Monat, im zweiten bis neunten zwei Monate, danach drei Monate, jeweils auf Ende eines Monats (Art. 335c OR)',
            'Stockwerkeigentum: prüfen, ob die Verwaltung den Vertrag abschliessen darf oder die Versammlung entscheidet. Massgebend sind Reglement, Verwaltervertrag und Beschlüsse (Art. 712m und 712s ZGB)',
          ],
        },
        {
          title: 'Kosten richtig zuordnen',
          items: [
            'Von jedem Anbieter die Kosten je Liegenschaft und je Leistung verlangen, damit sie sich später richtig zuordnen lassen',
            'Vermietete Objekte: Nebenkosten trägt die Mieterschaft nur, wenn es im Mietvertrag besonders vereinbart ist, und nur in der Höhe der tatsächlichen Aufwendungen (Art. 257a und 257b OR)',
            'Stockwerkeigentum: Kosten für Teile, die nicht allen Einheiten dienen, etwa eine Einstellhalle, getrennt ausweisen lassen. Das ZGB verlangt, dies bei der Verteilung zu berücksichtigen (Art. 712h Abs. 3 ZGB)',
          ],
        },
        {
          title: 'Vor dem Start',
          items: [
            'Den Start jeder Leistung auf das Ende des jeweiligen bisherigen Vertrags legen',
            'Schlüssel, Badges und Codes der bisherigen Firmen zurücknehmen und auflisten',
            'Den bisherigen Firmen den letzten Einsatz und die Rückgabe bestätigen',
            'Unternehmen: den neuen Dienstleister über Gefahren im Betrieb und die Schutzmassnahmen informieren. Arbeiten mehrere Betriebe am selben Ort, sprechen sich die Arbeitgeber ab (Art. 6 und 9 VUV)',
          ],
        },
        {
          title: 'Meldewege und Information',
          items: [
            'Meldeweg festlegen: wer Meldungen empfängt und bis zu welchem Betrag ohne Rückfrage repariert wird',
            'Mieterschaft oder Mitarbeitende informieren, wer ab welchem Datum zuständig ist',
            'Aushang im Eingang und Kontaktangaben für Meldungen erneuern',
          ],
        },
      ],
      note: 'Diese Hinweise ersetzen keine Rechtsberatung. Klären Sie Fristen und Zuständigkeiten im Einzelfall anhand Ihrer Verträge und des Reglements.',
      sources: [
        { label: 'Obligationenrecht, Art. 335c (Kündigungsfristen im Arbeitsverhältnis)', href: `${or}#art_335_c` },
        { label: 'Obligationenrecht, Art. 257a und 257b (Nebenkosten)', href: `${or}#art_257_a` },
        { label: 'Zivilgesetzbuch, Art. 712h (Kosten im Stockwerkeigentum)', href: `${zgb}#art_712_h` },
        { label: 'Zivilgesetzbuch, Art. 712m und 712s (Versammlung und Verwalter)', href: `${zgb}#art_712_m` },
        { label: 'Verordnung über die Unfallverhütung (VUV), Art. 6 und 9', href: `${vuv}#art_9` },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Ein Vertrag für alle Leistungen',
      text: 'Im Vertrag steht jede Leistung mit Umfang, Rhythmus und Einsatzzeiten. Dazu kommt, an wen wir Mängel und Störungen melden.',
      figure: 'offerte',
    },
    {
      title: 'Übergabe vor Ort',
      text: 'Zum Start erhalten wir Schlüssel, Badges und Codes für die vereinbarten Räume. Sie zeigen uns Materialraum, Abfallplatz und die Technikräume für die Kontrollgänge.',
      figure: 'besichtigung',
    },
    {
      title: 'Start je Leistung',
      text: 'Jede Leistung beginnt auf das Ende des bisherigen Vertrags. Läuft ein Vertrag noch länger, bleibt diese Leistung bis dahin bei der bisherigen Firma.',
      figure: 'start',
    },
    {
      title: 'Änderungen an einer Stelle',
      text: 'Kommt eine Liegenschaft dazu, ändert sich ein Rhythmus oder fällt eine Leistung weg, melden Sie es Ihrer Ansprechperson bei uns. Angepasst wird der eine Vertrag.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'Was unterscheidet Facility Services von Facility Management?',
      answer:
        'Unter Facility Management versteht man oft auch den Betrieb der Haustechnik und die kaufmännische Verwaltung. Unsere Facility Services umfassen die Leistungen, die wir selbst erbringen: Reinigung, Hauswartung, Umgebungspflege und Glas. Die Technik warten Ihre Fachbetriebe, die Verwaltung bleibt bei Ihnen.',
    },
    {
      question: 'Wie wechseln wir von mehreren Firmen zu einer?',
      answer:
        'Schrittweise. Jede Leistung wechselt zu uns, wenn der bisherige Vertrag dafür endet. Sie können also mit einer Leistung beginnen und die übrigen später dazunehmen. Welche Fristen gelten und was vor dem Start erledigt sein sollte, steht in der Checkliste auf dieser Seite.',
    },
    {
      question: 'Wovon hängen die Kosten für Facility Services ab?',
      answer:
        'Der Preis setzt sich aus den einzelnen Leistungen zusammen. Massgebend sind die Zahl und Grösse der Liegenschaften oder Standorte, die Flächen je Leistung, der Rhythmus von Reinigung und Kontrollgängen, der Umfang der Umgebung, die Einsatzzeiten, wer das Verbrauchsmaterial stellt und die Wege zwischen den Objekten. Einen Preis von der Stange gibt es deshalb nicht. Den Preis für Ihre Objekte erhalten Sie nach dem Rundgang schriftlich.',
    },
    {
      question: 'Was bleibt bei uns als Verwaltung oder Eigentümerschaft?',
      answer:
        'Die Entscheide: welche Leistungen, welches Budget, welcher Fachbetrieb für Heizung, Lift oder Reparaturen. Auch die Haftung für den Unterhalt des Gebäudes bleibt bei der Eigentümerin. Unsere Meldungen helfen, Mängel früh zu sehen. Was daraufhin geschieht, bestimmen Sie.',
    },
    {
      question: 'Reicht nicht auch eine Hauswartung?',
      answer:
        'Die [Hauswartung](/leistungen/hauswartung) deckt Kontrollgänge, Treppenhaus, Waschküche, Kleinreparaturen und Entsorgung ab. Kommen Büroreinigung, Fensterreinigung oder die Pflege grösserer Grünflächen dazu, passt ein gemeinsamer Vertrag besser.',
    },
    {
      question: 'Lassen sich mehrere Liegenschaften oder Standorte in einem Vertrag regeln?',
      answer:
        'Ja. Sinnvoll ist, je Liegenschaft festzuhalten, welche Leistungen in welchem Rhythmus dazugehören und wer vor Ort Meldungen entgegennimmt. So lassen sich die Kosten jeder Liegenschaft zuordnen, was für Nebenkosten und Stockwerkeigentum wichtig ist.',
    },
    {
      question: 'Was müssen wir als Unternehmen zur Arbeitssicherheit regeln?',
      answer:
        'Wer Mitarbeitende eines anderen Betriebs bei sich arbeiten lässt, muss sie über die Gefahren und Schutzmassnahmen im Betrieb informieren. Arbeiten mehrere Betriebe am selben Ort, sprechen sich die Arbeitgeber ab. So verlangt es die Verordnung über die Unfallverhütung (Art. 6 und 9 VUV). Mit einem Dienstleister für Reinigung, Hauswartung und Umgebung braucht es diese Absprache einmal statt dreimal.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Wenn vor allem Kontrollgänge, Treppenhaus, Waschküche und Entsorgung anstehen und die Reinigung schon vergeben ist.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn Sie zuerst nur die regelmässige Reinigung von Treppenhaus und Allgemeinflächen neu vergeben.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Wenn nur die Umgebung neu vergeben wird, etwa weil der bisherige Gärtner aufhört.' },
  ],
  cta: {
    title: 'Offerte für Facility Services',
    text: 'Für die Offerte brauchen wir die Adressen der Liegenschaften oder Standorte, die Leistungen, die Sie abgeben möchten, und das Enddatum der laufenden Verträge. Danach sehen wir uns die Objekte mit Ihnen an, kostenlos und unverbindlich.',
  },
}
