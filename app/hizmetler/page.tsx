import type { Metadata } from 'next'
import PageIntro from '@/components/sections/home/PageIntro'
import Container from '@/components/shared/Container'
import SectionIntro from '@/components/shared/SectionIntro'
import { deviceCategories, serviceItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Hizmetler | Demiroğlu Apple',
  description: 'iPhone, MacBook, iPad, iMac, Apple Watch ve AirPods için servis kalemleri ve onarım detayları.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Hizmetler"
        title="Apple cihazları için kapsamlı teknik servis çözümleri."
        description="Cihaz bazlı uzmanlık ve işlem bazlı netlik ile, kullanıcıyı yormayan profesyonel bir servis yapısı sunuyoruz."
      />

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionIntro
            eyebrow="Servis Kalemleri"
            title="Sık karşılaşılan arızalar için kontrollü ve yüksek kaliteli müdahale."
            description="Her işlem; doğru teşhis, net fiyatlandırma ve dikkatli işçilik prensibiyle ele alınır."
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceItems.map((service) => (
              <article key={service.title} className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:rounded-[30px]">
                <div className="h-10 w-10 rounded-2xl bg-slate-950 sm:h-11 sm:w-11" />
                <h2 className="mt-5 text-lg font-semibold tracking-[-0.04em] text-slate-950 sm:mt-6 sm:text-xl">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow="Cihaz Bazlı"
            title="Her Apple cihazı için farklı ihtiyaçlara uyum sağlayan servis yaklaşımı."
            description="Parça yapısı, kullanım senaryosu ve arıza davranışına göre kategorize edilmiş destek alanlarımız."
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {deviceCategories.map((device) => (
              <article key={device.name} className="rounded-[24px] border border-slate-200/80 bg-white p-6 sm:rounded-[32px] sm:p-7">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-2xl">{device.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{device.summary}</p>
                <div className="mt-5 h-px bg-slate-200 sm:mt-6" />
                <p className="mt-5 text-sm leading-7 text-slate-500 sm:mt-6">
                  Ön değerlendirme, arıza tespiti, onaylı işlem ve teslim sonrası bilgilendirme adımlarıyla ilerlenir.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
