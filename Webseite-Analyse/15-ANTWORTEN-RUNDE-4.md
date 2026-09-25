# Antworten auf die Rückfragen, Runde 4

**Stand 25.09.2026.** Grundlage ist der Export des Fragebogens vom 25.09.2026, 17:46:36 UTC (N068). Alle acht Fragen sind beantwortet, ohne Kommentare. Personennamen werden nicht übernommen, auch nicht aus Registereinträgen.

## 1. Kurzfassung

- **Name:**
  - **Dachmarke:** Mantena (E46).
  - **Premium-Linie:** Clavea (E47).
  - Brandea wählt damit für die Premium-Linie die Alternative von Opus, nicht Silendo, das beide Modelle empfohlen hatten (13, Abschnitt 8.5).
- **Vorprüfung nach der Wahl** (Abschnitt 3, N069 bis N071):
  - **Domains:** `mantena.ch`, `clavea.ch`, `mantena.swiss` und `clavea.swiss` sind frei, zuletzt geprüft um 19:45 UTC.
  - **Mantena:** Weder Handelsregister (Zefix) noch Markenregister (Swissreg) kennen den Namen. Es gibt keine aktive Marke mit einem Buchstaben Unterschied in den Klassen 37, 44 oder 45. Das Risiko ist niedrig.
  - **Clavea:** Ebenfalls kein Eintrag. Aktiv eingetragen ist aber die Marke CLAVIS, unter anderem in den Klassen 37 und 45. Clavea ist von «clavis» abgeleitet und bedeutet dasselbe. Vor der Nutzung muss eine Fachperson die Verwechslungsgefahr beurteilen. Das Risiko ist mittel.
- **Umsetzung:**
  - Mantena und Clavea sind auf dem Arbeits-Branch eingebaut und getestet (`85024bb`, N073).
  - Öffentlich wird der Name erst nach der Markenrecherche (E38). Für die Produktion gibt es deshalb einen Stand ohne neuen Namen (`ff99f92`, Abschnitt 4).
- **Domains:** Brandea registriert, Inhaberin ist die Firma des Kunden (E48).
- **Logo:** Brandea gestaltet es (E49). Bis dahin steht der Name als Schriftzug.
- **Sprachen:**
  - Brandea prüft die Übersetzungen selbst (E50).
  - Die Adressen werden je Sprache übersetzt (E51, S82).
- **Belege:** Es gibt keine. Die drei zurückgestellten Premium-Zusagen bleiben weg (E52).
- **Partner:** Keine (E53). Die Hauswartungsseite behauptete ein Handwerker-Netzwerk, die Stelle ist entfernt (`ff99f92`).

## 2. Einordnung je Frage

| ID | Antwort | Einordnung | Prüfung | Folge | Status |
|---|---|---|---|---|---|
| DACH | Mantena | Präferenz | Domain, Zefix und Swissreg ohne Treffer, ähnliche Einträge nur in anderen Branchen (Abschnitt 3) | E46, umgesetzt (`85024bb`) | GEKLÄRT |
| PREMIUM | Clavea | Präferenz | Domain und Zefix ohne Treffer. Marke CLAVIS in Klasse 37 und 45 aktiv (Abschnitt 3) | E47, umgesetzt (`85024bb`) | GEKLÄRT MIT VORBEHALT |
| DOMAINS | Brandea registriert, Inhaberin ist die Firma des Kunden | Präferenz | `.ch` und `.swiss` frei (N069) | E48, Aufgabe für Brandea (Abschnitt 5) | OFFEN (Brandea) |
| LOGO | Brandea gestaltet das Logo | Präferenz | — | E49, M35 | OFFEN (Brandea) |
| LEKTORAT | Brandea prüft selbst | Präferenz | — | E50, M60 | GEKLÄRT |
| ADRESSEN | Übersetzt, zum Beispiel `/fr/prestations/nettoyage-de-bureaux` | Präferenz | Google empfiehlt Wörter in der Sprache der Leser (S82) | E51, M60 | GEKLÄRT |
| BELEGE | Keine Belege, die drei Aussagen bleiben weg | Fakt | Die drei stehen schon heute nicht auf der Website (N058) | E52, M59 geschlossen | GEKLÄRT |
| PARTNER | Nein | Fakt | Quelltext durchsucht: «Handwerker aus unserem Netzwerk» auf `/leistungen/hauswartung` | E53, entfernt (`ff99f92`) | GEKLÄRT |

