# Seitenanalyse: Zusätzliche Leistungsseite · Hallenreinigung

**Seiten-ID: P18 (Inventar U17)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/business/hallenreinigung` · **Codepfad:** `app/business/hallenreinigung/page.tsx` (254 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden nicht als eigene Leistung genannt → R3. HYPOTHESE: Die laufende Reinigung von Hallen könnte zur belegten Leistung „Regelmässige Unterhaltsreinigung“ gehören, Grundreinigungen grosser Flächen zu den „Spezial- und Sonderreinigungen“ (N014).

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen. Voraussetzung ist, dass BGS die Leistung tatsächlich anbietet (R3).

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite ist anders gebaut als die meisten Business-Seiten (Bild-Text-Abschnitte statt Reiter, 230 sichtbare Wörter) und hat eine saubere H2-Gliederung. Inhaltlich beschreibt sie aber die Industriereinigung: Der erste Absatz beginnt mit „Unsere Industriereinigung umfasst …“ und verlinkt dorthin. Die zentrale Leistungsaussage „von 500 m² bis zu mehreren 10.000 m²“ steht nur in einer FAQ-Antwort und ist unbelegt. Alle fünf FAQ-Antworten fehlen im ausgelieferten HTML, die FAQ-Überschrift startet unsichtbar. Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002).

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: Slug `/business/hallenreinigung` ermittelt (U17). Keine Umbenennung nötig, zusätzlicher Bericht (E09).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt die „Reinigung großer Hallen und Lagerflächen“ sowie „Produktionshallen, Lagerflächen und Logistikzentren“. Reale Angaben des Kunden fehlen (R10). HYPOTHESE: Logistik-, Gewerbe- und Produktionsbetriebe mit Hallen in LU/ZG, Entscheidung durch Betriebs- oder Standortleitung.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: nur eine Liste mit acht Tätigkeiten, Ergebnis und Grenzen fehlen, etwa bei der Hochregalreinigung (GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Starke Überschneidung mit der Industriereinigung (U13): Hallenböden, Hochregallager sowie Kehr- und Scheuersaugmaschinen stehen auf beiden Seiten, und diese Seite beschreibt sich über „Unsere Industriereinigung“ (SEITE-P18-002). Sozialräume, Sanitäranlagen und Büros in Hallen gehören fachlich zur Unterhaltsreinigung (P03), Aussenflächen zu den Aussenanlagen (P07), beides ohne klare Abgrenzung. Zu Hauswartung (P04) keine Überschneidung, zum Winterdienst (P06) nur ein Verweis in der FAQ. Kannibalisierung → Phase 4.*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt, abgesehen von der unbelegten Flächenangabe.*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Ein Ablauf fehlt. Einsatzzeiten („nachts, am Wochenende oder während der Betriebsruhe“) und Häufigkeit stehen nur in FAQ-Antworten. Die Flächenangabe „von 500 m² bis zu mehreren 10.000 m²“ hat keine Grundlage (SEITE-P18-001). Kostenfaktoren fehlen.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine Belege. „Zertifizierte Fachkräfte“, „Modernste Technologie“ und die Flächenangabe sind unbelegt (SEITE-P18-001, GLOBAL-021). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: drei Bilder mit KI-Merkmalen und drei verschiedenen Arbeitskleidungen, auf einem Bild ein Warnschild mit unleserlichem Fantasietext (SEITE-P18-003, GLOBAL-023, GLOBAL-024).*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: fünf sinnvolle Fragen (Hallengrösse, Einsatzzeiten, Geräte, Aussenreinigung, Häufigkeit). Die Antworten sind nicht im HTML (GLOBAL-011), zwei davon enthalten unbelegte Aussagen. Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Auswahl enthält „Hallenreinigung“ und „Business Hallenreinigung“ (GLOBAL-028).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: Zürich steht zweimal, im Hero („in Zürich, Zug und Luzern“) und im Abschlusstext („…zu allen Reinigungsdienstleistungen in Zürich, Zug und Luzern“). Laut Eigenangabe des Kunden nur LU/ZG (GLOBAL-021, R4).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe des Leistungsstatus (R3) und aller Aussagen unten durch die Geschäftsführung des Kunden (R12). Gerätepark und Qualifikationen zusätzlich nur mit Nachweis.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/business/hallenreinigung`, 200 | Pfad (a): beibehalten. Pfad (b): 308 oder 410 (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | „Reinigung großer Hallen und Lagerflächen“, „Produktionshallen, Lagerflächen und Logistikzentren“. Intent: Anbieter für Hallen- und Lagerreinigung finden (transaktional/lokal) | Zielgruppe bestätigen (R10), Zuständigkeit gegenüber der Industriereinigung in der Intent-Matrix (Phase 4) | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der im Code übergebene Titel „Hallenreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma“ wird nicht ausgegeben (`SEO` gibt `null` zurück) | Siehe Vorgabe unten. Den Code-Titel nicht einfach aktivieren, er enthält falsche Region und Marke | N007, N015, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung („Professionelle Gebäudereinigung für Premium, Business und Basis-Services in Zürich, Zug und Luzern. …“) | Siehe Vorgabe unten | N007, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Professionelle Hallenreinigung“, H2 „Spezialisiert auf große Flächen“, H2 „Umfassende Reinigungsleistungen“, H2 „Häufig gestellte Fragen“ (im ausgelieferten HTML mit `opacity:0`, Einblendung beim Scrollen), H3 je Frage, H2 „Bereit für professionelle Hallenreinigung?“. Gliederung logisch (BESTANDEN). Der Cookie-Banner bringt ein H3 vor die H1 | Gliederung beibehalten, FAQ-Überschrift ohne Einblendung, siehe Abschnittsfolge | N020, N022, Faktenblatt, HTML-Abgleich 24.09.2026 |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): aus der Sitemap entfernen | N007, N008 |
| Wichtigste Textpassagen | „Effiziente Reinigung großer Hallen und Lagerflächen in Zürich, Zug und Luzern. Mit Industriegeräten für schnelle Ergebnisse und makellose Sauberkeit.“ „Unsere Industriereinigung umfasst die professionelle Reinigung von Produktionshallen, Lagerflächen und Logistikzentren. Mit modernsten Kehrmaschinen und Scheuersaugmaschinen reinigen wir effizient große Flächen.“ | Eigene Einleitung zur Hallenreinigung, Region korrigieren, Superlative streichen | N027 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt), am Seitenende „Jetzt Kontakt aufnehmen“ | Eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ | N020, GLOBAL-002, GLOBAL-034 |
| Bildmotive und Alt-Texte | 3 Bilder mit KI-Merkmalen, alle 1536×1024 und nicht verzögert geladen: Hero `hallenreinigung-hero.jpg` (zwei Männer mit Scheuersaugmaschinen in einer Produktionshalle, Alt „Professionelle Hallenreinigung“, ca. 254 KB, 666×517 dargestellt), `warehouse-cleaning.jpg` (vier Personen in hellblauen Poloshirts im Hochregallager, Alt „Lagerhalle Reinigung“, ca. 322 KB, 735×570), `industrial-floor-cleaning.jpg` (ein Mann in gelber Warnweste auf einer Aufsitzmaschine, Alt „Industrieboden Reinigung“, ca. 325 KB, 755×586) | Echte Fotos oder weniger Bilder, Alt-Texte nach Inhalt, responsiv und verzögert geladen | N029, Sichtprüfung 24.09.2026 (Einschätzung) |
| Interne Links | Kontextlinks im Fliesstext (im HTML): „Industriereinigung“ → `/business/industriereinigung` (`page.tsx:103`), „Facility Management“ → `/business/facility-management` (`page.tsx:134`). In FAQ-Antworten (erst nach Klick): „Büroreinigung“, „Außenanlagenpflege“, „Winterdienst“. Eingehend: Fliesstext der Maschinenreinigung (im HTML), Business-Reiter der Zürich-Seite (erst nach Klick) | Siehe Linkempfehlungen | N009, Codebefund |
| Schema-Typen | keine im HTML. Im Code vorbereitet, aber wirkungslos: `serviceSchema` mit Anbieter „Swiss Reinigungsfirma“, `areaServed` „Switzerland“, `serviceType` „Hall Cleaning“ (`client/src/utils/schema.ts:69-92`) | `Service` nach Bestätigung, die vorbereiteten Daten nicht unverändert übernehmen | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. H1 und „Jetzt anfragen“ liegen in der ersten mobilen Ansicht (BESTANDEN). axe: 7 Kontrastverstöße, 25 zu kleine Klickziele, 2 Links im Fliesstext nur durch Farbe erkennbar (`link-in-text-block`) | Siehe GLOBAL-026, Links im Fliesstext zusätzlich unterstreichen | N020, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,7 MB, 85 Anfragen (Desktop, dekodiert), davon rund 0,9 MB für die drei JPGs. Keine eigene Lighthouse-Messung, der Seitentyp ist über `/business/bueroreinigung` gemessen (mobil Median-LCP 5,3 s) | Budgets aus Abschnitt I, Inhaltsbilder verzögert laden | N020, N029, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -020, -021, -023, -024, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Der Leistungsstatus ist offen (R3). Deshalb gibt es zwei Pfade. Beide nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, Leistung „Regelmässige Unterhaltsreinigung“, die „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort („Wir kommen gerne bei Ihnen vorbei …“). Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind. Die Entscheidung hängt eng mit Industrie- und Maschinenreinigung zusammen (SEITE-P15-003, SEITE-P18-002).

