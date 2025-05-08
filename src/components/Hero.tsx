
import React from 'react';
import { Button } from '@/components/ui/button';
import KnightLogo from './KnightLogo';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative overflow-hidden bg-chess-dark text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-5">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isWhite = (row + col) % 2 === 0;
          
          return (
            <div 
              key={i} 
              className={`${isWhite ? 'bg-white' : 'bg-transparent'}`}
            />
          );
        })}
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between py-20 md:py-32">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="mb-6 flex items-center">
            <KnightLogo size={60} />
            <div className="h-1 flex-grow ml-4 bg-chess-knight-red"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')} <br />
            <span className="text-chess-knight-red">Samion Magnus</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-chess-knight-red hover:bg-chess-knight-red/90 text-white">
              {t('hero.bookTraining')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              {t('hero.viewTournaments')}
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 relative">
          <div className="aspect-square bg-chess-knight-red/20 rounded-full backdrop-blur-sm p-4">
            <img
              src="public/lovable-uploads/7f41f1b4-7696-42eb-a509-c470c80a7e3b.png"
              alt="Chess Grandmaster"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-chess-knight-red rounded-full p-3">
            <KnightLogo size={40} className="fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
