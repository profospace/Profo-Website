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

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Map, Home, Building, Navigation, Search, Filter, Star } from 'lucide-react';

// const features = [
//   {
//     id: 1,
//     icon: <Map className="h-8 w-8 text-emerald-600" />,
//     title: "Interactive Property Maps",
//     description: "Explore properties directly on our interactive maps, allowing you to visualize locations and surroundings in real-time."
//   },
//   {
//     id: 3,
//     icon: <Navigation className="h-8 w-8 text-emerald-600" />,
//     title: "Location-Based Search",
//     description: "Find properties based on precise locations that match your specific needs and preferences."
//   },
//   {
//     id: 4,
//     icon: <Home className="h-8 w-8 text-emerald-600" />,
//     title: "Connected Property Insights",
//     description: "View relationships between properties, nearby amenities, and development projects all in one integrated platform."
//   },
//   {
//     id: 5,
//     icon: <Search className="h-8 w-8 text-emerald-600" />,
//     title: "Advanced Filtering Options",
//     description: "Narrow down your search with powerful filters to find exactly what you're looking for based on location and preferences."
//   },
  
// ];

// const Features: React.FC = () => {
//   return (
//     <section className="py-20 bg-gray-50">
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
//             Revolutionizing real estate with our interactive map-based platform that connects you to properties exactly where you need them.
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
//               className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 className="mx-auto flex items-center text-[#059669] justify-center h-16 w-16 rounded-full bg-[#D1FAE5] mb-6"
//               >
//                 {feature.icon}
//               </motion.div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//               <p className="text-gray-600 text-sm">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { Map, Building, Navigation, Filter } from 'lucide-react';

// const features = [
//   {
//     id: 1,
//     icon: <Map size={24} />,
//     title: "Interactive Property Maps",
//     description: "Explore properties directly on our interactive maps, allowing you to visualize locations and surroundings in real-time."
//   },
//   {
//     id: 2,
//     icon: <Navigation size={24} />,
//     title: "Location-Based Search",
//     description: "Find properties based on precise locations that match your specific needs and preferences."
//   },
//   {
//     id: 3,
//     icon: <Building size={24} />,
//     title: "Connected Property Insights",
//     description: "View relationships between properties, nearby amenities, and development projects all in one integrated platform."
//   },
//   {
//     id: 4,
//     icon: <Filter size={24} />,
//     title: "Advanced Filtering Options",
//     description: "Narrow down your search with powerful filters to find exactly what you're looking for based on location and preferences."
//   },
// ];

// const Features = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.8
//       }
//     }
//   };

//   // Random geometric shape generator for background
//   const shapes = Array(8).fill(0).map((_, i) => ({
//     id: i,
//     type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
//     size: 40 + Math.random() * 80,
//     xPos: Math.random() * 100,
//     yPos: Math.random() * 100,
//     rotation: Math.random() * 360,
//     color: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)],
//     delay: i * 0.1
//   }));

//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 py-16">
//       {/* Geometric Background Shapes */}
//       {shapes.map(shape => (
//         <motion.div
//           key={shape.id}
//           className="absolute opacity-20"
//           initial={{ opacity: 0, rotate: 0 }}
//           animate={{
//             opacity: 0.2,
//             rotate: shape.rotation,
//             x: [0, 10, -10, 0],
//             y: [0, -10, 10, 0]
//           }}
//           transition={{
//             duration: 10 + Math.random() * 10,
//             delay: shape.delay,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//           style={{
//             width: shape.size,
//             height: shape.size,
//             left: `${shape.xPos}%`,
//             top: `${shape.yPos}%`,
//             backgroundColor: shape.type !== 'triangle' ? shape.color : 'transparent',
//             borderRadius: shape.type === 'circle' ? '50%' : (shape.type === 'square' ? '0' : '0'),
//             clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
//             zIndex: 0
//           }}
//         />
//       ))}

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <motion.h2
//             className="text-4xl font-bold text-white mb-4"
//             variants={titleVariants}
//           >
//             Why Choose PROFO Space
//           </motion.h2>

//           <motion.p
//             className="text-lg text-indigo-100 max-w-2xl mx-auto"
//             variants={itemVariants}
//           >
//             Revolutionizing real estate with our interactive map-based platform that connects you to properties exactly where you need them.
//           </motion.p>
//         </motion.div>

//         {/* Feature Cards */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           {features.map((feature) => (
//             <motion.div
//               key={feature.id}
//               className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-white border-opacity-20"
//               variants={itemVariants}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
//                 backgroundColor: "rgba(255, 255, 255, 0.15)"
//               }}
//             >
//               <motion.div
//                 className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="text-white">
//                   {feature.icon}
//                 </div>
//               </motion.div>

//               <h3 className="text-xl font-semibold text-white mb-3">
//                 {feature.title}
//               </h3>

//               <p className="text-indigo-100">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Features;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Map, Building, Navigation, Filter } from 'lucide-react';

// const features = [
//   {
//     id: 1,
//     icon: <Map size={28} />,
//     title: "Interactive Property Maps",
//     description: "Explore properties directly on our interactive maps, allowing you to visualize locations and surroundings in real-time."
//   },
//   {
//     id: 2,
//     icon: <Navigation size={28} />,
//     title: "Location-Based Search",
//     description: "Find properties based on precise locations that match your specific needs and preferences."
//   },
//   {
//     id: 3,
//     icon: <Building size={28} />,
//     title: "Connected Property Insights",
//     description: "View relationships between properties, nearby amenities, and development projects all in one integrated platform."
//   },
//   {
//     id: 4,
//     icon: <Filter size={28} />,
//     title: "Advanced Filtering Options",
//     description: "Narrow down your search with powerful filters to find exactly what you're looking for based on location and preferences."
//   },
// ];

// const Features = () => {
//   // Track which card is hovered
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }
//   };

//   // Floating dots and geometric shapes for background
//   const floatingElements = [
//     // Small dots
//     ...Array(30).fill(0).map((_, i) => ({
//       id: `dot-${i}`,
//       type: 'circle',
//       size: 4 + Math.random() * 8,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       color: ['#E0E7FF', '#DBEAFE', '#FEE2E2', '#ECFCCB', '#E0F2FE'][Math.floor(Math.random() * 5)],
//       delay: i * 0.05,
//       duration: 15 + Math.random() * 20
//     })),
//     // Medium geometric shapes
//     ...Array(15).fill(0).map((_, i) => ({
//       id: `geo-${i}`,
//       type: ['circle', 'square', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)],
//       size: 20 + Math.random() * 50,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       rotation: Math.random() * 360,
//       color: ['#818CF8', '#93C5FD', '#F9A8D4', '#A7F3D0', '#FCD34D'][Math.floor(Math.random() * 5)],
//       delay: i * 0.1,
//       duration: 25 + Math.random() * 15
//     })),
//     // Large shapes
//     ...Array(6).fill(0).map((_, i) => ({
//       id: `large-${i}`,
//       type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
//       size: 80 + Math.random() * 120,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       rotation: Math.random() * 360,
//       color: ['#C7D2FE', '#BFDBFE', '#DDD6FE', '#C4B5FD', '#BAE6FD'][Math.floor(Math.random() * 5)],
//       delay: i * 0.15,
//       duration: 30 + Math.random() * 20
//     }))
//   ];

//   return (
//     <motion.div
//       className="relative w-full overflow-hidden bg-gradient-to-br from-white to-blue-50 py-20 px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Geometric Background Elements */}
//       {floatingElements.map(element => (
//         <motion.div
//           key={element.id}
//           className="absolute rounded-full"
//           initial={{
//             opacity: 0,
//             rotate: element.rotation || 0,
//           }}
//           animate={{
//             opacity: element.type === 'circle' ? 0.25 : 0.15,
//             rotate: element.rotation ? element.rotation + 360 : 0,
//             x: [0, 20, -20, 10, -10, 0],
//             y: [0, -15, 15, -5, 5, 0],
//           }}
//           transition={{
//             duration: element.duration,
//             delay: element.delay,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//           }}
//           style={{
//             width: element.size,
//             height: element.size,
//             left: `${element.xPos}%`,
//             top: `${element.yPos}%`,
//             backgroundColor: element.type !== 'triangle' && element.type !== 'hexagon' ? element.color : 'transparent',
//             borderRadius: element.type === 'circle' ? '50%' : (element.type === 'square' ? '0' : '0'),
//             clipPath: element.type === 'triangle'
//               ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
//               : element.type === 'hexagon'
//                 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
//                 : 'none',
//             zIndex: 0,
//             boxShadow: element.type === 'circle' || element.type === 'square'
//               ? `0 4px 12px ${element.color}40`
//               : 'none'
//           }}
//         />
//       ))}

//       {/* Gradient glow effects */}
//       <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full filter blur-3xl opacity-10"></div>
//       <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-purple-400 rounded-full filter blur-3xl opacity-10"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-20"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <motion.div
//             className="inline-block"
//             variants={titleVariants}
//           >
//             <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg mb-4 text-indigo-600 text-sm font-medium">
//               PROFO Space Features
//             </span>
//           </motion.div>

//           <motion.h2
//             className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6"
//             variants={titleVariants}
//           >
//             Why Choose PROFO Space
//           </motion.h2>

//           <motion.p
//             className="text-xl text-indigo-900 max-w-2xl mx-auto"
//             variants={itemVariants}
//           >
//             Revolutionizing real estate with our interactive map-based platform that connects you to properties exactly where you need them.
//           </motion.p>
//         </motion.div>

//         {/* Feature Cards */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           {features.map((feature) => (
//             <motion.div
//               key={feature.id}
//               className="relative bg-white rounded-2xl overflow-hidden"
//               variants={itemVariants}
//               onHoverStart={() => setHoveredCard(feature.id)}
//               onHoverEnd={() => setHoveredCard(null)}
//               whileHover={{
//                 y: -10,
//                 transition: { type: "spring", stiffness: 300, damping: 10 }
//               }}
//             >
//               {/* Card inner content with glossy effect */}
//               <div className="p-8 h-full z-10 relative bg-opacity-40 backdrop-filter backdrop-blur-sm bg-gradient-to-br from-white via-white to-blue-50 border border-white border-opacity-40 shadow-xl">
//                 {/* Geometric accent in the corner */}
//                 <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-200 to-blue-200 opacity-50"></div>
//                 <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30"></div>

//                 {/* Icon with animation */}
//                 <motion.div
//                   className="relative w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg"
//                   animate={{
//                     scale: hoveredCard === feature.id ? [1, 1.1, 1] : 1,
//                     rotate: hoveredCard === feature.id ? [0, -10, 10, 0] : 0
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     repeat: hoveredCard === feature.id ? Infinity : 0,
//                     repeatDelay: 3
//                   }}
//                 >
//                   <motion.div
//                     className="text-white"
//                     animate={{ rotate: hoveredCard === feature.id ? 360 : 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                 </motion.div>

//                 {/* Title with gradient */}
//                 <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700 mb-4">
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-indigo-800 leading-relaxed">
//                   {feature.description}
//                 </p>

//                 {/* Call to action */}
//                 <motion.div
//                   className="mt-6 opacity-0"
//                   animate={{
//                     opacity: hoveredCard === feature.id ? 1 : 0,
//                     y: hoveredCard === feature.id ? 0 : 10
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <button className="text-indigo-600 font-medium flex items-center">
//                     Learn more
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </motion.div>
//               </div>

//               {/* Glossy overlay */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-white opacity-30 pointer-events-none"></div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom accent */}
//         <motion.div
//           className="mt-20 flex justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.5 }}
//         >
//           <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Features;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Map, Building, Navigation, Filter } from 'lucide-react';

// const features = [
//   {
//     id: 1,
//     icon: <Map size={28} />,
//     title: "Interactive Property Maps",
//     description: "Explore properties directly on our interactive maps, allowing you to visualize locations and surroundings in real-time."
//   },
//   {
//     id: 2,
//     icon: <Navigation size={28} />,
//     title: "Location-Based Search",
//     description: "Find properties based on precise locations that match your specific needs and preferences."
//   },
//   {
//     id: 3,
//     icon: <Building size={28} />,
//     title: "Connected Property Insights",
//     description: "View relationships between properties, nearby amenities, and development projects all in one integrated platform."
//   },
//   {
//     id: 4,
//     icon: <Filter size={28} />,
//     title: "Advanced Filtering Options",
//     description: "Narrow down your search with powerful filters to find exactly what you're looking for based on location and preferences."
//   },
// ];

