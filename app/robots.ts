import type { MetadataRoute } from 'next'
import { siteUrl } from '../shared/seo'

// Crawling bleibt erlaubt, damit Suchmaschinen das noindex vor dem Launch sehen
// (M08). Gesperrt wird über Meta-Tag und X-Robots-Tag, nicht über robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
