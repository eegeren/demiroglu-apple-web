import Link from 'next/link'
import Container from '@/components/shared/Container'
import { contact, deviceCategories, stats } from '@/lib/site-data'

const featuredDevices = deviceCategories.slice(0, 4)

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[460px] sm:h-[560px] bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.18),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(191,219,254,0.22),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_50%,_#ffffff_100%)]" />
      <Container className="grid gap-10 pb-16 pt-6 sm:gap-14 sm:pb-20 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-16">
        <div className="max-w-3xl">
          <span className="inline-flex max-w-full items-center rounded-full border border-white/70 bg-white/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-[0_18px_45px_rgba(148,163,184,0.16)] backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.24em]">
            Apple cihazlara özel teknik servis
          </span>
          <h1 className="mt-5 text-[2.7rem] leading-[0.94] font-semibold tracking-[-0.07em] text-slate-950 sm:mt-7 sm:text-6xl lg:text-7xl">
            Apple cihazlarınız için güven veren teknik servis.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-xl sm:leading-8">
            iPhone&apos;dan MacBook&apos;a, Apple cihazlarınıza hızlı, şeffaf ve profesyonel servis deneyimi sunuyoruz.
          </p>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap">
            <Link
              href={contact.whatsappHref}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_45px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto sm:px-7"
            >
              Hemen İletişime Geç
            </Link>
            <Link
              href="#hizmetler"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300/80 bg-white/75 px-6 py-4 text-sm font-semibold text-slate-900 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white sm:w-auto sm:px-7"
            >
              Servis Hizmetlerini İncele
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
            {stats.slice(0, 3).map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/70 bg-white/72 p-5 shadow-[0_16px_40px_rgba(148,163,184,0.14)] backdrop-blur sm:rounded-[28px]">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-8 h-28 w-28 rounded-full bg-slate-300/30 blur-3xl sm:-left-8 sm:h-40 sm:w-40" />
          <div className="absolute -right-4 bottom-0 h-36 w-36 rounded-full bg-blue-100/70 blur-3xl sm:-right-6 sm:h-48 sm:w-48" />
          <div className="relative rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,245,249,0.84))] p-4 shadow-[0_25px_70px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:rounded-[36px] sm:p-6 lg:p-8">
            <div className="rounded-[24px] bg-slate-950 p-5 text-white sm:rounded-[32px] sm:p-6 lg:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 sm:text-sm sm:tracking-[0.28em]">Servis Kompozisyonu</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:mt-4 sm:text-3xl">
                    Premium bakım. Net süreç. Güvenilir sonuç.
                  </h2>
                </div>
                <div className="w-fit rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-300 sm:text-xs">
                  Apple Focused
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                {featuredDevices.map((device, index) => (
                  <div
                    key={device.name}
                    className={`rounded-[22px] border border-white/10 p-4 sm:rounded-[28px] sm:p-5 ${index === 0 ? 'bg-white text-slate-950' : 'bg-white/6 text-white'}`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.22em]">{device.name}</p>
                    <p className={`mt-3 text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7 ${index === 0 ? 'text-slate-600' : 'text-slate-300'}`}>
                      {device.summary}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[22px] border border-white/10 bg-white/6 p-4 sm:mt-6 sm:rounded-[28px] sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Hızlı geri dönüş hedefi</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      İlk değerlendirme ve yönlendirme için güçlü iletişim akışı
                    </p>
                  </div>
                  <div className="w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
                    Aynı gün ön bilgilendirme
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
