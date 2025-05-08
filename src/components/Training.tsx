
import React from 'react';
import KnightLogo from './KnightLogo';
import { Button } from '@/components/ui/button';
import { Users, User, Monitor, Trophy, Clock, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Training = () => {
  const trainingPrograms = [
    {
      title: "One-on-One Coaching",
      description: "Personalized training sessions tailored to your specific needs and goals. Develop strategies, analyze games, and receive expert guidance.",
      price: "$120",
      duration: "Per hour",
      icon: <User className="h-6 w-6" />,
      popular: true,
    },
    {
      title: "Group Masterclasses",
      description: "Small group sessions focused on specific aspects of chess. Learn alongside peers and benefit from collaborative problem-solving.",
      price: "$80",
      duration: "Per session",
      icon: <Users className="h-6 w-6" />,
      popular: false,
    },
    {
      title: "Online Training",
      description: "Remote coaching through video conferencing with shared digital board. Flexible scheduling for students worldwide.",
      price: "$90",
      duration: "Per hour",
      icon: <Monitor className="h-6 w-6" />,
      popular: false,
    },
  ];
  
  return (
    <section id="training" className="py-20 bg-chess-dark text-white">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <KnightLogo size={32} className="fill-white" />
          <h2 className="text-3xl font-bold">Training Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <Card 
              key={index} 
              className={`bg-chess-dark text-white border ${program.popular ? 'border-chess-knight-red' : 'border-gray-700'} relative overflow-hidden`}
            >
              {program.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-chess-knight-red text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-full ${program.popular ? 'bg-chess-knight-red' : 'bg-gray-700'}`}>
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                <div className="mt-6">
                  <span className="text-3xl font-bold">{program.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{program.duration}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <Button 
                  className={`w-full ${program.popular ? 'bg-chess-knight-red hover:bg-chess-knight-red/90' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Training Methodology</h3>
            <p className="text-gray-300 mb-6">
              My training approach is comprehensive and individually tailored, focusing on all aspects of chess mastery:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-chess-knight-red/20 rounded-full p-2 h-fit">
                  <BookOpen className="h-5 w-5 text-chess-knight-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Opening Repertoire Development</h4>
                  <p className="text-gray-400">
                    Build a personalized opening repertoire that suits your playing style and strengths.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-chess-knight-red/20 rounded-full p-2 h-fit">
                  <Clock className="h-5 w-5 text-chess-knight-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Middlegame Strategy & Tactics</h4>
                  <p className="text-gray-400">
                    Learn to identify strategic patterns and tactical opportunities that lead to advantageous positions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-chess-knight-red/20 rounded-full p-2 h-fit">
                  <Trophy className="h-5 w-5 text-chess-knight-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Endgame Mastery</h4>
                  <p className="text-gray-400">
                    Develop technical precision and theoretical knowledge to convert advantages into wins.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-chess-knight-red/10 p-8 rounded-lg border border-chess-knight-red/20">
            <h3 className="text-2xl font-semibold mb-6">Testimonials</h3>
            
            <div className="space-y-6">
              <blockquote className="border-l-2 border-chess-knight-red pl-4 italic">
                "Training with Samion transformed my understanding of positional play. His methods helped me gain over 300 rating points in just one year."
                <footer className="text-gray-400 mt-2 not-italic">
                  — Michael K., National Master
                </footer>
              </blockquote>
              
              <blockquote className="border-l-2 border-chess-knight-red pl-4 italic">
                "Grandmaster Magnus has an incredible ability to explain complex concepts in accessible ways. His endgame training sessions were revelatory."
                <footer className="text-gray-400 mt-2 not-italic">
                  — Sarah L., International Master
                </footer>
              </blockquote>
              
              <blockquote className="border-l-2 border-chess-knight-red pl-4 italic">
                "As a beginner, I was intimidated to train with a Grandmaster, but Samion's patience and clear teaching style made chess approachable and enjoyable."
                <footer className="text-gray-400 mt-2 not-italic">
                  — David R., Club Player
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
