// // import React from 'react';
// // import { X, SlidersHorizontal } from 'lucide-react';

// // const ActiveFiltersDisplay = ({ appliedFilters, onRemoveFilter }) => {
// //     const formatValue = (key, value) => {
// //         if (key === 'priceMin' || key === 'priceMax') {
// //             return `$${parseInt(value).toLocaleString()}`;
// //         }
// //         if (key.includes('area')) {
// //             return `${parseInt(value)} sq ft`;
// //         }
// //         return value;
// //     };

// //     const renderFilterPills = () => {
// //         const pills = [];

// //         Object.entries(appliedFilters).forEach(([key, value]) => {
// //             if (!value || (Array.isArray(value) && value.length === 0)) return;

// //             if (Array.isArray(value)) {
// //                 // Handle array values (like type_name, purpose, propertyAmenities)
// //                 value.forEach((item) => {
// //                     pills.push(
// //                         <div
// //                             key={`${key}-${item}`}
// //                             className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1"
// //                         >
// //                             <span>{`${key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}: ${item}`}</span>
// //                             <button
// //                                 onClick={() => onRemoveFilter(key, item)}
// //                                 className="hover:bg-blue-200 rounded-full p-0.5"
// //                             >
// //                                 <X size={14} />
// //                             </button>
// //                         </div>
// //                     );
// //                 });
// //             } else {
// //                 // Handle single values
// //                 if (key === 'available') return; // Skip boolean filters if needed

// //                 const label = key.replace(/([A-Z])/g, ' $1')
// //                     .split('_')
// //                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //                     .join(' ');

// //                 const displayValue = formatValue(key, value);

// //                 pills.push(
// //                     <div
// //                         key={key}
// //                         className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1"
// //                     >
// //                         <span>{`${label}: ${displayValue}`}</span>
// //                         <button
// //                             onClick={() => onRemoveFilter(key)}
// //                             className="hover:bg-blue-200 rounded-full p-0.5"
// //                         >
// //                             <X size={14} />
// //                         </button>
// //                     </div>
// //                 );
// //             }
// //         });

// //         return pills;
// //     };

// //     return (
// //         <div className="flex flex-wrap items-center gap-2 text-sm">
// //             <SlidersHorizontal size={16} className="text-gray-400" />
// //             <span className="text-gray-600">Active filters:</span>
// //             {renderFilterPills()}
// //         </div>
// //     );
// // };

// // export default ActiveFiltersDisplay;

// // import React, { useRef } from 'react';
// // import { X, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

// // const ActiveFiltersDisplay = ({ appliedFilters, onRemoveFilter }) => {
// //     const scrollContainerRef = useRef(null);

// //     const formatValue = (key, value) => {
// //         if (key === 'priceMin' || key === 'priceMax') {
// //             return `$${parseInt(value).toLocaleString()}`;
// //         }
// //         if (key.includes('area')) {
// //             return `${parseInt(value)} sq ft`;
// //         }
// //         return value;
// //     };

// //     const scrollLeft = () => {
// //         if (scrollContainerRef.current) {
// //             scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
// //         }
// //     };

// //     const scrollRight = () => {
// //         if (scrollContainerRef.current) {
// //             scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
// //         }
// //     };

// //     const renderFilterPills = () => {
// //         const pills = [];

// //         Object.entries(appliedFilters).forEach(([key, value]) => {
// //             if (!value || (Array.isArray(value) && value.length === 0)) return;

// //             if (Array.isArray(value)) {
// //                 // Handle array values (like type_name, purpose, propertyAmenities)
// //                 value.forEach((item) => {
// //                     pills.push(
// //                         <div
// //                             key={`${key}-${item}`}
// //                             className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
// //                         >
// //                             <span>{`${key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}: ${item}`}</span>
// //                             <button
// //                                 onClick={() => onRemoveFilter(key, item)}
// //                                 className="hover:bg-blue-200 rounded-full p-0.5"
// //                             >
// //                                 <X size={14} />
// //                             </button>
// //                         </div>
// //                     );
// //                 });
// //             } else {
// //                 // Handle single values
// //                 if (key === 'available') return; // Skip boolean filters if needed

// //                 const label = key.replace(/([A-Z])/g, ' $1')
// //                     .split('_')
// //                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //                     .join(' ');

// //                 const displayValue = formatValue(key, value);

// //                 pills.push(
// //                     <div
// //                         key={key}
// //                         className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
// //                     >
// //                         <span>{`${label}: ${displayValue}`}</span>
// //                         <button
// //                             onClick={() => onRemoveFilter(key)}
// //                             className="hover:bg-blue-200 rounded-full p-0.5"
// //                         >
// //                             <X size={14} />
// //                         </button>
// //                     </div>
// //                 );
// //             }
// //         });

// //         return pills;
// //     };

// //     return (
// //         <div className="flex items-center gap-2 text-sm">
// //             <SlidersHorizontal size={16} className="text-gray-400" />
// //             <span className="text-gray-600">Active filters:</span>
// //             <div className="flex items-center gap-2 flex-1 overflow-hidden relative">
// //                 <button
// //                     onClick={scrollLeft}
// //                     className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
// //                 >
// //                     <ChevronLeft size={16} />
// //                 </button>
// //                 <div
// //                     ref={scrollContainerRef}
// //                     className="flex gap-2 overflow-x-auto scrollbar-hide flex-1"
// //                 >
// //                     {renderFilterPills()}
// //                 </div>
// //                 <button
// //                     onClick={scrollRight}
// //                     className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
// //                 >
// //                     <ChevronRight size={16} />
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ActiveFiltersDisplay;


// import React, { useRef } from 'react';
// import { X, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useDispatch } from 'react-redux';
// import { clearFilters } from '../redux/features/Map/mapSlice';

// const ActiveFiltersDisplay = ({ appliedFilters, onRemoveFilter }) => {
//     const scrollContainerRef = useRef(null);
//     const dispatch = useDispatch()

//     const formatValue = (key, value) => {
//         if (key === 'priceMin' || key === 'priceMax') {
//             return `$${parseInt(value).toLocaleString()}`;
//         }
//         if (key.includes('area')) {
//             return `${parseInt(value)} sq ft`;
//         }
//         return value;
//     };

//     const scrollLeft = () => {
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
//         }
//     };

//     const scrollRight = () => {
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
//         }
//     };

//     // const renderFilterPills = () => {
//     //     const pills = [];

//     //     Object.entries(appliedFilters).forEach(([key, value]) => {
//     //         if (!value || (Array.isArray(value) && value.length === 0)) return;

//     //         if (Array.isArray(value)) {
//     //             // Handle array values (like type_name, purpose, propertyAmenities)
//     //             value.forEach((item) => {
//     //                 pills.push(
//     //                     <div
//     //                         key={`${key}-${item}`}
//     //                         className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
//     //                     >
//     //                         <span>{`${key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}: ${item}`}</span>
//     //                         <button
//     //                             onClick={() => onRemoveFilter(key, item)}
//     //                             className="hover:bg-blue-200 rounded-full p-0.5"
//     //                         >
//     //                             <X size={14} />
//     //                         </button>
//     //                     </div>
//     //                 );
//     //             });
//     //         } else {
//     //             // Handle single values
//     //             if (key === 'available') return; // Skip boolean filters if needed

//     //             const label = key.replace(/([A-Z])/g, ' $1')
//     //                 .split('_')
//     //                 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     //                 .join(' ');

//     //             const displayValue = formatValue(key, value);

//     //             pills.push(
//     //                 <div
//     //                     key={key}
//     //                     className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
//     //                 >
//     //                     <span>{`${label}: ${displayValue}`}</span>
//     //                     <button
//     //                         onClick={() => onRemoveFilter(key)}
//     //                         className="hover:bg-blue-200 rounded-full p-0.5"
//     //                     >
//     //                         <X size={14} />
//     //                     </button>
//     //                 </div>
//     //             );
//     //         }
//     //     });

//     //     return pills;
//     // };

//     const renderFilterPills = () => {
//         const pills = [];

//         Object.entries(appliedFilters).forEach(([key, value]) => {
//             if (!value || (Array.isArray(value) && value.length === 0)) return;

//             if (Array.isArray(value)) {
//                 // Handle array values (like type_name, purpose, propertyAmenities)
//                 value.forEach((item) => {
//                     pills.push(
//                         <div
//                             key={`${key}-${item}`}
//                             className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
//                         >
//                             <span>{item}</span>
//                             <button
//                                 onClick={() => onRemoveFilter(key, item)}
//                                 className="hover:bg-blue-200 rounded-full p-0.5"
//                             >
//                                 <X size={14} />
//                             </button>
//                         </div>
//                     );
//                 });
//             } else {
//                 // Handle single values
//                 if (key === 'available') return; // Skip boolean filters if needed

//                 const displayValue = formatValue(key, value);

//                 pills.push(
//                     <div
//                         key={key}
//                         className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
//                     >
//                         <span>{displayValue}</span>
//                         <button
//                             onClick={() => onRemoveFilter(key)}
//                             className="hover:bg-blue-200 rounded-full p-0.5"
//                         >
//                             <X size={14} />
//                         </button>
//                     </div>
//                 );
//             }
//         });

//         return pills;
//     };
//     console.log("AAAAAAAAA", appliedFilters)


//     return (

//         Object.keys(appliedFilters).length > 0
//         && <div className="flex items-center gap-2 text-sm">
//             <SlidersHorizontal size={16} className="text-gray-400" />
//             <span className="text-gray-600">Active filters:</span>
//             <div className="flex items-center gap-2 flex-1 overflow-hidden relative">
//                 <button
//                     onClick={scrollLeft}
//                 >
//                     <ChevronLeft size={16} />
//                 </button>
//                 <div
//                     ref={scrollContainerRef}
//                     className="flex gap-2 overflow-x-auto scrollbar-hide flex-1"
//                 >
//                     {renderFilterPills()}
//                 </div>
//                 <button
//                     onClick={scrollRight}
//                 >
//                     <ChevronRight size={16} />
//                 </button>
//             </div>
//             <button
//                 onClick={() => dispatch(clearFilters())}
//                 className="flex items-center gap-2 px-3 py-1 bg-gray-300 text-black rounded-md text-xs"
//             >
//                 Clear All
//             </button>
//         </div>
//     );
// };

// export default ActiveFiltersDisplay;


// import React, { useRef, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { X } from 'lucide-react';
// import { applyFilter } from '../redux/features/Map/mapSlice';

// const ActiveFiltersDisplay = () => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const scrollContainerRef = useRef(null);
//     const [showScrollButtons, setShowScrollButtons] = useState({ left: false, right: false });
//     // Check if scroll buttons should be shown
//     const checkScroll = () => {
//         if (scrollContainerRef.current) {
//             const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//             setShowScrollButtons({
//                 left: scrollLeft > 0,
//                 right: scrollLeft + clientWidth < scrollWidth
//             });
//         }
//     };

//     useEffect(() => {
//         checkScroll();
//         window.addEventListener('resize', checkScroll);
//         return () => window.removeEventListener('resize', checkScroll);
//     }, [appliedFilters]);

//     // Format filter value for display
//     const formatFilterValue = (key, value) => {
//         if (key === 'price') {
//             return `₹${value.min} - ₹${value.max}`;
//         }
//         if (Array.isArray(value)) {
//             return value.join(', ');
//         }
//         return value.toString();
//     };

//     // Handle filter removal
//     const handleRemoveFilter = (filterKey) => {
//         const newFilters = { ...appliedFilters };
//         delete newFilters[filterKey];
//         dispatch(applyFilter(newFilters));
//     };

