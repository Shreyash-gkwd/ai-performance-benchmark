import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import EmailModal from './EmailModal';

const Footer: React.FC = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailModalOpen(true);
  };

  return (
    <>
      <footer className="bg-[#001233] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AI Performance Hub</h3>
              <p className="text-blue-200 mb-6 max-w-md">
                Comprehensive performance analysis and comparison tools for AI developers choosing between Python and JavaScript.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Shreyash-gkwd" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/shreyash-gaikwad-66154a286" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <button 
                  onClick={handleEmailClick}
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 cursor-pointer"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Best Practices</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Reddit</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Stack Overflow</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 mb-4 md:mb-0">
                © 2024 AI Performance Hub. All rights reserved.
              </p>
              <div className="flex space-x-6 text-blue-200">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </>
  );
};

export default Footer;