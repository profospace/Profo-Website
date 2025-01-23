import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Filter } from 'lucide-react';

const CollapsibleFilter = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');

    return (
        <div className="relative flex items-center">
            {/* Collapsible Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
            >
                <Filter size={16} />
                <span>Filters</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* Collapsible Content */}
            <div
                className={`absolute top-0 left-full ml-4 bg-white border border-gray-300 rounded-xl shadow-lg transition-all duration-300 ease-in-out ${isExpanded ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
                    } overflow-hidden`}
            >
                <div className="p-4 space-y-4">
                    {/* Search */}
                    <div className="relative w-full">
                        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name or address..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-700"
                        />
                    </div>

                    {/* Beds Filter */}
                    <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-xl">
                        <button className="px-2">Beds</button>
                        {[1, 2, 3, '4+'].map((beds) => (
                            <button
                                key={beds}
                                className="px-2 bg-white border border-none hover:text-red-400"
                            >
                                {beds}
                            </button>
                        ))}
                    </div>

                    {/* Additional Filters */}
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                        Price Range
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                        Bathroom
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                        Floor
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                        Purpose
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                        Amenities
                    </button>

                    {/* Property Type Dropdown */}
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-4 py-2 text-black bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
                    >
                        <option value="all">All Types</option>
                        <option value="apartment">Apartments</option>
                        <option value="house">Houses</option>
                        <option value="office">Offices</option>
                        <option value="residential">Buildings</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CollapsibleFilter;
