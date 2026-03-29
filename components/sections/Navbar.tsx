"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Demiroğlu Apple
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-black/80">
          <a href="#hero" className="hover:text-black transition">Ana Sayfa</a>
          <a href="#devices" className="hover:text-black transition">Cihazlar</a>
          <a href="#services" className="hover:text-black transition">Hizmetler</a>
          <a href="#contact" className="hover:text-black transition">İletişim</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#services"
            className="px-4 py-2 rounded-full text-sm border border-black/10 hover:bg-black/5 transition"
          >
            İncele
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-sm bg-black text-white hover:opacity-85 transition"
          >
            Hemen Ulaş
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full hover:bg-black/5 transition"
          aria-label="Menüyü Aç"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#hero" onClick={() => setOpen(false)}>Ana Sayfa</a>
            <a href="#devices" onClick={() => setOpen(false)}>Cihazlar</a>
            <a href="#services" onClick={() => setOpen(false)}>Hizmetler</a>
            <a href="#contact" onClick={() => setOpen(false)}>İletişim</a>
          </div>
        </div>
      )}
    </header>
  )
}
