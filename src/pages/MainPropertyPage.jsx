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

import React, { useState, useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';
import MapPage from './MapPage';
import { getMapFeed } from '../redux/features/Map/mapSlice';
import { useDispatch, useSelector } from 'react-redux';
import ListingPage from '../components/ListingPage';
import {
    Map,
    List,
    Building,
    Search,
    SlidersHorizontal,
} from 'lucide-react';
import { FaFilterCircleDollar } from 'react-icons/fa6';
import { FiSettings } from 'react-icons/fi';
import FilterComponent from '../components/FilterComponent';

const MainPropertyPage = () => {
    const dispatch = useDispatch();
    const { properties, projects, buildings, isLoading } = useSelector(state => state.map);

    const [view, setView] = useState('list'); // list / map view
    const [center, setCenter] = useState(null);
    const [radius, setRadius] = useState(1);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    // State for filters and search
    const [sortBy, setSortBy] = useState('price-low');
    const [filterType, setFilterType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);


    // filter button popup
    const [modalOpen, setModalOpen] = useState(false);
      const [activeSection, setActiveSection] = useState('');

    // Get initial location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setCenter(currentLocation);
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

    function getHeading(properties, projects) {
        if (properties.length > 0) {
            const typeNames = properties.map((property) => property.type_name);
            const uniqueTypeNames = [...new Set(typeNames)];
            return uniqueTypeNames.length === 1 ? uniqueTypeNames[0] : "Properties";
        } else if (projects.length > 0) {
            return "Projects";
        } else {
            return "Buildings";
        }
    }

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            onLoad={() => setIsScriptLoaded(true)}
        >
            <div className="min-h-screen bg-white p-2">
                <div className='max-w-7xl mx-auto px-2 flex flex-col gap-2'>
                    {/* Header with View Toggle */}
                    <div className="">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold">
                                Properties
                            </h1>

                            <div className='flex items-center gap-4'>
                                <div className="flex items-center gap-2 text-sm">
                                    <SlidersHorizontal size={16} className="text-gray-400" />
                                    <span className="text-gray-600">Active filters:</span>
                                    {filterType !== 'all' && (
                                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl">
                                            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                                        </span>
                                    )}
                                    {searchQuery && (
                                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl">
                                            Search: "{searchQuery}"
                                        </span>
                                    )}
                                </div>

                                <button
                                    onClick={() => setIsFilterVisible(!isFilterVisible)}
                                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl"
                                >
                                    Filter
                                </button>

                                <div className='flex gap-2 items-center'>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap"
                                    >
                                        <option value="price-low">Price/Units: Low to High</option>
                                        <option value="price-high">Price/Units: High to Low</option>
                                    </select>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleViewChange('list')}
                                            className={`p-2 rounded-lg ${view === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                                        >
                                            <List size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleViewChange('map')}
                                            className={`p-2 rounded-lg ${view === 'map' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                                        >
                                            <Map size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters and Search Section - Conditionally Rendered */}
                    {isFilterVisible && (
                        <div className="bg-white space-y-4 ">
                            <div className="w-full  ">
                                <div className="relative w-full ">
                                    <div className="flex items-center gap-3 transition-all duration-300 ease-in-out">
                                        <div className={`transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-1/3' : 'w-auto'}`}>
                                            {!isSearchExpanded ? (
                                                <button
                                                    onClick={() => setIsSearchExpanded(true)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
                                                >
                                                    <Search size={16} />
                                                    <span>Easy search</span>
                                                </button>
                                            ) : (
                                                <div className="relative w-full">
                                                    <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
                                                        className="w-full pl-10 pr-4 py-2 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-700"
                                                        autoFocus
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* <button className="flex items-center gap-2 px-2 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
                                            <FaFilterCircleDollar />
                                            <span>Filters</span>
                                        </button> */}
                                        <button
                                            onClick={() => setModalOpen(true)}
                                            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                                        >
                                            <FiSettings className="text-gray-600" size={20} />
                                            <span className="text-sm font-medium text-gray-700">Filters</span>
                                        </button>

                                        {/* Filter Component Modal */}
                                        <FilterComponent
                                            modalOpen={modalOpen}
                                            setModalOpen={setModalOpen}
                                            activeSection={activeSection}
                                            setActiveSection={setActiveSection}
                                        />



                                        <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-xl">
                                            <button className="px-2">Beds</button>
                                            <button className="px-2 bg-white border border-none hover:text-red-400">1</button>
                                            <button className="px-2 bg-white border border-none hover:text-red-400">2</button>
                                            <button className="px-2 bg-white border border-none hover:text-red-400">3</button>
                                            <button className="px-2 bg-white border border-none hover:text-red-400">4+</button>
                                        </div>

                                        <div className={`flex items-center gap-3 transition-all duration-300 ease-in-out overflow-hidden ${isSearchExpanded
                                            ? 'w-0 opacity-0 invisible'
                                            : 'w-auto opacity-100 visible'
                                            }`}>
                                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                                                Price Range
                                            </button>
                                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                                                Bathroom
                                            </button>
                                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                                                Floor
                                            </button>
                                        </div>

                                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                                            Purpose
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
                                            Amenities
                                        </button>
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
                        </div>
                    )}
                </div>

                {view === 'list' ? (
                    <ListingPage
                        properties={properties || []}
                        projects={projects || []}
                        buildings={buildings || []}
                        isLoading={isLoading}
                        onViewChange={handleViewChange}
                        // Pass down filter states if needed
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
                            radius={radius}
                            setRadius={setRadius}
                            properties={properties || []}
                            projects={projects || []}
                            buildings={buildings || []}
                            isLoading={isLoading}
                        />
                    )
                )}
            </div>
        </LoadScript>

        //         <div className="min-h-screen bg-white p-2 relative">
        //     <LoadScript
        //         googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        //         onLoad={() => setIsScriptLoaded(true)}
        //     >
        //         {/* Absolute positioned header and filter section */}
        //         <div className="absolute top-0 left-0 right-0 z-10 p-2">
        //             <div className='max-w-7xl mx-auto px-2'>
        //                 {/* Header with View Toggle - Now with glassmorphism effect */}
        //                 <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm mb-2">
        //                     <div className="flex justify-between items-center p-3">
        //                         <h1 className="text-2xl font-semibold">
        //                             {getHeading(properties, projects)}
        //                         </h1>

        //                         <div className='flex gap-2 items-center'>
        //                             <select
        //                                 value={sortBy}
        //                                 onChange={(e) => setSortBy(e.target.value)}
        //                                 className="px-4 py-2 bg-white/80 border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap"
        //                             >
        //                                 <option value="price-low">Price/Units: Low to High</option>
        //                                 <option value="price-high">Price/Units: High to Low</option>
        //                             </select>
        //                             <div className="flex items-center gap-2">
        //                                 <button
        //                                     onClick={() => handleViewChange('list')}
        //                                     className={`p-2 rounded-lg ${view === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        //                                 >
        //                                     <List size={20} />
        //                                 </button>
        //                                 <button
        //                                     onClick={() => handleViewChange('map')}
        //                                     className={`p-2 rounded-lg ${view === 'map' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        //                                 >
        //                                     <Map size={20} />
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 {/* Filters Section - Also with glassmorphism */}
        //                 <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm">
        //                     <div className="p-3 space-y-4">
        //                         <div className="w-full">
        //                             <div className="relative w-full">
        //                                     {/* Rest of the filter UI remains the same as in the original code */}
        //                                     {/* ... (previous filter code) ... */}
        //                                     <div className="flex items-center gap-3 transition-all duration-300 ease-in-out">
        //                                                              <div className={`transition-all duration-300 ease-in-out ${isSearchExpanded ? 'w-1/3' : 'w-auto'}`}>
        //                                                                  {!isSearchExpanded ? (
        //                                                                      <button
        //                                                                          onClick={() => setIsSearchExpanded(true)}
        //                                                                          className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
        //                                                                      >
        //                                                                          <Search size={16} />
        //                                                                          <span>Easy search</span>
        //                                                                      </button>
        //                                                                  ) : (
        //                                                                      <div className="relative w-full">
        //                                                                          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        //                                                                          <input
        //                                                                              type="text"
        //                                                                              placeholder="Search by name or address..."
        //                                                                              value={searchQuery}
        //                                                                              onChange={(e) => setSearchQuery(e.target.value)}
        //                                                                              onBlur={() => {
        //                                                                                  if (!searchQuery) {
        //                                                                                      setIsSearchExpanded(false);
        //                                                                                  }
        //                                                                              }}
        //                                                                              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-700"
        //                                                                              autoFocus
        //                                                                          />
        //                                                                      </div>
        //                                                                  )}
        //                                                              </div>

        //                                                              <button className="flex items-center gap-2 px-2 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
        //                                                                  <FaFilterCircleDollar />
        //                                                                  <span>Filters</span>
        //                                                              </button>

        //                                                              <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-xl">
        //                                                                  <button className="px-2">Beds</button>
        //                                                                  <button className="px-2 bg-white border border-none hover:text-red-400">1</button>
        //                                                                  <button className="px-2 bg-white border border-none hover:text-red-400">2</button>
        //                                                                  <button className="px-2 bg-white border border-none hover:text-red-400">3</button>
        //                                                                  <button className="px-2 bg-white border border-none hover:text-red-400">4+</button>
        //                                                              </div>

        //                                                              <div className={`flex items-center gap-3 transition-all duration-300 ease-in-out overflow-hidden ${isSearchExpanded
        //                                                                  ? 'w-0 opacity-0 invisible'
        //                                                                  : 'w-auto opacity-100 visible'
        //                                                                  }`}>
        //                                                                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
        //                                                                      Price Range
        //                                                                  </button>
        //                                                                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
        //                                                                      Bathroom
        //                                                                  </button>
        //                                                                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
        //                                                                      Floor
        //                                                                  </button>
        //                                                              </div>

        //                                                              <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
        //                                                                  Purpose
        //                                                              </button>
        //                                                              <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 whitespace-nowrap">
        //                                                                  Amenities
        //                                                              </button>
        //                                                              <select
        //                                                                  value={filterType}
        //                                                                  onChange={(e) => setFilterType(e.target.value)}
        //                                                                  className="px-4 py-2 text-black bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
        //                                                              >
        //                                                                  <option value="all">All Types</option>
        //                                                                  <option value="apartment">Apartments</option>
        //                                                                  <option value="house">Houses</option>
        //                                                                  <option value="office">Offices</option>
        //                                                                  <option value="residential">Buildings</option>
        //                                                              </select>

        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="flex items-center gap-2 text-sm">
        //                             <SlidersHorizontal size={16} className="text-gray-400" />
        //                             <span className="text-gray-600">Active filters:</span>
        //                             {/* Active filters display remains the same */}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* MapPage content - now with top padding to accommodate the overlay */}
        //         {isScriptLoaded && (
        //             <MapPage
        //                 className="" // Adjust this value based on your header and filter heights
        //                 onViewChange={handleViewChange}
        //                 center={center}
        //                 setCenter={setCenter}
        //                 radius={radius}
        //                 setRadius={setRadius}
        //                 properties={properties || []}
        //                 projects={projects || []}
        //                 buildings={buildings || []}
        //                 isLoading={isLoading}
        //             />
        //         )}
        //     </LoadScript>
        // </div>
    );
};

export default MainPropertyPage;