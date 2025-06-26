
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  Filter,
  User
} from 'lucide-react';

const PlayersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const players = [
    {
      id: 1,
      name: 'Kevin Ochieng',
      team: 'Thunder Hawks',
      position: 'Point Guard',
      jerseyNumber: 23,
      photo: '👤',
      points: 18.5,
      rebounds: 4.2,
      assists: 7.8,
      status: 'Active'
    },
    {
      id: 2,
      name: 'John Kamau',
      team: 'Lightning Bolts',
      position: 'Center',
      jerseyNumber: 34,
      photo: '👤',
      points: 22.1,
      rebounds: 12.3,
      assists: 2.1,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Michael Wanjiku',
      team: 'Storm Eagles',
      position: 'Small Forward',
      jerseyNumber: 15,
      photo: '👤',
      points: 16.8,
      rebounds: 6.5,
      assists: 4.7,
      status: 'Active'
    },
    {
      id: 4,
      name: 'David Mutua',
      team: 'Fire Warriors',
      position: 'Shooting Guard',
      jerseyNumber: 7,
      photo: '👤',
      points: 14.2,
      rebounds: 3.8,
      assists: 5.1,
      status: 'Injured'
    }
  ];

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-kenya-blue-800">Players Management</h2>
          <p className="text-gray-600">Manage all registered players</p>
        </div>
        <Button className="bg-kenya-blue-600 hover:bg-kenya-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Player
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search players, teams, or positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter by Team
            </Button>
            <Button variant="outline">
              Filter by Position
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Players Table/Grid */}
      <div className="grid gap-4">
        {filteredPlayers.map((player) => (
          <Card key={player.id} className="shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-6 gap-4 items-center">
                {/* Player Info */}
                <div className="md:col-span-2 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                    {player.photo}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{player.name}</h3>
                    <p className="text-sm text-gray-600">{player.team}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        #{player.jerseyNumber}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {player.position}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="md:col-span-3 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-kenya-blue-600">{player.points}</p>
                    <p className="text-xs text-gray-600">PPG</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">{player.rebounds}</p>
                    <p className="text-xs text-gray-600">REB</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">{player.assists}</p>
                    <p className="text-xs text-gray-600">AST</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="md:col-span-1 flex items-center justify-end space-x-2">
                  <Badge variant={player.status === 'Active' ? 'default' : 'destructive'} className="mb-2">
                    {player.status}
                  </Badge>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-kenya-blue-600 mb-2">156</div>
            <p className="text-sm text-gray-600">Total Players</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">142</div>
            <p className="text-sm text-gray-600">Active Players</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
            <p className="text-sm text-gray-600">Injured</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">6</div>
            <p className="text-sm text-gray-600">Suspended</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlayersManagement;
