# Seitenanalyse: Blogartikel „Reinigungskosten in der Schweiz: Ein Überblick“

**Seiten-ID: P29 (Inventar U30)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/blog/reinigungskosten-schweiz` · **Codepfad:** `app/blog/reinigungskosten-schweiz/page.tsx` (160 Zeilen) · **Stand:** `d7e1122`

**Zuordnung (E09):** Zusätzlicher Bericht für eine tatsächlich vorhandene URL. Übersicht: P27. Einziger Blogartikel mit Lighthouse-Messung (N030).

## 1. Aufgabe dieser Seite

Eine konkrete Informationsfrage hilfreich, belegt und mit eigener Erfahrung des Anbieters beantworten und passend zur Leistung überleiten.

**Abgrenzung:** Ratgeber zur Kostenfrage, keine Preisliste und keine Leistungsbeschreibung. Die Leistung selbst steht auf `/basis/unterhaltsreinigung` (P03). Keine Zahlen ohne Quelle oder Freigabe des Kunden.

**Informationsfrage (Ist):** „Was kostet eine professionelle Reinigung?“ Das ist eine echte Entscheidungsfrage vor einer Vergabe (HYPOTHESE ohne Suchdaten, R10).

**Primäre Zielhandlung:** „Kostenlose Offerte vor Ort anfragen“, belegt durch die Eigenangabe des Kunden (N014). Heute „Jetzt Angebot anfordern“ → `/kontakt`.

**Ergebnis der Prüfung:** Der Artikel greift die richtige Frage auf, beantwortet sie aber mit Preisspannen ohne Quelle, Stand und Bezugsgröße (SEITE-P29-001). Dieselben Spannen stehen auf `/standorte/zuerich` als eigene Preise. Voreingestellt und als einziger Reiter im ausgelieferten HTML ist Zürich, das laut Eigenangabe nicht zum Arbeitsgebiet gehört. Zug und Luzern erscheinen erst nach einem Klick (SEITE-P29-002). Der Artikel umfasst rund 200 Wörter, davon rund 150 im ausgelieferten HTML, und wird auf `/blog` mit „7 Min.“ angekündigt (SEITE-P27-001). Die Liste der Kostenfaktoren ist brauchbar, aber teils missverständlich formuliert.

## 2. Seitenspezifische Prüfliste

- [x] Konkrete Informationsfrage benennen und prüfen, ob sie im sichtbaren Text beantwortet wird. → *Teilweise: Die Frage ist erkennbar. BEFUND: Die Antwort besteht aus unbelegten Spannen, zwei von drei Regionen erscheinen nur nach Klick (SEITE-P29-001, -002).*
- [x] Austauschtest: Könnte jeder Anbieter den Text unverändert veröffentlichen? → *BEFUND: ja. Kein Bezug zu BGS, zur eigenen Preisbildung oder zur Offerte vor Ort (GLOBAL-030).*
- [x] Eigene Erfahrung, Beispiele sowie Autor oder fachlich verantwortliche Person erkennbar. → *BEFUND: fehlt. Belegbar wäre schon heute ein Satz dazu, dass BGS die Offerte kostenlos und unverbindlich vor Ort erstellt (N014).*
- [x] Zahlen mit Quelle, Zeitraum und Bezugsgröße; Beispielrechnungen gekennzeichnet. → *BEFUND: neun CHF-Spannen und „10-15% über dem Schweizer Durchschnitt“ ohne Quelle, Stand, MWST-Hinweis, Leistungsumfang oder Reinigungsrhythmus (SEITE-P29-001, GLOBAL-031).*
- [x] Keine Scheinaktualität (Datum, Lesezeit, Sitemap). → *BEFUND: „5. Januar 2025“ auf `/blog` (GLOBAL-031), im Artikel weder Datum noch Stand der Preise. Sitemap-`lastmod` 2025-01-02 liegt vor diesem Datum (GLOBAL-015). Im Code liegt ein wirkungsloser Titel mit „2025“ und „Aktuelle Preise“ (SEITE-P29-003).*
- [x] Fachbegriffe korrekt und verständlich. → *Teilweise BESTANDEN: Die Kostenfaktoren sind verständlich. „Reinigungsfrequenz: Häufigere Reinigung reduziert den Aufwand pro Einsatz“ legt eine Ersparnis nahe, die für die Monatskosten nicht gilt (Abschnitt 4).*
- [x] Widerspruchsfreiheit zu Leistungs- und Standortseiten. → *BEFUND: `/standorte/zuerich` nennt dieselben Spannen als eigene Preise („Für Unterhaltsreinigung berechnen wir CHF 45-65 pro Stunde.“), der Artikel als Marktwerte (SEITE-P29-001). Die Leistungsseiten nennen stattdessen „Individuelles Angebot“ (GLOBAL-036).*
- [x] Regionen nur, wenn tatsächlich bedient. → *BEFUND: Zürich als voreingestellter Reiter und in der Einleitung (GLOBAL-021, R4, SEITE-P29-002).*
- [x] Kontextlinks zur passenden Leistung und von der Leistung zum Artikel. → *BEFUND: keine Links zur Unterhaltsreinigung oder zu Sonderreinigungen, eingehend nur von `/blog` (GLOBAL-017).*
- [x] Überleitung zur Leistung passt zur Frage. → *Teilweise BESTANDEN: „Kontaktieren Sie uns für eine kostenlose Bedarfsanalyse …“ passt zur Kostenfrage, nutzt aber nicht die belegte Offerte vor Ort. Der CTA-Wortlaut weicht von den anderen Seiten ab (GLOBAL-034).*
- [x] Kerninhalte im ausgelieferten HTML. → *BEFUND: Die Reiter „Zug“ und „Luzern“ fehlen im HTML (Faktenblatt, Abgleich mit N007, GLOBAL-011).*
- [x] FAQ nur aus echten Fragen. → *NICHT ANWENDBAR: keine FAQ. Nur ergänzen, wenn echte Einwände vorliegen (R10).*
- [x] Bilder: Motiv, Herkunft, Alt-Text, Größe. → *BEFUND: Taschenrechner mit unleserlicher Tastenbeschriftung, verfremdete Banknoten und Reinigungsmittel (Einschätzung KI, N029). Das Bild ist mobil das LCP-Element, Median-LCP 4,4 s (N030). Alt „Reinigungskosten“.*
- [x] Überschneidung mit anderen Artikeln und Leistungsseiten. → *Teilweise: Die Preisaussagen überschneiden sich mit der FAQ auf `/standorte/zuerich`. Keine Doppelung mit anderen Artikeln.*
- [ ] Redaktionsverantwortung und Aktualisierungsanlass zugeordnet (Preise brauchen einen Pflegeanlass). → *NICHT PRÜFBAR (B14, R12).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Kostenfaktoren, Abrechnungsmodell und etwaige Richtwerte gibt die Geschäftsführung des Kunden frei (R12).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/blog/reinigungskosten-schweiz`, 200 | Beibehalten (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | Implizit Unternehmen („Büroreinigung“). Intent: Kostenrecherche vor einer Vergabe (informational mit Kaufbezug). Eine Suchstichprobe zeigt bei einzelnen Anfragen (z. B. „Hauswartung Zug“) auch Preisrechnerseiten, ohne Suchvolumina und nicht auf Google.ch | HYPOTHESE: Entscheider in Verwaltungen, Gewerbebetrieben und bei Eigentümern in LU/ZG in der Budgetphase (R10, GLOBAL-030) | N027, N038 |
| Meta-Title | Globaler Standardtitel. Im Code, wirkungslos: „Reinigungskosten Schweiz 2025: Preise & Spartipps \| Swiss Reinigungsfirma“ (Z. 20) | Siehe Vorgabe unten | N007, N015 |
| Meta-Description | Globale Standardbeschreibung. Im Code, wirkungslos: „Aktuelle Preise für Reinigungsdienstleistungen in der Schweiz. Kostenübersicht, Preisfaktoren und Tipps zum Sparen bei professioneller Gebäudereinigung.“ (Z. 21) | Siehe Vorgabe unten | N007, N015 |
| H1 und Abschnittsstruktur | Rubrik „PREISÜBERSICHT“, H1 „Reinigungskosten in der Schweiz: Ein Überblick“, H2 „Preisfaktoren im Überblick“ (Reiter Zürich/Zug/Luzern, H3 nur für den aktiven Reiter), H3 „Kostenfaktoren“, H3 „Individuelles Angebot gewünscht?“. Kein Datum, kein Autor. Der Cookie-Banner bringt ein H3 vor die H1 | Siehe Abschnittsfolge unten | Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap (`lastmod` 2025-01-02) | Selbstreferenzierendes Canonical auf die Launch-Domain, `lastmod` = `dateModified` | N007, N008 |
| Wichtigste Textpassagen | „Als größte Stadt der Schweiz hat Zürich ein hohes Preisniveau. Die Kosten liegen typischerweise 10-15% über dem Schweizer Durchschnitt.“ sowie „Büroreinigung (pro m²/Monat) CHF 8-12“, „Unterhaltsreinigung (Stundensatz) CHF 45-65“, „Grundreinigung (Stundensatz) CHF 55-75“ | Streichen oder durch freigegebene Werte ersetzen, siehe Abschnitt 4 | N027, Code Z. 72–85 |
| Haupt-CTA und Ziel | „Jetzt Angebot anfordern“ → `/kontakt`, Footer-Formular | „Kostenlose Offerte vor Ort anfragen“, Formular mit vorausgewählter Leistung | N020, GLOBAL-034, GLOBAL-028 |
| Bildmotive und Alt-Texte | 1 Bild `/blog-kosten.jpg`, Alt „Reinigungskosten“, 1536×1024 geliefert, 842×506 dargestellt. Motiv: Taschenrechner, Banknoten, Sprühflasche, Handschuhe (Einschätzung: KI-generiert) | Weglassen oder echtes, freigegebenes Foto | N029, Faktenblatt |
| Interne Links | Eingehend nur von `/blog`. Ausgehend nur Navigation, Footer und `/kontakt` | Siehe Linkempfehlungen | N009 |
| Schema-Typen | keine | `BlogPosting` nach Überarbeitung | N007 |
| Mobile/Desktop/Accessibility | Kein Overflow, auch nicht bei 640 px (entspricht 200 % Zoom) und 320 px (BESTANDEN). axe: 6 Kontrastverstöße (u. a. rote Rubrik „PREISÜBERSICHT“, 3,78:1), 25 zu kleine Klickziele. Zeilenlänge Fließtext Desktop im Median 102 Zeichen. React-Fehler #418 | Siehe GLOBAL-026, -032, -013 | N020, N031, N036 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 85 Anfragen (Desktop, dekodiert). Lighthouse mobil: Median-LCP 4,4 s (Läufe 4,3 / 4,4 / 4,9 s), LCP-Element ist das Artikelbild, TBT 0–210 ms, CLS 0, Übertragung ca. 0,5 MB. Desktop LCP 0,7 s. Einsparpotenzial durch responsive Bilder ca. 155 KiB | Mobiler Labor-LCP ≤ 2,5 s (Projektbudget, Abschnitt I) | N020, N030 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -013, -015, -017, -020, -021, -024, -025, -026, -028, -030, -031, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Die Vorschläge nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, Leistung „regelmässige Unterhaltsreinigung“, „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort. Die allgemeinen Kostenfaktoren stammen aus dem heutigen Artikel und müssen vom Kunden bestätigt werden. Die Vorschläge gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind.

- **Entscheidung: behalten und überarbeiten (bedingt).** Begründung: Die Kostenfrage ist eine konkrete Entscheidungsfrage vor einer Vergabe (HYPOTHESE, R10). Der Artikel kann ehrlich erklären, warum ein belastbarer Preis eine Besichtigung braucht, und direkt zur belegten kostenlosen Offerte vor Ort überleiten. Bedingung: Der Kunde bestätigt die Kostenfaktoren und entscheidet, ob eigene Richtwerte veröffentlicht werden (Rückfrage, mit R6/R10 bündeln). Ohne Entscheidung erscheint der Artikel ohne Zahlen. Liefert der Kunde bis zum Launch auch keine Bestätigung der Kostenfaktoren, den Artikel zurückstellen wie P31.
- **Meta-Title soll lauten:** „Was kostet eine Unterhaltsreinigung? Die Kostenfaktoren | BGS Gebäudeservice“. Begründung: konkrete Kostenfrage, klar unterscheidbar vom Titel der Leistungsseite („Unterhaltsreinigung in Luzern und Zug | BGS Gebäudeservice“, P03). Keine Jahreszahl.
- **Meta-Description soll lauten:** „Wovon der Preis einer Unterhaltsreinigung abhängt: Fläche, Reinigungsrhythmus, Verschmutzung und Einsatzzeiten. BGS Gebäudeservice erstellt in den Kantonen Luzern und Zug eine kostenlose, unverbindliche Offerte vor Ort.“ Die vier Faktoren erst nach Bestätigung durch den Kunden verwenden.
- **URL-Slug:** `reinigungskosten-schweiz` beibehalten. Eine Umbenennung hat keinen belegten Vorteil, die regionale Eingrenzung steht im Text.
- **H1-Vorschlag:** „Was kostet eine Unterhaltsreinigung? Die wichtigsten Kostenfaktoren“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML, keine Reiter):**
  1. Kurzantwort in zwei bis drei Sätzen: Der Preis hängt von Fläche, Rhythmus, Verschmutzung und Einsatzzeiten ab. Eine belastbare Zahl gibt es erst nach einer Besichtigung. BGS kommt dafür kostenlos und unverbindlich vorbei (N014).
  2. Kostenfaktoren als sichtbare Liste, präzisiert (siehe Passagen).
  3. Wie abgerechnet wird: nur die Modelle, die BGS tatsächlich nutzt, etwa Stundensatz, Monatspauschale oder Fläche (Rückfrage an den Kunden).
  4. Optional: Beispielrechnung oder Richtwerte, nur mit Freigabe des Kunden und gekennzeichnet („Beispiel, Stand [Monat Jahr], inkl./exkl. MWST, enthaltene Leistungen, Rhythmus“).
  5. Offerten vergleichen: was in einer Offerte stehen sollte (Leistungsverzeichnis, Rhythmus, Material, Zuschläge, Laufzeit, Kündigung), mit Link auf P30.
  6. Ablauf bei BGS: Anfrage → Besichtigung und Offerte (belegt). Weitere Schritte nur nach Bestätigung.
  7. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“.
