'use client'

import { useState, useTransition } from 'react'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from '@phosphor-icons/react'
import { submitSondagePGA } from '@/app/actions/contact'

const freqOptions = [
  'Jamais',
  "J'ai essayé une ou deux fois",
  'Quelques fois par mois',
  'Chaque semaine',
  'Chaque jour',
]

const toolOptions = ['ChatGPT', 'Claude', 'Microsoft Copilot', 'Gemini', 'Un autre', 'Aucun']

const worryOptions = [
  'La confidentialité des données clients',
  'La fiabilité et les erreurs',
  'Ma responsabilité professionnelle',
  "Le temps d'apprentissage",
  "Je n'en ai pas particulièrement",
  'Autre',
]

export default function SondagePGAExpertsPage() {
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState('')
  const [isPending, startTransition] = useTransition()
  const [tools, setTools] = useState<string[]>([])
  const [score, setScore] = useState<number | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError('')
    const form = e.currentTarget
    const data = new FormData(form)
    tools.forEach((t) => data.append('q2', t))
    if (score !== null) data.set('q5', String(score))

    startTransition(async () => {
      const result = await submitSondagePGA(data)
      if (result.success) {
        setSent(true)
      } else {
        setFormError(result.error ?? "Erreur lors de l'envoi.")
      }
    })
  }

  function toggleTool(tool: string) {
    setTools((prev) => (prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]))
  }

  return (
    <main className="min-h-dvh bg-[#122434] flex items-start md:items-center justify-center px-5 py-14 md:py-20">
      <div className="w-full max-w-[640px]">
        <div className="flex flex-col gap-4 mb-10">
          <Image src="/logo.svg" alt="VELA" width={110} height={38} className="h-9 w-auto self-start" />
          <span className="font-mono text-[0.75rem] uppercase tracking-[0.16em] font-medium text-[#7DB7D6]">
            PGA Experts inc. · Avant la formation
          </span>
          <h1
            className="font-medium tracking-[-0.02em] leading-[1.05] text-[#F7F3EB]"
            style={{ fontSize: 'clamp(1.9rem, 4.2vw, 2.75rem)' }}
          >
            Sondage de calibrage
          </h1>
          <p className="text-[rgba(247,243,235,0.55)] leading-[1.65] max-w-[52ch]">
            Six questions, deux minutes. Pour ajuster la formation « Utiliser l&apos;I.A. de manière stratégique et
            sécuritaire » à votre réalité. Réponses anonymes.
          </p>
        </div>

        <div className="rounded-[14px] glass p-7 md:p-10">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle size={48} weight="regular" className="text-[#C9A961]" />
              <p className="text-lg font-semibold text-[#E8E4DA]">Merci !</p>
              <p className="text-sm text-[rgba(247,243,235,0.5)] max-w-[36ch]">
                Vos réponses sont lues avant la séance et servent uniquement à préparer le contenu.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-9" onSubmit={handleSubmit}>
              {/* Q1 */}
              <fieldset className="flex flex-col gap-3">
                <legend className="text-[0.9375rem] font-semibold text-[#F7F3EB] mb-1">
                  1. À quelle fréquence utilisez-vous un outil d&apos;I.A. dans votre travail ?
                </legend>
                <div className="flex flex-col gap-2">
                  {freqOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 px-4 py-3 rounded-[10px] bg-[rgba(247,243,235,0.04)] border border-[rgba(247,243,235,0.14)] text-[0.875rem] text-[rgba(247,243,235,0.8)] cursor-pointer has-[:checked]:border-[#7DB7D6] has-[:checked]:bg-[rgba(125,183,214,0.08)] transition-colors duration-150"
                    >
                      <input type="radio" name="q1" value={opt} required className="accent-[#7DB7D6]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Q2 */}
              <fieldset className="flex flex-col gap-3">
                <legend className="text-[0.9375rem] font-semibold text-[#F7F3EB] mb-1">
                  2. Quels outils avez-vous déjà utilisés ? (plusieurs réponses possibles)
                </legend>
                <div className="grid grid-cols-2 gap-2">
                  {toolOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 px-4 py-3 rounded-[10px] bg-[rgba(247,243,235,0.04)] border border-[rgba(247,243,235,0.14)] text-[0.875rem] text-[rgba(247,243,235,0.8)] cursor-pointer has-[:checked]:border-[#7DB7D6] has-[:checked]:bg-[rgba(125,183,214,0.08)] transition-colors duration-150"
                    >
                      <input
                        type="checkbox"
                        checked={tools.includes(opt)}
                        onChange={() => toggleTool(opt)}
                        className="accent-[#7DB7D6]"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Q3 */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.9375rem] font-semibold text-[#F7F3EB]">
                  3. Quelle tâche de votre semaine aimeriez-vous faire plus vite ?
                </label>
                <textarea
                  name="q3"
                  rows={3}
                  placeholder="Décrivez brièvement..."
                  className="w-full px-4 py-3.5 rounded-[10px] bg-[rgba(247,243,235,0.04)] border border-[rgba(247,243,235,0.2)] text-[#F7F3EB] text-[0.9375rem] placeholder:text-[rgba(247,243,235,0.3)] focus:outline-none focus:border-[#7DB7D6] focus:bg-[rgba(125,183,214,0.08)] transition-colors duration-[140ms] resize-none"
                />
              </div>

              {/* Q4 */}
              <fieldset className="flex flex-col gap-3">
                <legend className="text-[0.9375rem] font-semibold text-[#F7F3EB] mb-1">
                  4. Quelle est votre principale inquiétude par rapport à l&apos;I.A. au travail ?
                </legend>
                <div className="flex flex-col gap-2">
                  {worryOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 px-4 py-3 rounded-[10px] bg-[rgba(247,243,235,0.04)] border border-[rgba(247,243,235,0.14)] text-[0.875rem] text-[rgba(247,243,235,0.8)] cursor-pointer has-[:checked]:border-[#7DB7D6] has-[:checked]:bg-[rgba(125,183,214,0.08)] transition-colors duration-150"
                    >
                      <input type="radio" name="q4" value={opt} required className="accent-[#7DB7D6]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Q5 */}
              <div className="flex flex-col gap-3">
                <label className="text-[0.9375rem] font-semibold text-[#F7F3EB]">
                  5. Sur 10, à quel point êtes-vous à l&apos;aise avec ces outils aujourd&apos;hui ?
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <button
                      type="button"
                      key={n}
                      onClick={() => setScore(n)}
                      className={`h-11 rounded-[10px] border text-sm font-mono transition-colors duration-150 cursor-pointer ${
                        score === n
                          ? 'bg-[#C9A961] border-[#C9A961] text-[#0A2E4D] font-bold'
                          : 'bg-[rgba(247,243,235,0.04)] border-[rgba(247,243,235,0.14)] text-[rgba(247,243,235,0.7)] hover:border-[rgba(125,183,214,0.5)]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[0.6875rem] text-[rgba(247,243,235,0.35)] font-mono">
                  <span>1 = jamais touché</span>
                  <span>10 = je m&apos;en sers tous les jours</span>
                </div>
              </div>

              {/* Q6 */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.9375rem] font-semibold text-[#F7F3EB]">
                  6. Y a-t-il une question précise à laquelle vous aimeriez une réponse pendant la formation ?
                </label>
                <textarea
                  name="q6"
                  rows={3}
                  placeholder="Optionnel"
                  className="w-full px-4 py-3.5 rounded-[10px] bg-[rgba(247,243,235,0.04)] border border-[rgba(247,243,235,0.2)] text-[#F7F3EB] text-[0.9375rem] placeholder:text-[rgba(247,243,235,0.3)] focus:outline-none focus:border-[#7DB7D6] focus:bg-[rgba(125,183,214,0.08)] transition-colors duration-[140ms] resize-none"
                />
              </div>

              {formError && <p className="text-xs text-red-400">{formError}</p>}

              <button
                type="submit"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#D9BC7E] active:scale-[0.98] disabled:opacity-60 text-[#0A2E4D] font-bold py-4 rounded-[10px] transition-all duration-200 text-sm cursor-pointer mt-1"
              >
                {isPending ? 'Envoi en cours…' : 'Envoyer mes réponses'}
                {!isPending && <ArrowRight size={14} weight="regular" />}
              </button>

              <p className="text-[0.6875rem] text-[rgba(247,243,235,0.22)] text-center font-mono">
                Réponses anonymes. Lues avant la séance pour préparer le contenu.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
