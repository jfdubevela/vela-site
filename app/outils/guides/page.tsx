'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { Wrench, ArrowRight, FilePdf } from '@phosphor-icons/react'

type Guide = {
  id: string
  href: string
  title: string
  tagline: string
  format: string
  thumbnail: string
}

const guides: Guide[] = [
  {
    id: 'quel-modele-ia-choisir',
    href: '/outils/guides/quel-modele-ia-choisir',
    title: "Quel modèle d'I.A. choisir ?",
    tagline:
      'Un guide visuel pour savoir quand utiliser le modèle par défaut, le modèle réflexion, ou le plus puissant disponible chez Claude et ChatGPT.',
    format: 'PDF · 2 pages',
    thumbnail: '/images/guides/quel-modele-ia-choisir/page-1.png',
  },
]

export default function GuidesPage() {
  return (
    <>
      <Nav showAnchorLinks={false} />
      <main className="bg-[#0A2E4D]">

        {/* ─── Hero ─── */}
        <section className="relative min-h-[55dvh] flex items-center overflow-hidden pt-20">
          <div className="texture-overlay" aria-hidden="true" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(125,183,214,0.10) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
            <div className="flex flex-col gap-8 max-w-[720px]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
              >
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#7DB7D6]/50 bg-[#C5DCE8] text-[#1C3D55] text-[15px] font-medium tracking-wide">
                  <Wrench size={15} weight="duotone" />
                  Outils · Guides
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 75, damping: 18, delay: 0.25 }}
                className="text-[clamp(2.4rem,5.5vw,4.4rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB]"
              >
                Des guides gratuits,
                <br />
                <span className="text-[#D4A373]">à utiliser dès aujourd&apos;hui.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.4 }}
                className="text-base md:text-lg text-[rgba(245,245,240,0.58)] leading-relaxed max-w-[50ch]"
              >
                Des ressources concrètes pour utiliser l&apos;I.A. dans votre PME.{' '}
                <span className="text-[rgba(245,245,240,0.88)] font-semibold">
                  Gratuites, sans formulaire. On en ajoute au fil du temps.
                </span>
              </motion.p>
            </div>
          </div>
        </section>

        {/* ─── Grille de guides ─── */}
        <section className="relative py-24 md:py-32 bg-[#F5F5F0] rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.2)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <div className="mb-14">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/50 mb-4">
                  Bibliothèque de guides
                </p>
                <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black tracking-normal leading-[0.95] text-[#0A2E4D] max-w-[22ch]">
                  Choisissez votre guide.
                  <br />
                  <span className="text-[#0A2E4D]/30">Téléchargez-le en un clic.</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((g, i) => (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ type: 'spring', stiffness: 70, damping: 18, delay: i * 0.08 }}
                >
                  <Link href={g.href} className="block h-full">
                    <SpotlightCard
                      variant="light"
                      className="h-full rounded-[2rem] bg-white border border-[#0A2E4D]/[0.08] hover:border-[#0A2E4D]/[0.2] transition-colors duration-300 overflow-hidden flex flex-col shadow-[0_8px_40px_-12px_rgba(10,46,77,0.12)]"
                    >
                      <div className="relative aspect-[4/3] bg-[#F7F3EB] border-b border-[#0A2E4D]/[0.08]">
                        <Image
                          src={g.thumbnail}
                          alt={g.title}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="p-7 flex flex-col gap-3 flex-1">
                        <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-mono uppercase tracking-widest text-[#0A2E4D]/50 px-2.5 py-1 rounded-full bg-[#0A2E4D]/[0.05] border border-[#0A2E4D]/[0.08]">
                          <FilePdf size={11} />
                          {g.format}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-[#0A2E4D] leading-snug">
                          {g.title}
                        </h3>
                        <p className="text-[0.9375rem] text-[#0A2E4D]/55 leading-relaxed flex-1">
                          {g.tagline}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2E4D] mt-2">
                          Voir le guide
                          <ArrowRight size={14} weight="bold" />
                        </span>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.div>
              ))}

              {/* Carte "à venir" */}
              <div className="rounded-[2rem] border border-dashed border-[#0A2E4D]/[0.15] flex flex-col items-center justify-center gap-3 p-7 text-center min-h-[280px]">
                <Wrench size={22} weight="duotone" className="text-[#0A2E4D]/25" />
                <p className="text-sm text-[#0A2E4D]/40 max-w-[20ch]">
                  D&apos;autres guides gratuits arrivent bientôt.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
