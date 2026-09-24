# Seitenanalyse: Zusätzliche Leistungsseite · Privatjet Reinigung

**Seiten-ID: P21 (Inventar U07)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/premium/privatjet` · **Codepfad:** `app/premium/privatjet/page.tsx` (299 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** Zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden (N014) nicht genannt → R3.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen.

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite bietet eine Leistung an, die in der Eigenangabe des Kunden nicht vorkommt, und stützt sie ausschließlich auf unbelegte Zusagen: „24/7“, „Höchste Diskretion garantiert“, „ISO 9001 & Aviation Standards“, Einsätze an bis zu sechs Flugplätzen außerhalb von Luzern und Zug, eine Haftpflichtdeckung von „10 Mio. CHF“ und ein Einstiegspreis von „CHF 800“. Inhaltlich bleibt sie eine Stichwortliste (185 sichtbare Wörter, weitere 175 in Reitern). Die Reiter „Unser Prozess“ und „Ihre Vorteile“ sowie alle vier FAQ-Antworten fehlen im ausgelieferten HTML (GLOBAL-011). Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002). Solange R3 die Leistung nicht bestätigt, gilt für den Launch Pfad (b) in Abschnitt 4: Seite entfernen.

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: `/premium/privatjet` (U07), zusätzlicher Bericht P21 (E09). Ob die Leistung überhaupt angeboten wird, ist offen (R3).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt „anspruchsvolle Kunden“ und im Reiter „Privatjet-Besitzer und Charter-Unternehmen“, reale Angaben fehlen (R3, R10). Der Kaufanlass (Reinigung zwischen zwei Flügen, am Standort des Flugzeugs) wird nicht beschrieben.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: zwölf Stichworte (je sechs innen und außen), kein Ergebnis, keine Grenzen (GLOBAL-036). „Cockpit-Reinigung“, „Fahrwerk-Reinigung“ und „Tragflächen-Behandlung“ berühren den technischen Bereich des Luftfahrzeugs. Wer diese Arbeiten freigibt und was ausgeschlossen ist, fehlt und ist fachlich zu klären (R3).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *Keine inhaltliche Überschneidung mit den Kernleistungen laut Eigenangabe (Unterhaltsreinigung, Sonderreinigungen, Hauswartung, Winterdienst, Außen- und Grünflächenpflege). BEFUND: gleiche Schablone wie die Yacht-Seite (P22), die Kategorie `/premium` existiert nicht (404, GLOBAL-033).*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt (Flugzeuggrößen, bediente Flugplätze, Vorlaufzeit).*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Der Ablauf „Terminvereinbarung → Sicherheitscheck → Professionelle Reinigung → Qualitätskontrolle“ steht nur im zweiten Reiter und nicht im HTML. Zeit- und Preisangaben ohne Grundlage: „ca. 2-3 Stunden“, „Express-Service in unter 90 Minuten“, „beginnt bei CHF 800“ (SEITE-P21-003).*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: Jeder „Beleg“ ist unbelegt oder widerlegt: ISO 9001 (Impressum: „in Bearbeitung“), „Erfahrung seit 2008“, „10 Mio. CHF“, „über 50 Privatjet-Besitzer“, Flughafen-Sicherheitsausweise (SEITE-P21-002, GLOBAL-021, -022). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: ein KI-typisches Hero-Motiv (`premium-privatjet.jpg`, 1536×1024): Person mit leerem Namensschild und unbeschrifteter Sprühflasche in einer idealisierten Kabine. Eine sehr ähnliche männliche Figur erscheint auf den Seiten Yacht und Luxusimmobilien (Einschätzung, GLOBAL-023). Keine Ablaufgrafik.*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: Die vier Fragen (Dauer, Sicherheitsprüfung, Flughäfen, Preis) sind echte Entscheidungsfragen. Die Antworten sind nicht im HTML (GLOBAL-011) und enthalten unbelegte Zusagen (SEITE-P21-001 bis -003). Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Option „Privatjet Reinigung“ steht in der Gruppe „Premium Services“ einer Auswahl mit Dubletten (GLOBAL-028).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: „in Zürich, Zug und Luzern“ im Hero, dazu Flugplätze in ZH, GE, BE, SG, TI und GR. Keiner davon liegt in LU oder ZG (SEITE-P21-001, R4).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe aller Aussagen durch die Geschäftsführung des Kunden (R12). Versicherungs- und Zugangsangaben nur mit Dokument (Police, Ausweise).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/premium/privatjet`, 200 | Pfad (a): beibehalten. Pfad (b): 410 (Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | „anspruchsvolle Kunden in Zürich, Zug und Luzern“, im Reiter „Privatjet-Besitzer und Charter-Unternehmen“. Intent: Dienstleister für Flugzeugreinigung an einem bestimmten Flugplatz finden (transaktional, ortsgebunden) | Erst R3, dann Zielgruppe und bediente Flugplätze bestätigen (R4, R10) | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der im Code hinterlegte Titel „Privatjet Reinigung - Exklusiver Premium Service“ wird nicht ausgegeben (wirkungslose `SEO`-Komponente, Z. 29-35) | Pfad (a): siehe Vorgabe unten. Pfad (b): entfällt | N007, N015, GLOBAL-009, -010 |
| Meta-Description | Globale Standardbeschreibung („… in Zürich, Zug und Luzern …“). Die hinterlegte, nicht ausgegebene Beschreibung verspricht „24/7 Verfügbarkeit“ | Pfad (a): siehe Vorgabe unten, ohne „24/7“ | N007, N015, GLOBAL-010 |
| H1 und Abschnittsstruktur | Badge „Premium Service“, H1 „Privatjet Reinigung“. Danach H3 „Umfassende Privatjet Reinigung“ (im Reiter), H2 „Häufig gestellte Fragen“ mit vier H3-Fragen, H2 „Bereit für erstklassigen Service?“. Der Cookie-Banner bringt ein H3 vor die H1 | Pfad (a): siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap (`public/sitemap.xml:13`, `lastmod` 2025-01-02) | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): Sitemap-Eintrag entfernen | N007, N008 |
| Wichtigste Textpassagen | „Professionelle Reinigung für Privatjets mit höchsten Standards. Diskretion, Präzision und Verfügbarkeit rund um die Uhr für anspruchsvolle Kunden in Zürich, Zug und Luzern.“ Merkmalskarten „VIP-Service – Höchste Diskretion garantiert“, „24/7 Verfügbar – Rund um die Uhr erreichbar“, „Premium-Produkte – Nur hochwertigste Materialien“, „Zertifiziert – ISO 9001 & Aviation Standards“ | Nur belegte Aussagen (Abschnitt 4) | N027, Code Z. 50, 80-99 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt). Abschluss „Jetzt Kontakt aufnehmen“ → Formular, erneut „Termin vereinbaren“ | Pfad (a): eine primäre CTA „Kostenlose Offerte anfragen“ mit vorbelegter Leistung | N020, GLOBAL-002, -034 |
| Bildmotive und Alt-Texte | 1 Hero-Bild `premium-privatjet.jpg` (147 KB, KI-typisch nach Einschätzung), Alt „Luxuriöser Privatjet Interior“ (Sprachmischung), 1536×1024 geliefert, 666×517 dargestellt (mobil 355×544) | Pfad (a): echtes Foto, Alt nach Inhalt. Pfad (b): Datei entfernen | N029, Sichtprüfung |
| Interne Links | Keine Kontextlinks. Eingehend: Navigation und Footer auf allen Seiten, Startseiten-Karte „Premium Services“ („Mehr erfahren“, `app/page.tsx:236`). Der Link von `/standorte/zuerich` zielt auf `/premium/privatjetreinigung` (404) | Siehe Linkempfehlungen bzw. Entfernungsliste | N009, N024, GLOBAL-016 |
| Schema-Typen | keine. Das im Code vorbereitete `serviceSchema` (`category: "Aviation Cleaning"`) wird nicht ausgegeben | Pfad (a): `Service` nach Bestätigung | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. axe: 6 Kontrastverstöße (u. a. Primär-Button 3,78:1, Badge „Premium Service“ 3,31:1), 25 zu kleine Klickziele | Siehe GLOBAL-026 | N031 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 83 Anfragen (Desktop, dekodiert). LCP-Element im Browser-Test: das Hero-Bild | Budgets aus Abschnitt I | N020 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -016, -020, -021, -022, -023, -024, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Ob die Seite bleibt, entscheidet die Antwort auf R3. Bis zu einer schriftlichen Bestätigung gilt für den Launch **Pfad (b)**, weil eine unbestätigte Leistung eine unfreigegebene Behauptung ist (G09, GLOBAL-021).

**Pfad (a): Die Leistung wird durch R3 bestätigt.** Die Vorschläge nutzen nur Fakten aus der Eigenangabe des Kunden (N014: BGS Gebäudeservice GmbH, „kostenlose und unverbindliche Offerte“) und die bestätigte Leistung selbst. Sie gelten, sobald R2 (Marke), R3 (Leistung) und R4 (Einsatzorte) beantwortet sind. Flugplätze, Zeiten, Preise, Versicherung und Zugangsberechtigungen erscheinen erst mit Beleg.

- **Meta-Title soll lauten:** „Privatjet-Reinigung | BGS Gebäudeservice“. Begründung: Leistung vorne, Marke zur Wiedererkennung, keine unbelegte Zusage. Einen Ort erst ergänzen, wenn R4 die tatsächlich bedienten Flugplätze nennt (dann z. B. „Privatjet-Reinigung am Flughafen Zürich | BGS Gebäudeservice“, nur mit Beleg).
- **Meta-Description soll lauten:** „BGS Gebäudeservice reinigt Privatjets. Umfang, Einsatzort und Termin stimmen wir mit Ihnen ab – die Offerte ist kostenlos und unverbindlich.“ Nur belegte Aussagen. Den Einsatzort nach R4 konkretisieren.
- **URL-Slug:** Slug `privatjet` beibehalten. Das Präfix `/premium/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Privatjet-Reinigung“, ergänzt um den bestätigten Einsatzort (R4). Die heutige H1 ist sachlich passend, nur ohne Bindestrich.
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht: wofür Halter oder Betreiber die Reinigung beauftragen (z. B. zwischen zwei Flügen), in 2–3 Sätzen, nach R10.
  2. Leistungsumfang als sichtbare Liste (innen, außen), dazu „Nicht enthalten“: technische Arbeiten am Luftfahrzeug und alles, was eine Freigabe des Halters oder Unterhaltsbetriebs braucht (vom Kunden festzulegen).
  3. Einsatzorte: nur bestätigte Flugplätze, mit dem Hinweis, wie der Zugang organisiert wird (nur belegte Angaben).
  4. Ablauf ab Anfrage: Anfrage → Abstimmung von Termin und Zugang → Reinigung → gemeinsame Abnahme. Nur Schritte, die der Kunde bestätigt.
  5. Preisfaktoren statt Preis: Flugzeuggröße, Zustand, Umfang, Ort. Kein Betrag ohne Grundlage.
  6. Beleg: eine echte, freigegebene Referenz (R6), ohne Rückschluss auf Halter oder Kennzeichen.
  7. FAQ mit sichtbaren Antworten (Dauer, Zugang und Sicherheit, Versicherung, Preisfaktoren), beantwortet vom Kunden.
  8. Abschluss-CTA „Kostenlose Offerte anfragen“, das Formular mit vorausgewählter Leistung.
- **Zu streichende oder zu ersetzende Passagen:**
  - „Professionelle Reinigung für Privatjets mit höchsten Standards. Diskretion, Präzision und Verfügbarkeit rund um die Uhr für anspruchsvolle Kunden in Zürich, Zug und Luzern.“ (Z. 50) → „BGS Gebäudeservice reinigt Privatjets. Umfang, Einsatzort und Termin legen wir gemeinsam mit Ihnen fest.“ Grund: „rund um die Uhr“ und „höchste Standards“ sind unbelegt, die Region ebenso (R4).
  - Merkmalskarten „VIP-Service – Höchste Diskretion garantiert“, „24/7 Verfügbar – Rund um die Uhr erreichbar“, „Premium-Produkte – Nur hochwertigste Materialien“, „Zertifiziert – ISO 9001 & Aviation Standards“ (Z. 80-99) → streichen. Ersatz nur durch bestätigte Fakten, z. B. „Vertraulichkeitsvereinbarung auf Wunsch“. Grund: Die ISO-Angabe widerspricht dem Impressum („in Bearbeitung“), die übrigen sind unbelegt (GLOBAL-021).
  - Reiter „Ihre Vorteile“ mit „Warum Swiss Reinigungsfirma?“, „Erfahrung seit 2008 – Über 15 Jahre Erfahrung in der Reinigung von Luxus-Luftfahrzeugen.“, „Zertifizierte Produkte – Nur Aviation-zugelassene Reinigungsmittel …“, „24/7 Service an allen großen Schweizer Flughäfen: Zürich, Genf, Bern, St. Gallen-Altenrhein.“, „Vollständig versichert mit 10 Mio. CHF Haftpflichtdeckung.“, „Vertrauen von über 50 Privatjet-Besitzern und Charter-Unternehmen.“ (Z. 193-230) → Reiter auflösen. Übernehmen nur, was belegt ist: Einsatzorte (R4), Versicherung mit Police (Versicherer, Deckungssumme, Geltung für Arbeiten an Luftfahrzeugen), Produkte mit Herstellerfreigabe. Grund: SEITE-P21-001 und -002, Marke GLOBAL-020.
  - FAQ-Antwort „… Eine Standard-Innenreinigung für einen Light Jet beginnt bei CHF 800. …“ (Z. 267) → „Der Preis hängt von Flugzeuggrösse, Zustand, Leistungsumfang und Einsatzort ab. Sie erhalten vorab eine kostenlose, unverbindliche Offerte.“ Grund: kein Preisbeleg (SEITE-P21-003).
  - FAQ-Antwort „Eine Standard-Innenreinigung dauert ca. 2-3 Stunden, … Express-Service in unter 90 Minuten … Außenreinigung benötigt zusätzlich 1-2 Stunden.“ (Z. 240) → nur vom Kunden bestätigte Richtwerte mit Bedingung, sonst „Die Dauer hängt von Grösse und Zustand des Flugzeugs ab. Wir nennen sie mit der Offerte.“
  - FAQ-Antwort „Ja, alle unsere Mitarbeiter verfügen über gültige Flughafen-Sicherheitsausweise …“ (Z. 249) und der Reiter-Schritt „Sicherheitscheck“ (Z. 164-166) → nur mit Nachweis der Ausweise je genanntem Flugplatz, sonst streichen.
  - „Qualitätskontrolle – Abschließende Inspektion durch unseren Supervisor. Nur perfekte Ergebnisse verlassen unsere Hände.“ (Z. 174-176) → „Nach dem Einsatz prüfen wir das Ergebnis gemeinsam mit Ihnen oder Ihrer Crew.“, nur wenn bestätigt. Grund: Absolutaussage ohne Beleg.
  - Abschluss „Bereit für erstklassigen Service?“ (Z. 278) → „Privatjet-Reinigung anfragen“. Grund: Superlativ ohne Beleg. Die CTA soll sagen, was passiert (GLOBAL-034).
  - Schreibweisen „Außenreinigung“, „Größe“, „großen“, „Abschließende“ → „Aussenreinigung“, „Grösse“, „grossen“, „Abschliessende“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto eines BGS-Einsatzes in einer Kabine, mit Einwilligung von Halter und abgebildeten Mitarbeitenden, ohne erkennbares Kennzeichen des Flugzeugs. Sonst ein lizenziertes Kabinenfoto ohne Personen, das nicht als BGS-Einsatz beschriftet wird. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 355–390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. Alt-Text nach Inhalt, z. B. „Reinigung von Ledersitzen in einer Flugzeugkabine“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Privatjet-Reinigung“, `serviceType` „Reinigung von Flugzeugkabinen“ (Umfang nach R3 ergänzen), `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` = nur die nach R4 bestätigten Einsatzorte, `url` = Canonical. Kein `offers` mit Preis ohne Grundlage. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13].
- **Linkempfehlungen:**
  - Von der künftigen Seite „Alle Leistungen“ hierher mit dem Linktext „Privatjet-Reinigung“.
  - Den defekten Link auf `/standorte/zuerich` (`/premium/privatjetreinigung`) entfernen oder auf `/premium/privatjet` korrigieren, aber nur, wenn der Einsatzort Zürich bestätigt ist (GLOBAL-016, R4).
  - Von der Startseite nur verlinken, wenn die Kategorie nach R3 bestehen bleibt (Seitenbericht P01, SEITE-P01-001), mit dem Linktext „Privatjet-Reinigung ansehen“ statt „Mehr erfahren“.
  - Keine Kontextlinks zu Gebäudeleistungen erzwingen. Die Nutzeraufgabe ist eine andere.

**Pfad (b): Die Leistung wird nicht bestätigt (Launch-Vorgabe bis zur Antwort).**

- **Statuscode:** `/premium/privatjet` antwortet mit 410 (dauerhaft entfernt). Keine Weiterleitung: Keine bestätigte Seite erfüllt dieselbe Nutzeraufgabe (Flugzeugreinigung). Eine Weiterleitung auf eine Gebäudeleistung oder auf die Startseite würde die Suchabsicht verfehlen [S07]. Signale, die dabei verloren gehen könnten, sind nicht belegt: laut Runtime-Logs praktisch kein Besucherverkehr (N012), Suchdaten fehlen (B11).
- **Entfernen aus:**
  - Navigation: `client/src/components/SwissNavigation.tsx:22` (Array `premiumServices`, speist das Mega-Menü Z. 86 und das mobile Menü Z. 180). Wird die Gruppe leer, auch die Überschriften „Premium Services“ (Z. 84, 178).
  - Footer-Spalte „Premium Services“: `client/src/components/SwissFooter.tsx:297` (Überschrift Z. 295).
  - Formularauswahl: Option „Privatjet Reinigung“, `SwissFooter.tsx:144` (Gruppe „Premium Services“, Z. 143-148).
  - Sitemap: `public/sitemap.xml:13` (Eintrag Z. 12-17).
  - Startseiten-Kategorie „Premium Services“: `app/page.tsx:219-246`. Beschreibung (Z. 226) und Liste (Z. 229) nennen Privatjets, der Button „Mehr erfahren“ zeigt auf `/premium/privatjet` (Z. 236). Entfallen alle vier Premium-Leistungen, entfällt die ganze Karte (SEITE-P01-001).
  - Standortseiten: `app/standorte/zuerich/page.tsx:122` (Karte mit defektem Link, GLOBAL-016), `app/standorte/luzern/page.tsx:157` („Privatjet-Service“).
  - KI-Chat-Katalog: `server/gemini.ts:70-74` und der Code „PJ“ in Z. 685, damit der Chat die Leistung nicht weiter anbietet (sofern der Chat bleibt, R8).
  - Bilddatei `public/premium-privatjet.jpg` und die Kopie in `client/public/`, Vite-Reste über GLOBAL-008 und -024.
- **Alt-neu-Mapping (in 02 eintragen, G10):**

| Bisherige URL | Neues Ziel | Status | Begründung |
|---|---|---|---|
| `/premium/privatjet` | — | 410 | Leistung nicht bestätigt, keine fachlich passende Zielseite |
| `/premium/privatjetreinigung` (nur defektes Linkziel, nie eine Seite) | — | 404 bleibt, der Link entfällt | GLOBAL-016 |

  Das Mapping gilt auf der Vorab-Adresse und nach dem Launch auf der eigenen Domain (GLOBAL-018).
- **Prüfung nach Umsetzung:** `/premium/privatjet` antwortet mit 410. Ein Linkprüfer über alle Seiten einschließlich aller Reiter findet keinen Link dorthin. Die Volltextsuche findet „Privatjet“ weder in Navigation, Footer, Formular, Startseite, Standortseiten noch im Chat-Katalog. Die Sitemap enthält die URL nicht.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register (unbestätigte Leistung: GLOBAL-021, R3). Seitenspezifisch:

### SEITE-P21-001 · Einsatz- und Verfügbarkeitszusagen außerhalb von Luzern und Zug, in sich widersprüchlich

- **Ist-Zustand:** Der Hero verspricht „Verfügbarkeit rund um die Uhr für anspruchsvolle Kunden in Zürich, Zug und Luzern“ (Z. 50), die Merkmalskarte „24/7 Verfügbar – Rund um die Uhr erreichbar“ (Z. 87-88). Der Reiter „Ihre Vorteile“ nennt „24/7 Service an allen großen Schweizer Flughäfen: Zürich, Genf, Bern, St. Gallen-Altenrhein.“ (Z. 212), die FAQ-Antwort dagegen „Zürich-Kloten, Genf, Bern-Belp, St. Gallen-Altenrhein, Lugano und Samedan. Auch kleinere Privatflugplätze nach Absprache.“ (Z. 258). Keiner der genannten Flugplätze liegt in LU oder ZG, die beiden Listen weichen voneinander ab (vier gegenüber sechs), und „24/7“ ist unbelegt. Wer eine Reinigung in Genf oder Lugano sucht, erhält ein Versprechen, das der Kunde laut Eigenangabe (N014) nicht abdeckt.
- **Priorität:** P1 · **Launch-Blocker:** ja (G09, ergänzt GLOBAL-021 um diese Fundstellen)
- **Vorgabe:** In Pfad (a) nur die nach R4 bestätigten Flugplätze nennen, als eine einzige Liste an einer Stelle, ohne „24/7“ und ohne „alle großen“. In Pfad (b) entfällt die Seite. Nachtrag für das Nachweisregister (01, Abschnitt A): Fundstellen Z. 50, 87-88, 212, 258.
- **Abnahme:** Volltextsuche über die ausgelieferte Seite einschließlich Reiter und FAQ: keine Ortsangabe ohne schriftliche Bestätigung, kein „24/7“ oder „rund um die Uhr“ ohne Nachweis einer Bereitschaftsregelung.
- **Evidenz:** Codebefund `app/premium/privatjet/page.tsx:50, 87-88, 212, 258`, Inhaltsbefund N027, Eigenangabe N014. **Quelle:** S02

### SEITE-P21-002 · Nachweise, die keine sind: ISO 9001, „Erfahrung seit 2008“, 10 Mio. CHF Deckung, „über 50 Privatjet-Besitzer“

- **Ist-Zustand:** Merkmalskarte „Zertifiziert – ISO 9001 & Aviation Standards“ (Z. 97-98), obwohl das Impressum die ISO-Zertifizierung als „in Bearbeitung“ bezeichnet (N028). Reiter „Ihre Vorteile“: „Erfahrung seit 2008 – Über 15 Jahre Erfahrung in der Reinigung von Luxus-Luftfahrzeugen.“ (Z. 203-204, Über uns nennt als Gründungsjahr 2005), „Nur Aviation-zugelassene Reinigungsmittel“ (Z. 208), „Vollständig versichert mit 10 Mio. CHF Haftpflichtdeckung.“ (Z. 216, die Seite Housekeeping nennt „CHF 5 Millionen“), „Vertrauen von über 50 Privatjet-Besitzern und Charter-Unternehmen.“ (Z. 220). Dazu „VIP-Service – Höchste Diskretion garantiert“ (Z. 82-83) und die FAQ-Aussage, alle Mitarbeitenden hätten „gültige Flughafen-Sicherheitsausweise“ und „erweiterte Sicherheitsprüfungen“ (Z. 249). Keine dieser Aussagen ist belegt, die ISO-Angabe ist durch die eigene Website widerlegt. Gerade im Diskretions- und Sicherheitskontext wirken solche Zusagen als Kaufgrund und begründen Erwartungen, die der Kunde möglicherweise nicht erfüllen kann.
- **Priorität:** P1 · **Launch-Blocker:** ja (G09)
- **Vorgabe:** Alle genannten Aussagen streichen. In Pfad (a) nur mit Dokument wieder aufnehmen: Zertifikat (Norm, Stelle, Gültigkeit), Police (Versicherer, Deckungssumme, Geltung für Arbeiten an Luftfahrzeugen), belegte Zahl freigegebener Kunden, Ausweise je Flugplatz. Eine einzige, geprüfte Versicherungsangabe für die ganze Website (heute 10 Mio. auf Privatjet, Luxusimmobilien und Industriereinigung, 5 Mio. auf Housekeeping). Nachtrag für das Nachweisregister.
- **Abnahme:** Für jede verbleibende Zahl, Zertifizierung und Zusage liegt ein Beleg im Nachweisregister vor. Keine Aussage widerspricht dem Impressum oder einer anderen Seite (Volltextsuche nach „ISO“, „Mio“, „Millionen“, „seit 20“).
- **Evidenz:** Codebefund `app/premium/privatjet/page.tsx:82-83, 97-98, 203-220, 249`, Inhaltsbefund N027, N028. **Quelle:** S02

### SEITE-P21-003 · Einstiegspreis und Zeitangaben ohne Grundlage

- **Ist-Zustand:** FAQ „Was kostet eine Privatjet Reinigung?“: „… Eine Standard-Innenreinigung für einen Light Jet beginnt bei CHF 800. …“ (Z. 267). FAQ „Wie schnell können Sie einen Privatjet reinigen?“: „Eine Standard-Innenreinigung dauert ca. 2-3 Stunden, … Express-Service in unter 90 Minuten ist nach Absprache möglich. Außenreinigung benötigt zusätzlich 1-2 Stunden.“ (Z. 240). Weder Preis noch Dauer sind belegt. Beide Antworten stehen zudem nicht im ausgelieferten HTML (GLOBAL-011). Ein genannter Startpreis wird von Interessenten als Zusage gelesen.
- **Priorität:** P1 · **Launch-Blocker:** ja (G09)
- **Vorgabe:** Den Preis durch Preisfaktoren und den Hinweis auf die kostenlose Offerte ersetzen (Ersatztext in Abschnitt 4). Zeiten nur als vom Kunden bestätigte Richtwerte mit Bedingungen. Ein Betrag darf nur mit dokumentierter Kalkulation und Gültigkeitsdatum erscheinen.
- **Abnahme:** Keine CHF- und keine Zeitangabe auf der Seite ohne Eintrag im Nachweisregister. Die Antworten stehen sichtbar im ausgelieferten HTML.
- **Evidenz:** Codebefund `app/premium/privatjet/page.tsx:240, 267`. **Quelle:** S02

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] R3 entschieden und der gewählte Pfad vollständig umgesetzt: (a) mit Belegen für jede Aussage oder (b) mit 410, Entfernungsliste und Mapping.
- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker seitenspezifisch: SEITE-P21-001, -002, -003 und die offene Entscheidung R3 (G09). Global über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -016 (defekter Zuführungslink, entfällt mit Pfad b), -020 (Identität, „Warum Swiss Reinigungsfirma?“), -021 (unbelegte Leistung, Region und Qualitätsaussagen), -023 (Bild).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S07, S08, S09, S10, S11, S12, S13, S16, S17).
