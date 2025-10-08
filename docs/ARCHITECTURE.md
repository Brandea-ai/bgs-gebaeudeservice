# Architecture Documentation

This document provides a comprehensive overview of the BGS Gebäudeservice website architecture, design decisions, and technical implementation details.

## Table of Contents

1. [System Overview](#system-overview)
2. [Design System](#design-system)
3. [Component Architecture](#component-architecture)
4. [Routing Strategy](#routing-strategy)
5. [State Management](#state-management)
6. [Performance Optimization](#performance-optimization)
7. [Accessibility](#accessibility)
8. [Build Configuration](#build-configuration)

## System Overview

### Architecture Pattern

The application follows a **Component-Based Architecture** with the following principles:

- **Modular Design**: Each feature is isolated in its own component
- **Reusability**: Shared UI components in `/src/components/ui/`
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Components are composed together

### Technology Stack

```
┌─────────────────────────────────────────┐
│          User Interface (React)         │
├─────────────────────────────────────────┤
│     Component Library (Radix UI)        │
├─────────────────────────────────────────┤
│      Styling (Tailwind CSS 4.x)         │
├─────────────────────────────────────────┤
│    Build Tool (Vite 6.x)                │
├─────────────────────────────────────────┤
│    Routing (React Router 7.x)           │
└─────────────────────────────────────────┘
```

## Design System

### Design Tokens

Centralized design tokens are defined in `/src/lib/design-tokens.ts`:

#### Color Palette

```typescript
COLORS = {
  primary: '#6366f1',      // Indigo
  secondary: '#a855f7',    // Purple
  accent: '#34d399',       // Emerald
  neutrals: {
    'gray-50' to 'gray-900'
  },
  glass: 'rgba(255, 255, 255, 0.1)'
}
```

**Color System Strategy**:
- **Primary (Blue)**: Trust, professionalism, reliability
- **Secondary (Purple)**: Luxury, premium services
- **Accent (Green)**: Essential services, eco-friendly
- **Amber/Gold**: Premium tier services (private jet, yacht)
- **Glass Effects**: Modern UI with backdrop blur

#### Typography Scale

```typescript
TYPOGRAPHY = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto'
  ],
  fontSizes: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem'   // 60px
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900
  }
}
```

**Typography Hierarchy**:
- Hero headlines: 6xl-9xl (60px-128px)
- Section headings: 4xl-6xl (36px-60px)
- Subheadings: 2xl-3xl (24px-30px)
- Body text: base-lg (16px-18px)
- Small text: sm-xs (12px-14px)

#### Spacing System

```typescript
SPACING = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
  '6xl': '12rem'   // 192px
}
```

**Spacing Application**:
- Component padding: sm-lg (12px-24px)
- Section spacing: 2xl-4xl (48px-96px)
- Hero sections: 4xl-6xl (96px-192px)

#### Animation System

```typescript
ANIMATIONS = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms'
  },
  easings: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear'
  }
}
```

**Animation Principles**:
- **Micro-interactions**: 150ms (hover, focus)
- **Transitions**: 300ms (page elements)
- **Page transitions**: 500ms (route changes)
- **Easing**: ease-out for entrances, ease-in for exits

### Tailwind Configuration

Custom Tailwind configuration in `tailwind.config.ts`:

```typescript
{
  theme: {
    extend: {
      colors: {
        primary: { 50-950 },
        secondary: { 50-950 },
        glass: 'rgba(255, 255, 255, 0.1)'
      },
      backdropBlur: {
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite'
      }
    }
  }
}
```

## Component Architecture

### Component Structure

```
src/components/
└── ui/
    ├── Badge.tsx       # Status indicators, labels
    ├── Button.tsx      # Interactive buttons
    ├── Card.tsx        # Content containers
    ├── Container.tsx   # Layout wrapper
    ├── Heading.tsx     # Typography headings
    └── Section.tsx     # Page sections
```

### Component Design Principles

#### 1. Badge Component

**Purpose**: Visual indicators for status, categories, or labels

```typescript
<Badge variant="default" | "outline" | "gradient">
  Content
</Badge>
```

**Use Cases**:
- Service tier indicators (Premium, B2B, Essential)
- ISO certifications
- Feature highlights

#### 2. Button Component

**Purpose**: Interactive elements for user actions

```typescript
<Button
  variant="default" | "outline" | "ghost"
  size="sm" | "md" | "lg"
>
  Action
</Button>
```

**Features**:
- Multiple variants for different contexts
- Size variants for hierarchy
- Hover effects and transitions
- Icon support

#### 3. Card Component

**Purpose**: Content grouping and visual hierarchy

```typescript
<Card variant="default" | "glass" | "gradient">
  <CardHeader />
  <CardContent />
  <CardFooter />
</Card>
```

**Use Cases**:
- Service showcases
- Feature lists
- Content sections

#### 4. Container Component

**Purpose**: Consistent layout width and spacing

```typescript
<Container maxWidth="sm" | "md" | "lg" | "xl" | "full">
  Content
</Container>
```

**Responsive Breakpoints**:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
- full: 100%

#### 5. Heading Component

**Purpose**: Consistent typography hierarchy

```typescript
<Heading
  level={1 | 2 | 3 | 4 | 5 | 6}
  variant="default" | "gradient"
>
  Text
</Heading>
```

#### 6. Section Component

**Purpose**: Page section wrapper with consistent spacing

```typescript
<Section
  variant="default" | "dark" | "gradient"
  spacing="sm" | "md" | "lg"
>
  Content
</Section>
```

### Radix UI Integration

Pre-built accessible components:

- **Accordion**: FAQ sections, service details
- **Dialog**: Modals, forms
- **Dropdown Menu**: Navigation, actions
- **Tabs**: Service categorization
- **Tooltip**: Additional information
- **Navigation Menu**: Mega dropdown

### Composition Pattern

Example of component composition:

```jsx
<Section variant="gradient" spacing="lg">
  <Container maxWidth="xl">
    <Heading level={2} variant="gradient">
      Our Services
    </Heading>
    <div className="grid lg:grid-cols-3 gap-8">
      <Card variant="glass">
        <CardHeader>
          <Badge variant="gradient">Premium</Badge>
          <Heading level={3}>Private Jet Cleaning</Heading>
        </CardHeader>
        <CardContent>
          <p>Professional cleaning services...</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  </Container>
</Section>
```

## Routing Strategy

### React Router Configuration

```jsx
<BrowserRouter>
  <Routes>
    {/* Home */}
    <Route path="/" element={<HomePage />} />

    {/* Services - Premium */}
    <Route path="/services/privatjet" element={<PrivatjetPage />} />
    <Route path="/services/yacht" element={<YachtPage />} />

    {/* Services - B2B */}
    <Route path="/services/hallen" element={<HallenPage />} />

    {/* Services - Essential */}
    <Route path="/services/unterhalt" element={<UnterhaltPage />} />

    {/* Locations */}
    <Route path="/standorte/zurich" element={<ZurichPage />} />

    {/* Content */}
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/referenzen" element={<ReferenzenPage />} />

    {/* Legal */}
    <Route path="/impressum" element={<ImpressumPage />} />
    <Route path="/datenschutz" element={<DatenschutzPage />} />
  </Routes>
</BrowserRouter>
```

### URL Structure

```
/                           # Homepage
/services/:service-type     # Service detail pages
/standorte/:location        # Location pages
/blog                       # Blog index
/blog/:post-slug            # Blog post
/referenzen                 # References
/karriere                   # Careers
/impressum                  # Imprint
/datenschutz                # Privacy policy
```

### Navigation Architecture

**Three-tier navigation**:

1. **Primary Navigation**: Main menu (Services, Locations, About, Contact)
2. **Mega Dropdown**: Service categories (Premium, B2B, Essential)
3. **Footer Navigation**: Complete sitemap, legal, contact

## State Management

### Local State (useState)

Used for:
- UI state (menu open/closed)
- Form inputs
- Component-specific state

```jsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [activeTab, setActiveTab] = useState('premium')
const [scrolled, setScrolled] = useState(false)
```

### Effects (useEffect)

Used for:
- Scroll listeners
- Event handlers
- Side effects

```jsx
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

### Future Considerations

For scaling:
- **Context API**: Global state management
- **React Query**: Server state management
- **Zustand**: Lightweight state management

## Performance Optimization

### Code Splitting

React Router automatic code splitting:

```jsx
const PrivatjetPage = lazy(() => import('./pages/services/PrivatjetReinigung'))
```

### Image Optimization

- WebP format with fallbacks
- Lazy loading for below-the-fold images
- Responsive images with `srcset`
- Placeholder images during load

### Bundle Optimization

Vite configuration:

```javascript
{
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@radix-ui/*'],
          'utils': ['framer-motion', 'lucide-react']
        }
      }
    }
  }
}
```

### Performance Metrics

Target metrics:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## Accessibility

### WCAG 2.1 Level AA Compliance

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Visible focus states on all interactive elements

### Radix UI Benefits

- Built-in accessibility features
- ARIA attributes
- Keyboard navigation
- Screen reader support

## Build Configuration

### Vite Configuration

```javascript
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    target: 'es2015'
  }
})
```

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── vendor-[hash].js
├── images/
└── index.html
```

### Environment Variables

Development:
- `VITE_DEV_MODE=true`
- Source maps enabled
- HMR enabled

Production:
- `VITE_PROD_MODE=true`
- Minification enabled
- Tree shaking enabled
- Asset hashing

## Design Patterns

### Atomic Design Methodology

- **Atoms**: Button, Badge, Input
- **Molecules**: Card, Navigation Item
- **Organisms**: Navigation, Footer, Service Grid
- **Templates**: Page layouts
- **Pages**: Complete pages

### CSS Architecture

- **Utility-First**: Tailwind CSS utilities
- **Component Classes**: Custom component styles
- **Design Tokens**: Centralized values
- **Responsive**: Mobile-first approach

## Testing Strategy (Future)

Recommended testing pyramid:

1. **Unit Tests**: Component logic (Jest + React Testing Library)
2. **Integration Tests**: User flows (React Testing Library)
3. **E2E Tests**: Critical paths (Playwright/Cypress)
4. **Visual Regression**: UI consistency (Chromatic)

## Deployment

### Build Process

```bash
pnpm build
# Output: dist/
```

### Hosting Recommendations

- **Vercel**: Optimal for Vite + React
- **Netlify**: Alternative with edge functions
- **Cloudflare Pages**: Fast global CDN
- **Traditional**: nginx/Apache with static files

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
- Install dependencies
- Run linter
- Run tests
- Build production
- Deploy to hosting
```

---

## Future Enhancements

1. **Progressive Web App (PWA)**: Offline support, install prompts
2. **Internationalization (i18n)**: Multi-language support (German, French, Italian)
3. **CMS Integration**: Headless CMS for content management
4. **Analytics**: Google Analytics, Hotjar
5. **A/B Testing**: Optimize conversion rates
6. **Blog System**: Dynamic blog with CMS
7. **Contact Forms**: Integration with backend API
8. **Booking System**: Online appointment scheduling

---

Last Updated: 2025-10-08
