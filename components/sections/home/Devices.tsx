import Container from '@/components/shared/Container'
import SectionIntro from '@/components/shared/SectionIntro'
import { deviceCategories } from '@/lib/site-data'

export default function Devices() {
  return (
    <section className="bg-slate-50/80 py-16 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow="Cihazlar"
          title="Apple ekosisteminin farklı cihaz tiplerine özel servis yaklaşımı."
          description="Her cihazın kullanım alışkanlığı ve arıza davranışı farklıdır. Bu nedenle kategori bazlı, dikkatli ve temiz bir servis süreci uyguluyoruz."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {deviceCategories.map((device) => (
            <article
              key={device.name}
              className="group transition-premium rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)] sm:rounded-[32px] sm:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-2xl">{device.name}</h3>
                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white sm:text-xs sm:tracking-[0.22em]">
                  Destek
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5">{device.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
