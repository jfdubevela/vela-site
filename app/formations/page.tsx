'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SpotlightCard from '@/components/ui/SpotlightCard'
import MagneticButton from '@/components/ui/MagneticButton'
import {
  Chalkboard,
  ArrowRight,
  ArrowDown,
  Users,
  Clock,
  CheckCircle,
  Plus,
  Minus,
  Sparkle,
} from '@phosphor-icons/react'

/* ─── Data ─── */
const formations = [
  {
    id: 'ia-strategique',
    num: '01',
    title: "Utiliser l'I.A. de manière stratégique et sécuritaire",
    tagline:
      "Comprendre, évaluer et intégrer l'I.A. dans votre organisation — sans risquer votre réputation.",
    duration: '60–90 min · ½ journée · journée complète',
    audience: 'Dirigeants, gestionnaires, équipes opérationnelles',
    format: 'Conférence ou atelier',
    points: [
      "Démystifier l'I.A. : ce qu'elle fait vraiment (et ce qu'elle ne fait pas)",
      "Identifier les cas d'usage à fort potentiel pour votre secteur",
      'Comprendre les risques de sécurité, de confidentialité et de conformité',
      "Cadre décisionnel pour adopter l'I.A. de façon responsable",
      'Atelier pratique : évaluer vos propres processus',
    ],
    cta: 'Réserver cette formation',
  },
  {
    id: 'sur-mesure',
    num: '02',
    title: 'Sur mesure',
    tagline:
      'Un programme co-construit pour votre équipe, votre secteur et vos objectifs précis.',
    duration: 'Variable selon vos besoins',
    audience: 'Votre équipe, votre contexte',
    format: 'Adapté à votre organisation',
    points: [
      "Programme co-conçu selon vos objectifs et votre maturité I.A.",
      "Contenu ancré dans votre secteur d'activité",
      'Exercices pratiques basés sur vos vrais processus',
      'Livrables et ressources personnalisés pour votre équipe',
      'Suivi post-formation disponible',
    ],
    cta: 'Discuter de votre projet',
  },
]

