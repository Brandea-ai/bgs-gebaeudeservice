# Seitenanalyse: Datenschutz

**Seiten-ID: P12 (Inventar U05)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/datenschutz` · **Codepfad:** `app/datenschutz/page.tsx` (174 Zeilen), Cookie-Banner `client/src/components/CookieConsent.tsx` (207 Zeilen) · **Stand:** `d7e1122`

**Hinweis:** Keine Rechtsprüfung (B07). Dieser Bericht gleicht die Erklärung mit der technisch nachgewiesenen Verarbeitung ab. Ob eine Formulierung rechtlich genügt, entscheidet die Rechtsprüfung. Ein Compliance-Siegel wird nicht vergeben.

## 1. Aufgabe dieser Seite

Die tatsächliche Datenverarbeitung verständlich und fachlich korrekt erklären.

**Abgrenzung:** Datenschutzinformation, keine kommerzielle Suchintention. Nicht auf Wortzahl oder Keyworddichte optimieren.

**Primäre Zielhandlung:** Verarbeitung verstehen und Rechte beziehungsweise Datenschutzeinstellungen erreichen.

**Ergebnis der Prüfung:** Die Erklärung ist eine DSGVO-Mustervorlage (Art. 6 DSGVO, keine Erwähnung des Schweizer Datenschutzgesetzes). Sie beschreibt Dinge, die es nicht gibt, etwa Analyse des Nutzerverhaltens und Cookies. Tatsächlich eingesetzte Dienste verschweigt sie: Hosting in den USA, Versanddienst, Weiterleitung der Anfragen an die Agentur, KI-Chat bei Google, Google Maps und Google Fonts. Über das Kontaktformular sagt sie „Diese Daten geben wir nicht ohne Ihre Einwilligung weiter“, obwohl jede Anfrage über einen Versanddienst an die Agentur geht (GLOBAL-027). Die Kerninhalte stehen in sieben geschlossenen Akkordeons.

## 2. Seitenspezifische Prüfliste

- [x] Eingesetzte Dienste, Formularwege, Hosting, Tracking und Einbettungen zuerst technisch inventarisieren. → *Erledigt, siehe Inventar in Abschnitt 3 (Code, Plattformdaten, Netzwerkmessung N034).*
- [x] Datenschutzhinweise gegen genau diese Verarbeitung prüfen; keine beliebige Mustervorlage als fertig bewerten. → *BEFUND: Von zehn inventarisierten Punkten beschreibt die Erklärung einen zutreffend (verschlüsselte Übertragung). Drei beschreibt sie falsch (Kontaktformular, Cookies, Analyse), sechs fehlen ganz (GLOBAL-027).*
- [x] Zwecke, beteiligte Empfänger, Speicher-/Löschregeln und Ansprechpartner mit dem Unternehmen fachlich klären. → *NICHT PRÜFBAR ohne den Kunden: Speicherdauer, Empfänger nach der Umstellung (heute Agentur), Zuständigkeit für Datenschutzanfragen (R5, R7, R11). Belegt ist nur die Adresse der Verantwortlichen (N033). Genannt wird dort aber „Swiss Reinigungsfirma“.*
- [x] Consent-Banner und Widerrufsweg mit Text und tatsächlichem Netzwerkverhalten abgleichen. → *BEFUND: Ohne jede Auswahl setzt die Website auf `/` und `/kontakt` **keine Cookies** und nutzt keinen Browser-Speicher. `/kontakt` lädt aber sofort Google Maps und Google Fonts (N034, N020). Der Banner bietet „Analyse-Cookies“ und „Marketing-Cookies“ an, die es nicht gibt. Die Auswahl landet in `localStorage` und wird nirgends ausgewertet (N010). Einen Weg, die Auswahl später zu ändern oder zu widerrufen, gibt es nicht (SEITE-P12-001, GLOBAL-019).*
- [x] Unbenutzte Dienste nicht als tatsächlich eingesetzt aufführen; eingesetzte Dienste nicht verschweigen. → *BEFUND: Aufgeführt, aber nicht vorhanden: Analyse des Nutzerverhaltens, Session- und dauerhafte Cookies. Vorhanden, aber verschwiegen: Vercel (USA), Resend, Empfänger `info@brandea.de`, Google Gemini (Chat und KI-Berater), E-Mail-Weiterleitung von Chatverläufen, Google Maps, Google Fonts, `localStorage` (GLOBAL-027).*
- [x] Kontaktformular, Newsletter, Terminbuchung oder Chat nur berücksichtigen, soweit tatsächlich vorhanden. → *Teilweise BESTANDEN: Newsletter und Buchung kommen weder vor noch werden sie erwähnt. BEFUND: Das Kontaktformular ist falsch beschrieben (Einwilligung als einzige Grundlage, „keine Weitergabe“), der vorhandene Chat fehlt ganz.*
- [x] Lesbarkeit, Gliederung und beständige Erreichbarkeit prüfen. → *Erreichbarkeit BESTANDEN: Footer auf allen 32 Seiten, Link im Formular und im Cookie-Banner. BEFUND Gliederung: Die sieben Kernabschnitte sind Akkordeons, deren Inhalt (ca. 3.700 Zeichen) nicht im ausgelieferten HTML steht (N023). Es gibt kein Stand-Datum. Überschriften wie „Allgemeine Hinweise“ sagen nicht, welche Verarbeitung gemeint ist (SEITE-P12-002).*
- [x] Juristische Einzelfallprüfung als eigenen offenen oder bestätigten Nachweis dokumentieren; kein pauschales Compliance-Siegel vergeben. → *Offen: keine Rechtsprüfung vorhanden (B07). Kein Siegel vergeben.*

## 3. Individuellen Ist-Zustand erfassen

### Inventar: tatsächliche Verarbeitung gegen Erklärung

| Nr. | Verarbeitung | Technisch nachgewiesen | In der Erklärung | Bewertung | Nachweis |
|---|---|---|---|---|---|
| 1 | Hosting, Auslieferung, Funktions-Logs | Vercel. Build in Region iad1 (USA), keine Regionsangabe in `vercel.json`. Runtime-Logs mit Pfad und Zeit | „Der Provider der Seiten erhebt … Server-Log-Dateien“, Grundlage Art. 6 Abs. 1 lit. f DSGVO. Kein Anbietername, kein Ausland | unvollständig | N002, N003, N012 |
| 2 | Kontaktformular | Name, E-Mail, Telefon, Leistung, Nachricht → `/api/contact` → Resend (Versanddienst) → Empfänger `info@brandea.de` (Agentur), Absender `info@bgs-service.ch` | „…bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter“, Grundlage ausschließlich Einwilligung | **falsch** | N016, N032 |
| 3 | Pflicht-Einwilligung im Formular | „…dauerhaft gespeichert werden“ | Keine Speicherdauer genannt | widersprüchlich | N027 |
| 4 | KI-Chat | Eingaben → `/api/chat` → Google Gemini | fehlt | **fehlt** | N017, N012 |
| 5 | Chat-Weiterleitung an Spezialisten | Name, Kontaktdaten und vollständiger Gesprächsverlauf per E-Mail an die Agentur | fehlt | **fehlt** | Code `app/api/chat-to-specialist/route.ts:9-65` |
| 6 | KI-Branchen-Berater (Startseite) | Eingabe → `/api/industry-analysis` → Google Gemini | fehlt | **fehlt** | Code `app/api/industry-analysis/route.ts:8` |
| 7 | Google Maps, Google Fonts | Auf `/kontakt` ohne Einwilligung geladen (IP-Adresse geht an Google) | fehlt | **fehlt** | N020, N034 |
| 8 | Browser-Speicher | `localStorage` „cookieConsent“ nach der Banner-Auswahl. Keine Cookies gemessen | „Unsere Website verwendet Cookies“, Session- und dauerhafte Cookies | **falsch** | N010, N034 |
| 9 | Analyse, Tracking | nicht vorhanden | „Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden“ | **falsch** | N010 |
| 10 | Transportverschlüsselung | HTTPS mit HSTS | „SSL-Verfahren (Secure Socket Layer)“ | zutreffend, veralteter Begriff | N004 |

Die Schrift Inter ist selbst gehostet und fehlt deshalb zu Recht in der Liste (N010).

### Seitenzustand

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/datenschutz`, 200 | Beibehalten | N007 |
| Hauptzielgruppe und Suchintention | Informationspflicht, keine kommerzielle Suchintention | Unverändert | — |
| Meta-Title | Globaler Standardtitel | Siehe Vorgabe | N007, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung | Siehe Vorgabe | N007 |
| H1 und Abschnittsstruktur | H1 „Datenschutzerklärung“ (BESTANDEN). H2 „Verantwortliche Stelle“, „Kontakt bei Datenschutzfragen“, dazwischen 7 Akkordeons (H3) | Siehe Abschnittsfolge | Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, Sitemap ja | Indexierbar lassen, Canonical selbstreferenzierend. Kein Grund für `noindex` | N007 |
| Wichtigste Textpassagen | 258 sichtbare Wörter, dazu ca. 3.700 Zeichen in Akkordeons. Verantwortlich „Swiss Reinigungsfirma“, Adresse Emmenbrücke, Telefon, `info@bgs-service.ch` | Siehe Streichliste | N028 |
| Haupt-CTA und Ziel | Kontakt `info@bgs-service.ch` für Rechte und Widerruf | Unverändert, ergänzt um einen Weg zu den Datenschutzeinstellungen | Faktenblatt |
| Bildmotive und Alt-Texte | keine | — | — |
| Interne Links | Navigation, Footer | Links auf Impressum und Kontakt | N009 |
| Schema-Typen | keine | keine nötig | — |
| Mobile/Desktop/Accessibility | Kein Overflow. axe: 1 Kontrastverstoß, 25 zu kleine Klickziele. Akkordeons per Tastatur bedienbar | GLOBAL-026 | N031 |
| Performance/Ladeabhängigkeiten | 1,8 MB dekodiert, 82 Anfragen für eine Textseite | Budgets aus Abschnitt I | N020 |
| Globale Abhängigkeiten | GLOBAL-002 (Chat), -003 (Empfänger), -011, -019, -020, -026, -027 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Die Erklärung muss die Verarbeitung **nach** den Entscheidungen zu Chat und Karte (R8), Empfänger (R5, GLOBAL-003), Region und Hosting beschreiben. Sie wird deshalb zuletzt geschrieben und gegen die fertige Umsetzung geprüft, nicht vorher. Verantwortliche laut Register: BGS - Gebäudeservice GmbH, Tannhof 10, 6020 Emmenbrücke (N033).

