# Seitenanalyse: Kontakt

**Seiten-ID: P10 (Inventar U03)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/kontakt` · **Codepfade:** `app/kontakt/page.tsx` (243 Zeilen); das Formular selbst sitzt im Footer `client/src/components/SwissFooter.tsx:62-276`, die Annahme in `app/api/contact/route.ts`, der Versand in `server/email.ts` · **Stand:** `d7e1122`

## 1. Aufgabe dieser Seite

Einen verlässlichen, verständlichen und betreuten Weg zur echten Anfrage bieten.

**Abgrenzung:** Kontaktintention. Kein erzwungener SEO-Langtext, der das tatsächliche Kontaktieren erschwert.

**Primäre Zielhandlung:** Anfrage serverseitig erfolgreich angenommen und im vorgesehenen Prozess nachweisbar angekommen.

**Ergebnis der Prüfung:** Die Zielhandlung ist nicht gesichert. Das Formular meldet Erfolg, auch wenn keine Mail versendet wird. Das ist in der Testumgebung end-to-end belegt (N032, GLOBAL-003). Anfragen gehen an die Agentur statt an den Kunden. Die Seite ist kurz und kontaktorientiert (BESTANDEN), nennt aber Region, Erreichbarkeit und Standorte anders als der Kunde selbst. Die eingebettete Karte lädt ohne Einwilligung, funktioniert nicht und zeigt Platzhalter-Standorte (SEITE-P10-001).

## 2. Seitenspezifische Prüfliste

- [x] Telefon, E-Mail, Adresse, Ansprechpartner und Erreichbarkeit auf Richtigkeit und Konsistenz prüfen. → *BEFUND: Telefon `+41 41 320 56 10`, auf der bisherigen Website des Kunden steht eine Mobilnummer (N014). Verzeichniseinträge führen die Festnetznummer 041 320 56 10 für die Firma (N038), sie ist also plausibel. Welche Nummer(n) gelten, klärt R5. E-Mail `info@bgs-service.ch` stimmt mit der Eigenangabe überein und hat einen MX-Eintrag (N013), BESTANDEN. Die Standortseiten nennen dagegen `info@swiss-reinigung.ch` ohne MX. Adresse Tannhof 10, 6020 Emmenbrücke mit „Besuchen Sie uns vor Ort“, aber ohne Öffnungszeiten, nicht vom Kunden bestätigt (R7). Keine Ansprechperson. Erreichbarkeit: hier „24/7“, auf den Standortseiten „Mo-Fr 7:00-18:00“ (GLOBAL-020, -021, R5).*
- [x] Formularfelder am wirklich notwendigen nächsten Schritt ausrichten; keine unnötige Datensammlung. → *Teilweise BESTANDEN: Name, E-Mail, Nachricht (Pflicht), Telefon und Leistung (optional) sind angemessen. Es fehlt der Ort bzw. die PLZ des Objekts, die für die Gebietsprüfung und die Besichtigung nötig ist. Die Einwilligung verlangt eine „dauerhafte“ Speicherung, das ist mehr als nötig (GLOBAL-027).*
- [x] Service-Auswahl mit den fünf realen Leistungen abstimmen; keine veralteten Optionen. → *BEFUND: 29 Optionen in 5 Gruppen, darunter 9 Dubletten („Büroreinigung“ und „Business Büroreinigung“ usw.) und alle unbestätigten Premium-Leistungen (GLOBAL-028, SEITE-P02-002, R3).*
- [x] Beschriftungen, Pflichtfeldhinweise, Fokus, Fehlermeldungen und Eingabehilfen manuell prüfen. → *Teilweise BESTANDEN: Alle Felder haben sichtbare, per `htmlFor` verknüpfte Labels, Pflichtfelder sind mit „*“ markiert und erklärt, Fokus ist sichtbar (N031). Fehlermeldungen kommen nur vom Browser (native Validierung). BEFUND: Erfolgs- und Fehlermeldung haben weder `role="status"` noch `aria-live`, Screenreader bekommen das Ergebnis nicht mit. Die Erfolgsmeldung verschwindet nach 5 Sekunden. Das Telefonfeld zeigt als Platzhalter die Firmennummer `+41 41 320 56 10`, das E-Mail-Feld `ihre@email.de` (SEITE-P10-002).*
- [x] Serverannahme, Providerverarbeitung und tatsächliche Zustellung getrennt nachweisen, nur in freigegebener Testumgebung. → *BEFUND (N032, isolierte Testumgebung): Die Serverannahme funktioniert (200). Die Providerverarbeitung scheitert ohne Schlüssel (kein Versand) bzw. mit ungültigem Schlüssel (401), die API meldet trotzdem `success`. Die Zustellung in Produktion ist NICHT PRÜFBAR, weil keine Produktionsdaten verwendet werden dürfen. Die Absenderdomain ist für den Versanddienst nicht eingerichtet (N013), Empfänger ist `info@brandea.de` (N016) (GLOBAL-003).*
- [x] Mehrfachklick, ungültige Eingabe, Spam-Schutz, Timeout und Netzwerkausfall untersuchen. → *Mehrfachklick BESTANDEN (eine Anfrage, Button während des Sendens gesperrt). Ungültige E-Mail BESTANDEN (Browser und Server 400). Spam-Schutz BEFUND: kein Honeypot, keine Ratenbegrenzung, 20.000 Zeichen werden angenommen (GLOBAL-004, -028). Timeout BEFUND (Codebefund): kein Abbruch, bei hängendem Server bleibt „Wird gesendet...“ stehen. Netzwerkausfall laut Code mit Fehlermeldung abgefangen, nicht live getestet.*
- [x] Keine Erfolgsmeldung anzeigen lassen, wenn nur eine Clientanimation abgeschlossen wurde. → *BEFUND: Die Erfolgsmeldung hängt nur an `response.ok`. Der Server liefert immer 200/`success`, auch bei gescheitertem Versand (N016, N032, GLOBAL-003).*
- [x] Bestätigungs-/Rückmeldeversprechen mit dem echten internen Prozess abgleichen. → *BEFUND: „innerhalb von 24 Stunden“ steht dreimal auf dieser Seite, im Formular „in Kürze“, im Chat „12 Stunden (werktags)“ (GLOBAL-028, B10). Der interne Prozess ist unbekannt, weil die Anfragen an die Agentur gehen. Es gibt keine Bestätigungsmail an Anfragende.*
- [x] Datenschutzhinweis und benötigte Rechtsgrundlage fachlich prüfen; keine pauschal vorgegebene Einwilligungscheckbox. → *BEFUND: Pflicht-Checkbox „… Ich stimme zu, dass meine Angaben … dauerhaft gespeichert werden“. Die verlinkte Datenschutzerklärung nennt den Versanddienst, den Empfänger bei der Agentur und die Speicherdauer nicht (GLOBAL-027). Keine Rechtsprüfung (B07).*
- [x] Telefon-/E-Mail-Klick und Form-Submit nicht pauschal als qualifizierten Lead zählen. → *NICHT ANWENDBAR: Es gibt keine Messung (N010, GLOBAL-029). Regel für später: Nur serverseitig bestätigte und zugestellte Anfragen zählen als Lead. Klicks auf `tel:`/`mailto:` sind Kontaktversuche.*
- [x] Mobilbedienung und alternative Kontaktwege bei Formularproblemen prüfen. → *BESTANDEN mit Einschränkung: Mobil sind „Zum Kontaktformular“ und die Telefonnummer in der ersten Ansicht, `tel:` und `mailto:` sind klickbar, die Fehlermeldung verweist auf den direkten Kontakt. Einschränkung: Weil der Server nie einen Fehler meldet, kommen Nutzende nie auf den Gedanken, den Ausweichweg zu nehmen.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/kontakt`, 200. `/kontakt/` → 308 | Beibehalten | N007, N008 |
| Hauptzielgruppe und Suchintention | Interessenten mit Kontaktabsicht, auch Markensuche „BGS Gebäudeservice Kontakt“ | Unverändert | — |
| Meta-Title | Globaler Standardtitel. Im Code übergibt die Seite „Kontakt - Swiss Reinigungsfirma \| Jetzt Angebot anfordern“ an die `SEO`-Komponente, die nichts ausgibt | Siehe Vorgabe | N007, N015 |
| Meta-Description | Globale Standardbeschreibung | Siehe Vorgabe | N007 |
| H1 und Abschnittsstruktur | H1 „Kontaktieren Sie uns“, H3 „Telefon/E-Mail/Adresse“, H2 „Unsere Standorte“ (Karte), „Bereit für professionelle Reinigung?“, „Häufig gestellte Fragen“ (4 Fragen, Antworten sichtbar und im HTML, BESTANDEN) | Siehe Abschnittsfolge | Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, Sitemap ja | Canonical auf die Launch-Domain | N007, N008 |
| Wichtigste Textpassagen | „melden uns innerhalb von 24 Stunden“ (3×), „Zentral gelegen in der Zentralschweiz - schnell erreichbar aus Luzern, Zug und Zürich“, FAQ „gesamten Zentralschweiz … Schwerpunkt auf Luzern, Zug und Zürich“, „umfassende Betriebshaftpflichtversicherung“, „24/7 für Sie erreichbar“ | Siehe Streichliste | N027 |
| Haupt-CTA und Ziel | „Zum Kontaktformular“ (2×, Button) scrollt per JavaScript zum Footer-Formular (`#kontakt-formular`). Die Seite hat kein eigenes Formular. Formularlogik in `app/kontakt/page.tsx:15-78` ist ungenutzt (GLOBAL-008) | Formular direkt auf der Seite | Code |
| Bildmotive und Alt-Texte | Nur Kartenkacheln von Google (Alt leer) | Keine Einbettung, statischer Ausschnitt oder Link | N020 |
| Interne Links | Navigation, Footer, Datenschutz im Formular | Siehe Linkempfehlungen | N009 |
| Schema-Typen | keine | `ContactPage` + `contactPoint` der globalen `Organization` | N007 |
| Mobile/Desktop/Accessibility | Kein Overflow. axe: 4 Kontrastverstöße, 25 zu kleine Klickziele. Statusmeldungen nicht angekündigt. Das Formular sitzt in einem `<footer>`, der einen zweiten `<footer>` enthält: zwei `contentinfo`-Landmarken, laut HTML-Spezifikation unzulässig verschachtelt | GLOBAL-026, SEITE-P10-002 | N031, Code `SwissFooter.tsx:63, 278` |
| Performance/Ladeabhängigkeiten | Schwerste Seite: 3,5 MB dekodiert, 119 Anfragen (Google Maps, Google Fonts). Lighthouse mobil LCP 7,4 s, LCP-Element ist der Text des Cookie-Banners | Ohne Karten-Einbettung unter 1 MB | N020, N030 |
| Globale Abhängigkeiten | GLOBAL-003, -004, -008, -010, -013, -019, -020, -021, -026, -027, -028, -029 | — | 01 |

