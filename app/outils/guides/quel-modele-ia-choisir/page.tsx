'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  Sparkle,
  CheckCircle,
  ArrowRight,
  ArrowDown,
  FilePdf,
  DownloadSimple,
} from '@phosphor-icons/react'

const PDF_HREF = '/downloads/vela-guide-quel-modele-ia-choisir.pdf'

const niveaux = [
  {
    label: 'Niveau 1 · Par défaut',
    title: 'Le modèle par défaut',
    subtitle: 'Votre réflexe pour presque tout',
    footer: '≈ 90% de ton quotidien',
    accent: '#7DB7D6',
    items: [
      'Rédaction et réécriture',
      'Courriels et réponses clients',
      'Résumés de textes',
      'Brainstorm et idées',
      'Traduction',
    ],
  },
  {
    label: 'Niveau 2 · Au besoin',
    title: 'Le modèle réflexion',
    subtitle: 'Quand le niveau 1 déçoit',
    footer: "Monte d'un cran, pas plus",
    accent: '#D4A373',
    items: [
      'Long document à analyser',
      'Problème complexe à démêler',
      'Analyse fine ou nuancée',
      'Calcul, logique, étapes multiples',
      'Travail à enjeux élevés',
    ],
  },
]

const comparatif = [
  {
    niveau: 'Défaut',
    contexte: '90% du temps',
    description: 'Rédaction, courriels, résumés, brainstorm, réponses clients.',
    accent: '#7DB7D6',
    claude: { nom: 'Sonnet 4.6', note: 'Solide, rapide, polyvalent. Ton point de départ pour presque tout.' },
    chatgpt: { nom: 'Instant', note: 'Le défaut pour tous les plans. Rapide et efficace au quotidien.' },
  },
  {
    niveau: 'Réflexion',
    contexte: 'Quand le défaut ne suffit pas',
    description: 'Analyse dense, long document, problème complexe à démêler.',
    accent: '#0A2E4D',
    claude: { nom: 'Opus 4.8', note: 'Raisonnement avancé et nuancé. Plus lent, mais nettement plus profond.' },
    chatgpt: { nom: 'Medium → High', note: 'Réflexion légère à poussée. Monte graduellement selon la complexité.' },
  },
  {
    niveau: 'Gros calibre',
    contexte: 'Projets à enjeux élevés',
    description: 'Travail long et complexe à haute valeur. À utiliser avec parcimonie.',
    accent: '#D4A373',
    claude: { nom: 'Fable 5', note: 'Le plus puissant. Pense de façon autonome. Réponse plus lente, résultat plus ambitieux.' },
    chatgpt: { nom: 'Extra High / Pro', note: 'Le niveau le plus lourd disponible. Abonnement Pro requis pour les modes Pro.' },
  },
]

const previews = [
  { src: '/images/guides/quel-modele-ia-choisir/page-1.png', label: 'Page 1' },
  { src: '/images/guides/quel-modele-ia-choisir/page-2.png', label: 'Page 2' },
]

export default function GuideQuelModeleIAChoisirPage() {
  function scrollToApercu() {
    document.getElementById('apercu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Nav showAnchorLinks={false} />
      <main className="bg-[#0A2E4D]">

        {/* ─── Hero ─── */}
        <section className="relative min-h-[72dvh] flex items-center overflow-hidden pt-20">
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
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

              <div className="flex flex-col gap-8 max-w-[640px]">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
                >
                  <Link
                    href="/outils/guides"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#7DB7D6]/50 bg-[#C5DCE8] text-[#1C3D55] text-[15px] font-medium tracking-wide hover:bg-[#C5DCE8]/80 transition-colors"
                  >
                    <Sparkle size={15} weight="duotone" />
                    Guide gratuit
                  </Link>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 75, damping: 18, delay: 0.25 }}
                  className="text-[clamp(2.2rem,5vw,4rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB]"
                >
                  Quel modèle d&apos;I.A.
                  <br />
                  <span className="text-[#D4A373]">choisir ?</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.4 }}
                  className="text-base md:text-lg text-[rgba(245,245,240,0.58)] leading-relaxed max-w-[48ch]"
                >
                  Le réflexe à adopter avant de lancer une tâche à votre I.A.{' '}
                  <span className="text-[rgba(245,245,240,0.88)] font-semibold">
                    Quand rester sur le modèle par défaut, et quand monter de niveau, chez Claude comme chez ChatGPT.
                  </span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.55 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <a
                    href={PDF_HREF}
                    download
                    className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_8px_32px_-8px_rgba(212,163,115,0.45)]"
                  >
                    <DownloadSimple size={16} weight="bold" />
                    Télécharger le guide (PDF)
                  </a>
                  <button
                    onClick={scrollToApercu}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(245,245,240,0.65)] hover:text-[#F5F5F0] transition-colors"
                  >
                    Voir l&apos;aperçu
                    <ArrowDown size={14} weight="bold" />
                  </button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="text-xs text-[rgba(245,245,240,0.25)] font-mono tracking-wide"
                >
                  Gratuit · Sans formulaire · PDF · 2 pages
                </motion.p>
              </div>

              {/* Aperçu rapide dans le hero */}
              <motion.div
                initial={{ opacity: 0, y: 24, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.5 }}
                className="hidden lg:block relative w-[220px] shrink-0"
              >
                <div className="rounded-2xl border-4 border-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden rotate-2">
                  <Image
                    src={previews[0].src}
                    alt="Aperçu du guide, page 1"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Contenu : Le réflexe en 2 niveaux ─── */}
        <section className="relative py-24 md:py-32 bg-[#F5F5F0] rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.2)]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <div className="mb-12 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/50 mb-4">
                  Le réflexe en 2 niveaux
                </p>
                <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black tracking-normal leading-[1.05] text-[#0A2E4D] max-w-[26ch]">
                  Quel modèle d&apos;I.A. choisir ?
                </h2>
              </div>
            </ScrollReveal>

            {/* Bandeau 90% */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl bg-[#0A2E4D] p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                <span className="text-[clamp(3rem,6vw,4.5rem)] font-black text-[#D4A373] leading-none shrink-0">
                  90%
                </span>
                <p className="text-base md:text-lg text-[rgba(245,245,240,0.75)] leading-relaxed">
                  Toujours commencer par le modèle par défaut. Il couvre 90% des besoins. Essayer
                  seulement si vous n&apos;êtes pas satisfait après 2 ou 3 essais.
                </p>
              </div>
            </ScrollReveal>

            {/* Deux niveaux */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {niveaux.map((n, i) => (
                <ScrollReveal key={n.title} delay={0.15 + i * 0.08}>
                  <div
                    className="h-full rounded-[1.75rem] bg-white border p-7 flex flex-col gap-5 shadow-[0_8px_40px_-12px_rgba(10,46,77,0.1)]"
                    style={{ borderColor: `${n.accent}50` }}
                  >
                    <span
                      className="inline-flex self-start text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${n.accent}1f`, color: n.accent === '#7DB7D6' ? '#1C3D55' : '#7A4E26' }}
                    >
                      {n.label}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold tracking-tight text-[#0A2E4D]">{n.title}</h3>
                      <p className="text-sm font-semibold text-[#0A2E4D]/60">{n.subtitle}</p>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {n.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle size={16} weight="fill" style={{ color: n.accent }} className="mt-0.5 shrink-0" />
                          <span className="text-[0.9375rem] text-[#0A2E4D]/65 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-bold mt-auto pt-3 border-t border-[#0A2E4D]/[0.08]" style={{ color: n.accent === '#7DB7D6' ? '#1C3D55' : '#7A4E26' }}>
                      {n.footer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Citation contexte */}
            <ScrollReveal delay={0.25}>
              <div className="rounded-2xl bg-[#0A2E4D]/[0.04] border-l-4 border-[#D4A373] p-7">
                <p className="text-base md:text-lg text-[#0A2E4D]/75 leading-relaxed">
                  Le modèle compte moins que le <strong className="text-[#0A2E4D]">contexte</strong> que
                  tu lui donnes. Un modèle moyen bien briefé bat un modèle puissant mal briefé.{' '}
                  <strong className="text-[#7DB7D6]">Garbage in, garbage out.</strong>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Comparatif par plateforme ─── */}
        <section className="relative py-24 md:py-32 bg-[#F5F5F0]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <div className="mb-12 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/50 mb-4">
                  Comparatif par plateforme
                </p>
                <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black tracking-normal leading-[1.05] text-[#0A2E4D] max-w-[28ch]">
                  Le même réflexe, chez Claude et chez ChatGPT.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl overflow-hidden border border-[#0A2E4D]/[0.08] shadow-[0_8px_40px_-12px_rgba(10,46,77,0.1)]">
                {/* Header */}
                <div className="hidden md:grid grid-cols-[160px_1fr_1fr] bg-[#0A2E4D] text-[rgba(245,245,240,0.6)] text-[11px] uppercase tracking-widest font-mono">
                  <div className="px-6 py-4">Niveau</div>
                  <div className="px-6 py-4 text-center">Claude · Anthropic</div>
                  <div className="px-6 py-4 text-center">ChatGPT · OpenAI</div>
                </div>

                {comparatif.map((row, i) => (
                  <div
                    key={row.niveau}
                    className={`grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] bg-white ${
                      i > 0 ? 'border-t border-[#0A2E4D]/[0.08]' : ''
                    }`}
                    style={{ borderLeft: `4px solid ${row.accent}` }}
                  >
                    <div className="px-6 py-6 flex flex-col gap-1.5">
                      <span
                        className="inline-flex self-start text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                        style={{ backgroundColor: `${row.accent}1f`, color: row.accent }}
                      >
                        {row.niveau}
                      </span>
                      <p className="text-base font-bold text-[#0A2E4D]">{row.contexte}</p>
                      <p className="text-xs text-[#0A2E4D]/45 leading-relaxed">{row.description}</p>
                    </div>
                    <div className="px-6 py-6 flex flex-col items-center text-center gap-1.5 md:border-l border-[#0A2E4D]/[0.06]">
                      <p className="text-lg font-bold text-[#0A2E4D]">{row.claude.nom}</p>
                      <p className="text-sm text-[#0A2E4D]/50 leading-relaxed max-w-[28ch]">{row.claude.note}</p>
                    </div>
                    <div className="px-6 py-6 flex flex-col items-center text-center gap-1.5 md:border-l border-[#0A2E4D]/[0.06]">
                      <p className="text-lg font-bold text-[#0A2E4D]">{row.chatgpt.nom}</p>
                      <p className="text-sm text-[#0A2E4D]/50 leading-relaxed max-w-[28ch]">{row.chatgpt.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Aperçu du PDF ─── */}
        <section id="apercu" className="relative py-24 md:py-32 overflow-hidden">
          <div className="texture-overlay" aria-hidden="true" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7DB7D6]/20 bg-[#7DB7D6]/08 text-[#7DB7D6] text-xs font-medium tracking-wide mb-5">
                  <FilePdf size={14} />
                  Aperçu du guide
                </span>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB] max-w-[26ch] mx-auto">
                  Les 2 pages, telles
                  <br />
                  <span className="text-[rgba(247,243,235,0.4)]">qu&apos;elles sont dans le PDF.</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-12">
              {previews.map((p, i) => (
                <ScrollReveal key={p.src} delay={i * 0.1}>
                  <a
                    href={PDF_HREF}
                    download
                    className="block group"
                    aria-label={`Télécharger le guide, ${p.label}`}
                  >
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)] group-hover:border-[#D4A373]/40 transition-colors duration-300">
                      <Image
                        src={p.src}
                        alt={`Aperçu du guide, ${p.label}`}
                        width={1200}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-center text-xs text-[rgba(245,245,240,0.3)] font-mono mt-3 tracking-wide">
                      {p.label}
                    </p>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <div className="flex justify-center">
                <a
                  href={PDF_HREF}
                  download
                  className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_8px_32px_-8px_rgba(212,163,115,0.45)]"
                >
                  <DownloadSimple size={16} weight="bold" />
                  Télécharger le guide (PDF)
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Cross-link : aller plus loin ─── */}
        <section className="relative py-24 md:py-32 bg-[#F5F5F0]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
            <ScrollReveal>
              <div className="rounded-[2rem] bg-[#0A2E4D] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex flex-col gap-3 max-w-[42ch]">
                  <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-black tracking-tight leading-tight text-[#F7F3EB]">
                    Vous voulez aller plus loin avec l&apos;I.A. ?
                  </h2>
                  <p className="text-[0.9375rem] text-[rgba(245,245,240,0.55)] leading-relaxed">
                    Formations, automatisations ou coaching : on vous aide à passer du guide à l&apos;action.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link
                    href="/formations"
                    className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    Voir les formations
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                  <Link
                    href="/outils/guides"
                    className="inline-flex items-center gap-2 border border-white/15 text-[#F5F5F0] hover:bg-white/[0.06] font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    Tous les guides
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
