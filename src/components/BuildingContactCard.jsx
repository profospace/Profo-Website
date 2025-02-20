// import React from 'react';
// import { BadgeCheck } from 'lucide-react';

// const BuildingContactCard = ({ info }) => {

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

//     return (
//         <div className="max-w-xl w-full bg-white rounded-lg">
//             <div className="p-4">
//                 <div className="bg-gray-50 rounded-lg px-6 py-4">
//                     <div className="flex justify-between items-center mb-2">
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold text-2xl">
//                                 {info?.name}
//                             </span>
//                             <BadgeCheck className="w-5 h-5 text-blue-600" />
//                         </div>

//                         {info?.logo ? (
//                             <img
//                                 src='https://avatars.mds.yandex.net/get-realty-content/8286862/46303758-a5d4-48da-9e81-9be761c16443/builder_logo_info'
//                                 alt={`${info?.name} logo`}
//                                 className="w-10 h-10 rounded-md object-contain"
//                             />
//                         ) : (
//                             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold">
//                                 {info?.name.slice(0, 2).toUpperCase()}
//                             </div>
//                         )}
//                     </div>

//                     <div className="grid grid-cols-2 gap-6 mb-4">
//                         <div>
//                             <div className="font-semibold mb-1">{info?.experience}+ years</div>
//                             <div className="text-gray-600 text-sm">of experience in construction</div>
//                         </div>
//                         <div>
//                             <div className="font-semibold mb-1">{info?.operatingLocations?.length || 0}</div>
//                             <div className="text-gray-600 text-sm">operating locations</div>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-6 mb-2">
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {stats.completedCount} projects completed
//                             </div>
//                             <div className="text-gray-600 text-sm">Total completed</div>
//                         </div>
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {stats.ongoingCount} ongoing projects
//                             </div>
//                             <div className="text-gray-600 text-sm">Under construction</div>
//                         </div>
//                     </div>

//                     <button className="w-full bg-[#FED42B] text-black rounded-lg py-4 mb-2 hover:bg-gray-900 hover:text-white transition-colors">
//                         {info?.contacts?.[0] || "Show phone"}
//                     </button>
//                     <button className="w-full bg-white border border-gray-200 rounded-lg py-4 hover:bg-gray-50 transition-colors">
//                         Call me
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BuildingContactCard;

// import React, { useState } from 'react';
// import { BadgeCheck, X } from 'lucide-react';
// import { QRCode } from 'antd';

// const PhonePopup = ({ phone, isOpen, onClose }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="absolute top-52 bg-white rounded-lg shadow-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <div className="text-2xl font-semibold">{phone}</div>
//                 <button
//                     onClick={onClose}
//                     className="text-gray-500 hover:text-gray-700"
//                 >
//                     <X className="w-6 h-6" />
//                 </button>
//             </div>

//             <div className='flex'>
//                 <div className="text-gray-800">
//                     Point your phone camera at the code to quickly dial the number
//                 </div>

//                 <div className="flex justify-center">
//                     <QRCode
//                         value={`tel:${phone.replace(/\D/g, '')}`}
//                         size={56}
//                         bordered={false}
//                         color="#000000"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// const BuildingContactCard = ({ info }) => {
//     const [showPhonePopup, setShowPhonePopup] = useState(false);

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
//     const phone = info?.contacts?.[0] || "+7 (980) 967-80-15";

//     return (
//         <div className="max-w-xl w-full bg-white rounded-lg relative">
//             <div className="p-4">
//                 <div className="bg-gray-50 rounded-lg px-6 py-4 relative">
//                     <div className="flex justify-between items-center mb-2">
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold text-xl">
//                                 {info?.name}
//                             </span>
//                             <BadgeCheck className="w-5 h-5 text-blue-600" />
//                         </div>

//                         {info?.logo ? (
//                             <img
//                                 // src={info.logo}
//                                 src='https://avatars.mds.yandex.net/get-realty-content/8286862/46303758-a5d4-48da-9e81-9be761c16443/builder_logo_info'                                alt={`${info?.name} logo`}
//                                 className="w-10 h-10 rounded-md object-contain"
//                             />
//                         ) : (
//                             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold">
//                                 {info?.name.slice(0, 2).toUpperCase()}
//                             </div>
//                         )}
//                     </div>

//                     <div className="grid grid-cols-2 gap-6 mb-4">
//                         <div>
//                             <div className="font-semibold mb-1">{info?.experience}+ years</div>
//                             <div className="text-gray-600 text-sm">of experience in construction</div>
//                         </div>
//                         <div>
//                             <div className="font-semibold mb-1">{info?.operatingLocations?.length || 0}</div>
//                             <div className="text-gray-600 text-sm">operating locations</div>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-6 mb-2">
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {stats.completedCount} projects completed
//                             </div>
//                             <div className="text-gray-600 text-sm">Total completed</div>
//                         </div>
//                         <div>
//                             <div className="font-semibold mb-1">
//                                 {stats.ongoingCount} ongoing projects
//                             </div>
//                             <div className="text-gray-600 text-sm">Under construction</div>
//                         </div>
//                     </div>

//                     <button
//                         onClick={() => setShowPhonePopup(true)}
//                         className="w-full bg-[#FED42B] text-black rounded-lg py-4 mb-2 hover:bg-gray-900 hover:text-white transition-colors"
//                     >
//                         Show phone
//                     </button>
//                     <button className="w-full bg-white border border-gray-200 rounded-lg py-4 hover:bg-gray-50 transition-colors">
//                         Call me
//                     </button>

//                     <PhonePopup
//                         phone={phone}
//                         isOpen={showPhonePopup}
//                         onClose={() => setShowPhonePopup(false)}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BuildingContactCard;

import React, { useState } from 'react';
import { BadgeCheck, X } from 'lucide-react';
import { QRCode } from 'antd';

const PhonePopup = ({ phone, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute top-60 left-0 right-0 mx-4 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-semibold">{phone}</div>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="flex justify-between items-center">
                <div className="text-gray-800 pr-4">
                    Point your phone camera at the code to quickly dial the number
                </div>

                <div className="flex-shrink-0">
                    <QRCode
                        value={`tel:${phone}`}
                        size={56}
                        bordered={false}
                        color="#000000"
                    />
                </div>
            </div>
        </div>
    );
};

