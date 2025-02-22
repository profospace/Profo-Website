import React, { useState } from 'react';
import { Map, Building2, GraduationCap, ShoppingBag, Train, Film, Building } from 'lucide-react';
import HeadingCommon from './HeadingCommon';

const ProjectNearbyLocations = ({ nearbyLocations }) => {
    const [selectedType, setSelectedType] = useState('ALL');

    const locationTypes = ['ALL', ...new Set(nearbyLocations?.map(loc => loc.type))];

    const getIcon = (type) => {
        switch (type) {
            case 'EDUCATION': return <GraduationCap className="w-5 h-5" />;
            case 'HEALTHCARE': return <Building2 className="w-5 h-5" />;
            case 'SHOPPING': return <ShoppingBag className="w-5 h-5" />;
            case 'TRANSPORT': return <Train className="w-5 h-5" />;
            case 'ENTERTAINMENT': return <Film className="w-5 h-5" />;
            case 'BUSINESS': return <Building className="w-5 h-5" />;
            default: return <Map className="w-5 h-5" />;
        }
    };

    const filteredLocations = selectedType === 'ALL'
        ? nearbyLocations
        : nearbyLocations?.filter(loc => loc.type === selectedType);

    return (
        <div className="w-full max-w-7xl  bg-white">
            <div className="mb-4">
                {/* <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Nearby Locations
                </h2> */}
                <HeadingCommon dual="true" title='Nearby Locations' />

                <p className="text-gray-600 max-w-2xl">
                    Discover what's around your future home
                </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {locationTypes.map(type => (
                    <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedType === type
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {type.charAt(0) + type.slice(1).toLowerCase()}
                    </button>
                ))}
            </div>

            {/* Locations grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLocations?.map((location) => (
                    <div
                        key={location._id}
                        className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                {getIcon(location.type)}
                            </div>

                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    {location.name}
                                </h3>

                                <div className="flex flex-col gap-1 text-sm text-gray-600">
                                    <div className="flex items-center justify-between">
                                        <span>Distance</span>
                                        <span className="font-medium">{location.distance} km</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Duration</span>
                                        <span className="font-medium">{location.duration} mins</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state */}
            {filteredLocations?.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No locations found for the selected category.
                </div>
            )}
        </div>
    );
};

export default ProjectNearbyLocations;