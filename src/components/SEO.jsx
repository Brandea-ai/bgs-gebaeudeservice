import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'BGS Gebäudeservice - Schweizer Qualität seit 1997',
  description = 'Professionelle Gebäudereinigung und Facility Management in der Schweiz. Von Privatjet-Reinigung bis Unterhaltsreinigung. ISO 9001 zertifiziert.',
  keywords = 'Gebäudereinigung Schweiz, Facility Management, Privatjet Reinigung, Yacht Reinigung, Büroreinigung, Industriereinigung, Luzern, Zürich, St. Gallen',
  canonical,
  ogType = 'website',
  ogImage = '/images/hero-background.jpg',
  noindex = false
}) {
  const siteUrl = 'https://bgs-service.ch'
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="BGS Gebäudeservice" />
      <meta property="og:locale" content="de_CH" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="language" content="German" />
      <meta name="author" content="BGS Gebäudeservice" />
      <meta name="geo.region" content="CH" />
      <meta name="geo.placename" content="Emmenbrücke" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'BGS Gebäudeservice',
          description: description,
          url: siteUrl,
          telephone: '+41413205610',
          email: 'info@bgs-service.ch',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Tannhof 10',
            addressLocality: 'Emmenbrücke',
            addressRegion: 'LU',
            postalCode: '6020',
            addressCountry: 'CH'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '47.08',
            longitude: '8.26'
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00'
          },
          sameAs: [
            'https://www.linkedin.com/company/bgs-gebaeudeservice',
            'https://www.facebook.com/bgsgebaeudeservice'
          ],
          priceRange: '$$',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '500'
          }
        })}
      </script>
    </Helmet>
  )
}
