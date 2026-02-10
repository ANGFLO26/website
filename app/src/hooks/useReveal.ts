import { useEffect, useRef, useState } from 'react'

/**
 * Intersection Observer hook for scroll-triggered animations.
 * Elements get the 'visible' class when they enter the viewport.
 */
export function useReveal(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(el)
                }
            },
            { threshold, rootMargin: '0px 0px -60px 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, isVisible }
}

/**
 * Auto-attaches IntersectionObserver to all .reveal elements
 * Call once in the root component.
 */
export function useRevealAll() {
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

        // Observe all elements with the 'reveal' class
        const elements = document.querySelectorAll('.reveal')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}
