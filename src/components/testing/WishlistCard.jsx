// const WishlistCard = ({ property, index }) => {
//     const navigate = useNavigate()

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white rounded-xl shadow-lg overflow-hidden group font-helvetica"
//             onClick={() => navigate(`/api/details/${property?.post_id}`)}
//         >
//             <div className="relative">
//                 <img
//                     src={property?.galleryList?.[0] || property?.galleryList?.[1]}
//                     alt={property.title}
//                     className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute top-4 right-4">
//                     <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors"
//                     >
//                         <Heart className="h-5 w-5" />
//                     </motion.button>
//                 </div>
//                 {property?.type_name && (
//                     <div className="absolute top-4 left-4">
//                         <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
//                             {[property?.type_name]}
//                         </span>
//                     </div>
//                 )}

//             </div>

//             <div className="relative overflow-hidden shadow-md border border-gray-100 bg-white">
//                 {/* Simple dotted background pattern */}
//                 <div className="absolute inset-0 opacity-15 pointer-events-none">
//                     <div className="w-full h-full"
//                         style={{
//                             backgroundImage: 'radial-gradient(black 1px, transparent 0)',
//                             backgroundSize: '15px 15px'
//                         }}>
//                     </div>
//                 </div>

//                 <div className="p-5 relative z-10">
//                     <div className='flex justify-between items-center'>
//                         <h3 className="text-xl font-bold text-black">{formatPrice(property?.price)}</h3>
//                         <div className='bg-black text-white rounded-full px-2 text-sm '>{property?.bedrooms} BHK</div>
//                     </div>

//                     <h3 className="text-lg font-bold text-gray-900 mb-1">{truncateText(property?.post_title, 32)}</h3>
//                     <div className="flex items-center text-gray-500 mb-2">
//                         <MapPin className="h-4 w-4 mr-1" />
//                         <span className="text-sm">{truncateText(property.address, 32)}</span>
//                     </div>
//                     <div className="flex justify-between border-t border-gray-100 pt-2">
//                         <div className="flex items-center text-gray-700">
//                             <Bed className="h-4 w-4 mr-1" />
//                             <span className="text-sm font-semibold">{property.bedrooms} Beds</span>
//                         </div>
//                         <div className="flex items-center text-gray-700">
//                             <Bath className="h-4 w-4 mr-1" />
//                             <span className="text-sm font-semibold">{property.bathrooms} Baths</span>
//                         </div>
//                         <div className="flex items-center text-gray-700">
//                             <Square className="h-4 w-4 mr-1" />
//                             <span className="text-sm font-semibold">{property.area} {property?.areaUnit || 'sqft'}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default WishlistCard;

// import { MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // WishlistCard Component
// const WishlistCard = ({ item, index, removeFromWishlist }) => {
//     const navigate = useNavigate();
//     const property = item.propertyId;

//     const formatPrice = (price) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(price);
//     };

//     const truncateText = (text, maxLength) => {
//         if (!text) return '';
//         return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white max-w-64 rounded-xl shadow-lg overflow-hidden group font-helvetica"
//             onClick={() => navigate(`/api/details/${property?.post_id}`)}
//         >
//             <div className="relative">
//                 <img
//                     src={property?.post_images?.[0]?.url || property?.galleryList?.[0] || property?.galleryList?.[1] || "/api/placeholder/400/300"}
//                     alt={property.post_title}
//                     className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute top-4 right-4">
//                     <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors"
//                         onClick={(e) => removeFromWishlist(e, property?.post_id)}
//                     >
//                         <Trash2 className="h-5 w-5 text-red-500" />
//                     </motion.button>
//                 </div>
//                 {property?.status && (
//                     <div className="absolute bottom-4 left-4">
//                         <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
//                             {property?.status}
//                         </span>
//                     </div>
//                 )}
//             </div>

//             <div className="relative overflow-hidden shadow-md border border-gray-100 bg-white">
//                 {/* Simple dotted background pattern */}
//                 <div className="absolute inset-0 opacity-15 pointer-events-none">
//                     <div className="w-full h-full"
//                         style={{
//                             backgroundImage: 'radial-gradient(black 1px, transparent 0)',
//                             backgroundSize: '15px 15px'
//                         }}>
//                     </div>
//                 </div>

//                 <div className="p-3  relative z-10">
//                     <div className='flex justify-between items-center'>
//                         <h3 className="text-xl font-bold text-black">{formatPrice(property?.price)}</h3>
//                         <div className='bg-black text-white rounded-full px-2 text-xs'>{property?.bedrooms} BHK</div>
//                     </div>

//                     <h3 className="text-md font-bold text-gray-900 mb-1">{truncateText(property?.post_title, 25)}</h3>
//                     {/* <div className="flex items-center text-gray-500 mb-2">
//                         <MapPin className="h-4 w-4 mr-1" />
//                         <span className="text-sm">{truncateText(`${property?.locality || ''}, ${property?.city || ''}`, 32)}</span>
//                     </div> */}
//                     {/* <div className="flex justify-between border-t border-gray-100 pt-2">
//                         <div className="flex items-center text-gray-700">
//                             <Bed className="h-4 w-4 mr-1" />
//                             <span className="text-sm font-semibold">{property.bedrooms} Beds</span>
//                         </div>
//                         <div className="flex items-center text-gray-700">
//                             <Bath className="h-4 w-4 mr-1" />
//                             <span className="text-sm font-semibold">{property.bathrooms} Baths</span>
//                         </div>
//                         <div className="flex items-center text-gray-700">
//                             <Square className="h-4 w-4 mr-1" />
//                             <span className="text-sm font-semibold">{property.area} {property?.areaUnit || 'sqft'}</span>
//                         </div>
//                     </div> */}
//                     <div className="mt-4 text-xs text-gray-500">
//                         Saved on {new Date(item?.savedAt).toLocaleDateString()}
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default WishlistCard;

// import React from 'react';
// import { MapPin, Bed, Bath, Square, Trash2, Building, Home, Calendar, CreditCard } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const WishlistCard = ({ item, index, removeFromWishlist, viewedItem = false, contactedItem = false }) => {
//     const navigate = useNavigate();
//     const entity = item.propertyId;
//     const entityType = item.entityType;

//     const formatPrice = (price) => {
//         if (!price) return 'Price on request';
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 0
//         }).format(price);
//     };

//     const truncateText = (text, maxLength) => {
//         if (!text) return '';
//         return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
//     };

//     const getEntityImage = () => {
//         if (entityType === 'property') {
//             if (entity?.post_images?.length > 0 && entity.post_images[0]?.url) {
//                 return entity.post_images[0].url;
//             } else if (entity?.galleryList?.length > 0) {
//                 return entity.galleryList[0];
//             }
//         } else if (entityType === 'project') {
//             if (entity?.galleryNow?.length > 0) {
//                 return entity.galleryNow[0];
//             }
//         } else if (entityType === 'building') {
//             // Return building image if available
//             return "/api/placeholder/400/300"; // Placeholder for building
//         }

//         return "/api/placeholder/400/300";
//     };

//     const getEntityTitle = () => {
//         if (entityType === 'property') {
//             return entity?.post_title || 'Property';
//         } else if (entityType === 'project') {
//             return entity?.name || 'Project';
//         } else if (entityType === 'building') {
//             return entity?.name || 'Building';
//         }
//         return 'Unknown';
//     };

//     const getEntityLocation = () => {
//         if (entityType === 'property') {
//             return `${entity?.locality || ''}, ${entity?.city || ''}`.trim();
//         } else if (entityType === 'project') {
//             if (entity?.location) {
//                 return `${entity.location.city || ''}, ${entity.location.state || ''}`.trim();
//             }
//         } else if (entityType === 'building') {
//             return entity?.location?.address || '';
//         }
//         return '';
//     };

//     const getEntityPrice = () => {
//         if (entityType === 'property') {
//             return entity?.price;
//         } else if (entityType === 'project') {
//             return entity?.overview?.priceRange?.pricePerSqFt ?
//                 `${entity.overview.priceRange.pricePerSqFt} per sqft` :
//                 null;
//         }
//         return null;
//     };

//     const getEntityBedrooms = () => {
//         if (entityType === 'property') {
//             return entity?.bedrooms;
//         }
//         return null;
//     };

//     const getEntityIcon = () => {
//         if (entityType === 'property') {
//             return <Home className="h-5 w-5 text-blue-500" />;
//         } else if (entityType === 'project') {
//             return <Building className="h-5 w-5 text-green-500" />;
//         } else if (entityType === 'building') {
//             return <Building className="h-5 w-5 text-purple-500" />;
//         }
//         return <Home className="h-5 w-5" />;
//     };

//     const getEntityStatus = () => {
//         if (entityType === 'property') {
//             return entity?.status;
//         } else if (entityType === 'project') {
//             return entity?.status;
//         }
//         return null;
//     };

