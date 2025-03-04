import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice, truncateText } from '../../lib/utils';

interface Property {
  id: number;
  title: string;
  address: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
}

// const properties: Property[] = [
//   {
//     id: 1,
//     title: "Modern Waterfront Villa",
//     address: "123 Coastal Drive, Miami, FL",
//     price: "$2,850,000",
//     image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
//     beds: 5,
//     baths: 4.5,
//     sqft: 4200,
//     featured: true
//   },
//   {
//     id: 2,
//     title: "Luxury Downtown Penthouse",
//     address: "456 Skyline Ave, New York, NY",
//     price: "$3,200,000",
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     beds: 3,
//     baths: 3,
//     sqft: 2800
//   },
//   {
//     id: 3,
//     title: "Contemporary Mountain Retreat",
//     address: "789 Alpine Road, Aspen, CO",
//     price: "$4,500,000",
//     image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     beds: 6,
//     baths: 5,
//     sqft: 5600,
//     featured: true
//   },
//   {
//     id: 4,
//     title: "Elegant Colonial Estate",
//     address: "101 Heritage Lane, Boston, MA",
//     price: "$1,950,000",
//     image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     beds: 4,
//     baths: 3.5,
//     sqft: 3800
//   }
// ];

const PropertyCard: React.FC<{ property: Property; index: number }> = ({ property, index }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group font-helvetica"
      onClick={() => navigate(`/api/details/${property?.post_id}`)}
    >
      <div className="relative">
        <img
          src={property?.galleryList?.[0] || property?.galleryList?.[1]}
          alt={property.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart className="h-5 w-5" />
          </motion.button>
        </div>
        {property?.type_name && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
              {[property?.type_name]}
            </span>
          </div>
        )}

      </div>

      <div className="relative overflow-hidden shadow-md border border-gray-100 bg-white">
        {/* Simple dotted background pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(black 1px, transparent 0)',
              backgroundSize: '15px 15px'
            }}>
          </div>
        </div>

        <div className="p-5 relative z-10">
          <div className='flex justify-between items-center'>
            <h3 className="text-xl font-bold text-black">{formatPrice(property?.price)}</h3>
            <div className='bg-black text-white rounded-full px-2 text-sm '>{property?.bedrooms} BHK</div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-1">{truncateText(property?.post_title, 32)}</h3>
          <div className="flex items-center text-gray-500 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{truncateText(property.address, 32)}</span>
          </div>
          <div className="flex justify-between border-t border-gray-100 pt-2">
            <div className="flex items-center text-gray-700">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Square className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">{property.area} {property?.areaUnit || 'sqft'}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProperties: React.FC = () => {
  const { properties } = useSelector(state => state.homeFeed)
  console.log(properties)
  return (
    <section className="py-16 bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Properties</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of exceptional properties from around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.map((property, index) => (
            <PropertyCard key={index} property={property} index={index} />
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
            View All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;