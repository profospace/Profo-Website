// // import React, { useState, useEffect } from 'react';
// // import { Heart, MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';
// // import { getConfig } from '../utils/config';
// // import { base_url } from '../utils/base_url';
// // import { getWishlist } from '../redux/features/wishlist/wishlistSlice';
// // import { useSelector } from 'react-redux';



// // const Wishlist = () => {
// //   const [error, setError] = useState(null);

// //   const {wishlist} = useSelector(state => state.wishlist)

// //   useEffect(() => {
// //     getWishlist()
// //   }, []);


// //   const formatPrice = (price) => {
// //     return new Intl.NumberFormat('en-IN', {
// //       style: 'currency',
// //       currency: 'INR',
// //       maximumFractionDigits: 0
// //     }).format(price);
// //   };


// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="text-red-500 text-center">
// //           <h3 className="text-lg font-semibold">Error</h3>
// //           <p>{error}</p>
// //         </div>
// //       </div>
// //     );
// //   }



// //   return (
// //     <div className="min-h-screen">
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="flex items-center justify-between mb-8">
// //           <div>
// //             <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
// //             <p className="text-gray-600 mt-2">{wishlist.length} saved properties</p>
// //           </div>
// //         </div>

// //         <div className="flex flex-col space-y-6">
// //           {wishlist.map((item) => (
// //             <div
// //               key={item._id}
// //               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row"
// //             >
// //               {/* Image Section */}
// //               <div className="relative w-full sm:w-72 h-48 sm:h-auto flex-shrink-0">
// //                 <img
// //                   src={item.propertyId.post_images?.[0]?.url || item.propertyId.galleryList?.[0] || "/api/placeholder/400/300"}
// //                   alt={item.propertyId.post_title}
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute top-4 right-4">
// //                   <button
// //                     onClick={() => removeFromWishlist(item.propertyId.post_id)}
// //                     className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors duration-200"
// //                   >
// //                     <Trash2 className="w-5 h-5 text-red-500" />
// //                   </button>
// //                 </div>
// //                 <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
// //                   {item.propertyId.status}
// //                 </div>
// //               </div>

// //               {/* Content Section */}
// //               <div className="flex-1 p-5 flex flex-col justify-between">
// //                 <div>
// //                   <div className="flex justify-between items-start mb-3">
// //                     <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
// //                       {item.propertyId.post_title}
// //                     </h3>
// //                     <p className="text-lg font-bold text-blue-600 ml-4">
// //                       {formatPrice(item.propertyId.price)}
// //                     </p>
// //                   </div>

// //                   <div className="flex items-center text-gray-600 mb-3">
// //                     <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
// //                     <p className="text-sm line-clamp-1">
// //                       {item.propertyId.locality}, {item.propertyId.city}
// //                     </p>
// //                   </div>

// //                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
// //                     {item.propertyId.post_description}
// //                   </p>
// //                 </div>

// //                 <div className="mt-auto">
// //                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
// //                     <div className="flex items-center space-x-6">
// //                       <div className="flex items-center text-gray-700">
// //                         <Bed className="w-4 h-4 mr-1" />
// //                         <span className="text-sm">{item.propertyId.bedrooms} Beds</span>
// //                       </div>
// //                       <div className="flex items-center text-gray-700">
// //                         <Bath className="w-4 h-4 mr-1" />
// //                         <span className="text-sm">{item.propertyId.bathrooms} Baths</span>
// //                       </div>
// //                       <div className="flex items-center text-gray-700">
// //                         <Square className="w-4 h-4 mr-1" />
// //                         <span className="text-sm">{item.propertyId.area}</span>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="mt-4 text-xs text-gray-500">
// //                     Saved on {new Date(item.savedAt).toLocaleDateString()}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {wishlist.length === 0 && (
// //           <div className="text-center py-16">
// //             <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
// //             <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
// //             <p className="text-gray-500">Start saving properties you like and they will appear here</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );


// // };

// // export default Wishlist;

// import React, { useState, useEffect } from 'react';
// import { Heart, MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';
// import { getConfig } from '../utils/config';
// import { base_url } from '../utils/base_url';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { getWishlist } from '../redux/features/Wishlist/wishlistSlice';

// const Wishlist = () => {
//   const [error, setError] = useState(null);
//   const { wishlist } = useSelector(state => state.wishlist);
//   const [localWishlist, setLocalWishlist] = useState([]);
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   console.log(localWishlist)
//   useEffect(() => {
//     dispatch(getWishlist())
//   }, []);

//   useEffect(() => {
//     setLocalWishlist(wishlist);
//   }, [wishlist]);

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0
//     }).format(price);
//   };

//   const removeFromWishlist = async (e,post_id) => {
//     e.stopPropagation()
//     // Update local state immediately for instant UI feedback
//     setLocalWishlist(prev => prev.filter(item => item?.propertyId?.post_id !== post_id));

//     // Show toast notification
//     toast('Removed from Wishlist', {
//       icon: '💔',
//       style: {
//         borderRadius: '10px',
//         background: '#333',
//         color: '#fff',
//       },
//     });

//     try {
//       const response = await axios.post(`${base_url}/api/users/history/like`, {
//         propertyId: post_id
//       }, getConfig());
//       console.log(response);
//     } catch (error) {
//       // Revert local state if API call fails
//       setLocalWishlist(wishlist);
//       toast.error('Failed to remove from wishlist', {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       console.log(error);
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-red-500 text-center">
//           <h3 className="text-lg font-semibold">Error</h3>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   useEffect(() => {
//     // Sort wishlist items by savedAt timestamp in descending order (newest first)
//     const sortedWishlist = [...wishlist].sort((a, b) =>
//       new Date(b.savedAt) - new Date(a.savedAt)
//     );
//     setLocalWishlist(sortedWishlist);
//   }, [wishlist]);

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
//             <p className="text-gray-600 mt-2">{localWishlist?.length} saved properties</p>
//           </div>
//         </div>

//         <div className="flex flex-col space-y-6">
//           {localWishlist?.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row"
//               onClick={() => navigate(`/api/details/${item ?.propertyId?.post_id}`)}
//             >
//               {/* Image Section */}
//               <div className="relative w-full sm:w-72 h-48 sm:h-auto flex-shrink-0">
//                 <img
//                   src={item?.propertyId?.post_images?.[0]?.url || item?.propertyId?.galleryList?.[0] || item.propertyId.galleryList?.[1] || "/api/placeholder/400/300"}
//                   alt={item?.propertyId?.post_title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <button
//                     onClick={(e) => removeFromWishlist(e,item?.propertyId?.post_id)}
//                     className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors duration-200"
//                   >
//                     <Trash2 className="w-5 h-5 text-red-500" />
//                   </button>
//                 </div>
//                 <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
//                   {item?.propertyId?.status}
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="flex-1 p-5 flex flex-col justify-between">
//                 <div>
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
//                       {item?.propertyId?.post_title}
//                     </h3>
//                     <p className="text-lg font-bold text-blue-600 ml-4">
//                       {formatPrice(item?.propertyId?.price)}
//                     </p>
//                   </div>

//                   <div className="flex items-center text-gray-600 mb-3">
//                     <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
//                     <p className="text-sm line-clamp-1">
//                       {item?.propertyId?.locality}, {item?.propertyId?.city}
//                     </p>
//                   </div>

//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                     {item?.propertyId?.post_description}
//                   </p>
//                 </div>

//                 <div className="mt-auto">
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <div className="flex items-center space-x-6">
//                       <div className="flex items-center text-gray-700">
//                         <Bed className="w-4 h-4 mr-1" />
//                         <span className="text-sm">{item?.propertyId?.bedrooms} Beds</span>
//                       </div>
//                       <div className="flex items-center text-gray-700">
//                         <Bath className="w-4 h-4 mr-1" />
//                         <span className="text-sm">{item?.propertyId?.bathrooms} Baths</span>
//                       </div>
//                       <div className="flex items-center text-gray-700">
//                         <Square className="w-4 h-4 mr-1" />
//                         <span className="text-sm">{item?.propertyId?.area}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-4 text-xs text-gray-500">
//                     Saved on {new Date(item?.savedAt).toLocaleDateString()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {localWishlist.length === 0 && (
//           <div className="text-center py-16">
//             <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
//             <p className="text-gray-500">Start saving properties you like and they will appear here</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

// import React, { useState, useEffect } from 'react';
// import { Heart, MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';
// import { getConfig } from '../utils/config';
// import { base_url } from '../utils/base_url';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { getWishlist } from '../redux/features/Wishlist/wishlistSlice';
// import { motion } from 'framer-motion';
// import WishlistCard from '../components/testing/WishlistCard';

// const Wishlist = () => {
//   const [error, setError] = useState(null);
//   const { likedProperties, viewedProperties } = useSelector(state => state.wishlist);
//   const [localWishlist, setLocalWishlist] = useState([]);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getWishlist());
//   }, [dispatch]);

//   useEffect(() => {
//     setLocalWishlist(likedProperties);
//   }, [likedProperties]);

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0
//     }).format(price);
//   };

//   const removeFromWishlist = async (e, post_id) => {
//     e.stopPropagation();
//     // Update local state immediately for instant UI feedback
//     setLocalWishlist(prev => prev.filter(item => item?.propertyId?.post_id !== post_id));

//     // Show toast notification
//     toast('Removed from Wishlist', {
//       icon: '💔',
//       style: {
//         borderRadius: '10px',
//         background: '#333',
//         color: '#fff',
//       },
//     });

