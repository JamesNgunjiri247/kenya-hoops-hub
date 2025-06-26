
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedLeagues from '../components/FeaturedLeagues';
import LatestNews from '../components/LatestNews';
import SponsorCarousel from '../components/SponsorCarousel';
import PlatformFeatures from '../components/PlatformFeatures';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturedLeagues />
      <LatestNews />
      <PlatformFeatures />
      <SponsorCarousel />
      <Footer />
    </div>
  );
};

export default Index;
