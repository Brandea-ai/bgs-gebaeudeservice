# Seitenanalyse: Blogartikel „Professionelle Gebäudereinigung: Was Sie wissen müssen“

**Seiten-ID: P28 (Inventar U29)**  
**Status: Seitenprüfung durchgeführt am 24.09.2026. Seitenurteil: BEFUND, nicht freigabefähig. Empfehlung: zusammenführen.**  
**URL:** `https://bgs-gebaeudeservice.vercel.app/blog/professionelle-gebaeudereinigung` · **Codepfad:** `app/blog/professionelle-gebaeudereinigung/page.tsx` (165 Zeilen) · **Stand:** `d7e1122`

**Zuordnung (E09):** Zusätzlicher Bericht für eine tatsächlich vorhandene URL. Übersicht: P27. Ziel der Zusammenführung: P30 (`/blog/richtige-reinigungsfirma-finden`), Fachdefinitionen zusätzlich auf P03 und P05.

## 1. Aufgabe dieser Seite

Eine konkrete Informationsfrage hilfreich, belegt und mit eigener Erfahrung des Anbieters beantworten und passend zur Leistung überleiten.

**Abgrenzung:** Ratgeber, keine Leistungsseite. Die Beschreibung einzelner Leistungen gehört auf die Leistungsseiten, die Auswahl eines Anbieters in P30. Ein eigener Artikel ist nur sinnvoll, wenn er eine Frage beantwortet, die dort nicht schon beantwortet wird.

**Informationsfrage (Ist):** Zwei Fragen in einem Text: „Was macht Gebäudereinigung professionell?“ und „Welche Reinigungsarten gibt es?“. Keine ist eigenständig. Die erste deckt sich mit P30, die zweite ist die FAQ-Frage der Unterhaltsreinigung (SEITE-P03-001).

**Primäre Zielhandlung:** Übergang zur passenden Leistung (Unterhaltsreinigung, Sonderreinigung) oder zur Offerte. Heute nur „Jetzt anfragen“ → `/kontakt`.

**Ergebnis der Prüfung:** Rund 280 Wörter einschließlich aller Reiter und Akkordeons, davon rund 130 im ausgelieferten HTML. Der Text reiht Merkmalslisten aneinander, ohne Bezug zu BGS, ohne Beispiel, Datum oder Autor. Die Definitionen der Reinigungsarten widersprechen sich und der Leistungsseite (SEITE-P28-001). Die „Qualitätsmerkmale“ doppeln die Auswahlkriterien in P30 (SEITE-P28-002). ISO 9001 wird als Merkmal professioneller Firmen genannt, obwohl der Anbieter laut eigenem Impressum nicht zertifiziert ist (GLOBAL-021, -031). Zwei von drei Reitern und alle drei Akkordeon-Inhalte fehlen im ausgelieferten HTML (GLOBAL-011).

## 2. Seitenspezifische Prüfliste

- [x] Konkrete Informationsfrage und Suchintention benennen und prüfen, ob sie im sichtbaren Text vollständig beantwortet wird. → *BEFUND: keine eigenständige Frage (siehe Abschnitt 1). Intent HYPOTHESE: „Unterschied Unterhaltsreinigung/Grundreinigung“ und „Merkmale einer guten Reinigungsfirma“. Beantwortet wird beides nur in Stichworten.*
- [x] Austauschtest: Könnte jeder Anbieter den Text unverändert veröffentlichen? → *BEFUND: ja. „BGS“ kommt nicht vor, es gibt keinen Bezug zu Region, Team oder Arbeitsweise (GLOBAL-030).*
- [x] Eigene Erfahrung, Beispiele sowie Autor oder fachlich verantwortliche Person erkennbar. → *BEFUND: nichts davon. Die Rubrik „EXPERTENWISSEN“ nennt keine Person.*
- [x] Zahlen mit Quelle, Zeitraum und Bezugsgröße. → *NICHT ANWENDBAR: keine Zahlenangaben außer Normbezeichnungen.*
- [x] Keine Scheinaktualität (Datum, Lesezeit, Sitemap). → *BEFUND: Im Artikel steht kein Datum. Die Übersicht nennt „10. Januar 2025“, also vor Projektbeginn (GLOBAL-031), und „10 Min.“ bei rund 280 Wörtern (SEITE-P27-001). Das Sitemap-`lastmod` 2025-01-02 liegt vor dem angezeigten Datum (GLOBAL-015).*
- [x] Fachbegriffe korrekt und verständlich. → *BEFUND: Die Unterhaltsreinigung wird als „regelmäßige Grundreinigung“ definiert (SEITE-P28-001).*
- [x] Widerspruchsfreiheit zu Leistungsseiten und Impressum. → *BEFUND: ISO 9001 als Qualitätsmerkmal, im Impressum dagegen „Die ISO-Zertifizierung befindet sich derzeit in Bearbeitung.“ (`app/impressum/page.tsx:77`, GLOBAL-021, -031). Definitionen weichen von der FAQ auf `/basis/unterhaltsreinigung` ab, Beispiele liegen außerhalb des bestätigten Angebots (SEITE-P28-001).*
- [x] Regionen nur, wenn tatsächlich bedient. → *Teilweise BESTANDEN: nur „in der Schweiz“, keine falsche Region, aber auch kein Bezug zu LU/ZG.*
- [x] Kontextlinks zur passenden Leistung und von der Leistung zum Artikel. → *BEFUND: keine. Einziger eingehender Link von `/blog` (GLOBAL-017), ausgehend nur Navigation, Footer und „Jetzt anfragen“.*
- [x] Überleitung zur Leistung passt zur Frage. → *BEFUND: „Kontaktieren Sie uns für eine unverbindliche Beratung.“ ohne Bezug zur jeweiligen Reinigungsart (GLOBAL-034).*
- [x] Kerninhalte im ausgelieferten HTML. → *BEFUND: Die Reiter „Technologie“ und „Personal“ sowie alle drei Akkordeon-Antworten fehlen im HTML (Abgleich mit der gespeicherten Auslieferung aus N007). Hinweis zur Nachweislage siehe unter Abschnitt 3.*
- [x] FAQ nur aus echten Fragen. → *NICHT ANWENDBAR: keine FAQ vorhanden.*
- [x] Bilder: Motiv, Herkunft, Alt-Text, Größe. → *BEFUND: ein Bild mit vier Personen in dunkelblauer Arbeitskleidung in einer Glashalle und einem englischen Warnschild „CAUTION WET FLOOR“ (Einschätzung KI, N029). Es kann als eigenes Team gelesen werden (GLOBAL-023). Alt „Gebäudereinigung“, 1536×1024 geliefert, 858×516 dargestellt (GLOBAL-024).*
- [x] Überschneidung mit anderen Artikeln und Leistungsseiten. → *BEFUND: SEITE-P28-002. Kannibalisierung ist ohne Suchdaten HYPOTHESE (Phase 4).*
- [ ] Redaktionsverantwortung und Aktualisierungsanlass zugeordnet. → *NICHT PRÜFBAR (B14, R12).*
- [x] Für jede vorgeschlagene neue Behauptung einen fachlichen Freigabeinhaber benennen. → *Erledigt: Die übernommenen Definitionen gibt die Geschäftsführung des Kunden frei (R12), die Einordnung der Leistungen folgt R3.*

## 3. Individuellen Ist-Zustand erfassen

| Feld | Ist-Zustand | Soll/Vorschlag | Nachweis |
|---|---|---|---|
| URL und Statuscode | `/blog/professionelle-gebaeudereinigung`, 200 | Per 308 auf `/blog/richtige-reinigungsfirma-finden` (Abschnitt 4) | N007 |
| Hauptzielgruppe und Suchintention | Keine Zielgruppe genannt. Intent: allgemeine Information zu Qualität und Reinigungsarten | „Unterschied Unterhalts-/Grundreinigung“ gehört auf P03, „Qualität einer Reinigungsfirma“ in P30 (HYPOTHESE, Intent-Matrix Phase 4) | N027 |
| Meta-Title | Globaler Standardtitel. Im Code hinterlegt, aber wirkungslos: „Professionelle Gebäudereinigung: Qualität & Hygiene \| Swiss Reinigungsfirma“ (Z. 21) | Entfällt (Weiterleitung) | N007, N015 |
| Meta-Description | Globale Standardbeschreibung. Im Code, wirkungslos: „Erfahren Sie, was professionelle Gebäudereinigung ausmacht. Tipps zu Qualitätsstandards, Hygiene-Anforderungen und Auswahl der richtigen Reinigungsfirma.“ (Z. 22) | Entfällt | N007, N015 |
| H1 und Abschnittsstruktur | Rubrik „EXPERTENWISSEN“, H1 „Professionelle Gebäudereinigung: Was Sie wissen müssen“. H2 „Was macht Gebäudereinigung professionell?“ (Reiter Standards/Technologie/Personal), H2 „Reinigungsarten im Detail“ (Akkordeon Unterhalts-, Grund-, Spezialreinigung), H3 „Qualitätsmerkmale auf einen Blick“, H3 „Professionelle Reinigung gewünscht?“. Kein Datum, kein Autor. Der Cookie-Banner bringt ein H3 vor die H1 | Entfällt, verwertbare Teile nach P30, P03 und P05 | Faktenblatt |
| Canonical/Robots/Sitemap | kein Canonical, `index, follow`, in der Sitemap (`lastmod` 2025-01-02) | Aus der Sitemap entfernen, 308 | N007, N008 |
| Wichtigste Textpassagen | „Professionelle Reinigungsfirmen arbeiten nach definierten Qualitätsstandards wie ISO 9001. Diese Standards garantieren gleichbleibende Qualität, dokumentierte Prozesse und kontinuierliche Verbesserung.“ (im HTML). „Die Unterhaltsreinigung ist die regelmäßige Grundreinigung von Gebäuden.“ (nur nach Klick) | Siehe Abschnitt 4 | N027, Code Z. 71, 122 |
| Haupt-CTA und Ziel | „Jetzt anfragen“ → `/kontakt`, Footer-Formular | Entfällt | N020 |
| Bildmotive und Alt-Texte | 1 Bild `/blog-gebaeudereinigung.jpg`, Alt „Gebäudereinigung“, 1536×1024 geliefert, 858×516 dargestellt. Motiv: vier Personen in dunkelblauer Arbeitskleidung, Schild „CAUTION WET FLOOR“ (Einschätzung: KI-generiert) | Nicht in P30 übernehmen | N029, Faktenblatt |
| Interne Links | Eingehend nur von `/blog`. Ausgehend nur Navigation, Footer und `/kontakt` | Karte auf `/blog` entfernen | N009 |
| Schema-Typen | keine | Entfällt | N007 |
| Mobile/Desktop/Accessibility | Kein Overflow. axe: 3 Kontrastverstöße (u. a. rote Rubrik „EXPERTENWISSEN“, 3,78:1), 25 zu kleine Klickziele. Zeilenlänge Fließtext Desktop im Median 94 Zeichen. React-Fehler #418 | Siehe GLOBAL-026, -032, -013 | N020, N031 |
| Performance/Ladeabhängigkeiten | ca. 2,1 MB, 86 Anfragen (Desktop, dekodiert). LCP-Element (Labor ohne Drosselung) ist das Artikelbild | Entfällt mit der Weiterleitung | N020 |
| Globale Abhängigkeiten | GLOBAL-002, -003, -009, -010, -011, -013, -015, -017, -020, -021, -023, -024, -026, -030, -031, -034, -037 | — | 01 |

**Hinweis zur Nachweislage (für Phase 6):** Das Faktenblatt meldet alle drei Reiter als „im HTML“ und für das Akkordeon 0 Zeichen. Beides ist ein Messartefakt: Für alle drei Reiter wurde dieselbe Textprobe aus dem aktiven Reiter „Standards“ verwendet (vgl. die Einschränkung in N023), und die drei Akkordeon-Antworten existieren im Code (Z. 121–138). Der Abgleich mit der gespeicherten HTML-Auslieferung aus N007 zeigt: Nur „Standards“ wird ausgeliefert, „Technologie“ und „Personal“ sind leere Container mit `hidden`, alle drei Akkordeon-Antworten fehlen. Damit sind alle vier Blogartikel von GLOBAL-011 betroffen, nicht drei wie dort angegeben.

## 4. Konkrete redaktionelle und technische Vorgaben

Die Vorschläge nutzen nur Fakten aus der Eigenangabe des Kunden (N014) und aus den Leistungsseiten des Projekts. Die Einordnung der Leistungen hängt an R3.

- **Entscheidung: zusammenführen** in `/blog/richtige-reinigungsfirma-finden` (P30). Die Fachdefinitionen gehören zusätzlich auf `/basis/unterhaltsreinigung` (P03, SEITE-P03-001) und `/basis/sonderleistungen` (P05). Begründung: (1) Der Artikel hat keine eigene, konkrete Frage. „Was macht Gebäudereinigung professionell?“ ist die Kehrseite von „Wie finde ich die richtige Reinigungsfirma?“. (2) Fünf von acht „Qualitätsmerkmalen“ decken sich inhaltlich mit den Auswahlkriterien in P30 (SEITE-P28-002). (3) Die Reinigungsarten beantworten eine Frage, die auf die Leistungsseite gehört. (4) Der übrige Inhalt besteht aus unbelegten Merkmalslisten. Einzeln behalten ergäbe zwei schwache statt eines tragfähigen Artikels. Die Wirkung auf die Suche ist ohne Suchdaten HYPOTHESE.
- **Zielorte der verwertbaren Inhalte:**

  | Inhalt heute | Ziel | Form |
  |---|---|---|
  | Akkordeon „Unterhaltsreinigung“ und „Grundreinigung“ | `/basis/unterhaltsreinigung`, FAQ „Was ist der Unterschied zur Grundreinigung?“, kurz auch in P30, Abschnitt „Bedarf klären“ | korrigierte Definitionen (siehe unten) |
  | Akkordeon „Spezialreinigung“ | `/basis/sonderleistungen` | nur Beispiele aus dem bestätigten Angebot (R3) |
  | Reiter „Standards“ und „Personal“ | P30, Kriterium „Qualitätskontrolle und Ansprechperson“ | als Prüffragen an einen Anbieter, nicht als Behauptung |
  | Reiter „Technologie“, Kasten „Qualitätsmerkmale auf einen Blick“, Einleitung | — | streichen |

