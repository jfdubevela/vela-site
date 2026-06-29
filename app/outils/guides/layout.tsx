import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guides I.A. gratuits pour PME, Montréal',
  description:
    "Des guides pratiques et gratuits pour utiliser l'I.A. au quotidien dans votre PME. Téléchargez-les en un clic.",
  alternates: { canonical: '/outils/guides' },
  openGraph: {
    title: 'Guides I.A. gratuits pour PME, Montréal | VELA',
    description:
      "Des guides pratiques et gratuits pour utiliser l'I.A. au quotidien dans votre PME. Téléchargez-les en un clic.",
    url: 'https://velavelavela.com/outils/guides',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Guides I.A. VELA' }],
  },
}

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
