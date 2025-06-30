import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmailClick: () => void;
}

const ContactOptionsModal: React.FC<ContactOptionsModalProps> = ({ isOpen, onClose, onEmailClick }) => {
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

export default ContactOptionsModal; 