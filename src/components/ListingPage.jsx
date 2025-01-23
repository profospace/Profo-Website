// import React, { useState } from 'react';
// import {
//     Map,
//     List,
//     Building,
//     Home,
//     MapPin,
//     Bath,
//     Bed,
//     Grid,
//     IndianRupee,
//     Users,
//     CalendarClock,
//     ArrowUpDown,
//     Search,
//     SlidersHorizontal
// } from 'lucide-react';
// const ListingPage = ({ properties = [], projects = [], isLoading = false, onViewChange }) => {
//     const [viewType, setViewType] = useState('list');
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [selectedProject, setSelectedProject] = useState(null);
//     const [sortBy, setSortBy] = useState('price-low');
//     const [filterType, setFilterType] = useState('all');
//     const [searchQuery, setSearchQuery] = useState('');
//     const formatPrice = (price) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumSignificantDigits: 3,
//         }).format(price);
//     };
//     // Filter and sort items
//     const filteredItems = [...(properties || []), ...(projects || [])]
//         .filter(item => {
//             const matchesSearch = searchQuery === '' ||
//                 (item?.post_title || item?.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 (item?.address || item?.location?.address || '').toLowerCase().includes(searchQuery.toLowerCase());

//             const matchesType = filterType === 'all' ||
//                 (item?.type_name?.toLowerCase() === filterType) ||
//                 (item?.type?.toLowerCase() === filterType);

//             return matchesSearch && matchesType;
//         })
//         .sort((a, b) => {
//             const priceA = a.price || a.overview?.priceRange?.min || 0;
//             const priceB = b.price || b.overview?.priceRange?.min || 0;

