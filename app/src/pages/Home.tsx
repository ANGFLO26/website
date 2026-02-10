import { useState, useEffect, useRef } from 'react'
import { Beaker, Leaf, Droplets, Atom, FileText, Users, BookOpen, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'

/* ═══ DATA ═══ */
const researchAreas = [
  {
    icon: Beaker,
    title: 'Natural and Engineered Clay Barriers',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    summary: 'Examining clay-water interfaces and their impact on barrier properties of soils, sediments, and engineered clay barriers.',
    details: [
      'Clay minerals—natural nanoparticles with a high specific surface area and cation exchange capacity—are ubiquitous in soils, sediments, and sedimentary rocks, where they strongly influence groundwater hydrology and solute migration.',
      'Our current focus is on elucidating the relationships between microstructure and aqueous geochemistry in clayey media using molecular dynamics (MD) simulations and surface complexation models.',
    ],
  },
  {
    icon: Droplets,
    title: 'Geologic Carbon Sequestration',
    color: 'from-dtu-400 to-dtu-700',
    bg: 'bg-dtu-50',
    summary: 'Understanding CO₂ trapping mechanisms in geologic formations for carbon capture and storage (CCS).',
    details: [
      'Carbon capture and storage (CCS) has the potential to contribute significantly to CO₂ abatement efforts. Geologic carbon sequestration involves injecting supercritical CO₂ in suitable geologic formations.',
      'Our research focuses on developing improved understanding of stress-porosity-permeability relations in porous media and fundamental basis of mineral-brine-CO₂ wetting properties.',
    ],
  },
  {
    icon: Leaf,
    title: 'Mineral-Organic Interactions in Soils',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    summary: 'Predicting organic contaminant partitioning and understanding soil carbon protection by clay minerals.',
    details: [
      'We aim to develop computational chemistry approaches to predicting the partitioning of organic contaminants between different environmental phases, focused particularly on per- and polyfluoroalkyl substances (PFAS).',
      'A second major goal is to advance understanding of soil carbon "protection" by clay mineral surfaces, examining clay-organic interactions and their impacts on microbial processes.',
    ],
  },
  {
    icon: Atom,
    title: 'Isotope Effects in Liquid Water',
    color: 'from-purple-500 to-indigo-600',
    bg: 'bg-purple-50',
    summary: 'Pioneering MD simulations to examine kinetic isotope effects as probes of interfacial mass fluxes.',
    details: [
      'Kinetic isotope effects (KIEs) are powerful probes of interfacial mass fluxes and the mechanisms that control them. Our group has pioneered the use of MD simulations to examine KIEs in liquid water.',
      'Our ongoing research focuses on quantifying kinetic and equilibrium isotope effects in the partitioning and diffusion of monoatomic solutes in various aqueous phases.',
    ],
  },
]

const stats = [
  { value: '17+', label: 'Publications', icon: BookOpen },
  { value: '8', label: 'Members', icon: Users },
  { value: '4', label: 'Research Areas', icon: Beaker },
]

/* ═══ COUNTER ANIMATION ═══ */
function AnimatedStat({ value, label, icon: Icon, delay }: { value: string; label: string; icon: React.ElementType; delay: number }) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      ref={ref}
      className={`stat-card transition-all duration-700 ease-smooth ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
    >
      <div className="text-3xl font-extrabold text-white tracking-tight">{value}</div>
      <div className="text-caption text-dtu-300/80 font-semibold flex items-center justify-center gap-1.5 mt-1 uppercase tracking-wider">
        <Icon className="w-3 h-3" /> {label}
      </div>
    </div>
  )
}

/* ═══ COMPONENT ═══ */
function Home() {
  const [expandedArea, setExpandedArea] = useState<number | null>(null)
  const [showMethods, setShowMethods] = useState(false)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-dtu-950 via-dtu-900 to-dtu-800 overflow-hidden">
        {/* Decorative geometry */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-dtu-400/[0.04] rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-dtu-300/[0.03] rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dtu-400/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="container-content relative py-16 md:py-22">
          <div className="max-w-2xl">
            <h1 className="text-display text-white mb-4 text-balance">
              Interfacial Water
              <br />
              <span className="text-gradient">Research Group</span>
            </h1>
            <p className="text-body-lg text-white/50 max-w-xl mb-10 leading-relaxed">
              Gaining fundamental insight into the properties of liquid water at interfaces
              using atomistic simulations, models, and experiments.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4">
              {stats.map((s, i) => (
                <AnimatedStat key={s.label} {...s} delay={300 + i * 150} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROFILE CARD ═══ */}
      <section className="container-content -mt-6 relative z-10 mb-16">
        <div className="reveal card p-0">
          <div className="p-7 md:p-9 flex flex-col md:flex-row gap-7 md:gap-9 items-center md:items-start">
            {/* Personal Photo */}
            <div className="flex-shrink-0">
              <div className="avatar-ring">
                <img
                  src="/asset_1.jpg"
                  alt="Dr. Nguyen Van A"
                  className="w-36 h-36 md:w-44 md:h-44 object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-h2 text-dtu-900 mb-1">Dr. Nguyen Van A</h2>
              <p className="text-dtu-500 font-medium text-body italic mb-5">
                Associate Professor
              </p>
              <div className="text-body-sm text-gray-500 leading-relaxed space-y-0.5 mb-6">
                <p>Department of Civil and Environmental Engineering</p>
                <p>Duy Tan University</p>
                <p>Da Nang & Ho Chi Minh City, Vietnam</p>
              </div>
              <a
                href="#cv"
                className="btn-primary"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <FileText className="w-4 h-4" />
                Curriculum Vitae
                <ArrowRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Group Photo */}
            <div className="flex-shrink-0 hidden md:block">
              <img
                src="/asset_2.jpg"
                alt="Research Group"
                className="w-52 h-52 lg:w-60 lg:h-60 rounded-2xl object-cover shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESEARCH GOALS ═══ */}
      <section className="container-content mb-16">
        <div className="reveal">
          <h2 className="section-heading">
            <span>Research Goals</span>
          </h2>
          <p className="text-body text-gray-600 leading-[1.85] text-justify max-w-none">
            Interfaces between liquid water and other phases (minerals, air, carbon-rich fluids, living organisms) are ubiquitous in terrestrial natural environments. Surface chemistry and mass fluxes at these interfaces play key roles in influencing a broad range of environmental phenomena including contaminant fate and transport, metal biogeochemical cycling, multiphase flow in porous media, cloud nucleation, sediment transport, water treatment processes, and soil carbon dynamics. Our research aims to gain <strong>fundamental insight into the properties of liquid water at interfaces</strong> using state-of-the-art atomistic-level simulations, macroscopic scale models, and laboratory experiments in order to improve existing representations of key environmental processes.
          </p>
        </div>
      </section>

      {/* ═══ METHODS (Collapsible) ═══ */}
      <section className="container-content mb-16">
        <div className="reveal">
          <button
            onClick={() => setShowMethods(!showMethods)}
            className="section-heading w-full cursor-pointer group"
          >
            <span className="group-hover:text-dtu-700 transition-colors">Methods</span>
            <span className="flex-shrink-0 ml-auto w-8 h-8 rounded-lg bg-dtu-50 flex items-center justify-center group-hover:bg-dtu-100 transition-colors">
              {showMethods
                ? <ChevronUp className="w-4 h-4 text-dtu-500" />
                : <ChevronDown className="w-4 h-4 text-dtu-500" />
              }
            </span>
          </button>

          {!showMethods && (
            <div className="bg-surface-2 rounded-xl p-5 border border-gray-100/80">
              <p className="text-body-sm text-gray-500 italic">
                Molecular simulation techniques complementing experimental environmental chemistry methods.
              </p>
              <button
                onClick={() => setShowMethods(true)}
                className="text-body-sm text-dtu-500 font-semibold mt-2 hover:text-dtu-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <div
            className={`overflow-hidden transition-all duration-500 ease-smooth ${showMethods ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="bg-surface-2 rounded-xl p-6 border border-gray-100/80">
              <p className="text-body text-gray-600 leading-[1.85] text-justify">
                Molecular simulation techniques are emerging as powerful complements to experimental environmental chemistry methods. A key strength of these techniques lies in their ability to probe small systems (up to millions of atoms) on a broader range of time scales than any experimental method (from femtoseconds to microseconds). Molecular simulations can reveal the behavior of individual atoms in complex systems and the manner in which macroscopic-scale properties (adsorption and partitioning coefficients, interfacial energies, mass transfer kinetics, diffusion coefficients, disjoining pressures, etc.) emerge from atomistic-level interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CURRENT RESEARCH (2×2 Grid) ═══ */}
      <section className="bg-surface-2 py-16 -mx-0">
        <div className="container-content">
          <div className="reveal">
            <h2 className="section-heading">
              <span>Current Research</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {researchAreas.map((area, index) => {
              const Icon = area.icon
              const isExpanded = expandedArea === index
              return (
                <div
                  key={index}
                  className={`reveal reveal-delay-${index + 1} card card-gradient-top p-6 cursor-pointer`}
                  onClick={() => setExpandedArea(isExpanded ? null : index)}
                >
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0 shadow-subtle`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className="text-h3 text-dtu-900 leading-snug">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-body-sm text-gray-500 leading-relaxed mb-4">
                    {area.summary}
                  </p>

                  {/* Expanded */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-smooth ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="border-t border-gray-100 pt-4 mt-1 space-y-3">
                      {area.details.map((p, i) => (
                        <p key={i} className="text-body-sm text-gray-600 leading-relaxed text-justify">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-1 text-caption font-semibold transition-colors ${isExpanded ? 'text-dtu-600' : 'text-dtu-500 hover:text-dtu-700'
                    }`}>
                    {isExpanded ? 'Show less' : 'Read more'}
                    <ArrowRight className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
