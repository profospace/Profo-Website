// import React, { useState, useEffect } from 'react';
// import MapPage from './MapPage';
// import { getMapFeed } from '../redux/features/Map/mapSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import ListingPage from '../components/ListingPage';

// const MainPropertyPage = () => {
//     const dispatch = useDispatch();
//     const { properties, projects, isLoading } = useSelector(state => state.map);
//     const [view, setView] = useState('map'); // 'list' or 'map'
//     const [center, setCenter] = useState(null);
//     const [radius, setRadius] = useState(1);
//     // Get initial location
//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const currentLocation = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     setCenter(currentLocation);
//                 },
//                 (error) => {
//                     console.error("Error getting location:", error);
//                     // Default location
//                     setCenter({
//                         lat: 26.4735846,
//                         lng: 80.2855738
//                     });
//                 }
//             );
//         }
//     }, []);
//     // Fetch data when location or radius changes
//     useEffect(() => {
//         if (center) {
//             const coordinates = {
//                 latitude: center.lat,
//                 longitude: center.lng,
//                 radius: radius * 1000 // Convert to meters
//             };
//             dispatch(getMapFeed(coordinates));
//         }
//     }, [dispatch, radius, center]);
//     const handleViewChange = (newView) => {
//         setView(newView);
//     };
//     return (
//         <div className="min-h-screen bg-white">
//             {view === 'list' ? (
//                 <ListingPage
//                     properties={properties?.items || []}
//                     projects={projects?.items || []}
//                     isLoading={isLoading}
//                     onViewChange={handleViewChange}
//                 />
//             ) : (
//                 <MapPage
//                     onViewChange={handleViewChange}
//                     center={center}
//                     radius={radius}
//                     setRadius={setRadius}
//                     properties={properties?.items || []}
//                     projects={projects?.items || []}
//                     isLoading={isLoading}
//                 />
//             )}
//         </div>
//     );
// };
// export default MainPropertyPage;

// import React, { useState, useEffect } from 'react';
// import { LoadScript } from '@react-google-maps/api';
// import MapPage from './MapPage';
// import { getMapFeed } from '../redux/features/Map/mapSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import ListingPage from '../components/ListingPage';

// const MainPropertyPage = () => {
//     const dispatch = useDispatch();
//     const { properties, projects, buildings, isLoading } = useSelector(state => state.map);
//     console.log("buildings map", buildings)
//     const [view, setView] = useState('list'); // list / map view
//     const [center, setCenter] = useState(null);
//     const [radius, setRadius] = useState(1);
//     const [isScriptLoaded, setIsScriptLoaded] = useState(false);

//     console.log(projects)
//     // Get initial location
//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const currentLocation = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     setCenter(currentLocation);
//                 },
//                 (error) => {
//                     console.error("Error getting location:", error);
//                     setCenter({
//                         lat: 26.4735846,
//                         lng: 80.2855738
//                     });
//                 }
//             );
//         }
//     }, []);

//     // Fetch data when location or radius changes
//     // useEffect(() => {
//     //     if (center) {
//     //         const coordinates = {
//     //             latitude: center.lat,
//     //             longitude: center.lng,
//     //             radius: radius * 1000
//     //         };
//     //         dispatch(getMapFeed(coordinates));
//     //     }
//     // }, [dispatch, radius, center]);

//     const handleViewChange = (newView) => {
//         setView(newView);
//     };

//     return (
//         <LoadScript
//             googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
//             onLoad={() => setIsScriptLoaded(true)}
//         >
//         <h1>Common</h1>
//             <div className="min-h-screen bg-gray-100">
//                 {view === 'list' ? (
//                     <ListingPage
//                         properties={properties || []}
//                         projects={projects || []}
//                         buildings={buildings || []}
//                         isLoading={isLoading}
//                         onViewChange={handleViewChange}
//                     />
//                 ) : (
//                     isScriptLoaded && (
//                         <MapPage
//                             onViewChange={handleViewChange}
//                             center={center}
//                                 setCenter={setCenter}
//                             radius={radius}
//                             setRadius={setRadius}
//                             properties={properties || []}
//                             projects={projects || []}
//                             buildings={buildings || []}
//                             isLoading={isLoading}
//                         />
//                     )
//                 )}
//             </div>
//         </LoadScript>
//     );
// };

// export default MainPropertyPage;

// import React, { useState, useEffect } from 'react';
// import { LoadScript } from '@react-google-maps/api';
// import MapPage from './MapPage';
// import { clearFilters, getMapFeed } from '../redux/features/Map/mapSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import ListingPage from '../components/ListingPage';
// import {
//     Map,
//     List,
//     Building,
//     Search,
//     SlidersHorizontal,
// } from 'lucide-react';
// import { FaFilterCircleDollar } from 'react-icons/fa6';
// import { FiSettings } from 'react-icons/fi';
// import FilterComponent from '../components/FilterComponent';
// import { AiOutlineSetting } from 'react-icons/ai';
// import ActiveFiltersDisplay from '../components/ActiveFiltersDisplay';

// const MainPropertyPage = () => {
//     const dispatch = useDispatch();
//     const { properties, projects, buildings, appliedFilters , isLoading } = useSelector(state => state.map);
//     console.log("appliedFilters", appliedFilters)

//     const [view, setView] = useState('list'); // list / map view
//     const [center, setCenter] = useState(null);
//     const [isScriptLoaded, setIsScriptLoaded] = useState(false);

//     // State for filters and search
//     const [sortBy, setSortBy] = useState('price-low');
//     const [filterType, setFilterType] = useState('all');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isSearchExpanded, setIsSearchExpanded] = useState(false);
//     const [isFilterVisible, setIsFilterVisible] = useState(false);


//     // filter button popup
//     const [modalOpen, setModalOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('');

//     // Get initial location
//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const currentLocation = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     setCenter(currentLocation);
//                 },
//                 (error) => {
//                     console.error("Error getting location:", error);
//                     setCenter({
//                         lat: 26.4735846,
//                         lng: 80.2855738
//                     });
//                 }
//             );
//         }
//     }, []);

//     const handleViewChange = (newView) => {
//         setView(newView);
//     };

//     function getHeading(properties, projects) {
//         if (properties.length > 0) {
//             const typeNames = properties.map((property) => property.type_name);
//             const uniqueTypeNames = [...new Set(typeNames)];
//             return uniqueTypeNames.length === 1 ? uniqueTypeNames[0] : "Properties";
//         } else if (projects.length > 0) {
//             return "Projects";
//         } else {
//             return "Buildings";
//         }
//     }

//     function getHeading(properties, projects) {
//         console.log("p", properties)
//         var purpose;
//         if (properties.length > 0) {
//             const typeNames = properties?.map((property) => property?.type_name);
//             purpose = properties?.map((item) => item?.purpose);
//             const uniqueTypeNames = [...new Set(typeNames)];
//             console.log('purpose', purpose)

//             // If all type_name are the same, return that type_name; otherwise, return "Properties".
//             return uniqueTypeNames.length === 1 ? uniqueTypeNames[0] : "Properties";


//         }
//         else if (purpose?.[0] == 'Buy' || purpose?.[0] == 'buy') return "Buy Properties"
//         else if (purpose?.[0] == "Rent" || purpose?.[0] == "rent") return "Properties for rent"

//         else if (projects.length > 0) {
//             return "Projects";
//         } else {
//             return "Buildings";
//         }
//     }




//     return (
//         <LoadScript
//             googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
//             onLoad={() => setIsScriptLoaded(true)}
//         >
//             <div className="min-h-screen bg-white p-2 mt-28">
//                 <div className='max-w-7xl mx-auto px-2 flex flex-col gap-2  shadow-2xl rounded-md'>
//                     {/* Header with View Toggle */}
//                     <div className=" flex flex-col justify-center py-2">
//                         <div className="flex justify-between items-center">
//                             <h1 className="text-2xl font-semibold px-4 ">
//                                 {getHeading(properties, projects)}
//                             </h1>

//                             <div className='flex items-center gap-4'>
//                                 {/* <div className="flex items-center gap-2 text-sm">
//                                     <SlidersHorizontal size={16} className="text-gray-400" />
//                                     <span className="text-gray-600">Active filters:</span>
//                                     {filterType !== 'all' && (
//                                         <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl">
//                                             {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
//                                         </span>
//                                     )}
//                                     {searchQuery && (
//                                         <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl">
//                                             Search: "{searchQuery}"
//                                         </span>
//                                     )}
//                                 </div> */}

//                                 <div className='max-w-[34rem]'>
//                                     <ActiveFiltersDisplay
//                                         appliedFilters={appliedFilters}
//                                     // onRemoveFilter={handleRemoveFilter}
//                                     />
//                                 </div>

//                                 <button
//                                     onClick={() => dispatch(clearFilters())}
//                                     className="flex items-center gap-2 px-3 py-1 bg-gray-300 text-black rounded-md text-xs"
//                                 >
//                                     {/* <AiOutlineSetting /> */}
//                                     Clear All
//                                 </button>
//                                 <button
//                                     onClick={() => setIsFilterVisible(!isFilterVisible)}
//                                     className="flex items-center gap-2 px-3 py-1 bg-gray-300 text-black rounded-md"
//                                 >
//                                     <AiOutlineSetting />
//                                     Filter
//                                 </button>

