'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { XCircle, CheckCircle } from '@phosphor-icons/react'
import ScrollReveal from '../ui/ScrollReveal'

const before = [
  'Relances clients faites à la main',
  'Données de ventes dans 3 tableurs différents',
  'Rappels oubliés, leads perdus',
  '6h/semaine à copier-coller',
  'Aucune visibilité sur les opérations',
]

const after = [
  'Relances déclenchées automatiquement',
  'Dashboard centralisé mis à jour en temps réel',
  'Zéro oubli, le système tourne sans vous',
  '6h/semaine récupérées',
  'Rapports automatiques, décisions éclairées',
]

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 1600
    const startTime = performance.now()
    let raf: number
    function update(now: number) {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('fr-CA')}{suffix}
    </span>
  )
}

export default function AvantApres() {
  return (
    <section id="avant-apres" className="bg-[#F5F5F0] py-28 md:py-36 overflow-hidden relative rounded-t-3xl">
      {/* Background image decorative */}
      <div className="absolute right-0 bottom-0 w-[380px] h-[260px] hidden lg:block pointer-events-none select-none">
        <Image
          src="/images/12.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F5F5F0]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F0] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/40 mb-4">
              La transformation
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-normal leading-[0.95] text-[#0A2E4D]">
              Avant. Après.
              <br />
              <span className="text-[#0A2E4D]/35">La différence se mesure.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(10,46,77,0.12)]">
          {/* AVANT */}
          <div className="bg-[#EDE9E0] p-8 md:p-10 flex flex-col gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#0A2E4D]/40 mb-1">Avant VELA</p>
              <p className="text-lg font-bold text-[#0A2E4D]/60">La réalité de beaucoup de PME</p>
            </div>
            <div className="flex flex-col gap-3">
              {before.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-3">
                    <XCircle size={18} weight="fill" className="text-rose-400/70 mt-0.5 shrink-0" />
                    <span className="text-sm text-[#0A2E4D]/60 leading-relaxed">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* APRÈS */}
          <div className="bg-[#0A2E4D] p-8 md:p-10 flex flex-col gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#7DB7D6]/70 mb-1">Avec VELA</p>
              <p className="text-lg font-bold text-[#F7F3EB]/70">Systèmes solides, pas démos fragiles</p>
            </div>
            <div className="flex flex-col gap-3">
              {after.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} weight="fill" className="text-[#D4A373] mt-0.5 shrink-0" />
                    <span className="text-sm text-[rgba(245,245,240,0.75)] leading-relaxed">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Central metric */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 py-8 rounded-[1.5rem] bg-[#0A2E4D] border border-white/[0.06]">
            <div className="text-center md:text-left">
              <p className="text-5xl md:text-6xl font-black font-mono text-[#D4A373] tracking-tighter">
                +<CountUp target={15000} suffix="$" />
              </p>
              <p className="text-sm text-[rgba(245,245,240,0.45)] mt-1 font-mono">
                par an, c&apos;est ce que représentent 6h/semaine récupérées
                <br className="hidden md:block" /> au taux de 50$/h chargé
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