**Ergänzung zum Nachweisregister (01, Abschnitt A):** „umfassende Betriebshaftpflichtversicherung“ (Kontakt-FAQ). Mit Versicherungsnachweis wäre das ein nützlicher, zulässiger Vertrauensbeleg (R6).

## 4. Konkrete redaktionelle und technische Vorgaben

Grundlage sind die Eigenangaben des Kunden (N014): E-Mail `info@bgs-service.ch`, Kantone Luzern und Zug, kostenlose und unverbindliche Offerte vor Ort. Telefon, Adresse, Erreichbarkeit und Ansprechperson nach R5 und R7.

- **Meta-Title soll lauten:** „Kontakt und kostenlose Offerte | BGS Gebäudeservice“. Begründung: Kontaktintention und der reale nächste Schritt (Offerte), Marke für Suchen nach dem Firmennamen.
- **Meta-Description soll lauten:** „Kontaktieren Sie BGS Gebäudeservice per Telefon, E-Mail oder Formular. Wir kommen für eine kostenlose, unverbindliche Offerte zu Ihnen, in den Kantonen Luzern und Zug.“
- **URL-Slug:** `/kontakt` beibehalten.
- **H1-Vorschlag:** „Kontakt und kostenlose Offerte vor Ort“
- **Abschnittsfolge:**
  1. Direkte Wege, oben und mobil zuerst: Telefon (bestätigte Nummer), E-Mail `info@bgs-service.ch`, bestätigte Erreichbarkeit, Ansprechperson mit Funktion (R5).
  2. Formular direkt auf der Seite, nicht nur im Footer: Name, E-Mail, Telefon (optional), Ort/PLZ des Objekts, Leistung (bestätigte Liste, keine Dubletten), Nachricht. Datenschutzhinweis nach Rechtsprüfung statt pauschaler Einwilligung (GLOBAL-027).
  3. So geht es weiter: „Wir melden uns innerhalb von [bestätigte Zeit]. Danach vereinbaren wir einen Termin für die Besichtigung. Die Offerte ist kostenlos und unverbindlich.“ Die Zeit nach B10 festlegen und überall gleich verwenden.
  4. Sitz: Adresse nach R7. „Besuchen Sie uns vor Ort“ nur mit Bürozeiten, sonst „Unser Sitz“.
  5. Einzugsgebiet in einem Satz mit Link auf P09.
  6. FAQ mit bestätigten Antworten: Rückmeldezeit, Einzugsgebiet, Versicherung (mit Nachweis), Ablauf der Besichtigung.
