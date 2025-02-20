// import React, { useState } from 'react';

// const SearchSection = () => {
//     const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//     const [filterOptionsOpen, setFilterOptionsOpen] = useState(true);
//     const [activeFilterTab, setActiveFilterTab] = useState('property');

//     const tabStyle = "min-w-[120px] text-center";

//     return (
//         <section className="bg-white border-b border-gray-100 py-2">
//             <div className="mx-auto px-2">
//                 <div className="flex flex-wrap items-center gap-3">
//                     <div className="relative w-1/3 md:w-1/4">
//                         <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">🔍</i>
//                         <input
//                             type="text"
//                             placeholder="Search properties..."
//                             className="w-full py-3 pl-10 pr-3 border border-gray-100 rounded-md bg-gray-50"
//                         />
//                     </div>

//                     <div className="relative">
//                         <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
//                             <option>All Types</option>
//                             <option>Apartment</option>
//                             <option>House</option>
//                             <option>Commercial</option>
//                         </select>
//                         <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">▼</i>
//                     </div>

//                     <div className="relative">
//                         <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
//                             <option>Sort</option>
//                             <option>Price: Low to High</option>
//                             <option>Price: High to Low</option>
//                             <option>Newest First</option>
//                         </select>
//                         <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">▼</i>
//                     </div>

//                     {/* Advanced Filter Button */}
//                     <button
//                         className="flex items-center gap-2 py-3 px-4 bg-gray-50 border border-gray-100 rounded-md font-medium transition hover:bg-gray-100"
//                         onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                     >
//                         <i className="text-gray-600">⊞</i>
//                         Advanced Filters
//                     </button>
//                 </div>

//                 {/* Advanced Filter Panel with Tabs */}
//                 {advancedFilterOpen && (
//                     <div className="mt-2 bg-white rounded-lg shadow-md overflow-hidden transition-all">
//                         {/* Tabs Container with center alignment */}
//                         <div className="flex justify-start border-b border-gray-100">
//                             <div role="tablist" className="tabs tabs-lifted">
//                                 <a
//                                     role="tab"
//                                     className={`tab ${tabStyle} ${activeFilterTab === 'property' ? 'tab-active' : ''}`}
//                                     onClick={() => setActiveFilterTab('property')}
//                                 >
//                                     Property
//                                 </a>
//                                 <a
//                                     role="tab"
//                                     className={`tab ${tabStyle} ${activeFilterTab === 'project' ? 'tab-active' : ''}`}
//                                     onClick={() => setActiveFilterTab('project')}
//                                 >
//                                     Project
//                                 </a>
//                                 <a
//                                     role="tab"
//                                     className={`tab ${tabStyle} ${activeFilterTab === 'building' ? 'tab-active' : ''}`}
//                                     onClick={() => setActiveFilterTab('building')}
//                                 >
//                                     Building
//                                 </a>
//                             </div>
//                         </div>

//                         {/* Tab Content */}
//                         <div className="p-5">
//                             {activeFilterTab === 'property' && (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                                     {/* Property Type Filter */}
//                                     <div>
//                                         <h4 className="text-sm text-gray-600 mb-3">Property Type</h4>
//                                         <div className="space-y-2">
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" name="property_type" value="apartment" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Apartment</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" name="property_type" value="house" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">House</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" name="property_type" value="villa" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Villa</span>
//                                             </label>
//                                         </div>
//                                     </div>

