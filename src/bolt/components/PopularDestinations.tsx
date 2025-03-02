import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Destination {
  id: number;
  name: string;
  properties: number;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "New York",
    properties: 1245,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Los Angeles",
    properties: 873,
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Miami",
    properties: 692,
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 4,
    name: "Chicago",
    properties: 541,
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    name: "San Francisco",
    properties: 402,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
  },
  {
    id: 6,
    name: "Seattle",
    properties: 321,
    image: "https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80"
  }
];

const PopularDestinations: React.FC = () => {
  const {projects} = useSelector(state => state.homeFeed)
  console.log(projects)

  const navigate = useNavigate()



  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Projects</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most sought-after locations with thousands of properties available
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-xl overflow-hidden shadow-lg h-64"
              onClick={() => navigate(`/api/details/project/${destination?.projectId}`)}
            >
              <img 
                src={destination?.gallery?.[0]?.images?.[0]} 
                alt={destination.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                <div className="flex items-center mt-2">
                  <MapPin className="h-4 w-4 text-emerald-400 mr-1" />
                  <span className="text-sm text-emerald-200">{destination.properties} properties</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#059669] hover:bg-emerald-700 shadow-md"
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinations;