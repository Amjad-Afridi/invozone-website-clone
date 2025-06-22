import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ContactUsButton } from './buttons/ContactUsButton';

const BusinessStagesComponent = () => {
  const stages = [
    {
      id: 'startup',
      title: "I'm A",
      subtitle: "Startup.",
      description: "Remarkable ideas often stall without the right team to bring them to life",
      buttonText: "Get Started",
      bgColor: "bg-blue-200",
      textColor: "text-blue-600",
      buttonBg: "bg-blue-600",
      decorativeShapes: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white bg-opacity-20 rounded-full transform translate-x-8 translate-y-8"></div>
          <div className="absolute bottom-16 right-16 w-20 h-20 bg-white bg-opacity-10 rounded-lg transform rotate-12"></div>
        </div>
      )
    },
    {
      id: 'enterprise',
      title: "I'm An",
      subtitle: "Enterprise.",
      description: "Scaling without the right infrastructure and expertise can lead to costly bottlenecks.",
      buttonText: "Explore More",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      buttonBg: "bg-black",
      decorativeShapes: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full transform translate-x-12 translate-y-12"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-white bg-opacity-5 rounded-full"></div>
          <div className="absolute bottom-20 right-32 w-16 h-16 bg-white bg-opacity-8 rounded-full"></div>
        </div>
      )
    },
    {
      id: 'rescue',
      title: "I Need A",
      subtitle: "Rescue.",
      description: "A messy codebase and tech debt are suffocating your progress.",
      buttonText: "Need a Fix",
      bgColor: "bg-blue-200",
      textColor: "text-blue-600",
      buttonBg: "bg-blue-600",
      decorativeShapes: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-white bg-opacity-15 rounded-full transform translate-x-10 translate-y-10"></div>
          <div className="absolute bottom-12 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute bottom-28 right-8 w-16 h-16 bg-white bg-opacity-8 rounded-lg transform -rotate-12"></div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full mx-auto px-6 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Backing Your Up At{' '}
          <span className="text-blue-600">Every Stage Of Your Progress</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          From launching startups to expanding enterprises, or recovering from setbacks, we help 
          businesses overcome every challenge on their journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={`${stage.bgColor} rounded-3xl p-8 h-96 relative overflow-hidden hover:shadow-lg transition-shadow duration-300`}
          >
            {stage.decorativeShapes}
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <h2 className={`text-2xl font-bold ${stage.textColor} mb-1`}>
                  {stage.title}
                </h2>
                <h3 className={`text-3xl font-bold ${stage.textColor}`}>
                  {stage.subtitle}
                </h3>
              </div>

              <p className={`${stage.textColor} text-lg leading-relaxed mb-8 flex-grow`}>
                {stage.description}
              </p>

              <div className="mt-auto">
                <ContactUsButton text={stage.buttonText}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessStagesComponent;