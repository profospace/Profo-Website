import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const trendingSearches = [
        'landing page',
        'e-commerce',
        'mobile app',
        'logo design',
        'dashboard',
        'icons'
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-2">
            <div className="relative">
                <div className="relative flex items-center bg-gray-100 rounded-full">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full py-3 px-6 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                    />
                    <div className="flex items-center mr-2">
                        {/* <select className="bg-transparent border-none outline-none text-gray-500 px-2 cursor-pointer">
                            <option value="shots">Shots</option>
                        </select> */}
                        <button className="p-2 rounded-full bg-[#CB0A01] text-white hover:bg-[#b92a22] transition-colors">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <span className="text-gray-500 text-sm">Trending searches</span>
                <div className="flex flex-wrap gap-1 mt-2">
                    {trendingSearches.map((term) => (
                        <button
                            key={term}
                            onClick={() => setSearchTerm(term)}
                            className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                            {term}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;