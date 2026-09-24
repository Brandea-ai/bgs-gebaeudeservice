# Abschlussbericht: Website-Analyse BGS Gebäudeservice

**Geprüft:** alle 32 Seiten der neuen Website `bgs-gebaeudeservice.vercel.app` (Stand `main` @ `d7e1122`, Produktions-Deployment vom 20.12.2025), Code, Build, Abhängigkeiten, Vercel-Konfiguration (nur lesend), DNS, die Anfragestrecke end-to-end in einer isolierten Testumgebung, Datenschutzverhalten im Browser, Barrierefreiheit (automatisiert und per Tastatur), Ladeleistung im Labor, Registerdaten der Kundin, eine Suchergebnis-Stichprobe und ein Wettbewerbsvergleich. / **Nicht geprüft:** Zustellung in Produktion bis ins Kundenpostfach, Inhalt der möglicherweise öffentlichen Schlüssel (R1), Rechtsprüfung, Screenreader, Felddaten, Search Console, Google-Unternehmensprofil, Google.ch-Suchergebnisse, primäres Handelsregister. / **Launch-Blocker:** 11 offene Freigabekriterien (G01–G07, G09–G11, G14), darunter 4 sofort zu entscheidende Risiken (P0). / **Freigabe:** **Nein.** Noch nicht freigegeben, weder technisch noch inhaltlich.

**Stand:** 24.09.2026 · **Prüfziel:** BGS Gebäudeservice (E01), Referenz FIMI-Gebäudereinigung nur lesend als Inspiration (E02, E06) · **Grundlage:** goldener Stand `_GOLDENER-STAND/Webseite-Analyse-Gesamt.md`

## 1. Go/No-Go

**No-Go.** Die Website darf in dieser Form nicht als Auftritt der BGS - Gebäudeservice GmbH starten. Die drei wichtigsten Gründe:

1. **Anfragen gehen still verloren.** Das Formular meldet Erfolg, auch wenn keine Mail versendet wird. Das ist in der Testumgebung end-to-end belegt (N032). Anfragen gehen an die Agentur statt an den Kunden. Der Terminweg über den KI-Chat fällt in Produktion aus (GLOBAL-002, -003).
2. **Die Website tritt unter falschem Namen auf und behauptet Unbelegtes.** „BGS“ kommt im sichtbaren Text nicht vor, die Seite heisst „Swiss Reinigungsfirma“. Laut Register heisst die Kundin „BGS - Gebäudeservice GmbH“ (N033). ISO-Zertifikate widerlegt das eigene Impressum. Kundenstimmen sind vermutlich erfunden, KI-Bilder erscheinen als Team und Referenz. Zürich und „schweizweit“ widersprechen dem Arbeitsgebiet des Kunden (Kantone Luzern und Zug). Gründung 2005 und „15+ Jahre“ passen nicht zu den Registerdaten (N037).
3. **Sicherheit.** Next.js-Version mit kritischen Meldungen, möglicherweise gültige Schlüssel in öffentlich einsehbaren Projektdokumenten, kein Missbrauchsschutz der API (GLOBAL-001, -035, -004).

Die Gestaltungsgrundlage (Layout, Flächennutzung, Schrift) ist solide, die Seitenzahl und die URL-Struktur sind für einen Umbau gut nutzbar. Der Umbau braucht aber zuerst Fakten vom Kunden, dann Inhalte, dann Technik.

## 2. Die fünf Fragen

### 2.1 Was muss vor dem Launch behoben werden?

Alle Maßnahmen mit Launch-Blocker in 06, zusammengefasst:

- **Sofort, auch ohne Umbau (P0):** möglicherweise öffentliche Schlüssel prüfen und gegebenenfalls widerrufen (M01), Next.js aktualisieren (M02), Chat- und Terminweg entfernen oder reparieren (M03), Formular so umbauen, dass es nur echten Versand als Erfolg meldet und an den Kunden liefert, Absenderdomain einrichten (M04).
- **Technik:** reproduzierbarer Build und CI (M05), Missbrauchsschutz (M07), Indexierungsschutz der Vorab-Adresse bis zum Launch (M08), Metadaten und Canonicals je Seite (M16), Platzhalter und defekte Links entfernen (M17, M18).
- **Identität und Belege:** ein Firmenname und eine Marke (M10). Jede Behauptung aus dem Nachweisregister belegen oder streichen (M11). Kundenstimmen nur mit Freigabe (M12). Echte Fotos statt KI-Bilder in Vertrauenszusammenhängen (M13). Kontaktdaten aus einer Quelle, geparkte E-Mail-Adresse sofort ersetzen (M09).
- **Recht und Datenschutz:** Impressum mit Registerdaten, Datenschutzerklärung gegen die tatsächliche Verarbeitung, Google-Dienste nur nach Einwilligung, Rechtsprüfung (M14, M15, M50, M51).
- **Struktur:** Zielstruktur mit Weiterleitungen umsetzen, nicht bestätigte Leistungen entfernen oder zusammenlegen (M20, M46, 03).
- **Organisation:** benannte Person für Freigabe und Anfragen (R5, R12), Rückfallplan (05, Abschnitt 6).

### 2.2 Was muss vor einer hochwertigen Markenpositionierung fachlich oder gestalterisch geklärt werden?

- **Marke (R2):** Auftritt als „BGS Gebäudeservice“, Umgang mit dem registrierten Namen „BGS - Gebäudeservice GmbH“, Logo und Farben. Der Name „Swiss Reinigungsfirma“ ist nicht unterscheidbar, andere Firmen tragen ähnliche Namen (N038).
- **Angebot (R3):** Welche der 18 Leistungsseiten beschreiben echte Leistungen? Nach der Eigenangabe sind es zwei Bereiche: Gebäudereinigung und Hauswartung (N014). Premium-Leistungen wie Privatjet und Yacht kommen dort nicht vor.
- **Gebiet (R4) und Zielgruppen (R10):** Kantone Luzern und Zug, dazu die Zielgruppen, etwa Verwaltungen, Eigentümer, Stockwerkeigentümer oder Gewerbe.
- **Belege (R6):** Gründungsgeschichte, Team, Versicherungsnachweis, echte Referenzen mit Freigabe, echte Fotos.
- **Positionierung (M28):** eine belegbare Antwort auf „Warum BGS?“. Die Wettbewerber in Luzern und Zug werben ebenfalls mit Zuverlässigkeit, 24/7 und langer Erfahrung (04). Unterscheiden kann sich BGS nur mit Belegen, nicht mit Adjektiven.
- **Gestaltung:** Kontrast der Markenfarbe (heute 3,78:1 am Primär-Button), eine Bildwelt aus echten Fotos, ruhige Icon-Sprache. Übernommen werden von FIMI nur Prinzipien, etwa Bildführung, klare Leistungsgliederung und Problem-Lösung-Einstiege, keine Inhalte (01, Abschnitt „FIMI-Inspiration“).

### 2.3 Welche Maßnahmen können qualifizierte Anfragen verbessern und wie wird das geprüft?

Alle Effekte sind HYPOTHESE, es gibt keine Baseline (GLOBAL-029). Deshalb keine Prozentprognosen.

| Maßnahme | Warum sie helfen kann | Wie geprüft wird |
|---|---|---|
| Funktionierender Anfrageweg zum Kunden (M04) | Heute können Anfragen verloren gehen | Jede Testanfrage kommt an. Nach dem Launch: Anzahl serverseitig bestätigter, zugestellter Anfragen |
| Klarer Ablauf „Anfrage → Besichtigung → kostenlose Offerte“ auf allen Leistungsseiten (Eigenangabe N014) | Senkt Unsicherheit, zeigt den nächsten Schritt | Anteil der Anfragen, die zu einem Besichtigungstermin führen (vom Kunden erfasst) |
| Eine primäre CTA, keine defekten Wege (M31, M03) | Weniger Abbrüche | Anfragen je Seite, keine CTA-Fehler im Monitoring |
| Feld „Ort/PLZ des Objekts“ und bestätigte Leistungsliste im Formular (M30) | Filtert Anfragen ausserhalb des Gebiets | Anteil Anfragen aus LU/ZG, Anteil passender Leistungen |
| Auswahlhilfe auf `/leistungen` (M40) | Bessere Zuordnung vor der Anfrage | Anteil Anfragen mit korrekt gewählter Leistung |
| Ehrlicher Kostenartikel ohne unbelegte Preise (M53) | Frühe Recherche ohne falsche Erwartungen | Weniger Anfragen mit falscher Preiserwartung (Rückmeldung Kunde) |
| Echte Referenzen und Fotos (M12, M13, M52) | Vertrauen durch Belege | Qualitative Rückmeldung in Erstgesprächen |

