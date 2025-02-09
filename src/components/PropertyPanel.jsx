// import React from 'react';
// import { X, Home, Building, MapPin, Bath, Bed, Grid, CalendarClock, Users } from 'lucide-react';
// const PropertyPanel = ({ data, type, onClose }) => {
//     console.log("PropertyPanel Data prop" , data)
//     if (!data) return null;
//     const formatPrice = (price) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumSignificantDigits: 3,
//         }).format(price);
//     };
//     const renderPropertyContent = () => (
//         <div className="space-y-4">
//             {/* Property Image */}
//             <div className="aspect-video rounded-lg bg-gray-200 overflow-hidden">
//                 {data?.galleryList?.[0] && (
//                     <img
//                         src={data?.galleryList[0]}
//                         alt={data?.post_title}
//                         className="w-full h-full object-cover"
//                     />
//                 )}
//             </div>
//             {/* Property Header */}
//             <div className="space-y-2">
//                 <h2 className="text-xl font-semibold">{data.post_title}</h2>
//                 <p className="text-gray-600">{data.address}</p>
//                 <div className="text-lg font-semibold text-blue-600">
//                     {formatPrice(data.price)}
//                 </div>
//             </div>
//             {/* Property Details */}
//             <div className="flex gap-4">
//                 <div className="flex items-center gap-2">
//                     <Bed className="text-gray-500" size={20} />
//                     <span>{data.bedrooms} Beds</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Bath className="text-gray-500" size={20} />
//                     <span>{data.bathrooms} Baths</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Grid className="text-gray-500" size={20} />
//                     <span>{data.carpetArea} sq.ft</span>
//                 </div>
//             </div>
//             {/* Property Description */}
//             <div className="border-t pt-4">
//                 <p className="text-gray-700">{data.post_description}</p>
//             </div>
//         </div>
//     );
//     const renderProjectContent = () => (
//         <div className="space-y-4">
//             {/* Project Header */}
//             <div className="space-y-2">
//                 <h2 className="text-xl font-semibold">{data.name}</h2>
//                 <div className="aspect-video rounded-lg bg-gray-200 overflow-hidden">
//                     {data.galleryList?.[0] && (
//                         <img
//                             src={data.galleryList[0]}
//                             alt={data.post_title}
//                             className="w-full h-full object-cover"
//                         />
//                     )}
//                 </div>
//                 <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                     {data.type}
//                 </div>
//                 <p className="text-gray-600">{data.location.address}</p>
//             </div>
//             {/* Project Price Range */}
//             <div className="grid grid-cols-2 gap-4">
//                 <div className="p-3 bg-gray-50 rounded-lg">
//                     <div className="text-sm text-gray-600">Price Range</div>
//                     <div className="font-semibold">
//                         {formatPrice(data.overview.priceRange.min)} - {formatPrice(data.overview.priceRange.max)}
//                     </div>
//                 </div>
//                 <div className="p-3 bg-gray-50 rounded-lg">
//                     <div className="text-sm text-gray-600">₹/sq.ft</div>
//                     <div className="font-semibold">
//                         {data.overview.priceRange.pricePerSqFt}
//                     </div>
//                 </div>
//             </div>
//             {/* Project Overview */}
//             <div className="flex gap-4">
//                 <div className="flex items-center gap-2">
//                     <Building className="text-gray-500" size={20} />
//                     <span>{data.overview.totalTowers} Towers</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Users className="text-gray-500" size={20} />
//                     <span>{data.overview.totalUnits} Units</span>
//                 </div>
//             </div>
//             {/* Floor Plans */}
//             <div className="space-y-2">
//                 <h3 className="font-semibold">Floor Plans</h3>
//                 <div className="space-y-2">
//                     {data.floorPlans.map((plan, index) => (
//                         <div key={index} className="p-3 rounded-lg flex justify-between items-center">
//                             <div>
//                                 <div className="font-medium">{plan.name}</div>
//                                 <div className="text-sm text-gray-600">{plan.superArea} sq.ft</div>
//                             </div>
//                             <div className="text-blue-600 font-semibold">
//                                 {formatPrice(plan.price)}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/* Amenities */}
//             <div className="space-y-2">
//                 <h3 className="font-semibold">Amenities</h3>
//                 <div className="space-y-2">
//                     {data.amenities.map((category) => (
//                         <div key={category._id} className="space-y-1">
//                             <div className="text-sm font-medium text-gray-600">{category.category}</div>
//                             <div className="flex flex-wrap gap-2">
//                                 {category.items.map((item, index) => (
//                                     <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
//                                         {item}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/* Project Description */}
//             <div className="border-t pt-4">
//                 <p className="text-gray-700">{data.description}</p>
//             </div>
//         </div>
//     );
//     return (
//         <div className="fixed left-0 top-24 bottom-0 w-96 bg-white shadow-xl p-4 overflow-y-auto">
//             {/* Panel Header */}
//             <div className="flex justify-between items-center mb-4">
//                 <div className="flex items-center gap-2">
//                     {type === 'property' ? (
//                         <Home className="text-blue-600" size={24} />
//                     ) : (
//                         <MapPin className="text-blue-600" size={24} />
//                     )}
//                     <span className="font-semibold">{type === 'property' ? 'Property Details' : 'Project Details'}</span>
//                 </div>
//                 <button
//                     onClick={onClose}
//                     className="p-1 hover:bg-gray-100 rounded-full"
//                 >
//                     <X size={20} />
//                 </button>
//             </div>
//             {/* Panel Content */}
//             {type === 'property' ? renderPropertyContent() : renderProjectContent()}
//         </div>
//     );
// };
// export default PropertyPanel;


import React, { useState } from 'react';
import { X, Home, Building, MapPin, Bath, Bed, Grid, Users, Building2 } from 'lucide-react';
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyPanel = ({ data, type, onClose }) => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(true);
    if (!data) return null;
    console.log("data", data)

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumSignificantDigits: 3,
        }).format(price);
    };

    const handleClose = () => {
        setIsVisible(false);
        // Delay the actual close callback to allow animation to complete
        setTimeout(onClose, 400);
    };

    const panelVariants = {
        hidden: {
            x: -384,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            x: -384,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3
            }
        }
    };

    const buttonVariants = {
        hidden: {
            x: -20,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2
            }
        },
        exit: {
            x: -20,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    };


    const renderPropertyContent = () => (
        <div className="space-y-4" onClick={() => navigate(`/api/details/${data?.post_id}`)}>
            <div className="aspect-video rounded-lg bg-gray-200 overflow-hidden">
                {data?.galleryList?.[0] && (
                    <img
                        src={data?.galleryList[0]}
                        alt={data?.post_title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">{data.post_title}</h2>
                <p className="text-gray-600">{data.address}</p>
                <div className="text-lg font-semibold text-blue-600">
                    {formatPrice(data.price)}
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <Bed className="text-gray-500" size={20} />
                    <span>{data.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                    <Bath className="text-gray-500" size={20} />
                    <span>{data.bathrooms} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                    <Grid className="text-gray-500" size={20} />
                    <span>{data.carpetArea} sq.ft</span>
                </div>
            </div>
            <div className="border-t pt-4">
                <p className="text-gray-700">{data.post_description}</p>
            </div>
        </div>
    );

    const renderProjectContent = () => (
        <div className="space-y-4" onClick={() => navigate(`/api/details/project/${data?.projectId}`)}>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">{data.name}</h2>
                <div className="aspect-video rounded-lg bg-gray-200 overflow-hidden">
                    {data?.gallery?.[0]?.images?.[0] && (
                        <img
                            src={data?.gallery?.[0]?.images?.[0]}
                            alt={data.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
                <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {data.type}
                </div>
                <p className="text-gray-600">{data.location?.address}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Price Range</div>
                    <div className="font-semibold">
                        {formatPrice(data.overview?.priceRange?.min)} - {formatPrice(data.overview?.priceRange?.max)}
                    </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">₹/sq.ft</div>
                    <div className="font-semibold">
                        {data.overview?.priceRange?.pricePerSqFt}
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <Building className="text-gray-500" size={20} />
                    <span>{data.overview?.totalTowers} Towers</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="text-gray-500" size={20} />
                    <span>{data.overview?.totalUnits} Units</span>
                </div>
            </div>
            {data.floorPlans && (
                <div className="space-y-2">
                    <h3 className="font-semibold">Floor Plans</h3>
                    <div className="space-y-2">
                        {data.floorPlans.map((plan, index) => (
                            <div key={index} className="p-3 rounded-lg flex justify-between items-center">
                                <div>
                                    <div className="font-medium">{plan.name}</div>
                                    <div className="text-sm text-gray-600">{plan.superArea} sq.ft</div>
                                </div>
                                <div className="text-blue-600 font-semibold">
                                    {formatPrice(plan.price)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {data.amenities && (
                <div className="space-y-2">
                    <h3 className="font-semibold">Amenities</h3>
                    <div className="space-y-2">
                        {data.amenities.map((category) => (
                            <div key={category._id} className="space-y-1">
                                <div className="text-sm font-medium text-gray-600">{category.category}</div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item, index) => (
                                        <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="border-t pt-4">
                <p className="text-gray-700">{data.description}</p>
            </div>
        </div>
    );

    const renderBuildingContent = () => (
        <div className="space-y-4" onClick={() => navigate(`/api/details/building/${data?.buildingId}`)}>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">{data.name}</h2>
                <div className="aspect-video rounded-lg bg-gray-200 overflow-hidden">
                    {data?.galleryList?.[0] && (
                        <img
                            src={data.galleryList[0]}
                            alt={data.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
                <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {data.type}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Total Floors</div>
                    <div className="font-semibold">{data.totalFloors}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Available Flats</div>
                    <div className="font-semibold">{data.numberOfFlatsAvailable}</div>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold">Building Details</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <Building2 className="text-gray-500" size={20} />
                        <span>Age: {data.age} years</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="text-gray-500" size={20} />
                        <span>Total Units: {data.totalProperties}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold">Floor Details</h3>
                <div className="space-y-2">
                    {data.flatsDetails.map((floor) => (
                        <div key={floor._id} className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-medium">Floor {floor.floorNumber}</div>
                                    <div className="text-sm text-gray-600">
                                        {floor.availableFlats} of {floor.flatsOnFloor} flats available
                                    </div>
                                </div>
                                <div className="text-blue-600">
                                    {Math.round((floor.availableFlats / floor.flatsOnFloor) * 100)}% vacant
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {data.amenities && data.amenities.length > 0 && (
                <div className="space-y-2">
                    <h3 className="font-semibold">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                        {data.amenities.map((amenity, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                                {amenity}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="border-t pt-4">
                <p className="text-gray-700">{data.description}</p>
                {data.areaUSP && (
                    <p className="mt-2 text-gray-600">
                        <span className="font-medium">Area USP:</span> {data.areaUSP}
                    </p>
                )}
            </div>
        </div>
    );

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <motion.div
                        className="absolute left-0 top-0 z-10 bottom-0 w-96 bg-white p-4 overflow-y-auto"
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {type === 'property' ? renderPropertyContent() :
                            type === 'project' ? renderProjectContent() :
                                renderBuildingContent()}
                    </motion.div>

                    <motion.button
                        onClick={handleClose}
                        className="absolute top-4 bg-white p-[10px] rounded-lg shadow-lg shadow-gray-500 border-[1px] left-[24.5rem] z-20"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MdArrowBackIosNew size={20} />
                    </motion.button>
                </>
            )}
        </AnimatePresence>
    );
};

export default PropertyPanel;
// <div className="flex justify-between items-center mb-4">
//     <div className="flex items-center gap-2">
//         {type === 'property' ? (
//             <Home className="text-blue-600" size={24} />
//         ) : type === 'project' ? (
//             <MapPin className="text-blue-600" size={24} />
//         ) : (
//             <Building className="text-blue-600" size={24} />
//         )}
//         <span className="font-semibold">
//             {type === 'property' ? 'Property Details' :
//                 type === 'project' ? 'Project Details' :
//                     'Building Details'}
//         </span>
//     </div>
//     <button
//         onClick={onClose}
//         className="p-1 hover:bg-gray-100 rounded-full"
//     >
//         <X size={20} />
//     </button>
// </div> 