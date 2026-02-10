import { useEffect } from 'react'

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

/* ═══ COMPONENT ═══ */
function News() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  let lastYear = ''

  return (
    <div>
      {/* ═══ HEADER ═══ */}
      <section className="bg-gradient-to-br from-dtu-950 via-dtu-900 to-dtu-800">
        <div className="container-content py-14 md:py-18">
          <h1 className="text-h1 text-white mb-2">News & Events</h1>
          <p className="text-body text-white/50 max-w-lg">
            Latest achievements, awards, and milestones from our group.
          </p>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="container-content py-14">
        <div className="relative max-w-narrow mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[23px] sm:left-[55px] top-8 bottom-8 w-px bg-gradient-to-b from-dtu-200 via-dtu-200 to-transparent hidden sm:block" />

          <div className="space-y-0">
            {newsItems.map((item, index) => {
              const year = getYear(item.date)
              const month = getMonth(item.date)
              const showYear = year !== lastYear
              lastYear = year

              return (
                <div key={index}>
                  {/* Year pill */}
                  {showYear && (
                    <div className="reveal flex items-center gap-3 mb-5 mt-8 first:mt-0">
                      <span className="badge badge-maroon text-caption font-bold px-3.5 py-1 z-10">
                        {year}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-dtu-200 to-transparent" />
                    </div>
                  )}

                  {/* Timeline item */}
                  <div className={`reveal reveal-delay-${Math.min((index % 4) + 1, 4)} timeline-item flex group`}>
                    {/* Date + dot */}
                    <div className="hidden sm:flex w-[112px] flex-shrink-0 justify-end items-start pr-5 pt-4">
                      <span className="text-caption text-gray-400 font-medium whitespace-nowrap tracking-wide">
                        {month}
                      </span>
                    </div>
                    <div className="hidden sm:flex flex-shrink-0 relative mt-[18px]">
                      <div className="timeline-dot z-10" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 sm:pl-6 pb-2">
                      <div className="p-4 rounded-xl border border-transparent group-hover:border-gray-100 group-hover:bg-white group-hover:shadow-card transition-all duration-300 ease-smooth">
                        <span className="sm:hidden text-caption text-dtu-500 font-semibold">{item.date}</span>
                        <h3 className="text-body font-semibold text-dtu-900 leading-snug">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-body-sm text-gray-400 mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
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

export default News
