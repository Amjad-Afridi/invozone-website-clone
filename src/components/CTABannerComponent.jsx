import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ContactUsButton } from './buttons/ContactUsButton';

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
                            <ContactUsButton text="Explore More" className='text-white'/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABannerComponent;