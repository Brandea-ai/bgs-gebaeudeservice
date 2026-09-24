# Seitenanalyse: Homepage

**Seiten-ID: P01 (Inventar U01)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/` · **Codepfad:** `app/page.tsx` (459 Zeilen) · **Stand:** `d7e1122`

## 1. Aufgabe dieser Seite

Unternehmen, Gesamtangebot und Eignung verständlich machen; zur passenden Leistung oder einer realistischen Anfrage führen.

**Abgrenzung:** Homepage nicht zum Volltext-Sammelbecken aller fünf Leistungen machen. Unternehmens- und Orientierungsintention priorisieren.

**Primäre Zielhandlung:** Passende Leistung ansehen oder unverbindlichen Kontakt aufnehmen, sofern dieser Ablauf tatsächlich angeboten wird.

**Ergebnis der Prüfung:** Die Startseite orientiert grob (drei Leistungskategorien, drei Standorte, Formular), stellt aber unbestätigte Premium-Leistungen und unbelegte Kennzahlen in den Vordergrund. Auf Mobilgeräten zeigt die erste Ansicht beim Laden weder Überschrift noch Handlungsaufforderung (GLOBAL-012).

## 2. Seitenspezifische Prüfliste

- [x] Erste Ansicht darauf prüfen, ob Leistungskategorie, Zielgruppe, geografische Reichweite und nächster Schritt erkennbar sind. → *BEFUND: Desktop ja (H1, Unterzeile, 2 CTAs), aber mit falscher Reichweite („Zürich, Zug und Luzern“). Mobil beim Laden kein Text sichtbar (GLOBAL-012, N022). Zielgruppe „Unternehmen und Premium-Kunden“ unbestätigt (R10).*
- [x] Den Hauptnutzen auf bestätigte Unternehmensmerkmale stützen, nicht auf beliebige Premium-Adjektive. → *BEFUND: „Erstklassige Gebäudereinigung“, „Schweizer Präzision“ ohne Beleg, Kennzahlen-Leiste unbelegt (GLOBAL-021, -030).*
- [x] Die fünf Leistungen knapp und unterscheidbar vorstellen, ohne deren vollständige Texte zu duplizieren. → *BEFUND: Drei Kategorien mit je vier Leistungen, die Premium-Kategorie (Privatjet, Yacht) steht an erster Stelle. Die Kernleistungen laut Kunde sind nachrangig (SEITE-P01-001, R3).*
- [x] Eine logische Reihenfolge aus Einordnung, Leistungswahl, Belegen, Zusammenarbeit und nächstem Schritt beurteilen; nicht jede Sektion ist zwingend erforderlich. → *BEFUND: Reihenfolge Hero → KI-Berater → Kennzahlen → Vorher/Nachher → Leistungen → Standorte → Stimmen → CTA → Formular. Ein Abschnitt „Zusammenarbeit/Ablauf“ fehlt. Die „Belege“ sind unbelegt.*
- [x] Echte Vertrauensbelege ausreichend früh zeigen; keine Stock-/KI-Szene als realen Unternehmensnachweis behandeln. → *BEFUND: Hero-Teambild und Vorher/Nachher sind KI-typisch und werden als eigene Arbeit präsentiert („Erleben Sie die Qualität unserer Arbeit“) (GLOBAL-023).*
- [x] Full-Width-Hero, Bilder und Raster auf sinnvolle Flächennutzung und mobile Aussage prüfen. → *BESTANDEN für Flächennutzung auf Desktop bis 2560 px (Inhalt zentriert). BEFUND mobil: Die erste Ansicht zeigt nur einen Bildausschnitt (N022). Das Navigationskontrast-Problem über dem Hero-Bild betrifft GLOBAL-026 und -032.*
- [x] Navigation, globale CTA, Footer, Favicon und Metadaten auf konsistente Unternehmensidentität prüfen. → *BEFUND: Logo „SWISS REINIGUNG“, Footer „© … Swiss Reinigungsfirma“, Titel „BGS Gebäudeservice“, Favicon 404 (GLOBAL-014, -020).*
- [x] Markenintention und gegebenenfalls übergeordnetes Angebot gegen die Zuständigkeit der Leistungsseiten abgrenzen. → *Teilweise BESTANDEN: Die Startseite dupliziert keine Leistungstexte. Die Markenintention „BGS“ wird aber nicht bedient, weil der Name im Text fehlt (GLOBAL-020).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/`, 200, statisch, Cache HIT | Beibehalten | N004, N007 |
| Hauptzielgruppe und Suchintention | „Unternehmen und Premium-Kunden“. Intent: Marke/Anbieter für Gebäudereinigung in der Region | Zielgruppe mit dem Kunden bestätigen (R10). Marken- und Orientierungsintention | N027 |
| Meta-Title | „BGS Gebäudeservice - Professionelle Reinigungsdienstleistungen in der Schweiz“ (identisch auf 32 Seiten) | Siehe Vorgabe | N007, GLOBAL-010 |
| Meta-Description | „Professionelle Gebäudereinigung für Premium, Business und Basis-Services in Zürich, Zug und Luzern. …“ | Siehe Vorgabe | N007 |
| H1 und Abschnittsstruktur | H1 „Erstklassige Gebäudereinigung für Zürich, Zug und Luzern“ (im HTML mit `opacity:0`). 6 H2, zahlreiche H3. Der Cookie-Banner fügt ein H3 vor der H1 ein | Siehe Abschnittsfolge | N020, N022 |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, Sitemap ja | Canonical auf die Launch-Domain (GLOBAL-018) | N007, N008 |
| Wichtigste Textpassagen | 291 sichtbare Wörter. Kennzahlen: „ISO Standards – Zertifizierte Qualität“, „Notfall Service – 24/7 Verfügbar“, „Zufrieden – 500+ Kunden“, „Schweizweit – 15+ Jahre Erfahrung“ | Streichen oder belegen | N027 |
| Haupt-CTA und Ziel | „Kostenlose Beratung“ → Formular, „Termin vereinbaren“ → Chat (defekt), „Jetzt analysieren“ → KI-Berater (Gemini), „Kontakt aufnehmen“ (Navigation) | Eine primäre CTA | N020, GLOBAL-002, -034 |
| Bildmotive und Alt-Texte | Hero-Teambild (Hintergrund), Vorher/Nachher (`vorher-buero-schmutzig.jpg`, `nachher-buero-sauber.jpg`, Alt „Büro vor/nach der Reinigung“), drei Städtebilder (Alt „Reinigung in Zürich/Zug/Luzern“) | Echte Fotos oder weglassen, Alt-Texte nach Inhalt | N026, N029 |
| Interne Links | Navigation/Footer auf alle Kernseiten, Kategorie-Karten „Mehr erfahren“, Standort-Karten | Linktexte mit Ziel (GLOBAL-034) | N009 |
| Schema-Typen | keine | `Organization` (sachlich passender Unternehmenstyp) global, `WebSite` | N007 |
| Mobile/Desktop/Accessibility | Kein Overflow. axe: 2 Kontrastverstöße, 25 zu kleine Ziele. Tastatur: Fokus sichtbar, erster Stopp Chat-Button, kein Skip-Link | GLOBAL-026 | N031 |
| Performance/Ladeabhängigkeiten | Desktop 3,4 MB dekodiert, 88 Anfragen. Lighthouse mobil: LCP 8,5 s (LCP-Element = Cookie-Banner), Desktop 1,9 s | Budgets aus Abschnitt I | N020, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -012, -013, -014, -018, -019 (Banner), -020, -021, -022, -023, -024, -025, -026, -030, -034, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Grundlage sind nur Fakten aus der Eigenangabe des Kunden (N014): BGS Gebäudeservice GmbH, „Hauswart- und Reinigungsfirma“, Kantone Luzern und Zug, Gebäudereinigung und Hauswartung, kostenlose Offerte vor Ort. Die Vorschläge gelten nach Bestätigung von R2 (Marke), R3 (Leistungen) und R4 (Region).

- **Meta-Title soll lauten:** „BGS Gebäudeservice – Reinigung und Hauswartung in Luzern und Zug“. Begründung: Marke zuerst (Markenintention der Startseite), dazu die zwei realen Leistungsbereiche und das reale Gebiet. Unterscheidet sich von allen Leistungsseiten.
- **Meta-Description soll lauten:** „Gebäudereinigung und Hauswartung für Liegenschaften und Gewerbe in den Kantonen Luzern und Zug: Unterhaltsreinigung, Sonderreinigungen, Hausmeisterservice und Winterdienst. Wir kommen für eine kostenlose Offerte vorbei.“ Die Aufzählung an die Antwort auf R3 anpassen.
- **URL-Slug:** `/` beibehalten.
- **H1-Vorschlag:** „Reinigung und Hauswartung für Liegenschaften in Luzern und Zug“, sofort sichtbar ausgeliefert, nicht per Animation eingeblendet (GLOBAL-012).
- **Abschnittsfolge:**
  1. Hero: H1, ein Satz zum Nutzen aus Kundensicht, primäre CTA „Kostenlose Offerte vor Ort anfragen“, sekundär „Leistungen ansehen“. Echtes Foto oder ruhiger Hintergrund.
  2. Leistungsauswahl: die bestätigten Kernleistungen (Vorschlag R3: Unterhaltsreinigung, Sonderreinigungen, Hauswartung, Winterdienst, Aussen- und Grünflächenpflege) mit je einem Satz „für wen/wofür“ und Link „[Leistung] ansehen“.
  3. So läuft die Zusammenarbeit ab: Anfrage → Besichtigung und kostenlose Offerte → Start → feste Ansprechperson (nur bestätigte Schritte).
  4. Einzugsgebiet: Kantone Luzern und Zug mit Link zur künftigen Einzugsgebietsseite (P09).
  5. Belege: nur echte, freigegebene Referenzen oder Stimmen (R6). Ohne Belege den Abschnitt weglassen, nicht mit Platzhaltern füllen.
  6. Kurz „Über BGS“ mit Ansprechperson und Link auf Über uns.
  7. Abschluss-CTA und Formular.
