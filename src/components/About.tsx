
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import KnightLogo from './KnightLogo';

const About = () => {
  const stats = [
    { value: '2750+', label: 'FIDE Rating' },
    { value: '20+', label: 'Years Experience' },
    { value: '150+', label: 'Students Trained' },
    { value: '30+', label: 'Tournament Wins' },
  ];
  
  return (
    <section id="about" className="py-20 bg-chess-light">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">About The Grand Master</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Samion Magnus is an internationally renowned Chess Grand Master and FIDE certified trainer 
              with over two decades of experience in competitive chess. Born in Stockholm, Sweden, 
              he achieved his first international master title at the age of 16 and went on to earn 
              his Grand Master title at 22.
            </p>
            <p className="text-lg mb-6">
              Throughout his career, Samion has trained with some of the world's elite players and has developed 
              a unique teaching methodology that combines classical principles with modern strategic innovations. 
              His approach emphasizes understanding position dynamics and developing intuition rather than pure memorization.
            </p>
            <p className="text-lg">
              As a FIDE trainer, Samion has coached players of all levels - from beginners to professional competitors. 
              His students have achieved remarkable success in national and international tournaments, with many going on 
              to earn their own master titles.
            </p>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-chess-knight-red">{stat.value}</span>
                    <span className="text-sm text-gray-600 mt-2">{stat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                Philosophy
              </h3>
              <p className="italic text-gray-700">
                "Chess is not merely about moving pieces - it's about moving ideas across the board.
                My goal is to help players discover the beauty of chess thinking and apply these strategic 
                principles both on the board and in life."
              </p>
              <p className="text-right text-chess-knight-red font-semibold mt-4">- Samion Magnus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
