import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Guide gratuit : quel modèle d'I.A. choisir ?",
  description:
    "Téléchargez gratuitement le guide VELA pour savoir quand utiliser le modèle d'I.A. par défaut, le modèle réflexion, ou le plus puissant chez Claude et ChatGPT.",
  alternates: { canonical: '/outils/guides/quel-modele-ia-choisir' },
  openGraph: {
    title: "Guide gratuit : quel modèle d'I.A. choisir ? | VELA",
    description:
      "Téléchargez gratuitement le guide VELA pour savoir quand utiliser le modèle d'I.A. par défaut, le modèle réflexion, ou le plus puissant chez Claude et ChatGPT.",
    url: 'https://velavelavela.com/outils/guides/quel-modele-ia-choisir',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: "Guide : quel modèle d'I.A. choisir" }],
  },
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