**Definition:** Ein Lead ist eine serverseitig bestätigte und zugestellte Anfrage. Klicks auf Telefon oder E-Mail zählen als Kontaktversuche (P10).

### 2.4 Was wird für organische Sichtbarkeit zusätzlich ausserhalb des Website-Codes gebraucht?

- **Domain-Entscheidung (R9):** Übernimmt die neue Seite `bgs-service.ch`, braucht es eine Migration mit Weiterleitungen für alle alten URLs, auch die älteren `.html`-Seiten, die noch im Index stehen (N038, 03 Abschnitt 2b).
- **Google-Unternehmensprofil** mit korrekten Angaben, Kategorien und echtem Gebiet [S32]. Heute nicht prüfbar (R11).
- **Einheitliche Firmenangaben** in Verzeichnissen (local.ch, search.ch, Moneyhouse, Facebook) und **echte Bewertungen**, keine gekauften (M55).
- **Search Console** ab dem Launch, um die Erfolgskriterien aus 03 zu messen.
- **Echte Fotos, Referenzen und Fachwissen des Kunden** als Rohstoff für die Inhalte. Ohne sie bleibt jede Seite austauschbar (GLOBAL-036).
- **Zeit:** Nach einem Launch oder einer Migration schwankt die Sichtbarkeit. Eine Bewertung ist frühestens nach einer Saison sinnvoll, beim Winterdienst nach einem Winter.

### 2.5 Welche Risiken oder Behauptungen lassen sich derzeit nicht belegen?

- **Behauptungen ohne Beleg** (vollständige Liste im Nachweisregister, 01 Abschnitt A): ISO-Zertifizierungen (widerlegt), „24/7“ auf 15 Seiten, „500+ Kunden“ bzw. „500 in Zürich“, „15+ Jahre“, Gründung 2005, „seit 2008“, „führend“, Versicherungssummen 5 bzw. 10 Mio. CHF, Preise auf vier Seiten, Fachzertifikate (Höhenarbeit, HACCP, GMP), Winterdienst-Zusagen, Vertragsbedingungen, Umweltaussagen, Region Zürich und „schweizweit“, alle Kundenstimmen und Referenzfälle.
- **Nicht geprüfte Risiken:** ob die Projektdokumente gültige Schlüssel enthalten (R1), ob Anfragen der letzten Monate verloren gingen (Logs reichen nicht zurück), ob die Rechtstexte genügen (B07), ob die Seite bereits von Google indexiert ist, wie Screenreader-Nutzer die Seite erleben.
- **Vorfall dieses Audits:** Die Pushes der Analyse haben automatisch sechs geschützte Preview-Deployments ausgelöst (N035). Produktion war nicht betroffen. Der Nutzer hat Pushes samt Previews erlaubt (E10).

## 3. Wichtigste Maßnahmen

Die vollständige Liste mit Abnahmetests steht in 06 (55 Maßnahmen, P0: 4, P1: 35, P2: 14, P3: 2).

| Rang | Maßnahme | Priorität | Warum zuerst |
|---|---|---|---|
| 1 | M01 Mögliche Schlüssel prüfen, gegebenenfalls widerrufen | P0 | Öffentliches Repository, im Suchindex (N038) |
| 2 | M04 Anfrageweg reparieren und an den Kunden liefern | P0 | Verlorene Anfragen sind verlorene Aufträge |
| 3 | M03 Chat und Terminweg entfernen oder reparieren | P0 | Heute auf 22 Seiten ein toter Weg |
| 4 | M02 Next.js aktualisieren (mit M05) | P0 | Bekannte kritische Sicherheitsmeldungen |
| 5 | M08 Vorab-Adresse nicht indexieren lassen | P1 | Unbelegte Aussagen unter falschem Namen öffentlich |
| 6 | Kundentermin R2–R7, R10 | — | Ohne Antworten keine Struktur, keine Texte |
| 7 | M10–M13 Identität, Belege, Stimmen, Bilder | P1 | Vertrauen, rechtliches Risiko |
| 8 | M20 Zielstruktur und Weiterleitungen | P1 | Grundlage aller Seiten |
| 9 | M54 Zentrale Fakten- und Leistungsliste | P1 | Verhindert neue Widersprüche |
| 10 | M29 und M39–M52 Inhalte der Kern- und Pflichtseiten | P1 | Eigentlicher Umbau |

