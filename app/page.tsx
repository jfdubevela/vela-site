import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Hero from '@/components/sections/Hero'
import CTAFinal from '@/components/sections/CTAFinal'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SpotlightCard from '@/components/ui/SpotlightCard'
import Link from 'next/link'
import { ArrowRight, Robot, Chalkboard, Compass } from '@phosphor-icons/react/dist/ssr'

const homeSections = [
  { id: 'hero', label: 'Intro' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

const services = [
  {
    num: '01',
    icon: Robot,
    title: 'Automatisations I.A.',
    description: "Éliminez les tâches répétitives qui freinent votre équipe avec des automatisations sur mesure, livrées rapidement à prix fixe.",
    tags: ['Diagnostic offert', 'Prix fixe', 'Livraison rapide'],
    href: '/automatisations',
  },
  {
    num: '02',
    icon: Chalkboard,
    title: 'Formation',
    description: "Formez votre équipe à utiliser l'I.A. de façon stratégique et sécuritaire. Conférences, ateliers et programmes sur mesure.",
    tags: ['Conférence / atelier', 'Sur mesure', 'Adapté aux PME'],
    href: '/formations',
  },
  {
    num: '03',
    icon: Compass,
    title: 'Coaching I.A.',
    description: "Accélérez votre transformation I.A. avec un accompagnement personnalisé adapté à vos objectifs et à votre réalité.",
    tags: ['1-on-1', 'Stratégie sur mesure', 'Résultats mesurables'],
    href: '/coaching',
  },
]

export default function Home() {
  return (
    <>
      <Nav showAnchorLinks={false} />
      <ScrollProgress sections={homeSections} />
      <main>
        <div className="z-[1]">
          <Hero
            badge="Automatisation · Formation · Coaching"
            line1={['Votre', 'entreprise,']}
            line2={['amplifiée', 'par', "l'I.A."]}
            subtitle="VELA accompagne les PME québécoises avec trois expertises complémentaires en intelligence artificielle."
            subtitleBold="Concrets, accessibles, et orientés résultats."
            primaryCtaLabel="Découvrir nos services"
            primaryCtaTarget="#services"
            secondaryCtaLabel={null}
            microText="Automatisation · Formation · Coaching I.A."
          />
        </div>

        {/* Services overview */}
        <section id="services" className="relative py-24 md:py-32 bg-[#F5F5F0]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <ScrollReveal>
              <div className="mb-14">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/50 mb-4">
                  Nos services
                </p>
                <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black tracking-normal leading-[0.95] text-[#0A2E4D] max-w-[28ch]">
                  Trois façons de transformer votre entreprise
                  <br />
                  <span className="text-[#0A2E4D]/30">avec l&apos;intelligence artificielle.</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map((s, i) => {
                const Icon = s.icon
                return (
                  <ScrollReveal key={s.num} delay={i * 0.1}>
                    <Link href={s.href} className="block h-full group">
                      <SpotlightCard
                        variant="light"
                        className="h-full rounded-[2rem] bg-white border border-[#0A2E4D]/[0.08] hover:border-[#D4A373]/50 transition-colors duration-300 p-8 flex flex-col gap-5 shadow-[0_8px_40px_-12px_rgba(10,46,77,0.12)]"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex flex-col gap-2">
                            <span className="font-mono text-[10px] tracking-widest text-[#0A2E4D]/30">
                              {s.num}
                            </span>
                            <Icon size={22} weight="duotone" className="text-[#0A2E4D]/60" />
                          </div>
                          <ArrowRight
                            size={16}
                            weight="bold"
                            className="text-[#0A2E4D]/25 group-hover:text-[#D4A373] group-hover:translate-x-0.5 transition-all duration-200"
                          />
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                          <h3 className="text-xl font-bold tracking-tight text-[#0A2E4D] leading-snug">
                            {s.title}
                          </h3>
                          <p className="text-sm text-[#0A2E4D]/55 leading-relaxed">
                            {s.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono text-[#0A2E4D]/50 px-2.5 py-1 rounded-full bg-[#0A2E4D]/[0.05] border border-[#0A2E4D]/[0.08]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </SpotlightCard>
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
