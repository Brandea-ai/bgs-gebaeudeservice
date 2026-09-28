#!/usr/bin/env python3
"""Erzeugt shared/images.ts aus public/bilder/*.jpg (E80): Kennung, Pfad, Breite, Höhe.

Aufruf im Repo: python3 Webseite-Analyse/werkzeuge/bilder_register.py
Echte Fotos ersetzen die Dateien später unter demselben Namen, danach erneut ausführen.
"""
import hashlib
import pathlib
import struct

root = pathlib.Path(__file__).resolve().parents[2]
folder = root / "public" / "bilder"


def jpeg_size(path: pathlib.Path) -> tuple[int, int]:
    data = path.read_bytes()
    i = 2
    while i < len(data):
        if data[i] != 0xFF:
            i += 1
            continue
        marker = data[i + 1]
        length = struct.unpack(">H", data[i + 2:i + 4])[0]
        if marker in (0xC0, 0xC1, 0xC2):
            h, w = struct.unpack(">HH", data[i + 5:i + 9])
            return w, h
        i += 2 + length
    raise ValueError(f"keine Grösse in {path}")


rows = []
for f in sorted(folder.glob("*.jpg")):
    w, h = jpeg_size(f)
    # Inhalts-Hash in der Adresse: neue Bildfassung = neue URL, sonst liefern der
    # Bild-Cache von Next.js und das CDN die alte Fassung weiter aus
    v = hashlib.sha256(f.read_bytes()).hexdigest()[:8]
    rows.append(f"  '{f.stem}': {{ src: '/bilder/{f.name}?v={v}', version: '{v}', width: {w}, height: {h} }},")

out = root / "shared" / "images.ts"
out.write_text(
    "/**\n"
    " * Bildregister (E80), erzeugt von Webseite-Analyse/werkzeuge/bilder_register.py.\n"
    " * Symbolbilder nach E19: keine Gesichter, keine Schrift, kein «Team». Echte Fotos\n"
    " * ersetzen die Dateien in public/bilder unter demselben Namen. Alt-Texte je\n"
    " * Sprache stehen in content/<sprache>/bilder.ts.\n"
    " */\n"
    "export const images = {\n" + "\n".join(rows) + "\n} as const\n\n"
    "export type ImageKey = keyof typeof images\n"
)
print(f"{len(rows)} Bilder in {out.relative_to(root)}")
