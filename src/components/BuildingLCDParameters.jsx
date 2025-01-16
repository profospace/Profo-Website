// import React, { useState } from 'react';

// const initialData = {
//     title: "LCD parameters",
//     subtitle: "multi-quarter CITYZEN",
//     completion: {
//         label: "Completion date",
//         value: "Q3 2027"
//     },
//     housingClass: {
//         label: "Housing class",
//         value: "business"
//     },
//     houseType: {
//         label: "House type",
//         value: "brick-monolithic"
//     },
//     buildings: {
//         label: "Number of buildings",
//         value: "9"
//     },
//     additionalOptions: {
//         floors: { label: "Number of floors", value: "from 10 to 48" },
//         ceiling: { label: "Ceiling height", value: "2.75 - 2.85 m" },
//         contract: { label: "Contract type", value: "DDU, 214 FZ" },
//         apartments: { label: "Number of apartments", value: "1,574" },
//         concierge: { label: "Concierge", value: "There is" },
//         storerooms: { label: "Storerooms", value: "There is" },
//         usbChargers: { label: "USB chargers", value: "There is" },
//         dogPawWash: { label: "Dog Paw Wash", value: "There is" },
//         playground: { label: "Playground", value: "There is" },
//         terraces: { label: "Terraces", value: "There is" },
//         closedArea: { label: "Closed area", value: "There is" },
//         fireSystem: { label: "Fire extinguishing system", value: "There is" },
//         recreationRoom: { label: "Recreation room", value: "There is" },
//         finishing: { label: "Finishing", value: "unfinished, pre-finished" },
//         parking: { label: "Parking, parking spaces", value: "there is an underground" },
//         queues: { label: "Queues", value: "1" },
//         security: { label: "Security on site", value: "There is" },
//         bicycleStorage: { label: "Bicycle storage area", value: "There is" },
//         barrierFree: { label: "Barrier-free environment", value: "There is" },
//         stroller: { label: "Stroller", value: "There is" },
//         panoramicWindows: { label: "Panoramic windows", value: "There is" },
//         videoSurveillance: { label: "Video surveillance", value: "There is" },
//         wifi: { label: "Wi-Fi", value: "There is" },
//         evCharging: { label: "Electric vehicle charging", value: "There is" },
//         coworking: { label: "Coworking", value: "There is" }
//     }
// };

// const IconCompletion = () => (
//     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
//         <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// const IconHouseType = () => (
//     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
//         <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// const IconHousingClass = () => (
//     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
//         <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// const IconBuildings = () => (
//     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
//         <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// export default function BuildingLCDParameters() {
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <div className="max-w-4xl mx-auto p-6 font-sans">
//             <h1 className="text-2xl font-bold mb-2">{initialData.title}</h1>
//             <p className="text-gray-500 mb-8">{initialData.subtitle}</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                 <div className="flex items-center gap-4">
//                     <IconCompletion />
//                     <div>
//                         <p className="text-gray-500">{initialData.completion.label}</p>
//                         <p className="font-semibold">{initialData.completion.value}</p>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <IconHousingClass />
//                     <div>
//                         <p className="text-gray-500">{initialData.housingClass.label}</p>
//                         <p className="font-semibold">{initialData.housingClass.value}</p>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <IconHouseType />
//                     <div>
//                         <p className="text-gray-500">{initialData.houseType.label}</p>
//                         <p className="font-semibold">{initialData.houseType.value}</p>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <IconBuildings />
//                     <div>
//                         <p className="text-gray-500">{initialData.buildings.label}</p>
//                         <p className="font-semibold">{initialData.buildings.value}</p>
//                     </div>
//                 </div>
//             </div>

//             <button
//                 onClick={() => setShowMore(!showMore)}
//                 className="w-full bg-gray-100 rounded-lg p-4 text-left font-semibold hover:bg-gray-200 transition-colors"
//             >
//                 Additional options
//             </button>

//             <div className={`mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
//                 }`}>
//                 {Object.entries(initialData.additionalOptions).map(([key, item]) => (
//                     <div key={key} className="flex justify-between border-b border-gray-200 py-2">
//                         <span className="text-gray-500">{item.label}</span>
//                         <span className="font-semibold">{item.value}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// const IconCompletion = () => (
//     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
//         <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// const IconHouseType = () => (
//     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
//         <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// const IconHousingClass = () => (
//     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
//         <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// const IconBuildings = () => (
//     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
//         <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );

// export default function BuildingLCDParameters() {
//     const [showMore, setShowMore] = useState(false);
//     const { buildingDetail } = useSelector(state => state.buildings)

// const [buildingData , setBuildingData] = useState({})


// useEffect(
//     ()=>{
//         setBuildingData(buildingDetail)
//     } , [buildingDetail]
// )
// const initialData = {
//     title: buildingData.name,
//     subtitle: `${buildingData.type.charAt(0).toUpperCase() + buildingData.type.slice(1)} Complex at ${buildingData.frontRoad}`,
//     completion: {
//         label: "Completion status",
//         value: buildingData.developmentStatus.charAt(0).toUpperCase() + buildingData.developmentStatus.slice(1)
//     },
//     housingClass: {
//         label: "Housing class",
//         value: buildingData.type.charAt(0).toUpperCase() + buildingData.type.slice(1)
//     },
//     houseType: {
//         label: "House type",
//         value: "brick-monolithic"
//     },
//     buildings: {
//         label: "Number of buildings",
//         value: "9"
//     },
//     additionalOptions: {
//         floors: { label: "Number of floors", value: buildingData.totalFloors },
//         properties: { label: "Total properties", value: buildingData.totalProperties },
//         freeUnits: { label: "Available units", value: buildingData.freeProperties },
//         allocated: { label: "Allocated units", value: buildingData.allocatedProperties },
//         age: { label: "Building age", value: `${buildingData.age} years` },
//         storey: { label: "Storey", value: buildingData.storey },
//         parkingArea: { label: "Parking area", value: buildingData.parkingArea },
//         areaUSP: { label: "Area USP", value: buildingData.areaUSP },
//         ownerName: { label: "Owner name", value: buildingData.ownerName },
//         ownerId: { label: "Owner ID", value: buildingData.ownerId },
//         contact: { label: "Contact number", value: buildingData.contactNumber },
//         preBooking: { label: "Pre-booking", value: buildingData.allowPreBooking === "true" ? "Available" : "Not Available" },
//         flatsAvailable: { label: "Flats available", value: buildingData.numberOfFlatsAvailable }
//     }
// };

// console.log(buildingData)


//     return (
//         <div className="max-w-4xl mx-auto p-6 font-sans">
//             <h1 className="text-2xl font-bold mb-2">{initialData.title}</h1>
//             <p className="text-gray-500 mb-8">{initialData.subtitle}</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                 <div className="flex items-center gap-4">
//                     <IconCompletion />
//                     <div>
//                         <p className="text-gray-500">{initialData.completion.label}</p>
//                         <p className="font-semibold">{initialData.completion.value}</p>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <IconHousingClass />
//                     <div>
//                         <p className="text-gray-500">{initialData.housingClass.label}</p>
//                         <p className="font-semibold">{initialData.housingClass.value}</p>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <IconHouseType />
//                     <div>
//                         <p className="text-gray-500">{initialData.houseType.label}</p>
//                         <p className="font-semibold">{initialData.houseType.value}</p>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <IconBuildings />
//                     <div>
//                         <p className="text-gray-500">{initialData.buildings.label}</p>
//                         <p className="font-semibold">{initialData.buildings.value}</p>
//                     </div>
//                 </div>
//             </div>

//             <button
//                 onClick={() => setShowMore(!showMore)}
//                 className="w-full bg-gray-100 rounded-lg p-4 text-left font-semibold hover:bg-gray-200 transition-colors"
//             >
//                 Additional options
//             </button>

