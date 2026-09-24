# Seitenanalyse: Blog-Übersicht „Wissen & Ratgeber“

**Seiten-ID: P27 (Inventar U28)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/blog` · **Codepfad:** `app/blog/page.tsx` (112 Zeilen) · **Stand:** `d7e1122`

**Zuordnung (E09):** Zusätzlicher Bericht für eine tatsächlich vorhandene URL, nicht Teil der zwölf erwarteten Seiten. Die vier Artikel haben eigene Berichte: P28 (U29), P29 (U30), P30 (U31), P31 (U32).

## 1. Aufgabe dieser Seite

Orientierung über die Ratgeberinhalte geben und jeden freigegebenen Artikel auffindbar machen.

**Abgrenzung:** Reine Übersicht. Keine eigenen Fachaussagen und keine Verkaufsargumente. Anreisser beschreiben nur, was im jeweiligen Artikel tatsächlich steht. Nicht freigegebene Artikel erscheinen hier nicht.

**Primäre Zielhandlung:** Den passenden Artikel öffnen. Der Kontakt bleibt über Navigation und Footer erreichbar, eine eigene Verkaufs-CTA braucht die Übersicht nicht.

**Ergebnis der Prüfung:** Die Mindestfunktion ist erfüllt. `/blog` ist der einzige interne Entdeckungspfad der vier Artikel, und alle Karten verlinken mit echten `<a href>`-Links (N009). Die Übersicht zeigt aber Veröffentlichungsdaten vor Projektbeginn (GLOBAL-031), Lesezeiten, die nicht zum Textumfang passen (SEITE-P27-001), und Anreisser, die mehr versprechen, als die Artikel enthalten (SEITE-P27-003). Verlinkt ist je Karte nur ein Button „Weiterlesen“ (SEITE-P27-002). Sichtbarer Text: 103 Wörter.

## 2. Seitenspezifische Prüfliste

- [x] Zweck und Zielgruppe der Übersicht sind aus H1 und Einleitung erkennbar. → *BEFUND: H1 „Wissen & Ratgeber“, Einleitung „Expertenwissen rund um professionelle Reinigung, Gebäudeservice und Facility Management in der Schweiz.“ Keine Zielgruppe, „Expertenwissen“ ohne Autor oder Beleg, „Schweiz“ statt LU/ZG (GLOBAL-021, R4). SEITE-P27-003.*
- [x] Jeder Artikel ist über einen echten Link mit beschreibendem Linktext erreichbar. → *Teilweise BESTANDEN: vier echte Links (N009). BEFUND: Linktext viermal „Weiterlesen“, der Titel ist nicht verlinkt, der Link umschließt einen Button (SEITE-P27-002, GLOBAL-034).*
- [x] Anreisser geben den Inhalt des Artikels zutreffend wieder. → *BEFUND: „umfassender Leitfaden“, „Alles Wichtige“ und „Transparente Informationen“ für Artikel mit rund 200 bis 750 Wörtern und ohne belegte Zahlen (SEITE-P27-003).*
- [x] Datumsangaben sind echte Veröffentlichungs- bzw. Überarbeitungsdaten (keine Scheinaktualität). → *BEFUND: 15., 10., 5. und 1. Januar 2025, also vor Anlage des Vercel-Projekts am 04.11.2025. Die Sitemap nennt für alle Artikel 2025-01-02 als letzte Änderung, das liegt vor drei der vier angezeigten Veröffentlichungsdaten (GLOBAL-031, GLOBAL-015).*
- [x] Lesezeiten sind aus dem tatsächlichen Umfang abgeleitet. → *BEFUND: angegeben 6 bis 10 Min., rechnerisch rund 1 bis 4 Min. (SEITE-P27-001).*
- [x] Nur geprüfte und freigegebene Artikel werden gelistet. → *BEFUND: Alle vier Artikel enthalten unbelegte oder widersprüchliche Aussagen (P28–P31). Nach den Einzelentscheidungen bleiben zwei Artikel (P29, P30), siehe Abschnitt 4.*
- [x] Reihenfolge und Gliederung passen zum Umfang. → *BESTANDEN: vier Artikel, absteigend nach Datum. Kategorien oder Filter sind bei diesem Umfang nicht nötig.*
- [x] Die Artikel sind zusätzlich aus passenden Leistungsseiten erreichbar. → *BEFUND: nein, nur über `/blog` (GLOBAL-017). Linkempfehlungen stehen in P29 und P30.*
- [x] Die Bezeichnung in Navigation, H1 und Titel ist einheitlich. → *BEFUND: Navigation und Footer „Blog“, H1 „Wissen & Ratgeber“, `<title>` global (GLOBAL-010).*
- [x] Bilder: Zweck, Alt-Text, Herkunft und Auslieferungsgröße. → *BEFUND: vier Kartenbilder, 1536×1024 geliefert, 650×256 dargestellt (GLOBAL-024). Der Alt-Text wiederholt den danebenstehenden Titel (SEITE-P27-002). Motive mit englischen Beschriftungen und erfundenen Logos, Merkmale KI-generierter Bilder (Einschätzung, N029, GLOBAL-023).*
- [x] Karten per Tastatur und Screenreader bedienbar. → *HYPOTHESE: je Karte zwei verschachtelte fokussierbare Elemente (`<a>` mit `<button>`), nicht manuell getestet (SEITE-P27-002). axe: 1 Kontrastverstoß, 25 zu kleine Klickziele (GLOBAL-026).*
- [x] Umgang mit einem leeren oder sehr kleinen Artikelbestand ist festgelegt. → *BEFUND: keine Regel vorhanden. Vorgabe in Abschnitt 4.*
- [ ] Redaktionsverantwortung und Veröffentlichungsprozess sind zugeordnet. → *NICHT PRÜFBAR: keine Angaben (B14, R12).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe der Texte unten durch die Geschäftsführung des Kunden (R12).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/blog`, 200 | Beibehalten (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | Keine Zielgruppe genannt. Intent: Orientierung über Ratgeberinhalte (navigational/informational) | HYPOTHESE: Entscheider in Verwaltungen, Gewerbebetrieben und bei Eigentümern in LU/ZG vor einer Vergabe (R10, GLOBAL-030) | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten) | Siehe Vorgabe unten | N007, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung | Siehe Vorgabe unten | N007, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Wissen & Ratgeber“, danach vier H2 (Artikeltitel) und H2 „Jetzt Kontakt aufnehmen“ (Footer-Formular). Der Cookie-Banner bringt ein H3 vor die H1 | H1 „Ratgeber Gebäudereinigung“, Karten mit verlinktem Titel | Faktenblatt, N020 |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap (`lastmod` 2025-01-02, `changefreq` weekly) | Selbstreferenzierendes Canonical auf die Launch-Domain, `lastmod` = letzte echte Änderung | N007, N008 |
| Wichtigste Textpassagen | „Expertenwissen rund um professionelle Reinigung, Gebäudeservice und Facility Management in der Schweiz.“ Anreisser u. a. „Ein umfassender Leitfaden zur Auswahl der perfekten Reinigungsfirma für Ihr Unternehmen in der Schweiz.“ | Sachliche Einleitung und Anreisser, siehe Abschnitt 4 | N027 |
| Haupt-CTA und Ziel | Keine eigene CTA. Je Karte „Weiterlesen“ → Artikel. Navigation „Kontakt aufnehmen“ → `/kontakt`, Footer-Formular, Chat-Button (defekt) | Verlinkter Titel je Karte, Kontakt über Navigation und Footer | N020, GLOBAL-002 |
| Bildmotive und Alt-Texte | 4 Kartenbilder, 1536×1024 geliefert, 650×256 dargestellt, Alt = Artikeltitel. Motive: Mann am Laptop mit englischer Überschrift „CLEANING COMPANIES“ und erfundenen Firmenlogos, Reinigungsteam mit Schild „CAUTION WET FLOOR“, Taschenrechner mit Banknoten, Haushaltsreiniger mit englischen Etiketten (Einschätzung: KI-generiert) | Bilder weglassen oder echte bzw. neutrale Motive, leerer Alt-Text bei dekorativer Verwendung | N029, Faktenblatt |
| Interne Links | 4 Artikel-Links (einziger interner Entdeckungspfad der Artikel), sonst Navigation und Footer | Titel als Link, unter der Liste Links zu den Kernleistungen | N009 |
| Schema-Typen | keine | Kein eigenes Markup nötig, siehe Abschnitt 4 | N007 |
| Mobile/Desktop/Accessibility | Kein Overflow. Mobil verdeckt der Cookie-Banner in der ersten Ansicht die Artikelliste, H1 und Einleitung bleiben sichtbar. axe: 1 Kontrastverstoß (roter Button mit weißer Schrift, 3,78:1), 25 zu kleine Klickziele. React-Fehler #418 | Siehe GLOBAL-026, -019, -013 | N020, N025, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,6 MB, 97 Anfragen (Desktop, dekodiert). LCP-Element (Labor ohne Drosselung) ist das erste Kartenbild | Budgets aus Abschnitt I | N020 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -013, -015, -017, -019, -020, -021, -023, -024, -026, -031, -032, -034, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Die Vorschläge nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, „Hauswart- und Reinigungsfirma“, Arbeitsgebiet Kanton Luzern und Kanton Zug. Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind, und richten sich nach den Artikelentscheidungen in P28 bis P31.

- **Entscheidung: behalten und überarbeiten**, als Übersicht nur der freigegebenen Artikel. Begründung: Die Seite ist der einzige Entdeckungspfad der Artikel (N009) und über Navigation und Footer auf jeder Seite verlinkt. Ihr Nutzen hängt vollständig an der Qualität der gelisteten Artikel.
- **Artikelbestand nach den Einzelentscheidungen:**

  | Artikel | Entscheidung (Bericht) | Folge für `/blog` |
  |---|---|---|
  | `/blog/richtige-reinigungsfirma-finden` | Behalten und überarbeiten, nimmt verwertbare Teile aus P28 auf (P30) | Karte bleibt |
  | `/blog/reinigungskosten-schweiz` | Behalten und überarbeiten, Zahlen nur mit Freigabe (P29) | Karte bleibt |
  | `/blog/professionelle-gebaeudereinigung` | Zusammenführen in P30, 308 (P28) | Karte entfällt |
  | `/blog/umweltfreundliche-reinigung` | Zurückstellen bis zu belegten Angaben des Kunden (P31) | Karte entfällt |

- **Leerzustand:** Ist zum Launch kein Artikel überarbeitet und freigegeben, `/blog` nicht veröffentlichen, also aus Navigation, Footer und Sitemap nehmen, bis der erste Artikel freigegeben ist. Eine Übersicht ohne gültige Artikel hat keinen Nutzen.
- **Meta-Title soll lauten:** „Ratgeber Gebäudereinigung | BGS Gebäudeservice“. Begründung: benennt Inhaltstyp und Thema, grenzt sich klar von den Leistungsseiten ab, Marke zur Wiedererkennung (R2).
- **Meta-Description soll lauten:** „Ratgeber von BGS Gebäudeservice: worauf Sie bei der Wahl einer Reinigungsfirma achten sollten und wovon die Kosten einer Unterhaltsreinigung abhängen.“ Erst verwenden, wenn P29 und P30 überarbeitet sind, danach an den tatsächlich veröffentlichten Artikelbestand anpassen.
- **URL-Slug:** `/blog` beibehalten. Für eine Umbenennung gibt es keinen belegten Vorteil. Die Bezeichnung in Navigation und Footer von „Blog“ auf „Ratgeber“ ändern, passend zur H1.
- **H1-Vorschlag:** „Ratgeber Gebäudereinigung“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. H1 und ein Satz Einleitung: „Antworten auf Fragen rund um die Vergabe, die Kosten und den Ablauf einer Gebäudereinigung. Von BGS Gebäudeservice, Hauswart- und Reinigungsfirma in den Kantonen Luzern und Zug.“
  2. Artikelliste nach tatsächlichem Veröffentlichungsdatum, neueste zuerst.
  3. Unter der Liste ein Satz mit Links zu den bestätigten Kernleistungen (siehe Linkempfehlungen), damit Leser ohne Umweg zur Leistung kommen.
