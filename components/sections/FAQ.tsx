'use client'

import FAQAccordion from '../ui/FAQAccordion'
import ScrollReveal from '../ui/ScrollReveal'

const items = [
  {
    question: "Est-ce que j'ai besoin de compétences techniques pour travailler avec vous ?",
    answer:
      "Non. Vous n'avez besoin d'aucune compétence technique. On s'occupe de tout — de la conception au déploiement. On vous explique ce qu'on fait en langage clair, on vous forme sur les points de contrôle essentiels, et on vous remet une documentation d'une page par automation.",
  },
  {
    question: 'En combien de temps voit-on des résultats concrets ?',
    answer:
      'Le diagnostic prend 2–3 semaines et se termine avec un prototype démontrable. Les premières automations sont en production dans les semaines suivantes (cadence : ~1 automation par semaine). La plupart de nos clients voient un retour sur leur investissement dans les 30 à 60 jours suivant le démarrage.',
  },
  {
    question: "Est-ce que l'automatisation va remplacer mes employés ?",
    answer:
      "Non. On automatise les tâches répétitives et à faible valeur ajoutée pour libérer votre équipe sur ce qui compte vraiment. L'objectif est de rendre vos employés plus efficaces, pas de les remplacer. Chaque mandat inclut une formation pour que votre équipe comprenne et contrôle le système.",
  },
  {
    question: "Comment ça s'intègre à mes outils actuels (Google Workspace, CRM, etc.) ?",
    answer:
      "On travaille avec les outils que vous utilisez déjà. Notre stack naturel : Make, Google Workspace, Microsoft 365, Gmail/Outlook, Mailchimp. On connecte vos outils existants entre eux — pas besoin de migrer ou changer de logiciel. Le diagnostic identifie exactement ce qui est connecté à quoi.",
  },
  {
    question: "Qu'est-ce qui se passe si une automation tombe en panne ?",
    answer:
      "Chaque automation qu'on livre inclut monitoring, alertes et logs. Si quelque chose déraille, vous (ou nous) êtes alertés immédiatement. La documentation inclut un guide \"quoi faire si...\" pour les scénarios courants. Les 7 jours de stabilisation inclus servent exactement à ça : s'assurer que ça tient en conditions réelles.",
  },
  {
    question: 'Pourquoi commencer par un diagnostic ?',
    answer:
      "Parce qu'on ne déploie pas à l'aveugle. Le diagnostic chiffre la valeur réelle de chaque automation (heures → $) avant d'investir dans l'implantation. Ça évite de construire des choses qui ne servent à rien, et ça garantit que votre argent va aux quick wins les plus rentables.",
  },
  {
    question: 'Mes données et accès restent-ils en ma possession ?',
    answer:
      "Oui, toujours. C'est une règle fondamentale chez VELA : le client possède tout — les comptes, les accès, les scénarios, les clés API. On ne garde aucun accès après la fin d'un mandat sauf si vous nous demandez explicitement de continuer avec la maintenance mensuelle.",
  },
  {
    question: "Qu'est-ce qui vous différencie des autres agences I.A. ?",
    answer:
      "On mesure avant d'automatiser — et c'est rare. On ne vend pas de démos fragiles ou de promesses vagues. Chaque livrable a une définition de \"DONE\" claire : monitoring, alertes, logs, documentation, formation, 7 jours de stabilisation. On est une micro-agence québécoise : vous parlez directement aux experts, pas à des intermédiaires.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#0A2E4D] py-28 md:py-36 rounded-t-3xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          {/* Left */}
          <div className="md:sticky md:top-28 md:self-start">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.25em] text-[#7DB7D6] mb-4">FAQ</p>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB]">
                Les vraies questions
                <br />
                qu&apos;on nous pose.
              </h2>
              <p className="mt-5 text-sm text-[rgba(245,245,240,0.45)] leading-relaxed max-w-[32ch]">
                Si vous avez d&apos;autres questions, on est là.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#D4A373] hover:text-[#F7F3EB] transition-colors font-medium cursor-pointer"
              >
                Poser une question
                <span className="text-lg leading-none">→</span>
              </button>
            </ScrollReveal>
          </div>

          {/* Right — accordion */}
          <ScrollReveal delay={0.1}>
            <FAQAccordion items={items} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
