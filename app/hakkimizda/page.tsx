import type { Metadata } from 'next'
import PageIntro from '@/components/sections/home/PageIntro'
import Container from '@/components/shared/Container'
import SectionIntro from '@/components/shared/SectionIntro'
import { aboutPrinciples, processSteps, stats } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Hakkımızda | Demiroğlu Apple',
  description: 'Demiroğlu Apple teknik servis yaklaşımı, uzmanlığı ve güven odaklı hizmet anlayışı.',
}

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Hakkımızda"
        title="Apple cihazlarında güven veren, premium servis yaklaşımı."
        description="Demiroğlu Apple, teknik uzmanlığı sade iletişim ve profesyonel süreç yönetimiyle bir araya getirir. Hedefimiz cihazınızı sadece onarmak değil, tüm servis deneyimini güven verici hale getirmektir."
      />

      <section className="pb-16 sm:pb-24">
        <Container className="grid gap-6 sm:gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:rounded-[34px] sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-xs sm:tracking-[0.28em]">Yaklaşımımız</p>
            <h2 className="mt-4 text-[1.9rem] leading-[1.02] font-semibold tracking-[-0.04em] text-slate-950 sm:mt-5 sm:text-4xl">
              Teknik kaliteyi, açık iletişimle tamamlıyoruz.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:leading-8">
              Apple cihazlarına özel servis süreçlerinde en önemli farkı detaylara verilen özen oluşturur. Cihaz kabulünden arıza tespitine, fiyat bilgisinden teslim aşamasına kadar her noktada düzenli, şeffaf ve profesyonel bir akış hedefliyoruz.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:leading-8">
              Müşteri memnuniyetini yalnızca sonuçla değil, sürecin kalitesiyle birlikte değerlendiriyoruz. Bu yüzden her onarımı temiz işçilik, net bilgilendirme ve güven ilişkisi üzerinden ele alıyoruz.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {aboutPrinciples.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-6 sm:rounded-[30px] sm:p-7">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-24">
        <Container>
          <SectionIntro
            eyebrow="Süreç Disiplini"
            title="Her servis işlemi aynı profesyonel standardı takip eder."
            description="Tutarlı süreçler, daha öngörülebilir sonuçlar üretir. Bu yüzden tüm servis adımlarını net, kontrollü ve kullanıcı odaklı ilerletiyoruz."
            theme="dark"
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-[24px] border border-white/10 bg-white/6 p-6 sm:rounded-[30px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm sm:tracking-[0.28em]">{step.step}</p>
                <p className="mt-4 text-xl font-semibold tracking-[-0.04em] text-white sm:mt-5 sm:text-2xl">{step.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:mt-4">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_45%,#eef2f7_100%)] p-6 sm:grid-cols-2 sm:rounded-[36px] sm:p-10 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">{item.value}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
