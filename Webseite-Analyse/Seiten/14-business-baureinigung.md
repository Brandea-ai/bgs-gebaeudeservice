# Seitenanalyse: Zusätzliche Leistungsseite · Baureinigung

**Seiten-ID: P14 (Inventar U12)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/business/baureinigung` · **Codepfad:** `app/business/baureinigung/page.tsx` (260 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden nicht als eigene Leistung genannt → R3. HYPOTHESE: Eine Bau- bzw. Bauendreinigung könnte unter „Spezial- und Sonderreinigungen“ fallen (N014). Das kann nur der Kunde bestätigen.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen. Voraussetzung ist, dass BGS die Leistung tatsächlich anbietet (R3).

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite erklärt einen nachvollziehbaren Ablauf in drei Phasen (Grob-, Zwischen-, Endreinigung). Das ist ihr stärkster Inhalt. Sie bleibt aber knapp (193 sichtbare Wörter, weitere 85 in Reitern). Die Reiter „Leistungen“ und „Entsorgung“ sowie alle fünf FAQ-Antworten fehlen im ausgelieferten HTML (GLOBAL-011). Direkt unter dem Hero stehen unbelegte Merkmale („Zertifizierte Qualität“, „15+ Jahre Erfahrung“, „Termingerecht“). Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002), der Abschluss-Button heißt abweichend „Kostenlose Beratung“.

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: Slug `/business/baureinigung` ermittelt (U12). Keine Umbenennung nötig, zusätzlicher Bericht (E09).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt „Neubauten, Umbauten und Renovierungen“ und in einer FAQ-Antwort eine „Wohnung (100m²)“. Reale Angaben des Kunden fehlen (R10). HYPOTHESE: Bauherrschaften, Generalunternehmen und Verwaltungen vor Übergabe oder Bauabnahme in LU/ZG. Ob auch Privatkunden bedient werden, ist offen (R7).*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *Teilweise: Die drei Phasen sind verständlich beschrieben (als Struktur BESTANDEN). Die Tätigkeiten stehen nur als Stichworte in nicht ausgelieferten Reitern. Grenzen fehlen, einzige Andeutung ist „Sondermüll (nach Absprache)“ (GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Zu den Sonderleistungen (P05) und zur Grundreinigung als Zusatzleistung der Unterhaltsreinigung (P03) keine Abgrenzung. Die Industriereinigung führt „Grundreinigung nach Bau“, die Maschinenreinigung verweist bei „Grundreinigung“ hierher (SEITE-P14-003). Zu Hauswartung (P04), Winterdienst (P06) und Aussenanlagen (P07) keine Überschneidung. Kannibalisierung → Phase 4.*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt (z. B. für welche Objektarten und Bauphasen BGS geeignet ist).*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Der sinnvolle Rat, BGS „frühzeitig in die Bauplanung einzubeziehen“, steht nur in einer FAQ-Antwort. Die Zeitangabe „Eine Wohnung (100m²) dauert ca. 1-2 Tage“ hat keine Grundlage (SEITE-P14-002). Kostenfaktoren fehlen.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine seitenspezifischen Belege. „Zertifizierte Qualität“, „15+ Jahre Erfahrung“ und „Termingerecht“ sind unbelegt (SEITE-P14-001, GLOBAL-021). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: ein Hero-Bild mit KI-Merkmalen: vier Personen mit Helm und Warnweste reinigen einen Rohbau, ein Sauger mit lampenartiger Absaughaube wirkt technisch unplausibel (Einschätzung). Der Alt-Text „Baustelle“ beschreibt die Tätigkeit nicht (GLOBAL-023). Eine Ablaufgrafik der drei Phasen fehlt, obwohl sie sich anbietet.*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: fünf sinnvolle Fragen (Zeitpunkt, Umfang der Endreinigung, Dauer, Bauschutt, Wochenende). Die Antworten sind nicht im HTML (GLOBAL-011), drei davon enthalten unbelegte Angaben (SEITE-P14-002). Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Auswahl enthält „Baureinigung“ und „Business Baureinigung“ (GLOBAL-028). Der Abschluss-Button „Kostenlose Beratung“ weicht vom Hero ab (GLOBAL-034).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: „in Zürich, Zug und Luzern“, laut Eigenangabe des Kunden nur LU/ZG (GLOBAL-021, R4). Ob die Baureinigung überhaupt angeboten wird, ist offen (R3).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe des Leistungsstatus (R3) und aller Aussagen unten durch die Geschäftsführung des Kunden (R12). Aussagen zur Entsorgung zusätzlich nur mit Nachweis des Entsorgungswegs (eigene Entsorgung oder Partner).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/business/baureinigung`, 200 | Pfad (a): beibehalten. Pfad (b): 308 auf `/basis/sonderleistungen` nur bei fachlicher Eignung, sonst 410 (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | „Neubauten, Umbauten und Renovierungen“, in der FAQ auch „Wohnung (100m²)“. Intent: Anbieter für Bau- oder Bauendreinigung vor Übergabe bzw. Bauabnahme finden (transaktional/lokal, terminkritisch) | Zielgruppe bestätigen (R10), B2B/B2C klären (R7), Intent-Matrix Phase 4 | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der im Code übergebene Titel „Baureinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma“ wird nicht ausgegeben (`SEO` gibt `null` zurück) | Siehe Vorgabe unten. Den Code-Titel nicht einfach aktivieren, er enthält falsche Region und Marke | N007, N015, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung („Professionelle Gebäudereinigung für Premium, Business und Basis-Services in Zürich, Zug und Luzern. …“) | Siehe Vorgabe unten | N007, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Professionelle Baureinigung“. Danach drei H3-Merkmale („Zertifizierte Qualität“, „Termingerecht“, „15+ Jahre Erfahrung“) ohne übergeordnete H2, H3 „Baureinigung in 3 Phasen“ (im Reiter), H2 „Häufig gestellte Fragen“, H2 „Bereit für Ihre Baureinigung?“. Der Cookie-Banner bringt ein H3 vor die H1 | Siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): aus der Sitemap entfernen | N007, N008 |
| Wichtigste Textpassagen | „Zuverlässige Baureinigung für Neubauten, Umbauten und Renovierungen in Zürich, Zug und Luzern. Von der Grobreinigung bis zur Endreinigung.“ Reiter: „1. Grobreinigung … 2. Zwischenreinigung … 3. Endreinigung – Finale Reinigung vor Übergabe. Fenster, Böden, Sanitär – alles bezugsfertig.“ | Phasenlogik behalten und sichtbar ausliefern, Region korrigieren, Merkmale belegen oder streichen | N027 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt), am Seitenende „Kostenlose Beratung“ | Eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ | N020, GLOBAL-002, GLOBAL-034 |
| Bildmotive und Alt-Texte | 1 Hero-Bild mit KI-Merkmalen (vier Personen mit Helm und Warnweste im Rohbau, technisch unplausibles Absauggerät), Alt „Baustelle“, 1536×1024 geliefert (JPG, ca. 180 KB), 666×517 dargestellt | Echtes Foto oder Ablaufgrafik der drei Phasen, Alt-Text nach Inhalt, responsiv | N029, Sichtprüfung 24.09.2026 (Einschätzung) |
| Interne Links | Ausgehend nur Navigation und Footer, keine Kontextlinks. Eingehende Kontextlinks nur aus der FAQ der Maschinenreinigung („Unsere Baureinigung umfasst auch Endreinigung nach Umbauten“) und aus dem Business-Reiter der Zürich-Seite, beide erst nach Klick | Siehe Linkempfehlungen | N009, N023 |
| Schema-Typen | keine im HTML. Im Code vorbereitet, aber wirkungslos: `serviceSchema` mit Anbieter „Swiss Reinigungsfirma“, `areaServed` „Switzerland“, `serviceType` „Construction Cleaning“ (`client/src/utils/schema.ts:69-92`) | `Service` nach Bestätigung, die vorbereiteten Daten nicht unverändert übernehmen | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. H1 und „Jetzt anfragen“ liegen in der ersten mobilen Ansicht (BESTANDEN). axe: 8 Kontrastverstöße, 25 zu kleine Klickziele | Siehe GLOBAL-026 | N020, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 83 Anfragen (Desktop, dekodiert). Keine eigene Lighthouse-Messung, der Seitentyp ist über `/business/bueroreinigung` gemessen (mobil Median-LCP 5,3 s) | Budgets aus Abschnitt I | N020, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -020, -021, -023, -024, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Der Leistungsstatus ist offen (R3). Deshalb gibt es zwei Pfade. Beide nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, die „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort („Wir kommen gerne bei Ihnen vorbei …“). Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind. Unabhängig vom Pfad sind die unbelegten Merkmale sofort zu entfernen (SEITE-P14-001).

**Pfad (a) · Falls R3 die Baureinigung bestätigt** (als eigene Leistung oder als klar umrissener Teil der Spezial- und Sonderreinigungen mit genügend eigenem Inhalt):

- **Meta-Title soll lauten:** „Baureinigung in Luzern und Zug | BGS Gebäudeservice“. Begründung: Leistung und reale Region vorne, Marke zur Wiedererkennung. Der Anlass Bau/Umbau grenzt die Seite klar von Unterhaltsreinigung und Sonderleistungen ab.
- **Meta-Description soll lauten:** „Baureinigung nach Neubau, Umbau oder Renovation in den Kantonen Luzern und Zug. BGS Gebäudeservice erstellt Ihnen vor Ort eine kostenlose, unverbindliche Offerte.“ Nur belegte Aussagen. Die Objektarten nach R3 bestätigen.
- **URL-Slug:** Slug `baureinigung` beibehalten. Das Präfix `/business/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Baureinigung für Neu- und Umbauten in Luzern und Zug“. Bestätigt der Kunde alle drei Phasen, alternativ „Baureinigung in Luzern und Zug: von der Grob- bis zur Endreinigung“.
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung): Übergabe oder Bauabnahme steht an, Baustaub und Rückstände müssen weg, in 2–3 Sätzen.
  2. Die drei Phasen als sichtbare, lineare Ablaufdarstellung (heute im ersten Reiter): je Phase Zeitpunkt, Tätigkeiten und was nicht dazugehört. Nur Phasen, die der Kunde anbietet.
  3. Umfang der Endreinigung als Liste (heute im Reiter „Leistungen“ und in der FAQ-Antwort „Was ist in der Endreinigung enthalten?“).
  4. Entsorgung: nur, was BGS selbst übernimmt oder vermittelt, mit klarer Grenze (heute „Sondermüll (nach Absprache)“).
  5. Planung und Zusammenarbeit: früh einbeziehen (heute nur in der FAQ) und welche Angaben für die Offerte nötig sind (z. B. Fläche, Termin der Bauabnahme, Zugang). Nur bestätigte Punkte.
  6. Beleg: eine echte, freigegebene Referenz aus einem Bauprojekt (R6).
  7. FAQ mit sichtbaren Antworten, die fünf bestehenden Fragen, beantwortet vom Kunden.
  8. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung „Baureinigung“.
- **Zu streichende oder zu ersetzende Passagen:**
  - „…in Zürich, Zug und Luzern.“ → „…in den Kantonen Luzern und Zug.“ Grund: Die Eigenangabe nennt nur LU/ZG (R4).
  - „Zertifizierte Qualität – Professionelle Baureinigung nach Schweizer Standards“ → streichen. Grund: „zertifiziert“ widerspricht dem Impressum (ISO „in Bearbeitung“), „Schweizer Standards“ ist unbestimmt (GLOBAL-021).
  - „15+ Jahre Erfahrung – Expertise in allen Bauphasen“ → streichen oder mit belegtem Gründungsjahr, z. B. „Seit [Jahr] in Luzern und Zug tätig“, nur wenn belegt. Grund: Die Gründung der GmbH ist unbekannt (Nachweisregister).
  - „Termingerecht – Pünktliche Fertigstellung für Ihre Bauabnahme“ → „Wir planen die Reinigung auf Ihren Übergabetermin hin.“, nur mit Bestätigung. Grund: Terminzusage ohne Beleg.
  - FAQ-Antwort „Eine Wohnung (100m²) dauert ca. 1-2 Tage, größere Objekte entsprechend länger.“ → „Die Dauer hängt von Fläche und Verschmutzung ab. Nach der Besichtigung erhalten Sie einen Zeitplan.“ Grund: Zahl ohne Grundlage, zudem ist offen, ob Wohnungen für Privatkunden gereinigt werden (R7).
  - FAQ-Antwort „Die Entsorgung erfolgt umweltbewusst und nach gesetzlichen Vorgaben.“ und Reiter „Sondermüll (nach Absprache)“ → nur mit Nachweis des Entsorgungswegs. Sonst: „Die Entsorgung von Bauabfällen klären wir in der Offerte.“
  - FAQ-Antwort „…auch an Wochenenden und Feiertagen…“ → nur mit Bestätigung, sonst streichen.
  - „Professionelle Baureinigung“ (H1) → siehe H1-Vorschlag. Grund: Schablonenformel „Professionelle …“.
  - Abschluss-Button „Kostenlose Beratung“ → „Kostenlose Offerte vor Ort anfragen“ (GLOBAL-034).
  - Schreibweisen „Objektgröße“, „größere“ → „Objektgrösse“, „grössere“, dazu der Schweizer Begriff „Renovationen“ statt „Renovierungen“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto einer Endreinigung durch BGS (Freigabe der Bauherrschaft, Mitarbeitende nur mit Einwilligung), sonst neutrales Objektfoto ohne Personen. Als Ergänzung eignet sich eine schlichte Ablaufgrafik der drei Phasen, deren Text zusätzlich als HTML-Text auf der Seite steht. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. Alt-Text nach Inhalt, z. B. „Endreinigung in einem Neubau: Baustaub wird von Fensterrahmen entfernt“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Baureinigung“, `serviceType` „Baureinigung“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13]. Die vorbereiteten Code-Daten nicht übernehmen.
- **Linkempfehlungen:**
  - Am Ende der Endreinigung auf `/basis/unterhaltsreinigung` mit dem Linktext „regelmässige Unterhaltsreinigung nach dem Bezug“, als logischer nächster Schritt nach der Übergabe.
  - Für Grundreinigungen ausserhalb von Bauprojekten auf `/basis/sonderleistungen` mit dem Linktext „Grund- und Sonderreinigungen“, sofern bestätigt.
  - Den FAQ-Link der Maschinenreinigung auf diese Seite (`app/business/maschinenreinigung/page.tsx:214`) entfernen. Er verweist bei der Frage nach der Grundreinigung von Maschinen auf die Bauendreinigung, das passt fachlich nicht.

**Pfad (b) · Falls R3 die Baureinigung nicht bestätigt:**

- **Seite entfernen.** Per **308** auf `/basis/sonderleistungen` nur, wenn die überarbeitete Sonderleistungsseite die Bau- bzw. Bauendreinigung tatsächlich als Spezialreinigung beschreibt (R3). Heute enthält sie dazu nichts (76 Wörter, keine Leistungsliste). Sonst Status **410**. Keine Sammelweiterleitung auf die Startseite [S07].
- **Aus Navigation, Footer, Sitemap und Formularauswahl entfernen:** Mega-Menü (`client/src/components/SwissNavigation.tsx:30`), Footer-Liste „Business Services“ (`client/src/components/SwissFooter.tsx:313`), `public/sitemap.xml`, Formularoptionen „Baureinigung“ und „Business Baureinigung“ (`SwissFooter.tsx:150-172`, GLOBAL-028). Falls der KI-Chat bleibt (R8), auch den Leistungskatalog in `server/gemini.ts` anpassen.
- **Interne Verweise entfernen:** FAQ-Link der Maschinenreinigung (`maschinenreinigung/page.tsx:214`), Business-Reiter der Zürich-Seite, Listenpunkt „Grundreinigung nach Bau“ auf der Industriereinigung.
- **Alt-neu-Mapping:** Eintrag in 02: `/business/baureinigung` → `/basis/sonderleistungen` (308) bzw. „entfällt“ (410), Grund „R3“.
- **Abnahme für Pfad (b):** Die alte URL liefert 308 auf eine Seite mit Status 200 oder 410. Ein Crawl findet keinen internen Link mehr auf die alte URL, Sitemap und Formularauswahl enthalten sie nicht.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P14-001 · Sichtbare Merkmale „Zertifizierte Qualität“, „15+ Jahre Erfahrung“ und „Termingerecht“ ohne Beleg

- **Ist-Zustand:** Direkt unter dem Hero stehen drei Merkmale (`page.tsx:90-105`): „Zertifizierte Qualität – Professionelle Baureinigung nach Schweizer Standards“, „Termingerecht – Pünktliche Fertigstellung für Ihre Bauabnahme“ und „15+ Jahre Erfahrung – Expertise in allen Bauphasen“. „Zertifiziert“ widerspricht dem Impressum („Die ISO-Zertifizierung befindet sich derzeit in Bearbeitung.“), Erfahrung und Termintreue sind nicht belegt. Beide Aussagen stehen bereits im Nachweisregister (01, Abschnitt A). Gerade bei terminkritischen Bauabnahmen verlassen sich Auftraggeber auf solche Zusagen.
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021, G09)
- **Vorgabe:** Streichen oder belegen (Gründungsjahr aus dem Handelsregister, konkrete Norm, reales Projektbeispiel). Ersatztexte siehe Abschnitt 4.
- **Abnahme:** Jede verbleibende Aussage hat einen Beleg oder eine schriftliche Freigabe im Nachweisregister. Keine Aussage widerspricht dem Impressum.
- **Evidenz:** Inhaltsbefund (N027) und Impressum (N028). **Quelle:** S02

### SEITE-P14-002 · Zeit-, Entsorgungs- und Einsatzangaben ohne Grundlage

- **Ist-Zustand:** Die FAQ-Antworten (erst nach Klick, N023) nennen „Eine Wohnung (100m²) dauert ca. 1-2 Tage“ (`page.tsx:212`), „Die Entsorgung erfolgt umweltbewusst und nach gesetzlichen Vorgaben.“ (`page.tsx:221`) und Einsätze „auch an Wochenenden und Feiertagen“ (`page.tsx:230`). Der Reiter „Entsorgung“ führt „Sondermüll (nach Absprache)“ (`page.tsx:169`). Ob BGS Bauabfälle überhaupt selbst entsorgt, ist nicht belegt. Die Wohnungsangabe deutet zudem auf Privatkundschaft hin (R7).
- **Priorität:** P2 · **Launch-Blocker:** ja (Teil von GLOBAL-021: jede Zeitangabe braucht Beleg oder Freigabe)
- **Vorgabe:** Der Kunde bestätigt Erfahrungswerte zur Dauer, den Entsorgungsweg und die tatsächlichen Einsatzzeiten (R3, R5). Nicht bestätigte Angaben neutral formulieren (siehe Abschnitt 4).
- **Abnahme:** Jede verbleibende Zahl und Zusage hat eine schriftliche Kundenfreigabe. Die Entsorgungsaussage nennt den tatsächlichen Weg.
- **Evidenz:** Codebefund (Zeilen oben) und Inhaltsbefund (N027). **Quelle:** S02

### SEITE-P14-003 · Überschneidung mit Grund- und Sonderreinigung ungeklärt

- **Ist-Zustand:** „Grundreinigung nach Bau“ steht auch in der Leistungsliste der Industriereinigung (`app/business/industriereinigung/page.tsx:140`). Die Maschinenreinigung verweist bei „Grundreinigung“ auf diese Seite (`app/business/maschinenreinigung/page.tsx:214`). Büro- und Unterhaltsreinigung führen „Grundreinigung“ als Zusatzleistung, die Sonderleistungsseite (P05) nennt keine Leistungen. Wer eine Grund- oder Endreinigung sucht, findet keine eindeutig zuständige Seite. Gegenstück zu SEITE-P05-002, das die Sonderleistungsseite als Übersicht bestätigter Spezialreinigungen vorschlägt.
- **Priorität:** P3 · **Launch-Blocker:** nein
- **Vorgabe:** In Phase 4 festlegen, welche Seite „Bau- und Endreinigung“ und welche „Grundreinigung“ verantwortet, abhängig von R3. Danach nur noch auf die zuständige Seite verweisen. Ohne Suchdaten ist das ein Risiko, keine belegte Kannibalisierung.
- **Abnahme:** Die Zuständigkeit ist in der Intent-Matrix (03) dokumentiert, es gibt keine widersprüchlichen Verweise mehr.
- **Evidenz:** HYPOTHESE (Inhaltsvergleich). **Quelle:** S05, S07

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -020 (Identität), -021 (unbelegte Leistung, Region und Qualitätsaussagen), -023 (Bild). Seitenspezifisch zusätzlich SEITE-P14-001 und SEITE-P14-002 (beide Teil von GLOBAL-021). Bis R3 beantwortet ist, bleibt offen, ob die Seite überarbeitet (Pfad a) oder entfernt wird (Pfad b).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S05, S07, S08, S09, S10, S11, S12, S13, S17).
