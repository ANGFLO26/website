import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Droplets, Mail, MapPin, ExternalLink, Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/useLanguage'
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
    // Close menu when route changes using requestAnimationFrame to avoid cascading renders
    const rafId = requestAnimationFrame(() => {
      setMobileOpen(false)
    })
    return () => cancelAnimationFrame(rafId)
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
  ]

  return (
    <div className="min-h-screen bg-surface-1 flex flex-col">
      {/* ═══ HEADER ═══ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-gray-200'
          : 'bg-white border-gray-100'
          }`}
      >
        <div className="container-content py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Group Name */}
            <Link to="/" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
              <div className="w-10 h-10 rounded-xl bg-dtu-red-600 flex items-center justify-center group-hover:bg-dtu-red-700 transition-all duration-300 shadow-md">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-gray-900 font-bold text-body-lg tracking-tight leading-tight">
                  {t('header.groupName')}
                </div>
                <div className="text-dtu-red-600 text-caption font-semibold tracking-wide uppercase">
                  {t('header.university')}
                </div>
              </div>
              <div className="sm:hidden">
                <div className="text-gray-900 font-bold text-body tracking-tight">
                  {t('header.groupShort')}
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-3" role="navigation" aria-label="Main navigation">
              {navItems.map((item) =>
                item.internal ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-gray-700 font-semibold text-body-sm tracking-wide hover:text-dtu-red-600 hover:bg-red-50 transition-all min-h-[44px] flex items-center ${isActive(item.path) ? 'text-dtu-red-600 bg-red-50' : ''
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
                    className="px-4 py-2 rounded-lg text-gray-600 font-semibold text-body-sm tracking-wide hover:text-dtu-red-600 hover:bg-red-50 transition-all min-h-[44px] flex items-center gap-1.5"
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                )
              )}
            </nav>

            {/* Right side: Language Toggle + Mobile menu button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageToggle />

              {/* Mobile hamburger - Increased touch target */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-3 rounded-lg text-gray-600 hover:text-dtu-red-600 hover:bg-red-50 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ═══ MOBILE NAV ═══ */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-smooth bg-white border-b border-gray-200 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container-content py-3 space-y-1">
            {navItems.map((item, index) =>
              item.internal ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-body font-semibold transition-all min-h-[48px] text-gray-700 ${isActive(item.path)
                    ? 'bg-red-50 text-dtu-red-600'
                    : 'hover:bg-gray-50'
                    }`}
                  style={{ textDecoration: 'none', animationDelay: `${index * 50}ms` }}
                >
                  <span className="w-2 h-2 rounded-full bg-dtu-red-500 shadow-sm"></span>
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-body font-semibold text-gray-700 hover:bg-gray-50 transition-all min-h-[48px]"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                  {item.label}
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
      <footer className="bg-gray-900 text-white/80 mt-auto">
        {/* Top border accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-dtu-red-500/40 to-transparent" />

        <div className="container-content py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Col 1 — Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-dtu-red-800/50 flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-dtu-red-400" />
                </div>
                <span className="text-white font-semibold text-body">{t('footer.groupName')}</span>
              </div>
              <p className="text-body-sm text-white/85 leading-relaxed max-w-xs">
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
                      className="text-body-sm text-white/80 hover:text-dtu-red-300 transition-colors"
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
                    className="text-body-sm text-white/80 hover:text-dtu-red-300 transition-colors inline-flex items-center gap-1"
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
              <ul className="space-y-3 text-body-sm text-white/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-dtu-red-400 flex-shrink-0" />
                  <span>{t('footer.address')}<br />{t('footer.location')}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-dtu-red-400 flex-shrink-0" />
                  <span>research@duytan.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-caption text-white/70">
              {t('footer.copyright')}
            </p>
            <p className="text-caption text-white/60">
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
