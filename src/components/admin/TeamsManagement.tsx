
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  User,
  Search,
  Upload
} from 'lucide-react';

const TeamsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const teams = [
    {
      id: 1,
      name: 'Thunder Hawks',
      logo: '🦅',
      coach: 'Michael Johnson',
      players: 12,
      wins: 8,
      losses: 2,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Lightning Bolts',
      logo: '⚡',
      coach: 'Sarah Williams',
      players: 11,
      wins: 7,
      losses: 3,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Storm Eagles',
      logo: '🦅',
      coach: 'David Brown',
      players: 10,
      wins: 6,
      losses: 4,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Fire Warriors',
      logo: '🔥',
      coach: 'Lisa Davis',
      players: 9,
      wins: 5,
      losses: 5,
      status: 'Inactive'
    }
  ];

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.coach.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-kenya-blue-800">Teams Management</h2>
          <p className="text-gray-600">Manage all teams in your league</p>
        </div>
        <Button className="bg-kenya-blue-600 hover:bg-kenya-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Team
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search teams or coaches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              Filter by Status
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Teams Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <Card key={team.id} className="shadow-lg card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{team.logo}</div>
                  <div>
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                    <p className="text-sm text-gray-600">Coach: {team.coach}</p>
                  </div>
                </div>
                <Badge variant={team.status === 'Active' ? 'default' : 'secondary'}>
                  {team.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {/* Team Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center text-kenya-blue-600 mb-1">
                    <Users className="h-4 w-4" />
                  </div>
                  <p className="text-2xl font-bold">{team.players}</p>
                  <p className="text-xs text-gray-600">Players</p>
                </div>
                <div className="text-center">
                  <div className="text-green-600 mb-1">🏆</div>
                  <p className="text-2xl font-bold">{team.wins}</p>
                  <p className="text-xs text-gray-600">Wins</p>
                </div>
                <div className="text-center">
                  <div className="text-red-600 mb-1">❌</div>
                  <p className="text-2xl font-bold">{team.losses}</p>
                  <p className="text-xs text-gray-600">Losses</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <User className="h-4 w-4 mr-1" />
                  View Roster
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Team Form (Modal would be better in real app) */}
      <Card className="border-dashed border-2 border-gray-300">
        <CardContent className="p-8 text-center">
          <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Add New Team</h3>
          <p className="text-gray-600 mb-4">
            Register a new team to participate in your league
          </p>
          <Button className="bg-kenya-blue-600 hover:bg-kenya-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Register Team
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamsManagement;
