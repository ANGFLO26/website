import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Beaker, Leaf, Droplets, Atom, FileText, Users, BookOpen, ChevronDown, ArrowRight, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/useLanguage'
import { useSmoothScroll } from '../hooks/useScrollAnimation'
import { FadeInUp } from '../components/PageTransition'

/* ═══ COUNTER ANIMATION ═══ */
function AnimatedStat({ value, label, icon: Icon, delay }: { value: string; label: string; icon: React.ElementType; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      className="stat-card"
    >
      <div className="text-3xl font-extrabold text-white tracking-tight">{value}</div>
      <div className="text-caption text-white/90 font-semibold flex items-center justify-center gap-1.5 mt-1 uppercase tracking-wider">
        <Icon className="w-3 h-3" /> {label}
      </div>
    </motion.div>
  )
}

/* ═══ COMPONENT ═══ */
function Home() {
  const [expandedArea, setExpandedArea] = useState<number | null>(null)
  const [showMethods, setShowMethods] = useState(false)
  const { t } = useLanguage()
  const { scrollToRef } = useSmoothScroll()
  const methodsRef = useRef<HTMLDivElement>(null)

  /* ═══ DATA (translated) ═══ */
  const researchAreas = [
    {
      icon: Beaker,
      title: t('home.research1.title'),
      color: 'from-amber-500 to-orange-600',
      summary: t('home.research1.summary'),
      details: [t('home.research1.detail1'), t('home.research1.detail2')],
    },
    {
      icon: Droplets,
      title: t('home.research2.title'),
      color: 'from-red-400 to-dtu-red-700',
      summary: t('home.research2.summary'),
      details: [t('home.research2.detail1'), t('home.research2.detail2')],
    },
    {
      icon: Leaf,
      title: t('home.research3.title'),
      color: 'from-emerald-500 to-teal-600',
      summary: t('home.research3.summary'),
      details: [t('home.research3.detail1'), t('home.research3.detail2')],
    },
    {
      icon: Atom,
      title: t('home.research4.title'),
      color: 'from-purple-500 to-indigo-600',
      summary: t('home.research4.summary'),
      details: [t('home.research4.detail1'), t('home.research4.detail2')],
    },
  ]

  const stats = [
    { value: '43', label: t('home.publications'), icon: BookOpen },
    { value: '8', label: t('home.members'), icon: Users },
    { value: '4', label: t('home.researchAreas'), icon: Beaker },
  ]

  const handleToggleMethods = () => {
    const willShow = !showMethods
    setShowMethods(willShow)

    if (willShow && methodsRef.current) {
      setTimeout(() => {
        scrollToRef(methodsRef, 100)
      }, 350)
    }
  }

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-dtu-red-800 via-dtu-red-700 to-dtu-red-600 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-32 -right-32 w-96 h-96 bg-red-400/[0.04] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.04, 0.06, 0.04]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-300/[0.03] rounded-full blur-2xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-400/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="container-content relative py-16 md:py-22">
          <div className="max-w-2xl">
            <FadeInUp>
              <h1 className="text-display text-white mb-4 text-balance">
                {t('home.heroTitle1')}
                <br />
                <span className="text-gradient">{t('home.heroTitle2')}</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <p className="text-body-lg text-white/90 max-w-xl mb-10 leading-relaxed drop-shadow-md">
                {t('home.heroSubtitle')}
              </p>
            </FadeInUp>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4">
              {stats.map((s, i) => (
                <AnimatedStat key={s.label} {...s} delay={300 + i * 150} />
              ))}
            </div>
          </div>
        </div>

        {/* Smooth wave transition */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,5 1380,30 1440,40 L1440,60 L0,60 Z" fill="#FAFBFC" />
          </svg>
        </div>
      </section>

      {/* ═══ PROFILE CARD ═══ */}
      <section className="container-content -mt-6 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="card p-0 overflow-visible"
        >
          <div className="p-6 sm:p-7 md:p-9">
            {/* Profile layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center">

              {/* Personal Photo - Left */}
              <div className="flex-shrink-0">
                <div className="avatar-ring">
                  <img
                    src="/leader.jpg"
                    alt={t('home.name')}
                    className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover"
                  />
                </div>
              </div>

              {/* Info - Right (wider) */}
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <h2 className="text-h2 text-gray-900 mb-1">{t('home.name')}</h2>
                <p className="text-dtu-red-700 font-semibold text-body italic mb-4 lg:mb-5">
                  {t('home.title')}
                </p>
                <div className="text-body-sm text-gray-700 leading-relaxed space-y-0.5 mb-3">
                  <p>{t('home.department')}</p>
                  <p>{t('home.university')}</p>
                  <p>{t('home.location')}</p>
                </div>
                
                {/* Education & Thesis - 2 columns on desktop */}
                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-surface-2 rounded-lg">
                    <h4 className="text-caption font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t('home.education')}
                    </h4>
                    <ul className="space-y-1 text-body-sm text-gray-600">
                      <li>• {t('home.education.phd')}</li>
                      <li>• {t('home.education.ms')}</li>
                      <li>• {t('home.education.bs')}</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-red-50/50 rounded-lg border border-red-100">
                    <p className="text-caption font-semibold text-dtu-red-700 uppercase tracking-wider mb-1">
                      {t('home.phdThesis')}
                    </p>
                    <p className="text-body-sm text-gray-700 italic text-xs mb-2">
                      {t('home.phdThesis.title')}
                    </p>
                    <p className="text-caption font-semibold text-blue-700 uppercase tracking-wider mb-1">
                      {t('home.msThesis')}
                    </p>
                    <p className="text-body-sm text-gray-700 italic text-xs">
                      {t('home.msThesis.title')}
                    </p>
                  </div>
                </div>

                {/* Additional Info - Horizontal layout */}
                <div className="mb-4 flex flex-wrap gap-x-6 gap-y-1 text-body-sm text-gray-600">
                  <p><span className="font-medium">{t('home.birthdate')}</span> • {t('home.birthplace')}</p>
                  <p><span className="font-medium">{t('home.languages')}:</span> {t('home.languages.en')}, {t('home.languages.fr')}</p>
                  <p><span className="font-medium">{t('home.researchGrants')}:</span> 3 {t('home.grants.count')}</p>
                </div>
                <a
                  href="/CV-Hoang-Hai-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <FileText className="w-4 h-4" />
                  {t('home.cv')}
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ RESEARCH GOALS ═══ */}
      <section className="container-content mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-heading text-gray-900">
            <span>{t('home.researchGoals')}</span>
          </h2>
          <p className="text-body text-gray-800 leading-[1.85] max-w-none">
            {t('home.researchGoalsText')}
          </p>
        </motion.div>
      </section>

      {/* ═══ METHODS (Collapsible) ═══ */}
      <section className="container-content mb-16" ref={methodsRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={handleToggleMethods}
            className="section-heading w-full cursor-pointer group"
          >
            <span className="text-gray-900 group-hover:text-dtu-red-700 transition-colors">{t('home.methods')}</span>
            <motion.span
              className="flex-shrink-0 ml-auto w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors"
              animate={{ rotate: showMethods ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 text-dtu-red-500" />
            </motion.span>
          </button>

          <AnimatePresence mode="wait">
            {!showMethods ? (
              <motion.div
                key="summary"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-surface-2 rounded-xl p-5 border border-neutral-100/80"
              >
                <p className="text-body-sm text-neutral-500 italic">
                  {t('home.methodsSummary')}
                </p>
                <button
                  onClick={handleToggleMethods}
                  className="text-body-sm text-dtu-red-600 font-semibold mt-2 hover:text-dtu-red-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  {t('home.readMore')} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-surface-2 rounded-xl p-6 border border-neutral-100/80">
                  <p className="text-body text-neutral-600 leading-[1.85]">
                    {t('home.methodsDetail')}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ═══ CURRENT RESEARCH (2×2 Grid) ═══ */}
      <section className="bg-surface-2 py-16 -mx-0">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="section-heading">
              <span>{t('home.currentResearch')}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => {
              const Icon = area.icon
              const isExpanded = expandedArea === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="card card-gradient-top p-6"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0 shadow-subtle`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className="text-h3 text-gray-900 leading-snug">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-body-sm text-gray-600 leading-relaxed mb-4">
                    {area.summary}
                  </p>

                  {/* Expanded */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-smooth ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="border-t border-gray-100 pt-4 mt-1 space-y-3">
                      {area.details.map((p, i) => (
                        <p key={i} className="text-body-sm text-neutral-600 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setExpandedArea(isExpanded ? null : index) }}
                    className={`flex items-center gap-1 text-caption font-semibold transition-colors cursor-pointer ${isExpanded ? 'text-dtu-red-600' : 'text-dtu-red-500 hover:text-dtu-red-700'
                      }`}
                  >
                    {isExpanded ? t('home.showLess') : t('home.readMore')}
                    <ArrowRight className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
