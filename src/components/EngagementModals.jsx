import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function EngagementModels() {
  const [activeTab, setActiveTab] = useState('Product Development');

  const tabContent = {
    'Product Development': {
      title: 'Product Development',
      description: 'Transforming your ideas into ready-to-launch products.',
      features: [
        'Early Growth Stage or Stealth Startup.',
        'Product Development Roadmap',
        'MVP Development',
        'Prototypes / POC'
      ]
    },
    'Managed IT Systems': {
      title: 'Managed IT Systems',
      description: 'Comprehensive IT infrastructure management and support services.',
      features: [
        'Infrastructure Management',
        'Cloud Solutions & Migration',
        'Security & Compliance',
        'Monitoring & Maintenance'
      ]
    },
    'Team Augmentation': {
      title: 'Team Augmentation',
      description: 'Scale your team with skilled professionals to accelerate your projects.',
      features: [
        'Skilled Developer Resources',
        'Flexible Engagement Models',
        'Quick Onboarding Process',
        'Dedicated Team Integration'
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="w-full mx-auto px-8 py-16 bg-white min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Engagement <span className="text-blue-600">Models</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from flexible engagement models tailored to your needs, ensuring 
          seamless collaboration with time & material or dedicated teams.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 bg-gray-50 rounded-2xl shadow-lg py-8">

      <div className="flex  mb-8">
        <div className="flex justify-between w-[70%] mx-auto  px-4 py-2 ">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium  transition-colors ${
                'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === tab ? {
                // backgroundColor: '#2563eb',
                borderBottom: '4px solid #1d4ed8'
              } : {}}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h2>
            <p className="text-gray-600 mb-8 text-lg">
              {currentContent.description}
            </p>

            <div className="space-y-4 mb-8">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#2563eb'}}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
              <span className="mr-2">View Details</span>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#2563eb'}}>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="w-80 h-64">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-contain"
              >
                <source src="/videos/gif-1.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className="fixed bottom-8 right-8">
        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-colors" style={{backgroundColor: '#2563eb'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'} onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}>
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 rounded-full" style={{backgroundColor: '#2563eb'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}