import { Handshake, Key, Tag, Heart } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '../ui/ScrollReveal'

const affirmations = [
  {
    icon: Handshake,
    title: 'On reste après la formation.',
    desc: "On enseigne, on accompagne, puis on systématise ce qui fonctionne. Pas juste une conférence et bonne chance.",
  },
  {
    icon: Key,
    title: 'Vous gardez tout.',
    desc: 'Comptes, accès, scénarios, clés : rien ne nous appartient. Vous gardez le contrôle du début à la fin.',
  },
  {
    icon: Tag,
    title: "Prix fixe, jamais à l'heure.",
    desc: 'On chiffre la valeur avant de commencer, pas après. Aucune surprise sur la facture.',
  },
  {
    icon: Heart,
    title: 'Aucun projet trop petit. Aucune question trop basique.',
    desc: "On a bâti VELA pour les PME qu'on oublie ailleurs, pas pour les comptes de 500 employés.",
  },
]

export default function PourquoiVela() {
  return (
    <section id="pourquoi-vela" className="relative bg-[#F7F3EB] py-28 md:py-36 rounded-t-[18px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20">

        <ScrollReveal>
          <span className="block font-mono text-[0.75rem] uppercase tracking-[0.16em] font-medium text-[rgba(10,46,77,0.45)] mb-4">
            Ce qui nous différencie
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="text-display-md font-medium tracking-[-0.02em] leading-[1] text-[#0A2E4D] mb-14 max-w-[22ch]">
            Ni une agence de démos, ni un formateur qui repart.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {affirmations.map((a, i) => (
            <ScrollReveal key={a.title} delay={0.08 * (i % 4 + 2)}>
              <div className="bg-white border border-[rgba(10,46,77,0.08)] rounded-[18px] p-7 flex flex-col gap-3.5 h-full shadow-[0_4px_20px_-8px_rgba(10,46,77,0.07)] transition-all duration-200 hover:border-[rgba(201,169,97,0.38)] hover:shadow-[0_10px_36px_-8px_rgba(201,169,97,0.14)] hover:-translate-y-0.5">
                <div className="w-11 h-11 rounded-full bg-[rgba(10,46,77,0.06)] flex items-center justify-center text-[#0A2E4D]">
                  <a.icon size={20} weight="regular" />
                </div>
                <h3 className="text-base font-bold text-[#122434] leading-[1.3]">{a.title}</h3>
                <p className="text-[0.8125rem] text-[rgba(26,26,26,0.52)] leading-[1.65]">{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
