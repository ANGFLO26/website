import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Droplets, Mail, MapPin, ExternalLink, Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  // Sticky nav on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { path: '/', label: t('nav.research'), internal: true },
    { path: '/people', label: t('nav.people'), internal: true },
    { path: '/news', label: t('nav.news'), internal: true },
    { path: '/publications', label: t('nav.publications'), internal: true },
    { path: 'https://cee.duytan.edu.vn/', label: t('nav.cee'), internal: false },
    { path: 'https://duytan.edu.vn/', label: t('nav.dtu'), internal: false },
  ]

  return (
    <div className="min-h-screen bg-surface-1 flex flex-col">
      {/* ═══ HEADER ═══ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-dtu-900/95 backdrop-blur-xl shadow-hero'
          : 'bg-gradient-to-r from-dtu-950 via-dtu-900 to-dtu-800'
          }`}
      >
        <div className="container-content py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Group Name */}
            <Link to="/" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:bg-white/[0.12] transition-all duration-300">
                <Droplets className="w-5 h-5 text-dtu-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-body-lg tracking-tight leading-tight">
                  {t('header.groupName')}
                </div>
                <div className="text-dtu-300/80 text-caption font-medium tracking-wide uppercase">
                  {t('header.university')}
                </div>
              </div>
              <div className="sm:hidden">
                <div className="text-white font-bold text-body tracking-tight">
                  {t('header.groupShort')}
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) =>
                item.internal ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link px-4 py-2.5 rounded-lg hover:bg-white/[0.06] ${isActive(item.path) ? 'active text-white' : ''
                      }`}
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link px-4 py-2.5 rounded-lg hover:bg-white/[0.06] inline-flex items-center gap-1"
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                    <ExternalLink className="w-3 h-3 opacity-40" />
                  </a>
                )
              )}
            </div>

            {/* Right side: Language Toggle + DTU Logo + Mobile menu button */}
            <div className="flex items-center gap-3">
              <LanguageToggle />

              <a
                href="https://duytan.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center"
              >
                <img
                  src="/5.Duy-Tan.jpg"
                  alt="Duy Tan University"
                  className="h-8 rounded object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ═══ MOBILE NAV ═══ */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-smooth ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="container-content pb-4 pt-2 space-y-1">
            {navItems.map((item) =>
              item.internal ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-lg text-body-sm font-medium transition-colors ${isActive(item.path)
                    ? 'bg-white/[0.1] text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  style={{ textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-body-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  {item.label}
                  <ExternalLink className="w-3 h-3 opacity-40" />
                </a>
              )
            )}
          </div>
        </div>
      </header>

      {/* ═══ MAIN ═══ */}
      <main className="flex-1">
        {children}
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-dtu-950 text-white/60 mt-auto">
        {/* Top border accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-dtu-400/30 to-transparent" />

        <div className="container-content py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Col 1 — Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-dtu-800/50 flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-dtu-400" />
                </div>
                <span className="text-white font-semibold text-body">{t('footer.groupName')}</span>
              </div>
              <p className="text-body-sm text-white/40 leading-relaxed max-w-xs">
                {t('footer.description')}
              </p>
            </div>

            {/* Col 2 — Links */}
            <div>
              <h4 className="text-white font-semibold text-body-sm uppercase tracking-wider mb-4">
                {t('footer.navigation')}
              </h4>
              <ul className="space-y-2.5">
                {[
                  { to: '/', label: t('nav.research') },
                  { to: '/people', label: t('nav.people') },
                  { to: '/news', label: t('footer.newsEvents') },
                  { to: '/publications', label: t('nav.publications') },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-body-sm text-white/40 hover:text-dtu-300 transition-colors"
                      style={{ textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://scholar.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-white/40 hover:text-dtu-300 transition-colors inline-flex items-center gap-1"
                    style={{ textDecoration: 'none' }}
                  >
                    Google Scholar <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <h4 className="text-white font-semibold text-body-sm uppercase tracking-wider mb-4">
                {t('footer.contact')}
              </h4>
              <ul className="space-y-3 text-body-sm text-white/40">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-dtu-400/60 flex-shrink-0" />
                  <span>{t('footer.address')}<br />{t('footer.location')}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-dtu-400/60 flex-shrink-0" />
                  <span>research@duytan.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-caption text-white/30">
              {t('footer.copyright')}
            </p>
            <p className="text-caption text-white/20">
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