- **Meta-Title soll lauten:** „Datenschutzerklärung | BGS - Gebäudeservice GmbH“
- **Meta-Description soll lauten:** „Wie die BGS - Gebäudeservice GmbH Personendaten auf dieser Website bearbeitet: Kontaktformular, Hosting, eingesetzte Dienste, Aufbewahrung und Ihre Rechte.“
- **URL-Slug:** `/datenschutz` beibehalten.
- **H1-Vorschlag:** „Datenschutzerklärung“ (beibehalten).
- **Abschnittsfolge:**
  1. Verantwortliche und Kontakt für Datenschutzfragen (registrierter Name, Adresse, E-Mail).
  2. Kurzüberblick in drei bis fünf Punkten: welche Daten, wofür, an wen.
  3. Ein Abschnitt je tatsächlicher Verarbeitung mit Zweck, Daten, Empfängern, Ort und Aufbewahrung: Websitebesuch und Hosting; Kontaktformular einschließlich Versanddienst und Empfänger; Karte, Chat und KI-Berater nur, wenn sie nach R8 bleiben.
  4. Bekanntgabe ins Ausland (Vercel, Resend und gegebenenfalls Google mit Sitz bzw. Verarbeitung in den USA) mit den Garantien, die die Rechtsprüfung festlegt.
  5. Aufbewahrung und Löschung (Fristen vom Kunden, R11).
  6. Rechte der betroffenen Personen und Beschwerdeweg, nach Rechtsprüfung für das Schweizer DSG und gegebenenfalls zusätzlich die DSGVO.
  7. Datenschutzeinstellungen: Link, der den Banner erneut öffnet, falls es einwilligungspflichtige Dienste gibt.
  8. Stand (Datum).
