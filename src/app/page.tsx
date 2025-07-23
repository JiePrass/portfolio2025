'use client';

import { useState } from 'react';

import Hero from "@/components/landing/hero";
import Service from "@/components/landing/service";
import About from "@/components/landing/about";
import TechStack from "@/components/landing/techStack";
import Projects from "@/components/landing/projects";
import Award from "@/components/landing/award";
import FAQ from "@/components/landing/faq";
import SplashScreen from '@/components/layout/splashscreen';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && (
        <SplashScreen onFinish={() => setShowContent(true)} />
      )}

      {showContent && (
        <>
          <Header />
          <main className="bg-background dark:bg-dark-background text-text dark:text-dark-text">
            <Hero />
            <Service />
            <About />
            <TechStack />
            <Projects />
            <Award />
            <FAQ />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
