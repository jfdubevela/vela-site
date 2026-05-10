import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SkillInstall from '@/components/ui/SkillInstall'

export interface InstallStep {
  label: string
  detail?: string
}

interface SkillExplicationProps {
  sectionTitle: string
  description: React.ReactNode
  benefices: string[]
  pourQui: string[]
  claudeSteps: InstallStep[]
  gptSteps: InstallStep[]
}

export default function SkillExplication({
  sectionTitle,
  description,
  benefices,
  pourQui,
  claudeSteps,
  gptSteps,
}: SkillExplicationProps) {
  return (
    <>
      {/* ── Explication ────────────────────────────────────── */}
      <section id="explication" className="bg-[#F5F5F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-[58fr_42fr] gap-12 md:gap-20 items-start">

            {/* Colonne gauche — description */}
            <div>
              <ScrollReveal>
                <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[rgba(10,46,77,0.45)] block mb-3">
                  Ce que ca fait
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-black tracking-tight leading-tight text-[#0A2E4D] mb-8">
                  {sectionTitle}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <div className="text-base md:text-[1.05rem] leading-relaxed text-[rgba(26,26,26,0.72)] max-w-[65ch] space-y-5">
                  {description}
                </div>
              </ScrollReveal>
            </div>

            {/* Colonne droite — bénéfices + pour qui */}
            <div className="flex flex-col gap-8">

              <ul className="flex flex-col gap-4" aria-label="Bénéfices">
                {benefices.map((b, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <li className="flex items-start gap-3 text-[0.9375rem] text-[rgba(26,26,26,0.78)] leading-snug">
                      <CheckCircle size={20} weight="fill" className="text-[#D4A373] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl border border-[rgba(10,46,77,0.08)] bg-[rgba(10,46,77,0.04)] p-6">
                  <p className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#0A2E4D] mb-4">
                    Ce skill est fait pour toi si...
                  </p>
                  <ul className="flex flex-col gap-3" aria-label="Profils cibles">
                    {pourQui.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[0.9rem] text-[rgba(26,26,26,0.72)] leading-snug">
                        <ArrowRight size={16} weight="bold" className="text-[#7DB7D6] shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* ── Installation ───────────────────────────────────── */}
      <section className="bg-[#0A2E4D] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[#7DB7D6] block mb-4">
              Installation
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-black tracking-tight leading-tight text-[#F7F3EB] mb-10">
              Pret en moins de 2 minutes.<br />
              <span className="text-[#D4A373]">Choisis ta plateforme.</span>
            </h2>
          </ScrollReveal>
          <SkillInstall claudeSteps={claudeSteps} gptSteps={gptSteps} />
        </div>
      </section>
    </>
  )
}
