'use client'

import { motion } from 'framer-motion'
import SpotlightCard from '../ui/SpotlightCard'
import ScrollReveal from '../ui/ScrollReveal'

const cases = [
  {
    num: '01',
    sector: 'Immobilier',
    title: 'Zéro saisie CRM',
    body: 'Les leads Centris étaient copiés manuellement dans HubSpot — 12h perdues chaque semaine. Un flux Make les capte, les classe et notifie le bon agent.',
    metric: '+24 960 $ / année',
    tools: ['Make', 'HubSpot', 'Centris'],
  },
  {
    num: '02',
    sector: 'Santé',
    title: 'Rappels → moins de no-shows',
    body: 'Une clinique dentaire perdait 4 200$ par mois en absences non annulées. Rappels SMS + courriel automatisés 48h et 2h avant le rendez-vous.',
    metric: '+50 400 $ / année',
    tools: ['Make', 'Cliniko', 'Twilio'],
  },
  {
    num: '03',
    sector: 'Distribution',
    title: 'Rapport de ventes à 7h00',
    body: '6 heures chaque lundi pour compiler les ventes de 4 entrepôts dans un fichier. Maintenant le rapport consolidé arrive automatiquement avant le standup.',
    metric: '+15 600 $ / année',
    tools: ['Make', 'Google Sheets', 'Slack'],
  },
  {
    num: '04',
    sector: 'Commerce en ligne',
    title: 'Séquence post-achat',
    body: 'Aucune communication après la commande. Quatre courriels séquencés — confirmation, guide, relance, avis — ont augmenté le réachat de 18%.',
    metric: '+18 000 $ / année',
    tools: ['Make', 'Shopify', 'Mailchimp'],
  },
  {
    num: '05',
    sector: 'Comptabilité',
    title: 'Collecte de documents sans relance',
    body: 'Des dizaines de courriels manuels par mois pour récupérer pièces justificatives et relevés. Flux automatisé — zéro oubli, 100% à temps.',
    metric: '+6 200 $ / année',
    tools: ['Make', 'Notion', 'Gmail'],
  },
  {
    num: '06',
    sector: 'Services professionnels',
    title: 'Facturation déclenchée par l\'agenda',
    body: 'Un consultant perdait 3h/sem à facturer après chaque appel. Dès qu\'un événement Calendly se termine, la facture est générée et envoyée automatiquement.',
    metric: '+15 600 $ / année',
    tools: ['Make', 'Calendly', 'FreshBooks'],
  },
]

export default function EtudesDeCas() {
  return (
    <section
      id="etudes-de-cas"
      className="bg-[#F5F5F0] py-28 md:py-36 rounded-t-3xl"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#0A2E4D]/40 mb-4">
              Exemples d&apos;automations
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-normal leading-[0.95] text-[#0A2E4D]">
              Cas réels.
              <br />
              <span className="text-[#0A2E4D]/30">Concret. Mesuré. Rentable.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 18,
                delay: (i % 3) * 0.1,
              }}
            >
              <SpotlightCard
                variant="light"
                className="h-full rounded-[2rem] bg-white border border-[#0A2E4D]/08 p-8 flex flex-col gap-5 shadow-[0_8px_40px_-12px_rgba(10,46,77,0.08)] hover:border-[#0A2E4D]/18 hover:shadow-[0_12px_48px_-12px_rgba(10,46,77,0.13)] transition-all duration-300"
              >
                {/* Top row: sector + number */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0A2E4D]/35 font-mono">
                    {c.sector}
                  </span>
                  <span className="font-mono text-[10px] text-[#0A2E4D]/18">
                    {c.num}
                  </span>
                </div>

                {/* Metric */}
                <div className="font-mono text-2xl font-bold text-[#C49060] tracking-tight leading-none">
                  {c.metric}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold tracking-tight text-[#0A2E4D] leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#0A2E4D]/55 leading-relaxed">
                    {c.body}
                  </p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#0A2E4D]/07">
                  {c.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-[#0A2E4D]/[0.05] text-[#0A2E4D]/50 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
