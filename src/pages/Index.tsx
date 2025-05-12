
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Training from '@/components/Training';
import Tournaments from '@/components/Tournaments';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';

const Index = () => {
  // Set up the initial language direction
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.lang = 'en';
    htmlElement.dir = 'ltr';
  }, []);

  return (
    <LanguageProvider>
      <SidebarProvider>
        <div className="flex flex-col min-h-screen w-full">
          <div className="hidden md:block">
            <AppSidebar />
          </div>
          <SidebarInset>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main>
                <Hero />
                <About />
                <Achievements />
                <Training />
                <Tournaments />
                <Gallery />
                <Contact />
              </main>
              <Footer />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </LanguageProvider>
  );
};

export default Index;