//                                     {/* Bedrooms Filter */}
//                                     <div>
//                                         <h4 className="text-sm text-gray-600 mb-3">Bedrooms</h4>
//                                         <div className="space-y-2">
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" name="bedrooms" value="1" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">1 BHK</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" name="bedrooms" value="2" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">2 BHK</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" name="bedrooms" value="3" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">3 BHK</span>
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {activeFilterTab === 'project' && (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                                     {/* Project Status */}
//                                     <div>
//                                         <h4 className="text-sm text-gray-600 mb-3">Project Status</h4>
//                                         <div className="space-y-2">
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Under Construction</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Ready to Move</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Upcoming</span>
//                                             </label>
//                                         </div>
//                                     </div>

//                                     {/* Project Amenities */}
//                                     <div>
//                                         <h4 className="text-sm text-gray-600 mb-3">Amenities</h4>
//                                         <div className="space-y-2">
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Swimming Pool</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Gym</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Club House</span>
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {activeFilterTab === 'building' && (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                                     {/* Building Type */}
//                                     <div>
//                                         <h4 className="text-sm text-gray-600 mb-3">Building Type</h4>
//                                         <div className="space-y-2">
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Residential</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Commercial</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">Mixed Use</span>
//                                             </label>
//                                         </div>
//                                     </div>

//                                     {/* Building Age */}
//                                     <div>
//                                         <h4 className="text-sm text-gray-600 mb-3">Building Age</h4>
//                                         <div className="space-y-2">
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">0-5 years</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">5-10 years</span>
//                                             </label>
//                                             <label className="flex items-center gap-2 cursor-pointer">
//                                                 <input type="checkbox" className="accent-red-600 w-4 h-4" />
//                                                 <span className="text-sm">10+ years</span>
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Footer Buttons */}
//                         <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
//                             <button className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
//                                 Reset Filters
//                             </button>
//                             <button className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
//                                 Apply Filters
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Applied Filters Tags */}
//                 <div className="flex flex-wrap gap-2 mt-2">
//                     {["Apartment", "Buy", "3 BHK", "Arya Nagar", "₹50L - ₹3Cr"].map((tag, index) => (
//                         <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm">
//                             <span>{tag}</span>
//                             <i className="text-gray-600 cursor-pointer hover:text-red-600">✕</i>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SearchSection;


import React, { useState } from 'react';
import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
import ActiveFiltersDisplay from './ActiveFiltersDisplay';
import { LiaSearchengin } from "react-icons/lia";
import { GoChevronDown } from "react-icons/go";
import { FcFilledFilter } from "react-icons/fc";
import {
    Map,
    List,
} from 'lucide-react';


const SearchSection = ({ handleViewChange, view, setSearchQuery, setFilterType, setSortBy }) => {
    const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
    const [activeFilterTab, setActiveFilterTab] = useState('property');
    const [priceRange, setPriceRange] = useState([1000000, 50000000]); // 10 Lakh to 5 Crore
    const [areaRange, setAreaRange] = useState([500, 10000]); // 500 to 10,000 sq ft

    const tabStyle = "min-w-[160px] text-center";

    return (
        <section className="bg-white border-b border-gray-100 py-2">
            <div className="mx-auto px-2">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative w-1/3 md:w-1/4">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"><LiaSearchengin size={25}/></span>
                        <input
                            onChange={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            placeholder="Search properties..."
                            className="w-full py-2 pl-10 pr-3 border border-gray-100 rounded-md bg-gray-50"
                        />
                    </div>

                    <div className="relative">
                        <select onChange={(e) => setFilterType(e.target.value)} className="appearance-none py-2 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
                            <option value="all">All Types</option>
                            <option value="apartment">Apartments</option>
                            <option value="house">Houses</option>
                            <option value="office">Offices</option>
                            <option value="residential">Buildings</option>
                        </select>
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
                            <GoChevronDown size={18}/>

                        </span>
                       
                    </div>

                    <div className="relative">
                        <select className="appearance-none py-2 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer" onChange={(e) => setSortBy(e.target.value)}>
                            <option value="">Sort</option>
                            <option value="price-low">Low to High</option>
                            <option value="price-high">High to Low</option>
                            <option value="new-old">Latest to Old</option>
                            <option value="old-new">Old to Latest</option>
                        </select>
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
                            <GoChevronDown size={18} />

                        </span>
                    </div>

                    {/* Advanced Filter Button */}
                    <button
                        className="flex items-center gap-2 py-2 px-4 bg-gray-50 border border-gray-100 rounded-md font-medium transition hover:bg-gray-100"
                        onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
                    >
                        <FcFilledFilter />
                        Advanced Filters
                    </button>

                    <button
                        
                        onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
                        className="py-2 px-4 rounded-md flex items-center gap-2 hover:bg-blue-100 text-blue-600 bg-gray-100"
                    >
                        {view === 'list' ? <List size={20} /> : <Map size={20} />}
                        <span className=''>{view === 'list' ? 'List View' : 'Map View'}</span>
                    </button>
                </div>

            {/* Advanced Filter Panel with Tabs */}
            {advancedFilterOpen && (
                <div className="mt-2 min-h-screen bg-white rounded-lg shadow-md overflow-hidden transition-all">
                    <div className="flex justify-start border-b border-gray-100">
                        <div role="tablist" className="tabs font-semibold  tabs-lifted tabs-lg">
                            <a
                                role="tab"
                                className={`tab text-lg text-gray-900 ${tabStyle} ${activeFilterTab === 'property' ? 'tab-active' : ''}`}
                                onClick={() => setActiveFilterTab('property')}
                            >
                                Property
                            </a>
                            <a
                                role="tab"
                                className={`tab text-lg text-gray-900 ${tabStyle} ${activeFilterTab === 'project' ? 'tab-active' : ''}`}
                                onClick={() => setActiveFilterTab('project')}
                            >
                                Project
                            </a>
                            <a
                                role="tab"
                                className={`tab text-lg text-gray-900 ${tabStyle} ${activeFilterTab === 'building' ? 'tab-active' : ''}`}
                                onClick={() => setActiveFilterTab('building')}
                            >
                                Building
                            </a>
                        </div>
                    </div>

                    {/* Tab Content */}
                        {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
                        {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
                        {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
                </div>
            )}

                {/* Applied Filters Tags */}
                <ActiveFiltersDisplay />
                {/* <div className="flex flex-wrap gap-2 mt-2">
                    {["Apartment", "Buy", "3 BHK", "Arya Nagar", "₹50L - ₹3Cr"].map((tag, index) => (
                        <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm">
                            <span>{tag}</span>
                            <i className="text-gray-600 cursor-pointer hover:text-red-600">✕</i>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default SearchSection;