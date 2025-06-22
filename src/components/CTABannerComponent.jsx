import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTABannerComponent = () => {
  return (
    <div className="w-full bg-white mx-auto px-6 py-8">
      <div 
        className="relative rounded-2xl overflow-hidden px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20"
        style={{
          backgroundImage: 'url(/images/banner_bg.webp)',         
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight mb-2">
              Got An Idea Or Concerns?
            </h2>
            <p className="text-3xl  font-bold leading-tight">
              Let's Discuss.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button className="bg-black hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Explore More
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABannerComponent;