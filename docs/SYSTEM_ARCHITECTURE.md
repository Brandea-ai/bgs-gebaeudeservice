# System Architecture - BGS Gebäudeservice
## Ultra-Professional Next.js 14 Full-Stack Application

**Version:** 1.0.0
**Date:** 2025-10-08
**Architect:** System Architecture Designer (Hive Mind)

---

## 1. EXECUTIVE SUMMARY

This document defines the complete system architecture for BGS Gebäudeservice, an ultra-professional building services website built with modern web technologies. The architecture emphasizes performance, maintainability, scalability, and exceptional user experience.

**Key Technologies:**
- **Frontend:** React 19, Vite, TypeScript
- **Styling:** Tailwind CSS 4.1, Framer Motion
- **Components:** Radix UI, Custom Design System
- **State Management:** Zustand (planned)
- **Database:** Prisma + PostgreSQL (planned for future)
- **Deployment:** Static/SSG optimized

---

## 2. FOLDER STRUCTURE SPECIFICATION

### 2.1 Complete Directory Tree

```
bgs-gebaeudeservice/
├── .swarm/                          # Claude Flow coordination
│   └── memory.db                    # Swarm memory persistence
│
├── app/                             # Next.js 14 App Router (Future migration)
│   ├── (auth)/                      # Route group for authentication
│   │   ├── login/
│   │   └── register/
│   ├── (public)/                    # Public routes
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # Homepage
│   │   ├── services/
│   │   ├── about/
│   │   └── contact/
│   ├── api/                         # API Routes
│   │   ├── contact/
│   │   │   └── route.ts
│   │   ├── services/
│   │   │   └── route.ts
│   │   └── quotes/
│   │       └── route.ts
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles
│   └── providers.tsx                # Context providers
│
├── src/                             # Current Vite source (Active)
│   ├── components/                  # React components
│   │   ├── ui/                      # Design system components
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Heading.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Dialog.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Tabs.tsx
│   │   │   └── index.ts             # Barrel export
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Sidebar.tsx
│   │   │
│   │   ├── sections/                # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Features.tsx
│   │   │
│   │   ├── features/                # Feature components
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── QuoteCalculator.tsx
│   │   │   └── ImageGallery.tsx
│   │   │
│   │   ├── animations/              # Animation components
│   │   │   ├── ParallaxSection.tsx
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideIn.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   └── AnimatedCounter.tsx
│   │   │
│   │   └── providers/               # Context providers
│   │       ├── ThemeProvider.tsx
│   │       ├── AnimationProvider.tsx
│   │       └── StoreProvider.tsx
│   │
│   ├── lib/                         # Utility libraries
│   │   ├── design-tokens.ts         # Design system tokens
│   │   ├── animations.ts            # Animation utilities
│   │   ├── parallax.ts              # Parallax utilities
│   │   ├── utils.ts                 # General utilities (cn, etc.)
│   │   ├── validators.ts            # Zod schemas
│   │   ├── api-client.ts            # API client utilities
│   │   └── constants.ts             # App constants
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useMediaQuery.ts
│   │   ├── useScrollPosition.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useParallax.ts
│   │   ├── useAnimateOnScroll.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── store/                       # Zustand state management
│   │   ├── index.ts                 # Store configuration
│   │   ├── slices/                  # Store slices
│   │   │   ├── ui-slice.ts          # UI state (modals, menus)
│   │   │   ├── contact-slice.ts     # Contact form state
│   │   │   └── services-slice.ts    # Services state
│   │   └── types.ts                 # Store types
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── index.ts                 # Main types export
│   │   ├── components.ts            # Component prop types
│   │   ├── api.ts                   # API types
│   │   ├── models.ts                # Data models
│   │   └── utils.ts                 # Utility types
│   │
│   ├── styles/                      # Additional styles
│   │   ├── animations.css           # CSS animations
│   │   └── utilities.css            # CSS utilities
│   │
│   ├── pages/                       # Current page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   │
│   ├── assets/                      # Static assets
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global CSS
│
├── prisma/                          # Database schema (Future)
│   ├── schema.prisma                # Prisma schema
│   ├── migrations/                  # Database migrations
│   │   └── ...
│   └── seed.ts                      # Database seeding
│
├── public/                          # Static public assets
│   ├── images/                      # Public images
│   │   ├── hero/
│   │   ├── services/
│   │   └── team/
│   ├── fonts/                       # Custom fonts
│   ├── favicon.ico
│   └── robots.txt
│
├── tests/                           # Test files
│   ├── unit/                        # Unit tests
│   │   ├── components/
│   │   ├── hooks/
│   │   └── lib/
│   ├── integration/                 # Integration tests
│   │   └── api/
│   └── e2e/                         # E2E tests
│       └── flows/
│
├── docs/                            # Documentation
│   ├── SYSTEM_ARCHITECTURE.md       # This file
│   ├── API.md                       # API documentation
│   ├── COMPONENTS.md                # Component documentation
│   └── DEPLOYMENT.md                # Deployment guide
│
├── scripts/                         # Build/deployment scripts
│   ├── build.sh
│   ├── deploy.sh
│   └── db-setup.sh
│
├── config/                          # Configuration files
│   ├── site.config.ts               # Site configuration
│   └── seo.config.ts                # SEO configuration
│
├── .github/                         # GitHub workflows
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── node_modules/                    # Dependencies
├── package.json                     # Package manifest
├── tsconfig.json                    # TypeScript config
├── tailwind.config.ts               # Tailwind config
├── vite.config.ts                   # Vite config
├── .env.local                       # Environment variables
└── README.md                        # Project readme
```

### 2.2 Directory Responsibilities

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `/src/components/ui/` | Reusable design system components | Button, Card, Input |
| `/src/components/sections/` | Page section components | Hero, Services, Contact |
| `/src/components/features/` | Feature-specific components | ServiceCard, ContactForm |
| `/src/lib/` | Utility functions and configurations | design-tokens, utils, validators |
| `/src/hooks/` | Custom React hooks | useMediaQuery, useParallax |
| `/src/store/` | Zustand state management | UI slice, Contact slice |
| `/src/types/` | TypeScript type definitions | Component types, API types |
| `/prisma/` | Database schema and migrations | schema.prisma |
| `/public/` | Static assets served directly | Images, fonts |
| `/docs/` | Project documentation | Architecture, API docs |

---

## 3. COMPONENT ARCHITECTURE

### 3.1 Component Hierarchy (Text Diagram)

```
App.tsx
│
├── ThemeProvider
│   └── AnimationProvider
│       └── StoreProvider
│           │
│           ├── Header
│           │   ├── Navigation
│           │   │   ├── Logo
│           │   │   └── NavLinks (map)
│           │   └── MobileMenu
│           │       └── NavLinks (map)
│           │
│           ├── Main Content (Router)
│           │   │
│           │   ├── HomePage
│           │   │   ├── Hero
│           │   │   │   ├── Container
│           │   │   │   ├── Heading
│           │   │   │   ├── Paragraph
│           │   │   │   └── Button
│           │   │   ├── Services
│           │   │   │   ├── Section
│           │   │   │   ├── Heading
│           │   │   │   └── ServiceCard (map)
│           │   │   │       ├── Card
│           │   │   │       ├── Badge
│           │   │   │       └── Button
│           │   │   ├── Features
│           │   │   │   └── FeatureGrid
│           │   │   ├── Testimonials
│           │   │   │   └── TestimonialCard (map)
│           │   │   └── CTA
│           │   │       └── ContactForm
│           │   │
│           │   ├── ServicesPage
│           │   │   ├── ServiceHero
│           │   │   ├── ServiceGrid
│           │   │   └── QuoteCalculator
│           │   │
│           │   ├── AboutPage
│           │   │   ├── AboutHero
│           │   │   ├── TeamSection
│           │   │   └── ValueProposition
│           │   │
│           │   └── ContactPage
│           │       ├── ContactHero
│           │       ├── ContactForm
│           │       └── ContactInfo
│           │
│           └── Footer
│               ├── FooterLinks
│               ├── SocialLinks
│               └── Copyright
```

### 3.2 Component Categories

#### 3.2.1 Atomic Components (UI Library)
**Location:** `/src/components/ui/`

| Component | Purpose | Props | State |
|-----------|---------|-------|-------|
| `Button` | Interactive button | `variant`, `size`, `loading`, `disabled` | None |
| `Card` | Content container | `variant`, `padding`, `shadow` | None |
| `Badge` | Status/label indicator | `variant`, `size` | None |
| `Input` | Form input field | `type`, `placeholder`, `error`, `label` | Controlled |
| `Heading` | Typography heading | `level`, `variant`, `align` | None |
| `Container` | Layout container | `maxWidth`, `padding` | None |
| `Section` | Page section wrapper | `background`, `padding` | None |

#### 3.2.2 Layout Components
**Location:** `/src/components/layout/`

| Component | Purpose | Dependencies |
|-----------|---------|--------------|
| `Header` | Site header with navigation | Navigation, MobileMenu |
| `Footer` | Site footer | SocialLinks, FooterLinks |
| `Navigation` | Desktop navigation | Button, Link |
| `MobileMenu` | Mobile hamburger menu | Dialog, Button |
| `Sidebar` | Optional sidebar | Accordion |

#### 3.2.3 Section Components
**Location:** `/src/components/sections/`

| Component | Purpose | Used On |
|-----------|---------|---------|
| `Hero` | Hero section | Home, Services, About |
| `Services` | Services showcase | Home |
| `About` | About section | Home, About page |
| `Testimonials` | Client testimonials | Home |
| `Contact` | Contact section | Home, Contact page |
| `CTA` | Call-to-action | All pages |
| `Features` | Feature highlights | Home |

#### 3.2.4 Feature Components
**Location:** `/src/components/features/`

| Component | Purpose | Complexity |
|-----------|---------|------------|
| `ServiceCard` | Service display card | Medium |
| `TestimonialCard` | Testimonial display | Low |
| `ContactForm` | Contact submission form | High |
| `QuoteCalculator` | Price estimation | High |
| `ImageGallery` | Image showcase | Medium |

### 3.3 Component Design Principles

1. **Single Responsibility:** Each component has one clear purpose
2. **Composition Over Inheritance:** Use component composition
3. **Props Interface:** Clear, typed prop interfaces
4. **Performance:** Memoization for expensive components
5. **Accessibility:** ARIA labels, keyboard navigation
6. **Responsive:** Mobile-first design approach

---

## 4. DATABASE SCHEMA DESIGN (Prisma)

### 4.1 Schema Overview

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================
// USER MANAGEMENT
// ============================================

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  phone         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  inquiries     Inquiry[]
  quotes        Quote[]

  @@map("users")
}

// ============================================
// SERVICES
// ============================================