- **URL und Weiterleitung:** `/blog/professionelle-gebaeudereinigung` per 308 auf `/blog/richtige-reinigungsfirma-finden`. Karte auf `/blog` und Sitemap-Eintrag entfernen, Alt-neu-Mapping in 02 dokumentieren [S07]. Das Risiko ist gering, weil noch keine eigene Domain verbunden ist und praktisch kein Verkehr gemessen wurde (N012). Backlinks sind NICHT PRÜFBAR (B08, R11).
- **Meta-Title, Meta-Description, H1:** entfallen (Zusammenführung). Die im Code hinterlegten Angaben (Z. 21–22) nicht verwenden: Der Titel nennt „Swiss Reinigungsfirma“ (GLOBAL-020), die Beschreibung verspricht die „Auswahl der richtigen Reinigungsfirma“, also das Thema von P30.
- **Zu streichende oder zu ersetzende Passagen (gilt für jede Übernahme):**
  - „Die Unterhaltsreinigung ist die regelmäßige Grundreinigung von Gebäuden.“ (Z. 122) → „Die Unterhaltsreinigung ist die wiederkehrende Reinigung in einem festen Rhythmus, zum Beispiel täglich oder wöchentlich. Sie hält Räume in einem sauberen und hygienischen Zustand.“ Grund: widerspricht der eigenen Definition der Grundreinigung (Z. 129) und der Leistungsseite (SEITE-P28-001).
  - „Die Grundreinigung ist eine intensive, gründliche Reinigung, die in größeren Abständen durchgeführt wird. Sie entfernt hartnäckige Verschmutzungen und stellt den Originalzustand wieder her.“ (Z. 129) → „Die Grundreinigung ist eine gründliche Reinigung in grösseren Abständen. Sie entfernt Verschmutzungen, die bei der regelmässigen Reinigung zurückbleiben.“ Grund: „stellt den Originalzustand wieder her“ ist ein Versprechen ohne Einschränkung, Schweizer Schreibung (GLOBAL-037).
  - „Typische Leistungen: Maschinelle Bodenreinigung, Teppichtiefenreinigung, Fensterreinigung, Fassadenreinigung.“ (Z. 130) → nur Tätigkeiten, die BGS als Grundreinigung anbietet (R3). Grund: Fenster- und Fassadenreinigung führt die Website als eigene Leistungen (`/business/fensterreinigung`, `/business/fassadenreinigung`).
  - „Spezialreinigungen erfordern besonderes Know-how und Ausrüstung. Dazu gehören Industriereinigung, Reinraumreinigung, Krankenhaus reinigung oder Denkmalschutzreinigung.“ (Z. 136) → „Spezial- und Sonderreinigungen sind Einsätze ausserhalb des regelmässigen Plans, zum Beispiel [bestätigte Beispiele von BGS].“ Grund: Krankenhaus- und Denkmalschutzreinigung bietet keine Seite der Website an, Industrie- und Reinraumreinigung sind unbestätigt (R3). Die Eigenangabe nennt „Spezial- und Sonderreinigungen“ (N014). Tippfehler „Krankenhaus reinigung“.
  - „Professionelle Reinigungsfirmen arbeiten nach definierten Qualitätsstandards wie ISO 9001. Diese Standards garantieren gleichbleibende Qualität, dokumentierte Prozesse und kontinuierliche Verbesserung.“ (Z. 71), Listenpunkt „ISO 9001 Zertifizierung“ (Z. 74) und „Zertifizierte Prozesse“ (Z. 145) → streichen. Grund: „garantieren“ ist überzogen (Quelle fehlt/zu belegen). Auf der Website eines nicht zertifizierten Anbieters (Impressum: „in Bearbeitung“) widerspricht die Aussage dem eigenen Status (GLOBAL-021, -031). Die sachliche Einordnung von Zertifikaten steht künftig in P30.
  - „Professionelle Gebäudereinigung nutzt modernste Technologie für effiziente und gründliche Ergebnisse. Von Hochleistungssaugern bis zu automatisierten Reinigungsmaschinen.“ (Z. 87) mit der Liste „Industriesauger mit HEPA-Filter, Scheuersaugmaschinen, Hochdruckreiniger …“ (Z. 90) → streichen. Grund: Superlativ, kein Bezug zur tatsächlichen Ausstattung von BGS. Nur übernehmen, wenn der Kunde seine Geräte bestätigt, dann als eigene Aussage auf der Leistungsseite.
  - „Das Herzstück jeder professionellen Reinigungsfirma ist gut geschultes, motiviertes Personal. Regelmäßige Schulungen und Weiterbildungen sind essentiell.“ (Z. 103) → als Prüffrage in P30: „Wie werden neue Mitarbeitende eingearbeitet, und wer kontrolliert die Arbeit vor Ort?“ Grund: Behauptung ohne Beleg, als Frage für Leser nützlich.
  - „Professionelle Gebäudereinigung ist weit mehr als nur Staubwischen und Böden wischen. … In diesem umfassenden Ratgeber erfahren Sie alles über Standards, Methoden und Qualitätsmerkmale professioneller Gebäudereinigung in der Schweiz.“ (Z. 57) → streichen. Grund: Floskel, „umfassend“ und „alles“ treffen bei rund 280 Wörtern nicht zu.
  - „Müllen tfernung“ (Z. 123) → „Müllentsorgung“ bzw. „Leeren der Abfallbehälter“. Grund: Tippfehler.
  - „Kontaktieren Sie uns für eine unverbindliche Beratung.“ und „Jetzt anfragen“ (Z. 156–157) → entfallen mit der Seite.
