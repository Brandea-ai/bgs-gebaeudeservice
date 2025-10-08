# Component Library Documentation

Complete reference for all UI components in the BGS Gebäudeservice design system.

## Table of Contents

1. [Overview](#overview)
2. [Component Categories](#component-categories)
3. [Core Components](#core-components)
4. [Layout Components](#layout-components)
5. [Radix UI Components](#radix-ui-components)
6. [Usage Guidelines](#usage-guidelines)

## Overview

The component library is built on top of **Radix UI** primitives with custom styling using **Tailwind CSS**. All components are:

- **Accessible**: WCAG 2.1 Level AA compliant
- **Responsive**: Mobile-first design
- **Customizable**: Variants and size options
- **Type-Safe**: Full TypeScript support
- **Composable**: Can be combined and extended

### File Locations

```
src/
├── components/
│   └── ui/              # Custom UI components
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Heading.tsx
│       └── Section.tsx
└── lib/
    ├── utils.ts         # Utility functions (cn)
    └── design-tokens.ts # Design system tokens
```

## Component Categories

### Core Components
- Badge
- Button
- Card
- Heading

### Layout Components
- Container
- Section

### Radix UI Components
- Accordion
- Dialog
- Dropdown Menu
- Navigation Menu
- Tabs
- Tooltip

## Core Components

### Badge

Visual indicators for status, categories, and labels.

#### Import

```typescript
import { Badge } from '@/components/ui/Badge'
```

#### Variants

**Default Badge**
```tsx
<Badge>Default</Badge>
```

**Outline Badge**
```tsx
<Badge variant="outline">Outline</Badge>
```

**Gradient Badge**
```tsx
<Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
  Premium Service
</Badge>
```

#### Props

```typescript
interface BadgeProps {
  variant?: 'default' | 'outline' | 'secondary' | 'destructive'
  className?: string
  children: React.ReactNode
}
```

#### Use Cases

```tsx
// Service tier indicators
<Badge className="bg-amber-100 text-amber-800">Premium</Badge>
<Badge className="bg-blue-100 text-blue-800">B2B</Badge>
<Badge className="bg-green-100 text-green-800">Essential</Badge>

// Status indicators
<Badge variant="outline" className="border-green-500 text-green-700">
  Active
</Badge>

// Feature highlights
<Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
  ISO 9001 Certified
</Badge>
```

---

### Button

Interactive elements for user actions.

#### Import

```typescript
import { Button } from '@/components/ui/Button'
```

#### Variants

**Default Button**
```tsx
<Button>Default</Button>
```

**Outline Button**
```tsx
<Button variant="outline">Outline</Button>
```

**Ghost Button**
```tsx
<Button variant="ghost">Ghost</Button>
```

**Destructive Button**
```tsx
<Button variant="destructive">Delete</Button>
```

#### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

#### With Icons

```tsx
import { Phone, Mail, ArrowRight } from 'lucide-react'

<Button>
  <Phone className="mr-2 h-4 w-4" />
  Call Now
</Button>

<Button variant="outline">
  Learn More
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

#### Props

```typescript
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'link'
  size?: 'sm' | 'default' | 'lg' | 'icon'
  asChild?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}
```

---

### Card

Content containers with headers, content, and footers.

#### Import

```typescript
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
```

#### Basic Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Service Name</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Learn More</Button>
  </CardFooter>
</Card>
```

---

For complete component documentation, see the full COMPONENTS.md file in the repository.

---

Last Updated: 2025-10-08
