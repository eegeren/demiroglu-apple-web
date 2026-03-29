import Container from '@/components/shared/Container'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.35),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(226,232,240,0.6),_transparent_34%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_80%)]" />
      <Container>
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-xs sm:tracking-[0.28em]">{eyebrow}</p>
          <h1 className="mt-4 text-[2.5rem] leading-[0.96] font-semibold tracking-[-0.06em] text-slate-950 sm:mt-5 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">{description}</p>
        </div>
      </Container>
    </section>
  )
}
