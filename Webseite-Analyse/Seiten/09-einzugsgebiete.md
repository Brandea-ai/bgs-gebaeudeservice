# Seitenanalyse: Einzugsgebiete

**Seiten-ID: P09 (Inventar U25 Zürich, U26 Zug, U27 Luzern; keine Übersichtsseite)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URLs:** `/standorte/zuerich`, `/standorte/zug`, `/standorte/luzern` (je 200). `/standorte` → 404 (N008) · **Codepfade:** `app/standorte/zuerich/page.tsx` (266 Zeilen), `app/standorte/zug/page.tsx` (252), `app/standorte/luzern/page.tsx` (251) · **Stand:** `d7e1122`

## 1. Aufgabe dieser Seite

Klären, wo welche Leistungen tatsächlich verfügbar sind.

**Abgrenzung:** Regionale Verfügbarkeit und Orientierung. Eine Ortsseite braucht eine eigene Nutzeraufgabe; reine Variantenproduktion vermeiden. [S33]

**Primäre Zielhandlung:** Verfügbarkeit einer real angebotenen Leistung anfragen oder eine passende vorhandene Detailseite besuchen.

**Ergebnis der Prüfung:** Die Frage „Wo ist BGS tätig?“ beantwortet die Website nicht. Es gibt keine Übersicht, sondern drei Stadtseiten nach derselben Vorlage (Hero, „Warum …?“ mit sechs Behauptungen, Leistungsreiter, FAQ, Kontaktblock). Jede Stadt bekommt eine andere, unbelegte Spezialisierung: Zürich Banken, Tech und Hotels, Zug internationale Unternehmen, Luzern Hotellerie und Gastronomie. Zürich liegt ausserhalb des Arbeitsgebiets, das der Kunde selbst angibt (Kantone Luzern und Zug, N014). Alle drei Seiten nennen als E-Mail die geparkte Adresse `info@swiss-reinigung.ch` ohne MX (N013).

## 2. Seitenspezifische Prüfliste

