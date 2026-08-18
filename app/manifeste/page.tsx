'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { CALENDRIER_URL } from '@/components/ui/calendrier'
import { Sparkle, Prohibit, ShieldCheck, Toolbox, ArrowsClockwise, ArrowRight } from '@phosphor-icons/react'

type Bloc = {
  icone: React.ElementType
  titre: string
  items?: string[]
  texte?: string
  large?: boolean
}

const blocs: Bloc[] = [
  {
    icone: Sparkle,
    titre: "Où l'I.A. intervient chez nous",
    items: [
      'Rédaction de premiers jets : propositions, diagnostics, contenu (LinkedIn, infolettre, site)',
      'Structuration de livrables et de documentation',
      'Recherche et vulgarisation de concepts techniques',
      'Support à la conception de scénarios Make et n8n, jamais l’exécution finale sans test humain',
    ],
  },
  {
    icone: Prohibit,
    titre: "Ce qu'on ne fait jamais avec l'I.A.",
    items: [
      'Coller vos coordonnées, votre chiffre d’affaires ou vos données de processus dans un outil d’I.A. sans les avoir d’abord dépersonnalisés',
      'Coller une clé API, un mot de passe ou un jeton d’accès dans un outil d’I.A., peu importe le contexte',
      'Livrer une automatisation qui n’a pas été testée par un humain, en conditions réelles, avant votre premier lancement',
      'Présenter un contenu généré comme final sans relecture',
      'Prendre une décision finale sur un dossier client (prix, refus, litige) avec l’I.A. seule',
    ],
  },
  {
    icone: ShieldCheck,
    titre: 'Vos données, spécifiquement',
    texte:
      'Vos renseignements ne servent jamais à entraîner un modèle d’I.A. Quand un outil le permet, on désactive cette option par défaut. Quand ce n’est pas possible, on ne met tout simplement pas vos données dedans.',
  },
  {
    icone: Toolbox,
    titre: "Les outils qu'on utilise",
    texte:
      'Claude, ChatGPT et Gemini pour la rédaction et la recherche. Make et n8n pour construire vos automatisations. On privilégie des comptes professionnels payants, précisément parce qu’ils offrent de meilleures garanties sur le traitement des données.',
  },
  {
    icone: ArrowsClockwise,
    titre: 'Notre engagement',
    texte:
      'Cette page évolue avec nos outils et nos usages. On la révise au moins une fois par année, et chaque fois qu’un changement important le justifie.',
    large: true,
  },
]

export default function ManifestePage() {
  return (
    <>
      <Nav lightTop lightUntil="#lettre" showAnchorLinks={false} />

      <main>
        {/* ─────────────────────────────────────────────
            La lettre
           ───────────────────────────────────────────── */}
        <section id="lettre" className="relative bg-[#F7F3EB] overflow-hidden pt-20">
          {/* Lueurs discrètes */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[820px] h-[520px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(201,169,97,0.16) 0%, transparent 68%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[520px] h-[380px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(125,183,214,0.10) 0%, transparent 65%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[720px] mx-auto px-6 md:px-10 py-20 md:py-28">

            {/* En-tête de la lettre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="text-center flex flex-col items-center gap-5"
            >
              <span className="font-mono text-[0.75rem] tracking-[0.16em] uppercase text-[rgba(10,46,77,0.45)]">
                Manifeste
              </span>
              <h1 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.06] tracking-[-0.025em] text-[#0A2E4D]">
                Ce qu’on pense de l’I.A.
              </h1>
              <div className="w-16 h-px bg-[rgba(10,46,77,0.20)]" />
            </motion.div>

            {/* Corps de la lettre */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.12 }}
              className="mt-14 flex flex-col gap-6 text-[1.0625rem] md:text-[1.125rem] leading-[1.75] text-[rgba(10,46,77,0.82)]"
            >
              <p className="text-[1.1875rem] md:text-[1.3125rem] leading-[1.6] text-[#0A2E4D] font-medium">
                Vous avez raison de vous méfier de l’I.A. Moi aussi, une partie du temps.
              </p>

              <p>
                Quand j’ai fondé VELA, c’est parti d’un amour sincère pour la technologie et d’une
                vraie fascination pour l’intelligence artificielle. Mais j’ai toujours gardé la tête
                froide devant un outil aussi puissant, et j’ai pris une décision très tôt : peu
                importe où ça mènerait, ça resterait aligné sur mes valeurs.
              </p>

              <p>
                Ma valeur la plus importante, c’est l’humain. Les gens, les vraies relations, les
                rapports authentiques. En lançant VELA, je me suis fait une promesse : jamais cette
                technologie n’allait s’interposer entre moi et ce en quoi je crois vraiment.
              </p>

              <p>
                On vous a vendu la révolution. Le remplacement total. La machine qui pense mieux que
                vous. La plupart du temps, c’est du vent, empaqueté pour lever du financement ou
                vendre un logiciel de plus. Chez VELA, on n’a jamais embarqué là-dedans. Ce qu’on
                croit vraiment, on va vous le dire simplement.
              </p>

              <h2 className="font-display text-[1.5rem] leading-[1.2] text-[#0A2E4D] mt-8 text-center">
                Ce qu’on pense
              </h2>

              <p>
                L’I.A., ce n’est pas de la magie. C’est un outil. Un bon outil, souvent. Un outil
                surestimé, parfois. Mais un outil, comme un tournevis en est un : il ne décide rien
                tout seul, et entre de mauvaises mains, il fait des dégâts.
              </p>

              <p>
                On l’utilise pour une seule raison : elle fait gagner du temps réel à des PME qui en
                manquent. Pas pour disrupter votre industrie. Pas pour remplacer vos employés pendant
                que vous dormez. Pour vous redonner des heures que vous passiez en saisie, en suivi,
                en facturation répétitive, afin de les remettre là où un humain fait vraiment la
                différence : avec vos clients, avec votre équipe, dans les décisions qui comptent.
              </p>

              <h2 className="font-display text-[1.5rem] leading-[1.2] text-[#0A2E4D] mt-8 text-center">
                Ce qu’on ne fera jamais
              </h2>

              <p>
                On n’automatise jamais une décision qui touche une personne (embauche, congédiement,
                refus de service) sans qu’un humain la valide.
              </p>

              <p>
                On ne vous vend jamais une automatisation qu’on n’a pas testée nous-mêmes en
                conditions réelles.
              </p>

              <p>
                On ne touche jamais à vos données pour « voir ce que ça donne ». Vos clients, vos
                chiffres, vos processus restent à vous, toujours.
              </p>

              <p>
                On ne prétend jamais qu’un système automatisé est un humain. Si l’un de vos clients
                parle à une machine, il le sait dès le premier échange.
              </p>

              <p>
                On ne vous automatise pas parce que c’est possible. On mesure avant d’automatiser. Si
                le retour n’est pas là, on vous le dit, même si ça veut dire vous facturer moins.
              </p>

              <h2 className="font-display text-[1.5rem] leading-[1.2] text-[#0A2E4D] mt-8 text-center">
                Ce qu’on pense de votre méfiance
              </h2>

              <p>
                Elle est saine. Une PME échaudée par un logiciel trop compliqué, un vendeur trop
                pressé ou une promesse d’I.A. qui n’a jamais livré : c’est notre client typique. On
                ne vous demande pas de nous croire sur parole. On vous demande de nous mettre à
                l’épreuve sur un seul processus, mesurable, avec un chiffre à la fin.
              </p>

              <h2 className="font-display text-[1.5rem] leading-[1.2] text-[#0A2E4D] mt-8 text-center">
                Notre position, en une phrase
              </h2>

              <p className="note-sable px-6 py-5 text-[#0A2E4D] text-[1.125rem] leading-[1.6]">
                L’I.A. n’est pas là pour remplacer votre jugement. Elle est là pour vous redonner le
                temps de l’exercer.
              </p>

              <p>
                C’est ce qu’on construit, une automatisation à la fois, avec vous comme capitaine.
              </p>

              <p>
                Vous voulez savoir concrètement comment on utilise l’I.A. dans nos propres
                opérations ?{' '}
                <a
                  href="#transparence"
                  className="text-[#0A2E4D] underline decoration-[#C9A961] decoration-2 underline-offset-4 hover:text-[#C9A961] transition-colors"
                >
                  Consultez notre transparence I.A.
                </a>
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
              className="mt-14 flex flex-col items-center gap-1"
            >
              <Image
                src="/images/signature-jfd.png"
                alt="Signature de Jean-François Dubé"
                width={1280}
                height={400}
                className="w-[260px] md:w-[300px] h-auto mix-blend-multiply"
              />
              <p className="font-display text-[1.0625rem] text-[#0A2E4D]">Jean-François Dubé</p>
              <p className="font-mono text-[0.75rem] tracking-[0.16em] uppercase text-[rgba(10,46,77,0.45)]">
                Fondateur, VELA
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            Transparence I.A.
           ───────────────────────────────────────────── */}
        <section id="transparence" className="relative bg-[#122434] overflow-hidden scroll-mt-24">
          <div className="texture-overlay" aria-hidden="true" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(125,183,214,0.10) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">

            {/* Titre */}
            <ScrollReveal className="flex flex-col items-center text-center gap-5 max-w-[720px] mx-auto">
              <span className="font-mono text-[0.75rem] tracking-[0.16em] uppercase text-[#C9A961]">
                Transparence I.A.
              </span>
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.25rem)] leading-[1.1] tracking-[-0.02em] text-[#F7F3EB]">
                Comment on utilise l’I.A., concrètement, chez VELA
              </h2>
              <p className="text-[1.0625rem] leading-[1.65] text-[rgba(247,243,235,0.70)]">
                On vous demande de nous faire confiance pour automatiser vos processus avec l’I.A. Le
                moins qu’on puisse faire, c’est vous dire comment on l’utilise nous-mêmes.
              </p>
            </ScrollReveal>

            {/* Carrés de verre */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
              {blocs.map((bloc, i) => {
                const Icone = bloc.icone
                return (
                  <ScrollReveal
                    key={bloc.titre}
                    delay={i * 0.06}
                    className={bloc.large ? 'md:col-span-2' : ''}
                  >
                    <SpotlightCard className="glass rounded-[14px] p-7 md:p-8 h-full flex flex-col gap-5">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-[10px] bg-[rgba(201,169,97,0.12)] border border-[rgba(201,169,97,0.28)] flex items-center justify-center shrink-0">
                          <Icone size={18} weight="regular" className="text-[#C9A961]" />
                        </span>
                        <h3 className="font-display text-[1.1875rem] leading-[1.25] text-[#F7F3EB]">
                          {bloc.titre}
                        </h3>
                      </div>

                      {bloc.texte && (
                        <p className="text-[0.9375rem] leading-[1.7] text-[rgba(247,243,235,0.70)]">
                          {bloc.texte}
                        </p>
                      )}

                      {bloc.items && (
                        <ul className="flex flex-col gap-3">
                          {bloc.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[0.9375rem] leading-[1.6] text-[rgba(247,243,235,0.70)]"
                            >
                              <span
                                className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-[#7DB7D6] shrink-0"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </SpotlightCard>
                  </ScrollReveal>
                )
              })}
            </div>

            {/* Fermeture */}
            <ScrollReveal delay={0.1} className="mt-16 flex flex-col items-center text-center gap-6">
              <p className="text-[1.0625rem] leading-[1.65] text-[rgba(247,243,235,0.70)] max-w-[560px]">
                Vous avez une question sur comment on traite vos données ? Écrivez-nous, on répond
                directement, pas par un robot.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={CALENDRIER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A961] hover:bg-[#D9BC7E] text-[#0A2E4D] font-semibold text-sm px-6 py-3 rounded-[10px] transition-colors lueur-sable"
                >
                  Réserver un appel
                  <ArrowRight size={16} weight="regular" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-[rgba(247,243,235,0.20)] text-[rgba(247,243,235,0.75)] hover:text-[#E8E4DA] hover:border-[rgba(247,243,235,0.35)] font-medium text-sm px-6 py-3 rounded-[10px] transition-colors"
                >
                  Voir nos services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
