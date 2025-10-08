# API Documentation

This document outlines the planned API routes and integration points for the BGS Gebäudeservice website.

## Table of Contents

1. [Overview](#overview)
2. [Contact Form API](#contact-form-api)
3. [Quote Request API](#quote-request-api)
4. [Newsletter API](#newsletter-api)
5. [Blog API](#blog-api)
6. [CMS Integration](#cms-integration)
7. [Authentication](#authentication)
8. [Error Handling](#error-handling)

## Overview

The current application is a static frontend. This documentation outlines the recommended API structure for future backend integration.

### Base URL

```
Production: https://api.bgs-service.ch/v1
Development: http://localhost:3000/api/v1
```

### Authentication

All API requests should include:

```http
Authorization: Bearer {token}
Content-Type: application/json
```

### Response Format

Standard success response:

```json
{
  "success": true,
  "data": { },
  "message": "Operation successful"
}
```

Standard error response:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": { }
  }
}
```

## Contact Form API

### Submit Contact Form

Submit a general contact form inquiry.

**Endpoint**: `POST /contact`

**Request Body**:

```json
{
  "name": "string (required, max: 100)",
  "email": "string (required, valid email)",
  "phone": "string (optional, max: 20)",
  "company": "string (optional, max: 100)",
  "subject": "string (required, max: 200)",
  "message": "string (required, max: 2000)",
  "service": "string (optional, enum: [premium, b2b, essential])",
  "preferredContact": "string (optional, enum: [email, phone])",
  "consent": "boolean (required, must be true)"
}
```

**Response**: `201 Created`

```json
{
  "success": true,
  "data": {
    "id": "contact_12345",
    "ticketNumber": "BGS-2025-001",
    "estimatedResponse": "24 hours"
  },
  "message": "Thank you for contacting us. We'll respond within 24 hours."
}
```

**Validation Rules**:
- Name: 2-100 characters
- Email: Valid email format
- Phone: Optional, international format
- Message: 10-2000 characters
- Consent: Must be true for GDPR compliance

**Example Request**:

```javascript
const response = await fetch('/api/v1/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Max Mustermann',
    email: 'max@example.com',
    phone: '+41 79 123 45 67',
    company: 'Example AG',
    subject: 'Office Cleaning Inquiry',
    message: 'I would like to request a quote for office cleaning services.',
    service: 'essential',
    preferredContact: 'email',
    consent: true
  })
})
```

---

## Quote Request API

### Request Service Quote

Request a detailed quote for a specific service.

**Endpoint**: `POST /quotes`

**Request Body**:

```json
{
  "personalInfo": {
    "name": "string (required)",
    "email": "string (required)",
    "phone": "string (required)",
    "company": "string (optional)"
  },
  "serviceDetails": {
    "serviceType": "string (required, enum)",
    "location": "string (required)",
    "squareMeters": "number (optional)",
    "frequency": "string (optional, enum: [once, daily, weekly, monthly])",
    "startDate": "string (optional, ISO date)",
    "urgency": "string (optional, enum: [low, medium, high])"
  },
  "additionalInfo": {
    "specialRequirements": "string (optional)",
    "budget": "string (optional)",
    "currentProvider": "string (optional)"
  },
  "consent": "boolean (required)"
}
```

**Service Type Enum**:
```
premium: [privatjet, yacht, housekeeping, luxusimmobilien, vip-events]
b2b: [hallen, maschinen, industrie, fassaden, bauend, sonder]
essential: [unterhalt, fenster, buero, grund, hausmeister, garten]
```

**Response**: `201 Created`

```json
{
  "success": true,
  "data": {
    "quoteId": "quote_67890",
    "quoteNumber": "BGS-Q-2025-001",
    "status": "pending",
    "estimatedQuoteDelivery": "2025-10-10T10:00:00Z"
  },
  "message": "Quote request received. We'll send you a detailed quote within 48 hours."
}
```

**Example Request**:

```javascript
const response = await fetch('/api/v1/quotes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    personalInfo: {
      name: 'Anna Schmidt',
      email: 'anna@example.com',
      phone: '+41 79 987 65 43',
      company: 'Tech Startup GmbH'
    },
    serviceDetails: {
      serviceType: 'buero',
      location: 'Zürich, Bahnhofstrasse 100',
      squareMeters: 500,
      frequency: 'weekly',
      startDate: '2025-11-01',
      urgency: 'medium'
    },
    additionalInfo: {
      specialRequirements: 'After business hours only',
      budget: '1000-2000 CHF/month'
    },
    consent: true
  })
})
```

---

## Newsletter API

### Subscribe to Newsletter

Subscribe to marketing emails and updates.

**Endpoint**: `POST /newsletter/subscribe`

**Request Body**:

```json
{
  "email": "string (required, valid email)",
  "name": "string (optional)",
  "interests": "array of strings (optional)",
  "consent": "boolean (required)"
}
```

**Response**: `201 Created`

```json
{
  "success": true,
  "data": {
    "subscriberId": "sub_abc123",
    "email": "user@example.com",
    "status": "active"
  },
  "message": "Successfully subscribed to newsletter"
}
```

### Unsubscribe from Newsletter

**Endpoint**: `POST /newsletter/unsubscribe`

**Request Body**:

```json
{
  "email": "string (required)",
  "token": "string (required, from email link)"
}
```

**Response**: `200 OK`

```json
{
  "success": true,
  "message": "Successfully unsubscribed from newsletter"
}
```

---

## Blog API

### Get All Blog Posts

Retrieve paginated list of blog posts.

**Endpoint**: `GET /blog/posts`

**Query Parameters**:
- `page`: number (default: 1)
- `limit`: number (default: 10, max: 50)
- `category`: string (optional)
- `tag`: string (optional)
- `search`: string (optional)
- `sort`: string (enum: [newest, oldest, popular])

**Response**: `200 OK`

```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "id": "post_123",
        "title": "10 Tips for Office Cleaning",
        "slug": "10-tips-office-cleaning",
        "excerpt": "Brief summary...",
        "content": "Full content...",
        "author": {
          "id": "author_1",
          "name": "John Doe",
          "avatar": "https://..."
        },
        "category": "Office Cleaning",
        "tags": ["tips", "office", "cleaning"],
        "publishedAt": "2025-10-01T10:00:00Z",
        "updatedAt": "2025-10-05T15:30:00Z",
        "featuredImage": "https://...",
        "readTime": 5
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "pages": 5
    }
  }
}
```

### Get Single Blog Post

**Endpoint**: `GET /blog/posts/:slug`

**Response**: `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "post_123",
    "title": "10 Tips for Office Cleaning",
    "slug": "10-tips-office-cleaning",
    "content": "Full markdown or HTML content...",
    "author": {
      "id": "author_1",
      "name": "John Doe",
      "bio": "Cleaning expert...",
      "avatar": "https://..."
    },
    "category": "Office Cleaning",
    "tags": ["tips", "office", "cleaning"],
    "publishedAt": "2025-10-01T10:00:00Z",
    "updatedAt": "2025-10-05T15:30:00Z",
    "featuredImage": "https://...",
    "readTime": 5,
    "views": 1234,
    "relatedPosts": [
      {
        "id": "post_124",
        "title": "Related Post",
        "slug": "related-post"
      }
    ]
  }
}
```

---

## CMS Integration

### Headless CMS Options

Recommended CMS platforms:

1. **Strapi** (Open Source)
   - Base URL: `https://cms.bgs-service.ch`
   - Content Types: Blog, Services, Team, Testimonials

2. **Contentful** (SaaS)
   - GraphQL API
   - Content modeling

3. **Sanity.io** (SaaS)
   - Real-time collaboration
   - Structured content

### Content Types

**Blog Post**:
```typescript
{
  id: string
  title: string
  slug: string
  content: string (markdown or rich text)
  excerpt: string
  author: Author
  category: Category
  tags: Tag[]
  publishedAt: Date
  updatedAt: Date
  featuredImage: Image
  seo: SEOMetadata
}
```

**Service**:
```typescript
{
  id: string
  name: string
  slug: string
  description: string
  category: 'premium' | 'b2b' | 'essential'
  features: string[]
  images: Image[]
  icon: string
  pricing: string (optional)
  seo: SEOMetadata
}
```

**Testimonial**:
```typescript
{
  id: string
  clientName: string
  company: string
  rating: number (1-5)
  text: string
  service: Service
  publishedAt: Date
  featured: boolean
}
```

---

## Authentication

### Admin Login

For future admin panel.

**Endpoint**: `POST /auth/login`

**Request Body**:

```json
{
  "email": "string (required)",
  "password": "string (required)"
}
```

**Response**: `200 OK`

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "admin@bgs-service.ch",
      "name": "Admin User",
      "role": "admin"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  }
}
```

### Token Refresh

**Endpoint**: `POST /auth/refresh`

**Request Body**:

```json
{
  "refreshToken": "string (required)"
}
```

---

## Error Handling

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Invalid request data |
| `UNAUTHORIZED` | 401 | Authentication required |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMIT` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

### Error Response Examples

**Validation Error**:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": {
      "email": ["Invalid email format"],
      "message": ["Message is required"]
    }
  }
}
```

**Rate Limit Error**:

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT",
    "message": "Too many requests. Please try again in 15 minutes.",
    "details": {
      "retryAfter": 900,
      "limit": 100,
      "remaining": 0
    }
  }
}
```

---

## Rate Limiting

Recommended rate limits:

- Contact Form: 5 requests per hour per IP
- Quote Requests: 3 requests per hour per IP
- Newsletter: 1 request per 5 minutes per email
- Blog API: 100 requests per hour per IP

Headers returned:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1633024800
```

---

## CORS Configuration

Allowed origins:

```
Production: https://bgs-service.ch
Staging: https://staging.bgs-service.ch
Development: http://localhost:5173
```

---

## Webhooks

### Email Notifications

Send email notifications for:

1. New contact form submission
2. New quote request
3. Newsletter subscription

**Payload**:

```json
{
  "event": "contact.created",
  "timestamp": "2025-10-08T10:00:00Z",
  "data": {
    "id": "contact_123",
    "name": "Max Mustermann",
    "email": "max@example.com",
    "message": "..."
  }
}
```

---

Last Updated: 2025-10-08

**Note**: This is a planned API structure. Implementation will require backend development.
