import React from 'react';
import { motion } from 'framer-motion';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Home className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-2xl font-bold">LuxEstate</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing exceptional real estate services since 2010. Your trusted partner in finding the perfect property.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                href="#" 
                className="text-gray-400 hover:text-[#10B981]"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                href="#" 
                className="text-gray-400 hover:text-[#10B981]"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                href="#" 
                className="text-gray-400 hover:text-[#10B981]"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                href="#" 
                className="text-gray-400 hover:text-[#10B981]"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Properties</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Agents</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Apartments</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Houses</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Villas</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Commercial</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">Luxury Homes</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                <span className="text-gray-400">123 Real Estate Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-3" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-3" />
                <span className="text-gray-400">info@luxestate.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} LuxEstate. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#10B981] text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#10B981] text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#10B981] text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;