import type { ServicePageContent } from '../../types'
import { company, listDe } from '../../../shared/company'

// Grundlage: R3d (eigene Seite, Büros als Hauptzielgruppe), R10a (Praxen), E17, K01, E18 (Sprachen).
// Umbau E85 nach 25-AUDIT/inhalt.md 3.2 (Bausteine 3.2.1 bis 3.2.3), seo.md T2 und T4,
// keywords-mehrsprachig.md («büroreinigung» 320, «praxisreinigung» 70).
// Rhythmus wie im Formular (navigation.ts › frequencyOptions), Nachfüllen wie Unterhaltsreinigung.
// Quellen am 28.09.2026 im Wortlaut auf fedlex.admin.ch gelesen: ArG Art. 10, 16, 17, 17b, 18, 19, 20a
// (Stand 1.9.2023), ArGV 2 Art. 51 (Stand 1.2.2026), DSG Art. 5 und 8 (Stand 7.7.2025),
// DSV Art. 3 (Stand 1.12.2025), StGB Art. 321 (Stand 12.6.2026).
// Nicht beantwortet (inhalt.md F1, F2, F7): Qualitätskontrolle, Vertretung, Schlüsselprotokoll.
export const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Laufende Reinigung',
  h1: 'Büroreinigung und Praxisreinigung',
  lead: [
    'Ein Büro soll jeden Morgen bereit sein: Papierkörbe leer, Teeküche sauber, Seife und Papier aufgefüllt. Wir reinigen Büros, Verwaltungen und Praxen im festen Rhythmus, in der Regel bevor Ihr Team kommt oder nachdem es gegangen ist.',
    'Was bei jedem Einsatz gereinigt wird und was nur wöchentlich, steht im Leistungsverzeichnis. Welche Räume das Team betreten darf, regeln Sie vor dem Start. Für beides finden Sie auf dieser Seite Vorlagen zum Ausdrucken, dazu die Zeitfenster, die das Arbeitsgesetz für Reinigungseinsätze vorgibt.',
  ],
  facts: [
    { label: 'Einsatzzeiten', value: 'Meist früh am Morgen oder am Abend, passend zu Ihren Arbeits- und Sprechzeiten' },
    { label: 'Rhythmus', value: 'Täglich, mehrmals pro Woche oder wöchentlich' },
    { label: 'Sprachen im Team', value: listDe(company.languages) },
    { label: 'Nicht enthalten', value: 'Fenster, Treppenhaus der Liegenschaft, Instrumente in Praxen' },
  ],
  scope: {
    title: 'Was die Büroreinigung umfasst',
    intro: 'Typisch für Büros, Verwaltungen und Praxen. Wie oft welcher Punkt drankommt, zeigt das Leistungsverzeichnis oben.',
    items: [
      'Papierkörbe und Altpapier leeren, Säcke ersetzen',
      'Freie Arbeitsflächen, Ablagen, Türgriffe und Lichtschalter',
      'Böden in Büros, Gängen und Sitzungszimmern, je nach Belag gesaugt oder feucht gewischt',
      'Empfang, Eingangsbereich und Glastüren',
      'Teeküchen und Aufenthaltsräume',
      'Sanitärräume mit WC, Lavabo und Spiegel',
      'Seife, Papier und Abfallsäcke nachfüllen',
      'In Praxen: Empfang, Wartezimmer und die freigegebenen Flächen der Behandlungsräume',
    ],
    notIncluded: [
      'Treppenhaus, Lift und Eingang der ganzen Liegenschaft: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Grundreinigung der Böden und Sanitärräume, etwa vor dem Einzug: siehe [Grund- und Sonderreinigung](/leistungen/sonderreinigungen).',
      'Fenster innen und aussen: siehe [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
      'Aufbereitung von Instrumenten und Medizinprodukten, sie bleibt bei Ihrem Praxisteam.',
    ],
  },
  sections: [
    {
      title: 'Ein Einsatz von oben nach unten',
      paragraphs: [
        'Zuerst kommt der Abfall: Papierkörbe leeren, Altpapier zur Sammelstelle bringen, neue Säcke einsetzen. Danach sind Theke und Türgriffe an der Reihe, an den vereinbarten Tagen auch die freien Tischflächen, dann Teeküche und Sanitärräume. Die Böden kommen zum Schluss, damit kein frisch gereinigter Boden wieder Staub oder Tropfen abbekommt.',
        'Für WC und Lavabo braucht es eigene Tücher und Handschuhe, die nie an einen Schreibtisch oder an die Kaffeemaschine kommen. Eine Farbe je Bereich macht die Trennung sichtbar.',
      ],
    },
    {
      title: 'In Arzt- und Therapiepraxen gilt Ihr Hygieneplan',
      paragraphs: [
        'Am Empfang und im Wartezimmer greifen jeden Tag viele Hände an dieselben Stellen: Türgriffe, Theke, Armlehnen und Ablagen. Welche Mittel dort verwendet werden und wie oft, schreibt der Hygieneplan Ihrer Praxis vor, und danach richtet sich das Team.',
        'In den Behandlungsräumen reinigt das Team die Böden und die Flächen, die Ihr Praxisteam freigibt. Instrumente und Medizinprodukte bereitet Ihr Praxisteam selbst auf, Geräte und Medikamente gehören nicht zur Reinigung.',
      ],
    },
    {
      title: 'Was Sie am Morgen danach sehen sollten',
      paragraphs: [
        'Fünf Minuten beim Aufschliessen genügen, um einen Einsatz zu prüfen. Fällt Ihnen etwas auf, melden Sie es noch am selben Tag, solange klar ist, welcher Einsatz gemeint ist.',
      ],
      items: [
        'Papierkörbe leer und mit frischem Sack',
        'Teeküche ohne Kaffeeränder, Spüle sauber und trocken',
        'Glastüren ohne Fingerabdrücke auf Griffhöhe',
        'Seife, Papier und Handtücher in den Sanitärräumen aufgefüllt',
        'Unterlagen und persönliche Dinge dort, wo Sie sie hingelegt haben',
        'Fenster zu, Licht aus, Türen verschlossen',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'leistungsverzeichnis',
      title: 'Leistungsverzeichnis Büro: was wie oft gereinigt wird',
      intro:
        'Beispiel für ein Büro mit Empfang, Teeküche und zwei WC. Streichen Sie, was bei Ihnen fehlt, und ergänzen Sie eigene Räume. Mit derselben Liste lassen sich Offerten verschiedener Anbieter vergleichen.',
      columns: ['Bereich', 'Bei jedem Einsatz', 'Wöchentlich', 'Nach Vereinbarung'],
      rows: [
        ['Arbeitsplätze', 'Papierkörbe leeren, neue Säcke', 'Freie Tischflächen feucht abwischen', 'Bildschirme, Tastaturen, Telefone, Stühle'],
        ['Teeküche', 'Spüle, Ablagen, Kaffeemaschine aussen, Boden', 'Fronten von Schränken und Geräten', 'Kühlschrank innen'],
        ['Sanitärräume', 'WC, Lavabo, Spiegel, Boden, Seife und Papier nachfüllen', 'Wandplatten im Spritzbereich, Türen', 'Armaturen entkalken, Trennwände'],
        ['Empfang und Wartebereich', 'Theke, Türgriffe, Glastür am Eingang', 'Stühle, Ablagen, Glaswände', 'Pflanzen und Dekoration abstauben'],
        ['Böden', 'Gänge, Empfang, Teeküche, Sanitärräume', 'Einzelbüros und Sitzungszimmer', 'Sockelleisten und Ecken'],
        ['Türen und Schalter', 'Türgriffe in Teeküche und WC', 'Türgriffe und Lichtschalter überall', 'Türblätter, Zargen, Heizkörper'],
      ],
      note: 'Die Häufigkeiten sind ein Beispiel. Eine Teeküche für dreissig Personen braucht mehr als eine für fünf. Ihr eigenes Verzeichnis wird Teil der Offerte.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'einsatzzeiten',
      title: 'Einsatzzeiten und Arbeitsgesetz',
      intro:
        'Für das Reinigungsteam gilt das Arbeitsgesetz. Es teilt den Tag in Zeitfenster ein, und davon hängt ab, wann eine Büroreinigung ohne Bewilligung möglich ist und wann Zuschläge anfallen.',
      entries: [
        {
          label: '6 bis 8 Uhr',
          text: 'Tagesarbeit. Teeküche und WC sind sauber, wenn die Ersten kommen. Beginnt Ihr Team um halb acht, ist das Fenster für grosse Flächen knapp.',
        },
        {
          label: 'Während der Arbeitszeit',
          text: 'Tagesarbeit. Gut für stark genutzte Sanitärräume, den Empfang oder die Praxis über Mittag. Staubsauger und nasse Böden stören Gespräche.',
        },
        {
          label: '18 bis 20 Uhr',
          text: 'Tagesarbeit. Die meisten Plätze sind frei, der Abfall des Tages ist da. Sagen Sie, welche Räume zuletzt an der Reihe sind, weil dort noch gearbeitet wird.',
        },
        {
          label: '20 bis 23 Uhr',
          text: 'Abendarbeit, ohne Bewilligung erlaubt. Die Räume sind leer und ruhig, deshalb müssen Zutritt, Alarm und Abschliessen geregelt sein.',
        },
        {
          label: '23 bis 6 Uhr',
          text: 'Nachtarbeit: grundsätzlich verboten, nur mit Bewilligung und bei vorübergehender Nachtarbeit mit mindestens 25 Prozent Lohnzuschlag. Ohne Bewilligung geht es nur, wenn der Kundenbetrieb selbst unter Sonderregeln fällt, etwa rund um die Uhr arbeitet, und die Reinigung für seinen Ablauf nachts nötig ist.',
        },
        {
          label: 'Sonntag und Feiertage',
          text: 'Verboten von Samstag 23 Uhr bis Sonntag 23 Uhr, ebenso am Bundesfeiertag und an kantonalen Feiertagen, die dem Sonntag gleichgestellt sind. Ausnahmen gelten wie in der Nacht, vorübergehende Sonntagsarbeit kostet 50 Prozent Lohnzuschlag. Der Samstag tagsüber ist gewöhnliche Tagesarbeit.',
        },
      ],
      note: 'Mit Zustimmung der Arbeitnehmervertretung oder, wo es keine gibt, der Mehrheit seiner betroffenen Mitarbeitenden kann der Reinigungsbetrieb Beginn und Ende seiner Tages- und Abendarbeit zwischen 5 und 24 Uhr anders festlegen. Auch dann umfasst sie höchstens 17 Stunden (Art. 10 Abs. 2 ArG). Für ein gewöhnliches Büro heisst das: Planen Sie die Reinigung von Montag bis Samstag zwischen 6 und 23 Uhr und nicht an Feiertagen, dann braucht es keine Bewilligung.',
      sources: [
        { label: 'Arbeitsgesetz (ArG), Art. 10 und 16 bis 20a', href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_10' },
        { label: 'Verordnung 2 zum Arbeitsgesetz (ArGV 2), Art. 51 Reinigungsbetriebe', href: 'https://www.fedlex.admin.ch/eli/cc/2000/244/de#art_51' },
      ],
    },
    {
      kind: 'checklist',
      id: 'vertrauliche-raeume',
      title: 'Vertrauliche Räume: vor dem ersten Einsatz regeln',
      intro:
        'Wer abends reinigt, kommt in Räume mit Personalakten, Verträgen und Patientendaten. Das Datenschutzgesetz verlangt von Ihrem Betrieb eine Datensicherheit, die dem Risiko angemessen ist (Art. 8 DSG), und die Verordnung nennt dazu die Zugangskontrolle: Nur Berechtigte sollen in Räume gelangen, in denen Personendaten bearbeitet werden (Art. 3 DSV). Mit dieser Liste legen Sie fest, wohin das Reinigungsteam darf.',
      groups: [
        {
          title: 'Räume',
          items: [
            'Räume, die das Team selbständig reinigt',
            'Räume, die nur gereinigt werden, wenn jemand von Ihnen da ist, etwa Personalbüro, Archiv oder Serverraum',
            'Räume, die gar nicht betreten werden',
            'Schränke, Schubladen und Ablagen mit Unterlagen: nicht öffnen, nicht verschieben',
          ],
        },
        {
          title: 'Tische, Papier und Bildschirme',
          items: [
            'Unterlagen am Abend versorgt, Tische frei',
            'Bildschirme gesperrt, keine Passwörter auf Zetteln',
            'Abschliessbare Behälter für vertrauliches Papier, die nicht mit dem Altpapier geleert werden',
            'Drucker und Kopierer ohne liegen gebliebene Ausdrucke',
          ],
        },
        {
          title: 'Schlüssel, Badge und Alarm',
          items: [
            'Wer Schlüssel, Badge oder Code erhält, und für welche Türen',
            'Wie die Alarmanlage ein- und ausgeschaltet wird und wen das Team bei einem Fehlalarm anruft',
            'Wer am Schluss Licht, Fenster und Türen kontrolliert',
            'Was gilt, wenn ein Schlüssel oder Badge verloren geht',
          ],
        },
        {
          title: 'Zusätzlich in Praxen und Kanzleien',
          items: [
            'Patientenakten, Agenda und Befunde liegen nicht offen am Empfang',
            'Behandlungsräume: welche Flächen das Team reinigt und welche Ihr Praxisteam',
            'Berufsgeheimnis (Art. 321 StGB), etwa bei Ärztinnen, Physiotherapeuten, Anwältinnen und Notaren: Akten versorgt, bevor das Team kommt',
          ],
        },
      ],
      note: 'Die Liste ersetzt keine Rechtsberatung. Klären Sie im Einzelfall, welche Massnahmen Ihr Betrieb braucht. Gesundheitsdaten gelten nach dem Datenschutzgesetz als besonders schützenswert (Art. 5 DSG).',
      sources: [
        { label: 'Datenschutzgesetz (DSG), Art. 5 und 8', href: 'https://www.fedlex.admin.ch/eli/cc/2022/491/de#art_8' },
        { label: 'Datenschutzverordnung (DSV), Art. 3 Zugangskontrolle', href: 'https://www.fedlex.admin.ch/eli/cc/2022/568/de#art_3' },
        { label: 'Strafgesetzbuch (StGB), Art. 321 Berufsgeheimnis', href: 'https://www.fedlex.admin.ch/eli/cc/54/757_781_799/de#art_321' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'offerten-vergleichen',
      title: 'Offerten vergleichen, Punkt für Punkt',
      intro:
        'Ein tiefer Stundensatz sagt wenig, wenn weniger Stunden gerechnet sind. Legen Sie die Offerten nebeneinander und gehen Sie bei jeder dieselben Punkte durch. Die allgemeinen Kostenfaktoren erklärt der Ratgeber [Was kostet eine Unterhaltsreinigung?](/blog/reinigungskosten-schweiz).',
      groups: [
        {
          title: 'Umfang und Arbeitsweise',
          items: [
            'Liegt ein Leistungsverzeichnis bei, das jeden Raum und jede Häufigkeit nennt?',
            'Sind Teeküchen und Sanitärräume bei jedem Einsatz dabei oder nur wöchentlich?',
            'Wie viele Stunden pro Einsatz und wie viele Einsätze pro Monat sind gerechnet?',
            'Welche Zeitfenster sind vorgesehen, und liegen sie zwischen 6 und 23 Uhr?',
            'Sind Tücher für WC und Arbeitsflächen getrennt, zum Beispiel nach Farben?',
          ],
        },
        {
          title: 'Preis und Vertrag',
          items: [
            'Welcher Betrag ergibt sich pro Monat, mit oder ohne Mehrwertsteuer?',
            'Ist das Verbrauchsmaterial enthalten, und wer bestellt es nach?',
            'Sind Zuschläge für Nacht-, Sonntags- und Feiertagseinsätze ausgewiesen?',
            'Wer vertritt das Team bei Ferien oder Krankheit?',
            'Wie lange läuft der Vertrag, und mit welcher Frist ist er kündbar?',
          ],
        },
      ],
      note: 'Rechnen Sie bei jeder Offerte die Stunden pro Einsatz mal die Einsätze pro Monat. Erst diese Zahl zeigt, ob zwei Anbieter dieselbe Arbeit meinen.',
      printable: true,
      updated: '2026-09-28',
    },
  ],
  // Ablauf ohne figure (Prüfung B6): Grundriss und Briefumschlag doppelten die Vorlagenzeile
  // «Anfrage, Besichtigung», die Schritte stehen deshalb ruhig nebeneinander.
  steps: [
    {
      title: 'Räume und Zutritt festlegen',
      text: 'Vor dem ersten Einsatz legen Sie mit uns fest, was das Team reinigt, was nur in Ihrer Anwesenheit, wer Schlüssel oder Badge erhält und wie die Alarmanlage bedient wird.',
    },
    {
      title: 'Fester Einsatzplan',
      text: 'Tage und Zeitfenster stehen fest, zum Beispiel Montag, Mittwoch und Freitag ab 18 Uhr. Was bei jedem Einsatz drankommt und was wöchentlich, regelt das Leistungsverzeichnis.',
    },
    {
      title: 'Änderungen melden',
      text: 'Ziehen Sie um, wächst das Team oder ändern sich die Sprechzeiten, passen wir Umfang und Rhythmus an. Melden Sie es per Telefon oder E-Mail.',
    },
  ],
  faq: [
    {
      question: 'Was kostet die Büroreinigung?',
      answer:
        'Einen Preis nennen wir nach der Besichtigung, weil zwei gleich grosse Büros sehr verschieden viel Arbeit machen. Zwölf Einzelbüros mit je eigenem Papierkorb brauchen mehr Zeit als ein Grossraum mit derselben Fläche. Den Ausschlag geben die Zahl der Arbeitsplätze, Teeküchen und Sanitärräume, die Bodenbeläge und Glasflächen, der Rhythmus, die Einsatzzeit, in Praxen die Vorgaben des Hygieneplans und ob Verbrauchsmaterial dazugehört. Wie Sie Offerten vergleichen, zeigt die Checkliste oben.',
    },
    {
      question: 'Wie oft sollte ein Büro gereinigt werden?',
      answer:
        'Den Takt geben die Räume mit Wasser vor. Teeküche und Sanitärräume brauchen bei jedem Einsatz Pflege, in einem Büro mit vielen Personen also täglich oder mehrmals pro Woche. Arbeitsplätze und Sitzungszimmer kommen oft mit einer wöchentlichen Reinigung aus. Ein Empfang mit Kundschaft braucht mehr als ein Backoffice.',
    },
    {
      question: 'Wie kommt das Reinigungsteam ins Gebäude, wenn niemand mehr da ist?',
      answer:
        'Mit Schlüssel, Badge oder Code, den Sie dem Team übergeben. Vor dem ersten Einsatz wird mit Ihnen geregelt, wer was erhält und wie Alarmanlage, Licht und Abschliessen gehandhabt werden. Die Checkliste «Vertrauliche Räume» oben enthält alle Punkte zum Ausfüllen.',
    },
    {
      question: 'Müssen wir die Arbeitsplätze aufräumen, und was geschieht mit vertraulichen Unterlagen?',
      answer:
        'Gewischt werden freie Flächen, was auf dem Tisch liegt, bleibt liegen. Ein freier Tisch am Abend lohnt sich deshalb doppelt: Die Fläche wird gründlicher sauber, und vertrauliche Papiere liegen nicht offen. Für Papier, das vernichtet werden soll, eignen sich abschliessbare Behälter, die nicht mit dem Altpapier geleert werden.',
    },
    {
      question: 'Gehören Bildschirme und Tastaturen dazu?',
      answer:
        'Auf Wunsch, als eigener Punkt im Leistungsverzeichnis. Bildschirme werden nur mit einem leicht feuchten, fusselfreien Tuch gereinigt und nie direkt besprüht. Tastaturen und Telefone reinigt man, wenn der Computer gesperrt ist, damit kein Tastendruck etwas auslöst.',
    },
    {
      question: 'Wer stellt Seife, Papier und Abfallsäcke?',
      answer:
        'Nachgefüllt wird bei jedem Einsatz. Wer das Material beschafft, entscheiden Sie: Entweder bringt die Reinigungsfirma es mit und verrechnet es, oder Sie kaufen selbst ein, und das Team füllt aus Ihrem Vorrat nach. Wichtig ist, dass die Offerte die gewählte Variante nennt, sonst sind zwei Preise nicht vergleichbar.',
    },
    {
      question: 'Richten Sie sich in Praxen nach unserem Hygieneplan?',
      answer:
        'Ja. Ihr Hygieneplan bestimmt Mittel, Flächen und Häufigkeit, und danach arbeitet das Team. Legen Sie ihn zur Besichtigung bereit, dann wird er Grundlage des Leistungsverzeichnisses für Ihre Praxis.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn neben Ihren Büroräumen auch Treppenhaus, Lift und Eingang des ganzen Hauses gereinigt werden sollen.' },
    { path: '/leistungen/sonderreinigungen', text: 'Für die Grundreinigung beim Einzug in neue Büroräume oder bevor Sie alte Räume abgeben.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Fenster und Glasfronten innen und aussen, die nicht zur laufenden Büroreinigung gehören.' },
  ],
  cta: {
    title: 'Offerte für Ihr Büro oder Ihre Praxis',
    text: 'Für die Offerte brauchen wir die Adresse, die ungefähre Fläche und die Zahl der Etagen, Arbeitsplätze, Teeküchen und WC. Dazu die Zeitfenster, in denen gereinigt werden darf, und bei Praxen den Hygieneplan. Danach kommen wir vorbei, Besichtigung und schriftliche Offerte sind für Sie kostenlos und unverbindlich.',
  },
}
