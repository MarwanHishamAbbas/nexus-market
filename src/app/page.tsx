import Banner from "@/components/home/Banner"
import HomeHero from "@/components/home/Hero"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-3">
      <HomeHero />
      <Projects />
      <Banner />
    </main>
  )
}
