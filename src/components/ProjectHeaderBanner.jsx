import React from 'react';
import { MapPin, Clock, TrendingUp, Heart, CircleDollarSign } from 'lucide-react';

const ProjectHeaderBanner = ({ details }) => {
    return (
        <div className="relative bg-olive-700 text-white p-6">
            <div className="max-w-4xl mx-auto">
                {/* Main Info */}
                <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h1 className="text-2xl font-semibold">
                            {details?.bhk || '2, 3, 4'} BHK Apartment
                        </h1>
                        <span className="text-2xl">|</span>
                        <span className="text-2xl">₹ {details?.priceRange || '55 L - 1.5 Cr'}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-gray-800">
                        <div className="flex items-center gap-1">
                            <MapPin size={18} />
                            <span>{details?.location?.address || 'Chattarpur, Delhi'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={18} />
                            <span>Since Oct, 2024</span>
                        </div>
                    </div>
                </div>

                {/* New Launch Badge */}
                <div className="inline-flex items-center gap-2 bg-black rounded-full px-4 py-2 mb-6">
                    <div className="bg-yellow-500 rounded-full p-1">
                        <div className="w-4 h-4" />
                    </div>
                    <span className="font-semibold">NEW LAUNCH</span>
                    <span>Project</span>
                    <button className="ml-4 text-sm underline">Learn more</button>
                </div>

                {/* Features */}
                <div className="bg-black rounded-xl p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                            <TrendingUp size={20} className="text-yellow-500" />
                            <span>High price appreciation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart size={20} className="text-yellow-500" />
                            <span>Units of choice</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CircleDollarSign size={20} className="text-yellow-500" />
                            <span>Easy Payment plans</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeaderBanner;