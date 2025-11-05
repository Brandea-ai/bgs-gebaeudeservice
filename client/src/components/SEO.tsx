// SEO Component nicht mehr nötig in Next.js
// Metadata wird direkt in page.tsx mit export const metadata definiert

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  schema?: any;
}

export default function SEO(props: SEOProps) {
  // Keine Implementierung nötig - Next.js Metadata API übernimmt das
  return null;
}
