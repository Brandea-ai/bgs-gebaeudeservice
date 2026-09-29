# Unabhängige UX-Gegenprüfung R2

Geprüfter Gesamtstand: `31b5ce0a827227f624439e869b4e4bcdb7365a1f`, isolierte Arbeitskopie `.worktrees/pruefstand-r2`, Server `http://localhost:3352`, 29.09.2026. Kein Build, keine Quelländerung, kein echter Formularversand durch diesen Auditor.

Die Baseline-Prüfung umfasste alle 32 deutschen Seitentypen bei 1440/390 und 722 echte Abschnittsansichten. R2 prüft die integrierten Änderungen gezielt und prüft neue Bildmotive und Sprachumbrüche erneut. Die Aussage ist auf diese beobachteten Wege begrenzt.

## Ergebnis

| Punkt | R2-Nachweis | Ergebnis |
|---|---|---|
| UX-01 Kontakt-Kollision | `contact-recheck.json`, 16 Seitenaufrufe, DE/EN/FR/IT bei 1440/390; Endpositionen als Screenshots | Bestanden. Sieben Desktop-Kanalblöcke enden genau 40 px vor der Prozesszeile. Kein horizontaler Überlauf. |
| UX-02 mobile Navigation und Fachwerkzeuge | `final-template-check.json`, 12 Kombinationen aus 390/1440, normal/reduced/no-JS, Hauswartung/Premium-Villa; 64 Einzelbeobachtungen | Bestanden. Navigation sichtbar und klebend. Klicks auf ersten Abschnitt, Umfang, FAQ und verwandte Leistungen landen sichtbar und markieren das Ziel. Werkzeuge öffnen/schliessen vollständig. Direktlinks öffnen das angesprochene Werkzeug. |
| Inhalte ohne JavaScript / reduzierte Bewegung | `final-template-check.json` | Bestanden. Alle drei Werkzeuge beider repräsentativen Seiten bleiben ohne JS offen. Keine dauerhaft unsichtbaren Reveal-Texte, keine pageerrors. Native FAQ wurden zuvor unabhängig ohne JS geöffnet. |
| UX-04 Anker ohne JavaScript | `nojs-final-recheck.json`, 18 Fälle; 390/1440/3840, JS an/aus, Hauswartung/Unterhalt/Premium-Villa | Bestanden. Mobil H2 bei rund 153 px, Nav endet bei 129 px. Desktop ohne JS H2 bei 136 px, Header endet bei 114 px. 4K mit 32-px-Grundschrift H2 bei rund 272 px, Header endet bei 226 px. |
| Formularzustände | `contact-recheck.json` | Bestanden auf 1440/390. Leeres Formular sendet keinen Request und fokussiert erstes Fehlerfeld. Simulierter Serverfehler fokussiert Hinweis und bewahrt Eingaben. Simulierter Erfolg fokussiert den Status. Ausschliesslich Browser-Mocks, kein Zustellnachweis. |
| Sprachumbrüche | `language-data.json`, 24 Seitenaufrufe und 72 Screenshot-Ansichten | EN/FR/IT, je Fenster/Fassade, Premium-Villa, Kontakt und Leistungsübersicht auf 1440/390. Keine abgeschnittenen Titel, überlappenden FAQ-Zeilen oder Dokumentüberläufe. Vergleichsbögen `language-<breite>-<sprache>.jpg` visuell geprüft. |
| Kennzahlen Über uns | `secondary-check.json`, `figure-grid-360.jpg`, `figure-grid-1024.jpg`, `figure-grid-1279.jpg` | Alle vier Kennzahlzellen und Werte bei 360/1024/1279 ohne internen Überlauf. Visuell lesbar. |
| Druckknöpfe bei langen Titeln | `secondary-check.json` | 30 Titel-/Knopf-Prüfungen auf Hauswartung, Fenster/Fassade und Premium-Villa bei 360/1024/1279. Keine Überschneidung und kein eigener Textüberlauf. |
| UX-03 Druck-Quellenüberhang | Vorlagenstand zuvor unabhängig mit DE/FR/IT-PDFs bestanden. R2-Fachtexte werden durch den Inhaltsauditor neu exportiert. | Kein neuer eigener Vollprint. Alte PDFs werden ausdrücklich nicht als aktueller Inhaltsnachweis ausgegeben. |
| Neues Industriemotiv | `motifs.json`, `industrie-1440-abschnitt-1.jpg` und `industrie-390-abschnitt-1.jpg` | Neuer P2 UX-05, siehe unten. |

Aktuelle mobile Höhen bei 390, geschlossene Fachwerkzeuge:

| Seite | Höhe R2 | Umfang beginnt |
|---|---:|---:|
| Hauswartung | 14.931 px | 4.680 px |
| Büroreinigung | 15.243 px | 4.996 px |
| Facility Services | 14.271 px | 4.706 px |
| Leistungsübersicht | 12.704 px | Nicht anwendbar |

## Neuer Befund UX-05

**P2, Bild/Text-Zuordnung, `/leistungen/industrie-und-hallenreinigung`.**

Das neue `detail-industrie-hallen.jpg` zeigt das Wischen eines geschlossenen Maschinengehäuses mit einem blauen Tuch. Es wird im ersten Zickzackabschnitt «Hallenböden und Fahrgassen» gerendert. Der zugehörige Text handelt von Scheuersaugmaschine, Schmutzwasser, Bodenbelägen und Fahrgassen. Das Bild erklärt diese Tätigkeit nicht. Der tatsächliche Browserzustand und der Alt-Text stimmen in `motifs.json` überein, der Fehler ist die Abschnittszuordnung.

Der zweite vorhandene Bildslot zeigt das Saugen von Metallspänen auf dem Hallenboden um eine Maschine. Eine Korrektur ohne neues Asset ist möglich: für diese eine Seite `detailImage` und `sceneImage` tauschen. Dann steht Bodensaugen beim Hallenboden und das neue Gehäusemotiv bei der Maschinenreinigung. Dateien: `shared/hero-images.ts`, `shared/scene-images.ts`. Abnahme: Beide gerenderten Bild-/Textpaare auf 1440/390 prüfen, keine Wiederholung des Hero-Bildes.

Root am 29.09.2026 mit Screenshot und konkretem Vorschlag informiert. Bis zu diesem Nachweis ist R2 **nicht frei von mittleren visuellen Befunden**. Die übrigen oben geprüften Wege sind bestanden.
