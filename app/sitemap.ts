import type { MetadataRoute } from 'next'
import { contentUpdated, pages, siteUrl } from '../shared/seo'

// Sitemap aus derselben Seitenliste wie die Metadaten (M17): Nur veröffentlichte
// Seiten, keine Weiterleitungen und keine entfernten Adressen.
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(pages).map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified: contentUpdated,
  }))
}
