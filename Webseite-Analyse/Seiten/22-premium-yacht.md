# Seitenanalyse: Zusätzliche Leistungsseite · Yacht Reinigung

**Seiten-ID: P22 (Inventar U08)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/premium/yacht` · **Codepfad:** `app/premium/yacht/page.tsx` (327 Zeilen) · **Stand:** `d7e1122`

**Zuordnung:** Zusätzlicher Bericht für eine vorhandene URL (E09). Leistungsstatus: in der Eigenangabe des Kunden (N014) nicht genannt → R3.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen.

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite bietet eine Leistung an, die in der Eigenangabe des Kunden nicht vorkommt. Sie verspricht Einsätze vom Vierwaldstättersee über den Zürichsee bis zu „Mittelmeerhäfen“, Yachten „von 8-Meter-Segelbooten bis zu 50-Meter-Superyachten“, „zugelassene“ gewässerschonende Reinigungsmittel und im Paket „VIP“ einen „24/7 Notfall-Service“, alles ohne Beleg. Diese Aussagen stehen überwiegend in Reitern und FAQ-Antworten, die nicht im ausgelieferten HTML stehen (GLOBAL-011): Nur der erste Reiter ist im HTML. Die automatische Textprobe im Faktenblatt hatte alle drei Reiter fälschlich als vorhanden gemeldet (gleiche Probe für alle drei), der manuelle Abgleich mit dem HTML aus N007 widerlegt das; N023 ist in Phase 6 entsprechend zu prüfen. Umfang: 168 sichtbare Wörter, weitere 174 in Reitern. Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002). Solange R3 die Leistung nicht bestätigt, gilt für den Launch Pfad (b) in Abschnitt 4: Seite entfernen.

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: `/premium/yacht` (U08), zusätzlicher Bericht P22 (E09). Ob die Leistung angeboten wird, ist offen (R3).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite spricht „Luxus-Yachten“ an, reale Angaben fehlen (R3, R10). Kaufanlässe wie Saisonstart, Pflege während der Saison und Saisonende werden nur im dritten Reiter angedeutet. HYPOTHESE: Bootseigner mit Liegeplatz an Vierwaldstätter- oder Zugersee.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: zwölf Stichworte im ersten Reiter, vier Materialabschnitte im zweiten (nicht im HTML), keine Grenzen (GLOBAL-036). Bei „Rumpfreinigung & Politur“ und „Algen- & Bewuchs-Entfernung“ fehlt, wo gearbeitet wird (im Wasser, an Land, Waschplatz) und welche Auflagen gelten. Das ist fachlich zu klären (R3).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *Keine inhaltliche Überschneidung mit den Kernleistungen laut Eigenangabe. BEFUND: Die FAQ-Frage „Bieten Sie auch Winterservice an?“ ist mit dem Winterdienst (Schneeräumung, P06) verwechselbar. Gleiche Schablone wie die Privatjet-Seite (P21).*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt. Die einzige Eignungsangabe „8 bis 50 Meter“ ist unbelegt (SEITE-P22-002).*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Es gibt keinen Ablauf ab Anfrage. Der Reiter „Wartungsservice“ zeigt drei Pakete ohne unterscheidbaren Preis- oder Leistungsinhalt (SEITE-P22-003). Keine Kostenfaktoren.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine Belege. „Marine-Expertise – Spezialisiert auf Yachten“ und die Umweltaussagen sind unbelegt (SEITE-P22-002, GLOBAL-021). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: ein KI-typisches Hero-Motiv (`premium-yacht.jpg`, 1536×1024): Person in weißem Polo poliert die Bordwand einer großen Motoryacht auf offenem Meer mit Küstenlinie, also kein Schweizer See. Eine sehr ähnliche männliche Figur erscheint auf den Seiten Privatjet und Luxusimmobilien (Einschätzung, GLOBAL-023). Keine Ablaufgrafik.*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: vier sinnvolle Fragen (Größen, Einsatzorte, Reinigungsmittel, Winter). Die Antworten sind nicht im HTML (GLOBAL-011) und enthalten unbelegte Zusagen (SEITE-P22-001, -002). Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular ohne Vorbelegung. Die Option „Yacht Reinigung“ steht in einer Auswahl mit Dubletten (GLOBAL-028).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: Zürichsee (Kantone ZH, SZ, SG) und „Mittelmeerhäfen“ (Ausland). Auch Vierwaldstätter- und Zugersee grenzen an weitere Kantone. Die Zürich-Seite ergänzt „Luxus-Yachten am Zürichsee“ (SEITE-P22-001, R4).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe durch die Geschäftsführung des Kunden (R12). Umwelt- und Zulassungsaussagen nur mit Produktdatenblättern.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/premium/yacht`, 200 | Pfad (a): beibehalten. Pfad (b): 410 (Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | Eigner von „Luxus-Yachten“. Intent: Reinigungsdienst für das eigene Boot am Liegeplatz finden (transaktional, lokal, saisonal) | Erst R3, dann Zielgruppe und Einsatzorte bestätigen (R4, R10) | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten). Der hinterlegte, nicht ausgegebene Titel lautet „Yacht Reinigung - Professioneller Marine Service“ | Pfad (a): siehe Vorgabe unten. Pfad (b): entfällt | N007, N015, GLOBAL-009, -010 |
| Meta-Description | Globale Standardbeschreibung. Hinterlegt, nicht ausgegeben: „Spezialisierte Yacht Reinigung in der Schweiz. Marine-Expertise, Hochglanzpolitur und Teakholz-Pflege für Luxus-Yachten.“ | Pfad (a): siehe Vorgabe unten | N007, N015 |
| H1 und Abschnittsstruktur | Badge „Premium Service“, H1 „Yacht Reinigung“. Danach H3 „Umfassende Yacht Reinigung“ (im Reiter), H2 „Häufig gestellte Fragen“ mit vier H3-Fragen, H2 „Ihre Yacht verdient das Beste“. Der Cookie-Banner bringt ein H3 vor die H1 | Pfad (a): siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap (`public/sitemap.xml:19`, `lastmod` 2025-01-02) | Pfad (a): selbstreferenzierendes Canonical auf die Launch-Domain. Pfad (b): Sitemap-Eintrag entfernen | N007, N008 |
| Wichtigste Textpassagen | „Spezialisierte Reinigung für Luxus-Yachten mit Marine-Expertise. Von der Hochglanzpolitur bis zur Teakholz-Pflege – wir sorgen für makellose Sauberkeit auf höchstem Niveau.“ Merkmalskarten „Marine-Expertise – Spezialisiert auf Yachten“, „Materialschutz – Schonende Behandlung“, „Hochglanzpolitur – Perfekter Glanz“, „Komplettservice – Innen & Außen“ | Nur belegte Aussagen (Abschnitt 4) | N027, Code Z. 50, 80-99 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt). Abschluss „Jetzt Kontakt aufnehmen“ → Formular | Pfad (a): eine primäre CTA „Kostenlose Offerte anfragen“ mit vorbelegter Leistung | N020, GLOBAL-002, -034 |
| Bildmotive und Alt-Texte | 1 Hero-Bild `premium-yacht.jpg` (170 KB, KI-typisch nach Einschätzung, Meereskulisse), Alt „Luxuriöse Yacht“, 1536×1024 geliefert, 666×517 dargestellt (mobil 354×543) | Pfad (a): echtes Foto aus dem Einsatzgebiet, Alt nach Inhalt. Pfad (b): Datei entfernen | N029, Sichtprüfung |
| Interne Links | Keine Kontextlinks. Eingehend: Navigation und Footer auf allen Seiten. Der Link von `/standorte/zuerich` zielt auf `/premium/yachtreinigung` (404). Zug („Yacht-Service“) und Luzern („Yacht Reinigung“) nennen die Leistung ohne Link | Siehe Linkempfehlungen bzw. Entfernungsliste | N009, N024, GLOBAL-016 |
| Schema-Typen | keine. Das vorbereitete `serviceSchema` (`category: "Marine Cleaning"`) wird nicht ausgegeben | Pfad (a): `Service` nach Bestätigung | N007, N015 |
| Mobile/Desktop/Accessibility | Kein Overflow. axe: 6 Kontrastverstöße, 25 zu kleine Klickziele | Siehe GLOBAL-026 | N031 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 83 Anfragen (Desktop, dekodiert). LCP-Element im Browser-Test: das Hero-Bild | Budgets aus Abschnitt I | N020 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -016, -020, -021, -023, -024, -026, -028, -030, -033, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Ob die Seite bleibt, entscheidet die Antwort auf R3. Bis zu einer schriftlichen Bestätigung gilt für den Launch **Pfad (b)**, weil eine unbestätigte Leistung eine unfreigegebene Behauptung ist (G09, GLOBAL-021).

**Pfad (a): Die Leistung wird durch R3 bestätigt.** Die Vorschläge nutzen nur Fakten aus der Eigenangabe des Kunden (N014: BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, „kostenlose und unverbindliche Offerte vor Ort“) und die bestätigte Leistung. Sie gelten, sobald R2 (Marke), R3 (Leistung) und R4 (Einsatzorte) beantwortet sind.

- **Meta-Title soll lauten:** „Boots- und Yachtreinigung in Luzern und Zug | BGS Gebäudeservice“. Begründung: reale Region, Marke zur Wiedererkennung. „Boot“ ist auf Schweizer Seen vermutlich der häufigere Suchbegriff als „Yacht“ (HYPOTHESE, in Phase 4 mit Suchdaten prüfen).
- **Meta-Description soll lauten:** „BGS Gebäudeservice reinigt Boote und Yachten in den Kantonen Luzern und Zug. Umfang, Ort und Termin stimmen wir mit Ihnen ab – die Offerte ist kostenlos und unverbindlich.“ Nur belegte Aussagen.
- **URL-Slug:** Slug `yacht` beibehalten. Eine Umbenennung (z. B. auf `bootsreinigung`) nur zusammen mit einer neuen Informationsarchitektur (GLOBAL-033), dann per 308 und mit Mapping in 02 [S07].
- **H1-Vorschlag:** „Boots- und Yachtreinigung in Luzern und Zug“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht: wann Eigner die Reinigung brauchen (Saisonstart, während der Saison, Saisonende), in 2–3 Sätzen, nach R10.
  2. Leistungsumfang innen und außen als sichtbare Liste, dazu „Nicht enthalten“: technische Wartung, Arbeiten unter Wasser, Antifouling (vom Kunden festzulegen).
  3. Einsatzorte: nur bestätigte Seen bzw. Liegeplätze und wo gearbeitet wird (Liegeplatz, Waschplatz, Winterlager).
  4. Materialien: Teak, GFK, Edelstahl, Polster, nur mit bestätigtem Verfahren und klaren Grenzen.
  5. Ablauf ab Anfrage: Anfrage → Besichtigung am Liegeplatz → kostenlose Offerte (belegt) → Reinigung → gemeinsame Abnahme. Nur Schritte, die der Kunde bestätigt.
  6. Beleg: eine echte, freigegebene Referenz (R6), ohne Bootsnamen und Kennzeichen, sofern der Eigner nichts anderes freigibt.
  7. FAQ mit sichtbaren Antworten, mindestens die vier bestehenden Fragen, beantwortet vom Kunden.
  8. Abschluss-CTA „Kostenlose Offerte anfragen“, das Formular mit vorausgewählter Leistung.
