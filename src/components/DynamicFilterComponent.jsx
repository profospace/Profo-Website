// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { applyFilter } from '../redux/features/Map/mapSlice';
// import { base_url } from '../utils/base_url';

// // Common FilterSection component
// const FilterSection = ({ title, children, className = '' }) => (
//     <div className={`p-4 rounded-lg ${className}`}>
//         <h3 className="text-gray-700 font-semibold mb-4">{title}</h3>
//         {children}
//     </div>
// );

// // Common CheckboxGroup component
// const CheckboxGroup = ({ options = [], value = [], onChange, name }) => (
//     <div className="space-y-3">
//         {options.map((option) => (
//             <label key={option} className="flex items-center gap-3 cursor-pointer group">
//                 <input
//                     type="checkbox"
//                     name={name}
//                     value={option}
//                     checked={value.includes(option)}
//                     onChange={(e) => {
//                         const newValue = e.target.checked
//                             ? [...value, option]
//                             : value.filter(v => v !== option);
//                         onChange(newValue);
//                     }}
//                     className="form-checkbox h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
//                 />
//                 <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
//                     {option}
//                 </span>
//             </label>
//         ))}
//     </div>
// );

// // Common RadioGroup component
// const RadioGroup = ({ options = [], value, onChange, name }) => (
//     <div className="space-y-3">
//         {options.map((option) => (
//             <label key={option} className="flex items-center gap-3 cursor-pointer group">
//                 <input
//                     type="radio"
//                     name={name}
//                     value={option}
//                     checked={value === option}
//                     onChange={(e) => onChange(e.target.value)}
//                     className="form-radio h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
//                 />
//                 <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
//                     {option}
//                 </span>
//             </label>
//         ))}
//     </div>
// );

// const RangeSlider = ({ min, max, value, onChange, formatValue }) => {
//     const currentMin = value?.min ?? min;
//     const currentMax = value?.max ?? max;

//     return (
//         <div className="space-y-6 min-w-96">
//             <div className="relative pt-6">
//                 <div className="relative">
//                     {/* Track background */}
//                     <div className="absolute w-full h-1 bg-gray-200 rounded-lg" />

//                     {/* Minimum value slider */}
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         value={currentMin}
//                         onChange={(e) => {
//                             const newMin = Math.min(parseInt(e.target.value), currentMax);
//                             onChange({ min: newMin, max: currentMax });
//                         }}
//                         className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
//                         style={{
//                             height: '20px',
//                             WebkitAppearance: 'none',
//                         }}
//                     />

//                     {/* Maximum value slider */}
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         value={currentMax}
//                         onChange={(e) => {
//                             const newMax = Math.max(parseInt(e.target.value), currentMin);
//                             onChange({ min: currentMin, max: newMax });
//                         }}
//                         className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
//                         style={{
//                             height: '20px',
//                             WebkitAppearance: 'none',
//                         }}
//                     />

//                     {/* Custom styling for the thumbs */}
//                     <style jsx>{`
//                         input[type='range']::-webkit-slider-thumb {
//                             height: 16px;
//                             width: 16px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             -webkit-appearance: none;
//                             pointer-events: auto;
//                             margin-top: -15px;
//                         }

//                         input[type='range']::-moz-range-thumb {
//                             height: 20px;
//                             width: 20px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             border: none;
//                             pointer-events: auto;
//                         }

//                         input[type='range']::-ms-thumb {
//                             height: 20px;
//                             width: 20px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             pointer-events: auto;
//                         }

//                         input[type='range']::-webkit-slider-runnable-track {
//                             background: transparent;
//                             height: 1px;
//                         }

//                         input[type='range']::-moz-range-track {
//                             background: transparent;
//                             height: 1px;
//                         }

//                         input[type='range']::-ms-track {
//                             background: transparent;
//                             height: 1px;
//                         }
//                     `}</style>
//                 </div>
//             </div>

//             {/* Value display */}
//             <div className="flex items-center justify-between text-sm">
//                 <span className="text-red-500 font-medium">{formatValue(currentMin)}</span>
//                 <span className="text-gray-500">to</span>
//                 <span className="text-red-500 font-medium">{formatValue(currentMax)}</span>
//             </div>
//         </div>
//     );
// };

// // Property Filter Component
// export const PropertyFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const propertyFilters = {};
//         if (appliedFilters) {
//             ['price', 'bedrooms', 'bathrooms', 'propertyType', 'amenities', 'purpose'].forEach(key => {
//                 if (appliedFilters[key]) propertyFilters[key] = appliedFilters[key];
//             });
//         }
//         return propertyFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/filter/structure`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'property'
//         }));
//         setAdvancedFilterOpen(false)

//         // Scroll to the top after the modal is closed
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
//     }

//     return (
//         <div className="w-full max-w-7xl mx-auto p-4">
//             <div className="grid grid-cols-4 gap-4">
//                 {/* Left section - takes up 3 columns */}
//                 <div className="col-span-3 grid grid-rows-2 gap-4">
//                     {/* Top box */}
//                     <div className="w-full  flex gap-12">
//                         {/* Content for top box */}
//                         <FilterSection title={filters?.propertyType?.label}>
//                             <CheckboxGroup
//                                 options={filters?.propertyType?.values}
//                                 value={selectedFilters.propertyType || []}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, propertyType: value }))}
//                                 name="propertyType"
//                             />
//                         </FilterSection>

//                         <FilterSection title={filters?.purpose?.label}>
//                             <RadioGroup
//                                 options={filters?.purpose?.values}
//                                 value={selectedFilters?.purpose}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, purpose: value }))}
//                                 name="purpose"
//                             />
//                         </FilterSection>

//                         <FilterSection title={filters?.bedrooms?.label}>
//                             <div className="space-y-4">
//                                 {[...Array(filters?.bedrooms?.max)].map((_, i) => (
//                                     <label key={i + 1} className="flex items-center gap-3 cursor-pointer group">
//                                         <input
//                                             type="radio"
//                                             name="bedrooms"
//                                             value={i + 1}
//                                             checked={selectedFilters?.bedrooms === (i + 1)}
//                                             onChange={(e) => setSelectedFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))}
//                                             className="form-radio h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
//                                         />
//                                         <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
//                                             {i + 1} BHK
//                                         </span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </FilterSection>

//                         <FilterSection title={filters?.furnishing?.label}>
//                             <CheckboxGroup
//                                 options={filters?.furnishing?.values}
//                                 value={selectedFilters?.furnishing || []}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, furnishing: value }))}
//                                 name="furnishing"
//                             />
//                         </FilterSection>
                        
//                     </div>

//                     {/* Bottom box */}
//                     <div className="w-full flex items-start justify-between">
//                         {/* Content for bottom box */}
//                         <FilterSection title={filters?.price?.label}>
//                             <RangeSlider
//                                 min={filters?.price?.min}
//                                 max={filters?.price?.max}
//                                 value={selectedFilters?.price || {
//                                     min: filters?.price?.min,
//                                     max: filters?.price?.max
//                                 }}
//                                 onChange={(value) => {
//                                     setSelectedFilters(prev => ({
//                                         ...prev,
//                                         price: value
//                                     }));
//                                 }}
//                                 formatValue={(value) => value >= 10000000
//                                     ? `${(value / 10000000).toFixed(1)} Cr`
//                                     : `${(value / 100000).toFixed(1)} L`
//                                 }
//                             />
//                         </FilterSection>
//                         <FilterSection title={filters?.area?.label}>
//                             <RangeSlider
//                                 min={filters?.area?.min}
//                                 max={filters?.area?.max}
//                                 value={selectedFilters?.area || {
//                                     min: filters?.area?.min,
//                                     max: filters?.area?.max
//                                 }}
//                                 onChange={(value) => {
//                                     setSelectedFilters(prev => ({
//                                         ...prev,
//                                         area: value
//                                     }));
//                                 }}
//                                 formatValue={(value) => `${value} sq ft`}
//                             />
//                         </FilterSection>
//                     </div>
//                 </div>

//                 {/* Right section - takes up 1 column, full height */}
//                 <div className="col-span-1 h-full">
//                     <div className="">
//                         {/* Content for right box */}
//                         <FilterSection title={filters?.amenities?.label}>
//                             <CheckboxGroup
//                                 options={filters?.amenities?.values}
//                                 value={selectedFilters?.amenities || []}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                                 name="amenities"
//                             />
//                         </FilterSection>
                        
//                     </div>
//                 </div>
//             </div>

//             {/* Buttons */}
//             <div className="col-span-full flex justify-end gap-4 mt-4">
//                 <button onClick={() => setSelectedFilters({})} className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
//                     Reset Filters
//                 </button>
//                 <button onClick={handleApplyFilters} className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
//                     Apply Filters
//                 </button>
//             </div>
//         </div>
//     );
// };

// // Project Filter Component
// export const ProjectFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const projectFilters = {};
//         if (appliedFilters) {
//             ['projectType', 'projectStatus', 'projectAmenities', 'state'].forEach(key => {
//                 if (appliedFilters[key]) projectFilters[key] = appliedFilters[key];
//             });
//         }
//         return projectFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/projects/filter-options`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'project'
//         }));
//         setAdvancedFilterOpen(false)

//         // Scroll to the top after the modal is closed
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
//     }

//     return (
//         <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 px-6">
//             <FilterSection title={filters?.projectType?.label}>
//                 <CheckboxGroup
//                     options={filters?.projectType?.values}
//                     value={selectedFilters?.projectType || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectType: value }))}
//                     name="projectType"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.projectStatus?.label}>
//                 <CheckboxGroup
//                     options={filters?.projectStatus?.values}
//                     value={selectedFilters?.projectStatus || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectStatus: value }))}
//                     name="projectStatus"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.amenities?.label}>
//                 <CheckboxGroup
//                     options={filters?.amenities?.values}
//                     value={selectedFilters?.amenities || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                     name="projectAmenities"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.state?.label}>
//                 <CheckboxGroup
//                     options={filters?.state?.values}
//                     value={selectedFilters?.state || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, state: value }))}
//                     name="state"
//                 />
//             </FilterSection>

//             <div className="col-span-full flex justify-end gap-4 mt-4">

//                 <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
//                     <button onClick={() => setSelectedFilters({})} className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
//                         Reset Filters
//                     </button>
//                     <button onClick={handleApplyFilters} className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
//                         Apply Filters
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Building Filter Component
// export const BuildingFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const buildingFilters = {};
//         if (appliedFilters) {
//             ['buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
//                 'age', 'luda', 'amenities', 'totalFloors', 'numberOfFlatsAvailable'].forEach(key => {
//                     if (appliedFilters[key]) buildingFilters[key] = appliedFilters[key];
//                 });
//         }
//         return buildingFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/building/structure`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'building'
//         }));
//         setAdvancedFilterOpen(false);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
//     }

//     // Helper function for increment filters
//     const renderIncrementFilter = (key, filterData) => (
//         <FilterSection title={filterData?.label}>
//             <div className="space-y-4">
//                 {[...Array(parseInt(filterData?.max))].map((_, i) => (
//                     <label key={i + 1} className="flex items-center gap-3 cursor-pointer group">
//                         <input
//                             type="radio"
//                             name={key}
//                             value={i + 1}
//                             checked={selectedFilters[key] === (i + 1)}
//                             onChange={(e) => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 [key]: parseInt(e.target.value)
//                             }))}
//                             className="form-radio h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
//                         />
//                         <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
//                             {i + 1}
//                         </span>
//                     </label>
//                 ))}
//             </div>
//         </FilterSection>
//     );

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl">
//             {/* Building Type */}
//             <FilterSection title={filters?.buildingType?.label}>
//                 <CheckboxGroup
//                     options={filters?.buildingType?.values}
//                     value={selectedFilters?.buildingType || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, buildingType: value }))}
//                     name="buildingType"
//                 />
//             </FilterSection>

//             {/* Development Status */}
//             <FilterSection title={filters?.developmentStatus?.label}>
//                 <CheckboxGroup
//                     options={filters?.developmentStatus?.values}
//                     value={selectedFilters?.developmentStatus || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, developmentStatus: value }))}
//                     name="developmentStatus"
//                 />
//             </FilterSection>

//             {/* Front Road */}
//             <FilterSection title={filters?.frontRoad?.label}>
//                 <CheckboxGroup
//                     options={filters?.frontRoad?.values}
//                     value={selectedFilters?.frontRoad || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, frontRoad: value }))}
//                     name="frontRoad"
//                 />
//             </FilterSection>

//             {/* Parking Area */}
//             <FilterSection title={filters?.parkingArea?.label}>
//                 <CheckboxGroup
//                     options={filters?.parkingArea?.values}
//                     value={selectedFilters?.parkingArea || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, parkingArea: value }))}
//                     name="parkingArea"
//                 />
//             </FilterSection>

//             {/* Storey */}
//             <FilterSection title={filters?.storey?.label}>
//                 <CheckboxGroup
//                     options={filters?.storey?.values}
//                     value={selectedFilters?.storey || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, storey: value }))}
//                     name="storey"
//                 />
//             </FilterSection>

//             {/* Age */}
//             <FilterSection title={filters?.age?.label}>
//                 <CheckboxGroup
//                     options={filters?.age?.values}
//                     value={selectedFilters?.age || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, age: value }))}
//                     name="age"
//                 />
//             </FilterSection>

//             {/* LUDA */}
//             <FilterSection title={filters?.luda?.label}>
//                 <CheckboxGroup
//                     options={filters?.luda?.values}
//                     value={selectedFilters?.luda || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, luda: value }))}
//                     name="luda"
//                 />
//             </FilterSection>

//             {/* Total Floors */}
//             {filters?.totalFloors && renderIncrementFilter('totalFloors', filters?.totalFloors)}

//             {/* Number of Flats Available */}
//             {filters?.numberOfFlatsAvailable && renderIncrementFilter('numberOfFlatsAvailable', filters?.numberOfFlatsAvailable)}

//             {/* Amenities */}
//             {filters?.amenities && filters?.amenities?.values?.length > 0 && (
//                 <FilterSection title={filters?.amenities?.label}>
//                     <CheckboxGroup
//                         options={filters?.amenities?.values}
//                         value={selectedFilters?.amenities || []}
//                         onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                         name="amenities"
//                     />
//                 </FilterSection>
//             )}

//             <div className="col-span-full flex justify-end gap-4 mt-4">
//                 <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
//                     <button onClick={() => setSelectedFilters({})} className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
//                         Reset Filters
//                     </button>
//                     <button onClick={handleApplyFilters} className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
//                         Apply Filters
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { applyFilter } from '../redux/features/Map/mapSlice';
// import { base_url } from '../utils/base_url';
// import { motion } from 'framer-motion';

// // Background Floating Shapes Component
// // const FloatingShapes = () => (
// //     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
// //         <motion.div
// //             className="absolute top-10 right-10 w-24 h-24 bg-red-100 rounded-full opacity-50"
// //             animate={{
// //                 y: [0, 50, 0],
// //                 x: [0, 30, 0],
// //                 rotate: [0, 45, 0]
// //             }}
// //             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //             className="absolute bottom-20 left-20 w-48 h-28 bg-blue-100 rounded-lg opacity-30"
// //             animate={{
// //                 y: [0, -40, 0],
// //                 x: [0, 20, 0],
// //                 rotate: [0, -25, 0]
// //             }}
// //             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //             className="absolute top-1/3 left-1/4 w-36 h-36 bg-yellow-100 rounded-lg opacity-40 rotate-45"
// //             animate={{
// //                 y: [0, 60, 0],
// //                 x: [0, -30, 0],
// //                 rotate: [45, 90, 45]
// //             }}
// //             transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //             className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-green-100 rounded-full opacity-30"
// //             animate={{
// //                 y: [0, -30, 0],
// //                 x: [0, -20, 0],
// //                 scale: [1, 1.2, 1]
// //             }}
// //             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //     </div>
// // );
// const FloatingShapes = () => null;

// // Common FilterSection component
// const FilterSection = ({ title, children, className = '' }) => (
//     <motion.div
//         className={`p-4 rounded-xl shadow-sm bg-white ${className}`}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//     >
//         <h3 className="text-gray-800 font-semibold mb-4">{title}</h3>
//         {children}
//     </motion.div>
// );

// // Common TabGroup component for multiple selection (replacing CheckboxGroup)
// const TabGroup = ({ options = [], value = [], onChange, name }) => (
//     <div className="flex flex-wrap gap-2">
//         {options.map((option) => {
//             const isSelected = value.includes(option);
//             return (
//                 <motion.button
//                     key={option}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => {
//                         const newValue = isSelected
//                             ? value.filter(v => v !== option)
//                             : [...value, option];
//                         onChange(newValue);
//                     }}
//                     className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
//                             ? 'bg-red-500 text-white shadow-md'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                 >
//                     {option}
//                 </motion.button>
//             );
//         })}
//     </div>
// );

// // Common ButtonGroup component for single selection (replacing RadioGroup)
// const ButtonGroup = ({ options = [], value, onChange, name }) => (
//     <div className="flex flex-wrap gap-2">
//         {options.map((option) => {
//             const isSelected = value === option;
//             return (
//                 <motion.button
//                     key={option}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => onChange(option)}
//                     className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
//                             ? 'bg-red-500 text-white shadow-md'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                 >
//                     {option}
//                 </motion.button>
//             );
//         })}
//     </div>
// );

// const RangeSlider = ({ min, max, value, onChange, formatValue }) => {
//     const currentMin = value?.min ?? min;
//     const currentMax = value?.max ?? max;

//     return (
//         <div className="space-y-6 min-w-96">
//             <div className="relative pt-6">
//                 <div className="relative">
//                     {/* Track background */}
//                     <motion.div
//                         className="absolute w-full h-1 bg-gray-200 rounded-lg"
//                         initial={{ scaleX: 0 }}
//                         animate={{ scaleX: 1 }}
//                         transition={{ duration: 0.5 }}
//                     />

//                     {/* Colored track */}
//                     <motion.div
//                         className="absolute h-1 bg-red-500 rounded-lg"
//                         style={{
//                             left: `${((currentMin - min) / (max - min)) * 100}%`,
//                             width: `${((currentMax - currentMin) / (max - min)) * 100}%`
//                         }}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     />

//                     {/* Minimum value slider */}
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         value={currentMin}
//                         onChange={(e) => {
//                             const newMin = Math.min(parseInt(e.target.value), currentMax);
//                             onChange({ min: newMin, max: currentMax });
//                         }}
//                         className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
//                         style={{
//                             height: '20px',
//                             WebkitAppearance: 'none',
//                         }}
//                     />

//                     {/* Maximum value slider */}
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         value={currentMax}
//                         onChange={(e) => {
//                             const newMax = Math.max(parseInt(e.target.value), currentMin);
//                             onChange({ min: currentMin, max: newMax });
//                         }}
//                         className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
//                         style={{
//                             height: '20px',
//                             WebkitAppearance: 'none',
//                         }}
//                     />

//                     {/* Custom styling for the thumbs */}
//                     <style jsx>{`
//                         input[type='range']::-webkit-slider-thumb {
//                             height: 18px;
//                             width: 18px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             -webkit-appearance: none;
//                             pointer-events: auto;
//                             margin-top: -15px;
//                             box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
//                         }

//                         input[type='range']::-moz-range-thumb {
//                             height: 18px;
//                             width: 18px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             border: none;
//                             pointer-events: auto;
//                             box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
//                         }

//                         input[type='range']::-ms-thumb {
//                             height: 18px;
//                             width: 18px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             pointer-events: auto;
//                             box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
//                         }

//                         input[type='range']::-webkit-slider-runnable-track {
//                             background: transparent;
//                             height: 1px;
//                         }

//                         input[type='range']::-moz-range-track {
//                             background: transparent;
//                             height: 1px;
//                         }

//                         input[type='range']::-ms-track {
//                             background: transparent;
//                             height: 1px;
//                         }
//                     `}</style>
//                 </div>
//             </div>

//             {/* Value display */}
//             <div className="flex items-center justify-between text-sm">
//                 <motion.span
//                     className="text-red-500 font-medium px-3 py-1 bg-red-50 rounded-full"
//                     initial={{ x: -10, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     {formatValue(currentMin)}
//                 </motion.span>
//                 <span className="text-gray-400">to</span>
//                 <motion.span
//                     className="text-red-500 font-medium px-3 py-1 bg-red-50 rounded-full"
//                     initial={{ x: 10, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     {formatValue(currentMax)}
//                 </motion.span>
//             </div>
//         </div>
//     );
// };

// // Property Filter Component
// export const PropertyFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const propertyFilters = {};
//         if (appliedFilters) {
//             ['price', 'bedrooms', 'bathrooms', 'propertyType', 'amenities', 'purpose'].forEach(key => {
//                 if (appliedFilters[key]) propertyFilters[key] = appliedFilters[key];
//             });
//         }
//         return propertyFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/filter/structure`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'property'
//         }));
//         setAdvancedFilterOpen(false)

//         // Scroll to the top after the modal is closed
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
//                 />
//             </div>
//         );
//     }

//     return (
//         <motion.div
//             className="w-full max-w-7xl mx-auto p-4 relative overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             <FloatingShapes />

//             <div className="grid grid-cols-4 gap-6 relative z-10">
//                 {/* Left section - takes up 3 columns */}
//                 <div className="col-span-3 grid grid-rows-2 gap-6">
//                     {/* Top box */}
//                     <div className="w-full flex gap-6">
//                         {/* Content for top box */}
//                         <FilterSection title={filters?.propertyType?.label}>
//                             <TabGroup
//                                 options={filters?.propertyType?.values}
//                                 value={selectedFilters.propertyType || []}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, propertyType: value }))}
//                                 name="propertyType"
//                             />
//                         </FilterSection>

//                         <FilterSection title={filters?.purpose?.label}>
//                             <ButtonGroup
//                                 options={filters?.purpose?.values}
//                                 value={selectedFilters?.purpose}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, purpose: value }))}
//                                 name="purpose"
//                             />
//                         </FilterSection>

//                         <FilterSection title={filters?.bedrooms?.label}>
//                             <div className="flex flex-wrap gap-2">
//                                 {[...Array(filters?.bedrooms?.max)].map((_, i) => {
//                                     const isSelected = selectedFilters?.bedrooms === (i + 1);
//                                     return (
//                                         <motion.button
//                                             key={i + 1}
//                                             whileTap={{ scale: 0.95 }}
//                                             onClick={() => setSelectedFilters(prev => ({
//                                                 ...prev,
//                                                 bedrooms: isSelected ? undefined : (i + 1)
//                                             }))}
//                                             className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
//                                                     ? 'bg-red-500 text-white shadow-md'
//                                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                                 }`}
//                                         >
//                                             {i + 1} BHK
//                                         </motion.button>
//                                     );
//                                 })}
//                             </div>
//                         </FilterSection>

//                         <FilterSection title={filters?.furnishing?.label}>
//                             <TabGroup
//                                 options={filters?.furnishing?.values}
//                                 value={selectedFilters?.furnishing || []}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, furnishing: value }))}
//                                 name="furnishing"
//                             />
//                         </FilterSection>

//                     </div>

//                     {/* Bottom box */}
//                     <div className="w-full flex items-start justify-between">
//                         {/* Content for bottom box */}
//                         <FilterSection title={filters?.price?.label} className="flex-1 mr-6">
//                             <RangeSlider
//                                 min={filters?.price?.min}
//                                 max={filters?.price?.max}
//                                 value={selectedFilters?.price || {
//                                     min: filters?.price?.min,
//                                     max: filters?.price?.max
//                                 }}
//                                 onChange={(value) => {
//                                     setSelectedFilters(prev => ({
//                                         ...prev,
//                                         price: value
//                                     }));
//                                 }}
//                                 formatValue={(value) => value >= 10000000
//                                     ? `${(value / 10000000).toFixed(1)} Cr`
//                                     : `${(value / 100000).toFixed(1)} L`
//                                 }
//                             />
//                         </FilterSection>
//                         <FilterSection title={filters?.area?.label} className="flex-1">
//                             <RangeSlider
//                                 min={filters?.area?.min}
//                                 max={filters?.area?.max}
//                                 value={selectedFilters?.area || {
//                                     min: filters?.area?.min,
//                                     max: filters?.area?.max
//                                 }}
//                                 onChange={(value) => {
//                                     setSelectedFilters(prev => ({
//                                         ...prev,
//                                         area: value
//                                     }));
//                                 }}
//                                 formatValue={(value) => `${value} sq ft`}
//                             />
//                         </FilterSection>
//                     </div>
//                 </div>

//                 {/* Right section - takes up 1 column, full height */}
//                 <div className="col-span-1 h-full">
//                     <FilterSection title={filters?.amenities?.label} className="h-full">
//                         <TabGroup
//                             options={filters?.amenities?.values}
//                             value={selectedFilters?.amenities || []}
//                             onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                             name="amenities"
//                         />
//                     </FilterSection>
//                 </div>
//             </div>

//             {/* Buttons */}
//             <motion.div
//                 className="col-span-full flex justify-end gap-4 mt-6"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//             >
//                 <motion.button
//                     onClick={() => setSelectedFilters({})}
//                     className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Reset Filters
//                 </motion.button>
//                 <motion.button
//                     onClick={handleApplyFilters}
//                     className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Apply Filters
//                 </motion.button>
//             </motion.div>
//         </motion.div>
//     );
// };

// // Project Filter Component
// export const ProjectFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const projectFilters = {};
//         if (appliedFilters) {
//             ['projectType', 'projectStatus', 'projectAmenities', 'state'].forEach(key => {
//                 if (appliedFilters[key]) projectFilters[key] = appliedFilters[key];
//             });
//         }
//         return projectFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/projects/filter-options`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'project'
//         }));
//         setAdvancedFilterOpen(false)

//         // Scroll to the top after the modal is closed
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
//                 />
//             </div>
//         );
//     }

//     return (
//         <motion.div
//             className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 relative overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             <FloatingShapes />

//             <FilterSection title={filters?.projectType?.label}>
//                 <TabGroup
//                     options={filters?.projectType?.values}
//                     value={selectedFilters?.projectType || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectType: value }))}
//                     name="projectType"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.projectStatus?.label}>
//                 <TabGroup
//                     options={filters?.projectStatus?.values}
//                     value={selectedFilters?.projectStatus || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectStatus: value }))}
//                     name="projectStatus"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.amenities?.label}>
//                 <TabGroup
//                     options={filters?.amenities?.values}
//                     value={selectedFilters?.amenities || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                     name="projectAmenities"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.state?.label}>
//                 <TabGroup
//                     options={filters?.state?.values}
//                     value={selectedFilters?.state || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, state: value }))}
//                     name="state"
//                 />
//             </FilterSection>

//             <motion.div
//                 className="col-span-full flex justify-end gap-4 mt-6"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//             >
//                 <motion.button
//                     onClick={() => setSelectedFilters({})}
//                     className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Reset Filters
//                 </motion.button>
//                 <motion.button
//                     onClick={handleApplyFilters}
//                     className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Apply Filters
//                 </motion.button>
//             </motion.div>
//         </motion.div>
//     );
// };

// // Building Filter Component
// export const BuildingFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const buildingFilters = {};
//         if (appliedFilters) {
//             ['buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
//                 'age', 'luda', 'amenities', 'totalFloors', 'numberOfFlatsAvailable'].forEach(key => {
//                     if (appliedFilters[key]) buildingFilters[key] = appliedFilters[key];
//                 });
//         }
//         return buildingFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/building/structure`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'building'
//         }));
//         setAdvancedFilterOpen(false);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
//                 />
//             </div>
//         );
//     }

//     // Helper function for increment filters
//     const renderIncrementFilter = (key, filterData) => (
//         <FilterSection title={filterData?.label}>
//             <div className="flex flex-wrap gap-2">
//                 {[...Array(parseInt(filterData?.max))].map((_, i) => {
//                     const isSelected = selectedFilters[key] === (i + 1);
//                     return (
//                         <motion.button
//                             key={i + 1}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 [key]: isSelected ? undefined : (i + 1)
//                             }))}
//                             className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
//                                     ? 'bg-red-500 text-white shadow-md'
//                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                 }`}
//                         >
//                             {i + 1}
//                         </motion.button>
//                     );
//                 })}
//             </div>
//         </FilterSection>
//     );

//     return (
//         <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl gap-6 relative overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             <FloatingShapes />

//             {/* Building Type */}
//             <FilterSection title={filters?.buildingType?.label}>
//                 <TabGroup
//                     options={filters?.buildingType?.values}
//                     value={selectedFilters?.buildingType || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, buildingType: value }))}
//                     name="buildingType"
//                 />
//             </FilterSection>

//             {/* Development Status */}
//             <FilterSection title={filters?.developmentStatus?.label}>
//                 <TabGroup
//                     options={filters?.developmentStatus?.values}
//                     value={selectedFilters?.developmentStatus || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, developmentStatus: value }))}
//                     name="developmentStatus"
//                 />
//             </FilterSection>

//             {/* Front Road */}
//             <FilterSection title={filters?.frontRoad?.label}>
//                 <TabGroup
//                     options={filters?.frontRoad?.values}
//                     value={selectedFilters?.frontRoad || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, frontRoad: value }))}
//                     name="frontRoad"
//                 />
//             </FilterSection>

//             {/* Parking Area */}
//             <FilterSection title={filters?.parkingArea?.label}>
//                 <TabGroup
//                     options={filters?.parkingArea?.values}
//                     value={selectedFilters?.parkingArea || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, parkingArea: value }))}
//                     name="parkingArea"
//                 />
//             </FilterSection>

//             {/* Storey */}
//             <FilterSection title={filters?.storey?.label}>
//                 <TabGroup
//                     options={filters?.storey?.values}
//                     value={selectedFilters?.storey || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, storey: value }))}
//                     name="storey"
//                 />
//             </FilterSection>

//             {/* Age */}
//             <FilterSection title={filters?.age?.label}>
//                 <TabGroup
//                     options={filters?.age?.values}
//                     value={selectedFilters?.age || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, age: value }))}
//                     name="age"
//                 />
//             </FilterSection>

//             {/* LUDA */}
//             <FilterSection title={filters?.luda?.label}>
//                 <TabGroup
//                     options={filters?.luda?.values}
//                     value={selectedFilters?.luda || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, luda: value }))}
//                     name="luda"
//                 />
//             </FilterSection>

//             {/* Total Floors */}
//             {filters?.totalFloors && renderIncrementFilter('totalFloors', filters?.totalFloors)}

//             {/* Number of Flats Available */}
//             {filters?.numberOfFlatsAvailable && renderIncrementFilter('numberOfFlatsAvailable', filters?.numberOfFlatsAvailable)}

//             {/* Amenities */}
//             {filters?.amenities && filters?.amenities?.values?.length > 0 && (
//                 <FilterSection title={filters?.amenities?.label}>
//                     <TabGroup
//                         options={filters?.amenities?.values}
//                         value={selectedFilters?.amenities || []}
//                         onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                         name="amenities"
//                     />
//                 </FilterSection>
//             )}

//             <motion.div
//                 className="col-span-full flex justify-end gap-4 mt-6"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//             >
//                 <motion.button
//                     onClick={() => setSelectedFilters({})}
//                     className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Reset Filters
//                 </motion.button>
//                 <motion.button
//                     onClick={handleApplyFilters}
//                     className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Apply Filters
//                 </motion.button>
//             </motion.div>
//         </motion.div>
//     );
// };

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { applyFilter } from '../redux/features/Map/mapSlice';
// import { base_url } from '../utils/base_url';
// import { motion } from 'framer-motion';

// // Empty component as floating shapes are removed
// const FloatingShapes = () => null;

// // Common FilterSection component - removed shadow and border
// const FilterSection = ({ title, children, className = '' }) => (
//     <motion.div
//         className={`p-4 ${className}`}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//     >
//         <h3 className="text-gray-800 font-semibold mb-4">{title}</h3>
//         {children}
//     </motion.div>
// );

// // Common TabGroup component for multiple selection (replacing CheckboxGroup)
// const TabGroup = ({ options = [], value = [], onChange, name }) => (
//     <div className="flex flex-wrap gap-2">
//         {options.map((option) => {
//             const isSelected = value.includes(option);
//             return (
//                 <motion.button
//                     key={option}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => {
//                         const newValue = isSelected
//                             ? value.filter(v => v !== option)
//                             : [...value, option];
//                         onChange(newValue);
//                     }}
//                     className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
//                             ? 'bg-red-500 text-white shadow-md'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                 >
//                     {option}
//                 </motion.button>
//             );
//         })}
//     </div>
// );

// // Common ButtonGroup component for single selection (replacing RadioGroup)
// const ButtonGroup = ({ options = [], value, onChange, name }) => (
//     <div className="flex flex-wrap gap-2">
//         {options.map((option) => {
//             const isSelected = value === option;
//             return (
//                 <motion.button
//                     key={option}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => onChange(option)}
//                     className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
//                             ? 'bg-red-500 text-white shadow-md'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                 >
//                     {option}
//                 </motion.button>
//             );
//         })}
//     </div>
// );

// const RangeSlider = ({ min, max, value, onChange, formatValue }) => {
//     const currentMin = value?.min ?? min;
//     const currentMax = value?.max ?? max;

//     return (
//         <div className="space-y-6 min-w-96">
//             <div className="relative pt-6">
//                 <div className="relative">
//                     {/* Track background */}
//                     <motion.div
//                         className="absolute w-full h-1 bg-gray-200 rounded-lg"
//                         initial={{ scaleX: 0 }}
//                         animate={{ scaleX: 1 }}
//                         transition={{ duration: 0.5 }}
//                     />

//                     {/* Colored track */}
//                     <motion.div
//                         className="absolute h-1 bg-red-500 rounded-lg"
//                         style={{
//                             left: `${((currentMin - min) / (max - min)) * 100}%`,
//                             width: `${((currentMax - currentMin) / (max - min)) * 100}%`
//                         }}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     />

//                     {/* Minimum value slider */}
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         value={currentMin}
//                         onChange={(e) => {
//                             const newMin = Math.min(parseInt(e.target.value), currentMax);
//                             onChange({ min: newMin, max: currentMax });
//                         }}
//                         className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
//                         style={{
//                             height: '20px',
//                             WebkitAppearance: 'none',
//                         }}
//                     />

//                     {/* Maximum value slider */}
//                     <input
//                         type="range"
//                         min={min}
//                         max={max}
//                         value={currentMax}
//                         onChange={(e) => {
//                             const newMax = Math.max(parseInt(e.target.value), currentMin);
//                             onChange({ min: currentMin, max: newMax });
//                         }}
//                         className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
//                         style={{
//                             height: '20px',
//                             WebkitAppearance: 'none',
//                         }}
//                     />

//                     {/* Custom styling for the thumbs */}
//                     <style jsx>{`
//                         input[type='range']::-webkit-slider-thumb {
//                             height: 18px;
//                             width: 18px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             -webkit-appearance: none;
//                             pointer-events: auto;
//                             margin-top: -15px;
//                             box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
//                         }

//                         input[type='range']::-moz-range-thumb {
//                             height: 18px;
//                             width: 18px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             border: none;
//                             pointer-events: auto;
//                             box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
//                         }

//                         input[type='range']::-ms-thumb {
//                             height: 18px;
//                             width: 18px;
//                             border-radius: 50%;
//                             background: #ef4444;
//                             cursor: pointer;
//                             pointer-events: auto;
//                             box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
//                         }

//                         input[type='range']::-webkit-slider-runnable-track {
//                             background: transparent;
//                             height: 1px;
//                         }

//                         input[type='range']::-moz-range-track {
//                             background: transparent;
//                             height: 1px;
//                         }

//                         input[type='range']::-ms-track {
//                             background: transparent;
//                             height: 1px;
//                         }
//                     `}</style>
//                 </div>
//             </div>

//             {/* Value display */}
//             <div className="flex items-center justify-between text-sm">
//                 <motion.span
//                     className="text-red-500 font-medium px-3 py-1 bg-red-50 rounded-full"
//                     initial={{ x: -10, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     {formatValue(currentMin)}
//                 </motion.span>
//                 <span className="text-gray-400">to</span>
//                 <motion.span
//                     className="text-red-500 font-medium px-3 py-1 bg-red-50 rounded-full"
//                     initial={{ x: 10, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     {formatValue(currentMax)}
//                 </motion.span>
//             </div>
//         </div>
//     );
// };

// // Property Filter Component
// export const PropertyFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const propertyFilters = {};
//         if (appliedFilters) {
//             ['price', 'bedrooms', 'bathrooms', 'propertyType', 'amenities', 'purpose'].forEach(key => {
//                 if (appliedFilters[key]) propertyFilters[key] = appliedFilters[key];
//             });
//         }
//         return propertyFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/filter/structure`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'property'
//         }));
//         setAdvancedFilterOpen(false)

//         // Scroll to the top after the modal is closed
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
//                 />
//             </div>
//         );
//     }

//     return (
//         <motion.div
//             className="w-full max-w-7xl mx-auto p-4 relative overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             <FloatingShapes />

//             <div className="grid grid-cols-4 gap-6 relative z-10">
//                 {/* Left section - takes up 3 columns */}
//                 <div className="col-span-3 grid grid-rows-2 gap-6">
//                     {/* Top box */}
//                     <div className="w-full flex gap-6">
//                         {/* Content for top box */}
//                         <FilterSection title={filters?.propertyType?.label}>
//                             <TabGroup
//                                 options={filters?.propertyType?.values}
//                                 value={selectedFilters.propertyType || []}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, propertyType: value }))}
//                                 name="propertyType"
//                             />
//                         </FilterSection>

//                         <FilterSection title={filters?.purpose?.label}>
//                             <ButtonGroup
//                                 options={filters?.purpose?.values}
//                                 value={selectedFilters?.purpose}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, purpose: value }))}
//                                 name="purpose"
//                             />
//                         </FilterSection>

//                         <FilterSection title={filters?.bedrooms?.label}>
//                             <div className="flex flex-wrap gap-2">
//                                 {[...Array(filters?.bedrooms?.max)].map((_, i) => {
//                                     const isSelected = selectedFilters?.bedrooms === (i + 1);
//                                     return (
//                                         <motion.button
//                                             key={i + 1}
//                                             whileTap={{ scale: 0.95 }}
//                                             onClick={() => setSelectedFilters(prev => ({
//                                                 ...prev,
//                                                 bedrooms: isSelected ? undefined : (i + 1)
//                                             }))}
//                                             className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
//                                                     ? 'bg-red-500 text-white shadow-md'
//                                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                                 }`}
//                                         >
//                                             {i + 1} BHK
//                                         </motion.button>
//                                     );
//                                 })}
//                             </div>
//                         </FilterSection>

//                         <FilterSection title={filters?.furnishing?.label}>
//                             <TabGroup
//                                 options={filters?.furnishing?.values}
//                                 value={selectedFilters?.furnishing || []}
//                                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, furnishing: value }))}
//                                 name="furnishing"
//                             />
//                         </FilterSection>

//                     </div>

//                     {/* Bottom box */}
//                     <div className="w-full flex items-start justify-between">
//                         {/* Content for bottom box */}
//                         <FilterSection title={filters?.price?.label} className="flex-1 mr-6">
//                             <RangeSlider
//                                 min={filters?.price?.min}
//                                 max={filters?.price?.max}
//                                 value={selectedFilters?.price || {
//                                     min: filters?.price?.min,
//                                     max: filters?.price?.max
//                                 }}
//                                 onChange={(value) => {
//                                     setSelectedFilters(prev => ({
//                                         ...prev,
//                                         price: value
//                                     }));
//                                 }}
//                                 formatValue={(value) => value >= 10000000
//                                     ? `${(value / 10000000).toFixed(1)} Cr`
//                                     : `${(value / 100000).toFixed(1)} L`
//                                 }
//                             />
//                         </FilterSection>
//                         <FilterSection title={filters?.area?.label} className="flex-1">
//                             <RangeSlider
//                                 min={filters?.area?.min}
//                                 max={filters?.area?.max}
//                                 value={selectedFilters?.area || {
//                                     min: filters?.area?.min,
//                                     max: filters?.area?.max
//                                 }}
//                                 onChange={(value) => {
//                                     setSelectedFilters(prev => ({
//                                         ...prev,
//                                         area: value
//                                     }));
//                                 }}
//                                 formatValue={(value) => `${value} sq ft`}
//                             />
//                         </FilterSection>
//                     </div>
//                 </div>

//                 {/* Right section - takes up 1 column, full height */}
//                 <div className="col-span-1 h-full">
//                     <FilterSection title={filters?.amenities?.label} className="h-full">
//                         <TabGroup
//                             options={filters?.amenities?.values}
//                             value={selectedFilters?.amenities || []}
//                             onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                             name="amenities"
//                         />
//                     </FilterSection>
//                 </div>
//             </div>

//             {/* Buttons */}
//             <motion.div
//                 className="col-span-full flex justify-end gap-4 mt-6"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//             >
//                 <motion.button
//                     onClick={() => setSelectedFilters({})}
//                     className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Reset Filters
//                 </motion.button>
//                 <motion.button
//                     onClick={handleApplyFilters}
//                     className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Apply Filters
//                 </motion.button>
//             </motion.div>
//         </motion.div>
//     );
// };

// // Project Filter Component
// export const ProjectFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const projectFilters = {};
//         if (appliedFilters) {
//             ['projectType', 'projectStatus', 'projectAmenities', 'state'].forEach(key => {
//                 if (appliedFilters[key]) projectFilters[key] = appliedFilters[key];
//             });
//         }
//         return projectFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/projects/filter-options`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'project'
//         }));
//         setAdvancedFilterOpen(false)

//         // Scroll to the top after the modal is closed
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
//                 />
//             </div>
//         );
//     }

//     return (
//         <motion.div
//             className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 relative overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             <FloatingShapes />

//             <FilterSection title={filters?.projectType?.label}>
//                 <TabGroup
//                     options={filters?.projectType?.values}
//                     value={selectedFilters?.projectType || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectType: value }))}
//                     name="projectType"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.projectStatus?.label}>
//                 <TabGroup
//                     options={filters?.projectStatus?.values}
//                     value={selectedFilters?.projectStatus || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectStatus: value }))}
//                     name="projectStatus"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.amenities?.label}>
//                 <TabGroup
//                     options={filters?.amenities?.values}
//                     value={selectedFilters?.amenities || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                     name="projectAmenities"
//                 />
//             </FilterSection>

//             <FilterSection title={filters?.state?.label}>
//                 <TabGroup
//                     options={filters?.state?.values}
//                     value={selectedFilters?.state || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, state: value }))}
//                     name="state"
//                 />
//             </FilterSection>

//             <motion.div
//                 className="col-span-full flex justify-end gap-4 mt-6"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//             >
//                 <motion.button
//                     onClick={() => setSelectedFilters({})}
//                     className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Reset Filters
//                 </motion.button>
//                 <motion.button
//                     onClick={handleApplyFilters}
//                     className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Apply Filters
//                 </motion.button>
//             </motion.div>
//         </motion.div>
//     );
// };

// // Building Filter Component
// export const BuildingFilter = ({ setAdvancedFilterOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const buildingFilters = {};
//         if (appliedFilters) {
//             ['buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
//                 'age', 'luda', 'amenities', 'totalFloors', 'numberOfFlatsAvailable'].forEach(key => {
//                     if (appliedFilters[key]) buildingFilters[key] = appliedFilters[key];
//                 });
//         }
//         return buildingFilters;
//     });

//     useEffect(() => {
//         fetch(`${base_url}/api/web/building/structure`)
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     const handleApplyFilters = () => {
//         dispatch(applyFilter({
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'building'
//         }));
//         setAdvancedFilterOpen(false);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     if (!filters) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
//                 />
//             </div>
//         );
//     }

//     // Helper function for increment filters
//     const renderIncrementFilter = (key, filterData) => (
//         <FilterSection title={filterData?.label}>
//             <div className="flex flex-wrap gap-2">
//                 {[...Array(parseInt(filterData?.max))].map((_, i) => {
//                     const isSelected = selectedFilters[key] === (i + 1);
//                     return (
//                         <motion.button
//                             key={i + 1}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 [key]: isSelected ? undefined : (i + 1)
//                             }))}
//                             className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
//                                     ? 'bg-red-500 text-white shadow-md'
//                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                 }`}
//                         >
//                             {i + 1}
//                         </motion.button>
//                     );
//                 })}
//             </div>
//         </FilterSection>
//     );

//     return (
//         <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl gap-6 relative overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             <FloatingShapes />

//             {/* Building Type */}
//             <FilterSection title={filters?.buildingType?.label}>
//                 <TabGroup
//                     options={filters?.buildingType?.values}
//                     value={selectedFilters?.buildingType || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, buildingType: value }))}
//                     name="buildingType"
//                 />
//             </FilterSection>

//             {/* Development Status */}
//             <FilterSection title={filters?.developmentStatus?.label}>
//                 <TabGroup
//                     options={filters?.developmentStatus?.values}
//                     value={selectedFilters?.developmentStatus || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, developmentStatus: value }))}
//                     name="developmentStatus"
//                 />
//             </FilterSection>

//             {/* Front Road */}
//             <FilterSection title={filters?.frontRoad?.label}>
//                 <TabGroup
//                     options={filters?.frontRoad?.values}
//                     value={selectedFilters?.frontRoad || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, frontRoad: value }))}
//                     name="frontRoad"
//                 />
//             </FilterSection>

//             {/* Parking Area */}
//             <FilterSection title={filters?.parkingArea?.label}>
//                 <TabGroup
//                     options={filters?.parkingArea?.values}
//                     value={selectedFilters?.parkingArea || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, parkingArea: value }))}
//                     name="parkingArea"
//                 />
//             </FilterSection>

//             {/* Storey */}
//             <FilterSection title={filters?.storey?.label}>
//                 <TabGroup
//                     options={filters?.storey?.values}
//                     value={selectedFilters?.storey || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, storey: value }))}
//                     name="storey"
//                 />
//             </FilterSection>

//             {/* Age */}
//             <FilterSection title={filters?.age?.label}>
//                 <TabGroup
//                     options={filters?.age?.values}
//                     value={selectedFilters?.age || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, age: value }))}
//                     name="age"
//                 />
//             </FilterSection>

//             {/* LUDA */}
//             <FilterSection title={filters?.luda?.label}>
//                 <TabGroup
//                     options={filters?.luda?.values}
//                     value={selectedFilters?.luda || []}
//                     onChange={(value) => setSelectedFilters(prev => ({ ...prev, luda: value }))}
//                     name="luda"
//                 />
//             </FilterSection>

//             {/* Total Floors */}
//             {filters?.totalFloors && renderIncrementFilter('totalFloors', filters?.totalFloors)}

//             {/* Number of Flats Available */}
//             {filters?.numberOfFlatsAvailable && renderIncrementFilter('numberOfFlatsAvailable', filters?.numberOfFlatsAvailable)}

//             {/* Amenities */}
//             {filters?.amenities && filters?.amenities?.values?.length > 0 && (
//                 <FilterSection title={filters?.amenities?.label}>
//                     <TabGroup
//                         options={filters?.amenities?.values}
//                         value={selectedFilters?.amenities || []}
//                         onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
//                         name="amenities"
//                     />
//                 </FilterSection>
//             )}

//             <motion.div
//                 className="col-span-full flex justify-end gap-4 mt-6"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//             >
//                 <motion.button
//                     onClick={() => setSelectedFilters({})}
//                     className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Reset Filters
//                 </motion.button>
//                 <motion.button
//                     onClick={handleApplyFilters}
//                     className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     Apply Filters
//                 </motion.button>
//             </motion.div>
//         </motion.div>
//     );
// };


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter } from '../redux/features/Map/mapSlice';
import { base_url } from '../utils/base_url';
import { motion } from 'framer-motion';

// Empty component as floating shapes are removed
const FloatingShapes = () => null;

// Redesigned FilterItem component for horizontal layout
const FilterItem = ({ title, children, className = '' }) => (
    <motion.div
        className={`flex flex-col mb-6 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
    >
        <h3 className="text-gray-800 font-semibold mb-2">{title}</h3>
        <div className="flex-1">{children}</div>
    </motion.div>
);

// Common TabGroup component for multiple selection (replacing CheckboxGroup)
const TabGroup = ({ options = [], value = [], onChange, name }) => (
    <div className="flex flex-wrap gap-2">
        {options.map((option) => {
            const isSelected = value.includes(option);
            return (
                <motion.button
                    key={option}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const newValue = isSelected
                            ? value.filter(v => v !== option)
                            : [...value, option];
                        onChange(newValue);
                    }}
                    className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
                        ? 'bg-red-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {option}
                </motion.button>
            );
        })}
    </div>
);

// Common ButtonGroup component for single selection (replacing RadioGroup)
const ButtonGroup = ({ options = [], value, onChange, name }) => (
    <div className="flex flex-wrap gap-2">
        {options.map((option) => {
            const isSelected = value === option;
            return (
                <motion.button
                    key={option}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onChange(option)}
                    className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
                        ? 'bg-red-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {option}
                </motion.button>
            );
        })}
    </div>
);

const RangeSlider = ({ min, max, value, onChange, formatValue }) => {
    const currentMin = value?.min ?? min;
    const currentMax = value?.max ?? max;

    return (
        <div className="space-y-6">
            <div className="relative pt-6">
                <div className="relative">
                    {/* Track background */}
                    <motion.div
                        className="absolute w-full h-1 bg-gray-200 rounded-lg"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Colored track */}
                    <motion.div
                        className="absolute h-1 bg-red-500 rounded-lg"
                        style={{
                            left: `${((currentMin - min) / (max - min)) * 100}%`,
                            width: `${((currentMax - currentMin) / (max - min)) * 100}%`
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />

                    {/* Minimum value slider */}
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={currentMin}
                        onChange={(e) => {
                            const newMin = Math.min(parseInt(e.target.value), currentMax);
                            onChange({ min: newMin, max: currentMax });
                        }}
                        className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
                        style={{
                            height: '20px',
                            WebkitAppearance: 'none',
                        }}
                    />

                    {/* Maximum value slider */}
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={currentMax}
                        onChange={(e) => {
                            const newMax = Math.max(parseInt(e.target.value), currentMin);
                            onChange({ min: currentMin, max: newMax });
                        }}
                        className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
                        style={{
                            height: '20px',
                            WebkitAppearance: 'none',
                        }}
                    />

                    {/* Custom styling for the thumbs */}
                    <style jsx>{`
                        input[type='range']::-webkit-slider-thumb {
                            height: 18px;
                            width: 18px;
                            border-radius: 50%;
                            background: #ef4444;
                            cursor: pointer;
                            -webkit-appearance: none;
                            pointer-events: auto;
                            margin-top: -15px;
                            box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
                        }

                        input[type='range']::-moz-range-thumb {
                            height: 18px;
                            width: 18px;
                            border-radius: 50%;
                            background: #ef4444;
                            cursor: pointer;
                            border: none;
                            pointer-events: auto;
                            box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
                        }

                        input[type='range']::-ms-thumb {
                            height: 18px;
                            width: 18px;
                            border-radius: 50%;
                            background: #ef4444;
                            cursor: pointer;
                            pointer-events: auto;
                            box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
                        }

                        input[type='range']::-webkit-slider-runnable-track {
                            background: transparent;
                            height: 1px;
                        }

                        input[type='range']::-moz-range-track {
                            background: transparent;
                            height: 1px;
                        }

                        input[type='range']::-ms-track {
                            background: transparent;
                            height: 1px;
                        }
                    `}</style>
                </div>
            </div>

            {/* Value display */}
            <div className="flex items-center justify-between text-sm">
                <motion.span
                    className="text-red-500 font-medium px-3 py-1 bg-red-50 rounded-full"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {formatValue(currentMin)}
                </motion.span>
                <span className="text-gray-400">to</span>
                <motion.span
                    className="text-red-500 font-medium px-3 py-1 bg-red-50 rounded-full"
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {formatValue(currentMax)}
                </motion.span>
            </div>
        </div>
    );
};

// Property Filter Component - Redesigned
export const PropertyFilter = ({ setAdvancedFilterOpen }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [filters, setFilters] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(() => {
        const propertyFilters = {};
        if (appliedFilters) {
            ['price', 'bedrooms', 'bathrooms', 'propertyType', 'amenities', 'purpose', 'furnishing', 'area'].forEach(key => {
                if (appliedFilters[key]) propertyFilters[key] = appliedFilters[key];
            });
        }
        return propertyFilters;
    });

    useEffect(() => {
        fetch(`${base_url}/api/web/filter/structure`)
            .then(res => res.json())
            .then(data => {
                setFilters(data.data);
            });
    }, []);

    const handleApplyFilters = () => {
        dispatch(applyFilter({
            ...appliedFilters,
            ...selectedFilters,
            filterType: 'property'
        }));
        setAdvancedFilterOpen(false)

        // Scroll to the top after the modal is closed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!filters) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <motion.div
            className="w-full max-w-7xl mx-auto p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <FloatingShapes />

            {/* Main content section */}
            <div className="relative z-10">
                {/* First row - Property Type and Purpose */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.propertyType?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.propertyType?.values}
                            value={selectedFilters.propertyType || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, propertyType: value }))}
                            name="propertyType"
                        />
                    </FilterItem>

                    <FilterItem title={filters?.purpose?.label} className="flex-1 min-w-64">
                        <ButtonGroup
                            options={filters?.purpose?.values}
                            value={selectedFilters?.purpose}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, purpose: value }))}
                            name="purpose"
                        />
                    </FilterItem>
                </div>

                {/* Second row - Bedrooms and Furnishing */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.bedrooms?.label} className="flex-1 min-w-64">
                        <div className="flex flex-wrap gap-2">
                            {[...Array(filters?.bedrooms?.max)].map((_, i) => {
                                const isSelected = selectedFilters?.bedrooms === (i + 1);
                                return (
                                    <motion.button
                                        key={i + 1}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedFilters(prev => ({
                                            ...prev,
                                            bedrooms: isSelected ? undefined : (i + 1)
                                        }))}
                                        className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
                                            ? 'bg-red-500 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {i + 1} BHK
                                    </motion.button>
                                );
                            })}
                        </div>
                    </FilterItem>

                    <FilterItem title={filters?.furnishing?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.furnishing?.values}
                            value={selectedFilters?.furnishing || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, furnishing: value }))}
                            name="furnishing"
                        />
                    </FilterItem>
                </div>

                {/* Third row - Price and Area sliders */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.price?.label} className="flex-1 min-w-64">
                        <RangeSlider
                            min={filters?.price?.min}
                            max={filters?.price?.max}
                            value={selectedFilters?.price || {
                                min: filters?.price?.min,
                                max: filters?.price?.max
                            }}
                            onChange={(value) => {
                                setSelectedFilters(prev => ({
                                    ...prev,
                                    price: value
                                }));
                            }}
                            formatValue={(value) => value >= 10000000
                                ? `${(value / 10000000).toFixed(1)} Cr`
                                : `${(value / 100000).toFixed(1)} L`
                            }
                        />
                    </FilterItem>

                    <FilterItem title={filters?.area?.label} className="flex-1 min-w-64">
                        <RangeSlider
                            min={filters?.area?.min}
                            max={filters?.area?.max}
                            value={selectedFilters?.area || {
                                min: filters?.area?.min,
                                max: filters?.area?.max
                            }}
                            onChange={(value) => {
                                setSelectedFilters(prev => ({
                                    ...prev,
                                    area: value
                                }));
                            }}
                            formatValue={(value) => `${value} sq ft`}
                        />
                    </FilterItem>
                </div>

                {/* Amenities section */}
                <FilterItem title={filters?.amenities?.label}>
                    <TabGroup
                        options={filters?.amenities?.values}
                        value={selectedFilters?.amenities || []}
                        onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
                        name="amenities"
                    />
                </FilterItem>
            </div>

            {/* Buttons */}
            <motion.div
                className="flex justify-end gap-4 mt-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.button
                    onClick={() => setSelectedFilters({})}
                    className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Reset Filters
                </motion.button>
                <motion.button
                    onClick={handleApplyFilters}
                    className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Apply Filters
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

// Project Filter Component - Redesigned
export const ProjectFilter = ({ setAdvancedFilterOpen }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [filters, setFilters] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(() => {
        const projectFilters = {};
        if (appliedFilters) {
            ['projectType', 'projectStatus', 'projectAmenities', 'state'].forEach(key => {
                if (appliedFilters[key]) projectFilters[key] = appliedFilters[key];
            });
        }
        return projectFilters;
    });

    useEffect(() => {
        fetch(`${base_url}/api/web/projects/filter-options`)
            .then(res => res.json())
            .then(data => {
                setFilters(data.data);
            });
    }, []);

    const handleApplyFilters = () => {
        dispatch(applyFilter({
            ...appliedFilters,
            ...selectedFilters,
            filterType: 'project'
        }));
        setAdvancedFilterOpen(false)

        // Scroll to the top after the modal is closed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!filters) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <motion.div
            className="w-full max-w-7xl mx-auto p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <FloatingShapes />

            {/* Main content section */}
            <div className="relative z-10">
                {/* First row - Project Type and Project Status */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.projectType?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.projectType?.values}
                            value={selectedFilters?.projectType || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectType: value }))}
                            name="projectType"
                        />
                    </FilterItem>

                    <FilterItem title={filters?.projectStatus?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.projectStatus?.values}
                            value={selectedFilters?.projectStatus || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectStatus: value }))}
                            name="projectStatus"
                        />
                    </FilterItem>
                </div>

                {/* Second row - Amenities and State */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.amenities?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.amenities?.values}
                            value={selectedFilters?.amenities || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
                            name="projectAmenities"
                        />
                    </FilterItem>

                    <FilterItem title={filters?.state?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.state?.values}
                            value={selectedFilters?.state || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, state: value }))}
                            name="state"
                        />
                    </FilterItem>
                </div>
            </div>

            {/* Buttons */}
            <motion.div
                className="flex justify-end gap-4 mt-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.button
                    onClick={() => setSelectedFilters({})}
                    className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Reset Filters
                </motion.button>
                <motion.button
                    onClick={handleApplyFilters}
                    className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Apply Filters
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

// Building Filter Component - Redesigned
export const BuildingFilter = ({ setAdvancedFilterOpen }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [filters, setFilters] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(() => {
        const buildingFilters = {};
        if (appliedFilters) {
            ['buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
                'age', 'luda', 'amenities', 'totalFloors', 'numberOfFlatsAvailable'].forEach(key => {
                    if (appliedFilters[key]) buildingFilters[key] = appliedFilters[key];
                });
        }
        return buildingFilters;
    });

    useEffect(() => {
        fetch(`${base_url}/api/web/building/structure`)
            .then(res => res.json())
            .then(data => {
                setFilters(data.data);
            });
    }, []);

    const handleApplyFilters = () => {
        dispatch(applyFilter({
            ...appliedFilters,
            ...selectedFilters,
            filterType: 'building'
        }));
        setAdvancedFilterOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!filters) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    // Helper function for increment filters
    const renderIncrementFilter = (key, filterData) => (
        <div className="flex flex-wrap gap-2">
            {[...Array(parseInt(filterData?.max))].map((_, i) => {
                const isSelected = selectedFilters[key] === (i + 1);
                return (
                    <motion.button
                        key={i + 1}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedFilters(prev => ({
                            ...prev,
                            [key]: isSelected ? undefined : (i + 1)
                        }))}
                        className={`px-3 py-2 rounded-full text-sm transition-all ${isSelected
                            ? 'bg-red-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {i + 1}
                    </motion.button>
                );
            })}
        </div>
    );

    return (
        <motion.div
            className="w-full max-w-7xl mx-auto p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <FloatingShapes />

            {/* Main content section */}
            <div className="relative z-10">
                {/* First row - Building Type and Development Status */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.buildingType?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.buildingType?.values}
                            value={selectedFilters?.buildingType || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, buildingType: value }))}
                            name="buildingType"
                        />
                    </FilterItem>

                    <FilterItem title={filters?.developmentStatus?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.developmentStatus?.values}
                            value={selectedFilters?.developmentStatus || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, developmentStatus: value }))}
                            name="developmentStatus"
                        />
                    </FilterItem>
                </div>

                {/* Second row - Front Road and Parking Area */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.frontRoad?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.frontRoad?.values}
                            value={selectedFilters?.frontRoad || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, frontRoad: value }))}
                            name="frontRoad"
                        />
                    </FilterItem>

                    <FilterItem title={filters?.parkingArea?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.parkingArea?.values}
                            value={selectedFilters?.parkingArea || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, parkingArea: value }))}
                            name="parkingArea"
                        />
                    </FilterItem>
                </div>

                {/* Third row - Storey and Age */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.storey?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.storey?.values}
                            value={selectedFilters?.storey || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, storey: value }))}
                            name="storey"
                        />
                    </FilterItem>

                    <FilterItem title={filters?.age?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.age?.values}
                            value={selectedFilters?.age || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, age: value }))}
                            name="age"
                        />
                    </FilterItem>
                </div>

                {/* Fourth row - LUDA and Total Floors */}
                <div className="flex flex-wrap gap-x-8">
                    <FilterItem title={filters?.luda?.label} className="flex-1 min-w-64">
                        <TabGroup
                            options={filters?.luda?.values}
                            value={selectedFilters?.luda || []}
                            onChange={(value) => setSelectedFilters(prev => ({ ...prev, luda: value }))}
                            name="luda"
                        />
                    </FilterItem>

                    {filters?.totalFloors && (
                        <FilterItem title={filters?.totalFloors?.label} className="flex-1 min-w-64">
                            {renderIncrementFilter('totalFloors', filters?.totalFloors)}
                        </FilterItem>
                    )}
                </div>

                {/* Fifth row - Number of Flats and Amenities (if available) */}
                <div className="flex flex-wrap gap-x-8">
                    {filters?.numberOfFlatsAvailable && (
                        <FilterItem title={filters?.numberOfFlatsAvailable?.label} className="flex-1 min-w-64">
                            {renderIncrementFilter('numberOfFlatsAvailable', filters?.numberOfFlatsAvailable)}
                        </FilterItem>
                    )}

                    {filters?.amenities && filters?.amenities?.values?.length > 0 && (
                        <FilterItem title={filters?.amenities?.label} className="flex-1 min-w-64">
                            <TabGroup
                                options={filters?.amenities?.values}
                                value={selectedFilters?.amenities || []}
                                onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
                                name="amenities"
                            />
                        </FilterItem>
                    )}
                </div>
            </div>

            {/* Buttons */}
            <motion.div
                className="flex justify-end gap-4 mt-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.button
                    onClick={() => setSelectedFilters({})}
                    className="px-5 py-2.5 border border-gray-300 rounded-full font-medium transition hover:bg-gray-50 shadow-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Reset Filters
                </motion.button>
                <motion.button
                    onClick={handleApplyFilters}
                    className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium transition hover:bg-red-700 shadow-md"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Apply Filters
                </motion.button>
            </motion.div>
        </motion.div>
    );
};