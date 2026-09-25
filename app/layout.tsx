import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ChatbotProvider } from '@/contexts/ChatbotContext'
import AIChatbot from '@/components/AIChatbot'
import ErrorBoundary from '@/components/ErrorBoundary'
import { company } from '../shared/company'
import { pages, siteUrl } from '../shared/seo'

const inter = Inter({ subsets: ['latin'] })

const isIndexable = process.env.SITE_INDEXABLE === 'true'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Titel und Beschreibungen je Seite in shared/seo.ts (M16). Kein Vorschaubild bis zum neuen Logo (M35).
  title: {
    default: pages['/'].title,
    template: `%s | ${company.brand}`,
  },
  description: pages['/'].description,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    siteName: company.brand,
    title: pages['/'].title,
    description: pages['/'].description,
  },
  twitter: {
    card: 'summary',
    title: pages['/'].title,
    description: pages['/'].description,
  },
  // Bis zum Launch nicht indexierbar. Freischalten nur in der Vercel-Produktion
  // mit SITE_INDEXABLE=true (Entscheidung E12, Webseite-Analyse/11).
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
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
