'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Lock } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface SkillFormProps {
  nomSkill: string
  formTitle: string
  formSubtitle: string
  submitLabel: string
  successTitle: string
  successMessage: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function SkillForm({
  nomSkill,
  formTitle,
  formSubtitle,
  submitLabel,
  successTitle,
  successMessage,
}: SkillFormProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail]         = useState('')
  const [status, setStatus]       = useState<Status>('idle')
  const [errors, setErrors]       = useState<{ firstName?: string; email?: string }>({})

  function validate() {
    const e: typeof errors = {}
    if (!firstName.trim()) e.firstName = 'Ton prénom est requis.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = 'Un courriel valide est requis.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/skill-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), firstName: firstName.trim(), source: nomSkill }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        ;(window as any).gtag('event', 'skill_lead', { skill: nomSkill })
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="formulaire" className="bg-[#122434] py-24 md:py-32 relative overflow-hidden">
      {/* Fond radial décoratif */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 110%, rgba(179,162,128,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-lg mx-auto text-center">

          <ScrollReveal>
            <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[#B3A280] block mb-4">
              Gratuit · Livraison immediate
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em] leading-tight text-[#F7F3EB] mb-3">
              {formTitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="text-base text-[rgba(247,243,235,0.55)] leading-relaxed mb-10">
              {formSubtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  className="rounded-[14px] border border-[#B3A280]/25 bg-[rgba(179,162,128,0.08)] p-8 text-center"
                  role="status"
                >
                  <div className="w-14 h-14 rounded-full bg-[rgba(179,162,128,0.15)] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} weight="regular" className="text-[#B3A280]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F7F3EB] mb-2">{successTitle}</h3>
                  <p className="text-sm text-[rgba(247,243,235,0.6)] leading-relaxed">{successMessage}</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-4 text-left"
                >
                  {/* Prénom */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="sk-firstName" className="text-xs font-semibold tracking-wide text-[rgba(247,243,235,0.55)]">
                      Prénom
                    </label>
                    <input
                      id="sk-firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => { setFirstName(e.target.value); setErrors((p) => ({ ...p, firstName: undefined })) }}
                      placeholder="Jean-François"
                      autoComplete="given-name"
                      className={`w-full bg-white/[0.05] border rounded-[10px] px-4 py-3 text-[#F7F3EB] placeholder:text-[rgba(247,243,235,0.22)] text-sm outline-none transition-all duration-200 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(179,162,128,0.14)] ${
                        errors.firstName
                          ? 'border-red-400/50 shadow-[0_0_0_2px_rgba(220,80,80,0.1)]'
                          : 'border-[rgba(247,243,235,0.12)] focus:border-[#B3A280]'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-400/90">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Courriel */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="sk-email" className="text-xs font-semibold tracking-wide text-[rgba(247,243,235,0.55)]">
                      Courriel professionnel
                    </label>
                    <input
                      id="sk-email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })) }}
                      placeholder="toi@entreprise.com"
                      autoComplete="email"
                      className={`w-full bg-white/[0.05] border rounded-[10px] px-4 py-3 text-[#F7F3EB] placeholder:text-[rgba(247,243,235,0.22)] text-sm outline-none transition-all duration-200 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(179,162,128,0.14)] ${
                        errors.email
                          ? 'border-red-400/50 shadow-[0_0_0_2px_rgba(220,80,80,0.1)]'
                          : 'border-[rgba(247,243,235,0.12)] focus:border-[#B3A280]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400/90">{errors.email}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#B3A280] hover:bg-[#C6B896] disabled:opacity-60 disabled:cursor-not-allowed text-[#0A2E4D] font-bold text-sm py-3.5 rounded-[10px] transition-colors duration-200 flex items-center justify-center gap-2 mt-1 shadow-[0_8px_32px_-8px_rgba(179,162,128,0.4)] cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0A2E4D]/30 border-t-[#0A2E4D] rounded-full animate-spin" />
                        Envoi...
                      </>
                    ) : (
                      submitLabel
                    )}
                  </button>

                  {/* Erreur globale */}
                  {status === 'error' && (
                    <p className="text-xs text-center text-[rgba(247,243,235,0.65)] bg-red-500/10 border border-red-400/20 rounded-[10px] px-4 py-3">
                      Oups, quelque chose a cloché. Réessaie dans quelques instants.
                    </p>
                  )}

                  {/* Micro-copy */}
                  <p className="flex items-center justify-center gap-1.5 text-xs text-[rgba(247,243,235,0.32)] mt-1">
                    <Lock size={12} className="opacity-60" />
                    Aucun spam. Un courriel de livraison, c&apos;est tout.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
