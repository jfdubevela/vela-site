import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Claude, ChatGPT ou Gemini : quel outil choisir pour votre PME ?',
  description:
    "Comparatif à jour (juillet 2026) de Claude, ChatGPT et Gemini pour les PME québécoises : forces, prix, cas d'usage. Par VELA.",
  alternates: { canonical: '/outils/guides/claude-chatgpt-gemini-pme' },
  openGraph: {
    title: 'Claude, ChatGPT ou Gemini : quel outil choisir pour votre PME ? | VELA',
    description:
      "Comparatif à jour (juillet 2026) de Claude, ChatGPT et Gemini pour les PME québécoises : forces, prix, cas d'usage. Par VELA.",
    url: 'https://velavelavela.com/outils/guides/claude-chatgpt-gemini-pme',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Claude, ChatGPT ou Gemini : quel outil choisir ?' }],
  },
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
