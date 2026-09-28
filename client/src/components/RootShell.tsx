import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "../../../app/globals.css";
import "../styles/bewegung.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ChatbotProvider } from "@/contexts/ChatbotContext";
import { LazyChatbot } from "@/components/LazyChat";
import ErrorBoundary from "@/components/ErrorBoundary";
import JsonLd from "@/components/JsonLd";
import { company, newBrandActive } from "../../../shared/company";
import { previewImage, siteUrl } from "../../../shared/seo";
import { organizationJsonLd } from "../../../shared/structured-data";
import { hreflang, ogLocale, type Locale } from "../../../shared/i18n";
import { getDict } from "../../../content";

// Schriften (Rebranding E80): Geist für Titel und Text, Geist Mono für Kennzeichnungen,
// Cormorant Garamond nur für die Premium-Linie (wie die Wortmarke Clavea). next/font lädt sie vom eigenen Server.
const display = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});
const premium = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-premium",
  display: "swap",
});

const isIndexable = process.env.SITE_INDEXABLE === "true";

/** Grundeinstellungen je Sprache. Titel und Beschreibungen je Seite in content/<sprache>/seo.ts (M16). */
export function rootMetadata(lang: Locale): Metadata {
  const home = getDict(lang).pages["/"];
  return {
    metadataBase: new URL(siteUrl),
    title: { default: home.title, template: `%s | ${company.brand}` },
    description: home.description,
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      siteName: company.brand,
      title: home.title,
      description: home.description,
      images: [previewImage("/", lang)],
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
      images: [previewImage("/", lang)],
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
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
  };
}

/**
 * Grundlayout je Sprache (M60): Jede Sprache hat ein eigenes Wurzellayout, damit
 * das lang-Attribut im statisch erzeugten HTML stimmt.
 */
export default function RootShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={hreflang[lang]}
      className={`${display.variable} ${mono.variable} ${premium.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Mit der neuen Marke Zeichen und App-Symbol von Mantena (E80) */}
        {newBrandActive ? (
          <>
            <link rel="icon" href="/marke/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/marke/apple-touch-icon.png" />
          </>
        ) : (
          <>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          </>
        )}
        {/* Kennzeichnet JavaScript vor dem ersten Bild, damit Einblendungen nur damit greifen (F7) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="font-sans">
        {/* Unternehmen als strukturierte Daten, Leistungsseiten verweisen darauf (GLOBAL-010) */}
        <JsonLd data={organizationJsonLd(lang)} />
        <ErrorBoundary lang={lang}>
          <ThemeProvider defaultTheme="light">
            <ChatbotProvider>
              {/* Kein Cookie-Banner: keine einwilligungspflichtigen Dienste, die Karte fragt selbst (M15, E20) */}
              {/* Chat erst mit Modell und Zugang (E14, E35), vorher kein Code im Browser (M25) */}
              <LazyChatbot />
              {children}
            </ChatbotProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
