/**
 * Security Middleware
 * Rate limiting, CSRF protection, and security headers
 */

import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limit store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

/**
 * Rate limiting middleware
 */
export async function rateLimit(
  request: NextRequest,
  config: RateLimitConfig = { windowMs: 60000, maxRequests: 10 }
): Promise<{ success: boolean; remaining: number }> {
  const identifier = getIdentifier(request);
  const now = Date.now();

  const record = rateLimitStore.get(identifier);

  // Clean expired records
  if (record && record.resetAt < now) {
    rateLimitStore.delete(identifier);
  }

  const current = rateLimitStore.get(identifier);

  if (!current) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + config.windowMs,
    });
    return { success: true, remaining: config.maxRequests - 1 };
  }

  if (current.count >= config.maxRequests) {
    return { success: false, remaining: 0 };
  }

  current.count++;
  return { success: true, remaining: config.maxRequests - current.count };
}

/**
 * Get client identifier (IP or session)
 */
function getIdentifier(request: NextRequest): string {
  // Try to get IP from various headers
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  return (
    cfConnectingIp ||
    realIp ||
    forwardedFor?.split(',')[0].trim() ||
    'unknown'
  );
}

/**
 * CSRF Token Validation
 */
export function validateCsrfToken(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');

  // Allow same-origin requests
  if (origin && host) {
    const originHost = new URL(origin).host;
    if (originHost === host) {
      return true;
    }
  }

  if (referer && host) {
    const refererHost = new URL(referer).host;
    if (refererHost === host) {
      return true;
    }
  }

  // In development, be more lenient
  if (process.env.NODE_ENV === 'development') {
    return true;
  }

  return false;
}

/**
 * Security Headers
 */
export function setSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  // HSTS (only in production with HTTPS)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains'
    );
  }

  return response;
}

/**
 * Input Sanitization
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
}

/**
 * Clean rate limit store periodically
 */
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt < now) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // Clean every minute
