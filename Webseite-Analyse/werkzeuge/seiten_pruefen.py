#!/usr/bin/env python3
"""Prüft die laufende Website: Seiten, Weiterleitungen, Links, Titel und Marke.

Aufruf (Server vorher starten, z. B. `npm run build && npm start`, für die Arbeitsmarke
mit `NEW_BRAND=false npm run build`):
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


# Marke (M56): beide Namen aus shared/company.ts, der aktive aus og:site_name der
# Startseite. Mit der Arbeitsmarke darf der neue Name nirgends stehen (E38).
company = (pathlib.Path(__file__).resolve().parents[2] / "shared" / "company.ts").read_text(encoding="utf-8")
NEU = re.search(r"\? \{ brand: '([^']+)', premiumBrand: '([^']+)' \}", company)
ALT = re.search(r": \{ brand: '([^']+)', premiumBrand: null \}", company)

fails = []
site = html.unescape(re.search(r'<meta property="og:site_name" content="([^"]+)"', req("/")[2]).group(1))
if site == NEU.group(1):
    BRAND, PREMIUM = NEU.group(1), NEU.group(2)
elif site == ALT.group(1):
    BRAND, PREMIUM = ALT.group(1), None
else:
    fails.append(("marke unbekannt", site))
    BRAND, PREMIUM = site, None
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

# Mehrsprachigkeit (M60): Sprache aus dem Präfix, lang-Attribut und hreflang je Seite
LANG = {"en": "en", "fr": "fr-CH", "it": "it-CH"}
def lang_of(p):
    first = p.strip("/").split("/")[0]
    return first if first in LANG else "de"
langs = sorted({lang_of(p) for p in paths})
alternates = {}
titles = {}
for p, b in pages.items():
    t = html.unescape(re.search(r"<title>(.*?)</title>", b, re.S).group(1))
    titles[p] = t
    lang = lang_of(p)
    rest = p if lang == "de" else p[len(lang) + 1:]
    premium = rest.startswith("/premium")
    # Premium-Seiten tragen Linie und Dachmarke, das Bindewort hängt von der Sprache ab
    if premium and PREMIUM:
        ok_brand = PREMIUM in t and BRAND in t
    else:
        ok_brand = BRAND in t
    if len(t) > 70 or not ok_brand:
        fails.append(("titel", p, t))
    if len(re.findall(r"<h1[\s>]", b)) != 1:
        fails.append(("h1", p))
    html_lang = re.search(r'<html[^>]*\slang="([^"]+)"', b)
    if not html_lang or html_lang.group(1) != LANG.get(lang, "de-CH"):
        fails.append(("lang", p, html_lang and html_lang.group(1)))
    if len(langs) > 1:
        links = {m.group(1): urlparse(html.unescape(m.group(2))).path or "/" for m in re.finditer(r'<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"', b)}
        alternates[p] = links
        if len(links) != len(langs) + 1 or links.get(LANG.get(lang, "de-CH")) != p:
            fails.append(("hreflang", p, links))
# Gegenseitig: Jede verlinkte Sprachversion verweist auf dieselbe Gruppe zurück (S76)
for p, links in alternates.items():
    for code, target in links.items():
        if code != "x-default" and alternates.get(target) != links:
            fails.append(("hreflang nicht gegenseitig", p, target))
if len(langs) > 1:
    print(f"Sprachen: {', '.join(langs)}, hreflang in {len(alternates)} Seiten geprüft")
dup = {t for t in titles.values() if list(titles.values()).count(t) > 1}
if dup:
    fails.append(("doppelte titel", sorted(dup)))
print(f"Titel: {len(titles)}, Marke {BRAND}" + (f" / {PREMIUM} von {BRAND}" if PREMIUM else " (Arbeitsmarke)"))

# E38: Mit der Arbeitsmarke kommt der neue Name in keiner Seite und im Manifest vor
if PREMIUM is None:
    s, _, manifest = req("/manifest.webmanifest")
    for p, b in list(pages.items()) + [("/manifest.webmanifest", manifest)]:
        for name in (NEU.group(1), NEU.group(2)):
            if name in b:
                fails.append(("neuer name sichtbar", p, name))
    print(f"Neuer Name ({NEU.group(1)}, {NEU.group(2)}) in {len(pages) + 1} Dokumenten gesucht")

print("FEHLER:" if fails else "Alles in Ordnung.")
for f in fails:
    print("  ", f)
sys.exit(1 if fails else 0)
