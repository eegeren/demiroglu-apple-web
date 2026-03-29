import type { Metadata } from 'next'
import Link from 'next/link'
import PageIntro from '@/components/sections/home/PageIntro'
import Container from '@/components/shared/Container'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'İletişim | Demiroğlu Apple',
  description: 'Telefon, WhatsApp, çalışma saatleri ve iletişim formu ile Demiroğlu Apple iletişim sayfası.',
}

const formFields = [
  { label: 'Ad Soyad', type: 'text', placeholder: 'Adınızı ve soyadınızı girin' },
  { label: 'Telefon', type: 'tel', placeholder: '0532 136 18 15' },
  { label: 'Cihaz Modeli', type: 'text', placeholder: 'Örn. iPhone 14 Pro' },
]

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="İletişim"
        title="Servis sürecini hızlıca başlatmak için bizimle iletişime geçin."
        description="Telefon veya WhatsApp üzerinden cihaz probleminizi paylaşın; size en kısa sürede doğru yönlendirmeyi sunalım."
      />

      <section className="pb-16 sm:pb-24">
        <Container className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:rounded-[34px] sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-xs sm:tracking-[0.28em]">İletişim Bilgileri</p>
            <div className="mt-6 space-y-5 text-sm text-slate-300 sm:mt-8 sm:space-y-6">
              <div>
                <p className="text-slate-400">Telefon</p>
                <Link href={contact.phoneHref} className="mt-2 block break-words text-base font-semibold text-white sm:text-lg">
                  {contact.phoneDisplay}
                </Link>
              </div>
              <div>
                <p className="text-slate-400">WhatsApp</p>
                <Link href={contact.whatsappHref} className="mt-2 block text-base font-semibold text-white sm:text-lg">
                  {contact.whatsappDisplay}
                </Link>
              </div>
              <div>
                <p className="text-slate-400">Çalışma Saatleri</p>
                <p className="mt-2 text-base font-semibold text-white sm:text-lg">{contact.hours}</p>
              </div>
              <div>
                <p className="text-slate-400">Servis Kolaylığı</p>
                <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                  Cihazları evinizden alalım, evinize bırakalım.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:rounded-[34px] sm:p-10">
            <h2 className="text-[1.9rem] leading-[1.02] font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">İletişim Formu</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Cihaz türünü ve yaşadığınız sorunu paylaşın. Form gönderimi için örnek bir arayüz hazırladık; backend veya CRM entegrasyonu eklenerek üretime alınabilir.
            </p>

            <form className="mt-7 grid gap-4 sm:mt-8 sm:gap-5">
              {formFields.map((field) => (
                <label key={field.label} className="grid gap-2 text-sm font-medium text-slate-700">
                  {field.label}
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                  />
                </label>
              ))}

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Sorun Açıklaması
                <textarea
                  rows={5}
                  placeholder="Cihazdaki sorunu kısaca anlatın"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Talep Gönder
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  )
}
