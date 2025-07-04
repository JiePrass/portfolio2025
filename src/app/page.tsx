import Hero from "@/components/landing/hero";
import Service from "@/components/landing/service";

export default function Home() {
  return(
    <main className="bg-background dark:bg-dark-background text-text dark:text-dark-text">
      <Hero />
      <Service />
    </main>
  )
}