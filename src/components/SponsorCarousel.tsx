
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SponsorCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sponsors = [
    { name: 'Safaricom', logo: '📱', website: 'https://safaricom.co.ke' },
    { name: 'KCB Bank', logo: '🏦', website: 'https://kcbgroup.com' },
    { name: 'Equity Bank', logo: '💳', website: 'https://equitybank.co.ke' },
    { name: 'Tusker', logo: '🍺', website: '#' },
    { name: 'Kenya Airways', logo: '✈️', website: 'https://kenya-airways.com' },
    { name: 'Coca-Cola', logo: '🥤', website: 'https://coca-cola.com' },
    { name: 'Nike', logo: '👟', website: 'https://nike.com' },
    { name: 'Adidas', logo: '🏃', website: 'https://adidas.com' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(sponsors.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(sponsors.length / 4)) % Math.ceil(sponsors.length / 4));
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kenya-blue-800 mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-lg text-gray-600">
            Proudly supported by leading brands across Kenya
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(sponsors.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sponsors.slice(slideIndex * 4, slideIndex * 4 + 4).map((sponsor, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer card-hover"
                        onClick={() => sponsor.website !== '#' && window.open(sponsor.website, '_blank')}
                      >
                        <div className="text-4xl mb-3">
                          {sponsor.logo}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {sponsor.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(sponsors.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-kenya-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-kenya-gold-50 to-kenya-blue-50 rounded-xl p-8 border border-kenya-gold-200">
            <h3 className="text-2xl font-bold text-kenya-blue-800 mb-4">
              Become a Sponsor
            </h3>
            <p className="text-gray-600 mb-6">
              Partner with us to support basketball development across Kenya and reach thousands of passionate fans.
            </p>
            <button className="bg-gradient-to-r from-kenya-blue-600 to-kenya-blue-700 hover:from-kenya-blue-700 hover:to-kenya-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorCarousel;
