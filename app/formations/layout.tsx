import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formations I.A. pour équipes, Montréal',
  description:
    "Conférences et ateliers I.A. pratiques pour vos équipes. Contenu sur mesure, résultats mesurables. Adaptés aux PME québécoises. Demandez un devis.",
  openGraph: {
    title: 'Formations I.A. pour équipes, Montréal | VELA',
    description:
      "Conférences et ateliers I.A. pratiques pour vos équipes. Contenu sur mesure, résultats mesurables. Adaptés aux PME québécoises. Demandez un devis.",
    url: 'https://velavelavela.com/formations',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Formations I.A. VELA' }],
  },
}

export default function FormationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
