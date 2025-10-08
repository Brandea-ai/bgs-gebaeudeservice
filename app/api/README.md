# API Routes Documentation

## Overview

This API provides secure, type-safe endpoints for the BGS Gebäudeservice website with comprehensive validation, rate limiting, and security measures.

## Architecture

```
app/api/
├── contact/route.ts       # Contact form submission
├── newsletter/route.ts    # Newsletter subscription
├── search/route.ts        # Fuzzy content search
└── analytics/route.ts     # Event and scroll tracking

lib/
├── validation/schemas.ts  # Zod validation schemas
├── security/middleware.ts # Rate limiting, CSRF, headers
├── email/client.ts        # Email service (Resend/SendGrid)
├── prisma/client.ts       # Database client
└── api/error-handler.ts   # Error handling utilities
```

## Security Features

### 1. Rate Limiting
- In-memory rate limiting per IP address
- Configurable windows and request limits
- Automatic cleanup of expired records

### 2. CSRF Protection
- Origin/Referer header validation
- Same-origin policy enforcement
- Development mode support

### 3. Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy (camera, microphone, geolocation disabled)
- HSTS in production

### 4. Input Sanitization
- Zod schema validation
- XSS prevention (HTML tag removal)
- SQL injection prevention (via Prisma)
- JavaScript protocol filtering

## API Endpoints

### POST /api/contact

Submit contact form with email notification.

**Rate Limit**: 3 requests/minute

**Request Body**:
```typescript
{
  name: string;           // 2-100 chars, letters only
  email: string;          // valid email, max 255 chars
  phone?: string;         // optional, 5-20 chars
  subject: string;        // 3-200 chars
  message: string;        // 10-5000 chars
  service?: string;       // enum: cleaning|maintenance|security|facility|other
  gdprConsent: boolean;   // must be true
}
```

**Response** (201 Created):
```typescript
{
  success: true,
  data: {
    id: string;
    message: string;
    emailSent: boolean;
  }
}
```

**Errors**:
- 400: Validation failed
- 403: CSRF violation
- 429: Rate limit exceeded
- 500: Internal server error

### POST /api/newsletter

Subscribe to newsletter with email confirmation.

**Rate Limit**: 5 requests/minute

**Request Body**:
```typescript
{
  email: string;          // valid email, max 255 chars
  gdprConsent: boolean;   // must be true
  source?: string;        // optional, max 100 chars
}
```

**Response** (201 Created):
```typescript
{
  success: true,
  data: {
    id: string;
    message: string;
    emailSent: boolean;
  }
}
```

**Errors**:
- 400: Validation failed
- 403: CSRF violation
- 409: Already subscribed
- 429: Rate limit exceeded
- 500: Internal server error

### DELETE /api/newsletter?email={email}

Unsubscribe from newsletter.

**Query Parameters**:
- `email`: Email address to unsubscribe

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    message: string;
  }
}
```

### GET /api/search

Search website content with fuzzy matching.

**Rate Limit**: 30 requests/minute

**Query Parameters**:
```typescript
{
  query: string;          // 2-100 chars, alphanumeric
  limit?: number;         // 1-50, default: 10
  offset?: number;        // >= 0, default: 0
  type?: string;          // all|services|pages|blog, default: all
}
```

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    query: string;
    results: Array<{
      id: string;
      type: string;
      title: string;
      description: string;
      url: string;
    }>;
    total: number;
    limit: number;
    offset: number;
  }
}
```

### POST /api/analytics

Track events and scroll depth.

**Rate Limit**: 100 requests/minute

**Request Body** (Event):
```typescript
{
  type: "event",
  event: string;          // lowercase with underscores
  page: string;           // valid URL, max 500 chars
  properties?: object;    // optional metadata
  timestamp?: number;     // optional Unix timestamp
}
```

**Request Body** (Scroll Depth):
```typescript
{
  type: "scroll",
  page: string;           // valid URL, max 500 chars
  depth: number;          // 0-100
  timestamp?: number;     // optional Unix timestamp
}
```

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    message: string;
  }
}
```

### GET /api/analytics

Get analytics dashboard data (admin).

**Query Parameters**:
- `start`: Start date (ISO 8601)
- `end`: End date (ISO 8601)

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    events: Array<{ event: string; count: number }>;
    pageViews: Array<{ page: string; views: number }>;
    scrollDepth: Array<{ page: string; depth: number; count: number }>;
  }
}
```

