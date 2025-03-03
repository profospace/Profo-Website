import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Phone } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../lib/utils';


const PopularDestinations: React.FC = () => {
  const { projects } = useSelector(state => state.homeFeed)
  console.log(projects)

  const navigate = useNavigate()

  




  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Projects</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most sought-after locations with thousands of properties available
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((destination, index) => (
            <div
              key={index}
              className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => navigation && navigate(`/api/details/project/${destination?.projectId}`)}
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={destination?.gallery?.[0]?.images?.[0]}
                  alt={destination?.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-xl px-4 py-[2px] rounded-full text-sm font-medium shadow-sm">
                  {destination?.type}
                </div>

                {/* Heart Button */}
                {/* <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
                > */}
                <button
                  className="absolute top-4 right-4 backdrop-blur-sm shadow-sm group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                  <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
                </button>

                {/* Content Container */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300  bg-black/20 backdrop-blur-sm">
                  <div className="space-y-3">
                    {/* Price and Label Container */}
                    <div className="text-white">
                      <div className="flex items-center justify-between">
                        <h3 className="text-md font-semibold line-clamp-1">{destination?.name}</h3>
                        {/* <span className="text-md font-semibold">{bedrooms} BHK</span> */}
                      </div>
                      {/* <div className='text-xs text-gray-500'>{address}</div> */}
                      <div className='flex justify-between items-center'>
                        <div className='text-md text-white'>
                          {destination?.overview?.priceRange?.min && destination?.overview?.priceRange?.max
                            ? `₹ ${formatPrice(destination.overview.priceRange.min)} to ₹ ${formatPrice(destination.overview.priceRange.max)}`
                            : destination?.overview?.priceRange?.min
                              ? `Starts from ₹ ${formatPrice(destination.overview.priceRange.min)}`
                              : destination?.overview?.priceRange?.max
                                ? `Up to ₹ ${formatPrice(destination.overview.priceRange.max)}`
                                : "Price On Request"}
                        </div>

                        <div className='flex gap-2 items-center'>
                          <h1 className='text-xs'>Amenities</h1>
                          <div className='rounded-full bg-black text-[10px] px-2 py-[1px]'>
                            {destination?.amenities?.length}+
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className='min-h-8'>
                      {destination?.connectedProperties?.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {[...new Set(destination.connectedProperties.map((ele) => ele.bedrooms))].map((bedroom, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs rounded-full text-white bg-gray-900 border-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                            >
                              {bedroom} BHK
                            </span>
                          ))}
                        </div>
                      )}
                    </div>




                  </div>
                </div>
              </div>
            </div>
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
            onClick={() => navigate('/main')}
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinations;


{/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div> */ }