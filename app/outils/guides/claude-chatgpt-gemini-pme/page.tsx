'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Sparkle, CheckCircle, ArrowRight, ArrowDown } from '@phosphor-icons/react'

const outils = [
  {
    nom: 'Claude',
    editeur: 'Anthropic',
    accent: '#D4A373',
    force: 'Rédaction longue, analyse, code, faible taux d’hallucination.',
    pourPme: 'Contrats, politiques internes, analyses financières, rapports : tout ce qui doit être juste et bien écrit du premier coup.',
  },
  {
    nom: 'ChatGPT',
    editeur: 'OpenAI',
    accent: '#7DB7D6',
    force: 'Polyvalence : image, voix, recherche web.',
    pourPme: 'Contenu visuel, service client multicanal, brainstorm rapide, tout ce qui touche à la voix ou à l’image.',
  },
  {
    nom: 'Gemini',
    editeur: 'Google',
    accent: '#0D3760',
    force: 'Multimodal natif (audio + vidéo), intégration Google Workspace.',
    pourPme: 'Transcription et analyse de réunions Meet, traitement de vidéos, automatisations directement dans Docs et Sheets.',
  },
]

const comparatif = [
  { critere: 'Force principale', claude: 'Faible taux d’hallucination', chatgpt: 'Image, voix, recherche web', gemini: 'Audio + vidéo natif' },
  { critere: 'Modèle par défaut', claude: 'Sonnet 5', chatgpt: 'Instant / GPT-5.5', gemini: 'Gemini 3 Flash' },
  { critere: 'Modèle réflexion', claude: 'Opus 4.8', chatgpt: 'GPT-5.6 Terra / High', gemini: 'Gemini 3.1 Pro' },
  { critere: 'Gros calibre', claude: 'Fable 5', chatgpt: 'GPT-5.6 Sol / Pro', gemini: 'Gemini 3.5 Flash' },
  { critere: 'Fenêtre de contexte', claude: 'Jusqu’à 1M tokens', chatgpt: 'Standard', gemini: 'Jusqu’à 1M tokens (Pro)' },
  { critere: 'Taux d’hallucination approx.', claude: '~3%', chatgpt: '5-8%', gemini: '5-8%' },
  { critere: 'Prix individuel', claude: 'Pro : 20$ US/mois', chatgpt: 'Plus : 20$ US/mois', gemini: 'AI Pro : 19,99$ US/mois' },
  { critere: 'Prix équipe (PME)', claude: 'Enterprise : dès 20$/siège/mois + usage (min. 20 sièges)', chatgpt: 'Business : 20-25$/siège/mois', gemini: 'Google Workspace : variable selon forfait' },
]

const recommandations = [
  { besoin: 'Vous rédigez, analysez des documents ou gérez des enjeux légaux/financiers', outil: 'Claude', accent: '#D4A373' },
  { besoin: 'Vous produisez du contenu visuel et gérez du service client varié', outil: 'ChatGPT', accent: '#7DB7D6' },
  { besoin: 'Vous êtes déjà à fond dans Google Workspace, ou vous traitez de l’audio/vidéo', outil: 'Gemini', accent: '#0D3760' },
]

export default function GuideClaudeChatgptGeminiPmePage() {
  function scrollToComparatif() {
    document.getElementById('comparatif')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Nav showAnchorLinks={false} />
      <main className="bg-[#0A2E4D]">

        {/* ─── Hero ─── */}
        <section className="relative min-h-[68dvh] flex items-center overflow-hidden pt-20">
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
            <div className="flex flex-col gap-8 max-w-[680px]">
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
                className="text-[clamp(2.1rem,4.6vw,3.8rem)] font-black tracking-normal leading-[1.02] text-[#F7F3EB]"
              >
                Claude, ChatGPT ou Gemini :
                <br />
                <span className="text-[#D4A373]">quel outil choisir ?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.4 }}
                className="text-base md:text-lg text-[rgba(245,245,240,0.58)] leading-relaxed max-w-[52ch]"
              >
                Vous avez trois outils d&apos;I.A. sous la main, mais vous n&apos;utilisez probablement
                que celui que quelqu&apos;un vous a recommandé un jour.{' '}
                <span className="text-[rgba(245,245,240,0.88)] font-semibold">
                  Comparatif à jour, et notre recommandation selon votre contexte.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.55 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={scrollToComparatif}
                  className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_8px_32px_-8px_rgba(212,163,115,0.45)]"
                >
                  Voir le comparatif
                  <ArrowDown size={14} weight="bold" />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="text-xs text-[rgba(245,245,240,0.25)] font-mono tracking-wide"
              >
                Gratuit · Mis à jour le 14 juillet 2026
              </motion.p>
            </div>
          </div>
        </section>

        {/* ─── Les trois outils ─── */}
        <section className="relative py-24 md:py-32 bg-[#F5F5F0] rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.2)]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <div className="mb-12 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/50 mb-4">
                  Trois outils, trois forces
                </p>
                <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black tracking-normal leading-[1.05] text-[#0A2E4D] max-w-[28ch]">
                  Chaque outil a une force mesurable.
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {outils.map((o, i) => (
                <ScrollReveal key={o.nom} delay={0.15 + i * 0.08}>
                  <div
                    className="h-full rounded-[1.75rem] bg-white border p-7 flex flex-col gap-4 shadow-[0_8px_40px_-12px_rgba(10,46,77,0.1)]"
                    style={{ borderColor: `${o.accent}50` }}
                  >
                    <span
                      className="inline-flex self-start text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${o.accent}1f`, color: o.accent === '#7DB7D6' ? '#1C3D55' : o.accent === '#0D3760' ? '#0D3760' : '#7A4E26' }}
                    >
                      {o.editeur}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-[#0A2E4D]">{o.nom}</h3>
                    <p className="text-[0.9375rem] text-[#0A2E4D]/65 leading-relaxed">{o.force}</p>
                    <p className="text-sm text-[#0A2E4D]/50 leading-relaxed mt-auto pt-3 border-t border-[#0A2E4D]/[0.08]">
                      <strong className="text-[#0A2E4D]/70">Pour une PME :</strong> {o.pourPme}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.25}>
              <div className="rounded-2xl bg-[#0A2E4D]/[0.04] border-l-4 border-[#D4A373] p-7">
                <p className="text-base md:text-lg text-[#0A2E4D]/75 leading-relaxed">
                  Le modèle compte moins que le <strong className="text-[#0A2E4D]">contexte</strong> que
                  vous lui donnez. Un modèle moyen bien briefé bat un modèle puissant mal briefé.{' '}
                  <strong className="text-[#7DB7D6]">On mesure avant d&apos;automatiser, pas de hype ici.</strong>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Comparatif détaillé + coûts (fond foncé pour séparer de la section précédente) ─── */}
        <section id="comparatif" className="relative py-24 md:py-32 overflow-hidden">
          <div className="texture-overlay" aria-hidden="true" />
          <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <div className="mb-12 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-[rgba(245,245,240,0.5)] mb-4">
                  En bref
                </p>
                <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black tracking-normal leading-[1.05] text-[#F7F3EB] max-w-[28ch]">
                  Le portrait, à jour au 14 juillet 2026.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]">
                <div className="hidden md:grid grid-cols-[200px_1fr_1fr_1fr] bg-[#071E33] text-[rgba(245,245,240,0.6)] text-[11px] uppercase tracking-widest font-mono">
                  <div className="px-6 py-4">Critère</div>
                  <div className="px-6 py-4 text-center">Claude</div>
                  <div className="px-6 py-4 text-center">ChatGPT</div>
                  <div className="px-6 py-4 text-center">Gemini</div>
                </div>

                {comparatif.map((row, i) => (
                  <div
                    key={row.critere}
                    className={`grid grid-cols-1 md:grid-cols-[200px_1fr_1fr_1fr] bg-[#0D3760] ${
                      i > 0 ? 'border-t border-white/10' : ''
                    }`}
                  >
                    <div className="px-6 py-5 flex items-center">
                      <p className="text-sm font-bold text-[#F7F3EB]">{row.critere}</p>
                    </div>
                    <div className="px-6 py-5 flex items-center justify-center text-center md:border-l border-white/[0.08]">
                      <p className="text-sm text-[rgba(245,245,240,0.65)] leading-relaxed">{row.claude}</p>
                    </div>
                    <div className="px-6 py-5 flex items-center justify-center text-center md:border-l border-white/[0.08]">
                      <p className="text-sm text-[rgba(245,245,240,0.65)] leading-relaxed">{row.chatgpt}</p>
                    </div>
                    <div className="px-6 py-5 flex items-center justify-center text-center md:border-l border-white/[0.08]">
                      <p className="text-sm text-[rgba(245,245,240,0.65)] leading-relaxed">{row.gemini}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-xs text-[rgba(245,245,240,0.3)] leading-relaxed mt-6 max-w-[70ch]">
                Sources : Anthropic (claude.com/pricing), OpenAI (developers.openai.com), Google AI
                (ai.google.dev). Prix et modèles à jour au 14 juillet 2026, sujets à changement.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-3xl bg-[#0D3760] border border-white/10 p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
                <span className="text-[clamp(2.4rem,5vw,3.6rem)] font-black text-[#D4A373] leading-none shrink-0">
                  150-400$
                </span>
                <p className="text-base md:text-lg text-[rgba(245,245,240,0.75)] leading-relaxed">
                  Pour une PME où 3 à 8 personnes utilisent un outil d&apos;I.A. au quotidien, comptez
                  entre 150$ et 400$ US par mois en abonnements, plus un budget variable en usage API
                  si vous automatisez. Les licences sont toujours payées par vous, VELA ne les revend pas.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Recommandation ─── */}
        <section className="relative py-24 md:py-32 bg-[#F5F5F0]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">

            <ScrollReveal>
              <div className="mb-12 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/50 mb-4">
                  Notre recommandation
                </p>
                <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black tracking-normal leading-[1.05] text-[#0A2E4D] max-w-[28ch]">
                  Vous n&apos;avez pas besoin des trois.
                </h2>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-4 mb-10">
              {recommandations.map((r, i) => (
                <ScrollReveal key={r.outil} delay={0.1 + i * 0.08}>
                  <div
                    className="rounded-2xl bg-white border p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                    style={{ borderColor: `${r.accent}50` }}
                  >
                    <div className="flex items-center gap-3 shrink-0">
                      <CheckCircle size={18} weight="fill" style={{ color: r.accent }} />
                      <span className="text-lg font-bold text-[#0A2E4D]">{r.outil}</span>
                    </div>
                    <p className="text-[0.9375rem] text-[#0A2E4D]/60 leading-relaxed">{r.besoin}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <p className="text-base md:text-lg text-[#0A2E4D]/70 leading-relaxed max-w-[70ch]">
                Commencez avec celui qui correspond à votre processus le plus fréquent. Ajoutez un
                deuxième outil seulement quand un besoin précis et récurrent le justifie. Pas avant.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Cross-link : aller plus loin (fond foncé pour alterner avec la section précédente) ─── */}
        <section className="relative py-24 md:py-32">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
            <ScrollReveal>
              <div className="rounded-[2rem] bg-[#0D3760] border border-white/10 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex flex-col gap-3 max-w-[42ch]">
                  <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-black tracking-tight leading-tight text-[#F7F3EB]">
                    Vous voulez qu&apos;on fasse ce choix pour vous ?
                  </h2>
                  <p className="text-[0.9375rem] text-[rgba(245,245,240,0.55)] leading-relaxed">
                    VELA fait le diagnostic avec vos vrais processus, identifie les automatisations
                    rentables, et implante l&apos;outil qui fait le travail.
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