- [x] Bediente Regionen und tatsächliche Niederlassungen getrennt dokumentieren. → *BEFUND: Die Website trennt beides nicht. **Bediente Regionen laut Eigenangabe:** Kanton Luzern, Kanton Zug (N014). **Belegte Adresse:** nur Tannhof 10, 6020 Emmenbrücke (Impressum, Kontakt). Die Navigation heisst „Standorte“, die Kontaktkarte setzt Marker „Standort Zürich“, „Standort Zug“, „Standort Luzern“ und „Hauptsitz Emmenbrücke“. Das suggeriert Niederlassungen. Die Marker liegen auf Stadtzentrumskoordinaten, „Hauptsitz Emmenbrücke“ und „Standort Luzern“ haben identische Koordinaten (`app/kontakt/page.tsx:150-170`, siehe P10).*
- [x] Keine Städte oder Standorte aus SEO-Gründen behaupten, an denen keine passende Leistung verfügbar ist. → *BEFUND: Zürich wird als Standort mit „Über 500 zufriedene Kunden in Zürich“ und „Lokales Team mit Zürich-Expertise“ beworben, laut Eigenangabe aber nicht bedient (R4, GLOBAL-021). Die FAQ nennt Zürcher Quartiere und „Gemeinden im Großraum Zürich“.*
- [x] Leistungsabhängige Einschränkungen, Anfahrt oder Angebotslogik verständlich machen, sofern relevant. → *BEFUND: fehlt. Stattdessen widersprüchliche Verfügbarkeit: „24/7 Notfall-Service“ (Zürich) neben „Erreichbarkeit Mo-Fr 7:00-18:00“ auf derselben Seite. „In der Regel innerhalb von 24 Stunden reagieren“ (Luzern), „innerhalb kürzester Zeit vor Ort“ (Zürich).*
- [x] Geografische Orientierung als Liste, Karte oder sinnvoller Gruppierung prüfen; eingebettete Kartendienste gesondert auf Ladezeit und Datenschutz prüfen. → *BEFUND: Auf den Stadtseiten gibt es keine Karte und keine Gemeindeliste, nur FAQ-Antworten nach Klick: Zürich nennt Quartiere, Luzern „Altstadt, Neustadt, Littau, Kriens, Horw, Meggen“, Zug nennt keine Orte. Die einzige Karte (Kontakt) lädt Google Maps ohne Einwilligung und ist defekt (GLOBAL-019).*
- [x] Vorhandene Regionalunterseiten einzeln inventarisieren und auf eigenständigen lokalen Nutzen prüfen. → *Erledigt, siehe Abschnitt 3. BEFUND: Kein belegter lokaler Nutzen. Keine lokale Ansprechperson, keine lokale Adresse, keine echte lokale Referenz. Telefon und E-Mail sind auf allen drei Seiten identisch.*
- [x] Stadtname-austauschen-Templates, identische Texte und konkurrierende regionale Leistungsseiten markieren. → *BEFUND: Gleiche Vorlage, Kartentexte mit ausgetauschtem Stadtnamen („Professionelle Lösungen für Zürich“ bzw. „für Luzern“, „Zuverlässige Basisleistungen in Zürich“, „Umfassende Facility-Lösungen in Zug“, je Karte identisch). Die Reiter erfinden Leistungen ohne eigene Seite (Zug: „Corporate Office Reinigung“, „Konferenzraum-Service“, „Executive Housekeeping“; Luzern: „Hotelreinigung“, „Restaurant-Reinigung“, „Event-Reinigung“, „Wellness-Bereiche“, „Konferenzräume“, „Praxisreinigung“, „Ladenreinigung“) (SEITE-P09-002).*
- [x] Reale regionale Referenzen nur mit Nachweis und Freigabe nutzen. → *BEFUND: keine regionalen Referenzen, nur Pauschalbehauptungen wie „Seit Jahren vertrauen Unternehmen in Zürich auf unsere Expertise“ (GLOBAL-021).*
- [x] Kontaktmöglichkeit für Grenzfälle oder nicht aufgeführte Orte verständlich anbieten, ohne unechte Abdeckung zu versprechen. → *BEFUND: Ein Hinweis für Orte ausserhalb fehlt. Das Kontaktformular gibt es (Footer), die E-Mail auf allen drei Seiten ist aber nicht zustellbar (`info@swiss-reinigung.ch`, kein MX, GLOBAL-020). „Termin vereinbaren“ öffnet den defekten Chat (GLOBAL-002).*

## 3. Individuellen Ist-Zustand erfassen

Gemeinsam für alle drei Seiten: globaler Standardtitel und -beschreibung (GLOBAL-010), kein Canonical, `index, follow`, in der Sitemap, keine strukturierten Daten, kein Overflow, axe je 4 Kontrastverstöße und 25 zu kleine Klickziele, Hero-Hintergrund eine Stadtansicht (1536×1024, Herkunft nicht belegt) als Parallax-Hintergrund, Kontaktblock mit `+41 41 320 56 10`, `info@swiss-reinigung.ch`, „Mo-Fr 7:00-18:00“, Buttons „Jetzt Beratungstermin vereinbaren“ (Zürich) bzw. „Jetzt Kontakt aufnehmen“ (Zug, Luzern), jeweils → `#kontakt-formular` (BESTANDEN), und „Termin vereinbaren“ (→ Chat, GLOBAL-002).

