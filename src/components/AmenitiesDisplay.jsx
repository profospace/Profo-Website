import React, { useState } from 'react';
import HeadingCommon from './HeadingCommon';

// Custom SVG icons as components
const IconMap = {
    "Swimming Pool": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <path d="M2 12h20M2 12c0 4 2 8 10 8s10-4 10-8M6 8c0-1.5 1-3 3-3s3 1.5 3 3M15 8c0-1.5 1-3 3-3s3 1.5 3 3" />
        </svg>
    ),
    "Garden": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <path d="M12 2L12 22M12 2C15 2 18 4 18 8M12 2C9 2 6 4 6 8" />
            <path d="M2 8h20" />
            <path d="M4 14h16" />
            <path d="M6 20h12" />
        </svg>
    ),
    "Kids Play Area": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
    ),
    "Jogging Track": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <path d="M12 4c2 0 4 1.5 4 4s-2 4-4 4-4-1.5-4-4 2-4 4-4z" />
            <path d="M16 20c-2-2.5-4-3.5-8-3.5" />
            <path d="M12 12v8" />
            <path d="M8 16h8" />
        </svg>
    ),
    "Gymnasium": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <path d="M4 8h16M4 16h16M8 4v16M16 4v16" />
        </svg>
    ),
    "Community Hall": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <circle cx="12" cy="8" r="6" />
            <path d="M18 20c0-3.3-2.7-6-6-6s-6 2.7-6 6" />
        </svg>
    ),
    "Indoor Games Room": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h4M14 12h4" />
        </svg>
    ),
    "24/7 Security": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
            <path d="M12 9v6M12 17h.01" />
        </svg>
    ),
    "CCTV Surveillance": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <path d="M2 12h2M22 12h-2M12 2v2M12 22v-2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M5 5l2 2M19 19l-2-2M19 5l-2 2M5 19l2-2" />
        </svg>
    ),
    "Access Control": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
    ),
    "Power Backup": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    ),
    "Car Parking": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M9 10h3c1.1 0 2 .9 2 2s-.9 2-2 2h-3" />
        </svg>
    ),
    "Visitor Parking": () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M8 10h2v4M12 10v4M16 10v4" />
        </svg>
    )
};

// const AmenitiesDisplay = ({ amenities }) => {
//     const getIcon = (itemName) => {
//         const IconComponent = IconMap[itemName];
//         return IconComponent ? <IconComponent /> : null;
//     };

//     return (
//         <div className="w-full max-w-7xl mx-auto p-4 space-y-4">
//             <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Property Amenities
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
//                 {amenities?.map((category, index) => (
//                     <div
//                         key={category._id}
//                         className={`rounded-xl hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 relative ${index === 0 ? 'bg-[#FFDE5A]' : 'bg-[#F5F5F5]'
//                             }`}
//                     >
//                         <div className="p-5 relative z-10">
//                             <div className="space-y-1">
//                                 <div className="relative">
//                                     <h3 className="text-xl font-semibold text-gray-800 pb-2">
//                                         {category.category}
//                                     </h3>
//                                     {/* <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-blue-500"></div> */}
//                                 </div>

//                                 <div className="space-y-0 mt-4">
//                                     {category.items.map((item) => (
//                                         <div
//                                             key={item}
//                                             className="flex items-center space-x-1 group cursor-pointer transform transition-transform duration-200 "
//                                         >
//                                             <div className="p-2 rounded-lg transition-colors duration-200">
//                                                 <div className="text-blue-600">
//                                                     {getIcon(item)}
//                                                 </div>
//                                             </div>
//                                             <span className="text-black  transition-colors duration-200 font-medium">
//                                                 {item}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <div
//                             className="absolute -bottom-5 right-0 w-24 h-24 bg-contain bg-no-repeat bg-right-bottom z-0"
//                             style={{
//                                 backgroundImage: 'url(/assets/amenitiesbg.png)'
//                             }}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AmenitiesDisplay;



const AmenitiesDisplay = ({ amenities }) => {
    const [visibleItems, setVisibleItems] = useState(3);

    const getIcon = (itemName) => {
        const IconComponent = IconMap[itemName];
        return IconComponent ? <IconComponent /> : null;
    };

    const showMore = () => {
        setVisibleItems(prev => prev + 3);
    };

    const hasMoreItems = amenities?.length > visibleItems;

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            {/* <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Property Amenities
            </h2> */}
            <HeadingCommon dual="true" title='Amenities' />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {amenities?.slice(0, visibleItems).map((category, index) => (
                    <div
                        key={category._id}
                        className={`rounded-xl hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 relative ${index === 0 ? 'bg-[#FFDE5A]' : 'bg-[#F5F5F5]'
                            }`}
                    >
                        <div className="p-5 relative z-10">
                            <div className="space-y-1">
                                <div className="relative">
                                    <h3 className="text-xl font-semibold text-gray-800 pb-2">
                                        {category.category}
                                    </h3>
                                </div>

                                <div className="space-y-0 mt-4">
                                    {category.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center space-x-1 group cursor-pointer transform transition-transform duration-200"
                                        >
                                            <div className="p-2 rounded-lg transition-colors duration-200">
                                                <div className="text-blue-600">
                                                    {getIcon(item)}
                                                </div>
                                            </div>
                                            <span className="text-black transition-colors duration-200 font-medium">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute -bottom-5 right-0 w-24 h-24 bg-contain bg-no-repeat bg-right-bottom z-0"
                            style={{
                                backgroundImage: 'url(/assets/amenitiesbg.png)'
                            }}
                        />
                    </div>
                ))}
            </div>

            {hasMoreItems && (
                <div className="flex justify-start mt-6">
                    <button
                        onClick={showMore}
                        className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default AmenitiesDisplay;
