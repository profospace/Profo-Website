// import React, { useState, useEffect } from 'react';
// import { Home, Bed, Bath, IndianRupee, Store, Building } from 'lucide-react';
// import _ from 'lodash';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const PropertyListing = () => {
//     const [buildingData, setBuildingData] = useState(null);
//     const [selectedType, setSelectedType] = useState(null);
//     const { buildingDetail } = useSelector(state => state.buildings)
//     const navigate = useNavigate()


//         useEffect(() => {
//             setBuildingData(buildingDetail)
//         }, [buildingDetail]);

//     if (!buildingData) {
//         return <div className="p-4">Loading...</div>;
//     }

//     // Group properties by either BHK (for apartments) or type_name (for others)
//     const groupedProperties = _.groupBy(buildingData.connectedProperties, (property) => {
//         if (property.type_name.toLowerCase() === 'apartment') {
//             return `${property.bedrooms}bhk`;
//         }
//         return property.type_name;
//     });

//     console.log(groupedProperties)

//     const getTypeIcon = (type) => {
//         if (type.toLowerCase().includes('bhk')) return Home;
//         if (type.toLowerCase().includes('shop')) return Store;
//         return Building;
//     };

//     const PropertyCard = ({ property }) => (
//         <div className="bg-gray-50 rounded-lg p-4 cursor-pointer " onClick={() => navigate(`/api/details/${property?.post_id}`)}>
//             <div className="flex gap-4">
//                 <div className="w-32 h-32 flex-shrink-0">
//                     <img
//                         src={property.post_image || "/api/placeholder/320/320"}
//                         alt={property.post_title}
//                         className="w-full h-full object-cover rounded-lg"
//                     />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                     <div className='flex justify-between items-center '>
//                         <h4 className="font-semibold text-lg truncate">{property.post_title}</h4>
//                         <p className='px-2 py-[0.5px] text-sm rounded bg-yellow-200'>{property.floor + 'th floor'}</p>
//                     </div>
//                     <p className="text-gray-600 text-sm mb-2 truncate">{property.address}</p>
//                     <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
//                         {property.type_name === 'Apartment' && (
//                             <>
//                                 <div className="flex items-center gap-1">
//                                     <Bed className="w-4 h-4" />
//                                     {property.bedrooms} BHK
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <Bath className="w-4 h-4" />
//                                     {property.bathrooms} Baths
//                                 </div>
//                             </>
//                         )}
//                         <div>
//                             {property.area} {property.areaUnit}
//                         </div>
//                         {property.furnishing && (
//                             <div>{property.furnishing}</div>
//                         )}
//                     </div>
//                     <div className="mt-2 flex justify-between items-center">
//                         <div className="flex items-center gap-1">
//                             <IndianRupee className="w-4 h-4" />
//                             <span className="font-semibold">
//                                 {property.price.toLocaleString()} {property.priceUnit}
//                                 {property.purpose.toLowerCase() === 'rent' && '/month'}
//                             </span>
//                         </div>
//                         <div className="text-sm">
//                             <span className={`px-2 py-1 rounded ${property.purpose.toLowerCase() === 'rent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
//                                 }`}>
//                                 {property.purpose}
//                             </span>
//                         </div>
//                     </div>
//                     {property.amenities && property.amenities.length > 0 && (
//                         <div className="mt-2">
//                             <div className="flex flex-wrap gap-2">
//                                 {property.amenities.slice(0, 3).map((amenity, index) => (
//                                     <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
//                                         {amenity}
//                                     </span>
//                                 ))}
//                                 {property.amenities.length > 3 && (
//                                     <span className="text-xs bg-gray-100 px-2 py-1 rounded">
//                                         +{property.amenities.length - 3} more
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="max-w-4xl mx-auto p-4">
//             <div className="mb-6">
//                 <h2 className="text-2xl font-bold">{buildingData.name}</h2>
//                 <p className="text-gray-600">{buildingData.description}</p>
//                 <div className="mt-2 flex flex-wrap gap-4 text-sm">
//                     <div className="flex items-center gap-1">
//                         <span className="font-semibold">Total Properties:</span> {buildingData.totalProperties}
//                     </div>
//                     <div className="flex items-center gap-1">
//                         <span className="font-semibold">Available:</span> {buildingData.freeProperties}
//                     </div>
//                     <div className="flex items-center gap-1">
//                         <span className="font-semibold">Total Floors:</span> {buildingData.totalFloors}
//                     </div>
//                 </div>
//             </div>

//             <div className="space-y-4">
//                 {Object.entries(groupedProperties).map(([type, properties]) => {
//                     const Icon = getTypeIcon(type);
//                     const displayType = type.toLowerCase().includes('bhk')
//                         ? type.toUpperCase()
//                         : type;

//                     return (
//                         <div key={type} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
//                             <div
//                                 className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
//                                 onClick={() => setSelectedType(selectedType === type ? null : type)}
//                             >
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-2">
//                                         <Icon className="w-5 h-5" />
//                                         <h3 className="text-lg font-semibold">{displayType}</h3>
//                                     </div>
//                                     <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                                         {properties.length} Available
//                                     </span>
//                                 </div>
//                             </div>

//                             {selectedType === type && (
//                                 <div className="p-4">
//                                     <div className="space-y-4">
//                                         {properties.map((property) => (
//                                             <PropertyCard key={property._id} property={property} />
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default PropertyListing;

import React, { useState, useEffect } from 'react';
import { Home, Bed, Bath, IndianRupee, Store, Building, ChevronUp, ChevronDown } from 'lucide-react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PropertyListing = () => {
    const [buildingData, setBuildingData] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const { buildingDetail } = useSelector(state => state.buildings)
    const navigate = useNavigate()

    useEffect(() => {
        setBuildingData(buildingDetail)
    }, [buildingDetail]);

    if (!buildingData) {
        return <div className="p-4">Loading...</div>;
    }

    // Group properties by either BHK (for apartments) or type_name (for others)
    const groupedProperties = _.groupBy(buildingData.connectedProperties, (property) => {
        if (property.type_name.toLowerCase() === 'apartment') {
            return `${property.bedrooms}bhk`;
        }
        return property.type_name;
    });

    const getTypeIcon = (type) => {
        if (type.toLowerCase().includes('bhk')) return Home;
        if (type.toLowerCase().includes('shop')) return Store;
        return Building;
    };

    // Calculate starting price for each category
    const getStartingPrice = (properties) => {
        const prices = properties.map(p => p.price).filter(price => price > 0);
        return prices.length > 0 ? Math.min(...prices) : 0;
    };

    const formatPrice = (price) => {
        if (price >= 10000000) {
            return `${(price / 10000000).toFixed(1)}Cr`;
        } else if (price >= 100000) {
            return `${(price / 100000).toFixed(1)}L`;
        } else if (price >= 1000) {
            return `${(price / 1000).toFixed(1)}K`;
        }
        return price.toString();
    };
    

    const PropertyCard = ({ property }) => (
        <div className="bg-gray-50 rounded-lg p-4 cursor-pointer" onClick={() => navigate(`/api/details/${property?.post_id}`)}>
            <div className="flex gap-4">
                <div className="w-32 h-32 flex-shrink-0">
                    <img
                        src={property.post_image || "/api/placeholder/320/320"}
                        alt={property.post_title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <div className='flex justify-between items-center'>
                        <h4 className="font-semibold text-lg truncate">{property.post_title}</h4>
                        <div className='flex items-center gap-2'>
                            <p className='px-2 py-[0.5px] text-sm rounded bg-gray-200'>{property.floor + 'th floor'}</p>
                            <div className="text-sm bg-black rounded text-white">
                                <span className="px-2 py-1 ">
                                    {property.purpose}
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 truncate">{property.address}</p>
                    <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
                        {property.type_name === 'Apartment' && (
                            <>
                                <div className="flex items-center gap-1">
                                    <Bed className="w-4 h-4" />
                                    {property.bedrooms} BHK
                                </div>
                                <div className="flex items-center gap-1">
                                    <Bath className="w-4 h-4" />
                                    {property.bathrooms} Baths
                                </div>
                            </>
                        )}
                        <div>
                            {property.area} {property.areaUnit}
                        </div>
                        {property.furnishing && (
                            <div>{property.furnishing}</div>
                        )}
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <IndianRupee className="w-4 h-4" />
                            <span className="font-semibold">
                                {property.price.toLocaleString()} {property.priceUnit}
                                {property.purpose.toLowerCase() === 'rent' && '/month'}
                            </span>
                        </div>
                        {/* <div className="text-sm">
                            <span className={`px-2 py-1 rounded ${property.purpose.toLowerCase() === 'rent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                {property.purpose}
                            </span>
                        </div> */}
                    </div>
                    {property.amenities && property.amenities.length > 0 && (
                        <div className="mt-2">
                            <div className="flex flex-wrap gap-2">
                                {property.amenities.slice(0, 3).map((amenity, index) => (
                                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        {amenity}
                                    </span>
                                ))}
                                {property.amenities.length > 3 && (
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        +{property.amenities.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">{buildingData.name}</h2>
                <p className="text-gray-600">{buildingData.description}</p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Total Properties:</span> {buildingData.totalProperties}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Available:</span> {buildingData.freeProperties}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Total Floors:</span> {buildingData.totalFloors}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {Object.entries(groupedProperties).map(([type, properties]) => {
                    const Icon = getTypeIcon(type);
                    const displayType = type.toLowerCase().includes('bhk')
                        ? type.toUpperCase()
                        : type;
                    const startingPrice = getStartingPrice(properties);

                    return (
                        <div key={type} className="bg-white rounded-lg  overflow-hidden ">
                            <div
                                className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => setSelectedType(selectedType === type ? null : type)}
                            >
                                {/* <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-5 h-5" />
                                        <h3 className="text-lg font-semibold">{displayType}</h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {startingPrice > 0 && (
                                            <div className="flex items-center gap-1 text-gray-600">
                                                <span>from </span>
                                                <IndianRupee className="w-4 h-4" />
                                                <span className="font-semibold">{formatPrice(startingPrice)}</span>
                                            </div>
                                        )}
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            {properties.length} Available
                                        </span>
                                        {selectedType === type ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </div>
                                </div> */}
                                <div className="grid grid-cols-3 items-center">
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-5 h-5" />
                                        <h3 className="text-lg font-semibold">{displayType}</h3>
                                    </div>
                                    {startingPrice > 0 && (
                                        <div className="flex items-center justify-start gap-0 text-gray-800">
                                            <span className='text-gray-800 font-semibold'>from </span>
                                            <IndianRupee className="w-4 h-4 font-bold" />
                                            <span className="font-semibold">{formatPrice(startingPrice)}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-end gap-4">
                                        <span className="text-black px-3 py-1 rounded-full text-md">
                                            {properties.length} Available
                                        </span>
                                        {selectedType === type ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {selectedType === type && (
                                <div className="p-4">
                                    <div className="space-y-4">
                                        {properties.map((property) => (
                                            <PropertyCard key={property._id} property={property} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PropertyListing;