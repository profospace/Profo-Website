// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Ad {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const ads: Ad[] = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
//     title: "Luxury Apartments in Downtown",
//     description: "Special offer: 10% discount for early birds",
//     link: "#"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     title: "Premium Villas with Ocean View",
//     description: "Limited time offer: Free interior design consultation",
//     link: "#"
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     title: "Exclusive Penthouse Collection",
//     description: "New properties just listed - Schedule a viewing today",
//     link: "#"
//   }
// ];

// const AdCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Auto-advance carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
//   };

//   const handlePrevious = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
//   };

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     }),
//     center: {
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     })
//   };

//   return (
//     <div className="relative h-[600px] overflow-hidden">
//       <AnimatePresence initial={false} custom={direction} mode="wait">
//         <motion.div
//           key={currentIndex}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 }
//           }}
//           className="absolute inset-0"
//         >
//           <div className="relative h-full">
//             <img 
//               src={ads[currentIndex].image} 
//               alt={ads[currentIndex].title} 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
//               <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg max-w-3xl">
//                 <span className="inline-block px-3 py-1 bg-[#059669] text-white text-xs font-semibold rounded-full mb-4">
//                   Sponsored
//                 </span>
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//                   {ads[currentIndex].title}
//                 </h2>
//                 <p className="text-xl text-white mb-6">
//                   {ads[currentIndex].description}
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#047857] bg-white hover:bg-gray-100 shadow-md"
//                 >
//                   Learn More
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation buttons */}
//       <button 
//         onClick={handlePrevious}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors z-10"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </button>
//       <button 
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors z-10"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//         {ads.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className={`h-2 w-2 rounded-full transition-all ${
//               index === currentIndex ? "bg-white w-6" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdCarousel;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Ad {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const ads: Ad[] = [
//   {
//     id: 1,
//     image: "https://www.passionroyalcottage.com/images/banner.jpg",
//     title: "Luxury Apartments in Downtown",
//     description: "Special offer: 10% discount for early birds",
//     link: "#"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     title: "Premium Villas with Ocean View",
//     description: "Limited time offer: Free interior design consultation",
//     link: "#"
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     title: "Exclusive Penthouse Collection",
//     description: "New properties just listed - Schedule a viewing today",
//     link: "#"
//   }
// ];

// const AdCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Auto-advance carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
//   };

//   const handlePrevious = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
//   };

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     }),
//     center: {
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     })
//   };

//   // Preload images to prevent flashing
//   useEffect(() => {
//     ads.forEach(ad => {
//       const img = new Image();
//       img.src = ad.image;
//     });
//   }, []);

//   return (
//     <div className="relative h-[600px] overflow-hidden">
//       {/* Background image layer - always visible */}
//       <div className="absolute inset-0">
//         {ads.map((ad, index) => (
//           <div
//             key={`bg-${ad.id}`}
//             className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
//               }`}
//             style={{
//               backgroundImage: `url(${ad.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//         ))}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div> */}
//       </div>

//       {/* Animated content */}
//       <AnimatePresence initial={false} custom={direction} mode="popLayout">
//         <motion.div
//           key={currentIndex}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 }
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
//             <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg max-w-3xl">
//               {/* <span className="inline-block px-3 py-1 bg-[#059669] text-white text-xs font-semibold rounded-full mb-4">
//                 Sponsored
//               </span> */}
//               <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white mb-4">
//                 {ads[currentIndex].title}
//               </h2>
//               <p className="text-xl text-white">
//                 {ads[currentIndex].description}
//               </p>
//               {/* <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#047857] bg-white hover:bg-gray-100 shadow-md"
//               >
//                 Learn More
//               </motion.button> */}
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation buttons */}
//       <button
//         onClick={handlePrevious}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors z-10"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors z-10"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//         {ads.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50 w-2"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdCarousel;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Ad {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const ads: Ad[] = [
//   {
//     id: 1,
//     image: "https://www.passionroyalcottage.com/images/banner.jpg",
//     title: "Luxury Apartments in Downtown",
//     description: "Special offer: 10% discount for early birds",
//     link: "#"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     title: "Premium Villas with Ocean View",
//     description: "Limited time offer: Free interior design consultation",
//     link: "#"
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     title: "Exclusive Penthouse Collection",
//     description: "New properties just listed - Schedule a viewing today",
//     link: "#"
//   }
// ];

// const AdCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Auto-advance carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
//   };

//   const handlePrevious = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
//   };

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     }),
//     center: {
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     })
//   };

//   // Preload images to prevent flashing
//   useEffect(() => {
//     ads.forEach(ad => {
//       const img = new Image();
//       img.src = ad.image;
//     });
//   }, []);

//   return (
//     <div className="relative h-[600px] flex flex-col justify-end overflow-hidden">
//       {/* Background image layer - always visible */}
//       <div className="absolute inset-0">
//         {ads.map((ad, index) => (
//           <div
//             key={`bg-${ad.id}`}
//             className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
//               }`}
//             style={{
//               backgroundImage: `url(${ad.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//       </div>

//       {/* Animated content - Positioned at bottom */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
//         {/* Navigation buttons - now positioned relative to the content container */}
//         <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2 sm:px-4">
//           <button
//             onClick={handlePrevious}
//             className="p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>
//         </div>

//         <AnimatePresence initial={false} custom={direction} mode="popLayout">
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.2 }
//             }}
//             className="flex flex-col items-center text-center"
//           >
//             <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg max-w-3xl">
//               <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white mb-2">
//                 {ads[currentIndex].title}
//               </h2>
//               <p className="text-xl text-white">
//                 {ads[currentIndex].description}
//               </p>
//               {/* <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
//               >
//                 Learn More
//               </motion.button> */}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Indicators at the bottom */}
//       <div className="relative flex justify-center space-x-2 z-10 mb-4">
//         {ads.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50 w-2"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdCarousel;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Ad {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const ads: Ad[] = [
  {
    id: 1,
    image: "https://www.passionroyalcottage.com/images/banner.jpg",
    title: "Luxury Apartments in Downtown",
    description: "Special offer: 10% discount for early birds",
    link: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Premium Villas with Ocean View",
    description: "Limited time offer: Free interior design consultation",
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Exclusive Penthouse Collection",
    description: "New properties just listed - Schedule a viewing today",
    link: "#"
  }
];

const AdCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Preload images to prevent flashing
  useEffect(() => {
    ads.forEach(ad => {
      const img = new Image();
      img.src = ad.image;
    });
  }, []);

  return (
    <div className="relative h-[600px] flex flex-col justify-end overflow-hidden">
      {/* Background image layer - always visible */}
      <div className="absolute inset-0">
        {ads.map((ad, index) => (
          <div
            key={`bg-${ad.id}`}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${ad.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
      </div>

      {/* Animated content - Positioned at bottom */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="relative mb-16 z-10 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center text-center">
            <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white mb-2">
                {ads[currentIndex].title}
              </h2>
              <p className="text-xl text-white mb-4">
                {ads[currentIndex].description}
              </p>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
              >
                Learn More
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators at the bottom */}
      <div className="relative bottom-4 flex justify-center space-x-2 z-10 mb-4">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50 w-2"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdCarousel;