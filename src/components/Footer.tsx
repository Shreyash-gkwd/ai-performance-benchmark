import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import EmailModal from './EmailModal';

// Add type for ContactOptionsModal props
interface ContactOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmailClick: (e?: React.MouseEvent) => void;
}

const ContactOptionsModal = ({ isOpen, onClose, onEmailClick }: ContactOptionsModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4 text-[#001233]">Contact Options</h2>
        <div className="flex flex-col space-y-4">
          <a href="https://github.com/Shreyash-gkwd" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-4 py-2 rounded bg-[#001233] text-white hover:bg-blue-900 transition-colors duration-200">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/shreyash-gaikwad-66154a286" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-4 py-2 rounded bg-[#001233] text-white hover:bg-blue-900 transition-colors duration-200">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <button onClick={onEmailClick} className="flex items-center justify-center space-x-2 px-4 py-2 rounded bg-[#001233] text-white hover:bg-blue-900 transition-colors duration-200 focus:outline-none">
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </button>
        </div>
        <button onClick={onClose} className="mt-6 text-blue-700 hover:underline">Close</button>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isContactOptionsOpen, setIsContactOptionsOpen] = useState(false);

  const handleEmailClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsContactOptionsOpen(false);
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
                <li><a href="#" className="hover:text-white transition-colors duration-200">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Kaggle</a></li>
                <li><a href="https://ai.stackexchange.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">AI Stack Exchange</a></li>
                <li><a href="https://dev.to/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">DEV Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col items-center">
              <p className="text-blue-200 mb-2 text-center">
                Let's Connect! Have questions or feedback?
              </p>
              <button onClick={() => setIsContactOptionsOpen(true)} className="flex items-center space-x-2 px-6 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-200 focus:outline-none text-lg font-semibold shadow-md">
                <Mail className="h-5 w-5 mr-2" />
                <span>Contact</span>
              </button>
              <p className="text-blue-200 mt-6 text-sm text-center">
                © 2024 AI Performance Hub. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <ContactOptionsModal
        isOpen={isContactOptionsOpen}
        onClose={() => setIsContactOptionsOpen(false)}
        onEmailClick={handleEmailClick}
      />
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
};

export default Footer;