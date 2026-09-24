# Seitenanalyse: Impressum

**Seiten-ID: P11 (Inventar U04)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/impressum` · **Codepfad:** `app/impressum/page.tsx` (102 Zeilen) · **Stand:** `d7e1122`

**Hinweis:** Das Impressum nennt eine Person mit Namen. Er wird hier nicht wiedergegeben („die genannte Person“). Keine Rechtsprüfung (B07): Dieser Bericht gleicht Fakten ab und bewertet nicht, welche Angaben rechtlich verpflichtend sind.

## 1. Aufgabe dieser Seite

Die erforderlichen Anbieterinformationen korrekt und leicht zugänglich bereitstellen.

**Abgrenzung:** Anbieterinformation, nicht Wettbewerber einer Leistungsseite. Indexierungsentscheidung begründen statt pauschal eine SEO-Regel zu erfinden.

**Primäre Zielhandlung:** Gesetzlich relevante Informationen finden und Anbieter kontaktieren können.

**Ergebnis der Prüfung:** Adresse und UID stimmen mit dem amtlichen UID-Register überein (N033). Laut Register gehört die UID der **„BGS - Gebäudeservice GmbH“**, Tannhof 10, 6020 Emmenbrücke, Status aktiv. Das Impressum nennt als Verantwortliche aber die „Swiss Reinigungsfirma“ und keine Rechtsform. Dazu kommen Standardtexte („Der Autor …“), ein Datenschutzabsatz und ein Block „⚠️ Wichtige Hinweise“, der die ISO-Aussagen der übrigen Seiten widerlegt und KI-Bilder einräumt.

## 2. Seitenspezifische Prüfliste

- [x] Anbietername, Rechtsform, Vertretung, Anschrift und Kontakt anhand bestätigter Unternehmensangaben prüfen. → *Anschrift BESTANDEN (Tannhof 10, 6020 Emmenbrücke = UID-Register, N033). BEFUND Name: „Swiss Reinigungsfirma“ statt „BGS - Gebäudeservice GmbH“. BEFUND Rechtsform: fehlt (laut Register GmbH). Vertretung NICHT PRÜFBAR: Die genannte Person steht ohne Funktion unter dem Firmennamen, „Gründer & Geschäftsführer“ steht nur auf Über uns. Die Zeichnungsberechtigung ist nicht geprüft, weil Zefix den Abruf blockiert (N033). Kontakt: E-Mail `info@bgs-service.ch` stimmt mit der Eigenangabe überein, das Telefon weicht ab (N014, R5) (SEITE-P11-001).*
- [x] Zusätzliche Register-, Steuer-, Berufs- oder Aufsichtsangaben nur soweit tatsächlich einschlägig fachlich prüfen. → *Teilweise: Die UID `CHE-108.687.458` ist korrekt (N033). Die Überschrift lautet „Handelsregistereintrag“, Amt und Firmennummer fehlen (laut N037: Handelsregisteramt Luzern, `CH-100.4.020.559-2`). Laut Register ist die Firma mehrwertsteuerpflichtig (MWST-Nr. = UID mit Zusatz „MWST“); ob sie angegeben werden soll, entscheidet die Rechtsprüfung. Eine Berufs- oder Aufsichtsangabe ist für Reinigung und Hauswartung nicht ersichtlich: NICHT ANWENDBAR, vorbehaltlich B07.*
- [x] Keine ungeprüften Standardtexte, falschen Gesetze oder überholten Pflichtlinks übernehmen. → *BEFUND: verbreitete Mustertexte („Der Autor übernimmt keinerlei Gewähr …“, „Alle Angebote sind unverbindlich“). Der Absatz „Datenschutz“ spricht auf der Impressumsseite von „dieser Datenschutzerklärung“ (Kopierrest). BESTANDEN: keine falschen Gesetzeszitate und keine überholten Pflichtlinks, z. B. keinen EU-Streitschlichtungslink (SEITE-P11-002).*
- [x] Erreichbarkeit aus allen Seitentypen und auf mobilen Geräten prüfen. → *BESTANDEN: Der Footer-Link „Impressum“ steht auf allen 32 Seiten, auch mobil (N009, N020).*
- [x] Firmenidentität gegen Footer, Kontakt und strukturierte Daten abgleichen. → *BEFUND: Footer „© … Swiss Reinigungsfirma“, Kontaktseite ohne Firmennamen, Titel „BGS Gebäudeservice“, keine strukturierten Daten. Keine Stelle nennt den registrierten Namen „BGS - Gebäudeservice GmbH“ (GLOBAL-020).*
- [x] Lesbarkeit und Kopierbarkeit der Angaben sicherstellen. → *BESTANDEN: echte Textangaben (keine Bilder), Telefon und E-Mail als Link. axe: 4 Kontrastverstöße, 25 zu kleine Klickziele (global, GLOBAL-026).*
- [x] Nicht zur kommerziellen Keyword-Seite umschreiben; fachliche Rechtsfreigabe dokumentieren. → *BESTANDEN: keine Keyword-Texte. Eine Rechtsfreigabe ist nicht dokumentiert (B07, R7).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/impressum`, 200 | Beibehalten | N007 |
| Hauptzielgruppe und Suchintention | Anbieterprüfung durch Interessenten, Behörden, Partner. Navigational | Unverändert | — |
| Meta-Title | Globaler Standardtitel | „Impressum \| BGS - Gebäudeservice GmbH“ | N007, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung | Siehe Vorgabe | N007 |
| H1 und Abschnittsstruktur | H1 „Impressum“ (BESTANDEN). H2 „Verantwortlich für den Inhalt“, „Kontakt“, „Handelsregistereintrag“, „Haftungsausschluss“, „Haftung für Links“, „Urheberrechte“, „⚠️ Wichtige Hinweise“, „Datenschutz“ | Siehe Abschnittsfolge | Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, Sitemap ja | Indexierbar lassen, Canonical selbstreferenzierend. Begründung: Die Seite beantwortet Suchen nach Firmenname und Adresse und stützt die Identität. Es gibt keinen Grund für `noindex` | N007, N008 |
| Wichtigste Textpassagen | „Swiss Reinigungsfirma“ (2×), „Die ISO-Zertifizierung befindet sich derzeit in Bearbeitung“, „Einige Bilder auf dieser Website wurden mit Unterstützung von künstlicher Intelligenz (AI) erstellt. Diese dienen ausschließlich zu Illustrations- und Marketingzwecken und repräsentieren die Qualität unserer Dienstleistungen.“ | Siehe Streichliste | N028 |
| Haupt-CTA und Ziel | Keine eigene CTA. Telefon- und E-Mail-Link, Footer-Formular | Unverändert (keine Verkaufs-CTA) | Faktenblatt |
| Bildmotive und Alt-Texte | keine Bilder | — | Faktenblatt |
| Interne Links | Navigation, Footer | Link auf `/datenschutz` und `/kontakt` im Text | N009 |
| Schema-Typen | keine | Keine eigene Auszeichnung nötig. `legalName` und `vatID` gehören in die globale `Organization` (P01) | S14 |
| Mobile/Desktop/Accessibility | Kein Overflow, lesbar. Emoji „⚠️“ in einer Überschrift | Überschrift ohne Emoji | N031 |
| Performance/Ladeabhängigkeiten | 1,8 MB dekodiert, 82 Anfragen, obwohl die Seite nur Text enthält (JS, RSC-Vorabladungen, Footer) | Budgets aus Abschnitt I | N020 |
| Globale Abhängigkeiten | GLOBAL-010, -013, -020, -021, -023, -026, -027 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Grundlage sind das amtliche UID-Register (N033: Name, Rechtsform, Adresse, UID) und die Eigenangaben des Kunden (N014: E-Mail). Die genannte Person, ihre Funktion, die Telefonnummer und alle Rechtstexte erst nach R5, R7 und der Rechtsprüfung (B07).

