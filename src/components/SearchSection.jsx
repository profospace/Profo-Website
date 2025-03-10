// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     applyFilter,
//     setSearchResults,
//     getAllProperties,
//     getAllProjects,
//     getAllBuildings
// } from '../redux/features/Map/mapSlice';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
// import { FcFilledFilter } from "react-icons/fc";
// import axios from 'axios';
// import {
//     Map,
//     List,
//     ChevronDown,
//     Search,
//     X,
//     Loader2
// } from 'lucide-react';
// import ResetFilterButton from './ResetFilterButton';
// import { base_url } from '../utils/base_url';

// const SearchSection = ({
//     handleViewChange,
//     view,
//     searchQuery,
//     setSearchQuery,
//     resetAllFilters,
//     activeFiltersCount = 0,
//     variant = 'default',
//     className = '',
//     showFilterDisplay = true
// }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//     const [activeFilterTab, setActiveFilterTab] = useState('property');
//     const [isFocused, setIsFocused] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Search-related states
//     const [searchInput, setSearchInput] = useState('');
//     const inputRef = useRef(null);

//     // State for local filters
//     const [bhkFilter, setBhkFilter] = useState(appliedFilters?.bedrooms || "");
//     const [propertyType, setPropertyType] = useState(appliedFilters?.propertyType || "all");
//     const [purpose, setPurpose] = useState(appliedFilters?.purpose || "");

//     // Function to determine active state for BHK buttons
//     const getBhkButtonClass = (value) => {
//         if (bhkFilter === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Handler for BHK filter
//     const handleBhkFilter = (value) => {
//         const newValue = bhkFilter === value ? "" : value;
//         setBhkFilter(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             bedrooms: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));
//     };

//     // Handler for Property Type change
//     const handlePropertyTypeChange = (value) => {
//         setPropertyType(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             propertyType: value === "all" ? undefined : [value],
//             filterType: 'property'
//         }));
//     };

//     // Handler for Purpose change
//     const handlePurposeChange = (value) => {
//         setPurpose(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             purpose: value === "" ? undefined : value,
//             filterType: 'property'
//         }));
//     };

//     // Reset local filters
//     const handleResetFilters = () => {
//         setBhkFilter("");
//         setPropertyType("all");
//         setPurpose("");
//         setSearchInput("");
//         resetAllFilters();
//     };

//     // Debounce function for search
//     const debounce = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(this, args);
//             }, delay);
//         };
//     };

//     // Handle search input change with debounce
//     const handleSearchInputChange = (e) => {
//         const value = e.target.value;
//         setSearchInput(value);
//         debouncedSearch(value);
//     };

//     // Function to handle search
//     const handleSearch = async (value) => {
//         if (!value || value.trim() === '') {
//             // When search is empty, fetch all data
//             dispatch(getAllProperties());
//             dispatch(getAllProjects());
//             dispatch(getAllBuildings());
//             return;
//         }

//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${base_url}/api/web-search/unified-search`, {
//                 params: {
//                     searchTerm: value.trim(),
//                     // entityType: activeFilterTab !== 'property' ? activeFilterTab : undefined,
//                     // limit: 10
//                 }
//             });

//             if (response.data.success) {
//                 // Log results to console as requested
//                 console.log('Search Results:', response.data.results);
//                 dispatch(setSearchResults(response.data.results));
//             } else {
//                 console.error('Search failed:', response.data.message);
//             }
//         } catch (error) {
//             console.error('Error performing search:', error.response?.data?.message || error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Create debounced search function with useCallback to maintain reference
//     const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

//     // Clear search input
//     const clearSearchInput = () => {
//         setSearchInput('');
//         // Immediately fetch all data when search is cleared
//         dispatch(getAllProperties());
//         dispatch(getAllProjects());
//         dispatch(getAllBuildings());
//         inputRef.current?.focus();
//     };

//     // Auto-focus the search input when view changes to 'list'
//     useEffect(() => {
//         if (view === 'list' && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [view]);

//     // Initial data load
//     // useEffect(() => {
//     //     if (!searchInput || searchInput.trim() === '') {
//     //         dispatch(getAllProperties());
//     //         dispatch(getAllProjects());
//     //         dispatch(getAllBuildings());
//     //     }
//     // }, [dispatch]);

//     return (
//         <section className={`bg-transparent px-6 py-1 mb-2 ${className}`}>
//             <div className="flex items-center justify-between w-full gap-4">
//                 <div className="flex items-center gap-3 flex-wrap">
//                     {/* Search input replacing Easy search button */}
//                     {view === 'list' && (
//                         <div className="flex items-center">
//                             <div className={`flex items-center bg-white border ${isFocused
//                                 ? "border-gray-400 ring-2 ring-gray-100"
//                                 : "border-gray-200"
//                                 } rounded-lg w-64 md:w-64 transition-all duration-200`}>
//                                 <Search className="h-5 w-5 text-gray-400 ml-3" />
//                                 <input
//                                     ref={inputRef}
//                                     type="text"
//                                     placeholder="Search properties, projects..."
//                                     className="flex-1 py-2.5 px-2 bg-transparent focus:outline-none text-sm"
//                                     value={searchInput}
//                                     onChange={handleSearchInputChange}
//                                     onFocus={() => setIsFocused(true)}
//                                     onBlur={() => setIsFocused(false)}
//                                 />
//                                 {isLoading ? (
//                                     <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
//                                 ) : searchInput ? (
//                                     <button
//                                         type="button"
//                                         onClick={clearSearchInput}
//                                         className="h-5 w-5 text-gray-400 mr-3 hover:text-gray-600"
//                                     >
//                                         <X className="h-5 w-5" />
//                                     </button>
//                                 ) : null}
//                             </div>
//                         </div>
//                     )}

//                     {/* Property Type Selector (BHK) */}
//                     <div className="flex items-center gap-1 border border-gray-200 px-4 py-2 rounded-lg bg-white">
//                         <span className="text-sm font-medium mr-2">BHK</span>
//                         <button
//                             className={getBhkButtonClass("1")}
//                             onClick={() => handleBhkFilter("1")}
//                         >
//                             1
//                         </button>
//                         <button
//                             className={getBhkButtonClass("2")}
//                             onClick={() => handleBhkFilter("2")}
//                         >
//                             2
//                         </button>
//                         <button
//                             className={getBhkButtonClass("3")}
//                             onClick={() => handleBhkFilter("3")}
//                         >
//                             3
//                         </button>
//                         <button
//                             className={getBhkButtonClass("4")}
//                             onClick={() => handleBhkFilter("4")}
//                         >
//                             4
//                         </button>
//                     </div>

//                     {/* Property Type Dropdown */}
//                     <div className="relative">
//                         <select
//                             className="appearance-none min-w-28 text-sm py-2.5 pl-4 pr-10 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
//                             onChange={(e) => handlePropertyTypeChange(e.target.value)}
//                             value={propertyType}
//                         >
//                             <option value="all">All Types</option>
//                             <option value="apartment">Apartments</option>
//                             <option value="house">Houses</option>
//                             <option value="office">Offices</option>
//                             <option value="residential">Buildings</option>
//                         </select>
//                         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                             <ChevronDown size={16} />
//                         </span>
//                     </div>

//                     {/* Purpose */}
//                     <div className="relative">
//                         <select
//                             className="appearance-none min-w-32 text-sm py-2.5 pl-4 pr-10 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
//                             onChange={(e) => handlePurposeChange(e.target.value)}
//                             value={purpose}
//                         >
//                             <option value="" hidden>Purpose</option>
//                             <option value="buy">Buy</option>
//                             <option value="rent">Rent</option>
//                         </select>
//                         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                             <ChevronDown size={16} />
//                         </span>
//                     </div>

//                     {/* Filters button with count */}
//                     <button
//                         className="flex items-center gap-2 bg-white border hover:bg-gray-200 rounded-lg py-2.5 px-4 transition-colors duration-200"
//                         onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                     >
//                         <FcFilledFilter size={18} />
//                         <span className="font-medium">More Filters</span>
//                         {Object.keys(appliedFilters).length > 0 && (
//                             <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
//                                 {Object.keys(appliedFilters).length}
//                             </span>
//                         )}
//                     </button>
//                 </div>

//                 <div className='flex items-center gap-2'>
//                     <ResetFilterButton onClick={handleResetFilters} />
//                     {/* View toggle button */}
//                     <button
//                         onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
//                         className="py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-white bg-gray-900 transition-colors duration-200"
//                     >
//                         {view === 'list' ? <Map size={18} /> : <List size={18} />}
//                         <span className="font-medium text-sm">{view === 'list' ? 'Map View' : 'List View'}</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Advanced Filter Panel with Tabs */}
//             {advancedFilterOpen && (
//                 <>
//                     {/* Apply overflow-hidden to body when filter is open */}
//                     <style jsx global>{`
//                         body {
//                             overflow: hidden;
//                         }
//                     `}</style>

//                     <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
//                         <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col h-auto max-h-[95vh]">
//                             <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 flex-shrink-0">
//                                 <div role="tablist" className="flex gap-2 font-medium">
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'property'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('property')}
//                                     >
//                                         Property
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'project'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('project')}
//                                     >
//                                         Project
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'building'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('building')}
//                                     >
//                                         Building
//                                     </button>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={resetAllFilters}
//                                     >
//                                         Reset Filters
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium transition hover:bg-red-700"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Apply Filters
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Tab Content with auto height and scrollable */}
//                             <div className="p-6 overflow-y-auto ">
//                                 {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </section>
//     );
// };

// export default SearchSection;





// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     applyFilter,
//     setSearchResults,
//     getAllProperties,
//     getAllProjects,
//     getAllBuildings
// } from '../redux/features/Map/mapSlice';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
// import { FcFilledFilter } from "react-icons/fc";
// import axios from 'axios';
// import {
//     Map,
//     List,
//     ChevronDown,
//     Search,
//     X,
//     Loader2
// } from 'lucide-react';
// import ResetFilterButton from './ResetFilterButton';
// import { base_url } from '../utils/base_url';

// const SearchSection = ({
//     handleViewChange,
//     view,
//     searchQuery,
//     setSearchQuery,
//     resetAllFilters,
//     activeFiltersCount = 0,
//     variant = 'default',
//     className = '',
//     showFilterDisplay = true
// }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//     const [activeFilterTab, setActiveFilterTab] = useState('property');
//     const [isFocused, setIsFocused] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Search-related states
//     const [searchInput, setSearchInput] = useState('');
//     const inputRef = useRef(null);

//     // State for local filters
//     const [bedrooms, setBedrooms] = useState(appliedFilters?.bedrooms || "");
//     const [propertyType, setPropertyType] = useState(appliedFilters?.propertyType || "all");
//     const [purpose, setPurpose] = useState(appliedFilters?.purpose || "");

//     // Function to determine active state for BHK buttons
//     const getBhkButtonClass = (value) => {
//         if (bedrooms === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Handler for BHK filter
//     const handleBhkFilter = (value) => {
//         const newValue = bedrooms === value ? "" : value;
//         setBedrooms(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             bedrooms: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));
//     };

//     // Handler for Property Type change
//     const handlePropertyTypeChange = (value) => {
//         setPropertyType(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             propertyType: value === "all" ? undefined : [value],
//             filterType: 'property'
//         }));
//     };

//     // Handler for Purpose change
//     const handlePurposeChange = (value) => {
//         setPurpose(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             purpose: value === "" ? undefined : value,
//             filterType: 'property'
//         }));
//     };

//     // Reset local filters
//     const handleResetFilters = () => {
//         setBedrooms("");
//         setPropertyType("all");
//         setPurpose("");
//         setSearchInput("");
//         resetAllFilters();
//     };

//     // Debounce function for search
//     const debounce = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(this, args);
//             }, delay);
//         };
//     };

//     // Handle search input change with debounce
//     const handleSearchInputChange = (e) => {
//         const value = e.target.value;
//         setSearchInput(value);
//         debouncedSearch(value);
//     };

//     // Function to handle search
//     const handleSearch = async (value) => {
//         if (!value || value.trim() === '') {
//             // When search is empty, fetch all data
//             dispatch(getAllProperties());
//             dispatch(getAllProjects());
//             dispatch(getAllBuildings());
//             return;
//         }

//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${base_url}/api/web-search/unified-search`, {
//                 params: {
//                     searchTerm: value.trim(),
//                     // entityType: activeFilterTab !== 'property' ? activeFilterTab : undefined,
//                     // limit: 10
//                 }
//             });

//             if (response.data.success) {
//                 // Log results to console as requested
//                 console.log('Search Results:', response.data.results);
//                 dispatch(setSearchResults(response.data.results));
//             } else {
//                 console.error('Search failed:', response.data.message);
//             }
//         } catch (error) {
//             console.error('Error performing search:', error.response?.data?.message || error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Create debounced search function with useCallback to maintain reference
//     const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

//     // Clear search input
//     const clearSearchInput = () => {
//         setSearchInput('');
//         // Immediately fetch all data when search is cleared
//         dispatch(getAllProperties());
//         dispatch(getAllProjects());
//         dispatch(getAllBuildings());
//         inputRef.current?.focus();
//     };

//     // Auto-focus the search input when view changes to 'list'
//     useEffect(() => {
//         if (view === 'list' && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [view]);

//     // Initial data load
//     // useEffect(() => {
//     //     if (!searchInput || searchInput.trim() === '') {
//     //         dispatch(getAllProperties());
//     //         dispatch(getAllProjects());
//     //         dispatch(getAllBuildings());
//     //     }
//     // }, [dispatch]);

//     return (
//         <section className={`bg-transparent px-6 py-1 mb-2 ${className}`}>
//             <div className="flex items-center justify-between w-full gap-4">
//                 <div className="flex items-center gap-3 flex-wrap">
//                     {/* Search input replacing Easy search button */}
//                     {view === 'list' && (
//                         <div className="flex items-center">
//                             <div className={`flex items-center bg-white border ${isFocused
//                                 ? "border-gray-400 ring-2 ring-gray-100"
//                                 : "border-gray-200"
//                                 } rounded-lg w-64 md:w-64 transition-all duration-200`}>
//                                 <Search className="h-5 w-5 text-gray-400 ml-3" />
//                                 <input
//                                     ref={inputRef}
//                                     type="text"
//                                     placeholder="Search properties, projects..."
//                                     className="flex-1 py-2.5 px-2 bg-transparent focus:outline-none text-sm"
//                                     value={searchInput}
//                                     onChange={handleSearchInputChange}
//                                     onFocus={() => setIsFocused(true)}
//                                     onBlur={() => setIsFocused(false)}
//                                 />
//                                 {isLoading ? (
//                                     <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
//                                 ) : searchInput ? (
//                                     <button
//                                         type="button"
//                                         onClick={clearSearchInput}
//                                         className="h-5 w-5 text-gray-400 mr-3 hover:text-gray-600"
//                                     >
//                                         <X className="h-5 w-5" />
//                                     </button>
//                                 ) : null}
//                             </div>
//                         </div>
//                     )}

//                     {/* Property Type Selector (BHK) */}
//                     <div className="flex items-center gap-1 border border-gray-200 px-4 py-2 rounded-lg bg-white">
//                         <span className="text-sm font-medium mr-2">BHK</span>
//                         <button
//                             className={getBhkButtonClass("1")}
//                             onClick={() => handleBhkFilter("1")}
//                         >
//                             1
//                         </button>
//                         <button
//                             className={getBhkButtonClass("2")}
//                             onClick={() => handleBhkFilter("2")}
//                         >
//                             2
//                         </button>
//                         <button
//                             className={getBhkButtonClass("3")}
//                             onClick={() => handleBhkFilter("3")}
//                         >
//                             3
//                         </button>
//                         <button
//                             className={getBhkButtonClass("4")}
//                             onClick={() => handleBhkFilter("4")}
//                         >
//                             4
//                         </button>
//                     </div>

//                     {/* Property Type Dropdown */}
//                     <div className="relative">
//                         <select
//                             className="appearance-none min-w-28 text-sm py-2.5 pl-4 pr-10 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
//                             onChange={(e) => handlePropertyTypeChange(e.target.value)}
//                             value={propertyType}
//                         >
//                             <option value="all">All Types</option>
//                             <option value="apartment">Apartments</option>
//                             <option value="house">Houses</option>
//                             <option value="office">Offices</option>
//                             <option value="residential">Buildings</option>
//                         </select>
//                         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                             <ChevronDown size={16} />
//                         </span>
//                     </div>

//                     {/* Purpose */}
//                     <div className="relative">
//                         <select
//                             className="appearance-none min-w-32 text-sm py-2.5 pl-4 pr-10 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
//                             onChange={(e) => handlePurposeChange(e.target.value)}
//                             value={purpose}
//                         >
//                             <option value="" hidden>Purpose</option>
//                             <option value="buy">Buy</option>
//                             <option value="rent">Rent</option>
//                         </select>
//                         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                             <ChevronDown size={16} />
//                         </span>
//                     </div>

//                     {/* Filters button with count */}
//                     <button
//                         className="flex items-center gap-2 bg-white border hover:bg-gray-200 rounded-lg py-2.5 px-4 transition-colors duration-200"
//                         onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                     >
//                         <FcFilledFilter size={18} />
//                         <span className="font-medium">More Filters</span>
//                         {Object.keys(appliedFilters).length > 0 && (
//                             <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
//                                 {Object.keys(appliedFilters).length}
//                             </span>
//                         )}
//                     </button>
//                 </div>

//                 <div className='flex items-center gap-2'>
//                     <ResetFilterButton onClick={handleResetFilters} />
//                     {/* View toggle button */}
//                     <button
//                         onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
//                         className="py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-white bg-gray-900 transition-colors duration-200"
//                     >
//                         {view === 'list' ? <Map size={18} /> : <List size={18} />}
//                         <span className="font-medium text-sm">{view === 'list' ? 'Map View' : 'List View'}</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Advanced Filter Panel with Tabs */}
//             {advancedFilterOpen && (
//                 <>
//                     {/* Apply overflow-hidden to body when filter is open */}
//                     <style jsx global>{`
//                         body {
//                             overflow: hidden;
//                         }
//                     `}</style>

//                     <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
//                         <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col h-auto max-h-[95vh]">
//                             <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 flex-shrink-0">
//                                 <div role="tablist" className="flex gap-2 font-medium">
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'property'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('property')}
//                                     >
//                                         Property
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'project'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('project')}
//                                     >
//                                         Project
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'building'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('building')}
//                                     >
//                                         Building
//                                     </button>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={resetAllFilters}
//                                     >
//                                         Reset Filters
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium transition hover:bg-red-700"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Apply Filters
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Tab Content with auto height and scrollable */}
//                             <div className="p-6 overflow-y-auto ">
//                                 {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </section>
//     );
// };

// export default SearchSection;


// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     applyFilter,
//     setSearchResults,
//     getAllProperties,
//     getAllProjects,
//     getAllBuildings
// } from '../redux/features/Map/mapSlice';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
// import { FcFilledFilter } from "react-icons/fc";
// import axios from 'axios';
// import {
//     Map,
//     List,
//     ChevronDown,
//     Search,
//     X,
//     Loader2
// } from 'lucide-react';
// import ResetFilterButton from './ResetFilterButton';
// import { base_url } from '../utils/base_url';

// const SearchSection = ({
//     handleViewChange,
//     view,
//     searchQuery,
//     setSearchQuery,
//     resetAllFilters,
//     activeFiltersCount = 0,
//     variant = 'default',
//     className = '',
//     showFilterDisplay = true
// }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//     const [activeFilterTab, setActiveFilterTab] = useState('property');
//     const [isFocused, setIsFocused] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Search-related states
//     const [searchInput, setSearchInput] = useState('');
//     const inputRef = useRef(null);

//     // State for local filters
//     const [bedrooms, setBedrooms] = useState(appliedFilters?.bedrooms || "");
//     const [propertyType, setPropertyType] = useState(appliedFilters?.propertyType || "all");
//     const [purpose, setPurpose] = useState(appliedFilters?.purpose || "");

//     // New state for BHK popup
//     const [bhkPopupOpen, setBhkPopupOpen] = useState(false);
//     const bhkButtonRef = useRef(null);

//     // Function to determine active state for BHK buttons
//     const getBhkButtonClass = (value) => {
//         if (bedrooms === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Handler for BHK filter
//     const handleBhkFilter = (value) => {
//         const newValue = bedrooms === value ? "" : value;
//         setBedrooms(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             bedrooms: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBhkPopupOpen(false);
//     };

//     // Handle clicking outside the BHK popup
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (bhkButtonRef.current && !bhkButtonRef.current.contains(event.target)) {
//                 setBhkPopupOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     // Handler for Property Type change
//     const handlePropertyTypeChange = (value) => {
//         setPropertyType(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             propertyType: value === "all" ? undefined : [value],
//             filterType: 'property'
//         }));
//     };

//     // Handler for Purpose change
//     const handlePurposeChange = (value) => {
//         setPurpose(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             purpose: value === "" ? undefined : value,
//             filterType: 'property'
//         }));
//     };

//     // Reset local filters
//     const handleResetFilters = () => {
//         setBedrooms("");
//         setPropertyType("all");
//         setPurpose("");
//         setSearchInput("");
//         resetAllFilters();
//     };

//     // Debounce function for search
//     const debounce = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(this, args);
//             }, delay);
//         };
//     };

//     // Handle search input change with debounce
//     const handleSearchInputChange = (e) => {
//         const value = e.target.value;
//         setSearchInput(value);
//         debouncedSearch(value);
//     };

//     // Function to handle search
//     const handleSearch = async (value) => {
//         if (!value || value.trim() === '') {
//             // When search is empty, fetch all data
//             dispatch(getAllProperties());
//             dispatch(getAllProjects());
//             dispatch(getAllBuildings());
//             return;
//         }

//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${base_url}/api/web-search/unified-search`, {
//                 params: {
//                     searchTerm: value.trim(),
//                     // entityType: activeFilterTab !== 'property' ? activeFilterTab : undefined,
//                     // limit: 10
//                 }
//             });

//             if (response.data.success) {
//                 // Log results to console as requested
//                 console.log('Search Results:', response.data.results);
//                 dispatch(setSearchResults(response.data.results));
//             } else {
//                 console.error('Search failed:', response.data.message);
//             }
//         } catch (error) {
//             console.error('Error performing search:', error.response?.data?.message || error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Create debounced search function with useCallback to maintain reference
//     const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

//     // Clear search input
//     const clearSearchInput = () => {
//         setSearchInput('');
//         // Immediately fetch all data when search is cleared
//         dispatch(getAllProperties());
//         dispatch(getAllProjects());
//         dispatch(getAllBuildings());
//         inputRef.current?.focus();
//     };

//     // Auto-focus the search input when view changes to 'list'
//     useEffect(() => {
//         if (view === 'list' && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [view]);

//     return (
//         <section className={`bg-transparent px-6 py-1 mb-2 ${className}`}>
//             <div className="flex items-center justify-between w-full gap-4">
//                 <div className="flex items-center gap-3 flex-wrap">
//                     {/* Search input replacing Easy search button */}
//                     {view === 'list' && (
//                         <div className="flex items-center">
//                             <div className={`flex items-center bg-white border ${isFocused
//                                 ? "border-gray-400 ring-2 ring-gray-100"
//                                 : "border-gray-200"
//                                 } rounded-lg w-64 md:w-64 transition-all duration-200`}>
//                                 <Search className="h-5 w-5 text-gray-400 ml-3" />
//                                 <input
//                                     ref={inputRef}
//                                     type="text"
//                                     placeholder="Search properties, projects..."
//                                     className="flex-1 py-2.5 px-2 bg-transparent focus:outline-none text-sm"
//                                     value={searchInput}
//                                     onChange={handleSearchInputChange}
//                                     onFocus={() => setIsFocused(true)}
//                                     onBlur={() => setIsFocused(false)}
//                                 />
//                                 {isLoading ? (
//                                     <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
//                                 ) : searchInput ? (
//                                     <button
//                                         type="button"
//                                         onClick={clearSearchInput}
//                                         className="h-5 w-5 text-gray-400 mr-3 hover:text-gray-600"
//                                     >
//                                         <X className="h-5 w-5" />
//                                     </button>
//                                 ) : null}
//                             </div>
//                         </div>
//                     )}

//                     {/* Custom Bedrooms Button with Popup */}
//                     <div className="relative" ref={bhkButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors"
//                             onClick={() => setBhkPopupOpen(!bhkPopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {bedrooms ? `${bedrooms} Bedrooms` : "Bedrooms"}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bhkPopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* BHK Selection Popup */}
//                         {bhkPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-64">
//                                 <div className="flex flex-col gap-2">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bedrooms</h3>
//                                     <div className="flex items-center gap-2">
//                                         <button
//                                             className={getBhkButtonClass("1")}
//                                             onClick={() => handleBhkFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("2")}
//                                             onClick={() => handleBhkFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("3")}
//                                             onClick={() => handleBhkFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("4")}
//                                             onClick={() => handleBhkFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("5")}
//                                             onClick={() => handleBhkFilter("5")}
//                                         >
//                                             5
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("6")}
//                                             onClick={() => handleBhkFilter("6")}
//                                         >
//                                             6
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Property Type Dropdown */}
//                     <div className="relative">
//                         <select
//                             className="appearance-none min-w-28 text-sm py-2.5 pl-4 pr-10 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
//                             onChange={(e) => handlePropertyTypeChange(e.target.value)}
//                             value={propertyType}
//                         >
//                             <option value="all">All Types</option>
//                             <option value="apartment">Apartments</option>
//                             <option value="house">Houses</option>
//                             <option value="office">Offices</option>
//                             <option value="residential">Buildings</option>
//                         </select>
//                         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                             <ChevronDown size={16} />
//                         </span>
//                     </div>

