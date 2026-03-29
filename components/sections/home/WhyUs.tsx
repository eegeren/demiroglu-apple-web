import Container from '@/components/shared/Container'
import SectionIntro from '@/components/shared/SectionIntro'
import { reasons } from '@/lib/site-data'

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionIntro
          eyebrow="Neden Demiroğlu Apple"
          title="Teknik serviste sade, güçlü ve güvenilir bir deneyim."
          description="Premium görünümün arkasında gerçek bir operasyon disiplini olmalı. Bizim yaklaşımımız tam olarak bunu merkeze alır."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:rounded-[30px]">
              <p className="text-base font-semibold tracking-[-0.03em] text-slate-950 sm:text-lg">{reason}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
