
// import React, { useState } from 'react';
// import { BadgeCheck, X } from 'lucide-react';
// import { QRCode } from 'antd';

// const PhonePopup = ({ phone, isOpen, onClose }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="absolute top-60 left-0 right-0 mx-4 bg-white rounded-lg shadow-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <div className="text-2xl font-semibold">{phone}</div>
//                 <button
//                     onClick={onClose}
//                     className="text-gray-500 hover:text-gray-700"
//                 >
//                     <X className="w-6 h-6" />
//                 </button>
//             </div>

//             <div className="flex justify-between items-center">
//                 <div className="text-gray-800 pr-4">
//                     Point your phone camera at the code to quickly dial the number
//                 </div>

//                 <div className="flex-shrink-0">
//                     <QRCode
//                         value={`tel:${phone}`}
//                         size={56}
//                         bordered={false}
//                         color="#000000"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// const ProjectContactCard = ({ info }) => {
//     const [showPhonePopup, setShowPhonePopup] = useState(false);
//     console.log("info", info)
//     const calculateStats = () => {
//         const buildingCount = info?.buildings?.length || 0;
//         const propertyCount = info?.properties?.length || 0;
//         const completedCount = info?.statistics?.completedProjects || 0;
//         const ongoingCount = info?.statistics?.ongoingProjects || 0;

//         return {
//             buildingCount,
//             propertyCount,
//             completedCount,
//             ongoingCount
//         };
//     };

//     const stats = calculateStats();
//     const phone = info?.contacts?.[0] || "+91 (000) 000-00-00";

//     const handleCallClick = () => {
//         window.location.href = `tel:${phone.replace(/\D/g, '')}`;
//     };

//     const hasValidData = () => {
//         return (
//             info?.name ||
//             info?.contacts?.[1] ||
//             info?.logo ||
//             info?.experience ||
//             (info?.operatingLocations && info.operatingLocations.length > 0) ||
//             (stats?.completedCount > 0) ||
//             (stats?.ongoingCount > 0) ||
//             info?.contactNumber
//         );
//     };


//     // Extract connected properties
//     const connectedProperties = info?.connectedProperties || [];
//     const isSingleProperty = connectedProperties.length === 1;

//     // Calculate values or ranges
//     let areaDisplay = '';
//     let priceDisplay = '';

//     if (isSingleProperty) {
//         // Single property - show direct values
//         const property = connectedProperties[0];
//         areaDisplay = `${parseFloat(property.area || 0).toFixed(1)} sqft`;
//         priceDisplay = `${new Intl.NumberFormat('en-US').format(property.price || 0)} INR`;
//     } else if (connectedProperties.length > 1) {
//         // Multiple properties - show ranges
//         const areas = connectedProperties.map(prop => parseFloat(prop.area) || 0);
//         const prices = connectedProperties.map(prop => prop.price || 0);

//         const minArea = Math.min(...areas);
//         const maxArea = Math.max(...areas);
//         const minPrice = Math.min(...prices);
//         const maxPrice = Math.max(...prices);

//         areaDisplay = `from ${minArea.toFixed(1)} to ${maxArea.toFixed(1)} sqft`;
//         priceDisplay = `from ${new Intl.NumberFormat('en-US').format(minPrice)} to ${new Intl.NumberFormat('en-US').format(maxPrice)} INR`;
//     }

//     return (
//         <div className="max-w-xl w-full  rounded-lg relative container">
//             <div className="">
//                 {hasValidData() && (<div className="bg-[#F5F5F5] rounded-lg px-6 py-4">
//                     <div className="flex justify-between items-center mb-1">
//                         <div className="flex items-center gap-2">
//                             <div className=''>
//                                 {
//                                     info?.name && <span className="flex items-center gap-2 font-semibold text-xl">
//                                         {info?.name && info?.name}
//                                         <BadgeCheck className="w-5 h-5 text-blue-600" />
//                                     </span>
//                                 }
//                                 <div className="font-light text-sm text-blue-800 mb-1 cursor-pointer" onClick={() => { window.location.href = `mailto:${info?.contacts?.[1]}` }}>
//                                     {info?.contacts?.[1]}
//                                 </div>
//                             </div>
//                         </div>