- **Kartenaufbau:** Titel als H2 und einziger Link der Karte. Anreisser mit ein bis zwei Sätzen. Darunter „Veröffentlicht am [Datum]“ und, nur bei inhaltlicher Überarbeitung, „Aktualisiert am [Datum]“, beide Werte identisch mit den Angaben im Artikel. Lesezeit aus der Wortzahl berechnet oder weglassen. Bild optional und dekorativ.
- **Zu streichende oder zu ersetzende Passagen:**
  - „Wissen & Ratgeber“ (H1, Z. 57) → „Ratgeber Gebäudereinigung“. Grund: gleicher Begriff wie in der Navigation, benennt das Thema.
  - „Expertenwissen rund um professionelle Reinigung, Gebäudeservice und Facility Management in der Schweiz.“ (Z. 60) → Einleitung aus der Abschnittsfolge. Grund: „Expertenwissen“ ohne Autor und Beleg, „Facility Management“ ist nicht bestätigt (die Eigenangabe nennt „Aussen- und Facility-Services“, R3), Region nur LU/ZG (R4).
  - „Ein umfassender Leitfaden zur Auswahl der perfekten Reinigungsfirma für Ihr Unternehmen in der Schweiz.“ (Z. 17) → „Welche Fragen Sie vor der Vergabe klären sollten: Leistungsumfang, Versicherung, Offerte, Referenzen und Qualitätskontrolle.“ Grund: Superlativ, beschreibt nicht den Inhalt. Die Ersatzfassung entspricht dem überarbeiteten Artikel P30.
  - „Transparente Informationen zu Reinigungskosten und Preisgestaltung in Zürich, Zug und Luzern.“ (Z. 33) → „Wovon der Preis einer Unterhaltsreinigung abhängt und wie Sie Offerten vergleichen.“ Grund: Zürich liegt nicht im Arbeitsgebiet (R4), „transparent“ ohne belegte Zahlen (SEITE-P29-001).
  - „Alles Wichtige über professionelle Gebäudereinigung, Standards und Qualitätsmerkmale.“ (Z. 25) und „Nachhaltige Reinigungsmethoden und ökologische Produkte für eine grünere Zukunft.“ (Z. 41) → entfallen mit den Karten (P28 zusammengeführt, P31 zurückgestellt).
  - „15. Januar 2025“, „10. Januar 2025“, „5. Januar 2025“, „1. Januar 2025“ (Z. 19, 27, 35, 43) → tatsächliches Veröffentlichungsdatum der überarbeiteten Fassung. Grund: GLOBAL-031.
  - „8 Min.“, „10 Min.“, „7 Min.“, „6 Min.“ (Z. 20, 28, 36, 44) → berechnete Lesezeit oder keine Angabe. Grund: SEITE-P27-001.
  - „Weiterlesen“ (Z. 98, viermal) → verlinkter Titel. Grund: SEITE-P27-002.
