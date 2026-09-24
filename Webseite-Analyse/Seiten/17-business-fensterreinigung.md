# Seitenanalyse: Zusätzliche Leistungsseite · Fensterreinigung

**Seiten-ID: P17 (Inventar U15)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/business/fensterreinigung` · **Codepfad:** `app/business/fensterreinigung/page.tsx` (221 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden nicht als eigene Leistung genannt → R3. HYPOTHESE: Die Unterhaltsreinigungsseite (P03) führt „Fensterreinigung“ als Zusatzleistung. Fensterreinigung könnte daher zur belegten Leistung „Regelmässige Unterhaltsreinigung“ oder zu den „Spezial- und Sonderreinigungen“ gehören (N014).

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen. Voraussetzung ist, dass BGS die Leistung tatsächlich anbietet (R3).

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite hat von allen neun Business-Seiten den wenigsten sichtbaren Text (128 Wörter, weitere 111 in Reitern) und nur zwei FAQ ohne eigene Überschrift. Sichtbar steht „Zertifizierte Höhenarbeiter“, die Reiter nennen „Reinigung bis 20m Höhe“, Hebebühnen für Hochhäuser und Intervall-Empfehlungen ohne Grundlage. Bei den Glasfassaden überschneidet sie sich mit der Fassadenreinigung. Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002), der Abschluss-Button heißt abweichend „Kostenlose Beratung“.

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: Slug `/business/fensterreinigung` ermittelt (U15). Keine Umbenennung nötig, zusätzlicher Bericht (E09).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt „Gewerbe und Industrie“ und „Von Bürogebäuden bis zu Produktionshallen“, in den Intervallen auch „Wohngebäude“ und „Schaufenster“. Reale Angaben des Kunden fehlen (R10). HYPOTHESE: Verwaltungen, Gewerbe- und Ladenbetriebe in LU/ZG.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: nur eine Stichwortliste mit zwölf Punkten. Ergebnis und Grenzen fehlen, etwa bis zu welcher Höhe ohne Hebebühne gearbeitet wird (GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Überschneidung mit der Fassadenreinigung (U14) bei Glasfassaden und mit der Unterhalts- (P03) und Büroreinigung (U11), die „Fensterreinigung“ als Zusatzleistung führen, ohne hierher zu verlinken (SEITE-P17-003). Zu Sonderleistungen (P05), Hauswartung (P04), Winterdienst (P06) und Aussenanlagen (P07) keine Überschneidung. Kannibalisierung → Phase 4.*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt.*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Ein Ablauf fehlt. „Ein durchschnittliches Bürogebäude (50 Fenster) dauert 2-3 Stunden“ und die Intervalle („Bürogebäude 4-6x jährlich“ usw.) haben keine Grundlage (SEITE-P17-001). Kostenfaktoren fehlen.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine Belege. „Zertifizierte Höhenarbeiter“ ist unbelegt (SEITE-P17-001, GLOBAL-021). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: ein Hero-Bild mit KI-Merkmalen: ein Mann in dunkelblauem Poloshirt und Mütze zieht mit Abzieher und Eimer eine Bürofensterscheibe ab. Das Motiv passt zum Thema, der Alt-Text „Fensterreinigung“ ist zutreffend, aber allgemein (GLOBAL-023).*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *BEFUND: nur zwei Fragen (Wetter, Dauer), ohne Abschnittsüberschrift (SEITE-P17-002). Die Antworten sind nicht im HTML (GLOBAL-011). Einwände zu Kosten, Zugang und Sicherheit fehlen. Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Auswahl enthält „Fensterreinigung“ und „Business Fensterreinigung“ (GLOBAL-028). Der Abschluss-Button „Kostenlose Beratung“ weicht vom Hero ab (GLOBAL-034).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: „in Zürich, Zug und Luzern“, laut Eigenangabe des Kunden nur LU/ZG (GLOBAL-021, R4). Ob die Fensterreinigung als eigene Leistung angeboten wird, ist offen (R3).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe des Leistungsstatus (R3) und aller Aussagen unten durch die Geschäftsführung des Kunden (R12). Aussagen zu Höhenarbeit und Ausrüstung zusätzlich nur mit Nachweis.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/business/fensterreinigung`, 200 | Pfad (a): beibehalten. Pfad (b): 308 oder 410 (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | „Gewerbe und Industrie“, „Von Bürogebäuden bis zu Produktionshallen“. Intent: Anbieter für Fensterreinigung finden (transaktional/lokal), oft wiederkehrend | Zielgruppe bestätigen (R10), Zuständigkeit gegenüber Fassaden- und Unterhaltsreinigung in der Intent-Matrix (Phase 4) | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der im Code übergebene Titel „Fensterreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma“ wird nicht ausgegeben (`SEO` gibt `null` zurück) | Siehe Vorgabe unten. Den Code-Titel nicht einfach aktivieren, er enthält falsche Region und Marke | N007, N015, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung („Professionelle Gebäudereinigung für Premium, Business und Basis-Services in Zürich, Zug und Luzern. …“) | Siehe Vorgabe unten | N007, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Professionelle Fensterreinigung“. Danach drei H3-Merkmale („Streifenfrei“, „Schnell & Effizient“, „Sicherheit“), H3 „Umfassende Fensterreinigung“ (im Reiter), die zwei FAQ-Fragen als H3 ohne Abschnittsüberschrift, erst dann die erste H2 „Bereit für streifenfreie Fenster?“ (danach nur noch die Footer-H2 „Jetzt Kontakt aufnehmen“). Der Cookie-Banner bringt ein H3 vor die H1 | Siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): aus der Sitemap entfernen | N007, N008 |
| Wichtigste Textpassagen | „Streifenfreie Fensterreinigung für Gewerbe und Industrie in Zürich, Zug und Luzern. Von Bürogebäuden bis zu Produktionshallen.“ Merkmal „Sicherheit – Zertifizierte Höhenarbeiter“ | Konkreter Nutzen statt Adjektive, Region korrigieren, Zertifizierung nur mit Nachweis | N027 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt), am Seitenende „Kostenlose Beratung“ | Eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ | N020, GLOBAL-002, GLOBAL-034 |
| Bildmotive und Alt-Texte | 1 Hero-Bild mit KI-Merkmalen (ein Mann in dunkelblauem Poloshirt zieht eine Bürofensterscheibe ab), Alt „Fensterreinigung“, 1536×1024 geliefert (JPG, ca. 204 KB), 666×517 dargestellt | Echtes Foto, beschreibender Alt-Text, responsiv | N029, Sichtprüfung 24.09.2026 (Einschätzung) |
| Interne Links | Ausgehend nur Navigation und Footer, keine Kontextlinks. Eingehend nur aus dem Business-Reiter der Zürich-Seite (erst nach Klick). Die Startseitenkarte nennt „Fassaden- & Fensterreinigung“ ohne Link, die Zusatzleistung „Fensterreinigung“ auf P03 und P13 verlinkt nicht hierher | Siehe Linkempfehlungen | N009 |
| Schema-Typen | keine im HTML. Im Code vorbereitet, aber wirkungslos: `serviceSchema` mit Anbieter „Swiss Reinigungsfirma“, `areaServed` „Switzerland“, `serviceType` „Window Cleaning“ (`client/src/utils/schema.ts:69-92`) | `Service` nach Bestätigung, die vorbereiteten Daten nicht unverändert übernehmen | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. H1 und „Jetzt anfragen“ liegen in der ersten mobilen Ansicht (BESTANDEN). axe: 5 Kontrastverstöße, 25 zu kleine Klickziele. Ohne FAQ-Überschrift ist der Bereich per Überschriften-Navigation nicht als Abschnitt auffindbar | Siehe GLOBAL-026 und SEITE-P17-002 | N020, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 83 Anfragen (Desktop, dekodiert). Keine eigene Lighthouse-Messung, der Seitentyp ist über `/business/bueroreinigung` gemessen (mobil Median-LCP 5,3 s) | Budgets aus Abschnitt I | N020, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -020, -021, -023, -024, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Der Leistungsstatus ist offen (R3). Deshalb gibt es zwei Pfade. Beide nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, Leistung „Regelmässige Unterhaltsreinigung“, die „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort („Wir kommen gerne bei Ihnen vorbei …“). Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind. Unabhängig vom Pfad ist die unbelegte Zertifizierungsangabe sofort zu entfernen (SEITE-P17-001).

