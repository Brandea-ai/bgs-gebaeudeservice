/**
 * Search API Route
 * GET /api/search?query=...&limit=10&offset=0&type=all
 */

import { NextRequest } from 'next/server';
import { searchSchema } from '@/lib/validation/schemas';
import { rateLimit, setSecurityHeaders } from '@/lib/security/middleware';
import { handleApiError, successResponse, ApiError } from '@/lib/api/error-handler';

// Search index (in production, use a proper search engine like Algolia or MeiliSearch)
const searchIndex = [
  // Services
  {
    id: 'service-cleaning',
    type: 'services',
    title: 'Reinigungsdienste',
    description: 'Professionelle Reinigungsdienste für Büros, Wohnungen und Industriegebäude.',
    url: '/dienstleistungen/reinigung',
    keywords: ['reinigung', 'cleaning', 'büroreinigung', 'gebäudereinigung', 'sauberkeit'],
  },
  {
    id: 'service-maintenance',
    type: 'services',
    title: 'Hausmeisterservice',
    description: 'Zuverlässiger Hausmeisterservice für Ihre Immobilie.',
    url: '/dienstleistungen/hausmeister',
    keywords: ['hausmeister', 'wartung', 'instandhaltung', 'reparatur', 'facility'],
  },
  {
    id: 'service-security',
    type: 'services',
    title: 'Sicherheitsdienste',
    description: 'Professionelle Sicherheitsdienste und Objektschutz.',
    url: '/dienstleistungen/sicherheit',
    keywords: ['sicherheit', 'security', 'objektschutz', 'bewachung', 'schutz'],
  },
  {
    id: 'service-facility',
    type: 'services',
    title: 'Facility Management',
    description: 'Ganzheitliches Facility Management für Ihre Immobilie.',
    url: '/dienstleistungen/facility-management',
    keywords: ['facility', 'management', 'gebäudemanagement', 'verwaltung'],
  },
  // Pages
  {
    id: 'page-home',
    type: 'pages',
    title: 'Startseite',
    description: 'BGS Gebäudeservice - Ihr professioneller Partner für Gebäudemanagement.',
    url: '/',
    keywords: ['home', 'startseite', 'bgs', 'gebäudeservice'],
  },
  {
    id: 'page-about',
    type: 'pages',
    title: 'Über uns',
    description: 'Erfahren Sie mehr über BGS Gebäudeservice und unser Team.',
    url: '/ueber-uns',
    keywords: ['über uns', 'about', 'team', 'unternehmen', 'geschichte'],
  },
  {
    id: 'page-contact',
    type: 'pages',
    title: 'Kontakt',
    description: 'Kontaktieren Sie uns für eine unverbindliche Beratung.',
    url: '/kontakt',
    keywords: ['kontakt', 'contact', 'anfrage', 'beratung'],
  },
];

export async function GET(request: NextRequest) {
  try {
    // Security: Rate limiting
    const rateLimitResult = await rateLimit(request, {
      windowMs: 60000, // 1 minute
      maxRequests: 30, // 30 requests per minute
    });

    if (!rateLimitResult.success) {
      throw new ApiError(429, 'Too many requests. Please try again later.', 'RATE_LIMIT_EXCEEDED');
    }

    // Parse and validate query parameters
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
    const limit = Number(searchParams.get('limit')) || 10;
    const offset = Number(searchParams.get('offset')) || 0;
    const type = searchParams.get('type') || 'all';

    const validatedParams = searchSchema.parse({
      query,
      limit,
      offset,
      type,
    });

    // Perform fuzzy search
    const results = performSearch(
      validatedParams.query,
      validatedParams.type,
      validatedParams.limit,
      validatedParams.offset
    );

    // Build response
    const response = successResponse({
      query: validatedParams.query,
      results: results.items,
      total: results.total,
      limit: validatedParams.limit,
      offset: validatedParams.offset,
    });

    return setSecurityHeaders(response);
  } catch (error) {
    const errorResponse = handleApiError(error);
    return setSecurityHeaders(errorResponse);
  }
}

/**
 * Perform fuzzy search over search index
 */
function performSearch(
  query: string,
  type: string,
  limit: number,
  offset: number
) {
  const normalizedQuery = query.toLowerCase();

  // Filter by type
  let filtered = searchIndex;
  if (type !== 'all') {
    filtered = searchIndex.filter((item) => item.type === type);
  }

  // Score each item
  const scored = filtered.map((item) => {
    let score = 0;

    // Exact title match
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 100;
    }

    // Description match
    if (item.description.toLowerCase().includes(normalizedQuery)) {
      score += 50;
    }

    // Keyword match
    for (const keyword of item.keywords) {
      if (keyword.includes(normalizedQuery)) {
        score += 25;
      }
    }

    // Fuzzy match for keywords
    for (const keyword of item.keywords) {
      const similarity = calculateSimilarity(normalizedQuery, keyword);
      if (similarity > 0.7) {
        score += Math.floor(similarity * 20);
      }
    }

    return { ...item, score };
  });

  // Filter out zero scores and sort by score
  const filtered_scored = scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // Paginate
  const total = filtered_scored.length;
  const items = filtered_scored.slice(offset, offset + limit).map((item) => ({
    id: item.id,
    type: item.type,
    title: item.title,
    description: item.description,
    url: item.url,
  }));

  return { items, total };
}

/**
 * Calculate string similarity (Levenshtein distance)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 === 0) return len2 === 0 ? 1 : 0;
  if (len2 === 0) return 0;

  const matrix: number[][] = [];

  for (let i = 0; i <= len2; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len1; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  const distance = matrix[len2][len1];
  return 1 - distance / Math.max(len1, len2);
}

// OPTIONS for CORS preflight
export async function OPTIONS() {
  const response = new Response(null, { status: 204 });
  return setSecurityHeaders(response);
}
