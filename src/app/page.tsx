import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-25"></div>
      <Header />
      <HeroSection />
      <div id="projects-section">
        <ProjectsSection />
        <TapeSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
