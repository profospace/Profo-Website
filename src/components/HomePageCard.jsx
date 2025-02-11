import React from 'react';
import { Heart } from 'lucide-react';
import { base_url } from '../utils/base_url';
import { useNavigate } from 'react-router-dom';

const HomePageCard = ({ info, image, price, label, type, navigation }) => {
    const navigate = useNavigate()
    // console.log(info)
    return (

        <div className="relative overflow-hidden bg-white transition-shadow" onClick={() => navigate(navigation)}>
            <div className="relative h-48 w-full">
                <img
                    src={image}
                    alt={info?.name}
                    className="w-full h-full object-cover rounded-xl"
                />
                {type && (
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
                        {type}
                    </div>
                )}
                <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 hover:bg-white">
                    <Heart className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="mt-2">
                <div className="text-xl font-semibold">
                    {price}$
                </div>

                <h3 className="text-sm font-medium">{label}</h3>


            </div>

        </div>
    );
}

export default HomePageCard



// import React from 'react';
// import { Heart } from 'lucide-react';
// import { motion } from 'framer-motion';

// const HomePageCard = ({ info, image, price, label, type, navigation, contactList }) => {
//     return (
//         <motion.div
//             className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             onClick={() => navigation && navigate(navigation)}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.2 }}
//         >
//             {/* Image Container */}
//             <div className="relative h-72 md:h-80 w-full overflow-hidden">
//                 <motion.img
//                     src={image}
//                     alt={info?.name}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.4 }}
//                 />

//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Type Badge */}
//                 {type && (
//                     <motion.div
//                         className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium shadow-sm"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                     >
//                         {type}
//                     </motion.div>
//                 )}

//                 {/* Heart Button */}
//                 <motion.button
//                     className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
//                 </motion.button>

//                 {/* Content Container - Positioned at bottom of image */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                     <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.1 }}
//                         className="space-y-2"
//                     >
//                         <div className="flex items-center justify-between">
//                             <h3 className="text-lg font-semibold line-clamp-1">{label}</h3>
//                             <span className="text-xl font-bold">${price}</span>
//                         </div>
//                         <div>{contactList?.[0]}</div>
//                     </motion.div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default HomePageCard;

// import React from 'react';
// import { Heart, Phone } from 'lucide-react';

// const HomePageCard = ({ info, image, price, label, type, navigation, contactList }) => {
//     const handleContactClick = (e) => {
//         e.stopPropagation();
//         if (contactList?.[0]) {
//             window.location.href = `tel:${contactList[0]}`;
//         }
//     };

//     return (
//         <div
//             className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             onClick={() => navigation && navigate(navigation)}
//         >
//             {/* Image Container */}
//             <div className="relative h-72 md:h-80 w-full overflow-hidden">
//                 <img
//                     src={image}
//                     alt={info?.name}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />

//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Type Badge */}
//                 {type && (
//                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium shadow-sm">
//                         {type}
//                     </div>
//                 )}

//                 {/* Heart Button */}
//                 <button
//                     className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart"
//                 >
//                     <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
//                 </button>

//                 {/* Content Container */}
//                 <div className="absolute -bottom-12 left-0 right-0 p-4">
//                     {/* Price and Label Container - Moves up on hover */}
//                     <div className="transform transition-all duration-300 group-hover:-translate-y-8">
//                         <div className="text-white space-y-2">
//                             <div className="flex items-center justify-between">
//                                 <h3 className="text-lg font-semibold line-clamp-1">{label}</h3>
//                                 <span className="text-xl font-bold">${price}</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Button - Appears from bottom on hover */}
//                     <button
//                         onClick={handleContactClick}
//                         className="w-full mt-2 bg-white/90 backdrop-blur-sm text-gray-800 py-2 rounded-lg font-medium flex items-center justify-center gap-2 opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white"
//                     >
//                         <Phone className="w-4 h-4" />
//                         Contact Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePageCard;

// import React from 'react';
// import { Heart, Phone } from 'lucide-react';
// import { motion } from 'framer-motion';

// const HomePageCard = ({ info, image, price, label, type, navigation, contactList }) => {
//     const handleContactClick = (e) => {
//         e.stopPropagation();
//         if (contactList?.[0]) {
//             window.location.href = `tel:${contactList[0]}`;
//         }
//     };

//     return (
//         <motion.div
//             className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             onClick={() => navigation && navigate(navigation)}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.2 }}
//         >
//             {/* Image Container */}
//             <div className="relative h-72 md:h-80 w-full overflow-hidden">
//                 <motion.img
//                     src={image}
//                     alt={info?.name}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.4 }}
//                 />

//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Type Badge */}
//                 {type && (
//                     <motion.div
//                         className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium shadow-sm"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                     >
//                         {type}
//                     </motion.div>
//                 )}

//                 {/* Heart Button */}
//                 <motion.button
//                     className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
//                 </motion.button>

//                 {/* Content Container */}
//                 <div className="absolute -bottom-12 left-0 right-0 p-4">
//                     {/* Price and Label Container */}
//                     <motion.div
//                         className="text-white space-y-2"
//                         initial={{ y: 0 }}
//                         animate={{ y: 0 }}
//                         whileHover={{ y: -48 }}
//                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     >
//                         <div className="flex items-center justify-between">
//                             <h3 className="text-lg font-semibold line-clamp-1">{label}</h3>
//                             <span className="text-xl font-bold">${price}</span>
//                         </div>
//                     </motion.div>

//                     {/* Contact Button */}
//                     <motion.button
//                         onClick={handleContactClick}
//                         className="w-full mt-2 bg-white/90 backdrop-blur-sm text-gray-800 py-2 rounded-lg font-medium flex items-center justify-center gap-2"
//                         initial={{ y: 100, opacity: 0 }}
//                         whileHover={{
//                             y: -48,
//                             opacity: 1,
//                             transition: { type: "spring", stiffness: 300, damping: 30 }
//                         }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         <Phone className="w-4 h-4" />
//                         Contact Now
//                     </motion.button>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default HomePageCard;