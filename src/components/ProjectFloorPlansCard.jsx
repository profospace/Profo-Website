import React from 'react';
import { Heart } from 'lucide-react';

const ProjectFloorPlansCard = ({ floorPlans }) => {
    // Format price to Russian Ruble format
    const formatPrice = (price) => {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
        }).format(price).replace('₽', '₹');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-12">
            {floorPlans.map((property, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                    <div className="relative">
                        {/* Last tag */}
                        <div className="absolute top-2 left-2 z-10">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {property?.isActive === true &&  "Active" }
                            </span>
                        </div>

                        {/* Heart icon */}
                        <div className="absolute top-2 right-2 z-10">
                            <Heart className="text-gray-600 w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
                        </div>

                        {/* Property Image */}
                        <div className="h-48 bg-gray-200">
                            <img
                                src={property.image}
                                alt={property.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Property Details */}
                        <div className="px-4 py-2">
                            {/* Layout section */}
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                <div>
                                    <div className="text-md font-semibold">{property.type}</div>
                                    <div className="text-sm text-gray-500">Type</div>
                                </div>
                                <div>
                                    <div className="text-md font-semibold">{property.superArea} м²</div>
                                    <div className="text-sm text-gray-500">SuperArea</div>
                                </div>
                                <div>
                                    <div className="text-md font-semibold">{property.carpetArea} м²</div>
                                    <div className="text-sm text-gray-500">CarpetArea</div>
                                </div>
                                {/* <div>
                                    <div className="text-md font-semibold">{property.superArea} м²</div>
                                    <div className="text-sm text-gray-500">Общая площадь</div>
                                </div> */}
                            </div>

                            {/* Price and details */}
                            <div className="mt-4">
                                <div className="text-md font-bold text-gray-900">
                                    from {formatPrice(property.price)}
                                </div>
                                <div className="text-gray-600 mt-1">
                                    {property.type}, {property.superArea} м²
                                </div>
                                <div className="text-gray-500 mt-1">
                                    {property.name}
                                </div>
                            </div>

                            {/* Show apartment button */}
                            <button className="w-full mt-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                                Show apartment
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectFloorPlansCard;