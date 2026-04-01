'use client'

import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface KineticMarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function KineticMarquee({
  children,
  speed = 28,
  className = '',
}: KineticMarqueeProps) {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-0 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </motion.div>
    </div>
  )
}
