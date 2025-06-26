
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Trophy, 
  Users, 
  Calendar, 
  BarChart3, 
  FileText, 
  Camera,
  Shield,
  Globe,
  Smartphone
} from 'lucide-react';

const PlatformFeatures = () => {
  const features = [
    {
      icon: Trophy,
      title: 'League Management',
      description: 'Complete league administration tools for managing seasons, divisions, and competitions with ease.',
      color: 'text-kenya-gold-500'
    },
    {
      icon: Users,
      title: 'Team & Player Registration',
      description: 'Streamlined registration process for teams and players with digital roster management.',
      color: 'text-blue-500'
    },
    {
      icon: Calendar,
      title: 'Fixture Scheduling',
      description: 'Advanced scheduling system that handles complex fixture arrangements and venue management.',
      color: 'text-green-500'
    },
    {
      icon: BarChart3,
      title: 'Live Scores & Statistics',
      description: 'Real-time score updates and comprehensive statistics tracking for players and teams.',
      color: 'text-kenya-blue-500'
    },
    {
      icon: FileText,
      title: 'News & Announcements',
      description: 'Built-in content management system for league news, announcements, and updates.',
      color: 'text-purple-500'
    },
    {
      icon: Camera,
      title: 'Media Management',
      description: 'Upload and manage team logos, player photos, and sponsor banners with ease.',
      color: 'text-red-500'
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Role-based access control ensuring data security and proper user permissions.',
      color: 'text-gray-600'
    },
    {
      icon: Globe,
      title: 'Public League Pages',
      description: 'Beautiful public-facing pages for each league with all essential information.',
      color: 'text-indigo-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Fully responsive design that works perfectly on all devices and screen sizes.',
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-kenya-blue-800 mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage and showcase your basketball league professionally. 
            From registration to championships, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="border-0 shadow-lg card-hover animate-fade-in bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your League?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of leagues across Kenya who trust our platform to manage their competitions professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-kenya-gold-500 hover:bg-kenya-gold-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