## 4. Offene Fragen

Gebündelt in 07, Abschnitt 2a. Die dringlichsten:

- **R1 (sofort):** Enthalten `DEPLOYMENT.md` und `EMAIL_SETUP.md` gültige Schlüssel?
- **R3 und R4:** Welche Leistungen und welches Gebiet sind echt?
- **R5:** An wen gehen Anfragen, welche Telefonnummer und Rückmeldezeit gelten?
- **R6 und R7:** Welche Belege gibt es, wer prüft die Rechtstexte?
- **R8 und R9:** Bleiben Chat, KI-Berater und Karte? Übernimmt die neue Seite `bgs-service.ch`?

## 5. Roadmap 14/30/90 Tage (nach Freigabe der Umsetzung)

Tage gezählt ab der Freigabe der Umsetzung durch die verantwortliche Person, nicht ab heute. Keine Rankingziele, keine Prozentprognosen.

| Zeitraum | Ziel | Aufgaben | Abnahme |
|---|---|---|---|
| **Tag 0–14** | Risiken der öffentlichen Seite schliessen, Fakten klären | Welle 0: M01–M09. Kundentermin zu R2–R7 und R10, Entscheidungen R8, R9, E10. Fotos und Belege beim Kunden anfordern | Kein P0 offen. Testanfrage kommt beim Kunden an. Antworten zu R2–R7 schriftlich |
| **Tag 15–30** | Grundlagen des Umbaus | M28 Positionierung, M54 Fakten- und Leistungsliste mit Leistungsvorlage, M20 Zielstruktur und Weiterleitungsplan, M21 Rendering und Metadaten, Beauftragung der Rechtsprüfung, Fotoplanung | Freigegebene Positionierung, freigegebene Leistungsliste, Weiterleitungsplan, technische Vorlage im Testsystem |
| **Tag 31–90** | Inhalte, Qualität, Launch | Kern- und Pflichtseiten neu (M29, M39–M53), Qualitätsmaßnahmen (M22–M27, M30, M31, M33–M37), Rechtstexte (M14), Messung (M32), Deploy-Freigabe nach 05, Launch, danach Nachkontrolle Tag 0–14 aus 05 | Alle Kriterien G01–G14 erfüllt oder mit dokumentierter Risikoentscheidung, Freigabe durch benannte Person |

Nach dem Launch gelten die Aufgaben aus 05, Abschnitt 7, und die Erfolgskriterien je Konflikt aus 03.

## 6. Arbeitsweise und Grenzen dieses Audits

- Nur Markdown in `Webseite-Analyse/` geändert, kein Quellcode, keine Konfiguration (Regel 3, E03). FIMI wurde nicht verändert (E06, geprüft nach jeder Phase).
- Keine Produktionsdaten: kein echtes Formular abgeschickt, der KI-Berater bewusst nicht ausgelöst, Tests nur in der isolierten Kopie (E04).
- 18 der 31 Seitenberichte wurden von Hilfsagenten nach einem Musterbericht entworfen und hier geprüft: Stichproben gegen Code und HTML, alle 3.493 Zitate maschinell gegen den Bestand abgeglichen, 31 Stellen mit abweichendem Wortlaut korrigiert (Phase 6).
- Abweichungen sind in FORTSCHRITT.md protokolliert (Preview-Deployments, lesende git-Befehle der Hilfsagenten, Messkorrektur N023).

**Eine Empfehlung ist keine Freigabe zur Umsetzung.** Die Umsetzung braucht eine eigene Freigabe (E05).

---

**Verweise:** Befunde 01 (global) und `Seiten/` (je Seite) · URL-Inventar 02 · Suchintention und Zielstruktur 03 · Wettbewerb 04 · Freigabematrix 05 · Backlog 06 · Rückfragen und Entscheidungen 07 · Nachweise 08 · Quellen 09 (S02, S07, S32 und die Quellen der verlinkten Befunde).
