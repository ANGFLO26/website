import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, FileText } from 'lucide-react'
import { useLanguage } from '../contexts/useLanguage'

/* ═══ TYPES ═══ */
interface Publication {
  authors: string
  title: string
  journal: string
  volume?: string
  pages?: string
  year: number
  doi?: string
}

/* ═══ DATA ═══ */
const inPreparation: Publication[] = [
  { authors: 'Nguyen V.A., Tran T.B.', title: 'A multiscale approach to simulate multiphase non-isothermal flow in deformable porous materials', journal: 'In preparation', year: 2024 },
]

const publications: Publication[] = [
  { authors: 'Tran T.B., Le H.C., Nguyen V.A.', title: 'Coarse-grained simulation of colloidal self-assembly, cation exchange, and rheology in Na/Ca smectite clay gels', journal: 'J. Colloid Interface Sci.', volume: '693', pages: '137573', year: 2025, doi: '#' },
  { authors: 'Le T.D., Nguyen V.A.', title: 'Interactions of PFAS at the water-air interface', journal: 'Environ. Sci. Technol.', volume: '59', pages: '2201-2210', year: 2025, doi: '#' },
  { authors: 'Le H.C., Tran T.B., Nguyen V.A.', title: 'A coarse-grained model of clay colloidal aggregation and consolidation', journal: 'J. Colloid Interface Sci.', volume: '683', pages: '1188-1196', year: 2025, doi: '#' },
  { authors: 'Pham T.E., Wolf M., Le H.C., et al.', title: 'Quantifying and modeling the impact of phase state on ice nucleation abilities', journal: 'Environ. Sci. Technol.', volume: '58', pages: '22678-22690', year: 2024, doi: '#' },
  { authors: 'Do T.F., Nguyen V.A., Rosso K.M.', title: 'Mineral-associated organic matter is heterogeneous', journal: 'PNAS', volume: '121', pages: 'e2413216121', year: 2024, doi: '#' },
  { authors: 'Vu T.G., Nguyen V.A.', title: 'Structure and dynamics of water in polysaccharide solutions and gels', journal: 'Biomacromolecules', volume: '25', pages: '6403-6415', year: 2024, doi: '#' },
  { authors: 'Ngo T.H., et al.', title: 'Soft matter physics of the ground beneath our feet', journal: 'Soft Matter', volume: '20', pages: '5859-5888', year: 2024, doi: '#' },
  { authors: 'Mai T.I., et al.', title: 'Water dynamics in calcium silicate hydrates', journal: 'Cem. Concr. Res.', volume: '184', pages: '107616', year: 2024, doi: '#' },
  { authors: 'Ly T.K., Nguyen V.A., Vo T.L.', title: 'Extension of Madrid-2019 force field to Sr²⁺ and Ba²⁺', journal: 'J. Chem. Phys.', volume: '160', pages: '046101', year: 2024, doi: '#' },
  { authors: 'Pham T.E., Nguyen V.A.', title: 'Hygroscopic growth of adsorbed water films on smectite clay particles', journal: 'Environ. Sci. Technol.', volume: '58', pages: '1109-1118', year: 2024, doi: '#' },
  { authors: 'Seltzer A.M., Shackleton S.A., Nguyen V.A.', title: 'Solubility equilibrium isotope effects of noble gases in water', journal: 'J. Phys. Chem. B', volume: '127', pages: '9802-9812', year: 2023, doi: '#' },
  { authors: 'Tran T.B., Nguyen V.A.', title: 'Nanoscale prediction of thermal, mechanical, and transport properties of hydrated clay', journal: 'ACS Nano', volume: '17', pages: '19211-19223', year: 2023, doi: '#' },
  { authors: 'Pham T.E., Nguyen V.A.', title: 'Phase state, surface tension, water activity of water-organic clusters', journal: 'Environ. Sci. Technol.', volume: '57', pages: '13092-13103', year: 2023 },
  { authors: 'Tran T.B., Do T.F., Nguyen V.A.', title: 'Molecular dynamics simulation of bentonite clay at 298 to 373 K', journal: 'Appl. Clay Sci.', volume: '240', pages: '106964', year: 2023 },
  { authors: 'Le H.C., Nguyen V.A.', title: 'Interaction between hydrated smectite clay particles', journal: 'J. Phys. Chem. C', volume: '126', pages: '20990-20997', year: 2022 },
  { authors: 'Calabrese S., et al.', title: 'Nano- to global-scale uncertainties in terrestrial enhanced weathering', journal: 'Environ. Sci. Technol.', volume: '56', pages: '15261-15272', year: 2022 },
]

/* ═══ JOURNAL COLOR MAP ═══ */
const journalColor = (j: string): string => {
  if (j.includes('Environ')) return 'bg-emerald-50 text-emerald-700 border-emerald-100'
  if (j.includes('PNAS')) return 'bg-red-50 text-red-700 border-red-100'
  if (j.includes('ACS Nano')) return 'bg-purple-50 text-purple-700 border-purple-100'
  if (j.includes('Colloid')) return 'bg-blue-50 text-blue-700 border-blue-100'
  if (j.includes('Phys. Chem')) return 'bg-amber-50 text-amber-700 border-amber-100'
  if (j.includes('Soft Matter')) return 'bg-pink-50 text-pink-700 border-pink-100'
  if (j.includes('Cem.') || j.includes('Concr')) return 'bg-stone-50 text-stone-700 border-stone-100'
  if (j.includes('Chem. Phys')) return 'bg-indigo-50 text-indigo-700 border-indigo-100'
  if (j.includes('Biomacro')) return 'bg-teal-50 text-teal-700 border-teal-100'
  if (j.includes('Clay')) return 'bg-orange-50 text-orange-700 border-orange-100'
  return 'bg-neutral-50 text-neutral-600 border-neutral-100'
}

/* ═══ COMPONENT ═══ */
function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a)
  const uniqueJournals = new Set(publications.map((p) => p.journal))
  const { t } = useLanguage()

  return (
    <div>
      {/* ═══ HEADER ═══ */}
      <section className="bg-gradient-to-br from-dtu-red-800 via-dtu-red-700 to-dtu-red-600">
        <div className="container-content py-14 md:py-18">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <motion.h1 
                className="text-h1 text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {t('pub.title')}
              </motion.h1>
              <motion.p 
                className="text-body text-white/90 max-w-lg drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {t('pub.subtitle')}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start sm:self-auto"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <BookOpen className="w-4 h-4" />
                {t('pub.googleScholar')}
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div 
            className="flex flex-wrap gap-2.5 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge bg-white/[0.12] text-white/95 border-white/[0.2]">
              <FileText className="w-3 h-3" />
              {publications.length + inPreparation.length} {t('pub.papers')}
            </span>
            <span className="badge bg-white/[0.12] text-white/95 border-white/[0.2]">
              {uniqueJournals.size} {t('pub.journals')}
            </span>
            <span className="badge bg-white/[0.12] text-white/95 border-white/[0.2]">
              {years[years.length - 1]}–{years[0]}
            </span>
          </motion.div>
        </div>
      </section>

      <div className="container-content py-14">
        {/* ═══ IN PREPARATION ═══ */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="badge bg-neutral-100 text-neutral-600 border-neutral-200 font-bold">{t('pub.inPreparation')}</span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>
          {inPreparation.map((pub, i) => (
            <motion.div 
              key={i} 
              className="pub-card opacity-75"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.75, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-body-sm text-neutral-600">
                <span className="font-semibold text-neutral-800">{pub.authors}</span>
                {' '}{pub.title}, <span className="italic text-neutral-400">in preparation ({pub.year})</span>.
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══ BY YEAR ═══ */}
        {years.map((year) => {
          const yearPubs = publications.filter((p) => p.year === year)
          
          return (
            <div key={year} className="mb-10">
              {/* Year divider */}
              <motion.div 
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="badge bg-dtu-red-700 text-white border-dtu-red-800 text-caption font-bold px-3.5 py-1">{year}</span>
                <div className="flex-1 h-px bg-red-300/50" />
                <span className="text-caption text-neutral-400 font-medium">
                  {yearPubs.length} {yearPubs.length > 1 ? t('pub.papers') : t('pub.paper')}
                </span>
              </motion.div>

              {/* Cards */}
              <div className="space-y-3">
                {yearPubs.map((pub, index) => {
                  const firstAuthor = pub.authors.split(',')[0]
                  const restAuthors = pub.authors.includes(',')
                    ? ', ' + pub.authors.split(',').slice(1).join(',')
                    : ''

                  return (
                    <motion.div
                      key={index}
                      className="pub-card"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ x: 3 }}
                    >
                      <p className="text-body-sm text-gray-700 leading-relaxed mb-3">
                        <span className="font-semibold text-gray-900">{firstAuthor}</span>
                        <span className="text-gray-600">{restAuthors}</span>
                        {' '}{pub.title}.
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`badge text-caption border ${journalColor(pub.journal)}`}>
                          {pub.journal}
                        </span>
                        {pub.volume && (
                          <span className="text-caption text-gray-600">
                            {pub.volume}{pub.pages ? `, ${pub.pages}` : ''} ({pub.year})
                          </span>
                        )}
                        {pub.doi && (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-caption text-dtu-red-600 hover:text-dtu-red-700 font-semibold transition-colors bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-full"
                          >
                            <ExternalLink className="w-3 h-3" />
                            DOI
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Publications
