// import React from 'react';
// import { X, SlidersHorizontal } from 'lucide-react';

// const ActiveFiltersDisplay = ({ appliedFilters, onRemoveFilter }) => {
//     const formatValue = (key, value) => {
//         if (key === 'priceMin' || key === 'priceMax') {
//             return `$${parseInt(value).toLocaleString()}`;
//         }
//         if (key.includes('area')) {
//             return `${parseInt(value)} sq ft`;
//         }
//         return value;
//     };

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
//                             className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1"
//                         >
//                             <span>{`${key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}: ${item}`}</span>
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

//                 const label = key.replace(/([A-Z])/g, ' $1')
//                     .split('_')
//                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//                     .join(' ');

//                 const displayValue = formatValue(key, value);

//                 pills.push(
//                     <div
//                         key={key}
//                         className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1"
//                     >
//                         <span>{`${label}: ${displayValue}`}</span>
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

//     return (
//         <div className="flex flex-wrap items-center gap-2 text-sm">
//             <SlidersHorizontal size={16} className="text-gray-400" />
//             <span className="text-gray-600">Active filters:</span>
//             {renderFilterPills()}
//         </div>
//     );
// };

// export default ActiveFiltersDisplay;

// import React, { useRef } from 'react';
// import { X, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

// const ActiveFiltersDisplay = ({ appliedFilters, onRemoveFilter }) => {
//     const scrollContainerRef = useRef(null);

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
//                             <span>{`${key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}: ${item}`}</span>
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

//                 const label = key.replace(/([A-Z])/g, ' $1')
//                     .split('_')
//                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//                     .join(' ');

//                 const displayValue = formatValue(key, value);

//                 pills.push(
//                     <div
//                         key={key}
//                         className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
//                     >
//                         <span>{`${label}: ${displayValue}`}</span>
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

//     return (
//         <div className="flex items-center gap-2 text-sm">
//             <SlidersHorizontal size={16} className="text-gray-400" />
//             <span className="text-gray-600">Active filters:</span>
//             <div className="flex items-center gap-2 flex-1 overflow-hidden relative">
//                 <button
//                     onClick={scrollLeft}
//                     className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
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
//                     className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
//                 >
//                     <ChevronRight size={16} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ActiveFiltersDisplay;


import React, { useRef } from 'react';
import { X, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../redux/features/Map/mapSlice';

const ActiveFiltersDisplay = ({ appliedFilters, onRemoveFilter }) => {
    const scrollContainerRef = useRef(null);
    const dispatch = useDispatch()

    const formatValue = (key, value) => {
        if (key === 'priceMin' || key === 'priceMax') {
            return `$${parseInt(value).toLocaleString()}`;
        }
        if (key.includes('area')) {
            return `${parseInt(value)} sq ft`;
        }
        return value;
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    // const renderFilterPills = () => {
    //     const pills = [];

    //     Object.entries(appliedFilters).forEach(([key, value]) => {
    //         if (!value || (Array.isArray(value) && value.length === 0)) return;

    //         if (Array.isArray(value)) {
    //             // Handle array values (like type_name, purpose, propertyAmenities)
    //             value.forEach((item) => {
    //                 pills.push(
    //                     <div
    //                         key={`${key}-${item}`}
    //                         className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
    //                     >
    //                         <span>{`${key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}: ${item}`}</span>
    //                         <button
    //                             onClick={() => onRemoveFilter(key, item)}
    //                             className="hover:bg-blue-200 rounded-full p-0.5"
    //                         >
    //                             <X size={14} />
    //                         </button>
    //                     </div>
    //                 );
    //             });
    //         } else {
    //             // Handle single values
    //             if (key === 'available') return; // Skip boolean filters if needed

    //             const label = key.replace(/([A-Z])/g, ' $1')
    //                 .split('_')
    //                 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //                 .join(' ');

    //             const displayValue = formatValue(key, value);

    //             pills.push(
    //                 <div
    //                     key={key}
    //                     className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
    //                 >
    //                     <span>{`${label}: ${displayValue}`}</span>
    //                     <button
    //                         onClick={() => onRemoveFilter(key)}
    //                         className="hover:bg-blue-200 rounded-full p-0.5"
    //                     >
    //                         <X size={14} />
    //                     </button>
    //                 </div>
    //             );
    //         }
    //     });

    //     return pills;
    // };

    const renderFilterPills = () => {
        const pills = [];

        Object.entries(appliedFilters).forEach(([key, value]) => {
            if (!value || (Array.isArray(value) && value.length === 0)) return;

            if (Array.isArray(value)) {
                // Handle array values (like type_name, purpose, propertyAmenities)
                value.forEach((item) => {
                    pills.push(
                        <div
                            key={`${key}-${item}`}
                            className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
                        >
                            <span>{item}</span>
                            <button
                                onClick={() => onRemoveFilter(key, item)}
                                className="hover:bg-blue-200 rounded-full p-0.5"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    );
                });
            } else {
                // Handle single values
                if (key === 'available') return; // Skip boolean filters if needed

                const displayValue = formatValue(key, value);

                pills.push(
                    <div
                        key={key}
                        className="px-2 py-1 bg-blue-100 text-blue-600 rounded-xl flex items-center gap-1 whitespace-nowrap"
                    >
                        <span>{displayValue}</span>
                        <button
                            onClick={() => onRemoveFilter(key)}
                            className="hover:bg-blue-200 rounded-full p-0.5"
                        >
                            <X size={14} />
                        </button>
                    </div>
                );
            }
        });

        return pills;
    };
    console.log("AAAAAAAAA", appliedFilters)


    return (

        Object.keys(appliedFilters).length > 0
        && <div className="flex items-center gap-2 text-sm">
            <SlidersHorizontal size={16} className="text-gray-400" />
            <span className="text-gray-600">Active filters:</span>
            <div className="flex items-center gap-2 flex-1 overflow-hidden relative">
                <button
                    onClick={scrollLeft}
                >
                    <ChevronLeft size={16} />
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex gap-2 overflow-x-auto scrollbar-hide flex-1"
                >
                    {renderFilterPills()}
                </div>
                <button
                    onClick={scrollRight}
                >
                    <ChevronRight size={16} />
                </button>
            </div>
            <button
                onClick={() => dispatch(clearFilters())}
                className="flex items-center gap-2 px-3 py-1 bg-gray-300 text-black rounded-md text-xs"
            >
                Clear All
            </button>
        </div>
    );
};

export default ActiveFiltersDisplay;