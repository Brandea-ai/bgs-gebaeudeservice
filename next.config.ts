import type { NextConfig } from 'next'

// Bis zum Launch nicht indexierbar, siehe app/layout.tsx (Entscheidung E12).
const isIndexable = process.env.SITE_INDEXABLE === 'true'

// Sicherheitsheader (M33). Die Seiten werden statisch erzeugt, darum braucht Next.js
// 'unsafe-inline' für seine Inline-Skripte (Nonces verlangen dynamisches Rendern).
// Fremd geladen wird nur die Karte nach Klick (M15). Die Vercel-Toolbar nur in Previews.
const isPreview = process.env.VERCEL_ENV === 'preview'
const isDev = process.env.NODE_ENV !== 'production'
const toolbar = (...sources: string[]) => (isPreview ? sources : [])

const contentSecurityPolicy = [
  "default-src 'self'",
  ["script-src 'self' 'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : []), ...toolbar('https://vercel.live')].join(' '),
  ["style-src 'self' 'unsafe-inline'", ...toolbar('https://vercel.live')].join(' '),
  ["img-src 'self' data: blob:", ...toolbar('https://vercel.live', 'https://vercel.com')].join(' '),
  ["font-src 'self' data:", ...toolbar('https://vercel.live', 'https://assets.vercel.com')].join(' '),
  ["connect-src 'self'", ...(isDev ? ['ws:'] : []), ...toolbar('https://vercel.live', 'wss://ws-us3.pusher.com')].join(' '),
  ['frame-src https://www.google.com https://maps.google.com', ...toolbar('https://vercel.live')].join(' '),
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // TypeScript & ESLint
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Image Optimization
  // Keine fremden Hosts: Die Seiten nutzen next/image nicht, ein offenes
  // Muster würde den Bildoptimierer als Proxy für beliebige Hosts öffnen (M02).
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Experimental Features
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
      'lucide-react',
      'framer-motion',
    ],
  },

  // Weggefallene Seiten auf fachlich passende Ziele (03, Abschnitt 2b)
  async redirects() {
    return [
      { source: '/standorte/:slug*', destination: '/einzugsgebiet', permanent: true },
      { source: '/premium/housekeeping', destination: '/premium/luxusimmobilien', permanent: true },
      // Zielbild v2: Leistungen unter /leistungen (03, Abschnitt 2b)
      { source: '/basis/unterhaltsreinigung', destination: '/leistungen/unterhaltsreinigung', permanent: true },
      { source: '/basis/beschaffung', destination: '/leistungen/unterhaltsreinigung', permanent: true },
      { source: '/basis/sonderleistungen', destination: '/leistungen/sonderreinigungen', permanent: true },
      { source: '/basis/hausmeisterservice', destination: '/leistungen/hauswartung', permanent: true },
      { source: '/business/bueroreinigung', destination: '/leistungen/bueroreinigung', permanent: true },
      { source: '/business/baureinigung', destination: '/leistungen/baureinigung', permanent: true },
      { source: '/business/fensterreinigung', destination: '/leistungen/fenster-und-fassadenreinigung', permanent: true },
      { source: '/business/fassadenreinigung', destination: '/leistungen/fenster-und-fassadenreinigung', permanent: true },
      { source: '/business/industriereinigung', destination: '/leistungen/industrie-und-hallenreinigung', permanent: true },
      { source: '/business/hallenreinigung', destination: '/leistungen/industrie-und-hallenreinigung', permanent: true },
      { source: '/business/maschinenreinigung', destination: '/leistungen/industrie-und-hallenreinigung', permanent: true },
      { source: '/business/aussenanlagen', destination: '/leistungen/aussen-und-gruenflaechenpflege', permanent: true },
      { source: '/business/facility-management', destination: '/leistungen/facility-services', permanent: true },
      // Ratgeber (M53): P28 in P30 zusammengeführt, P31 zurückgestellt, die Frage nach den Mitteln steht in der FAQ der Unterhaltsreinigung
      { source: '/blog/professionelle-gebaeudereinigung', destination: '/blog/richtige-reinigungsfirma-finden', permanent: true },
      { source: '/blog/umweltfreundliche-reinigung', destination: '/leistungen/unterhaltsreinigung', permanent: true },
    ]
  },

  // Headers for SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
          },
          ...(isIndexable
            ? []
            : [
                {
                  key: 'X-Robots-Tag',
                  value: 'noindex, nofollow'
                },
              ]),
        ],
      },
    ]
  },
}

export default nextConfig
