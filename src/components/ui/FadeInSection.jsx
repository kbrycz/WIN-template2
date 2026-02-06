import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/**
 * Reusable wrapper component for scroll-triggered fade-in-up animations
 * @param {React.ReactNode} children - Content to animate
 * @param {number} delay - Animation delay in milliseconds (default: 0)
 * @param {string} className - Additional CSS classes
 * @param {number} finalOpacity - Final opacity after animation (0-1, default: 1)
 * @param {Object} options - Options to pass to useScrollAnimation hook
 */
function FadeInSection({ children, delay = 0, className = '', finalOpacity = 1, options = {} }) {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
    ...options,
  })
  const [animationComplete, setAnimationComplete] = useState(false)

  // Round delay to nearest 100ms increment and clamp to available delay classes
  const roundedDelay = Math.round(delay / 100) * 100
  const clampedDelay = Math.min(Math.max(roundedDelay, 0), 1000)
  const delayClass = clampedDelay > 0 ? `animation-delay-${clampedDelay}` : ''
  const animationClass = isVisible ? 'animate-fade-in-up' : ''
  const opacityClass = isVisible ? '' : 'opacity-0'
  
  // Wait for animation to complete before applying final opacity
  useEffect(() => {
    if (isVisible && finalOpacity !== 1) {
      // Animation duration is 0.8s (800ms) + delay
      const totalDuration = 800 + clampedDelay
      const timer = setTimeout(() => {
        setAnimationComplete(true)
      }, totalDuration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, finalOpacity, clampedDelay])
  
  // Apply final opacity style only after animation completes
  const style = animationComplete && finalOpacity !== 1 ? { opacity: finalOpacity } : {}

  return (
    <div
      ref={ref}
      className={`${opacityClass} ${animationClass} ${delayClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}

export default FadeInSection
