import About from "@/components/landing/about";
import Award from "@/components/landing/award";
import FAQ from "@/components/landing/faq";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Service from "@/components/landing/service";
import TechStack from "@/components/landing/techStack";

export default function Home() {
  return (
    <main className="bg-background dark:bg-dark-background text-text dark:text-dark-text">
      <Hero />
      <Service />
      <About />
      <TechStack />
      <Projects />
      <Award />
      <FAQ />
    </main>
  )
}