//     // Scroll handling
//     const scroll = (direction) => {
//         if (scrollContainerRef.current) {
//             const scrollAmount = 200;
//             scrollContainerRef.current.scrollBy({
//                 left: direction === 'left' ? -scrollAmount : scrollAmount,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     // Determine if a filter is a property or project filter
//     const getFilterType = (key) => {
//         const propertyFilters = ['price', 'bedrooms', 'bathrooms', 'propertyType', 'amenities', 'purpose'];
//         const projectFilters = ['projectType', 'projectStatus', 'projectAmenities', 'state'];

//         return propertyFilters.includes(key) ? 'property' : projectFilters.includes(key) ? 'project' : null;
//     };

//     // Return early if no filters
//     if (!appliedFilters || Object.keys(appliedFilters).length === 0) {
//         return null;
//     }

//     return (
//         appliedFilters  && <div className="relative w-full bg-white rounded-lg p-2">
//             {/* Scroll buttons */}
//             {showScrollButtons.left && (
//                 <button
//                     onClick={() => scroll('left')}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//                 >
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                 </button>
//             )}

//             {showScrollButtons.right && (
//                 <button
//                     onClick={() => scroll('right')}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//                 >
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>
//             )}

//             {/* Filters container */}
//             <div
//                 ref={scrollContainerRef}
//                 className="flex gap-2 overflow-x-auto scrollbar-hide px-6"
//                 onScroll={checkScroll}
//             >
//                 {Object.entries(appliedFilters).map(([key, value]) => {
//                     if (!value || (Array.isArray(value) && value.length === 0)) return null;

//                     const filterType = getFilterType(key);
//                     if (!filterType) return null;

//                     const bgColor = filterType === 'property' ? 'bg-yellow-50' : 'bg-red-50';
//                     const borderColor = filterType === 'property' ? 'border-yellow-200' : 'border-red-200';
//                     const textColor = filterType === 'property' ? 'text-yellow-800' : 'text-red-800';

//                     return (
//                         <div
//                             key={key}
//                             className={`flex items-center gap-2 ${bgColor} ${borderColor} ${textColor} border rounded-full px-3 py-1 text-sm whitespace-nowrap`}
//                         >
//                             <span className="font-medium capitalize">
//                                 {key.replace(/([A-Z])/g, ' $1').trim()}: {formatFilterValue(key, value)}
//                             </span>
//                             <button
//                                 onClick={() => handleRemoveFilter(key)}
//                                 className="hover:bg-gray-100 rounded-full p-1"
//                             >
//                                 <X className="w-3 h-3" />
//                             </button>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default ActiveFiltersDisplay;


// import React, { useRef, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { X } from 'lucide-react';
// import { applyFilter } from '../redux/features/Map/mapSlice';

// const ActiveFiltersDisplay = () => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const scrollContainerRef = useRef(null);
//     const [showScrollButtons, setShowScrollButtons] = useState({ left: false, right: false });

//     const checkScroll = () => {
//         if (scrollContainerRef.current) {
//             const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//             setShowScrollButtons({
//                 left: scrollLeft > 0,
//                 right: scrollLeft + clientWidth < scrollWidth
//             });
//         }
//     };

//     useEffect(() => {
//         checkScroll();
//         window.addEventListener('resize', checkScroll);
//         return () => window.removeEventListener('resize', checkScroll);
//     }, [appliedFilters]);

//     const formatFilterValue = (key, value) => {
//         // if (key === 'price' || key === 'totalFloors' || key === 'numberOfFlatsAvailable') {
//         //     return `${value.min} - ${value.max}`;
//         // }
//         if (Array.isArray(value)) {
//             return value.join(', ');
//         }
//         return value.toString();
//     };

//     const handleRemoveFilter = (filterKey) => {
//         const newFilters = { ...appliedFilters };
//         delete newFilters[filterKey];
//         dispatch(applyFilter(newFilters));
//     };

