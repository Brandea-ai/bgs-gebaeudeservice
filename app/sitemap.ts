import type { MetadataRoute } from 'next'
import { contentUpdated, siteUrl, type PagePath } from '../shared/seo'
import { getDict } from '../content'
import type { Locale } from '../shared/i18n'
import { activeLocales, alternatesFor, localizePath, pagePaths } from '../shared/i18n'

const absolute = (path: string) => `${siteUrl}${path === '/' ? '' : path}`

/** Ratgeber und Recht verwenden denselben Stand wie sichtbarer Text und JSON-LD. */
function updatedFor(path: PagePath, lang: Locale): string {
  const dict = getDict(lang)
  if (path === '/impressum') return dict.recht.impressum.updated
  if (path === '/datenschutz') return dict.recht.datenschutz.updated
  const article = Object.values(dict.ratgeber.articles).find((entry) => entry.path === path)
  return article?.updated ?? contentUpdated
}

// Sitemap aus derselben Seitenliste wie die Metadaten (M17): Nur veröffentlichte
// Seiten, keine Weiterleitungen. Jede Sprachversion mit ihren Gegenstücken (hreflang, S76, M60).
export default function sitemap(): MetadataRoute.Sitemap {
  return activeLocales.flatMap((lang) =>
    pagePaths.map((path) => ({
      url: absolute(localizePath(path, lang)),
      lastModified: updatedFor(path, lang),
      ...(activeLocales.length > 1
        ? {
            alternates: {
              languages: Object.fromEntries(
                Object.entries(alternatesFor(path)).map(([code, href]) => [code, absolute(href)]),
              ),
            },
          }
        : {}),
    })),
  )
}
