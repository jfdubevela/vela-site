'use client'

import { useRef, type ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  variant?: 'dark' | 'light'
}

export default function SpotlightCard({ children, className = '', variant = 'dark' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    ref.current.style.setProperty('--mouse-x', `${x}%`)
    ref.current.style.setProperty('--mouse-y', `${y}%`)
  }

  const baseClass = variant === 'light' ? 'spotlight-card-light' : 'spotlight-card'

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`${baseClass} ${className}`}
    >
      {children}
    </div>
  )
}