//                         {info?.logo &&
//                             <img
//                                 src={info?.logo}
//                                 alt={`${info?.name}`}
//                                 className="w-10 h-10 rounded-md object-contain"
//                             />
//                         }
//                     </div>

//                     <div className="grid grid-cols-2 gap-6 mb-4">
//                         {info?.experience && <div>
//                             <div className="font-semibold mb-1">{info?.experience}+ years</div>
//                             <div className="text-gray-600 text-sm">of experience in construction</div>
//                         </div>}
//                         {info?.operatingLocations?.length > 0 && <div>
//                             <div className="font-semibold mb-1">{info?.operatingLocations?.length || 0}</div>
//                             <div className="text-gray-600 text-sm">operating locations</div>
//                         </div>}
//                     </div>

//                     <div className="grid grid-cols-2 gap-6 mb-2">
//                         {stats?.completedCount?.length && <div>
//                             <div className="font-semibold mb-1">
//                                 {stats?.completedCount} projects completed
//                             </div>
//                             <div className="text-gray-600 text-sm">Total completed</div>
//                         </div>
//                         }
//                         {stats.ongoingCount?.lenght && <div>
//                             <div className="font-semibold mb-1">
//                                 {stats.ongoingCount} ongoing projects
//                             </div>
//                             <div className="text-gray-600 text-sm">Under construction</div>
//                         </div>}
//                     </div>

//                     {
//                         info?.contactNumber && <div>
//                             <button
//                                 onClick={() => setShowPhonePopup(true)}
//                                 className="w-full bg-[#FED42B] text-black rounded-xl py-3 mb-2 hover:bg-gray-900 hover:text-white transition-colors"
//                             >
//                                 Show phone
//                             </button>
//                             <button
//                                 onClick={handleCallClick}
//                                 className="w-full bg-white border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors"
//                             >
//                                 Call me
//                             </button>
//                         </div>
//                     }

//                     <PhonePopup
//                         phone={info?.contactNumber}
//                         isOpen={showPhonePopup}
//                         onClose={() => setShowPhonePopup(false)}
//                     />
//                 </div>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default ProjectContactCard;

// import React, { useState } from 'react';
// import { BadgeCheck, X } from 'lucide-react';
// import { QRCode } from 'antd';

// const PhonePopup = ({ phone, isOpen, onClose }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="absolute top-60 left-0 right-0 mx-4 bg-white rounded-lg shadow-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <div className="text-2xl font-semibold">{phone}</div>
//                 <button
//                     onClick={onClose}
//                     className="text-gray-500 hover:text-gray-700"
//                 >
//                     <X className="w-6 h-6" />
//                 </button>
//             </div>

//             <div className="flex justify-between items-center">
//                 <div className="text-gray-800 pr-4">
//                     Point your phone camera at the code to quickly dial the number
//                 </div>

//                 <div className="flex-shrink-0">
//                     <QRCode
//                         value={`tel:${phone}`}
//                         size={56}
//                         bordered={false}
//                         color="#000000"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// const ProjectContactCard = ({ info, connectedProperties }) => {
//     const [showPhonePopup, setShowPhonePopup] = useState(false);

//     const calculateStats = () => {
//         const buildingCount = info?.buildings?.length || 0;
//         const propertyCount = info?.properties?.length || 0;
//         const completedCount = info?.statistics?.completedProjects || 0;
//         const ongoingCount = info?.statistics?.ongoingProjects || 0;
//         const totalProperties = info?.statistics?.totalProperties || 0;

//         return {
//             buildingCount: buildingCount > 0 ? buildingCount : null,
//             propertyCount: propertyCount > 0 ? propertyCount : null,
//             completedCount: completedCount > 0 ? completedCount : null,
//             ongoingCount: ongoingCount > 0 ? ongoingCount : null,
//             totalProperties: totalProperties > 0 ? totalProperties : null
//         };
//     };

//     const stats = calculateStats();
//     const phone = info?.contacts?.[0] || null;

//     const handleCallClick = () => {
//         if (phone) {
//             window.location.href = `tel:${phone.replace(/\D/g, '')}`;
//         }
//     };

