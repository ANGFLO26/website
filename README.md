# Interfacial Water Research Group — Website

> Official website for the Interfacial Water Group at **Duy Tan University**, Vietnam.

## ✨ Features

- 🎨 **Modern DTU-branded design** — Official color palette with premium aesthetics
- 🌏 **Bilingual** — Full English & Vietnamese support with one-click toggle
- ⚡ **Fast & Responsive** — Vite-powered SPA, mobile-first responsive design
- 🎬 **Smooth animations** — Framer Motion page transitions, scroll reveals, hover effects
- 📖 **4 Pages** — Research, People, News & Events, Publications

## 🛠 Tech Stack

- **React 19** + **TypeScript** — Type-safe UI development
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Framer Motion** — Production-grade animations
- **React Router DOM** — Client-side SPA routing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/ANGFLO26/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server starts at **http://localhost:5173**.

### Build for Production

```bash
npm run build
```

Output is generated in `dist/`.

## 📁 Project Structure

```
src/
├── main.tsx                 # Entry point
├── App.tsx                  # Root component (routing, providers)
├── index.css                # Global styles & design tokens
├── contexts/                # React Context providers
│   ├── LanguageContext.tsx   # i18n provider (EN/VI)
│   └── useLanguage.ts       # Language hook
├── translations/            # Locale strings
│   ├── en.ts                # English
│   └── vi.ts                # Vietnamese
├── components/              # Shared components
│   ├── Layout.tsx           # Header + Footer
│   ├── LanguageToggle.tsx   # Language switch
│   ├── PageTransition.tsx   # Route animations
│   ├── BackToTop.tsx        # Scroll-to-top
│   └── ReadingProgress.tsx  # Progress bar
├── pages/                   # Route pages
│   ├── Home.tsx             # Research overview
│   ├── People.tsx           # Team members
│   ├── News.tsx             # News timeline
│   └── Publications.tsx     # Publication list
├── hooks/                   # Custom hooks
└── lib/                     # Utilities
```

## 🌐 Deployment

Deployed on **Vercel** with SPA rewrite rules (`vercel.json`).

```bash
# Push to main branch triggers auto-deploy
git push origin main
```

### Vercel Configuration

The `vercel.json` file rewrites all routes to `index.html` for client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## 📄 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev | `npm run dev` | Start development server |
| Build | `npm run build` | TypeScript check + production build |
| Lint | `npm run lint` | Run ESLint |
| Preview | `npm run preview` | Preview production build |

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` and `npm run build` to verify
4. Push and create a Pull Request

## 📝 License

© 2025 Interfacial Water Research Group · Duy Tan University. All rights reserved.
