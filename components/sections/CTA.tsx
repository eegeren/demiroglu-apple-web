"use client"

import Reveal from "@/components/ui/Reveal"

export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="rounded-[36px] bg-black text-white p-10 md:p-16 shadow-2xl">
            <div className="max-w-3xl">
              <div className="text-white/60 uppercase tracking-[0.2em] text-sm mb-4">
                İletişim
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Cihazınızı güvenle teslim edebileceğiniz profesyonel servis deneyimi
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Sorununuzu hızlıca analiz edelim, doğru çözümü net şekilde sunalım ve cihazınızı güven veren bir süreçle teslim alalım.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/905555555555"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium hover:opacity-90 transition"
                >
                  WhatsApp’tan Yaz
                </a>
                <a
                  href="tel:+905555555555"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