- **Zu streichende oder zu ersetzende Passagen:**
  - „Transparente Informationen zu Reinigungskosten und Preisgestaltung in Zürich, Zug und Luzern.“ (Z. 41) → „Wovon die Kosten einer Unterhaltsreinigung abhängen und wie Sie zu einer verlässlichen Offerte kommen.“ Grund: Zürich liegt nicht im Arbeitsgebiet (R4), „transparent“ ohne belegte Zahlen.
  - „Die Kosten für professionelle Reinigungsdienstleistungen variieren je nach Region, Leistungsumfang und Objektgröße. In diesem Ratgeber geben wir Ihnen einen transparenten Überblick über die Preisgestaltung in der Schweiz …“ (Z. 56) → „Was eine Unterhaltsreinigung kostet, hängt vor allem von Fläche, Rhythmus, Verschmutzung und Einsatzzeiten ab. Hier lesen Sie, wie diese Faktoren wirken und was in einer Offerte stehen sollte.“ Grund: Der Artikel bietet keinen Überblick über die Schweiz, Schweizer Schreibung.
  - „Als größte Stadt der Schweiz hat Zürich ein hohes Preisniveau. Die Kosten liegen typischerweise 10-15% über dem Schweizer Durchschnitt.“ (Z. 72) → streichen. Grund: Quelle, Zeitraum und der Durchschnittswert selbst fehlen (Quelle fehlt/zu belegen), Zürich wird laut Eigenangabe nicht bedient (SEITE-P29-001, -002).
  - Preistabellen: Zürich „CHF 8-12“ (m²/Monat), „CHF 45-65“, „CHF 55-75“ (Stundensatz, Z. 75–85), Zug „CHF 7-11“, „CHF 42-62“, „CHF 52-72“ (Z. 98–108), Luzern „CHF 6-10“, „CHF 40-58“, „CHF 50-68“ (Z. 121–131) → streichen oder durch vom Kunden freigegebene Richtwerte ersetzen, jeweils mit Stand, MWST-Hinweis, Leistungsumfang und Rhythmus. Grund: SEITE-P29-001.
  - „Zug als Wirtschaftsstandort hat ebenfalls höhere Preise, liegt aber leicht unter Zürich.“ (Z. 95) und „Luzern bietet ein ausgewogenes Preis-Leistungs-Verhältnis mit moderaten Kosten.“ (Z. 118) → streichen. Grund: unbelegte Einschätzungen, kein Entscheidungsnutzen.
  - „Objektgröße: Größere Flächen profitieren von Mengenrabatten“ (Z. 141) → „Fläche und Raumarten: Grösse, Bodenbeläge, Sanitärräume und Glasflächen bestimmen den Zeitaufwand.“ Grund: „Mengenrabatte“ nur nennen, wenn BGS sie gewährt (Rückfrage).
  - „Reinigungsfrequenz: Häufigere Reinigung reduziert den Aufwand pro Einsatz“ (Z. 142) → „Rhythmus: Bei häufiger Reinigung sinkt oft der Aufwand je Einsatz, dafür steigt die Zahl der Einsätze. Massgeblich ist der Betrag pro Monat in der Offerte.“ Grund: Die heutige Fassung legt eine Ersparnis nahe.
  - „Verschmutzungsgrad: Stark frequentierte Bereiche benötigen mehr Aufmerksamkeit“ (Z. 143) → „Nutzung: Stark begangene Eingänge, Küchen und Sanitärräume brauchen mehr Zeit als wenig genutzte Räume.“ Grund: konkreter, vom Kunden zu bestätigen.
  - „Einsatzzeiten: Nacht- und Wochenendarbeit ist teurer“ (Z. 145) → „Einsatzzeiten: Reinigung am Abend, in der Nacht oder am Wochenende kann Zuschläge auslösen. Ob und in welcher Höhe, steht in der Offerte.“ Nur verwenden, wenn BGS solche Zuschläge tatsächlich erhebt.
  - „Preisfaktoren im Überblick“ (H2, Z. 59) → „Kostenfaktoren“. Grund: Unter der heutigen Überschrift stehen regionale Preistabellen, die Faktoren folgen erst danach.
  - „PREISÜBERSICHT“ (Rubrik, Z. 36) → „Ratgeber“ oder weglassen. Grund: Nach der Überarbeitung ist der Artikel keine Preisübersicht, Kontrast siehe GLOBAL-026.
  - „Kontaktieren Sie uns für eine kostenlose Bedarfsanalyse und ein maßgeschneidertes Angebot.“ (Z. 151) → „BGS Gebäudeservice kommt für eine kostenlose, unverbindliche Offerte bei Ihnen vorbei.“ Grund: belegt (N014), Schweizer Begriff „Offerte“, keine Floskel (GLOBAL-030).
  - „Jetzt Angebot anfordern“ (Z. 152) → „Kostenlose Offerte vor Ort anfragen“. Grund: einheitliche primäre CTA (GLOBAL-034).
  - Schreibweisen „größte“, „Objektgröße“, „Größere“, „maßgeschneidertes“ → „ss“ (GLOBAL-037).
- **Autor- und Datumsangaben:** Unter der H1 „Von [Vorname Name, Funktion] · Veröffentlicht am [TT.MM.JJJJ]“ und nur bei inhaltlicher Überarbeitung „Aktualisiert am [TT.MM.JJJJ]“. Die Werte liefert der Kunde. Als Autor nur eine reale Person, die den Text verantwortet und der Nennung zustimmt, sonst die Organisation BGS Gebäudeservice GmbH. Keine erfundenen Namen und keine KI-Porträts. Werden Richtwerte veröffentlicht, steht direkt bei den Zahlen „Stand der Angaben: [Monat Jahr]“. Lesezeit aus der Wortzahl berechnen oder weglassen (SEITE-P27-001). Keine Jahreszahl im Titel.
- **Bilder:** Das heutige Bild (verfremdete Banknoten, Taschenrechner mit unleserlicher Beschriftung, Einschätzung KI) ist das mobile LCP-Element (N030). Weglassen oder durch ein echtes, freigegebenes Foto ersetzen. Ohne passendes Foto erscheint der Artikel ohne Titelbild, dann ist die H1 das erste sichtbare Element. Mit Bild: AVIF/WebP, `sizes` passend zur Darstellungsbreite (Desktop ca. 840 px, mobil ca. 360 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil (Projektbudget, Abschnitt I), Alt-Text nach Inhalt oder leer bei dekorativer Verwendung [S17]. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `BlogPosting` mit `headline` (= H1), `description` (= Meta-Description), `datePublished` (tatsächliches Datum der Veröffentlichung der überarbeiteten Fassung auf der Launch-Domain, nicht 2025), `dateModified` (letzte inhaltliche Überarbeitung, identisch mit „Aktualisiert am“ und dem `lastmod` der Sitemap), `author` (nur eine reale Person oder die Organisation), `publisher` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten, GLOBAL-010), `image` (nur bei freigegebenem Bild), `mainEntityOfPage` bzw. `url` = Canonical, `inLanguage` „de-CH“. Kein FAQ-Schema [S13], keine Preisauszeichnung (`Offer`, `PriceSpecification`) im Artikel. Das Markup muss dem sichtbaren Inhalt entsprechen [S10]. Ob und wie Google Artikel-Markup darstellt, vor der Umsetzung gegen die aktuelle Dokumentation prüfen (in 09-QUELLEN nicht erfasst) [S11].
- **Linkempfehlungen:**
  - In der Kurzantwort → `/basis/unterhaltsreinigung` mit dem Linktext „Unterhaltsreinigung in Luzern und Zug“.
  - Wo Grund- oder Sonderreinigungen erwähnt werden → `/basis/sonderleistungen` mit dem Linktext „Grund- und Sonderreinigungen“ (nach R3).
  - Im Abschnitt „Offerten vergleichen“ → `/blog/richtige-reinigungsfirma-finden` mit dem Linktext „Worauf Sie bei der Wahl einer Reinigungsfirma achten sollten“.
  - Am Schluss → `/kontakt` bzw. Formular mit vorausgewählter Leistung, Linktext „Kostenlose Offerte vor Ort anfragen“.
  - Eingehend von `/basis/unterhaltsreinigung`, an der Stelle, die dort die „Service-Pakete“ ersetzt („Umfang und Preis legen wir nach der Besichtigung fest …“, P03), mit dem Linktext „Wovon die Kosten einer Unterhaltsreinigung abhängen“. Eingehend außerdem von P30 (Kriterium „Offerte und Preislogik“).

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Änderungsdaten in der Sitemap müssen wahrheitsgemäß sein. [S06]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P29-001 · Preisspannen ohne Quelle, Stand und Bezugsgröße, auf der Zürich-Seite als eigene Preise

