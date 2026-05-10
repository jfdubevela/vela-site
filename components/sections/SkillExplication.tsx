import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface SkillExplicationProps {
  sectionTitle: string
  description: React.ReactNode
  benefices: string[]
  pourQui: string[]
  apercuSrc?: string
  apercuAlt?: string
}

export default function SkillExplication({
  sectionTitle,
  description,
  benefices,
  pourQui,
  apercuSrc,
  apercuAlt,
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

              {/* Bénéfices */}
              <ul className="flex flex-col gap-4" aria-label="Bénéfices">
                {benefices.map((b, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <li className="flex items-start gap-3 text-[0.9375rem] text-[rgba(26,26,26,0.78)] leading-snug">
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className="text-[#D4A373] shrink-0 mt-0.5"
                      />
                      {b}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              {/* Pour qui */}
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

      {/* ── Aperçu ─────────────────────────────────────────── */}
      <section className="bg-[#0A2E4D] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[#7DB7D6] block mb-10">
              Voir le skill en action
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            {/* Cadre style app */}
            <div className="relative max-w-4xl mx-auto rounded-[1.5rem] overflow-hidden border border-white/[0.08] shadow-[0_40px_80px_-20px_rgba(7,30,51,0.8)] bg-white/[0.03]">
              {/* Barre chrome décorative */}
              <div className="flex items-center gap-1.5 px-4 h-9 bg-white/[0.04] border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
              </div>

              {apercuSrc ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={apercuSrc}
                  alt={apercuAlt ?? 'Aperçu du skill'}
                  className="w-full"
                />
              ) : (
                /* Placeholder — remplacer apercuSrc dans page.tsx */
                <div className="aspect-video flex flex-col items-center justify-center gap-4 text-[rgba(125,183,214,0.3)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M9 9h6M9 12h4M9 15h3" />
                  </svg>
                  <span className="text-xs tracking-widest uppercase">
                    Ajouter apercuSrc dans page.tsx
                  </span>
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-5 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-[rgba(125,183,214,0.45)]">
              Resultat en temps reel dans Claude
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
