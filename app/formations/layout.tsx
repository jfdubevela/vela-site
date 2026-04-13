import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VELA | Formations',
}

export default function FormationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