model Service {
  id            String    @id @default(cuid())
  slug          String    @unique
  name          String
  description   String    @db.Text
  shortDesc     String?
  icon          String?
  category      ServiceCategory
  pricing       Json?     // Flexible pricing structure
  features      String[]
  images        String[]
  isActive      Boolean   @default(true)
  order         Int       @default(0)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  inquiries     Inquiry[]
  quoteItems    QuoteItem[]

  @@map("services")
}

enum ServiceCategory {
  CLEANING
  MAINTENANCE
  RENOVATION
  GARDENING
  SECURITY
  CONSULTATION
}

// ============================================
// INQUIRIES & QUOTES
// ============================================

model Inquiry {
  id            String    @id @default(cuid())
  userId        String?
  serviceId     String

  // Contact info
  name          String
  email         String
  phone         String?
  company       String?

  // Inquiry details
  subject       String
  message       String    @db.Text
  preferredDate DateTime?
  urgency       UrgencyLevel @default(NORMAL)

  // Metadata
  status        InquiryStatus @default(NEW)
  source        String?   // 'website', 'email', 'phone'
  ipAddress     String?
  userAgent     String?

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  user          User?     @relation(fields: [userId], references: [id])
  service       Service   @relation(fields: [serviceId], references: [id])
  quote         Quote?

  @@index([serviceId])
  @@index([userId])
  @@index([status])
  @@map("inquiries")
}

enum InquiryStatus {
  NEW
  IN_REVIEW
  QUOTED
  ACCEPTED
  REJECTED
  COMPLETED
}

enum UrgencyLevel {
  LOW
  NORMAL
  HIGH
  URGENT
}

model Quote {
  id            String    @id @default(cuid())
  inquiryId     String    @unique
  userId        String?
  quoteNumber   String    @unique

  // Quote details
  validUntil    DateTime
  totalAmount   Decimal   @db.Decimal(10, 2)
  taxAmount     Decimal   @db.Decimal(10, 2)
  discountAmount Decimal  @db.Decimal(10, 2) @default(0)

  // Terms
  terms         String?   @db.Text
  notes         String?   @db.Text
  paymentTerms  String?

  // Status
  status        QuoteStatus @default(DRAFT)
  sentAt        DateTime?
  acceptedAt    DateTime?
  rejectedAt    DateTime?

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  inquiry       Inquiry   @relation(fields: [inquiryId], references: [id])
  user          User?     @relation(fields: [userId], references: [id])
  items         QuoteItem[]

  @@index([userId])
  @@index([status])
  @@map("quotes")
}

enum QuoteStatus {
  DRAFT
  SENT
  ACCEPTED
  REJECTED
  EXPIRED
}

model QuoteItem {
  id            String    @id @default(cuid())
  quoteId       String
  serviceId     String

  description   String
  quantity      Decimal   @db.Decimal(10, 2)
  unitPrice     Decimal   @db.Decimal(10, 2)
  totalPrice    Decimal   @db.Decimal(10, 2)

  order         Int       @default(0)

  // Relations
  quote         Quote     @relation(fields: [quoteId], references: [id], onDelete: Cascade)
  service       Service   @relation(fields: [serviceId], references: [id])

  @@index([quoteId])
  @@index([serviceId])
  @@map("quote_items")
}

// ============================================
// TESTIMONIALS
// ============================================

model Testimonial {
  id            String    @id @default(cuid())

  name          String
  company       String?
  position      String?
  avatar        String?

  content       String    @db.Text
  rating        Int       @default(5)

  isPublished   Boolean   @default(false)
  isFeatured    Boolean   @default(false)

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@map("testimonials")
}

// ============================================
// CONTENT MANAGEMENT
// ============================================

model Page {
  id            String    @id @default(cuid())
  slug          String    @unique
  title         String

  seo           Json?     // SEO metadata
  content       Json      // Page builder content

  isPublished   Boolean   @default(false)
  publishedAt   DateTime?

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@map("pages")
}

model Media {
  id            String    @id @default(cuid())

  filename      String
  originalName  String
  mimeType      String
  size          Int
  url           String

  alt           String?
  caption       String?

  width         Int?
  height        Int?

  uploadedBy    String?
  folder        String?

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([folder])
  @@map("media")
}

// ============================================
// ANALYTICS
// ============================================

model PageView {
  id            String    @id @default(cuid())

  path          String
  referrer      String?
  userAgent     String?
  ipAddress     String?
  country       String?
  city          String?

  sessionId     String?
  userId        String?

  createdAt     DateTime  @default(now())

  @@index([path])
  @@index([sessionId])
  @@index([createdAt])
  @@map("page_views")
}
```

### 4.2 Database Relationships

```
User (1) ──────< (N) Inquiry
User (1) ──────< (N) Quote

Service (1) ────< (N) Inquiry
Service (1) ────< (N) QuoteItem

Inquiry (1) ────< (1) Quote
Quote (1) ──────< (N) QuoteItem

QuoteItem (N) >─── (1) Service
QuoteItem (N) >─── (1) Quote
```

### 4.3 Database Indexing Strategy

1. **Primary Indexes:** Auto-created on `@id` fields
2. **Foreign Key Indexes:** On all relation fields
3. **Query Optimization:**
   - `Inquiry.status` - Filter by status
   - `Service.category` - Filter by category
   - `PageView.path` - Analytics queries
   - `PageView.createdAt` - Time-based queries

---

## 5. TYPESCRIPT TYPE DEFINITIONS ARCHITECTURE

### 5.1 Type Organization

**File:** `/src/types/index.ts`

```typescript
// Main type exports - barrel file
export * from './components'
export * from './api'
export * from './models'
export * from './utils'
```

### 5.2 Component Types

**File:** `/src/types/components.ts`

```typescript
import { ReactNode, HTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonVariants, cardVariants } from '@/components/ui'

