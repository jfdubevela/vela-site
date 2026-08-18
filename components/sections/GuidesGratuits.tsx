import Link from 'next/link'
import { FilePdf, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '../ui/ScrollReveal'

const guides = [
  {
    href: '/outils/guides/quel-modele-ia-choisir',
    title: "Quel modèle d'I.A. choisir ?",
    format: 'PDF · 2 pages',
  },
  {
    href: '/outils/guides/claude-chatgpt-gemini-pme',
    title: 'Claude, ChatGPT ou Gemini : quel outil choisir ?',
    format: 'Article · 5 min',
  },
]

export default function GuidesGratuits() {
  return (
    <section id="guides" className="relative bg-[#0A2E4D] py-28 md:py-36 rounded-t-[18px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20">

        <ScrollReveal>
          <span className="block font-mono text-[0.75rem] uppercase tracking-[0.16em] font-medium text-[#7DB7D6] mb-4">
            Pas encore prêt à réserver un appel ?
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="text-display-md font-medium tracking-[-0.02em] leading-[1] text-[#F7F3EB] mb-3 max-w-[20ch]">
            Commencez par nos guides gratuits.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="text-[rgba(247,243,235,0.55)] leading-[1.65] max-w-[52ch] mb-14">
            Des ressources concrètes pour utiliser l&apos;I.A. dès aujourd&apos;hui. Gratuites, sans formulaire, sans engagement.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {guides.map((g, i) => (
            <ScrollReveal key={g.href} delay={0.08 * (i + 2)}>
              <Link href={g.href} className="block h-full group">
                <div className="glass rounded-[14px] p-8 flex flex-col gap-4 h-full transition-colors duration-300 group-hover:border-[rgba(201,169,97,0.4)]">
                  <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-mono uppercase tracking-[0.16em] text-[rgba(247,243,235,0.5)] px-2.5 py-1 rounded-full bg-white/[0.05] border border-[rgba(247,243,235,0.12)]">
                    <FilePdf size={11} />
                    {g.format}
                  </span>
                  <h3 className="text-lg font-bold text-[#F7F3EB] leading-[1.3] flex-1">{g.title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A961] group-hover:text-[#F7F3EB] transition-colors">
                    Voir le guide
                    <ArrowRight size={14} weight="regular" className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <Link
            href="/outils/guides"
            className="inline-flex items-center gap-2 text-[#7DB7D6] hover:text-[#E8E4DA] font-semibold text-sm transition-colors duration-200 group"
          >
            Voir tous les guides
            <ArrowRight size={13} weight="regular" className="transition-transform group-hover:translate-x-1 duration-200" />
          </Link>
        </ScrollReveal>

      </div>
    </section>
  )
}
