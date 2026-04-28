'use client'

import { useEffect, memo } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Gear,
  Chalkboard,
  Compass,
  ArrowRight,
  Circle,
} from '@phosphor-icons/react'
import SpotlightCard from '../ui/SpotlightCard'
import ScrollReveal from '../ui/ScrollReveal'
import Link from 'next/link'

/* ─── Card 01 : Live automations (Automatisations) ─── */
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
    { name: 'Relance courriel client', status: 'live' },
    { name: 'Sync CRM → Sheets', status: 'live' },
    { name: 'Rapport hebdomadaire auto', status: 'live' },
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
              <span className="font-mono text-[9px] text-emerald-400/80 uppercase tracking-wide">live</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})

/* ─── Card 02 : Typewriter (Formation) ─── */
const formationTopic = "Utiliser l'I.A. de manière stratégique et sécuritaire"

const Typewriter = memo(function Typewriter() {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (displayed.length < formationTopic.length) {
      const timeout = setTimeout(
        () => setDisplayed(formationTopic.slice(0, displayed.length + 1)),
        42
      )
      return () => clearTimeout(timeout)
    }
  }, [displayed])

  return (
    <div className="mt-4 p-3 rounded-xl bg-white/[0.05] border border-white/[0.06]">
      <p className="text-[10px] text-[#7DB7D6]/60 uppercase tracking-widest mb-2">
        Formation populaire
      </p>
      <p className="text-xs text-[rgba(245,245,240,0.85)] min-h-[2.4rem] leading-relaxed">
        {displayed}
        <span className="inline-block w-px h-3.5 bg-[#D4A373] ml-0.5 align-middle animate-[pulse-dot_0.8s_ease-in-out_infinite]" />
      </p>
    </div>
  )
})

/* ─── Main Component ─── */
export default function ServicesHome() {
  return (
    <section
      id="services"
      className="relative bg-[#0A2E4D] py-28 md:py-36 overflow-hidden rounded-t-3xl"
    >
      <div className="texture-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7DB7D6] mb-4">
              Ce qu&apos;on fait
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB] max-w-[18ch]">
              Trois services.
              <br />
              <span className="text-[rgba(247,243,235,0.4)]">Une seule mission.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento grid : 2+1 | 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 01 — Automatisations (col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0 }}
            className="md:col-span-2"
          >
            <Link href="/automatisations" className="block h-full group">
              <SpotlightCard className="h-full rounded-[2rem] bg-white/[0.04] border border-white/[0.08] p-8 md:p-10 flex flex-col gap-4 shadow-[0_20px_60px_-20px_rgba(10,46,77,0.5)] hover:border-white/[0.14] transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] tracking-widest text-[#7DB7D6]/50">01</span>
                    <Gear size={20} weight="duotone" className="text-[#7DB7D6]" />
                  </div>
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="text-white/20 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#F7F3EB] mb-1">
                    Automatisations I.A.
                  </h3>
                  <p className="text-sm text-[rgba(245,245,240,0.55)] leading-relaxed max-w-[52ch]">
                    On élimine les tâches répétitives qui coûtent du temps et de l&apos;argent.
                    Diagnostic offert, prix fixe, livraison en 2–4 semaines.
                  </p>
                </div>
                <LiveStatus />
                <span className="mt-auto self-start flex items-center gap-2 text-sm text-[#D4A373] group-hover:text-[#F7F3EB] transition-colors font-medium">
                  Voir le service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </SpotlightCard>
            </Link>
          </motion.div>

          {/* Card 02 — Formation (col-span-1) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.1 }}
          >
            <Link href="/formations" className="block h-full group">
              <SpotlightCard className="h-full rounded-[2rem] bg-white/[0.04] border border-white/[0.08] p-8 flex flex-col gap-4 shadow-[0_20px_60px_-20px_rgba(10,46,77,0.5)] hover:border-white/[0.14] transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] tracking-widest text-[#7DB7D6]/50">02</span>
                    <Chalkboard size={20} weight="duotone" className="text-[#7DB7D6]" />
                  </div>
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="text-white/20 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#F7F3EB] mb-1">
                    Formation
                  </h3>
                  <p className="text-sm text-[rgba(245,245,240,0.55)] leading-relaxed">
                    Conférences, ateliers et programmes sur mesure pour outiller votre équipe.
                  </p>
                </div>
                <Typewriter />
                <span className="mt-auto self-start flex items-center gap-2 text-sm text-[#D4A373] group-hover:text-[#F7F3EB] transition-colors font-medium">
                  Voir les formations
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </SpotlightCard>
            </Link>
          </motion.div>

          {/* Card 03 — Coaching (col-span-3, full width) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.2 }}
            className="md:col-span-3"
          >
            <Link href="/coaching" className="block h-full group">
              <SpotlightCard className="h-full rounded-[2rem] bg-white/[0.04] border border-white/[0.08] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8 shadow-[0_20px_60px_-20px_rgba(10,46,77,0.5)] hover:border-white/[0.14] transition-colors duration-300">

                {/* Left — text */}
                <div className="flex flex-col gap-4 md:flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] tracking-widest text-[#7DB7D6]/50">03</span>
                      <Compass size={20} weight="duotone" className="text-[#7DB7D6]" />
                    </div>
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="text-white/20 group-hover:text-[#D4A373] group-hover:translate-x-1 transition-all duration-200 md:hidden"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#F7F3EB] mb-1">
                      Coaching I.A.
                    </h3>
                    <p className="text-sm text-[rgba(245,245,240,0.55)] leading-relaxed max-w-[48ch]">
                      Un accompagnement individuel pour accélérer votre transformation I.A.
                      Sessions 1-on-1, roadmap personnalisée, résultats mesurables.
                    </p>
                  </div>
                  <span className="self-start flex items-center gap-2 text-sm text-[#D4A373] group-hover:text-[#F7F3EB] transition-colors font-medium">
                    En savoir plus
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>

                {/* Right — keyword grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:w-[380px] shrink-0">
                  {[
                    'Stratégie I.A.',
                    'Roadmap sur mesure',
                    'Sessions 1-on-1',
                    'Prompting avancé',
                    'Outils concrets',
                    'Résultats mesurables',
                  ].map((kw) => (
                    <div
                      key={kw}
                      className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                    >
                      <Circle size={6} weight="fill" className="text-[#7DB7D6]/60 shrink-0" />
                      <span className="text-[11px] text-[rgba(245,245,240,0.6)] font-medium leading-snug">
                        {kw}
                      </span>
                    </div>
                  ))}
                </div>

              </SpotlightCard>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