//                                 <div className='flex gap-2 items-center'>
//                                     <select
//                                         value={sortBy}
//                                         onChange={(e) => setSortBy(e.target.value)}
//                                         className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap"
//                                     >
//                                         <option value="price-low">Price/Units: Low to High</option>
//                                         <option value="price-high">Price/Units: High to Low</option>
//                                     </select>
//                                     <div className="flex items-center gap-2">
//                                         <button
//                                             onClick={() => handleViewChange('list')}
//                                             className={`p-2 rounded-lg ${view === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//                                         >
//                                             <List size={20} />
//                                         </button>
//                                         <button
//                                             onClick={() => handleViewChange('map')}
//                                             className={`p-2 rounded-lg ${view === 'map' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//                                         >
//                                             <Map size={20} />
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Filters and Search Section - Conditionally Rendered */}
//                     {isFilterVisible && (
//                         <div className="bg-white space-y-4 ">
//                             <div className="w-full  ">
//                                 <div className="relative w-full ">
//                                     <div className="flex items-center gap-3 transition-all duration-300 ease-in-out">
//                                         <div className={`transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-1/3' : 'w-auto'}`}>
//                                             {!isSearchExpanded ? (
//                                                 <button
//                                                     onClick={() => setIsSearchExpanded(true)}
//                                                     className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
//                                                 >
//                                                     <Search size={16} />
//                                                     <span>Easy search</span>
//                                                 </button>
//                                             ) : (
//                                                 <div className="relative w-full">
//                                                     <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                                                     <input
//                                                         type="text"
//                                                         placeholder="Search by name or address..."
//                                                         value={searchQuery}
//                                                         onChange={(e) => setSearchQuery(e.target.value)}
//                                                         onBlur={() => {
//                                                             if (!searchQuery) {
//                                                                 setIsSearchExpanded(false);
//                                                             }
//                                                         }}
//                                                         className="w-full pl-10 pr-4 py-2 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-700"
//                                                         autoFocus
//                                                     />
//                                                 </div>
//                                             )}
//                                         </div>

//                                         {/* <button className="flex items-center gap-2 px-2 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
//                                             <FaFilterCircleDollar />
//                                             <span>Filters</span>
//                                         </button> */}

//                                         <button
//                                             onClick={() => setModalOpen(true)}
//                                             className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
//                                         >
//                                             <FiSettings className="text-gray-600" size={20} />
//                                             <span className="text-sm font-medium text-gray-700">Filters</span>
//                                         </button>

//                                         {/* Filter Component Modal */}
//                                         <FilterComponent
//                                             modalOpen={modalOpen}
//                                             setModalOpen={setModalOpen}
//                                             activeSection={activeSection}
//                                             setActiveSection={setActiveSection}
//                                         />



//                                         <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-xl">
//                                             <button className="px-2">Beds</button>
//                                             <button className="px-2 bg-white border border-none hover:text-red-400">1</button>
//                                             <button className="px-2 bg-white border border-none hover:text-red-400">2</button>
//                                             <button className="px-2 bg-white border border-none hover:text-red-400">3</button>
//                                             <button className="px-2 bg-white border border-none hover:text-red-400">4+</button>
//                                         </div>

//                                         <div className={`flex items-center gap-3 transition-all duration-300 ease-in-out overflow-hidden ${isSearchExpanded
//                                             ? 'w-0 opacity-0 invisible'
//                                             : 'w-auto opacity-100 visible'
//                                             }`}>
//                                             <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//                                                 Price Range
//                                             </button>
//                                             <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//                                                 Bathroom
//                                             </button>
//                                             <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//                                                 Floor
//                                             </button>
//                                         </div>

//                                         <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//                                             Purpose
//                                         </button>
//                                         <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//                                             Amenities
//                                         </button>
//                                         <select
//                                             value={filterType}
//                                             onChange={(e) => setFilterType(e.target.value)}
//                                             className="px-4 py-2 text-black bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
//                                         >
//                                             <option value="all">All Types</option>
//                                             <option value="apartment">Apartments</option>
//                                             <option value="house">Houses</option>
//                                             <option value="office">Offices</option>
//                                             <option value="residential">Buildings</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {view === 'list' ? (
//                     <ListingPage
//                         properties={properties || []}
//                         projects={projects || []}
//                         buildings={buildings || []}
//                         isLoading={isLoading}
//                         onViewChange={handleViewChange}
//                         // Pass down filter states if needed
//                         sortBy={sortBy}
//                         filterType={filterType}
//                         searchQuery={searchQuery}
//                     />
//                 ) : (
//                     isScriptLoaded && (
//                         <MapPage
//                             onViewChange={handleViewChange}
//                             center={center}
//                             setCenter={setCenter}
//                             properties={properties || []}
//                             projects={projects || []}
//                             buildings={buildings || []}
//                             isLoading={isLoading}
//                             setIsFilterVisible={setIsFilterVisible}
//                         />
//                     )
//                 )}
//             </div>
//         </LoadScript>

//         //         <div className="min-h-screen bg-white p-2 relative">
//         //     <LoadScript
//         //         googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
//         //         onLoad={() => setIsScriptLoaded(true)}
//         //     >
//         //         {/* Absolute positioned header and filter section */}
//         //         <div className="absolute top-0 left-0 right-0 z-10 p-2">
//         //             <div className='max-w-7xl mx-auto px-2'>
//         //                 {/* Header with View Toggle - Now with glassmorphism effect */}
//         //                 <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm mb-2">
//         //                     <div className="flex justify-between items-center p-3">
//         //                         <h1 className="text-2xl font-semibold">
//         //                             {getHeading(properties, projects)}
//         //                         </h1>

//         //                         <div className='flex gap-2 items-center'>
//         //                             <select
//         //                                 value={sortBy}
//         //                                 onChange={(e) => setSortBy(e.target.value)}
//         //                                 className="px-4 py-2 bg-white/80 border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap"
//         //                             >
//         //                                 <option value="price-low">Price/Units: Low to High</option>
//         //                                 <option value="price-high">Price/Units: High to Low</option>
//         //                             </select>
//         //                             <div className="flex items-center gap-2">
//         //                                 <button
//         //                                     onClick={() => handleViewChange('list')}
//         //                                     className={`p-2 rounded-lg ${view === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//         //                                 >
//         //                                     <List size={20} />
//         //                                 </button>
//         //                                 <button
//         //                                     onClick={() => handleViewChange('map')}
//         //                                     className={`p-2 rounded-lg ${view === 'map' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//         //                                 >
//         //                                     <Map size={20} />
//         //                                 </button>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>

//         //                 {/* Filters Section - Also with glassmorphism */}
//         //                 <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm">
//         //                     <div className="p-3 space-y-4">
//         //                         <div className="w-full">
//         //                             <div className="relative w-full">
//         //                                     {/* Rest of the filter UI remains the same as in the original code */}
//         //                                     {/* ... (previous filter code) ... */}
//         //                                     <div className="flex items-center gap-3 transition-all duration-300 ease-in-out">
//         //                                                              <div className={`transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-1/3' : 'w-auto'}`}>
//         //                                                                  {!isSearchExpanded ? (
//         //                                                                      <button
//         //                                                                          onClick={() => setIsSearchExpanded(true)}
//         //                                                                          className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
//         //                                                                      >
//         //                                                                          <Search size={16} />
//         //                                                                          <span>Easy search</span>
//         //                                                                      </button>
//         //                                                                  ) : (
//         //                                                                      <div className="relative w-full">
//         //                                                                          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//         //                                                                          <input
//         //                                                                              type="text"
//         //                                                                              placeholder="Search by name or address..."
//         //                                                                              value={searchQuery}
//         //                                                                              onChange={(e) => setSearchQuery(e.target.value)}
//         //                                                                              onBlur={() => {
//         //                                                                                  if (!searchQuery) {
//         //                                                                                      setIsSearchExpanded(false);
//         //                                                                                  }
//         //                                                                              }}
//         //                                                                              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-700"
//         //                                                                              autoFocus
//         //                                                                          />
//         //                                                                      </div>
//         //                                                                  )}
//         //                                                              </div>

//         //                                                              <button className="flex items-center gap-2 px-2 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
//         //                                                                  <FaFilterCircleDollar />
//         //                                                                  <span>Filters</span>
//         //                                                              </button>

//         //                                                              <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-xl">
//         //                                                                  <button className="px-2">Beds</button>
//         //                                                                  <button className="px-2 bg-white border border-none hover:text-red-400">1</button>
//         //                                                                  <button className="px-2 bg-white border border-none hover:text-red-400">2</button>
//         //                                                                  <button className="px-2 bg-white border border-none hover:text-red-400">3</button>
//         //                                                                  <button className="px-2 bg-white border border-none hover:text-red-400">4+</button>
//         //                                                              </div>

//         //                                                              <div className={`flex items-center gap-3 transition-all duration-300 ease-in-out overflow-hidden ${isSearchExpanded
//         //                                                                  ? 'w-0 opacity-0 invisible'
//         //                                                                  : 'w-auto opacity-100 visible'
//         //                                                                  }`}>
//         //                                                                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//         //                                                                      Price Range
//         //                                                                  </button>
//         //                                                                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//         //                                                                      Bathroom
//         //                                                                  </button>
//         //                                                                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//         //                                                                      Floor
//         //                                                                  </button>
//         //                                                              </div>

//         //                                                              <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//         //                                                                  Purpose
//         //                                                              </button>
//         //                                                              <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
//         //                                                                  Amenities
//         //                                                              </button>
//         //                                                              <select
//         //                                                                  value={filterType}
//         //                                                                  onChange={(e) => setFilterType(e.target.value)}
//         //                                                                  className="px-4 py-2 text-black bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
//         //                                                              >
//         //                                                                  <option value="all">All Types</option>
//         //                                                                  <option value="apartment">Apartments</option>
//         //                                                                  <option value="house">Houses</option>
//         //                                                                  <option value="office">Offices</option>
//         //                                                                  <option value="residential">Buildings</option>
//         //                                                              </select>

//         //                                 </div>
//         //                             </div>
//         //                         </div>
//         //                         <div className="flex items-center gap-2 text-sm">
//         //                             <SlidersHorizontal size={16} className="text-gray-400" />
//         //                             <span className="text-gray-600">Active filters:</span>
//         //                             {/* Active filters display remains the same */}
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>

//         //         {/* MapPage content - now with top padding to accommodate the overlay */}
//         //         {isScriptLoaded && (
//         //             <MapPage
//         //                 className="" // Adjust this value based on your header and filter heights
//         //                 onViewChange={handleViewChange}
//         //                 center={center}
//         //                 setCenter={setCenter}
//         //                 radius={radius}
//         //                 setRadius={setRadius}
//         //                 properties={properties || []}
//         //                 projects={projects || []}
//         //                 buildings={buildings || []}
//         //                 isLoading={isLoading}
//         //             />
//         //         )}
//         //     </LoadScript>
//         // </div>
//     );
// };

// export default MainPropertyPage;

// import React, { useState, useEffect } from 'react';
// import { LoadScript } from '@react-google-maps/api';
// import MapPage from './MapPage';
// import { useDispatch, useSelector } from 'react-redux';
// import ListingPage from '../components/ListingPage';
// import {
//     Map,
//     List,
//     Building,
//     Search,
//     SlidersHorizontal,
// } from 'lucide-react';
// import { FiSettings } from 'react-icons/fi';
// import { AiOutlineSetting } from 'react-icons/ai';
// import ActiveFiltersDisplay from '../components/ActiveFiltersDisplay';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from '../components/DynamicFilterComponent';
// import ViewSwitcher from '../components/ViewSwitcher';
// import { applyFilter } from '../redux/features/Map/mapSlice';

// const MainPropertyPage = () => {
//     const dispatch = useDispatch();
//     const { properties, projects, buildings, appliedFilters, isLoading } = useSelector(state => state.map);

//     const [view, setView] = useState('list'); // list / map view
//     const [center, setCenter] = useState(null);
//     const [isScriptLoaded, setIsScriptLoaded] = useState(false);

//     // State for filters and search
//     const [sortBy, setSortBy] = useState('');
//     const [filterType, setFilterType] = useState('all');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isSearchExpanded, setIsSearchExpanded] = useState(false);
//     const [isFilterVisible, setIsFilterVisible] = useState(false);

//     // filter button popup
//     const [modalOpen, setModalOpen] = useState(false);
//     const [projectModalOpen, setProjectModalOpen] = useState(false);
//     const [buildingModalOpen, setBuildingModalOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('');

//     // Get initial location
//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const currentLocation = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     setCenter(currentLocation);
//                 },
//                 (error) => {
//                     console.error("Error getting location:", error);
//                     setCenter({
//                         lat: 26.4735846,
//                         lng: 80.2855738
//                     });
//                 }
//             );
//         }
//     }, []);

//     const handleViewChange = (newView) => {
//         setView(newView);
//     };

//     return (
//         <LoadScript
//             googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
//             onLoad={() => setIsScriptLoaded(true)}
//         >
//             <div className="min-h-screen px-2 overflow-hidden">
//                 <div className='max-w-7xl mx-auto px-2 flex flex-col shadow-2xl rounded-md'>
//                     <div className="flex items-center gap-2 py-1 justify-between">
//                         <div className='flex gap-2 items-center'>
//                             {/* easy search */}
//                             <div className={`transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-[30rem]' : 'w-auto'}`}>
//                                 {!isSearchExpanded ? (
//                                     <button
//                                         onClick={() => setIsSearchExpanded(true)}
//                                         className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
//                                     >
//                                         <Search size={16} />
//                                         <span className='text-sm'>Easy search</span>
//                                     </button>
//                                 ) : (
//                                     <div className="relative w-full rounded-md">
//                                         <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                                         <input
//                                             type="text"
//                                             placeholder="Search by name or address..."
//                                             value={searchQuery}
//                                             onChange={(e) => setSearchQuery(e.target.value)}
//                                             onBlur={() => {
//                                                 if (!searchQuery) {
//                                                     setIsSearchExpanded(false);
//                                                 }
//                                             }}
//                                             className="w-full text-sm pl-10 pr-4 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
//                                             autoFocus
//                                         />
//                                     </div>
//                                 )}
//                             </div>




