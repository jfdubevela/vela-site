'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollReveal from '../ui/ScrollReveal'

const HOURS = 5
const RATE = 35
const WEEKS = 52
const PERCENT = 0.20

export default function Temoignages() {
  const [hours, setHours] = useState(HOURS)
  const [rate, setRate] = useState(RATE)

  const annual = hours * rate * WEEKS
  const cost = annual * PERCENT
  const months = cost / (hours * rate * 4.3)

  return (
    <section id="tarification" className="relative bg-[#0A2E4D] py-28 md:py-36 rounded-t-3xl overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/carte3.png"
          alt=""
          fill
          unoptimized
          className="object-cover object-center opacity-[0.06] mix-blend-luminosity blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E4D]/60 via-transparent to-[#0A2E4D]/80" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.25em] text-[#7DB7D6] mb-4">Tarification</p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB] mb-4">
            Un prix basé sur ce que<br />vous économisez vraiment.
          </h2>
          <p className="text-base text-[rgba(245,245,240,0.5)] max-w-[52ch] mb-16">
            Pas de forfait arbitraire. On calcule la valeur réelle de chaque automatisation, et on charge 20 % de ça.
          </p>
        </ScrollReveal>

        {/* Formula */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-stretch mb-20">
          {[
            { top: 'Heures sauvées par semaine', sub: 'mesurées avant de commencer', accent: false },
            { op: '×' },
            { top: 'Coût horaire', sub: 'votre taux réel', accent: false },
            { op: '×' },
            { top: '52 semaines', sub: 'sur un an', accent: false },
            { op: '×' },
            { top: '20 %', sub: 'de la valeur annuelle', accent: true },
          ].map((item, i) =>
            'op' in item ? (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="text-2xl font-bold text-[rgba(245,245,240,0.2)] text-center flex items-center justify-center h-full">{item.op}</div>
              </ScrollReveal>
            ) : (
              <ScrollReveal key={i} delay={i * 0.08} className="h-full">
                <div className={`h-full rounded-2xl p-5 flex flex-col justify-between gap-3 border ${item.accent ? 'bg-[#D4A373]/10 border-[#D4A373]/30' : 'bg-white/[0.04] border-white/[0.08]'}`}>
                  <span className={`font-black leading-tight ${item.accent ? 'text-[#D4A373] text-5xl md:text-6xl' : 'text-[#F7F3EB] text-2xl'}`}>{item.top}</span>
                  <span className="text-xs text-[rgba(245,245,240,0.35)]">{item.sub}</span>
                </div>
              </ScrollReveal>
            )
          )}
        </div>

        {/* Interactive calculator */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-[2rem] bg-white/[0.04] border border-white/[0.08] p-8 md:p-12 mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7DB7D6] mb-8">Calculez votre cas</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              {/* Sliders */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-baseline">
                    <label className="text-sm text-[rgba(245,245,240,0.6)]">Heures sauvées / semaine</label>
                    <span className="text-2xl font-black font-mono text-[#F7F3EB]">{hours}h</span>
                  </div>
                  <input
                    type="range" min={1} max={40} value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full accent-[#D4A373] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[rgba(245,245,240,0.2)]">
                    <span>1h</span><span>40h</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-baseline">
                    <label className="text-sm text-[rgba(245,245,240,0.6)]">Coût horaire</label>
                    <span className="text-2xl font-black font-mono text-[#F7F3EB]">{rate} $/h</span>
                  </div>
                  <input
                    type="range" min={15} max={200} step={5} value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full accent-[#D4A373] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[rgba(245,245,240,0.2)]">
                    <span>15 $/h</span><span>200 $/h</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col gap-6 justify-center">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-[rgba(245,245,240,0.4)] uppercase tracking-[0.15em]">Valeur annuelle sauvée</span>
                  <motion.span
                    key={annual}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black font-mono text-[#F7F3EB]"
                  >
                    {annual.toLocaleString('fr-CA')} $
                  </motion.span>
                </div>

                <div className="w-full h-px bg-white/[0.06]" />

                <div className="flex flex-col gap-1">
                  <span className="text-xs text-[rgba(245,245,240,0.4)] uppercase tracking-[0.15em]">Ce que vous payez (20 %)</span>
                  <motion.span
                    key={cost}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black font-mono text-[#D4A373]"
                  >
                    {Math.round(cost).toLocaleString('fr-CA')} $
                  </motion.span>
                </div>

                <div className="w-full h-px bg-white/[0.06]" />

                {/* ROI bar */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-[rgba(245,245,240,0.4)] uppercase tracking-[0.15em]">Rentable après</span>
                  <span className="text-2xl font-black font-mono text-[#7DB7D6]">
                    {months < 1 ? '< 1 mois' : `${Math.round(months * 10) / 10} mois`}
                  </span>
                  <div className="relative h-2 rounded-full bg-white/[0.06] overflow-hidden mt-1">
                    <motion.div
                      animate={{ width: `${Math.min((Math.round(months * 10) / 10 / 12) * 100, 100)}%` }}
                      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#7DB7D6] to-[#D4A373]"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-[rgba(245,245,240,0.2)]">
                    <span>0</span><span>12 mois</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Custom pricing note */}
        <ScrollReveal delay={0.15}>
          <div className="rounded-2xl border border-[#7DB7D6]/20 bg-white/[0.03] p-7 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#7DB7D6] font-mono">Projets sur mesure</span>
                <span className="text-lg font-black text-[#F7F3EB] leading-tight">
                  Agents IA, dashboards &amp; systèmes complexes
                </span>
                <span className="text-sm text-[rgba(245,245,240,0.45)] max-w-[55ch] mt-1">
                  Certains projets dépassent l&apos;automatisation standard. La tarification est établie après le diagnostic — toujours transparente, toujours basée sur la valeur créée.
                </span>
              </div>
              <span className="shrink-0 text-xs font-mono px-4 py-2 rounded-full border border-[#7DB7D6]/25 text-[#7DB7D6] self-start">
                Prix sur devis
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                'Agents IA multi-étapes',
                'Tableaux de bord live',
                'Synchronisation CRM + ERP',
                'Traitement de documents IA',
                'Qualification de prospects automatisée',
                'Rapports exécutifs auto-générés',
                'Chatbot interne d\'équipe',
                'Alertes intelligentes multi-sources',
                'Intégrations API sur mesure',
              ].map((example) => (
                <span
                  key={example}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[rgba(245,245,240,0.55)]"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
