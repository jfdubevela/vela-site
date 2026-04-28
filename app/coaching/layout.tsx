import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coaching I.A. individuel, Montréal',
  description:
    "Maîtrisez l'I.A. en sessions 1-on-1 sans jargon. Roadmap personnalisée pour pros et dirigeants. Session découverte gratuite, région de Montréal.",
  openGraph: {
    title: 'Coaching I.A. individuel, Montréal | VELA',
    description:
      "Maîtrisez l'I.A. en sessions 1-on-1 sans jargon. Roadmap personnalisée pour pros et dirigeants. Session découverte gratuite, région de Montréal.",
    url: 'https://velavelavela.com/coaching',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Coaching I.A. VELA' }],
  },
}

export default function CoachingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
