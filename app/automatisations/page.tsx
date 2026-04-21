import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Probleme from '@/components/sections/Probleme'
import Processus from '@/components/sections/Processus'
import AvantApres from '@/components/sections/AvantApres'
import Temoignages from '@/components/sections/Temoignages'
import EtudesDeCas from '@/components/sections/EtudesDeCas'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'

const autoSections = [
  { id: 'hero', label: 'Intro' },
  { id: 'probleme', label: 'Problème' },
  { id: 'processus', label: 'Processus' },
  { id: 'avant-apres', label: 'Avant / Après' },
  { id: 'etudes-de-cas', label: 'Exemples' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function AutomatisationsPage() {
  return (
    <>
      <Nav showAnchorLinks={false} />
      <ScrollProgress sections={autoSections} />
      <main>
        <div className="z-[1]">
          <Hero />
        </div>
        <div className="relative md:sticky top-0 z-[10] bg-[#F5F5F0] shadow-[0_-12px_40px_rgba(0,0,0,0.2)]">
          <TrustBar />
        </div>
        <div className="relative md:min-h-[100dvh] md:sticky top-0 z-[20] bg-[#0A2E4D] shadow-[0_-12px_40px_rgba(0,0,0,0.25)]">
          <Probleme />
        </div>
        <div className="relative md:min-h-[100dvh] md:sticky top-0 z-[30] bg-[#F5F5F0] shadow-[0_-12px_40px_rgba(0,0,0,0.2)]">
          <Processus />
        </div>
        <div className="relative md:min-h-[100dvh] md:sticky top-0 z-[40] bg-[#F5F5F0] shadow-[0_-12px_40px_rgba(0,0,0,0.2)]">
          <AvantApres />
        </div>
        <div className="relative md:min-h-[100dvh] md:sticky top-0 z-[50] bg-[#0A2E4D] shadow-[0_-12px_40px_rgba(0,0,0,0.25)]">
          <Temoignages />
        </div>
        <div className="relative md:min-h-[100dvh] md:sticky top-0 z-[60] bg-[#F5F5F0] shadow-[0_-12px_40px_rgba(0,0,0,0.2)]">
          <EtudesDeCas />
        </div>
        <div className="relative md:min-h-[100dvh] md:sticky top-0 z-[70] bg-[#0A2E4D] shadow-[0_-12px_40px_rgba(0,0,0,0.25)]">
          <FAQ />
        </div>
        <div className="relative md:sticky top-0 z-[80] bg-[#0A2E4D] shadow-[0_-12px_40px_rgba(0,0,0,0.3)]">
          <CTAFinal />
        </div>
      </main>
      <Footer />
    </>
  )
}
