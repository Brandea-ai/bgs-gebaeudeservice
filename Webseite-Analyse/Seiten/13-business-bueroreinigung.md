# Seitenanalyse: Zusätzliche Leistungsseite · Büroreinigung

**Seiten-ID: P13 (Inventar U11)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/business/bueroreinigung` · **Codepfad:** `app/business/bueroreinigung/page.tsx` (324 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden nicht als eigene Leistung genannt → R3. Inhaltlich deckt sich die Seite weitgehend mit der belegten Leistung „Regelmässige Unterhaltsreinigung“ (N014, Bericht P03). Ob Büroreinigung eine eigene Leistung oder nur ein Anwendungsfall der Unterhaltsreinigung ist, klärt R3.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen. Voraussetzung ist, dass BGS die Leistung tatsächlich anbietet (R3).

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite beschreibt die Büroreinigung nur stichwortartig (160 sichtbare Wörter, weitere 158 in Reitern). Zehn von zwölf Listenpunkten sind wortgleich mit der Unterhaltsreinigung (P03), die Tätigkeitsliste heißt sogar „Tägliche Unterhaltsreinigung“. Direkt unter dem Hero steht „ISO 9001 zertifiziert“, was das eigene Impressum widerlegt. Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), der zweite Weg „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002).

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: Slug `/business/bueroreinigung` ermittelt (U11). Keine Umbenennung nötig, zusätzlicher Bericht (E09).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt „Büros und Geschäftsräume“ und „Von Startup bis Konzern“, reale Angaben des Kunden fehlen (R10). HYPOTHESE: Firmen und Verwaltungen mit Büroflächen in LU/ZG, Entscheidung durch Geschäftsleitung oder Office-Management.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: Die Tätigkeiten stehen nur als Stichworte im ersten Reiter, zu 10 von 12 Punkten wortgleich mit der Unterhaltsreinigung. Ergebnis und Grenzen fehlen (GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Zur Unterhaltsreinigung (P03) gibt es keine Abgrenzung, nach heutigem Inhalt ist die Seite ein Synonym (SEITE-P13-002). Zu den Sonderleistungen (P05) fehlt ein Hinweis, obwohl „Grundreinigung“ als Zusatzleistung steht. Zu Hauswartung (P04), Winterdienst (P06) und Aussenanlagen (P07) keine Überschneidung. „Fensterreinigung“ steht als Zusatzleistung und zugleich als eigene Seite (U15). Kannibalisierung → Phase 4.*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt. Einzige Hinweise sind die Paketzeilen „Ideal für kleine Büros“ und „Ideal für 10-50 Mitarbeiter“, ohne Grundlage.*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Der Ablauf (Bedarfsanalyse → Zeitplanung → festes Team → Qualitätskontrolle) steht nur im zweiten Reiter und nicht im HTML. Die FAQ nennen Reinigungszeiten („ab 18 Uhr“, „ab 6 Uhr“) und Vertragsbedingungen („ab 3 Monaten Laufzeit mit 1 Monat Kündigungsfrist“) ohne Beleg (SEITE-P13-003). Kostenfaktoren fehlen, die drei Pakete haben keinen Preisinhalt.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine seitenspezifischen Belege. „ISO 9001 zertifiziert“ ist durch das Impressum widerlegt (SEITE-P13-001). „Feste Ansprechpartner“, „Objektleitung“ und „digitale Dokumentation“ sind unbelegt (GLOBAL-021). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: ein Hero-Bild mit KI-Merkmalen (N029, Sichtprüfung): vier Personen in dunkelblauen Poloshirts mit grünem Logo reinigen nachts ein Büro vor einer Hochhaus-Skyline. Der Alt-Text „Modernes Büro“ beschreibt das Motiv nicht. Keine Ablaufgrafik (GLOBAL-023, GLOBAL-024).*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: vier sinnvolle Fragen (Zeitpunkt, Reinigungsmittel, Vertrag, Ausfall). Die Antworten sind nicht im HTML (GLOBAL-011), zwei davon enthalten unbelegte Zusagen (SEITE-P13-003). Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Auswahl enthält „Büroreinigung“ und „Business Büroreinigung“ (GLOBAL-028).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: „in Zürich, Zug und Luzern“, laut Eigenangabe des Kunden nur LU/ZG (GLOBAL-021, R4). Ob die Büroreinigung überhaupt angeboten wird, ist offen (R3).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe des Leistungsstatus (R3) und aller Aussagen unten durch die Geschäftsführung des Kunden (R12). Vertragsbedingungen zusätzlich mit dem tatsächlichen Mustervertrag abgleichen.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/business/bueroreinigung`, 200 | Pfad (a): beibehalten. Pfad (b): 308 auf `/basis/unterhaltsreinigung` (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | „Büros und Geschäftsräume“, „Von Startup bis Konzern“. Intent: Anbieter für Büroreinigung finden (transaktional/lokal), überschneidet sich mit „Unterhaltsreinigung“ | Zielgruppe mit dem Kunden bestätigen (R10), Zuständigkeit gegenüber P03 in der Intent-Matrix (Phase 4) | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der im Code übergebene Titel „Büroreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma“ wird nicht ausgegeben (`SEO` gibt `null` zurück) | Siehe Vorgabe unten. Den Code-Titel nicht einfach aktivieren, er enthält falsche Region und Marke | N007, N015, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung („Professionelle Gebäudereinigung für Premium, Business und Basis-Services in Zürich, Zug und Luzern. …“) | Siehe Vorgabe unten | N007, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Professionelle Büroreinigung“. Danach nur H3 „Umfassende Büroreinigung“ (im Reiter), H2 „Häufig gestellte Fragen“, H2 „Bereit für ein sauberes Büro?“. Die vier Merkmalskarten haben keine Überschriften-Elemente. Der Cookie-Banner bringt ein H3 vor die H1 | Siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): aus der Sitemap entfernen | N007, N008 |
| Wichtigste Textpassagen | „Zuverlässige Reinigungslösungen für Büros und Geschäftsräume in Zürich, Zug und Luzern. Flexibel, effizient und auf Ihre Bedürfnisse zugeschnitten.“ Merkmalskarte „Qualität – ISO 9001 zertifiziert“ | Konkreter Nutzen statt Adjektive, Region korrigieren, ISO-Angabe streichen | N027, N028 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt), am Seitenende „Jetzt Kontakt aufnehmen“ | Eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ | N020, GLOBAL-002, GLOBAL-034 |
| Bildmotive und Alt-Texte | 1 Hero-Bild mit KI-Merkmalen (Reinigungsteam nachts im Büro vor Hochhaus-Skyline, unleserlicher Logo-Schriftzug auf den Shirts), Alt „Modernes Büro“, 1536×1024 geliefert (JPG, ca. 216 KB), 666×517 dargestellt | Echtes Foto, beschreibender Alt-Text, responsiv | N029, Sichtprüfung 24.09.2026 (Einschätzung) |
| Interne Links | Ausgehend nur Navigation und Footer, keine Kontextlinks. Eingehend: Startseitenkarte „Business Lösungen“ mit dem Linktext „Mehr erfahren“ (`app/page.tsx:265`), FAQ der Hallenreinigung (erst nach Klick). Der Link der Zürich-Seite zeigt auf `/business/büroreinigung` (404) | Siehe Linkempfehlungen | N009, N024, GLOBAL-016 |
| Schema-Typen | keine im HTML. Im Code vorbereitet, aber wirkungslos: `serviceSchema` mit Anbieter „Swiss Reinigungsfirma“, `areaServed` „Switzerland“, `serviceType` „Commercial Cleaning“ (`client/src/utils/schema.ts:69-92`) | `Service` nach Bestätigung, die vorbereiteten Daten nicht unverändert übernehmen | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. H1 und „Jetzt anfragen“ liegen in der ersten mobilen Ansicht (BESTANDEN). axe: 6 Kontrastverstöße, 25 zu kleine Klickziele | Siehe GLOBAL-026 | N020, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 83 Anfragen (Desktop, dekodiert). Lighthouse mobil: Median-LCP 5,3 s, LCP-Element ist das Hero-Bild, TBT etwa 160 ms, CLS 0. Desktop LCP 0,9 s | Budgets aus Abschnitt I (u. a. LCP ≤ 2,5 s, Hero ≤ 150 KB) | N020, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -016, -020, -021, -023, -024, -025, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Der Leistungsstatus ist offen (R3). Deshalb gibt es zwei Pfade. Beide nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, Leistung „Regelmässige Unterhaltsreinigung“, die „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort („Wir kommen gerne bei Ihnen vorbei …“). Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind. Unabhängig vom Pfad ist die ISO-Angabe sofort zu entfernen (SEITE-P13-001).

