import Container from '@/components/shared/Container'
import SectionIntro from '@/components/shared/SectionIntro'
import { processSteps } from '@/lib/site-data'

export default function Process() {
  return (
    <section className="overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <Container>
        <SectionIntro
          eyebrow="Servis Süreci"
          title="Sade, görünür ve onaylı bir teknik servis akışı."
          description="Karar vermeyi kolaylaştıran net bir süreç tasarlıyoruz. Böylece cihazınızın hangi aşamada olduğunu her zaman biliyorsunuz."
          theme="dark"
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article key={item.step} className="relative rounded-[24px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm sm:rounded-[32px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm sm:tracking-[0.26em]">{item.step}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-white sm:mt-5 sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:mt-4">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
