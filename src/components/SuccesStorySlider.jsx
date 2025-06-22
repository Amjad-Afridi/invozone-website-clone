import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStoriesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      image: '/images/success-story-1.webp', 
      companyLogo: 'easyfill.ai',
      name: 'David Smith',
      title: 'CEO & Co-Founder - Easyfill',
      testimonial: "InvoZone has been a game-changer for us, offering fresh ideas and genuine support. This wasn't our first outsourcing experience, but it has definitely been the smoothest.",
      caseStudyLink: '#'
    },
    {
      id: 2,
      image: '/images/success-story-2.webp', 
      companyLogo: 'Kinde',
      name: 'Oliver Wolff',
      title: 'Kinde Product Manager',
      testimonial: "We partnered with InvoZone to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates, even with minor estimate shifts, allowed us to adapt efficiently. Their proactive approach kept us informed, and the code quality exceeded our expectations, reducing extensive testing. Overall, InvoZone's clear communication and high-quality delivery made them a standout partner, ensuring smooth collaboration throughout the project.",
      caseStudyLink: '#'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 3500); 

    return () => clearInterval(interval);
  }, [stories.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentSlide];

  return (
    <div className="w-full mx-auto px-6 py-16 bg-white">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Partner's <span className="text-blue-600">Success</span> Stories
        </h2>
        
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={currentStory.image}
              alt={currentStory.name}
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
            
            <div className="absolute inset-0 left-8 top-[80%] justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                <Play size={20} fill="white" />
                Play Video
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-block">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold text-lg">
              {currentStory.companyLogo}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {currentStory.name.split(' ')[0]} <span className="text-blue-600">{currentStory.name.split(' ')[1]}</span>
            </h3>
            <p className="text-gray-600 text-lg">{currentStory.title}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-700 leading-relaxed italic text-lg">
              "{currentStory.testimonial}"
            </p>
          </div>

          <div>
            <a
              href={currentStory.caseStudyLink}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View Case Study
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 gap-3">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesSlider;