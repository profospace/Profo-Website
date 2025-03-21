// // import React, { useEffect, useRef, useState } from 'react';
// // import { Modal } from 'antd';
// // import { Button } from "@material-tailwind/react";
// // import { IconButton } from '@material-tailwind/react';
// // import RangeSlider from '../components/RangeSlider';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getAllFilteredProperties } from '../redux/features/Properties/propertiesSlice';

// // import { FaKitchenSet } from 'react-icons/fa6';
// // import { FaMinus, FaPlus } from 'react-icons/fa';
// // import { FaCar, FaSwimmer, FaGuitar, FaHome, FaCloud } from 'react-icons/fa';
// // import { GrLock, GrWifi } from 'react-icons/gr';
// // import { RiMotorbikeFill } from 'react-icons/ri';
// // import { FaMoneyBillWave, FaStore, FaWarehouse, FaBuilding } from 'react-icons/fa';
// // import { applyFilter } from '../redux/features/Map/mapSlice';

// // // Mapping amenities to their respective icons
// // const amenityIconMap = {
// //     "security patrol": <GrLock size={25} />,
// //     "pet-friendly facilities": <FaHome size={25} />,
// //     "parking (garage/open)": <FaCar size={25} />,
// //     "valet parking": <FaCar size={25} />,
// //     "guest parking": <FaCar size={25} />,
// //     "bike storage": <RiMotorbikeFill size={25} />,
// //     "parcel lockers": <FaHome size={25} />,
// //     "business center": <FaCloud size={25} />,
// //     "conference/meeting rooms": <FaCloud size={25} />,
// //     "swimming-pool": <FaSwimmer size={25} />,
// //     "gym": <FaGuitar size={25} />,
// //     "parking": <FaCar size={25} />,
// //     "24x7 security": <GrLock size={25} />,
// //     "lift": <FaHome size={25} />,
// //     "garden": <FaHome size={25} />,
// //     "power backup": <FaCloud size={25} />
// // };

// // // Fallback icon for unknown amenities
// // const fallbackIcon = <FaHome size={25} />;

// // // Mapping purposes to their respective icons
// // const purposeIconMap = {
// //     "rent": <FaMoneyBillWave size={25} />,
// //     "sale": <FaHome size={25} />,
// //     "lease": <FaStore size={25} />,
// //     "buy": <FaStore size={25} />,
// //     // Add more purposes and their corresponding icons here
// // };

// // // Fallback icon for unknown purposes
// // const fallbackPurposeIcon = <FaHome size={25} />;


// // // Mapping type_name to their respective icons
// // const typeNameIconMap = {
// //     "warehouses": <FaWarehouse size={25} />,
// //     "shops": <FaStore size={25} />,
// //     "apartment": <FaBuilding size={25} />,
// //     "commercial": <FaBuilding size={25} />,
// //     "house": <FaHome size={25} />,
// //     "villa": <FaHome size={25} />,
// //     // Add more types and their corresponding icons here
// // };

// // // Fallback icon for unknown types
// // const fallbackTypeIcon = <FaHome size={25} />;

// // const FilterComponent = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
// //     const dispatch = useDispatch()
// //     const [filterRanges, setFilterRanges] = useState({})
// //     const [priceRange, setPriceRange] = useState({
// //         min: 0,
// //         max: 0,
// //     });
// //     const { properties } = useSelector(state => state.properties)



// //     console.log(filterRanges)
// //     /* calculating properties Keys to show dynAMIC range filter */
// //     const calculatingFiltersValues = () => {
// //         if (!properties || properties.length === 0) return;

// //         const result = properties?.reduce(
// //             (acc, property) => {
// //                 if (property.bedrooms !== null && property.bedrooms !== undefined) {
// //                     acc.maxBedrooms = Math.max(acc.maxBedrooms, property.bedrooms);
// //                 }
// //                 if (property.bathrooms !== null && property.bathrooms !== undefined) {
// //                     acc.maxBathrooms = Math.max(acc.maxBathrooms, property.bathrooms);
// //                 }
// //                 if (property.floor !== null && property.floor !== undefined) {
// //                     acc.maxfloor = Math.max(acc.maxfloor, property.floor);
// //                 }
// //                 if (property.price !== null && property.price !== undefined) {
// //                     acc.maxPrice = Math.max(acc.maxPrice, property.price);
// //                     acc.minPrice = Math.min(acc.minPrice, property.price);
// //                 }
// //                 // Collect amenities - if new added that will also be collected here
// //                 if (Array.isArray(property.amenities)) {
// //                     const validAmenities = property.amenities
// //                         .filter((amenity) => amenity && amenity.trim() !== "") // Filter out empty or undefined values
// //                         .map((amenity) => amenity.trim().toLowerCase()); // Normalize the amenity names to lowercase

// //                     // Combine amenities while removing duplicates (case-insensitive)
// //                     acc.amenities = [
// //                         ...new Set([
// //                             ...acc.amenities,
// //                             ...validAmenities,
// //                         ]),
// //                     ];
// //                 }

// //                 // Purpose
// //                 const uniquePurposes = properties?.map(property => property.purpose).filter(purpose => purpose).map(purpose => purpose.toLowerCase());
// //                 acc.purpose = [...new Set(uniquePurposes)];


// //                 // Property type ? - Aprt ,house,villa , office ???
// //                 const uniquePropertyType = properties?.map(property => property.type_name).filter(type => type).map(propertyType => propertyType.toLowerCase())
// //                 acc.type_name = [...new Set(uniquePropertyType)]

// //                 return acc;
// //             },
// //             {
// //                 // Initialize
// //                 maxBedrooms: 0,
// //                 maxBathrooms: 0,
// //                 maxPrice: 0,
// //                 minPrice: Infinity,
// //                 amenities: [],
// //                 purpose: []
// //             }
// //         );

// //         setFilterRanges(result);
// //         setPriceRange({
// //             min: result.minPrice,
// //             max: result.maxPrice,
// //         });
// //     };



// //     useEffect(
// //         () => {
// //             calculatingFiltersValues()
// //         }, [properties]
// //     )

// //     //update the filters whenever priceRange changes
// //     useEffect(() => {
// //         setFilters((prev) => ({
// //             ...prev,
// //             priceMin: priceRange.min,
// //             priceMax: priceRange.max,
// //         }));
// //     }, [priceRange]);


// //     /* Our filter Object which will send on displatch filter Click  */
// //     const [filters, setFilters] = useState({
// //         bedrooms: null,
// //         bathrooms: null,
// //         floors: null,
// //         priceMin: null, // useEffect is applied -Note
// //         priceMax: null,
// //         floor: null,
// //         amenities: [],
// //         purpose: null,
// //         type_name: [],
// //         propertyType: null,
// //     });
// //     const [filteredProperties , setFilteredProperties] = useState([])
// //     console.log("Filter-pur", filters)
// //     console.log("filteredProperties", filteredProperties)

// //     /* handle property type (type_name) selection */
// //     const togglePropertyType = (selectedProperty) => {
// //         setFilters((prev) => {
// //             const propertyTypes = [...prev.type_name];
// //             if (propertyTypes.includes(selectedProperty)) {
// //                 // Remove type_name if already selected
// //                 return {
// //                     ...prev,
// //                     type_name: propertyTypes.filter((purpose) => purpose !== selectedProperty),
// //                 };
// //             } else {
// //                 // Add type_name if not already selected
// //                 return {
// //                     ...prev,
// //                     type_name: [...propertyTypes, selectedProperty],
// //                 };
// //             }
// //         });
// //     };

// //     // purpose type - rent ,buy
// //     const togglePurposeType = (purpose) => {
// //         setFilters((prev) => ({
// //             ...prev,
// //             purpose: prev.purpose === purpose ? null : purpose, // Toggle selection
// //         }))
// //     }

// //     // clearAllFilters
// //     const clearAllFilters = () => {
// //         setFilters({
// //             bedrooms: null,
// //             bathrooms: null,
// //             floors: null,
// //             priceMin: null,
// //             priceMax: null,
// //             floor: null,
// //             amenities: [],
// //             purpose: null,
// //             type_name: [],
// //             propertyType: null,
// //         });
// //         setPriceRange({
// //             min: filterRanges.minPrice || 0,
// //             max: filterRanges.maxPrice || 0,
// //         });

// //         // filter ki redux state ko null krdo , to automatic vo properties show karede sab

// //         setModalOpen(false) // close the filter modal


// //     };

// //     // const updateFilter = (key, value) => {
// //     //     setFilters((prev) => ({
// //     //         ...prev,
// //     //         [key]: value,
// //     //     }));
// //     // };

// //     const incrementFilter = (key) => {
// //         setFilters((prev) => ({
// //             ...prev,
// //             [key]: (prev[key] || 0) + 1,
// //         }));
// //     };

// //     const decrementFilter = (key) => {
// //         setFilters((prev) => ({
// //             ...prev,
// //             [key]: Math.max(0, (prev[key] || 0) - 1),
// //         }));
// //     };


// //     // Handle price changes and update the filters
// //     const handleMinPrice = (e) => {
// //         const value = Math.max(parseInt(e.target.value) || priceRange.min, priceRange.min);
// //         setFilters((prev) => ({
// //             ...prev,
// //             priceMin: value,
// //             priceMax: Math.max(value, prev.priceMax), // Ensure min doesn't exceed max
// //         }));
// //     };

// //     const handleMaxPrice = (e) => {
// //         const value = Math.min(parseInt(e.target.value) || priceRange.max, priceRange.max);
// //         setFilters((prev) => ({
// //             ...prev,
// //             priceMax: value,
// //             priceMin: Math.min(value, prev.priceMin), // Ensure max doesn't go below min
// //         }));
// //     };


// //     const handleSliderChange = (values) => {
// //         setFilters((prev) => ({
// //             ...prev,
// //             priceMin: values[0],
// //             priceMax: values[1],
// //         }));
// //     };

// //     // Apply filter
// //     function handleDispatchFilter(e) {
// //         e.preventDefault()
// //         setModalOpen(false)

// //         // dispatching filter 
// //         console.log(filters)
// //         dispatch(applyFilter(filters))
// //     }

// //    const scrollContainerRef = useRef(null);
// //     useEffect(() => {
// //         const handleScroll = () => {
// //             if (!scrollContainerRef.current) return;

// //             const sections = scrollContainerRef.current.querySelectorAll('.filter-section');
// //             const containerTop = scrollContainerRef.current.getBoundingClientRect().top;

// //             let currentSection = '';
// //             sections.forEach((section) => {
// //                 const sectionTop = section.getBoundingClientRect().top - containerTop;
// //                 const sectionTitle = section.querySelector('h1')?.textContent;

// //                 if (sectionTop <= 50 && sectionTop > -100) {
// //                     currentSection = sectionTitle;
// //                 }
// //             });

// //             if (currentSection && currentSection !== activeSection) {
// //                 setActiveSection(currentSection);
// //             }
// //         };

// //         const scrollContainer = scrollContainerRef.current;
// //         if (scrollContainer) {
// //             scrollContainer.addEventListener('scroll', handleScroll);
// //         }

// //         return () => {
// //             if (scrollContainer) {
// //                 scrollContainer.removeEventListener('scroll', handleScroll);
// //             }
// //         };
// //     }, [activeSection, setActiveSection]);


// //     return (
// //         <Modal
// //             title=""
// //             centered
// //             open={modalOpen}
// //             onOk={() => setModalOpen(false)} // Closing modal on Ok
// //             onCancel={() => setModalOpen(false)} // Closing modal on Cancel
// //             footer={null}
// //             styles={{ padding: '0px', maxHeight: '500px' }}
// //             width="90vw"

// //         >
// //             <div className='w-full text-center'>
// //                 <h1 className='font-bold text-xl py-2'>Filters</h1>
// //             </div>
// //             <hr />

// //             {/* Scrollable Content Section */}
// //             <div className=" hide-scrollbar max-h-[450px] px-4">
// //                 {/* Beds, Floors, and Bathrooms */}
// //                 {/* <div className='py-4'> */}
// //                 <div className={` filter-section py-4 transition-all duration-300 ${activeSection === 'Beds, Floors, and Bathrooms' ? 'section-highlight rounded-lg p-4 mt-2' : ''
// //                     }`}>
// //                     <h1 className='text-xl font-semibold'>Beds and Bathrooms</h1>

// //                     <div className='flex gap-24'>
// //                         {/* Beds */}
// //                         <div className='flex gap-6 justify-between items-center py-2 mb-1 max-w-96'>
// //                             <div className='text-xl'>Beds</div>
// //                             <div className='flex items-center gap-1'>
// //                                 <IconButton variant="outlined" className="rounded-full w-6 h-6" onClick={() => decrementFilter('bedrooms')} disabled={filters?.bedrooms < 1}>
// //                                     <FaMinus />
// //                                 </IconButton>
// //                                 <div className='text-lg text-center min-w-10'>{filters.bedrooms ? filters.bedrooms + '+ ' : "Any"}</div>
// //                                 <IconButton variant="outlined" className="rounded-full w-6 h-6" onClick={() => incrementFilter('bedrooms')} disabled={filterRanges?.maxBedrooms == filters.bedrooms}>
// //                                     <FaPlus />
// //                                 </IconButton>
// //                             </div>
// //                         </div>

// //                         {/* Bathrooms */}
// //                         <div className='flex gap-6 justify-between items-center py-2 mb-1 max-w-96'>
// //                             <div className='text-xl'>Bathrooms</div>
// //                             <div className='flex items-center gap-1'>
// //                                 <IconButton variant="outlined" className="rounded-full w-6 h-6" onClick={() => decrementFilter('bathrooms')} disabled={filters.bathrooms < 1}>
// //                                     <FaMinus />
// //                                 </IconButton>
// //                                 <div className='text-lg text-center min-w-10'>{filters.bathrooms ? filters.bathrooms + '+ ' : "Any"}</div>
// //                                 <IconButton variant="outlined" className="rounded-full w-6 h-6" onClick={() => incrementFilter('bathrooms')} disabled={filterRanges?.maxBathrooms == filters.bathrooms}>
// //                                     <FaPlus />
// //                                 </IconButton>
// //                             </div>
// //                         </div>

// //                         {/* floor */}
// //                         <div className={`filter-section py-4 transition-all duration-300 ${activeSection === 'Floor' ? 'section-highlight rounded-lg p-4 mt-2' : ''
// //                             }`}>

// //                             <div className='flex  gap-6 justify-between items-center py-2 mb-1 max-w-44'>
// //                                 <div className='text-xl'>Floors</div>
// //                                 <div className='flex items-center gap-1'>
// //                                     <IconButton variant="outlined" className="rounded-full w-6 h-6" onClick={() => decrementFilter('floor')} disabled={filters?.floor < 1}>
// //                                         <FaMinus />
// //                                     </IconButton>
// //                                     <div className='text-lg text-center min-w-10'>{filters.floor ? filters.floor + '+ ' : "Any"}</div>
// //                                     <IconButton variant="outlined" className="rounded-full w-6 h-6" onClick={() => incrementFilter('floor')} disabled={filterRanges?.maxfloor == filters.floor} >
// //                                         <FaPlus />
// //                                     </IconButton>
// //                                 </div>
// //                             </div>

// //                         </div>
// //                     </div>

// //                     {/* Floors */}
// //                     {/* <div className='flex justify-between items-center py-2 mb-1'>
// //                         <div className='text-xl'>Floors</div>
// //                         <div className='flex items-center gap-3'>
// //                             <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => decrementFilter('floor')} disabled={filters?.floor < 1}>
// //                                 <FaMinus />
// //                             </IconButton>
// //                             <div className='text-xl text-center min-w-10'>{filters.floor ? filters.floor + '+ ' : "Any"}</div>
// //                             <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => incrementFilter('floor')} disabled={filterRanges?.maxfloor == filters.floor} >
// //                                 <FaPlus />
// //                             </IconButton>
// //                         </div>
// //                     </div> */}



// //                     <hr />
// //                 </div>

                

