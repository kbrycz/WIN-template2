import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Custom hook for scroll-triggered animations using Intersection Observer API
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visible to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root element (e.g., "0px 0px -100px 0px")
 * @param {boolean} options.triggerOnce - If true, only trigger once (default: true)
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.2,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const hasAnimatedRef = useRef(false)
  const elementRef = useRef(null)

  const handleIntersection = useCallback(
    (entries) => {
      const [entry] = entries
      const isIntersecting = entry.isIntersecting

      if (isIntersecting) {
        if (triggerOnce) {
          // Only trigger once - once visible, stay visible
          if (!hasAnimatedRef.current) {
            setIsVisible(true)
            hasAnimatedRef.current = true
          }
        } else {
          // Allow re-triggering
          setIsVisible(true)
        }
      } else {
        // Only reset if triggerOnce is false
        if (!triggerOnce) {
          setIsVisible(false)
        }
      }
    },
    [triggerOnce]
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [handleIntersection, threshold, rootMargin])

  return [elementRef, isVisible]
}
