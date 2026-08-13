'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from '@phosphor-icons/react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-6 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-base md:text-lg font-semibold text-[#E8E4DA] group-hover:text-[#B3A280] transition-colors duration-200 pr-8">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="shrink-0 text-[#B3A280]"
            >
              {open === i ? (
                <Minus size={20} weight="regular" />
              ) : (
                <Plus size={20} weight="regular" />
              )}
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-[rgba(247,243,235,0.65)] leading-relaxed max-w-[68ch]">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
