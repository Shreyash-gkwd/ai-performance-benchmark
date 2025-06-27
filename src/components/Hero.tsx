import React from 'react';
import { TrendingUp, Brain, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#001233] via-[#002855] to-[#0353a4] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-yellow-400 rounded-full transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Brain className="h-8 w-8 text-[#001233]" />
              </div>
              <div className="text-4xl font-bold text-yellow-400">VS</div>
              <div className="p-4 bg-green-400 rounded-full transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <Code2 className="h-8 w-8 text-[#001233]" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-green-400 bg-clip-text text-transparent">
            Python vs JavaScript
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-200 leading-relaxed">
            The Ultimate Performance Comparison for AI in Web Development
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="bg-yellow-400 text-[#001233] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg">
              View Comparison
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-[#001233] transition-all duration-200">
              See Performance Data
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
              <p className="text-blue-200">Detailed benchmarks and real-world performance data</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Brain className="h-12 w-12 text-green-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">AI Capabilities</h3>
              <p className="text-blue-200">Machine learning libraries and framework comparisons</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Code2 className="h-12 w-12 text-blue-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Code Examples</h3>
              <p className="text-blue-200">Side-by-side implementation comparisons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;