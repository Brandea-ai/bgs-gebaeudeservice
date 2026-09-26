#!/usr/bin/env python3
"""Prüft die laufende Website: Seiten, Weiterleitungen, Links, Titel und Marke.

Aufruf (Server vorher starten, z. B. `npm run build && npm start`):
    python3 Webseite-Analyse/werkzeuge/seiten_pruefen.py [BASIS-URL] [--indexierbar]

BASIS-URL ist standardmässig http://localhost:3000. Ohne --indexierbar muss jede
Seite `noindex` tragen (Stand bis zum Launch, M08). Nur Python-Standardbibliothek.
Entspricht den Prüfungen der Nachweise N055, N059, N073 und N074 in 08.
"""
import html
import http.client
import pathlib
import re
import sys
from html.parser import HTMLParser
from urllib.parse import urlparse

args = [a for a in sys.argv[1:] if not a.startswith("--")]
BASE = (args[0] if args else "http://localhost:3000").rstrip("/")
INDEXIERBAR = "--indexierbar" in sys.argv
u = urlparse(BASE)
Conn = http.client.HTTPSConnection if u.scheme == "https" else http.client.HTTPConnection


def req(path):
    c = Conn(u.hostname, u.port or (443 if u.scheme == "https" else 80), timeout=30)
    c.request("GET", path)
    r = c.getresponse()
    return r.status, {k.lower(): v for k, v in r.getheaders()}, r.read().decode("utf-8", "replace")


# Marke aus shared/company.ts (M56)
company = (pathlib.Path(__file__).resolve().parents[2] / "shared" / "company.ts").read_text(encoding="utf-8")
BRAND = re.search(r"brand: '([^']+)'", company).group(1)
PREMIUM = re.search(r"premiumBrand: '([^']+)'", company).group(1)

fails = []
s, _, sm = req("/sitemap.xml")
paths = [urlparse(x).path or "/" for x in re.findall(r"<loc>([^<]+)</loc>", sm)]
pages = {}
for p in paths:
    s, h, b = req(p)
    pages[p] = b
    meta = re.search(r'<meta name="robots" content="([^"]+)"', b)
    noindex = "noindex" in (h.get("x-robots-tag") or "") and meta and "noindex" in meta.group(1)
    if s != 200 or (not INDEXIERBAR and not noindex) or (INDEXIERBAR and noindex):
        fails.append(("seite", p, s, h.get("x-robots-tag"), meta and meta.group(1)))
print(f"Sitemap: {len(paths)} Seiten geprüft")

# Alte Adressen -> 308 (03, Abschnitt 2b)
redirects = {
    "/basis/unterhaltsreinigung": "/leistungen/unterhaltsreinigung",
    "/basis/beschaffung": "/leistungen/unterhaltsreinigung",
    "/basis/sonderleistungen": "/leistungen/sonderreinigungen",
    "/basis/hausmeisterservice": "/leistungen/hauswartung",
    "/business/bueroreinigung": "/leistungen/bueroreinigung",
    "/business/baureinigung": "/leistungen/baureinigung",
    "/business/fensterreinigung": "/leistungen/fenster-und-fassadenreinigung",
    "/business/fassadenreinigung": "/leistungen/fenster-und-fassadenreinigung",
    "/business/industriereinigung": "/leistungen/industrie-und-hallenreinigung",
    "/business/hallenreinigung": "/leistungen/industrie-und-hallenreinigung",
    "/business/maschinenreinigung": "/leistungen/industrie-und-hallenreinigung",
    "/business/aussenanlagen": "/leistungen/aussen-und-gruenflaechenpflege",
    "/business/facility-management": "/leistungen/facility-services",
    "/standorte/luzern": "/einzugsgebiet",
    "/standorte/zug": "/einzugsgebiet",
    "/standorte/zuerich": "/einzugsgebiet",
    "/premium/housekeeping": "/premium/luxusimmobilien",
    # Ratgeber (M53)
    "/blog/professionelle-gebaeudereinigung": "/blog/richtige-reinigungsfirma-finden",
    "/blog/umweltfreundliche-reinigung": "/leistungen/unterhaltsreinigung",
}
ok = 0
for src, dst in redirects.items():
    s, h, _ = req(src)
    if s == 308 and h.get("location") == dst and req(dst)[0] == 200:
        ok += 1
    else:
        fails.append(("weiterleitung", src, s, h.get("location")))
print(f"Weiterleitungen: {ok}/{len(redirects)}")

for p, soll in [("/basis/winterdienst", 410), ("/referenzen", 404), ("/business", 404), ("/basis", 404)]:
    s = req(p)[0]
    if s != soll:
        fails.append(("status", p, s, soll))


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.ids = [], set()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "a" and a.get("href"):
            self.links.append(a["href"])
        if a.get("id"):
            self.ids.add(a["id"])


checked = {}
for p, b in pages.items():
    lp = Links()
    lp.feed(b)
    for href in lp.links:
        if href.startswith(("http", "mailto:", "tel:")):
            continue
        if href.startswith("#"):
            if href[1:] and href[1:] not in lp.ids:
                fails.append(("sprungziel", p, href))
            continue
        path = href.split("#")[0].split("?")[0] or "/"
        if path not in checked:
            checked[path] = req(path)[0]
        if checked[path] != 200:
            fails.append(("link", p, href, checked[path]))
print(f"Interne Linkziele: {len(checked)}")

titles = {}
for p, b in pages.items():
    t = html.unescape(re.search(r"<title>(.*?)</title>", b, re.S).group(1))
    titles[p] = t
    marke = f"{PREMIUM} von {BRAND}" if p.startswith("/premium") else BRAND
    if len(t) > 70 or marke not in t:
        fails.append(("titel", p, t))
    if len(re.findall(r"<h1[\s>]", b)) != 1:
        fails.append(("h1", p))
dup = {t for t in titles.values() if list(titles.values()).count(t) > 1}
if dup:
    fails.append(("doppelte titel", sorted(dup)))
print(f"Titel: {len(titles)}, Marke {BRAND} / {PREMIUM} von {BRAND}")

print("FEHLER:" if fails else "Alles in Ordnung.")
for f in fails:
    print("  ", f)
sys.exit(1 if fails else 0)
