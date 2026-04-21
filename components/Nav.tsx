'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { List, X, LinkedinLogo, CaretDown } from '@phosphor-icons/react'
import MagneticButton from './ui/MagneticButton'

const anchorLinks = [
  { label: 'Tarification', href: '#tarification' },
  { label: 'Exemples', href: '#etudes-de-cas' },
  { label: 'FAQ', href: '#faq' },
]

const serviceLinks = [
  { label: 'Automatisations', href: '/automatisations' },
  { label: 'Formation', href: '/formations' },
  { label: 'Coaching', href: '/coaching' },
]

export default function Nav({
  lightTop = false,
  showAnchorLinks = true,
}: {
  lightTop?: boolean
  showAnchorLinks?: boolean
}) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(href: string) {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const isLight = lightTop && !scrolled
  const linkColor = isLight
    ? 'text-[rgba(10,46,77,0.60)] hover:text-[#0A2E4D]'
    : 'text-[rgba(245,245,240,0.65)] hover:text-[#F5F5F0]'
  const linkedinColor = isLight
    ? 'border-[rgba(10,46,77,0.15)] text-[rgba(10,46,77,0.45)] hover:text-[#0A2E4D] hover:border-[rgba(10,46,77,0.30)]'
    : 'border-white/10 text-[rgba(245,245,240,0.5)] hover:text-[#7DB7D6] hover:border-[#7DB7D6]/30'
  const burgerColor = isLight ? 'text-[#0A2E4D]' : 'text-[#F5F5F0]'

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 22, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'glass'
            : isLight
            ? 'bg-[rgba(247,243,235,0.72)] backdrop-blur-sm border-b border-[rgba(10,46,77,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
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
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${linkColor}`}
              >
                Services
                <CaretDown
                  size={12}
                  weight="bold"
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 glass rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-1"
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-[rgba(245,245,240,0.75)] hover:text-[#F5F5F0] hover:bg-white/[0.06] transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Anchor links — visibles seulement sur les pages de service */}
            {showAnchorLinks &&
              anchorLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${linkColor}`}
                >
                  {link.label}
                </button>
              ))}
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
              <LinkedinLogo size={16} weight="fill" />
            </a>
            <MagneticButton
              className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer shadow-[0_0_16px_2px_rgba(125,183,214,0.35)]"
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
            <List size={24} weight="bold" />
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
              className="fixed right-0 top-0 bottom-0 z-[160] w-72 glass flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <Image src="/logo.svg" alt="VELA" width={100} height={35} className="h-8 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="text-[#F5F5F0] p-1">
                  <X size={22} weight="bold" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {/* Services avec sous-menu mobile */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex items-center justify-between text-left text-lg font-semibold text-[#F5F5F0] hover:text-[#D4A373] transition-colors"
                  >
                    Services
                    <CaretDown
                      size={14}
                      weight="bold"
                      className={`transition-transform duration-200 text-[rgba(245,245,240,0.5)] ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-white/[0.1]"
                      >
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-base text-[rgba(245,245,240,0.65)] hover:text-[#D4A373] transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Liens ancres — seulement sur les pages de service */}
                {showAnchorLinks &&
                  anchorLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-lg font-semibold text-[#F5F5F0] hover:text-[#D4A373] transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
              </nav>
              <div className="mt-auto">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-[#D4A373] hover:bg-[#C49060] text-[#0A2E4D] font-semibold py-3 rounded-full transition-colors text-center"
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
