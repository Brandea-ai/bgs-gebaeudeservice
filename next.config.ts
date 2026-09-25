import type { NextConfig } from 'next'

// Bis zum Launch nicht indexierbar, siehe app/layout.tsx (Entscheidung E12).
const isIndexable = process.env.SITE_INDEXABLE === 'true'

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
            value: 'origin-when-cross-origin'
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
