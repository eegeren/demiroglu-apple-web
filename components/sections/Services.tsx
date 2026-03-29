"use client"

import Reveal from "@/components/ui/Reveal"

const services = [
  {
    title: "Ekran Değişimi",
    desc: "Kırık, çatlak veya görüntü problemi yaşayan ekranlar için profesyonel çözüm.",
  },
  {
    title: "Batarya Değişimi",
    desc: "Hızlı tükenen, şişen veya performansı düşen bataryalar için güvenli işlem.",
  },
  {
    title: "Anakart Onarımı",
    desc: "Daha ileri seviye arızalarda detaylı teşhis ve teknik müdahale.",
  },
  {
    title: "Sıvı Teması",
    desc: "Temas sonrası hızlı müdahale ile cihazın kurtarılma ihtimalini artıran süreç.",
  },
  {
    title: "Şarj ve Bağlantı",
    desc: "Şarj soketi, bağlantı ve temas kaynaklı kullanım problemlerinin giderilmesi.",
  },
  {
    title: "Yazılım Sorunları",
    desc: "Açılmama, donma, güncelleme ve sistem kaynaklı yazılım problemlerine destek.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#f7f7f8]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-sm uppercase tracking-[0.2em] text-gray-400">Hizmetler</span>
            <h2 className="mt-4 mb-4 text-3xl md:text-5xl font-semibold tracking-tight">
              Profesyonel servis çözümleri
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Apple cihazlarınıza özel teknik süreçleri şeffaf, düzenli ve güven veren bir yapıyla yönetiyoruz.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="rounded-[30px] bg-white border border-black/5 p-8 shadow-sm hover:shadow-xl transition duration-300 min-h-[220px]">
                <h3 className="text-2xl font-semibold tracking-tight mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