//     const scroll = (direction) => {
//         if (scrollContainerRef.current) {
//             const scrollAmount = 200;
//             scrollContainerRef.current.scrollBy({
//                 left: direction === 'left' ? -scrollAmount : scrollAmount,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     const getFilterType = (key) => {
//         const propertyFilters = ['price', 'bedrooms', 'bathrooms', 'propertyType', 'amenities', 'purpose'];
//         const projectFilters = ['projectType', 'projectStatus', 'projectAmenities', 'state'];
//         const buildingFilters = [
//             'buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
//             'age', 'luda', 'buildingAmenities', 'totalFloors', 'numberOfFlatsAvailable'
//         ];

//         if (propertyFilters.includes(key)) return 'property';
//         if (projectFilters.includes(key)) return 'project';
//         if (buildingFilters.includes(key)) return 'building';
//         return null;
//     };

//     const getFilterStyles = (filterType) => {
//         switch (filterType) {
//             case 'property':
//                 return {
//                     bg: 'bg-yellow-50',
//                     border: 'border-yellow-200',
//                     text: 'text-yellow-800'
//                 };
//             case 'project':
//                 return {
//                     bg: 'bg-red-50',
//                     border: 'border-red-200',
//                     text: 'text-red-800'
//                 };
//             case 'building':
//                 return {
//                     bg: 'bg-blue-50',
//                     border: 'border-blue-200',
//                     text: 'text-blue-800'
//                 };
//             default:
//                 return {
//                     bg: 'bg-gray-50',
//                     border: 'border-gray-200',
//                     text: 'text-gray-800'
//                 };
//         }
//     };

//     if (!appliedFilters || Object.keys(appliedFilters).length === 0) {
//         return null;
//     }

//     console.log(appliedFilters)

//     return (
//         <div className="relative w-full bg-white rounded-lg p-2">
//             {showScrollButtons.left && (
//                 <button
//                     onClick={() => scroll('left')}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//                 >
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                 </button>
//             )}

//             {showScrollButtons.right && (
//                 <button
//                     onClick={() => scroll('right')}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//                 >
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>
//             )}

//             <div
//                 ref={scrollContainerRef}
//                 className="flex gap-2 overflow-x-auto scrollbar-hide px-6"
//                 onScroll={checkScroll}
//             >
//                 {Object.entries(appliedFilters).map(([key, value]) => {
//                     if (!value || (Array.isArray(value) && value.length === 0)) return null;

//                     const filterType = getFilterType(key);
//                     if (!filterType) return null;

//                     const styles = getFilterStyles(filterType);

//                     return (
//                         <div
//                             key={key}
//                             className={`flex items-center gap-2 ${styles.bg} ${styles.border} ${styles.text} border rounded-full px-3 py-1 text-sm whitespace-nowrap`}
//                         >
//                             <span className="font-medium capitalize">
//                                 {key.replace(/([A-Z])/g, ' $1').trim()}: {formatFilterValue(key, value)}
//                             </span>
//                             <button
//                                 onClick={() => handleRemoveFilter(key)}
//                                 className="hover:bg-gray-100 rounded-full p-1"
//                             >
//                                 <X className="w-3 h-3" />
//                             </button>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default ActiveFiltersDisplay;

// import React, { useRef, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { X } from 'lucide-react';
// import { applyFilter } from '../redux/features/Map/mapSlice';

// const ActiveFiltersDisplay = () => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const scrollContainerRef = useRef(null);
//     const [showScrollButtons, setShowScrollButtons] = useState({ left: false, right: false });
//     const [isOpen, setIsOpen] = useState(false);

//     const checkScroll = () => {
//         if (scrollContainerRef.current) {
//             const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//             setShowScrollButtons({
//                 left: scrollLeft > 0,
//                 right: scrollLeft + clientWidth < scrollWidth
//             });
//         }
//     };

//     useEffect(() => {
//         if (isOpen) {
//             checkScroll();
//             window.addEventListener('resize', checkScroll);
//             return () => window.removeEventListener('resize', checkScroll);
//         }
//     }, [isOpen, appliedFilters]);

//     const formatFilterValue = (key, value) => {
//         if (Array.isArray(value)) {
//             return value.join(', ');
//         }
//         return value.toString();
//     };

//     const handleRemoveFilter = (filterKey) => {
//         const newFilters = { ...appliedFilters };
//         delete newFilters[filterKey];
//         dispatch(applyFilter(newFilters));
//     };

//     const scroll = (direction) => {
//         if (scrollContainerRef.current) {
//             const scrollAmount = 200;
//             scrollContainerRef.current.scrollBy({
//                 left: direction === 'left' ? -scrollAmount : scrollAmount,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     const getFilterType = (key) => {
//         const propertyFilters = ['price', 'bedrooms', 'bathrooms', 'propertyType', 'amenities', 'purpose'];
//         const projectFilters = ['projectType', 'projectStatus', 'projectAmenities', 'state'];
//         const buildingFilters = [
//             'buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
//             'age', 'luda', 'buildingAmenities', 'totalFloors', 'numberOfFlatsAvailable'
//         ];

//         if (propertyFilters.includes(key)) return 'property';
//         if (projectFilters.includes(key)) return 'project';
//         if (buildingFilters.includes(key)) return 'building';
//         return null;
//     };

//     const getFilterStyles = (filterType) => {
//         switch (filterType) {
//             // case 'property':
//             //     return {
//             //         bg: 'bg-yellow-50',
//             //         border: 'border-yellow-200',
//             //         text: 'text-yellow-800'
//             //     };
//             // case 'project':
//             //     return {
//             //         bg: 'bg-red-50',
//             //         border: 'border-red-200',
//             //         text: 'text-red-800'
//             //     };
//             // case 'building':
//             //     return {
//             //         bg: 'bg-blue-50',
//             //         border: 'border-blue-200',
//             //         text: 'text-blue-800'
//             //     };
//             default:
//                 return {
//                     bg: 'bg-gray-50',
//                     border: 'border-gray-200',
//                     text: 'text-gray-800'
//                 };
//         }
//     };

//     const filterCount = Object.keys(appliedFilters || {}).length;

//     return (
//         <>
//             <button
//                 onClick={() => setIsOpen(true)}
//                 className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2
//                     ${filterCount > 0
//                         ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//             >
//                 Active Filters
//                 {filterCount > 0 && (
//                     <span className="bg-blue-200 text-blue-800 px-1 py-0.5 rounded-full text-xs">
//                         {filterCount}
//                     </span>
//                 )}
//             </button>

//             {isOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-lg font-semibold">Active Filters</h2>
//                             <button
//                                 onClick={() => setIsOpen(false)}
//                                 className="p-2 hover:bg-gray-100 rounded-full"
//                             >
//                                 <X className="w-5 h-5" />
//                             </button>
//                         </div>

//                         {(!appliedFilters || Object.keys(appliedFilters).length === 0) ? (
//                             <p className="text-gray-500">No active filters</p>
//                         ) : (
//                             <div className="relative">
//                                 {showScrollButtons.left && (
//                                     <button
//                                         onClick={() => scroll('left')}
//                                         className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//                                     >
//                                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                                         </svg>
//                                     </button>
//                                 )}

//                                 {showScrollButtons.right && (
//                                     <button
//                                         onClick={() => scroll('right')}
//                                         className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//                                     >
//                                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                         </svg>
//                                     </button>
//                                 )}

//                                 <div
//                                     ref={scrollContainerRef}
//                                     className="flex flex-wrap gap-2 px-6"
//                                     onScroll={checkScroll}
//                                 >
//                                     {Object.entries(appliedFilters).map(([key, value]) => {
//                                         if (!value || (Array.isArray(value) && value.length === 0)) return null;

//                                         const filterType = getFilterType(key);
//                                         if (!filterType) return null;

//                                         const styles = getFilterStyles(filterType);

//                                         return (
//                                             <div
//                                                 key={key}
//                                                 className={`flex items-center gap-2 ${styles.bg} ${styles.border} ${styles.text} border rounded-full px-3 py-1 text-sm whitespace-nowrap`}
//                                             >
//                                                 <span className="font-medium capitalize">
//                                                     {key.replace(/([A-Z])/g, ' $1').trim()}: {formatFilterValue(key, value)}
//                                                 </span>
//                                                 <button
//                                                     onClick={() => handleRemoveFilter(key)}
//                                                     className="hover:bg-gray-100 rounded-full p-1"
//                                                 >
//                                                     <X className="w-3 h-3" />
//                                                 </button>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default ActiveFiltersDisplay;

// import React, { useRef, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { X } from "lucide-react";
// import { applyFilter } from "../redux/features/Map/mapSlice";

// const ActiveFiltersDisplay = () => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const scrollContainerRef = useRef(null);
//     const [showScrollButtons, setShowScrollButtons] = useState({ left: false, right: false });
//     const [isOpen, setIsOpen] = useState(false);

//     const checkScroll = () => {
//         if (scrollContainerRef.current) {
//             const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//             setShowScrollButtons({
//                 left: scrollLeft > 0,
//                 right: scrollLeft + clientWidth < scrollWidth,
//             });
//         }
//     };

//     useEffect(() => {
//         if (isOpen) {
//             checkScroll();
//             window.addEventListener("resize", checkScroll);
//             return () => window.removeEventListener("resize", checkScroll);
//         }
//     }, [isOpen, appliedFilters]);

//     const formatFilterValue = (key, value) => {
//         return Array.isArray(value) ? value.join(", ") : value.toString();
//     };

//     const handleRemoveFilter = (filterKey) => {
//         const newFilters = { ...appliedFilters };
//         delete newFilters[filterKey];
//         dispatch(applyFilter(newFilters));
//     };

//     const scroll = (direction) => {
//         if (scrollContainerRef.current) {
//             const scrollAmount = 200;
//             scrollContainerRef.current.scrollBy({
//                 left: direction === "left" ? -scrollAmount : scrollAmount,
//                 behavior: "smooth",
//             });
//         }
//     };

//     const filterCount = Object.keys(appliedFilters || {}).length;

//     return (
//         <>
//             {/* Filter Button */}
//             <button
//                 onClick={() => setIsOpen(true)}
//                 className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${filterCount > 0
//                     ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
//                     : "bg-gray-100 text-gray-900 hover:bg-gray-200"
//                     }`}
//             >
//                 Active Filters
//                 {filterCount > 0 && (
//                     <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs shrink-0">
//                         {filterCount}
//                     </span>
//                 )}
//             </button>

//             {isOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto mx-4 shadow-lg">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-lg font-semibold">Active Filters</h2>
//                             <button
//                                 onClick={() => setIsOpen(false)}
//                                 className="p-2 hover:bg-gray-100 rounded-full"
//                             >
//                                 <X className="w-5 h-5" />
//                             </button>
//                         </div>

//                         {filterCount === 0 ? (
//                             <p className="text-gray-500">No active filters</p>
//                         ) : (
//                             <div className="relative">
//                                 {/* Left Scroll Button */}
//                                 {showScrollButtons.left && (
//                                     <button
//                                         onClick={() => scroll("left")}
//                                         className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//                                     >
//                                         <svg
//                                             className="w-4 h-4"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M15 19l-7-7 7-7"
//                                             />
//                                         </svg>
//                                     </button>
//                                 )}

//                                 {/* Right Scroll Button */}
//                                 {showScrollButtons.right && (
//                                     <button
//                                         onClick={() => scroll("right")}
//                                         className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//                                     >
//                                         <svg
//                                             className="w-4 h-4"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M9 5l7 7-7 7"
//                                             />
//                                         </svg>
//                                     </button>
//                                 )}

