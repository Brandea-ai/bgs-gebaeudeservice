#!/usr/bin/env python3
"""Kennzeichnet KI-Bilder mit IPTC DigitalSourceType (N9, Audit seo.md).

Aufruf im Repo: python3 Webseite-Analyse/werkzeuge/bilder_kennzeichnen.py [--pruefen]
Braucht exiftool (macOS: brew install exiftool). Reihenfolge nach einem Bildtausch:
bilder_herkunft.json nachführen, dann bilder_kennzeichnen.py, bilder_register.py,
og_bilder.py (ruft die Kennzeichnung der Vorschaubilder selbst auf).

Die Herkunft wird nicht erraten, sondern steht ausdrücklich in bilder_herkunft.json
(Befund B3-D2): Web-Exporte echter Fotos verlieren oft ihre Kameradaten und dürfen
trotzdem nicht als KI-Bild gelten.

- public/bilder: Jedes JPEG muss in bilder_herkunft.json stehen, sonst bricht das
  Werkzeug ab. «ki» bekommt trainedAlgorithmicMedia. «foto» verliert eine vorhandene
  KI-Angabe. Trägt ein «ki»-Bild Kameradaten (EXIF Make/Model), bricht das Werkzeug
  ab: Vermutlich wurde ein echtes Foto eingesetzt, ohne das Register zu ändern.
- public/og: Jedes Vorschaubild übernimmt die Angabe des gleichnamigen Bildes aus
  public/bilder, weil og_bilder.py die Metadaten beim Zuschnitt nicht mitnimmt.
- --pruefen: nur prüfen, nichts schreiben; Ausgang 1 bei Abweichung.

Grenze (Befund B3-D1): Die Angabe steckt in den Originalen unter /bilder und /og.
Die Seiten liefern ihre Bilder über den Bildoptimierer von Next.js (/_next/image)
aus, der AVIF, WebP und JPEG ohne Metadaten neu schreibt. Die Kennzeichnung
erreicht damit og:image und direkt aufgerufene Originale, nicht die Seitenbilder.

Google liest die Angabe aus den eingebetteten IPTC-Metadaten:
developers.google.com/search/docs/appearance/structured-data/image-license-metadata
"""
from __future__ import annotations

import json
import pathlib
import shutil
import subprocess
import sys

root = pathlib.Path(__file__).resolve().parents[2]
bilder = root / "public" / "bilder"
og = root / "public" / "og"
register = pathlib.Path(__file__).with_name("bilder_herkunft.json")
AI = "http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia"
ORIGINS = {"ki", "foto"}


def read(files: list[pathlib.Path]) -> dict[str, dict]:
    if not files:
        return {}
    out = subprocess.run(
        ["exiftool", "-json", "-n", "-XMP-iptcExt:DigitalSourceType", "-EXIF:Make", "-EXIF:Model", *map(str, files)],
        check=True, capture_output=True, text=True,
    ).stdout
    return {pathlib.Path(d["SourceFile"]).name: d for d in json.loads(out)}


def write(files: list[pathlib.Path], value: str | None) -> None:
    """Setzt die Angabe; value None entfernt sie."""
    if files:
        arg = f"-XMP-iptcExt:DigitalSourceType#={value}" if value else "-XMP-iptcExt:DigitalSourceType="
        subprocess.run(["exiftool", "-q", "-overwrite_original", arg, *map(str, files)], check=True)


def load_origins(sources: list[pathlib.Path]) -> dict[str, str]:
    origins = json.loads(register.read_text())["bilder"]
    wrong = {k: v for k, v in origins.items() if v not in ORIGINS}
    missing = [f.stem for f in sources if f.stem not in origins]
    orphaned = sorted(set(origins) - {f.stem for f in sources})
    if wrong:
        sys.exit(f"bilder_herkunft.json: unbekannte Herkunft {wrong}, erlaubt sind {sorted(ORIGINS)}")
    if missing:
        sys.exit("bilder_herkunft.json: Herkunft fehlt für " + ", ".join(missing))
    if orphaned:
        print("Hinweis: im Register, aber ohne Datei: " + ", ".join(orphaned))
    return origins


def main(only_og: bool = False, check_only: bool = False) -> None:
    if not shutil.which("exiftool"):
        sys.exit("exiftool fehlt (macOS: brew install exiftool)")
    sources = sorted(bilder.glob("*.jpg"))
    meta = read(sources)
    drift = 0
    if not only_og:
        origins = load_origins(sources)
        camera = [f.name for f in sources
                  if origins[f.stem] == "ki" and (meta[f.name].get("Make") or meta[f.name].get("Model"))]
        if camera:
            sys.exit("Kameradaten bei Bildern mit Herkunft «ki»: " + ", ".join(camera)
                     + ". Echtes Foto? Dann in bilder_herkunft.json auf «foto» stellen.")
        label = [f for f in sources if origins[f.stem] == "ki" and meta[f.name].get("DigitalSourceType") != AI]
        clear = [f for f in sources if origins[f.stem] == "foto" and meta[f.name].get("DigitalSourceType") == AI]
        drift += len(label) + len(clear)
        if check_only:
            for f in label:
                print(f"fehlt: {f.name} (ki)")
            for f in clear:
                print(f"zu entfernen: {f.name} (foto)")
        else:
            write(label, AI)
            write(clear, None)
            print(f"public/bilder: {len(label)} gekennzeichnet, {len(clear)} Angaben entfernt, "
                  f"{len(sources) - len(label) - len(clear)} unverändert")
            meta = read(sources)
    previews = sorted(og.glob("*.jpg"))
    pmeta = read(previews)
    done = 0
    for f in previews:
        want = meta.get(f.name, {}).get("DigitalSourceType")
        if pmeta[f.name].get("DigitalSourceType") == want:
            continue
        drift += 1
        if check_only:
            print(f"og abweichend: {f.name}")
        else:
            write([f], want)
            done += 1
    if check_only:
        print(f"Prüfung: {drift} Abweichungen bei {len(sources)} Bildern und {len(previews)} Vorschaubildern")
        sys.exit(1 if drift else 0)
    print(f"public/og: {done} von {len(previews)} an das Quellbild angeglichen")


if __name__ == "__main__":
    main(only_og="--nur-og" in sys.argv, check_only="--pruefen" in sys.argv)
