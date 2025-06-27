
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Trophy, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { LoginModal } from './auth/LoginModal';
import { RegisterModal } from './auth/RegisterModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Leagues', href: '#leagues' },
    { name: 'News', href: '#news' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' }
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
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
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Welcome back!</span>
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="border-kenya-blue-600 text-kenya-blue-600 hover:bg-kenya-blue-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                  <Button className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700 hover:from-kenya-blue-700 hover:to-kenya-blue-800">
                    Dashboard
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setShowLoginModal(true)}
                    className="border-kenya-blue-600 text-kenya-blue-600 hover:bg-kenya-blue-50"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button
                    onClick={() => setShowRegisterModal(true)}
                    className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700 hover:from-kenya-blue-700 hover:to-kenya-blue-800"
                  >
                    Register
                  </Button>
                </>
              )}
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
                  {user ? (
                    <>
                      <span className="text-sm text-gray-600">Welcome back!</span>
                      <Button
                        variant="outline"
                        onClick={handleSignOut}
                        className="border-kenya-blue-600 text-kenya-blue-600"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                      <Button className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700">
                        Dashboard
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        onClick={() => setShowLoginModal(true)}
                        className="border-kenya-blue-600 text-kenya-blue-600"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                      <Button
                        onClick={() => setShowRegisterModal(true)}
                        className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700"
                      >
                        Register
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
};

export default Header;
