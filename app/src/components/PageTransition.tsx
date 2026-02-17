import { motion, AnimatePresence, type Transition } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

const pageTransition: Transition = {
  type: 'tween',
  ease: [0.22, 1, 0.36, 1], // ease-smooth
  duration: 0.4,
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Fade in up animation for individual elements
interface FadeInUpProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeInUp({ children, className = '', delay = 0, duration = 0.6 }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
