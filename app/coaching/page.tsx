'use client'

import { useState, useTransition } from 'react'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  ArrowRight,
  ArrowDown,
  CheckCircle,
  Repeat,
  MagnifyingGlass,
  TrendUp,
  Gift,
  VideoCamera,
  Lightning,
  Compass,
  User,
  Briefcase,
  RocketLaunch,
  Clock,
  Gauge,
  Code,
  FileText,
  Books,
  Wrench,
} from '@phosphor-icons/react'
import { submitCoaching } from '@/app/actions/contact'

/* ─── Pain points ─── */
const pains = [
  { icon: Repeat, text: 'Vous copiez-collez les mêmes prompts depuis 6 mois' },
  { icon: MagnifyingGlass, text: "Vous avez testé ChatGPT, mais vous revenez à Google" },
  { icon: TrendUp, text: "Vous voyez vos collègues gagner du temps — vous, pas encore" },
]

/* ─── Steps ─── */
const steps = [
  {
    num: '0',
    label: 'ÉTAPE 00',
    title: 'Session découverte',
    desc: "On cartographie votre réalité : outils actuels, irritants, objectifs. On voit si ça fait du sens ensemble.",
    tag: '30 min · Gratuite',
    tagIcon: Gift,
    isFree: true,
  },
  {
    num: '1',
    label: 'ÉTAPE 01',
    title: 'Session 1 du mois',
    desc: "Un cas réel, en direct. On règle quelque chose ensemble. Vous repartez avec un outil ou un processus qui fonctionne.",
    tag: '60 min · En direct',
    tagIcon: VideoCamera,
    isFree: false,
  },
  {
    num: '2',
    label: 'ÉTAPE 02',
    title: 'Mise en pratique',
    desc: "Vous testez. 1–2 actions concrètes, pas plus. Pas de surcharge — juste ce qui change vraiment quelque chose.",
    tag: 'À votre rythme',
    tagIcon: Lightning,
    isFree: false,
  },
  {
    num: '3',
    label: 'ÉTAPE 03',
    title: 'Session 2 du mois',
    desc: "On consolide. On ajuste ce qui ne fonctionnait pas. On trace le cap du mois suivant.",
    tag: 'Progression mesurable',
    tagIcon: Compass,
    isFree: false,
  },
]

/* ─── Profiles ─── */
const profils = [
  {
    num: '01 / 03',
    chip: 'Le débutant',
    chipIcon: User,
    title: 'Gestionnaire de projet',
    meta: '38 ans · Utilise Word et Excel au quotidien',
    action: "Appris à structurer ses comptes rendus de réunion en 3 minutes avec Claude. Créé 5 prompts réutilisables pour ses communications d'équipe.",
    result: '~2h/semaine récupérées en 3 semaines',
    resultIcon: Clock,
  },
  {
    num: '02 / 03',
    chip: "L'utilisateur occasionnel",
    chipIcon: Briefcase,
    title: 'Consultante RH',
    meta: 'Utilise ChatGPT "quand elle y pense"',
    action: "Construit un workflow pour rédiger des descriptions de poste sur mesure en 10 minutes. Intégré l'I.A. dans son processus de pré-qualification de candidats.",
    result: "Elle utilise maintenant l'I.A. tous les jours — sur ses propres termes",
    resultIcon: CheckCircle,
  },
  {
    num: '03 / 03',
    chip: 'Le curieux avancé',
    chipIcon: RocketLaunch,
    title: 'Directeur marketing',
    meta: 'Veut automatiser, mais part dans tous les sens',
    action: "Priorisé 3 automatisations à fort impact. Mis en place un calendrier éditorial semi-automatisé avec Make + Mailchimp.",
    result: 'Moins de chaos — un système qui tient en production',
    resultIcon: Gauge,
  },
]

/* ─── Deliverables ─── */
const livrables = [
  { icon: Code, title: 'Prompts personnalisés à votre rôle', desc: "Des instructions calibrées pour votre contexte, vos livrables, votre ton. Pas des templates génériques." },
  { icon: FileText, title: 'Mini-fiche synthèse après chaque session', desc: "Ce qu'on a couvert, les décisions prises, les prochaines étapes. Clair, court, actionnable." },
  { icon: Books, title: 'Accès à une bibliothèque de templates', desc: "Une collection de prompts et de structures testés et validés, organisés par cas d'usage." },
  { icon: Wrench, title: "Recommandations d'outils", desc: "Les bons outils pour vos besoins réels — pas la liste exhaustive que personne n'utilise." },
  { icon: Lightning, title: 'Exercices pratiques entre les sessions', desc: "1 à 2 actions concrètes à tester dans votre quotidien. Assez pour progresser. Pas assez pour vous noyer." },
  { icon: TrendUp, title: 'Progression mesurable mois après mois', desc: "Un bilan mensuel qui trace votre évolution. Vous voyez concrètement ce que vous avez intégré." },
]

export default function CoachingPage() {
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState('')
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError('')
    const form = e.currentTarget
    const data = new FormData(form)

    startTransition(async () => {
      const result = await submitCoaching(data)
      if (result.success) {
        setSent(true)
      } else {
        setFormError(result.error ?? "Erreur lors de l'envoi.")
      }
    })
  }

  return (
    <>
      <Nav lightTop />

      <main>
        {/* ── Hero ── */}
        <section
          id="hero"
          className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20"
          style={{ background: '#F7F3EB' }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-[center_22%] opacity-[0.37]"
            style={{ backgroundImage: "url('/images/4.png')" }}
            aria-hidden="true"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(247,243,235,0.70) 0%, rgba(247,243,235,0.30) 55%, rgba(247,243,235,0.05) 100%)',
            }}
            aria-hidden="true"
          />
          {/* Glow top-right */}
          <div
            className="absolute -top-16 -right-16 w-[min(640px,70%)] h-[540px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(212,163,115,0.18) 0%, transparent 65%)' }}
            aria-hidden="true"
          />
          {/* Glow bottom-left */}
          <div
            className="absolute -bottom-10 -left-10 w-[440px] h-[320px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(125,183,214,0.10) 0%, transparent 65%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
            <div className="flex flex-col gap-7 max-w-[680px]">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
              >
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#7DB7D6]/50 bg-[#C5DCE8] text-[#1C3D55] text-[15px] font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#1C3D55] animate-[pulse-dot_2s_ease-in-out_infinite]" />
                  Coaching individuel
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.28 }}
                className="font-black tracking-[-0.025em] leading-[0.95] text-[#0A2E4D]"
                style={{ fontSize: 'clamp(2.4rem, 5.8vw, 4.6rem)' }}
              >
                Utilisez l&apos;I.A.<br />
                comme un levier.<br />
                <span className="text-[#C49060]">Pas comme un gadget.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.42 }}
                className="text-[rgba(10,46,77,0.58)] leading-[1.72] max-w-[50ch]"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.125rem)' }}
              >
                Un accompagnement individuel pour intégrer l&apos;I.A. dans votre travail —{' '}
                <strong className="text-[rgba(10,46,77,0.88)] font-semibold">concrètement, sans jargon.</strong>{' '}
                Adapté à votre rôle, votre rythme, votre réalité.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.56 }}
                className="flex flex-col items-start gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-[0_8px_32px_-8px_rgba(212,163,115,0.45)] hover:shadow-[0_12px_40px_-8px_rgba(212,163,115,0.55)] active:scale-[0.97]"
                  style={{ fontSize: '0.9375rem' }}
                >
                  Réserver ma session découverte
                  <ArrowRight size={14} weight="bold" />
                </a>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A2E4D]/10 bg-[#0A2E4D]/04 text-xs text-[rgba(10,46,77,0.38)] font-mono tracking-wide">
                  2 sessions par mois · Adapté à votre réalité
                </span>
              </motion.div>

              {/* Micro */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.82 }}
                className="text-xs text-[rgba(10,46,77,0.28)] font-mono tracking-[0.04em]"
              >
                Session découverte gratuite · Sans engagement · Réponse sous 24h
              </motion.p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-0 animate-[fade-up_0.6s_ease_1.5s_forwards]"
            aria-hidden="true"
          >
            <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[rgba(10,46,77,0.22)]">Défiler</span>
            <ArrowDown size={14} weight="bold" className="text-[rgba(10,46,77,0.22)] animate-[bounce-y_1.8s_ease-in-out_infinite]" />
          </div>
        </section>


        {/* ── Problème ── */}
        <section id="probleme" className="bg-[#0D3760] py-28 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <span className="block text-[0.6875rem] uppercase tracking-[0.25em] font-medium text-[#7DB7D6] mb-4">
                Le problème
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2
                className="font-black tracking-[-0.02em] leading-[1.02] text-[#F7F3EB] max-w-[24ch] mb-14"
                style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)' }}
              >
                Vous utilisez l&apos;I.A.<br />
                10% de son potentiel.<br />
                <span className="text-[rgba(247,243,235,0.35)]">Et vous le savez.</span>
              </h2>
            </ScrollReveal>

            <ul className="border-t border-white/[0.08] max-w-[680px]" aria-label="Points de douleur courants">
              {pains.map(({ icon: Icon, text }, i) => (
                <ScrollReveal key={i} delay={0.08 * (i + 2)}>
                  <li className="flex items-start gap-5 py-6 border-b border-white/[0.08]">
                    <div className="w-[42px] h-[42px] rounded-full bg-[rgba(125,183,214,0.10)] border border-[rgba(125,183,214,0.18)] flex items-center justify-center text-[#7DB7D6] shrink-0">
                      <Icon size={18} weight="bold" />
                    </div>
                    <p className="text-[rgba(245,245,240,0.78)] leading-[1.55] pt-2.5" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                      &ldquo;{text}&rdquo;
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

          </div>
        </section>


        {/* ── Processus ── */}
        <section id="processus" className="bg-[#F5F5F0] py-28 md:py-36 rounded-[2rem_2rem_0_0]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <span className="block text-[0.6875rem] uppercase tracking-[0.25em] font-medium text-[rgba(10,46,77,0.45)] mb-4">
                Le format
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2
                className="font-black tracking-[-0.02em] leading-[1] text-[#1A1A1A] mb-3"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3.25rem)' }}
              >
                Un format simple.<br />Une progression mesurable.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="text-[rgba(26,26,26,0.5)] leading-[1.65] max-w-[52ch] mb-16">
                Deux sessions par mois, un cas réel à la fois.
                Pas de théorie gratuite — on règle des vrais problèmes ensemble.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              {/* ── Desktop : 4 colonnes ── */}
              <div className="hidden md:grid md:grid-cols-4 gap-4 relative">
                <div className="absolute top-[21px] left-[21px] right-[21px] h-0 border-t-2 border-dashed border-[rgba(212,163,115,0.30)] z-0" aria-hidden="true" />
                {steps.map((step) => (
                  <div key={step.num} className="relative z-10 flex flex-col gap-3.5">
                    <div className="flex flex-col items-start gap-2">
                      <div
                        className={`w-[42px] h-[42px] rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-[0_4px_16px_-4px_rgba(10,46,77,0.35)] font-mono ${
                          step.isFree ? 'bg-[#D4A373] text-[#0A2E4D]' : 'bg-[#0A2E4D] text-[#F7F3EB]'
                        }`}
                      >
                        {step.num}
                      </div>
                      <span className="font-mono text-[0.625rem] tracking-[0.18em] text-[rgba(26,26,26,0.3)]">{step.label}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#1A1A1A] leading-[1.3]">{step.title}</h3>
                    <p className="text-[0.8125rem] text-[rgba(26,26,26,0.55)] leading-[1.65]">{step.desc}</p>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.6375rem] font-mono w-fit border ${
                      step.isFree
                        ? 'bg-[rgba(212,163,115,0.12)] border-[rgba(212,163,115,0.25)] text-[rgba(180,120,60,0.85)]'
                        : 'bg-[rgba(10,46,77,0.06)] border-[rgba(10,46,77,0.09)] text-[rgba(10,46,77,0.5)]'
                    }`}>
                      <step.tagIcon size={10} weight="bold" />
                      {step.tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── Mobile : timeline verticale ── */}
              <div className="flex md:hidden flex-col">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative flex gap-5">
                    {/* Colonne gauche — numéro + ligne */}
                    <div className="flex flex-col items-center shrink-0 w-14">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl shrink-0 shadow-[0_6px_20px_-6px_rgba(10,46,77,0.35)] font-mono z-10 ${
                          step.isFree ? 'bg-[#D4A373] text-[#0A2E4D]' : 'bg-[#0A2E4D] text-[#F7F3EB]'
                        }`}
                      >
                        {step.num}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="flex-1 w-px bg-gradient-to-b from-[rgba(10,46,77,0.18)] to-transparent mt-2 mb-0 min-h-[3rem]" aria-hidden="true" />
                      )}
                    </div>

                    {/* Contenu */}
                    <div className={`flex-1 pb-10 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                      <span className="font-mono text-[0.6rem] tracking-[0.22em] text-[rgba(26,26,26,0.32)] block mb-2 mt-3.5">
                        {step.label}
                      </span>
                      <h3 className="text-[1.375rem] font-black text-[#1A1A1A] leading-[1.2] mb-3">{step.title}</h3>
                      <p className="text-[1rem] text-[rgba(26,26,26,0.58)] leading-[1.7] mb-4">{step.desc}</p>
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.75rem] font-mono w-fit border ${
                          step.isFree
                            ? 'bg-[rgba(212,163,115,0.14)] border-[rgba(212,163,115,0.30)] text-[rgba(180,120,60,0.90)]'
                            : 'bg-[rgba(10,46,77,0.06)] border-[rgba(10,46,77,0.12)] text-[rgba(10,46,77,0.55)]'
                        }`}
                      >
                        <step.tagIcon size={12} weight="bold" />
                        {step.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </section>


        {/* ── Profils ── */}
        <section id="profils" className="bg-[#0A2E4D] py-28 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <span className="block text-[0.6875rem] uppercase tracking-[0.25em] font-medium text-[#7DB7D6] mb-4">
                Exemples concrets
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2
                className="font-black tracking-[-0.02em] leading-[1] text-[#F7F3EB] mb-3"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3.25rem)' }}
              >
                Ce qu&apos;on travaille ensemble —<br />
                <span className="text-[rgba(247,243,235,0.35)]">selon où vous en êtes.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="text-[rgba(245,245,240,0.48)] leading-[1.65] max-w-[52ch] mb-12">
                Chaque parcours est différent. Voici trois profils représentatifs et ce qu&apos;on a accompli ensemble.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {profils.map((p, i) => (
                <ScrollReveal key={i} delay={0.08 * (i + 2)}>
                  <div className="bg-[rgba(247,243,235,0.04)] border border-[rgba(212,163,115,0.15)] rounded-[2rem] p-8 flex flex-col gap-5 h-full transition-all duration-300 hover:border-[rgba(212,163,115,0.32)] hover:bg-[rgba(247,243,235,0.06)]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.6375rem] tracking-[0.18em] text-[rgba(212,163,115,0.40)]">{p.num}</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(125,183,214,0.10)] border border-[rgba(125,183,214,0.18)] text-[0.6375rem] text-[#7DB7D6] tracking-wide">
                        <p.chipIcon size={10} weight="bold" />
                        {p.chip}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[1.125rem] font-bold text-[#F7F3EB] leading-[1.3]">{p.title}</h3>
                      <p className="text-[0.8125rem] text-[rgba(245,245,240,0.42)] leading-[1.55] italic mt-0.5">{p.meta}</p>
                    </div>

                    <hr className="border-white/[0.07]" />

                    <div>
                      <p className="text-[0.625rem] uppercase tracking-[0.18em] text-[rgba(245,245,240,0.28)] font-medium mb-2">
                        Ce qu&apos;on a fait
                      </p>
                      <p className="text-[0.875rem] text-[rgba(245,245,240,0.68)] leading-[1.65]">{p.action}</p>
                    </div>

                    <div className="flex items-center gap-3 bg-[rgba(212,163,115,0.09)] border border-[rgba(212,163,115,0.18)] rounded-2xl p-4 mt-auto">
                      <p.resultIcon size={18} weight="bold" className="text-[#D4A373] shrink-0" />
                      <span className="text-[0.8125rem] text-[rgba(212,163,115,0.88)] font-semibold leading-[1.4]">{p.result}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>


        {/* ── Livrables ── */}
        <section id="livrables" className="bg-[#F5F5F0] py-28 md:py-36 rounded-[2rem_2rem_0_0]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <span className="block text-[0.6875rem] uppercase tracking-[0.25em] font-medium text-[rgba(10,46,77,0.45)] mb-4">
                Ce que vous obtenez
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2
                className="font-black tracking-[-0.02em] leading-[1] text-[#1A1A1A] mb-3"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 3.25rem)' }}
              >
                Pas juste des conseils.<br />
                <span className="text-[rgba(26,26,26,0.3)]">Des outils qui vous appartiennent.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="text-[rgba(26,26,26,0.5)] leading-[1.65] max-w-[52ch] mb-14">
                À la fin de chaque mois, vous avez des actifs concrets — pas seulement des idées dans un carnet.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {livrables.map((item, i) => (
                <ScrollReveal key={i} delay={0.08 * (i % 3 + 2)}>
                  <div className="bg-white border border-[rgba(10,46,77,0.08)] rounded-3xl p-7 flex flex-col gap-3.5 shadow-[0_4px_20px_-8px_rgba(10,46,77,0.07)] transition-all duration-200 hover:border-[rgba(212,163,115,0.38)] hover:shadow-[0_10px_36px_-8px_rgba(212,163,115,0.14)] hover:-translate-y-0.5">
                    <div className="w-11 h-11 rounded-full bg-[rgba(10,46,77,0.06)] flex items-center justify-center text-[#0A2E4D]">
                      <item.icon size={20} weight="bold" />
                    </div>
                    <h3 className="text-base font-bold text-[#1A1A1A] leading-[1.3]">{item.title}</h3>
                    <p className="text-[0.8125rem] text-[rgba(26,26,26,0.52)] leading-[1.65]">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>


        {/* ── Coach ── */}
        <section id="coach" className="bg-[#0A2E4D] py-28 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-[640px]">

              <ScrollReveal>
                <span className="block text-[0.6875rem] uppercase tracking-[0.25em] font-medium text-[#7DB7D6] mb-4">
                  Votre copilote
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h2
                  className="font-black tracking-[-0.02em] leading-[1.05] text-[#F7F3EB] mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
                >
                  Vous avez un copilote —<br />pas un prof.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <p className="text-[rgba(245,245,240,0.60)] leading-[1.8] mb-8">
                  VELA est une micro-agence québécoise d&apos;automatisation par l&apos;I.A. —{' '}
                  <strong className="text-[rgba(245,245,240,0.85)] font-semibold">concrète, anti-hype, orientée résultats.</strong>{' '}
                  On ne vend pas de rêves technologiques. On mesure ce qui vaut la peine, on implante ce qui marche,
                  et on vous rend autonome. Le coaching individuel, c&apos;est cette même approche appliquée à votre
                  réalité personnelle :{' '}
                  <strong className="text-[rgba(245,245,240,0.85)] font-semibold">
                    un cas réel à la fois, à votre rythme, avec des livrables qui vous appartiennent.
                  </strong>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.24}>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-[#7DB7D6] hover:text-[#F5F5F0] font-semibold text-sm transition-colors duration-200 group"
                >
                  En savoir plus sur VELA
                  <ArrowRight size={13} weight="bold" className="transition-transform group-hover:translate-x-1 duration-200" />
                </a>
              </ScrollReveal>

            </div>
          </div>
        </section>


        {/* ── Contact ── */}
        <section id="contact" className="bg-[#0D3760] py-28 md:py-36 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.035] bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: "url('/images/13.png')" }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[min(800px,100%)] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(212,163,115,0.07) 0%, transparent 65%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

              {/* Left */}
              <div className="flex flex-col gap-8">
                <ScrollReveal>
                  <span className="block text-[0.6875rem] uppercase tracking-[0.25em] font-medium text-[#7DB7D6]">
                    Première étape
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h2
                    className="font-black tracking-[-0.025em] leading-[0.93] text-[#F7F3EB]"
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
                  >
                    Prêt à mettre<br />
                    du vent<br />
                    <span className="text-[rgba(247,243,235,0.35)]">dans vos voiles&nbsp;?</span>
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="text-[rgba(245,245,240,0.52)] leading-[1.72] max-w-[44ch]">
                    La session découverte est <strong className="text-[rgba(245,245,240,0.82)]">gratuite</strong>.
                    Sans engagement. On voit si ça fait du sens ensemble.
                    Si oui, on trace la suite. Si non, vous repartez avec au moins une bonne idée.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <p className="text-xs text-[rgba(245,245,240,0.22)] font-mono tracking-wide">
                    Réponse sous 24h · Aucune obligation
                  </p>
                </ScrollReveal>
              </div>

              {/* Right — form */}
              <ScrollReveal delay={0.15}>
                <div className="rounded-[2rem] glass p-8 md:p-10 flex flex-col gap-6">
                  {sent ? (
                    <div className="flex flex-col items-center gap-4 py-8 text-center">
                      <CheckCircle size={48} weight="fill" className="text-[#D4A373]" />
                      <p className="text-lg font-semibold text-[#F5F5F0]">Demande envoyée&nbsp;!</p>
                      <p className="text-sm text-[rgba(245,245,240,0.5)]">On vous répond dans les 24 heures.</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-semibold text-[#F5F5F0]">Demander ma session découverte</p>
                        <p className="text-sm text-[rgba(245,245,240,0.4)]">Gratuite · 30 minutes · Sans engagement</p>
                      </div>

                      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-[rgba(245,245,240,0.5)]">Prénom *</label>
                          <input
                            name="prenom"
                            type="text"
                            required
                            placeholder="Marie"
                            autoComplete="given-name"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm placeholder:text-[rgba(245,245,240,0.3)] focus:outline-none focus:border-[#7DB7D6]/50 transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-[rgba(245,245,240,0.5)]">Courriel *</label>
                          <input
                            name="courriel"
                            type="email"
                            required
                            placeholder="marie@entreprise.com"
                            autoComplete="email"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm placeholder:text-[rgba(245,245,240,0.3)] focus:outline-none focus:border-[#7DB7D6]/50 transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-[rgba(245,245,240,0.5)]">Votre rôle / titre *</label>
                          <input
                            name="role"
                            type="text"
                            required
                            placeholder="Ex : Gestionnaire RH, Directrice marketing…"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm placeholder:text-[rgba(245,245,240,0.3)] focus:outline-none focus:border-[#7DB7D6]/50 transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-[rgba(245,245,240,0.5)]">Comment utilisez-vous l&apos;I.A. aujourd&apos;hui&nbsp;?</label>
                          <select
                            name="usage"
                            required
                            defaultValue=""
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm focus:outline-none focus:border-[#7DB7D6]/50 transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#0A2E4D]">Choisir…</option>
                            <option value="jamais" className="bg-[#0A2E4D]">Jamais</option>
                            <option value="occasionnellement" className="bg-[#0A2E4D]">Occasionnellement</option>
                            <option value="regulierement" className="bg-[#0A2E4D]">Régulièrement</option>
                            <option value="veux-aller-plus-loin" className="bg-[#0A2E4D]">Je veux aller plus loin</option>
                          </select>
                        </div>

                        {formError && (
                          <p className="text-xs text-red-400">{formError}</p>
                        )}

                        <button
                          type="submit"
                          disabled={isPending}
                          className="w-full flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#C49060] active:scale-[0.98] disabled:opacity-60 text-[#0A2E4D] font-bold py-4 rounded-full transition-all duration-200 text-sm cursor-pointer mt-1"
                        >
                          {isPending ? 'Envoi en cours…' : 'Demander ma session découverte'}
                          {!isPending && <ArrowRight size={14} weight="bold" />}
                        </button>

                        <p className="text-[0.6875rem] text-[rgba(245,245,240,0.22)] text-center font-mono">
                          Réponse sous 24h. Aucune obligation.
                        </p>
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