// const Features = () => {
//   // Track which card is hovered
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }
//   };

//   // Floating dots and geometric shapes for background
//   const floatingElements = [
//     // Small dots
//     ...Array(30).fill(0).map((_, i) => ({
//       id: `dot-${i}`,
//       type: 'circle',
//       size: 4 + Math.random() * 8,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       color: ['#E0E7FF', '#DBEAFE', '#FEE2E2', '#ECFCCB', '#E0F2FE'][Math.floor(Math.random() * 5)],
//       delay: i * 0.05,
//       duration: 15 + Math.random() * 20
//     })),
//     // Medium geometric shapes
//     ...Array(15).fill(0).map((_, i) => ({
//       id: `geo-${i}`,
//       type: ['circle', 'square', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)],
//       size: 20 + Math.random() * 50,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       rotation: Math.random() * 360,
//       color: ['#818CF8', '#93C5FD', '#F9A8D4', '#A7F3D0', '#FCD34D'][Math.floor(Math.random() * 5)],
//       delay: i * 0.1,
//       duration: 25 + Math.random() * 15
//     })),
//     // Large shapes
//     ...Array(6).fill(0).map((_, i) => ({
//       id: `large-${i}`,
//       type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
//       size: 80 + Math.random() * 120,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       rotation: Math.random() * 360,
//       color: ['#C7D2FE', '#BFDBFE', '#DDD6FE', '#C4B5FD', '#BAE6FD'][Math.floor(Math.random() * 5)],
//       delay: i * 0.15,
//       duration: 30 + Math.random() * 20
//     }))
//   ];

//   return (
//     <motion.div
//       className="relative w-full overflow-hidden bg-gradient-to-br from-white to-blue-50 py-12 px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Geometric Background Elements */}
//       {floatingElements.map(element => (
//         <motion.div
//           key={element.id}
//           className="absolute rounded-full"
//           initial={{
//             opacity: 0,
//             rotate: element.rotation || 0,
//           }}
//           animate={{
//             opacity: element.type === 'circle' ? 0.25 : 0.15,
//             rotate: element.rotation ? element.rotation + 360 : 0,
//             x: [0, 20, -20, 10, -10, 0],
//             y: [0, -15, 15, -5, 5, 0],
//           }}
//           transition={{
//             duration: element.duration,
//             delay: element.delay,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//           }}
//           style={{
//             width: element.size,
//             height: element.size,
//             left: `${element.xPos}%`,
//             top: `${element.yPos}%`,
//             backgroundColor: element.type !== 'triangle' && element.type !== 'hexagon' ? element.color : 'transparent',
//             borderRadius: element.type === 'circle' ? '50%' : (element.type === 'square' ? '0' : '0'),
//             clipPath: element.type === 'triangle'
//               ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
//               : element.type === 'hexagon'
//                 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
//                 : 'none',
//             zIndex: 0,
//             boxShadow: element.type === 'circle' || element.type === 'square'
//               ? `0 4px 12px ${element.color}40`
//               : 'none'
//           }}
//         />
//       ))}

//       {/* Gradient glow effects */}
//       <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full filter blur-3xl opacity-10"></div>
//       <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-purple-400 rounded-full filter blur-3xl opacity-10"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-10"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <motion.div
//             className="inline-block"
//             variants={titleVariants}
//           >
//             <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg mb-4 text-indigo-600 text-sm font-medium">
//               PROFO Space Features
//             </span>
//           </motion.div>

//           <motion.h2
//             className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2"
//             variants={titleVariants}
//           >
//             Why Choose PROFO Space
//           </motion.h2>

//           <motion.p
//             className="text-xl text-indigo-900 max-w-2xl mx-auto"
//             variants={itemVariants}
//           >
//             Revolutionizing real estate with our interactive map-based platform that connects you to properties exactly where you need them.
//           </motion.p>
//         </motion.div>

//         {/* Feature Cards */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           {features.map((feature, index) => {
//             // Unique geometric elements for each card
//             const geometryOptions = [
//               // Option 1: Circles in different positions
//               {
//                 elements: [
//                   { type: 'circle', position: '-top-8 -right-8', size: 'w-20 h-20', colors: 'from-indigo-200 to-blue-200', opacity: 'opacity-50' },
//                   { type: 'circle', position: 'bottom-4 left-4', size: 'w-16 h-16', colors: 'from-purple-200 to-pink-200', opacity: 'opacity-30' }
//                 ]
//               },
//               // Option 2: Corner triangle and small circles
//               {
//                 elements: [
//                   { type: 'triangle', position: '-top-10 -left-10', size: 'w-32 h-32', colors: 'from-blue-200 to-cyan-200', opacity: 'opacity-40', rotation: 'rotate-45' },
//                   { type: 'circle', position: 'bottom-6 right-6', size: 'w-12 h-12', colors: 'from-amber-200 to-yellow-200', opacity: 'opacity-40' }
//                 ]
//               },
//               // Option 3: Square and offset circle
//               {
//                 elements: [
//                   { type: 'square', position: '-bottom-6 -right-6', size: 'w-24 h-24', colors: 'from-emerald-200 to-teal-200', opacity: 'opacity-40', rotation: 'rotate-12' },
//                   { type: 'circle', position: 'top-6 left-6', size: 'w-10 h-10', colors: 'from-violet-200 to-fuchsia-200', opacity: 'opacity-50' }
//                 ]
//               },
//               // Option 4: Hexagon and mini circles
//               {
//                 elements: [
//                   { type: 'hexagon', position: '-bottom-8 -left-8', size: 'w-28 h-28', colors: 'from-rose-200 to-pink-200', opacity: 'opacity-40', rotation: 'rotate-30' },
//                   { type: 'circle', position: 'top-4 right-4', size: 'w-8 h-8', colors: 'from-sky-200 to-indigo-200', opacity: 'opacity-60' },
//                   { type: 'circle', position: 'top-12 right-12', size: 'w-6 h-6', colors: 'from-blue-200 to-indigo-200', opacity: 'opacity-40' }
//                 ]
//               }
//             ];

//             // Select geometry pattern for this card
//             const cardGeometry = geometryOptions[index % geometryOptions.length];

