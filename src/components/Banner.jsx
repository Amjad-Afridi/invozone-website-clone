import React from 'react';
import { Calendar } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      <video
      src='/videos/banner.mp4' 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        autoPlay 
        loop 
        muted
        playsInline 
        poster="https://invozone-backend.s3.us-east-1.amazonaws.com/hero_section_1_53984860ed.webp"
      >
        <source 
          src="/videos/banner.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="rounded-full bg-gray-50/10 px-4 py-2 font-bold w-fit text-white leading-tight">
                  Software Development Consulting
                </h1>
                <p className="text-6xl font-bold text-white">
                  Future-Driven Innovations.
                </p>
                <p className="text-xl text-gray-300 font-light">
                  Fostering Growth For Startups, Enterprises, And Innovators.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                    <div className="absolute w-12 h-12 bg-blue-500 rounded-full opacity-30 animate-ping animation-delay-75"></div>
                    <div className="absolute w-8 h-8 bg-blue-500 rounded-full opacity-40 animate-ping animation-delay-150"></div>
                  </div>
                  
                  <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div>
                  <p className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors duration-300">
                    Book a 15 min Call
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg">
                  Get Started
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
       
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-15"></div>
      
      <div className="absolute top-20 right-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse animation-delay-300"></div>
      <div className="absolute bottom-40 left-10 w-3 h-3 bg-blue-300 rounded-full opacity-50 animate-pulse animation-delay-500"></div>
    </div>
  );
};

export default Banner;