- **Bilder:** Die Karten funktionieren ohne Bild. Die heutigen Motive (englische Beschriftungen, erfundene Logos, Einschätzung KI) nicht weiterverwenden. Falls Bilder gewünscht sind: echte, freigegebene Fotos oder neutrale Objektfotos, als AVIF/WebP mit `sizes` passend zur Kartenbreite (Desktop ca. 650 px, mobil ca. 360 px), unterhalb der ersten Reihe verzögert geladen, leerer Alt-Text, weil der Titel daneben steht [S17]. Budget nach Abschnitt I der globalen Analyse (GLOBAL-024). Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** Für die Übersicht ist kein eigenes Markup nötig. `BreadcrumbList` erst, wenn sichtbare Breadcrumbs existieren (GLOBAL-033). Die Artikel tragen `BlogPosting` (siehe P29 und P30). Selbstreferenzierendes Canonical auf die Launch-Domain [S05].
- **Linkempfehlungen:**
  - Je Karte der Titel → Artikel-URL, Linktext = Artikeltitel.
  - Unter der Liste → `/basis/unterhaltsreinigung` mit dem Linktext „Unterhaltsreinigung“ und → `/basis/hausmeisterservice` mit dem Linktext „Hauswartung“, sobald R3 die Leistungen bestätigt.
  - Eingehend genügen Navigation und Footer (Bezeichnung „Ratgeber“). Die Leistungsseiten verlinken direkt auf den passenden Artikel, nicht auf die Übersicht (Details in P29 und P30).

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Für entfallende Artikel-URLs ist ein dokumentiertes Alt-neu-Mapping nötig. [S07] Änderungsdaten in der Sitemap müssen wahrheitsgemäß sein. [S06]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P27-001 · Die Lesezeiten passen nicht zum Umfang der Artikel

- **Ist-Zustand:** Die Karten nennen „8 Min.“, „10 Min.“, „7 Min.“ und „6 Min.“ (`app/blog/page.tsx:20, 28, 36, 44`). Die Artikel umfassen einschließlich aller Reiter- und Akkordeon-Inhalte rund 750 (P30), 280 (P28), 200 (P29) und 240 Wörter (P31), gezählt aus dem Quellcode und abgeglichen mit den Faktenblättern. Bei einer angenommenen Lesegeschwindigkeit von 200 Wörtern pro Minute ergeben sich rund 4, 1½, 1 und 1 Minute. Die längste Angabe („10 Min.“) steht bei einem der kürzesten Artikel.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Die Lesezeit aus der tatsächlichen Wortzahl mit einer dokumentierten Formel berechnen und bei jeder Überarbeitung neu setzen, oder ganz weglassen. Das gilt auch für die Angabe im Artikel P30 („8 Minuten Lesezeit“).
- **Abnahme:** Für jeden gelisteten Artikel weicht die angezeigte Lesezeit höchstens eine Minute vom Rechenwert (Wortzahl geteilt durch die dokumentierte Lesegeschwindigkeit) ab, oder es wird keine Lesezeit angezeigt.
- **Evidenz:** Codebefund und Zählung. Die Lesegeschwindigkeit ist eine Annahme, die Abweichung bleibt aber auch bei 150 Wörtern pro Minute deutlich (rund 5, 2, 1½ und 1½ Minuten). **Quelle:** S02

