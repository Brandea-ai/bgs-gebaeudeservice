#!/usr/bin/env python3
"""Kennzeichnet KI-Bilder mit IPTC DigitalSourceType (N9, Audit seo.md).

Aufruf im Repo: python3 Webseite-Analyse/werkzeuge/bilder_kennzeichnen.py
Braucht exiftool (macOS: brew install exiftool). Reihenfolge nach einem Bildtausch:
bilder_kennzeichnen.py, bilder_register.py, og_bilder.py (ruft die Kennzeichnung der
Vorschaubilder selbst auf).

- public/bilder: Jedes JPEG ohne DigitalSourceType und ohne Kameradaten (EXIF Make/Model)
  gilt als KI-Bild und bekommt trainedAlgorithmicMedia. Echte Fotos mit Kameradaten
  bleiben unberührt, ebenso Dateien, die schon eine Angabe tragen.
- public/og: Jedes Vorschaubild übernimmt die Angabe des gleichnamigen Bildes aus
  public/bilder, weil og_bilder.py die Metadaten beim Zuschnitt nicht mitnimmt.

Google liest die Angabe aus den eingebetteten IPTC-Metadaten:
developers.google.com/search/docs/appearance/structured-data/image-license-metadata
"""
import json
import pathlib
import shutil
import subprocess
import sys

root = pathlib.Path(__file__).resolve().parents[2]
bilder = root / "public" / "bilder"
og = root / "public" / "og"
AI = "http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia"


def read(files: list[pathlib.Path]) -> dict[str, dict]:
    if not files:
        return {}
    out = subprocess.run(
        ["exiftool", "-json", "-n", "-XMP-iptcExt:DigitalSourceType", "-EXIF:Make", "-EXIF:Model", *map(str, files)],
        check=True, capture_output=True, text=True,
    ).stdout
    return {pathlib.Path(d["SourceFile"]).name: d for d in json.loads(out)}


def write(files: list[pathlib.Path], value: str) -> None:
    if files:
        subprocess.run(
            ["exiftool", "-q", "-overwrite_original", f"-XMP-iptcExt:DigitalSourceType#={value}", *map(str, files)],
            check=True,
        )


def main(only_og: bool = False) -> None:
    if not shutil.which("exiftool"):
        sys.exit("exiftool fehlt (macOS: brew install exiftool)")
    sources = sorted(bilder.glob("*.jpg"))
    meta = read(sources)
    if not only_og:
        todo = [f for f in sources
                if not meta[f.name].get("DigitalSourceType") and not meta[f.name].get("Make")
                and not meta[f.name].get("Model")]
        write(todo, AI)
        print(f"public/bilder: {len(todo)} neu gekennzeichnet, {len(sources) - len(todo)} unverändert")
        meta = read(sources)
    previews = sorted(og.glob("*.jpg"))
    done = 0
    for f in previews:
        value = meta.get(f.name, {}).get("DigitalSourceType")
        if value:
            write([f], value)
            done += 1
    print(f"public/og: {done} von {len(previews)} mit der Angabe des Quellbilds")


if __name__ == "__main__":
    main(only_og="--nur-og" in sys.argv)