- **Ist-Zustand:** Reiter Zürich (voreingestellt, im HTML): „Büroreinigung (pro m²/Monat) CHF 8-12“, „Unterhaltsreinigung (Stundensatz) CHF 45-65“, „Grundreinigung (Stundensatz) CHF 55-75“ (Z. 75–85), dazu „Die Kosten liegen typischerweise 10-15% über dem Schweizer Durchschnitt.“ (Z. 72). Reiter Zug: CHF 7-11 / 42-62 / 52-72 (Z. 98–108). Reiter Luzern: CHF 6-10 / 40-58 / 50-68 (Z. 121–131). Es fehlen Quelle, Stand, der Hinweis, ob die MWST enthalten ist, der Leistungsumfang und beim Preis pro m² der Reinigungsrhythmus, obwohl der Artikel den Rhythmus selbst als Kostenfaktor nennt. Einen Wert für den „Schweizer Durchschnitt“ nennt der Artikel nicht. `/standorte/zuerich` führt dieselben Spannen als eigene Preise: „In Zürich liegen die Preise für Büroreinigung typischerweise zwischen CHF 8-12 pro m² monatlich. Für Unterhaltsreinigung berechnen wir CHF 45-65 pro Stunde.“ (`app/standorte/zuerich/page.tsx:186`).
- **Priorität:** P1 · **Launch-Blocker:** ja (vorgeschlagen, G09 „unfreigegebene Claims“, Entscheidung bei G14). Begründung: Über die Zürich-Seite werden die Spannen zu Preisaussagen des Anbieters. Ohne Freigabe entstehen falsche Erwartungen für das Offertgespräch.
- **Vorgabe:** Alle Zahlen streichen. Zahlen nur veröffentlichen, wenn der Kunde sie als eigene Richtwerte freigibt (mit Stand, MWST-Hinweis, Leistungsumfang, Rhythmus, gegebenenfalls Mindesteinsatz und dem Hinweis „Beispiel“) oder wenn eine zitierbare Quelle mit Zeitraum und Region vorliegt (Quelle fehlt/zu belegen). Dieselbe Regel gilt für die FAQ auf `/standorte/zuerich` (Bericht der Standortseite bzw. Phase 4).
- **Abnahme:** Für jeden CHF-Betrag und jede Prozentangabe auf der Website liegt eine dokumentierte Freigabe oder eine Quelle mit Datum vor. Blog- und Standortseiten widersprechen sich nicht (Volltextsuche nach „CHF“).
- **Evidenz:** Inhalts- und Codebefund. Die Richtigkeit der Werte ist NICHT PRÜFBAR, weil keine Quelle angegeben ist. **Quelle:** S02

