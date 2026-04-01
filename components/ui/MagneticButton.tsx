'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.4,
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const translateX = useTransform(springX, (v) => v * strength * 20)
  const translateY = useTransform(springY, (v) => v * strength * 20)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) / (rect.width / 2))
    y.set((e.clientY - cy) / (rect.height / 2))
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const Comp = href ? motion.a : motion.button

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Comp
        style={{ x: translateX, y: translateY }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={className}
        onClick={onClick}
        {...(href ? { href } : {})}
      >
        {children}
      </Comp>
    </div>
  )
}
