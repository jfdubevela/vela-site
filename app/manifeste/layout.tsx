import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Manifeste VELA : ce qu'on pense de l'I.A.",
  description:
    "Notre position sur l'intelligence artificielle, sans hype. Ce qu'on croit, ce qu'on ne fera jamais, et comment on utilise l'I.A. dans nos propres opérations.",
  alternates: { canonical: '/manifeste' },
  openGraph: {
    title: "Manifeste VELA : ce qu'on pense de l'I.A. | VELA",
    description:
      "Notre position sur l'intelligence artificielle, sans hype. Ce qu'on croit, ce qu'on ne fera jamais, et comment on utilise l'I.A. dans nos propres opérations.",
    url: 'https://velavelavela.com/manifeste',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Manifeste VELA' }],
  },
}

export default function ManifesteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
