/**
 * Zod Validation Schemas
 * Centralized validation for all API routes
 */

import { z } from 'zod';

// Contact Form Schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein')
    .max(100, 'Name darf maximal 100 Zeichen lang sein')
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, 'Name enthält ungültige Zeichen'),

  email: z
    .string()
    .email('Ungültige E-Mail-Adresse')
    .max(255, 'E-Mail-Adresse zu lang'),

  phone: z
    .string()
    .regex(/^[\d\s\+\-\(\)]+$/, 'Ungültige Telefonnummer')
    .min(5, 'Telefonnummer zu kurz')
    .max(20, 'Telefonnummer zu lang')
    .optional()
    .or(z.literal('')),

  subject: z
    .string()
    .min(3, 'Betreff muss mindestens 3 Zeichen lang sein')
    .max(200, 'Betreff darf maximal 200 Zeichen lang sein'),

  message: z
    .string()
    .min(10, 'Nachricht muss mindestens 10 Zeichen lang sein')
    .max(5000, 'Nachricht darf maximal 5000 Zeichen lang sein'),

  service: z
    .enum(['cleaning', 'maintenance', 'security', 'facility', 'other'])
    .optional(),

  gdprConsent: z
    .boolean()
    .refine((val) => val === true, 'Datenschutzerklärung muss akzeptiert werden'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Ungültige E-Mail-Adresse')
    .max(255, 'E-Mail-Adresse zu lang'),

  gdprConsent: z
    .boolean()
    .refine((val) => val === true, 'Datenschutzerklärung muss akzeptiert werden'),

  source: z
    .string()
    .max(100)
    .optional(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Search Schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(2, 'Suchbegriff muss mindestens 2 Zeichen lang sein')
    .max(100, 'Suchbegriff zu lang')
    .regex(/^[a-zA-Z0-9äöüÄÖÜß\s\-_]+$/, 'Suchbegriff enthält ungültige Zeichen'),

  limit: z
    .number()
    .min(1)
    .max(50)
    .optional()
    .default(10),

  offset: z
    .number()
    .min(0)
    .optional()
    .default(0),

  type: z
    .enum(['all', 'services', 'pages', 'blog'])
    .optional()
    .default('all'),
});

export type SearchQuery = z.infer<typeof searchSchema>;

// Analytics Event Schema
export const analyticsEventSchema = z.object({
  event: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-z_]+$/, 'Event name must be lowercase with underscores'),

  page: z
    .string()
    .url('Invalid page URL')
    .max(500),

  properties: z
    .record(z.union([z.string(), z.number(), z.boolean()]))
    .optional(),

  timestamp: z
    .number()
    .optional(),
});

export type AnalyticsEvent = z.infer<typeof analyticsEventSchema>;

// Scroll Depth Schema
export const scrollDepthSchema = z.object({
  page: z
    .string()
    .url('Invalid page URL')
    .max(500),

  depth: z
    .number()
    .min(0)
    .max(100),

  timestamp: z
    .number()
    .optional(),
});

export type ScrollDepth = z.infer<typeof scrollDepthSchema>;
