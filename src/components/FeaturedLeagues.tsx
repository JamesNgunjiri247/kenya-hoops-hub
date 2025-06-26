
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar, Trophy, ArrowRight } from 'lucide-react';

const FeaturedLeagues = () => {
  const leagues = [
    {
      id: 1,
      name: 'Nairobi Premier League',
      description: 'The premier basketball competition in Kenya\'s capital city, featuring the best teams from across Nairobi.',
      location: 'Nairobi',
      teams: 12,
      season: '2024 Season',
      status: 'Active',
      logo: '🏆',
      bgColor: 'from-kenya-blue-500 to-kenya-blue-600'
    },
    {
      id: 2,
      name: 'Mombasa Coastal League',
      description: 'Bringing together talented teams from Kenya\'s beautiful coastal region for competitive basketball.',
      location: 'Mombasa',
      teams: 8,
      season: '2024 Season',
      status: 'Registration Open',
      logo: '🌊',
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Kisumu Lakers Championship',
      description: 'A dynamic league showcasing the basketball talent from the lakeside city of Kisumu.',
      location: 'Kisumu',
      teams: 10,
      season: '2024 Season',
      status: 'Starting Soon',
      logo: '⛵',
      bgColor: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="leagues" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-kenya-blue-800 mb-4">
            Featured Leagues
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting basketball leagues across Kenya. Join the action or follow your favorite teams 
            as they compete for glory in professionally managed competitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leagues.map((league, index) => (
            <Card 
              key={league.id} 
              className="overflow-hidden card-hover border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* League Header */}
              <div className={`bg-gradient-to-r ${league.bgColor} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{league.logo}</div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">{league.status}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{league.name}</h3>
                <p className="text-white/90 text-sm">{league.description}</p>
              </div>

              <CardContent className="p-6">
                {/* League Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="h-4 w-4 text-kenya-gold-500" />
                    <span>{league.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Users className="h-4 w-4 text-kenya-gold-500" />
                    <span>{league.teams} Teams</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="h-4 w-4 text-kenya-gold-500" />
                    <span>{league.season}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-kenya-blue-600 hover:bg-kenya-blue-700 group">
                    View League
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-kenya-gold-500 text-kenya-gold-600 hover:bg-kenya-gold-50">
                    <Trophy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Leagues Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-kenya-blue-600 text-kenya-blue-600 hover:bg-kenya-blue-50"
          >
            View All Leagues
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLeagues;
