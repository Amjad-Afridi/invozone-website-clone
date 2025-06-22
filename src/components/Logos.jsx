import React from 'react';

const Logos = () => {
  const companies = [
    {
      name: 'Clutch',
      logo: 'Clutch',
      color: 'text-blue-600'
    },
    {
      name: 'DesignRush',
      logo: 'DESIGNRUSH',
      color: 'text-blue-600',
      hasIcon: true
    },
    {
      name: 'Trustpilot',
      logo: 'Trustpilot',
      color: 'text-green-600',
      hasIcon: true
    },
    {
      name: 'Google',
      logo: 'Google',
      color: 'text-gray-600'
    },
    {
      name: 'GoodFirms',
      logo: 'GoodFirms',
      color: 'text-blue-600',
      hasIcon: true
    }
  ];

  return (
    <div className="w-full mx-auto px-6 py-16 bg-gray-50">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 ">
        {companies.map((company, index) => (
          <div key={index} className="flex items-center gap-2">
            {company.hasIcon && (
              <div className={`w-6 h-6 ${company.color}`}>
                {company.name === 'DesignRush' && (
                  <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                )}
                {company.name === 'Trustpilot' && (
                  <div className="w-6 h-6 bg-green-600 rounded-sm flex items-center justify-center">
                    <div className="text-white text-xs font-bold">★</div>
                  </div>
                )}
                {company.name === 'GoodFirms' && (
                  <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                    <div className="text-white text-xs font-bold">G</div>
                  </div>
                )}
              </div>
            )}
            
            <span className={`text-xl md:text-2xl font-semibold ${company.color}`}>
              {company.logo}
            </span>
            
            {index < companies.length - 1 && (
              <span className="text-gray-400 text-xl ml-4">•</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;