import type { Metadata } from 'next'
import { company } from './company'
import { pages } from '../content/de/seo'
import { getDict } from '../content'
import { activeLocales, alternatesFor, localizePath, ogLocale, type Locale } from './i18n'
import { heroImage } from './hero-images'
import { images } from './images'

// Metadaten und Brotkrumen aus den Seitentexten in content/<sprache>/seo.ts (M16, M20, M60).
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bgs-gebaeudeservice.vercel.app'

// Stand der Inhalte für die Sitemap (M17). Bei inhaltlichen Änderungen nachführen.
export const contentUpdated = '2026-09-28'

export { pages }
export type PagePath = keyof typeof pages

// Premium-Seiten tragen die Linie mit Dachmarke, alle anderen die Dachmarke (E37, E47)
function brandFor(path: string, lang: Locale): string {
  return path.startsWith('/premium') ? getDict(lang).misc.premiumTitleBrand : company.brand
}

/**
 * Vorschaubild für Open Graph und X: Hero-Bild der Seite in 1200 x 630
 * (public/og, erzeugt von Webseite-Analyse/werkzeuge/og_bilder.py), Alt-Text in der Sprache der Seite.
 */
export function previewImage(path: PagePath, lang: Locale) {
  const key = heroImage[path]
  return { url: `/og/${key}.jpg?v=${images[key].version}`, width: 1200, height: 630, alt: getDict(lang).bilder[key] }
}

export function metaFor(path: PagePath, lang: Locale = 'de'): Metadata {
  const { title, description } = getDict(lang).pages[path]
  const url = localizePath(path, lang)
  const image = previewImage(path, lang)
  return {
    // Vollständiger Titel statt Vorlage: Ein Layout mit eigenem Titel (etwa /blog)
    // hebt die Vorlage für seine Unterseiten sonst auf. Die Startseite trägt die Marke schon.
    title: { absolute: path === '/' ? title : `${title} | ${brandFor(path, lang)}` },
    description,
    // Sprachversionen gegenseitig verknüpft (hreflang, S76, M60)
    alternates: { canonical: url, languages: alternatesFor(path) },
    openGraph: {
      type: path.startsWith('/blog/') ? 'article' : 'website',
      locale: ogLocale[lang],
      alternateLocale: activeLocales.filter((other) => other !== lang).map((other) => ogLocale[other]),
      siteName: company.brand,
      url,
      title,
      description,
      images: [image],
    },
    // Ohne eigene Angabe erben Unterseiten sonst Titel und Text der Startseite (T09)
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

/**
 * Brotkrumen (M20): Startseite, dann jede Ebene der Adresse, die es als Seite gibt.
 * Beispiel: /leistungen/hauswartung → Startseite › Leistungen › Hauswartung.
 * Die Pfade bleiben deutsche Schlüssel, die Darstellung setzt die Sprache ein.
 */
export function trailFor(path: PagePath, lang: Locale = 'de'): { path: PagePath; label: string }[] {
  const texts = getDict(lang).pages
  const trail: { path: PagePath; label: string }[] = [{ path: '/', label: texts['/'].label }]
  let current = ''
  for (const segment of path.split('/').filter(Boolean)) {
    current += `/${segment}`
    if (current in pages) trail.push({ path: current as PagePath, label: texts[current as PagePath].label })
  }
  return trail
}
