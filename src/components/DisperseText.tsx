import { motion, type Variants } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

type DisperseTextProps = {
  zh: string
  en: string
  className?: string
  /**
   * Visual-only; the animation timings are tuned for hover.
   * Keep it short (1–2 lines).
   */
  ariaLabel?: string
}

function splitGraphemes(text: string) {
  // Reasonable default: works well for CJK + basic latin.
  return Array.from(text)
}

export function DisperseText({ zh, en, className, ariaLabel }: DisperseTextProps) {
  const MOBILE_AUTO_TRIGGER_DELAY_MS = 1500
  const [isMobile, setIsMobile] = useState(false)
  const [hovered, setHovered] = useState(false)
  const hasAutoTriggered = useRef(false)

  const zhChars = useMemo(() => splitGraphemes(zh), [zh])
  const enChars = useMemo(() => splitGraphemes(en), [en])

  const easeOutQuint = [0.22, 1, 0.36, 1] as [number, number, number, number]

  const zhVariants = {
    rest: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 420,
        damping: 32,
        mass: 0.6,
        delay: i * 0.012,
      },
    }),
    hover: (i: number) => ({
      opacity: 0,
      y: -10 - (i % 3) * 3,
      x: (i % 2 ? 1 : -1) * (10 + (i % 5) * 2),
      filter: 'blur(10px)',
      transition: {
        duration: 0.36,
        ease: easeOutQuint,
        delay: i * 0.006,
      },
    }),
  } satisfies Variants

  const enVariants = {
    rest: (i: number) => ({
      opacity: 0,
      y: 12 + (i % 3) * 2,
      x: (i % 2 ? -1 : 1) * (6 + (i % 5) * 2),
      filter: 'blur(10px)',
      transition: {
        duration: 0.24,
        ease: easeOutQuint,
        delay: i * 0.006,
      },
    }),
    hover: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 480,
        damping: 34,
        mass: 0.55,
        delay: 0.06 + i * 0.012,
      },
    }),
  } satisfies Variants

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return

    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)')
    const updateMobileState = () => setIsMobile(mediaQuery.matches)
    updateMobileState()

    mediaQuery.addEventListener('change', updateMobileState)
    return () => mediaQuery.removeEventListener('change', updateMobileState)
  }, [])

  useEffect(() => {
    if (!isMobile || hasAutoTriggered.current) return

    hasAutoTriggered.current = true
    const timeoutId = window.setTimeout(() => setHovered(true), MOBILE_AUTO_TRIGGER_DELAY_MS)
    return () => window.clearTimeout(timeoutId)
  }, [isMobile])

  return (
    <motion.span
      className={['disperseText', className].filter(Boolean).join(' ')}
      onHoverStart={() => {
        if (!isMobile) setHovered(true)
      }}
      onHoverEnd={() => {
        if (!isMobile) setHovered(false)
      }}
      role="text"
      aria-label={ariaLabel ?? zh}
    >
      <span className="disperseText__sr">{ariaLabel ?? `${zh} / ${en}`}</span>

      <span className="disperseText__layer" aria-hidden="true">
        {zhChars.map((ch, i) => (
          <motion.span
            // eslint-disable-next-line react/no-array-index-key
            key={`zh-${i}`}
            className="disperseText__ch disperseText__ch--zh"
            custom={i}
            variants={zhVariants}
            animate={hovered ? 'hover' : 'rest'}
            initial={false}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        ))}
      </span>

      <span className="disperseText__layer disperseText__layer--top" aria-hidden="true">
        {enChars.map((ch, i) => (
          <motion.span
            // eslint-disable-next-line react/no-array-index-key
            key={`en-${i}`}
            className="disperseText__ch disperseText__ch--en"
            custom={i}
            variants={enVariants}
            animate={hovered ? 'hover' : 'rest'}
            initial={false}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        ))}
      </span>
    </motion.span>
  )
}

