export default function TrustBar() {
  return (
    <section className="bg-[#F5F5F0] py-16 border-b border-[#0A2E4D]/08 rounded-t-3xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#0A2E4D]/35 mb-10">
          Notre engagement
        </p>
        <div className="flex flex-col md:flex-row">

          {/* Clair */}
          <div className="flex-1 flex flex-col gap-3 py-8 md:py-0 md:pr-14 border-b border-[#0A2E4D]/10 md:border-b-0 md:border-r">
            <span className="text-5xl md:text-6xl font-bold tracking-tighter text-[#0A2E4D] leading-none">
              Clair<span className="text-[#7DB7D6]">.</span>
            </span>
            <span className="text-sm text-[#0A2E4D]/50 leading-relaxed max-w-[32ch]">
              Pas de jargon. On explique ce qu&apos;on fait et pourquoi.
            </span>
          </div>

          {/* Rentable */}
          <div className="flex-1 flex flex-col gap-3 py-8 md:py-0 md:px-14 border-b border-[#0A2E4D]/10 md:border-b-0 md:border-r">
            <span className="text-5xl md:text-6xl font-bold tracking-tighter text-[#0A2E4D] leading-none">
              Rentable<span className="text-[#7DB7D6]">.</span>
            </span>
            <span className="text-sm text-[#0A2E4D]/50 leading-relaxed max-w-[32ch]">
              On chiffre la valeur avant de déployer. Heures → dollars.
            </span>
          </div>

          {/* Fiable */}
          <div className="flex-1 flex flex-col gap-3 py-8 md:py-0 md:pl-14">
            <span className="text-5xl md:text-6xl font-bold tracking-tighter text-[#0A2E4D] leading-none">
              Fiable<span className="text-[#7DB7D6]">.</span>
            </span>
            <span className="text-sm text-[#0A2E4D]/50 leading-relaxed max-w-[32ch]">
              Monitoring, alertes, documentation. Systèmes solides, pas démos fragiles.
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
