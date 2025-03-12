// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { X } from "lucide-react";
// import { applyFilter } from "../redux/features/Map/mapSlice";

// const ResetFilterButton = () => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [showPopup, setShowPopup] = useState(false);

//     console.log("showPopup", showPopup)

//     const filterCount = Object.keys(appliedFilters).length;

//     // Format filter values correctly
//     const formatFilterValue = (key, value) => {
//         if (key === "price" && typeof value === "object") {
//             return `$${value.min} - $${value.max}`;
//         }
//         return Array.isArray(value) ? value.join(", ") : value.toString();
//     };

//     // Remove individual filter
//     const handleRemoveFilter = (filterKey) => {
//         const newFilters = { ...appliedFilters };
//         delete newFilters[filterKey];
//         dispatch(applyFilter(newFilters));
//     };

//     // Clear all filters
//     const handleClearAll = () => {
//         dispatch(applyFilter({})); // Reset filters
//         setShowPopup(false);
//     };

//     return (
//         <div className="relative inline-block">
//             {/* Reset Button */}
//             <button
//                 type="button"
//                 onClick={() => setShowPopup(!showPopup)}
//                 className="flex items-center justify-between gap-2 bg-red-800 border border-gray-200 shadow-sm rounded-full py-2 px-4 text-lg font-medium text-red-500 hover:bg-gray-50"
//                 disabled={filterCount === 0}
//             >
//                 <span>Reset</span>
//                 {filterCount > 0 && (
//                     <span className="flex items-center justify-center bg-red-500 text-white text-xs rounded-full w-5 h-5">
//                         {filterCount}
//                     </span>
//                 )}
//             </button>

//             {/* Popup Menu - Simple Approach */}
//             {showPopup && filterCount > 0 && (
//                 <div
//                     className="absolute top-full mt-2 left-0 z-50 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] w-max py-2"
//                     style={{ minWidth: "200px" }}
//                 >
//                     {/* Clear All Option */}
//                     <div className="px-3 py-2 border-b border-gray-200">
//                         <button
//                             type="button"
//                             onClick={handleClearAll}
//                             className="w-full text-left text-red-500 font-medium"
//                         >
//                             Clear All Filters
//                         </button>
//                     </div>

//                     {/* Individual Filters */}
//                     <div className="pt-1 max-h-64 overflow-y-auto">
//                         {Object.entries(appliedFilters).map(([key, value]) => (
//                             <div
//                                 key={key}
//                                 className="px-3 py-2 hover:bg-gray-100"
//                             >
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex flex-col pr-2">
//                                         <span className="font-medium capitalize text-sm">
//                                             {key.replace(/([A-Z])/g, " $1").trim()}
//                                         </span>
//                                         <span className="text-gray-600 text-xs truncate">
//                                             {formatFilterValue(key, value)}
//                                         </span>
//                                     </div>
//                                     <button
//                                         type="button"
//                                         onClick={() => handleRemoveFilter(key)}
//                                         className="hover:bg-gray-200 rounded-full p-1 flex items-center justify-center"
//                                     >
//                                         <X className="w-4 h-4 text-gray-500" />
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ResetFilterButton;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { X } from "lucide-react";
// import { applyFilter } from "../redux/features/Map/mapSlice";

// const ResetFilterButton = () => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);

//     const filterCount = Object.keys(appliedFilters).length;

//     // Format filter values correctly
//     const formatFilterValue = (key, value) => {
//         if (key === "price" && typeof value === "object") {
//             return `$${value.min} - $${value.max}`;
//         }
//         return Array.isArray(value) ? value?.join(", ") : value?.toString();
//     };

//     // Handle click outside to close popup
//     useEffect(() => {
//         function handleClickOutside(event) {
//             // If click is outside the popup container, close the popup
//             if (isPopupOpen && !event.target.closest('.reset-filter-container')) {
//                 setIsPopupOpen(false);
//             }
//         }

//         // Add event listener when popup is open
//         if (isPopupOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }

//         // Cleanup event listener
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isPopupOpen]);

//     // Remove individual filter
//     const handleRemoveFilter = (e, filterKey) => {
//         e.stopPropagation(); // Prevent the click from bubbling up
//         const newFilters = { ...appliedFilters };
//         delete newFilters[filterKey];
//         dispatch(applyFilter(newFilters));
//     };

//     // Clear all filters
//     const handleClearAll = (e) => {
//         e.stopPropagation(); // Prevent the click from bubbling up
//         dispatch(applyFilter({})); // Reset filters
//         setIsPopupOpen(false);
//     };

//     // Toggle popup visibility
//     const togglePopup = (e) => {
//         e.stopPropagation(); // Prevent the click from bubbling up
//         console.log("Toggle popup called, current state:", isPopupOpen);

//         if (filterCount > 0) {
//             setIsPopupOpen(!isPopupOpen);
//         }
//     };

//     if(filterCount !== 0){
//         return (
//             <div className="reset-filter-container relative inline-block ">
//                 {/* Reset Button */}
//                 <button
//                     type="button"
//                     onClick={togglePopup}
//                     className="flex items-center justify-between gap-2 bg-white rounded-lg py-1.5 px-5 text-lg font-medium text-red-500 hover:bg-gray-50"
//                     disabled={filterCount === 0}
//                 >
//                     <span className="text-[16px]">Reset</span>
//                     {filterCount > 0 && (
//                         <span className="flex items-center justify-center bg-red-500 text-white text-xs rounded-full w-5 h-5">
//                             {filterCount}
//                         </span>
//                     )}
//                 </button>

//                 {/* Popup content - rendered conditionally */}
//                 {isPopupOpen && filterCount > 0 && (
//                     <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 border border-gray-200 py-2">
//                         {/* Clear All Button */}
//                         <div className="px-3 py-2 border-b border-gray-200">
//                             <button
//                                 type="button"
//                                 onClick={handleClearAll}
//                                 className="text-red-500 font-medium"
//                             >
//                                 Clear All Filters
//                             </button>
//                         </div>

//                         {/* Filter List */}
//                         <div className="max-h-96 overflow-y-auto">
//                             {Object.entries(appliedFilters).map(([key, value]) => (
//                                 <div key={key} className="px-3 py-2 hover:bg-gray-100">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <div className="font-medium capitalize text-sm">
//                                                 {key.replace(/([A-Z])/g, " $1").trim()}
//                                             </div>
//                                             <div className="text-gray-500 text-xs">
//                                                 {formatFilterValue(key, value)}
//                                             </div>
//                                         </div>
//                                         <button
//                                             type="button"
//                                             onClick={(e) => handleRemoveFilter(e, key)}
//                                             className="hover:bg-gray-200 rounded-full p-1"
//                                         >
//                                             <X className="w-4 h-4 text-gray-400" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// };

// export default ResetFilterButton;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { applyFilter } from "../redux/features/Map/mapSlice";

const ResetFilterButton = () => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const filterCount = Object.keys(appliedFilters).length;

    // Format filter values correctly
    const formatFilterValue = (key, value) => {
        if (key === "price" && typeof value === "object") {
            // Check if min price is undefined or not available
            if (value.min === undefined || value.min === null || value.min === "") {
                return `Under ₹${value.max}`;
            }
            // Check if max price is undefined or not available
            else if (value.max === undefined || value.max === null || value.max === "") {
                return `Above ₹${value.min}`;
            }
            // Both min and max are available
            return `₹${value.min} - ₹${value.max}`;
        }
        return Array.isArray(value) ? value?.join(", ") : value?.toString();
    };

    // Handle click outside to close popup
    useEffect(() => {
        function handleClickOutside(event) {
            // If click is outside the popup container, close the popup
            if (isPopupOpen && !event.target.closest('.reset-filter-container')) {
                setIsPopupOpen(false);
            }
        }

        // Add event listener when popup is open
        if (isPopupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopupOpen]);

    // Remove individual filter
    const handleRemoveFilter = (e, filterKey) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        const newFilters = { ...appliedFilters };
        delete newFilters[filterKey];
        dispatch(applyFilter(newFilters));
    };

    // Clear all filters
    const handleClearAll = (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        dispatch(applyFilter({})); // Reset filters
        setIsPopupOpen(false);
    };

    // Toggle popup visibility
    const togglePopup = (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        console.log("Toggle popup called, current state:", isPopupOpen);

        if (filterCount > 0) {
            setIsPopupOpen(!isPopupOpen);
        }
    };

    if (filterCount !== 0) {
        return (
            <div className="reset-filter-container relative inline-block ">
                {/* Reset Button */}
                <button
                    type="button"
                    onClick={togglePopup}
                    className="flex items-center justify-between gap-2 bg-white rounded-lg py-1.5 px-5 text-lg font-medium text-red-500 hover:bg-gray-50"
                    disabled={filterCount === 0}
                >
                    <span className="text-[16px]">Reset</span>
                    {filterCount > 0 && (
                        <span className="flex items-center justify-center bg-red-500 text-white text-xs rounded-full w-5 h-5">
                            {filterCount}
                        </span>
                    )}
                </button>

                {/* Popup content - rendered conditionally */}
                {isPopupOpen && filterCount > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 border border-gray-200 py-2">
                        {/* Clear All Button */}
                        <div className="px-3 py-2 border-b border-gray-200">
                            <button
                                type="button"
                                onClick={handleClearAll}
                                className="text-red-500 font-medium"
                            >
                                Clear All Filters
                            </button>
                        </div>

                        {/* Filter List */}
                        <div className="max-h-96 overflow-y-auto">
                            {Object.entries(appliedFilters).map(([key, value]) => (
                                <div key={key} className="px-3 py-2 hover:bg-gray-100">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium capitalize text-sm">
                                                {key.replace(/([A-Z])/g, " $1").trim()}
                                            </div>
                                            <div className="text-gray-500 text-xs">
                                                {formatFilterValue(key, value)}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => handleRemoveFilter(e, key)}
                                            className="hover:bg-gray-200 rounded-full p-1"
                                        >
                                            <X className="w-4 h-4 text-gray-400" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default ResetFilterButton;

