# Seitenanalyse: Zusätzliche Leistungsseite · Facility Management

**Seiten-ID: P20 (Inventar U19)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/business/facility-management` · **Codepfad:** `app/business/facility-management/page.tsx` (271 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden nicht als eigene Leistung genannt → R3. Teilweise zuordenbar: Die Eigenangabe nennt „Aussen- und Facility-Services“ (unter Gebäudereinigung) und beschreibt BGS als „Hauswart- und Reinigungsfirma“ (N014). Die Seite bündelt genau diese beiden Bereiche, geht aber mit technischer Wartung, Empfangsservice und Hotelbetreuung darüber hinaus.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen. Voraussetzung ist, dass BGS die gebündelte Leistung tatsächlich anbietet (R3).

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite verspricht „Umfassende Gebäudedienstleistungen aus einer Hand“ (169 sichtbare Wörter, weitere 111 in Reitern). Die Grundidee, Reinigung und Hauswartung zu bündeln, passt zur Eigenangabe des Kunden. Direkt unter dem Hero stehen jedoch „24/7 Verfügbar – Notfall-Hotline für dringende Anliegen“ und „Zertifiziert – Qualitätsmanagement nach ISO-Standards“, beides unbelegt bzw. vom Impressum widerlegt. Obwohl die Seite ein Bündel beschreibt, verlinkt sie keine der gebündelten Einzelleistungen. Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002), der Abschluss-Button heißt abweichend „Kostenlose Beratung“.

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: Slug `/business/facility-management` ermittelt (U19). Keine Umbenennung nötig, zusätzlicher Bericht (E09).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt als Branchen Bürogebäude, Einkaufszentren, Industrieanlagen, Wohnanlagen, Hotels und Gesundheitswesen. Reale Angaben des Kunden fehlen (R10). HYPOTHESE: Liegenschaftsverwaltungen und Eigentümer in LU/ZG, die Reinigung und Hauswartung bei einem Anbieter bündeln wollen. Das passt zur Markenrichtung 1 in 01 („Hauswart + Reinigung aus einer Hand“).*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: nur zwei Stichwortlisten (Reinigung, Hausmeisterservice). Was die versprochene Koordination konkret bedeutet, fehlt, ebenso die Grenzen (GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Starke Überschneidung mit dem Hausmeisterservice (P04): Kleinreparaturen, Grünpflege, Winterdienst, Müllentsorgung und eine 24/7-Notfall-Hotline mit denselben Beispielen (Wasserschäden, Heizungsausfall) (SEITE-P20-004). Unterhaltsreinigung (P03), Sonderreinigungen (P05), Winterdienst (P06) und Grünflächenpflege (P07) werden als Bausteine genannt, aber nicht verlinkt. Kannibalisierung → Phase 4.*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt. Nur die FAQ-Frage „Können Sie auch einzelne Leistungen übernehmen?“ deutet an, wann ein Gesamtpaket und wann einzelne Leistungen passen.*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Ein Ablauf fehlt. „Sie erhalten regelmäßige Berichte und transparente Abrechnungen.“ und „…profitieren Sie von attraktiven Paketpreisen …“ sind unbelegt (SEITE-P20-003). Kostenfaktoren fehlen.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine Belege. Die ISO-Angabe ist durch das Impressum widerlegt (SEITE-P20-002), die 24/7-Hotline ist unbelegt (SEITE-P20-001). Die Referenzen-Seite nennt „Tech Campus Zug – Facility Management für internationales Tech-Unternehmen“, ohne Nachweis (GLOBAL-022). Angefordert über R5 und R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: ein Hero-Bild mit KI-Merkmalen: zwei Techniker in dunkelblauen Overalls mit gelben Helmen und zwei Personen im Anzug mit Tablet in einer Eingangshalle. Es wirkt wie Team und Leitung von BGS (GLOBAL-023). Der Alt-Text „Facility Management“ beschreibt das Motiv nicht.*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: fünf relevante Fragen (Umfang, Vorteile, Notfall, Einzelleistungen, Qualität). Die Antworten sind nicht im HTML (GLOBAL-011), drei davon enthalten unbelegte Zusagen. Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Auswahl enthält „Facility Management“ und „Business Facility Management“ (GLOBAL-028). Der Abschluss-Button „Kostenlose Beratung“ weicht vom Hero ab (GLOBAL-034).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: „in Zürich, Zug und Luzern“, laut Eigenangabe des Kunden nur LU/ZG (GLOBAL-021, R4).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe des Leistungsstatus (R3) und aller Aussagen unten durch die Geschäftsführung des Kunden (R12). Erreichbarkeit und Bereitschaft zusätzlich über R5.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/business/facility-management`, 200 | Pfad (a): beibehalten. Pfad (b): 308 auf `/basis/hausmeisterservice` (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | Reiter „Branchen“ mit Bürogebäuden, Einkaufszentren, Industrieanlagen, Wohnanlagen, Hotels und Gesundheitswesen. Intent: Anbieter für gebündelte Gebäudedienste finden (transaktional/lokal). HYPOTHESE: Der Begriff „Facility Management“ weckt auch Erwartungen an technisches und kaufmännisches Gebäudemanagement | Zielgruppe bestätigen (R10), Leistungsname nach R3, Intent-Matrix Phase 4 | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der im Code übergebene Titel „Facility Management Zürich, Zug & Luzern - Swiss Reinigungsfirma“ wird nicht ausgegeben (`SEO` gibt `null` zurück) | Siehe Vorgabe unten. Den Code-Titel nicht einfach aktivieren, er enthält falsche Region und Marke | N007, N015, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung („Professionelle Gebäudereinigung für Premium, Business und Basis-Services in Zürich, Zug und Luzern. …“). Die im Code hinterlegte Beschreibung verspricht „Reinigung, Wartung und Instandhaltung aus einer Hand“ | Siehe Vorgabe unten | N007, N015, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Ganzheitliches Facility Management“. Danach drei H3-Merkmale („Alles aus einer Hand“, „24/7 Verfügbar“, „Zertifiziert“) ohne übergeordnete H2, H3 „Alles aus einer Hand“ (im Reiter, doppelter Wortlaut), H2 „Häufig gestellte Fragen“, H2 „Bereit für professionelles Facility Management?“. Der Cookie-Banner bringt ein H3 vor die H1 | Siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): aus der Sitemap entfernen | N007, N008 |
| Wichtigste Textpassagen | „Umfassende Gebäudedienstleistungen aus einer Hand in Zürich, Zug und Luzern. Von Reinigung über Hausmeister bis Winterdienst.“ Merkmale „24/7 Verfügbar – Notfall-Hotline für dringende Anliegen“ und „Zertifiziert – Qualitätsmanagement nach ISO-Standards“ | Bündelidee behalten, Region korrigieren, 24/7 und ISO streichen | N027, N028 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt), am Seitenende „Kostenlose Beratung“ | Eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ | N020, GLOBAL-002, GLOBAL-034 |
| Bildmotive und Alt-Texte | 1 Hero-Bild mit KI-Merkmalen (zwei Techniker in dunkelblauen Overalls mit gelben Helmen, zwei Personen im Anzug mit Tablet und Papier, Werkzeugwagen, Eingangshalle), Alt „Facility Management“, 1536×1024 geliefert (JPG, ca. 187 KB), 666×517 dargestellt | Echtes Foto, beschreibender Alt-Text, responsiv | N029, Sichtprüfung 24.09.2026 (Einschätzung) |
| Interne Links | Ausgehend nur Navigation und Footer, keine Links auf die gebündelten Leistungen. Eingehend: Fliesstext der Hallenreinigung (im HTML), FAQ der Maschinenreinigung (erst nach Klick). Der Link der Zürich-Seite zeigt auf `/business/facilitymanagement` (404). Die Startseitenkarte „Business Lösungen“ nennt „Facility Management“, verlinkt aber nur die Büroreinigung | Siehe Linkempfehlungen | N009, N024, GLOBAL-016 |
| Schema-Typen | keine im HTML. Im Code vorbereitet, aber wirkungslos: `serviceSchema` mit Anbieter „Swiss Reinigungsfirma“, `areaServed` „Switzerland“, `serviceType` „Facility Management“ (`client/src/utils/schema.ts:69-92`) | `Service` nach Bestätigung, die vorbereiteten Daten nicht unverändert übernehmen | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. H1 und „Jetzt anfragen“ liegen in der ersten mobilen Ansicht (BESTANDEN). axe: 7 Kontrastverstöße, 25 zu kleine Klickziele | Siehe GLOBAL-026 | N020, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 83 Anfragen (Desktop, dekodiert). Keine eigene Lighthouse-Messung, der Seitentyp ist über `/business/bueroreinigung` gemessen (mobil Median-LCP 5,3 s) | Budgets aus Abschnitt I | N020, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -016, -020, -021, -022, -023, -024, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Der Leistungsstatus ist offen (R3). Deshalb gibt es zwei Pfade. Beide nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, „Hauswart- und Reinigungsfirma“, Arbeitsgebiet Kanton Luzern und Kanton Zug, Leistungsbereiche Gebäudereinigung (u. a. „Aussen- und Facility-Services“) und Hauswartung, die „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort („Wir kommen gerne bei Ihnen vorbei …“). Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind. Unabhängig vom Pfad sind die 24/7- und die ISO-Angabe sofort zu entfernen (SEITE-P20-001, SEITE-P20-002).

**Pfad (a) · Falls R3 die gebündelten Facility-Services bestätigt** (Reinigung und Hauswartung aus einer Hand, ohne die unbelegten Zusatzleistungen):

- **Meta-Title soll lauten:** „Facility-Services in Luzern und Zug: Reinigung und Hauswartung | BGS Gebäudeservice“. Begründung: nutzt den Begriff der Eigenangabe („Facility-Services“) und das belegte Leistungspaar, vermeidet die Erwartung an ein technisches Facility Management. Ob der Name „Facility Management“ bleibt, entscheidet R3, der Slug bleibt in jedem Fall.
- **Meta-Description soll lauten:** „Gebäudereinigung und Hauswartung von einem Anbieter: BGS Gebäudeservice betreut Liegenschaften in den Kantonen Luzern und Zug. Kostenlose, unverbindliche Offerte vor Ort.“ Nur belegte Aussagen. Die Zielgruppe „Liegenschaften“ nach R10 bestätigen.
- **URL-Slug:** Slug `facility-management` beibehalten, auch wenn der Anzeigename „Facility-Services“ wird, um keine unnötige Weiterleitung zu erzeugen. Das Präfix `/business/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Reinigung und Hauswartung aus einer Hand in Luzern und Zug“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung): mehrere Dienstleister für eine Liegenschaft koordinieren oder alles bei einem Anbieter, in 2–3 Sätzen. Nur mit bestätigter Ansprechperson.
  2. Die Bausteine, je ein Satz mit Link: regelmässige Unterhaltsreinigung, Spezial- und Sonderreinigungen, Hauswartung inklusive infrastruktureller Pflege, Winterdienst, Aussen- und Grünflächenpflege. Das sind die Unterleistungen der Eigenangabe (N014).
  3. Was nicht dazugehört, z. B. technische Wartung oder Empfangsdienst, falls BGS das nicht anbietet (SEITE-P20-003).
  4. Zusammenarbeit: Ansprechperson, Rapportierung, Abrechnung. Nur bestätigte Punkte.
  5. Erreichbarkeit: reale Zeiten statt „24/7“ (R5).
  6. Ablauf ab Anfrage: Anfrage → kostenlose Besichtigung und Offerte vor Ort (belegt) → Betreuungsplan → Start → Rückmeldung. Nur Schritte, die der Kunde bestätigt.
  7. Beleg: eine echte, freigegebene Referenz einer betreuten Liegenschaft (R6).
  8. FAQ mit sichtbaren Antworten, die fünf bestehenden Fragen, beantwortet vom Kunden.
  9. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung „Facility-Services“ bzw. dem bestätigten Namen.
- **Zu streichende oder zu ersetzende Passagen:**
  - „Umfassende Gebäudedienstleistungen aus einer Hand in Zürich, Zug und Luzern.“ → „Gebäudereinigung und Hauswartung aus einer Hand in den Kantonen Luzern und Zug.“ Grund: Region nach R4, Leistungsbegriffe der Eigenangabe.
  - „Ganzheitliches Facility Management“ (H1) → siehe H1-Vorschlag. Grund: „ganzheitlich“ ist unbelegt und verspricht mehr als die Eigenangabe.
  - Merkmal „24/7 Verfügbar – Notfall-Hotline für dringende Anliegen“ und FAQ-Antwort „Ja, unsere Notfall-Hotline ist 24/7 erreichbar. … innerhalb kürzester Zeit vor Ort.“ → reale Erreichbarkeit nennen (R5) oder streichen.
  - Merkmal „Zertifiziert – Qualitätsmanagement nach ISO-Standards“ und FAQ-Antwort „Wir arbeiten nach ISO-zertifizierten Qualitätsstandards …“ → streichen. Grund: laut Impressum „in Bearbeitung“ (GLOBAL-021).
  - FAQ-Antwort „Facility Management umfasst … technische Wartung …“ sowie „Kleinreparaturen“ und „Wartungsarbeiten“ im Reiter → an die Eigenangabe anpassen („Klassischer Hausmeisterservice“, „Infrastrukturelle Pflege“), nur bestätigte Leistungen.
  - Reiter „Vorteile“: „…attraktiven Paketpreisen …“ und „…garantieren gleichbleibend hohe Qualität.“ → streichen oder belegen.
  - Reiter „Branchen“: „Komplettbetreuung von Büroimmobilien inkl. Empfangsservice“, „Einkaufszentren – 7-Tage-Service mit flexiblen Öffnungszeiten“, „Hotels – 24/7 Service für höchste Gästezufriedenheit“, „Gesundheitswesen – Hygienische Reinigung nach Vorschriften“ → nur Branchen mit echten Aufträgen, sonst streichen.
  - FAQ-Antwort „Sie erhalten regelmäßige Berichte und transparente Abrechnungen.“ → nur mit Bestätigung.
  - Abschluss-Button „Kostenlose Beratung“ → „Kostenlose Offerte vor Ort anfragen“ (GLOBAL-034).
  - Schreibweisen „regelmäßige“, „maßgeschneidertes“ → „regelmässige“, „massgeschneidertes“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto aus der Betreuung einer Liegenschaft durch BGS, etwa Hauswart und Reinigung vor Ort (Mitarbeitende nur mit Einwilligung, Objekt nur mit Freigabe), sonst neutrales Objektfoto ohne Personen. Keine Anzugträger, die als Leitung von BGS gelesen werden können. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. Alt-Text nach Inhalt, z. B. „Hauswart von BGS prüft die Beleuchtung im Treppenhaus“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Facility-Services“ (bzw. dem bestätigten Namen), `serviceType` „Gebäudereinigung und Hauswartung“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13]. Die vorbereiteten Code-Daten nicht übernehmen.
- **Linkempfehlungen:**
  - Im Abschnitt Bausteine auf `/basis/unterhaltsreinigung` („Unterhaltsreinigung“), `/basis/sonderleistungen` („Grund- und Sonderreinigungen“), `/basis/hausmeisterservice` („Hauswartung“), `/basis/winterdienst` („Winterdienst“) und `/business/aussenanlagen` („Aussen- und Grünflächenpflege“), jeweils sofern bestätigt. Umgekehrt von P04 hierher mit „Reinigung und Hauswartung aus einer Hand“.
  - Auf der Startseite die Nennung „Facility Management“ in der Karte „Business Lösungen“ mit dieser Seite verlinken, Linktext „Reinigung und Hauswartung aus einer Hand“ (GLOBAL-034).
  - Den Link der Zürich-Seite (`/business/facilitymanagement`, 404) entfernen oder aus der zentralen Leistungsliste erzeugen (GLOBAL-016). Ob die Zürich-Seite bleibt, hängt an R4.
  - Die Verweise „Unsere Facility Management Services …“ aus Hallen- und Maschinenreinigung nur behalten, wenn diese Seiten bestätigt sind und der Bezug fachlich stimmt.

**Pfad (b) · Falls R3 keine gebündelte Leistung bestätigt:**

- **Seite entfernen** und `/business/facility-management` per **308** auf `/basis/hausmeisterservice` weiterleiten. Die Hauswartung ist in der Eigenangabe belegt (N014), und die Objektbetreuung ist der Kern dessen, was die Seite als Bündel verspricht. Entsteht vorher eine Übersicht „Alle Leistungen“ (GLOBAL-033), ist sie das passendere Ziel, weil die Seite mehrere Leistungen bündelt. Keine Sammelweiterleitung auf die Startseite [S07].
- **Aus Navigation, Footer, Sitemap und Formularauswahl entfernen:** Mega-Menü (`client/src/components/SwissNavigation.tsx:37`), Footer-Liste „Business Services“ (`client/src/components/SwissFooter.tsx:315`), `public/sitemap.xml`, Formularoptionen „Facility Management“ und „Business Facility Management“ (`SwissFooter.tsx:150-172`, GLOBAL-028). Falls der KI-Chat bleibt (R8), auch den Leistungskatalog in `server/gemini.ts` anpassen.
- **Interne Verweise und Nennungen anpassen:** Kontextlink im Fliesstext der Hallenreinigung (`app/business/hallenreinigung/page.tsx:134`), FAQ-Link der Maschinenreinigung (`app/business/maschinenreinigung/page.tsx:196`), Link der Zürich-Seite, Nennung in der Startseitenkarte (`app/page.tsx:255-258`), unverlinkte Nennungen auf den Seiten Zug (Reiter „Facility“) und Luzern.
- **Alt-neu-Mapping:** Eintrag in 02: `/business/facility-management` → `/basis/hausmeisterservice` bzw. die spätere Übersicht, 308, Grund „R3“.
- **Abnahme für Pfad (b):** Die alte URL liefert 308 auf eine Seite mit Status 200. Ein Crawl findet keinen internen Link mehr auf die alte URL, Sitemap und Formularauswahl enthalten sie nicht.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P20-001 · „24/7 Verfügbar“ und Notfall-Zusagen ohne Bereitschaftsnachweis

- **Ist-Zustand:** Direkt unter dem Hero steht „24/7 Verfügbar – Notfall-Hotline für dringende Anliegen“ (`page.tsx:97-98`). Die FAQ-Antwort (erst nach Klick, N023) lautet „Ja, unsere Notfall-Hotline ist 24/7 erreichbar. Bei dringenden Problemen wie Wasserschäden, Heizungsausfällen oder Sicherheitsfragen sind wir innerhalb kürzester Zeit vor Ort.“ (`page.tsx:223`). Der Reiter „Branchen“ ergänzt „Hotels – 24/7 Service für höchste Gästezufriedenheit“ (`page.tsx:178`) und „Einkaufszentren – 7-Tage-Service mit flexiblen Öffnungszeiten“ (`page.tsx:175`). Diese Fundstelle fehlt bisher im Nachweisregister (dort: Startseite, Hausmeister, Winterdienst, Sonderleistungen, Privatjet). Eine Notfall-Hotline, die nicht besetzt ist, trifft Kunden genau im Schadenfall.
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021, G09)
- **Vorgabe:** Der Kunde bestätigt die reale Erreichbarkeit und eine allfällige Bereitschaftsregelung (R5). Ohne Nachweis die realen Erreichbarkeitszeiten nennen und alle 24/7-, 7-Tage- und Vor-Ort-Zusagen streichen. Nachweisregister ergänzen.
- **Abnahme:** Auf der Seite steht keine 24/7-, 7-Tage- oder Vor-Ort-Zusage ohne dokumentierte Bereitschaftsregelung.
- **Evidenz:** Codebefund (Zeilen oben) und Inhaltsbefund (N027). **Quelle:** S02

### SEITE-P20-002 · „Zertifiziert – Qualitätsmanagement nach ISO-Standards“ trotz laufender Zertifizierung

- **Ist-Zustand:** Direkt unter dem Hero steht „Zertifiziert – Qualitätsmanagement nach ISO-Standards“ (`page.tsx:104-105`), die FAQ-Antwort lautet „Wir arbeiten nach ISO-zertifizierten Qualitätsstandards, führen regelmäßige Kontrollen durch und dokumentieren alle Leistungen digital.“ (`page.tsx:241`). Das Impressum sagt: „Die ISO-Zertifizierung befindet sich derzeit in Bearbeitung.“ Auch diese Fundstelle fehlt im Nachweisregister (dort: Büroreinigung, Startseite, Baureinigung, Industriereinigung).
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021, G09)
- **Vorgabe:** Sofort streichen, unabhängig von R3. Eine ISO-Angabe erst nach Erteilung, mit Norm, Zertifizierungsstelle und Gültigkeit. Kontrollen und digitale Dokumentation nur mit Bestätigung des Kunden (R6). Nachweisregister ergänzen.
- **Abnahme:** Die Volltextsuche der Seite inklusive aller Reiter und FAQ findet „ISO“ und „zertifiziert“ nicht, oder nur mit dokumentiertem Zertifikat.
- **Evidenz:** Inhaltsbefund (N027) und Impressum (N028). **Quelle:** S02

### SEITE-P20-003 · Der Leistungsumfang geht über die Eigenangabe hinaus

- **Ist-Zustand:** Die FAQ-Antwort „Facility Management umfasst alle Dienstleistungen rund um Ihr Gebäude: Reinigung, Hausmeisterdienste, Winterdienst, technische Wartung, Grünflächenpflege und vieles mehr.“ (`page.tsx:205`), im Reiter „Leistungsspektrum“ „Kleinreparaturen“ und „Wartungsarbeiten“ (`page.tsx:138`), im Reiter „Branchen“ „Komplettbetreuung von Büroimmobilien inkl. Empfangsservice“ (`page.tsx:174`) und „Gesundheitswesen – Hygienische Reinigung nach Vorschriften“ (`page.tsx:179`), im Reiter „Vorteile“ „attraktiven Paketpreisen“ (`page.tsx:156`) und „…garantieren gleichbleibend hohe Qualität“ (`page.tsx:157`), in der FAQ „Sie erhalten regelmäßige Berichte und transparente Abrechnungen.“ (`page.tsx:214`). Die Eigenangabe nennt Reinigung und Hauswartung einschliesslich „Infrastrukturelle Pflege“, aber weder technische Wartung noch Empfangsdienst oder Hygieneleistungen für das Gesundheitswesen. Wer „Facility Management“ sucht, erwartet womöglich technisches und kaufmännisches Gebäudemanagement (HYPOTHESE). Unpassende Anfragen wären die Folge.
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021: Leistungen nur nennen, wenn der Kunde sie bestätigt)
- **Vorgabe:** Den Leistungsumfang mit R3 abgleichen, die Bezeichnungen an die Eigenangabe anpassen („Facility-Services“, „Hauswartung“, „Infrastrukturelle Pflege“) und Nicht-Angebotenes streichen oder ausdrücklich als „nicht enthalten“ kennzeichnen.
- **Abnahme:** Jede genannte Leistung und Branche ist vom Kunden schriftlich bestätigt. Die Seite nennt, was nicht zum Angebot gehört.
- **Evidenz:** Inhaltsbefund (N027) im Abgleich mit der Eigenangabe (N014). **Quelle:** S02

### SEITE-P20-004 · Facility Management und Hausmeisterservice überschneiden sich (Kannibalisierungsrisiko)

- **Ist-Zustand:** Der Reiter „Leistungsspektrum“ führt unter „Hausmeisterservice“ Kleinreparaturen, Wartungsarbeiten, Grünflächenpflege, Winterdienst, Müllentsorgung und Objektbetreuung (`page.tsx:138`). `/basis/hausmeisterservice` nennt Kleinreparaturen & Instandhaltung, Grünflächen- & Außenanlagenpflege, Müllentsorgung, Winterdienst und technische Wartungen. Beide Seiten versprechen eine 24/7-Notfall-Hotline mit denselben Beispielen (Wasserschäden, Heizungsausfall) und einen festen bzw. zentralen Ansprechpartner. Keine Seite verweist auf die andere. Gegenstück zu SEITE-P04-002, für die Grünflächenpflege zusätzlich zu SEITE-P07-001.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** In Phase 4 entscheiden, abhängig von R3: diese Seite als Bündelseite mit eigenem Zweck („Reinigung und Hauswartung aus einer Hand“) und Links auf die Einzelleistungen, oder Zusammenlegung mit der Hauswartung (308, Pfad b). Ohne Suchdaten ist das ein Risiko, keine belegte Kannibalisierung.
- **Abnahme:** Entscheidung dokumentiert, gegebenenfalls Alt-neu-Mapping mit 308. Bleiben beide Seiten, unterscheiden sich H1, Titel und Zweck erkennbar und verweisen gegenseitig aufeinander.
- **Evidenz:** HYPOTHESE (Inhaltsvergleich). **Quelle:** S05, S07

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -020 (Identität), -021 (unbelegte Leistung, Region und Qualitätsaussagen), -023 (Bild). Seitenspezifisch zusätzlich SEITE-P20-001, SEITE-P20-002 und SEITE-P20-003 (alle Teil von GLOBAL-021). Bis R3 beantwortet ist, bleibt offen, ob die Seite als Bündelseite überarbeitet (Pfad a) oder per 308 zusammengelegt wird (Pfad b).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S05, S07, S08, S09, S10, S11, S12, S13, S17).