## 3. Vorprüfung von Mantena und Clavea

### 3.1 Vorgehen

- **Domains (N069):** RDAP bei SWITCH für `.ch` [S51], bei Verisign für `.com`, bei `rdap.nic.swiss` für `.swiss`. Abgefragt um 17:48 und 19:45 UTC.
- **Handelsregister (N070):**
  - Abfrage über die Suchschnittstelle der öffentlichen Zefix-Anwendung [S53]. Die Suche findet auch Teilwörter.
  - Gegenprobe mit bekannten Firmen (Sostena, Claves). Sie wurden gefunden.
  - Zefix war bisher NICHT PRÜFBAR (13, Abschnitt 2.1), weil die Seite nur mit JavaScript läuft.
- **Markenregister (N071):**
  - Abfrage über die Suchschnittstelle der öffentlichen Swissreg-Anwendung [S54], Register «chmarke» (Schweizer Marken).
  - Gegenprobe: «Nivea» ergab 346 Treffer im Volltext und 155 im Markentitel.
  - Gesucht wurde im Titel: genau, mit einem Buchstaben Abweichung und mit zwei Buchstaben Abweichung.
- **Grenzen:**
  - **Internationale Marken:** Internationale Registrierungen mit Schutz für die Schweiz (System von Madrid, etwa eine Marke der norwegischen Mantena AS) sind NICHT GEPRÜFT.
  - **Verzeichnis von CLAVIS:** Die Dienstleistungen der Marke CLAVIS konnten nicht abgerufen werden. Die Rechteprüfung der Sitzung hat das weitere Auslesen der Swissreg-Anwendung abgelehnt, der Agent hat das nicht umgangen (N072).
  - **Keine Rechtsauskunft:** Eine Vorprüfung ersetzt weder die Recherche beim IGE noch eine Beratung durch Fachleute für Markenrecht.

### 3.2 Ergebnis Mantena

- **Domain:** `mantena.ch` und `mantena.swiss` frei, `mantena.com` vergeben.
- **Handelsregister:** keine Firma mit «Mantena» im Namen. Ähnlich geschrieben sind:
  - Montena Immo Sàrl in Gibloux FR: Kauf, Verkauf und Entwicklung von Immobilien
  - montena sa: ein Beteiligungsunternehmen, bei Moneyhouse mit Sitz Zug
  - Montena Technology SA in Gibloux FR
  - MANTANA AG in Thalwil ZH: Handel
  - Mantanar AG in Luzern: gemeinnützig
- **Markenregister:**
  - Keine Marke «Mantena».
  - **Ein Buchstabe Abweichung:** Aktiv sind MONTENA und montena (Klassen 7, 9, 11, 38 und 42, Technik), Mantona (9, 18), MANTECA (2, 19) und ABILIFY Maintena (5). Keine davon liegt in den Klassen 37, 44 oder 45. Eine frühere MONTENA-Marke mit Klasse 37 ist gelöscht.
  - **Zwei Buchstaben Abweichung:** AMANTEIA der Fr. Sauter AG in Basel ist aktiv, in den Klassen 9, 35, 37 und 42. Der Name unterscheidet sich am Anfang und am Ende.
- **Einschätzung:** In der Schweiz ist das Risiko niedrig. Offen sind internationale Marken und die Nähe zu Montena Immo Sàrl (Immobilien, Westschweiz).

### 3.3 Ergebnis Clavea

- **Domain:** `clavea.ch` und `clavea.swiss` frei, `clavea.com` vergeben.
- **Handelsregister:** keine Firma mit «Clavea» im Namen. Ähnlich geschrieben sind:
  - Claves SA in Lugano: plant, entwickelt und baut Immobilienprojekte, kauft, verkauft und renoviert Liegenschaften
  - Claves Records SA in Pully: Musiklabel
- **Markenregister:**
  - Keine Marke «Clavea».
  - **Ein Buchstabe Abweichung:** Aktiv sind CLAVES (Claves Records SA, Klassen 9, 16, 35, 41), CLAVEX (Parexgroup, Klassen 1, 4, 17, 19), Clanea (Klassen 6, 8, 11, 17, 19, 35), CLAREA (Klassen 6, 11, 19, 20) und VP Clava (VP Bank, Klassen 9, 16, 36). Keine davon liegt in den Klassen 37, 44 oder 45.
  - **Zwei Buchstaben Abweichung:**
    - **CLAVIS:** aktiv in den Klassen 9, 35, 36, 37, 41, 42 und 45. Die Marke gehört einer Privatperson im Kanton Zürich.
    - **clavis re:** 35, 36, 42, dieselbe Person.
    - **«Post Notfall Schlüsseldienst Clavis»:** Klasse 37. Die Marke gehört einer Privatperson in Basel.
    - **Clarma:** 35, 37.
- **Einschätzung:** Das Risiko ist mittel.
  - Clavea und CLAVIS gehen auf dasselbe lateinische Wort zurück, sehen ähnlich aus und bedeuten dasselbe.
  - CLAVIS ist in Klasse 37 eingetragen, also in der Klasse für Reinigung und Unterhalt.
  - Ob das Verzeichnis von CLAVIS Reinigung oder Hauswartung umfasst, ist offen.
  - Das IGE prüft ältere Marken nicht von sich aus. Wem CLAVIS gehört, kann nach der Veröffentlichung einer Clavea-Marke Widerspruch erheben (Gebühr CHF 800 [S84]).
- **Empfehlung:**
  1. Die Domain trotzdem sichern, sie kostet wenig.
  2. Vor jeder öffentlichen Nutzung die Verwechslungsgefahr mit CLAVIS beurteilen lassen: IGE-Recherche oder Fachperson für Markenrecht.
  3. Fällt die Beurteilung negativ aus, ist Silendo der Ersatz. Beide Modelle hatten den Namen empfohlen, und das Prüfrisiko ist niedrig (13, Abschnitt 8.2). Auf der Website ist das eine einzige Zeile in `shared/company.ts`.

## 4. Umsetzung und Produktion

- **Commits auf dem Arbeits-Branch:**
  - `ff99f92`: Handwerker-Netzwerk von der Hauswartungsseite entfernt (E53).
  - `85024bb`: Mantena und Clavea eingebaut (N073).
    - `shared/company.ts`: Dachmarke und Premium-Linie.
    - Titel mit «| Mantena», Premium-Seiten mit «| Clavea von Mantena».
    - Menü und Footer mit der Gruppe «Clavea Premium». Im Footer steht zusätzlich «Eine Marke der BGS - Gebäudeservice GmbH».
    - `/premium` nennt die Linie und die Bedeutung des Namens.
    - Dazu Privatjet-Seite, Manifest, Absender der Kontaktmail und die Begrüssung des abgeschalteten Chats.
- **Unverändert:** Die eingetragene Firma steht weiter im Impressum und im Copyright (Art. 954a OR, E37).
- **Produktion (E38, E39):**
  - Den neuen Namen erst nach der Markenrecherche veröffentlichen.
  - Bis dahin gehört in die Produktion der Stand `ff99f92`. Er enthält alle Korrekturen ohne den neuen Namen.
  - Nach der Recherche folgt `85024bb` oder ein späterer Stand.
  - Den Push nach `main` blockiert die Rechteprüfung weiterhin, solange die Sitzung im Modus «Auto» läuft (14, Abschnitt 3).