### SEITE-P29-002 · Die regionale Gliederung stellt das nicht bediente Zürich in den Vordergrund, das Arbeitsgebiet fehlt im HTML

- **Ist-Zustand:** Die Reiter „Zürich | Zug | Luzern“ starten mit `defaultValue="zuerich"` (Z. 60). Nur der Zürich-Inhalt wird im HTML ausgeliefert. Zug und Luzern, also das Arbeitsgebiet laut Eigenangabe (N014), erscheinen erst nach einem Klick und stehen nicht im HTML (Faktenblatt, Abgleich mit N007). Die Einleitung verspricht „Preisgestaltung in Zürich, Zug und Luzern“ (Z. 41). Die regionalen Einschätzungen sind unbelegt: „Zug als Wirtschaftsstandort hat ebenfalls höhere Preise, liegt aber leicht unter Zürich.“ (Z. 95), „Luzern bietet ein ausgewogenes Preis-Leistungs-Verhältnis mit moderaten Kosten.“ (Z. 118).
- **Priorität:** P2 · **Launch-Blocker:** nein (die Region läuft über GLOBAL-021)
- **Vorgabe:** Die regionalen Reiter entfernen. Regionale Unterschiede nur als sichtbaren Text für LU/ZG nennen, wenn sie belegt sind, sonst keine regionalen Preisaussagen.
- **Abnahme:** Keine Nennung von Zürich ohne Bestätigung (R4). Der gesamte Artikeltext steht im ausgelieferten HTML (Textproben-Abgleich wie in N023).
- **Evidenz:** Render- und Inhaltsbefund. **Quelle:** S01, S03