- **Zu streichende oder zu ersetzende Passagen:**
  - H1 „Erstklassige Gebäudereinigung für Zürich, Zug und Luzern“ → H1-Vorschlag oben. Grund: Superlativ ohne Beleg, Zürich unbelegt (R4).
  - Badge „Professionelle Reinigungsfirma in der Schweiz“ → streichen. Grund: generisch.
  - Unterzeile „Professionelle Reinigungsdienste für Unternehmen und Premium-Kunden mit Schweizer Präzision.“ → „Wir reinigen und betreuen Büros, Gewerbeflächen und Wohnliegenschaften in den Kantonen Luzern und Zug.“ Zielgruppen nach R10 bestätigen.
  - Kennzahlen-Leiste („ISO Standards – Zertifizierte Qualität“, „Notfall Service – 24/7 Verfügbar“, „Zufrieden – 500+ Kunden“, „Schweizweit – 15+ Jahre Erfahrung“) → vollständig streichen, bis Belege vorliegen (Nachweisregister). Die ISO-Angabe widerspricht dem Impressum.
  - Abschnitt „Sehen Sie den Unterschied … Erleben Sie die Qualität unserer Arbeit“ mit KI-Vorher/Nachher → streichen oder durch echte, freigegebene Vorher/Nachher-Fotos eines BGS-Einsatzes ersetzen (GLOBAL-023).
  - „KI-Branchen-Berater – Powered by Brandea AI … Unsere KI nutzt alle Informationen unserer Website“ → entfernen, solange R8 nicht positiv entschieden ist und der Dienst nicht zuverlässig funktioniert (GLOBAL-002, -020).
  - Kategorie „Premium Services – Privatjets, Yachten, Luxusimmobilien und Private Housekeeping“ → nur bei Bestätigung durch R3, sonst entfernen.
  - „Unsere Standorte in der Schweiz – … in den wichtigsten Wirtschaftsregionen der Schweiz“ → „Unser Einzugsgebiet: Kantone Luzern und Zug“ (R4).
  - Kundenstimmen „Thomas M.“, „Sarah K.“, „Michael R.“ → nur mit Freigabe (GLOBAL-022), sonst streichen.
  - Footer-Satz „… Präzision seit Jahren.“ und „© … Swiss Reinigungsfirma“ → Firmenname „BGS Gebäudeservice GmbH“, Jahr fest (GLOBAL-013, -020).
