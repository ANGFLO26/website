import { useEffect } from 'react'
import { ExternalLink, BookOpen, FileText, ArrowRight } from 'lucide-react'

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
  return 'bg-gray-50 text-gray-600 border-gray-100'
}

/* ═══ COMPONENT ═══ */
function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a)
  const uniqueJournals = new Set(publications.map((p) => p.journal))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.04, rootMargin: '0px 0px -20px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* ═══ HEADER ═══ */}
      <section className="bg-gradient-to-br from-dtu-950 via-dtu-900 to-dtu-800">
        <div className="container-content py-14 md:py-18">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <h1 className="text-h1 text-white mb-2">Publications</h1>
              <p className="text-body text-white/50 max-w-lg">
                Peer-reviewed research from our group.
              </p>
            </div>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start sm:self-auto"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <BookOpen className="w-4 h-4" />
              Google Scholar
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            <span className="badge bg-white/[0.08] text-white/80 border-white/[0.1]">
              <FileText className="w-3 h-3" />
              {publications.length + inPreparation.length} papers
            </span>
            <span className="badge bg-white/[0.08] text-white/80 border-white/[0.1]">
              {uniqueJournals.size} journals
            </span>
            <span className="badge bg-white/[0.08] text-white/80 border-white/[0.1]">
              {years[years.length - 1]}–{years[0]}
            </span>
          </div>
        </div>
      </section>

      <div className="container-content py-14">
        {/* ═══ IN PREPARATION ═══ */}
        <div className="reveal mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-accent font-bold">In Preparation</span>
            <div className="flex-1 h-px bg-amber-200/50" />
          </div>
          {inPreparation.map((pub, i) => (
            <div key={i} className="pub-card">
              <p className="text-body-sm text-gray-600">
                <span className="font-semibold text-dtu-900">{pub.authors}</span>
                {' '}{pub.title}, <span className="italic text-gray-400">in preparation ({pub.year})</span>.
              </p>
            </div>
          ))}
        </div>

        {/* ═══ BY YEAR ═══ */}
        {years.map((year) => {
          const yearPubs = publications.filter((p) => p.year === year)
          return (
            <div key={year} className="mb-10">
              {/* Year divider */}
              <div className="reveal flex items-center gap-3 mb-5">
                <span className="badge badge-maroon text-caption font-bold px-3.5 py-1">{year}</span>
                <div className="flex-1 h-px bg-dtu-200/50" />
                <span className="text-caption text-gray-400 font-medium">
                  {yearPubs.length} paper{yearPubs.length > 1 ? 's' : ''}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {yearPubs.map((pub, index) => {
                  const firstAuthor = pub.authors.split(',')[0]
                  const restAuthors = pub.authors.includes(',')
                    ? ', ' + pub.authors.split(',').slice(1).join(',')
                    : ''

                  return (
                    <div
                      key={index}
                      className={`reveal reveal-delay-${Math.min(index + 1, 4)} pub-card`}
                    >
                      <p className="text-body-sm text-gray-600 leading-relaxed mb-3">
                        <span className="font-semibold text-dtu-900">{firstAuthor}</span>
                        <span className="text-gray-400">{restAuthors}</span>
                        {' '}{pub.title}.
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`badge text-caption border ${journalColor(pub.journal)}`}>
                          {pub.journal}
                        </span>
                        {pub.volume && (
                          <span className="text-caption text-gray-400">
                            {pub.volume}{pub.pages ? `, ${pub.pages}` : ''} ({pub.year})
                          </span>
                        )}
                        {pub.doi && (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-caption text-dtu-500 hover:text-dtu-700 font-semibold transition-colors"
                          >
                            DOI <ArrowRight className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
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
