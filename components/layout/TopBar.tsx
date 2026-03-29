import Container from '@/components/shared/Container'

export default function TopBar() {
  return (
    <div className="border-b border-white/40 bg-slate-950 text-white">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.18em] sm:justify-between sm:py-3 sm:text-xs sm:tracking-[0.24em]">
        <span>Apple cihazlara özel teknik servis</span>
        <span>Hızlı geri dönüş</span>
        <span>Profesyonel destek</span>
      </Container>
    </div>
  )
}
