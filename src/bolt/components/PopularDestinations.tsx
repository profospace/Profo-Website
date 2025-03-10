// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MapPin, Phone } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { formatPrice } from '../../lib/utils';


// const PopularDestinations: React.FC = ({ currentCity }) => {
//   const { projects } = useSelector(state => state.homeFeed)
//   console.log(projects)

//   const navigate = useNavigate()

  




//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Projects In {currentCity}</h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our most sought-after locations with thousands of properties available
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects?.map((destination, index) => (
//             <div
//               key={index}
//               className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
//               onClick={() => navigation && navigate(`/api/details/project/${destination?.projectId}`)}
//             >
//               {/* Image Container */}
//               <div className="relative h-72 w-full overflow-hidden">
//                 <img
//                   src={destination?.gallery?.[0]?.images?.[0]}
//                   alt={destination?.name}
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
//                 />

//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Type Badge */}
//                 <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-xl px-4 py-[2px] rounded-full text-sm font-medium shadow-sm">
//                   {destination?.type}
//                 </div>

//                 {/* Heart Button */}
//                 {/* <button
//                     className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
//                 > */}
//                 <button
//                   className="absolute top-4 right-4 backdrop-blur-sm shadow-sm group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
//                 >
//                   <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
//                 </button>

//                 {/* Content Container */}
//                 <div className="absolute bottom-0 left-0 right-0 px-4 py-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300  bg-black/20 backdrop-blur-sm">
//                   <div className="space-y-3">
//                     {/* Price and Label Container */}
//                     <div className="text-white">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-md font-semibold line-clamp-1">{destination?.name}</h3>
//                         {/* <span className="text-md font-semibold">{bedrooms} BHK</span> */}
//                       </div>
//                       {/* <div className='text-xs text-gray-500'>{address}</div> */}
//                       <div className='flex justify-between items-center'>
//                         <div className='text-md text-white'>
//                           {destination?.overview?.priceRange?.min && destination?.overview?.priceRange?.max
//                             ? `₹ ${formatPrice(destination.overview.priceRange.min)} to ₹ ${formatPrice(destination.overview.priceRange.max)}`
//                             : destination?.overview?.priceRange?.min
//                               ? `Starts from ₹ ${formatPrice(destination.overview.priceRange.min)}`
//                               : destination?.overview?.priceRange?.max
//                                 ? `Up to ₹ ${formatPrice(destination.overview.priceRange.max)}`
//                                 : "Price On Request"}
//                         </div>

//                         <div className='flex gap-2 items-center'>
//                           <h1 className='text-xs'>Amenities</h1>
//                           <div className='rounded-full bg-black text-[10px] px-2 py-[1px]'>
//                             {destination?.amenities?.length}+
//                           </div>
//                         </div>
//                       </div>

//                     </div>

//                     <div className='min-h-8'>
//                       {destination?.connectedProperties?.length > 0 && (
//                         <div className="flex flex-wrap gap-1">
//                           {[...new Set(destination.connectedProperties.map((ele) => ele.bedrooms))].map((bedroom, index) => (
//                             <span
//                               key={index}
//                               className="px-2 py-1 text-xs rounded-full text-white bg-gray-900 border-gradient-to-r from-blue-500 to-purple-500 shadow-md"
//                             >
//                               {bedroom} BHK
//                             </span>
//                           ))}
//                         </div>
//                       )}
//                     </div>




//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-12 text-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#059669] hover:bg-emerald-700 shadow-md"
//             onClick={() => navigate('/main')}
//           >
//             View All Destinations
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PopularDestinations;


{/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div> */ }

// import React, { useState, useEffect, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MapPin, Phone } from 'lucide-react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { formatPrice } from '../../lib/utils';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { getAuthToken, getConfig } from '../../utils/config'; // Assuming you have these utility functions
// import { base_url } from '../../utils/base_url';


// const PopularDestinations = ({ currentCity }) => {
//   const { projects } = useSelector(state => state.homeFeed);
//   const { likedProperties } = useSelector(state => state.wishlist);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

  
//   // Local wishlist state for each project
//   const [localWishlistState, setLocalWishlistState] = useState({});

//   // Initialize local wishlist state based on Redux wishlist
//   useEffect(() => {
//     if (likedProperties && projects) {
//       const initialState = {};
//       projects.forEach(project => {
//         initialState[project.projectId] = likedProperties.some(
//           wish => wish?.propertyId?.post_id === project.projectId && wish?.entityType === 'project'
//         );
//       });
//       setLocalWishlistState(initialState);
//     }
//   }, [likedProperties, projects]);

//   const handleAddToWishlist = async (e, projectId) => {
//     e.stopPropagation(); // Prevent navigating to details page

//     // Check if user is authenticated
//     if (getAuthToken() === null) {
//       navigate('/signup');
//       toast.error("SignIn Required", {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       return;
//     }

//     // Toggle local state immediately for instant UI feedback
//     setLocalWishlistState(prev => ({
//       ...prev,
//       [projectId]: !prev[projectId]
//     }));

//     // Show appropriate toast message
//     const isCurrentlyWishlisted = localWishlistState[projectId];
//     const toastMessage = isCurrentlyWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist';

//     toast(toastMessage, {
//       icon: isCurrentlyWishlisted ? '💔' : '❤️',
//       style: {
//         borderRadius: '10px',
//         background: '#333',
//         color: '#fff',
//       },
//     });

//     try {
//       const response = await axios.post(`${base_url}/api/users/history/like`, {
//         projectId: projectId  // Note: Using projectId instead of propertyId
//       }, getConfig());
//       console.log('Project wishlist update response:', response);
//     } catch (error) {
//       // Revert local state if API call fails
//       setLocalWishlistState(prev => ({
//         ...prev,
//         [projectId]: !prev[projectId]
//       }));
//       toast.error('Failed to update wishlist', {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       console.error('Project wishlist update error:', error);
//     }
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Projects In {currentCity}</h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our most sought-after locations with thousands of properties available
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects?.map((destination, index) => (
//             <div
//               key={index}
//               className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
//               onClick={() => navigate(`/api/details/project/${destination?.projectId}`)}
//             >
//               {/* Image Container */}
//               <div className="relative h-72 w-full overflow-hidden">
//                 <img
//                   src={destination?.gallery?.[0]?.images?.[0]}
//                   alt={destination?.name}
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
//                 />

//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Type Badge */}
//                 <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-xl px-4 py-[2px] rounded-full text-sm font-medium shadow-sm">
//                   {destination?.type}
//                 </div>

//                 {/* Heart Button */}
//                 <button
//                   className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
//                   onClick={(e) => handleAddToWishlist(e, destination?.projectId)}
//                 >
//                   <Heart
//                     className={`w-5 h-5 ${localWishlistState[destination?.projectId]
//                         ? 'text-red-500 fill-red-500'
//                         : 'text-gray-600'
//                       } transition-colors`}
//                   />
//                 </button>

//                 {/* Content Container */}
//                 <div className="absolute bottom-0 left-0 right-0 px-4 py-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300  bg-black/20 backdrop-blur-sm">
//                   <div className="space-y-3">
//                     {/* Price and Label Container */}
//                     <div className="text-white">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-md font-semibold line-clamp-1">{destination?.name}</h3>
//                       </div>
//                       <div className='flex justify-between items-center'>
//                         <div className='text-md text-white'>
//                           {destination?.overview?.priceRange?.min && destination?.overview?.priceRange?.max
//                             ? `₹ ${formatPrice(destination.overview.priceRange.min)} to ₹ ${formatPrice(destination.overview.priceRange.max)}`
//                             : destination?.overview?.priceRange?.min
//                               ? `Starts from ₹ ${formatPrice(destination.overview.priceRange.min)}`
//                               : destination?.overview?.priceRange?.max
//                                 ? `Up to ₹ ${formatPrice(destination.overview.priceRange.max)}`
//                                 : "Price On Request"}
//                         </div>

//                         <div className='flex gap-2 items-center'>
//                           <h1 className='text-xs'>Amenities</h1>
//                           <div className='rounded-full bg-black text-[10px] px-2 py-[1px]'>
//                             {destination?.amenities?.length}+
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className='min-h-8'>
//                       {destination?.connectedProperties?.length > 0 && (
//                         <div className="flex flex-wrap gap-1">
//                           {[...new Set(destination.connectedProperties.map((ele) => ele.bedrooms))].map((bedroom, index) => (
//                             <span
//                               key={index}
//                               className="px-2 py-1 text-xs rounded-full text-white bg-gray-900 border-gradient-to-r from-blue-500 to-purple-500 shadow-md"
//                             >
//                               {bedroom} BHK
//                             </span>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-12 text-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#059669] hover:bg-emerald-700 shadow-md"
//             onClick={() => navigate('/main')}
//           >
//             View All Destinations
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PopularDestinations;

// import React, { useState, useEffect, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MapPin, Phone } from 'lucide-react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { formatPrice } from '../../lib/utils';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { getAuthToken, getConfig } from '../../utils/config'; // Assuming you have these utility functions
// import { base_url } from '../../utils/base_url';

// const PopularDestinations = ({ currentCity }) => {
//   const { projects } = useSelector(state => state.homeFeed);
//   const { likedProperties } = useSelector(state => state.wishlist);
//   const navigate = useNavigate();


//   const handleAddToWishlist = async (e, project) => {
//     e.stopPropagation(); // Prevent navigating to details page
    
//     // Check if user is authenticated
//     if (getAuthToken() === null) {
//       navigate('/signup');
//       toast.error("SignIn Required", {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       return;
//     }

//     // Check if this project is already in wishlist
//     const isWishlisted = likedProperties?.some(wish => 
//       wish?.propertyId?.post_id === project.projectId && 
//       (wish?.entityType === 'project' || wish?.entityType === undefined)
//     );

//     // Show appropriate toast message
//     const toastMessage = isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist';

//     toast(toastMessage, {
//       icon: isWishlisted ? '💔' : '❤️',
//       style: {
//         borderRadius: '10px',
//         background: '#333',
//         color: '#fff',
//       },
//     });

//     try {
//       const response = await axios.post(`${base_url}/api/users/history/like`, {
//         projectId: project.projectId
//       }, getConfig());
//       console.log('Project wishlist update response:', response);
      
//     } catch (error) {
//       toast.error('Failed to update wishlist', {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       console.error('Project wishlist update error:', error);
//     }
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Projects In {currentCity}</h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our most sought-after locations with thousands of properties available
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects?.map((destination, index) => {
//             // Check if this project is in wishlist
//             const isWishlisted = likedProperties?.some(wish => 
//               wish?.propertyId?.post_id === destination.projectId && 
//               (wish?.entityType === 'project' || wish?.entityType === undefined)
//             );
            
//             return (
//               <div
//                 key={index}
//                 className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => navigate(`/api/details/project/${destination?.projectId}`)}
//               >
//                 {/* Image Container */}
//                 <div className="relative h-72 w-full overflow-hidden">
//                   <img
//                     src={destination?.gallery?.[0]?.images?.[0]}
//                     alt={destination?.name}
//                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
//                   />

//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                   {/* Type Badge */}
//                   <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-xl px-4 py-[2px] rounded-full text-sm font-medium shadow-sm">
//                     {destination?.type}
//                   </div>

//                   {/* Heart Button */}
//                   <button
//                     className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
//                     onClick={(e) => handleAddToWishlist(e, destination)}
//                   >
//                     <Heart 
//                       className={`w-5 h-5 ${
//                         isWishlisted 
//                           ? 'text-red-500 fill-red-500' 
//                           : 'text-gray-600'
//                       } transition-colors`} 
//                     />
//                   </button>

//                   {/* Content Container */}
//                   <div className="absolute bottom-0 left-0 right-0 px-4 py-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300  bg-black/20 backdrop-blur-sm">
//                     <div className="space-y-3">
//                       {/* Price and Label Container */}
//                       <div className="text-white">
//                         <div className="flex items-center justify-between">
//                           <h3 className="text-md font-semibold line-clamp-1">{destination?.name}</h3>
//                         </div>
//                         <div className='flex justify-between items-center'>
//                           <div className='text-md text-white'>
//                             {destination?.overview?.priceRange?.min && destination?.overview?.priceRange?.max
//                               ? `₹ ${formatPrice(destination.overview.priceRange.min)} to ₹ ${formatPrice(destination.overview.priceRange.max)}`
//                               : destination?.overview?.priceRange?.min
//                                 ? `Starts from ₹ ${formatPrice(destination.overview.priceRange.min)}`
//                                 : destination?.overview?.priceRange?.max
//                                   ? `Up to ₹ ${formatPrice(destination.overview.priceRange.max)}`
//                                   : "Price On Request"}
//                           </div>

//                           <div className='flex gap-2 items-center'>
//                             <h1 className='text-xs'>Amenities</h1>
//                             <div className='rounded-full bg-black text-[10px] px-2 py-[1px]'>
//                               {destination?.amenities?.length}+
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className='min-h-8'>
//                         {destination?.connectedProperties?.length > 0 && (
//                           <div className="flex flex-wrap gap-1">
//                             {[...new Set(destination.connectedProperties.map((ele) => ele.bedrooms))].map((bedroom, index) => (
//                               <span
//                                 key={index}
//                                 className="px-2 py-1 text-xs rounded-full text-white bg-gray-900 border-gradient-to-r from-blue-500 to-purple-500 shadow-md"
//                               >
//                                 {bedroom} BHK
//                               </span>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-12 text-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#059669] hover:bg-emerald-700 shadow-md"
//             onClick={() => navigate('/main')}
//           >
//             View All Destinations
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PopularDestinations;


// import React, { useState, useEffect, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MapPin, Phone } from 'lucide-react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { formatPrice } from '../../lib/utils';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { getAuthToken, getConfig } from '../../utils/config';
// import { base_url } from '../../utils/base_url';

// const PopularDestinations = ({ currentCity }) => {
//   const { projects } = useSelector(state => state.homeFeed);
//   const { likedProperties } = useSelector(state => state.wishlist);
//   const navigate = useNavigate();

//   const handleAddToWishlist = async (e, project) => {
//     e.stopPropagation(); // Prevent navigating to details page

//     // Check if user is authenticated
//     if (getAuthToken() === null) {
//       navigate('/signup');
//       toast.error("SignIn Required", {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       return;
//     }

//     // Check if this project is already in wishlist
//     const isWishlisted = likedProperties?.some(wish =>
//       wish?.propertyId?.projectId === project.projectId &&
//       (wish?.entityType === 'project' || wish?.entityType === undefined)
//     );

//     // Show appropriate toast message based on current wishlist state
//     const toastMessage = isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist';

//     toast(toastMessage, {
//       icon: isWishlisted ? '💔' : '❤️',
//       style: {
//         borderRadius: '10px',
//         background: '#333',
//         color: '#fff',
//       },
//     });

//     try {
//       const response = await axios.post(`${base_url}/api/users/history/like`, {
//         projectId: project.projectId
//       }, getConfig());
//       console.log('Project wishlist update response:', response);

//     } catch (error) {
//       toast.error('Failed to update wishlist', {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       console.error('Project wishlist update error:', error);
//     }
//   };

//   // console.log(isWishlisted)

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Projects In {currentCity}</h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our most sought-after locations with thousands of properties available
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects?.map((destination, index) => {
//             // Check if this project is in wishlist
//             const isWishlisted = likedProperties?.some(wish =>
//               wish?.propertyId?.projectId === destination.projectId &&
//               (wish?.entityType === 'project' || wish?.entityType === undefined)
//             );

//             return (
//               <div
//                 key={index}
//                 className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => navigate(`/api/details/project/${destination?.projectId}`)}
//               >
//                 {/* Image Container */}
//                 <div className="relative h-72 w-full overflow-hidden">
//                   <img
//                     src={destination?.gallery?.[0]?.images?.[0]}
//                     alt={destination?.name}
//                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
//                   />

//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                   {/* Type Badge */}
//                   <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-xl px-4 py-[2px] rounded-full text-sm font-medium shadow-sm">
//                     {destination?.type}
//                   </div>

//                   {/* Heart Button */}
//                   <button
//                     className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
//                     onClick={(e) => handleAddToWishlist(e, destination)}
//                   >
//                     <Heart
//                       className={`w-5 h-5 ${isWishlisted
//                           ? 'text-red-500 fill-red-500'
//                           : 'text-gray-600'
//                         } transition-colors`}
//                     />
//                   </button>

//                   {/* Content Container */}
//                   <div className="absolute bottom-0 left-0 right-0 px-4 py-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300  bg-black/20 backdrop-blur-sm">
//                     <div className="space-y-3">
//                       {/* Price and Label Container */}
//                       <div className="text-white">
//                         <div className="flex items-center justify-between">
//                           <h3 className="text-md font-semibold line-clamp-1">{destination?.name}</h3>
//                         </div>
//                         <div className='flex justify-between items-center'>
//                           <div className='text-md text-white'>
//                             {destination?.overview?.priceRange?.min && destination?.overview?.priceRange?.max
//                               ? `₹ ${formatPrice(destination.overview.priceRange.min)} to ₹ ${formatPrice(destination.overview.priceRange.max)}`
//                               : destination?.overview?.priceRange?.min
//                                 ? `Starts from ₹ ${formatPrice(destination.overview.priceRange.min)}`
//                                 : destination?.overview?.priceRange?.max
//                                   ? `Up to ₹ ${formatPrice(destination.overview.priceRange.max)}`
//                                   : "Price On Request"}
//                           </div>

//                           <div className='flex gap-2 items-center'>
//                             <h1 className='text-xs'>Amenities</h1>
//                             <div className='rounded-full bg-black text-[10px] px-2 py-[1px]'>
//                               {destination?.amenities?.length}+
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className='min-h-8'>
//                         {destination?.connectedProperties?.length > 0 && (
//                           <div className="flex flex-wrap gap-1">
//                             {[...new Set(destination.connectedProperties.map((ele) => ele.bedrooms))].map((bedroom, index) => (
//                               <span
//                                 key={index}
//                                 className="px-2 py-1 text-xs rounded-full text-white bg-gray-900 border-gradient-to-r from-blue-500 to-purple-500 shadow-md"
//                               >
//                                 {bedroom} BHK
//                               </span>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-12 text-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#059669] hover:bg-emerald-700 shadow-md"
//             onClick={() => navigate('/main')}
//           >
//             View All Destinations
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PopularDestinations;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../lib/utils';
import { useWishlist } from '../../hooks/useWishlist';
import { useSelector } from 'react-redux';


const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();
  const { isInWishlist, handleToggleWishlist } = useWishlist();

  // Check if this project is in wishlist
  const isWishlisted = isInWishlist(project.projectId, 'project');

  // Handle wishlist button click
  const handleWishlistClick = (e) => {
    handleToggleWishlist(e, {
      entityId: project.projectId,
      entityType: 'project'
    });
  };

  return (
    <div
      key={index}
      className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/api/details/project/${project?.projectId}`)}
    >
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={project?.gallery?.[0]?.images?.[0]}
          alt={project?.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Type Badge */}
        <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-xl px-4 py-[2px] rounded-full text-sm font-medium shadow-sm">
          {project?.type}
        </div>

        {/* Heart Button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={handleWishlistClick}
        >
          <Heart
            className={`w-5 h-5 ${isWishlisted
                ? 'text-red-500 fill-red-500'
                : 'text-gray-600'
              } transition-colors`}
          />
        </button>

        {/* Content Container */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300  bg-black/20 backdrop-blur-sm">
          <div className="space-y-3">
            {/* Price and Label Container */}
            <div className="text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-md font-semibold line-clamp-1">{project?.name}</h3>
              </div>
              <div className='flex justify-between items-center'>
                <div className='text-md text-white'>
                  {project?.overview?.priceRange?.min && project?.overview?.priceRange?.max
                    ? `₹ ${formatPrice(project.overview.priceRange.min)} to ₹ ${formatPrice(project.overview.priceRange.max)}`
                    : project?.overview?.priceRange?.min
                      ? `Starts from ₹ ${formatPrice(project.overview.priceRange.min)}`
                      : project?.overview?.priceRange?.max
                        ? `Up to ₹ ${formatPrice(project.overview.priceRange.max)}`
                        : "Price On Request"}
                </div>

                <div className='flex gap-2 items-center'>
                  <h1 className='text-xs'>Amenities</h1>
                  <div className='rounded-full bg-black text-[10px] px-2 py-[1px]'>
                    {project?.amenities?.length}+
                  </div>
                </div>
              </div>
            </div>

            <div className='min-h-8'>
              {project?.connectedProperties?.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {[...new Set(project.connectedProperties.map((ele) => ele.bedrooms))].map((bedroom, index) => (
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
  );
};

const PopularDestinations = ({ currentCity }) => {
  const { projects } = useSelector(state => state.homeFeed);
  const navigate = useNavigate();

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
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Projects In {currentCity}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most sought-after locations with thousands of properties available
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, index) => (
            <ProjectCard key={project.projectId || index} project={project} index={index} />
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
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinations;