// ============================================
// BASE COMPONENT TYPES
// ============================================

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

// ============================================
// UI COMPONENT PROPS
// ============================================

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  hoverable?: boolean
}

export interface HeadingProps extends BaseComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: 'default' | 'gradient' | 'outline'
  align?: 'left' | 'center' | 'right'
}

export interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: boolean
}

export interface SectionProps extends BaseComponentProps {
  background?: 'default' | 'muted' | 'gradient' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

// ============================================
// FEATURE COMPONENT PROPS
// ============================================

export interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon?: ReactNode | string
  category: ServiceCategory
  features?: string[]
  image?: string
  onClick?: () => void
}

export interface TestimonialCardProps {
  id: string
  name: string
  company?: string
  position?: string
  avatar?: string
  content: string
  rating: number
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>
  initialValues?: Partial<ContactFormData>
  className?: string
}

// ============================================
// ANIMATION PROPS
// ============================================

export interface ParallaxSectionProps extends BaseComponentProps {
  speed?: number
  direction?: 'up' | 'down'
  offset?: number
}

export interface FadeInProps extends BaseComponentProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export interface ScrollRevealProps extends BaseComponentProps {
  threshold?: number
  once?: boolean
  delay?: number
}
```

### 5.3 API Types

**File:** `/src/types/api.ts`

```typescript
// ============================================
// REQUEST/RESPONSE TYPES
// ============================================

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: ApiError
  metadata?: ResponseMetadata
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
  field?: string
}

export interface ResponseMetadata {
  timestamp: string
  requestId: string
  version: string
}

// ============================================
// CONTACT API
// ============================================

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  service?: string
  preferredDate?: string
  urgency?: 'low' | 'normal' | 'high' | 'urgent'
}

export interface ContactSubmissionResponse {
  inquiryId: string
  status: 'submitted' | 'pending' | 'confirmed'
  message: string
}

// ============================================
// SERVICES API
// ============================================

export interface ServiceListResponse {
  services: ServiceData[]
  total: number
  categories: ServiceCategory[]
}

export interface ServiceDetailResponse {
  service: ServiceData
  relatedServices: ServiceData[]
}

// ============================================
// QUOTES API
// ============================================

export interface QuoteRequest {
  serviceIds: string[]
  customerId?: string
  requirements: string
  preferredDate?: string
}

export interface QuoteResponse {
  quoteId: string
  quoteNumber: string
  items: QuoteItemData[]
  totalAmount: number
  taxAmount: number
  validUntil: string
}
```

### 5.4 Data Models

**File:** `/src/types/models.ts`

```typescript
// ============================================
// DOMAIN MODELS
// ============================================

export type ServiceCategory =
  | 'CLEANING'
  | 'MAINTENANCE'
  | 'RENOVATION'
  | 'GARDENING'
  | 'SECURITY'
  | 'CONSULTATION'

export interface ServiceData {
  id: string
  slug: string
  name: string
  description: string
  shortDesc?: string
  icon?: string
  category: ServiceCategory
  pricing?: PricingStructure
  features: string[]
  images: string[]
  isActive: boolean
  order: number
}

export interface PricingStructure {
  type: 'fixed' | 'hourly' | 'custom'
  basePrice?: number
  hourlyRate?: number
  currency: 'EUR'
  unit?: string
}

export interface InquiryData {
  id: string
  userId?: string
  serviceId: string
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  preferredDate?: string
  urgency: 'low' | 'normal' | 'high' | 'urgent'
  status: InquiryStatus
  createdAt: string
  updatedAt: string
}

export type InquiryStatus =
  | 'NEW'
  | 'IN_REVIEW'
  | 'QUOTED'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'COMPLETED'

export interface QuoteData {
  id: string
  quoteNumber: string
  inquiryId: string
  validUntil: string
  totalAmount: number
  taxAmount: number
  discountAmount: number
  status: QuoteStatus
  items: QuoteItemData[]
}

export type QuoteStatus = 'DRAFT' | 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED'

export interface QuoteItemData {
  id: string
  serviceId: string
  description: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface TestimonialData {
  id: string
  name: string
  company?: string
  position?: string
  avatar?: string
  content: string
  rating: number
  isPublished: boolean
  isFeatured: boolean
}
```

### 5.5 Utility Types

**File:** `/src/types/utils.ts`

```typescript
// ============================================
// UTILITY TYPES
// ============================================

export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Maybe<T> = T | null | undefined

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

export type ValueOf<T> = T[keyof T]

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// ============================================
// FUNCTION TYPES
// ============================================

export type AsyncFunction<Args extends unknown[] = [], Return = void> =
  (...args: Args) => Promise<Return>

export type VoidFunction<Args extends unknown[] = []> =
  (...args: Args) => void

// ============================================
// FORM TYPES
// ============================================

export type FormState = 'idle' | 'submitting' | 'success' | 'error'

export interface FormFieldError {
  field: string
  message: string
}

export interface FormValidationResult {
  isValid: boolean
  errors: FormFieldError[]
}
```

---

## 6. API ROUTE STRUCTURE

### 6.1 API Organization

```
/api/
├── contact/
│   ├── route.ts                    # POST /api/contact
│   └── [id]/
│       └── route.ts                # GET /api/contact/:id
│
├── services/
│   ├── route.ts                    # GET /api/services
│   └── [slug]/
│       └── route.ts                # GET /api/services/:slug
│
├── quotes/
│   ├── route.ts                    # POST /api/quotes
│   └── [id]/
│       ├── route.ts                # GET /api/quotes/:id
│       └── accept/
│           └── route.ts            # POST /api/quotes/:id/accept
│
├── testimonials/
│   └── route.ts                    # GET /api/testimonials
│
└── health/
    └── route.ts                    # GET /api/health
```

### 6.2 API Route Specifications

#### 6.2.1 Contact Endpoints

**POST /api/contact**
```typescript
// Request
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+49 123 456789",
  "company": "Example GmbH",
  "subject": "Office Cleaning",
  "message": "We need weekly office cleaning...",
  "service": "cleaning",
  "preferredDate": "2025-10-15",
  "urgency": "normal"
}

// Response
{
  "success": true,
  "data": {
    "inquiryId": "clx123abc",
    "status": "submitted",
    "message": "Your inquiry has been submitted successfully"
  },
  "metadata": {
    "timestamp": "2025-10-08T10:00:00Z",
    "requestId": "req_abc123",
    "version": "1.0.0"
  }
}
```

**GET /api/contact/:id**
```typescript
// Response
{
  "success": true,
  "data": {
    "id": "clx123abc",
    "name": "John Doe",
    "email": "john@example.com",
    "status": "IN_REVIEW",
    "createdAt": "2025-10-08T10:00:00Z"
  }
}
```

#### 6.2.2 Services Endpoints

**GET /api/services**
```typescript
// Query params: ?category=CLEANING&active=true

// Response
{
  "success": true,
  "data": {
    "services": [
      {
        "id": "svc_001",
        "slug": "office-cleaning",
        "name": "Office Cleaning",
        "category": "CLEANING",
        "shortDesc": "Professional office cleaning services",
        "pricing": {
          "type": "hourly",
          "hourlyRate": 45,
          "currency": "EUR"
        }
      }
    ],
    "total": 12,
    "categories": ["CLEANING", "MAINTENANCE", "RENOVATION"]
  }
}
```

**GET /api/services/:slug**
```typescript
// Response
{
  "success": true,
  "data": {
    "service": {
      "id": "svc_001",
      "slug": "office-cleaning",
      "name": "Office Cleaning",
      "description": "Comprehensive office cleaning...",
      "features": ["Daily cleaning", "Eco-friendly products"],
      "images": ["/images/services/cleaning-1.jpg"]
    },
    "relatedServices": [...]
  }
}
```

#### 6.2.3 Quotes Endpoints

**POST /api/quotes**
```typescript
// Request
{
  "serviceIds": ["svc_001", "svc_002"],
  "requirements": "Need weekly service for 6 months",
  "preferredDate": "2025-11-01"
}

// Response
{
  "success": true,
  "data": {
    "quoteId": "quote_abc123",
    "quoteNumber": "Q-2025-001",
    "items": [...],
    "totalAmount": 2500.00,
    "taxAmount": 475.00,
    "validUntil": "2025-11-08T00:00:00Z"
  }
}
```

### 6.3 API Response Standards

**Success Response:**
```typescript
{
  success: true,
  data: T,
  metadata?: {
    timestamp: string,
    requestId: string,
    version: string
  }
}
```

**Error Response:**
```typescript
{
  success: false,
  error: {
    code: "VALIDATION_ERROR",
    message: "Invalid email format",
    field: "email",
    details: {...}
  },
  metadata: {
    timestamp: string,
    requestId: string,
    version: string
  }
}
```

---

## 7. STATE MANAGEMENT ARCHITECTURE (Zustand)

### 7.1 Store Structure

**File:** `/src/store/index.ts`

```typescript
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { UISlice, createUISlice } from './slices/ui-slice'
import { ContactSlice, createContactSlice } from './slices/contact-slice'
import { ServicesSlice, createServicesSlice } from './slices/services-slice'

// Combined store type
export type AppStore = UISlice & ContactSlice & ServicesSlice

// Create store with all slices
export const useStore = create<AppStore>()(
  devtools(
    persist(
      (...args) => ({
        ...createUISlice(...args),
        ...createContactSlice(...args),
        ...createServicesSlice(...args),
      }),
      {
        name: 'bgs-storage',
        partialize: (state) => ({
          // Only persist certain parts
          theme: state.theme,
          preferences: state.preferences,
        }),
      }
    )
  )
)

// Selector hooks for better performance
export const useUI = () => useStore((state) => ({
  isMobileMenuOpen: state.isMobileMenuOpen,
  isContactModalOpen: state.isContactModalOpen,
  theme: state.theme,
  toggleMobileMenu: state.toggleMobileMenu,
  openContactModal: state.openContactModal,
  closeContactModal: state.closeContactModal,
  setTheme: state.setTheme,
}))

export const useContact = () => useStore((state) => ({
  formData: state.contactFormData,
  formState: state.contactFormState,
  errors: state.contactFormErrors,
  updateFormData: state.updateContactFormData,
  submitForm: state.submitContactForm,
  resetForm: state.resetContactForm,
}))

export const useServices = () => useStore((state) => ({
  services: state.services,
  selectedService: state.selectedService,
  filters: state.serviceFilters,
  isLoading: state.servicesLoading,
  fetchServices: state.fetchServices,
  selectService: state.selectService,
  setFilters: state.setServiceFilters,
}))
```

### 7.2 UI Slice

**File:** `/src/store/slices/ui-slice.ts`

```typescript
import { StateCreator } from 'zustand'
import { AppStore } from '../index'

