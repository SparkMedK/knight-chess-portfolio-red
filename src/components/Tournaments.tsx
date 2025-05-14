
import React from 'react';
import KnightLogo from './KnightLogo';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Tournaments = () => {
  const upcomingTournaments = [
    {
      title: "Stockholm Chess Open",
      date: "June 10-15, 2025",
      location: "Stockholm, Sweden",
      participants: "120+ players",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b",
    },
    {
      title: "International Masters Challenge",
      date: "July 22-28, 2025",
      location: "Berlin, Germany",
      participants: "64 invited players",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461",
    },
    {
      title: "European Chess Federation Cup",
      date: "August 15-22, 2025",
      location: "Prague, Czech Republic",
      participants: "32 national teams",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b",
    },
  ];
  
  const handleViewTournament = (tournamentTitle: string) => {
    console.log(`Viewing tournament: ${tournamentTitle}`);
    // In a real app, this would navigate to a tournament details page
    alert(`Tournament details for: ${tournamentTitle}`);
  };
  
  return (
    <section id="tournaments" className="py-20 bg-chess-light">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <KnightLogo size={32} />
          <h2 className="text-3xl font-bold">Upcoming Tournaments</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {upcomingTournaments.map((tournament, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${tournament.image})` }}
              >
                <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">{tournament.title}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-chess-knight-red" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-chess-knight-red" />
                    <span>{tournament.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-chess-knight-red" />
                    <span>{tournament.participants}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <Button 
                    variant="ghost" 
                    className="flex-1 text-chess-knight-red hover:text-chess-knight-red/80 hover:bg-chess-knight-red/5"
                    onClick={() => handleViewTournament(tournament.title)}
                  >
                    <span>Tournament Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                  
                  <Button 
                    className="bg-chess-knight-red hover:bg-chess-knight-red/90 text-white"
                    onClick={() => handleViewTournament(tournament.title)}
                  >
                    <Eye className="mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Tournament Preparation Services</h3>
              <p className="text-gray-600">
                Gain a competitive edge with specialized training sessions designed to prepare you for upcoming tournaments.
                Analysis of potential opponents, opening preparation, and mental conditioning.
              </p>
            </div>
            <Button className="bg-chess-knight-red hover:bg-chess-knight-red/90 text-white whitespace-nowrap">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
