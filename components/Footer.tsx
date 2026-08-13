import Image from 'next/image'
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { CALENDRIER_URL } from './ui/calendrier'

export default function Footer() {
  return (
    <footer className="bg-[#122434] border-t border-[rgba(247,243,235,0.12)]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 items-start">
            <Image src="/logo.svg" alt="VELA" width={132} height={46} className="h-10 w-auto" />
            <p className="text-sm text-[rgba(247,243,235,0.45)] leading-relaxed max-w-[30ch]">
              Automatisation par l&apos;I.A. : claire, rentable, fiable.
            </p>
            <p className="text-xs text-[rgba(247,243,235,0.25)] font-mono">
              Basé à Longueuil, Québec
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/company/agencevela/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn VELA"
                className="w-9 h-9 rounded-full border border-[rgba(247,243,235,0.12)] flex items-center justify-center text-[rgba(247,243,235,0.5)] hover:text-[#7DB7D6] hover:border-[#7DB7D6]/30 transition-colors"
              >
                <LinkedinLogo size={16} weight="regular" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[rgba(247,243,235,0.3)] mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {['Diagnostic & stratégie', 'Implantation', 'Éducation', 'Adoption'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-[rgba(247,243,235,0.5)] hover:text-[#E8E4DA] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[rgba(247,243,235,0.3)] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Tarification', href: '#tarification' },
                { label: 'Exemples', href: '#etudes-de-cas' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Réserver un appel', href: CALENDRIER_URL },
                { label: 'Nous écrire', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-sm text-[rgba(247,243,235,0.5)] hover:text-[#E8E4DA] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[rgba(247,243,235,0.3)] mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="tel:4384991855" className="text-sm text-[rgba(247,243,235,0.5)] hover:text-[#C9A961] transition-colors">
                  438 499-1855
                </a>
              </li>
              <li className="text-sm text-[rgba(247,243,235,0.35)]">Longueuil, QC</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[rgba(247,243,235,0.12)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgba(247,243,235,0.22)] font-mono">
            © 2025 VELA Automatisation inc.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[rgba(247,243,235,0.22)] hover:text-[rgba(247,243,235,0.5)] transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-xs text-[rgba(247,243,235,0.22)] hover:text-[rgba(247,243,235,0.5)] transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