## Email Integration

### Supported Providers

#### Resend (Recommended)
```bash
EMAIL_PROVIDER="resend"
EMAIL_API_KEY="re_..."
EMAIL_FROM="noreply@bgs-gebaeudeservice.de"
EMAIL_TO="info@bgs-gebaeudeservice.de"
```

#### SendGrid
```bash
EMAIL_PROVIDER="sendgrid"
EMAIL_API_KEY="SG...."
EMAIL_FROM="noreply@bgs-gebaeudeservice.de"
EMAIL_TO="info@bgs-gebaeudeservice.de"
```

### Email Features
- HTML and plain text versions
- Professional formatting
- Contact form notifications
- Newsletter confirmations
- Error logging (doesn't fail requests)

## Database Schema

### Contact
```prisma
model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  subject   String
  message   String   @db.Text
  service   String?
  ipAddress String
  userAgent String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### NewsletterSubscriber
```prisma
model NewsletterSubscriber {
  id             String    @id @default(cuid())
  email          String    @unique
  status         String    @default("active")
  source         String    @default("website")
  ipAddress      String?
  subscribedAt   DateTime  @default(now())
  unsubscribedAt DateTime?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}
```

### AnalyticsEvent
```prisma
model AnalyticsEvent {
  id         String   @id @default(cuid())
  event      String
  page       String
  properties Json?
  timestamp  DateTime @default(now())
  ipAddress  String
  userAgent  String
  createdAt  DateTime @default(now())
}
```

### ScrollDepth
```prisma
model ScrollDepth {
  id        String   @id @default(cuid())
  page      String
  depth     Int
  timestamp DateTime @default(now())
  ipAddress String
  userAgent String
  createdAt DateTime @default(now())
}
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install zod @prisma/client
npm install -D prisma
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Setup Database
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name add_api_models

# (Optional) Seed data
npx prisma db seed
```

### 4. Configure Email Provider

#### Option A: Resend
1. Sign up at [resend.com](https://resend.com)
2. Create API key
3. Verify domain
4. Set environment variables

#### Option B: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Verify sender identity
4. Set environment variables

## Testing

### Manual Testing

#### Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message",
    "gdprConsent": true
  }'
```

#### Newsletter
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "gdprConsent": true
  }'
```

#### Search
```bash
curl "http://localhost:3000/api/search?query=reinigung&limit=5"
```

#### Analytics
```bash
curl -X POST http://localhost:3000/api/analytics \
  -H "Content-Type: application/json" \
  -d '{
    "type": "event",
    "event": "page_view",
    "page": "http://localhost:3000/",
    "properties": {"source": "direct"}
  }'
```

## Error Handling

All errors return a consistent format:

```typescript
{
  error: string;        // Error message
  code: string;         // Error code
  details?: object[];   // Validation errors (optional)
}
```

### Error Codes
- `VALIDATION_ERROR`: Zod validation failed
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `CSRF_VIOLATION`: Invalid origin
- `ALREADY_SUBSCRIBED`: Email already registered
- `DUPLICATE_RESOURCE`: Resource already exists
- `NOT_FOUND`: Resource not found
- `API_ERROR`: Custom API error
- `INTERNAL_ERROR`: Server error

## Production Considerations

### 1. Rate Limiting
- Use Redis for distributed rate limiting
- Adjust limits based on traffic
- Implement IP whitelisting for admin

### 2. Email
- Monitor sending quotas
- Implement retry logic
- Track delivery rates
- Handle bounces

### 3. Database
- Enable connection pooling
- Add database indexes
- Monitor query performance
- Implement backup strategy

### 4. Security
- Enable HTTPS
- Rotate API keys
- Implement request signing
- Add WAF protection
- Monitor for abuse

### 5. Monitoring
- Log all errors to Sentry
- Track API metrics
- Monitor rate limit hits
- Set up alerts

## Future Enhancements

- [ ] GraphQL API
- [ ] Webhook endpoints
- [ ] Email queue system
- [ ] Advanced search (Algolia/MeiliSearch)
- [ ] Request signing
- [ ] API versioning
- [ ] OpenAPI documentation
- [ ] Rate limit tiers
- [ ] Caching layer (Redis)
- [ ] Real-time updates (WebSockets)

## Support

For issues or questions:
- Check error logs: `npx prisma studio`
- Review Prisma schema: `prisma/schema.prisma`
- Email configuration: `.env.example`
