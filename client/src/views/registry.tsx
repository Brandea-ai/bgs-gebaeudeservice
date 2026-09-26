import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import ArticlePage from '@/components/ArticlePage'
import LegalPage from '@/components/LegalPage'
import HomeView from './HomeView'
import AboutView from './AboutView'
import ContactView from './ContactView'
import AreaView from './AreaView'
import ServicesOverviewView from './ServicesOverviewView'
import PremiumOverviewView from './PremiumOverviewView'
import BlogOverviewView from './BlogOverviewView'
import { getDict } from '../../../content'
import { metaFor, type PagePath } from '../../../shared/seo'
import { pageForSlug, pagePaths, segmentsFor, type Locale } from '../../../shared/i18n'

/**
 * Eine Stelle für alle Seiten (M60): Zu jeder deutschen Adresse die Darstellung
 * und die Metadaten in der gewünschten Sprache. Die Catch-all-Routen je Sprache
 * in app/(de), app/(en), app/(fr) und app/(it) nutzen nur diese Funktionen.
 */
const views: Partial<Record<PagePath, (lang: Locale) => React.ReactNode>> = {
  '/': (lang) => <HomeView lang={lang} />,
  '/ueber-uns': (lang) => <AboutView lang={lang} />,
  '/kontakt': (lang) => <ContactView lang={lang} />,
  '/einzugsgebiet': (lang) => <AreaView lang={lang} />,
  '/leistungen': (lang) => <ServicesOverviewView lang={lang} />,
  '/premium': (lang) => <PremiumOverviewView lang={lang} />,
  '/blog': (lang) => <BlogOverviewView lang={lang} />,
  '/impressum': (lang) => <LegalPage content={getDict(lang).recht.impressum} path="/impressum" lang={lang} />,
  '/datenschutz': (lang) => <LegalPage content={getDict(lang).recht.datenschutz} path="/datenschutz" lang={lang} />,
}

export function renderPage(path: PagePath, lang: Locale): React.ReactNode {
  const view = views[path]
  if (view) return view(lang)
  const dict = getDict(lang)
  const service = [...Object.values(dict.leistungen), ...Object.values(dict.premium)].find((c) => c.path === path)
  if (service) return <ServicePage content={service} lang={lang} />
  const article = Object.values(dict.ratgeber.articles).find((a) => a.path === path)
  if (article) return <ArticlePage article={article} lang={lang} />
  throw new Error(`Keine Darstellung für ${path}`)
}

export function pageMetadata(path: PagePath, lang: Locale): Metadata {
  return metaFor(path, lang)
}

/** Parameter für generateStaticParams einer Sprache */
export function staticParams(lang: Locale) {
  return pagePaths.map((path) => ({ slug: segmentsFor(path, lang) }))
}

export { pageForSlug }
