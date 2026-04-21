'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import MagneticButton from '../ui/MagneticButton'
const line1 = ['Moins', 'de', 'tâches', 'manuelles.']
const line2 = ['Plus', 'de', 'temps', 'pour', 'ce', 'qui', 'compte.']

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5
  }, [])
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12])

  function scrollToSection(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
  } as const
  const wordVariants = {
    hidden: { opacity: 0, y: 44 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 18 },
    },
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background video with parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Left-to-right gradient: dark left for text, image reveals right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E4D] via-[#0A2E4D]/75 to-[#0A2E4D]/20" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A2E4D] to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-0 items-center min-h-[calc(100dvh-6rem)]">
          {/* Left column */}
          <div className="flex flex-col justify-center gap-7">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 self-start"
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#7DB7D6]/50 bg-[#C5DCE8] text-[#1C3D55] text-[15px] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#1C3D55] animate-[pulse-dot_2s_ease-in-out_infinite]" />
                Automatisation par I.A.
              </span>
            </motion.div>

            {/* H1 — staggered words */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB]"
            >
              <span className="block">
                {line1.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.22em] last:mr-0">
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block text-[#D4A373]">
                {line2.map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.22em] last:mr-0">
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.7 }}
              className="text-base md:text-lg text-[rgba(245,245,240,0.62)] leading-relaxed max-w-[50ch]"
            >
              VELA implante des automatisations par l&apos;I.A. sur mesure pour les PME québécoises.{' '}
              <span className="text-[rgba(245,245,240,0.92)] font-bold">Claires, rentables, et livrées rapidement.</span>
            </motion.p>

            {/* CTA group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_8px_32px_-8px_rgba(212,163,115,0.45)]"
                onClick={() => scrollToSection('#contact')}
              >
                Demander un diagnostic gratuit
              </MagneticButton>
              <MagneticButton
                className="inline-flex items-center gap-2 border border-[rgba(245,245,240,0.22)] text-[#F5F5F0] hover:border-[rgba(245,245,240,0.45)] hover:bg-white/[0.04] text-sm px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
                onClick={() => scrollToSection('#services')}
              >
                Voir nos services
                <ArrowDown size={15} weight="bold" className="opacity-70" />
              </MagneticButton>
            </motion.div>


            {/* Guarantee micro-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="text-xs text-[rgba(245,245,240,0.28)] font-mono tracking-wide"
            >
              Prix fixe · Aucune surprise · Vous gardez tous vos accès
            </motion.p>
          </div>

          {/* Right col — spacer (image shows through gradient) */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,245,240,0.25)]">
          Défiler
        </span>
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