//     const hasValidData = () => {
//         return (
//             info?.name ||
//             info?.contacts?.[1] ||
//             info?.logo ||
//             (info?.experience && info.experience > 0) ||
//             (info?.operatingLocations && info.operatingLocations.length > 0) ||
//             stats?.completedCount ||
//             stats?.ongoingCount ||
//             stats?.totalProperties ||
//             phone
//         );
//     };

//     if (!hasValidData()) {
//         return null; // Don't render anything if no valid data
//     }

//     console.log("info", info)

//     return (
//         <div className="max-w-xl w-full rounded-lg relative container">
//             <div className="bg-[#F5F5F5] rounded-lg px-6 py-4">
//                 <div className="flex justify-between items-center mb-1">
//                     <div className="flex items-center gap-2">
//                         <div className=''>
//                             {info?.name && (
//                                 <span className="flex items-center gap-2 font-semibold text-xl">
//                                     {info.name}
//                                     <BadgeCheck className="w-5 h-5 text-blue-600" />
//                                 </span>
//                             )}
//                             {info?.contacts?.[1] && (
//                                 <div
//                                     className="font-light text-sm text-blue-800 mb-1 cursor-pointer"
//                                     onClick={() => { window.location.href = `mailto:${info.contacts[1]}` }}
//                                 >
//                                     {info.contacts[1]}
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     {info?.logo && (
//                         <img
//                             src={info.logo}
//                             alt={`${info.name || 'Builder'} logo`}
//                             className="w-10 h-10 rounded-md object-contain"
//                         />
//                     )}
//                 </div>

//                     <div className="grid grid-cols-2 gap-6 mb-4">
//                         {info?.experience > 0 && (
//                             <div>
//                                 <div className="font-semibold mb-1">{info.experience}+ years</div>
//                                 <div className="text-gray-600 text-sm">of experience in construction</div>
//                             </div>
//                         )}
//                         {info?.operatingLocations?.length > 0 && (
//                             <div>
//                                 <div className="font-semibold mb-1">{info.operatingLocations.length}</div>
//                                 <div className="text-gray-600 text-sm">operating locations</div>
//                             </div>
//                         )}
//                     </div>

//                     <div className="grid grid-cols-2 gap-6 mb-2">
//                         {stats.completedCount && (
//                             <div>
//                                 <div className="font-semibold mb-1">
//                                     {stats.completedCount} projects completed
//                                 </div>
//                                 <div className="text-gray-600 text-sm">Total completed</div>
//                             </div>
//                         )}
//                         {stats.ongoingCount && (
//                             <div>
//                                 <div className="font-semibold mb-1">
//                                     {stats.ongoingCount} ongoing projects
//                                 </div>
//                                 <div className="text-gray-600 text-sm">Under construction</div>
//                             </div>
//                         )}
//                         {/* Show total properties if completedProjects and ongoingProjects are 0 */}
//                         {!stats.completedCount && !stats.ongoingCount && stats.totalProperties && (
//                             <div>
//                                 <div className="font-semibold mb-1">
//                                     {stats.totalProperties} properties
//                                 </div>
//                                 <div className="text-gray-600 text-sm">Total properties</div>
//                             </div>
//                         )}
//                     </div>

//                 {/* Show property count if available */}
//                 {stats.propertyCount && (
//                     <div className="mb-4">
//                         <div className="font-semibold">
//                             {stats.propertyCount} listed properties
//                         </div>
//                         <div className="text-gray-600 text-sm">Currently available</div>
//                     </div>
//                 )}

//                 {phone && (
//                     <div>
//                         <button
//                             onClick={() => setShowPhonePopup(true)}
//                             className="w-full bg-[#FED42B] text-black rounded-xl py-3 mb-2 hover:bg-gray-900 hover:text-white transition-colors"
//                         >
//                             Show phone
//                         </button>
//                         <button
//                             onClick={handleCallClick}
//                             className="w-full bg-white border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors"
//                         >
//                             Call me
//                         </button>
//                     </div>
//                 )}

//                 <PhonePopup
//                     phone={phone}
//                     isOpen={showPhonePopup}
//                     onClose={() => setShowPhonePopup(false)}
//                 />
//             </div>
//         </div>
//     );
// };

// export default ProjectContactCard;

// import React, { useState } from 'react';
// import { BadgeCheck, X } from 'lucide-react';

// const PhonePopup = ({ phone, isOpen, onClose }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="absolute top-60 left-0 right-0 mx-4 bg-white rounded-lg shadow-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <div className="text-2xl font-semibold">{phone}</div>
//                 <button
//                     onClick={onClose}
//                     className="text-gray-500 hover:text-gray-700"
//                 >
//                     <X className="w-6 h-6" />
//                 </button>
//             </div>

//             <div className="flex justify-between items-center">
//                 <div className="text-gray-800 pr-4">
//                     Point your phone camera at the code to quickly dial the number
//                 </div>

//                 <div className="flex-shrink-0">
//                     <QRCode
//                         value={`tel:${phone}`}
//                         size={56}
//                         bordered={false}
//                         color="#000000"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// const ProjectContactCard = ({ info, connectedProperties }) => {
//     const [showPhonePopup, setShowPhonePopup] = useState(false);

//     const calculateStats = () => {
//         const buildingCount = info?.buildings?.length || 0;
//         const propertyCount = info?.properties?.length || 0;
//         const completedCount = info?.statistics?.completedProjects || 0;
//         const ongoingCount = info?.statistics?.ongoingProjects || 0;
//         const totalProperties = info?.statistics?.totalProperties || 0;

//         return {
//             buildingCount: buildingCount > 0 ? buildingCount : null,
//             propertyCount: propertyCount > 0 ? propertyCount : null,
//             completedCount: completedCount > 0 ? completedCount : null,
//             ongoingCount: ongoingCount > 0 ? ongoingCount : null,
//             totalProperties: totalProperties > 0 ? totalProperties : null
//         };
//     };

//     const calculatePriceAndAreaRanges = () => {
//         if (!connectedProperties || connectedProperties.length === 0) return null;

//         const prices = connectedProperties
//             .map(prop => prop.price)
//             .filter(price => price && price > 0);

//         const areas = connectedProperties
//             .map(prop => parseInt(prop.area))
//             .filter(area => area && area > 0);

//         return {
//             price: {
//                 min: Math.min(...prices),
//                 max: Math.max(...prices),
//                 single: prices.length === 1 ? prices[0] : null
//             },
//             area: {
//                 min: Math.min(...areas),
//                 max: Math.max(...areas),
//                 single: areas.length === 1 ? areas[0] : null
//             }
//         };
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(1)}Cr`;
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(1)}L`;
//         }
//         return `₹${price.toLocaleString()}`;
//     };

//     const formatArea = (area) => {
//         return `${area.toLocaleString()} sq.ft`;
//     };

//     const stats = calculateStats();
//     const ranges = calculatePriceAndAreaRanges();
//     const phone = info?.contacts?.[0] || null;

//     const handleCallClick = () => {
//         if (phone) {
//             window.location.href = `tel:${phone.replace(/\D/g, '')}`;
//         }
//     };

//     const hasValidData = () => {
//         return (
//             info?.name ||
//             info?.contacts?.[1] ||
//             info?.logo ||
//             (info?.experience && info.experience > 0) ||
//             (info?.operatingLocations && info.operatingLocations.length > 0) ||
//             stats?.completedCount ||
//             stats?.ongoingCount ||
//             stats?.totalProperties ||
//             phone ||
//             ranges
//         );
//     };

//     if (!hasValidData()) {
//         return null;
//     }

//     return (
//         <div className="max-w-xl w-full rounded-lg relative container">
//             <div className="bg-[#F5F5F5] rounded-lg px-6 py-4">
//                 <div className="flex justify-between items-center mb-1">
//                     <div className="flex items-center gap-2">
//                         <div className=''>
//                             {info?.name && (
//                                 <span className="flex items-center gap-2 font-semibold text-xl">
//                                     {info.name}
//                                     <BadgeCheck className="w-5 h-5 text-blue-600" />
//                                 </span>
//                             )}
//                             {info?.contacts?.[1] && (
//                                 <div
//                                     className="font-light text-sm text-blue-800 mb-1 cursor-pointer"
//                                     onClick={() => { window.location.href = `mailto:${info.contacts[1]}` }}
//                                 >
//                                     {info.contacts[1]}
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     {info?.logo && (
//                         <img
//                             src={info.logo}
//                             alt={`${info.name || 'Builder'} logo`}
//                             className="w-10 h-10 rounded-md object-contain"
//                         />
//                     )}
//                 </div>

//                 {/* Price and Area Ranges */}
//                 {ranges && (
//                     <div className="grid grid-cols-2 gap-6 mb-4">
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {ranges.price.single !== null
//                                     ? formatPrice(ranges.price.single)
//                                     : `${formatPrice(ranges.price.min)} - ${formatPrice(ranges.price.max)}`
//                                 }
//                             </div>
//                             <div className="text-gray-600 text-sm">Price Range</div>
//                         </div>
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {ranges.area.single !== null
//                                     ? formatArea(ranges.area.single)
//                                     : `${formatArea(ranges.area.min)} - ${formatArea(ranges.area.max)}`
//                                 }
//                             </div>
//                             <div className="text-gray-600 text-sm">Area Range</div>
//                         </div>
//                     </div>
//                 )}

//                 <div className="grid grid-cols-2 gap-6 mb-4">
//                     {info?.experience > 0 && (
//                         <div>
//                             <div className="font-semibold mb-1">{info.experience}+ years</div>
//                             <div className="text-gray-600 text-sm">of experience in construction</div>
//                         </div>
//                     )}
//                     {info?.operatingLocations?.length > 0 && (
//                         <div>
//                             <div className="font-semibold mb-1">{info.operatingLocations.length}</div>
//                             <div className="text-gray-600 text-sm">operating locations</div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="grid grid-cols-2 gap-6 mb-2">
//                     {stats.completedCount && (
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {stats.completedCount} projects completed
//                             </div>
//                             <div className="text-gray-600 text-sm">Total completed</div>
//                         </div>
//                     )}
//                     {stats.ongoingCount && (
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {stats.ongoingCount} ongoing projects
//                             </div>
//                             <div className="text-gray-600 text-sm">Under construction</div>
//                         </div>
//                     )}
//                     {!stats.completedCount && !stats.ongoingCount && stats.totalProperties && (
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {stats.totalProperties} properties
//                             </div>
//                             <div className="text-gray-600 text-sm">Total properties</div>
//                         </div>
//                     )}
//                 </div>

//                 {stats.propertyCount && (
//                     <div className="mb-4">
//                         <div className="font-semibold">
//                             {stats.propertyCount} listed properties
//                         </div>
//                         <div className="text-gray-600 text-sm">Currently available</div>
//                     </div>
//                 )}

//                 {phone && (
//                     <div>
//                         <button
//                             onClick={() => setShowPhonePopup(true)}
//                             className="w-full bg-[#FED42B] text-black rounded-xl py-3 mb-2 hover:bg-gray-900 hover:text-white transition-colors"
//                         >
//                             Show phone
//                         </button>
//                         <button
//                             onClick={handleCallClick}
//                             className="w-full bg-white border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors"
//                         >
//                             Call me
//                         </button>
//                     </div>
//                 )}

//                 <PhonePopup
//                     phone={phone}
//                     isOpen={showPhonePopup}
//                     onClose={() => setShowPhonePopup(false)}
//                 />
//             </div>
//         </div>
//     );
// };

// export default ProjectContactCard;


import React, { useState } from 'react';
import { BadgeCheck } from 'lucide-react';

const ProjectContactCard = ({ info, connectedProperties }) => {
    const [showPhonePopup, setShowPhonePopup] = useState(false);

    const calculatePriceAndAreaRanges = () => {
        if (!connectedProperties || connectedProperties.length === 0) return null;

        const prices = connectedProperties
            .map(prop => prop.price)
            .filter(price => price && price > 0);

        const areas = connectedProperties
            .map(prop => parseInt(prop.area))
            .filter(area => area && area > 0);

        return {
            price: {
                min: Math.min(...prices),
                max: Math.max(...prices),
                single: prices.length === 1 ? prices[0] : null
            },
            area: {
                min: Math.min(...areas),
                max: Math.max(...areas),
                single: areas.length === 1 ? areas[0] : null
            }
        };
    };

    const formatPrice = (price) => {
        if (price >= 10000000) {
            return `${(price / 10000000).toFixed(2)}`;
        }
        return `${(price / 1000000).toFixed(2)}`;
    };

    const formatArea = (area) => {
        return (area * 0.092903).toFixed(1); // Converting sq ft to m²
    };

    const ranges = calculatePriceAndAreaRanges();
    const phone = info?.contacts?.[0] || null;

    const handleCallClick = () => {
        if (phone) {
            window.location.href = `tel:${phone.replace(/\D/g, '')}`;
        }
    };

    const getProjectStats = () => {
        const completedCount = info?.statistics?.completedProjects || 0;
        const ongoingCount = info?.statistics?.ongoingProjects || 0;
        const buildingsCount = info?.buildings?.length || 0;
        const propertiesCount = info?.properties?.length || 0;

        return {
            left: {
                top: buildingsCount > 0 ? `Top ${buildingsCount}` : null,
                subtitle: "buildings in portfolio",
                count: `${propertiesCount} properties in ${buildingsCount} buildings`,
                status: "Available"
            },
            right: {
                top: completedCount > 0 ? `${completedCount}+` : null,
                subtitle: "completed projects",
                count: ongoingCount > 0 ? `${ongoingCount} ongoing projects` : null,
                status: "Under construction"
            }
        };
    };

    const stats = getProjectStats();

    return (
        <div className="max-w-2xl w-full space-y-4">
            {/* Price and Area Range */}
            <div className="space-y-1">
                <div className="text-3xl font-medium">
                    {ranges ? (
                        ranges.price.single !== null
                            ? `${formatPrice(ranges.price.single)} million ₹`
                            : `${formatPrice(ranges.price.min)} — ${formatPrice(ranges.price.max)} million ₹`
                    ) : null}
                </div>
                <div className="text-gray-600">
                    {ranges ? (
                        ranges.area.single !== null
                            ? `from ${formatArea(ranges.area.single)} m²`
                            : `from ${formatArea(ranges.area.min)} to ${formatArea(ranges.area.max)} m²`
                    ) : null}
                </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
                {info?.experience > 0 && (
                    <span className="px-4 py-1 bg-gray-100 rounded-full text-sm">
                        {info.experience}+ years experience
                    </span>
                )}
                {info?.status === "ACTIVE" && (
                    <span className="px-4 py-1 bg-gray-100 rounded-full text-sm">active developer</span>
                )}
            </div>

            {/* Developer Info Card */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                {/* Developer Header */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-medium">
                            {info?.name || "Developer"}
                        </span>
                        <BadgeCheck className="w-5 h-5 text-blue-600" />
                    </div>
                    {info?.logo && (
                        <img
                            src={info.logo}
                            alt={info.name}
                            className="w-10 h-10 rounded-md object-contain"
                        />
                    )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-1">
                        {stats.left.top && (
                            <>
                                <div className="text-xl font-medium">{stats.left.top}</div>
                                <div className="text-gray-600 text-sm">{stats.left.subtitle}</div>
                            </>
                        )}
                        {stats.left.count && (
                            <>
                                <div className="mt-6 font-medium">{stats.left.count}</div>
                                <div className="text-gray-600">{stats.left.status}</div>
                            </>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-1">
                        {stats.right.top && (
                            <>
                                <div className="text-xl font-medium">{stats.right.top}</div>
                                <div className="text-gray-600 text-sm">{stats.right.subtitle}</div>
                            </>
                        )}
                        {stats.right.count && (
                            <>
                                <div className="mt-6 font-medium">{stats.right.count}</div>
                                <div className="text-gray-600">{stats.right.status}</div>
                            </>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={() => setShowPhonePopup(true)}
                        className="w-full bg-gray-900 text-white rounded-xl py-4 font-medium"
                    >
                        Show phone
                    </button>
                    <button
                        onClick={handleCallClick}
                        className="w-full bg-white border border-gray-200 rounded-xl py-4 font-medium"
                    >
                        Call me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectContactCard;