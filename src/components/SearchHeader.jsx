import React, { useState } from 'react';
import { Search, MapPin, Mic } from 'lucide-react';

const SearchHeader = () => {
    const [selectedTab, setSelectedTab] = useState('Buy');
    const [searchText, setSearchText] = useState('');

    const tabs = ['Buy', 'Rent', 'New Launch', 'PG / Co-living', 'Commercial', 'Plots/Land', 'Projects'];

    return (
        <div className="w-full bg-white shadow-md rounded-lg p-4">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-6 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`relative px-1 py-2 text-sm md:text-base font-medium transition-colors
              ${selectedTab === tab
                                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                                : 'text-gray-600 hover:text-gray-800'}`}
                    >
                        {tab}
                        {tab === 'New Launch' && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Search Section */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Dropdown */}
                <div className="relative w-full md:w-48">
                    <select
                        className="w-full p-2 border rounded-lg appearance-none bg-white pr-8 text-gray-700"
                    >
                        <option>All Residential</option>
                        <option>House/Villa</option>
                        <option>Apartment</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Search Input */}
                <div className="flex-1 relative">
                    <div className="flex items-center w-full border rounded-lg p-2 gap-2">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder='Search "Hyderabad"'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="flex-1 outline-none text-gray-700"
                        />
                        <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-full hover:bg-gray-100">
                                <MapPin className="w-5 h-5 text-gray-400" />
                            </button>
                            <button className="p-1.5 rounded-full hover:bg-gray-100">
                                <Mic className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Search
                </button>
            </div>

            {/* Recent Searches */}
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <span>Recent searches:</span>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Buy in Maharajpur, Kanpur
                    </button>
                    <button className="text-blue-600 hover:underline">
                        View all searches
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchHeader;