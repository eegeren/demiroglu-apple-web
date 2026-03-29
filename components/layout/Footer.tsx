import Link from 'next/link'
import Container from '@/components/shared/Container'
import { contact, navigation } from '@/lib/site-data'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 text-slate-200">
      <Container className="grid gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm sm:tracking-[0.24em]">
            Demiroğlu Apple
          </p>
          <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            Apple cihazlarınız için sade, güvenilir ve profesyonel teknik servis deneyimi.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5">
            iPhone, MacBook, iPad, iMac, Apple Watch ve AirPods için premium servis yaklaşımı sunuyoruz.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Menü</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400 sm:mt-5">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">İletişim</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400 sm:mt-5">
            <Link href={contact.phoneHref} className="break-words transition hover:text-white">
              {contact.phoneDisplay}
            </Link>
            <Link href={contact.whatsappHref} className="transition hover:text-white">
              {contact.whatsappDisplay}
            </Link>
            <p>{contact.hours}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
