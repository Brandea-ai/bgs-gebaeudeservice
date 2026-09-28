import type { ServicePageContent, Source } from '../../types'

/**
 * Privatjet (E85, Umbau nach 25-AUDIT/inhalt.md 4.2). Belegt: nur die Kabine (E56 JET),
 * Premium-Zusagen aus E41 (Zeiten, Geheimhaltung auf Wunsch). Kein Zutritt zum Flugfeld (E52):
 * den Zugang regelt die Kundschaft. Fachaussagen nur mit gelesener Quelle (WebFetch 28.09.2026).
 */
const quelle = {
  faa: {
    label: 'FAA Advisory Circular 43.13-1B, Ziffer 3-25: Reinigung transparenter Kunststoffe (englisch)',
    href: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_43.13-1B_w-chg1.pdf',
  },
  who: {
    label: 'WHO, Guide to Hygiene and Sanitation in Aviation, 3. Ausgabe 2009, Kapitel 3 und Anhang F (englisch)',
    href: 'https://iris.who.int/handle/10665/44164',
  },
  cfr: {
    label: '14 CFR 25.853 (a): Brandverhalten der Kabinenmaterialien, US-Bauvorschrift für grosse Flugzeuge (englisch)',
    href: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25/subpart-D/subject-group-ECFR1e1f52030ba4797/section-25.853',
  },
  leder: {
    label: 'Townsend Leather: Pflege von Anilinleder, Herstellerangaben (englisch)',
    href: 'https://townsendleather.com/care-for-anilne-leathers',
  },
  textil: {
    label: 'Duncan Aviation: Pflege von Stoffen und Leder in Geschäftsreiseflugzeugen (englisch)',
    href: 'https://www.duncanaviation.aero/intelligence/caring-for-the-fabrics-and-leathers-in-your-business-aircraft',
  },
  vtnp: {
    label: 'Verordnung über tierische Nebenprodukte (VTNP), Art. 2 Abs. 2bis, Art. 4, 5 und 22',
    href: 'https://www.fedlex.admin.ch/eli/cc/2011/372/de',
  },
} satisfies Record<string, Source>

export const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Privatjet-Reinigung für Kabine, Bordküche und Waschraum',
  lead: [
    'Nach einer Langstrecke kleben Kaffeeränder auf dem Wurzelholz, in den Sitzschienen liegen Krümel, auf den Kabinenfenstern sind Fingerabdrücke. Bis zum nächsten Abflug bleiben manchmal nur wenige Stunden.',
    'Wir reinigen Kabine, Bordküche und Waschraum Ihres Privatjets zwischen zwei Flügen, mit den Mitteln, die für Ihr Flugzeug freigegeben sind. Darunter finden Sie, was die Materialien an Bord vertragen, was in welche Bodenzeit passt und was vor dem ersten Einsatz feststehen muss.',
  ],
  facts: [
    { label: 'Umfang', value: 'Kabine, Bordküche und Waschraum' },
    { label: 'Nicht enthalten', value: 'Aussenreinigung, Tanks und Technik' },
    { label: 'Mittel', value: 'Nur aus der Freigabeliste Ihres Flugzeugs' },
    { label: 'Einsatzzeiten', value: 'Zwischen zwei Flügen, auch abends und am Wochenende' },
    { label: 'Zugang', value: 'Regelt Ihr Flugbetrieb mit dem Flugplatz' },
  ],
  sections: [
    {
      title: 'Die Kabine zwischen zwei Flügen',
      paragraphs: [
        'Der Anlass bestimmt, was die Kabine braucht. Nach einem vollen Flug sind es Polster, Teppich und Bordküche. Nach einem Aufenthalt im Wartungsbetrieb liegen Staub und Fingerabdrücke auf Verkleidungen, Tischen und Fenstern. Vor einem Flug mit Gästen zählt jedes Detail, das man beim Einsteigen sieht.',
        'Das Zeitfenster gibt Ihr Flugplan vor. Je früher der nächste Abflug feststeht, desto genauer lässt sich planen, was vorher fertig sein muss. Welche Arbeiten in eine Stunde passen und welche eine Nacht brauchen, zeigt die Tabelle zur Bodenzeit weiter unten.',
      ],
    },
    {
      title: 'Bordküche und Waschraum',
      paragraphs: [
        'In der Bordküche laufen Getränke in Fugen, Schubladenführungen und Fächer, die man erst sieht, wenn die Einsätze draussen sind. Im Waschraum zählen WC, Becken, Armaturen, Spiegel, Türgriffe und der Boden rund um das WC.',
        'Der Waschraum steht im Beispielplan der WHO schon bei einem Halt unter einer Stunde vollständig auf der Liste. Für Speisereste aus Flügen über die Grenze gelten eigene Regeln, mehr dazu in der Checkliste unten.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'kabinenmaterialien',
      title: 'Kabinenmaterialien und was ihnen schadet',
      intro:
        'Welche Mittel an Bord erlaubt sind, bestimmen Flugzeughersteller und Flugbetrieb. Nach dem Leitfaden der WHO gibt die Technik des Flugbetriebs jedes Mittel vor dem Einsatz frei, die Liste steht meist im Wartungshandbuch.',
      columns: ['Material', 'Worauf es ankommt', 'Was schadet'],
      rows: [
        [
          'Kabinenfenster innen',
          'Freigegebene Mittel und ein Tuch, das nicht scheuert, danach mit Wasser nachwischen und trocknen. Für Kunststoff nennt die FAA viel Wasser, milde Seife und ein weiches Tuch ohne Körner.',
          'Auf Kunststoff: Alkohol, Aceton, Verdünner und Glasreiniger-Sprays weichen ihn auf, es entstehen feine Risse. Trockenes Reiben zerkratzt und lädt statisch auf.',
        ],
        [
          'Anilinleder (ohne Farbschicht)',
          'Staub mit einem weichen, leicht feuchten Tuch abnehmen, stärkeren Schmutz mit Wasser und milder Seife ohne Detergenzien. An der Luft trocknen, fern von Wärme und Sonne.',
          'Ungeeignete Reiniger färben es sofort dunkler, hartes Wasser hinterlässt Ränder. Nicht schrubben, nicht durchnässen, Verschüttetes sofort abtupfen.',
        ],
        [
          'Stoffbezüge und Teppich',
          'Flecken sofort mit einem sauberen Tuch abtupfen. Klebende Reste mit einem Spachtel lösen, dann saugen.',
          'Reiben arbeitet den Schmutz tiefer ins Gewebe. Nicht freigegebene Fleckenmittel.',
        ],
        [
          'Lackiertes Holz, Hochglanz, Verkleidungen',
          'Mittel aus der Freigabeliste, weiche und saubere Tücher.',
          'Politur, Wachs oder Imprägnierung ohne Freigabe. Nach der US-Bauvorschrift für grosse Flugzeuge müssen auch aufgetragene Beschichtungen die Brandprüfung bestehen.',
        ],
        [
          'Desinfektion in Bordküche und Waschraum',
          'Nur vom Flugzeughersteller freigegebene Mittel, genau nach Gebrauchsanweisung.',
          'Viele Desinfektionsmittel oxidieren. Sie können Metalle angreifen und den Brandschutz von Polstern schwächen.',
        ],
      ],
      note: 'Wo die Unterlagen von Hersteller oder Innenausbau etwas anderes sagen, gelten diese.',
      sources: [quelle.who, quelle.faa, quelle.leder, quelle.textil, quelle.cfr],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'bodenzeit',
      title: 'Was in welche Bodenzeit passt',
      intro:
        'Die Weltgesundheitsorganisation teilt die Kabinenreinigung in ihrem Beispielplan nach der Zeit am Boden ein. Der Plan stammt aus dem Linienverkehr. Für einen Privatjet zeigt er, was sich bei einem kurzen Halt lohnt und was eine Nacht am Boden braucht.',
      columns: ['Zeit am Boden', 'Im WHO-Plan vorgesehen', 'Im WHO-Plan nur auf Wunsch'],
      rows: [
        [
          'Unter 60 Minuten',
          'Abfall aus Kabine, Schränken und Bordküche, Kissen und Decken versorgen. Waschraum vollständig: WC und Sitz, Becken, Armaturen, Spiegel, Wände, Türgriffe und Boden.',
          'Tische und Armlehnen, Spüle und Arbeitsflächen der Bordküche, Ofen, Seife und Pflegeartikel auffüllen. Teppich und Böden nur bei Bedarf.',
        ],
        [
          'Über 60 Minuten',
          'Dazu Sitztaschen leeren, in der Bordküche Spüle, Armaturen, Arbeitsflächen und ausklappbare Tische, Kunststoffböden der Kabine, Seife und Pflegeartikel auffüllen.',
          'Stoffsitze absaugen, Ledersitze abwischen, Teppich saugen, Ofen innen und aussen, Tische und Armlehnen.',
        ],
        [
          'Über Nacht',
          'Alles aus den Zeilen darüber, dazu Kabinenfenster innen, Sitzkissen herausnehmen und darunter saugen, Teppichflecken, Sitzschienen, Decke, Seitenwände, Schränke, Türen, Bildschirme, Ofen und Lüftungsgitter der Bordküche.',
          'Keine: In dieser Stufe ist alles vorgesehen.',
        ],
      ],
      note: 'Reicht die Zeit nicht, haben laut WHO Abfall, Bordküche und Waschraum Vorrang. Als Schmutzfallen nennt sie die Führungsschienen der Cateringeinsätze, Fächer der Bordküche, den Abfluss der Spüle, die Schränke im Waschraum und das Fach der Notfallapotheke.',
      sources: [quelle.who],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'erster-einsatz',
      title: 'Checkliste für den ersten Einsatz an Bord',
      intro:
        'Legen Sie diese Punkte vor dem ersten Einsatz mit Ihrem Flugbetrieb fest. Danach gelten sie für jeden weiteren.',
      groups: [
        {
          title: 'Ort und Zugang',
          items: [
            'Flugplatz und Hangar oder Abstellplatz, an dem das Flugzeug steht',
            'Wer unser Team zum Flugzeug begleitet oder den Zutritt freigibt, mit Telefonnummer',
            'Ob Strom und Licht an Bord verfügbar sind (Hangar oder Bodenstromgerät)',
            'Das Zeitfenster zwischen Landung und nächstem Abflug',
          ],
        },
        {
          title: 'Kabine und Mittel',
          items: [
            'Welche Bereiche dazugehören und welche nicht',
            'Liste der freigegebenen Reinigungs- und Desinfektionsmittel',
            'Pflegehinweise des Innenausbaus für Leder, Holz und Textilien',
            'Wer über Pflegemittel, Politur oder Imprägnierung entscheidet',
          ],
        },
        {
          title: 'Bordküche und Abfall',
          items: [
            'Wer die Speisereste übernimmt: Aus Flugzeugen im grenzüberschreitenden Verkehr sind es tierische Nebenprodukte der Kategorie 1, die verbrannt werden müssen',
            'Wohin der übrige Abfall kommt',
          ],
        },
        {
          title: 'Übergabe und Diskretion',
          items: [
            'Wer die Kabine übernimmt und von uns erfährt, was sich nicht entfernen liess, etwa ein Kratzer im Lack',
            'Wie wir mit persönlichen Gegenständen und Unterlagen an Bord umgehen',
            'Ob Sie eine Geheimhaltungsvereinbarung wünschen',
          ],
        },
      ],
      sources: [quelle.vtnp, quelle.who],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Was wir an Bord reinigen',
    intro: 'Je nach Anlass und Bodenzeit gehören dazu:',
    items: [
      'Ledersitze und Stoffbezüge, Sitzschienen und Ablagen',
      'Teppiche und Böden, auch unter den Sitzen',
      'Tische, Verkleidungen und Schränke aus Holz oder Hochglanzlack',
      'Kabinenfenster innen, Spiegel und Glas',
      'Oft berührte Stellen: Türgriffe, Schalter und Bedienteile am Sitz',
      'Bordküche: Arbeitsflächen, Spüle, Fächer und Schubladen',
      'Waschraum: WC, Becken, Armaturen, Spiegel und Boden',
    ],
    notIncluded: [
      'Aussenreinigung von Rumpf, Fenstern und Triebwerken',
      'Entleeren der Toilettentanks und Auffüllen des Frischwassers',
      'Ausbau von Sitzen, Teppichen oder Verkleidungen',
      'Reparaturen an Leder, Holz oder Lack',
    ],
  },
  steps: [
    {
      title: 'Freigaben',
      text: 'Ihr Flugbetrieb nennt uns die erlaubten Mittel und regelt den Zutritt zum Flugzeug. Beides gilt danach für jeden weiteren Einsatz.',
    },
    {
      title: 'Reinigung in der Bodenzeit',
      text: 'Wir reinigen in dem Zeitfenster, das Ihr Flugplan lässt, auch abends oder am Wochenende.',
    },
    {
      title: 'Übergabe an die Crew',
      text: 'Die Kabine übernimmt die Person, die Sie bestimmt haben. Was sich nicht entfernen liess, erfährt sie von uns direkt.',
    },
  ],
  faq: [
    {
      question: 'Was kostet die Reinigung einer Privatjet-Kabine?',
      answer:
        'Einen Pauschalpreis gibt es nicht. Den Aufwand bestimmen die Grösse der Kabine und die Zahl der Sitze, die Materialien, der Zustand nach dem Flug und die Bodenzeit. Dazu kommen Einsätze abends oder am Wochenende, die Wartezeit beim Zutritt zum Flugzeug und die Frage, ob wir einmal oder regelmässig kommen. Den Betrag erhalten Sie schriftlich, nachdem wir die Kabine gesehen haben.',
    },
    {
      question: 'Welche Reinigungsmittel verwenden Sie an Bord?',
      answer:
        'Die Mittel, die für Ihr Flugzeug freigegeben sind. Die Liste steht meist im Wartungshandbuch oder liegt bei Ihrem Wartungsbetrieb. Haushaltsreiniger gehören nicht an Bord: Glasreiniger-Sprays und Alkohol weichen Kunststoffscheiben auf, ungeeignete Reiniger färben Anilinleder dunkel (siehe Tabelle der Kabinenmaterialien oben).',
    },
    {
      question: 'Pflegen oder imprägnieren Sie auch Leder und Holz?',
      answer:
        'Wir reinigen. Pflegemittel, Politur und Imprägnierung, die eine Schicht hinterlassen, tragen wir nur mit Freigabe Ihres Wartungsbetriebs auf. Nach der US-Bauvorschrift für grosse Flugzeuge müssen auch aufgetragene Beschichtungen die Brandprüfung bestehen.',
    },
    {
      question: 'Reinigen Sie auch das Flugzeug von aussen?',
      answer:
        'Nein. Wir reinigen die Kabine mit Bordküche und Waschraum. Aussenreinigung, Toilettentanks und Frischwasser gehören zu Wartungsbetrieb und Bodenabfertigung.',
    },
    {
      question: 'Wie kommt Ihr Team zum Flugzeug?',
      answer:
        'Den Zutritt zum Hangar oder Abstellplatz regeln Sie oder Ihr Flugbetrieb mit dem Flugplatz, zum Beispiel mit einer Begleitung. Planen Sie dafür etwas Zeit ein, sie gehört zum Einsatz.',
    },
    {
      question: 'Was geschieht mit Speiseresten aus der Bordküche?',
      answer:
        'Aus Flugzeugen, die über die Grenze fliegen, gelten Speisereste in der Schweiz als tierische Nebenprodukte der Kategorie 1, der Gruppe mit dem höchsten Risiko. Die Verordnung schreibt für sie die Verbrennung vor. Wer sie übernimmt, gehört in die Checkliste für den ersten Einsatz weiter oben.',
    },
    {
      question: 'Kann unser Flugbetrieb oder Family Office die Reinigung beauftragen?',
      answer:
        'Ja. Anfragen stellen Eigentümer, Flugbetriebe, Family Offices oder Assistenzen. Wichtig ist eine Person, die Mittel und Zutritt freigeben kann.',
    },
    {
      question: 'Wie gehen Sie mit persönlichen Gegenständen an Bord um?',
      answer:
        'So, wie Sie es festlegen: an ihrem Platz lassen, in ein bestimmtes Fach legen oder gar nicht berühren. Unterlagen und Geräte gehören dazu.',
    },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Wenn neben dem Jet auch Villa, Residenz oder Zweitwohnung gepflegt werden sollen.' },
    { path: '/premium/yacht', text: 'Wenn im Sommer ein Boot am Vierwaldstätter- oder Zugersee dazukommt.' },
    { path: '/premium', text: 'Wenn Sie Family Office, Büro und Anlässe ebenfalls diskret betreuen lassen möchten.' },
  ],
  cta: {
    title: 'Kabinenreinigung diskret anfragen',
    text: 'Für die Offerte brauchen wir den Flugzeugtyp, den Flugplatz, an dem er meist steht, Ihre üblichen Zeitfenster und, falls vorhanden, die Liste der freigegebenen Mittel. Nach einem Blick in die Kabine erhalten Sie die Offerte, kostenlos und unverbindlich.',
  },
}