- **Bilder:** Hero: echtes, freigegebenes Foto (Team mit Einwilligung oder betreutes Objekt), als LCP-Bild priorisiert, AVIF/WebP, mobil ≤ 150 KB, eigener Mobil-Ausschnitt, auf dem Text und CTA lesbar bleiben. Städtebilder nur, wenn sie echte Einsatzorte zeigen, sonst weglassen. Alt-Texte nach Inhalt oder dekorativ (`alt=""`), wenn rein schmückend [S17].
- **Strukturierte Daten:** Auf der Startseite die globale Unternehmensentität: `Organization` (oder ein passender spezifischerer Typ, nur wenn die Eigenschaften zutreffen) mit `name` „BGS Gebäudeservice GmbH“, `url`, `logo` (freigegebenes Logo), `telephone` und `email` nach R5, `address` nach R7 (Sitz), `areaServed` nach R4. Stabile `@id`, auf die alle `Service`-Einträge als `provider` verweisen. Kein `LocalBusiness` je Stadt. Keine Bewertungssterne [S14][S15].
- **Linkempfehlungen:** Leistungs-Karten mit Linktext „Unterhaltsreinigung ansehen“, „Hauswartung ansehen“ usw. auf die bestätigten Leistungsseiten. „Einzugsgebiet ansehen“ auf die künftige P09-Seite. „Über BGS“ auf `/ueber-uns`. Primäre CTA auf das Formular mit Anker, der funktioniert (`#kontakt-formular`, heute BESTANDEN).

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

### SEITE-P01-001 · Die Startseite stellt unbestätigte Premium-Leistungen an die erste Stelle

- **Ist-Zustand:** Unter „Unsere Reinigungsdienstleistungen“ steht als erste Kategorie „Premium Services – Exklusive Reinigungsdienstleistungen für höchste Ansprüche. Privatjets, Yachten, Luxusimmobilien und Private Housekeeping.“ Die Kernleistungen laut Eigenangabe (Unterhaltsreinigung, Hauswartung, Winterdienst) stehen erst in der dritten Kategorie „Basisreinigung“.
- **Auswirkung:** Die Priorität der Seite widerspricht dem realen Angebot. Das zieht unpassende Anfragen an und schwächt die Positionierung als Hauswart- und Reinigungsfirma.
- **Priorität:** P1 · **Launch-Blocker:** nein (hängt an R3, die Behauptungsebene läuft über GLOBAL-021)
- **Vorgabe:** Reihenfolge und Auswahl nach den bestätigten Kernleistungen (R3). Die Einteilung „Premium/Business/Basis“ aufgeben, wenn sie nicht dem realen Angebot entspricht.
- **Abnahme:** Die erste Leistung, die Besucher sehen, ist eine vom Kunden bestätigte Kernleistung. Kein nicht bestätigtes Angebot auf der Startseite.
- **Evidenz:** Inhaltsbefund, N014, N027. **Quelle:** S02

### SEITE-P01-002 · Der KI-Branchen-Berater nimmt die erste Ansicht ein, obwohl seine Funktion nicht gesichert ist

- **Ist-Zustand:** Unter dem Hero steht ein großes dunkles Eingabefeld „KI-Branchen-Berater – Powered by Brandea AI“ mit „Jetzt analysieren“. Es ruft Google Gemini auf, das in Produktion mit ungültigem Schlüssel läuft (GLOBAL-002). Auf 2560 px überlagert der Cookie-Banner den Berater (Bildschirmfoto der Breiten-Matrix).
- **Auswirkung:** Eine prominente Funktion, die vermutlich scheitert und Agentur-Branding auf der Kundenseite zeigt, verdrängt die eigentliche Zielhandlung.
- **Priorität:** P1 · **Launch-Blocker:** nein (entfällt mit R8/GLOBAL-002)
- **Vorgabe:** Entfernen oder nach positiver Entscheidung (R8) unter die Leistungsauswahl verschieben, ohne Agentur-Branding, mit funktionierender Fehlerbehandlung.
- **Abnahme:** In der ersten Ansicht stehen nur H1, Nutzen und die primäre CTA.
- **Evidenz:** Renderbefund N020/N026, Plattformdaten N012 (für den Chat). Der Aufruf des Beraters selbst wurde bewusst nicht ausgelöst (keine Produktionsdaten). **Quelle:** —

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002, -003, -010, -015, -018, -019, -020, -021, -022, -023.

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S07, S08, S09, S14, S15, S17).
