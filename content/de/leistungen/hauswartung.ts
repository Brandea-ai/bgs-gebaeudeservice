import type { ServicePageContent } from '../../types'

// Grundlage: R3c (acht Aufgaben, ohne Winterdienst und Pikett), E29, E53 (keine Partner), W08, K02.
// Umbau E85 (28.09.2026) nach 25-AUDIT/inhalt.md 3.8: Werkzeugseite für Verwaltungen mit Pflichtenheft,
// Kontrollgang und der Frage, wer was erledigt und bezahlt. Rechtsquellen am 28.09.2026 gelesen:
// OR Art. 58, 256, 257a, 257b, 259 und ZGB Art. 647a, 647b, 712g, 712h, 712m, 712s (fedlex, Wortlaut über
// den Browser), BFU Werkeigentümerhaftung, VKF-Brandschutzrichtlinie 16-15 (Stand 01.12.2022, Ziffern 2.2
// und 2.5.5), Mieterverband (Kleiner Unterhalt, Merkblatt unzulässige Nebenkosten 2026), HEV Schweiz
// (Kleiner Unterhalt, Nebenkostenabrechnungen). Zweiter Durchgang nach den Prüfern: Kontrollgänge zählen
// beim Mieterverband nicht zu den Nebenkosten, Mehrheit im Stockwerkeigentum nach Art. 712g ZGB,
// Kostengrenze des kleinen Unterhalts wörtlich nach HEV und Mieterverband. Offene Kundenfragen F1, F2,
// F5, F7 bleiben unbeantwortet (keine Aussagen zu Qualitätskontrolle, Vertretung, Rapportblatt,
// Schlüsselprotokoll).
export const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Hauswartung für Wohn- und Geschäftshäuser',
  lead: [
    'Wir übernehmen die Hauswartung nach einem schriftlichen Pflichtenheft: welche Aufgaben, wie oft, bis zu welchem Betrag ohne Rückfrage und wer unsere Meldungen erhält.',
    'So wissen Verwaltung, Eigentümerschaft und Mieterschaft, was sie erwarten können, und niemand muss raten, wer sich um den Wasserfleck im Keller kümmert. Pflichtenheft und Checkliste für den Kontrollgang finden Sie unten zum Ausdrucken. Mit dem Pflichtenheft lassen sich auch mehrere Offerten Zeile für Zeile vergleichen.',
  ],
  facts: [
    { label: 'Objekte', value: 'Mehrfamilienhäuser, Stockwerkeigentum, Wohn- und Geschäftshäuser' },
    { label: 'Grundlage', value: 'Pflichtenheft mit Aufgaben, Rhythmus und Meldewegen' },
    { label: 'Kleinreparaturen', value: 'Bis zur Kostengrenze, die Sie im Pflichtenheft setzen' },
    { label: 'Nicht enthalten', value: 'Winterdienst, Pikett, Wartung der Anlagen' },
  ],
  scope: {
    title: 'Was die Hauswartung übernimmt',
    intro: 'Aus diesen Aufgaben entsteht das Pflichtenheft Ihrer Liegenschaft. Sie wählen, was Sie abgeben, auch einzeln.',
    items: [
      'Kontrollgänge im vereinbarten Rhythmus: nach dem Rechten sehen und Mängel melden',
      'Treppenhaus und Eingang reinigen und in Ordnung halten',
      'Waschküche und Trockenräume sauber halten',
      'Kleinreparaturen, etwa Leuchtmittel ersetzen',
      'Haustechnik im Blick behalten und Störungen melden',
      'Bei Wohnungsübergaben mitwirken',
      'Entsorgung von Abfall und Wertstoffen organisieren',
      'Umgebungspflege, mehr dazu unter [Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Winterdienst und Schneeräumung.',
      'Pikett- und Notfalldienst rund um die Uhr.',
      'Grössere Reparaturen und Handwerksarbeiten: Die vergibt die Verwaltung an einen Fachbetrieb.',
      'Wartung von Heizung, Lüftung, Lift und Brandschutzanlagen, dafür braucht es Fachfirmen.',
    ],
  },
  sections: [
    {
      title: 'Wann Sie die Hauswartung vergeben',
      paragraphs: [
        'Oft gibt es einen konkreten Anlass. Der langjährige Hauswart geht in Pension, eine Verwaltung übernimmt ein Haus ohne Hauswartung, oder in der Stockwerkeigentümerschaft will niemand mehr den Abfallplatz und die Waschküche im Auge behalten.',
        'Abgeben lassen sich Aufgaben, nicht Entscheide. Reparaturaufträge, die Wahl der Fachbetriebe und die Abnahme von Wohnungen bleiben bei Verwaltung oder Eigentümerschaft. Die Hauswartung liefert die Grundlage dafür: Sie sieht, was im Haus nicht stimmt, und meldet es der richtigen Stelle.',
      ],
    },
    {
      title: 'Was beim Kontrollgang passiert',
      paragraphs: [
        'Beim Kontrollgang geht die Hauswartung die Allgemeinflächen ab, vom Eingang über Keller und Waschküche bis zum Abfallplatz. Kleinigkeiten wie ein defektes Leuchtmittel erledigt sie selbst. Alles andere geht an die Stelle, die im Pflichtenheft steht.',
        'Regelmässige Kontrollgänge helfen, eine lose Stufenkante oder eine dunkle Kellertreppe zu bemerken, bevor jemand stürzt. Welche Punkte dazugehören und warum das für die Eigentümerschaft auch eine Haftungsfrage ist, zeigt die Checkliste weiter unten.',
      ],
    },
    {
      title: 'Haustechnik: hinsehen, nicht warten',
      paragraphs: [
        'Bei jedem Kontrollgang sieht die Hauswartung bei Heizung, Lüftung, Lift und Brandschutz hin und meldet, was auffällt: eine Störmeldung am Display der Heizung, einen tropfenden Hahn in der Waschküche, einen Lift, der nicht bündig hält. So kann die Verwaltung den Fachbetrieb aufbieten, solange die Störung noch klein ist.',
      ],
    },
    {
      title: 'Wohnungsübergaben',
      paragraphs: [
        'Beim Mieterwechsel kann die Hauswartung die Wohnung öffnen, Schlüssel übergeben und Zählerstände notieren. Abnahme und Protokoll bleiben bei der Verwaltung. Erfassen Sie diese Einsätze getrennt von der Reinigung; warum, zeigt die Tabelle zu Unterhalt und Nebenkosten weiter oben.',
        'Braucht die Wohnung vor der Übergabe eine Endreinigung, übernimmt das die [Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung).',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'pflichtenheft',
      title: 'Pflichtenheft Hauswartung als Vorlage',
      intro:
        'Tragen Sie je Bereich ein, wie oft und wer zuständig ist. Aus einer mündlichen Abmachung wird so ein Auftrag, den alle Beteiligten gleich verstehen.',
      columns: ['Bereich', 'Aufgaben', 'Wie oft', 'Zuständig oder Meldung an'],
      rows: [
        ['Liegenschaft', 'Adresse, Wohnungen, Treppenhäuser: ____________________', 'Beginn am __________', 'Ansprechperson ______________'],
        ['Kontrollgang', 'Beleuchtung, Türen, Briefkästen, Waschküche, Keller, Heizraum und Abfallplatz auf sichtbare Mängel prüfen, Befund festhalten', '__________', '______________'],
        ['Treppenhaus, Eingang und Waschküche', 'Böden, Geländer und Handläufe reinigen, Waschküche und Trockenräume sauber halten; abgestellte Gegenstände im Fluchtweg und Störungen an Maschinen melden', '__________', '______________'],
        ['Kleinreparaturen', 'Etwa Leuchtmittel ersetzen, Schlösser ölen; ohne Rückfrage bis CHF ______ je Fall', 'nach Bedarf', '______________'],
        ['Haustechnik', 'Heizung, Lüftung, Lift und Brandschutzeinrichtungen auf Störungen ansehen; die Wartung macht der Fachbetrieb', 'bei jedem Kontrollgang', '______________'],
        ['Entsorgung', 'Abfall und Wertstoffe organisieren, Sammelstelle sauber halten', '__________', '______________'],
        ['Umgebung', 'Rasen, Hecken, Beete, Wege und Plätze', 'nach Pflegeplan', '______________'],
        ['Wohnungsübergaben', 'Wohnung öffnen, Schlüssel übergeben, Zählerstände notieren; Abnahme und Protokoll macht die Verwaltung', 'nach Bedarf', 'Verwaltung'],
        ['Schlüssel und Material', 'Welche Schlüssel, Badges und Codes, wo aufbewahrt, wer die Übergabe quittiert; wer Material und Geräte stellt und wo sie lagern', 'einmal festlegen', '______________'],
        ['Fachbetriebe', 'Heizung, Lift, Brandschutz und grössere Reparaturen: wer beauftragt, wer bezahlt', 'einmal festlegen', 'Verwaltung'],
        ['Mieterschaft', 'An wen sich Mieterinnen und Mieter wenden und wie sie davon erfahren, etwa per Aushang im Eingang', 'einmal festlegen', '______________'],
        ['Ausdrücklich nicht enthalten', '____________________', 'entfällt', 'entfällt'],
      ],
      note:
        'Bei uns wird aus dieser Aufstellung nach dem Rundgang das Pflichtenheft Ihrer Liegenschaft. Bei Stockwerkeigentum genehmigt die Versammlung jedes Jahr Kostenvoranschlag, Rechnung und Verteilung der Kosten (Art. 712m ZGB). Ein Pflichtenheft zeigt ihr, wofür sie bezahlt.',
      sources: [
        { label: 'Art. 712g ZGB, Zuständigkeit für Verwaltungshandlungen im Stockwerkeigentum', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de#art_712_g' },
        { label: 'Art. 712m ZGB, Befugnisse der Versammlung der Stockwerkeigentümer', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de#art_712_m' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'kontrollgang',
      title: 'Checkliste für den Kontrollgang',
      intro:
        'Der Eigentümer eines Gebäudes ersetzt den Schaden, den es infolge mangelhafter Unterhaltung verursacht (Art. 58 OR). Die BFU rät Werkeigentümern deshalb, regelmässig zu kontrollieren, die Kontrollen zu dokumentieren und nötige Reparaturen auszuführen.',
      groups: [
        {
          title: 'Eingang und Treppenhaus',
          items: [
            'Licht in Eingang, Treppenhaus und Korridoren brennt, Zeitschalter und Bewegungsmelder reagieren',
            'Stufen, Stufenkanten und Bodenbeläge ohne Stolperstellen, Handläufe fest',
            'Fluchtweg frei: keine Velos, Möbel oder brennbaren Gegenstände im Treppenhaus (VKF 16-15, Ziffer 2.2)',
            'Haustüre schliesst und lässt sich in Fluchtrichtung ohne Schlüssel öffnen (VKF 16-15, Ziffer 2.5.5)',
            'Briefkästen und Klingeltableau intakt',
          ],
        },
        {
          title: 'Keller, Waschküche und Haustechnik',
          items: [
            'Waschmaschinen und Tumbler ohne Fehlermeldung, Abläufe frei',
            'Keine Wasserflecken, Feuchtigkeit oder tropfenden Hähne',
            'Heizung ohne Störmeldung, Heizraum aufgeräumt und verschlossen',
            'Lift hält bündig, falls vorhanden',
            'Feuerlöscher am Platz und plombiert, falls vorhanden',
          ],
        },
        {
          title: 'Umgebung und Abfallplatz',
          items: [
            'Aussenbeleuchtung brennt, Wege und Treppen ohne Stolperstellen',
            'Geländer, Tore und Zäune fest',
            'Abfallplatz sauber, Container vollständig und geschlossen',
            'Spielgeräte ohne sichtbare Schäden, falls vorhanden',
          ],
        },
        {
          title: 'Festhalten',
          items: [
            'Datum und Name: ____________________',
            'Befund und Ort: ____________________',
            'Gemeldet an, am: ____________________',
            'Erledigt am, durch: ____________________',
          ],
        },
      ],
      note:
        'Diese Liste ersetzt keine Rechtsberatung. Welche Kontrollen und welcher Rhythmus Ihre Liegenschaft braucht, klären Sie im Einzelfall, etwa mit Ihrer Versicherung.',
      sources: [
        { label: 'Art. 58 OR, Haftung des Werkeigentümers', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_58' },
        { label: 'BFU: Was bedeutet Werkeigentümerhaftung?', href: 'https://www.bfu.ch/de/services/rechtsfragen/was-bedeutet-werkeigentuemerhaftung' },
        { label: 'VKF-Brandschutzrichtlinie 16-15 Flucht- und Rettungswege (PDF)', href: 'https://services.vkg.ch/rest/public/georg/bs/publikation/documents/BSPUB-1394520214-85.pdf/content' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'wer-bezahlt',
      title: 'Kleiner Unterhalt und Nebenkosten: wer erledigt, wer bezahlt',
      intro:
        'Bei jeder Aufgabe zählt zweierlei: wer sie erledigt und ob die Kosten über die Nebenkosten laufen dürfen. Nebenkosten schuldet die Mieterschaft nur, wenn der Mietvertrag sie besonders vereinbart (Art. 257a OR), und nur für Leistungen, die mit dem Gebrauch zusammenhängen (Art. 257b OR).',
      columns: ['Aufgabe', 'Wer erledigt', 'Wer bezahlt'],
      rows: [
        ['Glühbirne in der eigenen Wohnung ersetzen, Siphon am Lavabo entstopfen', 'Mieterschaft', 'Mieterschaft, als kleiner Unterhalt nach Ortsgebrauch (Art. 259 OR)'],
        ['Treppenhaus, Waschküche und Umgebung reinigen', 'Hauswartung', 'Über die Nebenkosten, wenn der Mietvertrag die Hauswartung als Position nennt, sonst mit dem Mietzins abgegolten'],
        ['Leuchtmittel in Treppenhaus und Keller ersetzen, Schlösser ölen', 'Hauswartung', 'Wie die Reinigung, solange keine Fachkenntnisse nötig sind'],
        ['Kontrollgang auf Mängel, Störungen der Verwaltung melden', 'Hauswartung', 'Eigentümerschaft: Der Mieterverband zählt Kontrollgänge für Reparaturen und Meldungen an die Verwaltung nicht zu den Nebenkosten'],
        ['Wohnung zur Übergabe oder Besichtigung öffnen', 'Hauswartung, im Auftrag der Verwaltung', 'Eigentümerschaft: Der Mieterverband zählt diese Arbeiten nicht zu den Nebenkosten'],
        ['Reparatur, die eine Fachperson braucht, etwa die Hauptleitung entstopfen', 'Fachbetrieb, beauftragt von der Verwaltung', 'Eigentümerschaft, denn sie muss die Mietsache in tauglichem Zustand erhalten (Art. 256 OR)'],
      ],
      note:
        'Wo der kleine Unterhalt endet, sagt das Gesetz nicht. Als verbreitete Kostengrenze nennt der HEV Schweiz CHF 150 bis 250 je Fall, der Mieterverband CHF 150 für Material. Nach dem Mieterverband fragen Gerichte zunehmend, ob die Arbeit Fachkenntnisse braucht. Er rät der Mieterschaft zudem, Auskunft über die Tätigkeiten der Hauswartung und den Aufwand in Stunden zu verlangen. Ein Pflichtenheft, das Betrieb und Reparaturen trennt, macht Ihre Abrechnung belegbar. Dieser Hinweis ersetzt keine Rechtsberatung.',
      sources: [
        { label: 'Art. 256, 257a, 257b und 259 OR', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_256' },
        { label: 'Mieterinnen- und Mieterverband: Kleiner Unterhalt', href: 'https://www.mieterverband.ch/mietrecht/waehrend-der-miete/kleiner-unterhalt/' },
        { label: 'Mieterinnen- und Mieterverband: Merkblatt unzulässige Nebenkosten 2026 (PDF)', href: 'https://www.mieterverband.ch/upd_fm_media/ratgeber-mietrecht/topthemen/heiz-und-nebenkosten/2026_merkblatt_unzulaessige_nebenkosten.pdf/' },
        { label: 'HEV Schweiz: Kleiner Unterhalt', href: 'https://www.hev-schweiz.ch/vermieten/mietrecht/mietvertrag/kleiner-unterhalt' },
        { label: 'HEV Schweiz: Nebenkostenabrechnungen', href: 'https://www.hev-schweiz.ch/vermieten/nebenkostenabrechnungen' },
      ],
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Pflichtenheft bereinigen',
      text: 'Grundlage ist die schriftliche Aufstellung nach dem Rundgang. Sie streichen oder ergänzen Aufgaben, setzen die Kostengrenze für Kleinreparaturen und nennen die Stelle, die Meldungen erhält.',
      figure: 'offerte',
    },
    {
      title: 'Start im Haus',
      text: 'Am Starttermin erhält die Hauswartung die Schlüssel und Zugänge aus dem Pflichtenheft. Sagen Sie der Mieterschaft, etwa mit einem Aushang im Eingang, an wen sie sich ab jetzt wendet.',
      figure: 'start',
    },
    {
      title: 'Kontrollgänge im Rhythmus',
      text: 'Die Hauswartung geht im Rhythmus des Pflichtenhefts durchs Haus, vom Eingang bis zum Heizraum, und erledigt Kleinigkeiten gleich selbst.',
      figure: 'besichtigung',
    },
    {
      title: 'Melden und nachführen',
      text: 'Was einen Fachbetrieb braucht, geht an die vereinbarte Stelle. Braucht die Liegenschaft später mehr oder weniger, wird das Pflichtenheft angepasst.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'Was gehört zur Hauswartung?',
      answer:
        'Im Kern drei Dinge: die Allgemeinflächen sauber halten, regelmässig kontrollieren und Kleinigkeiten beheben, Störungen an die richtige Stelle melden. Je nach Liegenschaft kommen Entsorgung, Umgebung und Wohnungsübergaben dazu. Was davon Sie abgeben, steht im Pflichtenheft.',
    },
    {
      question: 'Wovon hängen die Kosten einer Hauswartung ab?',
      answer:
        'Den Betrag bestimmen vor allem die Zahl der Wohnungen und Treppenhäuser, der Rhythmus von Kontrollgängen und Reinigung, die Fläche der Umgebung, die Zahl der Wohnungswechsel im Jahr und wer das Material stellt. Wir rechnen ihn, nachdem wir die Liegenschaft gesehen haben. Für die Nebenkostenabrechnung weisen Sie Reinigung und kleine Instandhaltungen am besten getrennt von Kontrollgängen, Wohnungsübergaben und Reparaturen aus. Warum, zeigt die Tabelle oben.',
    },
    {
      question: 'Reicht für das Treppenhaus nicht eine Unterhaltsreinigung?',
      answer:
        'Wenn nur gereinigt werden soll, ja: Dann passt die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung). Eine Hauswartungsfirma braucht es, sobald jemand auch Mängel sehen, Kleinigkeiten beheben und Störungen weitergeben soll.',
    },
    {
      question: 'Wie oft sollte die Hauswartung vorbeikommen?',
      answer:
        'Art. 58 OR nennt keinen Rhythmus. Es kommt auf Grösse, Alter und Nutzung an: Ein Haus mit Lift, Gemeinschaftswaschküche und vielen Wohnungswechseln braucht mehr Präsenz als ein kleines Stockwerkeigentum. Der Rhythmus steht im Pflichtenheft und lässt sich anpassen.',
    },
    {
      question: 'Was muss die Mieterschaft selbst beheben?',
      answer:
        'Mängel in der eigenen Wohnung, die sich ohne Fachperson mit kleinen Reinigungen oder Ausbesserungen beheben lassen, nach Ortsgebrauch (Art. 259 OR). HEV Schweiz und Mieterverband zählen dazu auch den Ersatz von Kleinteilen wie Backblechen oder Duschschläuchen, selbst wenn ihre Lebensdauer abgelaufen ist. Erledigt sein muss das spätestens bei der Wohnungsabgabe. Die Tabelle oben zeigt die Abgrenzung zur Hauswartung.',
    },
    {
      question: 'Wie sollten Kontrollgänge dokumentiert werden?',
      answer:
        'So, dass sich später zeigen lässt, wann was geprüft, gemeldet und erledigt wurde. Die Checkliste oben hat dafür Schreibfelder zum Ausfüllen. Ein Foto vom Befund zeigt später, wie es vorher aussah, und die Rechnung der Reparatur, dass der Mangel behoben wurde.',
    },
    {
      question: 'Wer entscheidet bei Stockwerkeigentum über die Hauswartung?',
      answer:
        'Die Versammlung entscheidet in allen Verwaltungsangelegenheiten, die nicht dem Verwalter zustehen (Art. 712m ZGB); der Verwalter vollzieht ihre Beschlüsse (Art. 712s ZGB). Für die Zuständigkeit und die nötigen Mehrheiten verweist Art. 712g ZGB auf die Regeln zum Miteigentum (Art. 647a und 647b ZGB). Eine andere Ordnung gilt nur, wenn sie im Begründungsakt steht oder einstimmig beschlossen wurde. Klären Sie im Einzelfall, was für Ihre Gemeinschaft gilt. Die Kosten tragen die Eigentümer grundsätzlich nach ihren Wertquoten (Art. 712h ZGB).',
    },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Wenn Rasen, Hecken und Beete einen eigenen Pflegeplan brauchen.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn im Haus nur gereinigt werden soll, ohne Kontrollgänge und Kleinreparaturen.' },
    { path: '/leistungen/facility-services', text: 'Wenn Sie Reinigung, Hauswartung und Umgebung nicht einzeln vergeben möchten.' },
  ],
  cta: {
    title: 'Pflichtenheft und Offerte für Ihre Liegenschaft',
    text: 'Für die Offerte brauchen wir die Adresse, die Zahl der Wohnungen und Treppenhäuser und die Aufgaben, die Sie abgeben möchten. Liegt schon ein Pflichtenheft vor, erwähnen Sie es in der Nachricht. Rundgang und Offerte sind kostenlos und unverbindlich.',
  },
}
