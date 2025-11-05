import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ChatbotProvider } from '@/contexts/ChatbotContext'
import CookieConsent from '@/components/CookieConsent'
import AIChatbot from '@/components/AIChatbot'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://bgs-gebaeudeservice.vercel.app'),
  title: {
    default: 'BGS Gebäudeservice - Professionelle Reinigungsdienstleistungen in der Schweiz',
    template: '%s | BGS Gebäudeservice'
  },
  description: 'Professionelle Gebäudereinigung für Premium, Business und Basis-Services in Zürich, Zug und Luzern. Büroreinigung, Industriereinigung, Facility Management und mehr.',
  keywords: [
    'Gebäudereinigung',
    'Reinigungsservice',
    'Büroreinigung',
    'Industriereinigung',
    'Facility Management',
    'Zürich',
    'Zug',
    'Luzern',
    'Schweiz',
    'BGS'
  ],
  authors: [{ name: 'BGS Gebäudeservice' }],
  creator: 'BGS Gebäudeservice',
  publisher: 'BGS Gebäudeservice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://bgs-gebaeudeservice.vercel.app',
    siteName: 'BGS Gebäudeservice',
    title: 'BGS Gebäudeservice - Professionelle Reinigungsdienstleistungen',
    description: 'Professionelle Gebäudereinigung in der Schweiz - Premium, Business & Basis Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BGS Gebäudeservice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGS Gebäudeservice - Professionelle Reinigungsdienstleistungen',
    description: 'Professionelle Gebäudereinigung in der Schweiz',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Später hinzufügen
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
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
                <CookieConsent />
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
