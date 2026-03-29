"use client"

import Reveal from "@/components/ui/Reveal"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,120,120,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.08),transparent_28%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f7f8] to-white" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center min-h-[85vh]">
        
        {/* LEFT */}
        <div>
          <Reveal>
            <span className="inline-flex mb-6 px-4 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur text-sm text-black/70 shadow-sm">
              Apple cihazlara özel teknik servis
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] mb-6">
              Hızlı servis.
              <br />
              Şeffaf süreç.
              <br />
              Premium deneyim.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
              iPhone, MacBook, iPad, iMac, Apple Watch ve AirPods cihazlarınız için
              güven veren, modern ve profesyonel teknik servis hizmeti sunuyoruz.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-black text-white text-center hover:opacity-85 transition"
              >
                Hemen İletişime Geç
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-black/10 bg-white/70 backdrop-blur text-center hover:bg-black/5 transition"
              >
                Hizmetleri İncele
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 p-4 shadow-sm">
                <div className="text-2xl font-semibold">1000+</div>
                <div className="text-sm text-gray-500">Servis işlemi</div>
              </div>
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 p-4 shadow-sm">
                <div className="text-2xl font-semibold">Aynı Gün</div>
                <div className="text-sm text-gray-500">Uygun işlemler</div>
              </div>
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 p-4 shadow-sm">
                <div className="text-2xl font-semibold">Şeffaf</div>
                <div className="text-sm text-gray-500">Onaylı süreç</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT MOCKUP */}
        <Reveal delay={0.18}>
          <div className="relative h-[560px] hidden lg:block">
            
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute top-8 left-10 w-[280px] h-[520px] rounded-[3rem] bg-gradient-to-b from-zinc-900 to-zinc-700 shadow-2xl border border-white/10"
            />

            {/* Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05 }}
              className="absolute top-24 right-6 w-[320px] rounded-[2rem] bg-white/80 backdrop-blur-xl border border-black/5 shadow-2xl p-6"
            >
              <div className="text-sm text-gray-500 mb-2">Servis Takibi</div>

              <div className="text-sm text-gray-500 mb-1">Cihaz</div>
              <div className="text-xl font-semibold mb-6">Apple Cihaz</div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-black text-white p-4">
                  <div className="text-sm text-white/70">Durum</div>
                  <div className="text-lg font-medium">
                    Arıza Tespiti Tamamlandı
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4 border border-black/5">
                  <div className="text-sm text-gray-500">İşlem</div>
                  <div className="font-medium">
                    Donanım ve genel kontrol
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4 border border-black/5">
                  <div className="text-sm text-gray-500">Bilgilendirme</div>
                  <div className="font-medium">
                    Onay sonrası işleme alınır
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}
