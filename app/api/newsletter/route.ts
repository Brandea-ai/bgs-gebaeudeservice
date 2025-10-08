/**
 * Newsletter Subscription API Route
 * POST /api/newsletter
 */

import { NextRequest } from 'next/server';
import { newsletterSchema } from '@/lib/validation/schemas';
import { rateLimit, validateCsrfToken, setSecurityHeaders } from '@/lib/security/middleware';
import { sendNewsletterConfirmation } from '@/lib/email/client';
import { prisma } from '@/lib/prisma/client';
import { handleApiError, successResponse, ApiError } from '@/lib/api/error-handler';

export async function POST(request: NextRequest) {
  try {
    // Security: Rate limiting
    const rateLimitResult = await rateLimit(request, {
      windowMs: 60000, // 1 minute
      maxRequests: 5, // 5 requests per minute
    });

    if (!rateLimitResult.success) {
      throw new ApiError(429, 'Too many requests. Please try again later.', 'RATE_LIMIT_EXCEEDED');
    }

    // Security: CSRF protection
    if (!validateCsrfToken(request)) {
      throw new ApiError(403, 'Invalid request origin', 'CSRF_VIOLATION');
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    // Check if already subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email: validatedData.email },
    });

    if (existing && existing.status === 'active') {
      throw new ApiError(409, 'Diese E-Mail-Adresse ist bereits für den Newsletter registriert.', 'ALREADY_SUBSCRIBED');
    }

    // Create or update subscription
    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email: validatedData.email },
      update: {
        status: 'active',
        source: validatedData.source || 'website',
        subscribedAt: new Date(),
      },
      create: {
        email: validatedData.email,
        status: 'active',
        source: validatedData.source || 'website',
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      },
    });

    // Send confirmation email
    const emailResult = await sendNewsletterConfirmation(validatedData.email);

    if (!emailResult.success) {
      console.error('Failed to send newsletter confirmation:', emailResult.error);
    }

    // Build response
    const response = successResponse({
      id: subscriber.id,
      message: 'Sie haben sich erfolgreich für unseren Newsletter angemeldet.',
      emailSent: emailResult.success,
    }, 201);

    return setSecurityHeaders(response);
  } catch (error) {
    const errorResponse = handleApiError(error);
    return setSecurityHeaders(errorResponse);
  }
}

// DELETE - Unsubscribe
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      throw new ApiError(400, 'Email parameter is required', 'MISSING_EMAIL');
    }

    // Update subscription status
    await prisma.newsletterSubscriber.update({
      where: { email },
      data: {
        status: 'unsubscribed',
        unsubscribedAt: new Date(),
      },
    });

    const response = successResponse({
      message: 'Sie wurden erfolgreich vom Newsletter abgemeldet.',
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