- **Meta-Title soll lauten:** „Impressum | BGS - Gebäudeservice GmbH“
- **Meta-Description soll lauten:** „Impressum der BGS - Gebäudeservice GmbH, Tannhof 10, 6020 Emmenbrücke: Anbieterangaben, Kontakt und Unternehmens-Identifikationsnummer.“
- **URL-Slug:** `/impressum` beibehalten.
- **H1-Vorschlag:** „Impressum“ (beibehalten, Nutzererwartung).
- **Abschnittsfolge:**
  1. Anbieterin: „BGS - Gebäudeservice GmbH, Tannhof 10, 6020 Emmenbrücke, Schweiz“, der registrierte Name exakt wie im Handelsregister.
  2. Vertretungsberechtigt: Name und Funktion nach Handelsregister (R7).
  3. Kontakt: Telefon (R5), E-Mail `info@bgs-service.ch`.
  4. Register: Handelsregisteramt des Kantons Luzern, Firmennummer `CH-100.4.020.559-2`, UID `CHE-108.687.458`, gegebenenfalls MWST-Nummer. Die Firmennummer stammt aus einer Sekundärquelle (N037) und ist vor der Veröffentlichung im amtlichen Register gegenzuprüfen.
  5. Nach Rechtsprüfung: Haftung und Urheberrecht mit Bildnachweisen (Fotografen, Lizenzen, gegebenenfalls Kennzeichnung KI-generierter Illustrationen).
  6. Verweis auf die Datenschutzerklärung.
