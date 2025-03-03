// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, Clock, Award, Compass } from 'lucide-react';

// const features = [
//   {
//     id: 1,
//     icon: <Shield className="h-8 w-8 text-emerald-600" />,
//     title: "Trusted by Thousands",
//     description: "With over 10 years in the industry, we've helped thousands of clients find their perfect home."
//   },
//   {
//     id: 2,
//     icon: <Clock className="h-8 w-8 text-emerald-600" />,
//     title: "24/7 Support",
//     description: "Our dedicated team is available around the clock to address any questions or concerns."
//   },
//   {
//     id: 3,
//     icon: <Award className="h-8 w-8 text-emerald-600" />,
//     title: "Award-Winning Service",
//     description: "Recognized for excellence in customer satisfaction and innovative real estate solutions."
//   },
//   {
//     id: 4,
//     icon: <Compass className="h-8 w-8 text-emerald-600" />,
//     title: "Expert Local Guidance",
//     description: "Our agents possess in-depth knowledge of local markets to guide your property decisions."
//   }
// ];

// const Features: React.FC = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose PROFO Space</h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             We're committed to providing exceptional service and making your real estate journey seamless.
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
//             >
//               <motion.div 
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 className="mx-auto flex items-center text-[#059669] justify-center h-16 w-16 rounded-full bg-[#D1FAE5] mb-6"
//               >
//                 {feature.icon}
//               </motion.div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Home, Building, Navigation, Search, Filter, Star } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Map className="h-8 w-8 text-emerald-600" />,
    title: "Interactive Property Maps",
    description: "Explore properties directly on our interactive maps, allowing you to visualize locations and surroundings in real-time."
  },
  {
    id: 3,
    icon: <Navigation className="h-8 w-8 text-emerald-600" />,
    title: "Location-Based Search",
    description: "Find properties based on precise locations that match your specific needs and preferences."
  },
  {
    id: 4,
    icon: <Home className="h-8 w-8 text-emerald-600" />,
    title: "Connected Property Insights",
    description: "View relationships between properties, nearby amenities, and development projects all in one integrated platform."
  },
  {
    id: 5,
    icon: <Search className="h-8 w-8 text-emerald-600" />,
    title: "Advanced Filtering Options",
    description: "Narrow down your search with powerful filters to find exactly what you're looking for based on location and preferences."
  },
  
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose PROFO Space</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing real estate with our interactive map-based platform that connects you to properties exactly where you need them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mx-auto flex items-center text-[#059669] justify-center h-16 w-16 rounded-full bg-[#D1FAE5] mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;