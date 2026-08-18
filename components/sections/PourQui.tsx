import { Storefront, Briefcase, Buildings, ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '../ui/ScrollReveal'

const profils = [
  {
    icon: Storefront,
    title: 'Restauration & commerce',
    desc: 'Réponses aux avis, promotions, prises de réservation, relances clients.',
  },
  {
    icon: Briefcase,
    title: 'Consultants & professionnels autonomes',
    desc: 'Propositions, suivis clients, contenu qui revient chaque semaine.',
  },
  {
    icon: Buildings,
    title: 'PME avec petite équipe',
    desc: 'Rapports, admin, CRM, courriels répétitifs.',
  },
  {
    icon: ChartLineUp,
    title: 'Dirigeants et gestionnaires',
    desc: "Décider plus vite avec l'information qu'on a déjà, sans attendre qu'elle soit parfaite.",
  },
]

export default function PourQui() {
  return (
    <section id="pour-qui" className="relative bg-[#0A2E4D] py-28 md:py-36 rounded-t-[18px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20">

        <ScrollReveal>
          <span className="block font-mono text-[0.75rem] uppercase tracking-[0.16em] font-medium text-[#7DB7D6] mb-4">
            Pour qui
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="text-display-md font-medium tracking-[-0.02em] leading-[1] text-[#F7F3EB] mb-3 max-w-[22ch]">
            Conçu pour votre réalité, pas pour une multinationale.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="text-[rgba(247,243,235,0.55)] leading-[1.65] max-w-[52ch] mb-14">
            Peu importe votre secteur, on part de vos vraies tâches, pas d&apos;exemples génériques.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {profils.map((p, i) => (
            <ScrollReveal key={p.title} delay={0.08 * (i + 2)}>
              <div className="glass rounded-[14px] p-8 flex flex-col gap-4 h-full">
                <div className="w-11 h-11 rounded-full bg-white/[0.06] border border-[rgba(247,243,235,0.14)] flex items-center justify-center text-[#7DB7D6] shrink-0">
                  <p.icon size={20} weight="regular" />
                </div>
                <h3 className="text-lg font-bold text-[#F7F3EB] leading-[1.3]">{p.title}</h3>
                <p className="text-[0.875rem] text-[rgba(247,243,235,0.62)] leading-[1.65]">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
