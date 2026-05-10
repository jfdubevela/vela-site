import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SkillHero from '@/components/sections/SkillHero'
import SkillExplication from '@/components/sections/SkillExplication'
import SkillForm from '@/components/ui/SkillForm'
import type { InstallStep } from '@/components/sections/SkillExplication'

const CONFIG = {

  // --- SEO ---
  metaTitle:       'Expert Loi 25 gratuit — VELA',
  metaDescription: 'Recois le skill Claude Expert Loi 25 gratuitement. Politique de confidentialite, consentement, incidents — reponds en expert en quelques secondes.',
  canonicalSlug:   'expert-loi-25',

  // --- Hero ---
  badge:    'Skill Claude gratuit',
  line1:    'Deviens expert Loi 25',
  line2:    'en quelques secondes.',
  subtitle: 'Politique de confidentialite, consentement, incidents, EFVP — ce skill transforme Claude en conseiller specialise en conformite pour les entreprises quebecoises.',
  ctaLabel: 'Recevoir le skill gratuitement →',

  // --- Explication ---
  sectionTitle: 'Un conseiller Loi 25 dans ta poche, sans les honoraires.',

  description: (
    <>
      <p>
        La Loi 25 impose des obligations concretes aux entreprises quebecoises — politique de confidentialite obligatoire, gestion du consentement, declaration des incidents, evaluations EFVP. Mais naviguer dans ces exigences sans aide juridique couts beaucoup de temps et d&apos;argent.
      </p>
      <p>
        Ce skill installe un assistant specialise directement dans Claude ou ChatGPT. Tu poses ta question en langage courant, il repond avec precision : redaction de politique, audit, plan de mise en conformite, gestion d&apos;incident.
      </p>
      <p>
        Développé pour les PME québécoises qui veulent être conformes sans embaucher un juriste à temps plein.
      </p>
    </>
  ),

  benefices: [
    'Rédige ta politique de confidentialité complète en quelques minutes',
    'Audite une politique existante et identifie les lacunes Loi 25',
    'Guide pas à pas en cas d\'incident de confidentialité',
    'Crée un plan de conformité adapté à ton secteur et ta taille',
  ],

  pourQui: [
    'Tu es dirigeant d\'une PME québécoise et tu ignores si ton entreprise est conforme',
    'Tu as reçu une demande d\'accès ou un avis de la CAI et tu ne sais pas quoi répondre',
    'Tu veux mettre en place ta politique de confidentialité sans payer des milliers en frais juridiques',
  ],

  // --- Installation Claude ---
  claudeSteps: [
    {
      label: 'Ouvre Claude sur ton ordinateur',
      detail: 'Lance l\'application Claude pour bureau (Mac ou Windows). Assure-toi d\'être connecté à ton compte.',
    },
    {
      label: 'Ouvre le menu « Personnaliser »',
      detail: 'Dans la barre latérale gauche, clique sur « Personnaliser » (ou l\'icône ✦ selon ta version).',
    },
    {
      label: 'Va dans l\'onglet « Skills »',
      detail: 'Dans le panneau qui s\'ouvre, sélectionne l\'onglet « Skills ».',
    },
    {
      label: 'Uploade le fichier .skill reçu par courriel',
      detail: 'Clique sur « Créer un skill » → « Uploader un skill », puis sélectionne le fichier loi25-conformite.skill sur ton ordinateur.',
    },
    {
      label: 'Confirme l\'installation — le skill est actif',
      detail: 'Le skill apparaît dans ta liste. Mentionne la Loi 25 dans n\'importe quelle conversation et il s\'active automatiquement.',
    },
  ] as InstallStep[],

  // --- Installation ChatGPT ---
  gptSteps: [
    {
      label: 'Accède au GPT Builder',
      detail: 'Connecte-toi sur chat.openai.com → clique « Explorer les GPTs » dans la barre latérale → clique « + Créer » en haut à droite.',
    },
    {
      label: 'Choisis l\'onglet « Configurer »',
      detail: 'Dans le GPT Builder, sélectionne « Configurer » (et non « Créer »). Donne-lui le nom : Expert Loi 25 – Conformité Québec.',
    },
    {
      label: 'Colle les instructions reçues par courriel',
      detail: 'Ouvre le fichier instructions.txt, copie tout le texte (Ctrl+A puis Ctrl+C), et colle-le dans le champ « Instructions ».',
    },
    {
      label: 'Uploade les 5 fichiers de connaissances',
      detail: 'Dans la section « Connaissances », uploade dans l\'ordre : modele-politique-confidentialite.txt, puis les 4 PDFs de référence CAI inclus dans le courriel.',
    },
    {
      label: 'Active les bonnes capacités',
      detail: 'Coche : Recherche sur le Web + Interpréteur de code. Décoche : Génération d\'images DALL·E.',
    },
    {
      label: 'Enregistre et c\'est prêt',
      detail: 'Clique « Enregistrer » → choisis « Uniquement moi » pour usage privé, ou « Toute personne ayant le lien » pour partager avec ton équipe.',
    },
  ] as InstallStep[],

  // --- Formulaire Loops ---
  nomSkill:      'expert-loi-25',
  formTitle:     'Reçois le skill gratuitement',
  formSubtitle:  'Entre ton prénom et ton courriel — on te livre le skill directement dans ta boîte.',
  submitLabel:   'Recevoir le skill Expert Loi 25 →',
  successTitle:  'Check ton courriel !',
  successMessage:'Le skill est en chemin. Vérifie ta boîte (et le dossier spam si besoin). À bientôt chez VELA.',

} as const

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

export default function SkillLoi25Page() {
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
          claudeSteps={CONFIG.claudeSteps}
          gptSteps={CONFIG.gptSteps}
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
