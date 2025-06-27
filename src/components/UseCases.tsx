import React from 'react';
import { Globe, Smartphone, Server, Brain, Image, MessageSquare } from 'lucide-react';

const UseCases: React.FC = () => {
  const pythonUseCases = [
    {
      icon: Brain,
      title: 'Deep Learning Research',
      description: 'Complex neural networks, research prototyping, and academic publications',
      examples: ['PyTorch research', 'TensorFlow experiments', 'Scientific computing']
    },
    {
      icon: Server,
      title: 'Backend AI Services',
      description: 'Server-side machine learning APIs and data processing pipelines',
      examples: ['ML APIs', 'Data pipelines', 'Model serving']
    },
    {
      icon: Image,
      title: 'Computer Vision',
      description: 'Advanced image processing, object detection, and medical imaging',
      examples: ['OpenCV projects', 'Medical imaging', 'Autonomous vehicles']
    }
  ];

  const javascriptUseCases = [
    {
      icon: Globe,
      title: 'Interactive Web AI',
      description: 'Client-side machine learning with real-time user interactions',
      examples: ['Real-time filters', 'Interactive demos', 'Web applications']
    },
    {
      icon: Smartphone,
      title: 'Mobile AI Apps',
      description: 'Cross-platform mobile applications with on-device inference',
      examples: ['React Native AI', 'Progressive web apps', 'Offline prediction']
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Chatbots and natural language processing in web interfaces',
      examples: ['Chatbot UIs', 'Voice interfaces', 'Text analysis']
    }
  ];

  const renderUseCaseCard = (useCase: any, color: string, index: number) => {
    const Icon = useCase.icon;
    return (
      <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className={`p-4 ${color} rounded-2xl inline-block mb-6`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#001233] mb-4">{useCase.title}</h3>
        <p className="text-[#5c677d] text-lg mb-6 leading-relaxed">{useCase.description}</p>
        <div className="space-y-2">
          {useCase.examples.map((example: string, idx: number) => (
            <div key={idx} className="flex items-center">
              <div className={`w-2 h-2 ${color.replace('bg-', 'bg-')} rounded-full mr-3`}></div>
              <span className="text-[#33415c]">{example}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-[#001233] to-[#002855]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Best Use Cases</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Choose the right tool for your specific AI development needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Python Use Cases */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-yellow-400 text-[#001233] px-6 py-3 rounded-full font-bold text-xl mb-4">
                <div className="w-6 h-6 bg-[#001233] rounded-full mr-3"></div>
                Python Excels At
              </div>
            </div>
            <div className="space-y-8">
              {pythonUseCases.map((useCase, index) => renderUseCaseCard(useCase, 'bg-yellow-500', index))}
            </div>
          </div>

          {/* JavaScript Use Cases */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-400 text-[#001233] px-6 py-3 rounded-full font-bold text-xl mb-4">
                <div className="w-6 h-6 bg-[#001233] rounded-full mr-3"></div>
                JavaScript Excels At
              </div>
            </div>
            <div className="space-y-8">
              {javascriptUseCases.map((useCase, index) => renderUseCaseCard(useCase, 'bg-green-500', index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;