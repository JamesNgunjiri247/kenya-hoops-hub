
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Trophy, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white rounded-full animate-bounce-gentle" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-white rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering
              <span className="block text-kenya-gold-400">Basketball</span>
              Across Kenya
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
              The premier platform for managing basketball leagues, teams, and players throughout Kenya. 
              Connect communities, showcase talent, and grow the game we love.
            </p>
            
            {/* Key Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-kenya-gold-400" />
                <span className="text-lg font-semibold">50+ Leagues</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-kenya-gold-400" />
                <span className="text-lg font-semibold">2000+ Players</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-kenya-gold-400" />
                <span className="text-lg font-semibold">Year Round</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-kenya-gold-500 hover:bg-kenya-gold-600 text-white text-lg px-8 py-3 group"
              >
                Start Your League
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-kenya-blue-700 text-lg px-8 py-3"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-kenya-blue-800 font-bold text-lg">Nairobi Premier League</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Thunder Hawks</span>
                      <span className="text-2xl font-bold text-kenya-blue-600">98</span>
                    </div>
                    <div className="text-center text-gray-500 font-medium">VS</div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Lightning Bolts</span>
                      <span className="text-2xl font-bold text-kenya-blue-600">94</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="bg-kenya-gold-100 text-kenya-gold-800 px-4 py-2 rounded-full text-sm font-medium">
                      Game Completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg animate-bounce-gentle">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Live Scores</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-kenya-gold-500" />
                  <span className="text-sm font-medium text-gray-700">League Standings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
