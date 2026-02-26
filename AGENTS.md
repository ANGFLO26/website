# Thermophysics Modeling and Simulation Group Website

## Project Overview

Website for the **Thermophysics Modeling and Simulation Group** at Duy Tan University. Built with React + TypeScript, featuring a modern DTU-branded design with bilingual support (English/Vietnamese).

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 19 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS + Custom CSS | Styling & design tokens |
| Framer Motion | Animations & page transitions |
| React Router DOM | Client-side routing (BrowserRouter) |
| Lucide React | Icon system |
| Custom i18n (React Context) | Internationalization (EN/VI) |

## Project Structure

```
website/
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite config (base: './', path alias @→src)
├── vercel.json                 # Vercel SPA rewrite rules
├── tailwind.config.js          # Tailwind + DTU color palette + animations
├── tsconfig.json               # TypeScript config (references app + node)
├── tsconfig.app.json           # TS config for src/
├── tsconfig.node.json          # TS config for node tooling
├── postcss.config.js           # PostCSS (Tailwind + autoprefixer)
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies & scripts
│
├── src/
│   ├── main.tsx                # App entry → renders <App />
│   ├── App.tsx                 # Root: LanguageProvider → BrowserRouter → Layout → AnimatedRoutes
│   ├── index.css               # Tailwind directives + design tokens + component styles
│   ├── App.css                 # Legacy styles (unused)
│   │
│   ├── contexts/
│   │   ├── LanguageContext.tsx  # i18n provider (EN/VI), localStorage persistence
│   │   └── useLanguage.ts      # Hook to consume LanguageContext
│   │
│   ├── translations/
│   │   ├── en.ts               # English strings (~97 keys)
│   │   └── vi.ts               # Vietnamese strings (~97 keys)
│   │
│   ├── components/
│   │   ├── Layout.tsx          # Header (sticky, mobile menu) + Footer (3-col)
│   │   ├── LanguageToggle.tsx  # EN/VI switch button with slide animation
│   │   ├── PageTransition.tsx  # AnimatePresence wrapper for route transitions
│   │   ├── BackToTop.tsx       # Floating scroll-to-top button (appears >500px)
│   │   └── ReadingProgress.tsx # Top reading progress bar (red gradient)
│   │
│   ├── pages/
│   │   ├── Home.tsx            # Hero + Profile + Research Goals + Methods + Current Research
│   │   ├── People.tsx          # Current Members + Alumni + Visiting Students
│   │   ├── News.tsx            # Timeline of news & events
│   │   └── Publications.tsx    # Publication list grouped by year
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # IntersectionObserver + smooth scroll hooks
│   │
│   └── lib/
│       └── utils.ts            # cn() helper (clsx + tailwind-merge)
│
├── public/
│   ├── asset_1.jpg             # Professor photo
│   ├── asset_2.jpg             # Group photo
│   ├── 5.Duy-Tan.jpg           # DTU campus photo
│   ├── dtu_logo.png            # DTU logo
│   └── princeton_logo.png      # Reference logo
│
└── document/                   # Project documentation & data collection files
```

## Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Hero, profile card, research goals, methods, current research |
| `/people` | `People` | Team members (current, alumni, visiting students) |
| `/news` | `News` | News & events timeline |
| `/publications` | `Publications` | Publications by year with journal badges |

**Important**: Uses `BrowserRouter` — requires `vercel.json` rewrite rules for Vercel deployment.

## Design System

### Color Palette (DTU Official)

| Token | Hex | Usage |
|-------|-----|-------|
| `dtu-red-600` | `#DC2626` | Primary buttons, accents |
| `dtu-red-700` / `#C8102E` | Brand red, hover states |
| `dtu-red-800` | `#991B1B` | Dark accents, hero gradients |
| `gray-900` | `#111827` | Headings |
| `gray-700` | `#374151` | Body text |
| `surface-1` / `surface-2` | `#FAFBFC` / `#F5F6F8` | Background surfaces |

### Typography

| Style | Size | Weight | Class |
|-------|------|--------|-------|
| Display | 3.5rem | 800 | `text-display` |
| H1 | 2.25rem | 700 | `text-h1` |
| H2 | 1.75rem | 700 | `text-h2` |
| H3 | 1.25rem | 600 | `text-h3` |
| Body | 0.9375rem | 400 | `text-body` |
| Body SM | 0.8125rem | 400 | `text-body-sm` |
| Caption | 0.75rem | 500 | `text-caption` |

**Fonts**: Inter (Latin) + Be Vietnam Pro (Vietnamese) from Google Fonts.

### Layout

- **Max Width**: `960px` (`container-content` class)
- **Padding**: `px-5 sm:px-6 lg:px-8`
- **Section Spacing**: `py-14` to `py-16`

## Animation Patterns

All animations use Framer Motion with consistent parameters:

```tsx
// Standard scroll reveal
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-50px' }}
transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}

// Staggered items
transition={{ duration: 0.4, delay: index * 0.08 }}

// Card hover
whileHover={{ y: -4 }}
```

## Internationalization

- **Provider**: `LanguageContext` wraps entire app
- **Hook**: `useLanguage()` → `{ language, setLanguage, t }`
- **Persistence**: `localStorage` key `iwg-lang`
- **Fallback**: Missing VI key → EN key → raw key string
- **Toggle**: `LanguageToggle` component in header

```tsx
const { t } = useLanguage()
<h1>{t('home.heroTitle1')}</h1>
```

## Development

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # TypeScript check + Vite production build
npm run lint      # ESLint check
npm run preview   # Preview production build
```

### Adding a New Page

1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx` inside `<Routes>`
3. Add nav item in `src/components/Layout.tsx` `navItems` array
4. Add translation keys in `src/translations/en.ts` and `vi.ts`

### Code Conventions

- Use `dtu-red-*` colors for brand elements
- Use `text-body`, `text-h2` etc. for typography (not raw sizes)
- Animations: consistent easing `[0.22, 1, 0.36, 1]`, 300-600ms duration
- All user-facing text through `t()` function
- Components: named exports for utilities, default exports for pages

---

## Recent Updates (February 2026)

### Major Content Update
- **Profile**: Complete profile update with Dr. Hoang Hai's information from CV
  - Name, title, birth date/place, contact info
  - Education: PhD Physics (Pau, 2013), MS Mechanical Engineering (Dong A, 2009), BS Aerospace Engineering (HCMUT, 2007)
  - PhD & Master thesis titles
  - Languages: English (fluent), French (fluent)
  - Work experience: Postdoc at University of Pau (2013-2018), Head of Computational & Simulation Group at Duy Tan University (2018-present)
  - 3 national-level research grants (2 as PI, 1 as participant)
- **Publications**: Added all 43 publications from CV (2009-2026)
- **Assets**: New profile photo (`leader.jpg`)

### Layout Improvements
- **Profile Section**: Changed from 3-column to 2-column layout (removed group photo)
- **Navigation**: Even distribution of 5 nav items with flex-1
- **Publications Page**: 
  - Reduced card padding (p-5 → p-4) and spacing (space-y-3 → space-y-2)
  - Simplified journal badge colors from 10+ to 5 categories
- **People Page**: Reduced member card padding (p-6 → p-4) and gaps
- **News Page**: Reduced year badge size and timeline item padding (p-4 → p-3)
- **Footer**: Fixed email alignment for both addresses

### Bug Fixes
- Fixed publication year errors (2024 → 2023 for specific paper)
- Reordered publications chronologically
- Updated stats counter (17+ → 43 publications)
- Fixed email display alignment in footer

### New Files
- `document/CHECKLIST_DATA_MISSING.md` - Data collection checklist
- `document/Ly lich khoa hoc -ThayHai-2026.md` - CV source document
- `public/leader.jpg` - New profile photo