//     const getEntityArea = () => {
//         if (entityType === 'property') {
//             return entity?.area ? `${entity.area} ${entity?.areaUnit || 'sqft'}` : null;
//         }
//         return null;
//     };

//     const handleCardClick = () => {
//         if (entityType === 'property') {
//             navigate(`/api/details/${entity?.post_id}`);
//         } else if (entityType === 'project') {
//             navigate(`/api/details/project/${entity?.projectId}`);
//         } else if (entityType === 'building') {
//             navigate(`/api/details/building/${entity?.buildingId}`);
//         }
//     };

//     const getDateText = () => {
//         if (viewedItem) {
//             return `Viewed on ${new Date(item?.timestamp).toLocaleDateString()}`;
//         } else if (contactedItem) {
//             return `Contacted on ${new Date(item?.timestamp).toLocaleDateString()}`;
//         } else {
//             return `Saved on ${new Date(item?.savedAt).toLocaleDateString()}`;
//         }
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
//             onClick={handleCardClick}
//         >
//             <div className="relative">
//                 <img
//                     src={getEntityImage()}
//                     alt={getEntityTitle()}
//                     className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute top-0 left-0 m-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 backdrop-blur-sm">
//                     {getEntityIcon()}
//                     <span className="text-xs font-medium capitalize">{entityType}</span>
//                 </div>

//                 {!viewedItem && !contactedItem && (
//                     <div className="absolute top-4 right-4">
//                         <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors"
//                             onClick={(e) => removeFromWishlist(e, item._id, entityType)}
//                         >
//                             <Trash2 className="h-5 w-5 text-red-500" />
//                         </motion.button>
//                     </div>
//                 )}

//                 {getEntityStatus() && (
//                     <div className="absolute bottom-4 left-4">
//                         <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
//                             {getEntityStatus()}
//                         </span>
//                     </div>
//                 )}
//             </div>

//             <div className="p-4">
//                 <div className="flex justify-between items-center mb-2">
//                     {getEntityPrice() && (
//                         <h3 className="text-lg font-bold text-black">
//                             {typeof getEntityPrice() === 'number' ? formatPrice(getEntityPrice()) : getEntityPrice()}
//                         </h3>
//                     )}
//                     {getEntityBedrooms() && (
//                         <div className="bg-black text-white rounded-full px-2 py-0.5 text-xs">
//                             {getEntityBedrooms()} BHK
//                         </div>
//                     )}
//                 </div>

//                 <h3 className="text-md font-bold text-gray-900 mb-2">{truncateText(getEntityTitle(), 25)}</h3>

//                 {getEntityLocation() && (
//                     <div className="flex items-center text-gray-500 mb-3">
//                         <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
//                         <span className="text-sm">{truncateText(getEntityLocation(), 30)}</span>
//                     </div>
//                 )}

//                 {getEntityArea() && (
//                     <div className="flex items-center text-gray-500 mb-3">
//                         <Square className="h-4 w-4 mr-1 flex-shrink-0" />
//                         <span className="text-sm">{getEntityArea()}</span>
//                     </div>
//                 )}

//                 <div className="flex items-center text-xs text-gray-400 mt-3 pt-2 border-t border-gray-100">
//                     <Calendar className="h-3 w-3 mr-1" />
//                     <span>{getDateText()}</span>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default WishlistCard;

