import React, { useState } from 'react';
import { X, Send, Mail } from 'lucide-react';
import { toast } from 'react-toastify';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xldlrbwe";

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast.success('Message sent successfully!');
        onClose();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#001233] border border-white/20 rounded-xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600/20 rounded-lg">
              <Mail className="h-5 w-5 text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Contact Form</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <X className="h-5 w-5 text-blue-200" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Enter your message..."
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-white/20 text-blue-200 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
