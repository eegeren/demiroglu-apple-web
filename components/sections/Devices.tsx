"use client"

import Reveal from "@/components/ui/Reveal"
import { Smartphone, Laptop, Tablet, Monitor, Watch, Headphones } from "lucide-react"

const devices = [
  { name: "iPhone", icon: Smartphone },
  { name: "MacBook", icon: Laptop },
  { name: "iPad", icon: Tablet },
  { name: "iMac", icon: Monitor },
  { name: "Apple Watch", icon: Watch },
  { name: "AirPods", icon: Headphones },
]

export default function Devices() {
  return (
    <section id="devices" className="py-28 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="text-sm uppercase tracking-[0.2em] text-gray-400">Cihazlar</span>
          <h2 className="mt-4 mb-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Uzmanlaştığımız Apple ürünleri
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-14">
            Her cihaz kategorisi için doğru teşhis, temiz işçilik ve profesyonel süreç yönetimi.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device, i) => {
            const Icon = device.icon
            return (
              <Reveal key={device.name} delay={i * 0.05}>
                <div className="text-left rounded-[28px] border border-black/5 bg-white shadow-sm hover:shadow-xl transition duration-300 p-7 min-h-[200px]">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-3">{device.name}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Donanımsal ve yazılımsal sorunlarda hızlı teşhis ve güven veren servis deneyimi.
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
