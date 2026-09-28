import type { ServicePageContent } from '../../types'

// Grundlage: R3a (Industrie, Hallen, Maschinen), R10b, E17 (Abschnitt Maschinen), K04, keine Normzusagen ohne Beleg.
// Umbau E85 (28.09.2026): 25-AUDIT/inhalt.md 3.7 (Bausteine 3.7.1 bis 3.7.3), seo.md T2/T4, keywords-mehrsprachig.md.
// Rechtsaussagen geprüft am 28.09.2026 an der Primärquelle: VUV SR 832.30 (Stand 1. Mai 2018) Art. 6, 9, 19, 43;
// GSchG SR 814.20 (Stand 1. August 2025) Art. 6, 7; Suva 84040 (Regeln 3 und 4) und 67075.
export const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'Produktion, Lager und Werkstatt',
  h1: 'Industriereinigung und Hallenreinigung für Produktion und Lager',
  lead: [
    'Auf Hallenböden bleiben Späne, Reifenabrieb und Ölfilme liegen, an Maschinen setzen sich Staub und Kühlschmierstoff fest. Stillstehen kann die Halle für die Reinigung selten.',
    'Deshalb bekommt jede Zone ihren eigenen Takt: Fahrgassen zwischen den Schichten, Sozialräume ausserhalb der Pausen, Maschinen im geplanten Stillstand. An einer Anlage beginnt die Reinigung erst, wenn sie abgeschaltet und gegen Wiedereinschalten gesichert ist.',
  ],
  facts: [
    { label: 'Für', value: 'Produktions-, Logistik- und Gewerbebetriebe mit Hallen und Werkstätten' },
    { label: 'Einsatzzeiten', value: 'Zwischen Schichten, in Pausen, an Stillstandstagen und in Betriebsferien' },
    { label: 'Vor dem ersten Einsatz', value: 'Sicherheits-Übergabe mit Ihrer Instandhaltung' },
    { label: 'Nicht enthalten', value: 'Wartung und Reparatur von Maschinen' },
  ],
  scope: {
    title: 'Umfang in Halle und Werkstatt',
    intro: 'Typisch für einen Auftrag in Produktion und Lager:',
    items: [
      'Hallen- und Produktionsböden aus Beton, mit Beschichtung oder aus Industrieparkett',
      'Lagerbereiche, Regale und Fahrgassen',
      'Maschinen und Anlagen, gesichert und nach Vorgabe Ihrer Instandhaltung',
      'Werkstätten und Nebenräume, Sozialräume, Garderoben und Sanitärräume',
    ],
    notIncluded: [
      'Wartung und Reparatur von Maschinen: Das bleibt Sache Ihrer Instandhaltung oder des Herstellers.',
      'Büros, Empfang und Sitzungszimmer im selben Gebäude: dafür gibt es die [Büroreinigung](/leistungen/bueroreinigung).',
      'Plätze, Grünflächen und Zufahrten rund um die Halle: siehe [Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege).',
    ],
  },
  sections: [
    {
      title: 'Hallenböden und Fahrgassen',
      paragraphs: [
        'Grosse Hallenflächen reinigt eine Scheuersaugmaschine. Sie schrubbt und nimmt das Schmutzwasser im selben Zug wieder auf, der Boden ist nach kurzer Zeit wieder begehbar und befahrbar. In schmalen Gängen zwischen Palettenregalen braucht es ein kleineres Gerät oder Handarbeit.',
        'Das Mittel richtet sich nach Belag und Schmutz. Unversiegelter Beton saugt Öl auf, Beschichtungen aus Epoxid- oder Polyurethanharz sind dicht, können mit zu groben Pads aber stumpf werden. Industrieparkett verträgt nur wenig Wasser. Öllachen werden zuerst mit Bindemittel aufgenommen, sonst verteilt die Maschine den Film über die ganze Fahrgasse.',
      ],
    },
    {
      title: 'Späne, Öl und Kühlschmierstoff an Maschinen',
      paragraphs: [
        'Rund um Werkzeugmaschinen sammeln sich Späne auf Abdeckungen, im Sockelbereich und am Boden, dazu Kühlschmierstoff und Staub aus der Bearbeitung. Späne gehören in den Industriesauger. Mit Druckluft weggeblasen, landen sie tiefer in der Maschine oder im nächsten Gang.',
        'Was an einer Anlage gereinigt wird, bestimmt Ihre Instandhaltung: Aussenflächen, Wannen und Abdeckungen oder auch Innenräume, die nur im Stillstand zugänglich sind. Welche Mittel eine Oberfläche verträgt, steht meist in der Betriebsanleitung des Herstellers.',
        'Die Verordnung über die Unfallverhütung sieht vor, dass Maschinen vor dem Reinigen in einen nicht gefährdenden Zustand versetzt sind. Wie das in Ihrem Betrieb geschieht, klärt die Sicherheits-Übergabe unten.',
      ],
    },
    {
      title: 'Typische Anlässe in Produktion und Lager',
      items: [
        'Audit, Zertifizierung oder Kundenbesuch: Reinigung mit Abstand zum Termin, siehe Checkliste unten',
        'Betriebsferien und Revisionen: Grundreinigung von Böden, Regalen und Maschinen, solange alles steht',
        'Umstellung der Produktion oder neue Linie: Reinigung, bevor die Anlage eingerichtet wird',
        'Mieterwechsel einer Gewerbehalle: Reinigung vor der Übergabe, im Auftrag der Eigentümerschaft oder Verwaltung',
        'Feste Reinigungszeiten statt Putzen nebenbei, wenn heute die Belegschaft selbst reinigt',
      ],
    },
  ],
  tools: [
    {
      kind: 'checklist',
      id: 'sicherheits-uebergabe',
      title: 'Sicherheits-Übergabe vor dem ersten Einsatz',
      intro:
        'Arbeiten Mitarbeitende mehrerer Betriebe am selben Ort, müssen sich die Arbeitgeber über Gefahren und Schutzmassnahmen absprechen und gegenseitig informieren (VUV Art. 9). Maschinen müssen vor dem Reinigen in einen nicht gefährdenden Zustand versetzt sein (Art. 43). Mit dieser Liste gehen Sie beides mit Ihrer Instandhaltung durch.',
      groups: [
        {
          title: 'Maschinen und Anlagen',
          items: [
            'Wer schaltet die Anlage ab und sichert sie gegen Wiedereinschalten, etwa mit einem Vorhängeschloss am Revisionsschalter?',
            'Sind Restenergien abgebaut: Druck in Pneumatik und Hydraulik, Wärme, nachlaufende oder angehobene Teile?',
            'Welche Teile darf das Reinigungsteam berühren, welche bleiben der Instandhaltung vorbehalten?',
            'Welche Mittel und Verfahren sind für die Oberflächen freigegeben: Wasser, Hochdruck, Lösemittel?',
            'Wer prüft die Anlage nach der Reinigung und gibt sie wieder frei?',
          ],
        },
        {
          title: 'Halle und Verkehr',
          items: [
            'Welche Schutzausrüstung ist in welchem Bereich Pflicht, etwa Sicherheitsschuhe, Gehörschutz oder Warnweste?',
            'Wo und wann fahren Stapler, und welche Wege bleiben während der Reinigung offen?',
            'Welche Bereiche sind gesperrt oder nur in Begleitung zugänglich?',
            'Wie werden nasse Flächen abgesperrt, bis sie trocken sind?',
          ],
        },
        {
          title: 'Stoffe und Schmutzwasser',
          items: [
            'Welche Gefahrstoffe werden im Bereich gelagert oder verarbeitet, und wo liegen die Sicherheitsdatenblätter?',
            'Wo darf das Schmutzwasser der Scheuersaugmaschine ausgeleert werden? Ölhaltiges Wasser gehört nicht in einen Schacht, der in die Versickerung oder in ein Gewässer führt (GSchG Art. 6 und 7).',
            'Wo werden ölgetränkte Bindemittel und Putzlappen gesammelt, und wer entsorgt sie?',
          ],
        },
        {
          title: 'Ansprechpersonen und Notfall',
          items: [
            'Wer ist während des Einsatzes im Betrieb erreichbar, auch ausserhalb der Bürozeiten?',
            'Wo liegen Notausgänge, Feuerlöscher, Erste-Hilfe-Material und Augendusche?',
            'Wem wird ein Schaden, eine Störung oder ein Beinaheunfall gemeldet?',
          ],
        },
      ],
      note: 'Die Liste ersetzt weder die Gefährdungsermittlung Ihres Betriebs noch die Instruktion vor Ort. Klären Sie im Einzelfall, welche Regeln Ihrer Branche zusätzlich gelten.',
      sources: [
        { label: 'Verordnung über die Verhütung von Unfällen und Berufskrankheiten (VUV, SR 832.30), Art. 9 und 43', href: 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/de#art_9' },
        { label: 'Suva: Acht lebenswichtige Regeln für die Instandhaltung (Regeln 3 und 4)', href: 'https://www.suva.ch/de-ch/praevention/lebenswichtige-regeln-und-bestimmungen/lebenswichtige-regeln-am-arbeitsplatz/filme-lebenswichtige-regeln-instandhaltung' },
        { label: 'Suva: Checkliste Unerwarteter Anlauf von Maschinen und Anlagen (67075)', href: 'https://www.suva.ch/67075.D' },
        { label: 'Gewässerschutzgesetz (GSchG, SR 814.20), Art. 6 und 7', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/de#art_6' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zonenplan',
      title: 'Reinigungsplan nach Zonen (Beispiel)',
      intro:
        'Eine Halle hat Zonen mit ganz unterschiedlichem Takt. So kann der Plan für eine Produktions- oder Lagerhalle aussehen; Rhythmus und Zeitfenster richten sich bei Ihnen nach Schichten, Verkehr und Anfall.',
      columns: ['Zone', 'Typische Verschmutzung', 'Rhythmus (Beispiel)', 'Zeitfenster', 'Worauf achten'],
      rows: [
        ['Fahrgassen und Verkehrswege', 'Staub, Reifenabrieb, verlorene Späne', 'täglich bis wöchentlich, je nach Staplerverkehr', 'zwischen den Schichten, abschnittsweise', 'Bodenmarkierungen sichtbar halten, nasse Abschnitte absperren'],
        ['Produktion', 'Späne, Öl- und Fettfilme, Kühlschmierstoff', 'nach Anfall', 'Pausen, Schichtwechsel, Stillstandstage', 'Öllachen zuerst binden, erst dann nass reinigen'],
        ['Lager und Regale', 'Staub auf Boden, Traversen und Ware', 'in grösseren Abständen, etwa monatlich bis vierteljährlich', 'Zeiten mit wenig Ein- und Auslagerung', 'Ware nur mit Freigabe verschieben, in der Höhe nur mit geeigneten Hilfsmitteln'],
        ['Sozialräume, Garderoben, Sanitär', 'Hygiene, Verbrauchsmaterial', 'an jedem Arbeitstag', 'ausserhalb der Pausen', 'Seife und Papier auffüllen, Tücher für WC und Küche getrennt'],
        ['Maschinen und Anlagen', 'Ablagerungen, Späne, Staub aus der Bearbeitung', 'nach Vorgabe der Instandhaltung', 'geplante Stillstände, Revisionen, Betriebsferien', 'nur abgeschaltet und gesichert, nur freigegebene Mittel'],
      ],
      note: 'Oft sinnvoll ist eine Kombination: laufende Reinigung nach diesem Plan und eine Grundreinigung von Böden, Regalen und Maschinen in den Betriebsferien, wenn alles steht.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'vor-dem-audit',
      title: 'Vor einem Audit oder Kundenbesuch',
      intro:
        'Ein Rundgang führt meist über die Fahrwege, durch Produktion und Lager und in die Sozialräume. Planen Sie die Reinigung in zwei Etappen, damit am Tag selbst nichts mehr nass oder abgesperrt ist.',
      groups: [
        {
          title: 'Eine Woche vorher',
          items: [
            'Route des Rundgangs bestimmen: Anlieferung, Produktion, Lager, Sozialräume',
            'Reinigungstermin so wählen, dass die Böden vor dem Rundgang trocken und frei sind',
            'Maschinenoberflächen im nächsten geplanten Stillstand reinigen lassen, nicht am Audittag',
            'Regale, Ablagen und Fenstersimse entlang der Route abstauben',
          ],
        },
        {
          title: 'Am Tag davor',
          items: [
            'Verkehrswege frei und Bodenmarkierungen gut sichtbar; die VUV verlangt, dass Verkehrswege wenn nötig bezeichnet sind (Art. 19)',
            'Keine Öl- oder Fettfilme auf Böden, auf denen Personen gehen',
            'Notausgänge und Fluchtwege frei, nichts davor abgestellt',
            'Sozial- und Sanitärräume gereinigt, Seife und Papier aufgefüllt',
            'Abfall- und Wertstoffbehälter geleert, Umgebung der Mulden sauber',
          ],
        },
      ],
      sources: [
        { label: 'Verordnung über die Verhütung von Unfällen und Berufskrankheiten (VUV, SR 832.30), Art. 19', href: 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/de#art_19' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Plan nach Zonen',
      text: 'Jede Zone erhält Rhythmus und Zeitfenster, passend zu Schichten, Staplerverkehr und Stillständen. Der Beispielplan oben zeigt, wie das aussehen kann.',
      figure: 'besichtigung',
    },
    {
      title: 'Sicherheits-Übergabe',
      text: 'Vor dem ersten Einsatz gehen Ihre Instandhaltung und unser Team die Checkliste durch: Abschaltung, Schutzausrüstung, Fahrwege, freigegebene Mittel.',
      figure: 'offerte',
    },
    {
      title: 'Einsätze im Takt des Betriebs',
      text: 'Gereinigt wird in den vereinbarten Zeitfenstern. Ändern sich Schichten oder Linien, wird der Plan vor dem nächsten Einsatz angepasst.',
      figure: 'start',
    },
  ],
  faq: [
    {
      question: 'Was kostet eine Industriereinigung?',
      answer:
        'Den Preis bestimmen vor allem die Fläche und die Zahl der Zonen, die Art des Schmutzes (Staub ist schneller entfernt als Öl oder festgesetzter Kühlschmierstoff), der Bodenbelag und ob eine Scheuersaugmaschine durchkommt. Dazu kommen die Zeitfenster, etwa Einsätze ausserhalb der üblichen Arbeitszeiten oder in kurzen Stillständen, sowie Zahl und Zugänglichkeit der Maschinen. Eine Zahl nennen wir nach dem Rundgang durch die Halle.',
    },
    {
      question: 'Können Sie während des laufenden Betriebs reinigen?',
      answer:
        'In vielen Zonen ja. Fahrgassen, Lager und Sozialräume lassen sich meist im Betrieb reinigen, abschnittsweise und mit abgesperrten Nassflächen. Bereiche direkt an laufenden Anlagen kommen in Pausen, zwischen Schichten oder bei Stillständen an die Reihe.',
    },
    {
      question: 'Wer schaltet die Maschinen vor der Reinigung ab?',
      answer:
        'Das regelt die Sicherheits-Übergabe vor dem ersten Einsatz, Anlage für Anlage. Die Verordnung über die Unfallverhütung verlangt, dass Maschinen vor dem Reinigen in einen nicht gefährdenden Zustand versetzt sind (VUV Art. 43) und dass sich die beteiligten Betriebe absprechen (Art. 9). Wer abschaltet, sichert und wieder freigibt, steht danach für jede Anlage fest.',
    },
    {
      question: 'Welche Regeln gelten für Ihr Team in unserer Halle?',
      answer:
        'Ihre Sicherheits- und Betriebsregeln, von den Staplergassen bis zur Schutzbrille an der Maschine. Nach VUV Art. 6 informiert Ihr Betrieb auch Mitarbeitende anderer Firmen über die Gefahren am Arbeitsplatz. Am einfachsten geschieht das bei der Sicherheits-Übergabe.',
    },
    {
      question: 'Wie wird ein ölverschmutzter Hallenboden gereinigt?',
      answer:
        'Öllachen werden zuerst mit Bindemittel aufgenommen. Danach reinigt die Scheuersaugmaschine die Fläche mit einem fettlösenden Mittel, das zum Belag passt. Das Schmutzwasser enthält dann Öl und darf nicht in einen Schacht, der in die Versickerung oder in ein Gewässer führt (Gewässerschutzgesetz Art. 6).',
    },
    {
      question: 'Wie oft sollte eine Produktionshalle gereinigt werden?',
      answer:
        'Nicht die Halle, sondern jede Zone hat ihren Rhythmus. Sozial- und Sanitärräume brauchen Pflege an jedem Arbeitstag, Fahrgassen je nach Verkehr täglich bis wöchentlich, Regale und Maschinen in grösseren Abständen oder im Stillstand. Der Beispielplan auf dieser Seite zeigt eine typische Aufteilung.',
    },
    {
      question: 'Wie bereiten wir die Halle auf ein Audit vor?',
      answer:
        'Mit genügend Abstand: Böden sollten vor dem Rundgang trocken und frei sein, Maschinen im letzten geplanten Stillstand davor gereinigt. Die Checkliste «Vor einem Audit oder Kundenbesuch» auf dieser Seite teilt die Punkte in eine Woche vorher und den Tag davor.',
    },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Nach dem Bau oder Umbau einer Halle, bevor Regale und Anlagen einziehen.' },
    { path: '/leistungen/bueroreinigung', text: 'Für Büros, Empfang und Sitzungszimmer im selben Gebäude, mit eigenem Rhythmus.' },
    { path: '/leistungen/facility-services', text: 'Wenn neben der Halle auch Hauswartung und Umgebung des Areals bei einem Anbieter liegen sollen.' },
  ],
  cta: {
    title: 'Offerte für Ihre Halle',
    text: 'Für die Offerte helfen uns die Hallenfläche in Quadratmetern, die Bodenbeläge, Schichtzeiten und geplante Stillstände sowie eine Liste der Maschinen, die gereinigt werden sollen. Ein Grundriss mit den Zonen spart Zeit beim Rundgang. Besichtigung und Offerte sind kostenlos und unverbindlich.',
  },
}