//                             {/* Filter Component Modal */}
//                             {/* property filter */}
//                             <button
//                                 onClick={() => setModalOpen(true)}
//                                 className={`flex items-center gap-2 px-3 py-2 rounded-md border-[0.5px] transition-colors duration-300
//         ${appliedFilters.filterType === "property"
//                                         ? "bg-yellow-200 border-yellow-900 text-black"
//                                         : "bg-white border-gray-300 text-gray-700"
//                                     }`}
//                             >
//                                 <FiSettings
//                                     className={`size-5 transition-colors duration-300 ${appliedFilters.filterType === "property" ? "text-black" : "text-gray-600"
//                                         }`}
//                                 />
//                                 <span
//                                     className={`text-sm font-medium transition-colors duration-300 ${appliedFilters.filterType === "property" ? "text-black" : "text-gray-700"
//                                         }`}
//                                 >
//                                     Filters
//                                 </span>
//                             </button>
//                             <PropertyFilter modalOpen={modalOpen}
//                                 setModalOpen={setModalOpen} activeSection={activeSection}
//                                 setActiveSection={setActiveSection} />

//                             {/* Filter Component Modal */}
//                             <button
//                                 onClick={() => setProjectModalOpen(true)}
//                                 className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
//                             >
//                                 <FiSettings className="text-gray-600 shrink-0" size={20} />
//                                 <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
//                                     Project Filters
//                                 </span>
//                             </button>
//                             <ProjectFilter modalOpen={projectModalOpen}
//                                 setModalOpen={setProjectModalOpen}
//                                 activeSection={activeSection}
//                                 setActiveSection={setActiveSection} />

//                             {/* Building OCmponent mOdel */}
//                             <button
//                                 onClick={() => setBuildingModalOpen(true)}
//                                 className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 max-w-[180px] sm:max-w-none"
//                             >
//                                 <FiSettings className="text-gray-600 shrink-0" size={20} />
//                                 <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
//                                     Building Filters
//                                 </span>
//                             </button>

//                             <BuildingFilter
//                                 modalOpen={buildingModalOpen}
//                                 setModalOpen={setBuildingModalOpen}
//                             />



//                         </div>
//                         <div className='flex gap-2 items-center'>
//                             {/* applied filters */}
//                             <ActiveFiltersDisplay />

//                             {/* sorting */}
//                             <div className="relative">
//                                 <select
//                                     value={filterType}
//                                     onChange={(e) => setFilterType(e.target.value)}
//                                     className="px-4 py-[5px] text-black bg-white border border-gray-300 rounded-md hover:bg-gray-50 appearance-none w-full pr-10 text-md"
//                                 >
//                                     <option value="all">All Types</option>
//                                     <option value="apartment">Apartments</option>
//                                     <option value="house">Houses</option>
//                                     <option value="office">Offices</option>
//                                     <option value="residential">Buildings</option>
//                                 </select>
//                                 <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                                     <svg
//                                         className="w-4 h-4 text-gray-500"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </div>
//                             </div>

//                             {/* sorting filter */}
//                             <div className="relative">
//                                 <select
//                                     value={sortBy}
//                                     onChange={(e) => setSortBy(e.target.value)}
//                                     className="pl-4 pr-8 py-[5px] bg-white border border-gray-300 rounded-md hover:bg-gray-50 appearance-none whitespace-nowrap max-w-40"
//                                 >
//                                     <option value="">Sort</option>
//                                     <option value="price-low">Price: Low to High</option>
//                                     <option value="price-high">Price: High to Low</option>
//                                 </select>
//                                 <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                                     <svg
//                                         className="w-4 h-4 text-gray-500"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </div>
//                             </div>

//                             <button
//                                 onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
//                                 className="p-2 rounded-lg flex min-w-28 items-center gap-2 bg-blue-100 text-blue-600 hover:bg-gray-100"
//                             >
//                                 {view === 'list' ? <List size={20} /> : <Map size={20} />}
//                                 <span className='text-xs'>{view === 'list' ? 'List View' : 'Map View'}</span>
//                             </button>


//                         </div>
//                     </div>
//                 </div>