| Feld | Zürich (U25) | Zug (U26) | Luzern (U27) | Nachweis |
|---|---|---|---|---|
| URL und Statuscode | `/standorte/zuerich`, 200 | `/standorte/zug`, 200 | `/standorte/luzern`, 200 | N007 |
| Suchintention | „Reinigungsfirma Zürich“ (lokal-transaktional), laut Eigenangabe **nicht bedient** | „Reinigungsfirma Zug“ (lokal-transaktional), bedient | „Reinigungsfirma Luzern“ (lokal-transaktional), bedient | N014 |
| H1 | „Professionelle Reinigungsfirma in Zürich“ | „Reinigungsfirma in Zug für höchste Ansprüche“ | „Professionelle Reinigung in Luzern“ | Faktenblatt |
| H2-Folge | „Warum Swiss Reinigungsfirma in Zürich?“, „Unsere Leistungen in Zürich“, „Häufige Fragen …“, „Kontaktieren Sie uns in Zürich“ | „Reinigung auf Zug-Niveau“, „Unsere Leistungen in Zug“, „Häufige Fragen …“, „Kontakt Zug“ | „Reinigungsexperten in Luzern“, „Unsere Leistungen in Luzern“, „Häufige Fragen …“, „Kontakt Luzern“ | Faktenblatt |
| Wörter sichtbar / in Reitern | 299 / 130 | 232 / 100 | 236 / 97 | N027 |
| Nicht im HTML | 2 von 3 Reitern, 4 von 4 FAQ-Antworten | 2 von 3 Reitern, 3 von 3 FAQ-Antworten | 2 von 3 Reitern, 3 von 3 FAQ-Antworten | N023 |
| Behauptungen (Auszug) | „Über 500 zufriedene Kunden in Zürich“, „24/7 Notfall-Service verfügbar“, „ISO 9001 & ISO 14001 zertifiziert“, „EU Ecolabel“, **Preise** „CHF 8-12 pro m² monatlich“, „berechnen wir CHF 45-65 pro Stunde“ | „führende Reinigungsfirma in Zug“, „Qualität und Diskretion garantiert“, „Mehrsprachiges Team (DE, EN, FR, IT)“, „**ISO 27001** (Informationssicherheit) zertifiziert“, „Alle unsere Mitarbeiter sind sorgfältig geprüft und unterzeichnen Vertraulichkeitsvereinbarungen“ | „Spezialisiert auf Hotellerie & Gastronomie“, „Lokales Team aus Luzern“, „Faire Preise bei hoher Qualität“, „innerhalb von 24 Stunden reagieren“ | N027, Code |
| Leistungsreiter | Premium / Business / Basis: 17 verlinkte Karten, **7 Links auf 404** | Business / Premium / Facility: 16 Karten, **keine verlinkt** | Hotel & Gastro / Business / Premium: 16 Karten, **keine verlinkt** | N009, N024 |
| Bild im Inhalt | `swiss-hero-main.jpg`, Alt „Reinigung Zürich“ | `standort-zug-hero.jpg`, Alt „Reinigung Zug“ | `team-at-work.jpg` (KI-typisches „Team“), Alt „Reinigung Luzern“ | N029 |
| Gewicht, Anfragen (Desktop) | 2,5 MB, 86 | 2,4 MB, 83 | 2,3 MB, 83 | N020 |
| Lighthouse mobil (LCP, Median) | 6,5 s | nicht gemessen | nicht gemessen | N030 |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, Sitemap ja | wie Zürich | wie Zürich | N007, N008 |
| Schema-Typen | keine | keine | keine | N007 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -010, -011, -016, -018, -020, -021, -023, -024, -025, -026, -037 | GLOBAL-002, -003, -010, -011, -020, -021, -023, -024, -026, -037 | GLOBAL-002, -003, -010, -011, -020, -021, -023, -024, -026, -037 | 01 |

**Ergänzungen zum Nachweisregister (01, Abschnitt A):** „ISO 9001 & ISO 14001 zertifiziert“ (Zürich), „ISO 27001 zertifiziert“ (Zug), „Über 500 zufriedene Kunden in Zürich“, „EU Ecolabel“ (Zürich), „Mehrsprachiges Team (DE, EN, FR, IT)“, „Mitarbeiter geprüft, Vertraulichkeitsvereinbarungen“ (Zug), „Spezialisiert auf Hotellerie & Gastronomie“, „innerhalb von 24 Stunden reagieren“ (Luzern), Preisangaben (Zürich).

## 4. Konkrete redaktionelle und technische Vorgaben

Grundlage sind nur die Eigenangaben des Kunden (N014): Arbeitsgebiet Kanton Luzern und Kanton Zug, kostenlose Offerte vor Ort, dazu die Adresse aus dem Impressum (Emmenbrücke, Kanton Luzern). Alles gilt nach Bestätigung von R4 (Region) und R7 (Sitz).

**Empfohlene Struktur (Entscheidung R4):** Eine Übersichtsseite „Einzugsgebiet“ ersetzt die drei Stadtseiten. Eigene Seiten für Luzern und Zug nur, wenn der Kunde echten lokalen Inhalt liefert: Ansprechperson, bediente Gemeinden, echte Referenzen, lokale Besonderheiten wie Winterdienst-Touren. Ohne solchen Inhalt wären es Varianten derselben Seite [S33]. Die Zürich-Seite entfällt, solange Zürich nicht bedient wird.

- **Meta-Title soll lauten:** „Einzugsgebiet Luzern und Zug | BGS Gebäudeservice“. Begründung: beantwortet die Frage „Wo?“ direkt, reale Region, konkurriert nicht mit den Leistungsseiten.
- **Meta-Description soll lauten:** „BGS Gebäudeservice reinigt und betreut Liegenschaften in den Kantonen Luzern und Zug. Sehen Sie, wo wir tätig sind, und fordern Sie für Ihr Objekt eine kostenlose Offerte vor Ort an.“
- **URL-Slug:** Neue Übersicht `/einzugsgebiet`. Der Begriff „Standorte“ entfällt, weil nur ein Sitz belegt ist. Weiterleitungen per 308: `/standorte/luzern` und `/standorte/zug` → `/einzugsgebiet` (oder auf eigene Stadtseiten `/einzugsgebiet/luzern` und `/einzugsgebiet/zug`, falls lokaler Inhalt kommt), `/standorte/zuerich` → `/einzugsgebiet`. Das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Unser Einzugsgebiet: Kantone Luzern und Zug“
- **Abschnittsfolge:**
  1. Einstieg (2 Sätze): wo BGS tätig ist, Sitz in Emmenbrücke (nach R7).
  2. Gebiet: Liste der bedienten Gemeinden, gruppiert nach Kanton Luzern und Kanton Zug, nur nach Bestätigung. Optional eine selbst erstellte, statische Übersichtskarte (SVG) ohne Drittanbieter.
  3. Leistungen im Gebiet: Welche Leistungen überall verfügbar sind und wo es Einschränkungen gibt, z. B. beim Winterdienst. Nur wenn der Kunde Einschränkungen nennt, sonst ein Satz „Alle Leistungen bieten wir im ganzen Einzugsgebiet an“, ebenfalls nur nach Bestätigung.
  4. Ausserhalb des Gebiets: „Ihr Objekt liegt ausserhalb? Fragen Sie trotzdem an. Wir sagen Ihnen offen, ob wir den Auftrag übernehmen können.“
  5. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“ mit dem Formular.
- **Zu streichende oder zu ersetzende Passagen:**
  - **Zürich (ganze Seite):** entfällt bis zur Bestätigung durch R4. Mindestens diese Aussagen dürfen nirgends mehr erscheinen: „Ihre erste Wahl für Gebäudereinigung und Facility Management in der größten Stadt der Schweiz. Seit Jahren vertrauen Unternehmen in Zürich auf unsere Expertise.“, „Über 500 zufriedene Kunden in Zürich“, „ISO 9001 & ISO 14001 zertifiziert“ (das Impressum nennt die ISO-Zertifizierung „in Bearbeitung“), „24/7 Notfall-Service verfügbar“, „In Zürich liegen die Preise für Büroreinigung typischerweise zwischen CHF 8-12 pro m² monatlich. Für Unterhaltsreinigung berechnen wir CHF 45-65 pro Stunde.“ (SEITE-P09-001), „Exklusive Reinigung für Privatjets am Flughafen Zürich“, „Spezialisierte Reinigung für Luxus-Yachten am Zürichsee“, „mit EU Ecolabel oder vergleichbaren Zertifizierungen“.
  - **Zug:** H1 „Reinigungsfirma in Zug für höchste Ansprüche“ und „Qualität und Diskretion garantiert.“ → „Reinigung und Hauswartung im Kanton Zug“. „Als führende Reinigungsfirma in Zug“ → streichen (unbelegt). „Zudem sind wir ISO 27001 (Informationssicherheit) zertifiziert.“ → streichen (unbelegt, eine Informationssicherheitszertifizierung ist für eine Reinigungsfirma zudem ungewöhnlich). „Mehrsprachiges Team (DE, EN, FR, IT)“, „Alle unsere Mitarbeiter sind sorgfältig geprüft und unterzeichnen Vertraulichkeitsvereinbarungen“, „Compliance mit internationalen Standards“, „Hochhausreinigung mit Spezialtechnik“, „Premium-Reinigung für Villen am Zugersee“ → nur mit Bestätigung, sonst streichen.
  - **Luzern:** „Spezialisiert auf Hotellerie, Gastronomie und Gewerbe in Luzern und Umgebung“ → „Reinigung und Hauswartung in Luzern und Umgebung“, solange die Spezialisierung nicht bestätigt ist (R3, R10). „Lokales Team aus Luzern“, „Faire Preise bei hoher Qualität“, „können in der Regel innerhalb von 24 Stunden reagieren“ → nur mit Bestätigung. Reiterkarten „Hotelreinigung“, „Restaurant-Reinigung“, „Event-Reinigung“, „Wellness-Bereiche“, „Konferenzräume“, „Praxisreinigung“, „Ladenreinigung“ → streichen (keine Seiten, nicht bestätigt). „Privatjet-Service“, „Yacht Reinigung“, „Luxusimmobilien“, „Private Housekeeping“ nur, wenn R3 die Premium-Leistungen bestätigt.
  - **Alle drei:** `info@swiss-reinigung.ch` → die bestätigte Adresse nach R5 (heute `info@bgs-service.ch` auf Kontakt und Impressum). „Erreichbarkeit Mo-Fr 7:00-18:00“ → die bestätigte Erreichbarkeit nach R5. Sie darf keiner 24/7-Aussage widersprechen.
- **Bilder:** Stadtansichten als Hintergrund (`zurich-city.jpg`, `zug-city.jpg`, `luzern-city.jpg`, je 1536×1024, 310–340 KB) sind Dekoration ohne Informationswert. Auf der Übersicht weglassen oder durch eine selbst erstellte Gebietskarte (SVG, unter 30 KB, `alt` mit Textalternative „Karte: Einzugsgebiet Kantone Luzern und Zug“) ersetzen. `team-at-work.jpg` (KI-typisches „Team“, Alt „Reinigung Luzern“) nicht weiterverwenden (GLOBAL-023). Echte Objektfotos aus der Region nur mit Freigabe, AVIF/WebP, `loading="lazy"`.
- **Strukturierte Daten:** Keine `LocalBusiness`-Einträge je Stadt, weil es keine Niederlassungen gibt. Die globale `Organization` (siehe P01) trägt `areaServed` mit zwei `AdministrativeArea`-Einträgen „Kanton Luzern“ und „Kanton Zug“ und die Adresse des Sitzes nach R7. Auf der Übersicht nur `BreadcrumbList` „Start › Einzugsgebiet“ [S14].
- **Linkempfehlungen:**
  - Von der Startseite (Abschnitt Einzugsgebiet) auf `/einzugsgebiet` mit dem Linktext „Einzugsgebiet ansehen“.
  - Hauptmenü: Punkt „Einzugsgebiet“ statt Dropdown „Standorte“.
  - Von `/kontakt` auf `/einzugsgebiet` mit dem Linktext „Wo wir tätig sind“.
  - Von der Übersicht auf `/leistungen` (P02) mit dem Linktext „Unsere Leistungen im Überblick“ und auf die Detailseiten mit den Leistungsnamen, ohne Ortsnamen im Linktext.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Region (GLOBAL-021, R4), defekte Links (GLOBAL-016), geparkte E-Mail-Adresse (GLOBAL-020), versteckte Inhalte (GLOBAL-011) und KI-Bilder (GLOBAL-023) stehen im globalen Register. Seitenspezifisch:

### SEITE-P09-001 · Die Zürich-Seite nennt Preise als eigenes Angebot, ohne dass sie bestätigt sind

- **Ist-Zustand:** FAQ „Was kostet professionelle Reinigung in Zürich?“: „In Zürich liegen die Preise für Büroreinigung typischerweise zwischen CHF 8-12 pro m² monatlich. Für Unterhaltsreinigung berechnen wir CHF 45-65 pro Stunde.“ Dieselben Zahlen stehen ohne Quelle im Blogartikel zu Reinigungskosten (GLOBAL-031). Der Kunde selbst verspricht eine Offerte nach Besichtigung (N014).
- **Auswirkung:** „Berechnen wir“ liest sich als verbindliche Preisangabe. Weichen die echten Preise ab, entstehen falsche Erwartungen und Streit in der Offertphase. Die Zahlen widersprechen zudem der eigenen Angebotslogik (Preis erst nach Besichtigung).
- **Priorität:** P1 · **Launch-Blocker:** ja, bis bestätigt oder gestrichen
- **Vorgabe:** Streichen. Wenn der Kunde Preisrahmen nennen will, dann auf der passenden Leistungsseite, mit Stand, Bedingungen und Freigabe (R6).
- **Abnahme:** Keine Preisangabe auf der Website ohne dokumentierte Freigabe des Kunden mit Datum.
- **Evidenz:** Inhaltsbefund N027, Code `app/standorte/zuerich/page.tsx:186`. **Quelle:** S02

### SEITE-P09-002 · Die Stadtseiten sind Varianten einer Vorlage mit erfundenen Spezialisierungen und Leistungen

- **Ist-Zustand:** Gleicher Aufbau, gleiche Kontaktdaten, keine lokale Ansprechperson. Jede Stadt erhält eine eigene, unbelegte Spezialisierung (Zürich: „von Banken über Tech-Unternehmen bis hin zu Hotels“, Zug: „internationale Unternehmen“, Luzern: „Hotellerie & Gastronomie“). Die Reiter nennen 10 Leistungen, die es als Seite nicht gibt und die der Kunde nicht angibt (Zug 3, Luzern 7, siehe Prüfliste). In Zug und Luzern ist keine Leistungskarte verlinkt, in Zürich führen 7 von 17 Links auf 404.
- **Auswirkung:** Besucher bekommen je nach Einstieg ein anderes Bild vom Unternehmen. Suchmaschinen sehen austauschbare Ortsvarianten ohne eigenen Nutzen, ein Muster, das Google als Doorway-Seiten einordnen kann [S33]. Wer aus Luzern eine Hotelreinigung anfragt, fragt etwas an, das vermutlich nicht angeboten wird.
- **Priorität:** P1 · **Launch-Blocker:** nein (die unbelegten Einzelaussagen sind über GLOBAL-021 Blocker)
- **Vorgabe:** Struktur nach Abschnitt 4. Eine Übersicht, Stadtseiten nur mit echtem lokalem Inhalt, Leistungen nur aus der bestätigten Liste (R3) und immer verlinkt.
- **Abnahme:** Jede verbleibende Ortsseite enthält mindestens einen lokalen Inhalt, den keine andere Seite hat (z. B. Ansprechperson, Gemeindeliste, echte Referenz). Keine Leistung wird genannt, die nicht auf einer eigenen Seite oder der Übersicht beschrieben ist.
- **Evidenz:** Inhaltsbefund N027, N023, Codebefund. **Quelle:** S02, S33

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über SEITE-P09-001 (Preise) sowie GLOBAL-002, -003, -010, -016 (Zürich), -020 (E-Mail), -021 (Region, ISO, Kundenzahl), -023.

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S07, S08, S09, S14, S17, S33).