//             return (
//               <motion.div
//                 key={feature.id}
//                 className="relative bg-white rounded-2xl overflow-hidden shadow-xl"
//                 variants={itemVariants}
//                 onHoverStart={() => setHoveredCard(feature.id)}
//                 onHoverEnd={() => setHoveredCard(null)}
//                 whileHover={{
//                   y: -10,
//                   transition: { type: "spring", stiffness: 300, damping: 10 }
//                 }}
//               >
//                 {/* Card inner content with glossy effect */}
//                 <div className="p-6 aspect-square flex flex-col z-10 relative bg-opacity-40 backdrop-filter backdrop-blur-sm bg-gradient-to-br from-white via-white to-blue-50 border border-white border-opacity-40">
//                   {/* Unique Geometric accents for each card */}
//                   {cardGeometry.elements.map((element, elemIndex) => {
//                     const commonClasses = `absolute ${element.position} ${element.size} bg-gradient-to-br ${element.colors} ${element.opacity} ${element.rotation || ''}`;

//                     // Render different shapes based on type
//                     if (element.type === 'circle') {
//                       return <div key={elemIndex} className={`${commonClasses} rounded-full`}></div>;
//                     } else if (element.type === 'square') {
//                       return <div key={elemIndex} className={`${commonClasses} rounded-lg`}></div>;
//                     } else if (element.type === 'triangle') {
//                       return <div key={elemIndex} className={`${commonClasses}`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>;
//                     } else if (element.type === 'hexagon') {
//                       return <div key={elemIndex} className={`${commonClasses}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>;
//                     }
//                     return null;
//                   })}

//                   {/* Icon with animation - centered vertically */}
//                   <motion.div
//                     className="relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg"
//                     animate={{
//                       scale: hoveredCard === feature.id ? [1, 1.1, 1] : 1,
//                       rotate: hoveredCard === feature.id ? [0, -10, 10, 0] : 0
//                     }}
//                     transition={{
//                       duration: 0.5,
//                       repeat: hoveredCard === feature.id ? Infinity : 0,
//                       repeatDelay: 3
//                     }}
//                   >
//                     <motion.div
//                       className="text-white"
//                       // animate={{ rotate: hoveredCard === feature.id ? 360 : 0 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                       {feature.icon}
//                     </motion.div>
//                   </motion.div>

//                   {/* Title with gradient - centered */}
//                   <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700 mb-2 text-center">
//                     {feature.title}
//                   </h3>

//                   {/* Description - flex-grow to push CTA to bottom */}
//                   <p className="text-indigo-800 leading-relaxed text-center text-sm flex-grow">
//                     {feature.description}
//                   </p>

//                 </div>

//                 {/* Glossy overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-white opacity-30 pointer-events-none"></div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom accent */}
//         <motion.div
//           className="mt-12 flex justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.5 }}
//         >
//           <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Features;


// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
// import { Map, Building, Navigation, Filter } from 'lucide-react';

// const features = [
//   {
//     id: 1,
//     icon: <Map size={28} />,
//     title: "Interactive Property Maps",
//     description: "Explore properties directly on our interactive maps, allowing you to visualize locations and surroundings in real-time."
//   },
//   {
//     id: 2,
//     icon: <Navigation size={28} />,
//     title: "Location-Based Search",
//     description: "Find properties based on precise locations that match your specific needs and preferences."
//   },
//   {
//     id: 3,
//     icon: <Building size={28} />,
//     title: "Connected Property Insights",
//     description: "View relationships between properties, nearby amenities, and development projects all in one integrated platform."
//   },
//   {
//     id: 4,
//     icon: <Filter size={28} />,
//     title: "Advanced Filtering Options",
//     description: "Narrow down your search with powerful filters to find exactly what you're looking for based on location and preferences."
//   },
// ];

// const Features = () => {
//   // Track which card is hovered
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [scrollDirection, setScrollDirection] = useState(null);
//   const [lastScrollY, setLastScrollY] = useState(0);
  
//   // Refs for sections to track when they're in view
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const cardsRef = useRef(null);
//   const featureRefs = useRef(features.map(() => React.createRef()));
  
//   // Check if sections are in view
//   const headerInView = useInView(headerRef, { once: false, amount: 0.5 });
//   const cardsInView = useInView(cardsRef, { once: false, amount: 0.2 });
  
//   // Scroll progress for the entire section
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });
  
//   // Smooth scroll progress
//   const smoothProgress = useSpring(scrollYProgress, { 
//     stiffness: 100, 
//     damping: 30,
//     restDelta: 0.001 
//   });
  
//   // Parallax effect values based on scroll
//   const headerY = useTransform(smoothProgress, [0, 1], [100, -100]);
//   const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  
//   // Track scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY) {
//         setScrollDirection('down');
//       } else if (currentScrollY < lastScrollY) {
//         setScrollDirection('up');
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }
//   };

//   // Floating dots and geometric shapes for background
//   // const floatingElements = [
//   //   // Small dots
//   //   ...Array(30).fill(0).map((_, i) => ({
//   //     id: `dot-${i}`,
//   //     type: 'circle',
//   //     size: 4 + Math.random() * 8,
//   //     xPos: Math.random() * 100,
//   //     yPos: Math.random() * 100,
//   //     color: ['#E0E7FF', '#DBEAFE', '#FEE2E2', '#ECFCCB', '#E0F2FE'][Math.floor(Math.random() * 5)],
//   //     delay: i * 0.05,
//   //     duration: 15 + Math.random() * 20
//   //   })),
//   //   // Medium geometric shapes
//   //   ...Array(15).fill(0).map((_, i) => ({
//   //     id: `geo-${i}`,
//   //     type: ['circle', 'square', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)],
//   //     size: 20 + Math.random() * 50,
//   //     xPos: Math.random() * 100,
//   //     yPos: Math.random() * 100,
//   //     rotation: Math.random() * 360,
//   //     color: ['#818CF8', '#93C5FD', '#F9A8D4', '#A7F3D0', '#FCD34D'][Math.floor(Math.random() * 5)],
//   //     delay: i * 0.1,
//   //     duration: 25 + Math.random() * 15
//   //   })),
//   //   // Large shapes
//   //   ...Array(6).fill(0).map((_, i) => ({
//   //     id: `large-${i}`,
//   //     type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
//   //     size: 80 + Math.random() * 120,
//   //     xPos: Math.random() * 100,
//   //     yPos: Math.random() * 100,
//   //     rotation: Math.random() * 360,
//   //     color: ['#C7D2FE', '#BFDBFE', '#DDD6FE', '#C4B5FD', '#BAE6FD'][Math.floor(Math.random() * 5)],
//   //     delay: i * 0.15,
//   //     duration: 30 + Math.random() * 20
//   //   }))
//   // ];
//   const floatingElements = [
//     // Small dots - increase duration values by 2-3x
//     ...Array(30).fill(0).map((_, i) => ({
//       id: `dot-${i}`,
//       type: 'circle',
//       size: 4 + Math.random() * 8,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       color: ['#E0E7FF', '#DBEAFE', '#FEE2E2', '#ECFCCB', '#E0F2FE'][Math.floor(Math.random() * 5)],
//       delay: i * 0.05,
//       duration: 35 + Math.random() * 45 // Increased from 15+20 to 35+45
//     })),
//     // Medium geometric shapes - increase duration values by 2-3x
//     ...Array(15).fill(0).map((_, i) => ({
//       id: `geo-${i}`,
//       type: ['circle', 'square', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)],
//       size: 20 + Math.random() * 50,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       rotation: Math.random() * 360,
//       color: ['#818CF8', '#93C5FD', '#F9A8D4', '#A7F3D0', '#FCD34D'][Math.floor(Math.random() * 5)],
//       delay: i * 0.1,
//       duration: 50 + Math.random() * 40 // Increased from 25+15 to 50+40
//     })),
//     // Large shapes - increase duration values by 2-3x
//     ...Array(6).fill(0).map((_, i) => ({
//       id: `large-${i}`,
//       type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
//       size: 80 + Math.random() * 120,
//       xPos: Math.random() * 100,
//       yPos: Math.random() * 100,
//       rotation: Math.random() * 360,
//       color: ['#C7D2FE', '#BFDBFE', '#DDD6FE', '#C4B5FD', '#BAE6FD'][Math.floor(Math.random() * 5)],
//       delay: i * 0.15,
//       duration: 70 + Math.random() * 50 // Increased from 30+20 to 70+50
//     }))
//   ];


//   // Scroll direction indicator animation variants
//   const scrollIndicatorVariants = {
//     down: {
//       y: [0, 10, 0],
//       opacity: [0.5, 1, 0.5],
//       transition: { repeat: Infinity, duration: 2 }
//     },
//     up: {
//       y: [0, -10, 0],
//       opacity: [0.5, 1, 0.5],
//       transition: { repeat: Infinity, duration: 2 }
//     }
//   };

//   return (
//     <motion.div
//       className="relative w-full overflow-hidden bg-gradient-to-br from-white to-blue-50 py-12 px-4"
//       ref={sectionRef}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       style={{ opacity: bgOpacity }}
//     >
//       {/* Scroll direction indicator - appears when scrolling */}
//       {scrollDirection && (
//         <motion.div 
//           className="fixed right-6 bottom-6 z-50 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg"
//           variants={scrollIndicatorVariants}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={scrollDirection === 'down' ? 'down' : 'up'}
//           exit={{ opacity: 0, scale: 0 }}
//         >
//           {scrollDirection === 'down' ? (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//             </svg>
//           )}
//         </motion.div>
//       )}

//       {/* Progress bar that fills as user scrolls */}
//       <motion.div 
//         className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50"
//         style={{ scaleX: smoothProgress }}
//       />

//       {/* Geometric Background Elements - React to scroll direction */}
//       {floatingElements.map(element => (
//         <motion.div
//           key={element.id}
//           className="absolute rounded-full"
//           initial={{
//             opacity: 0,
//             rotate: element.rotation || 0,
//           }}
//           animate={{
//             opacity: element.type === 'circle' ? 0.25 : 0.15,
//             rotate: element.rotation ? element.rotation + 360 : 0,
//             x: [0, 20, -20, 10, -10, 0],
//             y: scrollDirection === 'down' 
//               ? [0, -15, 15, -5, 5, 0] 
//               : [0, 15, -15, 5, -5, 0],
//           }}
//           transition={{
//             duration: element.duration,
//             delay: element.delay,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//           }}
//           style={{
//             width: element.size,
//             height: element.size,
//             left: `${element.xPos}%`,
//             top: `${element.yPos}%`,
//             backgroundColor: element.type !== 'triangle' && element.type !== 'hexagon' ? element.color : 'transparent',
//             borderRadius: element.type === 'circle' ? '50%' : (element.type === 'square' ? '0' : '0'),
//             clipPath: element.type === 'triangle'
//               ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
//               : element.type === 'hexagon'
//                 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
//                 : 'none',
//             zIndex: 0,
//             boxShadow: element.type === 'circle' || element.type === 'square'
//               ? `0 4px 12px ${element.color}40`
//               : 'none'
//           }}
//         />
//       ))}

//       {/* Gradient glow effects */}
//       <motion.div 
//         className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full filter blur-3xl opacity-10"
//         style={{ y: useTransform(smoothProgress, [0, 1], [100, -100]) }}
//       />
//       <motion.div 
//         className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-purple-400 rounded-full filter blur-3xl opacity-10"
//         style={{ y: useTransform(smoothProgress, [0, 1], [-100, 100]) }}
//       />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto">
//         {/* Header */}
//         <motion.div
//           ref={headerRef}
//           className="text-center mb-10"
//           initial="hidden"
//           animate={headerInView ? "visible" : "hidden"}
//           variants={containerVariants}
//           style={{ y: headerY }}
//         >
//           <motion.div
//             className="inline-block"
//             variants={titleVariants}
//           >
//             <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg mb-4 text-indigo-600 text-sm font-medium">
//               PROFO Space Features
//             </span>
//           </motion.div>

//           <motion.h2
//             className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2"
//             variants={titleVariants}
//           >
//             Why Choose PROFO Space
//           </motion.h2>

//           <motion.p
//             className="text-xl text-indigo-900 max-w-2xl mx-auto"
//             variants={itemVariants}
//           >
//             Revolutionizing real estate with our interactive map-based platform that connects you to properties exactly where you need them.
//           </motion.p>
//         </motion.div>