//                 {view === 'list' ? (
//                     <ListingPage
//                         properties={properties || []}
//                         projects={projects || []}
//                         buildings={buildings || []}
//                         isLoading={isLoading}
//                         onViewChange={handleViewChange}
//                         // Pass down filter states if needed
//                         sortBy={sortBy}
//                         filterType={filterType}
//                         searchQuery={searchQuery}
//                     />
//                 ) : (
//                     isScriptLoaded && (
//                         <MapPage
//                             onViewChange={handleViewChange}
//                             center={center}
//                             setCenter={setCenter}
//                             properties={properties || []}
//                             projects={projects || []}
//                             buildings={buildings || []}
//                             isLoading={isLoading}
//                             setIsFilterVisible={setIsFilterVisible}
//                         />
//                     )
//                 )}

//                 {/* Replace the existing view switching code with: */}
//                 {/* <ViewSwitcher view={view}>
//                     {view === 'list' ? (
//                         <ListingPage
//                             properties={properties || []}
//                             projects={projects || []}
//                             buildings={buildings || []}
//                             isLoading={isLoading}
//                             onViewChange={handleViewChange}
//                             sortBy={sortBy}
//                             filterType={filterType}
//                             searchQuery={searchQuery}
//                         />
//                     ) : (
//                         isScriptLoaded && (
//                             <MapPage
//                                 onViewChange={handleViewChange}
//                                 center={center}
//                                 setCenter={setCenter}
//                                 properties={properties || []}
//                                 projects={projects || []}
//                                 buildings={buildings || []}
//                                 isLoading={isLoading}
//                                 setIsFilterVisible={setIsFilterVisible}
//                             />
//                         )
//                     )}
//                 </ViewSwitcher> */}
//             </div>
//         </LoadScript>
//     );
// };

// export default MainPropertyPage;

import React, { useState, useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';
import MapPage from './MapPage';
import { useDispatch, useSelector } from 'react-redux';
import ListingPage from '../components/ListingPage';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Map,
    List,
    Search,
} from 'lucide-react';
import { FiSettings } from 'react-icons/fi';
import ActiveFiltersDisplay from '../components/ActiveFiltersDisplay';
import { BuildingFilter, ProjectFilter, PropertyFilter } from '../components/DynamicFilterComponent';

const MainPropertyPageOld = () => {
    const dispatch = useDispatch();
    // Add default value for appliedFilters
    const { properties = [], projects = [], buildings = [], appliedFilters = { filterType: null }, isLoading = false }
        = useSelector(state => state.map || {});

    const [view, setView] = useState('list');
    const [center, setCenter] = useState(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    // State for filters and search
    const [sortBy, setSortBy] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    // filter button popup
    const [modalOpen, setModalOpen] = useState(false);
    const [projectModalOpen, setProjectModalOpen] = useState(false);
    const [buildingModalOpen, setBuildingModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setCenter({
                        lat: 26.4735846,
                        lng: 80.2855738
                    });
                }
            );
        }
    }, []);

    const handleViewChange = (newView) => {
        setView(newView);
    };

    // Add a safe check for the filter type
    const isPropertyFilter = appliedFilters?.filterType === "property";

    // Animation variants
    const pageTransition = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    const filterButtonVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    const searchExpandVariants = {
        collapsed: { width: 'auto' },
        expanded: { width: '30rem' }
    };


    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            onLoad={() => setIsScriptLoaded(true)}
        >
            {/* <div className="min-h-screen px-2 overflow-hidden">
                <div className='max-w-7xl mx-auto px-2 flex flex-col shadow-2xl rounded-md'> */}
            <motion.div
                className="min-h-screen px-2 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className='max-w-7xl mx-auto px-2 flex flex-col shadow-2xl rounded-md'
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center gap-2 py-1 justify-between">
                        <div className='flex gap-2 items-center'>
                            {/* Search component */}
                            {/* <div className={`transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-[30rem]' : 'w-auto'}`}> */}
                            <motion.div
                                variants={searchExpandVariants}
                                initial="collapsed"
                                animate={isSearchExpanded ? "expanded" : "collapsed"}
                                transition={{ duration: 0.3 }}
                                className="transition-all duration-300 ease-in-out"
                            >
                                {!isSearchExpanded ? (
                                    <button
                                        onClick={() => setIsSearchExpanded(true)}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                                    >
                                        <Search size={16} />
                                        <span className='text-sm'>Easy search</span>
                                    </button>
                                ) : (
                                    <div className="relative w-full rounded-md">
                                        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search by name or address..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onBlur={() => {
                                                if (!searchQuery) {
                                                    setIsSearchExpanded(false);
                                                }
                                            }}
                                            className="w-full text-sm pl-10 pr-4 py-2 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                            autoFocus
                                        />
                                    </div>
                                )}
                            </motion.div>

                            {/* Property filter button */}
                            {/* <button
                                onClick={() => setModalOpen(true)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md border-[0.5px] transition-colors duration-300
                                    ${isPropertyFilter
                                        ? "bg-yellow-200 border-yellow-900 text-black"
                                        : "bg-white border-gray-300 text-gray-700"
                                    }`}
                            > */}
                            <motion.button
                                variants={filterButtonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => setModalOpen(true)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md border-[0.5px] transition-colors duration-300
                                    ${isPropertyFilter ? "bg-yellow-200 border-yellow-900" : "bg-white border-gray-300"}`}
                            >
                                <FiSettings
                                    className={`size-5 transition-colors duration-300 ${isPropertyFilter ? "text-black" : "text-gray-600"}`}
                                />
                                <span className={`text-sm font-medium transition-colors duration-300 ${isPropertyFilter ? "text-black" : "text-gray-700"}`}>
                                    Filters
                                </span>
                            </motion.button>
                            <PropertyFilter
                                modalOpen={modalOpen}
                                setModalOpen={setModalOpen}
                                activeSection={activeSection}
                                setActiveSection={setActiveSection}
                            />

                            {/* Project filter button */}
                            <button
                                onClick={() => setProjectModalOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                            >
                                <FiSettings className="text-gray-600 shrink-0" size={20} />
                                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                                    Project Filters
                                </span>
                            </button>
                            <ProjectFilter
                                modalOpen={projectModalOpen}
                                setModalOpen={setProjectModalOpen}
                                activeSection={activeSection}
                                setActiveSection={setActiveSection}
                            />

                            {/* Building filter button */}
                            <button
                                onClick={() => setBuildingModalOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 max-w-[180px] sm:max-w-none"
                            >
                                <FiSettings className="text-gray-600 shrink-0" size={20} />
                                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                                    Building Filters
                                </span>
                            </button>
                            <BuildingFilter
                                modalOpen={buildingModalOpen}
                                setModalOpen={setBuildingModalOpen}
                            />
                        </div>

                        <div className='flex gap-2 items-center'>
                            <ActiveFiltersDisplay />

                            {/* Type filter */}
                            <div className="relative">
                                <select
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}
                                    className="px-4 py-[5px] text-black bg-white border border-gray-300 rounded-md hover:bg-gray-50 appearance-none w-full pr-10 text-md"
                                >
                                    <option value="all">All Types</option>
                                    <option value="apartment">Apartments</option>
                                    <option value="house">Houses</option>
                                    <option value="office">Offices</option>
                                    <option value="residential">Buildings</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Sort filter */}
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="pl-4 pr-8 py-[5px] bg-white border border-gray-300 rounded-md hover:bg-gray-50 appearance-none whitespace-nowrap max-w-40"
                                >
                                    <option value="">Sort</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* View toggle button */}
                            {/* <button
                                onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
                                className="p-2 rounded-lg flex min-w-28 items-center gap-2 bg-blue-100 text-blue-600 hover:bg-gray-100"
                            > */}
                            <motion.button
                                variants={filterButtonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => handleViewChange(view === 'list' ? 'map' : 'list')}
                                className="p-2 rounded-lg flex min-w-28 items-center gap-2 bg-blue-100 text-blue-600 hover:bg-gray-100"
                            >
                                {view === 'list' ? <List size={20} /> : <Map size={20} />}
                                <span className='text-xs'>{view === 'list' ? 'List View' : 'Map View'}</span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Main content */}
                {/* {view === 'list' ? (
                    <ListingPage
                        properties={properties}
                        projects={projects}
                        buildings={buildings}
                        isLoading={isLoading}
                        onViewChange={handleViewChange}
                        sortBy={sortBy}
                        filterType={filterType}
                        searchQuery={searchQuery}
                    />
                ) : (
                    isScriptLoaded && (
                        <MapPage
                            onViewChange={handleViewChange}
                            center={center}
                            setCenter={setCenter}
                            properties={properties}
                            projects={projects}
                            buildings={buildings}
                            isLoading={isLoading}
                            setIsFilterVisible={setIsFilterVisible}
                        />
                    )
                )} */}
                <AnimatePresence mode="wait">
                    {view === 'list' ? (
                        <motion.div
                            key="list"
                            variants={pageTransition}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <ListingPage
                                properties={properties}
                                projects={projects}
                                buildings={buildings}
                                isLoading={isLoading}
                                onViewChange={handleViewChange}
                                sortBy={sortBy}
                                filterType={filterType}
                                searchQuery={searchQuery}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="map"
                            variants={pageTransition}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            {isScriptLoaded && (
                                <MapPage
                                    onViewChange={handleViewChange}
                                    center={center}
                                    setCenter={setCenter}
                                    properties={properties}
                                    projects={projects}
                                    buildings={buildings}
                                    isLoading={isLoading}
                                    setIsFilterVisible={setIsFilterVisible}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </LoadScript>
    );
};

export default MainPropertyPageOld;