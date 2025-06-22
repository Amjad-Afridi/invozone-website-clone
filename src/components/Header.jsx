import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ContactUsButton } from './buttons/ContactUsButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    'Product Engineering',
    'Data & Artificial Intelligence',
    'DevOps & CloudOps',
    'Emerging Technologies',
    'Blockchain & Web 3.0',
    'Hire Developers'
  ];

  const industries = [
    'Healthcare',
    'FinTech',
    'E-commerce',
    'Education',
    'Real Estate',
    'Entertainment'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Success Stories',
    'Blog',
    'Contact'
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">InvoZone</div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onMouseEnter={() => setActiveDropdown('services')}
              >
                What we do
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-200 ${
                  activeDropdown === 'services' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onMouseEnter={() => setActiveDropdown('industries')}
              >
               What we serve
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-200 ${
                  activeDropdown === 'industries' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  {industries.map((industry, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {industry}
                    </a>
                  ))}
                </div>
              </div>
            </div>

         
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onMouseEnter={() => setActiveDropdown('company')}
              >
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-200 ${
                  activeDropdown === 'company' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  {company.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          

         
          </nav>

          <ContactUsButton />

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-2 bg-gray-50 border-t">
          {/* Mobile Services */}
          <div>
            <button
              onClick={() => toggleDropdown('services')}
              className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Services
              <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-200 ${activeDropdown === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pl-4 space-y-1">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Industries */}
          <div>
            <button
              onClick={() => toggleDropdown('industries')}
              className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Industries
              <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-200 ${activeDropdown === 'industries' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pl-4 space-y-1">
                {industries.map((industry, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {industry}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Company */}
          <div>
            <button
              onClick={() => toggleDropdown('company')}
              className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Company
              <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-200 ${activeDropdown === 'company' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pl-4 space-y-1">
                {company.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Portfolio */}
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
          >
            Portfolio
          </a>

          {/* Mobile Blog */}
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
          >
            Blog
          </a>

          {/* Mobile CTA */}
          <div className="pt-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;