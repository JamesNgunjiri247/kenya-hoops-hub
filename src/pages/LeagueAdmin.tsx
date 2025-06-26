
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Users, 
  Calendar, 
  FileText, 
  Settings,
  Plus,
  BarChart3,
  Image
} from 'lucide-react';
import AdminHeader from '../components/AdminHeader';
import TeamsManagement from '../components/admin/TeamsManagement';
import PlayersManagement from '../components/admin/PlayersManagement';
import FixturesManagement from '../components/admin/FixturesManagement';
import NewsManagement from '../components/admin/NewsManagement';

const LeagueAdmin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Teams', value: '12', icon: Users, color: 'text-blue-600' },
    { title: 'Registered Players', value: '156', icon: Trophy, color: 'text-kenya-gold-600' },
    { title: 'Fixtures Scheduled', value: '24', icon: Calendar, color: 'text-green-600' },
    { title: 'News Articles', value: '8', icon: FileText, color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-kenya-blue-800 mb-2">
            Nairobi Premier League
          </h1>
          <p className="text-gray-600">
            Manage your league with ease using our comprehensive dashboard
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
            <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                        <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="font-medium">Thunder Hawks vs Lightning Bolts</p>
                        <p className="text-sm text-gray-600">Game completed - 98:94</p>
                      </div>
                      <span className="text-sm text-gray-500">2h ago</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="font-medium">New player registered</p>
                        <p className="text-sm text-gray-600">John Kamau joined Storm Eagles</p>
                      </div>
                      <span className="text-sm text-gray-500">4h ago</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="font-medium">Fixture updated</p>
                        <p className="text-sm text-gray-600">Warriors vs Panthers rescheduled</p>
                      </div>
                      <span className="text-sm text-gray-500">1d ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-kenya-blue-600 hover:bg-kenya-blue-700 h-16 flex-col">
                      <Plus className="h-5 w-5 mb-1" />
                      Add Team
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <Calendar className="h-5 w-5 mb-1" />
                      Schedule Game
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <FileText className="h-5 w-5 mb-1" />
                      Post News
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <BarChart3 className="h-5 w-5 mb-1" />
                      View Stats
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="teams">
            <TeamsManagement />
          </TabsContent>

          <TabsContent value="players">
            <PlayersManagement />
          </TabsContent>

          <TabsContent value="fixtures">
            <FixturesManagement />
          </TabsContent>

          <TabsContent value="news">
            <NewsManagement />
          </TabsContent>

          <TabsContent value="settings">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>League Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">League settings panel will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LeagueAdmin;