//                     {/* Purpose */}
//                     <div className="relative">
//                         <select
//                             className="appearance-none min-w-32 text-sm py-2.5 pl-4 pr-10 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
//                             onChange={(e) => handlePurposeChange(e.target.value)}
//                             value={purpose}
//                         >
//                             <option value="" hidden>Purpose</option>
//                             <option value="buy">Buy</option>
//                             <option value="rent">Rent</option>
//                         </select>
//                         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                             <ChevronDown size={16} />
//                         </span>
//                     </div>

//                     {/* Filters button with count */}
//                     <button
//                         className="flex items-center gap-2 bg-white border hover:bg-gray-200 rounded-lg py-2.5 px-4 transition-colors duration-200"
//                         onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                     >
//                         <FcFilledFilter size={18} />
//                         <span className="font-medium">More Filters</span>
//                         {Object.keys(appliedFilters).length > 0 && (
//                             <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
//                                 {Object.keys(appliedFilters).length}
//                             </span>
//                         )}
//                     </button>
//                 </div>

//                 <div className='flex items-center gap-2'>
//                     <ResetFilterButton onClick={handleResetFilters} />
//                     {/* View toggle button */}
//                     <button
//                         onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
//                         className="py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-white bg-gray-900 transition-colors duration-200"
//                     >
//                         {view === 'list' ? <Map size={18} /> : <List size={18} />}
//                         <span className="font-medium text-sm">{view === 'list' ? 'Map View' : 'List View'}</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Advanced Filter Panel with Tabs */}
//             {advancedFilterOpen && (
//                 <>
//                     {/* Apply overflow-hidden to body when filter is open */}
//                     <style jsx global>{`
//                         body {
//                             overflow: hidden;
//                         }
//                     `}</style>

//                     <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
//                         <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col h-auto max-h-[95vh]">
//                             <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 flex-shrink-0">
//                                 <div role="tablist" className="flex gap-2 font-medium">
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'property'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('property')}
//                                     >
//                                         Property
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'project'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('project')}
//                                     >
//                                         Project
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'building'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('building')}
//                                     >
//                                         Building
//                                     </button>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={resetAllFilters}
//                                     >
//                                         Reset Filters
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium transition hover:bg-red-700"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Apply Filters
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Tab Content with auto height and scrollable */}
//                             <div className="p-6 overflow-y-auto ">
//                                 {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </section>
//     );
// };

// export default SearchSection;


// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     applyFilter,
//     setSearchResults,
//     getAllProperties,
//     getAllProjects,
//     getAllBuildings
// } from '../redux/features/Map/mapSlice';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
// import { FcFilledFilter } from "react-icons/fc";
// import axios from 'axios';
// import {
//     Map,
//     List,
//     ChevronDown,
//     Search,
//     X,
//     Loader2
// } from 'lucide-react';
// import ResetFilterButton from './ResetFilterButton';
// import { base_url } from '../utils/base_url';

// const SearchSection = ({
//     handleViewChange,
//     view,
//     searchQuery,
//     setSearchQuery,
//     resetAllFilters,
//     activeFiltersCount = 0,
//     variant = 'default',
//     className = '',
//     showFilterDisplay = true
// }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//     const [activeFilterTab, setActiveFilterTab] = useState('property');
//     const [isFocused, setIsFocused] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Search-related states
//     const [searchInput, setSearchInput] = useState('');
//     const inputRef = useRef(null);

//     // State for local filters
//     const [bedrooms, setBedrooms] = useState(appliedFilters?.bedrooms || "");
//     const [baths, setBaths] = useState(appliedFilters?.baths || "");
//     const [propertyType, setPropertyType] = useState(appliedFilters?.propertyType || "all");
//     const [purpose, setPurpose] = useState(appliedFilters?.purpose || "");

//     // States for popups
//     const [bhkPopupOpen, setBhkPopupOpen] = useState(false);
//     const [bathsPopupOpen, setBathsPopupOpen] = useState(false);

//     // Refs for popup handling
//     const bhkButtonRef = useRef(null);
//     const bathsButtonRef = useRef(null);

//     // Function to determine active state for BHK buttons
//     const getBhkButtonClass = (value) => {
//         if (bedrooms === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Function to determine active state for Bathroom buttons
//     const getBathButtonClass = (value) => {
//         if (baths === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Handler for BHK filter
//     const handleBhkFilter = (value) => {
//         const newValue = bedrooms === value ? "" : value;
//         setBedrooms(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             bedrooms: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBhkPopupOpen(false);
//     };

//     // Handler for Bathrooms filter
//     const handleBathFilter = (value) => {
//         const newValue = baths === value ? "" : value;
//         setBaths(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             baths: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBathsPopupOpen(false);
//     };

//     // Handle clicking outside the popups
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (bhkButtonRef.current && !bhkButtonRef.current.contains(event.target)) {
//                 setBhkPopupOpen(false);
//             }
//             if (bathsButtonRef.current && !bathsButtonRef.current.contains(event.target)) {
//                 setBathsPopupOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     // Handler for Property Type change
//     const handlePropertyTypeChange = (value) => {
//         setPropertyType(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             propertyType: value === "all" ? undefined : [value],
//             filterType: 'property'
//         }));
//     };

//     // Handler for Purpose change
//     const handlePurposeChange = (value) => {
//         setPurpose(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             purpose: value === "" ? undefined : value,
//             filterType: 'property'
//         }));
//     };

//     // Reset local filters
//     const handleResetFilters = () => {
//         setBedrooms("");
//         setBaths("");
//         setPropertyType("all");
//         setPurpose("");
//         setSearchInput("");
//         resetAllFilters();
//     };

//     // Debounce function for search
//     const debounce = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(this, args);
//             }, delay);
//         };
//     };

//     // Handle search input change with debounce
//     const handleSearchInputChange = (e) => {
//         const value = e.target.value;
//         setSearchInput(value);
//         debouncedSearch(value);
//     };

//     // Function to handle search
//     const handleSearch = async (value) => {
//         if (!value || value.trim() === '') {
//             // When search is empty, fetch all data
//             dispatch(getAllProperties());
//             dispatch(getAllProjects());
//             dispatch(getAllBuildings());
//             return;
//         }

//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${base_url}/api/web-search/unified-search`, {
//                 params: {
//                     searchTerm: value.trim(),
//                     // entityType: activeFilterTab !== 'property' ? activeFilterTab : undefined,
//                     // limit: 10
//                 }
//             });

//             if (response.data.success) {
//                 // Log results to console as requested
//                 console.log('Search Results:', response.data.results);
//                 dispatch(setSearchResults(response.data.results));
//             } else {
//                 console.error('Search failed:', response.data.message);
//             }
//         } catch (error) {
//             console.error('Error performing search:', error.response?.data?.message || error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Create debounced search function with useCallback to maintain reference
//     const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

//     // Clear search input
//     const clearSearchInput = () => {
//         setSearchInput('');
//         // Immediately fetch all data when search is cleared
//         dispatch(getAllProperties());
//         dispatch(getAllProjects());
//         dispatch(getAllBuildings());
//         inputRef.current?.focus();
//     };

//     // Auto-focus the search input when view changes to 'list'
//     useEffect(() => {
//         if (view === 'list' && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [view]);

//     return (
//         <section className={`bg-transparent px-6 py-1 mb-2 ${className}`}>
//             <div className="flex items-center justify-between w-full gap-4">
//                 <div className="flex items-center gap-3 flex-wrap">
//                     {/* Search input replacing Easy search button */}
//                     {view === 'list' && (
//                         <div className="flex items-center">
//                             <div className={`flex items-center bg-white border ${isFocused
//                                 ? "border-gray-400 ring-2 ring-gray-100"
//                                 : "border-gray-200"
//                                 } rounded-lg w-64 md:w-64 transition-all duration-200`}>
//                                 <Search className="h-5 w-5 text-gray-400 ml-3" />
//                                 <input
//                                     ref={inputRef}
//                                     type="text"
//                                     placeholder="Search properties, projects..."
//                                     className="flex-1 py-2.5 px-2 bg-transparent focus:outline-none text-sm"
//                                     value={searchInput}
//                                     onChange={handleSearchInputChange}
//                                     onFocus={() => setIsFocused(true)}
//                                     onBlur={() => setIsFocused(false)}
//                                 />
//                                 {isLoading ? (
//                                     <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
//                                 ) : searchInput ? (
//                                     <button
//                                         type="button"
//                                         onClick={clearSearchInput}
//                                         className="h-5 w-5 text-gray-400 mr-3 hover:text-gray-600"
//                                     >
//                                         <X className="h-5 w-5" />
//                                     </button>
//                                 ) : null}
//                             </div>
//                         </div>
//                     )}

//                     {/* Custom Bedrooms Button with Popup */}
//                     <div className="relative" ref={bhkButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors"
//                             onClick={() => setBhkPopupOpen(!bhkPopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {bedrooms ? `${bedrooms} Beds` : "Beds"}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bhkPopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* BHK Selection Popup */}
//                         {bhkPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
//                                 <div className="flex flex-col gap-2">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bedrooms</h3>
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                         <button
//                                             className={getBhkButtonClass("1")}
//                                             onClick={() => handleBhkFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("2")}
//                                             onClick={() => handleBhkFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("3")}
//                                             onClick={() => handleBhkFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("4")}
//                                             onClick={() => handleBhkFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("5")}
//                                             onClick={() => handleBhkFilter("5")}
//                                         >
//                                             5
//                                         </button>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Bathrooms Button with Popup */}
//                     <div className="relative" ref={bathsButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors"
//                             onClick={() => setBathsPopupOpen(!bathsPopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {baths ? `${baths} Baths` : "Baths"}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bathsPopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* Bathrooms Selection Popup */}
//                         {bathsPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-64">
//                                 <div className="flex flex-col gap-2">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bathrooms</h3>
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                         <button
//                                             className={getBathButtonClass("1")}
//                                             onClick={() => handleBathFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("2")}
//                                             onClick={() => handleBathFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("3")}
//                                             onClick={() => handleBathFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("4")}
//                                             onClick={() => handleBathFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("5")}
//                                             onClick={() => handleBathFilter("5")}
//                                         >
//                                             5
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Property Type Dropdown */}
//                     <div className="relative">
//                         <select
//                             className="appearance-none min-w-28 text-sm py-2.5 pl-4 pr-10 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
//                             onChange={(e) => handlePropertyTypeChange(e.target.value)}
//                             value={propertyType}
//                         >
//                             <option value="all">All Types</option>
//                             <option value="apartment">Apartments</option>
//                             <option value="house">Houses</option>
//                             <option value="office">Offices</option>
//                             <option value="residential">Buildings</option>
//                         </select>
//                         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                             <ChevronDown size={16} />
//                         </span>
//                     </div>

//                     {/* Purpose */}
//                     <div className="relative">
//                         <select
//                             className="appearance-none min-w-32 text-sm py-2.5 pl-4 pr-10 rounded-lg bg-white border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
//                             onChange={(e) => handlePurposeChange(e.target.value)}
//                             value={purpose}
//                         >
//                             <option value="" hidden>Purpose</option>
//                             <option value="buy">Buy</option>
//                             <option value="rent">Rent</option>
//                         </select>
//                         <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                             <ChevronDown size={16} />
//                         </span>
//                     </div>

//                     {/* Filters button with count */}
//                     <button
//                         className="flex items-center gap-2 bg-white border hover:bg-gray-200 rounded-lg py-2.5 px-4 transition-colors duration-200"
//                         onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                     >
//                         <FcFilledFilter size={18} />
//                         <span className="font-medium">More Filters</span>
//                         {Object.keys(appliedFilters).length > 0 && (
//                             <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
//                                 {Object.keys(appliedFilters).length}
//                             </span>
//                         )}
//                     </button>
//                 </div>

//                 <div className='flex items-center gap-2'>
//                     <ResetFilterButton onClick={handleResetFilters} />
//                     {/* View toggle button */}
//                     <button
//                         onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
//                         className="py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-white bg-gray-900 transition-colors duration-200"
//                     >
//                         {view === 'list' ? <Map size={18} /> : <List size={18} />}
//                         <span className="font-medium text-sm">{view === 'list' ? 'Map View' : 'List View'}</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Advanced Filter Panel with Tabs */}
//             {advancedFilterOpen && (
//                 <>
//                     {/* Apply overflow-hidden to body when filter is open */}
//                     <style jsx global>{`
//                         body {
//                             overflow: hidden;
//                         }
//                     `}</style>

//                     <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
//                         <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col h-auto max-h-[95vh]">
//                             <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 flex-shrink-0">
//                                 <div role="tablist" className="flex gap-2 font-medium">
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'property'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('property')}
//                                     >
//                                         Property
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'project'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('project')}
//                                     >
//                                         Project
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'building'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('building')}
//                                     >
//                                         Building
//                                     </button>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={resetAllFilters}
//                                     >
//                                         Reset Filters
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium transition hover:bg-red-700"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Apply Filters
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Tab Content with auto height and scrollable */}
//                             <div className="p-6 overflow-y-auto ">
//                                 {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </section>
//     );
// };

// export default SearchSection;


// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     applyFilter,
//     setSearchResults,
//     getAllProperties,
//     getAllProjects,
//     getAllBuildings
// } from '../redux/features/Map/mapSlice';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
// import { FcFilledFilter } from "react-icons/fc";
// import axios from 'axios';
// import {
//     Map,
//     List,
//     ChevronDown,
//     Search,
//     X,
//     Loader2
// } from 'lucide-react';
// import ResetFilterButton from './ResetFilterButton';
// import { base_url } from '../utils/base_url';

// const SearchSection = ({
//     handleViewChange,
//     view,
//     searchQuery,
//     setSearchQuery,
//     resetAllFilters,
//     activeFiltersCount = 0,
//     variant = 'default',
//     className = '',
//     showFilterDisplay = true
// }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//     const [activeFilterTab, setActiveFilterTab] = useState('property');
//     const [isFocused, setIsFocused] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Search-related states
//     const [searchInput, setSearchInput] = useState('');
//     const inputRef = useRef(null);

//     // State for local filters
//     const [bedrooms, setBedrooms] = useState(appliedFilters?.bedrooms || "");
//     const [baths, setBaths] = useState(appliedFilters?.baths || "");
//     const [propertyType, setPropertyType] = useState(appliedFilters?.propertyType || "all");
//     const [purpose, setPurpose] = useState(appliedFilters?.purpose || "");

//     // States for popups
//     const [bhkPopupOpen, setBhkPopupOpen] = useState(false);
//     const [bathsPopupOpen, setBathsPopupOpen] = useState(false);
//     const [propertyTypePopupOpen, setPropertyTypePopupOpen] = useState(false);
//     const [purposePopupOpen, setPurposePopupOpen] = useState(false);

//     // Refs for popup handling
//     const bhkButtonRef = useRef(null);
//     const bathsButtonRef = useRef(null);
//     const propertyTypeButtonRef = useRef(null);
//     const purposeButtonRef = useRef(null);

//     // Property type options
//     const propertyTypeOptions = [
//         { value: "all", label: "All Types" },
//         { value: "apartment", label: "Apartments" },
//         { value: "house", label: "Houses" },
//         { value: "office", label: "Offices" },
//         { value: "residential", label: "Buildings" }
//     ];

//     // Purpose options
//     const purposeOptions = [
//         { value: "buy", label: "Buy" },
//         { value: "rent", label: "Rent" }
//     ];

//     // Function to determine active state for BHK buttons
//     const getBhkButtonClass = (value) => {
//         if (bedrooms === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Function to determine active state for Bathroom buttons
//     const getBathButtonClass = (value) => {
//         if (baths === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Function for option item styles
//     const getOptionItemClass = (optionValue, selectedValue) => {
//         if (optionValue === selectedValue) {
//             return "px-4 py-2 text-sm text-white bg-gray-900 rounded-md cursor-pointer hover:bg-gray-800 transition-colors";
//         }
//         return "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors";
//     };

//     // Handler for BHK filter
//     const handleBhkFilter = (value) => {
//         const newValue = bedrooms === value ? "" : value;
//         setBedrooms(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             bedrooms: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBhkPopupOpen(false);
//     };

//     // Handler for Bathrooms filter
//     const handleBathFilter = (value) => {
//         const newValue = baths === value ? "" : value;
//         setBaths(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             baths: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBathsPopupOpen(false);
//     };

//     // Handler for Property Type change
//     const handlePropertyTypeChange = (value) => {
//         setPropertyType(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             propertyType: value === "all" ? undefined : [value],
//             filterType: 'property'
//         }));

//         // Close the popup
//         setPropertyTypePopupOpen(false);
//     };

//     // Handler for Purpose change
//     const handlePurposeChange = (value) => {
//         setPurpose(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             purpose: value === "" ? undefined : value,
//             filterType: 'property'
//         }));

//         // Close the popup
//         setPurposePopupOpen(false);
//     };

//     // Handle clicking outside the popups
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (bhkButtonRef.current && !bhkButtonRef.current.contains(event.target)) {
//                 setBhkPopupOpen(false);
//             }
//             if (bathsButtonRef.current && !bathsButtonRef.current.contains(event.target)) {
//                 setBathsPopupOpen(false);
//             }
//             if (propertyTypeButtonRef.current && !propertyTypeButtonRef.current.contains(event.target)) {
//                 setPropertyTypePopupOpen(false);
//             }
//             if (purposeButtonRef.current && !purposeButtonRef.current.contains(event.target)) {
//                 setPurposePopupOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     // Reset local filters
//     const handleResetFilters = () => {
//         setBedrooms("");
//         setBaths("");
//         setPropertyType("all");
//         setPurpose("");
//         setSearchInput("");
//         resetAllFilters();
//     };

//     // Debounce function for search
//     const debounce = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(this, args);
//             }, delay);
//         };
//     };

//     // Handle search input change with debounce
//     const handleSearchInputChange = (e) => {
//         const value = e.target.value;
//         setSearchInput(value);
//         debouncedSearch(value);
//     };

//     // Function to handle search
//     const handleSearch = async (value) => {
//         if (!value || value.trim() === '') {
//             // When search is empty, fetch all data
//             dispatch(getAllProperties());
//             dispatch(getAllProjects());
//             dispatch(getAllBuildings());
//             return;
//         }

//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${base_url}/api/web-search/unified-search`, {
//                 params: {
//                     searchTerm: value.trim(),
//                     // entityType: activeFilterTab !== 'property' ? activeFilterTab : undefined,
//                     // limit: 10
//                 }
//             });

//             if (response.data.success) {
//                 // Log results to console as requested
//                 console.log('Search Results:', response.data.results);
//                 dispatch(setSearchResults(response.data.results));
//             } else {
//                 console.error('Search failed:', response.data.message);
//             }
//         } catch (error) {
//             console.error('Error performing search:', error.response?.data?.message || error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Create debounced search function with useCallback to maintain reference
//     const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

//     // Clear search input
//     const clearSearchInput = () => {
//         setSearchInput('');
//         // Immediately fetch all data when search is cleared
//         dispatch(getAllProperties());
//         dispatch(getAllProjects());
//         dispatch(getAllBuildings());
//         inputRef.current?.focus();
//     };

//     // Auto-focus the search input when view changes to 'list'
//     useEffect(() => {
//         if (view === 'list' && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [view]);

//     // Get property type label from value
//     const getPropertyTypeLabel = (value) => {
//         const option = propertyTypeOptions.find(opt => opt.value === value);
//         return option ? option.label : "All Types";
//     };

//     // Get purpose label from value
//     const getPurposeLabel = (value) => {
//         const option = purposeOptions.find(opt => opt.value === value);
//         return option ? option.label : "Purpose";
//     };

//     return (
//         <section className={`bg-transparent px-6 py-1 mb-2 ${className}`}>
//             <div className="flex items-center justify-between w-full gap-4">
//                 <div className="flex items-center gap-3 flex-wrap">
//                     {/* Search input replacing Easy search button */}
//                     {view === 'list' && (
//                         <div className="flex items-center">
//                             <div className={`flex items-center bg-white border ${isFocused
//                                 ? "border-gray-400 ring-2 ring-gray-100"
//                                 : "border-gray-200"
//                                 } rounded-lg w-64 md:w-64 transition-all duration-200`}>
//                                 <Search className="h-5 w-5 text-gray-400 ml-3" />
//                                 <input
//                                     ref={inputRef}
//                                     type="text"
//                                     placeholder="Search properties, projects..."
//                                     className="flex-1 py-2.5 px-2 bg-transparent focus:outline-none text-sm"
//                                     value={searchInput}
//                                     onChange={handleSearchInputChange}
//                                     onFocus={() => setIsFocused(true)}
//                                     onBlur={() => setIsFocused(false)}
//                                 />
//                                 {isLoading ? (
//                                     <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
//                                 ) : searchInput ? (
//                                     <button
//                                         type="button"
//                                         onClick={clearSearchInput}
//                                         className="h-5 w-5 text-gray-400 mr-3 hover:text-gray-600"
//                                     >
//                                         <X className="h-5 w-5" />
//                                     </button>
//                                 ) : null}
//                             </div>
//                         </div>
//                     )}

//                     {/* Custom Bedrooms Button with Popup */}
//                     <div className="relative" ref={bhkButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors"
//                             onClick={() => setBhkPopupOpen(!bhkPopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {bedrooms ? `${bedrooms} Beds` : "Beds"}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bhkPopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* BHK Selection Popup */}
//                         {bhkPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
//                                 <div className="flex flex-col gap-2">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bedrooms</h3>
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                         <button
//                                             className={getBhkButtonClass("1")}
//                                             onClick={() => handleBhkFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("2")}
//                                             onClick={() => handleBhkFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("3")}
//                                             onClick={() => handleBhkFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("4")}
//                                             onClick={() => handleBhkFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("5")}
//                                             onClick={() => handleBhkFilter("5")}
//                                         >
//                                             5
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Bathrooms Button with Popup */}
//                     <div className="relative" ref={bathsButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors"
//                             onClick={() => setBathsPopupOpen(!bathsPopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {baths ? `${baths} Baths` : "Baths"}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bathsPopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* Bathrooms Selection Popup */}
//                         {bathsPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
//                                 <div className="flex flex-col gap-2">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bathrooms</h3>
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                         <button
//                                             className={getBathButtonClass("1")}
//                                             onClick={() => handleBathFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("2")}
//                                             onClick={() => handleBathFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("3")}
//                                             onClick={() => handleBathFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("4")}
//                                             onClick={() => handleBathFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("5")}
//                                             onClick={() => handleBathFilter("5")}
//                                         >
//                                             5
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Property Type Dropdown */}
//                     <div className="relative" ref={propertyTypeButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors min-w-28"
//                             onClick={() => setPropertyTypePopupOpen(!propertyTypePopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {getPropertyTypeLabel(propertyType)}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${propertyTypePopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* Property Type Selection Popup */}
//                         {propertyTypePopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-48">
//                                 <div className="flex flex-col gap-1">
//                                     {propertyTypeOptions.map((option) => (
//                                         <div
//                                             key={option.value}
//                                             className={getOptionItemClass(option.value, propertyType)}
//                                             onClick={() => handlePropertyTypeChange(option.value)}
//                                         >
//                                             {option.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Purpose Dropdown */}
//                     <div className="relative" ref={purposeButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors min-w-20"
//                             onClick={() => setPurposePopupOpen(!purposePopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {purpose ? getPurposeLabel(purpose) : "Purpose"}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${purposePopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* Purpose Selection Popup */}
//                         {purposePopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-40">
//                                 <div className="flex flex-col gap-1">
//                                     {purposeOptions.map((option) => (
//                                         <div
//                                             key={option.value}
//                                             className={getOptionItemClass(option.value, purpose)}
//                                             onClick={() => handlePurposeChange(option.value)}
//                                         >
//                                             {option.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Filters button with count */}
//                     <button
//                         className="flex items-center gap-2 bg-white border hover:bg-gray-200 rounded-lg py-2.5 px-4 transition-colors duration-200"
//                         onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                     >
//                         <FcFilledFilter size={18} />
//                         <span className="font-medium">More Filters</span>
//                         {Object.keys(appliedFilters).length > 0 && (
//                             <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
//                                 {Object.keys(appliedFilters).length}
//                             </span>
//                         )}
//                     </button>
//                 </div>

//                 <div className='flex items-center gap-2'>
//                     <ResetFilterButton onClick={handleResetFilters} />
//                     {/* View toggle button */}
//                     <button
//                         onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
//                         className="py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-white bg-gray-900 transition-colors duration-200"
//                     >
//                         {view === 'list' ? <Map size={18} /> : <List size={18} />}
//                         <span className="font-medium text-sm">{view === 'list' ? 'Map View' : 'List View'}</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Advanced Filter Panel with Tabs */}
//             {advancedFilterOpen && (
//                 <>
//                     {/* Apply overflow-hidden to body when filter is open */}
//                     <style jsx global>{`
//                         body {
//                             overflow: hidden;
//                         }
//                     `}</style>

//                     <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
//                         <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col h-auto max-h-[95vh]">
//                             <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 flex-shrink-0">
//                                 <div role="tablist" className="flex gap-2 font-medium">
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'property'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('property')}
//                                     >
//                                         Property
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'project'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('project')}
//                                     >
//                                         Project
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'building'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('building')}
//                                     >
//                                         Building
//                                     </button>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={resetAllFilters}
//                                     >
//                                         Reset Filters
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium transition hover:bg-red-700"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Apply Filters
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Tab Content with auto height and scrollable */}
//                             <div className="p-6 overflow-y-auto ">
//                                 {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </section>
//     );
// };

// export default SearchSection;



// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     applyFilter,
//     setSearchResults,
//     getAllProperties,
//     getAllProjects,
//     getAllBuildings
// } from '../redux/features/Map/mapSlice';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
// import { FcFilledFilter } from "react-icons/fc";
// import axios from 'axios';
// import {
//     Map,
//     List,
//     ChevronDown,
//     Search,
//     X,
//     Loader2
// } from 'lucide-react';
// import { Badge } from 'antd';
// import ResetFilterButton from './ResetFilterButton';
// import { base_url } from '../utils/base_url';

// const SearchSection = ({
//     handleViewChange,
//     view,
//     searchQuery,
//     setSearchQuery,
//     resetAllFilters,
//     activeFiltersCount = 0,
//     variant = 'default',
//     className = '',
//     showFilterDisplay = true
// }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//     const [activeFilterTab, setActiveFilterTab] = useState('property');
//     const [isFocused, setIsFocused] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Search-related states
//     const [searchInput, setSearchInput] = useState('');
//     const inputRef = useRef(null);

//     // State for local filters
//     const [bedrooms, setBedrooms] = useState(appliedFilters?.bedrooms || "");
//     const [baths, setBaths] = useState(appliedFilters?.baths || "");
//     const [propertyType, setPropertyType] = useState(appliedFilters?.propertyType || "all");
//     const [purpose, setPurpose] = useState(appliedFilters?.purpose || "");

//     // States for popups
//     const [bhkPopupOpen, setBhkPopupOpen] = useState(false);
//     const [bathsPopupOpen, setBathsPopupOpen] = useState(false);
//     const [propertyTypePopupOpen, setPropertyTypePopupOpen] = useState(false);
//     const [purposePopupOpen, setPurposePopupOpen] = useState(false);

//     // Refs for popup handling
//     const bhkButtonRef = useRef(null);
//     const bathsButtonRef = useRef(null);
//     const propertyTypeButtonRef = useRef(null);
//     const purposeButtonRef = useRef(null);

//     // Property type options
//     const propertyTypeOptions = [
//         { value: "all", label: "All Types" },
//         { value: "apartment", label: "Apartments" },
//         { value: "house", label: "Houses" },
//         { value: "office", label: "Offices" },
//         { value: "residential", label: "Buildings" }
//     ];

//     // Purpose options
//     const purposeOptions = [
//         { value: "buy", label: "Buy" },
//         { value: "rent", label: "Rent" }
//     ];

//     // Function to determine active state for BHK buttons
//     const getBhkButtonClass = (value) => {
//         if (bedrooms === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Function to determine active state for Bathroom buttons
//     const getBathButtonClass = (value) => {
//         if (baths === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Function for option item styles
//     const getOptionItemClass = (optionValue, selectedValue) => {
//         if (optionValue === selectedValue) {
//             return "px-4 py-2 text-sm text-white bg-gray-900 rounded-md cursor-pointer hover:bg-gray-800 transition-colors";
//         }
//         return "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors";
//     };

//     // Handler for BHK filter
//     const handleBhkFilter = (value) => {
//         const newValue = bedrooms === value ? "" : value;
//         setBedrooms(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             bedrooms: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBhkPopupOpen(false);
//     };

//     // Handler for Bathrooms filter
//     const handleBathFilter = (value) => {
//         const newValue = baths === value ? "" : value;
//         setBaths(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             baths: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBathsPopupOpen(false);
//     };

//     // Handler for Property Type change
//     const handlePropertyTypeChange = (value) => {
//         setPropertyType(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             propertyType: value === "all" ? undefined : [value],
//             filterType: 'property'
//         }));

//         // Close the popup
//         setPropertyTypePopupOpen(false);
//     };

//     // Handler for Purpose change
//     const handlePurposeChange = (value) => {
//         setPurpose(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             purpose: value === "" ? undefined : value,
//             filterType: 'property'
//         }));

//         // Close the popup
//         setPurposePopupOpen(false);
//     };

//     // Handle clicking outside the popups
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (bhkButtonRef.current && !bhkButtonRef.current.contains(event.target)) {
//                 setBhkPopupOpen(false);
//             }
//             if (bathsButtonRef.current && !bathsButtonRef.current.contains(event.target)) {
//                 setBathsPopupOpen(false);
//             }
//             if (propertyTypeButtonRef.current && !propertyTypeButtonRef.current.contains(event.target)) {
//                 setPropertyTypePopupOpen(false);
//             }
//             if (purposeButtonRef.current && !purposeButtonRef.current.contains(event.target)) {
//                 setPurposePopupOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     // Reset local filters
//     const handleResetFilters = () => {
//         setBedrooms("");
//         setBaths("");
//         setPropertyType("all");
//         setPurpose("");
//         setSearchInput("");
//         resetAllFilters();
//     };

//     // Debounce function for search
//     const debounce = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(this, args);
//             }, delay);
//         };
//     };

//     // Handle search input change with debounce
//     const handleSearchInputChange = (e) => {
//         const value = e.target.value;
//         setSearchInput(value);
//         debouncedSearch(value);
//     };

//     // Function to handle search
//     const handleSearch = async (value) => {
//         if (!value || value.trim() === '') {
//             // When search is empty, fetch all data
//             dispatch(getAllProperties());
//             dispatch(getAllProjects());
//             dispatch(getAllBuildings());
//             return;
//         }

//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${base_url}/api/web-search/unified-search`, {
//                 params: {
//                     searchTerm: value.trim(),
//                     // entityType: activeFilterTab !== 'property' ? activeFilterTab : undefined,
//                     // limit: 10
//                 }
//             });

//             if (response.data.success) {
//                 // Log results to console as requested
//                 console.log('Search Results:', response.data.results);
//                 dispatch(setSearchResults(response.data.results));
//             } else {
//                 console.error('Search failed:', response.data.message);
//             }
//         } catch (error) {
//             console.error('Error performing search:', error.response?.data?.message || error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Create debounced search function with useCallback to maintain reference
//     const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

//     // Clear search input
//     const clearSearchInput = () => {
//         setSearchInput('');
//         // Immediately fetch all data when search is cleared
//         dispatch(getAllProperties());
//         dispatch(getAllProjects());
//         dispatch(getAllBuildings());
//         inputRef.current?.focus();
//     };

//     // Auto-focus the search input when view changes to 'list'
//     useEffect(() => {
//         if (view === 'list' && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [view]);

//     // Get property type label from value
//     const getPropertyTypeLabel = (value) => {
//         const option = propertyTypeOptions.find(opt => opt.value === value);
//         return option ? option.label : "All Types";
//     };

//     // Get purpose label from value
//     const getPurposeLabel = (value) => {
//         const option = purposeOptions.find(opt => opt.value === value);
//         return option ? option.label : "Purpose";
//     };

//     return (
//         <section className={`bg-transparent px-6 py-2 mb-2 ${className}`}>
//             <div className="flex items-center justify-between w-full gap-4">
//                 <div className="flex items-center gap-3 flex-wrap">
//                     {/* Search input replacing Easy search button */}
//                     {view === 'list' && (
//                         <div className="flex items-center">
//                             <div className={`flex items-center bg-white border ${isFocused
//                                 ? "border-gray-400 ring-2 ring-gray-100"
//                                 : "border-gray-200"
//                                 } rounded-lg w-64 md:w-64 transition-all duration-200`}>
//                                 <Search className="h-5 w-5 text-gray-400 ml-3" />
//                                 <input
//                                     ref={inputRef}
//                                     type="text"
//                                     placeholder="Search properties, projects..."
//                                     className="flex-1 py-2.5 px-2 bg-transparent focus:outline-none text-sm"
//                                     value={searchInput}
//                                     onChange={handleSearchInputChange}
//                                     onFocus={() => setIsFocused(true)}
//                                     onBlur={() => setIsFocused(false)}
//                                 />
//                                 {isLoading ? (
//                                     <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
//                                 ) : searchInput ? (
//                                     <button
//                                         type="button"
//                                         onClick={clearSearchInput}
//                                         className="h-5 w-5 text-gray-400 mr-3 hover:text-gray-600"
//                                     >
//                                         <X className="h-5 w-5" />
//                                     </button>
//                                 ) : null}
//                             </div>
//                         </div>
//                     )}

//                     {/* Custom Bedrooms Button with Popup */}
//                     <div className="relative" ref={bhkButtonRef}>
//                         <Badge count={bedrooms ? bedrooms : 0}  size="large" style={{
//                             backgroundColor: 'crimson',
//                         }}>
//                             <button
//                                 className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors"
//                                 onClick={() => setBhkPopupOpen(!bhkPopupOpen)}
//                             >
//                                 <span className="text-sm font-medium">
//                                     Beds
//                                 </span>
//                                 <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bhkPopupOpen ? 'rotate-180' : ''}`} />
//                             </button>
//                         </Badge>

//                         {/* BHK Selection Popup */}
//                         {bhkPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
//                                 <div className="flex flex-col gap-2">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bedrooms</h3>
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                         <button
//                                             className={getBhkButtonClass("1")}
//                                             onClick={() => handleBhkFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("2")}
//                                             onClick={() => handleBhkFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("3")}
//                                             onClick={() => handleBhkFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("4")}
//                                             onClick={() => handleBhkFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("5")}
//                                             onClick={() => handleBhkFilter("5")}
//                                         >
//                                             5
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Bathrooms Button with Popup */}
//                     <div className="relative" ref={bathsButtonRef}>
//                         <Badge count={baths ? baths : 0}  size="large" style={{
//                             backgroundColor: 'crimson',
//                         }}  >
//                             <button
//                                 className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors"
//                                 onClick={() => setBathsPopupOpen(!bathsPopupOpen)}
//                             >
//                                 <span className="text-sm font-medium">
//                                     Baths
//                                 </span>
//                                 <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bathsPopupOpen ? 'rotate-180' : ''}`} />
//                             </button>
//                         </Badge>

