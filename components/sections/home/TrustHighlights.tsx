import Container from '@/components/shared/Container'
import SectionIntro from '@/components/shared/SectionIntro'
import { trustHighlights } from '@/lib/site-data'

export default function TrustHighlights() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow="Güven"
          title="İlk temastan teslim aşamasına kadar net ve profesyonel bir servis yaklaşımı."
          description="Kullanıcının en çok ihtiyaç duyduğu şey güven. Bu yüzden süreci sadeleştiriyor, iletişimi açık tutuyor ve teknik kaliteyi görünür hale getiriyoruz."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trustHighlights.map((item, index) => (
            <article
              key={item.title}
              className="transition-premium rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)] sm:rounded-[30px] sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white sm:h-12 sm:w-12">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-slate-950 sm:mt-6 sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
