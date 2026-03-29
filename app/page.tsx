import TopBar from "@/components/sections/TopBar"
import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import Devices from "@/components/sections/Devices"
import CTA from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Devices />
        <Services />
        <CTA />
      </main>
    </>
  )
}