**Pfad (a) · Falls R3 die Hallenreinigung bestätigt** und Phase 4 eine eigene Seite neben der Industriereinigung empfiehlt:

- **Meta-Title soll lauten:** „Hallenreinigung in Luzern und Zug | BGS Gebäudeservice“. Begründung: Leistung und reale Region vorne, Marke zur Wiedererkennung. Grenzt sich über das Objekt Halle von der Industriereinigung ab.
- **Meta-Description soll lauten:** „Reinigung von Lager-, Logistik- und Produktionshallen in den Kantonen Luzern und Zug. BGS Gebäudeservice erstellt die Offerte kostenlos und unverbindlich bei Ihnen vor Ort.“ Nur belegte Aussagen. Die Hallenarten nach R10 bestätigen.
- **URL-Slug:** Slug `hallenreinigung` beibehalten. Das Präfix `/business/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Hallenreinigung für Lager und Produktion in Luzern und Zug“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung): was in Lager- und Produktionshallen regelmässig anfällt und wie die Reinigung in den Betrieb passt, in 2–3 Sätzen. Nur bestätigte Aussagen.
  2. Eine eigene Einleitung zur Hallenreinigung statt „Unsere Industriereinigung umfasst …“ (SEITE-P18-002).
  3. Leistungsumfang als Liste (heute acht Punkte), mit Grenzen, etwa bis zu welcher Höhe Hochregale mit welcher Ausrüstung gereinigt werden.
  4. Einsatzzeiten und Häufigkeit (heute FAQ-Antworten 2 und 5), nur bestätigte Angaben.
  5. Hallengrössen und Geräte nur, wenn belegt (heute FAQ-Antworten 1 und 3).
  6. Ablauf ab Anfrage: Anfrage → kostenlose Besichtigung und Offerte vor Ort (belegt) → Reinigungsplan → Start → Rückmeldung. Nur Schritte, die der Kunde bestätigt.
  7. Beleg: eine echte, freigegebene Referenz (R6).
  8. FAQ mit sichtbaren Antworten, die Überschrift ohne Einblendung.
  9. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung „Hallenreinigung“.
- **Zu streichende oder zu ersetzende Passagen:**
  - „…großer Hallen und Lagerflächen in Zürich, Zug und Luzern. Mit Industriegeräten für schnelle Ergebnisse und makellose Sauberkeit.“ → „…von Lager- und Produktionshallen in den Kantonen Luzern und Zug.“ Grund: Region nach R4, Superlativ ohne Beleg.
  - „Unsere Industriereinigung umfasst die professionelle Reinigung von Produktionshallen, Lagerflächen und Logistikzentren. Mit modernsten Kehrmaschinen und Scheuersaugmaschinen reinigen wir effizient große Flächen.“ → „Wir reinigen Lager-, Logistik- und Produktionshallen mit [bestätigte Geräte].“, nur mit Bestätigung. Grund: Die Seite beschreibt sonst eine andere Leistung, „modernste“ ist unbelegt.
  - „Zertifizierte Fachkräfte“ und „Modernste Technologie“ → streichen oder belegen (GLOBAL-021).
  - „Von der Bodenreinigung bis zur Hochregalpflege - wir bieten alle Leistungen für Ihre Halle. Unsere Facility Management Services sorgen für dauerhaft saubere Arbeitsbereiche.“ → „alle Leistungen“ streichen, den Satz zum Facility Management nur behalten, wenn P20 bestätigt ist.
  - FAQ-Antwort „Wir reinigen Hallen jeder Größe - von 500 m² bis zu mehreren 10.000 m².“ → nur die bestätigte Grössenordnung, z. B. „Wir reinigen Hallen bis [Fläche].“, nur wenn belegt. Grund: Kapazitätsaussage ohne Beleg.
  - FAQ-Antwort „Alle Geräte entsprechen den neuesten Sicherheitsstandards.“ → streichen oder konkret belegen.
  - Abschlusstext „…zu allen Reinigungsdienstleistungen in Zürich, Zug und Luzern.“ → „…zur Hallenreinigung in den Kantonen Luzern und Zug.“ (R4).
  - „Professionelle Hallenreinigung“ (H1) → siehe H1-Vorschlag. Grund: Schablonenformel „Professionelle …“.
  - Schreibweisen „großer“, „große“, „Größe“, „Hallengrößen“, „außerhalb“, „Außenreinigung“, „Außenbereichen“, „Außenanlagenpflege“ → „grosser“, „grosse“, „Grösse“, „Hallengrössen“, „ausserhalb“, „Aussenreinigung“, „Aussenbereichen“, „Aussenanlagenpflege“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto aus einer von BGS betreuten Halle (Freigabe des Betriebs, Mitarbeitende nur mit Einwilligung), sonst neutrales Hallenfoto ohne Personen. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. Die beiden Inhaltsbilder nur behalten, wenn sie echte Einsätze zeigen, sonst ersetzen oder weglassen. Sie liegen unterhalb der ersten Ansicht und werden verzögert geladen. Alt-Texte nach Inhalt statt Stichwortreihung wie „Lagerhalle Reinigung“, z. B. „Scheuersaugmaschine reinigt den Boden einer Lagerhalle“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Hallenreinigung“, `serviceType` „Hallenreinigung“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13]. Die vorbereiteten Code-Daten nicht übernehmen.
- **Linkempfehlungen:**
  - Den Link „Industriereinigung“ im ersten Absatz ersetzen. Die Industriereinigung nur verlinken, wenn Phase 4 sie als übergeordnete Seite festlegt, dann mit dem Linktext „Industriereinigung im Überblick“ auf `/business/industriereinigung`.
  - Für Maschinen in der Halle auf `/business/maschinenreinigung` mit dem Linktext „Reinigung von Produktionsmaschinen“, sofern bestätigt.
  - Für Sozialräume, Sanitäranlagen und Büros in Hallen auf `/basis/unterhaltsreinigung` mit dem Linktext „regelmässige Unterhaltsreinigung“. Der FAQ-Link „Büroreinigung“ bleibt nur, wenn P13 bestehen bleibt.
  - In der FAQ zur Aussenreinigung auf `/business/aussenanlagen` mit dem Linktext „Pflege der Aussenanlagen“ und auf `/basis/winterdienst` mit „Winterdienst“, beide sofern bestätigt (P06, P07).
  - Den Link „Facility Management“ (`page.tsx:134`) nur behalten, wenn P20 bestätigt ist.
  - Links im Fliesstext zusätzlich unterstreichen, damit sie nicht nur an der Farbe erkennbar sind (GLOBAL-026).

**Pfad (b) · Falls R3 die Hallenreinigung nicht als eigene Leistung bestätigt:**

- **Seite entfernen.** Ziel der **308**-Weiterleitung in dieser Reihenfolge: `/business/industriereinigung`, falls R3 die Industriereinigung bestätigt und Phase 4 zusammenlegt (SEITE-P15-003); sonst `/basis/unterhaltsreinigung`, falls die laufende Reinigung von Hallen als Teil der Unterhaltsreinigung bestätigt wird; sonst `/basis/sonderleistungen`, nur falls die überarbeitete Seite Grundreinigungen grosser Flächen beschreibt. Passt keines, Status **410**. Keine Sammelweiterleitung auf die Startseite [S07].
- **Aus Navigation, Footer, Sitemap und Formularauswahl entfernen:** Mega-Menü (`client/src/components/SwissNavigation.tsx:35`), Footer-Liste „Business Services“ (`client/src/components/SwissFooter.tsx:311`), `public/sitemap.xml`, Formularoptionen „Hallenreinigung“ und „Business Hallenreinigung“ (`SwissFooter.tsx:150-172`, GLOBAL-028). Falls der KI-Chat bleibt (R8), auch den Leistungskatalog in `server/gemini.ts` anpassen.
- **Interne Verweise entfernen:** Kontextlink im Fliesstext der Maschinenreinigung (`app/business/maschinenreinigung/page.tsx:134`) und Business-Reiter der Zürich-Seite.
- **Alt-neu-Mapping:** Eintrag in 02: `/business/hallenreinigung` → gewähltes Ziel (308) bzw. „entfällt“ (410), Grund „R3“.
- **Abnahme für Pfad (b):** Die alte URL liefert 308 auf eine Seite mit Status 200 oder 410. Ein Crawl findet keinen internen Link mehr auf die alte URL, Sitemap und Formularauswahl enthalten sie nicht.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P18-001 · Unbelegte Kapazitäts-, Qualifikations- und Geräteaussagen

- **Ist-Zustand:** Die FAQ-Antwort (erst nach Klick, N023) lautet „Wir reinigen Hallen jeder Größe - von 500 m² bis zu mehreren 10.000 m². Mit unseren Industriemaschinen sind wir für kleine Lagerhallen ebenso ausgestattet wie für große Logistikzentren.“ (`page.tsx:187`). Sichtbar stehen „Zertifizierte Fachkräfte“ und „Modernste Technologie“ (`page.tsx:107-109`), „Mit modernsten Kehrmaschinen und Scheuersaugmaschinen“ (`page.tsx:103`) und im Hero „…für schnelle Ergebnisse und makellose Sauberkeit“ (`page.tsx:56`). Eine weitere FAQ-Antwort sagt „Alle Geräte entsprechen den neuesten Sicherheitsstandards.“ (`page.tsx:205`). Der Abschlusstext nennt erneut Zürich (`page.tsx:237`). Nichts davon ist durch die Eigenangabe des Kunden gedeckt. Die Flächenangabe ist die wichtigste Kaufinformation der Seite und zugleich unbelegt.
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021, G09)
- **Vorgabe:** Der Kunde bestätigt Gerätepark, Qualifikationen und die tatsächlich bewältigte Hallengrösse (R3, R6). Ohne Beleg streichen, Superlative entfernen, Region nach R4 (Ersatztexte siehe Abschnitt 4).
- **Abnahme:** Jede Zahl und jede Qualifikationsangabe auf der Seite hat einen Beleg oder eine schriftliche Freigabe im Nachweisregister.
- **Evidenz:** Codebefund (Zeilen oben) und Inhaltsbefund (N027). **Quelle:** S02

### SEITE-P18-002 · Die Seite beschreibt die Industriereinigung und verlinkt sie als Oberbegriff (Kannibalisierungsrisiko)

- **Ist-Zustand:** Der erste Inhaltsabsatz unter „Spezialisiert auf große Flächen“ lautet „Unsere Industriereinigung umfasst die professionelle Reinigung von Produktionshallen, Lagerflächen und Logistikzentren“, mit Link auf `/business/industriereinigung` (`page.tsx:103`). Die Industrieseite führt ihrerseits „Hallenböden (Beton, Epoxid, PVC)“ und „Hochregallager-Reinigung“. Der zweite Absatz verweist auf „Unsere Facility Management Services“ (`page.tsx:134`). Für Nutzer und Suchmaschinen bleibt offen, welche Seite für Hallen zuständig ist. Gegenstück zu SEITE-P15-003 und SEITE-P19-003.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** In Phase 4 gemeinsam mit P15 und P19 entscheiden, abhängig von R3: Hallenreinigung als Abschnitt der Industriereinigung (diese URL per 308 dorthin) oder eigenständig mit eigener Einleitung. Links nur auf bestätigte Seiten, mit beschreibendem Linktext. Ohne Suchdaten ist das ein Risiko, keine belegte Kannibalisierung.
- **Abnahme:** Kein Absatz beschreibt eine andere Leistung als die der Seite. Entscheidung und gegebenenfalls Alt-neu-Mapping sind dokumentiert.
- **Evidenz:** HYPOTHESE (Inhaltsvergleich), Codebefund für die Links. **Quelle:** S04, S05, S07

### SEITE-P18-003 · Drei KI-Bilder mit wechselnder Arbeitskleidung und Fantasie-Beschriftung

- **Ist-Zustand:** Das Hero-Bild zeigt zwei Männer in dunkelblauen Poloshirts mit Scheuersaugmaschinen, deren Markenschriftzug unleserlich ist. `warehouse-cleaning.jpg` zeigt vier Personen in hellblauen Poloshirts, darunter jemand mit einem kleinen Bodenstaubsauger im Hochregallager, und ein gelbes Warnschild mit unleserlichem Fantasietext. `industrial-floor-cleaning.jpg` zeigt einen Mann in gelber Warnweste und Jeans auf einer Aufsitzmaschine. Drei verschiedene „Teams“ auf einer Seite, die wie eigene Mitarbeitende wirken (GLOBAL-023). Zusammen rund 0,9 MB JPG, nicht responsiv und nicht verzögert geladen (GLOBAL-024).
- **Priorität:** P2 · **Launch-Blocker:** ja, über GLOBAL-023 (KI-Motiv als vermeintlich eigenes Team)
- **Vorgabe:** Durch echte, freigegebene Fotos ersetzen oder auf ein neutrales Motiv ohne Personen reduzieren. Inhaltsbilder nur, wenn sie Information tragen. Alt-Texte nach Inhalt formulieren.
- **Abnahme:** Das Medieninventar nennt für jedes Bild dieser Seite Quelle und Nutzungsrecht. Kein KI-Motiv mit Personen erscheint als vermeintliches BGS-Team.
- **Evidenz:** Sichtprüfung 24.09.2026 (Einschätzung), N029. **Quelle:** S16, S17

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -020 (Identität), -021 (unbelegte Leistung, Region und Qualitätsaussagen), -023 (Bilder). Seitenspezifisch zusätzlich SEITE-P18-001 (Teil von GLOBAL-021) und SEITE-P18-003 (über GLOBAL-023). Bis R3 beantwortet ist, bleibt offen, ob die Seite überarbeitet (Pfad a) oder entfernt bzw. zusammengelegt wird (Pfad b).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S04, S05, S07, S08, S09, S10, S11, S12, S13, S16, S17).
