import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Vela | Intelligence artificielle pour professionnels et PME',
  description:
    "VELA accompagne les professionnels et les PME québécoises avec trois expertises complémentaires en intelligence artificielle. Concrets, accessibles, et orientés résultats.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vela | Intelligence artificielle pour professionnels et PME',
    description:
      "VELA accompagne les professionnels et les PME québécoises avec trois expertises complémentaires en intelligence artificielle. Concrets, accessibles, et orientés résultats.",
    url: 'https://velavelavela.com',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'VELA' }],
  },
}
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Hero from '@/components/sections/Hero'
import CTAFinal from '@/components/sections/CTAFinal'
import ServicesHome from '@/components/sections/ServicesHome'

const homeSections = [
  { id: 'hero', label: 'Intro' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
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
            line1={['Votre', 'productivité', 'et', 'créativité']}
            line2={['amplifiées', 'par', "l'intelligence", 'artificielle']}
            subtitle="VELA accompagne les professionnels et les PME québécoises avec trois expertises complémentaires en intelligence artificielle."
            subtitleBold="Concrets, accessibles, et orientés résultats."
            primaryCtaLabel="Découvrir nos services"
            primaryCtaTarget="#services"
            secondaryCtaLabel={null}
            microText="Automatisation · Formation · Coaching I.A."
          />
        </div>

        <ServicesHome />

        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
