import React from 'react';
import { Heart, MoreHorizontal, BadgeCheck } from 'lucide-react';

// Dummy data structure
const propertyData = {
    title: "Multi-quarter CITYZEN",
    priceRange: {
        min: "10.99",
        max: "40.53"
    },
    areaRange: {
        min: 20.8,
        max: 109.5
    },
    tags: ["business", "delivery Q3 2027"],
    developer: {
        name: "Developer MR Group",
        verified: true,
        stats: {
            constructionRank: "Top 4",
            constructionVolume: "developers by construction volumes",
            businessRank: "Top 3",
            businessRating: "in the rating of business class developers",
            submittedHouses: 184,
            submittedComplexes: 32,
            constructionHouses: 68,
            constructionComplexes: 18
        }
    }
};

const BuildingContactCard = () => {
    return (
        <div className="max-w-xl w-full bg-white rounded-lg  ">
            <div className="p-4">
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold">{propertyData.title}</h2>
                    <div className="flex gap-2">
                        <Heart className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
                        <MoreHorizontal className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
                    </div>
                </div>

                {/* Price and Area */}
                <div className="mb-2">
                    <div className="text-2xl font-bold mb-1">
                        {propertyData.priceRange.min} — {propertyData.priceRange.max} million ₽
                    </div>
                    <div className="text-gray-600">
                        from {propertyData.areaRange.min} to {propertyData.areaRange.max} m²
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-2">
                    {propertyData.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-1 bg-gray-100 rounded-full text-gray-600 text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Developer Info Card */}
                <div className="bg-gray-50 rounded-lg px-6 py-4">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">
                                {propertyData.developer.name}
                            </span>
                            {propertyData.developer.verified && (
                                <BadgeCheck className="w-5 h-5 text-blue-600" />
                            )}
                        </div>
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold">
                            MR
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                            <div className="font-semibold mb-1">{propertyData.developer.stats.constructionRank}</div>
                            <div className="text-gray-600 text-sm">{propertyData.developer.stats.constructionVolume}</div>
                        </div>
                        <div>
                            <div className="font-semibold mb-1">{propertyData.developer.stats.businessRank}</div>
                            <div className="text-gray-600 text-sm">{propertyData.developer.stats.businessRating}</div>
                        </div>
                    </div>

                    {/* Houses Info */}
                    <div className="grid grid-cols-2 gap-6 mb-2">
                        <div>
                            <div className="font-semibold mb-1">
                                {propertyData.developer.stats.submittedHouses} houses in {propertyData.developer.stats.submittedComplexes} residential complexes
                            </div>
                            <div className="text-gray-600 text-sm">Submitted</div>
                        </div>
                        <div>
                            <div className="font-semibold mb-1">
                                {propertyData.developer.stats.constructionHouses} houses in {propertyData.developer.stats.constructionComplexes} residential complexes
                            </div>
                            <div className="text-gray-600 text-sm">Under construction</div>
                        </div>
                    </div>

                    {/* Custom Buttons */}
                    <button className="w-full bg-gray-900 text-white rounded-lg py-4 mb-2 hover:bg-gray-800 transition-colors">
                        Show phone
                    </button>
                    <button className="w-full bg-white border border-gray-200 rounded-lg py-4 hover:bg-gray-50 transition-colors">
                        Call me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuildingContactCard;