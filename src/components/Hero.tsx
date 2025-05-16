
import React from 'react';
import { Button } from '@/components/ui/button';
import KnightLogo from './KnightLogo';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
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
            <div className="h-1 flex-grow ml-4 bg-chess-knight-red"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Grand Master <br />
            <span className="text-chess-knight-red">Samion Magnus</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            FIDE Trainer & International Chess Master with over 20 years of experience
            transforming beginners into champions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-chess-knight-red hover:bg-chess-knight-red/90 text-white">
              Book a Training
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white/10">
              View Tournaments
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 relative">
          <div className="aspect-square bg-chess-knight-red/10 rounded-full backdrop-blur-md p-4 transition-transform hover:scale-105 duration-300 shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]">
            <img
              src="/lovable-uploads/64c78768-1c03-45c2-a737-fd24bc02dcec.png"
              alt="Chess Grandmaster"
              className="w-full h-full  rounded-full ring-4 ring-chess-knight-red/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
