// import React, { useState, useEffect } from 'react';
// import { LoadScript } from '@react-google-maps/api';
// import MapPage from './MapPage';
// import { useDispatch, useSelector } from 'react-redux';
// import ListingPage from '../components/ListingPage';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Map,
//     List,
//     Search,
// } from 'lucide-react';
// import { FiSettings } from 'react-icons/fi';
// import ActiveFiltersDisplay from '../components/ActiveFiltersDisplay';
// import { BuildingFilter, ProjectFilter, PropertyFilter } from '../components/DynamicFilterComponent';

// const MainPropertyPage = () => {
//     const dispatch = useDispatch();
//     // Add default value for appliedFilters
//     const { properties = [], projects = [], buildings = [], appliedFilters = { filterType: null }, isLoading = false }
//         = useSelector(state => state.map || {});

//     const [view, setView] = useState('list');
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

//     // section section
//       const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//       const [filterOptionsOpen, setFilterOptionsOpen] = useState(true);

//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     setCenter({
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     });
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

//     // Add a safe check for the filter type
//     const isPropertyFilter = appliedFilters?.filterType === "property";

//     // Animation variants
//     const pageTransition = {
//         initial: { opacity: 0, x: 20 },
//         animate: { opacity: 1, x: 0 },
//         exit: { opacity: 0, x: -20 }
//     };

//     const filterButtonVariants = {
//         hover: { scale: 1.05 },
//         tap: { scale: 0.95 }
//     };

//     const searchExpandVariants = {
//         collapsed: { width: 'auto' },
//         expanded: { width: '30rem' }
//     };


//     return (
//         <LoadScript
//             googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
//             onLoad={() => setIsScriptLoaded(true)}
//         >
//             {/* <div className="min-h-screen px-2 overflow-hidden">
//                 <div className='max-w-7xl mx-auto px-2 flex flex-col shadow-2xl rounded-md'> */}
//             <motion.div
//                 className="min-h-screen overflow-hidden"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 <motion.div
//                     className='max-w-7xl mx-auto px-2 flex flex-col shadow-2xl rounded-md'
//                     initial={{ y: -20 }}
//                     animate={{ y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                     <section className="bg-white border-b border-gray-100 py-2">
//                         <div className="testing mx-auto px-2">
//                             <div className="flex flex-wrap items-center gap-3">
//                                 <div className="relative w-1/3 md:w-1/4">
//                                     <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">🔍</i>
//                                     <input
//                                         type="text"
//                                         placeholder="Search properties..."
//                                         className="w-full py-3 pl-10 pr-3 border border-gray-100 rounded-md bg-gray-50"
//                                     />
//                                 </div>

//                                 <div className="relative">
//                                     <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
//                                         <option>All Types</option>
//                                         <option>Apartment</option>
//                                         <option>House</option>
//                                         <option>Commercial</option>
//                                     </select>
//                                     <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">▼</i>
//                                 </div>

//                                 <div className="relative">
//                                     <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
//                                         <option>Sort</option>
//                                         <option>Price: Low to High</option>
//                                         <option>Price: High to Low</option>
//                                         <option>Newest First</option>
//                                     </select>
//                                     <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">▼</i>
//                                 </div>

//                                 {/* Advanced Filter Button */}
//                                 <button
//                                     className="flex items-center gap-2 py-3 px-4 bg-gray-50 border border-gray-100 rounded-md font-medium transition hover:bg-gray-100"
//                                     onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//                                 >
//                                     <i className="text-gray-600">⊞</i>
//                                     Advanced Filters
//                                 </button>

//                                 <div className="flex items-center gap-3 text-gray-600 ml-auto">
//                                     <button className="p-1 text-red-600">
//                                         <i>⊞</i>
//                                     </button>
//                                     <button className="p-1">
//                                         <i>≡</i>
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Advanced Filter Panel */}
//                             {advancedFilterOpen && (
//                                 <div className="mt-2 bg-white rounded-lg shadow-md overflow-hidden transition-all">
//                                     <div
//                                         className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer"
//                                         onClick={() => setFilterOptionsOpen(!filterOptionsOpen)}
//                                     >
//                                         <h3 className="text-base font-semibold flex items-center gap-2">
//                                             <i>⊞</i>
//                                             Advanced Filters
//                                         </h3>
//                                         <i className={`transition-transform ${filterOptionsOpen ? 'rotate-180' : ''}`}>▼</i>
//                                     </div>

//                                     {filterOptionsOpen && (
//                                         <>
//                                             <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                                                 {/* Property Type Filter */}
//                                                 <div>
//                                                     <h4 className="text-sm text-gray-600 mb-3">Property Type</h4>
//                                                     <div className="space-y-2">
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="property_type" value="apartment" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">Apartment</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="property_type" value="house" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">House</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="property_type" value="villa" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">Villa</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="property_type" value="commercial" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">Commercial</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="property_type" value="land" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">Land</span>
//                                                         </label>
//                                                     </div>
//                                                 </div>

//                                                 {/* Transaction Type Filter */}
//                                                 <div>
//                                                     <h4 className="text-sm text-gray-600 mb-3">Transaction Type</h4>
//                                                     <div className="space-y-2">
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="radio" name="transaction_type" value="buy" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">Buy</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="radio" name="transaction_type" value="rent" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">Rent</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="radio" name="transaction_type" value="lease" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">Lease</span>
//                                                         </label>
//                                                     </div>
//                                                 </div>

//                                                 {/* Bedrooms Filter */}
//                                                 <div>
//                                                     <h4 className="text-sm text-gray-600 mb-3">Bedrooms</h4>
//                                                     <div className="space-y-2">
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="bedrooms" value="1" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">1 BHK</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="bedrooms" value="2" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">2 BHK</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="bedrooms" value="3" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">3 BHK</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="bedrooms" value="4" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">4 BHK</span>
//                                                         </label>
//                                                         <label className="flex items-center gap-2 cursor-pointer">
//                                                             <input type="checkbox" name="bedrooms" value="5+" className="accent-red-600 w-4 h-4" />
//                                                             <span className="text-sm">5+ BHK</span>
//                                                         </label>
//                                                     </div>
//                                                 </div>

//                                                 {/* Price Range Filter */}
//                                                 <div>
//                                                     <h4 className="text-sm text-gray-600 mb-3">Price Range (INR)</h4>
//                                                     <div className="mt-4">
//                                                         <input
//                                                             type="range"
//                                                             min="1000000"
//                                                             max="50000000"
//                                                             step="500000"
//                                                             defaultValue="10000000"
//                                                             className="w-full h-1 bg-gray-100 rounded-full appearance-none cursor-pointer"
//                                                         />
//                                                         <div className="flex gap-2 items-center mt-3">
//                                                             <input
//                                                                 type="text"
//                                                                 placeholder="Min"
//                                                                 defaultValue="10 Lakh"
//                                                                 className="w-full px-2 py-2 text-sm border border-gray-100 rounded"
//                                                             />
//                                                             <span>to</span>
//                                                             <input
//                                                                 type="text"
//                                                                 placeholder="Max"
//                                                                 defaultValue="5 Crore"
//                                                                 className="w-full px-2 py-2 text-sm border border-gray-100 rounded"
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
//                                                 <button className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
//                                                     Reset Filters
//                                                 </button>
//                                                 <button className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
//                                                     Apply Filters
//                                                 </button>
//                                             </div>
//                                         </>
//                                     )}
//                                 </div>
//                             )}

//                             {/* Applied Filters Tags */}
//                             <div className="flex flex-wrap gap-2 mt-2">
//                                 {["Apartment", "Buy", "3 BHK", "Arya Nagar", "₹50L - ₹3Cr"].map((tag, index) => (
//                                     <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm">
//                                         <span>{tag}</span>
//                                         <i className="text-gray-600 cursor-pointer hover:text-red-600">✕</i>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </section>
//                 </motion.div>

//                 {/* Main content */}
//                 {/* {view === 'list' ? (
//                     <ListingPage
//                         properties={properties}
//                         projects={projects}
//                         buildings={buildings}
//                         isLoading={isLoading}
//                         onViewChange={handleViewChange}
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
//                             properties={properties}
//                             projects={projects}
//                             buildings={buildings}
//                             isLoading={isLoading}
//                             setIsFilterVisible={setIsFilterVisible}
//                         />
//                     )
//                 )} */}
//                 <AnimatePresence mode="wait">
//                     {view === 'list' ? (
//                         <motion.div
//                             key="list"
//                             variants={pageTransition}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                             transition={{ duration: 0.3 }}
//                         >
//                             <ListingPage
//                                 properties={properties}
//                                 projects={projects}
//                                 buildings={buildings}
//                                 isLoading={isLoading}
//                                 onViewChange={handleViewChange}
//                                 sortBy={sortBy}
//                                 filterType={filterType}
//                                 searchQuery={searchQuery}
//                             />
//                         </motion.div>
//                     ) : (
//                         <motion.div
//                             key="map"
//                             variants={pageTransition}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                             transition={{ duration: 0.3 }}
//                         >
//                             {isScriptLoaded && (
//                                 <MapPage
//                                     onViewChange={handleViewChange}
//                                     center={center}
//                                     setCenter={setCenter}
//                                     properties={properties}
//                                     projects={projects}
//                                     buildings={buildings}
//                                     isLoading={isLoading}
//                                     setIsFilterVisible={setIsFilterVisible}
//                                 />
//                             )}
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.div>
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
import SearchSection from '../components/SearchSection';
import { getWishlist } from '../redux/features/Wishlist/wishlistSlice';

const MainPropertyPage = () => {
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

    // section section
    const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
    const [filterOptionsOpen, setFilterOptionsOpen] = useState(true);

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

    useEffect(() => {
        dispatch(getWishlist())
      }, []);


    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            onLoad={() => setIsScriptLoaded(true)}
        >
            {/* <div className="min-h-screen px-2 overflow-hidden">
                <div className='max-w-7xl mx-auto px-2 flex flex-col shadow-2xl rounded-md'> */}
            <motion.div
                className="min-h-screen overflow-hidden"
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
                    <SearchSection handleViewChange={handleViewChange} view={view} setSearchQuery={setSearchQuery} setFilterType={setFilterType} setSortBy={setSortBy} />
                </motion.div>

                {/* Main content */}
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

export default MainPropertyPage;