//             <div className={`mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
//                 {Object.entries(initialData.additionalOptions).map(([key, item]) => (
//                     <div key={key} className="flex justify-between border-b border-gray-200 py-2">
//                         <span className="text-gray-500">{item.label}</span>
//                         <span className="font-semibold">{item.value}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const IconCompletion = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconHouseType = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconHousingClass = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconBuildings = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function BuildingLCDParameters() {
    const [showMore, setShowMore] = useState(false);
    const { buildingDetail } = useSelector(state => state.buildings);
    const [buildingData, setBuildingData] = useState({});

    useEffect(() => {
        setBuildingData(buildingDetail || {});
    }, [buildingDetail]);

    const capitalizeFirstLetter = (string) => {
        return string && typeof string === 'string'
            ? string.charAt(0).toUpperCase() + string.slice(1)
            : '';
    };

    const initialData = {
        title: buildingData?.name || 'Building Name',
        subtitle: buildingData?.type && buildingData?.frontRoad
            ? `${capitalizeFirstLetter(buildingData.type)} Complex at ${buildingData.frontRoad}`
            : 'Location unavailable',
        completion: {
            label: "Completion status",
            value: capitalizeFirstLetter(buildingData?.developmentStatus || '')
        },
        housingClass: {
            label: "Housing class",
            value: capitalizeFirstLetter(buildingData?.type || '')
        },
        houseType: {
            label: "House type",
            value: "brick-monolithic"
        },
        buildings: {
            label: "Number of buildings",
            value: "9"
        },
        additionalOptions: {
            floors: { label: "Number of floors", value: buildingData?.totalFloors || 'N/A' },
            properties: { label: "Total properties", value: buildingData?.totalProperties || 'N/A' },
            freeUnits: { label: "Available units", value: buildingData?.freeProperties || 'N/A' },
            allocated: { label: "Allocated units", value: buildingData?.allocatedProperties || 'N/A' },
            age: { label: "Building age", value: buildingData?.age ? `${buildingData.age} years` : 'N/A' },
            storey: { label: "Storey", value: buildingData?.storey || 'N/A' },
            parkingArea: { label: "Parking area", value: buildingData?.parkingArea || 'N/A' },
            areaUSP: { label: "Area USP", value: buildingData?.areaUSP || 'N/A' },
            ownerName: { label: "Owner name", value: buildingData?.ownerName || 'N/A' },
            ownerId: { label: "Owner ID", value: buildingData?.ownerId || 'N/A' },
            contact: { label: "Contact number", value: buildingData?.contactNumber || 'N/A' },
            preBooking: { label: "Pre-booking", value: buildingData?.allowPreBooking === "true" ? "Available" : "Not Available" },
            flatsAvailable: { label: "Flats available", value: buildingData?.numberOfFlatsAvailable || 'N/A' }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <h1 className="text-2xl font-bold mb-2">{initialData.title}</h1>
            <p className="text-gray-500 mb-8">{initialData.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center gap-4">
                    <IconCompletion />
                    <div>
                        <p className="text-gray-500">{initialData.completion.label}</p>
                        <p className="font-semibold">{initialData.completion.value}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <IconHousingClass />
                    <div>
                        <p className="text-gray-500">{initialData.housingClass.label}</p>
                        <p className="font-semibold">{initialData.housingClass.value}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <IconHouseType />
                    <div>
                        <p className="text-gray-500">{initialData.houseType.label}</p>
                        <p className="font-semibold">{initialData.houseType.value}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <IconBuildings />
                    <div>
                        <p className="text-gray-500">{initialData.buildings.label}</p>
                        <p className="font-semibold">{initialData.buildings.value}</p>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setShowMore(!showMore)}
                className="w-full bg-gray-100 rounded-lg p-4 text-left font-semibold hover:bg-gray-200 transition-colors"
            >
                Additional options
            </button>

            <div className={`mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {Object.entries(initialData.additionalOptions).map(([key, item]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}