//             switch (sortBy) {
//                 case 'price-low':
//                     return priceA - priceB;
//                 case 'price-high':
//                     return priceB - priceA;
//                 default:
//                     return 0;
//             }
//         });
//     const PropertyCard = ({ item }) => {
//         const isProject = 'overview' in item;
//         const getPropertyIcon = (type) => {
//             switch (type?.toLowerCase()) {
//                 case 'apartment':
//                     return <Building size={14} className="text-blue-500" />;
//                 case 'house':
//                     return <Home size={14} className="text-green-500" />;
//                 case 'office':
//                     return <Building size={14} className="text-purple-500" />;
//                 default:
//                     return <MapPin size={14} className="text-red-500" />;
//             }
//         };
//         return (
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 {/* Image */}
//                 <div className="aspect-video bg-gray-200 relative">
//                     {item?.galleryList?.[0] || (isProject && item?.floorPlans?.[0]?.image) ? (
//                         <img
//                             src={item?.galleryList?.[0] || item?.floorPlans[0].image}
//                             alt={item?.post_title || item?.name}
//                             className="w-full h-full object-cover"
//                         />
//                     ) : (
//                         <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                             <Building size={40} className="text-gray-400" />
//                         </div>
//                     )}
//                     <div className="absolute top-2 left-2">
//                         <div className="px-2 py-1 bg-white/90 rounded-full text-sm font-medium flex items-center gap-1">
//                             {isProject ? (
//                                 <>
//                                     <MapPin size={14} className="text-red-500" />
//                                     <span>Project</span>
//                                 </>
//                             ) : (
//                                 <>
//                                     {getPropertyIcon(item?.type_name)}
//                                     <span>{item?.type_name}</span>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 {/* Rest of the component remains the same */}
//                 <div className="p-4 space-y-4">
//                     <div>
//                         <h3 className="font-semibold text-lg">
//                             {item?.post_title || item?.name}
//                         </h3>
//                         <p className="text-gray-600 text-sm mt-1">
//                             {item?.address || item?.location?.address}
//                         </p>
//                     </div>
//                     {isProject ? (
//                         <>
//                             <div className="flex justify-between items-center">
//                                 <div className="space-y-1">
//                                     <div className="text-sm text-gray-600">Price Range</div>
//                                     <div className="font-semibold flex items-center gap-1">
//                                         <IndianRupee size={14} />
//                                         {formatPrice(item.overview.priceRange.min)} - {formatPrice(item.overview.priceRange.max)}
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2 text-gray-600">
//                                     <Users size={18} />
//                                     <span>{item?.overview.totalUnits} Units</span>
//                                 </div>
//                             </div>
//                             <div className="pt-2 border-t">
//                                 <div className="flex gap-2 flex-wrap">
//                                     {item?.floorPlans.slice(0, 3).map((plan, idx) => (
//                                         <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
//                                             {plan.name}
//                                         </span>
//                                     ))}
//                                     {item?.floorPlans.length > 3 && (
//                                         <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
//                                             +{item?.floorPlans.length - 3} more
//                                         </span>
//                                     )}
//                                 </div>
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <div className="flex justify-between items-center">
//                                 <div className="font-semibold text-lg flex items-center gap-1 text-blue-600">
//                                     <IndianRupee size={16} />
//                                     {formatPrice(item.price)}
//                                 </div>
//                                 <div className="flex items-center gap-4 text-gray-600">
//                                     <div className="flex items-center gap-1">
//                                         <Bed size={18} />
//                                         <span>{item?.bedrooms}</span>
//                                     </div>
//                                     <div className="flex items-center gap-1">
//                                         <Bath size={18} />
//                                         <span>{item?.bathrooms}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-2 pt-2 border-t">
//                                 <Grid size={18} className="text-gray-500" />
//                                 <span>{item?.carpetArea} sq.ft</span>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         );
//     };
//     const handleViewChange = (newView) => {
//         setViewType(newView);
//         if (onViewChange) {
//             onViewChange(newView);
//         }
//     };
//     return (
//         <div className="min-h-screen bg-gray-100 p-4">
//             {/* Header with View Toggle */}
//             <div className="max-w-7xl mx-auto mb-6">
//                 <div className="flex justify-between items-center">
//                     <h1 className="text-2xl font-semibold">Properties & Projects</h1>
//                     <div className="flex items-center gap-2">
//                         <button
//                             onClick={() => handleViewChange('list')}
//                             className={`p-2 rounded-lg ${viewType === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//                         >
//                             <List size={20} />
//                         </button>
//                         <button
//                             onClick={() => handleViewChange('map')}
//                             className={`p-2 rounded-lg ${viewType === 'map' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//                         >
//                             <Map size={20} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {/* Filters and Search */}
//             <div className="max-w-7xl mx-auto mb-6">
//                 <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
//                     <div className="flex gap-4">
//                         {/* Search */}
//                         <div className="flex-1 relative">
//                             <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Search by name or address..."
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         {/* Type Filter */}
//                         <select
//                             value={filterType}
//                             onChange={(e) => setFilterType(e.target.value)}
//                             className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
//                         >
//                             <option value="all">All Types</option>
//                             <option value="apartment">Apartments</option>
//                             <option value="house">Houses</option>
//                             <option value="office">Offices</option>
//                             <option value="residential">Projects</option>
//                         </select>
//                         {/* Sort */}
//                         <select
//                             value={sortBy}
//                             onChange={(e) => setSortBy(e.target.value)}
//                             className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
//                         >
//                             <option value="price-low">Price: Low to High</option>
//                             <option value="price-high">Price: High to Low</option>
//                         </select>
//                     </div>
//                     {/* Active Filters */}
//                     <div className="flex items-center gap-2 text-sm">
//                         <SlidersHorizontal size={16} className="text-gray-400" />
//                         <span className="text-gray-600">Active filters:</span>
//                         {filterType !== 'all' && (
//                             <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
//                                 {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
//                             </span>
//                         )}
//                         {searchQuery && (
//                             <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
//                                 Search: "{searchQuery}"
//                             </span>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             {/* Grid View */}
//             {viewType === 'list' && (
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {filteredItems.map((item) => (
//                             <PropertyCard
//                                 key={item?._id}
//                                 item={item}
//                             />
//                         ))}
//                     </div>
//                     {filteredItems?.length === 0 && !isLoading && (
//                         <div className="text-center py-12">
//                             <div className="text-gray-400 mb-2">
//                                 <Building size={48} className="mx-auto" />
//                             </div>
//                             <h3 className="text-lg font-medium text-gray-900">No items found</h3>
//                             <p className="text-gray-600">
//                                 Try adjusting your filters or search query
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             )}
//             {/* Map View Container */}
//             {viewType === 'map' && (
//                 <div className="h-[calc(100vh-280px)]">
//                     {/* Map component will be rendered here by parent */}
//                 </div>
//             )}
//         </div>
//     );
// };
// export default ListingPage;


import React, { useState } from 'react';
import {
    Map,
    List,
    Building,
    Home,
    MapPin,
    Bath,
    Bed,
    Grid,
    IndianRupee,
    Users,
    CalendarClock,
    ArrowUpDown,
    Search, 
    SlidersHorizontal,
    Heart
} from 'lucide-react';
import { FaFilter } from 'react-icons/fa';

const ListingPage = ({ properties = [], projects = [], buildings = [], isLoading = false, onViewChange, sortBy, filterType, searchQuery }) => {
    const [viewType, setViewType] = useState('list');
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumSignificantDigits: 3,
        }).format(price);
    };

    // Filter and sort items
    const filteredItems = [...(properties || []), ...(projects || []), ...(buildings || [])]
        .filter(item => {
            const matchesSearch = searchQuery === '' ||
                (item?.post_title || item?.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item?.address || item?.location?.address || item?.frontRoad || '').toLowerCase().includes(searchQuery.toLowerCase());

            const matchesType = filterType === 'all' ||
                (item?.type_name?.toLowerCase() === filterType) ||
                (item?.type?.toLowerCase() === filterType);

            return matchesSearch && matchesType;
        })
        .sort((a, b) => {
            // Handle sorting for buildings differently since they don't have direct price
            const isBuilding = (item) => 'buildingId' in item;

            // For buildings, we'll sort by total available flats as a proxy for "price"
            const getPriceEquivalent = (item) => {
                if (isBuilding(item)) {
                    return parseInt(item.numberOfFlatsAvailable || 0);
                }
                return item.price || item.overview?.priceRange?.min || 0;
            };

            const valueA = getPriceEquivalent(a);
            const valueB = getPriceEquivalent(b);

            switch (sortBy) {
                case 'price-low':
                    return valueA - valueB;
                case 'price-high':
                    return valueB - valueA;
                default:
                    return 0;
            }
        });

    const PropertyCard = ({ item }) => {
        const isProject = 'overview' in item;

        const getPropertyIcon = (type) => {
            switch (type?.toLowerCase()) {
                case 'apartment':
                    return <Building size={16} className="text-blue-500" />;
                case 'house':
                    return <Home size={16} className="text-green-500" />;
                case 'office':
                    return <Building size={16} className="text-purple-500" />;
                case 'residential':
                    return <Building size={16} className="text-orange-500" />;
                default:
                    return <MapPin size={16} className="text-red-500" />;
            }
        };

        return (
            <div className="bg-white overflow-hidden transition-all duration-300  transform hover:-translate-y-2 max-w-sm w-full mx-auto">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Property Image */}
                    {item?.galleryList?.[0] || (isProject && item?.floorPlans?.[0]?.image) ? (
                        <img
                            src={item?.galleryList?.[0] || item?.floorPlans[0].image}
                            alt={item?.post_title || item?.name}
                            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <Building size={48} className="text-gray-400" />
                        </div>
                    )}

                    {/* Top Left Badge */}
                    <div className="absolute top-3 left-4">
                        <div className="flex items-center bg-white/90 rounded-full px-3 py-1 shadow-md">
                            {isProject ? (
                                <>
                                    <MapPin size={16} className="text-red-500 mr-2" />
                                    <span className="text-sm font-medium text-gray-800">Project</span>
                                </>
                            ) : (
                                <>
                                    {getPropertyIcon(item?.type_name)}
                                    <span className="text-sm font-medium text-gray-800 ml-2">{item?.type_name}</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Bottom Left BHK Badge */}
                    <div className="absolute bottom-2 left-4">
                        <div className=" bg-white/90 rounded-full px-3 py-1 shadow-md text-xs font-semibold">
                            {item?.bedrooms} BHK
                        </div>
                    </div>

                    {/* Favorite Button */}
                    <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white hover:shadow-lg transition-all">
                        <Heart
                            size={20}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                        />
                    </button>
                </div>

                {/* Content Section */}
                <div className="py-2 px-1">
                    {/* Price */}
                    <div className="flex items-baseline justify-between gap-2">
                        <div>
                            <span className="text-xl font-bold text-gray-900">
                                {item?.price} {" "}
                            </span>

                            <span className="text-md text-gray-600 font-medium">
                                {item?.priceUnit}
                            </span>
                        </div>

                        {/* Area */}
                        <div className="flex items-center space-x-1">
                            <span className="text-sm font-medium text-gray-800">
                                {item?.area}
                            </span>
                            <span className="text-xs text-gray-500">
                                {item?.areaUnit || "sqft"}
                            </span>
                        </div>

                    </div>

                    {/* Property Title */}
                    <h3 className="text-md font-semibold text-gray-800 truncate">
                        {item?.post_title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 space-x-2 mb-2">
                        <MapPin size={16} />
                        <span className="text-sm truncate max-w-[200px]">
                            {(() => {
                                const address = item?.address || item?.location?.address;
                                const maxWords = 4;
                                if (address) {
                                    const words = address.split(' ');
                                    return words.length > maxWords
                                        ? `${words.slice(0, maxWords).join(' ')}...`
                                        : address;
                                }
                                return "No Address Available";
                            })()}
                        </span>
                    </div>

                    {/* Property Details */}
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        
                        {/* Amenities */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-700">Amenities</span>
                            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                                {item?.amenities?.length}+
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const handleViewChange = (newView) => {
        setViewType(newView);
        if (onViewChange) {
            onViewChange(newView);
        }
    };


    function getHeading(properties, projects) {
        if (properties.length > 0) {
            const typeNames = properties.map((property) => property.type_name);
            const uniqueTypeNames = [...new Set(typeNames)];

            // If all type_name are the same, return that type_name; otherwise, return "Properties".
            return uniqueTypeNames.length === 1 ? uniqueTypeNames[0] : "Properties";
        } else if (projects.length > 0) {
            return "Projects";
        } else {
            return "Buildings";
        }
    }

    return (
        <div className="min-h-screen bg-white p-4">
            
            {/* Grid View */}
            {viewType === 'list' && (
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredItems.map((item) => (
                            <PropertyCard
                                key={item?._id}
                                item={item}
                            />
                        ))}
                    </div>
                    {filteredItems?.length === 0 && !isLoading && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-2">
                                <Building size={48} className="mx-auto" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No items found</h3>
                            <p className="text-gray-600">
                                Try adjusting your filters or search query
                            </p>
                        </div>
                    )}
                </div>
            )}
            {/* Map View Container */}
            {viewType === 'map' && (
                <div className="h-[calc(100vh-280px)]">
                    {/* Map component will be rendered here by parent */}
                </div>
            )}
        </div>
    );
};
export default ListingPage;