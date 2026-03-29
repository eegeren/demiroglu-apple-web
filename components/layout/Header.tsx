'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Container from '@/components/shared/Container'
import { contact, navigation } from '@/lib/site-data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3">
      <Container>
        <div
          className={[
            'transition-premium rounded-[24px] border px-3 py-3 sm:rounded-[28px] sm:px-6',
            scrolled
              ? 'border-white/70 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl'
              : 'border-white/50 bg-white/70 backdrop-blur-lg',
          ].join(' ')}
        >
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] sm:h-11 sm:w-11 sm:text-sm">
                DA
              </div>
              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm sm:tracking-[0.22em]">
                  Demiroğlu Apple
                </p>
                <p className="truncate text-sm font-semibold tracking-[-0.03em] text-slate-950 sm:text-base">
                  Premium Teknik Servis
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Link
                href={contact.phoneHref}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                Ara
              </Link>
              <Link
                href={contact.whatsappHref}
                className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:bg-slate-800"
              >
                WhatsApp
              </Link>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-4 border-t border-slate-200 pt-4 lg:hidden">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  href={contact.phoneHref}
                  className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Telefon
                </Link>
                <Link
                  href={contact.whatsappHref}
                  className="rounded-full bg-slate-950 px-4 py-3 text-center text-sm font-medium text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  )
}
