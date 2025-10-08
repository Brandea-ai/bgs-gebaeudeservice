# Contributing Guidelines

Thank you for considering contributing to the BGS Gebäudeservice website project!

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Component Guidelines](#component-guidelines)
6. [Git Workflow](#git-workflow)
7. [Pull Request Process](#pull-request-process)
8. [Testing Guidelines](#testing-guidelines)
9. [Documentation](#documentation)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior

- Be respectful and professional
- Welcome newcomers and help them get started
- Accept constructive criticism
- Focus on what's best for the project

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Unprofessional conduct

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm 10.4.1 (recommended) or npm
- Git
- Code editor (VS Code recommended)

### Initial Setup

1. **Fork the Repository**:
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bgs-gebaeudeservice.git
   cd bgs-gebaeudeservice
   ```

3. **Install Dependencies**:
   ```bash
   pnpm install
   ```

4. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start Development Server**:
   ```bash
   pnpm dev
   ```

## Development Workflow

### Branch Naming

Use descriptive branch names:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/changes
- `chore/` - Maintenance tasks

Examples:
```bash
feature/add-contact-form
fix/navigation-mobile-menu
docs/update-readme
refactor/service-cards
test/add-button-tests
chore/update-dependencies
```

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic changes)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

**Examples**:
```bash
feat(components): add newsletter subscription component
fix(navigation): resolve mobile menu overlay issue
docs(readme): update installation instructions
refactor(services): extract service card logic
perf(images): optimize hero background image
test(button): add unit tests for Button component
chore(deps): update React to 19.1.0
```

## Coding Standards

### JavaScript/JSX

- Use ES6+ syntax
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Destructure props and imports
- Use template literals for strings

**Good**:
```jsx
const ServiceCard = ({ title, description, features }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <div className="features">
        {features.map(feature => (
          <Badge key={feature}>{feature}</Badge>
        ))}
      </div>
    </Card>
  )
}
```

**Bad**:
```jsx
function ServiceCard(props) {
  var title = props.title
  return (
    <Card>
      <CardTitle>{props.title}</CardTitle>
    </Card>
  )
}
```

### TypeScript (if applicable)

- Define prop types using interfaces
- Use type inference when possible
- Avoid `any` type

```typescript
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  children,
  onClick
}) => {
  // Implementation
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first approach
- Group related utilities
- Use design tokens from `design-tokens.ts`

**Good**:
```jsx
<div className="flex items-center justify-between gap-4 p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow">
  {/* Content */}
</div>
```

**Bad**:
```jsx
<div className="flex gap-4 items-center p-6 justify-between rounded-lg bg-white hover:shadow-xl shadow-md transition-shadow">
  {/* Content */}
</div>
```

### File Organization

```
src/
├── components/
│   └── ui/
│       ├── Button.tsx          # One component per file
│       ├── Card.tsx
│       └── index.ts            # Export barrel (optional)
├── lib/
│   ├── utils.ts                # Utility functions
│   └── design-tokens.ts        # Design system
├── pages/
│   ├── services/
│   │   └── PrivatjetReinigung.jsx
│   └── Blog.jsx
└── hooks/
    └── useScrollPosition.ts    # Custom hooks
```

## Component Guidelines

### Component Structure

```jsx
// 1. Imports
import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

// 2. TypeScript interfaces (if applicable)
interface ServiceCardProps {
  title: string
  description: string
}

// 3. Component definition
const ServiceCard = ({ title, description }: ServiceCardProps) => {
  // 4. Hooks
  const [isExpanded, setIsExpanded] = useState(false)

  // 5. Event handlers
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  // 6. Render
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Button onClick={handleClick}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </Button>
    </Card>
  )
}

// 7. Export
export default ServiceCard
```

### Component Best Practices

1. **Single Responsibility**: Each component should do one thing
2. **Small Components**: Keep components under 200 lines
3. **Reusability**: Design for reuse across the app
4. **Props Validation**: Use TypeScript or PropTypes
5. **Accessibility**: Include ARIA labels and keyboard navigation

### Accessibility Requirements

- Use semantic HTML (`<button>`, `<nav>`, `<main>`)
- Add `aria-label` for icon-only buttons
- Ensure keyboard navigation works
- Maintain color contrast ratio (4.5:1 minimum)
- Include focus indicators

```jsx
// Good
<button
  aria-label="Open menu"
  onClick={handleClick}
  className="focus:ring-2 focus:ring-blue-500"
>
  <MenuIcon />
</button>

// Bad
<div onClick={handleClick}>
  <MenuIcon />
</div>
```

## Git Workflow

### 1. Update Your Fork

```bash
# Add upstream remote (once)
git remote add upstream https://github.com/ORIGINAL_OWNER/bgs-gebaeudeservice.git

# Fetch upstream changes
git fetch upstream

# Merge into your branch
git checkout main
git merge upstream/main
```

### 2. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat(component): add new service card component"
```

### 4. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 5. Create Pull Request

- Go to GitHub
- Click "New Pull Request"
- Fill out PR template
- Request review

## Pull Request Process

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Accessible (keyboard navigation)

## Screenshots (if applicable)
[Add screenshots]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added to complex code
- [ ] Documentation updated
- [ ] No new warnings generated
```

### Review Process

1. **Self-Review**: Review your own PR first
2. **Automated Checks**: Ensure linting passes
3. **Code Review**: Wait for maintainer review
4. **Address Feedback**: Make requested changes
5. **Approval**: PR gets approved
6. **Merge**: Maintainer merges PR

### PR Guidelines

- Keep PRs focused and small
- Write clear descriptions
- Link related issues
- Update documentation
- Add tests if applicable

## Testing Guidelines

### Manual Testing

Before submitting PR:

1. **Functional Testing**:
   - Test all interactive elements
   - Verify forms submit correctly
   - Check navigation works

2. **Responsive Testing**:
   - Mobile (375px - 768px)
   - Tablet (768px - 1024px)
   - Desktop (1024px+)

3. **Browser Testing**:
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

4. **Accessibility Testing**:
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast

### Automated Testing (Future)

When tests are added:

```bash
# Run unit tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run e2e tests
pnpm test:e2e
```

## Documentation

### Code Comments

Add comments for complex logic:

```jsx
// Calculate total area based on room dimensions
const totalArea = rooms.reduce((sum, room) => {
  // Convert square meters to square feet for US clients
  const sqFeet = room.squareMeters * 10.764
  return sum + sqFeet
}, 0)
```

### Component Documentation

Document props and usage:

```jsx
/**
 * Service card component for displaying cleaning services
 *
 * @param {string} title - Service name
 * @param {string} description - Brief service description
 * @param {array} features - List of service features
 * @param {string} category - Service category (premium, b2b, essential)
 *
 * @example
 * <ServiceCard
 *   title="Office Cleaning"
 *   description="Professional office cleaning services"
 *   features={['Daily', 'Eco-friendly', 'Certified']}
 *   category="essential"
 * />
 */
```

### README Updates

Update README.md when:
- Adding new features
- Changing installation process
- Updating dependencies
- Modifying build process

## Questions?

If you have questions:
1. Check existing documentation
2. Search closed issues/PRs
3. Open a new issue with `question` label
4. Contact maintainers

---

Thank you for contributing to BGS Gebäudeservice! 🎉
