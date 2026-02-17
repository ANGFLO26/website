# Interfacial Water Group Website

## Project Overview

Website for the "Interfacial Water Group" research group at Duy Tan University. The design has been modernized from the original Princeton-inspired layout to a contemporary, accessible design with the official Duy Tan University color scheme.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS components
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui (50+ components available)
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Internationalization**: Custom React Context-based i18n (EN/VI)

## Project Structure

```
app/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Root component with routing + animations
│   ├── index.css             # Global styles + Tailwind directives + custom CSS
│   ├── lib/
│   │   └── utils.ts          # Utility functions (cn helper)
│   ├── hooks/
│   │   ├── use-mobile.ts     # Mobile detection hook
│   │   └── useScrollAnimation.ts  # Scroll animation hooks
│   ├── contexts/
│   │   └── LanguageContext.tsx  # i18n context provider
│   ├── translations/
│   │   ├── en.ts             # English translations
│   │   └── vi.ts             # Vietnamese translations
│   ├── components/
│   │   ├── Layout.tsx        # Main layout with header/nav/footer
│   │   ├── LanguageToggle.tsx # EN/VI language switch
│   │   ├── PageTransition.tsx # Page transition animations
│   │   ├── BackToTop.tsx     # Back to top button
│   │   ├── ReadingProgress.tsx # Reading progress bar
│   │   ├── Skeleton.tsx      # Skeleton loading components
│   │   └── ui/               # shadcn/ui components
│   └── pages/
│       ├── Home.tsx          # Homepage with research overview
│       ├── People.tsx        # Team members page
│       ├── News.tsx          # News & events page
│       └── Publications.tsx  # Publications page
├── public/                   # Static assets
│   ├── 5.Duy-Tan.jpg        # DTU logo (used in footer/reference)
│   ├── asset_1.jpg          # Professor photo
│   └── asset_2.jpg          # Group photo
├── dist/                     # Build output
├── tailwind.config.js        # Tailwind configuration
└── components.json           # shadcn/ui configuration
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Research overview, profile, research goals |
| `/people` | People | Current and alumni group members |
| `/news` | News | News and events timeline |
| `/publications` | Publications | Scientific publications list |

## Design System

### Color Palette (Duy Tan University Official)

| Name | Color | Hex | Usage |
|------|-------|-----|-------|
| **DTU Red** | ![#C8102E](https://via.placeholder.com/20/C8102E/C8102E.png) | `#C8102E` | Primary brand color, buttons, accents |
| **DTU Red 700** | ![#B91C1C](https://via.placeholder.com/20/B91C1C/B91C1C.png) | `#B91C1C` | Hover states, active nav |
| **DTU Red 800** | ![#991B1B](https://via.placeholder.com/20/991B1B/991B1B.png) | `#991B1B` | Darker accents |
| **Gray 900** | ![#111827](https://via.placeholder.com/20/111827/111827.png) | `#111827` | Headings, primary text |
| **Gray 700** | ![#374151](https://via.placeholder.com/20/374151/374151.png) | `#374151` | Body text |
| **Gray 600** | ![#4B5563](https://via.placeholder.com/20/4B5563/4B5563.png) | `#4B5563` | Secondary text |
| **White** | ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF.png) | `#FFFFFF` | Backgrounds, text on dark |

### Typography

- **Font Family**: Inter, Be Vietnam Pro (for Vietnamese), system-ui
- **Base Size**: 15px
- **Line Height**: 1.7 (1.75 for Vietnamese)

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Display | 3.5rem (56px) | 800 | Hero title |
| H1 | 2.25rem (36px) | 700 | Page titles |
| H2 | 1.75rem (28px) | 700 | Section headings |
| H3 | 1.25rem (20px) | 600 | Card titles |
| Body | 0.9375rem (15px) | 400 | Paragraphs |
| Caption | 0.75rem (12px) | 600 | Labels, badges |

### Layout Specifications

- **Max Width**: 960px (`max-w-content`)
- **Container Padding**: `px-5 sm:px-6 lg:px-8`
- **Section Spacing**: `py-14` (56px) or `py-16` (64px)
- **Grid Gaps**: `gap-6` (24px)

## Components

### Layout.tsx

**Header:**
- Sticky header with white background
- Gradient red background for hero sections only
- Logo + Group Name | Navigation | Language Toggle
- Mobile hamburger menu with smooth animations

**Navigation:**
- 5 items: Research, People, News, Publications, CEE
- Active state: red text + red-50 background
- Hover: red text + red-50 background
- External link (CEE) opens in new tab

**Footer:**
- Dark background (gray-900)
- 3-column layout: Brand, Links, Contact
- Red accent for icons and links

### Animation Components

**PageTransition.tsx**
- Wraps all page content
- Fade + slide animation on route change
- Duration: 400ms, Easing: ease-smooth

**BackToTop.tsx**
- Appears after scrolling 500px
- Fixed position bottom-right
- Red background, white arrow
- Smooth scroll to top on click

**ReadingProgress.tsx**
- Fixed at top of viewport
- Shows scroll progress (0-100%)
- Red gradient bar

## Page Content Structure

### Home Page

**Hero Section:**
- Gradient red background (DTU colors)
- Animated background elements (floating orbs)
- Title + Subtitle + Stats row
- Stats: Publications (17+), Members (8), Research Areas (4)

**Profile Card:**
- Professor photo (left)
- Name, Title, Department info (center)
- Group photo (right, desktop only)
- CV download button

**Research Goals:**
- Full-width section
- Justified text

**Methods (Collapsible):**
- Expandable section
- Summary + Detail content
- Smooth height animation

**Current Research (4 cards):**
- 2x2 grid on desktop
- Each card: Icon, Title, Summary, expandable Details
- Color-coded icons (amber, red, emerald, purple)

### People Page

**Current Members:**
- 4-column grid (1 col mobile, 2 col tablet, 4 col desktop)
- Avatar with gradient background
- Name, Role, Role badge
- Role colors: Professor (red), Research Scholar (red-50), PhD Student (gray), Undergraduate (amber)

**Alumni Sections:**
- 2015-2024: Card layout with initials avatar
- 2009-2014: List layout
- Visiting Students: List layout

### News Page

**Timeline Layout:**
- Vertical timeline with dots
- Year badges (red)
- Monthly date labels
- Expandable cards with hover effect

### Publications Page

**Stats Bar:**
- Total papers count
- Unique journals count
- Year range

**In Preparation Section:**
- Grayed out, reduced opacity
- Listed at top

**By Year:**
- Grouped by year (descending)
- Year badge (red)
- Paper count per year
- Journal badges (color-coded by journal type)
- DOI links

## Animation System

### Scroll Animations (Framer Motion)

All sections use `whileInView` animations:
- **Initial**: `opacity: 0, y: 30`
- **Animate**: `opacity: 1, y: 0`
- **Duration**: 0.5-0.6s
- **Easing**: `[0.22, 1, 0.36, 1]` (ease-smooth)
- **Stagger**: 0.1s delay between items

### Hover Effects

- Cards: `translateY(-4px)` + shadow increase
- Buttons: Background darken + slight lift
- Links: Color change to red
- Nav items: Background highlight

### Page Transitions

- Fade out: `opacity: 0, y: -20`
- Fade in: `opacity: 1, y: 0`
- Duration: 400ms
- Mode: `wait` (exit before enter)

## Internationalization (i18n)

### Supported Languages
- English (EN) - default
- Vietnamese (VI)

### Translation Files
- `translations/en.ts` - English strings
- `translations/vi.ts` - Vietnamese strings

### Usage
```tsx
const { t } = useLanguage()
<h1>{t('home.heroTitle1')}</h1>
```

### Language Toggle
- Located in header (right side)
- Globe icon + "EN"/"VI" text
- Smooth slide animation
- Persists to localStorage

## Assets

### Required Images
| File | Description | Dimensions |
|------|-------------|------------|
| `/asset_1.jpg` | Professor photo | Square, 270px+ |
| `/asset_2.jpg` | Group photo | Square, 260px+ |
| `/5.Duy-Tan.jpg` | DTU Logo | Reference only |

### Fonts
- Inter (Latin characters)
- Be Vietnam Pro (Vietnamese characters)
- Loaded from Google Fonts

## Development Guidelines

### Adding a New Page
1. Create component in `pages/`
2. Add route in `App.tsx`
3. Add navigation item in `Layout.tsx` navItems
4. Add translations in `en.ts` and `vi.ts`

### Color Usage
- Use `dtu-red` colors for brand elements
- Use `gray` scale for text (not `neutral`)
- Use `red-50` for light backgrounds/hovers

### Animation Best Practices
- Use `whileInView` for scroll animations
- Set `viewport={{ once: true }}` to animate only once
- Use consistent easing: `[0.22, 1, 0.36, 1]`
- Keep durations between 300-600ms

### Code Cleanup
- Remove unused imports
- Delete dead code
- Keep translation keys synchronized
- Run `npm run lint` before committing

## Future Improvements

- [ ] Add actual professor and group photos
- [ ] Connect to CMS for dynamic content
- [ ] Add search functionality
- [ ] Add filter for publications
- [ ] Add photo gallery/lightbox
- [ ] Add contact form
- [ ] Add newsletter signup
- [ ] SEO optimization (meta tags, structured data)
- [ ] Performance optimization (image lazy loading)
- [ ] Accessibility audit (WCAG 2.1 AA)

## Changelog

### 2025-02-17
- ✅ Redesigned header with white background
- ✅ Updated to DTU official color palette (#C8102E)
- ✅ Added Framer Motion animations throughout
- ✅ Added PageTransition, BackToTop, ReadingProgress components
- ✅ Improved text contrast and readability
- ✅ Cleaned up unused code and dependencies
- ✅ Removed unused logo files
- ✅ Fixed translation inconsistencies
