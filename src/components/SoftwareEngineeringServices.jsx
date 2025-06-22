import React from 'react';
import { Settings, Brain, Users, GitBranch, Database, Box } from 'lucide-react';

const SoftwareDevelopmentServices = () => {
  const services = [
    {
      id: 'product-engineering',
      title: 'Product Engineering',
      icon: Settings,
      active: true
    },
    {
      id: 'data-ai',
      title: 'Data & Artificial Intelligence',
      icon: Brain,
      active: false
    },
    {
      id: 'hire-dev',
      title: 'Hire Dev',
      icon: Users,
      active: false
    },
    {
      id: 'devops-cloud',
      title: 'DevOps & CloudOps',
      icon: GitBranch,
      active: false
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Database,
      active: false
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web 3.0',
      icon: Box,
      active: false
    }
  ];

  const features = [
    'Discovery Workshop',
    'Web App Development',
    'Custom Software Development',
    'Mobile App Development'
  ];

  const techLogos = [
    { name: 'Laravel', color: 'bg-red-500' },
    { name: 'Swift', color: 'bg-orange-500' },
    { name: 'Unity', color: 'bg-gray-800' },
    { name: 'Kotlin', color: 'bg-blue-600' },
    { name: 'React', color: 'bg-cyan-400' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'C++', color: 'bg-blue-800' },
    { name: 'Flutter', color: 'bg-blue-400' },
    { name: 'RapidAPI', color: 'bg-red-600' },
    { name: '.NET', color: 'bg-blue-700' },
    { name: 'Go', color: 'bg-cyan-600' },
    { name: 'Angular', color: 'bg-red-700' }
  ];

  return (
    <div className="w-full mx-auto px-6 py-20 bg-white">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Software Development Services
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
            Forward Planners
          </h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          View All
          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-xs">→</span>
          </div>
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side - Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`p-6 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-lg ${
                  service.active
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className={`mb-4 ${service.active ? 'text-white' : 'text-blue-600'}`}>
                  <IconComponent size={40} />
                </div>
                <h3 className="font-semibold text-sm leading-tight">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Right Side - Product Engineering Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Product Engineering
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our Product Engineering Services cover product management, design, 
              development, DevOps, testing, security & more.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Technology Icons */}
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-3 mb-6">
              {techLogos.map((tech, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 ${tech.color} rounded-lg flex items-center justify-center shadow-sm`}
                >
                  <div className="w-6 h-6 bg-white bg-opacity-90 rounded"></div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              View More
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-xs">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentServices;