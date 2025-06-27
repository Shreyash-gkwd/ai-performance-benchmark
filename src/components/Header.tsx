import React from 'react';
import { Code, Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#0466c8] to-[#023e7d] text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Zap className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AI Performance Hub</h1>
              <p className="text-blue-200 text-sm">Python vs JavaScript for AI Development</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#comparison" className="hover:text-blue-200 transition-colors duration-200">Comparison</a>
            <a href="#performance" className="hover:text-blue-200 transition-colors duration-200">Performance</a>
            <a href="#examples" className="hover:text-blue-200 transition-colors duration-200">Examples</a>
            <a href="#interactive" className="hover:text-blue-200 transition-colors duration-200">Try It Live</a>
            <a href="#use-cases" className="hover:text-blue-200 transition-colors duration-200">Use Cases</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;