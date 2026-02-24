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
const inPreparation: Publication[] = []

const publications: Publication[] = [
  // 2026
  { authors: 'H. Hai, et al.', title: 'Tetra-Germanene Study from First Principles: Structure, Electronics, Mechanics, and Vibrations', journal: 'ACS Omega', year: 2026 },
  
  // 2025
  { authors: 'H. Hai, et al.', title: 'Hydrogen diffusion in water-saturated Illite: From molecular simulations to a simple model', journal: 'Int. J. Hydrogen Energy', year: 2025 },
  { authors: 'H. Hai, et al.', title: 'Assessment of H2 diffusivity in water and brine for underground storage: A molecular dynamics approach', journal: 'Int. J. Hydrogen Energy', year: 2025 },
  { authors: 'H. Hai, et al.', title: 'Modeling Solubility Induced Elemental Fractionation of Noble Gases in Oils', journal: 'Geochim. Cosmochim. Acta', year: 2025 },
  { authors: 'H. Hai, et al.', title: 'Structural and Mechanical Properties of Dickite and Nacrite Minerals: A Computational Study', journal: 'Minerals', year: 2025 },
  
  // 2024
  { authors: 'H. Hai, et al.', title: 'The solubility of H2 in NaCl brine at high pressures and high temperatures: Molecular simulation study and thermodynamic modeling', journal: 'J. Mol. Liq.', year: 2024 },
  { authors: 'H. Hai, et al.', title: 'Investigating zero-point vibrations of solid hydrogen via statistical moment method', journal: 'Phys. Scr.', year: 2024 },
  { authors: 'H. Hai, et al.', title: 'Solubility of H2 in water and NaCl brine under subsurface storage conditions: Measurements and thermodynamic modeling', journal: 'Int. J. Hydrogen Energy', year: 2024 },
  
  // 2023
  { authors: 'H. Hai, et al.', title: 'Effect of crystal surface orientation on aqueous solutions confined in charged nanopores', journal: 'J. Sci. Technol. Duy Tan Univ.', year: 2023 },
  
  // 2022
  { authors: 'H. Hai, et al.', title: 'Revisiting the melting curves of vanadium and niobium metals under pressure', journal: 'Vacuum', year: 2022 },
  { authors: 'H. Hai, et al.', title: 'Predicting thermodiffusion in simple binary fluid mixtures', journal: 'Eur. Phys. J. E', year: 2022 },
  { authors: 'H. Hai, et al.', title: 'Diffusive transport of gases in saturated nanopores: Caprock leakage from a molecular simulation perspective', journal: 'J. Nat. Gas Sci. Eng.', year: 2022 },
  { authors: 'H. Hai, et al.', title: 'Mass effect on viscosity of mixtures in entropy scaling framework: Application to Lennard-Jones mixtures', journal: 'Fluid Phase Equilib.', year: 2022 },
  { authors: 'H. Hai, et al.', title: 'Entropy scaling for viscosity of pure Lennard-Jones fluids and their binary mixtures', journal: 'Commun. Phys.', year: 2022 },
  
  // 2021
  { authors: 'H. Hai, et al.', title: 'On elemental and isotopic fractionation of noble gases in geological fluids by molecular diffusion', journal: 'Geochim. Cosmochim. Acta', year: 2021 },
  { authors: 'H. Hai, et al.', title: 'Enhancing electrochemical performance of sodium Prussian blue cathodes for sodium-ion batteries via optimizing alkyl carbonate electrolytes', journal: 'Ceram. Int.', year: 2021 },
  { authors: 'H. Hai, et al.', title: 'Dynamic Crossover in Fluids: From Hard Spheres to Molecules', journal: 'J. Phys. Chem. Lett.', year: 2021 },
  { authors: 'H. Hai, et al.', title: 'Thermodynamic Scaling of the Shear Viscosity of Lennard-Jones Chains of Variable Rigidity', journal: 'Liquids', year: 2021 },
  
  // 2020
  { authors: 'H. Hai, et al.', title: 'Excess volume, compressibility and speed of sound of CO2 + n-heptane binary mixture under pressure. II. Molecular simulations', journal: 'J. Supercrit. Fluids', year: 2020 },
  { authors: 'H. Hai, et al.', title: 'Thermophysical properties of simple molecular liquid mixtures: On the limitations of some force fields', journal: 'J. Mol. Liq.', year: 2020 },
  { authors: 'H. Hai, et al.', title: 'Density, Speed of Sound, Compressibility and Related Excess Properties of Methane + n-Heptane', journal: 'Int. J. Thermophys.', year: 2020 },
  { authors: 'H. Hai, et al.', title: 'Molecular dynamics simulations on aqueous solution confined in charged nanochannels: asymmetric effect of surface charge', journal: 'Mol. Simul.', year: 2020 },
  
  // 2019
  { authors: 'H. Hai, et al.', title: 'Elemental and isotopic fractionation of noble gases in gas and oil under reservoir conditions: Impact of thermodiffusion', journal: 'Eur. Phys. J. E', year: 2019 },
  { authors: 'H. Hai, et al.', title: 'On the use of a friction model in a Volume of Fluid solver for the simulation of dynamic contact lines', journal: 'J. Comput. Phys.', year: 2019 },
  { authors: 'H. Hai, et al.', title: 'Linking up Pressure, Chemical Potential and Thermal Gradients', journal: 'Eur. Phys. J. E', year: 2019 },
  { authors: 'H. Hai, et al.', title: 'European Space Agency experiments on thermodiffusion of fluid mixtures in space', journal: 'Eur. Phys. J. E', year: 2019 },
  { authors: 'H. Hai, et al.', title: 'Colloquium: European Space Agency experiments on thermodiffusion of fluid mixtures in space', journal: 'Eur. Phys. J. E', year: 2019 },
  
  // 2017
  { authors: 'H. Hai, et al.', title: 'Thermodiffusion in multicomponent n-alkane mixtures', journal: 'NPJ Microgravity', year: 2017 },
  { authors: 'H. Hai, et al.', title: 'Accurate determination of bubble-point of oils from PV data using Y-function and Tait equation', journal: 'J. Pet. Sci. Eng.', year: 2017 },
  { authors: 'H. Hai, et al.', title: 'Simultaneous description of equilibrium, interfacial and transport properties using a Mie Chain Coarse-Grained Force Field', journal: 'Ind. Eng. Chem. Res.', year: 2017 },
  
  // 2016
  { authors: 'H. Hai, et al.', title: 'Predictive Tait equation for non-polar and weakly polar fluids', journal: 'Fluid Phase Equilib.', year: 2016 },
  
  // 2015
  { authors: 'H. Hai, et al.', title: 'Thermodynamic scaling of the viscosity of Mie pure fluids and mixtures', journal: 'J. Chem. Phys.', year: 2015 },
  { authors: 'H. Hai, et al.', title: 'Tait equation in the extended corresponding states frame', journal: 'Fluid Phase Equilib.', year: 2015 },
  { authors: 'H. Hai, et al.', title: 'Couplings between swelling and shear in saturated slit nanopores', journal: 'Phys. Rev. E', year: 2015 },
  
  // 2013
  { authors: 'H. Hai, et al.', title: 'Influence of confinement on thermodiffusion', journal: 'J. Chem. Phys.', year: 2013 },
  { authors: 'H. Hai, et al.', title: 'Shear viscosity of inhomogeneous hard-sphere fluids', journal: 'Appl. Mech. Mater.', year: 2013 },
  { authors: 'H. Hai, et al.', title: 'Shear behavior of a confined thin film', journal: 'J. Chem. Phys.', year: 2013 },
  { authors: 'H. Hai, et al.', title: 'Local shear viscosity of strongly inhomogeneous dense fluids', journal: 'J. Phys. Condens. Matter', year: 2013 },
  
  // 2012
  { authors: 'H. Hai, et al.', title: 'Grand canonical-like molecular dynamics simulations', journal: 'J. Chem. Phys.', year: 2012 },
  { authors: 'H. Hai, et al.', title: 'Local viscosity of a fluid confined in a narrow pore', journal: 'Phys. Rev. E', year: 2012 },
  { authors: 'H. Hai, et al.', title: 'Shear viscosity of inhomogeneous fluids', journal: 'J. Chem. Phys.', year: 2012 },
  
  // 2010
  { authors: 'H. Hai, et al.', title: 'Molecular dynamics study on solution-wall interaction potential', journal: 'J. Mech. Sci. Technol.', year: 2010 },
  
  // 2009
  { authors: 'H. Hai, et al.', title: 'Molecular-dynamic simulation on the statical and dynamical properties of fluids in a nano-channel', journal: 'Korean J. Comput. Fluids Eng.', year: 2009 },
]

/* ═══ JOURNAL COLOR MAP - Simplified ═══ */
const journalColor = (j: string): string => {
  // High impact journals - Red
  if (j.includes('PNAS') || j.includes('Nat.')) return 'bg-red-50 text-red-700 border-red-100'
  // Environmental journals - Emerald
  if (j.includes('Environ')) return 'bg-emerald-50 text-emerald-700 border-emerald-100'
  // Physics/Chemistry journals - Blue
  if (j.includes('Phys') || j.includes('Chem')) return 'bg-blue-50 text-blue-700 border-blue-100'
  // Material journals - Purple
  if (j.includes('ACS') || j.includes('Mater') || j.includes('Nano')) return 'bg-purple-50 text-purple-700 border-purple-100'
  // Energy journals - Amber
  if (j.includes('Energy') || j.includes('Hydrogen')) return 'bg-amber-50 text-amber-700 border-amber-100'
  // Default - Neutral
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
            className="flex flex-wrap gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge bg-white/[0.15] text-white border-white/[0.2] px-3.5 py-1.5 text-body-sm font-semibold">
              <FileText className="w-3.5 h-3.5" />
              {publications.length + inPreparation.length} {t('pub.papers')}
            </span>
            <span className="badge bg-white/[0.15] text-white border-white/[0.2] px-3.5 py-1.5 text-body-sm font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              {uniqueJournals.size} {t('pub.journals')}
            </span>
            <span className="badge bg-white/[0.15] text-white border-white/[0.2] px-3.5 py-1.5 text-body-sm font-semibold">
              📅 {years[years.length - 1]}–{years[0]}
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
              <div className="space-y-2">
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
