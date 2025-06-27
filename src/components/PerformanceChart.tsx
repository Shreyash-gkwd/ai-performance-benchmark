import React from 'react';
import { BarChart3, Clock, Zap, Database } from 'lucide-react';

const PerformanceChart: React.FC = () => {
  const metrics = [
    {
      category: 'Training Speed',
      python: 85,
      javascript: 60,
      unit: 'ops/sec',
      icon: Clock
    },
    {
      category: 'Memory Usage',
      python: 70,
      javascript: 90,
      unit: 'efficiency',
      icon: Database
    },
    {
      category: 'Inference Speed',
      python: 75,
      javascript: 85,
      unit: 'ms/prediction',
      icon: Zap
    },
    {
      category: 'Scalability',
      python: 80,
      javascript: 95,
      unit: 'concurrent users',
      icon: BarChart3
    }
  ];

  return (
    <section id="performance" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001233] mb-4">Performance Benchmarks</h2>
          <p className="text-xl text-[#5c677d] max-w-3xl mx-auto">
            Real-world performance metrics comparing Python and JavaScript for AI workloads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#0466c8] rounded-lg mr-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001233]">{metric.category}</h3>
                    <p className="text-[#7d8597]">Measured in {metric.unit}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="font-semibold text-[#33415c]">Python</span>
                      </div>
                      <span className="text-[#001233] font-bold">{metric.python}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${metric.python}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
                        <span className="font-semibold text-[#33415c]">JavaScript</span>
                      </div>
                      <span className="text-[#001233] font-bold">{metric.javascript}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${metric.javascript}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerformanceChart;