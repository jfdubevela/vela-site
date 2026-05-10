// ============================================================
// TEMPLATE SKILL LANDING — VELA
// Dupliquer ce dossier, renommer le segment [nom-du-skill],
// puis modifier UNIQUEMENT le bloc CONFIG ci-dessous.
// ============================================================

import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SkillHero from '@/components/sections/SkillHero'
import SkillExplication from '@/components/sections/SkillExplication'
import type { InstallStep } from '@/components/sections/SkillExplication'
import SkillForm from '@/components/ui/SkillForm'

// ============================================================
// CONFIG — tout ce qui change d'un skill à l'autre
// ============================================================
const CONFIG = {

  // --- SEO ---
  metaTitle:       '[TITRE_SKILL] gratuit — VELA',
  metaDescription: '[DESCRIPTION_META — 150 car max]',
  canonicalSlug:   '[nom-du-skill]', // ex: cold-email-claude

  // --- Hero ---
  badge:    'Skill Claude gratuit',
  line1:    '[Première ligne du titre]',        // ex: 'Rédige tes cold emails'
  line2:    '[Deuxième ligne, en doré]',        // ex: 'en 30 secondes chrono'
  subtitle: '[Une phrase: le problème que ce skill règle.]',
  ctaLabel: 'Recevoir le skill gratuitement →',

  // --- Explication ---
  sectionTitle: '[Titre de section — ex: Ce que le skill fait pour toi]',

  // Passe du JSX directement pour les paragraphes
  description: (
    <>
      <p>[Paragraphe 1 — ce que le skill fait concrètement.]</p>
      <p>[Paragraphe 2 — pour qui et dans quel contexte.]</p>
      <p>[Paragraphe 3 — ce que ça change, résultat mesurable.]</p>
    </>
  ),

  benefices: [
    '[Bénéfice 1 — ex: Génère un email complet en moins de 30 secondes]',
    '[Bénéfice 2 — ex: Fonctionne directement dans Claude.ai, zéro setup]',
    '[Bénéfice 3 — ex: Adapté au contexte québécois et francophone]',
    '[Bénéfice 4 — ex: Personnalisable selon ton secteur]',
  ],

  pourQui: [
    '[Profil 1 — ex: Tu prospectes 10–20 nouveaux clients par mois]',
    '[Profil 2 — ex: Tu veux donner un outil I.A. concret à ton équipe]',
    '[Profil 3 — ex: Tu en as assez de rédiger le même message générique]',
  ],

  // --- Installation Claude ---
  claudeSteps: [
    {
      label: 'Ouvre Claude.ai et clique sur "Projects" dans le menu de gauche.',
    },
    {
      label: 'Crée un nouveau projet ou ouvre un projet existant.',
    },
    {
      label: 'Clique sur "Set instructions" (ou "Custom instructions").',
      detail: 'C\'est ici que tu colles le contenu du skill.',
    },
    {
      label: 'Colle le texte du skill reçu par courriel, puis sauvegarde.',
    },
    {
      label: 'Lance une nouvelle conversation dans ce projet — le skill est actif.',
    },
  ],

  // --- Installation ChatGPT ---
  gptSteps: [
    {
      label: 'Ouvre ChatGPT et clique sur ton avatar en bas à gauche.',
    },
    {
      label: 'Choisis "Customize ChatGPT" dans le menu.',
    },
    {
      label: 'Dans le champ "What would you like ChatGPT to know...", colle le skill.',
      detail: 'Ou crée un GPT personnalisé via "Explore GPTs" > "Create" pour un résultat plus propre.',
    },
    {
      label: 'Clique sur "Save" et commence une nouvelle conversation.',
    },
  ],

  // --- Formulaire Loops ---
  nomSkill:      '[nom-du-skill]',              // valeur envoyée comme `source` à Loops
  formTitle:     'Reçois le skill gratuitement',
  formSubtitle:  'Entre ton prénom et ton courriel — on te livre le skill directement dans ta boîte.',
  submitLabel:   'Recevoir le skill gratuitement →',
  successTitle:  'Check ton courriel !',
  successMessage:'Le skill est en chemin. Vérifie ta boîte (et le dossier spam si besoin).',

} as const

// ============================================================
// MÉTADONNÉES — générées automatiquement depuis CONFIG
// ============================================================
export const metadata: Metadata = {
  title:       CONFIG.metaTitle,
  description: CONFIG.metaDescription,
  alternates:  { canonical: `/skills/${CONFIG.canonicalSlug}` },
  openGraph: {
    title:       CONFIG.metaTitle,
    description: CONFIG.metaDescription,
    url:         `https://velavelavela.com/skills/${CONFIG.canonicalSlug}`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'VELA' }],
  },
}

// ============================================================
// PAGE — ne pas modifier
// ============================================================
export default function SkillPage() {
  return (
    <>
      <Nav showAnchorLinks={false} />
      <main>
        <SkillHero
          badge={CONFIG.badge}
          line1={CONFIG.line1}
          line2={CONFIG.line2}
          subtitle={CONFIG.subtitle}
          ctaLabel={CONFIG.ctaLabel}
        />
        <SkillExplication
          sectionTitle={CONFIG.sectionTitle}
          description={CONFIG.description}
          benefices={CONFIG.benefices}
          pourQui={CONFIG.pourQui}
          claudeSteps={CONFIG.claudeSteps as InstallStep[]}
          gptSteps={CONFIG.gptSteps as InstallStep[]}
        />
        <SkillForm
          nomSkill={CONFIG.nomSkill}
          formTitle={CONFIG.formTitle}
          formSubtitle={CONFIG.formSubtitle}
          submitLabel={CONFIG.submitLabel}
          successTitle={CONFIG.successTitle}
          successMessage={CONFIG.successMessage}
        />
      </main>
      <Footer />
    </>
  )
}
