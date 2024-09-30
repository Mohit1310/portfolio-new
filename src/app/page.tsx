import CursorTrail from '@/components/CursorTrail';
import InteractiveBackground from '@/components/InteractiveBackground';
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
    <div>
      <Header />
      <HeroSection />
      <KonamiCode />
      <InteractiveBackground />
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