const BuildingContactCard = ({ info }) => {
    const [showPhonePopup, setShowPhonePopup] = useState(false);
    console.log("info", info)
    const calculateStats = () => {
        const buildingCount = info?.buildings?.length || 0;
        const propertyCount = info?.properties?.length || 0;
        const completedCount = info?.statistics?.completedProjects || 0;
        const ongoingCount = info?.statistics?.ongoingProjects || 0;

        return {
            buildingCount,
            propertyCount,
            completedCount,
            ongoingCount
        };
    };

    const stats = calculateStats();
    const phone = info?.contacts?.[0] || "+91 (000) 000-00-00";

    const handleCallClick = () => {
        window.location.href = `tel:${phone.replace(/\D/g, '')}`;
    };

    const hasValidData = () => {
        return (
            info?.name ||
            info?.contacts?.[1] ||
            info?.logo ||
            info?.experience ||
            (info?.operatingLocations && info.operatingLocations.length > 0) ||
            (stats?.completedCount > 0) ||
            (stats?.ongoingCount > 0) ||
            info?.contactNumber
        );
    };


    // Extract connected properties
    const connectedProperties = info?.connectedProperties || [];
    const isSingleProperty = connectedProperties.length === 1;

    // Calculate values or ranges
    let areaDisplay = '';
    let priceDisplay = '';

    if (isSingleProperty) {
        // Single property - show direct values
        const property = connectedProperties[0];
        areaDisplay = `${parseFloat(property.area || 0).toFixed(1)} sqft`;
        priceDisplay = `${new Intl.NumberFormat('en-US').format(property.price || 0)} INR`;
    } else if (connectedProperties.length > 1) {
        // Multiple properties - show ranges
        const areas = connectedProperties.map(prop => parseFloat(prop.area) || 0);
        const prices = connectedProperties.map(prop => prop.price || 0);

        const minArea = Math.min(...areas);
        const maxArea = Math.max(...areas);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        areaDisplay = `from ${minArea.toFixed(1)} to ${maxArea.toFixed(1)} sqft`;
        priceDisplay = `from ${new Intl.NumberFormat('en-US').format(minPrice)} to ${new Intl.NumberFormat('en-US').format(maxPrice)} INR`;
    }










    return (
        <div className="max-w-3xl w-full  rounded-lg relative container2">
            <div className="">
                {hasValidData() && (<div className="bg-[#F5F5F5] rounded-lg px-6 py-4">
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                            <div className=''>
                                {
                                    info?.name && <span className="flex items-center gap-2 font-semibold text-xl">
                                        {info?.name && info?.name}
                                        <BadgeCheck className="w-5 h-5 text-blue-600" />
                                    </span>
                                }
                                <div className="font-light text-sm text-blue-800 mb-1 cursor-pointer" onClick={() => { window.location.href = `mailto:${info?.contacts?.[1]}` }}>
                                    {info?.contacts?.[1]}
                                </div>
                            </div>
                        </div>

                        {info?.logo &&
                            <img
                                src={info?.logo}
                                alt={`${info?.name}`}
                                className="w-10 h-10 rounded-md object-contain"
                            />
                        }
                    </div>

                    {/* <div className="grid grid-cols-2 gap-6 mb-4">
                        {info?.experience && <div>
                            <div className="font-semibold mb-1">{info?.experience}+ years</div>
                            <div className="text-gray-600 text-sm">of experience in construction</div>
                        </div>}
                        {info?.operatingLocations?.length > 0 && <div>
                            <div className="font-semibold mb-1">{info?.operatingLocations?.length || 0}</div>
                            <div className="text-gray-600 text-sm">operating locations</div>
                        </div>}
                    </div> */}

                    {/*  some connected properties info   */}
                    <div className="flex gap-6 mb-4">
                        <div className='flex items-center gap-1'>
                            <div className="font-semibold text-md">{info?.connectedProperties?.length}</div>
                            <div className="text-gray-600 text-sm">Property Available</div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className="font-semibold text-md">{info?.totalFloors}</div>
                            <div className="text-gray-600 text-sm">Floor Available</div>
                        </div>


                    </div>


                    {/* more */}
                    <div className="max-w-md space-y-4 mb-4">
                        <div className="space-y-4">
                            <div className="flex">
                                <div className="w-32">
                                    <h2 className="text-gray-500 font-normal">Apartments</h2>
                                </div>
                                <div className="flex-1">
                                    <p className="text-black font-normal">{areaDisplay}</p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-32">
                                    <h2 className="text-gray-500 font-normal">Price</h2>
                                </div>
                                <div className="flex-1">
                                    <p className="text-black font-normal">{priceDisplay}</p>
                                </div>
                            </div>
                        </div>
                    </div>





                    {/* <div className="grid grid-cols-2 gap-6 mb-2">
                        {stats?.completedCount?.length && <div>
                            <div className="font-semibold mb-1">
                                {stats?.completedCount} projects completed
                            </div>
                            <div className="text-gray-600 text-sm">Total completed</div>
                        </div>
                        }
                        {stats.ongoingCount?.lenght && <div>
                            <div className="font-semibold mb-1">
                                {stats.ongoingCount} ongoing projects
                            </div>
                            <div className="text-gray-600 text-sm">Under construction</div>
                        </div>}
                    </div> */}

                    {
                        info?.contactNumber && <div>
                            <button
                                onClick={() => setShowPhonePopup(true)}
                                className="w-full bg-[#FED42B] text-black rounded-xl py-3 mb-2 hover:bg-gray-900 hover:text-white transition-colors"
                            >
                                Show phone
                            </button>
                            <button
                                onClick={handleCallClick}
                                className="w-full bg-white border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors"
                            >
                                Call me
                            </button>
                        </div>
                    }

                    <PhonePopup
                        phone={info?.contactNumber}
                        isOpen={showPhonePopup}
                        onClose={() => setShowPhonePopup(false)}
                    />
                </div>)
                }
            </div>
        </div>
    );
};

export default BuildingContactCard;