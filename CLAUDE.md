# Hinweise für Claude Code

Website der BGS - Gebäudeservice GmbH in Emmenbrücke LU. Die neue Dachmarke heisst **Mantena**, die Premium-Linie **Clavea**. Die Arbeit ruht seit dem 25.09.2026 und wird später fortgesetzt.

## Wo anfangen

1. `Webseite-Analyse/FORTSCHRITT.md`, Abschnitt «Nächste Aufgabe»
2. `Webseite-Analyse/00-START-HIER.md`: Aufbau der Analyse, Regeln, Status
3. Letzte Entscheidungen: `Webseite-Analyse/15-ANTWORTEN-RUNDE-4.md`, alle Entscheidungen E01 bis E53 in `Webseite-Analyse/07-BRIEFING-UND-ENTSCHEIDUNGEN.md`

## Stand

- **Arbeits-Branch** `claude/optimistic-sagan-h5y2i9`: Hier ist alles umgesetzt und getestet.
- **`main` und Produktion** stehen noch auf `d7e1122`. Das ist der alte Stand mit unbelegten Aussagen und erfundenen Kundenstimmen.
- **Welcher Stand in die Produktion darf:**
  - Solange die Markenrecherche fehlt: `ff99f92`, ohne den neuen Namen.
  - Mit Mantena und Clavea: ab `85024bb`, erst nach der Markenrecherche (E38).

## Regeln

- **Branches:** Commit und Push nur auf den Arbeits-Branch. Ein Push auf `main` geht über Vercel direkt in die Produktion und braucht die ausdrückliche Zustimmung von Brandea.
- **Aussagen:** Über das Unternehmen nur Belegtes (E18), also keine erfundenen Zahlen, Kundenstimmen oder Zertifikate.
- **Neuer Name:** Er wird erst nach der Markenrecherche öffentlich (E38). Für Clavea ist die Verwechslungsgefahr mit der Marke CLAVIS zu klären (E47).
- **Daten:** Keine Schlüssel in Dateien, keine Personennamen in der Analyse.
- **Formular:** Keine echten Anfragen an den Kunden ohne Freigabe. Tests laufen gegen einen Nachbau der Resend-API (`RESEND_BASE_URL`).
- **FIMI:** Das Projekt nie ändern.
- **Alte Anleitung:** `CLAUDE-QUICKSTART.md` ist veraltet und gilt nicht.

## Befehle

- Node 22, Installation mit `npm ci`
- `npm run dev` für die Entwicklung, `npm run check` für die Typprüfung, `npm run build` und `npm start` für den Produktionsstand
- Umgebungsvariablen: Vorlage `.env.example`, lokal in `.env.local`, ohne Produktionsschlüssel
- Prüfskripte gegen einen laufenden Server:
  - `python3 Webseite-Analyse/werkzeuge/seiten_pruefen.py http://localhost:3000` prüft Seiten, Weiterleitungen, Links, Titel und Marke
  - `node Webseite-Analyse/werkzeuge/browser_pruefen.cjs http://localhost:3000` prüft Konsolenfehler und Sicherheitsregeln im Browser, braucht Playwright

## Nach jeder Änderung

- Typprüfung, Build und beide Prüfskripte laufen lassen.
- Stand in `Webseite-Analyse/06-MASSNAHMEN-BACKLOG.md` nachführen, Nachweis in `08-PRUEFNACHWEISE.md`, Eintrag in `FORTSCHRITT.md`.

## Wo was steht

- Firmenangaben und Marke: `shared/company.ts`
- Titel und Beschreibungen aller Seiten: `shared/seo.ts`
- Schalter für Chat und Bilder: `shared/features.ts`
- Sicherheitsheader und Weiterleitungen: `next.config.ts`
- Kontaktformular: `app/api/contact/route.ts`, `server/email.ts`