//         {/* Feature Cards */}
//         <motion.div
//           ref={cardsRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
//           initial="hidden"
//           animate={cardsInView ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {features.map((feature, index) => {
//             // Unique geometric elements for each card
//             const geometryOptions = [
//               // Option 1: Circles in different positions
//               {
//                 elements: [
//                   { type: 'circle', position: '-top-8 -right-8', size: 'w-20 h-20', colors: 'from-indigo-200 to-blue-200', opacity: 'opacity-50' },
//                   { type: 'circle', position: 'bottom-4 left-4', size: 'w-16 h-16', colors: 'from-purple-200 to-pink-200', opacity: 'opacity-30' }
//                 ]
//               },
//               // Option 2: Corner triangle and small circles
//               {
//                 elements: [
//                   { type: 'triangle', position: '-top-10 -left-10', size: 'w-32 h-32', colors: 'from-blue-200 to-cyan-200', opacity: 'opacity-40', rotation: 'rotate-45' },
//                   { type: 'circle', position: 'bottom-6 right-6', size: 'w-12 h-12', colors: 'from-amber-200 to-yellow-200', opacity: 'opacity-40' }
//                 ]
//               },
//               // Option 3: Square and offset circle
//               {
//                 elements: [
//                   { type: 'square', position: '-bottom-6 -right-6', size: 'w-24 h-24', colors: 'from-emerald-200 to-teal-200', opacity: 'opacity-40', rotation: 'rotate-12' },
//                   { type: 'circle', position: 'top-6 left-6', size: 'w-10 h-10', colors: 'from-violet-200 to-fuchsia-200', opacity: 'opacity-50' }
//                 ]
//               },
//               // Option 4: Hexagon and mini circles
//               {
//                 elements: [
//                   { type: 'hexagon', position: '-bottom-8 -left-8', size: 'w-28 h-28', colors: 'from-rose-200 to-pink-200', opacity: 'opacity-40', rotation: 'rotate-30' },
//                   { type: 'circle', position: 'top-4 right-4', size: 'w-8 h-8', colors: 'from-sky-200 to-indigo-200', opacity: 'opacity-60' },
//                   { type: 'circle', position: 'top-12 right-12', size: 'w-6 h-6', colors: 'from-blue-200 to-indigo-200', opacity: 'opacity-40' }
//                 ]
//               }
//             ];

//             // Select geometry pattern for this card
//             const cardGeometry = geometryOptions[index % geometryOptions.length];

//             // Custom entry animation based on scroll direction
//             const cardEntryVariants = {
//               hidden: { 
//                 y: scrollDirection === 'down' ? 50 : -50, 
//                 opacity: 0,
//                 scale: 0.9
//               },
//               visible: { 
//                 y: 0, 
//                 opacity: 1,
//                 scale: 1,
//                 transition: { 
//                   type: "spring", 
//                   stiffness: 100, 
//                   damping: 15,
//                   delay: index * 0.1 
//                 }
//               }
//             };
            
//             // Special styling for card #2 (index 1)
//             const isLocationCard = index === 1;
//             const cardStyle = isLocationCard 
//               ? "bg-gradient-to-b from-blue-50 to-blue-100 ring-2 ring-blue-200" 
//               : "bg-white";

//             return (
//               <motion.div
//                 key={feature.id}
//                 ref={featureRefs.current[index]}
//                 className={`relative ${cardStyle} rounded-2xl overflow-hidden shadow-xl`}
//                 variants={cardEntryVariants}
//                 custom={index}
//                 onHoverStart={() => setHoveredCard(feature.id)}
//                 onHoverEnd={() => setHoveredCard(null)}
//                 whileHover={{
//                   y: -10,
//                   transition: { type: "spring", stiffness: 300, damping: 10 }
//                 }}
//               >
//                 {/* Card inner content with glossy effect */}
//                 <div className="p-6 aspect-square flex flex-col z-10 relative bg-opacity-40 backdrop-filter backdrop-blur-sm bg-gradient-to-br from-white via-white to-blue-50 border border-white border-opacity-40">
//                   {/* Unique Geometric accents for each card */}
//                   {cardGeometry.elements.map((element, elemIndex) => {
//                     const commonClasses = `absolute ${element.position} ${element.size} bg-gradient-to-br ${element.colors} ${element.opacity} ${element.rotation || ''}`;

//                     // Render different shapes based on type
//                     if (element.type === 'circle') {
//                       return <div key={elemIndex} className={`${commonClasses} rounded-full`}></div>;
//                     } else if (element.type === 'square') {
//                       return <div key={elemIndex} className={`${commonClasses} rounded-lg`}></div>;
//                     } else if (element.type === 'triangle') {
//                       return <div key={elemIndex} className={`${commonClasses}`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>;
//                     } else if (element.type === 'hexagon') {
//                       return <div key={elemIndex} className={`${commonClasses}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>;
//                     }
//                     return null;
//                   })}

//                   {/* Icon with animation - centered vertically */}
//                   <motion.div
//                     className={`relative w-16 h-16 mx-auto ${isLocationCard ? 'rounded-xl bg-indigo-600' : 'rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600'} flex items-center justify-center mb-4 shadow-lg`}
//                     animate={{
//                       scale: hoveredCard === feature.id ? [1, 1.1, 1] : 1,
//                       rotate: hoveredCard === feature.id ? [0, -10, 10, 0] : 0
//                     }}
//                     transition={{
//                       duration: 0.5,
//                       repeat: hoveredCard === feature.id ? Infinity : 0,
//                       repeatDelay: 3
//                     }}
//                   >
//                     <motion.div
//                       className="text-white"
//                       // No rotation animation as per request
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                       {feature.icon}
//                     </motion.div>
//                   </motion.div>

//                   {/* Title with gradient - centered */}
//                   <h3 className={`text-xl font-bold ${isLocationCard ? 'text-indigo-700' : 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700'} mb-2 text-center`}>
//                     {feature.title}
//                   </h3>

//                   {/* Description - flex-grow to push CTA to bottom */}
//                   <p className="text-indigo-800 leading-relaxed text-center text-sm flex-grow">
//                     {feature.description}
//                   </p>

//                   {/* Special yellow dot for the Location card */}
//                   {isLocationCard && (
//                     <div className="absolute bottom-8 right-8 w-16 h-16 bg-yellow-200 rounded-full opacity-70"></div>
//                   )}
//                 </div>

