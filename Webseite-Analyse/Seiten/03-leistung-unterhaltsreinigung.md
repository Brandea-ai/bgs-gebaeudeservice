# Seitenanalyse: Leistung 1 · Unterhaltsreinigung

**Seiten-ID: P03 (Inventar U20)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/basis/unterhaltsreinigung` · **Codepfad:** `app/basis/unterhaltsreinigung/page.tsx` (324 Zeilen) · **Stand:** `d7e1122`

**Zuordnung (vorläufig, E09):** „Leistung 1“ der Vorgabe = Unterhaltsreinigung. Grundlage ist die Eigenangabe des Kunden („Regelmässige Unterhaltsreinigung“, N014). Die endgültige Zuordnung hängt an Rückfrage R3.

## 1. Aufgabe dieser Seite

Eine konkrete Leistungsentscheidung ermöglichen und passende Interessenten zur qualifizierten Anfrage führen.

**Abgrenzung:** Ein primärer Themen-/Intent-Cluster. Allgemeine Unternehmensdarstellung kurz halten; verwandte Leistungen nur erklärend verlinken. Keine pauschale Canonical-Verweisung auf eine andere Leistung.

**Primäre Zielhandlung:** Eine konkrete Anfrage zu dieser Leistung mit nachvollziehbarem weiteren Ablauf; CTA-Wortlaut erst nach Prüfung ausschreiben.

**Ergebnis der Prüfung:** Die Seite beschreibt die Leistung nur stichwortartig (157 sichtbare Wörter, weitere 154 in Reitern). Die Zielhandlung ist vorhanden („Jetzt anfragen“ führt zum Footer-Formular), der zweite Weg „Termin vereinbaren“ führt in den defekten Chat (GLOBAL-002).

## 2. Seitenspezifische Prüfliste

- [x] Den tatsächlichen Namen und URL-Slug der Leistung 1 aus dem bestätigten Zielprojekt ermitteln; anschließend Datei und Inventar konsistent umbenennen. → *Erledigt: `/basis/unterhaltsreinigung`, Datei umbenannt (E09, vorläufig bis R3).*
- [x] Kaufanlass, primäre Entscheiderrolle und Problemstellung anhand realer Angaben festhalten. → *NICHT PRÜFBAR: Die Seite nennt „Büros, Geschäfte und Gewerbeflächen“, reale Angaben des Kunden fehlen (R10). HYPOTHESE: Verwaltungen, Gewerbebetriebe und Praxen in LU/ZG.*
- [x] Leistungsumfang, konkrete Tätigkeiten, Ergebnis und Grenzen verständlich beschreiben. → *BEFUND: Die Tätigkeiten stehen nur als Stichworte im ersten Reiter, Grenzen fehlen ganz (GLOBAL-036).*
- [x] Die Abgrenzung zu jeder der vier anderen Leistungen separat prüfen; keine bloßen Synonyme als eigenständiges Angebot verkaufen. → *BEFUND: Die Abgrenzung zur „Büroreinigung“ (U11) fehlt, beide beschreiben regelmäßige Büroreinigung. Die Abgrenzung zur Grundreinigung steht nur als FAQ-Frage, die Antwort ist nicht im HTML (GLOBAL-011). Zur Hauswartung und zu Sonderleistungen gibt es keinen Hinweis. Kannibalisierung → Phase 4.*
- [x] Eignung und Nicht-Eignung erklären, soweit dies Kunden bei der Auswahl hilft. → *BEFUND: fehlt.*
- [x] Zusammenarbeit, Mitwirkung, Schritte und realistische Zeit-/Kostenfaktoren prüfen; keine Zahlen ohne belastbare Grundlage nennen. → *BEFUND: Der Ablauf (Bedarfsanalyse → Rhythmus → festes Team → Kontrolle) steht nur im zweiten Reiter und nicht im HTML. „Festes Team“ und „digitale Dokumentation“ sind unbelegt. Kostenfaktoren fehlen, die „Service-Pakete“ ohne Inhalt sind nicht hilfreich.*
- [x] Mindestens die vorhandenen relevanten Belege auf Eignung prüfen; fehlende Belege explizit vom Unternehmen anfordern, nicht erfinden. → *BEFUND: keine seitenspezifischen Belege. „Geprüfte Standards“ ist unbelegt (GLOBAL-021). Angefordert über R6.*
- [x] Leistungsspezifische Bilder oder nachvollziehbare Ablaufdarstellungen beurteilen; nicht das gleiche generische Motiv auf allen Seiten verwenden. → *BEFUND: ein KI-typisches Hero-Motiv (1536×1024, `unterhaltsreinigung-hero.jpg`), keine Ablaufgrafik (GLOBAL-023).*
- [x] Echte Einwände, FAQ und Risikofragen beantworten; FAQ-Schema nicht als Google-Pflicht behandeln. → *Teilweise: vier sinnvolle Fragen (Häufigkeit, Anpassung, Unterschied zur Grundreinigung, Reinigungsmittel). Die Antworten sind nicht im HTML (GLOBAL-011), ihre Herkunft ist unklar. Kein FAQ-Schema vorhanden, auch keines nötig.*
- [x] Anfrage-CTA, Vorbelegung und Formularfelder auf diese Leistung abstimmen, ohne den globalen Kontaktprozess zu duplizieren. → *BEFUND: „Jetzt anfragen“ springt zum allgemeinen Formular, ohne die Leistung vorzubelegen. Die Leistungsauswahl enthält Dubletten (GLOBAL-028).*
- [x] Leistungsregionen nur nennen, wenn die Leistung dort tatsächlich angeboten wird. → *BEFUND: „in Zürich, Zug und Luzern“, laut Eigenangabe des Kunden nur LU/ZG (GLOBAL-021, R4).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Freigabe aller Aussagen unten durch die Geschäftsführung des Kunden (R12).*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/basis/unterhaltsreinigung`, 200 | Beibehalten (siehe Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | „Büros, Geschäfte und Gewerbeflächen“, Intent: Anbieter für regelmäßige Reinigung finden (transaktional/lokal) | Zielgruppe mit dem Kunden bestätigen (R10), Intent-Matrix Phase 4 | N027 |
| Meta-Title | Globaler Standardtitel (identisch auf 32 Seiten) | Siehe Vorgabe unten | N007, GLOBAL-010 |
| Meta-Description | Globale Standardbeschreibung | Siehe Vorgabe unten | N007, GLOBAL-010 |
| H1 und Abschnittsstruktur | H1 „Professionelle Unterhaltsreinigung“. Danach nur H3 „Umfassende Unterhaltsreinigung“ (im Reiter), H2 „Häufig gestellte Fragen“, H2 „Bereit für regelmäßige Sauberkeit?“. Der Cookie-Banner bringt ein H3 vor die H1 | Siehe Abschnittsfolge unten | N020, Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap | Selbstreferenzierendes Canonical auf die Launch-Domain | N007, N008 |
| Wichtigste Textpassagen | „Regelmäßige Reinigung für Büros, Geschäfte und Gewerbeflächen in Zürich, Zug und Luzern. Zuverlässig, flexibel und auf Ihre Bedürfnisse zugeschnitten.“ | Konkreter Nutzen statt Adjektive, Region korrigieren | N027 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `#kontakt-formular` (Footer), „Termin vereinbaren“ → Chat (defekt) | Eine primäre CTA „Kostenlose Offerte vor Ort anfragen“ | N020, GLOBAL-002 |
| Bildmotive und Alt-Texte | 1 Hero-Bild (KI-typisch), Alt „Unterhaltsreinigung“, 1536×1024 geliefert, 666×517 dargestellt | Echtes Foto, beschreibender Alt-Text, responsiv | N029 |
| Interne Links | Nur Navigation und Footer, keine Kontextlinks | Siehe Linkempfehlungen | N009 |
| Schema-Typen | keine | `Service` nach Bestätigung | N007 |
| Mobile/Desktop/Accessibility | Kein Overflow. axe: 6 Kontrastverstöße, 25 zu kleine Klickziele | Siehe GLOBAL-026 | N031 |
| Performance/Ladeabhängigkeiten | ca. 2,0 MB, 83 Anfragen (Desktop, dekodiert) | Budgets aus Abschnitt I | N020 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -012, -013, -020, -021, -023, -024, -026, -028, -034, -036, -037 | — | 01 |

## 4. Konkrete redaktionelle und technische Vorgaben

Die Vorschläge nutzen nur Fakten aus der Eigenangabe des Kunden (N014): Firmenname BGS Gebäudeservice GmbH, Arbeitsgebiet Kanton Luzern und Kanton Zug, Leistung „regelmässige Unterhaltsreinigung“, „kostenlose und unverbindliche Offerte“ nach einem Besuch vor Ort. Sie gelten, sobald R2 (Marke) und R4 (Region) bestätigt sind.

- **Meta-Title soll lauten:** „Unterhaltsreinigung in Luzern und Zug | BGS Gebäudeservice“. Begründung: Leistung und reale Region vorne, Marke zur Wiedererkennung. Grenzt sich klar von Sonderreinigung und Hauswartung ab.
- **Meta-Description soll lauten:** „Regelmässige Unterhaltsreinigung für Büros und Gewerbeflächen in den Kantonen Luzern und Zug. BGS Gebäudeservice kommt für eine kostenlose, unverbindliche Offerte bei Ihnen vorbei.“ Nur belegte Aussagen. Die Zielgruppe „Büros und Gewerbeflächen“ nach R10 bestätigen.
- **URL-Slug:** Slug `unterhaltsreinigung` beibehalten. Das Präfix `/basis/` nur ändern, wenn die neue Informationsarchitektur eine Übersicht `/leistungen/` einführt (GLOBAL-033). Dann per 308 von `/basis/unterhaltsreinigung` weiterleiten und das Mapping in 02 dokumentieren [S07].
- **H1-Vorschlag:** „Unterhaltsreinigung für Büros und Gewerbe in Luzern und Zug“
- **Abschnittsfolge (nur hilfreiche Inhalte, sichtbar im HTML):**
  1. Einstieg aus Kundensicht (Problem → Lösung, FIMI-Prinzip): wofür eine regelmäßige Reinigung sorgt, in 2–3 Sätzen.
  2. Leistungsumfang: Standardtätigkeiten und Zusatzleistungen als sichtbare Liste (heute im ersten Reiter), dazu ein kurzer Absatz „Nicht enthalten / separat“ (z. B. Grundreinigung → Sonderleistungen), sobald der Kunde das bestätigt.
  3. Ablauf ab Anfrage: Anfrage → kostenlose Besichtigung und Offerte (belegt) → Reinigungsplan → Start → Rückmeldung. Nur Schritte, die der Kunde bestätigt.
  4. Rhythmus-Beispiele (täglich, mehrmals pro Woche, wöchentlich) mit einem Satz, wann welcher Rhythmus passt. Keine Preise ohne Grundlage.
  5. Beleg: eine echte, freigegebene Referenz oder ein Satz zur Arbeitsweise mit Ansprechperson (R6).
  6. FAQ mit sichtbaren Antworten, mindestens die vier bestehenden Fragen, beantwortet vom Kunden.
  7. Abschluss-CTA „Kostenlose Offerte vor Ort anfragen“, das Formular mit vorausgewählter Leistung.
- **Zu streichende oder zu ersetzende Passagen:**
  - „…in Zürich, Zug und Luzern.“ → „…in den Kantonen Luzern und Zug.“ Grund: Die Eigenangabe nennt nur LU/ZG (R4).
  - Merkmalskarte „Qualität – Geprüfte Standards“ → streichen oder durch einen belegten Satz ersetzen, z. B. „Kontrolle durch [Rolle] nach jedem Einsatz“, nur wenn bestätigt. Grund: unbelegt (GLOBAL-021).
  - „Zuverlässig – Festes Reinigungsteam“ und „Regelmäßige Kontrollen und digitale Dokumentation“ → nur mit Bestätigung des Kunden. Sonst streichen.
  - Reiter „Service-Pakete“ (Basic/Standard/Premium, jeweils „Individuelles Angebot“) → ersetzen durch einen Satz: „Umfang und Preis legen wir nach der Besichtigung fest. Die Offerte ist kostenlos und unverbindlich.“ Grund: Die Pakete haben keinen unterscheidbaren Inhalt.
  - „Professionelle Unterhaltsreinigung“ (H1) → siehe H1-Vorschlag. Grund: Schablonenformel „Professionelle …“ auf 12 Seiten.
  - Schreibweisen „Regelmäßige“ usw. → „Regelmässige“ (GLOBAL-037).
- **Bilder:** Hero: echtes, freigegebenes Foto eines BGS-Einsatzes (Mitarbeitende nur mit Einwilligung), sonst neutrales Objektfoto ohne Personen. Ausgabe als AVIF/WebP mit `sizes` für die Hero-Breite (mobil ca. 390 px, Desktop ca. 670 px), als LCP-Bild priorisiert, Budget ≤ 150 KB mobil. Alt-Text nach Inhalt, z. B. „Mitarbeiterin von BGS reinigt einen Empfangsbereich“, nur wenn das Bild das zeigt. Nutzungsrecht dokumentieren.
- **Strukturierte Daten:** `Service` mit `name` „Unterhaltsreinigung“, `serviceType` „Unterhaltsreinigung“, `provider` = die globale Organisation BGS Gebäudeservice GmbH (gleiche ID wie auf allen Seiten), `areaServed` „Kanton Luzern“ und „Kanton Zug“ (nach R4), `url` = Canonical. Zusätzlich `BreadcrumbList`, sobald sichtbare Breadcrumbs existieren. Kein FAQ-Schema [S13].
- **Linkempfehlungen:**
  - In der FAQ-Antwort zur Grundreinigung auf `/basis/sonderleistungen` mit dem Linktext „Grund- und Sonderreinigungen“.
  - Im Leistungsumfang auf `/basis/hausmeisterservice` mit dem Linktext „Hauswartung aus einer Hand“, sofern der Kunde das Kombinationsangebot bestätigt.
  - Von der Startseite und der künftigen Seite „Alle Leistungen“ hierher mit dem Linktext „Unterhaltsreinigung“.
  - Die Abgrenzung zu `/business/bueroreinigung` in Phase 4 klären (Zusammenlegung prüfen).

Titel und Snippets sind Vorgaben, keine Garantie für die Google-Anzeige. [S08][S09] Bildalternativen hängen vom Zweck ab. [S17] Seitenspezifische URL-Änderungen benötigen einen passenden Migrationsplan. [S07]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P03-001 · Die Antwort auf „Was ist der Unterschied zur Grundreinigung?“ fehlt im sichtbaren und im ausgelieferten Inhalt

- **Ist-Zustand:** Die Frage steht als geschlossener Akkordeon-Eintrag da, ihre Antwort existiert erst nach einem Klick (N023). Genau diese Abgrenzung ist für die Auswahl zwischen Unterhalts- und Sonderreinigung entscheidend.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Die Antwort sichtbar ausliefern und auf die Sonderleistungsseite verlinken (siehe Linkempfehlungen).
- **Abnahme:** Der Antworttext steht im ausgelieferten HTML, der Link führt auf eine 200-Seite.
- **Evidenz:** Renderbefund. **Quelle:** S03

### SEITE-P03-002 · Abgrenzung zur Büroreinigung fehlt (Kannibalisierungsrisiko)

- **Ist-Zustand:** `/business/bueroreinigung` beschreibt ebenfalls regelmäßige Reinigung von Büros mit Rhythmus-Angaben. Keine Seite verweist auf die andere.
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** In Phase 4 entscheiden: zusammenlegen (eine Seite „Unterhaltsreinigung“ mit Abschnitt „Büros“) oder klar abgrenzen. Ohne Suchdaten ist das ein Risiko, keine belegte Kannibalisierung.
- **Abnahme:** Entscheidung dokumentiert, gegebenenfalls Alt-neu-Mapping mit 308.
- **Evidenz:** HYPOTHESE. **Quelle:** S05, S07

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Seitenzweck und Abgrenzung zu anderen Seiten nachvollziehbar.
- [ ] Fachliche Aussagen bestätigt und Textvorschläge redaktionell freigegeben.
- [ ] Metadaten, Links und Indexierungssteuerung stimmen mit dem Seitenzweck überein.
- [ ] Relevante Darstellungs-/Bedienungszustände geprüft.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese Seite.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig.** Launch-Blocker über GLOBAL-002 (Terminweg), -003 (Formular), -010 (Metadaten), -020 und -021 (unbelegte Region und Qualitätsaussagen), -023 (Bild). Seitenspezifisch keine zusätzlichen Blocker.

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S03, S05, S07, S08, S09, S10, S11, S12, S13, S17).
