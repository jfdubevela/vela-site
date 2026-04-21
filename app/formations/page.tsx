'use client'

import { useState, useTransition } from 'react'
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
import { submitFormation } from '@/app/actions/contact'

/* ─── Data ─── */
type Module = { title: string; items: string[] }
type Formation = {
  id: string
  num: string
  title: string
  tagline: string
  duration: string
  audience: string
  format: string
  modules: Module[]
  cta: string
}

const formations: Formation[] = [
  {
    id: 'ia-strategique',
    num: '01',
    title: "Utiliser l'I.A. de manière stratégique et sécuritaire",
    tagline:
      "Comprendre et intégrer l\u2019I.A. dans votre travail de mani\u00e8re efficace et sans risquer vos donn\u00e9es.",
    duration: '3 heures',
    audience: 'Dirigeants, gestionnaires, \u00e9quipes op\u00e9rationnelles',
    format: 'Conférence ou atelier',
    modules: [
      {
        title: "Comprendre l'I.A. sans la magie",
        items: [
          "Ce qu'est vraiment l'I.A. générative : un outil statistique, pas une entité consciente",
          "La différence entre chercher une information (Google) et en générer une (I.A.)",
          "Le phénomène d'hallucination : pourquoi l'I.A. peut se tromper avec assurance",
        ],
      },
      {
        title: 'Sécurité et éthique : votre guide de survie',
        items: [
          "La règle d'or de la confidentialité des données",
          'Loi 25 au Québec : ce que ça change concrètement pour votre utilisation',
          "Propriété intellectuelle et biais : ce qu'il faut savoir avant de publier",
        ],
      },
      {
        title: "L\u2019art du prompting efficace",
        items: [
          'Passer du prompt de 3 mots à une instruction structurée',
          'Le cadre R.A.C.E. : Rôle, Action, Contexte, Exigence',
          "Démonstration en direct : d'un mauvais résultat à un excellent résultat",
        ],
      },
      {
        title: "Cas d\u2019usage concrets par département",
        items: [
          'Administration : résumés de rapports, ordres du jour, nettoyage de données',
          'Ventes et service client : personnalisation des approches, gestion des avis',
          "RH et gestion : descriptions de postes, pr\u00e9paration d\u2019entrevues",
        ],
      },
      {
        title: 'Boîte à outils et prochaines étapes',
        items: [
          'Quel outil choisir selon vos besoins : ChatGPT, Claude, Copilot, Gemini',
          "Comment b\u00e2tir une charte d\u2019utilisation I.A. pour votre \u00e9quipe",
        ],
      },
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
    modules: [
      {
        title: 'Un programme construit avec vous',
        items: [
          "Contenu co-conçu selon vos objectifs et votre maturité I.A.",
          "Ancré dans votre secteur d'activité spécifique",
          'Exercices pratiques basés sur vos vrais processus',
        ],
      },
      {
        title: 'Livrables et suivi',
        items: [
          'Ressources et outils personnalisés pour votre équipe',
          'Suivi post-formation disponible',
        ],
      },
    ],
    cta: 'Discuter de votre projet',
  },
]

/* ─── Detail Panel ─── */
function DetailPanel({ formation: f, onContact }: { formation: Formation; onContact: () => void }) {
  return (
    <div className="rounded-[2rem] border border-[#D4A373]/30 bg-white p-8 md:p-12 shadow-[0_8px_40px_-12px_rgba(10,46,77,0.1)]">
      <div className="flex flex-col gap-8">

        {/* Title */}
        <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-black tracking-tight leading-tight text-[#0A2E4D]">
          {f.title}
        </h2>

        {/* Modules */}
        <div className="flex flex-col gap-7">
          {f.modules.map((mod, mi) => (
            <motion.div
              key={mi}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: mi * 0.07, type: 'spring', stiffness: 120, damping: 20 }}
              className="flex flex-col gap-3"
            >
              <p className="text-base font-bold text-[#0A2E4D]">{mod.title}</p>
              <ul className="flex flex-col gap-2.5 pl-1">
                {mod.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-3">
                    <CheckCircle size={16} weight="fill" className="text-[#D4A373] mt-0.5 shrink-0" />
                    <span className="text-base text-[#0A2E4D]/65 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: meta + CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-t border-[#0A2E4D]/[0.08]">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-[#0A2E4D]/40 font-mono">Format</span>
              <span className="text-sm text-[#0A2E4D]/70">{f.format}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-[#0A2E4D]/40 font-mono">Durée</span>
              <span className="text-sm text-[#0A2E4D]/70">{f.duration}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-[#0A2E4D]/40 font-mono">Pour qui</span>
              <span className="text-sm text-[#0A2E4D]/70">{f.audience}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <MagneticButton
              className="inline-flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_8px_32px_-8px_rgba(212,163,115,0.40)] whitespace-nowrap"
              onClick={onContact}
            >
              {f.cta}
              <ArrowRight size={14} weight="bold" />
            </MagneticButton>
            <p className="text-[10px] text-[#0A2E4D]/25 font-mono text-center">
              Réponse en 2 jours ouvrables
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function FormationsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function toggle(id: string) {
    setSelectedId((prev) => (prev === id ? null : id))
  }

  const selected = formations.find((f) => f.id === selectedId)

  function scrollToFormations() {
    document.getElementById('formations-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToContact() {
    document.getElementById('contact-formations')?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      try {
        const result = await submitFormation(formData)
        if (result.success) {
          setSent(true)
        } else {
          setFormError(result.error ?? 'Une erreur est survenue.')
        }
      } catch {
        setFormError('Une erreur est survenue. R\u00e9essayez.')
      }
    })
  }

  return (
    <>
      <Nav showAnchorLinks={false} />
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
            <div className="flex flex-col gap-8 max-w-[720px]">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
              >
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#7DB7D6]/50 bg-[#C5DCE8] text-[#1C3D55] text-[15px] font-medium tracking-wide">
                  <Chalkboard size={15} weight="duotone" />
                  Formations
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
                <span className="text-[#D4A373]">qui change vraiment<br />les choses.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.4 }}
                className="text-base md:text-lg text-[rgba(245,245,240,0.58)] leading-relaxed max-w-[50ch]"
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
                  onClick={scrollToFormations}
                >
                  Voir nos formations
                  <ArrowDown size={14} weight="bold" />
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
        <section id="formations-list" className="relative py-24 md:py-32 bg-[#F5F5F0] rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.2)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

            {/* Header */}
            <ScrollReveal>
              <div className="mb-14">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/50 mb-4">
                  Ce qu&apos;on enseigne
                </p>
                <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black tracking-normal leading-[0.95] text-[#0A2E4D] max-w-[22ch]">
                  Choisissez votre formation.
                  <br />
                  <span className="text-[#0A2E4D]/30">Ou construisons-la ensemble.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-stretch">
              {formations.map((f, i) => {
                const isOpen = selectedId === f.id
                return (
                  <div key={f.id} className="flex flex-col gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-8% 0px' }}
                      transition={{ type: 'spring', stiffness: 70, damping: 18, delay: i * 0.1 }}
                      onClick={() => toggle(f.id)}
                      className="cursor-pointer h-full"
                    >
                      <SpotlightCard
                        variant="light"
                        className={`h-full rounded-[2rem] bg-white border transition-colors duration-300 p-8 flex flex-col gap-5 shadow-[0_8px_40px_-12px_rgba(10,46,77,0.12)] ${
                          isOpen
                            ? 'border-[#D4A373]/60'
                            : 'border-[#0A2E4D]/[0.08] hover:border-[#0A2E4D]/[0.2]'
                        }`}
                      >
                        {/* Top row */}
                        <div className="flex items-start justify-between">
                          <div className="flex flex-col gap-2">
                            <span className="font-mono text-[10px] tracking-widest text-[#0A2E4D]/30">
                              {f.num}
                            </span>
                            <Chalkboard size={20} weight="duotone" className="text-[#0A2E4D]/60" />
                          </div>
                          <div
                            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                              isOpen
                                ? 'bg-[#D4A373]/15 border-[#D4A373]/50 text-[#D4A373]'
                                : 'border-[#0A2E4D]/[0.15] text-[#0A2E4D]/30'
                            }`}
                          >
                            {isOpen ? <Minus size={13} weight="bold" /> : <Plus size={13} weight="bold" />}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                          <h3 className="text-xl font-bold tracking-tight text-[#0A2E4D] leading-snug">
                            {f.title}
                          </h3>
                          <p className="text-sm text-[#0A2E4D]/55 leading-relaxed">
                            {f.tagline}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#0A2E4D]/50 px-2.5 py-1 rounded-full bg-[#0A2E4D]/[0.05] border border-[#0A2E4D]/[0.08]">
                            <Clock size={11} />
                            {f.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#0A2E4D]/50 px-2.5 py-1 rounded-full bg-[#0A2E4D]/[0.05] border border-[#0A2E4D]/[0.08]">
                            <Users size={11} />
                            {f.audience}
                          </span>
                        </div>
                      </SpotlightCard>
                    </motion.div>

                    {/* Mobile-only: inline expanded panel directly below this card */}
                    <div className="md:hidden">
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
                            className="overflow-hidden"
                          >
                            <DetailPanel formation={f} onContact={scrollToContact} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Desktop-only: expanded detail panel below all cards */}
            <div className="hidden md:block">
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
                    <DetailPanel formation={selected} onContact={scrollToContact} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* ─── Contact ─── */}
        <section
          id="contact-formations"
          className="relative py-28 md:py-36 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.04] bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: "url('/images/8.png')" }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

              {/* Left — copy */}
              <div className="flex flex-col gap-8">
                <ScrollReveal>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7DB7D6]/20 bg-[#7DB7D6]/08 text-[#7DB7D6] text-xs font-medium tracking-wide self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7DB7D6] animate-[pulse-dot_2s_ease-in-out_infinite]" />
                    Réservez votre formation
                  </span>
                </ScrollReveal>

                <motion.h2
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.1 }}
                  className="text-[clamp(2.4rem,5vw,4rem)] font-black tracking-normal leading-[0.92] text-[#F7F3EB]"
                >
                  Prêt à former
                  <br />
                  <span className="text-[rgba(247,243,235,0.4)]">votre équipe ?</span>
                </motion.h2>

                <ScrollReveal delay={0.2}>
                  <p className="text-base md:text-lg text-[rgba(245,245,240,0.55)] max-w-[44ch] leading-relaxed">
                    Choisissez votre formation et laissez vos coordonnées. On vous revient dans les 2 jours ouvrables pour organiser ça ensemble.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <p className="text-xs text-[rgba(245,245,240,0.25)] font-mono tracking-wide">
                    Prix fixe · Aucune surprise · Formation adaptée à votre équipe
                  </p>
                </ScrollReveal>
              </div>

              {/* Right — form */}
              <ScrollReveal delay={0.15}>
                <div className="rounded-[2rem] glass p-8 md:p-10 flex flex-col gap-6">
                  {sent ? (
                    <div className="flex flex-col items-center gap-4 py-8 text-center">
                      <CheckCircle size={48} weight="fill" className="text-[#D4A373]" />
                      <p className="text-lg font-semibold text-[#F5F5F0]">Demande envoyée !</p>
                      <p className="text-sm text-[rgba(245,245,240,0.5)]">On vous répond dans les 2 jours ouvrables.</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-semibold text-[#F5F5F0]">Laissez vos coordonnées</p>
                        <p className="text-sm text-[rgba(245,245,240,0.4)]">On vous répond dans les 2 jours ouvrables.</p>
                      </div>

                      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {/* Formation */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-[rgba(245,245,240,0.5)]">Formation souhaitée</label>
                          <select
                            name="formation"
                            required
                            defaultValue=""
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm focus:outline-none focus:border-[#7DB7D6]/50 transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#0A2E4D]">Choisir une formation...</option>
                            <option value="Utiliser l'I.A. de manière stratégique et sécuritaire" className="bg-[#0A2E4D]">
                              Utiliser l&apos;I.A. de manière stratégique et sécuritaire
                            </option>
                            <option value="Sur mesure" className="bg-[#0A2E4D]">Sur mesure</option>
                          </select>
                        </div>

                        {/* Nom + Courriel */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-[rgba(245,245,240,0.5)]">Nom complet</label>
                            <input name="nom" type="text" required placeholder="Marie Tremblay" className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm placeholder:text-[rgba(245,245,240,0.3)] focus:outline-none focus:border-[#7DB7D6]/50 transition-colors" />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-[rgba(245,245,240,0.5)]">Courriel professionnel</label>
                            <input name="courriel" type="email" required placeholder="marie@entreprise.com" className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm placeholder:text-[rgba(245,245,240,0.3)] focus:outline-none focus:border-[#7DB7D6]/50 transition-colors" />
                          </div>
                        </div>

                        {/* Type + Taille */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-[rgba(245,245,240,0.5)]">Type d&apos;entreprise</label>
                            <input name="typeEntreprise" type="text" placeholder="Ex : clinique, agence..." className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm placeholder:text-[rgba(245,245,240,0.3)] focus:outline-none focus:border-[#7DB7D6]/50 transition-colors" />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-[rgba(245,245,240,0.5)]">Taille de l&apos;entreprise</label>
                            <select name="tailleEntreprise" defaultValue="" className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm focus:outline-none focus:border-[#7DB7D6]/50 transition-colors appearance-none cursor-pointer">
                              <option value="" disabled className="bg-[#0A2E4D]">Choisir...</option>
                              <option value="1" className="bg-[#0A2E4D]">Solopreneur / 1 personne</option>
                              <option value="2-10" className="bg-[#0A2E4D]">2–10 employés</option>
                              <option value="11-50" className="bg-[#0A2E4D]">11–50 employés</option>
                              <option value="50+" className="bg-[#0A2E4D]">50+ employés</option>
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-[rgba(245,245,240,0.5)]">Message (optionnel)</label>
                          <textarea name="message" rows={3} placeholder="Décrivez brièvement votre contexte..." className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm placeholder:text-[rgba(245,245,240,0.3)] focus:outline-none focus:border-[#7DB7D6]/50 transition-colors resize-none" />
                        </div>

                        {formError && (
                          <p className="text-xs text-red-400">{formError}</p>
                        )}

                        <button
                          type="submit"
                          disabled={isPending}
                          className="w-full flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#C49060] active:scale-[0.98] disabled:opacity-60 text-[#0A2E4D] font-bold py-4 rounded-full transition-all duration-200 text-sm cursor-pointer mt-1"
                        >
                          {isPending ? 'Envoi en cours…' : 'Envoyer ma demande'}
                          {!isPending && <ArrowRight size={15} weight="bold" />}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