### SEITE-P27-002 · Kartenaufbau: nur „Weiterlesen“ ist verlinkt, der Link umschließt einen Button, das Bild wiederholt den Titel

- **Ist-Zustand:** Je Karte ist nur der Button „Weiterlesen“ verlinkt, viermal mit gleichem Linktext. Titel (H2) und Bild sind nicht verlinkt (`app/blog/page.tsx:72-101`). Im ausgelieferten HTML steckt der Button im Link: `<a href="/blog/richtige-reinigungsfirma-finden"><button …>Weiterlesen</button></a>` (N007). Der Alt-Text jedes Bildes ist der Artikeltitel (`alt={article.title}`, Z. 74), der direkt darunter noch einmal als H2 steht. Dasselbe Muster aus Link und Button gibt es bei „Kontakt aufnehmen“ in der Navigation und bei den Abschluss-CTAs der Artikel (`<a href="/kontakt"><div><button>`), es ist also seitenübergreifend.
- **Priorität:** P3 · **Launch-Blocker:** nein
- **Vorgabe:** Den Titel als einzigen Link der Karte setzen oder die ganze Karte als einen Link mit dem Titel als zugänglichem Namen gestalten, ohne Button im Link. Kein separates „Weiterlesen“. Falls es gestalterisch bleiben soll, muss der zugängliche Name den Artikeltitel enthalten. Kartenbilder als dekorativ behandeln (leerer Alt-Text) [S17]. Das seitenübergreifende Muster in Phase 4 global erfassen.
- **Abnahme:** Die HTML-Validierung meldet kein interaktives Element innerhalb eines Links. Per Tastatur gibt es genau einen Tab-Stopp je Karte. Eine Screenreader-Stichprobe liest jeden Titel einmal vor. Kein Linktext lautet nur „Weiterlesen“.
- **Evidenz:** Code- und HTML-Befund. Die Auswirkung auf Tastatur und Screenreader (zwei Fokusziele je Karte, doppelte Ansage des Titels) ist HYPOTHESE, nicht manuell getestet. **Quelle:** S04, S17, S22

### SEITE-P27-003 · Einleitung und Anreisser versprechen mehr, als die Artikel enthalten

- **Ist-Zustand:** „Expertenwissen rund um professionelle Reinigung, Gebäudeservice und Facility Management in der Schweiz.“ (Z. 60). Anreisser: „Ein umfassender Leitfaden zur Auswahl der perfekten Reinigungsfirma für Ihr Unternehmen in der Schweiz.“ (Z. 17), „Alles Wichtige über professionelle Gebäudereinigung, Standards und Qualitätsmerkmale.“ (Z. 25), „Transparente Informationen zu Reinigungskosten und Preisgestaltung in Zürich, Zug und Luzern.“ (Z. 33). Die Artikel nennen keinen Autor, umfassen rund 200 bis 750 Wörter und enthalten Preisangaben ohne Quelle (SEITE-P29-001). Zürich liegt laut Eigenangabe des Kunden nicht im Arbeitsgebiet (N014).
- **Priorität:** P2 · **Launch-Blocker:** nein (die Region läuft über GLOBAL-021)
- **Vorgabe:** Einleitung und Anreisser nach Abschnitt 4 neu fassen: sagen, welche Frage der Artikel beantwortet, ohne Superlative und nur mit dem bestätigten Arbeitsgebiet.
- **Abnahme:** Jeder Anreisser beschreibt Inhalte, die im Artikel stehen. Kein „perfekt“, „umfassend“, „alles“ oder „Expertenwissen“ ohne Beleg. Keine Nennung von Zürich ohne Bestätigung (R4).
- **Evidenz:** Inhaltsbefund. **Quelle:** S02

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Nur freigegebene Artikel gelistet. Datum, Lesezeit und Anreisser entsprechen dem jeweiligen Artikel.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft (Tastatur, Screenreader-Stichprobe, mobile erste Ansicht mit Banner).
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-031 (Datumsangaben vor Projektbeginn), -010 (Metadaten), -020 (Identität), -021 (Region Zürich im Anreisser), -002 und -003 (Chat und Formular aus dem Layout). Seitenspezifisch keine zusätzlichen Blocker.

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S04, S05, S06, S07, S08, S09, S17, S22).