### SEITE-P29-003 · Hinterlegte, derzeit wirkungslose Metadaten würden Scheinaktualität erzeugen

- **Ist-Zustand:** Die `SEO`-Komponente (Z. 19–23) enthält den Titel „Reinigungskosten Schweiz 2025: Preise & Spartipps | Swiss Reinigungsfirma“ und die Beschreibung „Aktuelle Preise für Reinigungsdienstleistungen in der Schweiz. Kostenübersicht, Preisfaktoren und Tipps zum Sparen …“. Der Artikel enthält keine Spartipps, „2025“ und „Aktuelle Preise“ sind unbelegt, der Markenname ist „Swiss Reinigungsfirma“ (GLOBAL-020). Heute wird nichts davon ausgeliefert (GLOBAL-009). Wird GLOBAL-009 behoben, indem diese Angaben einfach aktiviert werden, gehen sie live.
- **Priorität:** P3 · **Launch-Blocker:** nein
- **Vorgabe:** Die hinterlegten Angaben nicht übernehmen, sondern Titel und Beschreibung aus Abschnitt 4 verwenden. Jahreszahlen im Titel nur, wenn der Inhalt jährlich nachweisbar gepflegt wird und ein Stand angegeben ist.
- **Abnahme:** Das ausgelieferte `<title>` und die Beschreibung entsprechen der Vorgabe. Kein „2025“ und kein „aktuell“ ohne Datum.
- **Evidenz:** Codebefund. Die Wirkung ist HYPOTHESE (latentes Risiko bei der Umsetzung von GLOBAL-009). **Quelle:** S08, S09, S26

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben, jede Zahl mit Freigabe oder Quelle und Stand.
- [ ] Datum, Autor und Lesezeit wahrheitsgemäß, Sitemap-`lastmod` gleich `dateModified`.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft, mobiler Labor-LCP nach dem Bildwechsel neu gemessen.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Seitenspezifischer Launch-Blocker: SEITE-P29-001 (Preisangaben ohne Freigabe, vorgeschlagen). Launch-Blocker über GLOBAL-031 (Datum vor Projektbeginn auf `/blog`), -010 (Metadaten), -020 (Identität), -021 (Region Zürich), -002 und -003 (Chat und Formular aus dem Layout).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S01, S02, S03, S06, S08, S09, S10, S11, S13, S17, S26).
