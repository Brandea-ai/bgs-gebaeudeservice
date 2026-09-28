import { cantonList, company, listDe } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { ArticleContent, ArticleSection, Source, Tool } from '../types'

/**
 * Ratgeber (M53, Seitenberichte P27 bis P31, Ausbau E85 nach 25-AUDIT/inhalt.md
 * Abschnitte 10 und 11). Allgemeine Ratschläge sind als solche formuliert.
 * Aussagen über das Unternehmen nur nach E18 (Erfahrung, Mitarbeitende, Kunden,
 * Versicherung, Sprachen, Antwortzeit, Offerte nach Besichtigung,
 * Abnahmegarantie), keine Preise (R3e), keine Zertifikate, Referenzen oder
 * Kundenstimmen. Offene Kundenfragen F1 bis F7 (inhalt.md) werden nicht
 * beantwortet: Qualitätskontrolle und Vertretung stehen nur als Fragen an die
 * Anbieter. Byline ohne Namen und ohne «fachlich geprüft», solange F6 offen ist.
 *
 * Quellen am 28.09.2026 gelesen: Fedlex (OR Art. 58, 256a, 257a, 257b, 257e,
 * 259, 264, 266c, 267, 267a; ZGB Art. 712h, 712m, 712s; ArG Art. 17b; MWSTG
 * Art. 25; VMWG Art. 4, Wortlaut über den Browser), BFU, BAG, HEV Schweiz,
 * Mieterinnen- und Mieterverband, Zürcher Gerichte, ZPK Reinigung, NVS,
 * Ceruniq, Forbo, ISP. Abschriften unter scratchpad/welle2/ratgeber/quellen.
 *
 * Datum: «Stand» ist der Stand des Textes. Das Veröffentlichungsdatum wird
 * erst zum Launch eingetragen (M19, GLOBAL-031).
 */

/** Abschnitt eines Ratgeberartikels mit Quellen und einem Werkzeug direkt danach (E85) */
export type RatgeberAbschnitt = ArticleSection & {
  /** Tatsächlich gelesene Primärquellen zu den Aussagen dieses Abschnitts */
  sources?: Source[]
  /** Werkzeug nach dem Abschnitt, mit eigenem Eintrag im Verzeichnis (id eindeutig, nicht teil-<n>) */
  tool?: Tool
}

/** Ratgeberartikel: Grundform aus content/types.ts, dazu Werkzeuge und Weiterlesen */
export type RatgeberArtikel = Omit<ArticleContent, 'sections'> & {
  sections: RatgeberAbschnitt[]
  /** Passende Leistung für «Weiterlesen» */
  service?: PagePath
  /** Zwei verwandte Artikel für «Weiterlesen», in dieser Reihenfolge */
  related?: PagePath[]
}

export const ratgeberUebersicht = {
  h1: 'Ratgeber Gebäudereinigung',
  intro:
    'Fachwissen für Verwaltungen, Stockwerkeigentümerschaften und Unternehmen: Pflichtenheft der Hauswartung, Wohnungsabgabe, Böden, Vergabe und Kosten einer Gebäudereinigung.',
  note: `Jeder Artikel nennt seine Quellen und den Stand der letzten Prüfung. Von ${company.brand}, für Liegenschaften und Betriebe in den Kantonen ${cantonList}.`,
  byline: `Ein Ratgeber von ${company.brand}`,
  // Mit Satzzeichen, weil es je Sprache anders steht (fr: Leerschlag vor dem Doppelpunkt, it: ohne)
  updatedLabel: 'Stand:',
  readMore: 'Artikel lesen',
  publishedLabel: 'Veröffentlicht am',
  // Gestaltung der Übersicht und der Artikelvorlage (E80), keine Aussagen über das Unternehmen
  servicesTitle: 'Direkt zu den Leistungen',
  allServices: 'Alle Leistungen im Überblick',
  allArticles: 'Alle Ratgeber',
  moreTitle: 'Weiterlesen',
  // Eckdaten rechts im IntroBand der Übersicht (E85)
  facts: [
    { label: 'Für', value: 'Verwaltungen, Stockwerkeigentümerschaften, Eigentümer und Unternehmen' },
    { label: 'Zum Ausdrucken', value: 'Pflichtenheft, Protokolleinträge, Tabelle der Beläge, Vergleichsraster und Rechenweg' },
    { label: 'Quellen', value: 'Bundesrecht auf Fedlex, BFU, BAG, Verbände und Hersteller' },
  ],
  serviceLabel: 'Passende Leistung',
  offerShort: 'Offerte anfragen',
}

// Quellen (gelesen am 28.09.2026)
const or = (art: string, label: string): Source => ({
  label: `Obligationenrecht, ${label}`,
  href: `https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_${art}`,
})
const zgb: Source = {
  label: 'Zivilgesetzbuch, Art. 712h, 712m und 712s (Stockwerkeigentum)',
  href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de#art_712_m',
}
const bfuHaftung: Source = {
  label: 'BFU: Was bedeutet Werkeigentümerhaftung?',
  href: 'https://www.bfu.ch/de/services/rechtsfragen/was-bedeutet-werkeigentuemerhaftung',
}
const bfuBoden: Source = { label: 'BFU: Bodenbelag, sicheren Boden unter den Füssen', href: 'https://www.bfu.ch/de/ratgeber/bodenbelag' }
const mvNebenkosten: Source = {
  label: 'Mieterinnen- und Mieterverband: Merkblatt unzulässige Nebenkosten 2026 (PDF)',
  href: 'https://www.mieterverband.ch/upd_fm_media/ratgeber-mietrecht/topthemen/heiz-und-nebenkosten/2026_merkblatt_unzulaessige_nebenkosten.pdf/',
}
const hevAbgabe: Source = { label: 'HEV Schweiz: Wohnungsabgabe', href: 'https://www.hev-schweiz.ch/vermieten/verwalten/wohnungsabgabe' }
const mvLebensdauer: Source = {
  label: 'Mieterinnen- und Mieterverband: Lebensdauertabelle',
  href: 'https://www.mieterverband.ch/mietrecht/unterlagen-und-tools/lebensdauertabelle/',
}
const mvTipps: Source = {
  label: 'Mieterinnen- und Mieterverband: Wohnungsabgabe und Protokoll, Fragen und Antworten',
  href: 'https://www.mieterverband.ch/mietrecht/ende-der-miete/wohnungsabgabe-protokoll/tipps/',
}
const zhRuege: Source = {
  label: 'Zürcher Gerichte: Mängelrüge bei der Rückgabe',
  href: 'https://www.gerichte-zh.ch/de/themen/miete/kuendigung-rueckgabe/rueckgabe-und-ausweisung/maengelruege',
}
const nvs: Source = {
  label: 'Naturstein-Verband Schweiz: Merkblatt Reinigung von Naturstein-Belägen (PDF)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}
const ceruniqKeramik: Source = {
  label: 'Ceruniq: Reinigungs- und Pflegeanleitung für keramische Beläge (PDF)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-keramische-belaege.pdf',
}
const ceruniqErst: Source = {
  label: 'Ceruniq: Erstreinigung für keramische Beläge (PDF)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/erstreinigung-fuer-keramische_belaege.pdf',
}
const forboLinoleum: Source = {
  label: 'Forbo Flooring: Reinigungs- und Pflegeempfehlung Linoleum (PDF)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/9597/Forbo_Linoleum_Reinigung-Pflege_202204.pdf',
}
const forboVinyl: Source = {
  label: 'Forbo Flooring: Reinigungs- und Pflegeempfehlung Vinyl-Designbeläge (PDF)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/711557/Forbo_Allura-Designbelage_Reinigung-Pflege_202001.pdf',
}
const ispVersiegelt: Source = {
  label: 'ISP Parkettverband: Pflegeanleitung versiegeltes Parkett (PDF)',
  href: 'https://www.parkett-verband.ch/images/content/Pflegeanleitungversiegelt2022de.pdf',
}
const ispGeoelt: Source = {
  label: 'ISP Parkettverband: Pflegeanleitung geöltes Parkett (PDF)',
  href: 'https://www.parkett-verband.ch/images/content/Pflegeanleitunggeoelt2022de.pdf',
}
const bagSchimmel: Source = { label: 'BAG: Vorsicht Schimmel (PDF)', href: 'https://www.bag.admin.ch/dam/de/sd-web/wBJWq1KVfpS-/vorsicht-schimmel.pdf' }
const bagJavel: Source = { label: 'BAG: Javelwasser', href: 'https://www.bag.admin.ch/de/javelwasser' }
const zpkGav: Source = { label: 'ZPK Reinigung: Gesamtarbeitsvertrag, Geltungsbereich', href: 'https://zpk-reinigung.ch/recht-lohn/gav' }
const zpkInhalte: Source = { label: 'ZPK Reinigung: Inhalte des GAV', href: 'https://zpk-reinigung.ch/recht-lohn/gav-inhalte' }
const arg: Source = { label: 'Arbeitsgesetz, Art. 17b (Lohnzuschlag für Nachtarbeit)', href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_17_b' }
const mwstg: Source = { label: 'Mehrwertsteuergesetz, Art. 25 (Steuersätze)', href: 'https://www.fedlex.admin.ch/eli/cc/2009/615/de#art_25' }

// Neu (E85): Baustein 10.1, Suchfrage «pflichtenheft hauswartung» (24), Kern aus 3.8.1 bis 3.8.3
const pflichtenheft: RatgeberArtikel = {
  path: '/blog/pflichtenheft-hauswartung',
  h1: 'Pflichtenheft Hauswartung: Vorlage und Erklärung',
  subtitle: 'Was in ein Pflichtenheft gehört, wie Sie Rhythmus und Kostengrenze bestimmen und warum die Nebenkostenabrechnung davon profitiert.',
  teaser: 'Aufbau, ausgefülltes Beispiel und typische Lücken: So entsteht ein Pflichtenheft, das Verwaltung, Eigentümerschaft und Hauswartung gleich verstehen.',
  updated: '2026-09-28',
  intro: [
    'Viele Hauswartungen laufen seit Jahren auf Zuruf. Das geht gut, bis der Hauswart wechselt, eine Mieterin die Nebenkostenabrechnung hinterfragt oder nach einem Sturz im Treppenhaus jemand wissen will, wer wann was kontrolliert hat. Ein Pflichtenheft beantwortet diese Fragen, bevor sie gestellt werden.',
  ],
  summary: {
    title: 'Kurz gesagt',
    items: [
      'Ein Pflichtenheft nennt jede Aufgabe mit Rhythmus, Zuständigkeit und Meldeweg, dazu eine Kostengrenze für Kleinreparaturen.',
      'Trennen Sie den Betrieb des Hauses von Verwaltungsarbeit und Reparaturen. Nur dann lässt sich die Hauswartung sauber über die Nebenkosten abrechnen.',
      'Halten Sie Kontrollgänge mit Datum und Befund fest. Die Eigentümerschaft haftet für Schäden aus mangelhaftem Unterhalt auch ohne Verschulden (Art. 58 OR).',
      'Prüfen Sie Aufgaben und Rhythmus einmal im Jahr, am besten zusammen mit der Nebenkostenabrechnung.',
    ],
  },
  sections: [
    {
      title: 'Wozu ein Pflichtenheft dient',
      paragraphs: [
        'Ein Pflichtenheft ist die schriftliche Liste dessen, was die Hauswartung in einer bestimmten Liegenschaft übernimmt. Es ersetzt keinen Vertrag, ist aber dessen wichtigste Beilage. Vier Dinge hängen davon ab:',
      ],
      definitions: [
        {
          term: 'Der Auftrag',
          text: 'Was nicht aufgeschrieben ist, bleibt Auslegungssache. Ob der Hauswart die Türe zum Velokeller ölt oder die Container am Abfuhrtag an die Strasse stellt, steht im Pflichtenheft oder führt früher oder später zu Diskussionen.',
        },
        {
          term: 'Der Vergleich',
          text: 'Drei Offerten auf dasselbe Pflichtenheft lassen sich nebeneinanderlegen. Ohne diese gemeinsame Grundlage beschreiben drei Anbieter oft drei verschiedene Leistungen.',
        },
        {
          term: 'Die Abrechnung',
          text: 'Die Mieterschaft kann Einsicht in die Belege der Nebenkosten verlangen (Art. 257b Abs. 2 OR). Das Pflichtenheft zeigt, welche Stunden auf Reinigung und Betrieb entfallen und welche auf Verwaltung oder Reparaturen.',
        },
        {
          term: 'Der Nachweis',
          text: 'Nach Art. 58 OR ersetzt die Eigentümerschaft den Schaden, den ein Gebäude wegen mangelhafter Unterhaltung verursacht. Die BFU rät, bestehende Bauten periodisch zu kontrollieren und die Kontrollen zu dokumentieren. Im Pflichtenheft steht, wer das tut und wie oft.',
        },
      ],
      sources: [or('58', 'Art. 58 und 257b'), bfuHaftung],
    },
    {
      title: 'Der Aufbau in fünf Teilen',
      paragraphs: [
        'Ob Mehrfamilienhaus, Stockwerkeigentum oder Geschäftshaus: Ein brauchbares Pflichtenheft hat immer dieselben fünf Teile. Zuerst kommt das Objekt, am Schluss der Nachweis.',
      ],
      items: [
        'Objekt: Adresse, Zahl der Wohnungen und Treppenhäuser, Lift, Waschküchen, Heizung, Fläche der Umgebung, Sammelstelle für Abfall.',
        'Aufgaben mit Rhythmus: jede Tätigkeit in einer eigenen Zeile, mit «wöchentlich», «monatlich» oder «nach Bedarf», bei saisonalen Arbeiten mit den Monaten.',
        'Grenzen: die Kostengrenze für Kleinreparaturen ohne Rückfrage und was ausdrücklich nicht dazugehört, etwa Winterdienst oder Pikett.',
        'Meldewege: wer Mängel entgegennimmt, wie schnell und auf welchem Weg, und wer die Hauswartung bei Abwesenheit vertritt.',
        'Nachweis: Kontrollblatt, Stundenrapport oder Jahresbericht, dazu das Datum der nächsten Überprüfung.',
      ],
      ordered: true,
    },
    {
      title: 'Beispiel: zwölf Wohnungen, ein Lift, eine Waschküche',
      paragraphs: [
        'Die Vorlage unten ist für ein Mehrfamilienhaus mit zwölf Wohnungen, einem Treppenhaus mit Lift, einer Gemeinschaftswaschküche und rund 600 m² Umgebung ausgefüllt. Die Werte sind ein Beispiel und kein Richtwert. In die Spalte «Ihr Eintrag» gehört, was für Ihre Liegenschaft gilt.',
      ],
      tool: {
        kind: 'table',
        id: 'vorlage-pflichtenheft',
        title: 'Vorlage: Pflichtenheft mit Beispiel',
        intro:
          'Die letzte Spalte zeigt, wie der Mieterverband die Tätigkeit bei den Nebenkosten einordnet. Voraussetzung ist immer, dass der Mietvertrag die Hauswartung als Nebenkosten nennt (Art. 257a Abs. 2 OR).',
        columns: ['Aufgabe', 'Beispiel', 'Ihr Eintrag', 'Nebenkosten laut Mieterverband'],
        rows: [
          ['Treppenhaus und Eingang', 'Wöchentlich feucht reinigen, Handläufe und Glastüre inbegriffen', '__________', 'zulässig'],
          ['Lift', 'Kabine und Türen wöchentlich, Türschwellen monatlich', '__________', 'zulässig'],
          ['Waschküche und Trockenraum', 'Boden, Lavabo und Ablauf zweimal im Monat', '__________', 'zulässig'],
          ['Heizung bedienen', 'Beim Kontrollgang Druck und Störanzeige ablesen, Befund notieren', '__________', 'zulässig'],
          ['Kleinere Instandhaltung', 'Leuchtmittel ersetzen, Schlösser ölen; ohne Rückfrage bis CHF ______ je Fall', '__________', 'zulässig, solange keine Fachkenntnisse nötig sind'],
          ['Umgebung', 'Rasen von April bis Oktober alle zwei Wochen, Laub im Herbst, Hecken nach Pflegeplan', '__________', 'zulässig'],
          ['Kontrollgang Allgemeinflächen', 'Jede Woche, Befund auf dem Kontrollblatt', '__________', 'nicht aufgeführt, im Mietvertrag klären'],
          ['Abfall und Wertstoffe', 'Container am Abfuhrtag bereitstellen, Sammelstelle sauber halten', '__________', 'nicht aufgeführt'],
          ['Wohnungsübergaben', 'Wohnung öffnen, Zählerstände notieren, im Auftrag der Verwaltung', '__________', 'nicht zulässig'],
          ['Handwerker begleiten', 'Zutritt geben, Arbeiten beaufsichtigen', '__________', 'nicht zulässig'],
          ['Meldungen an die Verwaltung', 'Mängel am selben Tag per E-Mail, dringende Fälle telefonisch', '__________', 'nicht zulässig'],
          ['Ausdrücklich nicht enthalten', 'Winterdienst, Pikett, Wartung von Heizung und Lift durch Fachfirmen', '__________', 'entfällt'],
        ],
        note:
          'Die Einordnung folgt dem Merkblatt des Mieterverbands zu unzulässigen Nebenkosten (Stand 2026). Wie ein Einzelfall zu beurteilen ist, hängt vom Mietvertrag ab. Die Tabelle beschreibt die Rechtslage allgemein und ist keine Rechtsberatung.',
        sources: [mvNebenkosten, or('257_a', 'Art. 257a')],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Den Rhythmus begründen',
      paragraphs: [
        'Wie oft die Hauswartung kommt, bestimmt den grössten Teil ihrer Kosten. Ein fester Wochentakt für alles ist bequem, passt aber selten. Besser ist es, jeden Rhythmus mit der Nutzung zu begründen:',
      ],
      items: [
        'Viele Wohnungen, Kinderwagen und Velos: den Eingangsbereich öfter reinigen als die oberen Stockwerke.',
        'Gemeinschaftswaschküche mit Waschplan: die Kontrolle nach den Waschtagen richten.',
        'Häufige Mieterwechsel: Übergaben als eigene Position nach Aufwand, nicht in der Pauschale.',
        'Umgebung: Monate statt «regelmässig», damit Laub und Heckenschnitt eingeplant sind.',
        'Flachdach, Lichtschächte oder Aussentreppen: einen zusätzlichen Kontrollgang nach Unwettern vorsehen.',
      ],
      note: 'Art. 58 OR schreibt keinen Rhythmus für Kontrollen vor. Wichtig ist, dass Mängel früh bemerkt und behoben werden. Ein begründeter Takt ist leichter zu erklären, wenn später jemand danach fragt.',
    },
    {
      title: 'Kostengrenze und kleiner Unterhalt',
      paragraphs: [
        'Die Kostengrenze bestimmt, bis zu welchem Betrag die Hauswartung eine Kleinigkeit ohne Rückfrage erledigt. Ohne Grenze wird jedes Leuchtmittel zur E-Mail an die Verwaltung. Ist sie zu hoch angesetzt, verliert die Verwaltung den Überblick über die Ausgaben.',
        'Praktisch ist eine Grenze je Fall und eine Summe pro Jahr, beide im Pflichtenheft. Was darüber liegt, geht als Meldung an die Verwaltung, und diese beauftragt den Fachbetrieb.',
        'Davon zu unterscheiden ist der kleine Unterhalt der Mieterschaft. Mängel in der eigenen Wohnung, die sich mit kleinen Reinigungen oder Ausbesserungen beheben lassen, beseitigt die Mieterschaft nach Ortsgebrauch auf eigene Kosten (Art. 259 OR). Die Hauswartung ist für die Allgemeinflächen da. Schreiben Sie ins Pflichtenheft, ob sie überhaupt in Wohnungen tätig wird und auf wessen Rechnung.',
      ],
      sources: [or('259', 'Art. 259')],
    },
    {
      title: 'Hauswartung in der Nebenkostenabrechnung',
      paragraphs: [
        'Nebenkosten schuldet die Mieterschaft nur, wenn sie besonders vereinbart sind (Art. 257a Abs. 2 OR), und nur für Leistungen, die mit dem Gebrauch der Sache zusammenhängen (Art. 257b Abs. 1 OR). Für die Hauswartung heisst das: Reinigung, Bedienung der Heizung und kleinere Instandhaltung können dazugehören. Verwaltungsarbeit und Reparaturen trägt die Eigentümerschaft.',
        'Der Mieterverband rät Mieterinnen und Mietern, die Tätigkeiten der Hauswartung samt Aufwand in Stunden zu erfragen, und schreibt, das Pflichtenheft müsse offengelegt werden. Eine Verwaltung, die Stunden nach den Zeilen des Pflichtenhefts erfasst, beantwortet solche Fragen mit Belegen statt mit Schätzungen.',
        'Wird eine externe Firma beauftragt, verweist der Mieterverband auf das Gebot der Wirtschaftlichkeit. Gleichen Sie zusätzliche Leistungen deshalb vor der Vergabe mit dem Mietvertrag ab. Allgemeine Regeln zu Nebenkosten und Abrechnung finden Sie auf der Seite [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      ],
      sources: [or('257_b', 'Art. 257a und 257b')],
    },
    {
      title: 'Im Stockwerkeigentum: zwei Leser',
      paragraphs: [
        'Im Stockwerkeigentum hat das Pflichtenheft zwei Leser: die Verwaltung, die es umsetzt, und die Versammlung, die das Geld freigibt. Das Gesetz weist der Versammlung die jährliche Genehmigung von Kostenvoranschlag, Rechnung und Kostenverteilung zu (Art. 712m ZGB). Umsetzen muss es der Verwalter (Art. 712s ZGB).',
        'Legen Sie das Pflichtenheft deshalb dem Budget bei, wenn die Hauswartung neu vergeben oder erweitert wird. Hat die Gemeinschaft einen Ausschuss gewählt, kann er Pflichtenheft und Offerten vorab prüfen und der Versammlung Antrag stellen.',
        'Verteilt werden die Kosten nach Wertquoten. Nutzt eine Einheit eine Anlage nicht oder kaum, etwa ein Ladenlokal im Erdgeschoss den Lift, ist das bei der Verteilung zu berücksichtigen (Art. 712h Abs. 3 ZGB). Welche Mehrheit die Vergabe braucht, regelt Ihr Reglement.',
      ],
      sources: [zgb],
    },
    {
      title: 'Sieben Lücken, die später Ärger machen',
      items: [
        '«Nach Bedarf» ohne Grenze: Wer entscheidet, wann Bedarf besteht?',
        'Keine Meldestelle: Mängel landen beim Hauswart und bleiben dort liegen.',
        'Reparaturen und Reinigung in einer Pauschale: Die Nebenkosten lassen sich dann nicht belegen.',
        'Schlüssel ohne Liste: Niemand weiss, wer welchen Badge hat.',
        'Saisonarbeiten ohne Monate: Laub und Heckenschnitt werden jedes Jahr zur Überraschung.',
        'Kein Ausschluss: Was nicht erwähnt ist, erwartet die Mieterschaft trotzdem, etwa den Winterdienst.',
        'Keine Überprüfung: Das Pflichtenheft von vor zehn Jahren kennt die neue Ladestation in der Tiefgarage nicht.',
      ],
    },
    {
      title: 'Einmal im Jahr überprüfen',
      paragraphs: [
        'Ein guter Zeitpunkt ist die Nebenkostenabrechnung, im Stockwerkeigentum die Vorbereitung der Versammlung. Drei Fragen genügen: Welche Aufgaben sind dazugekommen? Welche Zeilen haben mehr oder weniger Stunden gebraucht als geplant? Welche Meldungen blieben offen?',
        'Vergeben Sie die Hauswartung neu, ist das überprüfte Pflichtenheft zugleich die Grundlage für die Offerten. Wie wir die Hauswartung übernehmen, beschreibt die Seite [Hauswartung](/leistungen/hauswartung).',
      ],
    },
  ],
  service: '/leistungen/hauswartung',
  related: ['/blog/wohnungsabgabe-reinigung', '/blog/reinigungskosten-schweiz'],
  cta: {
    title: 'Hauswartung nach Ihrem Pflichtenheft',
    text: 'Schicken Sie uns Ihr Pflichtenheft oder die Eckdaten: Adresse, Wohnungen, Treppenhäuser, Lift, Waschküche und Umgebung. Wir gehen durch die Liegenschaft und rechnen die Offerte auf dieser Grundlage. Rundgang und Offerte sind für Sie ohne Kosten und ohne Verpflichtung.',
  },
}

// Neu (E85): Baustein 10.1, Suchfragen «wohnungsabgabe reinigung», «wie sauber muss eine Wohnung bei der Übergabe sein» (24), Kern aus 3.4.1 bis 3.4.3
const wohnungsabgabe: RatgeberArtikel = {
  path: '/blog/wohnungsabgabe-reinigung',
  h1: 'Wohnungsabgabe: Was Verwaltungen bei Abnahme und Endreinigung beachten',
  subtitle: 'Wie sauber die Wohnung sein muss, wie Sie Mängel so festhalten, dass sie gelten, und wann die Endreinigung an der Reihe ist.',
  teaser: 'Zustand, Protokoll, Mängelrüge und Reinigung: die Wohnungsabgabe aus Sicht der Verwaltung, mit Beispielen für genaue Protokolleinträge.',
  updated: '2026-09-28',
  intro: [
    'Bei einer Wohnungsabgabe entscheidet eine knappe Stunde darüber, wer später was bezahlt. Was im Protokoll fehlt oder zu ungenau steht, lässt sich danach kaum mehr geltend machen. Dieser Ratgeber richtet sich an Verwaltungen und Eigentümer und zeigt, worauf es bei Zustand, Protokoll und Endreinigung ankommt.',
  ],
  summary: {
    title: 'Kurz gesagt',
    items: [
      'Zurückzugeben ist die Wohnung so, wie sie nach vertragsgemässem Gebrauch aussieht (Art. 267 OR). Normale Abnutzung ist mit dem Mietzins abgegolten.',
      'Mängel sind bei der Rückgabe zu prüfen und sofort zu melden, einzeln und genau (Art. 267a OR).',
      'Protokoll vor Reinigung: Nur so bleibt der Zustand bei der Rückgabe belegbar.',
      'Die nächste Mieterschaft darf das Rückgabeprotokoll einsehen (Art. 256a OR). Ein genaues Protokoll hilft also zweimal.',
    ],
  },
  sections: [
    {
      title: 'Wie sauber muss eine Wohnung bei der Übergabe sein?',
      paragraphs: [
        'Das Gesetz verlangt keinen Neuzustand. Die Mieterschaft muss die Wohnung so zurückgeben, wie sie sich aus dem vertragsgemässen Gebrauch ergibt (Art. 267 OR). Was «gereinigt» im Einzelnen heisst, regelt der Mietvertrag. Der Hauseigentümerverband zählt zur gründlichen Reinigung unter anderem:',
      ],
      items: [
        'Fenster innen und aussen mit Rahmen, Fensterläden, Rollläden und Lamellenstoren',
        'in der Küche Kochherd, Backofen, Kühlschrank, Fett im Dampfabzug und Klebefolien in den Schränken',
        'Kalkablagerungen in Bad und WC',
        'Kleberückstände auf dem Parkett',
        'Nebenräume wie Keller, Estrich und Garage, vollständig geräumt',
      ],
      note: 'Der Mieterverband ergänzt aus Sicht der Mieterschaft: Zur gründlichen Reinigung gehört auch das Schamponieren eines Teppichs, nicht aber gefährliche Arbeiten oder solche, die Fachkenntnisse brauchen, etwa Fensterläden aushängen und ölen. Wird die Wohnung nach dem Auszug vollständig renoviert, genügt nach seiner Ansicht eine besenreine Abgabe.',
      sources: [or('267', 'Art. 267'), hevAbgabe, mvTipps],
    },
    {
      title: 'Reinigung, Abnutzung, Schaden',
      paragraphs: ['Im Protokoll stehen oft drei Arten von Befunden durcheinander. Sie haben verschiedene Folgen und gehören getrennt aufgeschrieben.'],
      definitions: [
        {
          term: 'Ungenügende Reinigung',
          text: 'Fett im Backofen, Kalk an der Armatur, Staub auf den Storen. Nach dem Mieterverband muss die Vermieterschaft zuerst eine kurze Nachfrist zum Nachreinigen geben. Bleibt die Wohnung ungenügend, kann sie reinigen lassen und die Rechnung weitergeben.',
        },
        {
          term: 'Normale Abnutzung',
          text: 'Abgelaufene Teppiche, verblichene Tapeten, leichte Streifen an den Wänden neben Betten und Bildern, Dübellöcher in üblichem Rahmen. Sie ist mit dem Mietzins bezahlt.',
        },
        {
          term: 'Übermässige Abnutzung',
          text: 'Raucherschäden, Brandflecken im Teppich, Kratzspuren von Haustieren an Türen, Sprünge im Lavabo. Hier haftet die Mieterschaft, bei einem Ersatz aber nur für den Restwert.',
        },
      ],
      note: 'Den Restwert bestimmt die paritätische Lebensdauertabelle von Hauseigentümer- und Mieterverband. Ein Beispiel des Mieterverbands: Ein Spannteppich mittlerer Qualität hält zehn Jahre. Muss er nach sechs Jahren wegen Brandspuren ersetzt werden, trägt die Mieterschaft 40 Prozent der Kosten. Ist die Lebensdauer abgelaufen, trägt sie nichts mehr.',
      sources: [mvLebensdauer],
    },
    {
      title: 'Das Protokoll: genau genug, um zu gelten',
      paragraphs: [
        'Die Zürcher Gerichte nennen drei Voraussetzungen einer korrekten Mängelrüge: Die Mängel sind konkret bezeichnet, es geht hervor, dass die Vermieterschaft die Mieterschaft dafür haftbar machen will, und die Rüge erfolgt sofort bei der Rückgabe. Sammelbegriffe erfüllen die erste Voraussetzung oft nicht.',
        'Unterschreibt die Mieterschaft Mängel zu ihren Lasten, gelten sie nach dem Hauseigentümerverband als anerkannt. Bestreitet sie einen Punkt, notieren Sie das im Protokoll und rügen diesen Punkt zusätzlich mit eingeschriebenem Brief.',
      ],
      tool: {
        kind: 'table',
        id: 'protokoll-eintraege',
        title: 'Protokolleinträge: zu ungenau und genau genug',
        intro: 'Beispiele für typische Befunde, Raum für Raum. Die letzte Spalte ordnet den Befund ein, damit Reinigung, Abnutzung und Schaden getrennt bleiben.',
        columns: ['Raum', 'Zu ungenau', 'Genau genug', 'Art des Befunds'],
        rows: [
          ['Küche', '«Küche schmutzig»', 'Backofen mit Fettkruste an Rückwand, Blech und Gitter; Fettfilter im Dampfabzug verklebt', 'Reinigung'],
          ['Bad und WC', '«Bad nicht sauber»', 'Duschglas und Mischbatterie mit Kalkrand; Urinstein unter dem Rand der WC-Schüssel', 'Reinigung'],
          ['Wohnzimmer', '«Parkett beschädigt»', 'Vor der Balkontüre drei Kratzer von rund 20 cm, Versiegelung durchgerieben; Parkett verlegt 2016', 'Schaden oder Abnutzung, je nach Alter'],
          ['Schlafzimmer', '«Wände schmutzig»', 'Graue Streifen auf 1 m Breite hinter dem Bett; Decke gelblich verfärbt, heller Rand hinter Bildern', 'Streifen: Abnutzung; Verfärbung durch Rauch: Schaden'],
          ['Fenster', '«Fenster nicht geputzt»', 'Küchenfenster mit Schmutzrändern in Falzen und Rahmen, Glas aussen streifig; Lamellenstoren im Wohnzimmer verstaubt', 'Reinigung'],
          ['Keller', '«Keller nicht geräumt»', 'Im Kellerabteil 4 stehen ein Schrank und fünf Kartons', 'Räumung'],
          ['Schlüssel', '«Schlüssel unvollständig»', 'Erhalten 2 von 3 Wohnungsschlüsseln, Briefkastenschlüssel fehlt', 'Fehlende Schlüssel'],
        ],
        note: 'Nummerierte Fotos mit Datum stützen jeden Eintrag, ersetzen ihn aber nicht. Verweisen Sie im Protokoll auf die Nummer, dann ist später klar, welches Bild zu welchem Befund gehört.',
        sources: [zhRuege, hevAbgabe],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Die Mängelrüge: sofort, und bei versteckten Mängeln später',
      paragraphs: [
        'Art. 267a OR nennt keine Frist in Tagen, nur das Wort «sofort». Der Mieterverband sieht eine Woche als äusserste Grenze, wenn die Mieterschaft die Mängel nicht schon im Protokoll unterschrieben hat. Sicherer ist die Rüge am Abgabetag, mit einer Kopie des Protokolls für die Mieterschaft.',
        'Weigert sich die Mieterschaft, bei der Rückgabe mitzuwirken, geht die Rüge nach den Zürcher Gerichten sofort schriftlich hinaus, aus Beweisgründen eingeschrieben. Die Gerichte stellen dafür einen Musterbrief bereit.',
        'Mängel, die bei übungsgemässer Prüfung nicht zu erkennen waren, sind sofort nach ihrer Entdeckung zu melden (Art. 267a Abs. 3 OR). Wer zuerst reparieren lässt und dann die Rechnung schickt, ist nach dem Mieterverband zu spät.',
      ],
      sources: [or('267_a', 'Art. 267a')],
    },
    {
      title: 'Der Ablauf rund um den Abgabetag',
      paragraphs: [
        'Die Wohnung ist nach dem Hauseigentümerverband grundsätzlich am letzten Tag der Mietdauer während der üblichen Geschäftszeiten abzugeben. Oft vereinbart der Mietvertrag den ersten Tag des Folgemonats. Legen Sie den Termin früh fest, denn Reinigung, Handwerker und der Einzug der neuen Mieterschaft richten sich danach.',
      ],
      tool: {
        kind: 'timeline',
        id: 'ablauf-abgabe',
        title: 'Vom Vorgespräch bis zum Mietzinsdepot',
        entries: [
          {
            label: 'Einige Wochen vorher',
            text: 'Vorbesichtigung mit der Mieterschaft: zeigen, was bei der Abnahme geprüft wird, und kleine Reparaturen ansprechen, die sie selbst erledigen kann. Termine für Abgabe und Endreinigung festlegen.',
          },
          {
            label: 'Am Abgabetag',
            text: 'Raum für Raum prüfen, Befunde nach Reinigung, Abnutzung und Schaden getrennt notieren, Zählerstände ablesen, alle Schlüssel zählen, auch nachgemachte.',
          },
          {
            label: 'Direkt danach',
            text: 'Protokoll aushändigen oder sofort zustellen, bestrittene Punkte eingeschrieben rügen, Fotos nummeriert ablegen.',
          },
          {
            label: 'Nach dem Protokoll',
            text: 'Zuerst Maler und Reparaturen, dann die Endreinigung. Wird vollständig renoviert, folgt am Schluss eine [Bauendreinigung](/leistungen/baureinigung).',
          },
          {
            label: 'Bei der Übergabe',
            text: 'Antrittsprotokoll mit der neuen Mieterschaft erstellen. Auf Verlangen das Rückgabeprotokoll der Vorgänger vorlegen (Art. 256a OR).',
          },
          {
            label: 'Innert eines Jahres',
            text: 'Macht die Vermieterschaft innert einem Jahr nach Ende des Mietverhältnisses keinen Anspruch rechtlich geltend, kann die Mieterschaft das Mietzinsdepot von der Bank zurückverlangen (Art. 257e Abs. 3 OR).',
          },
        ],
        sources: [hevAbgabe, or('256_a', 'Art. 256a und 257e')],
      },
    },
    {
      title: 'Die Endreinigung: wer sie bestellt und wann',
      paragraphs: [
        'Zwei Wege sind üblich. Entweder beauftragt die Mieterschaft selbst eine Reinigungsfirma; der Hauseigentümerverband rät ihr dann zu einer Abnahmegarantie im Pauschalpreis. Oder die Verwaltung lässt nach dem Protokoll reinigen, weil die Wohnung ungenügend gereinigt zurückkam oder weil sie vor der Neuvermietung einen einheitlichen Standard will.',
        'Im zweiten Fall ist die Reihenfolge entscheidend: Protokoll, Rüge, Nachfrist, dann Reinigung. So bleibt belegt, was die Mieterschaft zu vertreten hat, und gereinigt wird in einer leeren Wohnung, in der sich auch hinter Einbauten arbeiten lässt.',
        'Für Verwaltungen, Eigentümer und Unternehmen übernehmen wir die Endreinigung mit Abnahmegarantie, beschrieben auf der Seite [Umzugsreinigung](/leistungen/umzugsreinigung). Den Auftrag erteilt dabei die Verwaltung oder die Eigentümerschaft, nicht die ausziehende Mieterschaft.',
      ],
    },
    {
      title: 'Häufige Fehler bei der Abgabe',
      items: [
        'Die Wohnung vor dem Protokoll reinigen lassen.',
        'Sammelbegriffe wie «ungenügend gereinigt» statt einzelner Befunde.',
        'Abnutzung als Schaden verrechnen, ohne das Alter der Einrichtung zu kennen.',
        'Das Protokoll nicht aushändigen oder erst Tage später zustellen.',
        'Schlüssel nicht zählen und nicht quittieren lassen.',
        'Einen versteckten Mangel erst mit der Handwerkerrechnung melden.',
        'Das Rückgabeprotokoll nicht aufbewahren, obwohl die nächste Mieterschaft es sehen darf.',
      ],
      note: 'Der Artikel beschreibt die Rechtslage allgemein. Für Ihren Fall zählen Mietvertrag und Umstände; bei Streit helfen Ihr Verband und die Schlichtungsbehörde am Ort der Liegenschaft.',
    },
  ],
  service: '/leistungen/umzugsreinigung',
  related: ['/blog/pflichtenheft-hauswartung', '/blog/bodenbelaege-grundreinigung'],
  cta: {
    title: 'Endreinigung für Ihre nächste Abgabe',
    text: 'Für die Planung brauchen wir Adresse, Abgabetag und Grösse der Wohnung. Stehen mehrere Wechsel an, etwa zum Ende eines Quartals, planen wir sie gemeinsam. Wir sehen uns die Wohnung an, danach kommt die schriftliche Offerte, kostenlos und unverbindlich.',
  },
}

// Neu (E85): Baustein 10.1, Suchfrage «grundreinigung» (24), Kern aus 3.3.1 und 3.3.3
const bodenarten: RatgeberArtikel = {
  path: '/blog/bodenbelaege-grundreinigung',
  h1: 'Grundreinigung nach Bodenbelag: was Stein, Plättli, Linoleum und Parkett vertragen',
  subtitle: 'Warum dasselbe Mittel den einen Boden rettet und den anderen verätzt, wie Sie den Belag erkennen und was Sie vor der Arbeit klären.',
  teaser: 'pH-Wert, Fugen, Pflegefilme und Rutschgefahr: Materialkunde für Verwaltungen und Betriebe, die eine Grundreinigung planen oder vergeben.',
  updated: '2026-09-28',
  intro: [
    'Eine Grundreinigung ist mehr als kräftiger putzen. Sie löst Schichten, die sich über Monate aufgebaut haben, mit stärkeren Mitteln und mit Maschinen. Genau deshalb kann sie einem Boden schaden, wenn Mittel und Belag nicht zusammenpassen. Dieser Ratgeber erklärt die Grundlagen, damit Sie eine Grundreinigung sicher planen und das Ergebnis beurteilen können.',
  ],
  summary: {
    title: 'Kurz gesagt',
    items: [
      'Säure löst Kalk und greift deshalb auch Marmor, Kalkstein und Zementfugen an. Alkalische Mittel lösen Fett und alte Pflegefilme.',
      'Bestimmen Sie unbekannte Beläge vor der Grundreinigung oder lassen Sie sie an einer versteckten Stelle prüfen.',
      'Das Nachspülen zählt so viel wie das Reinigen: Rückstände machen den Boden fleckig oder rutschig.',
      'Die Pflegeanleitung des Herstellers geht vor. Wer davon abweicht, riskiert die Gewährleistung.',
    ],
  },
  sections: [
    {
      title: 'Unterhalt, Grundreinigung, Pflege, Sanierung',
      paragraphs: ['Vier Arbeiten werden oft in einen Topf geworfen. Sie unterscheiden sich in Mittel, Takt und darin, wer sie ausführen sollte.'],
      definitions: [
        {
          term: 'Unterhaltsreinigung',
          text: 'Nimmt losen und leicht haftenden Schmutz auf, trocken oder feucht. Den Takt bestimmt die Nutzung: Der Naturstein-Verband nennt je nach Verschmutzung täglich, wöchentlich oder monatlich.',
        },
        {
          term: 'Grundreinigung',
          text: 'Entfernt, was sich trotz Unterhalt ansammelt: Pflegefilme, Kalk, Fett, Schmutz in Poren und Fugen. Bei Naturstein reicht der Abstand laut Merkblatt des Verbands von einem Monat in stark verschmutzten Bereichen bis zu einem Jahr.',
        },
        {
          term: 'Pflege',
          text: 'Ein Schutzfilm, Öl oder Polish nach der Grundreinigung. Neuere Linoleum- und Vinylbeläge tragen ab Werk eine Oberflächenvergütung, eine zusätzliche Erstpflege ist laut Hersteller grundsätzlich nicht nötig.',
        },
        {
          term: 'Sanierung',
          text: 'Schleifen, Polieren, neu versiegeln oder ölen. Das ist Arbeit für Natursteinbetrieb, Parkett- oder Bodenleger. Stein lässt sich beim Schleifen nur um wenige Millimeter abtragen.',
        },
      ],
      sources: [nvs, forboLinoleum, forboVinyl],
    },
    {
      title: 'Der pH-Wert entscheidet',
      paragraphs: [
        'Reinigungsmittel wirken über ihren pH-Wert. Saure Mittel liegen unter 7 und lösen mineralische Beläge wie Kalk, Urinstein und Zementschleier. Alkalische Mittel liegen über 7 und lösen Fett, Öl und alte Pflegeschichten. Neutrale Mittel um 7 sind für die laufende Reinigung gedacht.',
        'Das Problem: Marmor, Kalkstein und Travertin bestehen selbst zu einem grossen Teil aus Kalk. Eine Säure unterscheidet nicht zwischen dem Kalkrand und dem Stein darunter, und Zementfugen greift sie ebenso an. Deshalb hinterlässt ein Entkalker auf poliertem Marmor matte Flecken, die keine Reinigung mehr entfernt.',
        'Auch alkalische Mittel haben Grenzen. Für Linoleum nennt der Hersteller Forbo Reiniger unter pH 9 und schliesst hochalkalische Laugen aus.',
      ],
      note: 'Fragen Sie vor einer Grundreinigung, welches Mittel mit welchem pH-Wert auf welchem Belag vorgesehen ist. Die Antwort gehört ins Leistungsverzeichnis.',
    },
    {
      title: 'Den Belag erkennen',
      paragraphs: [
        'Am sichersten sind die Unterlagen aus dem Bau: Pflegeanleitungen der Hersteller, Protokolle der Bauabnahme, Rechnungen der Bodenleger. Die Anleitungen des Plattenverbands Ceruniq sehen eine Unterschrift der Bauherrschaft vor und halten fest, dass unsachgemässe Reinigung zum Erlöschen der Gewährleistung führt.',
        'Fehlen Unterlagen, ersetzt keine Vermutung eine Probe. Der Naturstein-Verband beschreibt, wie Fachleute Stein prüfen: Eine fingernagelgrosse Stelle an verstecktem Ort wird angeschliffen und mit Säure beträufelt. Braust sie, ist der Stein säureempfindlich.',
        'Solange der Stein nicht bestimmt ist, kommt keine Säure auf den Boden. Jede neue Methode wird zuerst an einer unauffälligen Stelle versucht.',
      ],
      sources: [ceruniqKeramik],
    },
    {
      title: 'Die Beläge im Überblick',
      paragraphs: [
        'Die Tabelle fasst zusammen, was die Merkblätter der Schweizer Fachverbände und die Pflegeanleitungen der Hersteller für die Grundreinigung vorsehen. Sie ersetzt nicht die Anleitung Ihres Belags.',
      ],
      tool: {
        kind: 'table',
        id: 'belaege-grundreinigung',
        title: 'Grundreinigung und Pflege nach Belag',
        columns: ['Belag', 'Grundreinigung', 'Danach', 'Fachbetrieb nötig'],
        rows: [
          [
            'Marmor, Kalkstein, Travertin',
            'Kein Absäuern. Fett und Pflegereste mit neutralem oder leicht alkalischem Mittel lösen, Schmutzwasser absaugen, zweimal klar nachwaschen.',
            'Feucht mit neutralem Mittel. Keine Pads auf polierten Flächen.',
            'Matte, raue Stellen bleiben: Die Oberfläche ist angeätzt und muss geschliffen werden.',
          ],
          [
            'Granit, Gneis, Quarzit, Porphyr',
            'Alle Verfahren möglich, auch saure Mittel gegen Kalk. Salzsäure und Schwefelsäure hinterlassen Verfärbungen.',
            'Feucht mit neutralem Mittel.',
            'Öl oder Rost sitzt tief im Stein.',
          ],
          [
            'Plättli und Feinsteinzeug mit Zementfugen',
            'Vornässen, Mittel kurz einwirken lassen, bürsten, Schmutzflotte aufnehmen, zwei- bis dreimal klar nachspülen. Bodenheizung vorher ganz ausschalten.',
            'Wenig pH-neutrales oder leicht alkalisches Mittel, kein saurer Badreiniger im Unterhalt.',
            'Fugen sanden, bröckeln oder fehlen.',
          ],
          [
            'Plättli mit Epoxidfugen',
            'Die Fugen sind gegen viele Chemikalien und saure Reiniger beständig. Verbindlich ist das Datenblatt des Fugenherstellers.',
            'Wie Plättli mit Zementfugen.',
            'Ein Epoxidschleier liegt auf den Platten; ihn entfernt der Verleger.',
          ],
          [
            'Linoleum',
            'Maschinell mit Reiniger unter pH 9, Schmutzflotte aufnehmen, klar nachspülen. Die werkseitige Vergütung darf dabei keinen Schaden nehmen.',
            'Feucht wischen, Gehspuren mit der Sprühmethode entfernen, regelmässig polieren.',
            'Die Oberfläche ist zerstört: Sanierung mit Pflegefilm nach Hersteller.',
          ],
          [
            'Vinyl und PVC',
            'Grundreiniger für Vinyl, maschinell schrubben, klar nachspülen. Vor einer neuen Beschichtung muss der Boden frei von Rückständen und ganz trocken sein.',
            'Feucht wischen mit einem Reiniger, den der Hersteller für die Oberfläche freigibt.',
            'Eine neue Beschichtung ist nötig: zwei Schichten nach Herstellerangaben.',
          ],
          [
            'Parkett, versiegelt',
            'Keine nasse Grundreinigung. Haarbesen, Staubsauger oder nebelfeuchter Lappen, bei Bedarf mit neutralem Mittel. Maschinen nur nach Rücksprache mit dem Hersteller.',
            'Regelmässig mit Parkett-Polish pflegen.',
            'Die Versiegelung ist durchgelaufen: schleifen und neu versiegeln.',
          ],
          [
            'Parkett, geölt',
            'Mit den Mitteln des jeweiligen Ölsystems, nie mit Dampf. Tücher nur, wenn der Hersteller sie für Parkett freigibt.',
            'Nachölen nach Bedarf.',
            'Die Laufzonen sind grau und offen.',
          ],
        ],
        note: 'Auf Parkett hinterlassen nasse Metallfüsse von Möbeln Oxidationsflecken, halten Sie sie beim feuchten Wischen trocken. Und mischen Sie keine Systeme: Die Hersteller empfehlen Mittel, die aufeinander abgestimmt sind.',
        sources: [nvs, ceruniqKeramik, ceruniqErst, forboLinoleum, forboVinyl, ispVersiegelt, ispGeoelt],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Fugen: die empfindlichste Stelle',
      paragraphs: [
        'Zementfugen sind porös, und Säure greift sie an wie Kalkstein. Trocken saugen sie ein saures Mittel auf, das dann in der Fuge wirkt statt an der Oberfläche. Der Plattenverband Ceruniq schreibt deshalb vor jeder Grundreinigung vor, den Belag und besonders die Fugen gut mit Wasser vorzunässen.',
        'Schwarze, anthrazitfarbene oder bunte Zementfugen sind besonders heikel, Ceruniq warnt ausdrücklich vor Schäden durch unsachgemässe Reinigung. Epoxidfugen dagegen sind gegenüber sauren Reinigern weitgehend beständig.',
        'Silikonfugen an Dusche, Wanne und Küche enthalten pilzhemmende Mittel. Ceruniq empfiehlt, sie wöchentlich mit einem neutralen oder leicht alkalischen Mittel und einem weichen Lappen zu reinigen und danach trocken zu reiben. Ist Schimmel ins Silikon gewachsen, rät das BAG, die Fugenmasse zu entfernen und durch eine Fachperson erneuern zu lassen.',
      ],
      sources: [bagSchimmel],
    },
    {
      title: 'Nachspülen, trocknen, Rutschgefahr',
      paragraphs: [
        'Der Naturstein-Verband nennt das Nachwaschen das Wichtigste bei jeder Reinigung. Gelöster Schmutz, der nicht restlos aufgenommen wird, bleibt nur anders verteilt liegen. Auf rauen Flächen trocknet das Wasser in den Vertiefungen zu einem Schleier. Deshalb wird Schmutzwasser abgesaugt und mit sauberem Wasser nachgewaschen, oft mehr als einmal.',
        'Rückstände haben eine zweite Folge. Forbo hält fest, dass Schmutzeintrag, Reinigungshäufigkeit und die verwendeten Mittel die Rutschhemmung massgeblich beeinflussen. Zu viel Reiniger mit Pflegezusätzen kann keramische Platten laut Ceruniq sogar bleibend fleckig machen.',
        'Während der Arbeit sind nasse Böden eine Sturzgefahr. Die BFU rät zu Warnständern und Absperrbändern und dazu, den Boden rasch zu trocknen. Im Treppenhaus einer Mietliegenschaft heisst das: abschnittsweise arbeiten und immer einen trockenen Weg offen lassen.',
      ],
      sources: [bfuBoden],
    },
    {
      title: 'Mittel nie mischen',
      paragraphs: [
        'Wer Kalk mit Säure löst und Flecken mit Javelwasser bleicht, darf beides nie zusammen verwenden. Das Bundesamt für Gesundheit warnt: Javelwasser mit Säuren, auch mit Entkalkern, setzt giftiges Chlorgas frei. Die beiden Produkte dürfen auch nicht zusammen gelagert werden. Das gilt ebenso für den Putzraum Ihrer Hauswartung.',
      ],
      sources: [bagJavel],
    },
    {
      title: 'Weniger Schmutz, seltener Grundreinigung',
      paragraphs: [
        'Der meiste Schmutz kommt an den Schuhen ins Haus. Die BFU empfiehlt für Eingänge Schmutzschleusen, deren Matte mindestens sechs Schritte lang ist. Forbo nennt für textile Sauberlaufzonen von 4 bis 6 Metern eine Verringerung des Schmutzeintrags um bis zu 80 Prozent.',
        'Dazu kommen einfache Massnahmen aus den Pflegeanleitungen: Filzgleiter unter Stühlen, weiche Rollen an Bürostühlen, Untersätze unter Pflanzen. Für Parkett empfiehlt der Parkettverband ein Raumklima von 20 bis 22 °C bei 35 bis 45 Prozent relativer Luftfeuchtigkeit.',
      ],
    },
    {
      title: 'Typische Fehler',
      items: [
        'Kalklöser oder Essig auf Marmor und Kalkstein.',
        'Saure Mittel auf trockene Zementfugen.',
        'Nur einen Teil einer Natursteinfläche intensiv reinigen: Die Gebrauchspatina verändert sich, und es entstehen hellere und dunklere Felder.',
        'Dampfreiniger auf Parkett.',
        'Eine neue Pflegeschicht auf die alte auftragen, ohne diese vorher abzutragen.',
        'Viel Mittel, wenig Wasser beim Nachspülen.',
        'Die Bodenheizung eingeschaltet lassen.',
        'Nasse Flächen ohne Warnständer.',
      ],
      note: 'Die Grundreinigung als Leistung, mit Checkliste für Vorbereitung und Abnahme, finden Sie unter [Grund- und Sonderreinigung](/leistungen/sonderreinigungen).',
    },
  ],
  service: '/leistungen/sonderreinigungen',
  related: ['/blog/wohnungsabgabe-reinigung', '/blog/reinigungskosten-schweiz'],
  cta: {
    title: 'Grundreinigung für Ihre Böden',
    text: 'Schreiben Sie uns, welche Beläge wo liegen und wie gross die Flächen ungefähr sind. Pflegeanleitungen und Fotos helfen bei der Planung. Nach einem Termin vor Ort rechnen wir Ihre Böden einzeln, die Offerte ist kostenlos und unverbindlich.',
  },
}

// Grundlage: P30 und die verwertbaren Teile aus P28 (Seitenberichte, Abschnitt 4), nachgeschärft nach inhalt.md 11.1 (E85)
const reinigungsfirmaFinden: RatgeberArtikel = {
  path: '/blog/richtige-reinigungsfirma-finden',
  h1: 'Wie finde ich die richtige Reinigungsfirma?',
  subtitle: 'Welche Fragen Sie vor der Vergabe klären sollten, vom Leistungsumfang bis zum Vertrag.',
  teaser: 'Welche Fragen Sie vor der Vergabe klären sollten: Leistungsumfang, Versicherung, Arbeitsbedingungen, Qualitätskontrolle, Offerte und Vertrag. Mit Vergleichsraster zum Ausdrucken.',
  updated: '2026-09-28',
  intro: [
    'Welche Reinigungsfirma Ihre Räume betreut, entscheiden Sie meist für mehrere Jahre. Ein Wechsel kostet Zeit, und ein schlechter Start fällt Kundschaft und Mitarbeitenden auf. Dieser Ratgeber zeigt, worauf Sie bei der Auswahl achten, welche Fehler teuer werden und wie Sie Offerten vergleichbar machen.',
  ],
  summary: {
    title: 'Kurz gesagt',
    items: [
      'Klären Sie zuerst Ihren Bedarf: welche Leistung, wie oft und zu welchen Zeiten.',
      'Holen Sie drei bis fünf Offerten ein, jeweils nach einer Besichtigung.',
      'Vergleichen Sie Umfang, Stunden, Versicherung, Arbeitsbedingungen und Vertrag in einem Raster.',
      'Fragen Sie nach Qualitätskontrolle und Vertretung und lassen Sie sich die Antworten schriftlich geben.',
    ],
  },
  sections: [
    {
      title: 'Zuerst den Bedarf klären',
      paragraphs: ['Bevor Sie Anbieter vergleichen, sollten Sie wissen, was Sie brauchen. Die wichtigsten Leistungen:'],
      definitions: [
        {
          term: 'Unterhaltsreinigung',
          text: 'Die wiederkehrende Reinigung in einem festen Rhythmus, zum Beispiel mehrmals pro Woche. Sie hält Räume sauber und hygienisch. Mehr unter [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
        },
        {
          term: 'Grundreinigung',
          text: 'Eine gründliche Reinigung in grösseren Abständen, gegen Kalk, Fett und alte Pflegeschichten. Welche Mittel welcher Boden verträgt, erklärt der Ratgeber [Grundreinigung nach Bodenbelag](/blog/bodenbelaege-grundreinigung). Zur Leistung: [Grund- und Sonderreinigung](/leistungen/sonderreinigungen).',
        },
        {
          term: 'Hauswartung',
          text: 'Die Betreuung einer Liegenschaft über die Reinigung hinaus, etwa mit Kontrollgängen, Kleinreparaturen und Entsorgung. Was dazugehört, hält ein [Pflichtenheft](/blog/pflichtenheft-hauswartung) fest. Mehr unter [Hauswartung](/leistungen/hauswartung).',
        },
      ],
      note: 'Legen Sie ausserdem fest, wie oft und zu welchen Zeiten gereinigt werden soll, zum Beispiel vor Arbeitsbeginn oder nach Ladenschluss. Diese Angaben brauchen alle Anbieter, damit die Offerten vergleichbar sind.',
    },
    {
      title: 'Worauf Sie achten sollten',
      subsections: [
        {
          title: 'Leistungsumfang und Grenzen',
          text: 'Lassen Sie sich schriftlich geben, welche Räume und Tätigkeiten enthalten sind und was nicht. Fragen Sie: Was gehört zur regelmässigen Reinigung, und was wird separat verrechnet?',
        },
        {
          title: 'Versicherung',
          text: 'Bei der Arbeit in Ihren Räumen kann etwas beschädigt werden. Fragen Sie nach einer Betriebshaftpflichtversicherung und lassen Sie sich die Deckungssumme belegen.',
        },
        {
          title: 'Qualitätskontrolle und Vertretung',
          text: 'Fragen Sie, wer die Arbeit vor Ort kontrolliert, wie oft und ob Sie das Ergebnis schriftlich erhalten. Fragen Sie ebenso, wer reinigt, wenn die feste Person in den Ferien oder krank ist, und wie diese Vertretung eingearbeitet wird. Lassen Sie sich beides beschreiben, bevor Sie unterschreiben.',
        },
        {
          title: 'Arbeitsbedingungen',
          text: 'Für Reinigungsbetriebe mit mindestens sechs Angestellten gilt in der Deutschschweiz ein allgemeinverbindlicher Gesamtarbeitsvertrag mit Mindestlöhnen. Die paritätische Kommission ZPK Reinigung führt eine Liste der unterstellten Firmen. Fragen Sie danach, besonders bei auffallend günstigen Offerten.',
        },
        {
          title: 'Zertifikate richtig einordnen',
          text: 'Zertifikate können zeigen, dass Abläufe nach einer Norm geprüft wurden. Fragen Sie nach Norm, Zertifizierungsstelle, Geltungsbereich und Gültigkeit. Ebenso wichtig ist, wie die Firma die Qualität im Alltag kontrolliert und Mängel behebt.',
        },
        {
          title: 'Referenzen und Bewertungen',
          text: 'Fragen Sie nach Referenzen mit vergleichbaren Objekten. Ob ein Gespräch mit Referenzkunden möglich ist, hängt von deren Einverständnis ab. Prüfen Sie auch Online-Bewertungen.',
        },
        {
          title: 'Offerte und Preis',
          text: 'Verlässlich rechnen kann nur, wer das Objekt gesehen hat. Achten Sie darauf, dass Nebenkosten wie Anfahrt und Reinigungsmittel ausgewiesen und Sonderreinigungen separat aufgeführt sind. Wie ein Monatsbetrag zustande kommt, zeigt der Ratgeber [Kosten der Unterhaltsreinigung](/blog/reinigungskosten-schweiz).',
        },
        {
          title: 'Vertrag',
          text: 'Laufzeit, Kündigungsfrist, eine allfällige Probezeit und die Regelung der Vertretung gehören in den Vertrag.',
        },
        {
          title: 'Nähe und Erreichbarkeit',
          text: 'Fragen Sie, wie schnell bei einem Mangel jemand vor Ort ist und wie Sie Ihre Ansprechperson erreichen.',
        },
      ],
      sources: [zpkGav],
    },
    {
      title: 'Sieben Fehler, die später teuer werden',
      items: [
        'Eine Offerte ohne Besichtigung annehmen. Der Preis passt dann oft nicht zum Aufwand, und es folgen Nachträge oder Abstriche bei der Reinigung.',
        'Nur den Stundenansatz vergleichen. Entscheidend sind Stunden pro Einsatz, Einsätze pro Monat und was enthalten ist.',
        'Den Umfang nicht schriftlich festhalten. Ohne Leistungsverzeichnis fehlt bei Beanstandungen der Massstab.',
        'Schlüssel ohne Liste übergeben. Halten Sie fest, wer welche Schlüssel, Badges und Codes erhält und wie Verlust und Rückgabe geregelt sind.',
        'Die Vertretung offen lassen. Klären Sie, wer bei Ferien oder Krankheit einspringt und wer diese Person einweist.',
        'Eine lange Laufzeit ohne Probezeit unterschreiben. Laufzeit und Kündigungsfrist gehören vor der Unterschrift auf den Tisch.',
        'Die Arbeitsbedingungen nicht prüfen. Ein Preis unter den Lohnkosten geht zulasten der Mitarbeitenden oder der Qualität.',
      ],
    },
    {
      title: 'Schritt für Schritt zur Reinigungsfirma',
      ordered: true,
      items: [
        'Bedarf klären: Leistung, Rhythmus, Zeiten und Flächen notieren.',
        'Drei bis fünf Anbieter auswählen, die in Ihrer Region arbeiten.',
        'Besichtigungen vereinbaren. Ohne Besichtigung gibt es keine vergleichbare Offerte.',
        'Offerten im Raster unten vergleichen: Umfang, Stunden, Nebenkosten und Laufzeit.',
        'Offene Fragen klären, am besten schriftlich.',
        'Fragen, ob eine Probereinigung oder ein Start mit einer Probezeit möglich ist.',
        'Vertrag abschliessen und die Ansprechperson festhalten.',
      ],
    },
    {
      title: 'Fragen für die Besichtigung',
      items: [
        'Was genau ist enthalten, und was nicht?',
        'Wie oft und zu welchen Zeiten wird gereinigt?',
        'Wie viele Stunden pro Einsatz sind gerechnet?',
        'Wer ist meine Ansprechperson, und wie erreiche ich sie?',
        'Wer kontrolliert die Arbeit vor Ort, und wie oft?',
        'Wie ist die Vertretung bei Ferien oder Krankheit geregelt?',
        'Untersteht Ihre Firma dem Gesamtarbeitsvertrag der Reinigungsbranche?',
        'Welche Versicherung besteht, mit welcher Deckung?',
        'Wie wird abgerechnet, und was kostet extra?',
      ],
      tool: {
        kind: 'table',
        id: 'vergleichsraster',
        title: 'Vergleichsraster für Offerten',
        intro: 'Zum Ausdrucken: eine Zeile je Punkt, eine Spalte je Anbieter. Leere Felder zeigen, wo Sie nachfragen sollten.',
        columns: ['Punkt', 'Firma A', 'Firma B', 'Firma C'],
        rows: [
          ['Besichtigung durchgeführt am', '__________', '__________', '__________'],
          ['Stunden pro Einsatz', '__________', '__________', '__________'],
          ['Einsätze pro Monat', '__________', '__________', '__________'],
          ['Betrag pro Monat, mit Mehrwertsteuer', '__________', '__________', '__________'],
          ['Material und Mittel inbegriffen', '__________', '__________', '__________'],
          ['Zuschläge für Abend, Nacht und Wochenende', '__________', '__________', '__________'],
          ['Kontrolle vor Ort: wer und wie oft', '__________', '__________', '__________'],
          ['Vertretung bei Ferien und Krankheit', '__________', '__________', '__________'],
          ['Haftpflicht mit Deckungssumme', '__________', '__________', '__________'],
          ['Unterstellt dem Gesamtarbeitsvertrag', '__________', '__________', '__________'],
          ['Laufzeit und Kündigungsfrist', '__________', '__________', '__________'],
        ],
        note: 'Multiplizieren Sie je Spalte die Stunden pro Einsatz mit den Einsätzen pro Monat. Das Produkt zeigt, wie viel Arbeit jede Firma für Ihr Objekt tatsächlich einplant.',
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: `So beantwortet ${company.brand} diese Fragen`,
      items: [
        'Offerte: schriftlich, nachdem wir Ihr Objekt vor Ort gesehen haben.',
        `Antwort auf Ihre Anfrage: ${company.responseTime}.`,
        'Versicherung: Betriebshaftpflicht mit einer Deckung von CHF 10 Mio.',
        'Erfahrung: seit 2006, heute über 50 Mitarbeitende und über 120 Kunden (Stand September 2026).',
        `Sprachen, in denen wir beraten: ${listDe(company.languages)}.`,
        `Gebiet: die Kantone ${cantonList}, mit allen Leistungen. Mehr unter [Einzugsgebiet](/einzugsgebiet).`,
      ],
    },
  ],
  service: '/leistungen/unterhaltsreinigung',
  related: ['/blog/reinigungskosten-schweiz', '/blog/pflichtenheft-hauswartung'],
  cta: {
    title: 'Offerte vor Ort',
    text: 'Legen Sie unsere Offerte neben die anderen. Nennen Sie uns Objekt, Fläche, Rhythmus und Einsatzzeiten, dann kommen wir vorbei und rechnen für Ihr Objekt. Dafür verlangen wir nichts, und Sie gehen keine Verpflichtung ein.',
  },
}

// Grundlage: P29 in der Fassung ohne Zahlen (R3e), Kostenfaktoren als allgemeine Erklärung, E44 (Anfahrt), nachgeschärft nach inhalt.md 11.2 (E85).
// Mindestlöhne ohne Beträge: Ob Branchenzahlen nach R3e erlaubt sind, entscheidet Brandea (inhalt.md 11.2.1).
const kosten: RatgeberArtikel = {
  path: '/blog/reinigungskosten-schweiz',
  h1: 'Kosten der Unterhaltsreinigung: So entsteht der Preis',
  subtitle: 'Wovon der Betrag pro Monat abhängt, wie eine Offerte gerechnet ist und was Verwaltungen bei den Nebenkosten beachten.',
  teaser: 'Kostenfaktoren, Rechenweg und Löhne als Untergrenze: So lesen und vergleichen Sie Offerten für eine Unterhaltsreinigung.',
  updated: '2026-09-28',
  intro: [
    'Dieser Ratgeber bezieht sich auf die [Unterhaltsreinigung](/leistungen/unterhaltsreinigung), also die regelmässige Reinigung von Liegenschaften, Büros und Gewerbeflächen. Er nennt keine Preise, sondern zeigt, woraus sich ein Preis zusammensetzt. So können Sie Offerten lesen und fair vergleichen.',
  ],
  summary: {
    title: 'Kurz gesagt',
    items: [
      'Den Betrag bestimmen Stunden pro Einsatz, Zahl der Einsätze und der Stundenansatz, dazu Material, Zuschläge und Mehrwertsteuer.',
      'Die Stunden hängen von Fläche, Belägen, Nutzung und Einsatzzeit ab. Ohne Blick auf das Objekt lassen sie sich nicht verlässlich schätzen.',
      'Ein allgemeinverbindlicher Gesamtarbeitsvertrag setzt den Löhnen eine Untergrenze. Sehr tiefe Offerten sollten Sie hinterfragen.',
      'Vergleichen Sie Betrag pro Monat und gerechnete Stunden, nicht den Stundenansatz allein.',
    ],
  },
  sections: [
    {
      title: 'Die Kostenfaktoren',
      definitions: [
        { term: 'Fläche und Raumarten', text: 'Grösse, Bodenbeläge, Sanitärräume und Glasflächen bestimmen den Zeitaufwand.' },
        {
          term: 'Rhythmus',
          text: 'Bei häufiger Reinigung sinkt oft der Aufwand je Einsatz, dafür steigt die Zahl der Einsätze. Entscheidend ist, was am Ende pro Monat bezahlt wird.',
        },
        { term: 'Nutzung', text: 'Stark begangene Eingänge, Küchen und Sanitärräume brauchen mehr Zeit als wenig genutzte Räume.' },
        {
          term: 'Einsatzzeiten',
          text: 'Einsätze am Abend, in der Nacht oder am Wochenende können mehr kosten. Für nur vorübergehende Nachtarbeit schreibt das Arbeitsgesetz einen Lohnzuschlag von mindestens 25 Prozent vor (Art. 17b ArG). Fragen Sie, ob Zuschläge im Monatsbetrag enthalten sind.',
        },
        {
          term: 'Zusatzleistungen',
          text: 'Verbrauchsmaterial, Fensterreinigung oder eine [Grundreinigung](/leistungen/sonderreinigungen) vor dem Start können separat aufgeführt sein.',
        },
        {
          term: 'Arbeitsbedingungen',
          text: 'Reinigung ist Handarbeit, der grösste Teil der Kosten sind Löhne. Wie diese nach unten begrenzt sind, zeigt der nächste Abschnitt.',
        },
      ],
      sources: [arg],
    },
    {
      title: 'Löhne als Untergrenze',
      paragraphs: [
        'In den Kantonen Luzern, Zug, Aargau, Nidwalden und Obwalden gilt für Reinigungsbetriebe ab sechs Angestellten der allgemeinverbindlich erklärte Gesamtarbeitsvertrag der Reinigungsbranche Deutschschweiz. Er legt Mindestlöhne je Lohnkategorie fest und läuft bis Ende 2029. Einzelne Bestimmungen gelten auch für kleinere Betriebe.',
        'Zum Lohn kommen Sozialversicherungen, Ferien, Anfahrt, Material, Geräte und die Leitung der Einsätze. Eine Offerte, deren Stundenansatz kaum über dem Mindestlohn liegt, kann diese Kosten nicht decken. Fragen Sie in diesem Fall nach, wie sie zustande kommt.',
        'Die Einhaltung kontrolliert die paritätische Kommission ZPK Reinigung, etwa mit Lohnbuchkontrollen. Auf ihrer Website stehen die Mindestlöhne und die Zuschläge im Wortlaut des Vertrags.',
      ],
      sources: [zpkGav, zpkInhalte],
    },
    {
      title: 'Der Rechenweg einer Offerte',
      paragraphs: [
        'Die Stunden pro Einsatz ergeben sich aus Fläche, Raumarten, Bodenbelägen und Nutzung. Deshalb sieht eine seriöse Firma das Objekt an, bevor sie rechnet. Der Rest ist Multiplikation.',
      ],
      tool: {
        kind: 'table',
        id: 'rechenweg',
        title: 'Vom Einsatz zum Monatsbetrag',
        intro: 'Das Beispiel rechnet nur mit Stunden, nicht mit Preisen. Setzen Sie die Werte aus Ihren Offerten ein.',
        columns: ['Baustein', 'Wovon er abhängt', 'Beispiel'],
        rows: [
          ['Stunden pro Einsatz', 'Fläche, Raumarten, Beläge, Nutzung', '3 Stunden'],
          ['× Einsätze pro Monat', 'Rhythmus, etwa zweimal pro Woche', '8,7 Einsätze'],
          ['= Stunden pro Monat', 'Grundlage jedes Vergleichs', 'rund 26 Stunden'],
          ['× Stundenansatz', 'Löhne, Sozialleistungen, Leitung, Anfahrt', 'Wert des Anbieters'],
          ['+ Material und Mittel', 'Separat oder im Ansatz enthalten', 'je nach Offerte'],
          ['+ Zuschläge', 'Abend, Nacht, Sonntag', 'keine bei Einsätzen am Tag'],
          ['+ Mehrwertsteuer', 'Normalsatz 8,1 Prozent (Art. 25 MWSTG)', 'auf die Summe'],
          ['= Betrag pro Monat', 'Die Zahl, die Sie vergleichen', 'Summe der Zeilen'],
        ],
        note: 'Zweimal pro Woche ergibt 104 Einsätze im Jahr, geteilt durch zwölf Monate gut 8,7 Einsätze. Wer mit vier Wochen pro Monat rechnet, kommt auf 8 Einsätze und unterschätzt die Stunden um rund 8 Prozent.',
        sources: [mwstg],
        printable: true,
        updated: '2026-09-28',
      },
    },
    {
      title: 'Warum wir keine Preise im Internet nennen',
      paragraphs: [
        'Zwei Objekte mit gleicher Fläche können sehr unterschiedlich viel Aufwand bedeuten, je nach Bodenbelag, Nutzung und Zugang. Ein Preis ohne Besichtigung wäre deshalb entweder zu hoch angesetzt oder würde später nicht stimmen. Unsere Zahl erhalten Sie darum schriftlich und für Ihr Objekt gerechnet.',
      ],
    },
    {
      title: 'Offerten vergleichen',
      paragraphs: ['Eine vergleichbare Offerte nennt mindestens:'],
      items: [
        'welche Räume und Tätigkeiten enthalten sind',
        'Rhythmus und Einsatzzeiten',
        'die gerechneten Stunden pro Einsatz',
        'Verbrauchsmaterial und Reinigungsmittel',
        'allfällige Zuschläge und Nebenkosten wie die Anfahrt',
        'Laufzeit und Kündigungsfrist',
      ],
      note: 'Ein Raster zum Ausdrucken finden Sie im Ratgeber [Wie finde ich die richtige Reinigungsfirma?](/blog/richtige-reinigungsfirma-finden#vergleichsraster).',
    },
    {
      title: 'Für Verwaltungen: Reinigung in den Nebenkosten',
      paragraphs: [
        'Reinigungskosten für Treppenhaus und Allgemeinflächen dürfen nur an die Mieterschaft weiterverrechnet werden, wenn der Mietvertrag sie als Nebenkosten besonders vereinbart (Art. 257a Abs. 2 OR). Verlangen Sie deshalb Offerten und Rechnungen, welche die Reinigung je Liegenschaft ausweisen. Wie die Abrechnung funktioniert, erklärt die Seite [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      ],
      sources: [or('257_a', 'Art. 257a')],
    },
    {
      title: `So kommen Sie bei ${company.brand} zu Ihrer Offerte`,
      ordered: true,
      items: [
        `Sie schreiben oder rufen an und nennen Objekt, Fläche und gewünschten Rhythmus. Eine Antwort haben Sie ${company.responseTime}.`,
        'Wir gehen mit Ihnen durch das Objekt und notieren Räume, Beläge und Zeiten.',
        'Danach rechnen wir und schicken Ihnen die Offerte schriftlich zu.',
      ],
      note: `Für die Anfahrt gelten in den ganzen Kantonen ${cantonList} dieselben Bedingungen.`,
    },
  ],
  service: '/leistungen/unterhaltsreinigung',
  related: ['/blog/richtige-reinigungsfirma-finden', '/blog/bodenbelaege-grundreinigung'],
  cta: {
    title: 'Offerte für Ihre Unterhaltsreinigung',
    text: 'Nennen Sie uns Adresse, Fläche, Nutzung und den gewünschten Rhythmus, bei Liegenschaften auch die Zahl der Treppenhäuser. Nach dem Rundgang rechnen wir mit Ihren Zahlen, für Sie kostenlos und unverbindlich.',
  },
}

/** Artikel in der Reihenfolge der Übersicht /blog (E85): die drei neuen Werkzeug-Artikel zuerst */
export const ratgeber = { pflichtenheft, wohnungsabgabe, bodenarten, reinigungsfirmaFinden, kosten }
