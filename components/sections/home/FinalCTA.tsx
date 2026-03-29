import Link from 'next/link'
import Container from '@/components/shared/Container'
import { contact } from '@/lib/site-data'

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[28px] bg-slate-950 px-5 py-8 text-white shadow-[0_32px_90px_rgba(15,23,42,0.18)] sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-xs sm:tracking-[0.28em]">İletişime Geçin</p>
          <div className="mt-5 grid gap-7 sm:mt-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-[2rem] leading-[1.02] font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Cihazınızı güvenle teslim edebileceğiniz profesyonel servis deneyimi.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
                Demiroğlu Apple ile cihazınızın sorununu hızlıca analiz edin, doğru çözümle güvenle yolunuza devam edin.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <Link
                href={contact.whatsappHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                WhatsApp
              </Link>
              <Link
                href={contact.phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                Telefon
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                Form
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
