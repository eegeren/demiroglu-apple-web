import Container from '@/components/shared/Container'
import SectionIntro from '@/components/shared/SectionIntro'
import { faqs } from '@/lib/site-data'

export default function FAQ() {
  return (
    <section className="bg-slate-50/80 py-16 sm:py-24">
      <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionIntro
          eyebrow="SSS"
          title="Merak edilen konulara net ve kısa yanıtlar."
          description="Teknik servis kararı verirken en sık sorulan başlıkları sade bir yapıda topladık."
        />

        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:rounded-[28px] sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold tracking-[-0.03em] text-slate-950 marker:hidden sm:text-lg">
                <span>{item.question}</span>
                <span className="shrink-0 text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
