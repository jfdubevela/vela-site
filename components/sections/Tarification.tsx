'use client'

import { Check, ArrowRight } from '@phosphor-icons/react'
import ScrollReveal from '../ui/ScrollReveal'

const diagnosticTiers = [
  {
    name: 'Essentiel',
    price: '2 900$ – 3 900$',
    desc: 'Pour explorer et valider rapidement.',
    features: [
      'Cartographie des processus',
      'Liste de 3–5 automations prioritaires',
      'Estimation ROI (heures → $)',
      'Architecture Make recommandée',
      'Prototype démontrable',
    ],
    highlight: false,
    cta: 'Réserver mon diagnostic',
  },
  {
    name: 'Standard',
    price: '4 900$ – 6 900$',
    desc: 'Pour une PME avec plusieurs flux à optimiser.',
    features: [
      'Tout ce qui est dans Essentiel',
      'Analyse approfondie CRM / marketing',
      'Cartographie multi-équipe',
      'Priorisation ROI sur 10+ automations',
      'Plan de déploiement sur 3 mois',
    ],
    highlight: true,
    tag: 'Le plus choisi',
    cta: 'Réserver mon diagnostic',
  },
  {
    name: 'Croissance',
    price: '7 900$ – 10 900$',
    desc: 'Pour opérations multi-services ou équipe technique.',
    features: [
      'Tout ce qui est dans Standard',
      'Audit stack technique complet',
      'Architecture multi-outils avancée',
      'Roadmap automation 6–12 mois',
      'Accompagnement stratégique inclus',
    ],
    highlight: false,
    cta: 'Réserver mon diagnostic',
  },
]

const maintenanceTiers = [
  { name: 'Veille', price: '290–490$/mois', desc: 'Surveillance et alertes' },
  { name: 'Pilotage', price: '690–1 290$/mois', desc: 'Optimisation continue' },
  { name: 'Croissance', price: '1 490–2 490$/mois', desc: 'Évolution & nouvelles automations' },
]

const implantationTiers = [
  { size: 'S', label: 'Simple', price: '750–1 250$', desc: '1 flux, 1 outil' },
  { size: 'M', label: 'Standard', price: '1 500–3 250$', desc: '2–3 flux, intégrations' },
  { size: 'L', label: 'Avancé', price: '3 500–7 500$', desc: 'Multi-outils, logique complexe' },
]

export default function Tarification() {
  return (
    <section id="tarification" className="bg-[#F5F5F0] py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/40 mb-4">
              Tarification
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-normal leading-[0.95] text-[#0A2E4D]">
              Des prix fixes.
              <br />
              <span className="text-[#0A2E4D]/35">Basés sur la valeur, pas sur les heures.</span>
            </h2>
            <p className="mt-5 text-sm text-[#0A2E4D]/50 max-w-[55ch] leading-relaxed">
              Les licences des outils (Make, Mailchimp, etc.) sont payées directement
              par vous. Vous gardez tous vos accès, toujours.
            </p>
          </div>
        </ScrollReveal>

        {/* Diagnostic tiers */}
        <ScrollReveal delay={0.05}>
          <p className="text-xs uppercase tracking-[0.2em] text-[#0A2E4D]/40 mb-6 font-mono">
            01. Diagnostic (obligatoire)
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {diagnosticTiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative flex flex-col h-full rounded-[1.75rem] p-8 border transition-shadow duration-300 ${
                  tier.highlight
                    ? 'bg-[#0A2E4D] border-[#D4A373]/60 shadow-[0_20px_60px_-12px_rgba(212,163,115,0.18)] md:-mt-3'
                    : 'bg-white border-[#0A2E4D]/10 hover:shadow-[0_8px_40px_-8px_rgba(10,46,77,0.1)]'
                }`}
              >
                {tier.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-3 py-1 rounded-full bg-[#D4A373] text-[#0A2E4D] font-bold uppercase tracking-wide whitespace-nowrap">
                    {tier.tag}
                  </span>
                )}
                <div className="flex flex-col gap-1 mb-6">
                  <p
                    className={`text-xs font-medium uppercase tracking-widest ${
                      tier.highlight ? 'text-[#7DB7D6]' : 'text-[#0A2E4D]/40'
                    }`}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={`text-2xl font-black font-mono tracking-tight ${
                      tier.highlight ? 'text-[#D4A373]' : 'text-[#0A2E4D]'
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      tier.highlight ? 'text-[rgba(245,245,240,0.5)]' : 'text-[#0A2E4D]/45'
                    }`}
                  >
                    {tier.desc}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        weight="bold"
                        className={`mt-0.5 shrink-0 ${
                          tier.highlight ? 'text-[#D4A373]' : 'text-[#0A2E4D]/50'
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          tier.highlight ? 'text-[rgba(245,245,240,0.7)]' : 'text-[#0A2E4D]/60'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all duration-200 group cursor-pointer ${
                    tier.highlight
                      ? 'bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D]'
                      : 'bg-[#0A2E4D] hover:bg-[#0D3760] text-[#F5F5F0]'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Implantation grid */}
        <ScrollReveal delay={0.05}>
          <p className="text-xs uppercase tracking-[0.2em] text-[#0A2E4D]/40 mb-5 font-mono">
            02. Implantation (par automation)
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-3 gap-3 mb-14">
          {implantationTiers.map((t, i) => (
            <ScrollReveal key={t.size} delay={i * 0.06}>
              <div className="rounded-[1.25rem] bg-[#0A2E4D]/[0.04] border border-[#0A2E4D]/10 p-5 flex flex-col gap-2 hover:bg-[#0A2E4D]/[0.07] transition-colors">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-lg font-black text-[#0A2E4D]">{t.size}</span>
                  <span className="text-xs text-[#0A2E4D]/50">{t.label}</span>
                </div>
                <p className="font-mono text-sm font-bold text-[#0A2E4D]">{t.price}</p>
                <p className="text-xs text-[#0A2E4D]/45">{t.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Agents IA & cas complexes */}
        <ScrollReveal delay={0.05}>
          <p className="text-xs uppercase tracking-[0.2em] text-[#0A2E4D]/40 mb-5 font-mono">
            03. Agents IA &amp; cas complexes
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="rounded-[1.75rem] bg-[#0A2E4D] p-8 md:p-10 mb-14">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-[#F5F5F0] mb-3 leading-tight">
                  Certains projets dépassent<br />l&apos;automatisation standard.
                </h3>
                <p className="text-sm text-[rgba(245,245,240,0.5)] leading-relaxed mb-6">
                  Agents IA multi-étapes, traitement de documents non structurés, logique conditionnelle avancée, intégrations sur-mesure, ces cas sont évalués individuellement, toujours selon la valeur créée.
                </p>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-semibold text-sm transition-colors group cursor-pointer"
                >
                  Discuter de mon cas
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'Traitement de documents IA', desc: 'Extraction, classification et routage automatique de factures, contrats et formulaires.' },
                  { title: 'Service client automatisé', desc: 'Triage, réponses contextuelles et escalade intelligente vers les bonnes équipes.' },
                  { title: 'Veille & rapports sur mesure', desc: 'Agrégation multi-sources, synthèse IA et distribution automatique aux parties prenantes.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1rem] bg-white/[0.07] border border-white/10 p-4">
                    <p className="text-sm font-semibold text-[#F5F5F0] mb-1">{item.title}</p>
                    <p className="text-xs text-[rgba(245,245,240,0.45)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Maintenance */}
        <ScrollReveal delay={0.05}>
          <p className="text-xs uppercase tracking-[0.2em] text-[#0A2E4D]/40 mb-5 font-mono">
            04. Maintenance mensuelle (optionnelle)
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {maintenanceTiers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.06}>
              <div className="rounded-[1.25rem] bg-[#0A2E4D]/[0.04] border border-[#0A2E4D]/10 p-5 flex items-center justify-between hover:bg-[#0A2E4D]/[0.07] transition-colors">
                <div>
                  <p className="font-semibold text-sm text-[#0A2E4D]">{t.name}</p>
                  <p className="text-xs text-[#0A2E4D]/45 mt-0.5">{t.desc}</p>
                </div>
                <p className="font-mono text-sm font-bold text-[#0A2E4D] shrink-0 ml-4">{t.price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer note */}
        <ScrollReveal delay={0.1}>
          <p className="text-xs text-[#0A2E4D]/35 font-mono leading-relaxed max-w-[65ch]">
            Toutes les automations incluent : monitoring, alertes, logs, documentation (1 page),
            mini-formation et 7 jours de stabilisation. Minimum d&apos;entrée : 3 automations.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
