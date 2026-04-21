import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formations I.A. pour entreprises',
  description:
    "Conférences, ateliers et programmes sur mesure pour outiller votre équipe avec l'intelligence artificielle. Formations pratiques adaptées aux PME québécoises par VELA.",
  openGraph: {
    title: 'Formations I.A. pour entreprises | VELA',
    description:
      "Conférences, ateliers et programmes sur mesure pour outiller votre équipe avec l'intelligence artificielle. Adaptées aux PME québécoises.",
    url: 'https://velavelavela.com/formations',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Formations I.A. VELA' }],
  },
}

export default function FormationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