import React from 'react';
import { MapPin, Bed, Bath, Square, Trash2, Building, Home, Calendar, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WishlistCard = ({ item, index, removeFromWishlist, viewedItem = false, contactedItem = false }) => {
    const navigate = useNavigate();
    const entity = item.propertyId;
    const entityType = item.entityType;

    const formatPrice = (price) => {
        if (!price) return 'Price on request';
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const getEntityImage = () => {
        if (entityType === 'property') {
            if (entity?.post_images?.length > 0 && entity.post_images[0]?.url) {
                return entity.post_images[0].url;
            } else if (entity?.galleryList?.length > 0) {
                return entity.galleryList[0];
            }
        } else if (entityType === 'project') {
            if (entity) {
                return entity?.gallery[0]?.images?.[0];
            }
        } else if (entityType === 'building') {
            // Return building image if available
            return "/api/placeholder/400/300"; // Placeholder for building
        }

        return "/api/placeholder/400/300";
    };

    const getEntityTitle = () => {
        if (entityType === 'property') {
            return entity?.post_title || 'Property';
        } else if (entityType === 'project') {
            return entity?.name || 'Project';
        } else if (entityType === 'building') {
            return entity?.name || 'Building';
        }
        return 'Unknown';
    };

    const getEntityLocation = () => {
        if (entityType === 'property') {
            return `${entity?.locality || ''}, ${entity?.city || ''}`.trim();
        } else if (entityType === 'project') {
            if (entity?.location) {
                return `${entity.location.city || ''}, ${entity.location.state || ''}`.trim();
            }
        } else if (entityType === 'building') {
            return entity?.location?.address || '';
        }
        return '';
    };

    const getEntityPrice = () => {
        if (entityType === 'property') {
            return entity?.price;
        } else if (entityType === 'project') {
            return entity?.overview?.priceRange?.pricePerSqFt ?
                `${entity.overview.priceRange.pricePerSqFt} per sqft` :
                null;
        }
        return null;
    };

    const getEntityBedrooms = () => {
        if (entityType === 'property') {
            return entity?.bedrooms;
        }
        return null;
    };

    const getEntityIcon = () => {
        if (entityType === 'property') {
            return <Home className="h-5 w-5 text-blue-500" />;
        } else if (entityType === 'project') {
            return <Building className="h-5 w-5 text-green-500" />;
        } else if (entityType === 'building') {
            return <Building className="h-5 w-5 text-purple-500" />;
        }
        return <Home className="h-5 w-5" />;
    };

    const getEntityStatus = () => {
        if (entityType === 'property') {
            return entity?.status;
        } else if (entityType === 'project') {
            return entity?.status;
        }
        return null;
    };

    const getEntityArea = () => {
        if (entityType === 'property') {
            return entity?.area ? `${entity.area} ${entity?.areaUnit || 'sqft'}` : null;
        }
        return null;
    };

    const handleCardClick = () => {
        if (entityType === 'property') {
            navigate(`/api/details/${entity?.post_id}`);
        } else if (entityType === 'project') {
            navigate(`/api/details/project/${entity?.projectId}`);
        } else if (entityType === 'building') {
            navigate(`/api/details/building/${entity?.buildingId}`);
        }
    };

    const getDateText = () => {
        if (viewedItem) {
            return `Viewed on ${new Date(item?.timestamp).toLocaleDateString()}`;
        } else if (contactedItem) {
            return `Contacted on ${new Date(item?.timestamp).toLocaleDateString()}`;
        } else {
            return `Saved on ${new Date(item?.savedAt).toLocaleDateString()}`;
        }
    };

    const handleRemoveClick = (e) => {
        e.stopPropagation(); // Prevent card click
        if (removeFromWishlist) {
            removeFromWishlist(e, item._id, entityType);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={handleCardClick}
        >
            <div className="relative">
                <img
                    src={getEntityImage()}
                    alt={getEntityTitle()}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 m-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 backdrop-blur-sm">
                    {getEntityIcon()}
                    <span className="text-xs font-medium capitalize">{entityType}</span>
                </div>

                {!viewedItem && !contactedItem && (
                    <div className="absolute top-4 right-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors"
                            onClick={handleRemoveClick}
                        >
                            <Trash2 className="h-5 w-5 text-red-500" />
                        </motion.button>
                    </div>
                )}

                {getEntityStatus() && (
                    <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            {getEntityStatus()}
                        </span>
                    </div>
                )}
            </div>

            <div className="px-4 py-2">
                <div className="flex justify-between items-center mb-2">
                    {getEntityPrice() && (
                        <h3 className="text-lg font-bold text-black">
                            {typeof getEntityPrice() === 'number' ? formatPrice(getEntityPrice()) : getEntityPrice()}
                        </h3>
                    )}
                    {getEntityBedrooms() && (
                        <div className="bg-black text-white rounded-full px-2 py-0.5 text-xs">
                            {getEntityBedrooms()} BHK
                        </div>
                    )}
                </div>

                <h3 className="text-md font-bold text-gray-900 mb-1">{truncateText(getEntityTitle(), 25)}</h3>

                {getEntityLocation() && (
                    <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="text-sm">{truncateText(getEntityLocation(), 30)}</span>
                    </div>
                )}


            </div>
                <div className="bg-gray-100 px-4 py-2 flex items-center text-xs text-gray-800 border-t border-gray-100">
                    <Calendar className="h-3 w-3 mr-2" />
                    <div className='text-center'>{getDateText()}</div>
                </div>
        </motion.div>
    );
};

export default WishlistCard;