**Pfad (a) · Falls R3 die Büroreinigung als eigene Leistung bestätigt** und Phase 4 eine eigene Seite neben der Unterhaltsreinigung empfiehlt:

- **Meta-Title soll lauten:** „Büroreinigung in Luzern und Zug | BGS Gebäudeservice“. Begründung: Leistung und reale Region vorne, Marke zur Wiedererkennung. Unterscheidet sich von der Unterhaltsreinigung (P03) durch den Objekttyp Büro.
- **Meta-Description soll lauten:** „Büroreinigung für Firmen in den Kantonen Luzern und Zug. BGS Gebäudeservice erstellt Ihnen vor Ort eine kostenlose, unverbindliche Offerte.“ Nur belegte Aussagen. Die Zielgruppe „Firmen“ nach R10 bestätigen.
- **URL-Slug:** Slug `bueroreinigung` beibehalten. Das Präfix `/business/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Büroreinigung für Firmen in Luzern und Zug“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung, FIMI-Prinzip): was eine laufende Büroreinigung für Arbeitsplätze, Besprechungsräume und Küchen erledigt, in 2–3 Sätzen.
  2. Abgrenzung in einem Satz mit Link: was die Büroreinigung von der allgemeinen Unterhaltsreinigung unterscheidet (z. B. Reinigung ausserhalb der Bürozeiten), nur wenn der Kunde das bestätigt.
  3. Leistungsumfang: Standardtätigkeiten und Zusatzleistungen als sichtbare Liste (heute im ersten Reiter), dazu ein kurzer Absatz „Nicht enthalten / separat“ (z. B. Grundreinigung → Sonderleistungen).
  4. Reinigungszeiten und Rhythmus: die tatsächlich möglichen Zeitfenster (heute nur in der FAQ „ab 18 Uhr“, „ab 6 Uhr“). Keine Preise ohne Grundlage.
  5. Ablauf ab Anfrage: Anfrage → kostenlose Besichtigung und Offerte vor Ort (belegt) → Reinigungsplan → Start → Rückmeldung. Nur Schritte, die der Kunde bestätigt.
  6. Vertrag und Vertretung: Laufzeit, Kündigungsfrist und Vertretungsregel nur in der bestätigten Fassung (SEITE-P13-003).
  7. Beleg: eine echte, freigegebene Referenz aus einem Büro oder ein Satz zur Arbeitsweise mit Ansprechperson (R6).
  8. FAQ mit sichtbaren Antworten, mindestens die vier bestehenden Fragen, beantwortet vom Kunden.
  9. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung „Büroreinigung“.
- **Zu streichende oder zu ersetzende Passagen:**
  - „…für Büros und Geschäftsräume in Zürich, Zug und Luzern.“ → „…für Büros und Geschäftsräume in den Kantonen Luzern und Zug.“ Grund: Die Eigenangabe nennt nur LU/ZG (R4).
  - Merkmalskarte „Qualität – ISO 9001 zertifiziert“ → streichen. Grund: laut Impressum „in Bearbeitung“ (GLOBAL-021). Erst nach Erteilung mit Norm, Zertifizierungsstelle und Gültigkeit nennen.
  - Merkmalskarte „Alle Bürogrößen – Von Startup bis Konzern“ → streichen oder durch eine bestätigte Angabe ersetzen, z. B. „Büros von [Fläche] bis [Fläche]“, nur wenn belegt. Grund: unbelegte Kapazitätsaussage.
  - „Zuverlässig – Feste Ansprechpartner“, Reiter „Festes Team … Vertretungsregelungen sind selbstverständlich organisiert“ und „Regelmäßige Kontrollen durch unsere Objektleitung und digitale Dokumentation“ → nur mit Bestätigung des Kunden. Sonst streichen.
  - FAQ-Antwort „Sehr flexibel. Wir bieten Verträge ab 3 Monaten Laufzeit mit 1 Monat Kündigungsfrist.“ → bestätigte Bedingungen einsetzen oder „Laufzeit und Kündigungsfrist halten wir in der Offerte fest.“ Grund: vertragsrelevante Zusage ohne Beleg.
  - FAQ-Antwort „Wir garantieren Vertretung. … sofort eine geschulte Ersatzkraft einspringt – ohne Qualitätsverlust.“ → „Fällt eine Reinigungskraft aus, organisieren wir eine Vertretung.“, nur mit Bestätigung. Grund: Garantie ohne Beleg.
  - Reiter „Service-Pakete“ (Starter/Business/Enterprise, „Individuelles Angebot“, „Ideal für 10-50 Mitarbeiter“, „SLA & Reporting“) → ersetzen durch: „Umfang und Preis legen wir nach der Besichtigung fest. Die Offerte ist kostenlos und unverbindlich.“ Grund: Die Pakete haben keinen unterscheidbaren Inhalt, „Mehrere Standorte“ und „SLA & Reporting“ sind unbelegt.
  - „Professionelle Büroreinigung“ (H1) → siehe H1-Vorschlag. Grund: Schablonenformel „Professionelle …“ auf 12 Seiten.
  - Schreibweisen „Bürogrößen“, „außerhalb“, „Regelmäßige“, „maßgeschneidertes“ → „Bürogrössen“, „ausserhalb“, „Regelmässige“, „massgeschneidertes“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto aus einem von BGS betreuten Büro (Mitarbeitende nur mit Einwilligung, Kundenobjekt nur mit Freigabe), sonst neutrales Objektfoto ohne Personen. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. Heute ist genau dieses Bild das LCP-Element mit 5,3 s mobil (N030). Alt-Text nach Inhalt, z. B. „Reinigungskraft von BGS wischt einen Besprechungstisch ab“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Büroreinigung“, `serviceType` „Büroreinigung“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13]. Die vorbereiteten Code-Daten (Anbieter „Swiss Reinigungsfirma“, Region „Switzerland“) nicht übernehmen.
- **Linkempfehlungen:**
  - Im Abgrenzungssatz auf `/basis/unterhaltsreinigung` mit dem Linktext „Unterhaltsreinigung für Gewerbeflächen“. Umgekehrt von P03 hierher mit dem Linktext „Büroreinigung“, damit die Zuständigkeit klar ist.
  - Bei „Grundreinigung“ im Leistungsumfang auf `/basis/sonderleistungen` mit dem Linktext „Grund- und Sonderreinigungen“, sofern bestätigt.
  - Auf der Startseite den Button „Mehr erfahren“ der Karte „Business Lösungen“ (`app/page.tsx:265`) mit „Büroreinigung ansehen“ beschriften (GLOBAL-034).
  - Den Link der Zürich-Seite (`/business/büroreinigung`, 404) entfernen oder aus der zentralen Leistungsliste erzeugen (GLOBAL-016). Ob die Zürich-Seite bleibt, hängt an R4.

**Pfad (b) · Falls R3 die Büroreinigung nicht als eigene Leistung bestätigt** (auch wenn sie nur als Teil der Unterhaltsreinigung bestätigt wird):

- **Seite entfernen** und `/business/bueroreinigung` per **308** auf `/basis/unterhaltsreinigung` weiterleiten. Das ist die fachlich nächste bestätigte Leistung („Regelmässige Unterhaltsreinigung“, N014), die schon heute Büros adressiert. Kein 410, weil ein passendes Ziel existiert. Keine Sammelweiterleitung auf die Startseite [S07].
- **Brauchbare Inhalte übernehmen:** Büro-Tätigkeiten („Schreibtische abstauben“, „Küchen & Pausenräume“) und die Frage „Wann findet die Reinigung statt?“ als Abschnitt „Büros“ in P03, nur in bestätigter Fassung.
- **Aus Navigation, Footer, Sitemap und Formularauswahl entfernen:** Mega-Menü (`client/src/components/SwissNavigation.tsx:29`), Footer-Liste „Business Services“ (`client/src/components/SwissFooter.tsx:307`), `public/sitemap.xml`, Formularoptionen „Büroreinigung“ und „Business Büroreinigung“ (`SwissFooter.tsx:150-172`, GLOBAL-028). Falls der KI-Chat bleibt (R8), auch den Leistungskatalog in `server/gemini.ts` anpassen.
- **Interne Verweise umstellen:** Startseitenkarte „Business Lösungen“ (`app/page.tsx:265`), FAQ-Link der Hallenreinigung (`app/business/hallenreinigung/page.tsx:187`), Link der Zürich-Seite. Neue Linkziele direkt auf `/basis/unterhaltsreinigung`, nicht über die Weiterleitung.
- **Alt-neu-Mapping:** Eintrag in 02: `/business/bueroreinigung` → `/basis/unterhaltsreinigung`, 308, Grund „Zusammenlegung nach R3“.
- **Abnahme für Pfad (b):** Die alte URL liefert 308 auf eine Seite mit Status 200. Ein Crawl findet keinen internen Link mehr auf die alte URL, die Sitemap enthält sie nicht, die Formularauswahl nennt keine Büroreinigung als eigene Option.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P13-001 · „ISO 9001 zertifiziert“ steht sichtbar auf der Seite, das eigene Impressum widerlegt es

- **Ist-Zustand:** Die vierte Merkmalskarte lautet „Qualität – ISO 9001 zertifiziert“ (`page.tsx:96-98`), direkt unter dem Hero und ohne Klick sichtbar. Das Impressum sagt: „Die ISO-Zertifizierung befindet sich derzeit in Bearbeitung.“ Die Aussage ist öffentlich, nachprüfbar falsch und rechtlich angreifbar.
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021, G09)
- **Vorgabe:** Sofort streichen, unabhängig von R3. Eine ISO-Angabe erst nach Erteilung, mit Norm, Zertifizierungsstelle und Gültigkeit, und nur mit Beleg des Kunden (R6).
- **Abnahme:** Die Volltextsuche der Seite findet „ISO“ nicht, oder nur zusammen mit einem dokumentierten Zertifikat im Nachweisregister (01, Abschnitt A).
- **Evidenz:** Inhaltsbefund (N027) und Impressum (N028). **Quelle:** S02

### SEITE-P13-002 · Büroreinigung und Unterhaltsreinigung beschreiben dieselbe Leistung (Kannibalisierungsrisiko)

- **Ist-Zustand:** Zehn von zwölf Listenpunkten sind wortgleich mit `/basis/unterhaltsreinigung`, die Liste heißt „Tägliche Unterhaltsreinigung“ (`page.tsx:114`). Auch der Ablauf (Bedarfsanalyse, festes Team, Qualitätskontrolle) und die Paketlogik sind gleich. Keine der beiden Seiten verweist auf die andere. Gegenstück zu SEITE-P03-002.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** In Phase 4 entscheiden: zusammenlegen (Pfad b, Abschnitt „Büros“ in P03) oder klar abgrenzen (Pfad a, eigener Nutzen und gegenseitige Links). Ohne Suchdaten ist das ein Risiko, keine belegte Kannibalisierung.
- **Abnahme:** Entscheidung dokumentiert, gegebenenfalls Alt-neu-Mapping mit 308. Bleiben beide Seiten, unterscheiden sich H1, Titel und Leistungsumfang erkennbar.
- **Evidenz:** HYPOTHESE (Inhaltsvergleich). **Quelle:** S05, S07

### SEITE-P13-003 · Unbelegte Vertrags-, Vertretungs- und Kapazitätszusagen

- **Ist-Zustand:** Die FAQ-Antworten (erst nach Klick, N023) versprechen „Verträge ab 3 Monaten Laufzeit mit 1 Monat Kündigungsfrist“ (`page.tsx:283`) und „Wir garantieren Vertretung. Unser Team ist so organisiert, dass bei Ausfall sofort eine geschulte Ersatzkraft einspringt – ohne Qualitätsverlust.“ (`page.tsx:292`). Dazu kommen „Von Startup bis Konzern“, „Feste Ansprechpartner“ und im Paket „Enterprise“ „Mehrere Standorte“, „Objektleitung vor Ort“ und „SLA & Reporting“. Keine Aussage ist durch die Eigenangabe des Kunden gedeckt. Vertragsbedingungen und Garantien wecken Erwartungen, auf die sich Kunden später berufen.
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021, G09)
- **Vorgabe:** Jede Aussage ins Nachweisregister aufnehmen und vom Kunden bestätigen lassen (R3, R6). Laufzeit und Kündigungsfrist mit dem tatsächlichen Mustervertrag abgleichen. Nicht bestätigte Aussagen streichen oder neutral formulieren (siehe Abschnitt 4).
- **Abnahme:** Für jede verbleibende Zahl, Frist und Zusage auf der Seite liegt eine schriftliche Kundenfreigabe vor.
- **Evidenz:** Codebefund (Zeilen oben) und Inhaltsbefund (N027). **Quelle:** S02

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -020 (Identität), -021 (unbelegte Leistung, Region und Qualitätsaussagen), -023 (Bild). Seitenspezifisch zusätzlich SEITE-P13-001 und SEITE-P13-003 (beide Teil von GLOBAL-021). Bis R3 beantwortet ist, bleibt offen, ob die Seite überarbeitet (Pfad a) oder per 308 zusammengelegt wird (Pfad b).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S05, S07, S08, S09, S10, S11, S12, S13, S17).