- **Zu streichende oder zu ersetzende Passagen:**
  - „Verantwortlich für die Datenverarbeitung auf dieser Website ist: Swiss Reinigungsfirma“ → „BGS - Gebäudeservice GmbH“ (N033, GLOBAL-020).
  - „Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.“ → streichen. Grund: Es gibt keine Analyse (N010).
  - „Unsere Website verwendet Cookies. … Einige Cookies sind "Session-Cookies." …“ → streichen oder durch „Diese Website setzt keine Cookies. Ihre Auswahl im Datenschutz-Hinweis speichern wir im Speicher Ihres Browsers.“ ersetzen, solange das zutrifft (N034).
  - „Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).“ → Beschreibung des echten Wegs (Versanddienst, Empfänger, Aufbewahrung) in der Fassung der Rechtsprüfung. Grund: sachlich falsch (N016).
  - „Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.“ → streichen (Vorlagenrest, die Seite ist die Datenschutzerklärung).
  - „…das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe…“ → „Die Übertragung ist per HTTPS (TLS) verschlüsselt.“
  - Cookie-Banner „Wir verwenden Cookies …“ mit „Analyse-Cookies“ und „Marketing-Cookies“ → entfernen, wenn nach R8 keine einwilligungspflichtigen Dienste bleiben. Sonst eine Lösung, die Dienste vor der Einwilligung tatsächlich blockiert und einen Widerruf erlaubt (GLOBAL-019, SEITE-P12-001).
