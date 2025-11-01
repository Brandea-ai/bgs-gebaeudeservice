// Schema.org structured data helpers for Swiss Reinigungsfirma

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Swiss Reinigungsfirma",
  "url": "https://bgs-gebaeudeservice.vercel.app",
  "logo": "https://bgs-gebaeudeservice.vercel.app/swiss-logo.webp",
  "description": "Professionelle Reinigungsfirma in der Schweiz für Gebäudereinigung, Büroreinigung und Facility Management",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CH",
    "addressRegion": "Zentralschweiz"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+41-41-320-56-10",
    "contactType": "customer service",
    "availableLanguage": ["de", "en"],
    "areaServed": ["CH"]
  },
  "sameAs": []
};

export const localBusinessSchema = (location: {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  lat: number;
  lng: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://bgs-gebaeudeservice.vercel.app/standorte/${location.city.toLowerCase()}`,
  "name": `Swiss Reinigungsfirma ${location.city}`,
  "image": "https://bgs-gebaeudeservice.vercel.app/swiss-hero-main.jpg",
  "description": `Professionelle Reinigungsfirma und Gebäudereinigung in ${location.city}. Zuverlässige Reinigungsdienste für Unternehmen und Premium-Kunden.`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": location.address,
    "addressLocality": location.city,
    "postalCode": location.postalCode,
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": location.lat,
    "longitude": location.lng
  },
  "url": `https://bgs-gebaeudeservice.vercel.app/standorte/${location.city.toLowerCase()}`,
  "telephone": "+41-41-320-56-10",
  "priceRange": "CHF",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://bgs-gebaeudeservice.vercel.app${service.url}`,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "Swiss Reinigungsfirma",
    "url": "https://bgs-gebaeudeservice.vercel.app"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Switzerland"
  },
  "serviceType": service.category,
  "url": `https://bgs-gebaeudeservice.vercel.app${service.url}`,
  "image": "https://bgs-gebaeudeservice.vercel.app/swiss-hero-main.jpg"
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://bgs-gebaeudeservice.vercel.app${item.url}`
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image || "https://bgs-gebaeudeservice.vercel.app/swiss-hero-main.jpg",
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Organization",
    "name": "Swiss Reinigungsfirma"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Swiss Reinigungsfirma",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bgs-gebaeudeservice.vercel.app/swiss-logo.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://bgs-gebaeudeservice.vercel.app${article.url}`
  }
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
