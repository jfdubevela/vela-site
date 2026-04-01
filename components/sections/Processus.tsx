'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Diagnostic & stratégie',
    body: 'On cartographie vos processus, chiffre les heures → $, et identifie les quick wins. Vous repartez avec un prototype démontrable.',
    tag: '2–3 semaines',
    keywords: ['Cartographie', 'Priorisation', 'Chiffrage', 'Prototype'],
  },
  {
    num: '02',
    title: 'Implantation',
    body: 'Une automation à la fois. Chaque livrable inclut monitoring, alertes, logs, documentation (1 page), mini-formation et 7 jours de stabilisation.',
    tag: '~1 automation / semaine',
    keywords: ['Intégration', 'Fiabilisation', 'Déploiement', 'Tests'],
  },
  {
    num: '03',
    title: 'Adoption',
    body: "On stabilise en conditions réelles, on documente simplement, et on forme votre équipe pour garder le contrôle. Vous n'avez plus besoin de nous.",
    tag: 'Vous gardez tout',
    keywords: ['Stabilisation', 'Documentation', 'Formation', 'Autonomie'],
  },
]

function ProcessPathLine() {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <svg
      ref={ref}
      className="absolute top-6 left-0 right-0 hidden md:block pointer-events-none"
      height="2"
      preserveAspectRatio="none"
      style={{ width: '100%' }}
      viewBox="0 0 1000 2"
    >
      <motion.path
        d="M 0 1 L 1000 1"
        stroke="#D4A373"
        strokeWidth="1"
        strokeDasharray="6 6"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
      />
    </svg>
  )
}

export default function Processus() {
  return (
    <section
      id="processus"
      className="bg-[#F5F5F0] py-28 md:py-36 overflow-hidden rounded-t-3xl"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/40 mb-4">
              Comment ça fonctionne
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-normal leading-[0.95] text-[#0A2E4D]">
              La méthode VELA.
              <br />
              <span className="text-[#0A2E4D]/40">Simple. Mesurée. Fiable.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps grid with path line */}
        <div className="relative">
          <ProcessPathLine />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  type: 'spring',
                  stiffness: 70,
                  damping: 18,
                  delay: i * 0.14,
                }}
                className="flex flex-col gap-5"
              >
                {/* Number watermark + dot */}
                <div className="relative flex items-start gap-4">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#0A2E4D] flex items-center justify-center shrink-0 shadow-[0_4px_20px_-4px_rgba(10,46,77,0.25)]">
                    <span className="font-mono text-xs font-bold text-[#F7F3EB]">
                      {step.num}
                    </span>
                  </div>
                  {/* Watermark number */}
                  <span
                    className="absolute -top-6 -left-2 font-mono font-black text-[5rem] leading-none text-[#0A2E4D]/[0.06] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-[#0A2E4D]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#0A2E4D]/60 leading-relaxed max-w-[38ch]">
                    {step.body}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {step.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-[#0A2E4D]/[0.07] text-[#0A2E4D]/60 font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Tag */}
                  <span className="self-start mt-2 text-xs px-3 py-1.5 rounded-full bg-[#D4A373]/15 text-[#8B5E2A] font-mono font-medium">
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rule */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 pt-8 border-t border-[#0A2E4D]/10 flex flex-col md:flex-row items-start md:items-center gap-3">
            <span className="w-1.5 h-8 rounded-full bg-[#D4A373] shrink-0" />
            <p className="text-sm text-[#0A2E4D]/50 max-w-[70ch] leading-relaxed">
              <strong className="text-[#0A2E4D]/80 font-semibold">Règle structurante :</strong>{' '}
              Le diagnostic est obligatoire avant toute implantation. On ne déploie
              pas à l&apos;aveugle — on chiffre la valeur d&apos;abord.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
