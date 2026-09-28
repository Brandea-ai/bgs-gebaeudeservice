# Rebranding-Brief (E80)

**Stand 28.09.2026.** Verbindlich für jede Seite im Rebranding. Entscheid E80, Nachweis N093. Die Regeln aus `CLAUDE.md` und `07` gelten weiter, vor allem E18 (nur belegte Aussagen), E19 (Symbolbilder ohne Gesichter und Schrift), E50 (Übersetzungen), E70 (Prüfkette vor `main`).

## Wirkung

Hochwertig, seriös, ruhig, schweizerisch präzise. Rot-Weiss veredelt: Signalrot `signal` nur als Akzent (Knöpfe, Symbole, Linien), Fläche Weiss und Stein `stone`, Text Graphit `ink`. Premium ist eine eigene Welt: Anthrazit `anthracite`, Champagner `brass`, Titel in `font-premium` (Cormorant Garamond), nie Signalrot.

## Bausteine (nicht nachbauen, verwenden)

| Baustein | Datei | Zweck |
|---|---|---|
| Hero | `client/src/components/Hero.tsx` | Kopf jeder Seite mit Hintergrundbild unter der schwebenden Kopfzeile. `size` home, page, compact; `variant` standard, premium; `aside` für Glas-Karte; `below` für Eckdaten |
| PageHero | `client/src/components/PageHero.tsx` | Hero mit Bild aus `shared/hero-images.ts` je Seite |
| Zigzag | `client/src/components/Zigzag.tsx` | Bild und Text im Wechsel, Bild aus dem Register |
| ImageSlot | `client/src/components/ImageSlot.tsx` | Bildfläche mit `image` (Register-Schlüssel), `next/image` |
| Bildregister | `shared/images.ts` (erzeugt), Alt-Texte `content/<sprache>/bilder.ts` | 39 Bilder, neue Bilder mit `Webseite-Analyse/werkzeuge/bilder_register.py` |
| Symbole | `client/src/components/serviceIcons.ts` | ein Phosphor-Symbol je Leistung, immer `weight="duotone"`, ohne Fläche dahinter |
| Ablauf | `client/src/components/ProcessScrolly.tsx` | Ablauf mit Remotion-Videos (`public/video/ablauf/`) |
| Glas | `.glass`, `.glass-strong`, `.glass-dark`, `.premium-surface`, `.premium-rule` in `app/globals.css` | nur auf Bedienelementen und Karten über Bildern, nie hinter Fliesstext |
| Knöpfe | `client/src/components/ui/button.tsx` + `.btn-lift` | Hauptaktion Signalrot mit `btn-lift`, auf Bild zweite Aktion `variant="inverse"` + `glass-dark`, Premium in Champagner |

## Regeln

- Radius überall 3 px (`rounded-[3px]`), keine runden Pillen.
- Keine Ziffern wie 01, 02, 03 als Gestaltungselement. Reihenfolge über Aufbau, Symbole oder Linien.
- Links-rechts-Folgen als Zickzack (Bild wechselt die Seite).
- Jede Seite: erster Bildschirm statisch (kein Einblenden), Hero mit Bild, eine H1.
- Mehr Inhalt heisst: mehr nützliche, konkrete Information für die Entscheidung (Umfang, Ablauf, Grenzen, Planung, Fragen), keine Füllsätze, keine neuen Behauptungen über das Unternehmen (E18). Neue Texte zuerst Deutsch, dann Englisch, Französisch, Italienisch in denselben Schlüsseln.
- Schweizer Rechtschreibung (ss), Guillemets «», keine Gedankenstriche.
- Seitenaufbau nach Factory-Strukturnorm: `client/src/seiten/<seite>/index.tsx` als Sammler, eine Datei je Sektion `01-hero.tsx`, `02-…`, höchstens 250 Zeilen je Datei, geteilte Hilfen im selben Ordner ohne Nummer. Vorbild: `client/src/seiten/leistung/`.
- Prüfkette vor jedem Push: `npm run check`, Build in beiden Marken-Modi, `seiten_pruefen.py`, `browser_pruefen.cjs`, axe-core 0 Verstösse, kein Überlauf bei 390 px.
