'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'
import { ArrowDown } from '@phosphor-icons/react'

interface SkillHeroProps {
  badge: string
  line1: string
  line2: string
  subtitle: string
  ctaLabel: string
}

const wordVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
}

export default function SkillHero({ badge, line1, line2, subtitle, ctaLabel }: SkillHeroProps) {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const line1Words = line1.split(' ')
  const line2Words = line2.split(' ')

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0A2E4D]">
      {/* Fond dégradé radial subtil */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, #0D3760 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 80% 110%, rgba(125,183,214,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-14 w-full">
        <div className="max-w-3xl flex flex-col gap-7">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className="self-start"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4A373]/40 bg-[rgba(212,163,115,0.10)] text-[#D4A373] text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-[pulse-dot_2s_ease-in-out_infinite]" />
              {badge}
            </span>
          </motion.div>

          {/* H1 staggeré */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
            className="text-[clamp(2.4rem,5.8vw,4.6rem)] font-black tracking-tight leading-[0.95] text-[#F7F3EB]"
          >
            <span className="block">
              {line1Words.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.22em] last:mr-0">
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block text-[#D4A373]">
              {line2Words.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.22em] last:mr-0">
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.65 }}
            className="text-base md:text-lg text-[rgba(245,245,240,0.62)] leading-relaxed max-w-[52ch]"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_8px_32px_-8px_rgba(212,163,115,0.45)]"
              onClick={() => scrollTo('formulaire')}
            >
              {ctaLabel}
            </MagneticButton>
            <MagneticButton
              className="inline-flex items-center gap-2 border border-[rgba(245,245,240,0.22)] text-[#F5F5F0] hover:border-[rgba(245,245,240,0.45)] hover:bg-white/[0.04] text-sm px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
              onClick={() => scrollTo('explication')}
            >
              Comment ca marche
              <ArrowDown size={15} weight="bold" className="opacity-70" />
            </MagneticButton>
          </motion.div>

          {/* Micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-xs text-[rgba(245,245,240,0.28)] font-mono tracking-wide"
          >
            Gratuit · Livraison par courriel · Aucun spam
          </motion.p>

        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,245,240,0.25)]">Défiler</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[rgba(245,245,240,0.25)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
