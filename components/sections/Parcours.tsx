import { Chalkboard, Compass, Gear } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '../ui/ScrollReveal'

const etapes = [
  {
    num: '01',
    icon: Chalkboard,
    title: 'Comprendre',
    sousTitre: 'Formation I.A.',
    desc: "Une équipe qui sait de quoi elle parle. Elle repart en sachant ce que l'I.A. fait, ce qu'elle ne fait pas, et quoi lui demander lundi matin.",
  },
  {
    num: '02',
    icon: Compass,
    title: 'Maîtriser',
    sousTitre: 'Coaching I.A.',
    desc: 'Une personne qui transforme ses vraies tâches. Deux sessions par mois, ses propres dossiers, des réflexes qui restent.',
  },
  {
    num: '03',
    icon: Gear,
    title: 'Systématiser',
    sousTitre: 'Automatisations I.A.',
    desc: "Une entreprise qui arrête de refaire la même chose. Quand une tâche revient chaque semaine, elle n'a plus besoin de vous.",
  },
]

export default function Parcours() {
  return (
    <section id="parcours" className="relative bg-[#E8E4DA] py-28 md:py-36 rounded-t-[18px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20">

        <ScrollReveal>
          <span className="block font-mono text-[0.75rem] uppercase tracking-[0.16em] font-medium text-[rgba(10,46,77,0.45)] mb-4">
            Comment ça s&apos;articule
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="text-display-md font-medium tracking-[-0.02em] leading-[1] text-[#122434] mb-3 max-w-[20ch]">
            Un parcours, pas trois choix séparés.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="text-[rgba(26,26,26,0.5)] leading-[1.65] max-w-[56ch] mb-16">
            Formation, coaching et automatisation ne sont pas trois portes différentes.
            C&apos;est une seule progression, et vous entrez où vous êtes rendu.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          {/* ── Desktop : 3 colonnes ── */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 relative mb-16">
            <div className="absolute top-[21px] left-[21px] right-[21px] h-0 border-t-2 border-dashed border-[rgba(201,169,97,0.30)] z-0" aria-hidden="true" />
            {etapes.map((etape) => (
              <div key={etape.num} className="relative z-10 flex flex-col gap-3.5">
                <div className="flex flex-col items-start gap-2">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#0A2E4D] text-[#F7F3EB] flex items-center justify-center font-bold text-sm shrink-0 shadow-[0_4px_16px_-4px_rgba(10,46,77,0.35)] font-mono">
                    {etape.num}
                  </div>
                  <etape.icon size={18} weight="regular" className="text-[#0A2E4D]/50" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#122434] leading-[1.3]">{etape.title}</h3>
                  <p className="text-[0.75rem] font-mono uppercase tracking-[0.1em] text-[rgba(10,46,77,0.4)] mt-0.5">{etape.sousTitre}</p>
                </div>
                <p className="text-[0.875rem] text-[rgba(26,26,26,0.55)] leading-[1.65]">{etape.desc}</p>
              </div>
            ))}
          </div>

          {/* ── Mobile : timeline verticale ── */}
          <div className="flex md:hidden flex-col mb-16">
            {etapes.map((etape, i) => (
              <div key={etape.num} className="relative flex gap-5">
                <div className="flex flex-col items-center shrink-0 w-14">
                  <div className="w-14 h-14 rounded-full bg-[#0A2E4D] text-[#F7F3EB] flex items-center justify-center font-medium text-xl shrink-0 shadow-[0_6px_20px_-6px_rgba(10,46,77,0.35)] font-mono z-10">
                    {etape.num}
                  </div>
                  {i < etapes.length - 1 && (
                    <div className="flex-1 w-px bg-gradient-to-b from-[rgba(10,46,77,0.18)] to-transparent mt-2 mb-0 min-h-[2.5rem]" aria-hidden="true" />
                  )}
                </div>
                <div className={`flex-1 pb-8 ${i === etapes.length - 1 ? 'pb-0' : ''}`}>
                  <etape.icon size={18} weight="regular" className="text-[#0A2E4D]/50 mb-2 mt-2" />
                  <h3 className="text-xl font-medium text-[#122434] leading-[1.2]">{etape.title}</h3>
                  <p className="text-[0.6875rem] font-mono uppercase tracking-[0.14em] text-[rgba(10,46,77,0.4)] mt-0.5 mb-3">{etape.sousTitre}</p>
                  <p className="text-[0.9375rem] text-[rgba(26,26,26,0.58)] leading-[1.65]">{etape.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <p className="text-center text-lg font-medium text-[#122434]">
            On commence par là où vous êtes.{' '}
            <span className="text-[rgba(10,46,77,0.4)]">Le reste suit.</span>
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}