//                         {/* Bathrooms Selection Popup */}
//                         {bathsPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
//                                 <div className="flex flex-col gap-2">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bathrooms</h3>
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                         <button
//                                             className={getBathButtonClass("1")}
//                                             onClick={() => handleBathFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("2")}
//                                             onClick={() => handleBathFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("3")}
//                                             onClick={() => handleBathFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("4")}
//                                             onClick={() => handleBathFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("5")}
//                                             onClick={() => handleBathFilter("5")}
//                                         >
//                                             5
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Property Type Dropdown */}
//                     <div className="relative" ref={propertyTypeButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors min-w-28"
//                             onClick={() => setPropertyTypePopupOpen(!propertyTypePopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {getPropertyTypeLabel(propertyType)}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${propertyTypePopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* Property Type Selection Popup */}
//                         {propertyTypePopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-48">
//                                 <div className="flex flex-col gap-1">
//                                     {propertyTypeOptions.map((option) => (
//                                         <div
//                                             key={option.value}
//                                             className={getOptionItemClass(option.value, propertyType)}
//                                             onClick={() => handlePropertyTypeChange(option.value)}
//                                         >
//                                             {option.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Purpose Dropdown */}
//                     <div className="relative" ref={purposeButtonRef}>
//                         <button
//                             className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors min-w-20"
//                             onClick={() => setPurposePopupOpen(!purposePopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {purpose ? getPurposeLabel(purpose) : "Purpose"}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${purposePopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* Purpose Selection Popup */}
//                         {purposePopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-40">
//                                 <div className="flex flex-col gap-1">
//                                     {purposeOptions.map((option) => (
//                                         <div
//                                             key={option.value}
//                                             className={getOptionItemClass(option.value, purpose)}
//                                             onClick={() => handlePurposeChange(option.value)}
//                                         >
//                                             {option.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Filters button with count */}
//                     <button
//                         className="flex items-center gap-2 bg-white border hover:bg-gray-200 rounded-lg py-2.5 px-4 transition-colors duration-200"
//                         onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                     >
//                         <FcFilledFilter size={18} />
//                         <span className="font-medium">More Filters</span>
//                         {Object.keys(appliedFilters).length > 0 && (
//                             <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
//                                 {Object.keys(appliedFilters).length}
//                             </span>
//                         )}
//                     </button>
//                 </div>

//                 <div className='flex items-center gap-2'>
//                     <ResetFilterButton onClick={handleResetFilters} />
//                     {/* View toggle button */}
//                     <button
//                         onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
//                         className="py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-white bg-gray-900 transition-colors duration-200"
//                     >
//                         {view === 'list' ? <Map size={18} /> : <List size={18} />}
//                         <span className="font-medium text-sm">{view === 'list' ? 'Map View' : 'List View'}</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Advanced Filter Panel with Tabs */}
//             {advancedFilterOpen && (
//                 <>
//                     {/* Apply overflow-hidden to body when filter is open */}
//                     <style jsx global>{`
//                         body {
//                             overflow: hidden;
//                         }
//                     `}</style>

//                     <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
//                         <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col h-auto max-h-[95vh]">
//                             <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 flex-shrink-0">
//                                 <div role="tablist" className="flex gap-2 font-medium">
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'property'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('property')}
//                                     >
//                                         Property
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'project'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('project')}
//                                     >
//                                         Project
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'building'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('building')}
//                                     >
//                                         Building
//                                     </button>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={resetAllFilters}
//                                     >
//                                         Reset Filters
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium transition hover:bg-red-700"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Apply Filters
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Tab Content with auto height and scrollable */}
//                             <div className="p-6 overflow-y-auto ">
//                                 {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </section>
//     );
// };

// export default SearchSection;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     applyFilter,
//     setSearchResults,
//     getAllProperties,
//     getAllProjects,
//     getAllBuildings
// } from '../redux/features/Map/mapSlice';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
// import { FcFilledFilter } from "react-icons/fc";
// import axios from 'axios';
// import {
//     Map,
//     List,
//     ChevronDown,
//     Search,
//     X,
//     Loader2
// } from 'lucide-react';
// import { Badge } from 'antd';
// import ResetFilterButton from './ResetFilterButton';
// import { base_url } from '../utils/base_url';

// const SearchSection = ({
//     handleViewChange,
//     view,
//     searchQuery,
//     setSearchQuery,
//     resetAllFilters,
//     activeFiltersCount = 0,
//     variant = 'default',
//     className = '',
//     showFilterDisplay = true
// }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//     const [activeFilterTab, setActiveFilterTab] = useState('property');
//     const [isFocused, setIsFocused] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Search-related states
//     const [searchInput, setSearchInput] = useState('');
//     const inputRef = useRef(null);

//     // State for local filters
//     const [bedrooms, setBedrooms] = useState(appliedFilters?.bedrooms || "");
//     const [bathrooms, setBathrooms] = useState(appliedFilters?.bathrooms || "");
//     const [propertyType, setPropertyType] = useState(appliedFilters?.propertyType || "all");
//     const [purpose, setPurpose] = useState(appliedFilters?.purpose || "");

//     // States for popups
//     const [bhkPopupOpen, setBhkPopupOpen] = useState(false);
//     const [bathroomsPopupOpen, setBathroomsPopupOpen] = useState(false);
//     const [propertyTypePopupOpen, setPropertyTypePopupOpen] = useState(false);
//     const [purposePopupOpen, setPurposePopupOpen] = useState(false);

//     // Refs for popup handling
//     const bhkButtonRef = useRef(null);
//     const bathroomsButtonRef = useRef(null);
//     const propertyTypeButtonRef = useRef(null);
//     const purposeButtonRef = useRef(null);

//     // Property type options
//     const propertyTypeOptions = [
//         { value: "all", label: "All Types" },
//         { value: "apartment", label: "Apartments" },
//         { value: "house", label: "Houses" },
//         { value: "office", label: "Offices" },
//         { value: "residential", label: "Buildings" }
//     ];

//     // Purpose options
//     const purposeOptions = [
//         { value: "buy", label: "Buy" },
//         { value: "rent", label: "Rent" }
//     ];

//     // Function to determine active state for BHK buttons
//     const getBhkButtonClass = (value) => {
//         if (bedrooms === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Function to determine active state for Bathroom buttons
//     const getBathButtonClass = (value) => {
//         if (bathrooms === value) {
//             return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
//         } else {
//             return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
//         }
//     };

//     // Function for option item styles
//     const getOptionItemClass = (optionValue, selectedValue) => {
//         if (optionValue === selectedValue) {
//             return "px-4 py-2 text-sm text-white bg-gray-900 rounded-md cursor-pointer hover:bg-gray-800 transition-colors";
//         }
//         return "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors";
//     };

//     // Handler for BHK filter
//     const handleBhkFilter = (value) => {
//         const newValue = bedrooms === value ? "" : value;
//         setBedrooms(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             bedrooms: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBhkPopupOpen(false);
//     };

//     // Handler for Bathrooms filter
//     const handleBathFilter = (value) => {
//         const newValue = bathrooms === value ? "" : value;
//         setBathrooms(newValue);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             bathrooms: newValue === "" ? undefined : newValue,
//             filterType: 'property'
//         }));

//         // Close the popup after selection
//         setBathroomsPopupOpen(false);
//     };

//     // Handler for Property Type change
//     const handlePropertyTypeChange = (value) => {
//         setPropertyType(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             propertyType: value === "all" ? undefined : [value],
//             filterType: 'property'
//         }));

//         // Close the popup
//         setPropertyTypePopupOpen(false);
//     };

//     // Handler for Purpose change
//     const handlePurposeChange = (value) => {
//         setPurpose(value);

//         // Dispatch the filter action
//         dispatch(applyFilter({
//             ...appliedFilters,
//             purpose: value === "" ? undefined : value,
//             filterType: 'property'
//         }));

//         // Close the popup
//         setPurposePopupOpen(false);
//     };

//     // Handle clicking outside the popups
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (bhkButtonRef.current && !bhkButtonRef.current.contains(event.target)) {
//                 setBhkPopupOpen(false);
//             }
//             if (bathroomsButtonRef.current && !bathroomsButtonRef.current.contains(event.target)) {
//                 setBathroomsPopupOpen(false);
//             }
//             if (propertyTypeButtonRef.current && !propertyTypeButtonRef.current.contains(event.target)) {
//                 setPropertyTypePopupOpen(false);
//             }
//             if (purposeButtonRef.current && !purposeButtonRef.current.contains(event.target)) {
//                 setPurposePopupOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     // Reset local filters
//     const handleResetFilters = () => {
//         setBedrooms("");
//         setBathrooms("");
//         setPropertyType("all");
//         setPurpose("");
//         setSearchInput("");
//         resetAllFilters();
//     };

//     // Debounce function for search
//     const debounce = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(this, args);
//             }, delay);
//         };
//     };

//     // Handle search input change with debounce
//     const handleSearchInputChange = (e) => {
//         const value = e.target.value;
//         setSearchInput(value);
//         debouncedSearch(value);
//     };

//     // Function to handle search
//     const handleSearch = async (value) => {
//         if (!value || value.trim() === '') {
//             // When search is empty, fetch all data
//             dispatch(getAllProperties());
//             dispatch(getAllProjects());
//             dispatch(getAllBuildings());
//             return;
//         }

//         setIsLoading(true);
//         try {
//             const response = await axios.get(`${base_url}/api/web-search/unified-search`, {
//                 params: {
//                     searchTerm: value.trim(),
//                     // entityType: activeFilterTab !== 'property' ? activeFilterTab : undefined,
//                     // limit: 10
//                 }
//             });

//             if (response.data.success) {
//                 // Log results to console as requested
//                 console.log('Search Results:', response.data.results);
//                 dispatch(setSearchResults(response.data.results));
//             } else {
//                 console.error('Search failed:', response.data.message);
//             }
//         } catch (error) {
//             console.error('Error performing search:', error.response?.data?.message || error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Create debounced search function with useCallback to maintain reference
//     const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

//     // Clear search input
//     const clearSearchInput = () => {
//         setSearchInput('');
//         // Immediately fetch all data when search is cleared
//         dispatch(getAllProperties());
//         dispatch(getAllProjects());
//         dispatch(getAllBuildings());
//         inputRef.current?.focus();
//     };

//     // Auto-focus the search input when view changes to 'list'
//     useEffect(() => {
//         if (view === 'list' && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [view]);

//     // Get property type label from value
//     const getPropertyTypeLabel = (value) => {
//         const option = propertyTypeOptions.find(opt => opt.value === value);
//         return option ? option.label : "All Types";
//     };

//     // Get purpose label from value
//     const getPurposeLabel = (value) => {
//         const option = purposeOptions.find(opt => opt.value === value);
//         return option ? option.label : "Purpose";
//     };

//     return (
//         <section className={`bg-transparent px-6 py-2 mb-2 ${className}`}>
//             <div className="flex items-center justify-between w-full gap-4">
//                 <div className="flex items-center gap-3 flex-wrap">
//                     {/* Search input replacing Easy search button */}
//                     {view === 'list' && (
//                         <div className="flex items-center">
//                             <div className={`flex items-center bg-white border ${isFocused
//                                 ? "border-gray-400 ring-2 ring-gray-100"
//                                 : "border-gray-200"
//                                 } rounded-lg w-64 md:w-64 transition-all duration-200`}>
//                                 <Search className="h-5 w-5 text-gray-400 ml-3" />
//                                 <input
//                                     ref={inputRef}
//                                     type="text"
//                                     placeholder="Search properties, projects..."
//                                     className="flex-1 py-2.5 px-2 bg-transparent focus:outline-none text-sm"
//                                     value={searchInput}
//                                     onChange={handleSearchInputChange}
//                                     onFocus={() => setIsFocused(true)}
//                                     onBlur={() => setIsFocused(false)}
//                                 />
//                                 {isLoading ? (
//                                     <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
//                                 ) : searchInput ? (
//                                     <button
//                                         type="button"
//                                         onClick={clearSearchInput}
//                                         className="h-5 w-5 text-gray-400 mr-3 hover:text-gray-600"
//                                     >
//                                         <X className="h-5 w-5" />
//                                     </button>
//                                 ) : null}
//                             </div>
//                         </div>
//                     )}

//                     {/* Custom Bedrooms Button with Popup */}
//                     <div className="relative" ref={bhkButtonRef} >
//                         <Badge count={bedrooms ? bedrooms : 0} size="large" style={{
//                             backgroundColor: 'crimson',
//                         }}>
//                             <button
//                                 className={`${view == 'map' && 'shadow-xl'} flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors`}
//                                 onClick={() => setBhkPopupOpen(!bhkPopupOpen)}
//                             >
//                                 <span className="text-sm font-medium">
//                                     Beds
//                                 </span>
//                                 <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bhkPopupOpen ? 'rotate-180' : ''}`} />
//                             </button>
//                         </Badge>

//                         {/* BHK Selection Popup */}
//                         {bhkPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
//                                 <div className="flex flex-col gap-2 ">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bedrooms</h3>
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                         <button
//                                             className={getBhkButtonClass("1")}
//                                             onClick={() => handleBhkFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("2")}
//                                             onClick={() => handleBhkFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("3")}
//                                             onClick={() => handleBhkFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("4")}
//                                             onClick={() => handleBhkFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBhkButtonClass("5")}
//                                             onClick={() => handleBhkFilter("5")}
//                                         >
//                                             5
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Bathrooms Button with Popup */}
//                     <div className="relative" ref={bathroomsButtonRef}>
//                         <Badge count={bathrooms ? bathrooms : 0} size="large" style={{
//                             backgroundColor: 'crimson',
//                         }}>
//                             <button
//                                 className={`${view == 'map' && 'shadow-xl'} flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors`}
//                                 onClick={() => setBathroomsPopupOpen(!bathroomsPopupOpen)}
//                             >
//                                 <span className="text-sm font-medium">
//                                     Baths
//                                 </span>
//                                 <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bathroomsPopupOpen ? 'rotate-180' : ''}`} />
//                             </button>
//                         </Badge>

//                         {/* Bathrooms Selection Popup */}
//                         {bathroomsPopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
//                                 <div className="flex flex-col gap-2">
//                                     <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bathrooms</h3>
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                         <button
//                                             className={getBathButtonClass("1")}
//                                             onClick={() => handleBathFilter("1")}
//                                         >
//                                             1
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("2")}
//                                             onClick={() => handleBathFilter("2")}
//                                         >
//                                             2
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("3")}
//                                             onClick={() => handleBathFilter("3")}
//                                         >
//                                             3
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("4")}
//                                             onClick={() => handleBathFilter("4")}
//                                         >
//                                             4
//                                         </button>
//                                         <button
//                                             className={getBathButtonClass("5")}
//                                             onClick={() => handleBathFilter("5")}
//                                         >
//                                             5
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Property Type Dropdown */}
//                     <div className="relative" ref={propertyTypeButtonRef}>
//                         <button
//                             className={` ${view == 'map' && 'shadow-xl'} flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors min-w-28`}
//                             onClick={() => setPropertyTypePopupOpen(!propertyTypePopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {getPropertyTypeLabel(propertyType)}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${propertyTypePopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* Property Type Selection Popup */}
//                         {propertyTypePopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-48">
//                                 <div className="flex flex-col gap-1">
//                                     {propertyTypeOptions.map((option) => (
//                                         <div
//                                             key={option.value}
//                                             className={getOptionItemClass(option.value, propertyType)}
//                                             onClick={() => handlePropertyTypeChange(option.value)}
//                                         >
//                                             {option.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Purpose Dropdown */}
//                     <div className="relative" ref={purposeButtonRef}>
//                         <button
//                             className={` ${view == 'map' && 'shadow-xl'} flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors min-w-20 `}
//                             onClick={() => setPurposePopupOpen(!purposePopupOpen)}
//                         >
//                             <span className="text-sm font-medium">
//                                 {purpose ? getPurposeLabel(purpose) : "Purpose"}
//                             </span>
//                             <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${purposePopupOpen ? 'rotate-180' : ''}`} />
//                         </button>

//                         {/* Purpose Selection Popup */}
//                         {purposePopupOpen && (
//                             <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-40">
//                                 <div className="flex flex-col gap-1">
//                                     {purposeOptions.map((option) => (
//                                         <div
//                                             key={option.value}
//                                             className={getOptionItemClass(option.value, purpose)}
//                                             onClick={() => handlePurposeChange(option.value)}
//                                         >
//                                             {option.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Filters button with count */}
//                     <button
//                         className= {`${view == 'map' && 'shadow-xl'} flex items-center gap-2 bg-white border hover:bg-gray-200 rounded-lg py-2.5 px-4 transition-colors duration-200 `}
//                         onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                     >
//                         <FcFilledFilter size={18} />
//                         <span className="font-medium">More Filters</span>
//                         {Object.keys(appliedFilters).length > 0 && (
//                             <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
//                                 {Object.keys(appliedFilters).length}
//                             </span>
//                         )}
//                     </button>
//                 </div>

//                 <div className='flex items-center gap-2'>
//                     {view == "list" && <ResetFilterButton onClick={handleResetFilters} />}
//                     {/* View toggle button */}
//                     <button
//                         onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
//                         className={`py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-white bg-gray-900 transition-colors duration-200 ${view == 'map' && 'shadow-xl'} `}
//                     >
//                         {view === 'list' ? <Map size={18} /> : <List size={18} />}
//                         <span className="font-medium text-sm">{view === 'list' ? 'Map View' : 'List View'}</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Advanced Filter Panel with Tabs */}
//             {advancedFilterOpen && (
//                 <>
//                     {/* Apply overflow-hidden to body when filter is open */}
//                     <style jsx global>{`
//                         body {
//                             overflow: hidden;
//                         }
//                     `}</style>

//                     <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
//                         <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col h-auto max-h-[95vh]">
//                             <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 flex-shrink-0">
//                                 <div role="tablist" className="flex gap-2 font-medium">
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'property'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('property')}
//                                     >
//                                         Property
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'project'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('project')}
//                                     >
//                                         Project
//                                     </button>
//                                     <button
//                                         role="tab"
//                                         className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'building'
//                                             ? 'bg-gray-900 text-white'
//                                             : 'text-gray-700 hover:bg-gray-100'}`}
//                                         onClick={() => setActiveFilterTab('building')}
//                                     >
//                                         Building
//                                     </button>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
//                                         onClick={resetAllFilters}
//                                     >
//                                         Reset Filters
//                                     </button>
//                                     <button
//                                         className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium transition hover:bg-red-700"
//                                         onClick={() => setAdvancedFilterOpen(false)}
//                                     >
//                                         Apply Filters
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Tab Content with auto height and scrollable */}
//                             <div className="p-6 overflow-y-auto ">
//                                 {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                                 {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </section>
//     );
// };

// export default SearchSection;


import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    applyFilter,
    setSearchResults,
    getAllProperties,
    getAllProjects,
    getAllBuildings
} from '../redux/features/Map/mapSlice';
import { BuildingFilter, ProjectFilter, PropertyFilter } from './DynamicFilterComponent';
import { FcFilledFilter } from "react-icons/fc";
import axios from 'axios';
import {
    Map,
    List,
    ChevronDown,
    Search,
    X,
    Loader2
} from 'lucide-react';
import { Badge } from 'antd';
import ResetFilterButton from './ResetFilterButton';
import { base_url } from '../utils/base_url';

