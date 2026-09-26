# Hinweise für Claude Code

Website der BGS - Gebäudeservice GmbH in Emmenbrücke LU. Die neue Dachmarke heisst **Mantena**, die Premium-Linie **Clavea**. Pause vom 25.09.2026, seit dem 26.09.2026 fortgesetzt.

## Wo anfangen

1. `Webseite-Analyse/FORTSCHRITT.md`, Abschnitt «Nächste Aufgabe»
2. `Webseite-Analyse/00-START-HIER.md`: Aufbau der Analyse, Regeln, Status
3. Letzte Entscheidungen: `Webseite-Analyse/15-ANTWORTEN-RUNDE-4.md`, alle Entscheidungen E01 bis E53 in `Webseite-Analyse/07-BRIEFING-UND-ENTSCHEIDUNGEN.md`

## Stand

- **Arbeits-Branch** `claude/funny-einstein-5acss7` (seit 26.09.2026): Fortsetzung von `claude/optimistic-sagan-h5y2i9`, per Fast-Forward übernommen. Hier ist alles umgesetzt und getestet. Der alte Branch bleibt unverändert als Stand vom 25.09.2026.
- **`main` und Produktion** stehen noch auf `d7e1122`. Das ist der alte Stand mit unbelegten Aussagen und erfundenen Kundenstimmen, öffentlich und indexierbar (N076).
- **Welcher Stand in die Produktion darf:** der aktuelle Arbeits-Branch, gesteuert über den Schalter `NEW_BRAND` (seit `9e62a2f`):
  - Ohne `NEW_BRAND` zeigt ein Produktions-Build die Arbeitsmarke «BGS Gebäudeservice», Previews und lokale Builds Mantena und Clavea.
  - Erst nach der Markenrecherche (E38) in Vercel für Production `NEW_BRAND=true` setzen.
  - Den Arbeitsmarken-Modus lokal prüfen: `NEW_BRAND=false npm run build`, dann das Seiten-Prüfskript. Es meldet jeden Treffer des neuen Namens.
  - `ff99f92` ist damit überholt.

## Regeln

- **Branches:** Commit und Push nur auf den Arbeits-Branch (E03, E10, E11 gelten für ihn wie für den alten). Ein Push oder Merge auf `main` geht über Vercel direkt in die Produktion und braucht die ausdrückliche Zustimmung von Brandea. Der Pull Request des Arbeits-Branches ist ein Entwurf zur Durchsicht, kein Weg an dieser Freigabe vorbei.
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

- Firmenangaben und Marke: `shared/company.ts`, Marken-Schalter in `next.config.ts`
- Name, Titel und Beschreibung aller Seiten, Brotkrumen: `shared/seo.ts`
- Texte der Leistungs- und Premiumseiten: `content/de/`, Vorlage `client/src/components/ServicePage.tsx`
- Strukturierte Daten: `shared/structured-data.ts`
- Schalter für Chat und Bilder: `shared/features.ts`
- Sicherheitsheader und Weiterleitungen: `next.config.ts`
- Kontaktformular: `app/api/contact/route.ts`, `server/email.ts`
