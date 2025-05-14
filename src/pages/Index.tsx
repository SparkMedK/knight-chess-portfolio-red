
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Training from '@/components/Training';
import Tournaments from '@/components/Tournaments';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Training />
        <Tournaments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
