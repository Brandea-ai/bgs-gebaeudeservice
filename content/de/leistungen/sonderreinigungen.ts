import type { ServicePageContent, Source } from '../../types'

// Grundlage: R3b (fünf Sonderreinigungen), E28, E81, Audit 25 (inhalt.md 3.3 mit den Bausteinen
// 3.3.1 bis 3.3.3, seo.md T2 und H2, keywords-mehrsprachig.md). Die Endreinigung bei der
// Wohnungsabgabe steht nur noch als Verweis hier (H2, keine Kannibalisierung).
// Fachaussagen geprüft am 28.09.2026 an den Quellen unten (NVS, Ceruniq, ISP, Forbo, BAG, OR).

const nvs: Source = {
  label: 'Naturstein-Verband Schweiz NVS: Merkblatt «Reinigung von Naturstein-Belägen» (Januar 2018)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}
const ceruniqStein: Source = {
  label: 'Ceruniq (Schweizer Plattenverband): Reinigungs- und Pflegeanleitung Naturstein (Februar 2025)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-natursteinbelaege.pdf',
}
const ceruniqKeramik: Source = {
  label: 'Ceruniq: Reinigungs- und Pflegeanleitung für keramische Beläge (Februar 2025)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-keramische-belaege.pdf',
}
const ceruniqErst: Source = {
  label: 'Ceruniq: Erstreinigung für keramische Beläge mit Zementfugen (Februar 2025)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/erstreinigung-fuer-keramische_belaege.pdf',
}
const isp: Source = {
  label: 'ISP Interessengemeinschaft Schweizer Parkettmarkt: Pflegeanleitungen für geöltes und versiegeltes Parkett',
  href: 'https://www.parkett-verband.ch/de/Parkett/Parkett-ABC-und-Pflegeanleitungen',
}
const forboLinoleum: Source = {
  label: 'Forbo Flooring: Reinigungs- und Pflegeempfehlung Marmoleum mit Topshield Pro (Stand 03/2022)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/9597/Forbo_Linoleum_Reinigung-Pflege_202204.pdf',
}
const forboVinyl: Source = {
  label: 'Forbo Flooring: Reinigungs- und Pflegeempfehlung für Allura-Designbeläge aus Vinyl',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/711557/Forbo_Allura-Designbelage_Reinigung-Pflege_202001.pdf',
}
const bag: Source = {
  label: 'Bundesamt für Gesundheit BAG: «Vorsicht Schimmel», Wegleitung (August 2023)',
  href: 'https://www.bag.admin.ch/dam/de/sd-web/wBJWq1KVfpS-/vorsicht-schimmel.pdf',
}
const or257h: Source = {
  label: 'Obligationenrecht, Art. 257h Abs. 3 (Anzeige von Arbeiten an der Mietsache)',
  href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_257_h',
}

export const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Grundreinigung nach Belag',
  h1: 'Grundreinigung und Sonderreinigung für Liegenschaften und Gewerbe',
  lead: [
    'Treppenhaus, Büroboden oder Sanitärraum wirken trotz laufender Reinigung nicht mehr sauber: Die Fugen sind grau, auf dem Boden kleben alte Pflegeschichten, an den Armaturen sitzt Kalk. Eine Grundreinigung trägt das ab, mit Mitteln, die zum Belag passen.',
    'Wir übernehmen sie für Verwaltungen, Stockwerkeigentümerschaften, Eigentümer und Unternehmen. Hier finden Sie, was welcher Boden verträgt, wie Sie Schmutz von einem Schaden unterscheiden, und Vorlagen für Vorbereitung, Aushang und Abnahme.',
  ],
  facts: [
    { label: 'Einsatz', value: 'Einmalig oder in grösseren Abständen, oft zwischen zwei Nutzungen' },
    { label: 'Während der Arbeit', value: 'Böden nass, Bereiche abschnittsweise gesperrt' },
    { label: 'Ihr Anteil', value: 'Böden frei räumen, Bodenheizung ausschalten, Mieterschaft informieren' },
    { label: 'Nicht enthalten', value: 'Schleifen, Versiegeln, Neuverfugen und Reparaturen' },
  ],
  sections: [
    {
      title: 'Was die laufende Reinigung nicht mehr schafft',
      paragraphs: [
        'Die Unterhaltsreinigung nimmt den Schmutz der letzten Tage auf. Was sich über Monate festsetzt, bleibt liegen: Pflegemittel, die Schicht um Schicht aufgetragen wurden und Schmutz einschliessen, Kalk an Armaturen, graue Fugen, klebrige Laufstrassen.',
        'Eine Grundreinigung trägt diese Schichten ab, bis die ursprüngliche Oberfläche wieder frei ist. Sinnvoll ist sie vor allem in diesen Fällen:',
      ],
      items: [
        'Büro- oder Gewerbefläche zwischen zwei Mietverhältnissen',
        'Nach einem längeren Leerstand oder einer intensiven Nutzung',
        'Vor dem Start einer neuen [Unterhaltsreinigung](/leistungen/unterhaltsreinigung), damit sie bei einem sauberen Ausgangszustand beginnt',
        'Wenn Böden trotz Pflege stumpf wirken und die Fugen dunkler sind als an geschützten Stellen',
      ],
    },
    {
      title: 'Sanitärräume: Kalk, Urinstein und Fugen',
      paragraphs: [
        'Im Sanitärraum braucht es oft eine Sonderreinigung. Sie nimmt sich einzelne, hartnäckige Verschmutzungen vor statt der ganzen Fläche, hier vor allem Kalk und Urinstein.',
        'Beide löst man mit sauren Mitteln, und die greifen Zementfugen an. Deshalb werden Plättli und Fugen vorher mit Wasser gesättigt, das Mittel wirkt nur kurz, und am Schluss wird mehrmals klar nachgespült. Auf Marmor, Kalkstein und Travertin gehört gar keine Säure, auch nicht nach dem Vornässen.',
        'Die Fugen vor WC-Anlagen und Urinalen brauchen Handarbeit mit der Bürste, weil eine Maschine die Ränder nicht erreicht. Schwarze Punkte in Silikonfugen sind ein anderer Fall: Das ist Schimmel im Material, die Fuge muss ersetzt werden.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bodenbelaege',
      title: 'Welcher Boden welche Reinigung verträgt',
      intro:
        'Bei der Grundreinigung entscheidet das Mittel: Was auf Granit Kalk löst, verätzt Marmor. Die Tabelle fasst die Empfehlungen der Schweizer Fachverbände und der Hersteller zusammen.',
      columns: ['Belag', 'Worauf es ankommt', 'Was schadet'],
      rows: [
        [
          'Marmor, Kalkstein, Travertin',
          'pH-neutrale oder leicht alkalische Mittel, danach gründlich nachwaschen und das Schmutzwasser vollständig absaugen.',
          'Säure jeder Art, auch Essig, Zitronensäure und saure Bad- oder Sanitärreiniger: Sie ätzt die Oberfläche an. Pads können polierten Stein zerkratzen.',
        ],
        [
          'Granit, Gneis, Quarzit',
          'Säurebeständig, alle Reinigungsverfahren sind möglich, auch das Lösen von Kalk mit sauren Mitteln.',
          'Salz- und Schwefelsäure verfärben den Stein. Zementfugen daneben brauchen trotzdem Schutz durch Vornässen.',
        ],
        [
          'Plättli und Feinsteinzeug mit Zementfugen',
          'Fett und alte Pflegemittel mit alkalischem Reiniger lösen, Kalk mit Sanitärreiniger. Immer vornässen, kurz einwirken lassen, mehrmals klar nachspülen. Bodenheizung vorher ganz ausschalten.',
          'Saure Mittel auf trockenen Fugen: Sie greifen den Fugenmörtel an und können dunkle oder farbige Fugen beschädigen. Zu viel Reiniger mit Pflegezusätzen macht die Oberfläche bleibend fleckig.',
        ],
        [
          'Linoleum',
          'Reiniger unter pH 9. Forbo liefert sein Linoleum ab Werk mit einer Schutzschicht aus, die bei der Reinigung weder entfernt noch beschädigt werden darf.',
          'Hochalkalische Laugen, Säuren, Sanitärreiniger, Scheuerpulver und starke Lösungsmittel.',
        ],
        [
          'Kunststoff (PVC, Vinyl)',
          'Vor einer neuen Beschichtung mit einem Grundreiniger für Vinyl maschinell schrubben und klar nachspülen. Der Boden muss frei von Rückständen und ganz trocken sein.',
          'Scheuerpulver, Säuren, Sanitärreiniger und starke Lösungsmittel.',
        ],
        [
          'Parkett, versiegelt',
          'Nur nebelfeucht wischen, bei Bedarf mit neutralem Reiniger. Reinigungsmaschinen nur mit Freigabe des Herstellers.',
          'Nasse Reinigung, Dampfgeräte und Scheuermittel.',
        ],
        [
          'Parkett, geölt',
          'Reinigen mit den Mitteln des jeweiligen Ölsystems, danach regelmässig nachölen.',
          'Dampfreiniger, Scheuermittel und Mikrofasertücher ohne Freigabe für Parkett.',
        ],
      ],
      note:
        'Massgebend ist die Pflegeanleitung des Belagsherstellers. Ist der Belag unbekannt, gehört vor jeder Grundreinigung ein Versuch an einer unauffälligen Stelle dazu. Bei Naturstein empfiehlt der NVS zusätzlich eine Vorprüfung, ob der Stein Säure verträgt.',
      sources: [nvs, ceruniqStein, ceruniqKeramik, ceruniqErst, forboLinoleum, forboVinyl, isp],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'schaden-oder-schmutz',
      title: 'Verschmutzt oder beschädigt?',
      intro:
        'Eine Grundreinigung entfernt Schmutz, keine Schäden. Mit dieser Tabelle schätzen Sie beim Rundgang ein, ob eine Reinigung hilft oder ob die Arbeit an eine andere Fachperson geht.',
      columns: ['Was Sie sehen', 'Meist die Ursache', 'Was hilft'],
      rows: [
        [
          'Matte, raue Flecken auf poliertem Marmor oder Kalkstein',
          'Säure hat die Oberfläche angeätzt, etwa Essig, Zitronensaft oder ein Kalklöser.',
          'Schleifen und Polieren durch einen Natursteinbetrieb. Eine Reinigung bringt den Glanz nicht zurück.',
        ],
        [
          'Graue Zementfugen, fest und ohne Risse',
          'Fett, Schmutz und Reste von Pflegemitteln in der Oberfläche der Fuge.',
          'Grundreinigung mit alkalischem Reiniger, die Fugen vorher vornässen.',
        ],
        [
          'Fugen sanden, bröckeln oder fehlen stellenweise',
          'Der Fugenmörtel ist angegriffen, etwa durch saure Mittel ohne Vornässen.',
          'Neu verfugen durch den Plattenleger. Eine Grundreinigung kann den Schaden vergrössern.',
        ],
        [
          'Schwarze Punkte in Silikonfugen an Dusche, Wanne oder Küche',
          'Schimmel im Fugenmaterial.',
          'Fugenmasse entfernen und durch eine Fachperson erneuern lassen, dazu die Ursache der Feuchtigkeit prüfen.',
        ],
        [
          'Laufstrassen auf Naturstein dunkler als die Ränder',
          'Gebrauchspatina: Die feinsten Poren sind mit Staub gefüllt.',
          'Auch eine Grundreinigung entfernt sie im Allgemeinen nicht vollständig. Immer ganze Flächen reinigen, sonst entstehen Helligkeitsunterschiede.',
        ],
        [
          'Parkett grau, in den Laufzonen rau oder offen',
          'Die Versiegelung oder die Ölschicht ist abgenutzt.',
          'Parkettfachgeschäft: je nach Oberfläche nachölen oder schleifen und neu versiegeln.',
        ],
      ],
      note:
        'Halten Sie solche Stellen vor der Reinigung fest, am besten mit Fotos. So ist später klar, was schon vorher da war.',
      sources: [nvs, ceruniqStein, ceruniqKeramik, bag, isp],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'checkliste-grundreinigung',
      title: 'Checkliste für Vorbereitung und Abnahme',
      intro:
        'Für Verwaltung, Hauswart oder Betriebsleitung: Was vor dem Termin erledigt sein sollte und woran Sie das Ergebnis prüfen.',
      groups: [
        {
          title: 'Vor dem Termin',
          items: [
            'Beläge je Raum notieren, Pflegeanleitungen aus der Bauübergabe heraussuchen',
            'Bekannte Schäden mit Fotos festhalten: verätzte Stellen, lose Fugen, abgenutztes Parkett',
            'Mieterschaft oder Mitarbeitende rechtzeitig informieren, etwa mit dem Aushang unten',
            'Bodenheizung in den betroffenen Räumen ganz ausschalten lassen',
            'Zutritt für den Einsatztag regeln, Wasser, Ausguss und Steckdosen zugänglich halten',
            'Am Vortag die Böden frei räumen. Grosse Möbel verschieben oder bewusst stehen lassen: Die Fläche darunter bleibt dann ungereinigt',
          ],
        },
        {
          title: 'Bei der Abnahme',
          items: [
            'Die Fugen haben wieder ihre ursprüngliche Farbe: Vergleichen Sie mit einer geschützten Stelle, etwa unter einem Möbel',
            'Kein Kalkrand an Armaturen, Duschtrennwänden und Wandplatten',
            'Kein Schleier im Streiflicht: mit einer Taschenlampe flach über den Boden leuchten',
            'Keine klebrigen Stellen und keine weissen Ränder von Mittelresten in Ecken',
            'Sockelleisten, Türen und Zargen sind mitgereinigt',
            'Keine neuen matten Stellen auf Stein, Silikon und Fugen sind unbeschädigt',
          ],
        },
      ],
      sources: [or257h, ceruniqErst],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'text',
      id: 'aushang',
      printable: true,
      printHeader: false,
      updated: '2026-09-29',
      title: 'Vorlage: Aushang für die Mieterschaft',
      paragraphs: [
        'Titel: Grundreinigung im Treppenhaus',
        'Am [Datum] zwischen [Uhrzeit] und [Uhrzeit] wird das Treppenhaus [und die Waschküche] gründlich gereinigt. In dieser Zeit sind die Böden nass und einzelne Abschnitte kurz gesperrt. Zu Wohnungen, Briefkästen und Lift gelangen Sie über [trockenen Weg angeben].',
        'Bitte stellen Sie Schuhe, Velos, Kinderwagen und Pflanzen bis am Vorabend in Ihre Wohnung oder in den Keller. Was im Treppenhaus stehen bleibt, kann nicht gereinigt werden.',
        'Fragen beantwortet [Verwaltung, Name, Telefon].',
      ],
      note:
        'Das OR verlangt, dass die Vermieterschaft Arbeiten an der Mietsache rechtzeitig anzeigt und bei der Durchführung auf die Interessen der Mieterschaft Rücksicht nimmt. Ob eine Reinigung darunter fällt, beurteilen Sie im Einzelfall. Ein Aushang ist der einfache Weg.',
      sources: [or257h],
    },
  ],
  scope: {
    title: 'Was die Grundreinigung umfasst',
    intro:
      'Sie bestimmen die Flächen, wir reinigen sie einmalig oder in grösseren Abständen. Für Glas und Fassaden gibt es die [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung), für Neubauten die [Bauendreinigung](/leistungen/baureinigung).',
    items: [
      'Böden: festsitzender Schmutz und Rückstände alter Pflegemittel, Vorgehen nach Belag',
      'Fugen zwischen Boden- und Wandplatten',
      'Sanitärräume: Kalk und Urinstein an WC, Urinal, Lavabo, Armaturen und Plättli',
      'Küchen und Teeküchen: Fett an Fronten, Abdeckungen und Wandplatten',
      'Sockelleisten, Türen und Zargen',
      'Treppenhäuser, Eingänge und Waschküchen in Liegenschaften mit Mieterschaft',
    ],
    notIncluded: [
      'Schleifen, Polieren und Versiegeln von Stein oder Parkett: Das ist Arbeit für Natursteinbetrieb und Parkettleger.',
      'Neu verfugen und Silikonfugen ersetzen.',
      'Die laufende Pflege danach: dafür gibt es die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Endreinigung bei der Wohnungsabgabe: eigene Leistung, die [Umzugsreinigung](/leistungen/umzugsreinigung).',
    ],
  },
  steps: [
    {
      title: 'Vorbereiten',
      text: 'Sie arbeiten die Checkliste oben ab und hängen den Aushang rechtzeitig auf.',
    },
    {
      title: 'Reinigen',
      text: 'Raum für Raum: Mittel nach Belag auftragen und einwirken lassen, maschinell und an den Rändern von Hand lösen, Schmutzwasser absaugen, klar nachspülen.',
    },
    {
      title: 'Übergabe',
      text: 'Nach dem Einsatz übergeben wir die Flächen. Prüfen Sie sie mit der Checkliste und stellen Sie Möbel und Material erst zurück, wenn der Boden trocken ist.',
    },
  ],
  faq: [
    {
      question: 'Was kostet eine Grundreinigung?',
      answer:
        'Den Preis bestimmen vor allem die Fläche, der Belag und der Zustand: wie viele Pflegeschichten und wie viel Kalk abzutragen sind. Dazu kommen der Anteil Handarbeit an Fugen, Ecken und Sanitärräumen, die Einsatzzeit, etwa an einem Wochenende, und wie frei die Räume sind. Diese Punkte sehen wir uns vor Ort an und nennen Ihnen danach einen Preis für Ihr Objekt.',
    },
    {
      question: 'Wie lange sind die Räume nicht nutzbar?',
      answer:
        'Während der Reinigung und bis der Boden trocken ist. Wie lange das dauert, hängt von Fläche, Belag und Lüftung ab. In Treppenhäusern lässt sich abschnittsweise arbeiten, sodass ein Weg frei bleibt. In Büros und Praxen eignen sich Wochenenden und Betriebsferien.',
    },
    {
      question: 'Welche Mittel eignen sich für Marmor und andere Natursteine?',
      answer:
        'Für Marmor, Kalkstein und Travertin pH-neutrale oder leicht alkalische Mittel, nie Säure. Schon Essig oder ein Kalklöser ätzen die Oberfläche an. Granit, Gneis und Quarzit vertragen auch saure Mittel. Weiss niemand, welcher Stein verlegt ist, hilft die Vorprüfung, die der Naturstein-Verband Schweiz beschreibt: Braust an einer versteckten, leicht angerauten Stelle ein Tropfen Säure auf, verträgt der Stein keine Säure.',
    },
    {
      question: 'Was, wenn der Boden beschädigt statt verschmutzt ist?',
      answer:
        'Dann bringt eine Reinigung nur einen Teil zurück. Verätzter Marmor braucht Schleifen und Polieren, abgenutztes Parkett einen Parkettleger, ausgewaschene Fugen den Plattenleger. Was wir vorher sehen, sagen wir Ihnen offen, damit Sie die richtige Arbeit vergeben. Für die erste Einschätzung hilft die Tabelle «Verschmutzt oder beschädigt?».',
    },
    {
      question: 'Wie oft braucht es eine Grundreinigung?',
      answer:
        'Einen festen Takt gibt es nicht. Für Natursteinböden nennt der Naturstein-Verband Schweiz je nach Verschmutzung und Hygieneanforderung monatlich, halbjährlich oder jährlich. Bei Ihnen zeigt es der Zustand: dunkle Fugen, stumpfe Laufstrassen, Ränder an den Sockelleisten. Eine gute laufende Reinigung und eine Matte vor dem Eingang, die Sand zurückhält, verlängern den Abstand.',
    },
    {
      question: 'Reicht nicht eine gründlichere Unterhaltsreinigung?',
      answer:
        'Meist nicht, weil die Mittel verschieden sind. Die Unterhaltsreinigung arbeitet mild und oft mit Pflegezusätzen, darunter bauen sich über die Zeit Schichten auf. Die Grundreinigung trägt diese Schichten mit stärkeren Mitteln und Maschinen ab. Danach hält die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) den Zustand.',
    },
    {
      question: 'Kann eine falsche Reinigung die Gewährleistung kosten?',
      answer:
        'Das ist möglich. Die Reinigungsanleitungen des Plattenverbands Ceruniq halten fest: Unsachgemässe Reinigung führt zum Erlöschen der Gewährleistung. Die Anleitungen sehen vor, dass der Plattenleger die empfohlenen Reiniger einträgt, bei der Erstreinigung auch das verwendete Fugenmaterial. Wer die Anleitung aus der Bauübergabe vor der Grundreinigung bereitlegt, sieht also, welche Mittel für den Belag vorgesehen sind.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn der saubere Zustand nach der Grundreinigung im festen Rhythmus gehalten werden soll.' },
    { path: '/leistungen/umzugsreinigung', text: 'Wenn eine Wohnung zwischen zwei Mietverhältnissen abgabebereit sein muss, mit Abnahmegarantie.' },
    { path: '/leistungen/baureinigung', text: 'Wenn nach einem Neubau oder Umbau Baustaub und Rückstände der Handwerker weg müssen.' },
  ],
  cta: {
    title: 'Grundreinigung anfragen',
    text: 'Nennen Sie uns Adresse, Flächen mit ungefährer Grösse, Beläge und Ihr Zeitfenster. Fotos von Böden und Fugen können Sie per E-Mail nachreichen. Mit diesen Angaben planen wir die Besichtigung, die wie die Offerte kostenlos und unverbindlich ist.',
  },
}
