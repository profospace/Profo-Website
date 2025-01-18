// import React from 'react';
// import { Heart } from 'lucide-react';

// const ProjectFloorPlan = ({ floorPlans }) => {
//     // Format price to Russian Ruble format
//     const formatPrice = (price) => {
//         return new Intl.NumberFormat('ru-RU', {
//             style: 'currency',
//             currency: 'RUB',
//             maximumFractionDigits: 0,
//             minimumFractionDigits: 0
//         }).format(price).replace('₽', '₹');
//     };

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 px-0 py-0">
//             {floorPlans.map((property, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
//                     <div className="relative">
//                         {/* Last tag */}
//                         <div className="absolute top-2 left-2 z-10">
//                             <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                                 {property?.isActive === true &&  "Active" }
//                             </span>
//                         </div>

//                         {/* Heart icon */}
//                         <div className="absolute top-2 right-2 z-10">
//                             <Heart className="text-gray-600 w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
//                         </div>

//                         {/* Property Image */}
//                         <div className="h-48 bg-gray-200">
//                             <img
//                                 src={property.image}
//                                 alt={property.name}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>

//                         {/* Property Details */}
//                         <div className="px-4 py-2">
//                             {/* Layout section */}
//                             <div className="grid grid-cols-2 gap-2 mb-4">
//                                 <div>
//                                     <div className="text-md font-semibold">{property.type}</div>
//                                     <div className="text-sm text-gray-500">Type</div>
//                                 </div>
//                                 <div>
//                                     <div className="text-md font-semibold">{property.superArea} м²</div>
//                                     <div className="text-sm text-gray-500">SuperArea</div>
//                                 </div>
//                                 <div>
//                                     <div className="text-md font-semibold">{property.carpetArea} м²</div>
//                                     <div className="text-sm text-gray-500">CarpetArea</div>
//                                 </div>
//                                 {/* <div>
//                                     <div className="text-md font-semibold">{property.superArea} м²</div>
//                                     <div className="text-sm text-gray-500">Общая площадь</div>
//                                 </div> */}
//                             </div>

//                             {/* Price and details */}
//                             <div className="mt-4">
//                                 <div className="text-md font-bold text-gray-900">
//                                     from {formatPrice(property.price)}
//                                 </div>
//                                 <div className="text-gray-600 mt-1">
//                                     {property.type}, {property.superArea} м²
//                                 </div>
//                                 <div className="text-gray-500 mt-1">
//                                     {property.name}
//                                 </div>
//                             </div>

//                             {/* Show apartment button */}
//                             <button className="w-full mt-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
//                                 Show apartment
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProjectFloorPlan;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProjectFloorPlan = ({ floorPlans }) => {
    const [sortBy, setSortBy] = useState('price');
    const [expandedItem, setExpandedItem] = useState(null);

    const formatPrice = (price) => {
        return `${(price / 1000000).toFixed(2)} million ₹`;
    };

    const formatArea = (area) => {
        return `${area} m²`;
    };

    const getSortedPlans = () => {
        return [...floorPlans].sort((a, b) => {
            if (sortBy === 'price') return a.price - b.price;
            if (sortBy === 'area') return a.superArea - b.superArea;
            if (sortBy === 'perm2') {
                const aPrice = a.price / a.superArea;
                const bPrice = b.price / b.superArea;
                return aPrice - bPrice;
            }
            return 0;
        });
    };

    const getBHKType = (type) => {
        return type === '2BHK' ? '2 rooms' : type === '3BHK' ? '3 rooms' : '4 rooms';
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <div className="mb-6 flex gap-4">
                <span className="text-gray-600">Sort:</span>
                <button
                    className={`${sortBy === 'price' ? 'text-blue-600' : 'text-gray-600'}`}
                    onClick={() => setSortBy('price')}
                >
                    at a price
                </button>
                <button
                    className={`${sortBy === 'area' ? 'text-blue-600' : 'text-gray-600'}`}
                    onClick={() => setSortBy('area')}
                >
                    by area
                </button>
                <button
                    className={`${sortBy === 'perm2' ? 'text-blue-600' : 'text-gray-600'}`}
                    onClick={() => setSortBy('perm2')}
                >
                    for m²
                </button>
            </div>

            <div className="space-y-4">
                {getSortedPlans().map((plan, index) => (
                    <div key={plan.name} className="border rounded-lg bg-white">
                        <div
                            className="p-4 flex justify-between items-center cursor-pointer"
                            onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                        >
                            <div>
                                <h3 className="font-medium">{getBHKType(plan.type)}</h3>
                                <p className="text-gray-500">from {formatArea(plan.superArea)}</p>
                            </div>
                            <div className="text-right">
                                <p>from {formatPrice(plan.price)}</p>
                                <div className="flex items-center justify-end gap-2">
                                    <span className="text-gray-500">Choose from {index + 2} layouts</span>
                                    {expandedItem === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>
                        </div>

                        {expandedItem === index && (
                            <div className="p-4 border-t">
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        // src={plan.image}
                                        src="/assets/floordummy.png"
                                        alt={plan.name}
                                        className="w-full max-w-80 h-56 object-cover rounded-md border"
                                    />
                                    <div className='mt-2'>
                                        <h4 className="font-medium text-2xl mb-4">{plan.name} Floor Map</h4>
                                        <div className="space-y-1">
                                            <p className='grid grid-cols-2'>
                                                <span className="text-gray-600 text-lg">Super Area:</span>
                                                <span>{formatArea(plan.superArea)}</span>
                                            </p>
                                            <p className='grid grid-cols-2'>
                                                <span className="text-gray-600 text-lg">Carpet Area:</span>
                                                <span>{formatArea(plan.carpetArea)}</span>
                                            </p>
                                            <p className='grid grid-cols-2'>
                                                <span className="text-gray-600 text-lg">Price:</span>
                                                <span>{formatPrice(plan.price)}</span>
                                            </p>
                                            <p className='grid grid-cols-2'>
                                                <span className="text-gray-600 text-lg">Price per m²:</span>
                                                <span>{formatPrice(plan.price / plan.superArea)}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectFloorPlan;