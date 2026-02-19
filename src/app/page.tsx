import { AboutSection } from '@/sections/about';
import { ContactSection } from '@/sections/contact';
import { Footer } from '@/sections/footer';
import { Header } from '@/sections/header';
import { HeroSection } from '@/sections/hero';
import { ProjectsSection } from '@/sections/projects';
// import { TapeSection } from '@/sections/tape';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProjectsSection />
      {/* <TapeSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