- **Zu streichende oder zu ersetzende Passagen:**
  - „Zentral gelegen in der Zentralschweiz - schnell erreichbar aus Luzern, Zug und Zürich“ → „Wir sind in den Kantonen Luzern und Zug für Sie im Einsatz.“ Grund: Zürich widerspricht der Eigenangabe (R4).
  - FAQ „Wir sind in der gesamten Zentralschweiz tätig, mit Schwerpunkt auf Luzern, Zug und Zürich. Für andere Regionen kontaktieren Sie uns bitte direkt.“ → „Wir sind in den Kantonen Luzern und Zug tätig. Liegt Ihr Objekt ausserhalb, fragen Sie uns trotzdem an. Wir sagen Ihnen offen, ob wir den Auftrag übernehmen können.“
  - FAQ „Selbstverständlich! Wir sind 24/7 für Sie erreichbar und können bei Bedarf auch kurzfristig Reinigungseinsätze durchführen.“ → nur mit bestätigter Notfallregelung, sonst „Für dringende Einsätze rufen Sie uns während der Geschäftszeiten an: [Nummer].“
  - FAQ „Ja, wir verfügen über eine umfassende Betriebshaftpflichtversicherung. Ihre Immobilie ist bei uns in sicheren Händen.“ → „Ja, wir sind haftpflichtversichert. Den Versicherungsnachweis senden wir Ihnen mit der Offerte zu.“ Nur mit Nachweis (R6).
  - „…melden uns innerhalb von 24 Stunden bei Ihnen zurück“ (3×) → bestätigte Zeit (B10). Die Erfolgsmeldung „Wir melden uns in Kürze bei Ihnen“ auf denselben Wortlaut bringen.
  - Abschnitt „Unsere Standorte“ mit Google-Karte und den Markern „Standort Zürich“, „Standort Zug“, „Standort Luzern“ → streichen (SEITE-P10-001). Ersatz: Adresse als Text mit dem Link „In Google Maps öffnen“ (externer Link, kein Laden ohne Klick).
  - Einwilligungstext „Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.“ → nach Rechtsprüfung ein Hinweis wie „Wir verwenden Ihre Angaben nur zur Bearbeitung Ihrer Anfrage. Mehr dazu in der Datenschutzerklärung.“ (GLOBAL-027, B07).
  - Platzhalter im Telefonfeld `+41 41 320 56 10` → „z. B. 041 000 00 00“, im E-Mail-Feld `ihre@email.de` → „name@beispiel.ch“.
