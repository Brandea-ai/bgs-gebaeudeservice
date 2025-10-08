/**
 * API Error Handler
 * Standardized error responses
 */

import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Handle API errors with standardized responses
 */
export function handleApiError(error: unknown): NextResponse {
  console.error('API Error:', error);

  // Zod validation errors
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: 'Validation failed',
        code: 'VALIDATION_ERROR',
        details: error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      },
      { status: 400 }
    );
  }

  // Custom API errors
  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        error: error.message,
        code: error.code || 'API_ERROR',
      },
      { status: error.statusCode }
    );
  }

  // Database errors
  if (error && typeof error === 'object' && 'code' in error) {
    const dbError = error as { code: string; message: string };

    // Prisma unique constraint violation
    if (dbError.code === 'P2002') {
      return NextResponse.json(
        {
          error: 'Resource already exists',
          code: 'DUPLICATE_RESOURCE',
        },
        { status: 409 }
      );
    }

    // Prisma record not found
    if (dbError.code === 'P2025') {
      return NextResponse.json(
        {
          error: 'Resource not found',
          code: 'NOT_FOUND',
        },
        { status: 404 }
      );
    }
  }

  // Generic errors
  return NextResponse.json(
    {
      error: 'Internal server error',
      code: 'INTERNAL_ERROR',
    },
    { status: 500 }
  );
}

/**
 * Success response helper
 */
export function successResponse<T>(data: T, status = 200): NextResponse {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    { status }
  );
}
