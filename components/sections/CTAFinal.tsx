'use client'

import Image from 'next/image'
import { useState, useTransition } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'
import { submitContact } from '@/app/actions/contact'

const inputClass = "w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.12] text-[#F5F5F0] text-sm placeholder:text-[rgba(245,245,240,0.3)] focus:outline-none focus:border-[#7DB7D6]/50 transition-colors"

export default function CTAFinal() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await submitContact(formData)
      if (result.success) {
        setSent(true)
      } else {
        setError(result.error ?? 'Une erreur est survenue.')
      }
    })
  }

  return (
    <section
      id="contact"
      className="relative bg-[#0A2E4D] py-36 md:py-48 overflow-hidden rounded-t-3xl"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/13.png"
          alt=""
          fill
          quality={80}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E4D]/60 via-transparent to-[#0A2E4D]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E4D]/60 via-transparent to-[#0A2E4D]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7DB7D6]/20 bg-[#7DB7D6]/08 text-[#7DB7D6] text-xs font-medium tracking-wide self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7DB7D6] animate-[pulse-dot_2s_ease-in-out_infinite]" />
                Commencez par le diagnostic
              </span>
            </ScrollReveal>

            <motion.h2
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.1 }}
              className="text-[clamp(2.8rem,5.5vw,5rem)] font-black tracking-normal leading-[0.92] text-[#F7F3EB]"
            >
              L&apos;intelligence artificielle est là.
              <br />
              <span className="text-[rgba(247,243,235,0.4)]">Et vous?</span>
            </motion.h2>

            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-[rgba(245,245,240,0.55)] max-w-[44ch] leading-relaxed">
                Une question sur l&apos;I.A., un projet à explorer, ou juste l&apos;envie de comprendre ce qui est possible pour votre entreprise. On est là pour ça.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-xl md:text-2xl italic text-[#D4A373] font-medium">
                &ldquo;Aucun projet trop petit. Aucune question trop basique.&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-xs text-[rgba(245,245,240,0.25)] font-mono tracking-wide">
                Prix fixe · Aucune surprise · Vous gardez tous vos accès
              </p>
            </ScrollReveal>
          </div>

          {/* Right — form */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-[2rem] glass p-8 md:p-10 flex flex-col gap-6">
              {sent ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircle size={48} weight="fill" className="text-[#D4A373]" />
                  <p className="text-lg font-semibold text-[#F5F5F0]">Message envoyé !</p>
                  <p className="text-sm text-[rgba(245,245,240,0.5)]">On vous répond dans les 2 jours ouvrables.</p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-semibold text-[#F5F5F0]">Laissez vos coordonnées</p>
                    <p className="text-sm text-[rgba(245,245,240,0.4)]">On vous répond dans les 2 jours ouvrables.</p>
                  </div>

                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Nom + Courriel */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-[rgba(245,245,240,0.5)]">Nom complet</label>
                        <input name="nom" type="text" required placeholder="Marie Tremblay" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-[rgba(245,245,240,0.5)]">Courriel professionnel</label>
                        <input name="courriel" type="email" required placeholder="marie@entreprise.com" className={inputClass} />
                      </div>
                    </div>

                    {/* Type d'entreprise */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[rgba(245,245,240,0.5)]">Type d&apos;entreprise</label>
                      <input name="typeEntreprise" type="text" placeholder="Ex : clinique, agence, commerce en ligne…" className={inputClass} />
                    </div>

                    {/* Taille */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[rgba(245,245,240,0.5)]">Taille de l&apos;entreprise</label>
                      <select name="tailleEntreprise" className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
                        <option value="" disabled className="bg-[#0A2E4D]">Choisir...</option>
                        <option value="1" className="bg-[#0A2E4D]">Solopreneur / 1 personne</option>
                        <option value="2-10" className="bg-[#0A2E4D]">2–10 employés</option>
                        <option value="11-50" className="bg-[#0A2E4D]">11–50 employés</option>
                        <option value="50+" className="bg-[#0A2E4D]">50+ employés</option>
                      </select>
                    </div>

                    {/* Service */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[rgba(245,245,240,0.5)]">Quel service vous intéresse?</label>
                      <select name="service" className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
                        <option value="" disabled className="bg-[#0A2E4D]">Choisir...</option>
                        <option value="incertain" className="bg-[#0A2E4D]">Je ne suis pas certain</option>
                        <option value="automatisations" className="bg-[#0A2E4D]">Automatisations I.A.</option>
                        <option value="formation" className="bg-[#0A2E4D]">Formation</option>
                        <option value="coaching" className="bg-[#0A2E4D]">Coaching I.A.</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[rgba(245,245,240,0.5)]">Message (optionnel)</label>
                      <textarea name="message" rows={3} placeholder="Décrivez brièvement votre situation..." className={`${inputClass} resize-none`} />
                    </div>

                    {error && (
                      <p className="text-xs text-red-400">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#C49060] active:scale-[0.98] disabled:opacity-60 text-[#0A2E4D] font-bold py-4 rounded-full transition-all duration-200 text-sm cursor-pointer mt-1"
                    >
                      {isPending ? 'Envoi en cours…' : 'Envoyer ma demande'}
                      {!isPending && <ArrowRight size={15} weight="bold" />}
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