- **Bilder:** keine nötig. Ein Foto der Ansprechperson nur mit Einwilligung (≤ 60 KB, `loading="lazy"`).
- **Strukturierte Daten:** `ContactPage`, deren `about` auf die globale `Organization` verweist. Dort ein `contactPoint` mit `telephone`, `email`, `contactType` „customer service“, `areaServed` (Kanton Luzern, Kanton Zug), `availableLanguage` „de“, alles erst nach R5. Keine Rich-Result-Garantie [S14].
- **Linkempfehlungen:**
  - Im Abschnitt Einzugsgebiet auf die künftige P09-Seite mit dem Linktext „Wo wir tätig sind“.
  - Unter dem Formular auf `/leistungen` (P02) mit dem Linktext „Welche Leistung passt? Leistungen im Überblick“.
  - Im Datenschutzhinweis auf `/datenschutz` mit dem Linktext „Datenschutzerklärung“ (heute vorhanden, BESTANDEN).
  - Alle „Kontakt aufnehmen“-Buttons der Website auf `/kontakt` oder direkt auf das Formular dieser Seite. Keine CTA öffnet den Chat, solange GLOBAL-002 offen ist.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Stille Verluste von Anfragen (GLOBAL-003), fehlender Missbrauchsschutz (GLOBAL-004), Karte ohne Einwilligung (GLOBAL-019), Kontaktdaten (GLOBAL-020), Datenschutztexte (GLOBAL-027) und Formularinhalte (GLOBAL-028) stehen im globalen Register. Seitenspezifisch:

### SEITE-P10-001 · Die Standortkarte zeigt Platzhalter-Standorte statt der realen Adresse

- **Ist-Zustand:** Die Karte „Unsere Standorte“ setzt vier Marker (`app/kontakt/page.tsx:150-170`): „Hauptsitz Emmenbrücke“ und „Standort Luzern“ mit identischen Koordinaten (47.0502, 8.3093; das ist die Stadt Luzern, nicht Emmenbrücke), „Standort Zürich“ (47.3769, 8.5417) und „Standort Zug“ (47.1667, 8.5167), jeweils Stadtzentrumskoordinaten. In Produktion zeigt die Karte nur „This page can't load Google Maps correctly.“, weil der Schlüssel fehlt (N011, N020).
- **Auswirkung:** Heute ist die Karte nur defekt und lädt Google-Dienste ohne Einwilligung. Mit gültigem Schlüssel würde sie zwei Niederlassungen vortäuschen und den Sitz an der falschen Stelle zeigen.
- **Priorität:** P2 · **Launch-Blocker:** nein, solange die Karte nicht funktioniert. Sobald sie Marker anzeigt, wäre sie über GLOBAL-021 ein Blocker.
- **Vorgabe:** Karte entfernen (Abschnitt 4). Soll es eine Karte geben, dann nur einen Marker an der bestätigten Adresse (R7), geladen erst nach Klick (GLOBAL-019).
- **Abnahme:** Keine Kartenanfrage an Google beim Seitenaufruf. Jede dargestellte Adresse ist vom Kunden bestätigt.
- **Evidenz:** Codebefund, Renderbefund N020. Die Koordinaten wurden mit den bekannten Lagen der Orte abgeglichen, nicht vermessen. **Quelle:** —

### SEITE-P10-002 · Das Formular gibt sein Ergebnis nicht barrierefrei und nicht dauerhaft zurück

- **Ist-Zustand:** Die Erfolgsmeldung „✓ Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.“ und die Fehlermeldung stehen in einfachen `div`-Elementen ohne `role="status"` bzw. `role="alert"` (`SwissFooter.tsx:258-270`). Die Erfolgsmeldung verschwindet nach 5 Sekunden (`SwissFooter.tsx:44`), das Formular wird geleert. Es gibt keine Bestätigungsmail (N016). Die Platzhalter zeigen die Firmennummer im Telefonfeld und eine `.de`-Adresse im E-Mail-Feld.
- **Auswirkung:** Screenreader-Nutzende erfahren nicht, ob die Anfrage angekommen ist (WCAG 2.2, 4.1.3 Statusmeldungen [S22]). Wer kurz wegschaut, hat keinen Beleg für die Absendung. Der Platzhalter mit der Firmennummer kann als vorausgefülltes Feld missverstanden werden.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Statusmeldung mit `role="status"` (Erfolg) bzw. `role="alert"` (Fehler), die Meldung bleibt stehen, nach dem Senden erhält sie den Fokus. Eine kurze Zusammenfassung der gesendeten Anfrage anzeigen. Eine Bestätigungsmail nur, wenn der Versand zuverlässig eingerichtet ist (GLOBAL-003). Neutrale Platzhalter.
- **Abnahme:** In einem Screenreader-Test (z. B. NVDA oder VoiceOver) wird nach dem Absenden die Status- bzw. Fehlermeldung vorgelesen. Die Meldung bleibt sichtbar, bis Nutzende die Seite verlassen oder eine neue Anfrage beginnen.
- **Evidenz:** Codebefund, Testlauf N032 (Oberfläche). **Quelle:** S22

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

Zusätzlich für diese Seite: Eine Testanfrage in der freigegebenen Testumgebung kommt nachweislich im Postfach des Kunden an (nicht bei der Agentur). Ein simulierter Versandfehler führt zu einer sichtbaren Fehlermeldung und nicht zu „erfolgreich versendet“.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-003 (stille Verluste, falscher Empfänger), -004 (Missbrauchsschutz), -010, -019 (Karte, Google Fonts), -020 (Telefonnummer), -021 (24/7, Region), -027 (Datenschutz).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S07, S08, S09, S14, S17, S22).
