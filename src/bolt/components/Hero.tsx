import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home as HomeIcon, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury home exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
        >
          Find Your Dream Home
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-lg text-xl text-gray-200"
        >
          Discover the perfect property that matches your lifestyle and aspirations.
        </motion.p>
        
        {/* Search box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <div className="mt-1 flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <select className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
                  <option>Any Location</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Miami</option>
                  <option>Chicago</option>
                </select>
              </div>
            </div>
            
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <div className="mt-1 flex items-center">
                <HomeIcon className="h-5 w-5 text-gray-400 mr-2" />
                <select className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                </select>
              </div>
            </div>
            
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <div className="mt-1 flex items-center">
                <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                <select className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
                  <option>Any Price</option>
                  <option>$100k - $300k</option>
                  <option>$300k - $500k</option>
                  <option>$500k - $1M</option>
                  <option>$1M+</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 flex items-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex items-center space-x-2 text-white"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium">3,256 new properties added this week</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;