import SiteHeader from './components/site/SiteHeader';
import SiteFooter from './components/site/SiteFooter';
import HeroSection from './components/site/sections/HeroSection';
import AboutSection from './components/site/sections/AboutSection';
import WhatWeDoSection from './components/site/sections/WhatWeDoSection';
import ProjectsSection from './components/site/sections/ProjectsSection';
import TeamSection from './components/site/sections/TeamSection';
import ContactSection from './components/site/sections/ContactSection';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <ProjectsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

export default App;
