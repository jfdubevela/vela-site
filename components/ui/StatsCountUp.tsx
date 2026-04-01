'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
}

interface StatsCountUpProps {
  stats: Stat[]
  className?: string
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 1400
    const startTime = performance.now()
    let raf: number

    function update(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(update)
    }

    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function StatsCountUp({ stats, className = '' }: StatsCountUpProps) {
  return (
    <div className={`flex flex-wrap gap-x-8 gap-y-4 ${className}`}>
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col">
          <span className="text-2xl md:text-3xl font-bold text-[#D4A373]">
            <CountUp target={stat.value} suffix={stat.suffix} />
          </span>
          <span className="text-xs text-[rgba(125,183,214,0.8)] tracking-wide mt-0.5">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
