
import React from 'react';
import { Mic } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-2 rounded-lg">
              <Mic className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">BreatheAI</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-2">
              AI-Powered Cough & Breath Sound Analyzer
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} BreatheAI. Advancing respiratory healthcare through AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
