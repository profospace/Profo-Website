import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import {
    FaBuilding,
    FaHome,
    FaWarehouse,
    FaStore,
    FaLandmark,
    FaHotel,
    FaQuestion,
    FaRoad
} from 'react-icons/fa';
import { PiMapPinSimpleArea } from 'react-icons/pi';

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
function BuildingInfo() {
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
        areaUSP : {
            label: "Area USP" ,
            value: buildingData?.areaUSP || 'N/A'
        },
        frontRoad:{
            label: "Front Road" ,
            value: buildingData?.frontRoad || 'N/A'

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
            flatsAvailable: { label: "Flats available", value: buildingData?.numberOfFlatsAvailable || 'N/A' },
        }
    };

    // const getTypeNameCount = (properties) => {
    //     const typeNameCount = {};

    //     properties?.forEach((property) => {
    //         const type = property.type_name;
    //         if (type) {
    //             typeNameCount[type] = (typeNameCount[type] || 0) + 1;
    //         }
    //     });

    //     return Object.entries(typeNameCount); // Returns array of [type, count]
    // };

    // const typeCounts = getTypeNameCount(info?.connectedProperties);


    /* dummy add for testing purpose */
    // Map property types to their corresponding icon URLs
    const getPropertyIcon = (type) => {
        const iconMap = {
            'Apartment': 'https://img.icons8.com/?size=100&id=30168&format=png&color=000000',
            'House': 'https://img.icons8.com/?size=100&id=30168&format=png&color=000000',
            'Villa': 'https://img.icons8.com/?size=100&id=30168&format=png&color=000000',
            'Office': 'https://img.icons8.com/?size=100&id=30168&format=png&color=000000',
            'Shop': 'https://img.icons8.com/?size=100&id=30168&format=png&color=000000',
            'Warehouse': 'https://img.icons8.com/?size=100&id=30168&format=png&color=000000',
            'Land': 'https://img.icons8.com/?size=100&id=30168&format=png&color=000000'
        };

        const iconUrl = iconMap[type] || 'https://img.icons8.com/?size=100&id=12115&format=png&color=000000'; // fallback icon
        return (
            <img
                src={iconUrl}
                alt={`${type} icon`}
                className="w-8 h-8 object-contain"
            />
        );
    };

    const getTypeNameCount = (properties) => {
        const typeNameCount = {};

        // Count real properties
        properties?.forEach((property) => {
            const type = property.type_name;
            if (type) {
                typeNameCount[type] = (typeNameCount[type] || 0) + 1;
            }
        });

        // Add dummy property types
        const dummyTypes = {
            "Villa": 7,
            "Office": 3,
            "Shop": 5,
            "Warehouse": 4,
            "Land": 6,
        };

        Object.entries(dummyTypes).forEach(([type, count]) => {
            typeNameCount[type] = (typeNameCount[type] || 0) + count;
        });

        return Object.entries(typeNameCount);
    };

    const typeCounts = getTypeNameCount([]);

    // const typeCounts = getTypeNameCount(buildingDetail?.connectedProperties);
    // console.log(typeCounts);
    return (
        <div className="max-w-4xl mx-auto container">
            <h1 className="text-3xl font-bold mb-2">{initialData.title}</h1>
            <p className="text-gray-500 mb-8">{initialData.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                    <IconCompletion />
                    <div>
                        <p className="text-gray-500">{initialData.completion.label}</p>
                        <p className="font-semibold">{initialData.completion.value}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaRoad />
                    <div>
                        <p className="text-gray-500">{initialData.frontRoad.label}</p>
                        <p className="font-semibold">{initialData.frontRoad.value}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <PiMapPinSimpleArea />
                    <div>
                        <p className="text-gray-500">{initialData.areaUSP.label}</p>
                        <p className="font-semibold">{initialData.areaUSP.value}</p>
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


            {/* info about connect properties */}
            {/* <div className="w-full">
                <h1 className="text-2xl font-bold mb-4">Property Types Available</h1>
                <div className="flex flex-wrap gap-4">
                    {typeCounts.length > 0 ? (
                        typeCounts.map(([type, count]) => (
                            <div
                                key={type}
                                className="flex items-center gap-6 px-4 py-2 border border-gray-400 rounded-lg transition-all hover:bg-gray-200 cursor-pointer group min-w-40"
                            >
                                <div className="text-gray-500">
                                    {getPropertyIcon(type)}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-xl text-black text-start">
                                        {count}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-500">
                                        {type}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No property types found</p>
                    )}
                </div>
            </div> */}

            
        </div>
    )
}

export default BuildingInfo