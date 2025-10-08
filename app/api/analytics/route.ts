/**
 * Analytics API Route
 * POST /api/analytics - Track events and scroll depth
 */

import { NextRequest } from 'next/server';
import { analyticsEventSchema, scrollDepthSchema } from '@/lib/validation/schemas';
import { rateLimit, setSecurityHeaders } from '@/lib/security/middleware';
import { prisma } from '@/lib/prisma/client';
import { handleApiError, successResponse, ApiError } from '@/lib/api/error-handler';

export async function POST(request: NextRequest) {
  try {
    // Security: Rate limiting
    const rateLimitResult = await rateLimit(request, {
      windowMs: 60000, // 1 minute
      maxRequests: 100, // 100 requests per minute
    });

    if (!rateLimitResult.success) {
      throw new ApiError(429, 'Too many requests. Please try again later.', 'RATE_LIMIT_EXCEEDED');
    }

    // Parse request body
    const body = await request.json();
    const { type, ...data } = body;

    // Validate based on type
    if (type === 'event') {
      const validatedData = analyticsEventSchema.parse(data);
      await trackEvent(request, validatedData);
    } else if (type === 'scroll') {
      const validatedData = scrollDepthSchema.parse(data);
      await trackScrollDepth(request, validatedData);
    } else {
      throw new ApiError(400, 'Invalid analytics type. Must be "event" or "scroll".', 'INVALID_TYPE');
    }

    // Build response
    const response = successResponse({
      message: 'Analytics tracked successfully',
    });

    return setSecurityHeaders(response);
  } catch (error) {
    const errorResponse = handleApiError(error);
    return setSecurityHeaders(errorResponse);
  }
}

/**
 * Track analytics event
 */
async function trackEvent(
  request: NextRequest,
  data: {
    event: string;
    page: string;
    properties?: Record<string, string | number | boolean>;
    timestamp?: number;
  }
) {
  await prisma.analyticsEvent.create({
    data: {
      event: data.event,
      page: data.page,
      properties: data.properties || {},
      timestamp: data.timestamp ? new Date(data.timestamp) : new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    },
  });
}

/**
 * Track scroll depth
 */
async function trackScrollDepth(
  request: NextRequest,
  data: {
    page: string;
    depth: number;
    timestamp?: number;
  }
) {
  // Only track significant milestones (25%, 50%, 75%, 100%)
  const milestones = [25, 50, 75, 100];
  const milestone = milestones.find((m) => Math.abs(data.depth - m) < 5);

  if (!milestone) {
    return; // Skip non-milestone depths
  }

  await prisma.scrollDepth.create({
    data: {
      page: data.page,
      depth: milestone,
      timestamp: data.timestamp ? new Date(data.timestamp) : new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    },
  });
}

// GET - Analytics dashboard data (optional, for admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('start');
    const endDate = searchParams.get('end');

    // Build date filter
    const dateFilter: any = {};
    if (startDate) {
      dateFilter.gte = new Date(startDate);
    }
    if (endDate) {
      dateFilter.lte = new Date(endDate);
    }

    // Get event statistics
    const events = await prisma.analyticsEvent.groupBy({
      by: ['event'],
      _count: {
        id: true,
      },
      where: dateFilter.gte || dateFilter.lte ? {
        timestamp: dateFilter,
      } : undefined,
    });

    // Get page views
    const pageViews = await prisma.analyticsEvent.groupBy({
      by: ['page'],
      _count: {
        id: true,
      },
      where: {
        event: 'page_view',
        ...(dateFilter.gte || dateFilter.lte ? { timestamp: dateFilter } : {}),
      },
    });

    // Get scroll depth statistics
    const scrollStats = await prisma.scrollDepth.groupBy({
      by: ['depth', 'page'],
      _count: {
        id: true,
      },
      where: dateFilter.gte || dateFilter.lte ? {
        timestamp: dateFilter,
      } : undefined,
    });

    const response = successResponse({
      events: events.map((e) => ({
        event: e.event,
        count: e._count.id,
      })),
      pageViews: pageViews.map((p) => ({
        page: p.page,
        views: p._count.id,
      })),
      scrollDepth: scrollStats.map((s) => ({
        page: s.page,
        depth: s.depth,
        count: s._count.id,
      })),
    });

    return setSecurityHeaders(response);
  } catch (error) {
    const errorResponse = handleApiError(error);
    return setSecurityHeaders(errorResponse);
  }
}

// OPTIONS for CORS preflight
export async function OPTIONS() {
  const response = new Response(null, { status: 204 });
  return setSecurityHeaders(response);
}
