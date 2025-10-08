# UI Component Library

A complete, production-ready UI component library built with TypeScript, TailwindCSS, and Framer Motion.

## Features

- **14 Professional Components** - Button, Card, Container, Heading, Section, Badge, Input, Tabs, Accordion, Carousel, ParallaxImage, GradientSpotlight, LoadingSkeleton, Navigation
- **TypeScript First** - Full type safety with strict types
- **Framer Motion Animations** - Smooth, performant animations on all interactive components
- **TailwindCSS Styling** - Utility-first CSS with class-variance-authority for variants
- **Accessible** - WCAG 2.1 AA compliant with proper ARIA attributes
- **Dark Mode** - Built-in dark mode support for all components
- **Mobile Responsive** - Mobile-first design with responsive breakpoints
- **Tree-shakeable** - Import only what you need

## Installation

```bash
npm install framer-motion @radix-ui/react-tabs @radix-ui/react-accordion @radix-ui/react-icons class-variance-authority clsx tailwind-merge
```

## Usage

### Import Components

```typescript
import { Button, Card, Heading } from '@/components/ui';
```

### Button

Multiple variants with loading states, icons, and full customization.

```tsx
<Button variant="primary" size="lg" loading={false}>
  Click Me
</Button>

<Button variant="gradient" icon={<Icon />} iconPosition="left">
  With Icon
</Button>

<Button variant="outline" fullWidth>
  Full Width
</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`, `gradient`, `danger`
**Sizes:** `sm`, `md`, `lg`, `xl`
**Props:** `loading`, `icon`, `iconPosition`, `fullWidth`, `disabled`

### Card

Animated cards with hover effects and multiple styles.

```tsx
<Card variant="default" hover="lift" padding="md">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

**Variants:** `default`, `outline`, `glass`, `gradient`
**Hover Effects:** `lift`, `glow`, `rotate`, `none`
**Padding:** `none`, `sm`, `md`, `lg`, `xl`

### Heading

Responsive typography with gradient text support.

```tsx
<Heading level="h1" variant="gradient" align="center" animated>
  Beautiful Heading
</Heading>
```

**Levels:** `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
**Variants:** `default`, `gradient`, `muted`, `accent`, `rainbow`
**Alignment:** `left`, `center`, `right`

### Container

Responsive container with max-width variants.

```tsx
<Container maxWidth="xl" padding="md" animated>
  Content
</Container>
```

**Max Width:** `sm`, `md`, `lg`, `xl`, `2xl`, `full`, `none`
**Padding:** `none`, `sm`, `md`, `lg`, `xl`

### Section

Full-width sections with backgrounds and overlays.

```tsx
<Section
  background="gradient"
  padding="lg"
  backgroundImage="/hero.jpg"
  overlay
  overlayOpacity={0.5}
>
  Section content
</Section>
```

**Backgrounds:** `none`, `white`, `gray`, `gradient`, `dark`, `image`
**Padding:** `none`, `sm`, `md`, `lg`, `xl`

### Badge

Status badges with variants and icons.

```tsx
<Badge variant="success" size="md" dot>
  Active
</Badge>

<Badge variant="gradient" icon={<Icon />}>
  Premium
</Badge>
```

**Variants:** `default`, `success`, `warning`, `danger`, `info`, `purple`, `gradient`, `outline`
**Sizes:** `sm`, `md`, `lg`

### Input

Form inputs with validation states and icons.

```tsx
<Input
  label="Email"
  error="Invalid email"
  helperText="Enter your email"
  leftIcon={<EmailIcon />}
  variant="default"
/>
```

**Variants:** `default`, `error`, `success`, `ghost`
**Sizes:** `sm`, `md`, `lg`

### Tabs

Animated tabs with Radix UI.

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Accordion

Expandable sections with animations.

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Carousel

Auto-playing carousel with swipe support.

```tsx
<Carousel
  items={[<Slide1 />, <Slide2 />, <Slide3 />]}
  autoPlay
  interval={5000}
  showControls
  showIndicators
/>
```

### ParallaxImage

Image with parallax scroll effect.

```tsx
<ParallaxImage
  src="/image.jpg"
  alt="Hero"
  parallaxStrength={50}
  overlay
  overlayOpacity={0.4}
>
  <div>Content overlay</div>
</ParallaxImage>
```

### GradientSpotlight

Cursor-following gradient effect.

```tsx
<GradientSpotlight
  gradientColor="rgba(59, 130, 246, 0.15)"
  gradientSize={300}
>
  <div>Content with spotlight</div>
</GradientSpotlight>
```

### LoadingSkeleton

Skeleton loading states with presets.

```tsx
<LoadingSkeleton variant="text" count={3} />
<SkeletonCard />
<SkeletonList items={5} />
<SkeletonTable rows={5} columns={4} />
```

**Variants:** `text`, `title`, `circle`, `rectangle`, `card`
**Animations:** `pulse`, `shimmer`, `wave`

### Navigation

Sticky navigation with glassmorphism.

```tsx
<Navigation
  items={[
    { label: 'Home', href: '/', icon: <HomeIcon /> },
    { label: 'About', href: '/about' }
  ]}
  logo={<Logo />}
  sticky
  transparent
  blur
/>
```

## Component Files

All components are located in `/src/components/ui/`:

1. **Button.tsx** - Gradient backgrounds, hover glow, loading states
2. **Card.tsx** - 3D transforms, multiple variants, sub-components
3. **Container.tsx** - Responsive max-widths, optional animations
4. **Heading.tsx** - Gradient text, responsive typography
5. **Section.tsx** - Full-width sections, background variants
6. **Badge.tsx** - Status badges, animated dots
7. **Input.tsx** - Form inputs, validation states, icons
8. **Tabs.tsx** - Animated tab switching with Radix UI
9. **Accordion.tsx** - Expandable content with animations
10. **Carousel.tsx** - Auto-play, swipe controls, indicators
11. **ParallaxImage.tsx** - Scroll-based parallax effect
12. **GradientSpotlight.tsx** - Mouse-following spotlight
13. **LoadingSkeleton.tsx** - Skeleton loaders with presets
14. **Navigation.tsx** - Sticky header, mobile menu, glassmorphism

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and attributes
- Keyboard navigation support
- Focus visible styles
- Screen reader friendly
- WCAG 2.1 AA compliant color contrast

## TypeScript Support

All components are fully typed with:
- Strict TypeScript mode
- Proper prop interfaces
- Variant types with class-variance-authority
- React.forwardRef for ref forwarding
- Generic type support where applicable

## Performance

- Tree-shakeable exports
- Optimized animations with Framer Motion
- Lazy loading support
- Minimal re-renders
- Efficient CSS with TailwindCSS

## Dark Mode

All components support dark mode out of the box using Tailwind's dark mode classes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Free to use in commercial and personal projects.
