'use client'

import { useEffect, useRef, memo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  MagnifyingGlass,
  Gear,
  Chalkboard,
  CheckCircle,
  ArrowRight,
  Circle,
} from '@phosphor-icons/react'
import SpotlightCard from '../ui/SpotlightCard'
import ScrollReveal from '../ui/ScrollReveal'

/* ─── Bento Card 01: Intelligent List (auto-sorting) ─── */
const diagnosticItems = [
  { id: 'a', label: 'Cartographie des processus', priority: 1 },
  { id: 'b', label: 'Estimation ROI (heures → $)', priority: 2 },
  { id: 'c', label: 'Priorisation quick wins', priority: 3 },
  { id: 'd', label: 'Prototype démontrable', priority: 4 },
]

const IntelligentList = memo(function IntelligentList() {
  const [items, setItems] = useState(diagnosticItems)

  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => {
        const next = [...prev]
        const i = Math.floor(Math.random() * (next.length - 1))
        const j = i + 1
        ;[next[i], next[j]] = [next[j], next[i]]
        return next
      })
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col gap-2 mt-4">
      <AnimatePresence mode="popLayout">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            layout
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="flex items-center gap-3 py-2 px-3 rounded-xl bg-white/[0.05] border border-white/[0.06]"
          >
            <span className="font-mono text-[10px] text-[#7DB7D6]/60 w-4 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-xs text-[rgba(245,245,240,0.75)] flex-1 truncate">
              {item.label}
            </span>
            <CheckCircle size={14} weight="fill" className="text-[#D4A373]/60 shrink-0" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
})