//     try {
//       const response = await axios.post(`${base_url}/api/users/history/like`, {
//         propertyId: post_id
//       }, getConfig());
//       console.log(response);
//     } catch (error) {
//       // Revert local state if API call fails
//       setLocalWishlist(wishlist);
//       toast.error('Failed to remove from wishlist', {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       console.log(error);
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-red-500 text-center">
//           <h3 className="text-lg font-semibold">Error</h3>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   useEffect(() => {
//     // Sort wishlist items by savedAt timestamp in descending order (newest first)
//     const sortedWishlist = [...likedProperties].sort((a, b) =>
//       new Date(b.savedAt) - new Date(a.savedAt)
//     );
//     setLocalWishlist(sortedWishlist);
//   }, [likedProperties]);

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
//             <p className="text-gray-600 mt-2">{localWishlist?.length} saved properties</p>
//           </div>
//         </div>

//         {localWishlist?.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {localWishlist.map((item, index) => (
//               <WishlistCard
//                 key={item._id}
//                 item={item}
//                 index={index}
//                 removeFromWishlist={removeFromWishlist}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
//             <p className="text-gray-500">Start saving properties you like and they will appear here</p>
//           </div>
//         )}
//       </div>
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             {/* <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1> */}
//             <p className="text-gray-600 mt-2">{viewedProperties?.length} visited properties</p>
//           </div>
//         </div>

//         {viewedProperties?.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {viewedProperties.map((item, index) => (
//               <WishlistCard
//                 key={item._id}
//                 item={item}
//                 index={index}
//                 // removeFromWishlist={removeFromWishlist}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
//             <p className="text-gray-500">Start saving properties you like and they will appear here</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

// import React, { useState, useEffect } from 'react';
// import { Heart, MapPin, Bed, Bath, Square, Trash2, Building, Home, Phone } from 'lucide-react';
// import { getConfig } from '../utils/config';
// import { base_url } from '../utils/base_url';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { getWishlist } from '../redux/features/Wishlist/wishlistSlice';
// import { motion, AnimatePresence } from 'framer-motion';
// import WishlistCard from '../components/testing/WishlistCard';

// const Wishlist = () => {
//   const [error, setError] = useState(null);
//   const { likedProperties, viewedProperties, contactedProperties } = useSelector(state => state.wishlist);
//   const [localLikedProperties, setLocalLikedProperties] = useState([]);
//   const [localViewedProperties, setLocalViewedProperties] = useState([]);
//   const [localContactedProperties, setLocalContactedProperties] = useState([]);
//   const [activeTab, setActiveTab] = useState('saved');
//   const [visibleLikedCount, setVisibleLikedCount] = useState(4);
//   const [visibleViewedCount, setVisibleViewedCount] = useState(4);
//   const [visibleContactedCount, setVisibleContactedCount] = useState(4);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getWishlist());
//   }, [dispatch]);

//   useEffect(() => {
//     if (likedProperties) {
//       // Group liked properties by entity type
//       const sortedLikedProperties = [...likedProperties].sort((a, b) =>
//         new Date(b.savedAt) - new Date(a.savedAt)
//       );
//       setLocalLikedProperties(sortedLikedProperties);
//     }

//     if (viewedProperties) {
//       const sortedViewedProperties = [...viewedProperties].sort((a, b) =>
//         new Date(b.timestamp) - new Date(a.timestamp)
//       );
//       setLocalViewedProperties(sortedViewedProperties);
//     }

//     if (contactedProperties) {
//       const sortedContactedProperties = [...contactedProperties || []].sort((a, b) =>
//         new Date(b.timestamp) - new Date(a.timestamp)
//       );
//       setLocalContactedProperties(sortedContactedProperties);
//     }
//   }, [likedProperties, viewedProperties, contactedProperties]);

//   const removeFromWishlist = async (e, itemId, entityType) => {
//     e.stopPropagation();
//     // Update local state immediately for instant UI feedback
//     setLocalLikedProperties(prev => prev.filter(item => item._id !== itemId));

//     // Show toast notification
//     toast('Removed from Wishlist', {
//       icon: '💔',
//       style: {
//         borderRadius: '10px',
//         background: '#333',
//         color: '#fff',
//       },
//     });

//     try {
//       // Adjust endpoint based on entity type if needed
//       const endpoint = entityType === 'property'
//         ? `${base_url}/api/users/history/like`
//         : `${base_url}/api/users/history/like`;

//       const response = await axios.post(endpoint, {
//         propertyId: itemId
//       }, getConfig());
//       console.log(response);
//     } catch (error) {
//       // Revert local state if API call fails
//       toast.error('Failed to remove from wishlist', {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       console.log(error);
//     }
//   };

//   const getEntitiesByType = (items, type) => {
//     return items.filter(item => item.entityType === type);
//   };

//   const getLikedProperties = () => getEntitiesByType(localLikedProperties, 'property');
//   const getLikedProjects = () => getEntitiesByType(localLikedProperties, 'project');
//   const getLikedBuildings = () => getEntitiesByType(localLikedProperties, 'building');

//   const tabVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1
//       }
//     },
//     exit: {
//       opacity: 0,
//       y: -20,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-red-500 text-center">
//           <h3 className="text-lg font-semibold">Error</h3>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen px-5">
//       <div className=" mx-auto px-4 py-8">
//         {/* Tab Navigation */}
//         <div className="mb-8 border-b border-gray-200">
//           <div className="flex space-x-8">
//             <motion.button
//               className={`pb-4 px-4 relative ${activeTab === 'saved' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
//               onClick={() => setActiveTab('saved')}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="flex items-center">
//                 <Heart className="w-5 h-5 mr-2" />
//                 <span>{localLikedProperties.length} Saved</span>
//               </div>
//               {activeTab === 'saved' && (
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
//                   layoutId="activeTab"
//                 />
//               )}
//             </motion.button>

//             <motion.button
//               className={`pb-4 px-4 relative ${activeTab === 'viewed' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
//               onClick={() => setActiveTab('viewed')}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="flex items-center">
//                 <Home className="w-5 h-5 mr-2" />
//                 <span>{localViewedProperties.length} Viewed</span>
//               </div>
//               {activeTab === 'viewed' && (
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
//                   layoutId="activeTab"
//                 />
//               )}
//             </motion.button>

//             <motion.button
//               className={`pb-4 px-4 relative ${activeTab === 'contacted' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
//               onClick={() => setActiveTab('contacted')}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="flex items-center">
//                 <Phone className="w-5 h-5 mr-2" />
//                 <span>{localContactedProperties.length} Contacted</span>
//               </div>
//               {activeTab === 'contacted' && (
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
//                   layoutId="activeTab"
//                 />
//               )}
//             </motion.button>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <AnimatePresence mode="wait">
//           {activeTab === 'saved' && (
//             <motion.div
//               key="saved"
//               variants={tabVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {/* Liked Properties */}
//               {getLikedProperties().length > 0 && (
//                 <div className="mb-12">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Saved Properties</h2>
//                     {getLikedProperties().length > 4 && (
//                       <button
//                         onClick={() => setVisibleLikedCount(prev => prev === 4 ? getLikedProperties().length : 4)}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {visibleLikedCount === 4 ? 'View All' : 'Show Less'}
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {getLikedProperties().slice(0, visibleLikedCount).map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         removeFromWishlist={removeFromWishlist}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Liked Projects */}
//               {getLikedProjects().length > 0 && (
//                 <div className="mb-12">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Saved Projects</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {getLikedProjects().map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         removeFromWishlist={removeFromWishlist}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Liked Buildings */}
//               {getLikedBuildings().length > 0 && (
//                 <div className="mb-12">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Saved Buildings</h2>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {getLikedBuildings().map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         removeFromWishlist={removeFromWishlist}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {localLikedProperties.length === 0 && (
//                 <div className="text-center py-16">
//                   <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
//                   <p className="text-gray-500">Start saving properties you like and they will appear here</p>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {activeTab === 'viewed' && (
//             <motion.div
//               key="viewed"
//               variants={tabVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {localViewedProperties.length > 0 ? (
//                 <div>
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Viewed Properties</h2>
//                     {localViewedProperties.length > 4 && (
//                       <button
//                         onClick={() => setVisibleViewedCount(prev => prev === 4 ? localViewedProperties.length : 4)}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {visibleViewedCount === 4 ? 'View All' : 'Show Less'}
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {localViewedProperties.slice(0, visibleViewedCount).map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         viewedItem={true}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-16">
//                   <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-700 mb-2">No viewed properties</h3>
//                   <p className="text-gray-500">Properties you view will appear here</p>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {activeTab === 'contacted' && (
//             <motion.div
//               key="contacted"
//               variants={tabVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {localContactedProperties.length > 0 ? (
//                 <div>
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Contacted Properties</h2>
//                     {localContactedProperties.length > 4 && (
//                       <button
//                         onClick={() => setVisibleContactedCount(prev => prev === 4 ? localContactedProperties.length : 4)}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {visibleContactedCount === 4 ? 'View All' : 'Show Less'}
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {localContactedProperties.slice(0, visibleContactedCount).map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         contactedItem={true}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-16">
//                   <Phone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-700 mb-2">No contacted properties</h3>
//                   <p className="text-gray-500">Properties you contact will appear here</p>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

// import React, { useState, useEffect } from 'react';
// import { Heart, MapPin, Bed, Bath, Square, Trash2, Building, Home, Phone } from 'lucide-react';
// import { getConfig } from '../utils/config';
// import { base_url } from '../utils/base_url';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { getWishlist } from '../redux/features/Wishlist/wishlistSlice';
// import { motion, AnimatePresence } from 'framer-motion';
// import WishlistCard from '../components/testing/WishlistCard';

// const Wishlist = () => {
//   const [error, setError] = useState(null);
//   const { likedProperties, viewedProperties, contactedProperties } = useSelector(state => state.wishlist);
//   const [localLikedProperties, setLocalLikedProperties] = useState([]);
//   const [localViewedProperties, setLocalViewedProperties] = useState([]);
//   const [localContactedProperties, setLocalContactedProperties] = useState([]);
//   const [activeTab, setActiveTab] = useState('saved');
//   const [visibleLikedCount, setVisibleLikedCount] = useState(4);
//   const [visibleViewedCount, setVisibleViewedCount] = useState(4);
//   const [visibleContactedCount, setVisibleContactedCount] = useState(4);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = getConfig()?.headers?.Authorization?.split(' ')?.[1];

//     if (token) {
//       dispatch(getWishlist());
//     }
//   }, []);

//   useEffect(() => {
//     if (likedProperties) {
//       // Group liked properties by entity type
//       const sortedLikedProperties = [...likedProperties].sort((a, b) =>
//         new Date(b.savedAt) - new Date(a.savedAt)
//       );
//       setLocalLikedProperties(sortedLikedProperties);
//     }

//     if (viewedProperties) {
//       const sortedViewedProperties = [...viewedProperties].sort((a, b) =>
//         new Date(b.timestamp) - new Date(a.timestamp)
//       );
//       setLocalViewedProperties(sortedViewedProperties);
//     }

//     if (contactedProperties) {
//       const sortedContactedProperties = [...contactedProperties || []].sort((a, b) =>
//         new Date(b.timestamp) - new Date(a.timestamp)
//       );
//       setLocalContactedProperties(sortedContactedProperties);
//     }
//   }, [likedProperties, viewedProperties, contactedProperties]);

//   // const removeFromWishlist = async (e, itemId, entityType) => {
//   //   e.stopPropagation();

//   //   // Get the correct ID based on entity type
//   //   let propertyId;
//   //   let projectId;
//   //   let buildingId;
//   //   const item = localLikedProperties.find(item => item._id === itemId);

//   //   if (item && item.propertyId) {
//   //     if (entityType === 'property') {
//   //       propertyId = item.propertyId.post_id;
//   //     } else if (entityType === 'project') {
//   //       projectId = item.propertyId.projectId;
//   //     } else if (entityType === 'building') {
//   //       buildingId = item.propertyId.buildingId;
//   //     }
//   //   }

//   //   if (!propertyId ) {
//   //     console.error('Could not find property ID');
//   //     return;
//   //   }

//   //   // Update local state immediately for instant UI feedback
//   //   setLocalLikedProperties(prev => prev.filter(item => item._id !== itemId));

//   //   // Show toast notification
//   //   toast('Removed from Wishlist', {
//   //     icon: '💔',
//   //     style: {
//   //       borderRadius: '10px',
//   //       background: '#333',
//   //       color: '#fff',
//   //     },
//   //   });

//   //   try {
//   //     // Adjust endpoint based on entity type if needed
//   //     const endpoint = `${base_url}/api/users/history/like`;

//   //     const response = await axios.post(endpoint, {
//   //       propertyId: propertyId
//   //     }, getConfig());
//   //     console.log(response);
//   //   } catch (error) {
//   //     // Revert local state if API call fails
//   //     toast.error('Failed to remove from wishlist', {
//   //       style: {
//   //         borderRadius: '10px',
//   //         background: '#333',
//   //         color: '#fff',
//   //       },
//   //     });
//   //     console.log(error);
//   //   }
//   // };

//   const removeFromWishlist = async (e, itemId, entityType) => {
//     e.stopPropagation();

//     // Get the correct ID based on entity type
//     let propertyId;
//     let projectId;
//     let buildingId;
//     const item = localLikedProperties.find(item => item._id === itemId);

//     if (item && item.propertyId) {
//       if (entityType === 'property') {
//         propertyId = item.propertyId.post_id;
//       } else if (entityType === 'project') {
//         projectId = item.propertyId.projectId;
//       } else if (entityType === 'building') {
//         buildingId = item.propertyId.buildingId;
//       }
//     }

//     // Update local state immediately for instant UI feedback
//     setLocalLikedProperties(prev => prev.filter(item => item._id !== itemId));

//     // Show toast notification
//     toast('Removed from Wishlist', {
//       icon: '💔',
//       style: {
//         borderRadius: '10px',
//         background: '#333',
//         color: '#fff',
//       },
//     });

//     try {
//       // Adjust endpoint based on entity type if needed
//       const endpoint = `${base_url}/api/users/history/like`;

//       // Create request payload with the correct key matching the value type
//       const payload = {};

//       if (propertyId) {
//         payload.propertyId = propertyId;
//       } else if (projectId) {
//         payload.projectId = projectId;
//       } else if (buildingId) {
//         payload.buildingId = buildingId;
//       } else {
//         console.error('No valid ID found');
//         return;
//       }

//       const response = await axios.post(endpoint, payload, getConfig());
//       console.log(response);
//     } catch (error) {
//       // Revert local state if API call fails
//       toast.error('Failed to remove from wishlist', {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       console.log(error);
//     }
//   };

//   const getEntitiesByType = (items, type) => {
//     return items.filter(item => item.entityType === type);
//   };

//   const getLikedProperties = () => getEntitiesByType(localLikedProperties, 'property');
//   const getLikedProjects = () => getEntitiesByType(localLikedProperties, 'project');
//   const getLikedBuildings = () => getEntitiesByType(localLikedProperties, 'building');

//   // Handle view all/show less for each section
//   const handleToggleLikedProperties = () => {
//     setVisibleLikedCount(prev => prev === 4 ? getLikedProperties().length : 4);
//   };

//   const handleToggleLikedProjects = () => {
//     setVisibleLikedCount(prev => prev === 4 ? getLikedProjects().length : 4);
//   };

//   const handleToggleLikedBuildings = () => {
//     setVisibleLikedCount(prev => prev === 4 ? getLikedBuildings().length : 4);
//   };

//   const handleToggleViewed = () => {
//     setVisibleViewedCount(prev => prev === 4 ? localViewedProperties.length : 4);
//   };

//   const handleToggleContacted = () => {
//     setVisibleContactedCount(prev => prev === 4 ? localContactedProperties.length : 4);
//   };

//   const tabVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1
//       }
//     },
//     exit: {
//       opacity: 0,
//       y: -20,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-red-500 text-center">
//           <h3 className="text-lg font-semibold">Error</h3>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen px-5">
//       <div className=" mx-auto px-4 py-8">
//         {/* Tab Navigation */}
//         <div className="mb-8 border-b border-gray-200">
//           <div className="flex space-x-8">
//             <motion.button
//               className={`pb-4 px-4 relative ${activeTab === 'saved' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
//               onClick={() => setActiveTab('saved')}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="flex items-center">
//                 <Heart className="w-5 h-5 mr-2" />
//                 <span>{localLikedProperties.length} Saved</span>
//               </div>
//               {activeTab === 'saved' && (
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
//                   layoutId="activeTab"
//                 />
//               )}
//             </motion.button>

//             <motion.button
//               className={`pb-4 px-4 relative ${activeTab === 'viewed' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
//               onClick={() => setActiveTab('viewed')}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="flex items-center">
//                 <Home className="w-5 h-5 mr-2" />
//                 <span>{localViewedProperties.length} Viewed</span>
//               </div>
//               {activeTab === 'viewed' && (
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
//                   layoutId="activeTab"
//                 />
//               )}
//             </motion.button>

//             <motion.button
//               className={`pb-4 px-4 relative ${activeTab === 'contacted' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
//               onClick={() => setActiveTab('contacted')}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="flex items-center">
//                 <Phone className="w-5 h-5 mr-2" />
//                 <span>{localContactedProperties.length} Contacted</span>
//               </div>
//               {activeTab === 'contacted' && (
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
//                   layoutId="activeTab"
//                 />
//               )}
//             </motion.button>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <AnimatePresence mode="wait">
//           {activeTab === 'saved' && (
//             <motion.div
//               key="saved"
//               variants={tabVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {/* Liked Properties */}
//               {getLikedProperties().length > 0 && (
//                 <div className="mb-12">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Saved Properties</h2>
//                     {getLikedProperties().length > 4 && (
//                       <button
//                         onClick={handleToggleLikedProperties}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {visibleLikedCount === 4 ? 'View All' : 'Show Less'}
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {getLikedProperties().slice(0, visibleLikedCount).map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         removeFromWishlist={removeFromWishlist}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Liked Projects */}
//               {getLikedProjects().length > 0 && (
//                 <div className="mb-12">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Saved Projects</h2>
//                     {getLikedProjects().length > 4 && (
//                       <button
//                         onClick={handleToggleLikedProjects}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {visibleLikedCount === 4 ? 'View All' : 'Show Less'}
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {getLikedProjects().slice(0, visibleLikedCount).map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         removeFromWishlist={removeFromWishlist}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Liked Buildings */}
//               {getLikedBuildings().length > 0 && (
//                 <div className="mb-12">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Saved Buildings</h2>
//                     {getLikedBuildings().length > 4 && (
//                       <button
//                         onClick={handleToggleLikedBuildings}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {visibleLikedCount === 4 ? 'View All' : 'Show Less'}
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {getLikedBuildings().slice(0, visibleLikedCount).map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         removeFromWishlist={removeFromWishlist}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {localLikedProperties.length === 0 && (
//                 <div className="text-center py-16">
//                   <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
//                   <p className="text-gray-500">Start saving properties you like and they will appear here</p>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {activeTab === 'viewed' && (
//             <motion.div
//               key="viewed"
//               variants={tabVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {localViewedProperties.length > 0 ? (
//                 <div>
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Viewed Properties</h2>
//                     {localViewedProperties.length > 4 && (
//                       <button
//                         onClick={handleToggleViewed}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {visibleViewedCount === 4 ? 'View All' : 'Show Less'}
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {localViewedProperties.slice(0, visibleViewedCount).map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         viewedItem={true}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-16">
//                   <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-700 mb-2">No viewed properties</h3>
//                   <p className="text-gray-500">Properties you view will appear here</p>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {activeTab === 'contacted' && (
//             <motion.div
//               key="contacted"
//               variants={tabVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {localContactedProperties.length > 0 ? (
//                 <div>
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold text-gray-800">Contacted Properties</h2>
//                     {localContactedProperties.length > 4 && (
//                       <button
//                         onClick={handleToggleContacted}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {visibleContactedCount === 4 ? 'View All' : 'Show Less'}
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {localContactedProperties.slice(0, visibleContactedCount).map((item, index) => (
//                       <WishlistCard
//                         key={item._id}
//                         item={item}
//                         index={index}
//                         contactedItem={true}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-16">
//                   <Phone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-700 mb-2">No contacted properties</h3>
//                   <p className="text-gray-500">Properties you contact will appear here</p>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Bed, Bath, Square, Trash2, Building, Home, Phone } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getWishlist } from '../redux/features/Wishlist/wishlistSlice';
import { motion, AnimatePresence } from 'framer-motion';
import WishlistCard from '../components/testing/WishlistCard';
import { useWishlist } from '../hooks/useWishlist';

const Wishlist = () => {
  const [error, setError] = useState(null);
  const { likedProperties, viewedProperties, contactedProperties } = useSelector(state => state.wishlist);
  const [localLikedProperties, setLocalLikedProperties] = useState([]);
  const [localViewedProperties, setLocalViewedProperties] = useState([]);
  const [localContactedProperties, setLocalContactedProperties] = useState([]);
  const [activeTab, setActiveTab] = useState('saved');
  const [visibleLikedCount, setVisibleLikedCount] = useState(4);
  const [visibleViewedCount, setVisibleViewedCount] = useState(4);
  const [visibleContactedCount, setVisibleContactedCount] = useState(4);
  const { handleToggleWishlist } = useWishlist();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch wishlist data on component mount
  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  // Update local state when redux state changes
  useEffect(() => {
    if (likedProperties) {
      // Group liked properties by entity type
      const sortedLikedProperties = [...likedProperties].sort((a, b) =>
        new Date(b.savedAt) - new Date(a.savedAt)
      );
      setLocalLikedProperties(sortedLikedProperties);
    }

    if (viewedProperties) {
      const sortedViewedProperties = [...viewedProperties].sort((a, b) =>
        new Date(b.timestamp) - new Date(a.timestamp)
      );
      setLocalViewedProperties(sortedViewedProperties);
    }

    if (contactedProperties) {
      const sortedContactedProperties = [...(contactedProperties || [])].sort((a, b) =>
        new Date(b.timestamp) - new Date(a.timestamp)
      );
      setLocalContactedProperties(sortedContactedProperties);
    }
  }, [likedProperties, viewedProperties, contactedProperties]);

  // Handle removing an item from wishlist
  const removeFromWishlist = (e, itemId, entityType) => {
    e.stopPropagation();

    // Find the item to get the entity ID
    const item = localLikedProperties.find(item => item._id === itemId);
    if (!item || !item.propertyId) {
      console.error('Could not find item or propertyId');
      return;
    }

    // Get the appropriate ID based on entity type
    let entityId;
    if (entityType === 'property') {
      entityId = item.propertyId.post_id;
    } else if (entityType === 'project') {
      entityId = item.propertyId.projectId;
    } else if (entityType === 'building') {
      entityId = item.propertyId.buildingId;
    } else {
      console.error('Invalid entity type');
      return;
    }

    // Update local state immediately for responsive UI
    setLocalLikedProperties(prev => prev.filter(item => item._id !== itemId));

    // Use the centralized wishlist toggle function
    handleToggleWishlist(e, { entityId, entityType });
  };

  const getEntitiesByType = (items, type) => {
    return items.filter(item => (item.entityType || 'property') === type);
  };

  const getLikedProperties = () => getEntitiesByType(localLikedProperties, 'property');
  const getLikedProjects = () => getEntitiesByType(localLikedProperties, 'project');
  const getLikedBuildings = () => getEntitiesByType(localLikedProperties, 'building');

  // Handle view all/show less for each section
  const handleToggleLikedProperties = () => {
    setVisibleLikedCount(prev => prev === 4 ? getLikedProperties().length : 4);
  };

  const handleToggleLikedProjects = () => {
    setVisibleLikedCount(prev => prev === 4 ? getLikedProjects().length : 4);
  };

  const handleToggleLikedBuildings = () => {
    setVisibleLikedCount(prev => prev === 4 ? getLikedBuildings().length : 4);
  };

  const handleToggleViewed = () => {
    setVisibleViewedCount(prev => prev === 4 ? localViewedProperties.length : 4);
  };

  const handleToggleContacted = () => {
    setVisibleContactedCount(prev => prev === 4 ? localContactedProperties.length : 4);
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h3 className="text-lg font-semibold">Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5">
      <div className="mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex space-x-8">
            <motion.button
              className={`pb-4 px-4 relative ${activeTab === 'saved' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('saved')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span>{localLikedProperties.length} Saved</span>
              </div>
              {activeTab === 'saved' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                  layoutId="activeTab"
                />
              )}
            </motion.button>

            <motion.button
              className={`pb-4 px-4 relative ${activeTab === 'viewed' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('viewed')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <Home className="w-5 h-5 mr-2" />
                <span>{localViewedProperties.length} Viewed</span>
              </div>
              {activeTab === 'viewed' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                  layoutId="activeTab"
                />
              )}
            </motion.button>

            <motion.button
              className={`pb-4 px-4 relative ${activeTab === 'contacted' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('contacted')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>{localContactedProperties.length} Contacted</span>
              </div>
              {activeTab === 'contacted' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                  layoutId="activeTab"
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'saved' && (
            <motion.div
              key="saved"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Liked Properties */}
              {getLikedProperties().length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Saved Properties</h2>
                    {getLikedProperties().length > 4 && (
                      <button
                        onClick={handleToggleLikedProperties}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {visibleLikedCount === 4 ? 'View All' : 'Show Less'}
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {getLikedProperties().slice(0, visibleLikedCount).map((item, index) => (
                      <WishlistCard
                        key={item._id}
                        item={item}
                        index={index}
                        removeFromWishlist={removeFromWishlist}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Liked Projects */}
              {getLikedProjects().length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Saved Projects</h2>
                    {getLikedProjects().length > 4 && (
                      <button
                        onClick={handleToggleLikedProjects}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {visibleLikedCount === 4 ? 'View All' : 'Show Less'}
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {getLikedProjects().slice(0, visibleLikedCount).map((item, index) => (
                      <WishlistCard
                        key={item._id}
                        item={item}
                        index={index}
                        removeFromWishlist={removeFromWishlist}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Liked Buildings */}
              {getLikedBuildings().length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Saved Buildings</h2>
                    {getLikedBuildings().length > 4 && (
                      <button
                        onClick={handleToggleLikedBuildings}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {visibleLikedCount === 4 ? 'View All' : 'Show Less'}
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {getLikedBuildings().slice(0, visibleLikedCount).map((item, index) => (
                      <WishlistCard
                        key={item._id}
                        item={item}
                        index={index}
                        removeFromWishlist={removeFromWishlist}
                      />
                    ))}
                  </div>
                </div>
              )}

              {localLikedProperties.length === 0 && (
                <div className="text-center py-16">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-500">Start saving properties you like and they will appear here</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'viewed' && (
            <motion.div
              key="viewed"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {localViewedProperties.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Viewed Properties</h2>
                    {localViewedProperties.length > 4 && (
                      <button
                        onClick={handleToggleViewed}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {visibleViewedCount === 4 ? 'View All' : 'Show Less'}
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {localViewedProperties.slice(0, visibleViewedCount).map((item, index) => (
                      <WishlistCard
                        key={item._id}
                        item={item}
                        index={index}
                        viewedItem={true}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No viewed properties</h3>
                  <p className="text-gray-500">Properties you view will appear here</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'contacted' && (
            <motion.div
              key="contacted"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {localContactedProperties.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Contacted Properties</h2>
                    {localContactedProperties.length > 4 && (
                      <button
                        onClick={handleToggleContacted}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {visibleContactedCount === 4 ? 'View All' : 'Show Less'}
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {localContactedProperties.slice(0, visibleContactedCount).map((item, index) => (
                      <WishlistCard
                        key={item._id}
                        item={item}
                        index={index}
                        contactedItem={true}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <Phone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No contacted properties</h3>
                  <p className="text-gray-500">Properties you contact will appear here</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Wishlist;

