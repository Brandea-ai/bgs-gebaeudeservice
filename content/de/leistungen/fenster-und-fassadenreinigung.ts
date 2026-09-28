import type { ServicePageContent } from '../../types'

// Grundlage: R3b (Fenster und Glas, Fassade und Hochdruck), E17, K05 (keine Höhen- oder Gerätezusagen ohne Beleg),
// Umbau E85 nach 25-AUDIT/inhalt.md 3.6 (Bausteine Abwasser, Mieterinformation, Planung). Offene Kundenfrage F4
// (eigenes Vorgehen beim Abwasser) bleibt unbeantwortet: Die Werkzeuge sind Käuferinformation mit Quelle.
// Quellen gelesen am 28.09.2026: GSchG Art. 3, 6, 7 (Fassung 01.08.2025), OR Art. 257a, 259 (Fassung 01.01.2026),
// Merkblatt Fassadenreinigung BS/BL (Stand 18.09.2024), Schreiben Umwelt Zentralschweiz vom 26.03.2025,
// Suva 44033.d (Ausgabe Dezember 2025), Stadt Luzern und Stadt Zug zur Benützung öffentlichen Grundes.
export const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Glas und Fassade',
  h1: 'Fensterreinigung und Fassadenreinigung für Unternehmen und Liegenschaften',
  lead: [
    'Schlieren im Gegenlicht, graue Rahmen und Grünbelag an der Fassade sieht jeder, der das Haus betritt. Wir reinigen Fenster, Glasfassaden, Schaufenster und Fassaden für Verwaltungen, Eigentümer und Unternehmen, einmalig oder im festen Rhythmus.',
    'Hier finden Sie, was vor dem Auftrag zu klären ist: welcher Zugang zu welcher Höhe passt, wohin das Wasser einer Fassadenreinigung fliessen darf und wie Sie die Mieterschaft informieren. Checkliste und Aushang können Sie direkt ausdrucken.',
  ],
  facts: [
    { label: 'Flächen', value: 'Fenster, Glasfassaden, Schaufenster, Rahmen und Fassaden' },
    { label: 'Fassade', value: 'Hochdruck, wenn das Material es verträgt' },
    { label: 'Wetter', value: 'Aussen nicht bei Frost, Sturm oder starkem Regen' },
    { label: 'Nicht enthalten', value: 'Innenräume, Anstrich und Reparaturen an der Fassade' },
    { label: 'Zum Ausdrucken', value: 'Checkliste, Aushang für die Mieterschaft, Abwasser-Tabelle' },
  ],
  scope: {
    title: 'Welche Flächen wir reinigen',
    intro: 'Sie wählen aus, welche Flächen gereinigt werden. Häufig sind es diese:',
    items: [
      'Fenster innen und aussen, mit Rahmen und Falzen',
      'Fenster im Treppenhaus und in Allgemeinräumen von Wohnliegenschaften',
      'Glasfassaden, Glastüren und Glaswände',
      'Schaufenster und Eingangsbereiche aus Glas',
      'Fensterbänke und Storen auf Wunsch',
      'Fassaden, mit Hochdruck, wenn das Material es verträgt',
    ],
    notIncluded: [
      'Reinigung der Innenräume: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) oder [Büro- und Praxisreinigung](/leistungen/bueroreinigung).',
      'Glas mit Mörtel, Farbspritzern oder Etiketten nach Bauarbeiten: siehe [Baureinigung](/leistungen/baureinigung).',
      'Renovation, Anstrich und Reparaturen an der Fassade.',
    ],
  },
  sections: [
    {
      title: 'Der richtige Zeitpunkt im Jahr',
      paragraphs: [
        'Schmutz auf Glas fällt vor allem im Gegenlicht auf: an Eingängen, Schaufenstern und Glasfassaden, die Kundschaft und Mieterschaft jeden Tag sehen. Neben dem festen Rhythmus sind eine Neuvermietung, ein Verkauf oder ein Anlass im Haus typische Gründe für einen Termin.',
      ],
      items: [
        'Frühling: nach der Hauptblüte der Bäume, sonst liegt Blütenstaub nach wenigen Tagen wieder auf dem Glas',
        'Herbst: nach dem Laubfall und vor der dunklen Jahreszeit, wenn die tief stehende Sonne jede Schliere zeigt',
        'Frost, Sturm und starker Regen: Aussenarbeiten verschieben sich, planen Sie deshalb einen Ausweichtag ein',
        'Vor Vermietung oder Verkauf: erst reinigen, wenn im Haus keine staubigen Arbeiten mehr anstehen',
      ],
    },
    {
      title: 'Reinwasser, Abzieher, Hochdruck: was wohin passt',
      paragraphs: [
        'Erreichbares Glas wird mit Wasser, einem milden Mittel und dem Abzieher gereinigt, danach werden Rahmen und Falze nachgewischt. Für hohe Scheiben gibt es wasserführende Teleskopstangen mit Reinwasser: Es ist entmineralisiert und trocknet deshalb ohne Kalkflecken.',
        'Bei Fassaden entscheidet das Material. Glatte, feste Oberflächen vertragen oft Hochdruck, empfindlicher Putz, Holz oder alter Naturstein brauchen weniger Druck oder eine andere Methode. Ob Reinigungsmittel nötig sind, bestimmt auch, was mit dem Abwasser geschehen muss.',
      ],
    },
  ],
  tools: [
    {
      kind: 'checklist',
      id: 'checkliste-fenster',
      title: 'Checkliste von der Anfrage bis zur Abnahme',
      intro: 'Mit diesen Angaben lässt sich eine Offerte für Fenster und Fassade genau rechnen. Die letzte Gruppe hilft Ihnen, das Ergebnis zu prüfen.',
      groups: [
        {
          title: 'Für die Anfrage bereitlegen',
          items: [
            'Adresse, Gebäudeart und Anzahl Geschosse',
            'Ungefähre Zahl der Fenster oder Glasfläche, dazu Fotos von Fassade und Eingang',
            'Welche Fenster sich öffnen lassen und wohin: nach innen, nur kippen oder fest verglast',
            'Material von Rahmen und Fassade, soweit bekannt: Holz, Metall, Kunststoff, Putz, Naturstein',
            'Gewünschte Flächen: aussen, innen oder beides, dazu Rahmen, Fensterbänke, Storen',
            'Wunschtermin oder Rhythmus und Zeiten, in denen niemand im Haus gestört werden darf',
          ],
        },
        {
          title: 'Zusätzlich bei der Fassade',
          items: [
            'Gesamtfläche der Fassaden, die gereinigt werden sollen, in m²',
            'Was stört: Grauschleier, Grünbelag, Flecken',
            'Boden unter der Fassade: Rasen, Kies, Beete oder versiegelter Platz',
            'Wohin Dolen und Schächte rund ums Haus entwässern, Auskunft gibt die Gemeinde',
            'Ob die Liegenschaft in einer Grundwasserschutzzone oder nahe an Bach, Fluss oder See liegt',
          ],
        },
        {
          title: 'Vor dem Termin',
          items: [
            'Mieterschaft oder Mitarbeitende informieren, mit Datum, Zeitfenster und Schlüsselregelung',
            'Fensterbänke innen freiräumen lassen, Storen hochziehen',
            'Platz für Fahrzeug, Hubarbeitsbühne oder Gerüst freihalten',
            'Auf Trottoir oder Strasse: Bewilligung der Gemeinde für öffentlichen Grund einholen',
            'Zugang zu Dach, Innenhof oder Technikraum sicherstellen, falls er gebraucht wird',
          ],
        },
        {
          title: 'Abnahme nach der Reinigung',
          items: [
            'Im Gegenlicht sind keine Schlieren zu sehen',
            'Das Glas ist bis in die Ecken sauber, auch am Rand zum Rahmen',
            'Rahmen, Falze und Fensterbänke sind gereinigt, soweit vereinbart',
            'Innen bleiben keine Tropfen und Wasserflecken auf Böden und Fensterbänken',
            'Vorplatz und Beete unter der Fassade sind frei von Rückständen',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'aushang-mieterschaft',
      title: 'Aushang für die Mieterschaft: Vorlage zum Anpassen',
      intro: 'Fenster, die sich nur von innen reinigen lassen, brauchen Zutritt zu Wohnungen oder Büros. Ersetzen Sie die Angaben in eckigen Klammern und hängen Sie den Text im Eingang aus.',
      columns: ['Baustein', 'Text für den Aushang'],
      rows: [
        ['Titel', 'Fensterreinigung in Ihrer Wohnung am [Datum]'],
        ['Termin', 'Am [Datum] zwischen [Uhrzeit] und [Uhrzeit] werden die Fenster der Liegenschaft [Adresse] gereinigt. Einige Fenster lassen sich nur von innen reinigen.'],
        ['Zutritt', 'Bitte sind Sie zu Hause oder hinterlegen Sie den Schlüssel bis [Datum] bei [Verwaltung oder Hauswartung].'],
        ['Vorbereitung', 'Bitte räumen Sie Pflanzen und Gegenstände von den Fensterbänken und ziehen Sie die Storen hoch.'],
        ['Verhindert', 'Passt Ihnen der Termin nicht, melden Sie sich bis [Datum] bei [Name, Telefon].'],
        ['Absender', '[Verwaltung], [Ort und Datum des Aushangs]'],
      ],
      note: 'Wer bezahlt die Fenster in der Wohnung? Das OR sieht vor, dass die Mieterschaft kleine Reinigungen für den gewöhnlichen Unterhalt nach Ortsgebrauch selbst trägt (Art. 259 OR). Nebenkosten schuldet sie nur, wenn sie im Mietvertrag besonders vereinbart sind (Art. 257a OR). Klären Sie im Einzelfall, bevor Sie die Reinigung der Wohnungsfenster weiterverrechnen.',
      sources: [
        { label: 'Obligationenrecht, Art. 257a und 259', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_259' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zugang-hoehe',
      title: 'Hohe Fenster und Fassaden: welcher Zugang passt',
      intro: 'Die Suva zieht technische Schutzmassnahmen der persönlichen Schutzausrüstung vor. Fenster, die sich nach innen öffnen lassen, erlauben es, auch die Aussenseite sicher von innen zu reinigen. Für alle übrigen Flächen fasst die Tabelle die Suva-Publikation zusammen, ergänzt um die Bewilligung für öffentlichen Grund.',
      columns: ['Zugang', 'Geeignet für', 'Voraussetzungen und Grenzen'],
      rows: [
        ['Teleskopstange', 'Glatte Flächen, vom Boden oder einem sicheren Stand aus bis zu 10 m Höhe', 'Kommt ohne Leiter aus, verschiedene Werkzeuge lassen sich aufstecken.'],
        ['Leiter, Podestleiter', 'Leichte Arbeiten, die sich nicht über grössere Flächen erstrecken', 'Bei einer Absturzhöhe über 2 m grundsätzlich das falsche Arbeitsmittel. Nur, wenn kein sichereres Mittel geeignet ist.'],
        ['Rollgerüst', 'Reinigung in geringen bis mittleren Höhen', 'Arbeitshöhe höchstens 8 m im Freien und 12 m in Innenräumen. Der Boden muss eben, stabil und frei sein, der Gefahrenbereich abgesichert.'],
        ['Hubarbeitsbühne', 'Kleinere Gebäude oder Arbeiten von geringem Umfang an grösseren Gebäuden', 'Der Platz für die Bühne muss bereitstehen und frei bleiben. Auf Trottoir oder Strasse braucht es in der Regel eine Bewilligung der Gemeinde.'],
        ['Sicherung im Fensterrahmen', 'Arbeiten vom Fenstersims aus, von innen eingesetzt', 'Eine Fachperson prüft vorher, ob die Rahmen geeignet sind. Zutritt zu den Räumen nötig.'],
        ['Fest installierte Anlage', 'Feste Verglasungen und Fassaden grosser Gebäude, ohne Fenster zu öffnen und ohne den Betrieb zu stören', 'Laut Suva die beste und auf Dauer günstigste Lösung. Nachträglich einzubauen ist aufwendig, oft unmöglich.'],
        ['Arbeit am hängenden Seil', 'Ausnahmen, wenn andere Einrichtungen nicht möglich sind', 'Zwei getrennt befestigte Seile, Überwachung durch eine zweite Person, Rettung sichergestellt.'],
      ],
      note: 'Planen Sie Neubau, Umbau oder Sanierung, denken Sie die Reinigung von Glas und Fassade gleich mit. Und fragen Sie bei jeder Offerte nach, mit welchem Zugang gearbeitet wird.',
      sources: [
        { label: 'Suva 44033: Fenster, Fassaden und Dächer sicher reinigen und instand halten (Dezember 2025)', href: 'https://www.suva.ch/44033.d' },
        { label: 'Stadt Luzern: Gesuch Benutzung öffentlicher Grund', href: 'https://www.stadtluzern.ch/politikverwaltung/stadtverwaltung/formularabisz/13472/detail' },
        { label: 'Stadt Zug: Benützung von öffentlichem Grund bei Bauarbeiten', href: 'https://stadtzug.ch/de/bauen/bauvorhaben/benuetzung-oeffentlicher-grund' },
      ],
    },
    {
      kind: 'table',
      id: 'abwasser-fassade',
      title: 'Fassadenreinigung: wohin das Abwasser darf',
      intro: 'Stoffe, die Wasser verunreinigen können, dürfen weder direkt noch indirekt in ein Gewässer gelangen oder versickern (Art. 6 GSchG). Das betrifft auch Dolen, die ins Regenwasser führen. Bis eine interkantonale Vollzugshilfe vorliegt, orientieren sich die Fachstellen von Luzern, Zug, Nidwalden und Obwalden am Merkblatt der Kantone Basel-Stadt und Basel-Landschaft (Schreiben vom 26.03.2025).',
      columns: ['Situation', 'Was mit dem Abwasser geschieht', 'Vorher klären'],
      rows: [
        ['Ohne Reinigungsmittel, lockerer Boden, unter 300 m² Fläche', 'Hochdruck mit kaltem Wasser ohne besondere Installation', 'Gesamtfläche der Fassaden, die gereinigt werden'],
        ['Ohne Reinigungsmittel, lockerer Boden, über 300 m² Fläche', 'Mit Rinnen auffangen, Dolen mit Netz oder Vlies abdecken, über die Schmutzwasserkanalisation in die Kläranlage leiten', 'Bei der Gemeinde: Führen Dolen und Schächte in die Schmutzwasserkanalisation?'],
        ['Ohne Reinigungsmittel, versiegelter Boden mit Dolen', 'Dolen und Rinnen abdecken, Abwasser über die Schmutzwasserkanalisation in die Kläranlage leiten', 'Wie oben. Führen die Dolen ins Regenwasser, darf das Abwasser nicht hinein.'],
        ['Mit Reinigungsmitteln oder Mitteln gegen Algen', 'Weder versickern noch in Gewässer oder Kanalisation: in Rinnen und Behältern sammeln, in einer Spaltanlage reinigen', 'Welche Mittel eingesetzt werden. Bei Mitteln gegen Algen möglichst abbaubare Wirkstoffe. Behörde mindestens drei Arbeitstage vorher informieren.'],
        ['Grundwasserschutzzone S oder im Bereich von Bach, Fluss oder See', 'Keine Reinigungsmittel. Wasser vollständig auffangen, lose Bodenflächen abdecken, alles über die Schmutzwasserkanalisation ableiten', 'Ob die Liegenschaft in einer Schutzzone liegt. Behörde mindestens drei Arbeitstage vorher informieren.'],
      ],
      note: 'Die Sorgfaltspflicht des Gesetzes gilt für jedermann (Art. 3 GSchG). Fragen Sie deshalb bei jeder Offerte für eine Fassadenreinigung: Wie wird das Abwasser aufgefangen, und wohin wird es geleitet? Für den Aargau gilt das Schreiben der Zentralschweizer Fachstellen nicht, dort gibt die kantonale Fachstelle Auskunft.',
      sources: [
        { label: 'Gewässerschutzgesetz, Art. 3 und 6', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/de#art_6' },
        { label: 'Merkblatt Fassadenreinigung der Kantone Basel-Stadt und Basel-Landschaft', href: 'https://www.bs.ch/publikationen/merkblatt-fassadenreinigung' },
        { label: 'Umwelt Zentralschweiz: Umwelt- und Gewässerschutz bei der Fassadenreinigung, 26.03.2025', href: 'https://www.azimv.ch/wp-content/uploads/2026/02/Merkblatt_Fassadenreinigung_1_Bestaetigung_Zentralschweiz.pdf' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Termin und Ankündigung',
      text: 'Steht der Termin, informieren Sie Mieterschaft oder Mitarbeitende, am einfachsten mit dem Aushang von dieser Seite. Braucht es öffentlichen Grund, muss vorher die Bewilligung der Gemeinde vorliegen.',
    },
    {
      title: 'Reinigung vor Ort',
      text: 'Glas, Rahmen und die vereinbarten Fassadenflächen werden am geplanten Tag gereinigt. Bei Frost, Sturm oder starkem Regen verschiebt sich der Aussenteil auf den Ausweichtag.',
    },
    {
      title: 'Kontrolle und nächster Termin',
      text: 'Sie prüfen das Ergebnis im Gegenlicht, am besten mit der Checkliste oben. Bei einem festen Rhythmus planen Sie den nächsten Termin gleich mit.',
    },
  ],
  faq: [
    {
      question: 'Was kostet es, Fenster und Fassade reinigen zu lassen?',
      answer:
        'Einen Preis pro Fenster nennen wir nicht, weil der Aufwand stark schwankt. Er hängt ab von Zahl und Grösse der Scheiben, von Sprossen und Rahmen und davon, ob die Fenster nach innen öffnen oder nur von aussen erreichbar sind. Dazu kommen der Zugang (Teleskopstange, Hubarbeitsbühne oder Gerüst), eine allfällige Bewilligung für öffentlichen Grund, der Grad der Verschmutzung und ob innen, aussen oder beides gereinigt wird. Bei Fassaden zählen Fläche, Material, Methode und der Aufwand für das Abwasser.',
    },
    {
      question: 'In welchem Rhythmus sollten Fenster und Glastüren gereinigt werden?',
      answer:
        'Das richtet sich nach Lage und Nutzung. Eingänge, Glastüren und Schaufenster sieht und berührt jeder, sie brauchen kürzere Abstände als die Fenster im Treppenhaus oder im Lager. An einer stark befahrenen Strasse, unter Bäumen oder neben einer Baustelle verschmutzt Glas schneller als in ruhiger Lage.',
    },
    {
      question: 'Müssen Mieterinnen und Mieter beim Termin zu Hause sein?',
      answer:
        'Nur, wenn Fenster von innen gereinigt werden. Das gilt für jede Innenseite und für Fenster, deren Aussenseite nur von innen erreichbar ist, etwa weil sie nach innen öffnen. Glas, das von aussen erreichbar ist, lässt sich ohne Zutritt reinigen. Wer nicht da ist, kann den Schlüssel hinterlegen, der Aushang oben regelt das.',
    },
    {
      question: 'Wer ist für die Fenster in Mietwohnungen zuständig?',
      answer:
        'Kleine Reinigungen für den gewöhnlichen Unterhalt übernimmt nach dem OR die Mieterschaft selbst, nach Ortsgebrauch (Art. 259 OR). Fenster im Treppenhaus und in Allgemeinräumen gehören zu keiner einzelnen Wohnung. Lässt die Verwaltung auch die Wohnungsfenster reinigen, kann sie die Kosten nur als Nebenkosten verrechnen, wenn das im Mietvertrag besonders vereinbart ist (Art. 257a OR).',
    },
    {
      question: 'Reinigen Sie Fassaden mit Hochdruck?',
      answer:
        'Ja, wenn das Material es verträgt. Heikel sind vor allem empfindlicher Putz, Holz und alter Naturstein. Je nach Fläche und Mittel muss das Wasser aufgefangen werden, die Tabelle zum Abwasser zeigt, ab wann.',
    },
    {
      question: 'Braucht es eine Bewilligung, wenn die Hubarbeitsbühne auf dem Trottoir steht?',
      answer:
        'In der Regel ja. Die Stadt Luzern verlangt für die Benutzung öffentlichen Grundes ein Gesuch mit einem vermassten Plan der Fläche, danach folgt die Bewilligung oder eine Begehung. In der Stadt Zug geht das Gesuch digital ein, etwa für ein Fassadengerüst, die Gebühr richtet sich nach Art und Dauer. In anderen Gemeinden gibt die Bauverwaltung Auskunft. Reichen Sie das Gesuch früh ein, damit der Termin hält.',
    },
    {
      question: 'Was ist Reinwasser?',
      answer:
        'Aufbereitetes Wasser, dem die gelösten Mineralien entzogen sind. Weil nichts zurückbleibt, trocknet es auf dem Glas ohne Kalkflecken. Es fliesst durch wasserführende Teleskopstangen, mit denen sich Scheiben vom Boden aus bis in rund 10 m Höhe reinigen lassen.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn neben dem Glas auch Treppenhaus und Allgemeinflächen regelmässig gereinigt werden sollen.' },
    { path: '/leistungen/baureinigung', text: 'Wenn nach Bau oder Umbau Mörtel, Farbe und Etiketten auf Glas und Rahmen haften.' },
    { path: '/leistungen/bueroreinigung', text: 'Wenn in Büros und Praxen auch Arbeitsplätze, Böden und Sanitärräume gereinigt werden sollen.' },
  ],
  cta: {
    title: 'Offerte für Fenster und Fassade',
    text: 'Schicken Sie uns Adresse, Anzahl Geschosse, die ungefähre Zahl der Fenster und ein paar Fotos von Fassade und Eingang. Schreiben Sie dazu, ob innen, aussen oder beides gereinigt werden soll und bis wann. Nach der Besichtigung erhalten Sie die Offerte, kostenlos und unverbindlich.',
  },
}
