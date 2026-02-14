import KonamiCode from '@/components/KonamiCode';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
// import { TestimonialsSection } from '@/sections/Testimonials';

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-40"></div>
      <Header />
      <HeroSection />
      <KonamiCode />
      <div id="projects-section">
        <ProjectsSection />
        <TapeSection />
        {/* <TestimonialsSection /> */}
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
