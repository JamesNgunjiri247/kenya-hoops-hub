
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Calendar,
  Clock,
  MapPin,
  Users
} from 'lucide-react';

const FixturesManagement = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const fixtures = [
    {
      id: 1,
      homeTeam: 'Thunder Hawks',
      awayTeam: 'Lightning Bolts',
      homeScore: 98,
      awayScore: 94,
      date: '2024-01-15',
      time: '19:00',
      venue: 'Nyayo Stadium',
      status: 'Completed'
    },
    {
      id: 2,
      homeTeam: 'Storm Eagles',
      awayTeam: 'Fire Warriors',
      homeScore: null,
      awayScore: null,
      date: '2024-01-20',
      time: '16:00',
      venue: 'Kasarani Indoor Arena',
      status: 'Scheduled'
    },
    {
      id: 3,
      homeTeam: 'Lightning Bolts',
      awayTeam: 'Storm Eagles',
      homeScore: 87,
      awayScore: 82,
      date: '2024-01-18',
      time: '18:30',
      venue: 'Moi International Sports Centre',
      status: 'Live'
    },
    {
      id: 4,
      homeTeam: 'Fire Warriors',
      awayTeam: 'Thunder Hawks',
      homeScore: null,
      awayScore: null,
      date: '2024-01-25',
      time: '20:00',
      venue: 'Nyayo Stadium',
      status: 'Scheduled'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Live': return 'bg-red-100 text-red-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-kenya-blue-800">Fixtures Management</h2>
          <p className="text-gray-600">Schedule and manage league fixtures</p>
        </div>
        <Button className="bg-kenya-blue-600 hover:bg-kenya-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Schedule New Fixture
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full"
              />
            </div>
            <Button variant="outline">Filter by Status</Button>
            <Button variant="outline">Filter by Team</Button>
          </div>
        </CardContent>
      </Card>

      {/* Fixtures List */}
      <div className="space-y-4">
        {fixtures.map((fixture) => (
          <Card key={fixture.id} className="shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-12 gap-4 items-center">
                {/* Date & Time */}
                <div className="md:col-span-2 text-center">
                  <div className="flex items-center justify-center text-kenya-blue-600 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                  </div>
                  <p className="font-semibold">{new Date(fixture.date).toLocaleDateString()}</p>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Clock className="h-3 w-3 mr-1" />
                    {fixture.time}
                  </div>
                </div>

                {/* Teams & Score */}
                <div className="md:col-span-6">
                  <div className="flex items-center justify-between">
                    <div className="text-right flex-1">
                      <p className="font-semibold text-lg">{fixture.homeTeam}</p>
                      <p className="text-sm text-gray-600">Home</p>
                    </div>
                    
                    <div className="mx-6 text-center">
                      {fixture.status === 'Completed' || fixture.status === 'Live' ? (
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl font-bold text-kenya-blue-600">
                            {fixture.homeScore}
                          </span>
                          <span className="text-gray-400">-</span>
                          <span className="text-3xl font-bold text-kenya-blue-600">
                            {fixture.awayScore}
                          </span>
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-gray-400">VS</div>
                      )}
                    </div>

                    <div className="text-left flex-1">
                      <p className="font-semibold text-lg">{fixture.awayTeam}</p>
                      <p className="text-sm text-gray-600">Away</p>
                    </div>
                  </div>
                </div>

                {/* Venue & Status */}
                <div className="md:col-span-3 text-center">
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {fixture.venue}
                  </div>
                  <Badge className={getStatusColor(fixture.status)}>
                    {fixture.status}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="md:col-span-1 flex items-center justify-center space-x-2">
                  {fixture.status === 'Scheduled' && (
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                  {fixture.status === 'Live' && (
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Live Score
                    </Button>
                  )}
                  {fixture.status === 'Completed' && (
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-kenya-blue-600 mb-2">24</div>
            <p className="text-sm text-gray-600">Total Fixtures</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">18</div>
            <p className="text-sm text-gray-600">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <p className="text-sm text-gray-600">Scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">1</div>
            <p className="text-sm text-gray-600">Live Now</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FixturesManagement;
