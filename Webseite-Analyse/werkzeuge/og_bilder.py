#!/usr/bin/env python3
"""Erzeugt Vorschaubilder für Open Graph und X (1200 x 630) aus public/bilder/hero-*.jpg.

Aufruf im Repo: python3 Webseite-Analyse/werkzeuge/og_bilder.py
Nach jedem Bildtausch in public/bilder erneut ausführen. Ohne Schrift und Logo,
damit das Bild für alle Sprachen und beide Marken-Modi gilt (E19, E38).
Am Ende übernimmt jedes Vorschaubild die IPTC-Kennzeichnung seines Quellbilds (N9,
bilder_kennzeichnen.py, Herkunft laut bilder_herkunft.json), weil der Zuschnitt die
Metadaten nicht mitnimmt.
"""
import pathlib
import shutil
import subprocess
import sys

from PIL import Image

root = pathlib.Path(__file__).resolve().parents[2]
source = root / "public" / "bilder"
target = root / "public" / "og"
target.mkdir(exist_ok=True)
W, H = 1200, 630

for old in target.glob("*.jpg"):
    old.unlink()

for f in sorted(source.glob("hero-*.jpg")):
    img = Image.open(f).convert("RGB")
    scale = max(W / img.width, H / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    # Motiv sitzt im Hero rechts (object-position 70 %), deshalb leicht nach rechts zuschneiden
    left = round((img.width - W) * 0.7)
    top = round((img.height - H) / 2)
    img.crop((left, top, left + W, top + H)).save(
        target / f.name, "JPEG", quality=82, optimize=True, progressive=True
    )
    print(f.name)

if shutil.which("exiftool"):
    subprocess.run([sys.executable, str(pathlib.Path(__file__).with_name("bilder_kennzeichnen.py")), "--nur-og"], check=True)
else:
    print("Hinweis: exiftool fehlt, Vorschaubilder ohne IPTC-Kennzeichnung (brew install exiftool)")
