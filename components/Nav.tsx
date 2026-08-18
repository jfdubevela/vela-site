'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { List, X, LinkedinLogo, CaretDown } from '@phosphor-icons/react'
import MagneticButton from './ui/MagneticButton'

type SubLink = { label: string; href: string; nested?: boolean }

// Sous-menu de Services
const servicesSubLinks: SubLink[] = [
  { label: 'Coaching', href: '/coaching' },
  { label: 'Formation', href: '/formations' },
  { label: 'Automatisation', href: '/automatisations' },
  { label: 'Agent vocal I.A.', href: '/agent-vocal.html', nested: true },
]

// Sous-menu d'Outils
const outilsSubLinks: SubLink[] = [
  { label: 'Guides', href: '/outils/guides' },
]

export default function Nav({
  lightTop = false,
  lightUntil,
}: {
  lightTop?: boolean
  /** Sélecteur de la dernière section claire : la barre reste claire tant qu'elle n'est pas dépassée */
  lightUntil?: string
}) {
  const [scrolled, setScrolled] = useState(false)
  const [pastLight, setPastLight] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [outilsOpen, setOutilsOpen] = useState(false)
  const [mobileOutilsOpen, setMobileOutilsOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Suit la fin de la section claire pour rebasculer la barre en foncé
  useEffect(() => {
    if (!lightUntil) return
    function check() {
      const el = document.querySelector(lightUntil as string)
      if (!el) return
      setPastLight(el.getBoundingClientRect().bottom <= 80)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [lightUntil])

  function handleNavClick(href: string) {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const isLight = lightTop && (!scrolled || (!!lightUntil && !pastLight))
  const linkColor = isLight
    ? 'text-[rgba(10,46,77,0.60)] hover:text-[#0A2E4D]'
    : 'text-[rgba(247,243,235,0.65)] hover:text-[#E8E4DA]'
  const linkedinColor = isLight
    ? 'border-[rgba(10,46,77,0.15)] text-[rgba(10,46,77,0.45)] hover:text-[#0A2E4D] hover:border-[rgba(10,46,77,0.30)]'
    : 'border-[rgba(247,243,235,0.12)] text-[rgba(247,243,235,0.5)] hover:text-[#7DB7D6] hover:border-[#7DB7D6]/30'
  const burgerColor = isLight ? 'text-[#0A2E4D]' : 'text-[#E8E4DA]'

  // Panneau deroulant, s'adapte au nav clair
  const panelClass = isLight
    ? 'bg-[rgba(247,243,235,0.96)] backdrop-blur-md border border-[rgba(10,46,77,0.10)]'
    : 'glass'
  const subLinkClass = isLight
    ? 'text-[rgba(10,46,77,0.70)] hover:text-[#0A2E4D] hover:bg-[rgba(10,46,77,0.05)]'
    : 'text-[rgba(247,243,235,0.75)] hover:text-[#E8E4DA] hover:bg-white/[0.06]'
  const nestedRuleClass = isLight
    ? 'border-[rgba(10,46,77,0.14)]'
    : 'border-[rgba(247,243,235,0.14)]'

  function Dropdown({ links, onNavigate }: { links: SubLink[]; onNavigate: () => void }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.15 }}
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-[10px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-1 ${panelClass}`}
      >
        {links.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`block py-2.5 text-sm transition-colors ${subLinkClass} ${
              s.nested ? `ml-6 mr-1 pl-3 pr-2 border-l ${nestedRuleClass}` : 'px-4'
            }`}
            onClick={onNavigate}
          >
            {s.label}
          </Link>
        ))}
      </motion.div>
    )
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 22, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isLight
            ? scrolled
              ? 'bg-[rgba(247,243,235,0.94)] backdrop-blur-md border-b border-[rgba(10,46,77,0.10)] shadow-[0_4px_24px_rgba(10,46,77,0.08)]'
              : 'bg-[rgba(247,243,235,0.72)] backdrop-blur-sm border-b border-[rgba(10,46,77,0.08)]'
            : scrolled
            ? 'glass'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="VELA, accueil" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="VELA"
              width={120}
              height={42}
              priority
              className={`h-9 w-auto transition-all duration-300 ${isLight ? 'brightness-0 saturate-100' : ''}`}
              style={
                isLight
                  ? {
                      filter:
                        'brightness(0) saturate(100%) invert(15%) sepia(55%) saturate(650%) hue-rotate(183deg) brightness(82%)',
                    }
                  : undefined
              }
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">

            {/* Accueil */}
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 ${linkColor}`}
            >
              Accueil
            </Link>

            {/* Services, sous-menu seulement */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${linkColor}`}
              >
                Services
                <CaretDown
                  size={12}
                  weight="regular"
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <Dropdown links={servicesSubLinks} onNavigate={() => setServicesOpen(false)} />
                )}
              </AnimatePresence>
            </div>

            {/* Outils, avec dropdown Guides */}
            <div
              className="relative"
              onMouseEnter={() => setOutilsOpen(true)}
              onMouseLeave={() => setOutilsOpen(false)}
            >
              <Link
                href="/outils/guides"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${linkColor}`}
              >
                Outils
                <CaretDown
                  size={12}
                  weight="regular"
                  className={`transition-transform duration-200 ${outilsOpen ? 'rotate-180' : ''}`}
                />
              </Link>
              <AnimatePresence>
                {outilsOpen && (
                  <Dropdown links={outilsSubLinks} onNavigate={() => setOutilsOpen(false)} />
                )}
              </AnimatePresence>
            </div>

            {/* Manifeste */}
            <Link
              href="/manifeste"
              className={`text-sm font-medium transition-colors duration-200 ${linkColor}`}
            >
              Manifeste
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/agencevela/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn VELA"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${linkedinColor}`}
            >
              <LinkedinLogo size={16} weight="regular" />
            </a>
            <MagneticButton
              className="inline-flex items-center gap-2 bg-[#C9A961] hover:bg-[#D9BC7E] text-[#0A2E4D] font-semibold text-sm px-5 py-2.5 rounded-[10px] transition-colors duration-200 cursor-pointer shadow-[0_0_16px_2px_rgba(125,183,214,0.35)]"
              onClick={() => handleNavClick('#contact')}
            >
              Contactez-nous
            </MagneticButton>
          </div>

          {/* Mobile burger */}
          <button
            className={`md:hidden p-2 ${burgerColor}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Menu"
          >
            <List size={24} weight="regular" />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[150] bg-[#0A2E4D]/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 32 }}
              className="fixed right-0 top-0 bottom-0 z-[160] w-72 glass flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <Image src="/logo.svg" alt="VELA" width={100} height={35} className="h-8 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="text-[#E8E4DA] p-1">
                  <X size={22} weight="regular" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {/* Accueil */}
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-[#E8E4DA] hover:text-[#C9A961] transition-colors"
                >
                  Accueil
                </Link>

                {/* Services + sous-menu */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    aria-expanded={mobileServicesOpen}
                    className="flex items-center justify-between text-left text-lg font-semibold text-[#E8E4DA] hover:text-[#C9A961] transition-colors"
                  >
                    Services
                    <CaretDown
                      size={14}
                      weight="regular"
                      className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-[rgba(247,243,235,0.12)]"
                      >
                        {servicesSubLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className={`text-base text-[rgba(247,243,235,0.65)] hover:text-[#C9A961] transition-colors ${
                              s.nested ? 'pl-4 border-l border-[rgba(247,243,235,0.12)]' : ''
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Outils + sous-menu Guides */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/outils/guides"
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-semibold text-[#E8E4DA] hover:text-[#C9A961] transition-colors"
                    >
                      Outils
                    </Link>
                    <button
                      onClick={() => setMobileOutilsOpen((prev) => !prev)}
                      className="p-1 text-[rgba(247,243,235,0.5)] hover:text-[#C9A961] transition-colors"
                      aria-label="Sous-menu Outils"
                    >
                      <CaretDown
                        size={14}
                        weight="regular"
                        className={`transition-transform duration-200 ${mobileOutilsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {mobileOutilsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-[rgba(247,243,235,0.12)]"
                      >
                        {outilsSubLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-base text-[rgba(247,243,235,0.65)] hover:text-[#C9A961] transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Manifeste */}
                <Link
                  href="/manifeste"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-[#E8E4DA] hover:text-[#C9A961] transition-colors"
                >
                  Manifeste
                </Link>
              </nav>

              <div className="mt-auto pt-8">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-[#C9A961] hover:bg-[#D9BC7E] text-[#0A2E4D] font-semibold py-3 rounded-[10px] transition-colors text-center"
                >
                  Contactez-nous
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