- **Noch nicht umgestellt:**
  - Der Prompt des abgeschalteten Chats in `server/gemini.ts` nennt noch den alten Namen und falsche Orte. Er wird bei M03 neu aufgebaut.
  - Leere `SEO`-Aufrufe auf rund 20 Seiten enthalten alte Titel. Sie geben nichts aus, sollten aber entfernt werden (M16).

## 5. Aufgaben für Brandea

1. **Domains registrieren (E48):**
   - `mantena.ch` und `clavea.ch` bei einem Schweizer Registrar, Inhaberin «BGS - Gebäudeservice GmbH».
   - `.swiss` ist frei, die Vergabe richtet sich aber nach eigenen Regeln. Die klärt der Registrar.
   - Die Namen stehen im öffentlichen Repository (E45). Deshalb bald registrieren.
2. **Markenrecherche und Anmeldung (E38):**
   - Das IGE empfiehlt vor der Anmeldung eine Recherche nach ähnlichen Marken und Firmen [S84].
   - **Gebühren laut IGE** (Stand der Gebührenliste: 1.7.2024):
     - Hinterlegung CHF 450 für zehn Jahre
     - ab der vierten Klasse CHF 100 je Klasse
     - bei elektronischer Anmeldung CHF 100 Rabatt
     - Die Beträge vor der Anmeldung auf der Seite des IGE prüfen [S84].
   - **Klassen:** voraussichtlich 37 (Reinigung, Unterhalt, Hauswartung) und 44 (Garten- und Grünflächenpflege), für die Premium-Linie allenfalls 45. Die genaue Auswahl klärt die Recherche.
   - **Zuerst klären:** die Verwechslungsgefahr zwischen Clavea und CLAVIS (Abschnitt 3.3).
3. **Logo (E49, M35):** Für die Website braucht es:
   - den Schriftzug als SVG
   - das Symbol für den Browser-Tab (SVG oder PNG, mindestens 48 × 48)
   - das App-Symbol (PNG 180 × 180)
   - das Vorschaubild für geteilte Links (PNG oder JPG 1200 × 630)
   - Symbole für das Manifest (PNG 192 × 192 und 512 × 512)
   - die Hausfarbe als Hex-Wert

   Die Dateien kommen nach `app/` beziehungsweise `public/`.
4. **Übersetzungen (E50):** Der Agent liefert Entwürfe in Englisch, Französisch und Italienisch, Brandea prüft sie vor der Veröffentlichung.

## 6. Entscheidungen aus Runde 4

Diese Einträge stehen auch im Entscheidungsprotokoll in 07.

- **E46 · Dachmarke Mantena.** Die eingetragene Firma bleibt «BGS - Gebäudeservice GmbH».
- **E47 · Premium-Linie Clavea.** Vorbehalt: Vor der Nutzung muss die Verwechslungsgefahr mit der Marke CLAVIS geklärt sein. Ersatz ist Silendo.
- **E48 · Domains:** Brandea registriert sie, Inhaberin ist die Firma des Kunden.
- **E49 · Logo:** Brandea gestaltet es. Bis dahin steht der Name als Schriftzug.
- **E50 · Übersetzungen:** Brandea prüft die Entwürfe des Agenten.
- **E51 · Adressen je Sprache:** Sie werden übersetzt, etwa `/fr/prestations/…` (S82).
- **E52 · Premium-Zusagen:** Die drei zurückgestellten Aussagen bleiben dauerhaft weg (M59 geschlossen).
- **E53 · Partner:** Es gibt keine. Die Website nennt weder Partner noch ein Netzwerk.

---

**Nachweise:** N068 bis N073 in 08-PRUEFNACHWEISE.md. **Quellen:** S51, S53, S54, S82 und S84 in 09-QUELLEN.md.