- **Zu streichende oder zu ersetzende Passagen:**
  - „Verantwortlich für den Inhalt: Swiss Reinigungsfirma“ → „Anbieterin: BGS - Gebäudeservice GmbH“. Grund: Die UID gehört laut Register der BGS - Gebäudeservice GmbH (N033), „Swiss Reinigungsfirma“ ist keine erkennbare Firma (SEITE-P11-001).
  - „…gehören ausschliesslich der Swiss Reinigungsfirma…“ (Urheberrechte) → „…der BGS - Gebäudeservice GmbH oder den genannten Rechtsinhabern“. Voraussetzung: Die Bildrechte sind geklärt (GLOBAL-023).
  - „Der Autor übernimmt keinerlei Gewähr …“, „Alle Angebote sind unverbindlich …“ → nur in der von der Rechtsprüfung freigegebenen Fassung, mit der Firma statt „der Autor“.
  - Block „⚠️ Wichtige Hinweise“ → streichen. Den ISO-Hinweis braucht es nicht mehr, wenn alle ISO-Behauptungen entfernt sind (GLOBAL-021). KI-Illustrationen, falls welche bleiben, direkt am Bild als „Symbolbild“ kennzeichnen und nicht als Beleg für die „Qualität unserer Dienstleistungen“ ausgeben (GLOBAL-023).
  - Absatz „Datenschutz“ („… sowie dieser Datenschutzerklärung …“) → ein Satz mit Link: „Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.“
- **Bilder:** keine.
- **Strukturierte Daten:** keine eigene Auszeichnung auf dieser Seite. Die globale `Organization` (P01) erhält `legalName` „BGS - Gebäudeservice GmbH“, `address` (Tannhof 10, 6020 Emmenbrücke, CH) und nach Entscheidung des Kunden `vatID` [S14].
- **Linkempfehlungen:**
  - Im Text auf `/datenschutz` mit dem Linktext „Datenschutzerklärung“.
  - Im Kontaktabschnitt auf `/kontakt` mit dem Linktext „Kontaktformular“.
  - Footer-Link „Impressum“ auf allen Seiten beibehalten (BESTANDEN).

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07] Welche Angaben für ein Schweizer Unternehmen verpflichtend sind, klärt die Rechtsprüfung (B07). § 5 DDG [S38] gilt für Anbieter nach deutschem Recht. Ob er hier einschlägig ist, etwa bei einer Ausrichtung auf Deutschland, gehört zur selben Prüfung.

## 5. Befunde und Hypothesen

Die Identität über die ganze Website führt GLOBAL-020, die ISO- und Bildaussagen führen GLOBAL-021 und -023. Seitenspezifisch:

### SEITE-P11-001 · Das Impressum nennt einen Firmennamen, der nicht zur angegebenen UID gehört

- **Ist-Zustand:** „Verantwortlich für den Inhalt: Swiss Reinigungsfirma“, darunter die genannte Person und die Adresse, dann die UID `CHE-108.687.458`. Laut UID-Register gehört diese UID der „BGS - Gebäudeservice GmbH“ an derselben Adresse, Rechtsform GmbH, aktiv (N033). Die Rechtsform fehlt im Impressum, die Funktion der Person ebenfalls.
- **Auswirkung:** Wer den Anbieter prüft, findet auf der Pflichtseite eine Bezeichnung, die zu keiner eingetragenen Firma passt. Das untergräbt das Vertrauen und kann rechtliche Folgen haben (Bewertung in B07).
- **Priorität:** P1 · **Launch-Blocker:** ja
- **Vorgabe:** Registrierten Namen „BGS - Gebäudeservice GmbH“ mit Rechtsform, vertretungsberechtigter Person mit Funktion und Registerangabe (Abschnitt 4). Freigabe durch den Kunden und die Rechtsprüfung.
- **Abnahme:** Name, Rechtsform, Adresse und UID im Impressum stimmen zeichengenau mit dem UID-Register bzw. Handelsregister überein. Footer, Kontaktseite und die strukturierten Daten verwenden denselben Namen.
- **Evidenz:** Inhaltsbefund N028, amtliches Register N033. **Quelle:** S14

### SEITE-P11-002 · Standard- und Marketingtexte statt schlanker Anbieterinformation

- **Ist-Zustand:** Haftungsausschluss mit „Der Autor …“ und „Alle Angebote sind unverbindlich“, ein Datenschutzabsatz mit Verweis auf „dieser Datenschutzerklärung“, ein Block „⚠️ Wichtige Hinweise“ mit ISO-Status und KI-Bild-Hinweis („repräsentieren die Qualität unserer Dienstleistungen“).
- **Auswirkung:** Die Hinweise widerlegen die ISO-Aussagen der Leistungsseiten und verstecken die KI-Kennzeichnung auf einer Seite, die kaum jemand liest. Die Mustertexte sind ungeprüft.
- **Priorität:** P2 · **Launch-Blocker:** nein (ISO und Bilder sind über GLOBAL-021 und -023 Blocker)
- **Vorgabe:** Streichungen und Ersatz nach Abschnitt 4. Die Rechtstexte liefert die Rechtsprüfung.
- **Abnahme:** Das Impressum enthält nur Anbieterangaben, Register, Kontakt und die freigegebenen Rechtshinweise. Kein Marketinghinweis, kein Emoji in Überschriften.
- **Evidenz:** Inhaltsbefund N028. **Quelle:** —

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über SEITE-P11-001 sowie GLOBAL-020 (Identität) und -027 (Datenschutz, Rechtsprüfung).

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S07, S08, S09, S14, S17, S38).
