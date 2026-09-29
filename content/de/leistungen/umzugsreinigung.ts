import type { ServicePageContent } from '../../types'

// Grundlage: E56 (Abnahmegarantie bestätigt, Wortlaut unverändert), E28 und E81 (nicht für Mieter),
// E18 (keine Preise, keine neuen Zusagen), 25-AUDIT/inhalt.md 3.4 (Bausteine 3.4.1 bis 3.4.3),
// seo.md T1 Variante A, keywords-mehrsprachig.md. Werkzeuge nach E85.
// Quellen am 28.09.2026 gelesen: OR Art. 255, 264, 266, 266a, 266c, 266d, 267, 267a auf Fedlex (Stand 1.1.2026),
// ZPO Art. 200 und 201 auf Fedlex (Stand 1.7.2026), Zürcher Gerichte (Mängelrüge), zg.ch (FAQ Mietrecht),
// ow.ch (Schlichtungsbehörde), gruezi.lu.ch, gerichte.lu.ch (Schlichtungsbehörde Miete und Pacht),
// ag.ch und nw.ch (Schlichtungsbehörden), HEV Schweiz und Mieterverband (Lebensdauertabelle).
// Ortsübliche Termine nennen nur die Seiten von Zug und Obwalden. Für Luzern, Aargau und Nidwalden nennt die
// Tabelle keine Termine, sondern die Schlichtungsbehörde (Rechtsberatung nach Art. 201 Abs. 2 ZPO).
// Prüferbefunde Runde 2 (U1 bis U9) eingearbeitet: keine eigene Geltungsregel für die Garantie (E18, E56).
export const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'Wohnungswechsel und Rückgabe',
  h1: 'Umzugsreinigung und Endreinigung mit Abnahmegarantie',
  lead: [
    'Bei der Rückgabe einer Wohnung prüft die Verwaltung Raum für Raum, vom Backofen bis zum Kellerabteil, und hält jeden Mangel im Protokoll fest. Zwischen Abnahmeprotokoll und Einzug der neuen Mieterschaft bleibt für die Reinigung meist wenig Zeit, und der Einzugstermin steht fest.',
    'Wir übernehmen die Endreinigung von Wohnungen und Geschäftsflächen für Verwaltungen, Eigentümer und Unternehmen, mit Abnahmegarantie. Auf dieser Seite finden Sie dazu die Abnahme-Checkliste zum Ausdrucken, die Regeln zur Mängelrüge sowie die Kündigungstermine für Zug und Obwalden mit Hinweisen für Luzern, Aargau und Nidwalden.',
  ],
  facts: [
    { label: 'Garantie', value: 'Nachreinigung bei Beanstandung unserer Reinigung, nicht für Schäden oder Abnutzung' },
    { label: 'Zeitpunkt', value: 'Vor der Abnahme oder, für Verwaltungen, nach dem Abnahmeprotokoll' },
    { label: 'Anfragen', value: 'Sobald die Kündigung eingegangen ist' },
    { label: 'Nicht für', value: 'Mieterinnen und Mieter einzelner Wohnungen' },
  ],
  scope: {
    title: 'Was zur Endreinigung gehört',
    intro: 'Typisch für die Endreinigung einer Wohnung sind:',
    items: [
      'Küche: Backofen samt Blechen, Kochfeld, Dampfabzug, Kühlschrank und Schränke, innen und aussen',
      'Bad und WC: Armaturen, Plättli, Fugen und Spiegel, von Kalk befreit',
      'Fenster innen und aussen, mit Rahmen, Falzen und Fensterbänken',
      'Storen und Fensterläden, soweit vereinbart',
      'Einbauschränke, Türen, Zargen, Schalter und Steckdosen',
      'Böden und Sockelleisten in allen Räumen',
      'Balkon oder Sitzplatz, Keller- und Estrichabteil',
    ],
    notIncluded: [
      'Aufträge von Mieterinnen und Mietern einzelner Wohnungen. Villen und Residenzen betreuen wir im [Premium-Bereich](/premium).',
      'Umzugstransport, Räumung und Entsorgung von Möbeln.',
      'Reparaturen, Malerarbeiten und das Beheben von Schäden, auch wenn sie im Abnahmeprotokoll stehen.',
      'Grundreinigung ohne Wohnungswechsel, etwa von Böden oder Plättli: siehe [Grund- und Sonderreinigung](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'Die Abnahmegarantie und ihre Grenze',
      paragraphs: [
        'Beanstandet die Verwaltung bei der Abnahme etwas an unserer Reinigung, reinigen wir kostenlos nach. Die Einzelheiten stehen in der Offerte.',
        'Die Garantie bezieht sich auf unsere Reinigung. Schäden, Abnutzung oder Reparaturen, die bei der Abnahme festgehalten werden, betreffen nicht die Reinigung und gehören deshalb nicht dazu.',
        'Typische Beanstandungen an der Reinigung sind ein Fettfilm im Backofen oder Kalk an der Armatur. Ist dagegen die Oberfläche selbst beschädigt, ist das ein Schaden: etwa angegriffenes Chrom, ein Brandfleck im Parkett oder ein Kratzer im Kochfeld. Ihn behebt keine Nachreinigung, dafür braucht es Handwerker.',
      ],
    },
    {
      title: 'Mieterwechsel, Verkauf, Rückgabe von Büroflächen',
      paragraphs: [
        'Verwaltungen machen Wohnungen zwischen zwei Mietverhältnissen bezugsbereit. Hat die bisherige Mieterschaft nicht oder ungenügend gereinigt, kommt zuerst das Abnahmeprotokoll und erst danach unsere Reinigung. So können Sie Ihre Ansprüche gegenüber der Mieterschaft belegen.',
        'Eigentümerinnen, Eigentümer und Stockwerkeigentümer brauchen die Endreinigung vor der Übergabe an die Käuferschaft oder vor der ersten Vermietung.',
        'Unternehmen geben Büro- und Geschäftsflächen am Ende des Mietvertrags zurück. Bei einem befristeten Vertrag steht dieses Datum von Anfang an fest. Wird ein unbefristeter Vertrag ordentlich gekündigt, beträgt die Frist für Geschäftsräume mindestens sechs Monate. In beiden Fällen bleibt Zeit, die Reinigung nach der Räumung und einem allfälligen Rückbau einzuplanen.',
      ],
    },
    {
      title: 'Was am Reinigungstag bereit sein muss',
      paragraphs: [
        'Gründlich reinigen lässt sich nur eine leere Wohnung. Geben Unternehmen Räume zurück oder übergeben Eigentümer an die Käuferschaft, liegt die Reinigung am besten kurz vor der Übergabe. Dann findet die Vermieterschaft oder die Käuferschaft genau den Zustand vor, den wir hinterlassen haben.',
      ],
      items: [
        'Möbel, Vorhänge und persönliche Gegenstände sind ausgeräumt, auch aus Keller und Estrich',
        'Maler- und Reparaturarbeiten sind abgeschlossen',
        'Strom und Wasser sind angeschlossen, das Licht brennt in allen Räumen',
        'Schlüssel für Wohnung, Keller, Estrich und Briefkasten sind verfügbar',
      ],
    },
  ],
  tools: [
    {
      kind: 'text',
      id: 'abnahme-maengelruege',
      title: 'Abnahme und Mängelrüge: erst festhalten, dann reinigen',
      paragraphs: [
        'Das OR sieht vor, dass die Vermieterschaft bei der Rückgabe den Zustand der Wohnung prüft und Mängel, für welche die Mieterschaft einzustehen hat, sofort meldet (Art. 267a OR). Versäumt sie das, verliert sie diese Ansprüche. Ausgenommen sind Mängel, die bei üblicher Prüfung nicht erkennbar waren. Sie sind sofort nach der Entdeckung zu melden.',
        'Zurückzugeben ist die Wohnung in dem Zustand, der sich aus dem vertragsgemässen Gebrauch ergibt (Art. 267 OR). Normale Abnutzung geht nicht zulasten der Mieterschaft. Für die Abgrenzung zwischen Schaden und Abnutzung haben HEV Schweiz und der Mieterinnen- und Mieterverband eine gemeinsame Lebensdauertabelle erarbeitet.',
        'Wer vor dem Protokoll reinigen lässt, kann den Zustand bei der Rückgabe später kaum mehr belegen. Für die Praxis heisst das:',
      ],
      items: [
        'Den Zustand im Protokoll festhalten, bevor eine Reinigung ihn verändert.',
        'Jeden Mangel einzeln und genau beschreiben. «Küche schmutzig» genügt nicht, «Backofen und Dampfabzug mit Fettfilm» schon.',
        'Verschmutzung, normale Abnutzung und Schäden getrennt aufführen.',
        'Klar sagen, dass die Mieterschaft für die aufgeführten Mängel einstehen soll.',
        'Das Protokoll der Mieterschaft gleich aushändigen. Wirkt sie bei der Rückgabe nicht mit, die Mängel sofort schriftlich melden, aus Beweisgründen eingeschrieben.',
      ],
      note: 'Dieser Überblick ersetzt keine Rechtsberatung. Klären Sie Fragen im Einzelfall mit Ihrem Verband oder der Schlichtungsbehörde für Miete und Pacht.',
      sources: [
        { label: 'Obligationenrecht, Art. 267 und 267a (Fedlex, Stand 1. Januar 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_267_a' },
        { label: 'Zürcher Gerichte: Mängelrüge bei der Rückgabe', href: 'https://www.gerichte-zh.ch/de/themen/miete/kuendigung-rueckgabe/rueckgabe-und-ausweisung/maengelruege' },
        { label: 'HEV Schweiz: Lebensdauertabelle', href: 'https://www.hev-schweiz.ch/vermieten/verwalten/lebensdauertabelle' },
        { label: 'Mieterinnen- und Mieterverband: Lebensdauertabelle', href: 'https://www.mieterverband.ch/mietrecht/unterlagen-und-tools/lebensdauertabelle/' },
      ],
    },
    {
      kind: 'checklist',
      id: 'abnahme-checkliste',
      title: 'Abnahme-Checkliste Raum für Raum',
      intro: 'Zum Ausdrucken für die Rückgabe einer Wohnung. Die Liste zeigt, wo bei der Abnahme genau hingeschaut wird, und dient als Gerüst für Ihr Protokoll. Sie ist eine Prüfliste für die Abnahme, kein Verzeichnis unserer Leistungen.',
      printable: true,
      updated: '2026-09-28',
      groups: [
        {
          title: 'Küche',
          items: [
            'Backofen mit Blechen und Gittern',
            'Kochfeld und Dampfabzug mit Fettfilter',
            'Kühlschrank mit Dichtungen und Gemüsefach',
            'Geschirrspüler mit Sieb',
            'Schränke innen, auch die oberen Fächer',
            'Spüle und Armatur ohne Kalk',
          ],
        },
        {
          title: 'Bad und WC',
          items: [
            'Armaturen und Brause ohne Kalkränder',
            'Duschglas, Wanne und Plättli',
            'Fugen und Silikon',
            'Spiegel und Spiegelschrank',
            'Abläufe und Lüftungsgitter',
            'WC-Schüssel und Spülkasten',
          ],
        },
        {
          title: 'Fenster und Storen',
          items: [
            'Glas innen und aussen',
            'Rahmen, Falze und Dichtungen',
            'Fensterbänke innen und aussen',
            'Storen, Rollläden oder Fensterläden',
          ],
        },
        {
          title: 'Alle Räume',
          items: [
            'Böden und Sockelleisten',
            'Einbauschränke innen',
            'Türen, Zargen und Griffe',
            'Lichtschalter und Steckdosen',
            'Heizkörper',
          ],
        },
        {
          title: 'Nebenräume',
          items: [
            'Balkon oder Sitzplatz mit Geländer',
            'Keller- und Estrichabteil',
            'Briefkasten',
          ],
        },
        {
          title: 'Protokoll',
          items: [
            'Datum und Uhrzeit der Rückgabe, anwesende Personen',
            'Schlüssel gezählt: Wohnung, Keller, Estrich, Briefkasten',
            'Mängel einzeln beschrieben, Schaden und Abnutzung getrennt',
            'Protokoll der Mieterschaft ausgehändigt oder sofort zugestellt',
          ],
        },
      ],
      note: 'Fotos mit Datum ergänzen das Protokoll, vor allem wenn die Mieterschaft bei der Rückgabe fehlt.',
      sources: [
        { label: 'Obligationenrecht, Art. 267a (Fedlex, Stand 1. Januar 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_267_a' },
      ],
    },
    {
      kind: 'table',
      id: 'kuendigungstermine',
      title: 'Kündigungstermine nach Kanton',
      intro: 'Wird ein unbefristeter Mietvertrag ordentlich gekündigt, beträgt die Frist für Wohnungen mindestens drei Monate, für Geschäftsräume mindestens sechs, jeweils auf den Termin im Mietvertrag. Nennt der Vertrag keinen, gilt der ortsübliche Termin und ohne Ortsgebrauch das Ende einer dreimonatigen Mietdauer (Art. 266a, 266c und 266d OR). Befristete Verträge enden ohne Kündigung mit Ablauf der vereinbarten Dauer (Art. 266 OR).',
      printable: true,
      updated: '2026-09-29',
      columns: ['Kanton', 'Ortsübliche Termine für Wohnungen', 'Für die Planung'],
      rows: [
        ['Luzern', 'Auf den Seiten des Kantons nicht genannt. Auskunft gibt die Schlichtungsbehörde Miete und Pacht Luzern.', 'Laut Kanton wird in der Regel auf ein Monatsende gekündigt, Termine und Fristen stehen meist im Mietvertrag.'],
        ['Zug', 'Ende März, Ende Juni, Ende September', 'Abnahmen und Endreinigungen ballen sich an diesen drei Stichtagen.'],
        ['Obwalden', 'Ende März, Ende Juni, Ende September', 'Für eine Abgabe Ende Juni muss die Kündigung spätestens Ende März zugehen. Ab dann steht der Abgabetermin fest.'],
        ['Aargau und Nidwalden', 'Auf den Seiten der Kantone nicht genannt. Auskunft geben die Schlichtungsbehörden für Miete und Pacht, im Aargau die des Bezirks.', 'Den Kündigungstermin aus der Kündigung bei der Anfrage nennen.'],
      ],
      note: 'Die Mieterschaft kann die Wohnung auch vor dem Kündigungstermin zurückgeben. Von ihren Pflichten ist sie dann nur befreit, wenn sie eine zumutbare, zahlungsfähige Nachmieterschaft vorschlägt, die den Vertrag zu gleichen Bedingungen übernehmen will (Art. 264 OR). So kann die Abgabe auf jedes Datum fallen. Fragen Sie die Reinigung an, sobald ein Abgabetermin feststeht.',
      sources: [
        { label: 'Obligationenrecht, Art. 264, 266, 266a, 266c und 266d (Fedlex, Stand 1. Januar 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_266_c' },
        { label: 'Zivilprozessordnung, Art. 201 Abs. 2 (Fedlex, Stand 1. Juli 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/2010/262/de#art_201' },
        { label: 'Kanton Luzern: Wohnung mieten', href: 'https://gruezi.lu.ch/wohnen/wohnung_mieten' },
        { label: 'Kanton Luzern: Schlichtungsbehörde Miete und Pacht', href: 'https://gerichte.lu.ch/organisation/schlichtungsbehoerden/miete_pacht' },
        { label: 'Kanton Zug: Häufige Fragen Mietrecht', href: 'https://zg.ch/de/recht-justiz/zivilverfahren/schlichtung/faq-zum-mietrecht' },
        { label: 'Kanton Obwalden: Schlichtungsbehörde', href: 'https://www.ow.ch/fachbereiche/2131' },
        { label: 'Kanton Aargau: Schlichtungsbehörden für Miete und Pacht', href: 'https://www.ag.ch/de/ueber-uns/gerichte-kanton-aargau/organisation/schlichtungsbehoerden/schlichtungsbehoerden-fuer-miete-und-pacht' },
        { label: 'Kanton Nidwalden: Schlichtungsbehörde', href: 'https://www.nw.ch/schlichtungsbehoerde/326' },
      ],
    },
  ],
  steps: [
    {
      title: 'Termin festlegen',
      text: 'Für Verwaltungen liegt die Reinigung zwischen Abnahmeprotokoll und Einzug der neuen Mieterschaft, für Eigentümer und Unternehmen zwischen Auszug und Übergabe. Die Schlüsselübergabe vereinbaren wir mit Ihnen.',
    },
    {
      title: 'Endreinigung',
      text: 'Wir reinigen die leeren Räume im vereinbarten Umfang, von der Küche bis zu Keller und Estrich.',
    },
    {
      title: 'Abnahme',
      text: 'Die Verwaltung prüft die Räume. Beanstandungen an unserer Reinigung beheben wir im Rahmen der Abnahmegarantie.',
    },
  ],
  faq: [
    {
      question: 'Wovon hängt der Preis einer Umzugsreinigung ab?',
      answer:
        'Vom Aufwand in genau dieser Wohnung: Zimmerzahl und Fläche, Zustand von Küche und Bad (Fett, Kalk, Nikotin), Anzahl und Art der Fenster, ob Lamellenstoren, Rollläden oder Fensterläden dazugehören und welche Nebenräume wie Keller, Estrich oder Balkon zu reinigen sind. Einen Pauschalpreis pro Zimmer nennen wir deshalb nicht.',
    },
    {
      question: 'Reinigen Sie vor oder nach der Abnahme?',
      answer:
        'Beides ist möglich. Geben Unternehmen Räume zurück oder übergeben Eigentümer an die Käuferschaft, reinigen wir vorher. Hat die Mieterschaft die Wohnung ungenügend gereinigt zurückgegeben, reinigen wir für die Verwaltung, sobald die Mängel im Protokoll stehen.',
    },
    {
      question: 'Was muss die Verwaltung bei der Abnahme beachten?',
      answer:
        'Mängel, für welche die Mieterschaft einsteht, sind bei der Rückgabe zu prüfen und sofort zu melden, sonst gehen die Ansprüche verloren (Art. 267a OR). Deshalb zuerst das Protokoll, dann die Reinigung. Worauf es beim Protokoll ankommt, steht unter [Abnahme und Mängelrüge](/leistungen/umzugsreinigung#abnahme-maengelruege).',
    },
    {
      question: 'Welchen Zustand darf die Verwaltung bei der Rückgabe verlangen?',
      answer:
        'Die Wohnung ist in dem Zustand zurückzugeben, der sich aus dem vertragsgemässen Gebrauch ergibt (Art. 267 OR). Wie gründlich zu reinigen ist, regelt meist der Mietvertrag. Normale Abnutzung geht nicht zulasten der Mieterschaft. Diese Antwort ist keine Rechtsberatung.',
    },
    {
      question: 'Wann sollte ich die Umzugsreinigung anfragen?',
      answer:
        'Sobald die Kündigung eingegangen ist. Bei einer ordentlichen Kündigung bleiben bis zum Mietende bei Wohnungen mindestens drei Monate, bei Geschäftsräumen mindestens sechs. Gibt die Mieterschaft früher zurück, etwa mit einer Nachmieterschaft, kann die Abgabe auch früher liegen. In Zug und Obwalden gelten ohne andere Abmachung Ende März, Juni und September, in Luzern stehen die Termine laut Kanton meist im Mietvertrag.',
    },
    {
      question: 'Kann die Reinigung beginnen, solange noch Möbel in der Wohnung stehen?',
      answer:
        'Besser nicht. Hinter Möbeln, in Schränken und unter Einbauten schaut die Verwaltung bei der Abnahme genau hin, und dort lässt sich erst in leeren Räumen gründlich reinigen. Wir reinigen deshalb erst, wenn alle Räume geräumt sind, auch Keller und Estrich.',
    },
    {
      question: 'Reinigen Sie auch Büro- und Geschäftsflächen vor der Rückgabe?',
      answer:
        'Ja. Für Unternehmen reinigen wir Büros und Geschäftsflächen vor der Abgabe an die Vermieterschaft. Stehen Rückbauten an, kommt die Reinigung nach den Handwerkern. Nach grösseren Umbauten passt die [Bau- und Bauendreinigung](/leistungen/baureinigung).',
    },
    {
      question: 'Übernehmen Sie die Umzugsreinigung auch für Mieterinnen und Mieter?',
      answer:
        'Nein, Aufträge von Mieterinnen und Mietern einzelner Wohnungen nehmen wir nicht an. Unsere Auftraggeber sind Verwaltungen, Eigentümer und Unternehmen. Bei Villen und Residenzen gibt es die Endreinigung im [Premium-Bereich](/premium) auch für Privatpersonen.',
    },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Wenn die Wohnung vor der Neuvermietung renoviert wird: Nach Malern und Handwerkern folgt die Bauendreinigung.' },
    { path: '/leistungen/sonderreinigungen', text: 'Wenn Böden, Plättli oder Fugen nach langer Mietdauer eine Grundreinigung brauchen, auch ohne Wechsel.' },
    { path: '/leistungen/hauswartung', text: 'Wenn die Hauswartung bei Wohnungsübergaben mitwirken und das Haus auch zwischen den Wechseln betreuen soll.' },
  ],
  cta: {
    title: 'Offerte zum Abgabetermin',
    text: 'Nennen Sie uns Adresse, Zimmerzahl oder Fläche, den Abgabe- oder Einzugstermin und ob Storen oder Fensterläden dazugehören. Bei mehreren Wohnungswechseln schicken Sie uns am einfachsten eine Liste mit Adressen und Terminen. Die Offerte ist kostenlos und unverbindlich.',
  },
}
