// components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex items-center">
                    <img src="/api/placeholder/40/40" alt="PROFO Logo" className="h-9 mr-2" />
                    <span className="text-2xl font-bold">PROFO</span>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md font-medium transition hover:bg-gray-100">
                        <FontAwesomeIcon icon={faHeartOutline} />
                        Favorites
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md font-medium transition hover:bg-red-700">
                        <FontAwesomeIcon icon={faPlus} />
                        Post Property
                    </button>
                    <button className="px-4 py-2 border border-gray-600 rounded-md font-medium transition hover:bg-gray-100">
                        Register
                    </button>
                </div>
            </div>
        </header>
    );
};


// components/Navigation.js
import React from 'react';

const Navigation = () => {
    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 overflow-x-auto">
                <ul className="flex space-x-6 h-12 items-center">
                    <li><a href="#" className="text-red-600 font-medium">Apartments</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">Rent</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">Buy</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">Office</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">Flats</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">Warehouses</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">Lands</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">Kheti Jameen</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">Services</a></li>
                    <li><a href="#" className="font-medium hover:text-red-600 transition">New Projects</a></li>
                </ul>
            </div>
        </nav>
    );
};


// components/SearchSection.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faFilter,
    faChevronDown,
    faThLarge,
    faList,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import AdvancedFilter from './AdvancedFilter';
import FilterTags from './FilterTags';

const SearchSection = () => {
    const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);

    return (
        <section className="bg-white border-b border-gray-100 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative w-1/3 md:w-1/4">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="Search properties..."
                            className="w-full py-3 pl-10 pr-3 border border-gray-100 rounded-md bg-gray-50"
                        />
                    </div>

                    <div className="relative">
                        <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
                            <option>All Types</option>
                            <option>Apartment</option>
                            <option>House</option>
                            <option>Commercial</option>
                        </select>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                        />
                    </div>

                    <div className="relative">
                        <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
                            <option>Sort</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                        />
                    </div>

                    {/* Advanced Filter Button */}
                    <button
                        className="flex items-center gap-2 py-3 px-4 bg-gray-50 border border-gray-100 rounded-md font-medium transition hover:bg-gray-100"
                        onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
                    >
                        <FontAwesomeIcon icon={faFilter} className="text-gray-600" />
                        Advanced Filters
                    </button>

                    <div className="flex items-center gap-3 text-gray-600 ml-auto">
                        <button className="p-1 text-red-600">
                            <FontAwesomeIcon icon={faThLarge} />
                        </button>
                        <button className="p-1">
                            <FontAwesomeIcon icon={faList} />
                        </button>
                    </div>
                </div>

                {/* Advanced Filter Panel */}
                {advancedFilterOpen && <AdvancedFilter />}

                {/* Applied Filters Tags */}
                <FilterTags />
            </div>
        </section>
    );
};


// components/AdvancedFilter.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const AdvancedFilter = () => {
    const [filterOptionsOpen, setFilterOptionsOpen] = useState(true);

    return (
        <div className="mt-5 bg-white rounded-lg shadow-md overflow-hidden transition-all">
            <div
                className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer"
                onClick={() => setFilterOptionsOpen(!filterOptionsOpen)}
            >
                <h3 className="text-base font-semibold flex items-center gap-2">
                    <FontAwesomeIcon icon={faFilter} />
                    Advanced Filters
                </h3>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform ${filterOptionsOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {filterOptionsOpen && (
                <>
                    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* Property Type Filter */}
                        <div>
                            <h4 className="text-sm text-gray-600 mb-3">Property Type</h4>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" name="property_type" value="apartment" className="accent-red-600 w-4 h-4" />
                                    <span className="text-sm">Apartment</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" name="property_type" value="house" className="accent-red-600 w-4 h-4" />
                                    <span className="text-sm">House</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" name="property_type" value="villa" className="accent-red-600 w-4 h-4" />
                                    <span className="text-sm">Villa</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" name="property_type" value="commercial" className="accent-red-600 w-4 h-4" />
                                    <span className="text-sm">Commercial</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" name="property_type" value="land" className="accent-red-600 w-4 h-4" />
                                    <span className="text-sm">Land</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}


export { Header, Navigation , SearchSection};
