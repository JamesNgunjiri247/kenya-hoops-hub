
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2,
  Eye,
  Calendar,
  User,
  Search
} from 'lucide-react';

const NewsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Thunder Hawks Dominate Season Opener',
      summary: 'The defending champions started their title defense with a convincing 98-94 victory over Lightning Bolts...',
      author: 'Admin',
      date: '2024-01-15',
      status: 'Published',
      views: 1250,
      category: 'Game Recap'
    },
    {
      id: 2,
      title: 'New Youth Development Program Announced',
      summary: 'Kenya Hoops Hub is excited to announce a comprehensive youth development program aimed at nurturing...',
      author: 'Admin',
      date: '2024-01-12',
      status: 'Published',
      views: 890,
      category: 'Announcement'
    },
    {
      id: 3,
      title: 'Season 2024 Schedule Released',
      summary: 'The complete fixture list for the 2024 season has been released, featuring 120 games across 15 weeks...',
      author: 'Admin',
      date: '2024-01-10',
      status: 'Draft',
      views: 0,
      category: 'Schedule'
    },
    {
      id: 4,
      title: 'Player of the Month: Kevin Ochieng',
      summary: 'Thunder Hawks point guard Kevin Ochieng has been named Player of the Month for his outstanding...',
      author: 'Admin',
      date: '2024-01-08',
      status: 'Published',
      views: 2100,
      category: 'Awards'
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-kenya-blue-800">News Management</h2>
          <p className="text-gray-600">Create and manage league news and announcements</p>
        </div>
        <Button className="bg-kenya-blue-600 hover:bg-kenya-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Article
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter by Status</Button>
            <Button variant="outline">Filter by Category</Button>
          </div>
        </CardContent>
      </Card>

      {/* Articles List */}
      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <Card key={article.id} className="shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-12 gap-4">
                {/* Article Info */}
                <div className="md:col-span-7">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <Badge className={getStatusColor(article.status)}>
                      {article.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="md:col-span-2 text-center">
                  <div className="text-3xl font-bold text-kenya-blue-600 mb-1">
                    {article.views}
                  </div>
                  <p className="text-sm text-gray-600">Views</p>
                </div>

                {/* Actions */}
                <div className="md:col-span-3 flex items-center justify-end space-x-2">
                  {article.status === 'Published' && (
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-kenya-blue-600 mb-2">24</div>
            <p className="text-sm text-gray-600">Total Articles</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">18</div>
            <p className="text-sm text-gray-600">Published</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">4</div>
            <p className="text-sm text-gray-600">Drafts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15.2K</div>
            <p className="text-sm text-gray-600">Total Views</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Create */}
      <Card className="border-dashed border-2 border-gray-300">
        <CardContent className="p-8 text-center">
          <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Create New Article</h3>
          <p className="text-gray-600 mb-4">
            Share news, updates, and announcements with your league community
          </p>
          <Button className="bg-kenya-blue-600 hover:bg-kenya-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Start Writing
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsManagement;
