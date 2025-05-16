
import React from 'react';
import KnightLogo from './KnightLogo';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const Achievements = () => {
  const majorAchievements = [
    {
      year: '2020',
      title: 'World Chess Championship',
      position: 'Quarter Finalist',
      icon: <Trophy className="h-6 w-6" />,
    },
    {
      year: '2018',
      title: 'European Chess Championship',
      position: 'Gold Medal',
      icon: <Medal className="h-6 w-6" />,
    },
    {
      year: '2016',
      title: 'Chess Olympiad',
      position: 'Team Silver Medal',
      icon: <Award className="h-6 w-6" />,
    },
    {
      year: '2014',
      title: 'Grand Slam Masters Final',
      position: 'Winner',
      icon: <Star className="h-6 w-6" />,
    },
  ];
  
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Achievements</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Major Tournament Results</h3>
            <div className="space-y-8">
              {majorAchievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="relative pl-12 border-l-2 border-chess-knight-red pb-8"
                >
                  <div className="absolute -left-3 top-0 bg-white p-1">
                    <div className="bg-chess-knight-red rounded-full p-1.5 text-white">
                      {achievement.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{achievement.year}</span>
                  <h4 className="text-xl font-semibold">{achievement.title}</h4>
                  <p className="text-chess-knight-red font-medium">{achievement.position}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Titles & Recognition</h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-chess-knight-red rounded-full p-2 text-white">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold">FIDE Grand Master</h4>
                </div>
                <p className="text-gray-700">
                  Achieved the highest title awarded by FIDE with performance ratings consistently above 2700.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-chess-knight-red rounded-full p-2 text-white">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold">FIDE Senior Trainer</h4>
                </div>
                <p className="text-gray-700">
                  Certified by FIDE as a world-class trainer capable of coaching players at all levels including grandmasters.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-chess-knight-red rounded-full p-2 text-white">
                    <Medal className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold">National Chess Hero Award</h4>
                </div>
                <p className="text-gray-700">
                  Recognized for outstanding contributions to chess development and promoting the game nationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
