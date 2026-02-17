import { useEffect } from 'react'
import { GraduationCap, Award, FlaskConical, BookOpen } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

/* ═══ DATA ═══ */
interface Member {
  name: string
  initials: string
  role: string
  roleType: string
}

const currentMembers: Member[] = [
  { name: 'Dr. Nguyen Van A', initials: 'NA', role: 'Associate Professor', roleType: 'Professor' },
  { name: 'Dr. Nguyen Thi B', initials: 'NB', role: 'Associate Research Scholar', roleType: 'Research Scholar' },
  { name: 'Tran Van C', initials: 'TC', role: 'PhD Student in CEE', roleType: 'PhD Student' },
  { name: 'Le Thi D', initials: 'LD', role: 'PhD Student in CEE', roleType: 'PhD Student' },
  { name: 'Pham Van E', initials: 'PE', role: 'PhD Student in CEE', roleType: 'PhD Student' },
  { name: 'Hoang Thi F', initials: 'HF', role: 'PhD Student in CBE', roleType: 'PhD Student' },
  { name: 'Vu Van G', initials: 'VG', role: 'Undergraduate Research Assistant', roleType: 'Undergraduate RA' },
  { name: 'Do Thi H', initials: 'DH', role: 'Undergraduate Research Assistant', roleType: 'Undergraduate RA' },
]

const alumni2015 = [
  { name: 'Nguyen Van I', initials: 'I', position: 'Postdoctoral Scholar, Vietnam National University' },
  { name: 'Tran Thi K', initials: 'K', position: 'Machine Learning Engineer, ABC Company' },
  { name: 'Le Van L', initials: 'L', position: 'Assistant Professor, HUST' },
  { name: 'Pham Thi M', initials: 'M', position: 'Associate Professor, Cornell University' },
]

const alumni2009 = [
  { name: 'Nguyen Van R', position: 'Associate Professor, Auburn University' },
  { name: 'Tran Thi S', position: 'Research Scientist, Jet Propulsion Laboratory' },
  { name: 'Le Van T', position: 'Associate Professor, Umea University, Sweden' },
  { name: 'Pham Thi U', position: 'Assistant Professor, UC Berkeley' },
]

const visitingStudents = [
  { name: 'Hoang Van V', position: 'Engineer, French Agency for Radioactive Waste' },
  { name: 'Vu Thi X', position: 'Postdoctoral Scholar, UCLA' },
]

/* ═══ COMPONENT ═══ */
function People() {
  const { t } = useLanguage()

  /* ═══ HELPERS ═══ */
  const roleMeta: Record<string, { style: string; icon: React.ElementType; label: string }> = {
    'Professor': { style: 'bg-dtu-900 text-white border-dtu-800', icon: Award, label: t('people.professor') },
    'Research Scholar': { style: 'bg-dtu-50 text-dtu-700 border-dtu-100', icon: FlaskConical, label: t('people.researchScholar') },
    'PhD Student': { style: 'bg-emerald-50 text-emerald-700 border-emerald-100', icon: GraduationCap, label: t('people.phdStudent') },
    'Undergraduate RA': { style: 'bg-amber-50 text-amber-700 border-amber-100', icon: BookOpen, label: t('people.undergraduateRA') },
  }

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

  return (
    <div>
      {/* ═══ HEADER ═══ */}
      <section className="bg-gradient-to-br from-dtu-950 via-dtu-900 to-dtu-800 -mt-0">
        <div className="container-content py-14 md:py-18">
          <h1 className="text-h1 text-white mb-2">{t('people.title')}</h1>
          <p className="text-body text-white/50 max-w-lg mb-6">
            {t('people.subtitle')}
          </p>
          <div className="flex flex-wrap gap-2.5">
            <span className="badge badge-maroon">{currentMembers.length} {t('people.currentMembers')}</span>
            <span className="badge bg-white/[0.08] text-white/70 border-white/[0.1]">{alumni2015.length + alumni2009.length} {t('people.alumni')}</span>
            <span className="badge bg-white/[0.08] text-white/70 border-white/[0.1]">{visitingStudents.length} {t('people.visiting')}</span>
          </div>
        </div>
      </section>

      {/* ═══ CURRENT MEMBERS ═══ */}
      <section className="container-content py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {currentMembers.map((member, index) => {
            const meta = roleMeta[member.roleType] || roleMeta['PhD Student']
            const Icon = meta.icon
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${Math.min(index + 1, 8)} member-card`}
              >
                <div className="avatar-ring w-fit mx-auto mb-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-dtu-50 to-surface-2 flex items-center justify-center text-dtu-600 font-bold text-body-lg">
                    {member.initials}
                  </div>
                </div>
                <h3 className="text-h3 text-dtu-900 mb-0.5">{member.name}</h3>
                <p className="text-body-sm text-gray-400 italic mb-4">{member.role}</p>
                <span className={`badge text-caption border ${meta.style}`}>
                  <Icon className="w-3 h-3" />
                  {meta.label}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══ ALUMNI 2015–2024 ═══ */}
      <section className="bg-surface-2 py-14">
        <div className="container-content">
          <div className="reveal">
            <h2 className="section-heading"><span>{t('people.alumni2015')}</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {alumni2015.map((m, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} card-flat flex items-center gap-4 p-4`}>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-dtu-50 to-dtu-100 border-2 border-dtu-100 flex items-center justify-center text-dtu-600 font-bold text-body-sm flex-shrink-0">
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-body-sm font-semibold text-dtu-900 truncate">{m.name}</div>
                  <div className="text-caption text-gray-400 italic truncate">{m.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALUMNI 2009–2014 + VISITING ═══ */}
      <section className="container-content py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <h2 className="section-heading"><span>{t('people.alumni2009')}</span></h2>
            <div className="space-y-1">
              {alumni2009.map((m, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-surface-2 transition-colors text-body-sm group">
                  <div className="w-1.5 h-1.5 rounded-full bg-dtu-300 flex-shrink-0 group-hover:bg-dtu-500 transition-colors" />
                  <span className="font-semibold text-dtu-900">{m.name}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-400 italic truncate">{m.position}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <h2 className="section-heading"><span>{t('people.visitingStudents')}</span></h2>
            <div className="space-y-1">
              {visitingStudents.map((s, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-surface-2 transition-colors text-body-sm group">
                  <div className="w-1.5 h-1.5 rounded-full bg-dtu-300 flex-shrink-0 group-hover:bg-dtu-500 transition-colors" />
                  <span className="font-semibold text-dtu-900">{s.name}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-400 italic truncate">{s.position}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default People
