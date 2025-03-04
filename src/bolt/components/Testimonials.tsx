// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     content: "Working with LuxEstate was an absolute pleasure. They found us our dream home in just two weeks! The entire process was smooth and stress-free.",
//     author: "Sarah Johnson",
//     role: "Homeowner",
//     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
//     rating: 5
//   },
//   {
//     id: 2,
//     content: "As first-time home buyers, we were nervous about the process. The team at LuxEstate guided us every step of the way with patience and expertise.",
//     author: "Michael Chen",
//     role: "First-time Buyer",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
//     rating: 5
//   },
//   {
//     id: 3,
//     content: "I've worked with many real estate agencies over the years, but LuxEstate stands out for their professionalism and attention to detail. Highly recommended!",
//     author: "Emily Rodriguez",
//     role: "Property Investor",
//     avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
//     rating: 4
//   }
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <section className="py-20 bg-[#ECFDF5]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Don't just take our word for it — hear from some of our satisfied clients.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-xl shadow-md p-8 relative"
//             >
//               <div className="absolute -top-5 left-8">
//                 <div className="flex space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-6 mt-4 italic">"{testimonial.content}"</p>
//               <div className="flex items-center">
//                 <img
//                   src={testimonial.avatar}
//                   alt={testimonial.author}
//                   className="h-12 w-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
//                   <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with LuxEstate was an absolute pleasure. They found us our dream home in just two weeks! The entire process was smooth and stress-free.",
    author: "Sarah Johnson",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    accentColor: "from-emerald-200 to-teal-300"
  },
  {
    id: 2,
    content: "As first-time home buyers, we were nervous about the process. The team at LuxEstate guided us every step of the way with patience and expertise.",
    author: "Michael Chen",
    role: "First-time Buyer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    accentColor: "from-blue-200 to-indigo-300"
  },
  {
    id: 3,
    content: "I've worked with many real estate agencies over the years, but LuxEstate stands out for their professionalism and attention to detail. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Property Investor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4,
    accentColor: "from-purple-200 to-pink-300"
  }
];

const Testimonials = () => {
  // Create the floating geometric shapes for background
  const createFloatingElements = () => {
    const shapes = [
      // Small dots
      ...Array(20).fill(0).map((_, i) => ({
        id: `dot-${i}`,
        type: 'circle',
        size: 4 + Math.random() * 8,
        xPos: Math.random() * 100,
        yPos: Math.random() * 100,
        color: ['#D1FAE5', '#ECFDF5', '#F0FDFA', '#CCFBF1', '#A7F3D0'][Math.floor(Math.random() * 5)],
        delay: i * 0.05,
        duration: 35 + Math.random() * 45
      })),
      // Medium geometric shapes
      ...Array(10).fill(0).map((_, i) => ({
        id: `geo-${i}`,
        type: ['circle', 'square', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)],
        size: 20 + Math.random() * 40,
        xPos: Math.random() * 100,
        yPos: Math.random() * 100,
        rotation: Math.random() * 360,
        color: ['#A7F3D0', '#6EE7B7', '#D8B4FE', '#93C5FD', '#FCD34D'][Math.floor(Math.random() * 5)],
        delay: i * 0.1,
        duration: 50 + Math.random() * 40
      })),
      // Large shapes
      ...Array(4).fill(0).map((_, i) => ({
        id: `large-${i}`,
        type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
        size: 80 + Math.random() * 100,
        xPos: Math.random() * 100,
        yPos: Math.random() * 100,
        rotation: Math.random() * 360,
        color: ['#ECFDF5', '#D1FAE5', '#A7F3D0', '#BAE6FD', '#DBEAFE'][Math.floor(Math.random() * 5)],
        delay: i * 0.15,
        duration: 70 + Math.random() * 50
      }))
    ];
    return shapes;
  };

  const floatingElements = createFloatingElements();

  // Geometric elements specific to each card
  const cardGeometries = [
    {
      elements: [
        { type: 'circle', position: '-top-6 -right-6', size: 'w-20 h-20', colors: 'from-emerald-100 to-teal-200', opacity: 'opacity-50' },
        { type: 'circle', position: 'bottom-4 left-4', size: 'w-16 h-16', colors: 'from-green-100 to-emerald-200', opacity: 'opacity-30' }
      ]
    },
    {
      elements: [
        { type: 'triangle', position: '-top-8 -left-8', size: 'w-24 h-24', colors: 'from-blue-100 to-indigo-200', opacity: 'opacity-40', rotation: 'rotate-45' },
        { type: 'circle', position: 'bottom-6 right-6', size: 'w-12 h-12', colors: 'from-cyan-100 to-blue-200', opacity: 'opacity-40' }
      ]
    },
    {
      elements: [
        { type: 'square', position: '-bottom-6 -right-6', size: 'w-24 h-24', colors: 'from-purple-100 to-pink-200', opacity: 'opacity-40', rotation: 'rotate-12' },
        { type: 'circle', position: 'top-6 left-6', size: 'w-10 h-10', colors: 'from-violet-100 to-purple-200', opacity: 'opacity-50' }
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background with soft transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-teal-50"></div>
      
      {/* Floating geometric shapes in background */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#059669] to-teal-700">
            What Our Clients Say
          </h2>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it — hear from some of our satisfied clients.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-6"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              {/* Glass-like card with gradient border */}
              <div className="relative h-full bg-white backdrop-filter backdrop-blur-sm bg-opacity-90 border border-white border-opacity-40 p-8 pt-10 flex flex-col">
                {/* Card geometric accents */}
                {cardGeometries[index].elements.map((element, elemIndex) => {
                  const commonClasses = `absolute ${element.position} ${element.size} bg-gradient-to-br ${element.colors} ${element.opacity} ${element.rotation || ''}`;
                  
                  if (element.type === 'circle') {
                    return <div key={elemIndex} className={`${commonClasses} rounded-full`}></div>;
                  } else if (element.type === 'square') {
                    return <div key={elemIndex} className={`${commonClasses} rounded-lg`}></div>;
                  } else if (element.type === 'triangle') {
                    return <div key={elemIndex} className={`${commonClasses}`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>;
                  }
                  return null;
                })}

                {/* Top quote icon with animation */}
                <motion.div
                  className={`absolute -top-6 -right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r ${testimonial.accentColor}`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Quote className="h-6 w-6 text-white transform rotate-180" />
                </motion.div>

                {/* Rating stars with glow effect */}
                <div className="mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                      >
                        <Star
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400 drop-shadow-md' : 'text-gray-300'}`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Content with subtle animation */}
                <motion.p 
                  className="text-gray-700 mb-6 relative z-10 leading-relaxed flex-grow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  "{testimonial.content}"
                </motion.p>
                
                {/* Author information with refined styling */}
                <div className="flex items-center mt-4 relative z-10">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.accentColor} blur-sm opacity-70`}></div>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover border-2 border-white relative"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-white opacity-30 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom accent with animation */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div 
            className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-teal-600 rounded-full shadow-md text-white font-medium hover:shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            See All Testimonials
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;


