# BGS Gebäudeservice - Official Website

Professional building services website for BGS Gebäudeservice, a leading Swiss facility management company established in 1997.

## Overview

BGS Gebäudeservice is a premium facility management company serving clients across Switzerland with a comprehensive range of cleaning and building maintenance services. This website showcases their expertise from luxury private jet cleaning to essential office maintenance.

## Features

- **Premium Services Showcase**: Luxury services including private jet cleaning, yacht maintenance, and exclusive housekeeping
- **B2B Solutions**: Industrial cleaning, facility management, and specialized maintenance services
- **Essential Services**: Office cleaning, window washing, and regular maintenance
- **Location Pages**: Service coverage in Zürich, Luzern, and St. Gallen
- **Responsive Design**: Mobile-first, Apple-inspired design with smooth animations
- **ISO 9001 Certified**: Quality assurance and professional standards
- **24/7 Emergency Service**: Round-the-clock availability for urgent requests

## Tech Stack

### Frontend Framework
- **React 19.1.0** - Latest React with concurrent features
- **React Router DOM 7.6.1** - Client-side routing and navigation
- **Vite 6.3.5** - Fast build tool and development server

### UI Components
- **Radix UI** - Accessible component primitives
  - Accordion, Dialog, Dropdown Menu, Navigation Menu
  - Tabs, Tooltip, Select, and more
- **Lucide React 0.510.0** - Modern icon library
- **Framer Motion 12.15.0** - Advanced animations
- **Class Variance Authority** - Type-safe component variants

### Styling
- **Tailwind CSS 4.1.7** - Utility-first CSS framework
- **Custom Design System** - Centralized design tokens
- **Glassmorphism Effects** - Modern UI aesthetics
- **Gradient Animations** - Dynamic visual effects

### Form Handling
- **React Hook Form 7.56.3** - Performant form management
- **Zod 3.24.4** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Libraries
- **date-fns 4.1.0** - Modern date utility library
- **Sonner 2.0.3** - Toast notifications
- **Recharts 2.15.3** - Charting library
- **CMDK 1.1.1** - Command menu interface

## Prerequisites

- **Node.js**: 18.x or higher
- **Package Manager**: pnpm 10.4.1 (recommended)
- **Git**: For version control

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd bgs-gebaeudeservice
```

### 2. Install Dependencies

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration (if applicable)
VITE_API_URL=https://api.example.com

# Analytics (optional)
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Contact Form (if applicable)
VITE_CONTACT_EMAIL=info@bgs-service.ch
```

## Development

### Start Development Server

```bash
pnpm dev
```

This will start the Vite development server at `http://localhost:5173`

### Available Commands

```bash
# Development
pnpm dev              # Start development server

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build locally

# Code Quality
pnpm lint             # Run ESLint
pnpm typecheck        # Run TypeScript type checking (if configured)

# Dependencies
pnpm install          # Install dependencies
pnpm update           # Update dependencies
```

## Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory, ready for deployment.

## Project Structure

```
bgs-gebaeudeservice/
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       ├── Heading.tsx
│   │       └── Section.tsx
│   ├── lib/              # Utility functions and design system
│   │   ├── design-tokens.ts
│   │   ├── utils.ts
│   │   ├── animations.ts
│   │   └── parallax.ts
│   ├── pages/            # Page components
│   │   ├── services/     # Service detail pages
│   │   ├── locations/    # Location pages
│   │   ├── Blog.jsx
│   │   ├── ContentPages.jsx
│   │   └── Legal.jsx
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── docs/                 # Documentation
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── README.md             # This file
```

## Design System

The project uses a custom design system with centralized design tokens:

### Colors
- **Primary**: Blue gradient (#6366f1 - #4338ca)
- **Secondary**: Purple gradient (#a855f7 - #7e22ce)
- **Accent**: Amber/Gold for premium services
- **Neutrals**: Gray scale from 50 to 900

### Typography
- **Font Family**: System fonts (Apple, Segoe UI, Roboto)
- **Font Sizes**: xs (0.75rem) to 6xl (3.75rem)
- **Font Weights**: Light (300) to Black (900)

### Spacing
- **Scale**: xs (0.5rem) to 6xl (12rem)
- **Consistent**: Used across all components

### Animations
- **Durations**: Fast (150ms), Normal (300ms), Slow (500ms)
- **Easings**: ease, ease-in, ease-out, ease-in-out, linear

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed design system documentation.

## Key Features Implementation

### 1. Service Categories

Three main service tiers:
- **Premium**: Luxury services (Private jets, yachts, luxury properties)
- **Standard B2B**: Industrial and commercial services
- **Essentiell**: Basic cleaning and maintenance

### 2. Mega Dropdown Navigation

Advanced navigation menu with:
- Category-based service organization
- Icon-coded service types
- Hover effects and smooth transitions
- Mobile-responsive design

### 3. Full-Width Layouts

Apple-inspired design with:
- Edge-to-edge layouts
- Gradient backgrounds
- Parallax effects
- Glassmorphism UI elements

### 4. Performance Optimizations

- Lazy loading for images
- Code splitting by route
- Optimized bundle size
- Fast page transitions

## Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari 14+, Chrome Android 90+

## Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Total Bundle Size**: < 500KB (gzipped)

## Accessibility

- **WCAG 2.1 Level AA** compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators on all interactive elements

## SEO Optimization

- Semantic HTML structure
- Meta tags for all pages
- OpenGraph and Twitter Card support
- Sitemap generation
- Structured data (JSON-LD)

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Traditional Hosting

```bash
# Build the project
pnpm build

# Upload contents of dist/ folder to your web server
```

## Environment-Specific Configurations

### Development
- Source maps enabled
- Hot Module Replacement (HMR)
- Detailed error messages

### Production
- Minified and optimized code
- Tree shaking enabled
- Asset hashing for cache busting
- Compressed assets (gzip/brotli)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

Copyright © 2025 BGS Gebäudeservice. All rights reserved.

## Contact

- **Phone**: +41 41 320 56 10
- **Email**: info@bgs-service.ch
- **Address**: Emmenbrücke, Luzern, Switzerland

## Support

For technical issues or questions:
1. Check the [FAQ](./FAQ.md)
2. Review [ARCHITECTURE.md](./ARCHITECTURE.md)
3. Contact the development team

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.

---

Built with ❤️ using React, Vite, and Tailwind CSS
