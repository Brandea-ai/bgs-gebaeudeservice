# Seitenanalyse: Zusätzliche Leistungsseite · Maschinenreinigung

**Seiten-ID: P19 (Inventar U18)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/business/maschinenreinigung` · **Codepfad:** `app/business/maschinenreinigung/page.tsx` (254 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden nicht als eigene Leistung genannt → R3. HYPOTHESE: allenfalls Teil der „Spezial- und Sonderreinigungen“ (N014). Eine spezialisierte Reinigung von Produktionsmaschinen ist in der Eigenangabe nicht erkennbar.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen. Voraussetzung ist, dass BGS die Leistung tatsächlich anbietet (R3).

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Wie die Hallenreinigung ist die Seite in Bild-Text-Abschnitten mit sauberer H2-Gliederung gebaut (234 sichtbare Wörter, keine Reiter). Sie verspricht „Alle Maschinentypen“ bis hin zu Lebensmittel- und Pharma-Anlagen („HACCP-konform“, „GMP-konform“) durch „Zertifizierte Experten“, ohne Beleg. Die Grenzen der Leistung fehlen ganz: wer die Maschine stillsetzt und freigibt, was nicht berührt wird, wo Reinigung endet und Wartung beginnt. Der erste Absatz beschreibt die Industriereinigung. Alle fünf FAQ-Antworten fehlen im ausgelieferten HTML. Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002).

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: Slug `/business/maschinenreinigung` ermittelt (U18). Keine Umbenennung nötig, zusätzlicher Bericht (E09).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt „Produktionsmaschinen und Industrieanlagen“ und acht Maschinentypen von CNC bis Pharma. Reale Angaben des Kunden fehlen (R10). HYPOTHESE: Produktionsbetriebe in LU/ZG, Entscheidung durch Produktions- oder Instandhaltungsleitung.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: Die Seite zählt Maschinentypen auf, beschreibt aber weder Tätigkeiten noch Ergebnis noch Grenzen (SEITE-P19-002, GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Überschneidung mit der Industriereinigung (U13, führt „Maschinenreinigung“ als Spezialreinigung und nennt ebenfalls HACCP und GMP) und der Hallenreinigung (U17). Die Seite beschreibt sich über „Unsere Industriereinigung“ (SEITE-P19-003). Die FAQ verweist bei „Grundreinigung“ auf die Baureinigung, das passt fachlich nicht. Zu den Kernleistungen P03 bis P07 keine inhaltliche Überschneidung, die Sonderleistungen (P05) nennen keine Maschinen. Kannibalisierung → Phase 4.*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt. „Alle Maschinentypen“ ersetzt keine Eignungsaussage.*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Ein Ablauf fehlt, ebenso die Mitwirkung des Betreibers (Stillsetzen, Freigabe, Sicherheitsvorgaben). Häufigkeiten stehen nur allgemein in der FAQ. Kostenfaktoren fehlen.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine Belege. „Zertifizierte Experten“, HACCP- und GMP-Konformität, Schulung und „umweltfreundlich und biologisch abbaubar“ sind unbelegt (SEITE-P19-001). Die Referenzen-Seite nennt „Produktionshalle Luzern – Spezialisierte Industriereinigung mit Maschinenwartung“, ohne Nachweis (GLOBAL-022). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: drei Bilder mit KI-Merkmalen. Eines zeigt gar keine Reinigung, zwei inszenieren eine Schweizer Fahne, die Arbeitskleidung wechselt (SEITE-P19-004, GLOBAL-023, GLOBAL-024).*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: fünf Fragen (Reinigungsmittel, Produktionspausen, Häufigkeit, Grundreinigung, Schulung). Die Antworten sind nicht im HTML (GLOBAL-011), drei davon enthalten unbelegte Aussagen. Die naheliegenden Risikofragen (Stillstand, Sicherheit, Haftung bei Schäden) fehlen. Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Auswahl enthält „Maschinenreinigung“ und „Business Maschinenreinigung“ (GLOBAL-028).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: Zürich steht zweimal, im Hero („in Zürich, Zug und Luzern“) und im Abschlusstext („…zu allen Reinigungsdienstleistungen in Zürich, Zug und Luzern“). Laut Eigenangabe des Kunden nur LU/ZG (GLOBAL-021, R4).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe des Leistungsstatus (R3) und aller Aussagen unten durch die Geschäftsführung des Kunden (R12). HACCP-, GMP- und Schulungsaussagen zusätzlich nur mit Dokument (Schulungsnachweis, Produktdatenblatt, Referenz).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/business/maschinenreinigung`, 200 | Pfad (a): beibehalten. Pfad (b): 308 oder 410 (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | „Produktionsmaschinen und Industrieanlagen“. Intent: Dienstleister für die Reinigung von Maschinen und Anlagen finden (transaktional/lokal, spezialisiert) | Zielgruppe bestätigen (R10), Zuständigkeit gegenüber der Industriereinigung in der Intent-Matrix (Phase 4) | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der im Code übergebene Titel „Maschinenreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma“ wird nicht ausgegeben (`SEO` gibt `null` zurück) | Siehe Vorgabe unten. Den Code-Titel nicht einfach aktivieren, er enthält falsche Region und Marke | N007, N015, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung („Professionelle Gebäudereinigung für Premium, Business und Basis-Services in Zürich, Zug und Luzern. …“) | Siehe Vorgabe unten | N007, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Professionelle Maschinenreinigung“, H2 „Spezialisiert auf Industrieanlagen“, H2 „Umfassende Reinigungsleistungen“, H2 „Häufig gestellte Fragen“ (im ausgelieferten HTML mit `opacity:0`, Einblendung beim Scrollen), H3 je Frage, H2 „Bereit für professionelle Maschinenreinigung?“. Gliederung logisch (BESTANDEN). Der Cookie-Banner bringt ein H3 vor die H1 | Gliederung beibehalten, FAQ-Überschrift ohne Einblendung, siehe Abschnittsfolge | N020, N022, Faktenblatt, HTML-Abgleich 24.09.2026 |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): aus der Sitemap entfernen | N007, N008 |
| Wichtigste Textpassagen | „Spezialisierte Reinigung von Produktionsmaschinen und Industrieanlagen in Zürich, Zug und Luzern. Für optimale Leistung und längere Lebensdauer Ihrer Maschinen.“ „Unsere Industriereinigung umfasst die fachgerechte Reinigung von CNC-Maschinen, Produktionsanlagen und Fertigungsstraßen.“ Liste mit „Lebensmittelmaschinen (HACCP-konform)“ und „Pharma-Anlagen (GMP-konform)“ | Eigene Einleitung, Region korrigieren, Wirkungs- und Compliance-Aussagen nur mit Beleg | N027 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt), am Seitenende „Jetzt Kontakt aufnehmen“ | Eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ | N020, GLOBAL-002, GLOBAL-034 |
| Bildmotive und Alt-Texte | 3 Bilder mit KI-Merkmalen, alle 1536×1024 und nicht verzögert geladen: Hero `machine-cleaning.jpg` (Nahaufnahme, ein Mann mit Mütze reinigt ein Maschinenteil mit Pinsel und Tuch, Alt „Professionelle Maschinenreinigung“, ca. 313 KB, 667×518 dargestellt), `industrial-machine.jpg` (Werkzeugmaschine ohne Personen und ohne Reinigung vor einer Schweizer Fahne, Alt „Industriemaschine Reinigung“, ca. 208 KB, 733×569), `production-line-cleaning.jpg` (vier Personen in königsblauen Poloshirts mit weissen Mützen an einer Produktionslinie unter einer Schweizer Fahne, Alt „Produktionslinie Reinigung“, ca. 275 KB, 753×585) | Echte Fotos oder weniger Bilder, Alt-Texte nach Inhalt, Bilder ohne Informationswert als dekorativ behandeln oder entfernen | N029, Sichtprüfung 24.09.2026 (Einschätzung) |
| Interne Links | Kontextlinks im Fliesstext (im HTML): „Industriereinigung“ → `/business/industriereinigung` (`page.tsx:103`), „Hallenreinigung“ → `/business/hallenreinigung` (`page.tsx:134`). In FAQ-Antworten (erst nach Klick): „Facility Management“, „Baureinigung“. Eingehend nur Navigation und Footer, keine Kontextlinks | Siehe Linkempfehlungen | N009, Codebefund |
| Schema-Typen | keine im HTML. Im Code vorbereitet, aber wirkungslos: `serviceSchema` mit Anbieter „Swiss Reinigungsfirma“, `areaServed` „Switzerland“, `serviceType` „Machine Cleaning“ (`client/src/utils/schema.ts:69-92`) | `Service` nach Bestätigung, die vorbereiteten Daten nicht unverändert übernehmen | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. H1 und „Jetzt anfragen“ liegen in der ersten mobilen Ansicht (BESTANDEN). axe: 7 Kontrastverstöße, 25 zu kleine Klickziele, 2 Links im Fliesstext nur durch Farbe erkennbar (`link-in-text-block`) | Siehe GLOBAL-026, Links im Fliesstext zusätzlich unterstreichen | N020, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,6 MB, 85 Anfragen (Desktop, dekodiert), davon rund 0,8 MB für die drei JPGs. Keine eigene Lighthouse-Messung, der Seitentyp ist über `/business/bueroreinigung` gemessen (mobil Median-LCP 5,3 s) | Budgets aus Abschnitt I, Inhaltsbilder verzögert laden | N020, N029, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -020, -021, -022, -023, -024, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Der Leistungsstatus ist offen (R3). Deshalb gibt es zwei Pfade. Beide nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, die „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort („Wir kommen gerne bei Ihnen vorbei …“). Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind. Unabhängig vom Pfad sind die HACCP- und GMP-Angaben ohne Nachweis sofort zu entfernen (SEITE-P19-001). Die Entscheidung hängt eng mit Industrie- und Hallenreinigung zusammen (SEITE-P15-003).

**Pfad (a) · Falls R3 die Maschinenreinigung bestätigt** und Phase 4 eine eigene Seite neben der Industriereinigung empfiehlt:

- **Meta-Title soll lauten:** „Maschinenreinigung in Luzern und Zug | BGS Gebäudeservice“. Begründung: Leistung und reale Region vorne, Marke zur Wiedererkennung. Grenzt sich über das Objekt Maschine von Hallen- und Industriereinigung ab.
- **Meta-Description soll lauten:** „Reinigung von Produktionsmaschinen und Anlagen in den Kantonen Luzern und Zug. BGS Gebäudeservice erstellt Ihnen vor Ort eine kostenlose, unverbindliche Offerte.“ Nur belegte Aussagen. Die Maschinenarten nach R3 bestätigen.
- **URL-Slug:** Slug `maschinenreinigung` beibehalten. Das Präfix `/business/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Maschinenreinigung für Produktionsbetriebe in Luzern und Zug“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung): Öl, Fett und Produktionsrückstände an Maschinen (heute im Text), Reinigung ohne Störung der Produktion, in 2–3 Sätzen. Nur bestätigte Aussagen.
  2. Was BGS reinigt und was nicht: bestätigte Maschinentypen, dazu klare Ausschlüsse, etwa keine Eingriffe in Steuerung, Elektrik oder Mechanik, falls der Kunde das so bestätigt.
  3. Zusammenarbeit und Sicherheit: wer die Maschine stillsetzt und wieder freigibt, welche Vorgaben des Betriebs gelten. Nur bestätigte Regelungen (SEITE-P19-002).
  4. Reinigungsmittel und Verfahren, nur bestätigte. HACCP- und GMP-Bezüge nur mit Nachweis.
  5. Einsatzzeiten (heute FAQ-Antwort 2), nur bestätigte.
  6. Ablauf ab Anfrage: Anfrage → kostenlose Besichtigung und Offerte vor Ort (belegt) → Reinigungsplan mit dem Betrieb → Durchführung → Freigabe. Nur Schritte, die der Kunde bestätigt.
  7. Beleg: eine echte, freigegebene Referenz (R6).
  8. FAQ mit sichtbaren Antworten, ergänzt um Risikofragen (Stillstand, Sicherheit, Schäden), die Überschrift ohne Einblendung.
  9. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung „Maschinenreinigung“.
- **Zu streichende oder zu ersetzende Passagen:**
  - „…in Zürich, Zug und Luzern. Für optimale Leistung und längere Lebensdauer Ihrer Maschinen.“ → „…in den Kantonen Luzern und Zug.“ Grund: Region nach R4, Wirkungsversprechen ohne Beleg.
  - „Unsere Industriereinigung umfasst die fachgerechte Reinigung von CNC-Maschinen, Produktionsanlagen und Fertigungsstraßen.“ → „Wir reinigen [bestätigte Maschinentypen].“, nur mit Bestätigung. Grund: Die Seite beschreibt sonst eine andere Leistung.
  - „Zertifizierte Experten“ und „Alle Maschinentypen“ → streichen oder belegen (GLOBAL-021).
  - „Lebensmittelmaschinen (HACCP-konform)“, „Pharma-Anlagen (GMP-konform)“ und FAQ-Antwort „Für Lebensmittelmaschinen setzen wir HACCP-konforme Produkte ein, für Pharma-Anlagen GMP-konforme Reiniger.“ → nur mit Nachweis, sonst streichen. Grund: regulierte Bereiche mit hoher Haftungsrelevanz.
  - FAQ-Antwort „Alle Mittel sind umweltfreundlich und biologisch abbaubar.“ → nur mit Produktnachweis, sonst streichen.
  - FAQ-Antwort „Alle unsere Mitarbeiter sind speziell für Maschinenreinigung geschult … und arbeiten nach höchsten Qualitätsstandards.“ → die tatsächlichen Schulungen nennen oder streichen.
  - „Von der Grundreinigung bis zur Wartungsreinigung - wir bieten alle Leistungen für Ihre Maschinen.“ → „alle Leistungen“ streichen, „Wartungsreinigung“ definieren oder streichen (SEITE-P19-002).
  - FAQ-Antwort „…Unsere Baureinigung umfasst auch Endreinigung nach Umbauten.“ → streichen. Grund: fachfremder Verweis.
  - Abschlusstext „…zu allen Reinigungsdienstleistungen in Zürich, Zug und Luzern.“ → „…zur Maschinenreinigung in den Kantonen Luzern und Zug.“ (R4).
  - „Professionelle Maschinenreinigung“ (H1) → siehe H1-Vorschlag. Grund: Schablonenformel „Professionelle …“.
  - Schreibweise „Fertigungsstraßen“ → „Fertigungsstrassen“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto einer Maschinenreinigung durch BGS (Freigabe des Betriebs, keine vertraulichen Anlagen, Mitarbeitende nur mit Einwilligung), sonst neutrales Motiv ohne Personen. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. `industrial-machine.jpg` zeigt keine Reinigung: entfernen oder als dekorativ behandeln (leerer Alt-Text), keine Flaggen-Inszenierung. `production-line-cleaning.jpg` nur als echtes Foto. Inhaltsbilder verzögert laden. Alt-Texte nach Inhalt, z. B. „Mitarbeiter reinigt ein Maschinenteil mit Pinsel und Tuch“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Maschinenreinigung“, `serviceType` „Maschinenreinigung“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13]. Die vorbereiteten Code-Daten nicht übernehmen.
- **Linkempfehlungen:**
  - Die Industriereinigung nur verlinken, wenn Phase 4 sie als übergeordnete Seite festlegt, dann mit dem Linktext „Industriereinigung im Überblick“ auf `/business/industriereinigung`.
  - Für die Reinigung rund um die Maschinen auf `/business/hallenreinigung` mit dem Linktext „Reinigung von Produktions- und Lagerhallen“, sofern bestätigt.
  - Den FAQ-Link „Facility Management“ nur behalten, wenn P20 bestätigt ist. Den FAQ-Link „Baureinigung“ entfernen.
  - Links im Fliesstext zusätzlich unterstreichen, damit sie nicht nur an der Farbe erkennbar sind (GLOBAL-026).

**Pfad (b) · Falls R3 die Maschinenreinigung nicht als eigene Leistung bestätigt:**

- **Seite entfernen.** Ziel der **308**-Weiterleitung in dieser Reihenfolge: `/business/industriereinigung`, falls R3 die Industriereinigung bestätigt und dort ein Abschnitt zu Maschinen und Anlagen vorgesehen ist (SEITE-P15-003); sonst `/basis/sonderleistungen`, nur falls die überarbeitete Seite die Reinigung von Maschinen als Sonderreinigung beschreibt. Passt keines, Status **410**. Keine Sammelweiterleitung auf die Startseite [S07].
- **Aus Navigation, Footer, Sitemap und Formularauswahl entfernen:** Mega-Menü (`client/src/components/SwissNavigation.tsx:36`), Footer-Liste „Business Services“ (`client/src/components/SwissFooter.tsx:312`), `public/sitemap.xml`, Formularoptionen „Maschinenreinigung“ und „Business Maschinenreinigung“ (`SwissFooter.tsx:150-172`, GLOBAL-028). Falls der KI-Chat bleibt (R8), auch den Leistungskatalog in `server/gemini.ts` anpassen.
- **Interne Verweise und Nennungen:** Kontextlinks auf diese Seite gibt es ausser Navigation und Footer keine. Den Listenpunkt „Maschinenreinigung“ auf der Industriereinigung nur behalten, wenn er dort bestätigt ist.
- **Alt-neu-Mapping:** Eintrag in 02: `/business/maschinenreinigung` → gewähltes Ziel (308) bzw. „entfällt“ (410), Grund „R3“.
- **Abnahme für Pfad (b):** Die alte URL liefert 308 auf eine Seite mit Status 200 oder 410. Ein Crawl findet keinen internen Link mehr auf die alte URL, Sitemap und Formularauswahl enthalten sie nicht.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P19-001 · HACCP-, GMP-, Schulungs- und Umweltaussagen ohne Beleg

- **Ist-Zustand:** Sichtbar stehen „Lebensmittelmaschinen (HACCP-konform)“ und „Pharma-Anlagen (GMP-konform)“ (`page.tsx:144-145`), „Zertifizierte Experten“ und „Alle Maschinentypen“ (`page.tsx:109-110`) sowie im Hero „Für optimale Leistung und längere Lebensdauer Ihrer Maschinen.“ (`page.tsx:56`). Die FAQ-Antworten (erst nach Klick, N023) lauten „Für Lebensmittelmaschinen setzen wir HACCP-konforme Produkte ein, für Pharma-Anlagen GMP-konforme Reiniger. Alle Mittel sind umweltfreundlich und biologisch abbaubar.“ (`page.tsx:187`) und „Alle unsere Mitarbeiter sind speziell für Maschinenreinigung geschult und verfügen über Kenntnisse in Arbeitssicherheit und Maschinentechnik. … arbeiten nach höchsten Qualitätsstandards.“ (`page.tsx:223`). Der Abschlusstext nennt erneut Zürich (`page.tsx:237`). Keine Aussage ist durch die Eigenangabe des Kunden gedeckt. Lebensmittel und Pharma sind regulierte Bereiche, dort sind unzutreffende Zusagen besonders folgenreich.
- **Priorität:** P1 · **Launch-Blocker:** ja (Teil von GLOBAL-021, G09)
- **Vorgabe:** Nachweise anfordern (R3, R6): Referenzen aus Lebensmittel- oder Pharmabetrieben, Schulungsnachweise, Produktdatenblätter. Ohne Nachweis streichen (Ersatztexte siehe Abschnitt 4). Nachweisregister ergänzen.
- **Abnahme:** Jede verbleibende Compliance-, Schulungs- und Umweltaussage hat ein Dokument oder eine schriftliche Freigabe im Nachweisregister.
- **Evidenz:** Codebefund (Zeilen oben) und Inhaltsbefund (N027). **Quelle:** S02

### SEITE-P19-002 · Grenzen, Zuständigkeiten und Mitwirkung bei der Maschinenreinigung fehlen

- **Ist-Zustand:** Die Seite zählt Maschinentypen auf („CNC-Maschinen und Drehbänke“, „Pressen und Stanzen“, „Förderanlagen und Transportbänder“ …) und verspricht „Von der Grundreinigung bis zur Wartungsreinigung - wir bieten alle Leistungen für Ihre Maschinen.“ (`page.tsx:134`). Nirgends steht, wer die Maschine stillsetzt und wieder freigibt, welche Teile nicht gereinigt werden und wo Reinigung endet und Wartung beginnt. Die Referenzen-Seite spricht sogar von „Maschinenwartung“. Bei Produktionsanlagen entscheidet genau das über Sicherheit, Haftung und Auftragsumfang, und unklare Erwartungen führen zu unpassenden Anfragen.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Mit dem Kunden klären (R3) und sichtbar beschreiben: Zuständigkeiten zwischen Betreiber und BGS, Voraussetzungen, Ausschlüsse. „Wartungsreinigung“ definieren oder streichen, „Maschinenwartung“ auf der Referenzen-Seite nur mit Bestätigung.
- **Abnahme:** Die Seite beantwortet im sichtbaren Text, was genau gereinigt wird, was nicht und wer was übernimmt (GLOBAL-036). Die Aussagen sind vom Kunden freigegeben.
- **Evidenz:** Inhaltsbefund (N027) und Codebefund. **Quelle:** S02

### SEITE-P19-003 · Maschinenreinigung überschneidet sich mit Industrie- und Hallenreinigung (Kannibalisierungsrisiko)

- **Ist-Zustand:** Der erste Inhaltsabsatz lautet „Unsere Industriereinigung umfasst die fachgerechte Reinigung von CNC-Maschinen, Produktionsanlagen und Fertigungsstraßen“, mit Link auf `/business/industriereinigung` (`page.tsx:103`). Die Industrieseite führt ihrerseits „Maschinenreinigung“ als Spezialreinigung und nennt HACCP und GMP ebenfalls. Der zweite Absatz sagt „Unsere Hallenreinigung kann bei Bedarf integriert werden“ (`page.tsx:134`). Gegenstück zu SEITE-P15-003 und SEITE-P18-002.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** In Phase 4 gemeinsam mit P15 und P18 entscheiden, abhängig von R3: Maschinenreinigung als Abschnitt der Industriereinigung (diese URL per 308 dorthin) oder eigenständig mit eigener Einleitung und klarer Zuständigkeit. Ohne Suchdaten ist das ein Risiko, keine belegte Kannibalisierung.
- **Abnahme:** Kein Absatz beschreibt eine andere Leistung als die der Seite. Entscheidung und gegebenenfalls Alt-neu-Mapping sind dokumentiert.
- **Evidenz:** HYPOTHESE (Inhaltsvergleich), Codebefund für die Links. **Quelle:** S04, S05, S07

### SEITE-P19-004 · Bilder zeigen keine Reinigung oder inszenieren Schweizer Herkunft

- **Ist-Zustand:** `industrial-machine.jpg` zeigt eine Werkzeugmaschine ohne Personen und ohne Reinigungsvorgang vor einer Schweizer Fahne, der Alt-Text lautet trotzdem „Industriemaschine Reinigung“. `production-line-cleaning.jpg` zeigt vier Personen in königsblauen Poloshirts mit weissen Mützen an einer Produktionslinie unter einer Schweizer Fahne, im Hero trägt der Reinigende ein dunkelblaues Poloshirt. Drei Motive mit KI-Merkmalen, zwei verschiedene „Uniformen“ (Einschätzung). Die Bilder wirken wie eigene Mitarbeitende und eigene Einsätze (GLOBAL-023). Zusammen rund 0,8 MB JPG (GLOBAL-024).
- **Priorität:** P2 · **Launch-Blocker:** ja, über GLOBAL-023 (KI-Motiv als vermeintlich eigenes Team)
- **Vorgabe:** Durch echte, freigegebene Fotos ersetzen oder weglassen. Bilder ohne Informationswert als dekorativ behandeln oder entfernen. Alt-Texte nach dem tatsächlichen Bildinhalt formulieren [S17].
- **Abnahme:** Das Medieninventar nennt für jedes Bild dieser Seite Quelle und Nutzungsrecht. Kein Alt-Text beschreibt eine Tätigkeit, die das Bild nicht zeigt.
- **Evidenz:** Sichtprüfung 24.09.2026 (Einschätzung), N029. **Quelle:** S16, S17

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -020 (Identität), -021 (unbelegte Leistung, Region und Qualitätsaussagen), -023 (Bilder). Seitenspezifisch zusätzlich SEITE-P19-001 (Teil von GLOBAL-021) und SEITE-P19-004 (über GLOBAL-023). Bis R3 beantwortet ist, bleibt offen, ob die Seite überarbeitet (Pfad a) oder entfernt bzw. zusammengelegt wird (Pfad b).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S04, S05, S07, S08, S09, S10, S11, S12, S13, S16, S17).
