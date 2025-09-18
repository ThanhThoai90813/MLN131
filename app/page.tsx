import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Timeline } from "@/components/timeline"
import { CharacteristicsSection } from "@/components/characteristics-section"
import { MethodsSection } from "@/components/methods-section"
import AcademicIntegritySection from "@/components/academic-integrity-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Timeline />
      <div id="theory">
        <CharacteristicsSection />
        <MethodsSection />
      </div>
      <AcademicIntegritySection />
      <Footer />
    </main>
  )
}
