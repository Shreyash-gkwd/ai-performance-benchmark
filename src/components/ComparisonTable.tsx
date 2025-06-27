import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    {
      feature: 'Learning Curve',
      python: { status: 'good', text: 'Beginner-friendly syntax' },
      javascript: { status: 'excellent', text: 'Familiar web language' }
    },
    {
      feature: 'Library Ecosystem',
      python: { status: 'excellent', text: 'TensorFlow, PyTorch, scikit-learn' },
      javascript: { status: 'good', text: 'TensorFlow.js, ML5.js, Brain.js' }
    },
    {
      feature: 'Performance',
      python: { status: 'excellent', text: 'Optimized C/C++ backends' },
      javascript: { status: 'good', text: 'V8 JIT compilation' }
    },
    {
      feature: 'Deployment',
      python: { status: 'good', text: 'Server-side deployment' },
      javascript: { status: 'excellent', text: 'Client & server deployment' }
    },
    {
      feature: 'Data Processing',
      python: { status: 'excellent', text: 'Pandas, NumPy ecosystem' },
      javascript: { status: 'limited', text: 'Limited native support' }
    },
    {
      feature: 'Real-time Inference',
      python: { status: 'good', text: 'Good with optimization' },
      javascript: { status: 'excellent', text: 'Native browser support' }
    },
    {
      feature: 'Community Support',
      python: { status: 'excellent', text: 'Large AI/ML community' },
      javascript: { status: 'good', text: 'Growing AI community' }
    },
    {
      feature: 'Development Speed',
      python: { status: 'excellent', text: 'Rapid prototyping' },
      javascript: { status: 'good', text: 'Fast iteration cycles' }
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'good':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'limited':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-50 border-green-200';
      case 'good':
        return 'bg-yellow-50 border-yellow-200';
      case 'limited':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-[#979dac] to-[#7d8597]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Feature Comparison</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Detailed comparison of capabilities, strengths, and limitations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-[#001233] text-white">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">Feature</h3>
              </div>
              <div className="p-6 text-center border-l border-gray-600">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold">Python</h3>
                </div>
              </div>
              <div className="p-6 text-center border-l border-gray-600">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-green-400 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold">JavaScript</h3>
                </div>
              </div>
            </div>

            {features.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                <div className="p-6 font-semibold text-[#001233] border-r border-gray-200">
                  {item.feature}
                </div>
                <div className={`p-6 border-r border-gray-200 ${getStatusColor(item.python.status)}`}>
                  <div className="flex items-center mb-2">
                    {getStatusIcon(item.python.status)}
                    <span className="ml-2 font-medium text-[#33415c]">{item.python.text}</span>
                  </div>
                </div>
                <div className={`p-6 ${getStatusColor(item.javascript.status)}`}>
                  <div className="flex items-center mb-2">
                    {getStatusIcon(item.javascript.status)}
                    <span className="ml-2 font-medium text-[#33415c]">{item.javascript.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;