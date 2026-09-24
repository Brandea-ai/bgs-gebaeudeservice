# Seitenanalyse: Leistung 5 · Aussenanlagen

**Seiten-ID: P07 (Inventar U16)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/business/aussenanlagen` · **Codepfad:** `app/business/aussenanlagen/page.tsx` (261 Zeilen) · **Stand:** `d7e1122`

**Zuordnung (vorläufig, E09):** „Leistung 5“ der Vorgabe = Aussenanlagen. Grundlage ist die Eigenangabe des Kunden: „Aussen- und Grünflächenpflege“ im Bereich Hauswartung und „Aussen- und Facility-Services“ im Bereich Gebäudereinigung (N014). Die Seite deckt Teile von beidem ab (Aussenreinigung und Grünflächenpflege) und zusätzlich den Winterdienst, der eine eigene Seite hat (P06). Die endgültige Zuordnung hängt an Rückfrage R3.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen.

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite verteilt drei Leistungen auf drei Reiter (169 sichtbare Wörter, weitere 80 in Reitern). Nur der erste Reiter „Außenreinigung“ steht im HTML. Die Grünflächenpflege, die die H1 verspricht, und der Winterdienst erscheinen erst nach einem Klick (GLOBAL-011). Der Winterdienst doppelt `/basis/winterdienst` mit abweichenden Zusagen (SEITE-P07-001). Die Merkmalsüberschrift „Schweizweit“ widerspricht ihrem eigenen Text („Service in Zürich, Zug und Luzern“) und der Eigenangabe (GLOBAL-021). Die Zielhandlung ist vorhanden („Jetzt anfragen“ und „Kostenlose Beratung“ führen zum Footer-Formular), der zweite Weg „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002).

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung 5 aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *BESTANDEN (vorläufig bis R3): `/business/aussenanlagen`, Datei umbenannt (E09). Der Kunde nennt „Aussen- und Grünflächenpflege“ und „Aussen- und Facility-Services“ (N014). Die Seite heißt je nach Stelle „Außenanlagen“, „Außenanlagenpflege“ oder „Außenanlagen & Grünflächenpflege“ (SEITE-P07-002).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt nur „Für einen gepflegten ersten Eindruck“, reale Angaben des Kunden fehlen (R10). HYPOTHESE: Verwaltungen, Eigentümer und Gewerbebetriebe in LU/ZG mit Grün- und Verkehrsflächen, die ganzjährig gepflegt werden sollen.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: Die Aussenreinigung steht als Stichwortliste im HTML, die Grünflächenpflege mit vier Kurzbeschreibungen nur im zweiten Reiter (nicht im HTML, GLOBAL-011). Grenzen fehlen. „Baumpflege … durch Fachpersonal“ und „Graffiti-Entfernung“ stehen ohne Bedingungen da (GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Reiter und FAQ zum Winterdienst doppeln `/basis/winterdienst` (P06) mit abweichenden Zusagen. Der Hausmeisterservice (P04) führt „Grünflächen- & Außenanlagenpflege“ als eigene Aufgabe, Facility Management „Grünflächenpflege“ und „Winterdienst“. „Hochdruckreinigung“ und „Graffiti-Entfernung“ könnten zu den Sonderreinigungen (P05) gehören, die dort aber nicht beschrieben sind. Zur Unterhaltsreinigung (P03) keine Überschneidung. Kannibalisierung → SEITE-P07-001, Phase 4.*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt.*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: kein Ablauf und keine Kostenfaktoren. Die FAQ empfiehlt „wöchentliche Reinigung“ bzw. „monatliche Pflege“ ohne Bezug zu Objekt oder Jahreszeit und verspricht, „innerhalb weniger Stunden vor Ort“ zu sein (GLOBAL-021). Eine Jahresplanung (Rasen, Hecken, Laub) fehlt.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine. „Eigene Streufahrzeuge“, „Dokumentation für Versicherung“, „Fachpersonal“ für die Baumpflege, „modernen Geräten“ und Einsätze „rund um die Uhr“ sind unbelegt (GLOBAL-021). Angefordert über R5 (Erreichbarkeit) und R6 (Belege).*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: eigenes, zur Grünflächenpflege passendes Motiv (BESTANDEN), aber KI-typisch (1536×1024, `b2b-gruenflaechen.jpg`): vier Personen in neongelb-grüner Kleidung mähen Rasen und schneiden Hecken vor einem Bürogebäude. Es zeigt kein reales Team (Einschätzung, GLOBAL-023), die Kleidung weicht von den anderen Leistungsseiten ab (GLOBAL-032). Mit 344 KB das schwerste Hero-Bild der fünf Leistungsseiten (GLOBAL-024). Keine Ablaufdarstellung.*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *BEFUND (teilweise erfüllt): fünf passende Fragen (Häufigkeit, Winterdienst, Grünflächen, Wochenenden, Reaktionszeit). Die Antworten sind nicht im HTML (GLOBAL-011), drei davon versprechen Einsätze „24/7“, „rund um die Uhr“ bzw. „innerhalb weniger Stunden“ (GLOBAL-021). Die Winterdienst-Frage gehört auf P06. Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ und „Kostenlose Beratung“ springen zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Formularauswahl enthält die Leistung doppelt („Außenanlagen“ und „Business Außenanlagen“). Der Abschluss verspricht „ein unverbindliches Angebot“ und „Unsere Experten beraten Sie gerne“, der Kunde selbst eine kostenlose Offerte vor Ort (N014) (GLOBAL-028, GLOBAL-034).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: „in Zürich, Zug und Luzern“ und die Überschrift „Schweizweit“, laut Eigenangabe des Kunden nur LU/ZG (GLOBAL-021, R4).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *BESTANDEN: Freigabe aller Aussagen unten durch die Geschäftsführung des Kunden (R12).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/business/aussenanlagen`, 200 | Beibehalten (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | Keine ausdrückliche Zielgruppe („Für einen gepflegten ersten Eindruck“), das Bild zeigt ein Bürogebäude. Intent: Anbieter für Aussen- und Grünflächenpflege finden (transaktional/lokal, saisonal) | Zielgruppe mit dem Kunden bestätigen (R10), Intent-Matrix Phase 4 | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der im Code vorgesehene Titel „Außenanlage Zürich, Zug & Luzern - Swiss Reinigungsfirma“ (Z. 34-40) wird nicht ausgegeben | Siehe Vorgabe unten | N007, N015, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung | Siehe Vorgabe unten | N007, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Außenanlagen & Grünflächenpflege“ (ohne die Schablone „Professionelle …“). Danach drei H3 als Merkmale („Ganzjährige Betreuung“, „Flexible Einsätze“, „Schweizweit“), H3 „Außenbereichsreinigung“ (im ersten Reiter), H2 „Häufig gestellte Fragen“, H2 „Bereit für gepflegte Außenanlagen?“. Der Cookie-Banner bringt ein H3 vor die H1 | Siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap | Selbstreferenzierendes Canonical auf die Launch-Domain | N007, N008 |
| Wichtigste Textpassagen | „Professionelle Pflege Ihrer Außenanlagen und Grünflächen in Zürich, Zug und Luzern. Für einen gepflegten ersten Eindruck.“ und das Merkmal „Schweizweit – Service in Zürich, Zug und Luzern“ | Konkreter Nutzen statt Floskel, Region korrigieren | N027 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ und im Abschluss „Kostenlose Beratung“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt). Mobil sind in der ersten Ansicht nur „Jetzt anfragen“ und „Termin vereinbaren“ sichtbar | Eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ | N020, GLOBAL-002 |
| Bildmotive und Alt-Texte | 1 Hero-Bild (KI-typisch, Gärtnerteam vor Bürogebäude), Alt „Grünflächen“, 1536×1024 geliefert (Datei 344 KB), 666×517 dargestellt | Echtes Foto, beschreibender Alt-Text, responsiv | N029 |
| Interne Links | Nur Navigation und Footer, keine Kontextlinks. Eingehend zusätzlich die FAQ von `/business/hallenreinigung` (Linktext „Außenanlagenpflege“, erst nach Klick im DOM). Die Zürich-Seite verlinkt im Reiter „Business“ mit „Details“ auf `/business/außenanlagenpflege` → 404 (GLOBAL-016). Im Inhalt der Startseite kommt die Leistung nicht vor | Siehe Linkempfehlungen | N009, N023, N024 |
| Schema-Typen | keine. Der vorbereitete `serviceSchema` (Z. 25-30, 39) wird nicht ausgegeben | `Service` nach Bestätigung | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow, H1 mobil in der ersten Ansicht. axe: 5 Kontrastverstöße (u. a. Kennzeichnung „Business Lösung“ 3,31:1, roter Button 3,78:1), 25 zu kleine Klickziele | Siehe GLOBAL-026 | N020, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,1 MB (2.200 KB), 83 Anfragen (Desktop, dekodiert), die schwerste der fünf Leistungsseiten. Der Abstand zur nächstschweren (Winterdienst, 2.092 KB) entspricht dem Größenunterschied der Hero-Bilder (344 KB zu 236 KB). Das Hero-Bild wird mit 60 % Deckkraft und Parallax-Verschiebung ausgeliefert, ohne Rücksicht auf „Bewegung reduzieren“ (GLOBAL-012). Diese Seite ist nicht mit Lighthouse gemessen, Referenz für den Seitentyp: `/business/bueroreinigung` mit mobilem Labor-LCP 5,3 s | Budgets aus Abschnitt I | N007, N020, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -016, -020, -021, -023, -024, -025, -026, -028, -030, -032, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Die Vorschläge nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, „Hauswart- und Reinigungsfirma“, Arbeitsgebiet Kanton Luzern und Kanton Zug, Leistungen „Aussen- und Grünflächenpflege“ (Hauswartung) und „Aussen- und Facility-Services“ (Gebäudereinigung), „kostenlose und unverbindliche Offerte“ vor Ort. Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind. Ob die Seite beide Leistungen des Kunden abdeckt oder nur die Grünflächenpflege, entscheidet R3.

- **Meta-Title soll lauten:** „Aussen- und Grünflächenpflege in Luzern und Zug | BGS Gebäudeservice“. Begründung: übernimmt den Leistungsnamen des Kunden, reale Region vorne, Marke zur Wiedererkennung. Grenzt sich vom Winterdienst (P06) und vom Hausmeisterservice (P04) ab.
- **Meta-Description soll lauten:** „Aussen- und Grünflächenpflege für Liegenschaften in den Kantonen Luzern und Zug. BGS Gebäudeservice kommt für eine kostenlose, unverbindliche Offerte bei Ihnen vorbei.“ Nur belegte Aussagen. Konkrete Tätigkeiten erst nach Bestätigung des Umfangs ergänzen (R3). „Liegenschaften“ nach R10 bestätigen.
- **URL-Slug:** Slug `aussenanlagen` beibehalten, er enthält bereits kein „ß“. Das Präfix `/business/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 von `/business/aussenanlagen` weiterleiten und das Mapping in 02 dokumentieren [S07]. Die fehlerhafte Zieladresse `/business/außenanlagenpflege` der Zürich-Seite wird über GLOBAL-016 korrigiert, nicht über einen neuen Slug.
- **H1-Vorschlag:** „Aussen- und Grünflächenpflege in Luzern und Zug“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung, FIMI-Prinzip): gepflegte Grünflächen und saubere Aussenbereiche über das ganze Jahr, ohne eigenen Aufwand für Verwaltung oder Eigentümer, in 2–3 Sätzen.
  2. Grünflächenpflege als erster sichtbarer Abschnitt (heute im zweiten Reiter, nicht im HTML): Rasen, Hecken, Beete, Bäume, nur bestätigte Tätigkeiten. Bei Baumarbeiten angeben, wer sie ausführt, nach Bestätigung (R6).
  3. Aussenreinigung: Wege, Plätze, Eingänge (heute erster Reiter) als Liste, nur bestätigt. Ob sie hierher gehört oder zu den „Aussen- und Facility-Services“ der Gebäudereinigung, klärt R3.
  4. Pflege über das Jahr: was in welcher Jahreszeit anfällt, als einfache Übersicht, nur mit bestätigten Tätigkeiten. Den Winter deckt ein Satz mit Link auf den Winterdienst (P06) ab, kein eigener Reiter.
  5. Ablauf ab Anfrage: Anfrage → kostenlose Besichtigung und Offerte (belegt) → Pflegeplan → Start. Nur Schritte, die der Kunde bestätigt.
  6. Beleg: eine echte, freigegebene Referenz mit Foto (R6).
  7. FAQ mit sichtbaren Antworten zu Häufigkeit, Grünflächen, Wochenenden und Reaktionszeit, beantwortet vom Kunden. Die Winterdienst-Frage auf P06 verschieben.
  8. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung.
- **Zu streichende oder zu ersetzende Passagen:**
  - Merkmal „Schweizweit – Service in Zürich, Zug und Luzern“ → „In den Kantonen Luzern und Zug“ (nach R4). Grund: in sich widersprüchlich und entgegen der Eigenangabe (GLOBAL-021). Diese Fundstelle fehlt bisher im Nachweisregister (01, Abschnitt A), Nachtrag bei der Gegenprüfung (Phase 6).
  - „Professionelle Pflege Ihrer Außenanlagen und Grünflächen in Zürich, Zug und Luzern. Für einen gepflegten ersten Eindruck.“ → „Pflege Ihrer Aussenanlagen und Grünflächen in den Kantonen Luzern und Zug.“ plus ein konkreter Nutzen aus Kundensicht, sobald bestätigt. Grund: Region (R4), Floskel statt Nutzen (GLOBAL-030).
  - Reiter „Winterdienst“ („24/7 Bereitschaft“, „Dokumentation für Versicherung“, „Eigene Streufahrzeuge“) und die FAQ „Welche Leistungen sind im Winterdienst enthalten?“ → ein Satz mit Link auf `/basis/winterdienst`. Grund: Doppelung mit abweichenden, unbelegten Zusagen (SEITE-P07-001, GLOBAL-021).
  - „Baumpflege – Baumschnitt, Kronenauslichtung und Totholzentfernung durch Fachpersonal.“ → nur mit Bestätigung, wer die Arbeiten ausführt (R6). Sonst streichen.
  - FAQ-Antworten „Besonders bei Schneefall und Notfällen sind wir rund um die Uhr für Sie da.“ und „Bei Notfällen wie Schneefall oder Verschmutzungen können wir innerhalb weniger Stunden vor Ort sein.“ → nur mit nachweisbarer Bereitschaftsregelung (R5), sonst streichen (GLOBAL-021).
  - „Unser Team arbeitet mit modernen Geräten und achtet auf ein gepflegtes Erscheinungsbild.“ → streichen oder konkret belegen. Grund: Austauschtest nicht bestanden (GLOBAL-030).
  - Merkmale „Ganzjährige Betreuung – Professionelle Pflege zu jeder Jahreszeit“ und „Flexible Einsätze – Nach Ihrem individuellen Bedarf“ → durch die Jahresübersicht (Abschnittsfolge, Punkt 4) ersetzen. Grund: Aussagen ohne Inhalt.
  - Kennzeichnung „Business Lösung“ über der H1 → „Hauswartung“, oder „Gebäudereinigung“, falls R3 die Seite dort einordnet. Grund: Bereichsnamen laut Eigenangabe (N014), „Business“ ist eine interne Einteilung, die Kunden nichts über die Leistung sagt (GLOBAL-033).
  - „Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Experten beraten Sie gerne.“ mit dem Button „Kostenlose Beratung“ → „Wir kommen vorbei, sehen uns Ihre Aussenanlagen an und erstellen eine kostenlose, unverbindliche Offerte.“ mit dem Button „Kostenlose Offerte vor Ort anfragen“. Grund: belegtes Angebot (N014), einheitliche Handlungsaufforderung (GLOBAL-034).
  - Schreibweisen „Außenanlagen“ (auch in der H1), „Außenreinigung“, „Außenbereichsreinigung“, „einschließlich“ → „Aussenanlagen“, „Aussenreinigung“, „Aussenbereichsreinigung“, „einschliesslich“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto einer von BGS gepflegten Aussenanlage (mit Freigabe des Eigentümers), Personen nur mit Einwilligung. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil (heute 344 KB JPG für alle Breiten). Alt-Text nach Inhalt, z. B. „Frisch gemähte Rasenfläche vor einem Geschäftshaus“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren. Für die Jahresübersicht reicht Text, keine Icon-Wand.
- **Strukturierte Daten:** `Service` mit `name` „Aussen- und Grünflächenpflege“, `serviceType` „Grünflächenpflege“, `description` = die freigegebene Meta-Description, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical [S10][S12]. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13]. Den im Code vorbereiteten Datensatz (`client/src/utils/schema.ts:69-92`) nicht übernehmen: Er nennt „Swiss Reinigungsfirma“ als Anbieter, „Switzerland“ als Gebiet, den Namen „Außenanlage & Grünflächenpflege“ und die englische Kategorie „Outdoor Facility Management“.
- **Linkempfehlungen:**
  - Im Jahresabschnitt auf `/basis/winterdienst` mit dem Linktext „Winterdienst“ (ersetzt den Reiter).
  - Auf `/basis/hausmeisterservice` mit dem Linktext „Hauswartung und Hausmeisterservice“. Grundlage: Der Kunde führt beide Leistungen unter „Hauswartung“ (N014).
  - Von `/basis/hausmeisterservice` (Aufgabe „Grünflächen- & Außenanlagenpflege“) und von `/basis/winterdienst` hierher mit dem Linktext „Aussen- und Grünflächenpflege“.
  - Der bestehende Link aus der FAQ von `/business/hallenreinigung` bleibt, muss aber im ausgelieferten HTML stehen (GLOBAL-011) und den festgelegten Namen tragen (SEITE-P07-002).
  - Den Link der Zürich-Seite auf `/business/außenanlagenpflege` (404) über GLOBAL-016 korrigieren, sofern die Zürich-Seite bleibt (R4).
  - Von der Startseite (dort heute nicht erwähnt) und der künftigen Seite „Alle Leistungen“ hierher mit dem Linktext „Aussen- und Grünflächenpflege“.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P07-001 · Winterdienst doppelt, Abgrenzung zu Hausmeisterservice und Facility Management fehlt (Kannibalisierungsrisiko)

- **Ist-Zustand:** Der Reiter „Winterdienst“ (Schneeräumung, Streudienst, Eisbeseitigung, „24/7 Bereitschaft“, „Dokumentation für Versicherung“, „Eigene Streufahrzeuge“) und die FAQ „Welche Leistungen sind im Winterdienst enthalten?“ beschreiben dieselbe Leistung wie `/basis/winterdienst`, aber mit anderen Zusagen (Code Z. 163-178, 199-206). Dort ist von eigenen Fahrzeugen keine Rede, die Dokumentation erfolgt laut jener Seite „mit Fotos, GPS-Daten und Zeitstempel“. Kein Link verbindet die beiden Seiten. Zugleich führt `/basis/hausmeisterservice` „Grünflächen- & Außenanlagenpflege“ als eigene Aufgabe und `/business/facility-management` „Grünflächenpflege“ und „Winterdienst“, jeweils ohne Verweis hierher.
- **Priorität:** P2 · **Launch-Blocker:** nein (die unbelegten Zusagen blockieren über GLOBAL-021)
- **Vorgabe:** Reiter und FAQ zum Winterdienst durch einen Satz mit Link auf `/basis/winterdienst` ersetzen (Zielseite nach SEITE-P06-002). In Phase 4 festlegen, dass diese Seite für die Aussen- und Grünflächenpflege zuständig ist und Hausmeisterservice und Facility Management nur mit Verweis hierher davon sprechen. Ohne Suchdaten ist das ein Risiko, keine belegte Kannibalisierung.
- **Abnahme:** Die Seite enthält keine eigenen Winterdienst-Zusagen mehr, der Link auf `/basis/winterdienst` steht im ausgelieferten HTML. Die Entscheidung zur Zuständigkeit ist dokumentiert, gegebenenfalls mit Alt-neu-Mapping und 308.
- **Evidenz:** Inhaltsbefund für die Doppelung, HYPOTHESE für die Kannibalisierung. **Quelle:** S04, S05, S07

### SEITE-P07-002 · Leistungsname in vier sichtbaren Varianten, keine entspricht dem Kundenbegriff

- **Ist-Zustand:** H1 „Außenanlagen & Grünflächenpflege“, Navigation, Zürich-Seite und Hallenreinigungs-FAQ „Außenanlagenpflege“, Footer „Außenanlagen“, Formularauswahl „Außenanlagen“ und „Business Außenanlagen“. Der nicht ausgegebene Code-Titel sagt „Außenanlage“. Der Kunde sagt „Aussen- und Grünflächenpflege“ (N014). Aus dem Anzeigenamen „Außenanlagenpflege“ berechnet die Zürich-Seite ihr Linkziel und landet auf 404 (GLOBAL-016).
- **Priorität:** P3 · **Launch-Blocker:** nein
- **Vorgabe:** Einen Namen festlegen, vorzugsweise den des Kunden (nach R3), und ihn überall verwenden: H1, Titel, Navigation, Footer, Formular, Linktexte, strukturierte Daten. Linkziele nie aus Namen berechnen (GLOBAL-016).
- **Abnahme:** Die Volltextsuche über alle Seiten findet für diese Leistung nur noch den festgelegten Namen, die Formularauswahl enthält ihn genau einmal.
- **Evidenz:** Code- und Inhaltsbefund (`client/src/components/SwissNavigation.tsx:34`, `client/src/components/SwissFooter.tsx:158, 170, 314`, `app/standorte/zuerich/page.tsx:142`, `app/business/hallenreinigung/page.tsx:214`). **Quelle:** S04

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -016 (defekter Link der Zürich-Seite auf diese Leistung), -020 und -021 (unbelegte Region „Schweizweit“, 24/7-Einsätze und Reaktionszeit), -023 (Bild). Seitenspezifisch keine zusätzlichen Blocker.

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S04, S05, S07, S08, S09, S10, S11, S12, S13, S17).
