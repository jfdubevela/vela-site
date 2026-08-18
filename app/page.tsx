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
import ScrollRail from '@/components/ui/ScrollRail'
import Hero from '@/components/sections/Hero'
import CTAFinal from '@/components/sections/CTAFinal'
import ServicesHome from '@/components/sections/ServicesHome'
import Parcours from '@/components/sections/Parcours'
import PourQui from '@/components/sections/PourQui'
import PourquoiVela from '@/components/sections/PourquoiVela'
import GuidesGratuits from '@/components/sections/GuidesGratuits'

const homeSections = [
  { id: 'hero', label: 'Intro' },
  { id: 'services', label: 'Services' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'pour-qui', label: 'Pour qui' },
  { id: 'pourquoi-vela', label: 'Pourquoi VELA' },
  { id: 'guides', label: 'Guides' },
  { id: 'contact', label: 'Contact' },
]

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollRail sections={homeSections} />
      <main>
        <div className="z-[1]">
          <Hero
            badge="Coaching · Formation · Automatisation"
            line1={["Comprendre", "l'I.A."]}
            line2={['Et', 'enfin', "s'en", 'servir.']}
            subtitle="Formation, coaching et automatisation pour les professionnels et les PME du Québec."
            subtitleBold="Concret, mesuré, sans jargon."
            primaryCtaLabel="Découvrir nos services"
            primaryCtaTarget="#services"
            secondaryCtaLabel={null}
            showBookingCta
            microText="Coaching · Formation · Automatisation I.A."
          />
        </div>

        <ServicesHome />

        <Parcours />

        <PourQui />

        <PourquoiVela />

        <GuidesGratuits />

        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
