import Image from 'next/image'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '../ui/ScrollReveal'

const pains = [
  'Trop de tâches manuelles qui volent du temps facturable.',
  'Des données dispersées dans 5 outils qui ne se parlent pas.',
  'Des solutions trop techniques, trop chères, montées pour des géants.',
]

export default function Probleme() {
  return (
    <section id="probleme" className="relative bg-[#0A2E4D] overflow-hidden py-28 md:py-36 rounded-t-3xl">
      {/* Lighthouse image — fused into background right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden md:block">
        <Image
          src="/images/9.png"
          alt="Entrepreneur québécois dépassé par des tâches répétitives avant l'automatisation I.A."
          fill
          quality={80}
          className="object-cover object-center"
        />
        {/* Fade to background left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E4D] via-[#0A2E4D]/60 to-transparent" />
        {/* Fade top/bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E4D]/40 via-transparent to-[#0A2E4D]/60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-[55%] md:max-w-[50%]">
          {/* Label */}
          <ScrollReveal delay={0}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#7DB7D6] mb-6">
              Le problème
            </p>
          </ScrollReveal>

          {/* H2 */}
          <ScrollReveal delay={0.08}>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black tracking-normal leading-[0.95] text-[#F7F3EB] mb-10">
              Vous avez les outils.
              <br />
              <span className="text-[rgba(247,243,235,0.5)]">Ils ne travaillent pas pour vous.</span>
            </h2>
          </ScrollReveal>

          {/* Pain points — no cards, divide-y */}
          <div className="divide-y divide-white/10">
            {pains.map((pain, i) => (
              <ScrollReveal key={i} delay={0.12 + i * 0.1}>
                <div className="flex items-start gap-4 py-5">
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="text-[#7DB7D6]/60 mt-0.5 shrink-0"
                  />
                  <p className="text-base text-[rgba(245,245,240,0.72)] leading-relaxed">
                    {pain}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* VELA signature */}
          <ScrollReveal delay={0.42}>
            <p className="mt-10 text-lg md:text-xl italic text-[#D4A373] font-medium">
              &ldquo;On mesure avant d&apos;automatiser.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