//                 {/* Glossy overlay - not for Location card */}
//                 {!isLocationCard && (
//                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-white opacity-30 pointer-events-none"></div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom accent with animation */}
//         <motion.div
//           className="mt-12 flex justify-center flex-col items-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.5 }}
//         >
//           <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
          
//           {/* Scroll progress indicator */}
//           <motion.div 
//             className="flex space-x-2 mt-2"
//             animate={{ 
//               x: scrollDirection === 'down' ? [0, 10, -10, 0] : [0, -10, 10, 0]
//             }}
//             transition={{ repeat: Infinity, duration: 4 }}
//           >
//             {[0, 1, 2, 3].map(i => (
//               <motion.div 
//                 key={i} 
//                 className="w-2 h-2 rounded-full bg-indigo-500"
//                 animate={{ 
//                   scale: [1, 1.5, 1],
//                   opacity: [0.5, 1, 0.5],
//                 }}
//                 transition={{ 
//                   repeat: Infinity, 
//                   duration: 2, 
//                   delay: i * 0.2,
//                   repeatType: "reverse"
//                 }}
//               />
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Features;


import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import { Map, Building, Navigation, Filter } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Map size={28} />,
    title: "Interactive Property Maps",
    description: "Explore properties directly on our interactive maps, allowing you to visualize locations and surroundings in real-time."
  },
  {
    id: 2,
    icon: <Navigation size={28} />,
    title: "Location-Based Search",
    description: "Find properties based on precise locations that match your specific needs and preferences."
  },
  {
    id: 3,
    icon: <Building size={28} />,
    title: "Connected Property Insights",
    description: "View relationships between properties, nearby amenities, and development projects all in one integrated platform."
  },
  {
    id: 4,
    icon: <Filter size={28} />,
    title: "Advanced Filtering Options",
    description: "Narrow down your search with powerful filters to find exactly what you're looking for based on location and preferences."
  },
];