//                                 {/* Active Filters List */}
//                                 <div
//                                     ref={scrollContainerRef}
//                                     className="flex overflow-x-auto gap-2 px-6 scrollbar-hide"
//                                     onScroll={checkScroll}
//                                 >
//                                     {Object.entries(appliedFilters).map(([key, value]) => (
//                                         <div
//                                             key={key}
//                                             className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm whitespace-nowrap"
//                                         >
//                                             <span className="font-medium capitalize shrink-0">
//                                                 {key.replace(/([A-Z])/g, " $1").trim()}: {formatFilterValue(key, value)}
//                                             </span>
//                                             <button
//                                                 onClick={() => handleRemoveFilter(key)}
//                                                 className="hover:bg-gray-100 rounded-full p-1 shrink-0"
//                                             >
//                                                 <X className="w-3 h-3" />
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default ActiveFiltersDisplay;


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { X } from "lucide-react";
// import { applyFilter } from "../redux/features/Map/mapSlice";

// const ActiveFiltersDisplay = () => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);

//     console.log("appliedFilters", appliedFilters)

//     console.log(Object.entries(appliedFilters))

//     const formatFilterValue = (key, value) => {
//         return Array.isArray(value) ? value.join(", ") : value.toString();
//     };

//     const handleRemoveFilter = (filterKey) => {
//         const newFilters = { ...appliedFilters };
//         delete newFilters[filterKey];
//         dispatch(applyFilter(newFilters));
//     };

//     return (
//         Object.entries(appliedFilters).length > 0 && <div className="flex flex-wrap gap-2 mb-2">
//             {Object.entries(appliedFilters || {}).map(([key, value]) => (
//                 <div
//                     key={key}
//                     className="flex items-center gap-1 bg-white shadow-lg border border-gray-300 capitalize text-gray-900 rounded-full px-3 py-1 text-sm whitespace-nowrap"
//                 >
//                     <span className="font-medium">
//                         {key.replace(/([A-Z])/g, " $1").trim()}: {formatFilterValue(key, value)}
//                     </span>
//                     <button
//                         onClick={() => handleRemoveFilter(key)}
//                         className="hover:bg-blue-100 rounded-full py-1 px-2 ml-1 flex items-center justify-center"
//                         aria-label={`Remove ${key} filter`}
//                     >
//                         <X className="w-3 h-3" />
//                     </button>
//                 </div>
//             ))}

           
//         </div>
//     );
// };

// export default ActiveFiltersDisplay;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { applyFilter } from "../redux/features/Map/mapSlice";

const ActiveFiltersDisplay = () => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);

    console.log("appliedFilters", appliedFilters);

    // Format filter values correctly
    const formatFilterValue = (key, value) => {
        if (key === "price" && typeof value === "object") {
            return `$${value.min} - $${value.max}`;
        }
        return Array.isArray(value) ? value.join(", ") : value.toString();
    };

    // Remove individual filter
    const handleRemoveFilter = (filterKey) => {
        const newFilters = { ...appliedFilters };
        delete newFilters[filterKey];
        dispatch(applyFilter(newFilters));
    };

    // Clear all filters
    const handleClearAll = () => {
        dispatch(applyFilter({})); // Reset filters
    };

    return (
        Object.keys(appliedFilters).length > 0 && (
            <div className="flex flex-wrap gap-2">
                {Object.entries(appliedFilters).map(([key, value]) => (
                    <div
                        key={key}
                        className="flex items-center gap-1 bg-white shadow-lg border border-gray-300 capitalize text-gray-900 rounded-full px-3 py-1 text-sm whitespace-nowrap"
                    >
                        <span className="font-medium">
                            {key.replace(/([A-Z])/g, " $1").trim()}: {formatFilterValue(key, value)}
                        </span>
                        <button
                            onClick={() => handleRemoveFilter(key)}
                            className="hover:bg-blue-100 rounded-full py-1 px-2 ml-1 flex items-center justify-center"
                            aria-label={`Remove ${key} filter`}
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                ))}

                {/* Clear All Filters Button */}
                <button
                    onClick={handleClearAll}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded-full text-sm shadow-lg"
                >
                    Clear All
                </button>
            </div>
        )
    );
};

export default ActiveFiltersDisplay;