- **Autor- und Datumsangaben:** entfallen für diese URL. Übernommene Inhalte erhalten in P30 dessen Autor- und Datumsangaben. Die Übernahme gilt dort als inhaltliche Überarbeitung (neues „Aktualisiert am“ und `dateModified`).
- **Bilder:** `/blog-gebaeudereinigung.jpg` nicht in P30 übernehmen. Das Motiv kann als eigenes Team gelesen werden (GLOBAL-023) und zeigt ein englisches Warnschild. Die Datei nach der Zusammenführung aus `public/` entfernen, wenn sie sonst nirgends genutzt wird (GLOBAL-024).
- **Strukturierte Daten:** entfallen. Eine weitergeleitete URL erhält kein Markup, das Markup trägt P30.
- **Linkempfehlungen:** entfallen für diese URL. Den einzigen internen Link (Karte auf `/blog`) entfernen. Leistungsseiten verlinken künftig auf P30 (Linktexte siehe dort).

Inhaltlich doppelte Seiten auf eine URL zusammenführen und mit einer Weiterleitung ein eindeutiges Signal setzen, statt beide parallel zu pflegen. [S05][S07] Der Maßstab ist hilfreicher, eigenständiger Inhalt, nicht die Anzahl der Artikel. [S02]

## 5. Befunde und Hypothesen

Gemeinsame Probleme stehen nur im globalen Register. Seitenspezifisch:

### SEITE-P28-001 · Begriffe und Einordnung der Reinigungsarten widersprechen der Leistungsseite und dem bestätigten Angebot

- **Ist-Zustand:** „Die Unterhaltsreinigung ist die regelmäßige Grundreinigung von Gebäuden.“ (Z. 122). Direkt danach wird die Grundreinigung als „eine intensive, gründliche Reinigung, die in größeren Abständen durchgeführt wird“ definiert (Z. 129). Die Leistungsseite sagt: „Die Unterhaltsreinigung erhält den Zustand durch regelmäßige Pflege. Die Grundreinigung ist eine intensive Tiefenreinigung …“ (`app/basis/unterhaltsreinigung/page.tsx:283`). Unter „Grundreinigung“ stehen „Fensterreinigung, Fassadenreinigung“ (Z. 130), die die Website als eigene Leistungen führt. Als Spezialreinigungen nennt der Artikel „Industriereinigung, Reinraumreinigung, Krankenhaus reinigung oder Denkmalschutzreinigung“ (Z. 136). Krankenhaus und Denkmalschutz bietet keine Seite der Website an, der Rest ist unbestätigt (R3). Dazu kommen die Tippfehler „Müllen tfernung“ (Z. 123) und „Krankenhaus reinigung“ (Z. 136).
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Die korrigierten Definitionen aus Abschnitt 4 verwenden und mit der Leistungsarchitektur nach R3 abstimmen. Beispiele nur aus dem bestätigten Angebot. Die Inhalte wandern nach der Zusammenführung auf P03, P05 und P30.
- **Abnahme:** Die Definitionen von Unterhalts-, Grund- und Sonderreinigung sind auf P03, P05 und P30 wortgleich oder widerspruchsfrei. Kein Beispiel liegt außerhalb des bestätigten Angebots. Keine Tippfehler.
- **Evidenz:** Inhalts- und Codebefund. **Quelle:** S02

