'use client'

import { CalendarCheck } from '@phosphor-icons/react'
import { CALENDRIER_MICRO_COPY, CALENDRIER_URL } from './calendrier'

interface BoutonDecouverteProps {
  /** 'gold' sur fond foncé, 'deep' sur fond clair */
  variant?: 'gold' | 'deep'
  /** Couleur de la micro-copie selon le fond de la section */
  onLight?: boolean
  showMicroCopy?: boolean
  fullWidthMobile?: boolean
  label?: string
  className?: string
}

export default function BoutonDecouverte({
  variant = 'gold',
  onLight = false,
  showMicroCopy = true,
  fullWidthMobile = true,
  label = 'Je réserve 30 minutes gratuites',
  className = '',
}: BoutonDecouverteProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full text-[0.9375rem] tracking-[0.02em] border transition-colors duration-200 active:scale-[0.97]'

  const tone =
    variant === 'gold'
      ? 'bg-[#D4A373] border-[#D4A373] text-[#0A2E4D] hover:bg-[#0A2E4D] hover:text-[#F5F5F0] shadow-[0_8px_32px_-8px_rgba(212,163,115,0.45)]'
      : 'bg-[#0A2E4D] border-[#0A2E4D] text-[#F5F5F0] hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-[#0A2E4D] shadow-[0_8px_28px_-10px_rgba(10,46,77,0.55)]'

  const width = fullWidthMobile ? 'w-full sm:w-auto' : 'w-fit'

  return (
    <div className={`flex flex-col gap-3 items-stretch sm:items-start ${className}`}>
      <a
        href={CALENDRIER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${tone} ${width}`}
      >
        <CalendarCheck size={17} weight="bold" className="shrink-0" />
        {label}
      </a>
      {showMicroCopy && (
        <p
          className={`text-xs leading-relaxed max-w-[46ch] ${
            onLight ? 'text-[rgba(10,46,77,0.45)]' : 'text-[rgba(245,245,240,0.45)]'
          }`}
        >
          {CALENDRIER_MICRO_COPY}
        </p>
      )}
    </div>
  )
}
