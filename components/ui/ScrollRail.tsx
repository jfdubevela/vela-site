'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export type Section = { id: string; label: string }

/** Hauteur du header sticky — les ancres s'arrêtent juste dessous. */
const NAV_OFFSET = 80
/** Écart vertical entre deux jalons. */
const GAP = 28

const GOLD = '#C9A961'

type Marker = Section & { frac: number }

export default function ScrollRail({ sections }: { sections: Section[] }) {
  const wrapRef = useRef<HTMLDivElement>(null)

  const [markers, setMarkers] = useState<Marker[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [fill, setFill] = useState(0)
  const [visible, setVisible] = useState(false)
  const [onLight, setOnLight] = useState(false)

  /* ---------- mesure ---------- */

  const measure = useCallback(() => {
    const doc = document.documentElement
    const range = Math.max(doc.scrollHeight - window.innerHeight, 1)
    const y = window.scrollY
    const progress = Math.min(Math.max(y / range, 0), 1)

    setVisible(y > 80)

    const mid = window.innerHeight * 0.5
    const next: Marker[] = []
    let current = 0

    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (!el) continue
      const top = el.getBoundingClientRect().top
      next.push({ ...s, frac: Math.min(Math.max((top + y - NAV_OFFSET) / range, 0), 1) })
      if (top <= mid) current = next.length - 1
    }

    setActiveIndex(current)
    setMarkers((prev) =>
      prev.length === next.length &&
      prev.every((p, i) => p.id === next[i].id && Math.abs(p.frac - next[i].frac) < 0.001)
        ? prev
        : next
    )

    /* Le remplissage suit le scroll en continu, mais recalé sur les jalons :
       il atteint exactement le jalon n au moment où l'on entre dans la section n. */
    const n = next.length
    if (n < 2) {
      setFill(progress)
      return
    }
    let seg = 0
    while (seg < n - 2 && progress >= next[seg + 1].frac) seg++
    const span = next[seg + 1].frac - next[seg].frac
    const t = span > 0 ? Math.min(Math.max((progress - next[seg].frac) / span, 0), 1) : 0
    setFill(Math.min((seg + t) / (n - 1), 1))
  }, [sections])

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        measure()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    measure()
    const t = setTimeout(measure, 400) // après le chargement des images / polices
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      clearTimeout(t)
    }
  }, [measure])

  /* ---------- lecture du fond derrière le rail ---------- */

  useEffect(() => {
    let frame = 0

    const sniff = () => {
      const wrap = wrapRef.current
      if (!wrap) return
      const box = wrap.getBoundingClientRect()
      const cx = box.left + box.width / 2
      const cy = box.top + box.height / 2

      for (const el of document.elementsFromPoint(cx, cy)) {
        if (wrap.contains(el)) continue
        const m = getComputedStyle(el).backgroundColor.match(/rgba?\(([^)]+)\)/)
        if (!m) continue
        const p = m[1].split(',').map((v) => parseFloat(v))
        if ((p[3] ?? 1) < 0.5) continue
        setOnLight((0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]) / 255 > 0.55)
        return
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        sniff()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    sniff()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  /* ---------- navigation ---------- */

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
      behavior: 'smooth',
    })
  }

  const height = Math.max((markers.length - 1) * GAP, 1)
  const shownIndex = hoveredIndex ?? activeIndex
  const shownLabel = markers[shownIndex]?.label ?? ''
  const fg = onLight ? '10,46,77' : '247,243,235'

  return (
    <AnimatePresence>
      {visible && markers.length > 1 && (
        <motion.div
          ref={wrapRef}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -8 }}
          transition={{ type: 'spring', stiffness: 220, damping: 28 }}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-[90] hidden md:block"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative w-5" style={{ height }}>
            {/* Rail */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px rounded-full"
              style={{ backgroundColor: `rgba(${fg},0.15)` }}
            />

            {/* Parcours franchi */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 w-px rounded-full origin-top"
              style={{ backgroundColor: GOLD }}
              animate={{ height: `${fill * 100}%` }}
              transition={{ type: 'spring', stiffness: 160, damping: 26, mass: 0.4 }}
            />

            {/* Jalons */}
            {markers.map((m, i) => {
              const isActive = i === activeIndex
              const isHovered = i === hoveredIndex
              const passed = i <= activeIndex

              return (
                <button
                  key={m.id}
                  onClick={() => scrollTo(m.id)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  aria-label={`Aller à ${m.label}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="absolute left-1/2 grid place-items-center w-5 h-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ top: i * GAP }}
                >
                  <motion.span
                    className="block rounded-full"
                    animate={{
                      width: isActive ? 7 : isHovered ? 6 : 4,
                      height: isActive ? 7 : isHovered ? 6 : 4,
                      backgroundColor: isActive
                        ? GOLD
                        : passed
                        ? 'rgba(201,169,97,0.5)'
                        : `rgba(${fg},0.28)`,
                    }}
                    transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  />
                  {isActive && (
                    <motion.span
                      layoutId="rail-ring"
                      className="absolute w-[15px] h-[15px] rounded-full border"
                      style={{ borderColor: 'rgba(201,169,97,0.4)' }}
                      transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}

            {/* Libellé — actif en permanence, survolé en priorité */}
            <motion.div
              className="absolute left-full ml-4 -translate-y-1/2 pointer-events-none"
              animate={{ top: shownIndex * GAP }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={shownLabel}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -4 }}
                  transition={{ duration: 0.16 }}
                  className="block whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em]"
                  style={{
                    color: hoveredIndex !== null ? `rgba(${fg},0.8)` : `rgba(${fg},0.55)`,
                  }}
                >
                  {shownLabel}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
