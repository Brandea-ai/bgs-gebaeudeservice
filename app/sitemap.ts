import type { MetadataRoute } from 'next'
import { contentUpdated, siteUrl } from '../shared/seo'
import { activeLocales, alternatesFor, localizePath, pagePaths } from '../shared/i18n'

const absolute = (path: string) => `${siteUrl}${path === '/' ? '' : path}`

// Sitemap aus derselben Seitenliste wie die Metadaten (M17): Nur veröffentlichte
// Seiten, keine Weiterleitungen. Jede Sprachversion mit ihren Gegenstücken (hreflang, S76, M60).
export default function sitemap(): MetadataRoute.Sitemap {
  return activeLocales.flatMap((lang) =>
    pagePaths.map((path) => ({
      url: absolute(localizePath(path, lang)),
      lastModified: contentUpdated,
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