const SearchSection = ({
    handleViewChange,
    view,
    searchQuery,
    setSearchQuery,
    resetAllFilters,
    activeFiltersCount = 0,
    variant = 'default',
    className = '',
    showFilterDisplay = true
}) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
    const [activeFilterTab, setActiveFilterTab] = useState('property');
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Search-related states
    const [searchInput, setSearchInput] = useState('');
    const inputRef = useRef(null);

    // State for local filters
    const [bedrooms, setBedrooms] = useState(appliedFilters?.bedrooms || "");
    const [bathrooms, setBathrooms] = useState(appliedFilters?.bathrooms || "");
    const [propertyType, setPropertyType] = useState(appliedFilters?.propertyType || "all");
    const [purpose, setPurpose] = useState(appliedFilters?.purpose || "");

    // States for popups
    const [bhkPopupOpen, setBhkPopupOpen] = useState(false);
    const [bathroomsPopupOpen, setBathroomsPopupOpen] = useState(false);
    const [propertyTypePopupOpen, setPropertyTypePopupOpen] = useState(false);
    const [purposePopupOpen, setPurposePopupOpen] = useState(false);

    // Refs for popup handling
    const bhkButtonRef = useRef(null);
    const bathroomsButtonRef = useRef(null);
    const propertyTypeButtonRef = useRef(null);
    const purposeButtonRef = useRef(null);

    // Property type options
    const propertyTypeOptions = [
        { value: "all", label: "All Types" },
        { value: "apartment", label: "Apartments" },
        { value: "house", label: "Houses" },
        { value: "office", label: "Offices" },
        { value: "residential", label: "Buildings" }
    ];

    // Purpose options
    const purposeOptions = [
        { value: "buy", label: "Buy" },
        { value: "rent", label: "Rent" }
    ];

    // Update local state when appliedFilters change
    useEffect(() => {
        setBedrooms(appliedFilters?.bedrooms || "");
        setBathrooms(appliedFilters?.bathrooms || "");
        setPropertyType(appliedFilters?.propertyType ? appliedFilters.propertyType[0] : "all");
        setPurpose(appliedFilters?.purpose || "");
    }, [appliedFilters]);

    // Function to determine active state for BHK buttons
    const getBhkButtonClass = (value) => {
        if (bedrooms === value) {
            return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
        } else {
            return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
        }
    };

    // Function to determine active state for Bathroom buttons
    const getBathButtonClass = (value) => {
        if (bathrooms === value) {
            return "rounded-full py-1 px-3 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors";
        } else {
            return "rounded-full py-1 px-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors";
        }
    };

    // Function for option item styles
    const getOptionItemClass = (optionValue, selectedValue) => {
        if (optionValue === selectedValue) {
            return "px-4 py-2 text-sm text-white bg-gray-900 rounded-md cursor-pointer hover:bg-gray-800 transition-colors";
        }
        return "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors";
    };

    // Handler for BHK filter
    const handleBhkFilter = (value) => {
        const newValue = bedrooms === value ? "" : value;
        setBedrooms(newValue);

        // Dispatch the filter action
        dispatch(applyFilter({
            ...appliedFilters,
            bedrooms: newValue === "" ? undefined : newValue,
            filterType: 'property'
        }));

        // Close the popup after selection
        setBhkPopupOpen(false);
    };

    // Handler for Bathrooms filter
    const handleBathFilter = (value) => {
        const newValue = bathrooms === value ? "" : value;
        setBathrooms(newValue);

        // Dispatch the filter action
        dispatch(applyFilter({
            ...appliedFilters,
            bathrooms: newValue === "" ? undefined : newValue,
            filterType: 'property'
        }));

        // Close the popup after selection
        setBathroomsPopupOpen(false);
    };

    // Handler for Property Type change
    const handlePropertyTypeChange = (value) => {
        setPropertyType(value);

        // Dispatch the filter action
        dispatch(applyFilter({
            ...appliedFilters,
            propertyType: value === "all" ? undefined : [value],
            filterType: 'property'
        }));

        // Close the popup
        setPropertyTypePopupOpen(false);
    };

    // Handler for Purpose change
    const handlePurposeChange = (value) => {
        setPurpose(value);

        // Dispatch the filter action
        dispatch(applyFilter({
            ...appliedFilters,
            purpose: value === "" ? undefined : value,
            filterType: 'property'
        }));

        // Close the popup
        setPurposePopupOpen(false);
    };

    // Handle clicking outside the popups
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (bhkButtonRef.current && !bhkButtonRef.current.contains(event.target)) {
                setBhkPopupOpen(false);
            }
            if (bathroomsButtonRef.current && !bathroomsButtonRef.current.contains(event.target)) {
                setBathroomsPopupOpen(false);
            }
            if (propertyTypeButtonRef.current && !propertyTypeButtonRef.current.contains(event.target)) {
                setPropertyTypePopupOpen(false);
            }
            if (purposeButtonRef.current && !purposeButtonRef.current.contains(event.target)) {
                setPurposePopupOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Reset local filters
    const handleResetFilters = () => {
        setBedrooms("");
        setBathrooms("");
        setPropertyType("all");
        setPurpose("");
        setSearchInput("");
        resetAllFilters();
    };

    // Debounce function for search
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    // Handle search input change with debounce
    const handleSearchInputChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        debouncedSearch(value);
    };

    // Function to handle search
    const handleSearch = async (value) => {
        if (!value || value.trim() === '') {
            // When search is empty, fetch all data
            dispatch(getAllProperties());
            dispatch(getAllProjects());
            dispatch(getAllBuildings());
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.get(`${base_url}/api/web-search/unified-search`, {
                params: {
                    searchTerm: value.trim(),
                    // entityType: activeFilterTab !== 'property' ? activeFilterTab : undefined,
                    // limit: 10
                }
            });

            if (response.data.success) {
                // Log results to console as requested
                console.log('Search Results:', response.data.results);
                dispatch(setSearchResults(response.data.results));
            } else {
                console.error('Search failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error performing search:', error.response?.data?.message || error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Create debounced search function with useCallback to maintain reference
    const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

    // Clear search input
    const clearSearchInput = () => {
        setSearchInput('');
        // Immediately fetch all data when search is cleared
        dispatch(getAllProperties());
        dispatch(getAllProjects());
        dispatch(getAllBuildings());
        inputRef.current?.focus();
    };

    // Auto-focus the search input when view changes to 'list'
    useEffect(() => {
        if (view === 'list' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [view]);

    // Get property type label from value
    const getPropertyTypeLabel = (value) => {
        const option = propertyTypeOptions.find(opt => opt.value === value);
        return option ? option.label : "All Types";
    };

    // Get purpose label from value
    const getPurposeLabel = (value) => {
        const option = purposeOptions.find(opt => opt.value === value);
        return option ? option.label : "Purpose";
    };

    return (
        <section className={`bg-transparent px-6 pt-6 mb-2 ${className} font-roboto`}>
            <div className="flex items-center justify-between w-full gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                    {/* Search input replacing Easy search button */}
                    {view === 'list' && (
                        <div className="flex items-center">
                            <div className={`flex items-center bg-white border ${isFocused
                                ? "border-gray-400 ring-2 ring-gray-100"
                                : "border-gray-200"
                                } rounded-lg w-64 md:w-64 transition-all duration-200`}>
                                <Search className="h-5 w-5 text-gray-400 ml-3" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search properties, projects..."
                                    className="flex-1 py-2.5 px-2 bg-transparent focus:outline-none text-sm"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                />
                                {isLoading ? (
                                    <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
                                ) : searchInput ? (
                                    <button
                                        type="button"
                                        onClick={clearSearchInput}
                                        className="h-5 w-5 text-gray-400 mr-3 hover:text-gray-600"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    )}

                    {/* Custom Bedrooms Button with Popup */}
                    <div className="relative" ref={bhkButtonRef} >
                        <Badge count={appliedFilters?.bedrooms ? appliedFilters.bedrooms : 0} showZero={false} size="large" style={{
                            backgroundColor: 'crimson',
                        }}>
                            <button
                                className={`${view == 'map' && 'shadow-xl'} flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors`}
                                onClick={() => setBhkPopupOpen(!bhkPopupOpen)}
                            >
                                <span className="text-sm font-medium">
                                    Beds
                                </span>
                                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bhkPopupOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </Badge>

                        {/* BHK Selection Popup */}
                        {bhkPopupOpen && (
                            <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
                                <div className="flex flex-col gap-2 ">
                                    <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bedrooms</h3>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <button
                                            className={getBhkButtonClass("1")}
                                            onClick={() => handleBhkFilter("1")}
                                        >
                                            1
                                        </button>
                                        <button
                                            className={getBhkButtonClass("2")}
                                            onClick={() => handleBhkFilter("2")}
                                        >
                                            2
                                        </button>
                                        <button
                                            className={getBhkButtonClass("3")}
                                            onClick={() => handleBhkFilter("3")}
                                        >
                                            3
                                        </button>
                                        <button
                                            className={getBhkButtonClass("4")}
                                            onClick={() => handleBhkFilter("4")}
                                        >
                                            4
                                        </button>
                                        <button
                                            className={getBhkButtonClass("5")}
                                            onClick={() => handleBhkFilter("5")}
                                        >
                                            5
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Custom Bathrooms Button with Popup */}
                    <div className="relative" ref={bathroomsButtonRef}>
                        <Badge count={appliedFilters?.bathrooms ? appliedFilters.bathrooms : 0} showZero={false} size="large" style={{
                            backgroundColor: 'crimson',
                        }}>
                            <button
                                className={`${view == 'map' && 'shadow-xl'} flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors`}
                                onClick={() => setBathroomsPopupOpen(!bathroomsPopupOpen)}
                            >
                                <span className="text-sm font-medium">
                                    Baths
                                </span>
                                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${bathroomsPopupOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </Badge>

                        {/* Bathrooms Selection Popup */}
                        {bathroomsPopupOpen && (
                            <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-sm font-medium text-gray-700 mb-1">Select Bathrooms</h3>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <button
                                            className={getBathButtonClass("1")}
                                            onClick={() => handleBathFilter("1")}
                                        >
                                            1
                                        </button>
                                        <button
                                            className={getBathButtonClass("2")}
                                            onClick={() => handleBathFilter("2")}
                                        >
                                            2
                                        </button>
                                        <button
                                            className={getBathButtonClass("3")}
                                            onClick={() => handleBathFilter("3")}
                                        >
                                            3
                                        </button>
                                        <button
                                            className={getBathButtonClass("4")}
                                            onClick={() => handleBathFilter("4")}
                                        >
                                            4
                                        </button>
                                        <button
                                            className={getBathButtonClass("5")}
                                            onClick={() => handleBathFilter("5")}
                                        >
                                            5
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Custom Property Type Dropdown */}
                    <div className="relative" ref={propertyTypeButtonRef}>
                        <button
                            className={` ${view == 'map' && 'shadow-xl'} flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors min-w-28`}
                            onClick={() => setPropertyTypePopupOpen(!propertyTypePopupOpen)}
                        >
                            <span className="text-sm font-medium">
                                {getPropertyTypeLabel(propertyType)}
                            </span>
                            <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${propertyTypePopupOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Property Type Selection Popup */}
                        {propertyTypePopupOpen && (
                            <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-48">
                                <div className="flex flex-col gap-1">
                                    {propertyTypeOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={getOptionItemClass(option.value, propertyType)}
                                            onClick={() => handlePropertyTypeChange(option.value)}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Custom Purpose Dropdown */}
                    <div className="relative" ref={purposeButtonRef}>
                        <button
                            className={` ${view == 'map' && 'shadow-xl'} flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-lg hover:border-gray-300 transition-colors min-w-20 `}
                            onClick={() => setPurposePopupOpen(!purposePopupOpen)}
                        >
                            <span className="text-sm font-medium">
                                {purpose ? getPurposeLabel(purpose) : "Purpose"}
                            </span>
                            <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${purposePopupOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Purpose Selection Popup */}
                        {purposePopupOpen && (
                            <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-40">
                                <div className="flex flex-col gap-1">
                                    {purposeOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className={getOptionItemClass(option.value, purpose)}
                                            onClick={() => handlePurposeChange(option.value)}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Filters button with count */}
                    <button
                        className={`${view == 'map' && 'shadow-xl'} flex items-center gap-2 bg-white border hover:bg-gray-200 rounded-lg py-2.5 px-4 transition-colors duration-200 `}
                        onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
                    >
                        <FcFilledFilter size={18} />
                        <span className="font-medium">More Filters</span>
                        {/* {Object.keys(appliedFilters).length > 0 && (
                            <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                                {Object.keys(appliedFilters).length}
                            </span>
                        )} */}
                    </button>
                </div>

                <div className='flex items-center gap-2'>
                    {view == "list" && <ResetFilterButton onClick={handleResetFilters} />}
                    {/* View toggle button */}
                    <button
                        onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
                        className={`py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-800 text-white bg-gray-900 transition-colors duration-200 ${view == 'map' && 'shadow-xl'} `}
                    >
                        {view === 'list' ? <Map size={18} /> : <List size={18} />}
                        <span className="font-medium text-sm">{view === 'list' ? 'Map View' : 'List View'}</span>
                    </button>
                </div>
            </div>

            {/* Advanced Filter Panel with Tabs */}
            {advancedFilterOpen && (
                <>
                    {/* Apply overflow-hidden to body when filter is open */}
                    <style jsx global>{`
                        body {
                            overflow: hidden;
                        }
                    `}</style>

                    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
                        <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl flex flex-col h-auto max-h-[95vh]">
                            <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 flex-shrink-0">
                                <div role="tablist" className="flex gap-2 font-medium">
                                    <button
                                        role="tab"
                                        className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'property'
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setActiveFilterTab('property')}
                                    >
                                        Property
                                    </button>
                                    <button
                                        role="tab"
                                        className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'project'
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setActiveFilterTab('project')}
                                    >
                                        Project
                                    </button>
                                    <button
                                        role="tab"
                                        className={`px-6 py-3 rounded-lg text-base transition-colors ${activeFilterTab === 'building'
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setActiveFilterTab('building')}
                                    >
                                        Building
                                    </button>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
                                        onClick={() => setAdvancedFilterOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 transition hover:bg-gray-50"
                                        onClick={resetAllFilters}
                                    >
                                        Reset Filters
                                    </button>
                                    <button
                                        className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium transition hover:bg-red-700"
                                        onClick={() => setAdvancedFilterOpen(false)}
                                    >
                                        Apply Filters
                                    </button>
                                </div>
                            </div>

                            {/* Tab Content with auto height and scrollable */}
                            <div className="p-6 overflow-y-auto ">
                                {activeFilterTab === 'property' && <PropertyFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
                                {activeFilterTab === 'project' && <ProjectFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
                                {activeFilterTab === 'building' && <BuildingFilter setAdvancedFilterOpen={setAdvancedFilterOpen} />}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default SearchSection;

