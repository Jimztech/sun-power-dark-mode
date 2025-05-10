
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-solar-dark-blue py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-solar-green font-bold text-xl">SolarPower</span>
              <span className="text-white font-medium ml-1">Solutions</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing reliable solar solutions for homes and businesses since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">About Us</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-solar-green transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">Projects</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-solar-green transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">Solar Installation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">System Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">Upgrades & Scaling</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">Energy Consultation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-solar-green transition-colors">24/7 Support</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-solar-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-solar-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400">info@solarpower.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-solar-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400">123 Solar Street, Sunnyville, CA 94123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SolarPower Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-solar-green transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-400 text-sm hover:text-solar-green transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-solar-green transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
