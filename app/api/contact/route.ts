/**
 * Contact Form API Route
 * POST /api/contact
 */

import { NextRequest } from 'next/server';
import { contactSchema } from '@/lib/validation/schemas';
import { rateLimit, validateCsrfToken, setSecurityHeaders } from '@/lib/security/middleware';
import { sendContactEmail } from '@/lib/email/client';
import { prisma } from '@/lib/prisma/client';
import { handleApiError, successResponse, ApiError } from '@/lib/api/error-handler';

export async function POST(request: NextRequest) {
  try {
    // Security: Rate limiting
    const rateLimitResult = await rateLimit(request, {
      windowMs: 60000, // 1 minute
      maxRequests: 3, // 3 requests per minute
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
    const validatedData = contactSchema.parse(body);

    // Store in database
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        subject: validatedData.subject,
        message: validatedData.message,
        service: validatedData.service || null,
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      },
    });

    // Send email notification
    const emailResult = await sendContactEmail(validatedData);

    if (!emailResult.success) {
      console.error('Failed to send contact email:', emailResult.error);
      // Don't fail the request, just log the error
    }

    // Build response
    const response = successResponse({
      id: contact.id,
      message: 'Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.',
      emailSent: emailResult.success,
    }, 201);

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
