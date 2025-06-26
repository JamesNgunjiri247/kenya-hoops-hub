
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Trophy, ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeagueRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    leagueName: '',
    location: '',
    season: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    website: '',
    description: '',
    logo: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Registration Successful!",
      description: "Your league has been registered. You'll receive a confirmation email shortly.",
    });
    console.log('League registration data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-kenya-blue-600 to-kenya-gold-500 p-3 rounded-full">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-kenya-blue-800 mb-2">
              Register Your League
            </h1>
            <p className="text-xl text-gray-600">
              Join Kenya's premier basketball league management platform
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-kenya-blue-800">
              League Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* League Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="leagueName">League Name *</Label>
                  <Input
                    id="leagueName"
                    value={formData.leagueName}
                    onChange={(e) => handleInputChange('leagueName', e.target.value)}
                    placeholder="e.g., Nairobi Premier League"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Select onValueChange={(value) => handleInputChange('location', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nairobi">Nairobi</SelectItem>
                      <SelectItem value="mombasa">Mombasa</SelectItem>
                      <SelectItem value="kisumu">Kisumu</SelectItem>
                      <SelectItem value="nakuru">Nakuru</SelectItem>
                      <SelectItem value="eldoret">Eldoret</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="season">Season *</Label>
                <Input
                  id="season"
                  value={formData.season}
                  onChange={(e) => handleInputChange('season', e.target.value)}
                  placeholder="e.g., 2024 Season"
                  required
                />
              </div>

              {/* League Logo Upload */}
              <div className="space-y-2">
                <Label>League Logo</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-kenya-blue-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      {formData.logo ? formData.logo.name : 'Click to upload league logo'}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                  </label>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-kenya-blue-800">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="League Administrator Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      placeholder="admin@league.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input
                      id="contactPhone"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                      placeholder="+254 700 123 456"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://www.yourleague.com"
                    />
                  </div>
                </div>
              </div>

              {/* League Description */}
              <div className="space-y-2">
                <Label htmlFor="description">League Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your league, its mission, and what makes it unique..."
                  rows={4}
                  required
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" required className="rounded border-gray-300" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <a href="#" className="text-kenya-blue-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-kenya-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700 hover:from-kenya-blue-700 hover:to-kenya-blue-800 text-lg py-3"
              >
                <Check className="h-5 w-5 mr-2" />
                Register League
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <div className="bg-kenya-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-kenya-gold-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Professional Management</h3>
            <p className="text-gray-600">Complete league administration tools</p>
          </Card>
          <Card className="text-center p-6">
            <div className="bg-kenya-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Mobile Friendly</h3>
            <p className="text-gray-600">Access from any device, anywhere</p>
          </Card>
          <Card className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🆓</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Free to Start</h3>
            <p className="text-gray-600">No setup fees, pay as you grow</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LeagueRegistration;
