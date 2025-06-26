
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Trophy } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Leagues', href: '#leagues' },
    { name: 'News', href: '#news' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-kenya-blue-600 to-kenya-gold-500 p-2 rounded-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-kenya-blue-800">Kenya</span>
              <span className="text-sm text-kenya-gold-600 -mt-1">Hoops Hub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-kenya-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-kenya-blue-600 text-kenya-blue-600 hover:bg-kenya-blue-50">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700 hover:from-kenya-blue-700 hover:to-kenya-blue-800">
              Register League
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-kenya-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-kenya-blue-600 text-kenya-blue-600">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700">
                  Register League
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