// //                 {/* Purpose - buy,rent ,sale */}
// //                 <div className={`py-2 transition-all duration-300 ${activeSection === 'Purpose' ? 'section-highlight rounded-lg p-4' : ''}`}>
// //                     <h1 className='text-xl font-semibold'>Purpose</h1>
// //                     <div className="flex gap-2 flex-wrap py-4">
// //                         {
// //                             filterRanges?.purpose?.map((purpose, index) => {
// //                                 // Lookup the corresponding icon for the purpose
// //                                 const IconComponent = purposeIconMap[purpose] || fallbackPurposeIcon;
// //                                 const isSelected = filters.purpose === purpose;
// //                                 return (
// //                                     <Button
// //                                         key={index}
// //                                         variant={isSelected ? "filled" : "outlined"} // Highlight selected proepty type
// //                                         className={`flex items-center gap-3 rounded-full py-1 border-gray-400  hover:bg-red-50 text-black w-full sm:w-auto ${isSelected ? 'bg-red-50 hover:bg-red-100' : 'bg-gray-100'} `}
// //                                         onClick={() =>
// //                                             togglePurposeType(purpose)
// //                                         }
// //                                     >
// //                                         {IconComponent}
// //                                         {purpose.charAt(0).toUpperCase() + purpose.slice(1)} {/* Capitalize first letter */}
// //                                     </Button>
// //                                 );
// //                             })
// //                         }
// //                     </div>
// //                     <hr></hr>
// //                 </div>


// //                 {/* Amenities */}
// //                 {/* <div className='py-4'> */}
// //                 <div className={`py-4 transition-all duration-300 ${activeSection === 'Amenities' ? 'section-highlight rounded-lg p-4 mt-2' : ''}`}>
// //                     <h1 className='text-xl font-semibold'>Amenities</h1>
// //                     <div className="flex items-center gap-2 flex-wrap py-4">
// //                         {
// //                             filterRanges?.amenities?.map((amenity, index) => {
// //                                 // Normalize the amenity name to lowercase to handle variations like "Gym", "gym"
// //                                 const normalizedAmenity = amenity.toLowerCase().trim();

// //                                 // Lookup the corresponding icon for the amenity
// //                                 const IconComponent = amenityIconMap[normalizedAmenity] || fallbackIcon;

// //                                 return (
// //                                     <Button
// //                                         key={index}
// //                                         variant="outlined"
// //                                         className="flex items-center gap-3 rounded-full py-1 w-full sm:w-auto border-gray-400 "
// //                                     >
// //                                         {IconComponent}
// //                                         {amenity}
// //                                     </Button>
// //                                 );
// //                             })
// //                         }
// //                     </div>
// //                     <hr></hr>
// //                 </div>

// //                 {/* Property Type */}
// //                 {/* <div className='py-4'> */}
// //                 <div className={`py-4 transition-all duration-300 ${activeSection === 'Property Type' ? 'section-highlight rounded-lg p-4 mt-2' : ''}`}>
// //                     <h1 className='text-xl font-semibold'>Property Type</h1>
// //                     <div className="flex gap-2 flex-wrap py-4">
// //                         {
// //                             filterRanges?.type_name?.map((typeName, index) => {
// //                                 // Lookup the corresponding icon for the type_name
// //                                 const IconComponent = typeNameIconMap[typeName] || fallbackTypeIcon;
// //                                 const isSelected = filters.type_name.includes(typeName);

// //                                 return (
// //                                     <Button
// //                                         key={index}
// //                                         variant={isSelected ? "filled" : "outlined"} // Highlight selected proepty type
// //                                         className="flex items-center gap-3 rounded-full py-1 border-gray-400 w-full sm:w-auto"
// //                                         onClick={() => togglePropertyType(typeName)}
// //                                     >
// //                                         {IconComponent}
// //                                         {typeName.charAt(0).toUpperCase() + typeName.slice(1)} {/* Capitalize first letter */}
// //                                     </Button>
// //                                 );
// //                             })
// //                         }
// //                     </div>
// //                     <hr></hr>
// //                 </div>

// //                 {/* Price range */}
// //                 {/* <div className="py-4"> */}
// //                 <div className={`filter-section py-4 transition-all duration-300 ${activeSection === 'Price Range' ? 'section-highlight rounded-lg p-4 mt-2' : ''
// //                     }`}>
// //                     <div className='max-w-[45%]'>
// //                     <h1 className="text-xl font-semibold">Price Range</h1>
// //                         <RangeSlider
// //                             minPrice={filters.priceMin}
// //                             maxPrice={filters.priceMax}
// //                             range={priceRange}
// //                             onSliderChange={handleSliderChange}
// //                         />
// //                     </div>
// //                     <div className="flex  gap-4 items-center w-full max-w-md justify-center p-4">
// //                         <div className="flex flex-col items-center">
// //                             <span className="text-sm font-medium text-gray-500 mb-2">Minimum</span>
// //                             <input
// //                                 type="number"
// //                                 className="border rounded-full px-4 py-2 bg-white text-gray-900 shadow-md text-center w-32"
// //                                 value={filters.priceMin}
// //                                 onChange={handleMinPrice}
// //                                 min={priceRange.min}
// //                             />
// //                         </div>

// //                         <div className="flex flex-col items-center">
// //                             <span className="text-sm font-medium text-gray-500 mb-2">Maximum</span>
// //                             <input
// //                                 type="number"
// //                                 className="border-2 rounded-full px-4 py-2 bg-gray-100 text-gray-900 shadow-md border-gray-900 text-center w-32"
// //                                 value={filters.priceMax}
// //                                 onChange={handleMaxPrice}
// //                                 max={priceRange.max}
// //                             />
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>



// //             {/* Custom Footer with Buttons  , default antd footer is set falsed*/}
// //             <div className="flex justify-between gap-4 pt-4">
// //                 <Button variant="text" className="flex items-center gap-2" onClick={clearAllFilters}>
// //                     Clear all{" "}
// //                     {/* will ad icon if required */}
// //                 </Button>
// //                 <Button
// //                     onClick={
// //                         // Handle apply filter logic here
// //                         handleDispatchFilter
// //                     }
// //                     type="primary"
// //                     className="rounded-full px-6"
// //                 >
// //                     Apply
// //                 </Button>
// //             </div>
// //         </Modal>
// //     );
// // };

// // export default FilterComponent;


// // // import React from 'react';
// // // import { Search, Plus, Minus } from 'lucide-react';

// // // const FilterComponent = ({
// // //     modalOpen,
// // //     setModalOpen,
// // //     filters,
// // //     setFilters,
// // //     filterRanges,
// // //     priceRange,
// // //     handleSliderChange,
// // //     handleMinPrice,
// // //     handleMaxPrice,
// // //     clearAllFilters,
// // //     handleDispatchFilter,
// // //     togglePropertyType,
// // //     togglePurposeType
// // // }) => {
// // //     const incrementFilter = (key) => {
// // //         setFilters((prev) => ({
// // //             ...prev,
// // //             [key]: (prev[key] || 0) + 1,
// // //         }));
// // //     };

// // //     const decrementFilter = (key) => {
// // //         setFilters((prev) => ({
// // //             ...prev,
// // //             [key]: Math.max(0, (prev[key] || 0) - 1),
// // //         }));
// // //     };

// // //     // Custom range slider component
// // //     const CustomRangeSlider = ({ value, min, max, onChange }) => (
// // //         <input
// // //             type="range"
// // //             min={min}
// // //             max={max}
// // //             value={value}
// // //             onChange={onChange}
// // //             className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
// // //         />
// // //     );

// // //     return (
// // //         <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-sm">
// // //             {/* Top Search Bar */}
// // //             <div className="flex flex-wrap gap-3 items-center mb-6">
// // //                 <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
// // //                     <Search className="h-5 w-5" />
// // //                     Easy search
// // //                 </button>

// // //                 {/* Beds & Baths Filters */}
// // //                 <div className="flex gap-4">
// // //                     <div className="flex items-center gap-3">
// // //                         <span className="text-gray-600">Beds</span>
// // //                         <button
// // //                             className={`rounded-full w-8 h-8 flex items-center justify-center border ${filters?.bedrooms < 1 ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
// // //                                 }`}
// // //                             onClick={() => decrementFilter('bedrooms')}
// // //                             disabled={filters?.bedrooms < 1}
// // //                         >
// // //                             <Minus className="h-4 w-4" />
// // //                         </button>
// // //                         <div className="text-xl text-center min-w-10">{filters?.bedrooms || "Any"}</div>
// // //                         <button
// // //                             className={`rounded-full w-8 h-8 flex items-center justify-center border ${filterRanges?.maxBedrooms === filters?.bedrooms ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
// // //                                 }`}
// // //                             onClick={() => incrementFilter('bedrooms')}
// // //                             disabled={filterRanges?.maxBedrooms === filters?.bedrooms}
// // //                         >
// // //                             <Plus className="h-4 w-4" />
// // //                         </button>
// // //                     </div>

// // //                     <div className="flex items-center gap-3">
// // //                         <span className="text-gray-600">Baths</span>
// // //                         <button
// // //                             className={`rounded-full w-8 h-8 flex items-center justify-center border ${filters?.bathrooms < 1 ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
// // //                                 }`}
// // //                             onClick={() => decrementFilter('bathrooms')}
// // //                             disabled={filters?.bathrooms < 1}
// // //                         >
// // //                             <Minus className="h-4 w-4" />
// // //                         </button>
// // //                         <div className="text-xl text-center min-w-10">{filters?.bathrooms || "Any"}</div>
// // //                         <button
// // //                             className={`rounded-full w-8 h-8 flex items-center justify-center border ${filterRanges?.maxBathrooms === filters?.bathrooms ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
// // //                                 }`}
// // //                             onClick={() => incrementFilter('bathrooms')}
// // //                             disabled={filterRanges?.maxBathrooms === filters?.bathrooms}
// // //                         >
// // //                             <Plus className="h-4 w-4" />
// // //                         </button>
// // //                     </div>
// // //                 </div>

// // //                 {/* Price Range */}
// // //                 <div className="flex-grow max-w-md">
// // //                     <div className="flex items-center gap-4 mb-2">
// // //                         <input
// // //                             type="number"
// // //                             className="w-32 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                             value={filters?.priceMin || ''}
// // //                             onChange={handleMinPrice}
// // //                             placeholder="Min price"
// // //                         />
// // //                         <span>-</span>
// // //                         <input
// // //                             type="number"
// // //                             className="w-32 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                             value={filters?.priceMax || ''}
// // //                             onChange={handleMaxPrice}
// // //                             placeholder="Max price"
// // //                         />
// // //                     </div>
// // //                     <CustomRangeSlider
// // //                         min={priceRange?.min}
// // //                         max={priceRange?.max}
// // //                         value={[filters?.priceMin || priceRange?.min, filters?.priceMax || priceRange?.max]}
// // //                         onChange={(e) => handleSliderChange([parseInt(e.target.value)])}
// // //                     />
// // //                 </div>
// // //             </div>

// // //             {/* Filters Section */}
// // //             <div className="border rounded-lg p-6 mb-6">
// // //                 <h2 className="text-xl font-semibold mb-6">Filters</h2>

// // //                 {/* Floor Filter */}
// // //                 <div className="mb-6">
// // //                     <h3 className="text-gray-600 mb-2">Floor</h3>
// // //                     <div className="flex items-center gap-3">
// // //                         <button
// // //                             className={`rounded-full w-8 h-8 flex items-center justify-center border ${filters?.floor < 1 ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
// // //                                 }`}
// // //                             onClick={() => decrementFilter('floor')}
// // //                             disabled={filters?.floor < 1}
// // //                         >
// // //                             <Minus className="h-4 w-4" />
// // //                         </button>
// // //                         <div className="text-xl text-center min-w-10">{filters?.floor || "Any"}</div>
// // //                         <button
// // //                             className={`rounded-full w-8 h-8 flex items-center justify-center border ${filterRanges?.maxfloor === filters?.floor ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
// // //                                 }`}
// // //                             onClick={() => incrementFilter('floor')}
// // //                             disabled={filterRanges?.maxfloor === filters?.floor}
// // //                         >
// // //                             <Plus className="h-4 w-4" />
// // //                         </button>
// // //                     </div>
// // //                 </div>

// // //                 {/* Property Type Filter */}
// // //                 <div className="mb-6">
// // //                     <h3 className="text-gray-600 mb-2">Property Type</h3>
// // //                     <div className="flex flex-wrap gap-2">
// // //                         {filterRanges?.type_name?.map((type) => (
// // //                             <button
// // //                                 key={type}
// // //                                 onClick={() => togglePropertyType(type)}
// // //                                 className={`px-4 py-2 rounded-full transition-colors ${filters?.type_name.includes(type)
// // //                                         ? 'bg-blue-500 text-white'
// // //                                         : 'bg-gray-100 hover:bg-gray-200'
// // //                                     }`}
// // //                             >
// // //                                 {type}
// // //                             </button>
// // //                         ))}
// // //                     </div>
// // //                 </div>

// // //                 {/* Purpose Filter */}
// // //                 <div className="mb-6">
// // //                     <h3 className="text-gray-600 mb-2">Purpose</h3>
// // //                     <div className="flex flex-wrap gap-2">
// // //                         {filterRanges?.purpose?.map((purpose) => (
// // //                             <button
// // //                                 key={purpose}
// // //                                 onClick={() => togglePurposeType(purpose)}
// // //                                 className={`px-4 py-2 rounded-full transition-colors ${filters?.purpose === purpose
// // //                                         ? 'bg-blue-500 text-white'
// // //                                         : 'bg-gray-100 hover:bg-gray-200'
// // //                                     }`}
// // //                             >
// // //                                 {purpose}
// // //                             </button>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Action Buttons */}
// // //             <div className="flex justify-between gap-4">
// // //                 <button
// // //                     onClick={clearAllFilters}
// // //                     className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
// // //                 >
// // //                     Clear all
// // //                 </button>
// // //                 <button
// // //                     onClick={handleDispatchFilter}
// // //                     className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full font-medium transition-colors"
// // //                 >
// // //                     Apply Filters
// // //                 </button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default FilterComponent;

// // import React, { useState, useEffect } from 'react';
// // import { Slider, Checkbox, Select, InputNumber, Modal, Radio } from 'antd';
// // import { FiSettings } from 'react-icons/fi';

// // const CustomCard = ({ title, children }) => (
// //     <div className="bg-white rounded-lg border border-gray-100 p-4 mb-4">
// //         <h3 className="text-lg font-semibold mb-4 border-b pb-2">{title}</h3>
// //         <div>{children}</div>
// //     </div>
// // );

// // const FilterComponent = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
// //     const [filterStructure, setFilterStructure] = useState(null);
// //     const [filters, setFilters] = useState({
// //         numeric: {
// //             bedrooms: 0,
// //             bathrooms: 0,
// //             price: [0, 0],
// //             area: [0, 0],
// //             carpetArea: [0, 0],
// //             superBuiltupArea: [0, 0],
// //             floor: [0, 0]
// //         },
// //         selects: {
// //             type_name: [],
// //             furnishing: [],
// //             construction_status: [],
// //             category: [],
// //             region: [],
// //             possession: [],
// //             broker_status: [],
// //             purpose: []
// //         },
// //         available: null,
// //         propertyAmenities: []
// //     });

// //     useEffect(() => {
// //         const fetchFilterStructure = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:5053/api/web/filter/structure');
// //                 const data = await response.json();
// //                 if (data.success) {
// //                     setFilterStructure(data.data);
// //                     // Initialize filters with default values from the structure
// //                     const numericDefaults = {};
// //                     Object.entries(data.data.numeric).forEach(([key, value]) => {
// //                         if (key === 'price' || key === 'area' || key === 'carpetArea' || key === 'superBuiltupArea' || key === 'floor') {
// //                             numericDefaults[key] = [Number(value.min) || 0, Number(value.max) || 0];
// //                         } else {
// //                             numericDefaults[key] = Number(value.min) || 0;
// //                         }
// //                     });

// //                     setFilters(prev => ({
// //                         ...prev,
// //                         numeric: numericDefaults
// //                     }));
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching filter structure:', error);
// //             }
// //         };

// //         if (modalOpen) {
// //             fetchFilterStructure();
// //         }
// //     }, [modalOpen]);

// //     const handleNumericChange = (field, value) => {
// //         setFilters(prev => ({
// //             ...prev,
// //             numeric: {
// //                 ...prev.numeric,
// //                 [field]: value
// //             }
// //         }));
// //     };

// //     const handleSelectChange = (field, value) => {
// //         setFilters(prev => ({
// //             ...prev,
// //             selects: {
// //                 ...prev.selects,
// //                 [field]: value
// //             }
// //         }));
// //     };

// //     const handleAmenitiesChange = (amenity) => {
// //         setFilters(prev => ({
// //             ...prev,
// //             propertyAmenities: prev.propertyAmenities.includes(amenity)
// //                 ? prev.propertyAmenities.filter(item => item !== amenity)
// //                 : [...prev.propertyAmenities, amenity]
// //         }));
// //     };

// //     const handleAvailabilityChange = (value) => {
// //         setFilters(prev => ({
// //             ...prev,
// //             available: value
// //         }));
// //     };

// //     const handleApplyFilters = () => {
// //         console.log('Applied filters:', filters);
// //         setModalOpen(false);
// //     };

// //     const handleResetFilters = () => {
// //         if (filterStructure) {
// //             const numericDefaults = {};
// //             Object.entries(filterStructure.numeric).forEach(([key, value]) => {
// //                 if (key === 'price' || key === 'area' || key === 'carpetArea' || key === 'superBuiltupArea' || key === 'floor') {
// //                     numericDefaults[key] = [Number(value.min) || 0, Number(value.max) || 0];
// //                 } else {
// //                     numericDefaults[key] = Number(value.min) || 0;
// //                 }
// //             });

// //             setFilters({
// //                 numeric: numericDefaults,
// //                 selects: {
// //                     type_name: [],
// //                     furnishing: [],
// //                     construction_status: [],
// //                     category: [],
// //                     region: [],
// //                     possession: [],
// //                     broker_status: [],
// //                     purpose: []
// //                 },
// //                 available: null,
// //                 propertyAmenities: []
// //             });
// //         }
// //     };

// //     const formatPrice = (value) => {
// //         if (typeof value !== 'number') return '0';
// //         return `₹${value.toLocaleString('en-IN')}`;
// //     };

// //     const formatArea = (value) => {
// //         if (typeof value !== 'number') return '0';
// //         return `${value.toLocaleString('en-IN')} sq ft`;
// //     };

// //     if (!filterStructure) {
// //         return (
// //             <Modal
// //                 title="Filters"
// //                 open={modalOpen}
// //                 onCancel={() => setModalOpen(false)}
// //                 width={800}
// //                 footer={null}
// //             >
// //                 <div className="p-4 text-center">Loading filters...</div>
// //             </Modal>
// //         );
// //     }

// //     return (
// //         <Modal
// //             title={
// //                 <div className="flex items-center gap-2">
// //                     <FiSettings className="text-gray-600" size={20} />
// //                     <span className="text-lg font-semibold">Filters</span>
// //                 </div>
// //             }
// //             open={modalOpen}
// //             onCancel={() => setModalOpen(false)}
// //             width={800}
// //             footer={[
// //                 <button
// //                     key="reset"
// //                     onClick={handleResetFilters}
// //                     className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
// //                 >
// //                     Reset
// //                 </button>,
// //                 <button
// //                     key="apply"
// //                     onClick={handleApplyFilters}
// //                     className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// //                 >
// //                     Apply Filters
// //                 </button>
// //             ]}
// //         >
// //             <div className="max-h-[70vh] overflow-y-auto pr-2">
// //                 {/* Basic Details */}
// //                 <CustomCard title="Basic Details">
// //                     <div className="grid grid-cols-2 gap-4">
// //                         <div>
// //                             <label className="block text-sm font-medium mb-2">Bedrooms</label>
// //                             <InputNumber
// //                                 min={Number(filterStructure.numeric.bedrooms?.min) || 0}
// //                                 max={Number(filterStructure.numeric.bedrooms?.max) || 10}
// //                                 value={filters.numeric.bedrooms}
// //                                 onChange={(value) => handleNumericChange('bedrooms', value)}
// //                                 className="w-full"
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium mb-2">Bathrooms</label>
// //                             <InputNumber
// //                                 min={Number(filterStructure.numeric.bathrooms?.min) || 0}
// //                                 max={Number(filterStructure.numeric.bathrooms?.max) || 10}
// //                                 value={filters.numeric.bathrooms}
// //                                 onChange={(value) => handleNumericChange('bathrooms', value)}
// //                                 className="w-full"
// //                             />
// //                         </div>
// //                     </div>
// //                 </CustomCard>

// //                 {/* Price Range */}
// //                 <CustomCard title="Price Range">
// //                     <Slider
// //                         range
// //                         min={Number(filterStructure.numeric.price?.min) || 0}
// //                         max={Number(filterStructure.numeric.price?.max) || 1000000}
// //                         value={filters.numeric.price}
// //                         onChange={(value) => handleNumericChange('price', value)}
// //                         tipFormatter={formatPrice}
// //                         step={1}
// //                     />
// //                     <div className="flex justify-between mt-2 text-sm text-gray-600">
// //                         <span>{formatPrice(filters.numeric.price[0])}</span>
// //                         <span>{formatPrice(filters.numeric.price[1])}</span>
// //                     </div>
// //                 </CustomCard>

// //                 {/* Area Details */}
// //                 <CustomCard title="Area Details">
// //                     <div className="space-y-6">
// //                         {['area', 'carpetArea', 'superBuiltupArea'].map((areaType) => (
// //                             <div key={areaType}>
// //                                 <label className="block text-sm font-medium mb-2">
// //                                     {areaType.replace(/([A-Z])/g, ' $1').trim()} (sq ft)
// //                                 </label>
// //                                 <Slider
// //                                     range
// //                                     min={Number(filterStructure.numeric[areaType]?.min) || 0}
// //                                     max={Number(filterStructure.numeric[areaType]?.max) || 10000}
// //                                     value={filters.numeric[areaType]}
// //                                     onChange={(value) => handleNumericChange(areaType, value)}
// //                                     tipFormatter={formatArea}
// //                                     step={1}
// //                                 />
// //                                 <div className="flex justify-between mt-1 text-sm text-gray-600">
// //                                     <span>{formatArea(filters.numeric[areaType][0])}</span>
// //                                     <span>{formatArea(filters.numeric[areaType][1])}</span>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </CustomCard>

// //                 {/* Property Details */}
// //                 <CustomCard title="Property Details">
// //                     {Object.entries({
// //                         type_name: 'Property Type',
// //                         purpose: 'Purpose',
// //                         furnishing: 'Furnishing'
// //                     }).map(([field, label]) => (
// //                         <div key={field} className="mb-4">
// //                             <label className="block text-sm font-medium mb-2">{label}</label>
// //                             <Select
// //                                 mode="multiple"
// //                                 placeholder={`Select ${label.toLowerCase()}`}
// //                                 value={filters.selects[field]}
// //                                 onChange={(value) => handleSelectChange(field, value)}
// //                                 options={filterStructure.selects[field]?.map(item => ({
// //                                     label: item,
// //                                     value: item
// //                                 })) || []}
// //                                 className="w-full"
// //                             />
// //                         </div>
// //                     ))}
// //                 </CustomCard>

// //                 {/* Status and Availability */}
// //                 <CustomCard title="Status and Availability">
// //                     {Object.entries({
// //                         construction_status: 'Construction Status',
// //                         possession: 'Possession'
// //                     }).map(([field, label]) => (
// //                         <div key={field} className="mb-4">
// //                             <label className="block text-sm font-medium mb-2">{label}</label>
// //                             <Select
// //                                 mode="multiple"
// //                                 placeholder={`Select ${label.toLowerCase()}`}
// //                                 value={filters.selects[field]}
// //                                 onChange={(value) => handleSelectChange(field, value)}
// //                                 options={filterStructure.selects[field]?.map(item => ({
// //                                     label: item,
// //                                     value: item
// //                                 })) || []}
// //                                 className="w-full"
// //                             />
// //                         </div>
// //                     ))}
// //                     <div className="mt-4">
// //                         <label className="block text-sm font-medium mb-2">Availability</label>
// //                         <Radio.Group
// //                             value={filters.available}
// //                             onChange={(e) => handleAvailabilityChange(e.target.value)}
// //                         >
// //                             <Radio value={true}>Available</Radio>
// //                             <Radio value={false}>Not Available</Radio>
// //                         </Radio.Group>
// //                     </div>
// //                 </CustomCard>

// //                 {/* Location */}
// //                 <CustomCard title="Location">
// //                     <Select
// //                         mode="multiple"
// //                         placeholder="Select region"
// //                         value={filters.selects.region}
// //                         onChange={(value) => handleSelectChange('region', value)}
// //                         options={filterStructure.selects.region?.map(region => ({
// //                             label: region,
// //                             value: region
// //                         })) || []}
// //                         className="w-full"
// //                     />
// //                 </CustomCard>

// //                 {/* Amenities */}
// //                 <CustomCard title="Amenities">
// //                     <div className="grid grid-cols-2 gap-4">
// //                         {filterStructure.propertyAmenities?.map((amenity) => (
// //                             <div key={amenity} className="flex items-center">
// //                                 <Checkbox
// //                                     checked={filters.propertyAmenities.includes(amenity)}
// //                                     onChange={() => handleAmenitiesChange(amenity)}
// //                                 >
// //                                     {amenity}
// //                                 </Checkbox>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </CustomCard>
// //             </div>
// //         </Modal>
// //     );
// // };

// // export default FilterComponent;

// import React, { useState, useEffect } from 'react';
// import { Slider, Checkbox, Select, InputNumber, Modal, Radio } from 'antd';
// import { FiSettings } from 'react-icons/fi';
// import { useDispatch } from 'react-redux';
// import { applyFilter } from '../redux/features/Map/mapSlice';


// const CustomCard = ({ title, children }) => (
//     <div className="bg-white rounded-lg border border-gray-100 p-4 mb-4">
//         <h3 className="text-lg font-semibold mb-4 border-b pb-2">{title}</h3>
//         <div>{children}</div>
//     </div>
// );

// const FilterComponent = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
//     const dispatch = useDispatch();
//     const [filterStructure, setFilterStructure] = useState(null);
//     const [filters, setFilters] = useState({
//         numeric: {
//             bedrooms: 0,
//             bathrooms: 0,
//             price: [0, 0],
//             area: [0, 0],
//             carpetArea: [0, 0],
//             superBuiltupArea: [0, 0],
//             floor: [0, 0]
//         },
//         selects: {
//             type_name: [],
//             furnishing: [],
//             construction_status: [],
//             category: [],
//             region: [],
//             possession: [],
//             broker_status: [],
//             purpose: []
//         },
//         available: null,
//         propertyAmenities: []
//     });

//     useEffect(() => {
//         const fetchFilterStructure = async () => {
//             try {
//                 const response = await fetch('http://localhost:5053/api/web/filter/structure');
//                 const data = await response.json();
//                 if (data.success) {
//                     setFilterStructure(data.data);
//                     // Initialize filters with default values from the structure
//                     const numericDefaults = {};
//                     Object.entries(data.data.numeric).forEach(([key, value]) => {
//                         if (key === 'price' || key === 'area' || key === 'carpetArea' || key === 'superBuiltupArea' || key === 'floor') {
//                             numericDefaults[key] = [Number(value.min) || 0, Number(value.max) || 0];
//                         } else {
//                             numericDefaults[key] = Number(value.min) || 0;
//                         }
//                     });

//                     setFilters(prev => ({
//                         ...prev,
//                         numeric: numericDefaults
//                     }));
//                 }
//             } catch (error) {
//                 console.error('Error fetching filter structure:', error);
//             }
//         };

//         if (modalOpen) {
//             fetchFilterStructure();
//         }
//     }, [modalOpen]);

//     const handleNumericChange = (field, value) => {
//         setFilters(prev => ({
//             ...prev,
//             numeric: {
//                 ...prev.numeric,
//                 [field]: value
//             }
//         }));
//     };

//     const handleSelectChange = (field, value) => {
//         setFilters(prev => ({
//             ...prev,
//             selects: {
//                 ...prev.selects,
//                 [field]: value
//             }
//         }));
//     };

//     const handleAmenitiesChange = (amenity) => {
//         setFilters(prev => ({
//             ...prev,
//             propertyAmenities: prev.propertyAmenities.includes(amenity)
//                 ? prev.propertyAmenities.filter(item => item !== amenity)
//                 : [...prev.propertyAmenities, amenity]
//         }));
//     };

//     const handleAvailabilityChange = (value) => {
//         setFilters(prev => ({
//             ...prev,
//             available: value
//         }));
//     };

//     const handleApplyFilters = () => {
//         console.log('Applied filters:', filters);
//         dispatch(applyFilter(filters)); // Dispatch the applyFilter action with the filters
//         setModalOpen(false);
//     };

//     const handleResetFilters = () => {
//         if (filterStructure) {
//             const numericDefaults = {};
//             Object.entries(filterStructure.numeric).forEach(([key, value]) => {
//                 if (key === 'price' || key === 'area' || key === 'carpetArea' || key === 'superBuiltupArea' || key === 'floor') {
//                     numericDefaults[key] = [Number(value.min) || 0, Number(value.max) || 0];
//                 } else {
//                     numericDefaults[key] = Number(value.min) || 0;
//                 }
//             });

//             setFilters({
//                 numeric: numericDefaults,
//                 selects: {
//                     type_name: [],
//                     furnishing: [],
//                     construction_status: [],
//                     category: [],
//                     region: [],
//                     possession: [],
//                     broker_status: [],
//                     purpose: []
//                 },
//                 available: null,
//                 propertyAmenities: []
//             });
//         }
//     };

//     const formatPrice = (value) => {
//         if (typeof value !== 'number') return '0';
//         return `₹${value.toLocaleString('en-IN')}`;
//     };

//     const formatArea = (value) => {
//         if (typeof value !== 'number') return '0';
//         return `${value.toLocaleString('en-IN')} sq ft`;
//     };

//     if (!filterStructure) {
//         return (
//             <Modal
//                 title="Filters"
//                 open={modalOpen}
//                 onCancel={() => setModalOpen(false)}
//                 width={800}
//                 footer={null}
//             >
//                 <div className="p-4 text-center">Loading filters...</div>
//             </Modal>
//         );
//     }

//     return (
//         <Modal
//             title={
//                 <div className="flex items-center gap-2">
//                     <FiSettings className="text-gray-600" size={20} />
//                     <span className="text-lg font-semibold">Filters</span>
//                 </div>
//             }
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             width={800}
//             footer={[
//                 <button
//                     key="reset"
//                     onClick={handleResetFilters}
//                     className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//                 >
//                     Reset
//                 </button>,
//                 <button
//                     key="apply"
//                     onClick={handleApplyFilters}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                     Apply Filters
//                 </button>
//             ]}
//         >
//             <div className="max-h-[70vh] overflow-y-auto pr-2">
//                 {/* Basic Details */}
//                 <CustomCard title="Basic Details">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium mb-2">Bedrooms</label>
//                             <InputNumber
//                                 min={Number(filterStructure.numeric.bedrooms?.min) || 0}
//                                 max={Number(filterStructure.numeric.bedrooms?.max) || 10}
//                                 value={filters.numeric.bedrooms}
//                                 onChange={(value) => handleNumericChange('bedrooms', value)}
//                                 className="w-full"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-2">Bathrooms</label>
//                             <InputNumber
//                                 min={Number(filterStructure.numeric.bathrooms?.min) || 0}
//                                 max={Number(filterStructure.numeric.bathrooms?.max) || 10}
//                                 value={filters.numeric.bathrooms}
//                                 onChange={(value) => handleNumericChange('bathrooms', value)}
//                                 className="w-full"
//                             />
//                         </div>
//                     </div>
//                 </CustomCard>

//                 {/* Price Range */}
//                 <CustomCard title="Price Range">
//                     <Slider
//                         range
//                         min={Number(filterStructure.numeric.price?.min) || 0}
//                         max={Number(filterStructure.numeric.price?.max) || 1000000}
//                         value={filters.numeric.price}
//                         onChange={(value) => handleNumericChange('price', value)}
//                         tipFormatter={formatPrice}
//                         step={1}
//                     />
//                     <div className="flex justify-between mt-2 text-sm text-gray-600">
//                         <span>{formatPrice(filters.numeric.price[0])}</span>
//                         <span>{formatPrice(filters.numeric.price[1])}</span>
//                     </div>
//                 </CustomCard>

//                 {/* Area Details */}
//                 <CustomCard title="Area Details">
//                     <div className="space-y-6">
//                         {['area', 'carpetArea', 'superBuiltupArea'].map((areaType) => (
//                             <div key={areaType}>
//                                 <label className="block text-sm font-medium mb-2">
//                                     {areaType.replace(/([A-Z])/g, ' $1').trim()} (sq ft)
//                                 </label>
//                                 <Slider
//                                     range
//                                     min={Number(filterStructure.numeric[areaType]?.min) || 0}
//                                     max={Number(filterStructure.numeric[areaType]?.max) || 10000}
//                                     value={filters.numeric[areaType]}
//                                     onChange={(value) => handleNumericChange(areaType, value)}
//                                     tipFormatter={formatArea}
//                                     step={1}
//                                 />
//                                 <div className="flex justify-between mt-1 text-sm text-gray-600">
//                                     <span>{formatArea(filters.numeric[areaType][0])}</span>
//                                     <span>{formatArea(filters.numeric[areaType][1])}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </CustomCard>

//                 {/* Property Details */}
//                 <CustomCard title="Property Details">
//                     {Object.entries({
//                         type_name: 'Property Type',
//                         purpose: 'Purpose',
//                         furnishing: 'Furnishing'
//                     }).map(([field, label]) => (
//                         <div key={field} className="mb-4">
//                             <label className="block text-sm font-medium mb-2">{label}</label>
//                             <Select
//                                 mode="multiple"
//                                 placeholder={`Select ${label.toLowerCase()}`}
//                                 value={filters.selects[field]}
//                                 onChange={(value) => handleSelectChange(field, value)}
//                                 options={filterStructure.selects[field]?.map(item => ({
//                                     label: item,
//                                     value: item
//                                 })) || []}
//                                 className="w-full"
//                             />
//                         </div>
//                     ))}
//                 </CustomCard>

//                 {/* Status and Availability */}
//                 <CustomCard title="Status and Availability">
//                     {Object.entries({
//                         construction_status: 'Construction Status',
//                         possession: 'Possession'
//                     }).map(([field, label]) => (
//                         <div key={field} className="mb-4">
//                             <label className="block text-sm font-medium mb-2">{label}</label>
//                             <Select
//                                 mode="multiple"
//                                 placeholder={`Select ${label.toLowerCase()}`}
//                                 value={filters.selects[field]}
//                                 onChange={(value) => handleSelectChange(field, value)}
//                                 options={filterStructure.selects[field]?.map(item => ({
//                                     label: item,
//                                     value: item
//                                 })) || []}
//                                 className="w-full"
//                             />
//                         </div>
//                     ))}
//                     <div className="mt-4">
//                         <label className="block text-sm font-medium mb-2">Availability</label>
//                         <Radio.Group
//                             value={filters.available}
//                             onChange={(e) => handleAvailabilityChange(e.target.value)}
//                         >
//                             <Radio value={true}>Available</Radio>
//                             <Radio value={false}>Not Available</Radio>
//                         </Radio.Group>
//                     </div>
//                 </CustomCard>

//                 {/* Location */}
//                 <CustomCard title="Location">
//                     <Select
//                         mode="multiple"
//                         placeholder="Select region"
//                         value={filters.selects.region}
//                         onChange={(value) => handleSelectChange('region', value)}
//                         options={filterStructure.selects.region?.map(region => ({
//                             label: region,
//                             value: region
//                         })) || []}
//                         className="w-full"
//                     />
//                 </CustomCard>

//                 {/* Amenities */}
//                 <CustomCard title="Amenities">
//                     <div className="grid grid-cols-2 gap-4">
//                         {filterStructure.propertyAmenities?.map((amenity) => (
//                             <div key={amenity} className="flex items-center">
//                                 <Checkbox
//                                     checked={filters.propertyAmenities.includes(amenity)}
//                                     onChange={() => handleAmenitiesChange(amenity)}
//                                 >
//                                     {amenity}
//                                 </Checkbox>
//                             </div>
//                         ))}
//                     </div>
//                 </CustomCard>
//             </div>
//         </Modal>
//     );
// };

// export default FilterComponent;

import React, { useState, useEffect } from 'react';
import { Slider, Checkbox, Select, InputNumber, Modal, Radio } from 'antd';
import { FiSettings } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter } from '../redux/features/Map/mapSlice';

const CustomCard = ({ title, children }) => (
    <div className="bg-white rounded-lg border border-gray-100 p-4 mb-4">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">{title}</h3>
        <div>{children}</div>
    </div>
);

const FilterComponent = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector(state => state.map)
    const [filterStructure, setFilterStructure] = useState(null);
    const [initialFilters, setInitialFilters] = useState(null);
    const [filters, setFilters] = useState({
        numeric: {
            bedrooms: null,
            bathrooms: null,
            price: [0, 0],
            area: [0, 0],
            carpetArea: [0, 0],
            superBuiltupArea: [0, 0],
            floor: [0, 0]
        },
        selects: {
            type_name: [],
            furnishing: [],
            construction_status: [],
            category: [],
            region: [],
            possession: [],
            broker_status: [],
            purpose: []
        },
        available: null,
        propertyAmenities: []
    });

       useEffect(() => {
        const fetchFilterStructure = async () => {
            try {
                const response = await fetch('http://localhost:5053/api/web/filter/structure');
                const data = await response.json();
                if (data.success) {
                    setFilterStructure(data.data);

                    // Initialize with proper default values
                    const defaultFilters = {
                        numeric: {
                            bedrooms: null,
                            bathrooms: null,
                            price: [data.data.numeric.price?.min || 0, data.data.numeric.price?.max || 0],
                            area: [data.data.numeric.area?.min || 0, data.data.numeric.area?.max || 0],
                            carpetArea: [data.data.numeric.carpetArea?.min || 0, data.data.numeric.carpetArea?.max || 0],
                            superBuiltupArea: [data.data.numeric.superBuiltupArea?.min || 0, data.data.numeric.superBuiltupArea?.max || 0],
                            floor: [data.data.numeric.floor?.min || 0, data.data.numeric.floor?.max || 0]
                        },
                        selects: {
                            type_name: [],
                            furnishing: [],
                            construction_status: [],
                            category: [],
                            region: [],
                            possession: [],
                            broker_status: [],
                            purpose: []
                        },
                        available: null,
                        propertyAmenities: []
                    };

                    setInitialFilters(defaultFilters);
                    setFilters(defaultFilters);
                }
            } catch (error) {
                console.error('Error fetching filter structure:', error);
            }
        };

        if (modalOpen) {
            fetchFilterStructure();
        }
    }, [modalOpen]);

    const handleNumericChange = (field, value) => {
        setFilters(prev => ({
            ...prev,
            numeric: {
                ...prev.numeric,
                [field]: value
            }
        }));
    };

    const handleSelectChange = (field, value) => {
        setFilters(prev => ({
            ...prev,
            selects: {
                ...prev.selects,
                [field]: value
            }
        }));
    };

    const handleAmenitiesChange = (amenity) => {
        setFilters(prev => ({
            ...prev,
            propertyAmenities: prev.propertyAmenities.includes(amenity)
                ? prev.propertyAmenities.filter(item => item !== amenity)
                : [...prev.propertyAmenities, amenity]
        }));
    };

    const handleAvailabilityChange = (value) => {
        setFilters(prev => ({
            ...prev,
            available: value
        }));
    };

    const getChangedFilters = () => {
        if (!filterStructure) return {};

        const changedFilters = {};

        // Handle numeric filters
        const numericChanges = {};
        Object.entries(filters.numeric).forEach(([key, value]) => {
            if (value !== null) {
                if (key === 'bedrooms' || key === 'bathrooms') {
                    if (value > 0) {
                        numericChanges[key] = value;
                    }
                } else if (Array.isArray(value)) {
                    const defaultMin = filterStructure.numeric[key]?.min || 0;
                    const defaultMax = filterStructure.numeric[key]?.max || 0;
                    if (value[0] !== defaultMin || value[1] !== defaultMax) {
                        numericChanges[key] = value;
                    }
                }
            }
        });
        if (Object.keys(numericChanges).length > 0) {
            changedFilters.numeric = numericChanges;
        }

        // Handle select filters
        const selectChanges = {};
        Object.entries(filters.selects).forEach(([key, value]) => {
            if (value && value.length > 0) {
                selectChanges[key] = value;
            }
        });
        if (Object.keys(selectChanges).length > 0) {
            changedFilters.selects = selectChanges;
        }

        // Handle availability
        if (filters.available !== null) {
            changedFilters.available = filters.available;
        }

        // Handle amenities
        if (filters.propertyAmenities && filters.propertyAmenities.length > 0) {
            changedFilters.propertyAmenities = filters.propertyAmenities;
        }

        return changedFilters;
    };

    const handleApplyFilters = () => {
        const changedFilters = getChangedFilters();
        console.log("Old" , appliedFilters)
        console.log('Applied filters:', changedFilters);
        console.log("KLKL :", { selects: { ...changedFilters.selects, ...appliedFilters } })
        dispatch(applyFilter({selects : {...changedFilters.selects , ...appliedFilters}}));
        setModalOpen(false);
    };

    const handleResetFilters = () => {
        if (filterStructure) {
            setFilters(initialFilters);
        }
    };

    const formatPrice = (value) => {
        if (typeof value !== 'number') return '0';
        return `₹${value.toLocaleString('en-IN')}`;
    };

    const formatArea = (value) => {
        if (typeof value !== 'number') return '0';
        return `${value.toLocaleString('en-IN')} sq ft`;
    };

    if (!filterStructure) {
        return (
            <Modal
                title="Filters"
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                width={800}
                footer={null}
            >
                <div className="p-4 text-center">Loading filters...</div>
            </Modal>
        );
    }

    return (
        <Modal
            title={
                <div className="flex items-center gap-2">
                    <FiSettings className="text-gray-600" size={20} />
                    <span className="text-lg font-semibold">Filters</span>
                </div>
            }
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            width={1000}
            footer={[
                <button
                    key="reset"
                    onClick={handleResetFilters}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                    Reset
                </button>,
                <button
                    key="apply"
                    onClick={handleApplyFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Apply Filters
                </button>
            ]}
        >
            <div className="max-h-[60vh] overflow-y-auto pr-2">
                {/* Basic Details */}
                <CustomCard title="Basic Details">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Bedrooms</label>
                            <InputNumber
                                min={0}
                                max={filterStructure.numeric.bedrooms?.max || 10}
                                value={filters.numeric.bedrooms || 0}
                                onChange={(value) => handleNumericChange('bedrooms', value)}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Bathrooms</label>
                            <InputNumber
                                min={0}
                                max={filterStructure.numeric.bathrooms?.max || 10}
                                value={filters.numeric.bathrooms || 0}
                                onChange={(value) => handleNumericChange('bathrooms', value)}
                                className="w-full"
                            />
                        </div>
                    </div>
                </CustomCard>

                {/* Price Range */}
                <CustomCard title="Price Range">
                    <Slider
                        range
                        min={Number(filterStructure.numeric.price?.min) || 0}
                        max={Number(filterStructure.numeric.price?.max) || 1000000}
                        value={filters.numeric.price}
                        onChange={(value) => handleNumericChange('price', value)}
                        tipFormatter={formatPrice}
                        step={1}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>{formatPrice(filters.numeric.price[0])}</span>
                        <span>{formatPrice(filters.numeric.price[1])}</span>
                    </div>
                </CustomCard>

                {/* Area Details */}
                <CustomCard title="Area Details">
                    <div className="space-y-6">
                        {['area', 'carpetArea', 'superBuiltupArea'].map((areaType) => (
                            <div key={areaType}>
                                <label className="block text-sm font-medium mb-2">
                                    {areaType.replace(/([A-Z])/g, ' $1').trim()} (sq ft)
                                </label>
                                <Slider
                                    range
                                    min={Number(filterStructure.numeric[areaType]?.min) || 0}
                                    max={Number(filterStructure.numeric[areaType]?.max) || 10000}
                                    value={filters.numeric[areaType]}
                                    onChange={(value) => handleNumericChange(areaType, value)}
                                    tipFormatter={formatArea}
                                    step={1}
                                />
                                <div className="flex justify-between mt-1 text-sm text-gray-600">
                                    <span>{formatArea(filters.numeric[areaType][0])}</span>
                                    <span>{formatArea(filters.numeric[areaType][1])}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomCard>

                {/* Property Details */}
                <CustomCard title="Property Details">
                    {Object.entries({
                        type_name: 'Property Type',
                        purpose: 'Purpose',
                        furnishing: 'Furnishing'
                    }).map(([field, label]) => (
                        <div key={field} className="mb-4">
                            <label className="block text-sm font-medium mb-2">{label}</label>
                            <Select
                                mode="multiple"
                                placeholder={`Select ${label.toLowerCase()}`}
                                value={filters.selects[field]}
                                onChange={(value) => handleSelectChange(field, value)}
                                options={filterStructure.selects[field]?.map(item => ({
                                    label: item,
                                    value: item
                                })) || []}
                                className="w-full"
                            />
                        </div>
                    ))}
                </CustomCard>

                {/* Status and Availability */}
                <CustomCard title="Status and Availability">
                    {Object.entries({
                        construction_status: 'Construction Status',
                        possession: 'Possession'
                    }).map(([field, label]) => (
                        <div key={field} className="mb-4">
                            <label className="block text-sm font-medium mb-2">{label}</label>
                            <Select
                                mode="multiple"
                                placeholder={`Select ${label.toLowerCase()}`}
                                value={filters.selects[field]}
                                onChange={(value) => handleSelectChange(field, value)}
                                options={filterStructure.selects[field]?.map(item => ({
                                    label: item,
                                    value: item
                                })) || []}
                                className="w-full"
                            />
                        </div>
                    ))}
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-2">Availability</label>
                        <Radio.Group
                            value={filters.available}
                            onChange={(e) => handleAvailabilityChange(e.target.value)}
                        >
                            <Radio value={true}>Available</Radio>
                            <Radio value={false}>Not Available</Radio>
                        </Radio.Group>
                    </div>
                </CustomCard>

                {/* Location */}
                <CustomCard title="Location">
                    <Select
                        mode="multiple"
                        placeholder="Select region"
                        value={filters.selects.region}
                        onChange={(value) => handleSelectChange('region', value)}
                        options={filterStructure.selects.region?.map(region => ({
                            label: region,
                            value: region
                        })) || []}
                        className="w-full"
                    />
                </CustomCard>

                {/* Amenities */}
                <CustomCard title="Amenities">
                    <div className="grid grid-cols-2 gap-4">
                        {filterStructure.propertyAmenities?.map((amenity) => (
                            <div key={amenity} className="flex items-center">
                                <Checkbox
                                    checked={filters.propertyAmenities.includes(amenity)}
                                    onChange={() => handleAmenitiesChange(amenity)}
                                >
                                    {amenity}
                                </Checkbox>
                            </div>
                        ))}
                    </div>
                </CustomCard>
            </div>
        </Modal>
    );
};

export default FilterComponent;