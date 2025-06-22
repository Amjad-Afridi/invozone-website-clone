import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';

export default function IndustriesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      id: 1,
      title: 'Healthcare',
      bgImage: '/images/card.webp',
      items: [
        'Telemedicine Platforms',
        'Healthcare CRM',
        'Medical Billing Applications',
        'Patient Portals'
      ]
    },
    {
      id: 2,
      title: 'Fintech',
      bgImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      items: [
        'Payment Gateways',
        'Digital Banking',
        'Lending Platforms',
        'Personal Finance Management'
      ]
    },
    {
      id: 3,
      title: 'Food & Grocery',
      bgImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      items: [
        'Grocery Delivery Apps',
        'Meal Kit Delivery Services',
        'Recipe And Cooking Apps',
        'Food Waste Management Apps'
      ]
    },
    {
      id: 4,
      title: 'E-commerce',
      bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      items: [
        'Social Commerce',
        'Subscription-Based E-commerce',
        'Marketplace Platforms',
        'Digital Goods E-commerce'
      ]
    },
    {
      id: 5,
      title: 'Education',
      bgImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      items: [
        'Learning Management Systems',
        'Online Course Platforms',
        'Educational Games',
        'Virtual Classroom Solutions'
      ]
    },
    {
      id: 6,
      title: 'Travel & Tourism',
      bgImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      items: [
        'Booking Platforms',
        'Travel Planning Apps',
        'Hotel Management Systems',
        'Tour Guide Applications'
      ]
    },
    {
      id: 7,
      title: 'Real Estate',
      bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      items: [
        'Property Management Systems',
        'Real Estate Marketplaces',
        'Virtual Property Tours',
        'Investment Analysis Tools'
      ]
    },
    {
      id: 8,
      title: 'Automotive',
      bgImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      items: [
        'Car Rental Platforms',
        'Vehicle Maintenance Apps',
        'Fleet Management Systems',
        'Auto Insurance Applications'
      ]
    }
  ];

  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(industries.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return industries.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <div className="w-full  mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-12">
        <div className=" font-bold text-3xl text-gray-900">
         Expertise in Software Development Across Multiple{' '}
          <span className="text-blue-500">Industries</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {getCurrentCards().map((industry) => (
          <div
            key={industry.id}
            className="relative h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setHoveredCard(industry.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                hoveredCard === industry.id ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${industry.bgImage})` }}
            />
            
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                hoveredCard === industry.id
                  ? 'bg-black bg-opacity-50'
                  : 'bg-gray-100'
              }`}
            />

            <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
              <div>
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                  hoveredCard === industry.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {industry.title}
                </h3>
                
                <ul className="space-y-3">
                  {industry.items.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center text-sm transition-colors duration-300 ${
                        hoveredCard === industry.id ? 'text-gray-200' : 'text-gray-600'
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full mr-3 ${
                        hoveredCard === industry.id ? 'bg-white' : 'bg-gray-400'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`flex items-center justify-between px-4 py-3 rounded-full border transition-all duration-300 ${
                hoveredCard === industry.id
                  ? 'border-white text-white hover:bg-white hover:text-gray-900'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-200'
              }`}>
                <span className="text-sm font-medium">Explore More</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  hoveredCard === industry.id ? 'bg-blue-500' : 'bg-blue-500'
                }`}>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}