- **Bilder:** keine.
- **Strukturierte Daten:** keine. Richtigkeit geht vor Markup-Vollständigkeit.
- **Linkempfehlungen:**
  - Im Abschnitt Verantwortliche auf `/impressum` mit dem Linktext „Impressum“.
  - Im Abschnitt Kontaktformular auf `/kontakt` mit dem Linktext „Kontaktformular“.
  - Im Footer neben „Datenschutz“ ein Link „Datenschutzeinstellungen“ (öffnet den Banner), nur wenn es einwilligungspflichtige Dienste gibt.

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07] Die deutschen Vorschriften zu Endgeräte-Zugriffen [S39] betreffen Anbieter nach deutschem Recht. Ob sie hier einschlägig sind, klärt die Rechtsprüfung.

## 5. Befunde und Hypothesen

Die inhaltliche Abweichung der Erklärung von der tatsächlichen Verarbeitung führt GLOBAL-027. Google-Dienste ohne Einwilligung und die wirkungslose Banner-Auswahl führt GLOBAL-019. Das Inventar oben ist der seitenbezogene Nachweis dazu. Seitenspezifisch:

### SEITE-P12-001 · Die Datenschutzeinstellungen lassen sich nicht ändern oder widerrufen, und sie beschreiben Kategorien, die es nicht gibt

- **Ist-Zustand:** Der Banner erscheint nur, solange `localStorage` keinen Eintrag „cookieConsent“ hat (`CookieConsent.tsx:17-20`). Danach gibt es keinen Link und keine Funktion, um ihn erneut zu öffnen. Er bietet „Analyse-Cookies“ und „Marketing-Cookies“ an, die Website setzt aber gar keine Cookies (N034).
- **Auswirkung:** Wer „Alle akzeptieren“ geklickt hat, kann das nicht zurücknehmen. Der Banner behauptet eine Verarbeitung, die nicht stattfindet, und verbirgt die, die stattfindet (Google auf `/kontakt`).
- **Priorität:** P2 · **Launch-Blocker:** nein (der Blocker-Anteil liegt bei GLOBAL-019)
- **Vorgabe:** Nach R8 entscheiden. Ohne einwilligungspflichtige Dienste Banner entfernen. Mit solchen Diensten: nur echte Kategorien, Dienste bis zur Einwilligung blockieren, dauerhafter Link „Datenschutzeinstellungen“ im Footer.
- **Abnahme:** Netzwerkprotokoll ohne Einwilligung zeigt keine Anfrage an einwilligungspflichtige Dienste. Die Auswahl lässt sich über den Footer jederzeit ändern. Der Banner nennt nur tatsächlich eingesetzte Kategorien.
- **Evidenz:** Messung N034, Codebefund. **Quelle:** —

### SEITE-P12-002 · Kerninhalte verborgen, ohne Stand und ohne Gliederung nach Verarbeitungen

- **Ist-Zustand:** Sieben Akkordeons („Allgemeine Hinweise“, „Datenerfassung auf unserer Website“, „Server-Log-Dateien“, „Kontaktformular“, „Ihre Rechte“, „Cookies“, „Datensicherheit“), alle geschlossen, Inhalt nicht im ausgelieferten HTML (N023). Kein Stand-Datum.
- **Auswirkung:** Wer die Erklärung lesen oder archivieren will, muss sieben Bereiche einzeln öffnen. Ohne Datum ist nicht erkennbar, welche Fassung zu welchem Zeitpunkt galt.
- **Priorität:** P3 · **Launch-Blocker:** nein
- **Vorgabe:** Offene Gliederung mit Inhaltsverzeichnis und Sprungmarken, Überschriften nach Verarbeitung (Abschnitt 4), Stand-Datum am Ende.
- **Abnahme:** Der gesamte Text steht im ausgelieferten HTML und ist ohne Klick lesbar. Ein Stand-Datum ist vorhanden.
- **Evidenz:** Renderbefund N023. **Quelle:** S03

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

Zusätzlich für diese Seite: Das Inventar in Abschnitt 3 ist gegen die fertige Umsetzung wiederholt (Code, Netzwerkprotokoll, Plattformdaten), und jede Zeile ist entweder korrekt beschrieben oder nicht mehr vorhanden. Die Rechtsprüfung ist dokumentiert (B07).

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-027 (Erklärung entspricht nicht der Verarbeitung), -019 (Google ohne Einwilligung), -020 (Verantwortliche) und -003 (Empfänger bei der Agentur).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S03, S07, S08, S09, S17, S39).
