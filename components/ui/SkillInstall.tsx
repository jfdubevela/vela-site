'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from '@phosphor-icons/react'
import type { InstallStep } from '@/components/sections/SkillExplication'

interface SkillInstallProps {
  claudeSteps: InstallStep[]
  gptSteps: InstallStep[]
}

function PlatformBox({
  platform,
  steps,
  logo,
}: {
  platform: string
  steps: InstallStep[]
  logo: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-7 py-5 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-white/[0.07] flex items-center justify-center shrink-0">
            {logo}
          </div>
          <span className="text-base font-semibold text-[#F5F5F0] group-hover:text-[#D4A373] transition-colors duration-200">
            Installer dans {platform}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="shrink-0 text-[#D4A373]"
        >
          {open ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 border-t border-white/[0.06]">
              <ol className="flex flex-col gap-4 mt-6">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[rgba(212,163,115,0.15)] border border-[#D4A373]/30 text-[#D4A373] text-xs font-bold font-mono flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-[#F5F5F0] leading-snug">
                        {step.label}
                      </span>
                      {step.detail && (
                        <span className="text-xs text-[rgba(245,245,240,0.45)] leading-relaxed">
                          {step.detail}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Logo Claude SVG
function ClaudeLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Claude">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="rgba(245,245,240,0.75)"/>
    </svg>
  )
}

// Logo ChatGPT SVG
function GPTLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="ChatGPT">
      <path d="M22.28 9.28a5.76 5.76 0 0 0-.49-4.72 5.83 5.83 0 0 0-6.27-2.8A5.77 5.77 0 0 0 11.2 0a5.83 5.83 0 0 0-5.56 4.04 5.77 5.77 0 0 0-3.84 2.8 5.83 5.83 0 0 0 .72 6.83 5.76 5.76 0 0 0 .49 4.72 5.83 5.83 0 0 0 6.27 2.8A5.77 5.77 0 0 0 12.8 24a5.83 5.83 0 0 0 5.56-4.05 5.77 5.77 0 0 0 3.84-2.79 5.83 5.83 0 0 0-.72-6.88zm-8.68 12.16a4.32 4.32 0 0 1-2.77-1 .24.24 0 0 1 .05-.04l4.6-2.66a.38.38 0 0 0 .19-.33v-6.5l1.95 1.12a.04.04 0 0 1 .02.03v5.38a4.34 4.34 0 0 1-4.04 4zm-9.24-3.98a4.32 4.32 0 0 1-.52-2.9.22.22 0 0 1 .06.03l4.6 2.66a.38.38 0 0 0 .38 0l5.62-3.25v2.25a.04.04 0 0 1-.02.03L10 18.6a4.34 4.34 0 0 1-5.64-1.14zM3.4 8.17a4.32 4.32 0 0 1 2.25-1.9v5.46a.38.38 0 0 0 .19.33l5.62 3.24-1.95 1.13a.04.04 0 0 1-.03 0L5.12 14a4.34 4.34 0 0 1-1.72-5.83zm16.04 3.73-5.62-3.25 1.95-1.12a.04.04 0 0 1 .03 0l4.36 2.52a4.32 4.32 0 0 1-.67 7.8V12.3a.38.38 0 0 0-.05-.4zm1.94-2.92a.22.22 0 0 1-.06-.03l-4.6-2.66a.38.38 0 0 0-.38 0L10.72 9.5V7.25a.04.04 0 0 1 .02-.03L15.1 4.7a4.34 4.34 0 0 1 6.28 4.28zM9.74 12.9 7.8 11.78a.04.04 0 0 1-.02-.03V6.37a4.34 4.34 0 0 1 7.11-3.33.24.24 0 0 1-.05.04l-4.6 2.66a.38.38 0 0 0-.19.33l-.31 6.83zm1.06-2.28 2.5-1.44 2.5 1.44v2.88l-2.5 1.44-2.5-1.44V10.62z" fill="rgba(245,245,240,0.75)"/>
    </svg>
  )
}

export default function SkillInstall({ claudeSteps, gptSteps }: SkillInstallProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
      <PlatformBox platform="Claude" steps={claudeSteps} logo={<ClaudeLogo />} />
      <PlatformBox platform="ChatGPT" steps={gptSteps} logo={<GPTLogo />} />
    </div>
  )
}
