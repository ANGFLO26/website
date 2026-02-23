import { motion } from 'framer-motion'
import { GraduationCap, Award, FileText, Trophy, Bookmark } from 'lucide-react'
import { useLanguage } from '../contexts/useLanguage'

/* ═══ CATEGORY ICONS ═══ */
const getNewsIcon = (title: string): React.ReactNode => {
  const lower = title.toLowerCase()
  if (lower.includes('defended') || lower.includes('thesis')) return <GraduationCap className="w-4 h-4 text-dtu-red-600" />
  if (lower.includes('scholarship') || lower.includes('goldwater')) return <Award className="w-4 h-4 text-amber-600" />
  if (lower.includes('paper') || lower.includes('highlighted')) return <FileText className="w-4 h-4 text-blue-600" />
  if (lower.includes('candidate') || lower.includes('prize') || lower.includes('award') || lower.includes('wins') || lower.includes('receives')) return <Trophy className="w-4 h-4 text-emerald-600" />
  return <Bookmark className="w-4 h-4 text-gray-500" />
}

/* ═══ DATA ═══ */
const newsItems = [
  { date: 'April 2025', title: 'Minh receives an award from the Water Research Fund.', description: 'This award supports his research on cohesive fine-grained sediment-biopolymer mixtures.' },
  { date: 'December 2024', title: 'Dr. Lan is the inaugural winner of the Clay Science Pathway Award.', description: 'This new award aims to "recognize the next generation of clay scientists".' },
  { date: 'November 2024', title: 'Huong wins an ACS GEOC Student Travel Award.', description: '' },
  { date: 'November 2024', title: 'Huong wins the top prize of the 2024 Amentum Scholarship.', description: 'This prize recognizes influential contributions and leadership during internship at Oak Ridge National Laboratory.' },
  { date: 'August 2024', title: "Dung's paper highlighted by the ISIS Neutron Source.", description: 'The paper on water dynamics in C-S-H phase was showcased as a Science Highlight.' },
  { date: 'July 2024', title: 'Dung is a candidate for the 2024 Innovandi Nanocem PhD Prize.', description: 'Submitted a five-minute video summary of her research.' },
  { date: 'May 2024', title: 'Minh successfully defended his PhD thesis.', description: 'Thesis: Biological water in atomistic simulations of polysaccharide solutions.' },
  { date: 'May 2024', title: 'Ha wins the top CEE and SEAS awards.', description: 'Mack Angas Prize and James Hayes-Edge Palmer Prize recipient.' },
  { date: 'May 2024', title: 'Nam wins the Sigma Xi Book Award.', description: '' },
  { date: 'April 2024', title: 'Huong wins the 2024 Outstanding G1 Student Award.', description: 'This award recognizes "a first-year student who has made an incredible impact in a short amount of time".' },
  { date: 'April 2024', title: 'Hung wins the 2024 Ellen Gonter Graduate Student Research Paper Award.', description: 'This is the highest award given to students by the Division of Environmental Chemistry of the ACS.' },
  { date: 'June 2023', title: 'Hung successfully defended his PhD thesis.', description: 'Thesis on aerosol microphysics.' },
  { date: 'May 2023', title: 'Ha was awarded a Goldwater Scholarship.', description: '' },
]

const getYear = (date: string) => date.match(/\d{4}/)?.[0] || ''
const getMonth = (date: string) => date.replace(/\s*\d{4}/, '').trim()

// Pre-process data to add showYear flag
interface NewsItemWithFlag {
  date: string
  title: string
  description: string
  year: string
  month: string
  showYear: boolean
}

const processedNewsItems: NewsItemWithFlag[] = (() => {
  let lastYear = ''
  return newsItems.map((item) => {
    const year = getYear(item.date)
    const month = getMonth(item.date)
    const showYear = year !== lastYear
    if (showYear) {
      lastYear = year
    }
    return {
      ...item,
      year,
      month,
      showYear,
    }
  })
})()

/* ═══ COMPONENT ═══ */
function News() {
  const { t } = useLanguage()

  return (
    <div>
      {/* ═══ HEADER ═══ */}
      <section className="bg-gradient-to-br from-dtu-red-800 via-dtu-red-700 to-dtu-red-600">
        <div className="container-content py-14 md:py-18">
          <motion.h1
            className="text-h1 text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('news.title')}
          </motion.h1>
          <motion.p
            className="text-body text-white/90 max-w-lg drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('news.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="container-content py-14">
        <div className="relative max-w-narrow mx-auto">
          {/* Vertical line - Mobile: left 20px, Desktop: left 55px */}
          <div className="absolute left-[20px] sm:left-[55px] top-8 bottom-8 w-px bg-gradient-to-b from-red-300 via-red-300 to-transparent" />

          <div className="space-y-0">
            {processedNewsItems.map((item, index) => (
              <div key={index}>
                {/* Year pill */}
                {item.showYear && (
                  <motion.div
                    className="flex items-center gap-3 mb-5 mt-8 first:mt-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="badge bg-dtu-red-700 text-white border-dtu-red-800 text-caption font-bold px-3.5 py-1 z-10">
                      {item.year}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-red-300 to-transparent" />
                  </motion.div>
                )}

                {/* Timeline item */}
                <motion.div
                  className="timeline-item flex group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Date - Desktop only */}
                  <div className="hidden sm:flex w-[112px] flex-shrink-0 justify-end items-start pr-5 pt-4">
                    <span className="text-caption text-gray-600 font-medium whitespace-nowrap tracking-wide">
                      {item.month}
                    </span>
                  </div>

                  {/* Timeline dot - Both mobile & desktop */}
                  <div className="flex-shrink-0 relative mt-[14px] sm:mt-[18px]">
                    <div className="timeline-dot z-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pl-4 sm:pl-6 pb-3">
                    <div className="p-4 rounded-xl border border-transparent group-hover:border-neutral-100 group-hover:bg-white group-hover:shadow-card transition-all duration-300 ease-smooth">
                      {/* Mobile: Full date, Desktop: Hidden (already show month) */}
                      <span className="sm:hidden text-caption text-dtu-red-600 font-semibold block mb-1">{item.date}</span>
                      <h3 className="text-body font-semibold text-gray-900 leading-snug flex items-start gap-2">
                        <span className="mt-0.5 flex-shrink-0">{getNewsIcon(item.title)}</span>
                        <span>{item.title}</span>
                      </h3>
                      {item.description && (
                        <p className="text-body-sm text-gray-600 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
