
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      id: 1,
      title: 'Nairobi Thunder Hawks Clinch Championship Title',
      summary: 'In a thrilling finale, the Thunder Hawks defeated the Lightning Bolts 98-94 to claim their first championship title in three years.',
      image: '🏆',
      date: '2024-01-15',
      author: 'Sports Desk',
      readTime: '3 min read',
      category: 'Championship'
    },
    {
      id: 2,
      title: 'New Youth Development Program Launches',
      summary: 'Kenya Hoops Hub announces a comprehensive youth development program aimed at nurturing young basketball talent across the country.',
      image: '👥',
      date: '2024-01-12',
      author: 'Program Director',
      readTime: '5 min read',
      category: 'Development'
    },
    {
      id: 3,
      title: 'Mombasa Coastal League Welcomes Two New Teams',
      summary: 'The Coastal League expands with the addition of Diani Dolphins and Malindi Marlins, bringing fresh competition to the seaside.',
      image: '🌊',
      date: '2024-01-10',
      author: 'League Official',
      readTime: '2 min read',
      category: 'League News'
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-kenya-blue-800 mb-4">
            Latest News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings in Kenyan basketball. From championship victories 
            to league expansions, we cover all the action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card 
              key={article.id} 
              className="overflow-hidden card-hover border-0 shadow-lg animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Article Image */}
              <div className="bg-gradient-to-br from-kenya-blue-500 to-kenya-blue-600 h-48 flex items-center justify-center">
                <div className="text-6xl">{article.image}</div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="bg-kenya-gold-100 text-kenya-gold-800 px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                {/* Article Summary */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.summary}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Date and Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-kenya-blue-600 hover:text-kenya-blue-700 hover:bg-kenya-blue-50 p-0 h-auto font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700 hover:from-kenya-blue-700 hover:to-kenya-blue-800"
          >
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
