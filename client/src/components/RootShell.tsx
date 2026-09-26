import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../../app/globals.css'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ChatbotProvider } from '@/contexts/ChatbotContext'
import AIChatbot from '@/components/AIChatbot'
import ErrorBoundary from '@/components/ErrorBoundary'
import JsonLd from '@/components/JsonLd'
import { company } from '../../../shared/company'
import { siteUrl } from '../../../shared/seo'
import { organizationJsonLd } from '../../../shared/structured-data'
import { hreflang, ogLocale, type Locale } from '../../../shared/i18n'
import { getDict } from '../../../content'

const inter = Inter({ subsets: ['latin'] })

const isIndexable = process.env.SITE_INDEXABLE === 'true'

/** Grundeinstellungen je Sprache. Titel und Beschreibungen je Seite in content/<sprache>/seo.ts (M16). */
export function rootMetadata(lang: Locale): Metadata {
  const home = getDict(lang).pages['/']
  return {
    metadataBase: new URL(siteUrl),
    // Kein Vorschaubild bis zum neuen Logo (M35)
    title: { default: home.title, template: `%s | ${company.brand}` },
    description: home.description,
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: 'website',
      locale: ogLocale[lang],
      siteName: company.brand,
      title: home.title,
      description: home.description,
    },
    twitter: { card: 'summary', title: home.title, description: home.description },
    // Bis zum Launch nicht indexierbar. Freischalten nur in der Vercel-Produktion
    // mit SITE_INDEXABLE=true (Entscheidung E12, Webseite-Analyse/11).
    robots: isIndexable
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
        }
      : { index: false, follow: false, googleBot: { index: false, follow: false } },
  }
}

/**
 * Grundlayout je Sprache (M60): Jede Sprache hat ein eigenes Wurzellayout, damit
 * das lang-Attribut im statisch erzeugten HTML stimmt.
 */
export default function RootShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={hreflang[lang]} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        {/* Unternehmen als strukturierte Daten, Leistungsseiten verweisen darauf (GLOBAL-010) */}
        <JsonLd data={organizationJsonLd} />
        <ErrorBoundary>
          <ThemeProvider defaultTheme="light">
            <ChatbotProvider>
              <TooltipProvider>
                <Toaster />
                {/* Kein Cookie-Banner: keine einwilligungspflichtigen Dienste, die Karte fragt selbst (M15, E20) */}
                <AIChatbot />
                {children}
              </TooltipProvider>
            </ChatbotProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
