type SectionIntroProps = {
  eyebrow?: string
  title: string
  description: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}: SectionIntroProps) {
  const eyebrowClass = theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
  const titleClass = theme === 'dark' ? 'text-white' : 'text-slate-950'
  const descriptionClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] sm:mb-4 sm:text-xs sm:tracking-[0.28em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-[2rem] leading-[1.02] font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl ${titleClass}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-[15px] leading-7 sm:mt-5 sm:text-lg ${descriptionClass}`}>{description}</p>
    </div>
  )
}