export interface UISlice {
  // State
  isMobileMenuOpen: boolean
  isContactModalOpen: boolean
  isQuoteModalOpen: boolean
  theme: 'light' | 'dark' | 'system'
  preferences: UserPreferences

  // Actions
  toggleMobileMenu: () => void
  openContactModal: () => void
  closeContactModal: () => void
  openQuoteModal: () => void
  closeQuoteModal: () => void
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  updatePreferences: (preferences: Partial<UserPreferences>) => void
}

interface UserPreferences {
  reduceMotion: boolean
  cookiesAccepted: boolean
}

export const createUISlice: StateCreator<
  AppStore,
  [],
  [],
  UISlice
> = (set) => ({
  // Initial state
  isMobileMenuOpen: false,
  isContactModalOpen: false,
  isQuoteModalOpen: false,
  theme: 'system',
  preferences: {
    reduceMotion: false,
    cookiesAccepted: false,
  },

  // Actions
  toggleMobileMenu: () => set((state) => ({
    isMobileMenuOpen: !state.isMobileMenuOpen
  })),

  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),

  openQuoteModal: () => set({ isQuoteModalOpen: true }),
  closeQuoteModal: () => set({ isQuoteModalOpen: false }),

  setTheme: (theme) => set({ theme }),

  updatePreferences: (preferences) => set((state) => ({
    preferences: { ...state.preferences, ...preferences }
  })),
})
```

### 7.3 Contact Slice

**File:** `/src/store/slices/contact-slice.ts`

```typescript
import { StateCreator } from 'zustand'
import { AppStore } from '../index'
import { ContactFormData, FormState } from '@/types'

export interface ContactSlice {
  // State
  contactFormData: Partial<ContactFormData>
  contactFormState: FormState
  contactFormErrors: Record<string, string>

  // Actions
  updateContactFormData: (data: Partial<ContactFormData>) => void
  submitContactForm: (data: ContactFormData) => Promise<void>
  resetContactForm: () => void
  setContactFormErrors: (errors: Record<string, string>) => void
}

const initialFormData: Partial<ContactFormData> = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  urgency: 'normal',
}

export const createContactSlice: StateCreator<
  AppStore,
  [],
  [],
  ContactSlice
> = (set, get) => ({
  // Initial state
  contactFormData: initialFormData,
  contactFormState: 'idle',
  contactFormErrors: {},

  // Actions
  updateContactFormData: (data) => set((state) => ({
    contactFormData: { ...state.contactFormData, ...data }
  })),

  submitContactForm: async (data) => {
    set({ contactFormState: 'submitting', contactFormErrors: {} })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      set({
        contactFormState: 'success',
        contactFormData: initialFormData
      })
    } catch (error) {
      set({
        contactFormState: 'error',
        contactFormErrors: {
          general: 'Failed to submit form. Please try again.'
        }
      })
    }
  },

  resetContactForm: () => set({
    contactFormData: initialFormData,
    contactFormState: 'idle',
    contactFormErrors: {},
  }),

  setContactFormErrors: (errors) => set({ contactFormErrors: errors }),
})
```

### 7.4 Services Slice

**File:** `/src/store/slices/services-slice.ts`

```typescript
import { StateCreator } from 'zustand'
import { AppStore } from '../index'
import { ServiceData, ServiceCategory } from '@/types'

export interface ServicesSlice {
  // State
  services: ServiceData[]
  selectedService: ServiceData | null
  serviceFilters: ServiceFilters
  servicesLoading: boolean
  servicesError: string | null

  // Actions
  fetchServices: (filters?: ServiceFilters) => Promise<void>
  selectService: (serviceId: string) => void
  setServiceFilters: (filters: Partial<ServiceFilters>) => void
  clearServiceFilters: () => void
}

interface ServiceFilters {
  category?: ServiceCategory
  search?: string
  isActive?: boolean
}

export const createServicesSlice: StateCreator<
  AppStore,
  [],
  [],
  ServicesSlice
> = (set, get) => ({
  // Initial state
  services: [],
  selectedService: null,
  serviceFilters: {},
  servicesLoading: false,
  servicesError: null,

  // Actions
  fetchServices: async (filters) => {
    set({ servicesLoading: true, servicesError: null })

    try {
      const params = new URLSearchParams(filters as Record<string, string>)
      const response = await fetch(`/api/services?${params}`)

      if (!response.ok) {
        throw new Error('Failed to fetch services')
      }

      const data = await response.json()
      set({
        services: data.data.services,
        servicesLoading: false
      })
    } catch (error) {
      set({
        servicesError: 'Failed to load services',
        servicesLoading: false
      })
    }
  },

  selectService: (serviceId) => {
    const service = get().services.find(s => s.id === serviceId)
    set({ selectedService: service || null })
  },

  setServiceFilters: (filters) => set((state) => ({
    serviceFilters: { ...state.serviceFilters, ...filters }
  })),

  clearServiceFilters: () => set({ serviceFilters: {} }),
})
```

---

## 8. ANIMATION & PARALLAX SYSTEMS

### 8.1 Animation Architecture

**File:** `/src/lib/animations.ts`

```typescript
import { Variants } from 'framer-motion'

// ============================================
// ANIMATION VARIANTS
// ============================================

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

// ============================================
// ANIMATION UTILITIES
// ============================================

export const createDelayedVariant = (
  baseVariant: Variants,
  delay: number
): Variants => ({
  ...baseVariant,
  visible: {
    ...(baseVariant.visible as object),
    transition: {
      ...((baseVariant.visible as any)?.transition || {}),
      delay
    }
  }
})

export const getAnimationDirection = (direction: 'up' | 'down' | 'left' | 'right') => {
  const map = {
    up: slideUpVariants,
    down: { ...slideUpVariants, hidden: { opacity: 0, y: -50 } },
    left: slideInLeftVariants,
    right: slideInRightVariants,
  }
  return map[direction]
}
```

### 8.2 Parallax System

**File:** `/src/lib/parallax.ts`

```typescript
import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

// ============================================
// PARALLAX HOOKS
// ============================================

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return { ref, y }
}

export const useParallaxOffset = (offset: number = 100, direction: 'up' | 'down' = 'up') => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const multiplier = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [0, offset * multiplier])

  return { ref, y }
}

export const useScaleOnScroll = (scaleRange: [number, number] = [0.8, 1]) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]])

  return { ref, scale }
}

export const useOpacityOnScroll = (opacityRange: [number, number] = [0, 1]) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [opacityRange[0], opacityRange[1], opacityRange[0]])

  return { ref, opacity }
}

// ============================================
// PARALLAX UTILITIES
// ============================================

export const createSmoothScroll = () => {
  if (typeof window === 'undefined') return

  let currentScroll = window.scrollY
  let targetScroll = window.scrollY

  const smoothScroll = () => {
    currentScroll += (targetScroll - currentScroll) * 0.1

    window.scrollTo(0, currentScroll)

    if (Math.abs(targetScroll - currentScroll) > 0.5) {
      requestAnimationFrame(smoothScroll)
    }
  }

  window.addEventListener('scroll', () => {
    targetScroll = window.scrollY
    smoothScroll()
  })
}

export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId)
  if (!element) return

  const y = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  })
}
```

---

## 9. RESPONSIVE DESIGN STRATEGY

### 9.1 Breakpoint System

```typescript
export const BREAKPOINTS = {
  xs: '0px',       // Mobile portrait
  sm: '640px',     // Mobile landscape
  md: '768px',     // Tablet portrait
  lg: '1024px',    // Tablet landscape / Small desktop
  xl: '1280px',    // Desktop
  '2xl': '1536px', // Large desktop
  '3xl': '1920px', // Extra large desktop
} as const

export const MEDIA_QUERIES = {
  xs: `@media (min-width: ${BREAKPOINTS.xs})`,
  sm: `@media (min-width: ${BREAKPOINTS.sm})`,
  md: `@media (min-width: ${BREAKPOINTS.md})`,
  lg: `@media (min-width: ${BREAKPOINTS.lg})`,
  xl: `@media (min-width: ${BREAKPOINTS.xl})`,
  '2xl': `@media (min-width: ${BREAKPOINTS['2xl']})`,
  '3xl': `@media (min-width: ${BREAKPOINTS['3xl']})`,
} as const
```

### 9.2 Responsive Design Principles

1. **Mobile-First Approach**
   - Base styles for mobile (xs)
   - Progressive enhancement for larger screens
   - Touch-optimized interactions

2. **Breakpoint Strategy**
   - `xs-sm (0-640px)`: Single column, full-width
   - `md (768px)`: Two columns, simplified navigation
   - `lg (1024px)`: Multi-column layouts, hover states
   - `xl+ (1280px+)`: Maximum content width, enhanced animations

3. **Component Responsiveness**
   ```typescript
   // Example responsive component
   <Container className="
     px-4           // Mobile padding
     sm:px-6        // Small screens
     lg:px-8        // Large screens
     max-w-7xl      // Max content width
     mx-auto        // Center content
   ">
   ```

4. **Typography Scaling**
   ```css
   /* Mobile */
   h1 { font-size: 2rem; }

   /* Tablet */
   @media (min-width: 768px) {
     h1 { font-size: 3rem; }
   }

   /* Desktop */
   @media (min-width: 1024px) {
     h1 { font-size: 4rem; }
   }
   ```

5. **Image Optimization**
   - Responsive images with srcset
   - Lazy loading below the fold
   - WebP format with fallbacks
   - Art direction for different viewports

---

## 10. PERFORMANCE OPTIMIZATION STRATEGY

### 10.1 Code Splitting

```typescript
// Route-based code splitting
const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))

// Component-based code splitting
const QuoteCalculator = lazy(() => import('@/components/features/QuoteCalculator'))
const ImageGallery = lazy(() => import('@/components/features/ImageGallery'))
```

### 10.2 Image Optimization

1. Next.js Image component (future)
2. Responsive images with srcset
3. Lazy loading
4. WebP format
5. Image CDN integration

### 10.3 Bundle Optimization

- Tree shaking for unused code
- Minification and compression
- CSS extraction and purging
- Dynamic imports for heavy components

### 10.4 Caching Strategy

```typescript
// Service Worker caching (future)
const CACHE_VERSION = 'v1'
const STATIC_CACHE = [
  '/fonts/',
  '/images/logo.svg',
  '/favicon.ico'
]

// API caching with SWR
const { data, error } = useSWR('/api/services', fetcher, {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshInterval: 60000, // 1 minute
})
```

---

## 11. SECURITY ARCHITECTURE

### 11.1 Security Measures

1. **Input Validation**
   - Zod schema validation on all inputs
   - Server-side validation required
   - XSS prevention with sanitization

2. **API Security**
   - Rate limiting on endpoints
   - CORS configuration
   - CSRF protection
   - API authentication (future)

3. **Data Protection**
   - Encrypted environment variables
   - Secure database connections
   - No sensitive data in client code
   - HTTPS enforcement

4. **Authentication** (Future)
   - JWT tokens
   - Secure session management
   - Password hashing with bcrypt
   - OAuth integration

---

## 12. DEPLOYMENT ARCHITECTURE

### 12.1 Build Process

```bash
# Production build
npm run build

# Output: /dist directory
# - Optimized JS bundles
# - Minified CSS
# - Optimized images
# - Source maps (optional)
```

### 12.2 Hosting Strategy

**Recommended Platforms:**
1. **Vercel** - Optimal for Next.js (future)
2. **Netlify** - Static hosting with edge functions
3. **AWS S3 + CloudFront** - Enterprise solution
4. **DigitalOcean App Platform** - Simple deployment

### 12.3 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run lint
      - run: npm run test
      - run: npm run build
      - name: Deploy
        uses: vercel/action@v1
```

---

## 13. MONITORING & ANALYTICS

### 13.1 Performance Monitoring

- Lighthouse CI for performance tracking
- Web Vitals monitoring
- Real User Monitoring (RUM)
- Error tracking with Sentry (optional)

### 13.2 Analytics

- Google Analytics 4
- Custom event tracking
- Conversion tracking
- A/B testing framework (optional)

---

## 14. MIGRATION PATH

### 14.1 Current State → Next.js 14

**Phase 1: Preparation**
1. Audit current codebase
2. Identify dependencies
3. Plan component migration
4. Set up Next.js project

**Phase 2: Migration**
1. Move components to Next.js structure
2. Convert pages to App Router
3. Implement API routes
4. Set up database with Prisma

**Phase 3: Enhancement**
1. Add server components
2. Implement streaming SSR
3. Optimize bundle size
4. Add advanced features

**Phase 4: Launch**
1. Performance testing
2. Security audit
3. Deploy to production
4. Monitor and optimize

---

## 15. ARCHITECTURE DECISION RECORDS (ADRs)

### ADR-001: React Router vs Next.js App Router

**Status:** Deferred (Currently using React Router)

**Context:** Need routing solution for multi-page application

**Decision:** Using React Router initially, plan migration to Next.js App Router

**Consequences:**
- ✅ Faster initial development
- ✅ Familiar React patterns
- ⚠️ Manual code splitting required
- ⚠️ No built-in SSR

### ADR-002: Zustand for State Management

**Status:** Accepted

**Context:** Need lightweight, performant state management

**Decision:** Use Zustand over Redux or Context API

**Consequences:**
- ✅ Minimal boilerplate
- ✅ Better performance
- ✅ TypeScript support
- ✅ DevTools integration
- ⚠️ Less ecosystem plugins

### ADR-003: Tailwind CSS 4.1

**Status:** Accepted

**Context:** Need utility-first CSS framework

**Decision:** Use Tailwind CSS with custom design tokens

**Consequences:**
- ✅ Rapid development
- ✅ Consistent design system
- ✅ Small production bundle
- ⚠️ Learning curve for team

### ADR-004: Prisma + PostgreSQL

**Status:** Proposed (Future enhancement)

**Context:** Need database layer for dynamic content

**Decision:** Use Prisma ORM with PostgreSQL

**Consequences:**
- ✅ Type-safe database queries
- ✅ Automatic migrations
- ✅ Great developer experience
- ⚠️ Requires database hosting

---

## 16. FUTURE ENHANCEMENTS

### 16.1 Short-term (1-3 months)

1. **Database Integration**
   - Set up PostgreSQL database
   - Implement Prisma schema
   - Create API endpoints
   - Add admin dashboard

2. **Authentication**
   - User registration/login
   - Protected routes
   - Role-based access

3. **CMS Integration**
   - Content management
   - Service management
   - Testimonial management

### 16.2 Medium-term (3-6 months)

1. **Next.js Migration**
   - Migrate to Next.js 14
   - Implement App Router
   - Add server components
   - Optimize performance

2. **Advanced Features**
   - Real-time chat support
   - Online booking system
   - Payment integration
   - Email automation

### 16.3 Long-term (6-12 months)

1. **Mobile App**
   - React Native app
   - Push notifications
   - Offline support

2. **Analytics & AI**
   - Advanced analytics dashboard
   - AI-powered quote generation
   - Predictive maintenance alerts

---

## 17. DOCUMENTATION & KNOWLEDGE BASE

### 17.1 Required Documentation

1. **Component Documentation**
   - Storybook for component showcase
   - Props documentation
   - Usage examples

2. **API Documentation**
   - OpenAPI/Swagger spec
   - Endpoint documentation
   - Authentication guide

3. **Developer Guide**
   - Setup instructions
   - Development workflow
   - Testing strategy
   - Deployment process

---

## 18. CONCLUSION

This architecture provides a solid foundation for a professional, scalable, and maintainable web application. Key strengths:

✅ **Modular Structure** - Clear separation of concerns
✅ **Type Safety** - Comprehensive TypeScript coverage
✅ **Performance** - Optimized bundle and rendering
✅ **Scalability** - Easy to add features and scale
✅ **Maintainability** - Well-documented and organized
✅ **Future-Ready** - Migration path to Next.js 14

**Next Steps:**
1. Review and approve architecture
2. Begin implementation with Hive Mind agents
3. Establish coding standards and conventions
4. Set up CI/CD pipeline
5. Begin component development

---

**Document Version:** 1.0.0
**Last Updated:** 2025-10-08
**Maintained By:** System Architecture Designer (Hive Mind)
