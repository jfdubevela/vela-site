import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coaching I.A. individuel',
  description:
    "Coaching I.A. individuel pour intégrer l'intelligence artificielle dans votre travail concrètement, sans jargon. Sessions 1-on-1, roadmap personnalisée, résultats mesurables. Session découverte gratuite.",
  openGraph: {
    title: 'Coaching I.A. individuel | VELA',
    description:
      "Coaching I.A. individuel pour intégrer l'intelligence artificielle dans votre travail. Sessions 1-on-1, roadmap personnalisée. Session découverte gratuite.",
    url: 'https://velavelavela.com/coaching',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Coaching I.A. VELA' }],
  },
}

export default function CoachingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
