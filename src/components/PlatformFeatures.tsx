
import React from 'react';
import { Trophy, Users, Calendar, BarChart3, User, Newspaper, Star, Settings } from 'lucide-react';

const PlatformFeatures = () => {
  const features = [
    {
      icon: Trophy,
      title: 'League Management',
      description: 'Create and manage basketball leagues with comprehensive admin tools',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Users,
      title: 'Team Registration',
      description: 'Easy team and player registration with roster management',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Calendar,
      title: 'Fixtures & Scheduling',
      description: 'Automated fixture generation and match scheduling system',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: BarChart3,
      title: 'Live Scores & Stats',
      description: 'Real-time score updates and comprehensive statistics tracking',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: User,
      title: 'Officials Management',
      description: 'Manage referees, scorekeepers and other game officials',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Newspaper,
      title: 'News & Updates',
      description: 'Share league news, announcements and match reports',
      color: 'bg-cyan-50 text-cyan-600',
    },
    {
      icon: Star,
      title: 'Standings & Rankings',
      description: 'Automatic league tables and team performance rankings',
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      icon: Settings,
      title: 'Admin Dashboard',
      description: 'Comprehensive control panel for league administrators',
      color: 'bg-gray-50 text-gray-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run professional basketball leagues in Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-kenya-blue-700 hover:to-kenya-blue-800 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