const Features = () => {
  // Track which card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Refs for sections to track when they're in view
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const featureRefs = useRef(features.map(() => React.createRef()));

  // Check if sections are in view
  const headerInView = useInView(headerRef, { once: false, amount: 0.5 });
  const cardsInView = useInView(cardsRef, { once: false, amount: 0.2 });

  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effect values based on scroll
  const headerY = useTransform(smoothProgress, [0, 1], [100, -100]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Floating dots and geometric shapes for background
  const floatingElements = [
    // Small dots - increase duration values by 2-3x
    ...Array(30).fill(0).map((_, i) => ({
      id: `dot-${i}`,
      type: 'circle',
      size: 4 + Math.random() * 8,
      xPos: Math.random() * 100,
      yPos: Math.random() * 100,
      color: ['#E0E7FF', '#DBEAFE', '#FEE2E2', '#ECFCCB', '#E0F2FE'][Math.floor(Math.random() * 5)],
      delay: i * 0.05,
      duration: 35 + Math.random() * 45 // Increased from 15+20 to 35+45
    })),
    // Medium geometric shapes - increase duration values by 2-3x
    ...Array(15).fill(0).map((_, i) => ({
      id: `geo-${i}`,
      type: ['circle', 'square', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)],
      size: 20 + Math.random() * 50,
      xPos: Math.random() * 100,
      yPos: Math.random() * 100,
      rotation: Math.random() * 360,
      color: ['#818CF8', '#93C5FD', '#F9A8D4', '#A7F3D0', '#FCD34D'][Math.floor(Math.random() * 5)],
      delay: i * 0.1,
      duration: 50 + Math.random() * 40 // Increased from 25+15 to 50+40
    })),
    // Large shapes - increase duration values by 2-3x
    ...Array(6).fill(0).map((_, i) => ({
      id: `large-${i}`,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
      size: 80 + Math.random() * 120,
      xPos: Math.random() * 100,
      yPos: Math.random() * 100,
      rotation: Math.random() * 360,
      color: ['#C7D2FE', '#BFDBFE', '#DDD6FE', '#C4B5FD', '#BAE6FD'][Math.floor(Math.random() * 5)],
      delay: i * 0.15,
      duration: 70 + Math.random() * 50 // Increased from 30+20 to 70+50
    }))
  ];


  // Scroll direction indicator animation variants
  const scrollIndicatorVariants = {
    down: {
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
      transition: { repeat: Infinity, duration: 2 }
    },
    up: {
      y: [0, -10, 0],
      opacity: [0.5, 1, 0.5],
      transition: { repeat: Infinity, duration: 2 }
    }
  };

  return (
    <motion.div
      className="relative w-full overflow-hidden bg-gradient-to-br from-white to-blue-50 py-12 px-4"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ opacity: bgOpacity }}
    >
      {/* Scroll direction indicator - appears when scrolling */}
      {scrollDirection && (
        <motion.div
          className="fixed right-6 bottom-6 z-50 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg"
          variants={scrollIndicatorVariants}
          initial={{ opacity: 0, scale: 0 }}
          animate={scrollDirection === 'down' ? 'down' : 'up'}
          exit={{ opacity: 0, scale: 0 }}
        >
          {scrollDirection === 'down' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          )}
        </motion.div>
      )}

      {/* Progress bar that fills as user scrolls */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />

      {/* Geometric Background Elements - Simple floating animation without scroll dependency */}
      {floatingElements.map(element => (
        <motion.div
          key={element.id}
          className="absolute rounded-full"
          initial={{
            opacity: 0,
            rotate: element.rotation || 0,
          }}
          animate={{
            opacity: element.type === 'circle' ? 0.25 : 0.15,
            rotate: element.rotation ? element.rotation + 360 : 0,
            x: [0, 20, -20, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.xPos}%`,
            top: `${element.yPos}%`,
            backgroundColor: element.type !== 'triangle' && element.type !== 'hexagon' ? element.color : 'transparent',
            borderRadius: element.type === 'circle' ? '50%' : (element.type === 'square' ? '0' : '0'),
            clipPath: element.type === 'triangle'
              ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
              : element.type === 'hexagon'
                ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                : 'none',
            zIndex: 0,
            boxShadow: element.type === 'circle' || element.type === 'square'
              ? `0 4px 12px ${element.color}40`
              : 'none'
          }}
        />
      ))}

      {/* Gradient glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full filter blur-3xl opacity-10"
        style={{ y: useTransform(smoothProgress, [0, 1], [100, -100]) }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-purple-400 rounded-full filter blur-3xl opacity-10"
        style={{ y: useTransform(smoothProgress, [0, 1], [-100, 100]) }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-10"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
          style={{ y: headerY }}
        >
          <motion.div
            className="inline-block"
            variants={titleVariants}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg mb-4 text-indigo-600 text-sm font-medium">
              PROFO Space Features
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2"
            variants={titleVariants}
          >
            Why Choose PROFO Space
          </motion.h2>

          <motion.p
            className="text-xl text-indigo-900 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Revolutionizing real estate with our interactive map-based platform that connects you to properties exactly where you need them.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            // Unique geometric elements for each card
            const geometryOptions = [
              // Option 1: Circles in different positions
              {
                elements: [
                  { type: 'circle', position: '-top-8 -right-8', size: 'w-20 h-20', colors: 'from-indigo-200 to-blue-200', opacity: 'opacity-50' },
                  { type: 'circle', position: 'bottom-4 left-4', size: 'w-16 h-16', colors: 'from-purple-200 to-pink-200', opacity: 'opacity-30' }
                ]
              },
              // Option 2: Corner triangle and small circles
              {
                elements: [
                  { type: 'triangle', position: '-top-10 -left-10', size: 'w-32 h-32', colors: 'from-blue-200 to-cyan-200', opacity: 'opacity-40', rotation: 'rotate-45' },
                  { type: 'circle', position: 'bottom-6 right-6', size: 'w-12 h-12', colors: 'from-amber-200 to-yellow-200', opacity: 'opacity-40' }
                ]
              },
              // Option 3: Square and offset circle
              {
                elements: [
                  { type: 'square', position: '-bottom-6 -right-6', size: 'w-24 h-24', colors: 'from-emerald-200 to-teal-200', opacity: 'opacity-40', rotation: 'rotate-12' },
                  { type: 'circle', position: 'top-6 left-6', size: 'w-10 h-10', colors: 'from-violet-200 to-fuchsia-200', opacity: 'opacity-50' }
                ]
              },
              // Option 4: Hexagon and mini circles
              {
                elements: [
                  { type: 'hexagon', position: '-bottom-8 -left-8', size: 'w-28 h-28', colors: 'from-rose-200 to-pink-200', opacity: 'opacity-40', rotation: 'rotate-30' },
                  { type: 'circle', position: 'top-4 right-4', size: 'w-8 h-8', colors: 'from-sky-200 to-indigo-200', opacity: 'opacity-60' },
                  { type: 'circle', position: 'top-12 right-12', size: 'w-6 h-6', colors: 'from-blue-200 to-indigo-200', opacity: 'opacity-40' }
                ]
              }
            ];

            // Select geometry pattern for this card
            const cardGeometry = geometryOptions[index % geometryOptions.length];

            // Custom entry animation based on scroll direction
            const cardEntryVariants = {
              hidden: {
                y: scrollDirection === 'down' ? 50 : -50,
                opacity: 0,
                scale: 0.9
              },
              visible: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1
                }
              }
            };

            // Special styling for card #2 (index 1)
            const isLocationCard = index === 1;
            const cardStyle = isLocationCard
              ? "bg-gradient-to-b from-blue-50 to-blue-100 ring-2 ring-blue-200"
              : "bg-white";

            return (
              <motion.div
                key={feature.id}
                ref={featureRefs.current[index]}
                className={`relative ${cardStyle} rounded-2xl overflow-hidden shadow-xl`}
                variants={cardEntryVariants}
                custom={index}
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                {/* Card inner content with glossy effect */}
                <div className="p-6 aspect-square flex flex-col z-10 relative bg-opacity-40 backdrop-filter backdrop-blur-sm bg-gradient-to-br from-white via-white to-blue-50 border border-white border-opacity-40">
                  {/* Unique Geometric accents for each card */}
                  {cardGeometry.elements.map((element, elemIndex) => {
                    const commonClasses = `absolute ${element.position} ${element.size} bg-gradient-to-br ${element.colors} ${element.opacity} ${element.rotation || ''}`;

                    // Render different shapes based on type
                    if (element.type === 'circle') {
                      return <div key={elemIndex} className={`${commonClasses} rounded-full`}></div>;
                    } else if (element.type === 'square') {
                      return <div key={elemIndex} className={`${commonClasses} rounded-lg`}></div>;
                    } else if (element.type === 'triangle') {
                      return <div key={elemIndex} className={`${commonClasses}`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>;
                    } else if (element.type === 'hexagon') {
                      return <div key={elemIndex} className={`${commonClasses}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>;
                    }
                    return null;
                  })}

                  {/* Icon with animation - centered vertically */}
                  <motion.div
                    className={`relative w-16 h-16 mx-auto ${isLocationCard ? 'rounded-xl bg-indigo-600' : 'rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600'} flex items-center justify-center mb-4 shadow-lg`}
                    animate={{
                      scale: hoveredCard === feature.id ? [1, 1.1, 1] : 1,
                      rotate: hoveredCard === feature.id ? [0, -10, 10, 0] : 0
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: hoveredCard === feature.id ? Infinity : 0,
                      repeatDelay: 3
                    }}
                  >
                    <motion.div
                      className="text-white"
                      // No rotation animation as per request
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  {/* Title with gradient - centered */}
                  <h3 className={`text-xl font-bold ${isLocationCard ? 'text-indigo-700' : 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700'} mb-2 text-center`}>
                    {feature.title}
                  </h3>

                  {/* Description - flex-grow to push CTA to bottom */}
                  <p className="text-indigo-800 leading-relaxed text-center text-sm flex-grow">
                    {feature.description}
                  </p>

                  {/* Special yellow dot for the Location card */}
                  {isLocationCard && (
                    <div className="absolute bottom-8 right-8 w-16 h-16 bg-yellow-200 rounded-full opacity-70"></div>
                  )}
                </div>

                {/* Glossy overlay - not for Location card */}
                {!isLocationCard && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-white opacity-30 pointer-events-none"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom accent with animation */}
        <motion.div
          className="mt-12 flex justify-center flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>

          {/* Scroll progress indicator */}
          <motion.div
            className="flex space-x-2 mt-2"
            animate={{
              x: scrollDirection === 'down' ? [0, 10, -10, 0] : [0, -10, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            {[0, 1, 2, 3].map(i => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-indigo-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.2,
                  repeatType: "reverse"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;












