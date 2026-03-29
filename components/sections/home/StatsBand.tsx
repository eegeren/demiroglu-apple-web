import Container from '@/components/shared/Container'
import { stats } from '@/lib/site-data'

export default function StatsBand() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_45%,#eef2f7_100%)] p-6 shadow-[0_26px_70px_rgba(15,23,42,0.08)] sm:rounded-[36px] sm:p-10">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">{item.value}</p>
                <p className="mt-2 max-w-[16rem] text-sm leading-7 text-slate-600 sm:mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
