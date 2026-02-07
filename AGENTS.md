# Interfacial Water Group Website

## Project Overview

Website for the "Interfacial Water Group" research group at Duy Tan University, cloned from Princeton University's research group website design (https://bourg.princeton.edu/index.html).

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Inline table-based layout (matching Princeton's HTML structure)
- **UI Components**: shadcn/ui (available but not actively used)
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Project Structure

```
app/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Root component with routing
│   ├── index.css             # Global styles + Tailwind directives
│   ├── App.css               # App-specific styles
│   ├── lib/
│   │   └── utils.ts          # Utility functions (cn helper)
│   ├── hooks/
│   │   └── use-mobile.ts     # Mobile detection hook
│   ├── components/
│   │   ├── Layout.tsx        # Main layout with Princeton-style header/nav
│   │   └── ui/               # shadcn/ui components (50+ components available)
│   └── pages/
│       ├── Home.tsx          # Research page (homepage) - table-based layout
│       ├── People.tsx        # Group members page - table-based layout
│       ├── News.tsx          # News & events page
│       └── Publications.tsx  # Scientific publications page
├── dist/                     # Build output directory
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
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
| `/people` | People | Current and previous group members |
| `/news` | News | News and events |
| `/publications` | Publications | Scientific publications list |

## Layout Components

### Layout.tsx

**Header Structure (Princeton-style):**
- Table-based layout with 3 columns: Logo (270px) | Empty (270px) | School Name (270px)
- Black separator bar (8px height)
- Max width: 810px (centered)

**Navigation Bar:**
- Black background (#000000)
- 6 navigation items equally spaced (~135px each)
- White text, Arial font, bold
- Hover effect: gray-800 background
- External links (CEE, HMEI) open in new tab

## Styling Conventions

### Typography (Matching Princeton)
- **Font Family**: Arial, Helvetica, sans-serif (NOT Georgia/Times)
- **Base Font Size**: 14px (equivalent to SIZE=-0 in HTML)
- **Headings**: Arial bold, various sizes
- **Text Alignment**: Justify for paragraphs

### Font Size Mapping
| HTML Size | CSS Equivalent | Usage |
|-----------|----------------|-------|
| SIZE=+3 | text-2xl (~24px) | Page title ("Interfacial Water Group") |
| SIZE=+2 | text-xl (~20px) | Person name ("Ian C. Bourg") |
| SIZE=+1 | text-lg (~18px) | Section headings ("Research Goals") |
| SIZE=-0 | text-sm (~14px) | Body text, default |

### Colors
| Element | Color | Hex Code |
|---------|-------|----------|
| Links | SteelBlue | #4682B4 |
| Links Hover | SteelBlue + underline | #4682B4 |
| Navigation Text | White | #FFFFFF |
| Navigation BG | Black | #000000 |
| Body Text | Black | #000000 |
| Background | White | #FFFFFF |

### Layout Specifications
- **Max Width**: 810px (centered)
- **Profile Section**: Table with columns 270px | 5px | 260px | 5px | 260px
- **Photo Sizes**: 
  - Personal photo: 270px width
  - Group photo: 260px x 260px
  - Member thumbnails: 96px x 96px (w-24)
  - Previous member thumbnails: 64px x 64px (w-16)

## Page Content Structure

### Home Page
**Profile Section:**
- Left: Personal photo (270px)
- Middle: Name (SIZE=+2), Title (italic), Department info, CV link
- Right: Group photo (260x260)

**Content Sections:**
- Research Goals
- Methods
- Current Research (4 research areas with italic subtitles)
- Each area has "References" link

### People Page
**Current Members:**
- Professor (single column)
- Research Scholar (single column)
- PhD Students (2-column grid)
- Undergraduate RAs (2-column grid)

**Previous Members (2015-2024):**
- 2-column table layout
- Small photos (64x64) + name + position

**Previous Members (2009-2014):**
- Text-only list

**Visiting Students:**
- Text-only list

### News Page
- Chronological list (newest first)
- Date + Event title (bold)
- Description (justify text)
- Links where applicable

### Publications Page
- Google Scholar link at top
- Organized by year (2025 → 2022)
- "In preparation" section at top
- Citation format: Authors. Title. *Journal* Volume, <a>Pages</a> (Year).

## HTML Structure Notes

The website uses **table-based layout** to exactly match Princeton's original HTML structure:

```tsx
<table className="w-full border-0" cellPadding="0" cellSpacing="0">
  <tbody>
    <tr>
      <td width="270">...</td>
      <td width="5"></td>
      <td width="260">...</td>
    </tr>
  </tbody>
</table>
```

This is intentional to replicate the original website's look and feel.

## Assets

Static images referenced:
- `/5.Duy-Tan.jpg` - Duy Tan University logo
- `/asset_1.jpg` - Professor's photo (270px)
- `/asset_2.jpg` - Group photo (260x260)

Original assets stored in `/assets/` directory at project root.

## Configuration Files

### tailwind.config.js
- Content paths for Vite project
- Custom colors using HSL
- Custom animations

### tsconfig.json
- Path alias: `@/*` → `./src/*`
- References to app and node configs

### components.json
- shadcn/ui style: "new-york"
- Base color: slate
- Icon library: lucide
- TypeScript enabled

## Development Notes

### Key Differences from Original Princeton Site
1. **Framework**: React SPA vs static HTML
2. **Routing**: Client-side routing vs separate HTML files
3. **Build**: Vite build system

### Data to Replace for Duy Tan University
When customizing for Duy Tan:

1. **Logo**: Replace `/5.Duy-Tan.jpg` with official Duy Tan logo
2. **Photos**: 
   - Replace `/asset_1.jpg` with actual professor photo
   - Replace `/asset_2.jpg` with actual group photo
3. **Content**: Update all text content in:
   - `Home.tsx` - Research info, professor details
   - `People.tsx` - Member list
   - `News.tsx` - News items
   - `Publications.tsx` - Publications
4. **Links**: Update external links (CEE, HMEI) to Duy Tan equivalents
5. **Footer**: Update copyright text

### Future Improvements
- Add image rotation/carousel for group photos
- Add expandable "References" sections with JavaScript
- Add responsive mobile layout (currently desktop-only)
- Add dark mode toggle
- Integrate with CMS for dynamic content