**Pfad (a) · Falls R3 die Fensterreinigung als eigene Leistung bestätigt:**

- **Meta-Title soll lauten:** „Fensterreinigung in Luzern und Zug | BGS Gebäudeservice“. Begründung: Leistung und reale Region vorne, Marke zur Wiedererkennung. Grenzt sich über das Objekt Fenster von Fassaden- und Unterhaltsreinigung ab.
- **Meta-Description soll lauten:** „Fensterreinigung für Büro- und Gewerbegebäude in den Kantonen Luzern und Zug. Kostenlose, unverbindliche Offerte vor Ort von BGS Gebäudeservice.“ Nur belegte Aussagen. Die Objektarten nach R10 bestätigen.
- **URL-Slug:** Slug `fensterreinigung` beibehalten. Das Präfix `/business/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Fensterreinigung für Büro- und Gewerbegebäude in Luzern und Zug“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung): saubere Fenster und Schaufenster ohne Aufwand für den eigenen Betrieb, in 2–3 Sätzen.
  2. Leistungsumfang als sichtbare Liste (heute zwölf Punkte im ersten Reiter), dazu „Nicht enthalten / separat“ (z. B. Glasfassaden, falls die Fassadenseite dafür zuständig ist).
  3. Zugang und Sicherheit: welche Höhen und Zugangsarten BGS selbst abdeckt. Nur bestätigte Angaben.
  4. Intervalle als Orientierung, nur mit Erfahrungswerten des Kunden (heute Reiter „Reinigungsintervalle“).
  5. Ablauf ab Anfrage: Anfrage → kostenlose Besichtigung und Offerte vor Ort (belegt) → Termin → Reinigung → Rückmeldung. Nur Schritte, die der Kunde bestätigt.
  6. Kombination: Fensterreinigung als Teil einer regelmässigen Unterhaltsreinigung, falls bestätigt.
  7. Beleg: eine echte, freigegebene Referenz (R6).
  8. FAQ mit Abschnittsüberschrift und sichtbaren Antworten, ergänzt um echte Fragen zu Kosten, Zugang und Kombination mit der Unterhaltsreinigung.
  9. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung „Fensterreinigung“.
- **Zu streichende oder zu ersetzende Passagen:**
  - „…für Gewerbe und Industrie in Zürich, Zug und Luzern.“ → „…für Gewerbe und Industrie in den Kantonen Luzern und Zug.“ Grund: Die Eigenangabe nennt nur LU/ZG (R4).
  - Merkmal „Sicherheit – Zertifizierte Höhenarbeiter“ → nur mit Nachweis, sonst streichen (GLOBAL-021).
  - Reiter „Teleskopstangen-System – Reinigung bis 20m Höhe vom Boden aus. Sicher und ohne Gerüste oder Leitern.“ und „Hebebühnen – Für schwer zugängliche Bereiche und Hochhäuser setzen wir moderne Hebebühnen ein.“ → nur die bestätigte Ausrüstung nennen.
  - FAQ-Antwort „Ein durchschnittliches Bürogebäude (50 Fenster) dauert 2-3 Stunden.“ → „Die Dauer hängt von Anzahl, Grösse und Zugänglichkeit der Fenster ab. Nach der Besichtigung nennen wir Ihnen den Zeitbedarf.“ Grund: Zahl ohne Grundlage.
  - Reiter „Empfohlene Reinigungsintervalle“ („Bürogebäude 4-6x jährlich“, „Produktionshallen 2-4x jährlich“, „Schaufenster Wöchentlich“, „Wohngebäude 2x jährlich“) → nur als bestätigte Erfahrungswerte, sonst streichen.
  - „Streifenfrei – Professionelle Reinigung ohne Rückstände“ und „Schnell & Effizient – Minimale Betriebsstörungen“ → durch prüfbare Aussagen ersetzen (z. B. bestätigte Einsatzzeiten) oder streichen. Grund: Adjektive ohne Beleg.
  - „Professionelle Fensterreinigung“ (H1) → siehe H1-Vorschlag. Grund: Schablonenformel „Professionelle …“.
  - Abschluss-Button „Kostenlose Beratung“ → „Kostenlose Offerte vor Ort anfragen“ (GLOBAL-034).
  - Schreibweisen „Außenreinigung“, „Außenwirkung“, „Größe“ → „Aussenreinigung“, „Aussenwirkung“, „Grösse“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto einer BGS-Fensterreinigung (Mitarbeitende nur mit Einwilligung, Kundenobjekt nur mit Freigabe), sonst neutrales Objektfoto ohne Personen. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. Alt-Text nach Inhalt, z. B. „Mitarbeiter von BGS zieht ein Bürofenster mit dem Abzieher ab“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Fensterreinigung“, `serviceType` „Fensterreinigung“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13]. Die vorbereiteten Code-Daten nicht übernehmen.
- **Linkempfehlungen:**
  - Bei den Glasfassaden auf `/business/fassadenreinigung` mit dem Linktext „Reinigung von Glasfassaden“, nur wenn die Fassadenseite nach Phase 4 dafür zuständig ist (SEITE-P16-004).
  - Im Abschnitt Kombination auf `/basis/unterhaltsreinigung` mit dem Linktext „Fensterreinigung als Teil der Unterhaltsreinigung“, sofern bestätigt.
  - Umgekehrt die Zusatzleistung „Fensterreinigung“ auf P03 und P13 hierher verlinken (Linktext „Fensterreinigung“).
  - Die Startseitenkarte „Business Lösungen“ nennt „Fassaden- & Fensterreinigung“ ohne Link. Nach der Entscheidung auf die zuständige Seite verlinken, z. B. mit „Fensterreinigung ansehen“ (GLOBAL-034).

**Pfad (b) · Falls R3 die Fensterreinigung nicht als eigene Leistung bestätigt:**

- **Seite entfernen.** Ziel der **308**-Weiterleitung in dieser Reihenfolge: `/basis/unterhaltsreinigung`, falls R3 die Fensterreinigung als Zusatzleistung der Unterhaltsreinigung bestätigt (so steht sie heute dort); sonst `/business/fassadenreinigung`, falls diese bestätigt ist und Fenster- und Glasreinigung einschliesst. Passt keines, Status **410**. Keine Sammelweiterleitung auf die Startseite [S07].
- **Brauchbare Inhalte übernehmen:** Die Leistungsliste in bestätigter Fassung als Unterpunkt der Zusatzleistung „Fensterreinigung“ in P03.
- **Aus Navigation, Footer, Sitemap und Formularauswahl entfernen:** Mega-Menü (`client/src/components/SwissNavigation.tsx:33`), Footer-Liste „Business Services“ (`client/src/components/SwissFooter.tsx:310`), `public/sitemap.xml`, Formularoptionen „Fensterreinigung“ und „Business Fensterreinigung“ (`SwissFooter.tsx:150-172`, GLOBAL-028). Falls der KI-Chat bleibt (R8), auch den Leistungskatalog in `server/gemini.ts` anpassen.
- **Interne Verweise und Nennungen anpassen:** Business-Reiter der Zürich-Seite, Startseitenkarte „Fassaden- & Fensterreinigung“ (`app/page.tsx:258`), unverlinkte Karten „Fensterreinigung“ auf den Seiten Zug und Luzern.
- **Alt-neu-Mapping:** Eintrag in 02: `/business/fensterreinigung` → gewähltes Ziel (308) bzw. „entfällt“ (410), Grund „R3“.
- **Abnahme für Pfad (b):** Die alte URL liefert 308 auf eine Seite mit Status 200 oder 410. Ein Crawl findet keinen internen Link mehr auf die alte URL, Sitemap und Formularauswahl enthalten sie nicht.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P17-001 · Höhenarbeit, Ausrüstung, Dauer und Intervalle ohne Beleg

- **Ist-Zustand:** Sichtbar steht das Merkmal „Sicherheit – Zertifizierte Höhenarbeiter“ (`page.tsx:99-100`). Im Reiter „Verfahren“ (erst nach Klick, N023) stehen „Teleskopstangen-System – Reinigung bis 20m Höhe vom Boden aus“ (`page.tsx:145`) und „Für schwer zugängliche Bereiche und Hochhäuser setzen wir moderne Hebebühnen ein.“ (`page.tsx:146`), im Reiter „Reinigungsintervalle“ „Bürogebäude 4-6x jährlich“, „Produktionshallen 2-4x jährlich“, „Schaufenster Wöchentlich“ und „Wohngebäude 2x jährlich“ (`page.tsx:163-166`). Die FAQ-Antwort sagt „Ein durchschnittliches Bürogebäude (50 Fenster) dauert 2-3 Stunden.“ (`page.tsx:191`). Keine dieser Angaben ist durch die Eigenangabe des Kunden gedeckt. Die Zertifizierungsangabe steht wortgleich auch auf der Fassadenseite (SEITE-P16-002).
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021, G09)
- **Vorgabe:** Nachweise anfordern (R3, R6): Ausbildungs- bzw. Zertifikatsnachweis für Höhenarbeit, Ausrüstung oder Partner. Zeit- und Intervallangaben nur als bestätigte Erfahrungswerte, sonst streichen (Ersatztexte siehe Abschnitt 4).
- **Abnahme:** Jede Aussage zu Höhe, Ausrüstung, Dauer und Intervall hat einen Nachweis oder eine schriftliche Freigabe im Nachweisregister.
- **Evidenz:** Codebefund (Zeilen oben) und Inhaltsbefund (N027). **Quelle:** S02

### SEITE-P17-002 · FAQ ohne Überschrift, nur zwei Fragen, keine H2 vor dem Abschluss

- **Ist-Zustand:** Das Akkordeon (`page.tsx:181-194`) steht ohne Abschnittsüberschrift direkt unter den Reitern, die Fragen erscheinen als H3 direkt unter der H1. Einzige H2 im Inhaltsbereich ist „Bereit für streifenfreie Fenster?“. Alle acht übrigen Business-Seiten haben eine H2 „Häufig gestellte Fragen“ (Faktenblätter). Wer per Überschriften navigiert, etwa mit einem Screenreader, findet den FAQ-Bereich nicht als eigenen Abschnitt. Inhaltlich beantwortet die Seite nur zwei Einwände (Wetter, Dauer).
- **Priorität:** P3 · **Launch-Blocker:** nein
- **Vorgabe:** Eine sichtbare H2, z. B. „Häufige Fragen zur Fensterreinigung“, und eine logische Überschriftenfolge ohne übersprungene Ebene (H1 → H2 → H3). Die FAQ um echte Fragen des Kunden ergänzen (Kosten, Zugang, Kombination mit der Unterhaltsreinigung), Antworten im ausgelieferten HTML (GLOBAL-011).
- **Abnahme:** Die Überschriftenstruktur springt keine Ebene. Der FAQ-Abschnitt ist über die Überschriften-Navigation erreichbar. Die Antworten stehen im ausgelieferten HTML.
- **Evidenz:** Codebefund und Renderbefund (Faktenblatt, Überschriftenliste). **Quelle:** S22

### SEITE-P17-003 · Fensterreinigung überschneidet sich mit Fassaden-, Unterhalts- und Büroreinigung (Kannibalisierungsrisiko)

- **Ist-Zustand:** Die Leistungsliste führt „Glasfassaden“ (`page.tsx:128`), der Reiter „Verfahren“ Osmose-Wasser, Teleskopstangen und Hebebühnen wie die Fassadenseite. Unterhalts- und Büroreinigung führen „Fensterreinigung“ als Zusatzleistung, ohne hierher zu verlinken. Die Startseite fasst „Fassaden- & Fensterreinigung“ zusammen. Gegenstück zu SEITE-P16-004.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** In Phase 4 entscheiden, abhängig von R3: Zuständigkeit für Glasfassaden festlegen, die Zusatzleistung auf P03/P13 hierher verlinken, falls die Seite bleibt, oder die Fensterreinigung ganz in die Unterhaltsreinigung integrieren (Pfad b). Ohne Suchdaten ist das ein Risiko, keine belegte Kannibalisierung.
- **Abnahme:** Zuständigkeit in der Intent-Matrix (03) dokumentiert. Keine zwei Seiten mit derselben Kernaussage ohne gegenseitigen Verweis.
- **Evidenz:** HYPOTHESE (Inhaltsvergleich). **Quelle:** S05, S07

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -020 (Identität), -021 (unbelegte Leistung, Region und Qualitätsaussagen), -023 (Bild). Seitenspezifisch zusätzlich SEITE-P17-001 (Teil von GLOBAL-021). Bis R3 beantwortet ist, bleibt offen, ob die Seite überarbeitet (Pfad a) oder entfernt wird (Pfad b).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S05, S07, S08, S09, S10, S11, S12, S13, S17, S22).
