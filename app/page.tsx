import Nav from '@/components/Nav'
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

        <ServicesHome />

        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