/* ─── Bento Card 02: Live Status with pulse badge ─── */
const LiveStatus = memo(function LiveStatus() {
  const [showBadge, setShowBadge] = useState(false)

  useEffect(() => {
    const cycle = () => {
      setTimeout(() => setShowBadge(true), 800)
      setTimeout(() => setShowBadge(false), 3800)
    }
    cycle()
    const id = setInterval(cycle, 5000)
    return () => clearInterval(id)
  }, [])

  const automations = [
    { name: 'Relance courriel', status: 'live' },
    { name: 'Sync CRM → Sheets', status: 'live' },
    { name: 'Rapport hebdo', status: 'live' },
  ]

  return (
    <div className="relative mt-4">
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ y: -12, opacity: 0, scale: 0.85 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -8, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className="absolute -top-3 right-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A373] text-[#0A2E4D] text-[10px] font-bold shadow-lg z-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E4D] animate-[pulse-dot_1s_ease-in-out_infinite]" />
            DEPLOYED
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-2">
        {automations.map((a) => (
          <div
            key={a.name}
            className="flex items-center justify-between py-2 px-3 rounded-xl bg-white/[0.05] border border-white/[0.06]"
          >
            <span className="text-xs text-[rgba(245,245,240,0.72)] truncate">{a.name}</span>
            <span className="flex items-center gap-1.5 shrink-0 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="font-mono text-[9px] text-emerald-400/80 uppercase tracking-wide">
                live
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})

/* ─── Bento Card 03: Typewriter cycling ─── */
const atelierTopics = [
  'Comment automatiser vos relances clients',
  'Structurer un CRM sans coder',
  'Identifier vos 3 quick wins I.A.',
  'Comprendre Make en 60 minutes',
]

const Typewriter = memo(function Typewriter() {
  const [topicIdx, setTopicIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = atelierTopics[topicIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 42)
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTopicIdx((i) => (i + 1) % atelierTopics.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, topicIdx])

  return (
    <div className="mt-4 p-3 rounded-xl bg-white/[0.05] border border-white/[0.06]">
      <p className="text-[10px] text-[#7DB7D6]/60 uppercase tracking-widest mb-2">
        Prochain atelier
      </p>
      <p className="text-xs text-[rgba(245,245,240,0.85)] min-h-[2.4rem] leading-relaxed">
        {displayed}
        <span className="inline-block w-px h-3.5 bg-[#D4A373] ml-0.5 align-middle animate-[pulse-dot_0.8s_ease-in-out_infinite]" />
      </p>
    </div>
  )
})

/* ─── Main Services Section ─── */
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#0A2E4D] py-28 md:py-36 overflow-hidden rounded-t-3xl"
    >
      {/* Subtle wave texture background */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/8.png')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7DB7D6] mb-4">
              Ce qu&apos;on fait
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB] max-w-[18ch]">
              Quatre services.
              <br />
              <span className="text-[rgba(247,243,235,0.4)]">Un seul objectif.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento grid — row 1: 2fr 1fr | row 2: 1fr 2fr */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 01 — Diagnostic (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0 }}
            className="md:col-span-2"
          >
            <SpotlightCard className="h-full rounded-[2rem] bg-white/[0.04] border border-white/[0.08] p-8 md:p-10 flex flex-col gap-4 shadow-[0_20px_60px_-20px_rgba(10,46,77,0.5)] hover:border-white/[0.14] transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#7DB7D6]/50">01</span>
                  <MagnifyingGlass size={20} weight="duotone" className="text-[#7DB7D6]" />
                </div>
                <span className="text-xs px-3 py-1.5 rounded-full bg-[#D4A373]/15 text-[#D4A373] font-mono">
                  À partir de 2 900$
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#F7F3EB] mb-1">
                  Diagnostic & stratégie
                </h3>
                <p className="text-sm text-[rgba(245,245,240,0.55)] leading-relaxed max-w-[52ch]">
                  On mesure avant d&apos;automatiser. Cartographie des processus, chiffrage heures→$,
                  prototype démontrable. En 2–3 semaines vous avez un plan clair.
                </p>
              </div>
              <IntelligentList />
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-auto self-start flex items-center gap-2 text-sm text-[#D4A373] hover:text-[#F7F3EB] transition-colors font-medium group"
              >
                Commencer par le diagnostic
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </SpotlightCard>
          </motion.div>

          {/* Card 02 — Implantation (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.1 }}
          >
            <SpotlightCard className="h-full rounded-[2rem] bg-white/[0.04] border border-white/[0.08] p-8 flex flex-col gap-4 shadow-[0_20px_60px_-20px_rgba(10,46,77,0.5)] hover:border-white/[0.14] transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#7DB7D6]/50">02</span>
                  <Gear size={20} weight="duotone" className="text-[#7DB7D6]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[#F7F3EB] mb-1">
                  Implantation
                </h3>
                <p className="text-sm text-[rgba(245,245,240,0.55)] leading-relaxed">
                  Une automation à la fois. Chaque livrable : monitoring, alertes,
                  logs, doc, formation, 7j de stabilisation.
                </p>
              </div>
              <LiveStatus />
              <span className="mt-auto self-start text-xs px-3 py-1.5 rounded-full bg-[#D4A373]/12 text-[#D4A373] font-mono">
                À partir de 750$/automation
              </span>
            </SpotlightCard>
          </motion.div>

          {/* Card 03 — Éducation (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.15 }}
          >
            <SpotlightCard className="h-full rounded-[2rem] bg-white/[0.04] border border-white/[0.08] p-8 flex flex-col gap-4 shadow-[0_20px_60px_-20px_rgba(10,46,77,0.5)] hover:border-white/[0.14] transition-colors duration-300">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-widest text-[#7DB7D6]/50">03</span>
                <Chalkboard size={20} weight="duotone" className="text-[#7DB7D6]" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[#F7F3EB] mb-1">
                  Éducation
                </h3>
                <p className="text-sm text-[rgba(245,245,240,0.55)] leading-relaxed">
                  Conférences 60–90 min, ateliers ½ journée ou journée. Deux
                  niveaux : sensibilisation et avancé.
                </p>
              </div>
              <Typewriter />
            </SpotlightCard>
          </motion.div>

          {/* Card 04 — Adoption (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.2 }}
            className="md:col-span-2"
          >
            <SpotlightCard className="h-full rounded-[2rem] bg-white/[0.04] border border-white/[0.08] p-8 md:p-10 flex flex-col gap-5 shadow-[0_20px_60px_-20px_rgba(10,46,77,0.5)] hover:border-white/[0.14] transition-colors duration-300">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#7DB7D6]/50">04</span>
                  <CheckCircle size={20} weight="duotone" className="text-[#7DB7D6]" />
                </div>
                <span className="text-xs px-3 py-1.5 rounded-full bg-[#D4A373]/12 text-[#D4A373] font-mono">
                  290$ – 2 490$/mois
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#F7F3EB] mb-1">
                  Adoption & maintenance
                </h3>
                <p className="text-sm text-[rgba(245,245,240,0.55)] leading-relaxed max-w-[52ch]">
                  Stabiliser en conditions réelles, documenter clairement, former
                  votre équipe. Option maintenance mensuelle pour maintenir et
                  optimiser dans le temps.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                {['Stabilisation', 'Documentation', 'Formation', 'Optimisation'].map((kw) => (
                  <div
                    key={kw}
                    className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                  >
                    <Circle size={6} weight="fill" className="text-[#7DB7D6]/60 shrink-0" />
                    <span className="text-[11px] text-[rgba(245,245,240,0.6)] font-medium">
                      {kw}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
