import { motion, useScroll, useSpring } from 'framer-motion'

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-dtu-red-600 to-dtu-red-400 origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}

// Alternative: Circular progress indicator
export function CircularReadingProgress() {
  const { scrollYProgress } = useScroll()
  
  return (
    <div className="fixed bottom-6 right-20 z-50">
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#E5E5E5"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#C0392B"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="283"
          style={{
            strokeDashoffset: useSpring(
              scrollYProgress.get() * 283,
              { stiffness: 100, damping: 30 }
            ),
          }}
        />
      </svg>
    </div>
  )
}
