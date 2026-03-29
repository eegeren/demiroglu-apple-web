import Link from 'next/link'
import Container from '@/components/shared/Container'
import SectionIntro from '@/components/shared/SectionIntro'
import { serviceItems } from '@/lib/site-data'

export default function Services() {
  return (
    <section id="hizmetler" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Hizmetler"
            title="Apple cihazlarınızdaki temel arızalar için profesyonel servis çözümleri."
            description="Sık karşılaşılan arızaları hızlı değerlendirme, kontrollü müdahale ve düzenli bilgilendirme ile yönetiyoruz."
          />
          <Link
            href="/hizmetler"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white sm:w-auto"
          >
            Tüm Hizmetleri Gör
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service) => (
            <article
              key={service.title}
              className="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:rounded-[30px]"
            >
              <div className="h-10 w-10 rounded-2xl bg-slate-950/95 sm:h-11 sm:w-11" />
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.04em] text-slate-950 sm:mt-6 sm:text-xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
