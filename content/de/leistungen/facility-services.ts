import type { ServicePageContent } from '../../types'

// Grundlage: 03 Abschnitt 2a (ein Vertrag, eine Ansprechperson, nur eigene Leistungen), K02, E17, E29, E53,
// Umbau nach 25-AUDIT/inhalt.md 3.10 (Bausteine 3.10.1 und 3.10.2) und E85.
// Rechtsquellen am 28.09.2026 auf fedlex.admin.ch im Wortlaut gelesen: OR Art. 58 (beide Absätze),
// 257a, 257b, 335c, 336c; ZGB Art. 712h, 712m, 712s; VUV Art. 6, 9. Keine Aussagen zu F1 bis F7
// (Qualitätskontrolle, Vertretung, Schlüsselregeln im B2B). Befunde der Prüfer (FS-R1 bis FS-08)
// am 28.09.2026 eingearbeitet: jede Aussage steht einmal, Werkzeuge ohne Überschneidung.
const or = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de'
const zgb = 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de'
const vuv = 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/de'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Facility Services: Reinigung, Hauswartung und Umgebung aus einer Hand',
  lead: [
    'Wer Reinigung, Hauswartung und Umgebungspflege an drei Firmen vergibt, führt drei Verträge mit eigenen Kündigungsfristen. Dazu kommen die Fragen dazwischen: Wer kehrt das Laub aus dem Eingang, wer ersetzt das Leuchtmittel im Veloraum, wer füllt im WC die Seife nach?',
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
        'Mit einem gemeinsamen Vertrag kommen alle Einsätze vom selben Betrieb. Wer den Vorplatz pflegt, bemerkt auch die flackernde Leuchte, und das Leuchtmittel ersetzt die Hauswartung im selben Vertrag.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'schnittstellen',
      title: 'Schnittstellen, die ein Vertrag regeln sollte',
      intro:
        'An diesen Stellen berühren sich Reinigung, Hauswartung und Umgebungspflege. Ob Sie eine Firma beauftragen oder mehrere, klären Sie die Punkte unter «Im Vertrag festhalten» vor dem ersten Einsatz, am besten im Pflichtenheft.',
      columns: ['Stelle', 'Was dort zusammenkommt', 'Im Vertrag festhalten'],
      rows: [
        ['Eingang und Vorplatz', 'Laub und Schmutz von draussen, Fussmatten, Glas der Eingangstür, Briefkästen', 'Wer kehrt den Vorplatz, wer reinigt Matten und Glas, wie oft'],
        ['Treppenhaus und Lift', 'Böden, Geländer, Fenster, Liftkabine', 'Ob die Kabine mit Spiegel und Türschienen zur Treppenhausreinigung gehört, wer die Fenster im Treppenhaus innen und aussen reinigt'],
        ['Waschküche und Trockenraum', 'Reinigung des Raums, gemeinsam genutzte Geräte, Hausordnung', 'Was die Reinigung übernimmt und was nach Hausordnung bei der Mieterschaft bleibt, etwa das Flusensieb'],
        ['Einstellhalle und Veloraum', 'Boden, Beleuchtung, Tore', 'Wie oft gekehrt wird, ob eine Nassreinigung dazugehört, ob Tore und Beleuchtung Teil der Kontrollgänge sind'],
        ['Nach Arbeiten von Handwerkern', 'Staub und Schmutz in Treppenhaus und Lift', 'Wer danach reinigt und über welches Budget es abgerechnet wird'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zustaendigkeiten',
      title: 'Wer macht was im gemeinsamen Vertrag',
      intro:
        'Ein Vertrag für alles heisst nicht, dass alles bei uns liegt.',
      columns: ['Aufgabe', 'Wir', 'Verwaltung oder Eigentümerschaft'],
      rows: [
        ['Reinigung innen und Glas', 'im vereinbarten Rhythmus reinigen', 'Umfang und Zutritt zu Wohnungen oder Büros regeln'],
        ['Kontrollgänge', 'Allgemeinflächen und Umgebung prüfen, Mängel melden', 'Meldungen entgegennehmen, entscheiden, Aufträge erteilen'],
        ['Kleinreparaturen, etwa Leuchtmittel', 'bis zur vereinbarten Grenze selbst erledigen', 'Grenze festlegen, grössere Reparaturen vergeben'],
        ['Heizung, Lüftung, Lift, Brandschutz', 'Störungen melden, die uns auffallen', 'Fachbetriebe mit Wartung und Reparatur beauftragen'],
        ['Umgebungspflege', 'nach Pflegeplan pflegen', 'Pflegeplan freigeben'],
        ['Verbrauchsmaterial', 'nachfüllen, wo vereinbart', 'festlegen, wer es stellt'],
        ['Entsorgung', 'organisieren, Abfallplatz sauber halten', 'Standort und Zahl der Container bestimmen'],
      ],
      note:
        'Das OR sieht vor, dass die Eigentümerin eines Gebäudes für Schäden aus mangelhaftem Unterhalt haftet. Vorbehalten bleibt ihr der Rückgriff auf andere, die ihr dafür verantwortlich sind (Art. 58 OR). Deshalb sollte im Vertrag stehen, wer welche Aufgabe übernimmt, an wen Mängel gemeldet werden und wer entscheidet.',
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
          title: 'Laufende Verträge',
          items: [
            'Alle Verträge für Reinigung, Hauswartung, Umgebung und Glas zusammentragen',
            'Je Vertrag Kündigungsfrist, Endtermin und Verlängerungsklausel notieren',
            'Angestellter Hauswart: Nach Ablauf der Probezeit beträgt die Kündigungsfrist im ersten Dienstjahr einen Monat, im zweiten bis neunten zwei, danach drei Monate, jeweils auf Ende eines Monats. Andere Fristen gelten nur mit schriftlicher Abrede, Normal- oder Gesamtarbeitsvertrag (Art. 335c OR). Sperrfristen, etwa bei Krankheit oder Unfall, können die Frist verlängern (Art. 336c OR)',
          ],
        },
        {
          title: 'Kosten richtig zuordnen',
          items: [
            'Von jedem Anbieter die Kosten je Liegenschaft und je Leistung verlangen',
            'Vermietete Objekte: Nebenkosten trägt die Mieterschaft nur, wenn es im Mietvertrag besonders vereinbart ist, und nur in der Höhe der tatsächlichen Aufwendungen (Art. 257a und 257b OR)',
            'Stockwerkeigentum: Kosten für Teile, die einzelnen Einheiten nicht oder kaum dienen, etwa eine Einstellhalle, getrennt ausweisen lassen. Nach dem ZGB ist das bei der Verteilung zu berücksichtigen (Art. 712h Abs. 3 ZGB)',
          ],
        },
        {
          title: 'Vor dem Start',
          items: [
            'Stockwerkeigentum: klären, ob die Verwaltung den Vertrag abschliessen darf. Sie handelt nach Gesetz, Reglement und Beschlüssen der Versammlung, die übrigen Verwaltungsfragen entscheidet die Versammlung (Art. 712s Abs. 1 und 712m Abs. 1 Ziff. 1 ZGB). Den Verwaltervertrag ebenfalls prüfen',
            'Schlüssel, Badges und Codes der bisherigen Firmen zurücknehmen und auflisten',
            'Den bisherigen Firmen den letzten Einsatz und die Rückgabe bestätigen',
          ],
        },
        {
          title: 'Meldewege und Information',
          items: [
            'Meldeweg festlegen: wer Meldungen empfängt und bis zu welchem Betrag ohne Rückfrage repariert wird',
            'Mieterschaft oder Mitarbeitende informieren, wer ab welchem Datum zuständig ist',
            'Aushang im Eingang und Kontaktangaben für Meldungen erneuern',
            'Unternehmen: vor dem ersten Einsatz Gefahren und Schutzmassnahmen im Betrieb mit dem neuen Dienstleister besprechen (Art. 6 und 9 VUV)',
          ],
        },
      ],
      note: 'Diese Hinweise ersetzen keine Rechtsberatung. Klären Sie Fristen und Zuständigkeiten im Einzelfall anhand Ihrer Verträge und des Reglements.',
      sources: [
        { label: 'Obligationenrecht, Art. 335c (Kündigungsfristen im Arbeitsverhältnis)', href: `${or}#art_335_c` },
        { label: 'Obligationenrecht, Art. 336c (Kündigung zur Unzeit, Sperrfristen)', href: `${or}#art_336_c` },
        { label: 'Obligationenrecht, Art. 257a und 257b (Nebenkosten)', href: `${or}#art_257_a` },
        { label: 'Zivilgesetzbuch, Art. 712h (Kosten im Stockwerkeigentum)', href: `${zgb}#art_712_h` },
        { label: 'Zivilgesetzbuch, Art. 712m (Befugnisse der Versammlung)', href: `${zgb}#art_712_m` },
        { label: 'Zivilgesetzbuch, Art. 712s (Aufgaben des Verwalters)', href: `${zgb}#art_712_s` },
        { label: 'Verordnung über die Unfallverhütung (VUV), Art. 6 (Information der Arbeitnehmer)', href: `${vuv}#art_6` },
        { label: 'Verordnung über die Unfallverhütung (VUV), Art. 9 (Zusammenwirken mehrerer Betriebe)', href: `${vuv}#art_9` },
      ],
      printable: true,
      updated: '2026-09-29',
    },
  ],
  steps: [
    {
      title: 'Ein Vertrag für alle Leistungen',
      text: 'Im Vertrag steht jede Leistung mit Umfang, Rhythmus und Einsatzzeiten.',
    },
    {
      title: 'Übergabe zum Start',
      text: 'Zum Start übergeben Sie uns Schlüssel, Badges und Codes und zeigen uns Materialraum, Abfallplatz und Technikräume. Läuft ein bisheriger Vertrag länger, bleibt diese Leistung bis zu seinem Ende bei der bisherigen Firma.',
    },
    {
      title: 'Änderungen an einer Stelle',
      text: 'Kommt eine Liegenschaft dazu, ändert sich ein Rhythmus oder fällt eine Leistung weg, melden Sie es Ihrer Ansprechperson bei uns. Angepasst wird der eine Vertrag.',
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
        'Zuerst neu vergeben, dann kündigen. Wer die bisherigen Verträge vorher kündigt, riskiert eine Lücke, falls sich der neue Abschluss verzögert. Fristen, Kosten und Übergabe führt die Checkliste oben Punkt für Punkt auf.',
    },
    {
      question: 'Wovon hängen die Kosten für Facility Services ab?',
      answer:
        'Der Preis setzt sich aus den einzelnen Leistungen zusammen. Massgebend sind die Zahl und Grösse der Liegenschaften oder Standorte, die Flächen je Leistung, der Rhythmus von Reinigung und Kontrollgängen, der Umfang der Umgebung, die Einsatzzeiten, wer das Verbrauchsmaterial stellt und die Wege zwischen den Objekten. Einen Preis von der Stange gibt es deshalb nicht. Den Preis für Ihre Objekte erhalten Sie nach dem Rundgang schriftlich.',
    },
    {
      question: 'Reicht nicht auch eine Hauswartung?',
      answer:
        'Die [Hauswartung](/leistungen/hauswartung) deckt Kontrollgänge, Treppenhaus, Waschküche, Kleinreparaturen und Entsorgung ab. Kommen Büroreinigung, Fensterreinigung oder die Pflege grösserer Grünflächen dazu, passt ein gemeinsamer Vertrag besser.',
    },
    {
      question: 'Lassen sich mehrere Liegenschaften oder Standorte in einem Vertrag regeln?',
      answer:
        'Ja. Leistungen, Rhythmus und Einsatzzeiten lassen sich je Liegenschaft oder Standort festlegen. Ein Wohnhaus braucht anderes als ein Bürogebäude oder eine Lagerhalle, etwa die Reinigung des Treppenhauses am Vormittag und die der Büros am Abend nach Arbeitsschluss.',
    },
    {
      question: 'Was müssen wir als Unternehmen zur Arbeitssicherheit regeln?',
      answer:
        'Die Verordnung über die Unfallverhütung sieht vor, dass Sie auch Mitarbeitende eines anderen Betriebs, die bei Ihnen arbeiten, über die Gefahren und die Massnahmen der Arbeitssicherheit informieren und anleiten (Art. 6 VUV). Sind Mitarbeitende mehrerer Betriebe am selben Arbeitsplatz tätig, treffen deren Arbeitgeber die nötigen Absprachen (Art. 9 VUV). Mit einem Dienstleister für Reinigung, Hauswartung und Umgebung braucht es diese Absprache einmal statt dreimal.',
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