- **Zu streichende oder zu ersetzende Passagen:**
  - „Spezialisierte Reinigung für Luxus-Yachten mit Marine-Expertise. Von der Hochglanzpolitur bis zur Teakholz-Pflege – wir sorgen für makellose Sauberkeit auf höchstem Niveau.“ (Z. 50) → „BGS Gebäudeservice reinigt Boote und Yachten in den Kantonen Luzern und Zug. Umfang und Ort legen wir gemeinsam mit Ihnen fest.“ Grund: „Marine-Expertise“ und „auf höchstem Niveau“ sind unbelegt.
  - Merkmalskarten „Marine-Expertise – Spezialisiert auf Yachten“, „Materialschutz – Schonende Behandlung“, „Hochglanzpolitur – Perfekter Glanz“, „Komplettservice – Innen & Außen“ (Z. 80-99) → streichen oder durch bestätigte Fakten ersetzen (z. B. Einsatzorte, Saison, feste Ansprechperson). Grund: austauschbare Schlagworte ohne Beleg (GLOBAL-030).
  - FAQ-Antwort „Wir reinigen Yachten aller Größen – von 8-Meter-Segelbooten bis zu 50-Meter-Superyachten. …“ (Z. 268) → „Welche Bootsgrössen wir übernehmen, klären wir bei der Besichtigung.“ oder eine vom Kunden bestätigte Grenze. Grund: SEITE-P22-002.
  - FAQ-Antwort „Primär am Vierwaldstättersee, Zürichsee und Zugersee. Auf Anfrage auch an anderen Schweizer Seen und Mittelmeerhäfen während der Saison.“ (Z. 277) → „Wir arbeiten an Liegeplätzen in den Kantonen Luzern und Zug.“, nur in dieser Form, wenn R4 das bestätigt. Grund: SEITE-P22-001.
  - FAQ-Antwort „Ja, wir setzen ausschließlich biologisch abbaubare, gewässerschonende Reinigungsmittel ein, die speziell für den maritimen Einsatz zugelassen sind.“ (Z. 286) → nur mit Produktliste und Datenblättern, sonst streichen. Grund: überprüfbare Umwelt- und Zulassungsaussage.
  - FAQ „Bieten Sie auch Winterservice an?“ mit „Ja, wir übernehmen die Einwinterung inklusive Reinigung, Abdeckung und regelmäßiger Kontrolle während der Wintermonate.“ (Z. 292-295) → Frage „Reinigen Sie Boote vor dem Winterlager?“, Antwort nur mit dem bestätigten Umfang. Abdeckung und Kontrolle nur, wenn angeboten. Grund: Verwechslung mit dem Winterdienst, Umfang unbelegt.
  - Reiter „Wartungsservice“ mit „Halten Sie Ihre Yacht in perfektem Zustand mit unseren maßgeschneiderten Wartungspaketen:“ und den Paketen „Basic“, „Premium“, „VIP“ (Z. 184-258) → Abschnitt „Regelmässige Reinigung während der Saison“ mit den bestätigten Rhythmen und dem Satz „Umfang und Preis legen wir nach der Besichtigung fest. Die Offerte ist kostenlos und unverbindlich.“ „24/7 Notfall-Service“ streichen. Grund: SEITE-P22-003.
  - Abschluss „Ihre Yacht verdient das Beste“ (Z. 306) → „Boots- oder Yachtreinigung anfragen“. Grund: Die CTA soll sagen, was passiert (GLOBAL-034).
  - Schreibweisen „Außenreinigung“, „Größen“, „Regelmäßiger“, „maßgeschneiderten“, „ausschließlich“ → „Aussenreinigung“, „Grössen“, „Regelmässiger“, „massgeschneiderten“, „ausschliesslich“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto an einem bestätigten Einsatzort (Schweizer See, kein Meer), ohne erkennbaren Bootsnamen oder Kennzeichen, mit Einwilligung von Eigner und abgebildeten Mitarbeitenden. Sonst ein neutrales Detailfoto (z. B. Teakdeck) ohne Personen, nicht als BGS-Einsatz beschriftet. AVIF/WebP mit `sizes` (mobil ca. 355–390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. Alt-Text nach Inhalt, z. B. „Reinigung eines Teakdecks am Liegeplatz“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Boots- und Yachtreinigung“, `serviceType` „Bootsreinigung“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Kein `offers` ohne Preisgrundlage. `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13].
- **Linkempfehlungen:**
  - Von der künftigen Seite „Alle Leistungen“ hierher mit dem Linktext „Boots- und Yachtreinigung“.
  - Von den Standortseiten Luzern und Zug nur, wenn die Leistung dort bestätigt ist, mit dem Linktext „Boots- und Yachtreinigung ansehen“. Den Eintrag „Luxus-Yachten am Zürichsee“ auf `/standorte/zuerich` entfernen, solange Zürich nicht bestätigt ist (R4, GLOBAL-016).
  - Nicht auf `/basis/winterdienst` verlinken. Die Einwinterung von Booten ist eine andere Leistung als die Schneeräumung.

**Pfad (b): Die Leistung wird nicht bestätigt (Launch-Vorgabe bis zur Antwort).**

- **Statuscode:** `/premium/yacht` antwortet mit 410 (dauerhaft entfernt). Keine Weiterleitung: Keine bestätigte Seite erfüllt dieselbe Nutzeraufgabe (Bootsreinigung). Eine Weiterleitung auf eine Gebäudeleistung oder auf die Startseite würde die Suchabsicht verfehlen [S07]. Laut Runtime-Logs gibt es praktisch keinen Besucherverkehr (N012), Suchdaten fehlen (B11).
- **Entfernen aus:**
  - Navigation: `client/src/components/SwissNavigation.tsx:23` (Array `premiumServices`, speist das Mega-Menü Z. 86 und das mobile Menü Z. 180).
  - Footer-Spalte „Premium Services“: `client/src/components/SwissFooter.tsx:298`.
  - Formularauswahl: Option „Yacht Reinigung“, `SwissFooter.tsx:145`.
  - Sitemap: `public/sitemap.xml:19` (Eintrag Z. 18-23).
  - Startseiten-Kategorie „Premium Services“: `app/page.tsx:226` („Privatjets, Yachten, …“) und Z. 229 (Listeneintrag „Yacht Reinigung“). Entfallen alle vier Premium-Leistungen, entfällt die ganze Karte (Z. 219-246, SEITE-P01-001).
  - Standortseiten: `app/standorte/zuerich/page.tsx:123` (Karte mit defektem Link, GLOBAL-016), `app/standorte/zug/page.tsx:143` („Yacht-Service“), `app/standorte/luzern/page.tsx:156` („Yacht Reinigung“).
  - KI-Chat-Katalog: `server/gemini.ts:75-79` und der Code „YC“ in Z. 685 (sofern der Chat bleibt, R8).
  - Bilddatei `public/premium-yacht.jpg` und die Kopie in `client/public/` (GLOBAL-008, -024).
- **Alt-neu-Mapping (in 02 eintragen, G10):**

| Bisherige URL | Neues Ziel | Status | Begründung |
|---|---|---|---|
| `/premium/yacht` | — | 410 | Leistung nicht bestätigt, keine fachlich passende Zielseite |
| `/premium/yachtreinigung` (nur defektes Linkziel, nie eine Seite) | — | 404 bleibt, der Link entfällt | GLOBAL-016 |

  Das Mapping gilt auf der Vorab-Adresse und nach dem Launch auf der eigenen Domain (GLOBAL-018).
- **Prüfung nach Umsetzung:** `/premium/yacht` antwortet mit 410. Ein Linkprüfer über alle Seiten einschließlich aller Reiter findet keinen Link dorthin. Die Volltextsuche findet „Yacht“ weder in Navigation, Footer, Formular, Startseite, Standortseiten noch im Chat-Katalog. Die Sitemap enthält die URL nicht.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register (unbestätigte Leistung: GLOBAL-021, R3). Seitenspezifisch:

### SEITE-P22-001 · Einsatzgebiet bis Zürichsee und Mittelmeer, das Hero-Bild zeigt offenes Meer

- **Ist-Zustand:** FAQ „Wo bieten Sie Yacht Reinigung an?“: „Primär am Vierwaldstättersee, Zürichsee und Zugersee. Auf Anfrage auch an anderen Schweizer Seen und Mittelmeerhäfen während der Saison.“ (Z. 277). Die Zürich-Seite ergänzt „Spezialisierte Reinigung für Luxus-Yachten am Zürichsee“ (`app/standorte/zuerich/page.tsx:123`). Die Eigenangabe nennt nur die Kantone Luzern und Zug (N014). Der Zürichsee liegt außerhalb, „Mittelmeerhäfen“ liegen im Ausland. Das Hero-Bild zeigt eine große Motoryacht auf offenem Meer mit Küstenlinie (Einschätzung), also kein Schweizer Einsatzumfeld. Damit lädt die Seite geradezu Anfragen ein, die der Kunde nach eigener Angabe nicht bedient.
- **Priorität:** P1 · **Launch-Blocker:** ja (G09, ergänzt GLOBAL-021 um diese Fundstellen)
- **Vorgabe:** Pfad (a): nur die nach R4 bestätigten Seen bzw. Liegeplätze nennen, als eine Liste an einer Stelle. Zürichsee und Mittelmeer streichen, solange sie nicht bestätigt sind. Hero-Bild aus dem tatsächlichen Einsatzgebiet. Pfad (b): entfällt mit der Seite, den Eintrag auf der Zürich-Seite ebenfalls entfernen. Nachtrag für das Nachweisregister (01, Abschnitt A).
- **Abnahme:** Die Volltextsuche über die Seite (einschließlich Reiter und FAQ) und über die Standortseiten findet keine Orts- oder Gewässerangabe ohne Bestätigung. Das Medieninventar belegt für das Hero-Bild einen bestätigten Einsatzort.
- **Evidenz:** Codebefund `app/premium/yacht/page.tsx:277`, `app/standorte/zuerich/page.tsx:123`, Eigenangabe N014, Sichtprüfung des Bildes (Einschätzung). **Quelle:** S02, S16

### SEITE-P22-002 · Größen-, Umwelt- und Zulassungsversprechen ohne Beleg

- **Ist-Zustand:** „Wir reinigen Yachten aller Größen – von 8-Meter-Segelbooten bis zu 50-Meter-Superyachten.“ (Z. 268). „Ja, wir setzen ausschließlich biologisch abbaubare, gewässerschonende Reinigungsmittel ein, die speziell für den maritimen Einsatz zugelassen sind.“ (Z. 286). „Ja, wir übernehmen die Einwinterung inklusive Reinigung, Abdeckung und regelmäßiger Kontrolle während der Wintermonate.“ (Z. 295). Merkmalskarte „Marine-Expertise – Spezialisiert auf Yachten“ (Z. 82-83), Paket „VIP“ mit „24/7 Notfall-Service“ (Z. 248). Umweltaussagen („biologisch abbaubar“, „gewässerschonend“, „zugelassen“) sind überprüfbare Tatsachenbehauptungen, welche Zulassung gemeint ist, bleibt offen. „Abdeckung und regelmäßige Kontrolle“ sind keine Reinigungsleistungen. Werden diese Zusagen nicht erfüllt, entstehen Haftungs- und Vertrauensrisiken, gerade bei Arbeiten am oder im Gewässer.
- **Priorität:** P1 · **Launch-Blocker:** ja (G09)
- **Vorgabe:** Streichen. In Pfad (a) nur mit Nachweis wieder aufnehmen: Produktliste mit Datenblättern (für Umwelt- und Zulassungsaussagen), bestätigte Bootsgrößen, bestätigter Umfang der Winterleistung, Bereitschaftsregelung für einen Notfalldienst. Fachlich klären, ob und wo Rumpf- und Bewuchsreinigung zulässig ist (Liegeplatz, Waschplatz, an Land). Nachtrag für das Nachweisregister („24/7“ ist hier eine weitere Fundstelle).
- **Abnahme:** Für jede Größen-, Umwelt- und Leistungsaussage liegt ein Beleg vor. Ohne Beleg ist sie nicht mehr im Text (Volltextsuche nach „zugelassen“, „biologisch“, „24/7“, „Meter“).
- **Evidenz:** Codebefund `app/premium/yacht/page.tsx:82-83, 122, 248, 268, 286, 295`. **Quelle:** S02

### SEITE-P22-003 · Reiter „Wartungsservice“ verspricht Wartung und zeigt Pakete ohne Inhalt

- **Ist-Zustand:** Der Reiter „Wartungsservice“ beginnt mit „Regelmäßiger Wartungsservice“ und „Halten Sie Ihre Yacht in perfektem Zustand mit unseren maßgeschneiderten Wartungspaketen:“ (Z. 186-188). Die Pakete „Basic“ und „Premium“ heißen beide „Individuelles Angebot – Auf Ihre Bedürfnisse zugeschnitten“, „VIP“ heißt „Individuell – auf Anfrage“ (Z. 192-254). Aufgezählt werden nur Reinigungsarbeiten. „Wartung“ wird bei Booten gewöhnlich als technische Instandhaltung verstanden (HYPOTHESE), die eine Reinigungsfirma nach eigener Angabe nicht anbietet. Der Reiter steht nicht im ausgelieferten HTML.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Pfad (a): den Reiter in einen sichtbaren Abschnitt „Regelmässige Reinigung während der Saison“ umwandeln, mit den bestätigten Rhythmen (z. B. monatlich) und ohne Paketkarten ohne Inhalt (Ersatztext in Abschnitt 4). Pfad (b): entfällt mit der Seite.
- **Abnahme:** Das Wort „Wartung“ kommt nur vor, wenn technische Wartung bestätigt ist. Keine Paketkarte ohne unterscheidbaren Inhalt. Der Text steht im ausgelieferten HTML.
- **Evidenz:** Codebefund `app/premium/yacht/page.tsx:184-258`, Textproben-Abgleich mit dem HTML aus N007. **Quelle:** S02

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] R3 entschieden und der gewählte Pfad vollständig umgesetzt: (a) mit Belegen für jede Aussage oder (b) mit 410, Entfernungsliste und Mapping.
- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker seitenspezifisch: SEITE-P22-001, -002 und die offene Entscheidung R3 (G09). Global über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -016 (defekter Zuführungslink, entfällt mit Pfad b), -020 (Identität), -021 (unbelegte Leistung und Region), -023 (Bild).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S07, S08, S09, S10, S11, S12, S13, S16, S17).
