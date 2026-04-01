'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'probleme', label: 'Problème' },
  { id: 'processus', label: 'Processus' },
  { id: 'services', label: 'Services' },
  { id: 'avant-apres', label: 'Avant / Après' },
  { id: 'tarification', label: 'Tarification' },
  { id: 'etudes-de-cas', label: 'Exemples' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function ScrollProgress() {
  const [active, setActive] = useState('hero')
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 80)

      const mid = window.innerHeight * 0.5
      let current = sections[0].id
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= mid) current = id
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    // With sticky wrappers, scrollIntoView is unreliable — walk up offsetParent chain
    const wrapper = el.parentElement as HTMLElement
    let top = 0
    let node: HTMLElement | null = wrapper
    while (node) {
      top += node.offsetTop
      node = node.offsetParent as HTMLElement | null
    }
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const activeIndex = sections.findIndex((s) => s.id === active)

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 12 }}
      transition={{ type: 'spring', stiffness: 200, damping: 28 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-[90] flex-col items-center gap-0 hidden md:flex"
    >
      {/* Vertical track */}
      <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-0.5 bg-white/10" />

      {/* Animated fill */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-3 w-0.5 bg-white/30 transition-all duration-500 ease-out"
        style={{
          height: `${(activeIndex / (sections.length - 1)) * 100}%`,
        }}
      />

      {sections.map(({ id, label }) => {
        const isActive = id === active
        const isHovered = id === hoveredId

        return (
          <div key={id} className="relative flex items-center py-[7px]">
            {/* Label tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-5 whitespace-nowrap text-xs font-medium text-[#F5F5F0]/80 bg-[#0A2E4D]/80 backdrop-blur-sm px-2 py-1 rounded-md pointer-events-none"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <button
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Aller à ${label}`}
              className="relative flex items-center justify-center w-5 h-5"
            >
              <motion.span
                animate={{
                  scale: isActive ? 1 : 0.5,
                  backgroundColor: isActive ? '#D4A373' : 'rgba(245,245,240,0.35)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="block rounded-full"
                style={{ width: 8, height: 8 }}
              />
              {isActive && (
                <motion.span
                  layoutId="dot-ring"
                  className="absolute inset-0 rounded-full border border-[#D4A373]/50"
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                />
              )}
            </button>
          </div>
        )
      })}
    </motion.div>
  )
}