/* ─── Page ─── */
export default function FormationsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  function toggle(id: string) {
    setSelectedId((prev) => (prev === id ? null : id))
  }

  const selected = formations.find((f) => f.id === selectedId)

  function scrollToContact() {
    window.location.href = '/#contact'
  }

  return (
    <>
      <Nav />
      <main className="bg-[#0A2E4D]">

        {/* ─── Hero ─── */}
        <section className="relative min-h-[75dvh] flex items-center overflow-hidden pt-20">
          {/* Subtle texture */}
          <div
            className="absolute inset-0 opacity-[0.04] bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: "url('/images/8.png')" }}
            aria-hidden="true"
          />
          {/* Radial glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(125,183,214,0.10) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 w-full">
            <div className="flex flex-col gap-8 max-w-[64ch]">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7DB7D6]/25 bg-[#7DB7D6]/10 text-[#7DB7D6] text-xs font-medium tracking-wide">
                  <Chalkboard size={13} weight="duotone" />
                  Formations &amp; Ateliers
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 75, damping: 18, delay: 0.25 }}
                className="text-[clamp(2.4rem,5.5vw,4.4rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB]"
              >
                Former votre équipe à l&apos;I.A.
                <br />
                <span className="text-[#D4A373]">qui change vraiment les choses.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.4 }}
                className="text-base md:text-lg text-[rgba(245,245,240,0.58)] leading-relaxed"
              >
                Des formations concrètes, ancrées dans la réalité des PME québécoises.{' '}
                <span className="text-[rgba(245,245,240,0.88)] font-semibold">
                  Pas de jargon. Pas de survente. Des outils que votre équipe utilisera dès le lendemain.
                </span>
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.55 }}
                className="flex flex-wrap items-center gap-4"
              >
                <MagneticButton
                  className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_8px_32px_-8px_rgba(212,163,115,0.45)]"
                  onClick={scrollToContact}
                >
                  Demander une formation
                  <ArrowRight size={14} weight="bold" />
                </MagneticButton>
              </motion.div>

              {/* Micro-text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="text-xs text-[rgba(245,245,240,0.25)] font-mono tracking-wide"
              >
                Conférence · Atelier ½ journée · Formation sur mesure
              </motion.p>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,245,240,0.22)]">
              Nos formations
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} className="text-[rgba(245,245,240,0.22)]" />
            </motion.div>
          </motion.div>
        </section>

        {/* ─── Formations ─── */}
        <section className="relative py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

            {/* Header */}
            <ScrollReveal>
              <div className="mb-14">
                <p className="text-xs uppercase tracking-[0.25em] text-[#7DB7D6] mb-4">
                  Ce qu&apos;on enseigne
                </p>
                <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB] max-w-[22ch]">
                  Choisissez votre formation.
                  <br />
                  <span className="text-[rgba(247,243,235,0.35)]">Ou construisons-la ensemble.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-stretch">
              {formations.map((f, i) => {
                const isOpen = selectedId === f.id
                return (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8% 0px' }}
                    transition={{ type: 'spring', stiffness: 70, damping: 18, delay: i * 0.1 }}
                    onClick={() => toggle(f.id)}
                    className="cursor-pointer h-full"
                  >
                    <SpotlightCard
                      className={`h-full rounded-[2rem] bg-white/[0.04] border transition-colors duration-300 p-8 flex flex-col gap-5 shadow-[0_20px_60px_-20px_rgba(10,46,77,0.5)] ${
                        isOpen
                          ? 'border-[#D4A373]/40'
                          : 'border-white/[0.08] hover:border-white/[0.16]'
                      }`}
                    >
                      {/* Top row */}
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-2">
                          <span className="font-mono text-[10px] tracking-widest text-[#7DB7D6]/50">
                            {f.num}
                          </span>
                          <Chalkboard size={20} weight="duotone" className="text-[#7DB7D6]" />
                        </div>
                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            isOpen
                              ? 'bg-[#D4A373]/15 border-[#D4A373]/40 text-[#D4A373]'
                              : 'border-white/[0.1] text-[rgba(245,245,240,0.3)]'
                          }`}
                        >
                          {isOpen ? <Minus size={13} weight="bold" /> : <Plus size={13} weight="bold" />}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold tracking-tight text-[#F7F3EB] leading-snug">
                          {f.title}
                        </h3>
                        <p className="text-sm text-[rgba(245,245,240,0.52)] leading-relaxed">
                          {f.tagline}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#7DB7D6]/60 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                          <Clock size={11} />
                          {f.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#7DB7D6]/60 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                          <Users size={11} />
                          {f.audience}
                        </span>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                )
              })}
            </div>

            {/* Expanded detail panel */}
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 24, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 16, height: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 22 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="rounded-[2rem] border border-[#D4A373]/20 bg-white/[0.03] p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">

                      {/* Left — detail */}
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <Sparkle size={16} weight="duotone" className="text-[#D4A373]" />
                          <h4 className="text-base font-bold text-[#F7F3EB]">
                            Ce que couvre cette formation
                          </h4>
                        </div>

                        <ul className="flex flex-col gap-3">
                          {selected.points.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.07, type: 'spring', stiffness: 120, damping: 20 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle
                                size={16}
                                weight="fill"
                                className="text-[#D4A373]/70 mt-0.5 shrink-0"
                              />
                              <span className="text-sm text-[rgba(245,245,240,0.72)] leading-relaxed">
                                {point}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Format meta */}
                        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/[0.06]">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] uppercase tracking-widest text-[#7DB7D6]/50 font-mono">Format</span>
                            <span className="text-xs text-[rgba(245,245,240,0.65)]">{selected.format}</span>
                          </div>
                          <div className="w-px h-8 bg-white/[0.08] self-center" />
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] uppercase tracking-widest text-[#7DB7D6]/50 font-mono">Durée</span>
                            <span className="text-xs text-[rgba(245,245,240,0.65)]">{selected.duration}</span>
                          </div>
                          <div className="w-px h-8 bg-white/[0.08] self-center" />
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] uppercase tracking-widest text-[#7DB7D6]/50 font-mono">Pour qui</span>
                            <span className="text-xs text-[rgba(245,245,240,0.65)]">{selected.audience}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right — CTA */}
                      <div className="flex flex-col gap-4 md:min-w-[200px]">
                        <MagneticButton
                          className="inline-flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_8px_32px_-8px_rgba(212,163,115,0.40)] whitespace-nowrap"
                          onClick={scrollToContact}
                        >
                          {selected.cta}
                          <ArrowRight size={14} weight="bold" />
                        </MagneticButton>
                        <p className="text-[10px] text-[rgba(245,245,240,0.25)] font-mono text-center">
                          Réponse en 2 jours ouvrables
                        </p>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
