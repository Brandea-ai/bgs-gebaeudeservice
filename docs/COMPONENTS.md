# Components Documentation

## Component Inventory & Categorization

This document provides a comprehensive overview of all components in the `src/components` directory, categorized by type and analyzing their framework usage.

---

## Summary Statistics

- **Total Components**: 48
- **Layout Components**: 2
- **UI Components**: 46
- **Section Components**: 1
- **Framer Motion Usage**: 0 components
- **Tailwind CSS Usage**: 48 components (100%)

---

## 1. Layout Components

Layout components control the overall structure and navigation of the application.

### Navigation.jsx
- **Type**: Layout Component
- **Purpose**: Main navigation bar with dropdown menu system
- **Framer Motion**: ❌ No
- **Tailwind CSS**: ✅ Yes
- **Key Features**:
  - Fixed header with backdrop blur
  - Mega dropdown menu with 3-column service categories (Premium, Standard B2B, Essentiell)
  - Mobile responsive with hamburger menu
  - Service categorization with hover states
  - React Router integration
- **Dependencies**: `lucide-react`, `@/components/ui/button.jsx`

### Navigation-FIXED.jsx
- **Type**: Layout Component
- **Purpose**: Fixed version of navigation (appears identical to Navigation.jsx)
- **Framer Motion**: ❌ No
- **Tailwind CSS**: ✅ Yes
- **Note**: Duplicate/backup file of Navigation.jsx

### Footer.jsx
- **Type**: Layout Component
- **Purpose**: Site footer with contact information and links
- **Framer Motion**: ❌ No
- **Tailwind CSS**: ✅ Yes
- **Key Features**:
  - 4-column grid layout
  - Company info with ISO 9001 and CO₂-neutral badges
  - Service links organized by category
  - Contact information display
  - Copyright and UID information
- **Dependencies**: `lucide-react`, `@/components/ui/badge.jsx`

---

## 2. Section Components

Section components represent major content areas or features.

### LiveDashboard.jsx
- **Type**: Section Component
- **Purpose**: Real-time KI Analytics Dashboard with live data visualization
- **Framer Motion**: ❌ No
- **Tailwind CSS**: ✅ Yes
- **Key Features**:
  - Live data updates every 3 seconds
  - 4 KPI cards (Active Projects, Efficiency Rate, Cost Savings, System Uptime)
  - Multiple chart types: Line chart, Pie chart, Area chart
  - Uses Recharts library for data visualization
  - Responsive grid layout
- **Dependencies**: `recharts`, `lucide-react`, `@/components/ui/card.jsx`, `@/components/ui/badge.jsx`

---

## 3. UI Components (46 components)

All UI components are located in `src/components/ui/` and provide reusable interface elements based on Radix UI and shadcn/ui.

### Core UI Components

| Component | Purpose | Framer Motion | Tailwind CSS | Dependencies |
|-----------|---------|---------------|--------------|--------------|
| **accordion.jsx** | Collapsible content sections | ❌ | ✅ | @radix-ui/react-accordion |
| **alert-dialog.jsx** | Modal dialog for confirmations | ❌ | ✅ | @radix-ui/react-alert-dialog |
| **alert.jsx** | Notification/alert messages | ❌ | ✅ | - |
| **aspect-ratio.jsx** | Maintain aspect ratios | ❌ | ✅ | @radix-ui/react-aspect-ratio |
| **avatar.jsx** | User profile images | ❌ | ✅ | @radix-ui/react-avatar |
| **badge.jsx** | Status/label badges | ❌ | ✅ | @radix-ui/react-slot, class-variance-authority |
| **breadcrumb.jsx** | Navigation breadcrumbs | ❌ | ✅ | - |
| **button.jsx** | Interactive buttons | ❌ | ✅ | @radix-ui/react-slot, class-variance-authority |
| **calendar.jsx** | Date picker calendar | ❌ | ✅ | @radix-ui/react-calendar |
| **card.jsx** | Container cards | ❌ | ✅ | - |
| **carousel.jsx** | Image/content carousel | ❌ | ✅ | embla-carousel-react |
| **chart.jsx** | Chart components | ❌ | ✅ | recharts |
| **checkbox.jsx** | Checkbox inputs | ❌ | ✅ | @radix-ui/react-checkbox |
| **collapsible.jsx** | Collapsible content | ❌ | ✅ | @radix-ui/react-collapsible |
| **command.jsx** | Command palette/menu | ❌ | ✅ | @radix-ui/react-command |
| **context-menu.jsx** | Right-click context menu | ❌ | ✅ | @radix-ui/react-context-menu |
| **dialog.jsx** | Modal dialogs | ❌ | ✅ | @radix-ui/react-dialog |
| **drawer.jsx** | Slide-out drawer | ❌ | ✅ | @radix-ui/react-drawer |
| **dropdown-menu.jsx** | Dropdown menus | ❌ | ✅ | @radix-ui/react-dropdown-menu |
| **form.jsx** | Form components | ❌ | ✅ | @radix-ui/react-form |
| **hover-card.jsx** | Hover preview cards | ❌ | ✅ | @radix-ui/react-hover-card |
| **input.jsx** | Text input fields | ❌ | ✅ | - |
| **input-otp.jsx** | OTP/PIN input | ❌ | ✅ | input-otp |
| **label.jsx** | Form labels | ❌ | ✅ | @radix-ui/react-label |
| **menubar.jsx** | Menu bar navigation | ❌ | ✅ | @radix-ui/react-menubar |
| **navigation-menu.jsx** | Navigation menu | ❌ | ✅ | @radix-ui/react-navigation-menu |
| **pagination.jsx** | Pagination controls | ❌ | ✅ | - |
| **popover.jsx** | Popover overlays | ❌ | ✅ | @radix-ui/react-popover |
| **progress.jsx** | Progress bars | ❌ | ✅ | @radix-ui/react-progress |
| **radio-group.jsx** | Radio button groups | ❌ | ✅ | @radix-ui/react-radio-group |
| **resizable.jsx** | Resizable panels | ❌ | ✅ | react-resizable-panels |
| **scroll-area.jsx** | Custom scrollbars | ❌ | ✅ | @radix-ui/react-scroll-area |
| **select.jsx** | Select dropdowns | ❌ | ✅ | @radix-ui/react-select |
| **separator.jsx** | Visual separators | ❌ | ✅ | @radix-ui/react-separator |
| **sheet.jsx** | Side sheet/panel | ❌ | ✅ | @radix-ui/react-sheet |
| **sidebar.jsx** | Sidebar navigation | ❌ | ✅ | - |
| **skeleton.jsx** | Loading skeletons | ❌ | ✅ | - |
| **slider.jsx** | Range slider inputs | ❌ | ✅ | @radix-ui/react-slider |
| **sonner.jsx** | Toast notifications | ❌ | ✅ | sonner |
| **switch.jsx** | Toggle switches | ❌ | ✅ | @radix-ui/react-switch |
| **table.jsx** | Data tables | ❌ | ✅ | - |
| **tabs.jsx** | Tab navigation | ❌ | ✅ | @radix-ui/react-tabs |
| **textarea.jsx** | Multi-line text input | ❌ | ✅ | - |
| **toggle.jsx** | Toggle buttons | ❌ | ✅ | @radix-ui/react-toggle |
| **toggle-group.jsx** | Toggle button groups | ❌ | ✅ | @radix-ui/react-toggle-group |
| **tooltip.jsx** | Tooltips | ❌ | ✅ | @radix-ui/react-tooltip |

---

## Framework Analysis

### Framer Motion Usage
**Result**: No components use Framer Motion

- No `framer-motion` imports found in any component
- Animation is handled through:
  - Tailwind CSS transition classes
  - Radix UI built-in animations
  - CSS animations (`animate-pulse`, `animate-accordion-up`, etc.)

### Tailwind CSS Usage
**Result**: 100% of components use Tailwind CSS

All 48 components extensively use Tailwind CSS for styling through:
- Utility classes (`flex`, `grid`, `px-4`, `py-2`, etc.)
- Responsive modifiers (`md:`, `lg:`, `sm:`)
- State modifiers (`hover:`, `focus:`, `disabled:`, `data-[state=open]:`)
- Custom theme colors (`bg-primary`, `text-primary-foreground`)
- The `cn()` utility function from `@/lib/utils` for class merging

### UI Library Foundation
All UI components are based on:
- **Radix UI**: Unstyled, accessible primitives
- **shadcn/ui**: Design system built on Radix UI
- **class-variance-authority (cva)**: For variant-based styling
- **Tailwind CSS**: For styling implementation

---

## Design System Patterns

### Color Scheme
- **Primary**: `#0A2540` (Dark blue)
- **Premium**: `#C5A572` (Gold)
- **Standard**: `#0A2540` (Dark blue)
- **Essentiell**: `#10B981` (Green)

### Common Patterns
1. **Accessibility**: All components use proper ARIA attributes
2. **Dark Mode**: Dark mode support through Tailwind's `dark:` modifier
3. **Responsive Design**: Mobile-first with responsive breakpoints
4. **State Management**: React hooks (useState, useRef, useEffect)
5. **Focus Management**: Focus-visible states with ring utilities
6. **Transitions**: Smooth transitions on hover/focus states

---

## Recommendations

1. **Framer Motion Integration**: Consider adding Framer Motion for more complex animations if needed
2. **Component Documentation**: Add JSDoc comments to components for better IDE support
3. **Storybook**: Consider setting up Storybook for component documentation and testing
4. **Component Testing**: Add unit tests for critical components
5. **Navigation Cleanup**: Remove duplicate `Navigation-FIXED.jsx` if not needed

---

*Generated: 2025-10-07*
*Total Components Analyzed: 48*