### SEITE-P28-002 · Doppelung mit „Wie finde ich die richtige Reinigungsfirma?“ ohne eigene Frage

- **Ist-Zustand:** Der Kasten „Qualitätsmerkmale auf einen Blick“ (Z. 145) nennt „Zertifizierte Prozesse, Geschultes Personal, Moderne Ausrüstung, Umweltfreundliche Produkte, Transparente Kommunikation, Flexible Einsatzzeiten, Versicherungsschutz, Qualitätskontrollen“. P30 nennt unter „Die wichtigsten Auswahlkriterien auf einen Blick“ „Zertifizierungen und Qualifikationen, Erfahrung in Ihrer Branche, Versicherungsschutz, Referenzen und Bewertungen, Transparente Preisgestaltung, Flexibilität und Verfügbarkeit, Umweltfreundliche Reinigungsmethoden, Professionelles Personal“ (`app/blog/richtige-reinigungsfirma-finden/page.tsx:79-88`). Fünf von acht Punkten decken sich inhaltlich (Zertifikate, Personal, Umwelt, Flexibilität, Versicherung). Die im Code hinterlegte Beschreibung verspricht sogar die „Auswahl der richtigen Reinigungsfirma“ (Z. 22). Die Reinigungsarten sind zugleich die FAQ-Frage von P03 (SEITE-P03-001).
- **Priorität:** P2 · **Launch-Blocker:** nein
- **Vorgabe:** Zusammenführen wie in Abschnitt 4 beschrieben: verwertbare Inhalte nach P30, P03 und P05, URL per 308 auf P30, Karte und Sitemap-Eintrag entfernen, Mapping in 02.
- **Abnahme:** `/blog/professionelle-gebaeudereinigung` antwortet mit 308 auf `/blog/richtige-reinigungsfirma-finden`. Kein interner Link und kein Sitemap-Eintrag nennt die alte URL.
- **Evidenz:** Inhaltsbefund. Die Auswirkung auf die Suche (Kannibalisierung) ist ohne Suchdaten HYPOTHESE. **Quelle:** S02, S05, S07

## 6. Abnahme nach einer später separat freigegebenen Umsetzung

- [ ] Die Weiterleitung per 308 auf P30 ist eingerichtet, das Alt-neu-Mapping in 02 dokumentiert.
- [ ] Kein interner Link, kein Sitemap-Eintrag und keine Karte auf `/blog` verweist mehr auf die alte URL.
- [ ] Übernommene Definitionen sind auf P03, P05 und P30 widerspruchsfrei und fachlich freigegeben.
- [ ] Keine ISO- oder Zertifizierungsaussage aus diesem Artikel wurde übernommen.
- [ ] Kritische Seite-/Backend-Abhängigkeiten nachgewiesen oder ausdrücklich offen markiert.
- [ ] Kein ungeklärter Launch-Blocker für diese URL.

**Aktuelles Seitenurteil: BEFUND, nicht freigabefähig. Nicht eigenständig veröffentlichen, sondern zusammenführen.** Launch-Blocker, solange die Seite in heutiger Form erreichbar ist: GLOBAL-031 (Datum vor Projektbeginn auf `/blog`), -010 (Metadaten), -020 (Identität), -021 (Zertifizierungsbezug), -002 und -003 (Chat und Formular aus dem Layout). Seitenspezifisch keine zusätzlichen Blocker.

---

**Quellen zu dieser Datei:** siehe ../09-QUELLEN.md (S02, S05, S07).
