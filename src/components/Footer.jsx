import React from 'react';
import { Phone, Mail, Star, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info & Social */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Direct Call</p>
                  <p className="text-white font-medium">+1 786 753 7752</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-white font-medium">sales@invozone.com</p>
                </div>
              </div>
            </div>

            {/* 5 Star Reviews */}
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-medium">5 Star Reviews</span>
            </div>

            {/* Review Platform Icons */}
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <span className="text-white font-bold text-lg">G</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-medium mb-4">Our Socials</h3>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-lg">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Development Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DevOps Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Software Quality Assurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI UX Design Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Product Development Services</a></li>
            </ul>
          </div>

          {/* Hire Developers */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-lg">Hire Developers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Elixir Developer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">MERN Stack Developer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Node.Js Developer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Python Developer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ROR Developer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Flutter Developer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">React.Js Developer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SaaS Developer</a></li>
            </ul>
          </div>

          {/* Industry */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-lg">Industry</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fintech</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ecommerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">On-Demand</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Real Estate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Food & Grocery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Education</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-lg">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  Careers
                  <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">4</span>
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* USA Office */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-6 bg-red-500 rounded-sm flex items-center justify-center">
                <div className="w-6 h-4 bg-blue-600 rounded-sm relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">130 NW 77th Ave Pembroke Pines,</p>
                <p className="text-gray-400">Florida 33024</p>
              </div>
            </div>

            {/* Canada Office */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-6 bg-red-500 rounded-sm flex items-center justify-center relative">
                <div className="w-2 h-4 bg-white"></div>
                <div className="absolute left-2 top-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-white font-medium">220 Duncan Mill Road, Toronto,</p>
                <p className="text-gray-400">Ontario M3B 3J5</p>
              </div>
            </div>

            {/* Malaysia Office */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-6 bg-blue-600 rounded-sm relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-red-500"></div>
                <div className="absolute top-0 left-0 w-3 h-3 bg-blue-900 flex items-center justify-center">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">Unit 10, Jalan Kerinchi, Bangsar</p>
                <p className="text-gray-400">South, 59200 Kuala Lumpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 bg-blue-800  w-[80%] mx-auto">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 All Rights Reserved By Invozone</p>
            <div className="flex flex-wrap items-center space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">IMS Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;