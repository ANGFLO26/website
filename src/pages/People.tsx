import { GraduationCap, Award, FlaskConical, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/useLanguage'

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
    'Professor': { style: 'bg-dtu-red-700 text-white border-dtu-red-800', icon: Award, label: t('people.professor') },
    'Research Scholar': { style: 'bg-red-50 text-dtu-red-700 border-red-200', icon: FlaskConical, label: t('people.researchScholar') },
    'PhD Student': { style: 'bg-gray-100 text-gray-700 border-gray-200', icon: GraduationCap, label: t('people.phdStudent') },
    'Undergraduate RA': { style: 'bg-amber-50 text-amber-700 border-amber-200', icon: BookOpen, label: t('people.undergraduateRA') },
  }

  return (
    <div>
      {/* ═══ HEADER ═══ */}
      <section className="bg-gradient-to-br from-dtu-red-800 via-dtu-red-700 to-dtu-red-600 -mt-0">
        <div className="container-content py-14 md:py-18">
          <motion.h1
            className="text-h1 text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('people.title')}
          </motion.h1>
          <motion.p
            className="text-body text-white/90 max-w-lg mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('people.subtitle')}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge badge-maroon">{currentMembers.length} {t('people.currentMembers')}</span>
            <span className="badge bg-white/[0.12] text-white/95 border-white/[0.2]">{alumni2015.length + alumni2009.length} {t('people.alumni')}</span>
            <span className="badge bg-white/[0.12] text-white/95 border-white/[0.2]">{visitingStudents.length} {t('people.visiting')}</span>
          </motion.div>
        </div>
      </section>

      {/* ═══ CURRENT MEMBERS ═══ */}
      <section className="container-content py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentMembers.map((member, index) => {
            const meta = roleMeta[member.roleType] || roleMeta['PhD Student']
            const Icon = meta.icon
            return (
              <motion.div
                key={index}
                className="member-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                {/* Avatar with geometric pattern */}
                <div className="avatar-ring w-fit mx-auto mb-5 group-hover:scale-105 transition-transform duration-300">
                  <div
                    className="w-24 h-24 flex items-center justify-center text-white font-extrabold text-xl relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${member.roleType === 'Professor' ? '#C8102E' : member.roleType === 'Research Scholar' ? '#DC2626' : member.roleType === 'PhD Student' ? '#991B1B' : '#D97706'} 0%, ${member.roleType === 'Professor' ? '#7F1D1D' : member.roleType === 'Research Scholar' ? '#B91C1C' : member.roleType === 'PhD Student' ? '#7F1D1D' : '#B45309'} 100%)`
                    }}
                  >
                    {/* Geometric pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.12]" style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, white 1.5px, transparent 1.5px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                      backgroundSize: '12px 12px, 8px 8px'
                    }} />
                    {/* Diagonal accent line */}
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                      backgroundImage: 'linear-gradient(135deg, white 25%, transparent 25%, transparent 50%, white 50%, white 55%, transparent 55%)',
                      backgroundSize: '20px 20px'
                    }} />
                    <span className="relative z-10 tracking-wide drop-shadow-sm">{member.initials}</span>
                  </div>
                </div>
                <h3 className="text-h3 text-gray-900 mb-0.5 group-hover:text-dtu-red-700 transition-colors">{member.name}</h3>
                <p className="text-body-sm text-gray-600 italic mb-4">{member.role}</p>
                <span className={`badge text-caption border ${meta.style}`}>
                  <Icon className="w-3 h-3" />
                  {meta.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ═══ ALUMNI 2015–2024 ═══ */}
      <section className="bg-surface-2 py-14">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="section-heading"><span>{t('people.alumni2015')}</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {alumni2015.map((m, i) => (
              <motion.div
                key={i}
                className="card-flat flex items-center gap-4 p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 flex items-center justify-center text-dtu-red-600 font-bold text-body-sm flex-shrink-0">
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-body-sm font-semibold text-gray-900 truncate">{m.name}</div>
                  <div className="text-caption text-gray-600 italic truncate">{m.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALUMNI 2009–2014 + VISITING ═══ */}
      <section className="container-content py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="section-heading"><span>{t('people.alumni2009')}</span></h2>
            </motion.div>
            <div className="space-y-1">
              {alumni2009.map((m, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-surface-2 transition-colors text-body-sm group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0 group-hover:bg-dtu-red-500 transition-colors" />
                  <span className="font-semibold text-gray-900">{m.name}</span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-gray-600 italic truncate">{m.position}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="section-heading"><span>{t('people.visitingStudents')}</span></h2>
            </motion.div>
            <div className="space-y-1">
              {visitingStudents.map((s, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-surface-2 transition-colors text-body-sm group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0 group-hover:bg-dtu-red-500 transition-colors" />
                  <span className="font-semibold text-gray-900">{s.name}</span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-gray-600 italic truncate">{s.position}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default People
