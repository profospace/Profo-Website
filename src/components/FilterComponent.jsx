import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'antd';
import { Button } from "@material-tailwind/react";
import { IconButton } from '@material-tailwind/react';
import RangeSlider from '../components/RangeSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilteredProperties } from '../redux/features/Properties/propertiesSlice';

import { FaKitchenSet } from 'react-icons/fa6';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaCar, FaSwimmer, FaGuitar, FaHome, FaCloud } from 'react-icons/fa';
import { GrLock, GrWifi } from 'react-icons/gr';
import { RiMotorbikeFill } from 'react-icons/ri';
import { FaMoneyBillWave, FaStore, FaWarehouse, FaBuilding } from 'react-icons/fa';

// Mapping amenities to their respective icons
const amenityIconMap = {
    "security patrol": <GrLock size={25} />,
    "pet-friendly facilities": <FaHome size={25} />,
    "parking (garage/open)": <FaCar size={25} />,
    "valet parking": <FaCar size={25} />,
    "guest parking": <FaCar size={25} />,
    "bike storage": <RiMotorbikeFill size={25} />,
    "parcel lockers": <FaHome size={25} />,
    "business center": <FaCloud size={25} />,
    "conference/meeting rooms": <FaCloud size={25} />,
    "swimming-pool": <FaSwimmer size={25} />,
    "gym": <FaGuitar size={25} />,
    "parking": <FaCar size={25} />,
    "24x7 security": <GrLock size={25} />,
    "lift": <FaHome size={25} />,
    "garden": <FaHome size={25} />,
    "power backup": <FaCloud size={25} />
};

// Fallback icon for unknown amenities
const fallbackIcon = <FaHome size={25} />;

// Mapping purposes to their respective icons
const purposeIconMap = {
    "rent": <FaMoneyBillWave size={25} />,
    "sale": <FaHome size={25} />,
    "lease": <FaStore size={25} />,
    "buy": <FaStore size={25} />,
    // Add more purposes and their corresponding icons here
};

// Fallback icon for unknown purposes
const fallbackPurposeIcon = <FaHome size={25} />;


// Mapping type_name to their respective icons
const typeNameIconMap = {
    "warehouses": <FaWarehouse size={25} />,
    "shops": <FaStore size={25} />,
    "apartment": <FaBuilding size={25} />,
    "commercial": <FaBuilding size={25} />,
    "house": <FaHome size={25} />,
    "villa": <FaHome size={25} />,
    // Add more types and their corresponding icons here
};

// Fallback icon for unknown types
const fallbackTypeIcon = <FaHome size={25} />;

const FilterComponent = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
    const dispatch = useDispatch()
    const [filterRanges , setFilterRanges] = useState({})
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 0,
    });
    const { properties } = useSelector(state => state.properties)

    

    console.log(filterRanges)
    /* calculating properties Keys to show dynAMIC range filter */
    const calculatingFiltersValues = () => {
        if (!properties || properties.length === 0) return;

        const result = properties?.reduce(
            (acc, property) => {
                if (property.bedrooms !== null && property.bedrooms !== undefined) {
                    acc.maxBedrooms = Math.max(acc.maxBedrooms, property.bedrooms);
                }
                if (property.bathrooms !== null && property.bathrooms !== undefined) {
                    acc.maxBathrooms = Math.max(acc.maxBathrooms, property.bathrooms);
                }
                if (property.floor !== null && property.floor !== undefined) {
                    acc.maxfloor = Math.max(acc.maxfloor, property.floor);
                }
                if (property.price !== null && property.price !== undefined) {
                    acc.maxPrice = Math.max(acc.maxPrice, property.price);
                    acc.minPrice = Math.min(acc.minPrice, property.price);
                }
                // Collect amenities - if new added that will also be collected here
                if (Array.isArray(property.amenities)) {
                    const validAmenities = property.amenities
                        .filter((amenity) => amenity && amenity.trim() !== "") // Filter out empty or undefined values
                        .map((amenity) => amenity.trim().toLowerCase()); // Normalize the amenity names to lowercase

                    // Combine amenities while removing duplicates (case-insensitive)
                    acc.amenities = [
                        ...new Set([
                            ...acc.amenities,
                            ...validAmenities,
                        ]),
                    ];
                }

                // Purpose
                const uniquePurposes = properties?.map(property => property.purpose).filter(purpose => purpose).map(purpose => purpose.toLowerCase());
                acc.purpose = [...new Set(uniquePurposes)];
                

                // Property type ? - Aprt ,house,villa , office ???
                const uniquePropertyType = properties?.map(property => property.type_name).filter(type => type).map(propertyType => propertyType.toLowerCase())
                acc.type_name = [...new Set(uniquePropertyType)]

                return acc;
            },
            {
                // Initialize
                maxBedrooms: 0,
                maxBathrooms: 0,
                maxPrice: 0,
                minPrice: Infinity,
                amenities: [],
                purpose : []
            }
        );

        setFilterRanges(result);
        setPriceRange({
            min: result.minPrice,
            max: result.maxPrice,
        });
    };



    useEffect(
        ()=>{
            calculatingFiltersValues()
        },[properties]
    )

    //update the filters whenever priceRange changes
    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            priceMin: priceRange.min,
            priceMax: priceRange.max,
        }));
    }, [priceRange]);


    /* Our filter Object which will send on displatch filter Click  */
    const [filters, setFilters] = useState({
        bedrooms: null,
        bathrooms: null,
        floors : null,
        priceMin: null, // useEffect is applied -Note
        priceMax: null,
        floor: null,
        amenities: [],
        purpose : null ,
        type_name : [],
        propertyType: null,
    });
    console.log("Filter-pur" , filters)

    /* handle property type (type_name) selection */
    const togglePropertyType = (selectedProperty) => {
        setFilters((prev) => {
            const propertyTypes = [...prev.type_name];
            if (propertyTypes.includes(selectedProperty)) {
                // Remove type_name if already selected
                return {
                    ...prev,
                    type_name: propertyTypes.filter((purpose) => purpose !== selectedProperty),
                };
            } else {
                // Add type_name if not already selected
                return {
                    ...prev,
                    type_name: [...propertyTypes, selectedProperty],
                };
            }
        });
    };

    // purpose type - rent ,buy
    const togglePurposeType = (purpose) =>{
        setFilters((prev) => ({
            ...prev,
            purpose: prev.purpose === purpose ? null : purpose, // Toggle selection
        }))
    }

    // clearAllFilters
    const clearAllFilters = () => {
        setFilters({
            bedrooms: null,
            bathrooms: null,
            floors: null,
            priceMin: null,
            priceMax: null,
            floor: null,
            amenities: [],
            purpose: null,
            type_name: [],
            propertyType: null,
        });
        setPriceRange({
            min: filterRanges.minPrice || 0,
            max: filterRanges.maxPrice || 0,
        });
        
        // filter ki redux state ko null krdo , to automatic vo properties show karede sab
        
        setModalOpen(false) // close the filter modal


    };

    // const updateFilter = (key, value) => {
    //     setFilters((prev) => ({
    //         ...prev,
    //         [key]: value,
    //     }));
    // };

    const incrementFilter = (key) => {
        setFilters((prev) => ({
            ...prev,
            [key]: (prev[key] || 0) + 1,
        }));
    };

    const decrementFilter = (key) => {
        setFilters((prev) => ({
            ...prev,
            [key]: Math.max(0, (prev[key] || 0) - 1),
        }));
    };


    // Handle price changes and update the filters
    const handleMinPrice = (e) => {
        const value = Math.max(parseInt(e.target.value) || priceRange.min, priceRange.min);
        setFilters((prev) => ({
            ...prev,
            priceMin: value,
            priceMax: Math.max(value, prev.priceMax), // Ensure min doesn't exceed max
        }));
    };

    const handleMaxPrice = (e) => {
        const value = Math.min(parseInt(e.target.value) || priceRange.max, priceRange.max);
        setFilters((prev) => ({
            ...prev,
            priceMax: value,
            priceMin: Math.min(value, prev.priceMin), // Ensure max doesn't go below min
        }));
    };


    const handleSliderChange = (values) => {
        setFilters((prev) => ({
            ...prev,
            priceMin: values[0],
            priceMax: values[1],
        }));
    };

    function handleDispatchFilter(e){
        e.preventDefault()
        setModalOpen(false)
        
        // dispatching filter 
        console.log(filters)
        dispatch(getAllFilteredProperties(filters))
    }

    const scrollContainerRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;

            const sections = scrollContainerRef.current.querySelectorAll('.filter-section');
            const containerTop = scrollContainerRef.current.getBoundingClientRect().top;

            let currentSection = '';
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - containerTop;
                const sectionTitle = section.querySelector('h1')?.textContent;

                if (sectionTop <= 50 && sectionTop > -100) {
                    currentSection = sectionTitle;
                }
            });

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, [activeSection, setActiveSection]);

    return (
        <Modal
            title=""
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)} // Closing modal on Ok
            onCancel={() => setModalOpen(false)} // Closing modal on Cancel
            footer={null} 
            styles={{ padding: '0px', maxHeight: '500px' }} 
        >
            <div className='w-full text-center'>
                <h1 className='font-bold text-xl py-2'>Filters</h1>
            </div>
            <hr />

            {/* Scrollable Content Section */}
            <div className="hide-scrollbar max-h-[450px] px-4">
                {/* Beds, Floors, and Bathrooms */}
                {/* <div className='py-4'> */}
                <div className={`filter-section py-4 transition-all duration-300 ${activeSection === 'Beds, Floors, and Bathrooms' ? 'section-highlight rounded-lg p-4 mt-2' : ''
                    }`}>
                    <h1 className='text-xl font-semibold'>Beds and Bathrooms</h1>

                    {/* Beds */}
                    <div className='flex justify-between items-center py-2 mb-1'>
                        <div className='text-xl'>Beds</div>
                        <div className='flex items-center gap-3'>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => decrementFilter('bedrooms')} disabled={filters?.bedrooms < 1}>
                                <FaMinus />
                            </IconButton>
                            <div className='text-xl text-center min-w-10'>{filters.bedrooms ? filters.bedrooms + '+ ' : "Any"}</div>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => incrementFilter('bedrooms')} disabled={filterRanges?.maxBedrooms == filters.bedrooms}>
                                <FaPlus />
                            </IconButton>
                        </div>
                    </div>

                    {/* Floors */}
                    {/* <div className='flex justify-between items-center py-2 mb-1'>
                        <div className='text-xl'>Floors</div>
                        <div className='flex items-center gap-3'>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => decrementFilter('floor')} disabled={filters?.floor < 1}>
                                <FaMinus />
                            </IconButton>
                            <div className='text-xl text-center min-w-10'>{filters.floor ? filters.floor + '+ ' : "Any"}</div>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => incrementFilter('floor')} disabled={filterRanges?.maxfloor == filters.floor} >
                                <FaPlus />
                            </IconButton>
                        </div>
                    </div> */}

                    {/* Bathrooms */}
                    <div className='flex justify-between items-center py-2 mb-1'>
                        <div className='text-xl'>Bathrooms</div>
                        <div className='flex items-center gap-3'>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => decrementFilter('bathrooms')} disabled={filters.bathrooms < 1}>
                                <FaMinus />
                            </IconButton>
                            <div className='text-xl text-center min-w-10'>{filters.bathrooms ? filters.bathrooms + '+ ' : "Any"}</div>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => incrementFilter('bathrooms')} disabled={filterRanges?.maxBathrooms == filters.bathrooms}>
                                <FaPlus />
                            </IconButton>
                        </div>
                    </div>

                    <hr />
                </div>

                    {/* floor */}
                <div className={`filter-section py-4 transition-all duration-300 ${activeSection === 'Floor' ? 'section-highlight rounded-lg p-4 mt-2' : ''
                    }`}>

                    <div className='flex justify-between items-center py-2 mb-1'>
                        <div className='text-xl font-semibold'>Floors</div>
                        <div className='flex items-center gap-3'>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => decrementFilter('floor')} disabled={filters?.floor < 1}>
                                <FaMinus />
                            </IconButton>
                            <div className='text-xl text-center min-w-10'>{filters.floor ? filters.floor + '+ ' : "Any"}</div>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => incrementFilter('floor')} disabled={filterRanges?.maxfloor == filters.floor} >
                                <FaPlus />
                            </IconButton>
                        </div>
                    </div>
                    <hr />

                    </div>

                        {/* Purpose - buy,rent ,sale */}
                <div className={`py-4 transition-all duration-300 ${activeSection === 'Purpose' ? 'section-highlight rounded-lg p-4 mt-2' : ''}`}>
                    <h1 className='text-xl font-semibold'>Purpose</h1>
                    <div className="flex gap-2 flex-wrap py-4">
                        {
                            filterRanges?.purpose?.map((purpose, index) => {
                                // Lookup the corresponding icon for the purpose
                                const IconComponent = purposeIconMap[purpose] || fallbackPurposeIcon;
                                const isSelected = filters.purpose === purpose;
                                return (
                                    <Button
                                        key={index}
                                        variant={isSelected ? "filled" : "outlined"} // Highlight selected proepty type
                                        className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto"
                                        onClick={() =>
                                            togglePurposeType(purpose)
                                        }
                                    >
                                        {IconComponent}
                                        {purpose.charAt(0).toUpperCase() + purpose.slice(1)} {/* Capitalize first letter */}
                                    </Button>
                                );
                            })
                        }
                    </div>
                    <hr></hr>
                </div>


                {/* Amenities */}
                {/* <div className='py-4'> */}
                <div className={`py-4 transition-all duration-300 ${activeSection === 'Amenities' ? 'section-highlight rounded-lg p-4 mt-2' : ''}`}>
                    <h1 className='text-xl font-semibold'>Amenities</h1>
                    <div className="flex gap-2 flex-wrap py-4">
                        {
                            filterRanges?.amenities?.map((amenity, index) => {
                                // Normalize the amenity name to lowercase to handle variations like "Gym", "gym"
                                const normalizedAmenity = amenity.toLowerCase().trim();

                                // Lookup the corresponding icon for the amenity
                                const IconComponent = amenityIconMap[normalizedAmenity] || fallbackIcon;

                                return (
                                    <Button
                                        key={index}
                                        variant="outlined"
                                        className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto"
                                    >
                                        {IconComponent}
                                        {amenity}
                                    </Button>
                                );
                            })
                        }
                    </div>
                    <hr></hr>
                </div>

                {/* Property Type */}
                {/* <div className='py-4'> */}
                <div className={`py-4 transition-all duration-300 ${activeSection === 'Property Type' ? 'section-highlight rounded-lg p-4 mt-2' : ''}`}>
                    <h1 className='text-xl font-semibold'>Property Type</h1>
                    <div className="flex gap-2 flex-wrap py-4">
                        {
                            filterRanges?.type_name?.map((typeName, index) => {
                                // Lookup the corresponding icon for the type_name
                                const IconComponent = typeNameIconMap[typeName] || fallbackTypeIcon;
                                const isSelected = filters.type_name.includes(typeName);

                                return (
                                    <Button
                                        key={index}
                                        variant={isSelected ? "filled" : "outlined"} // Highlight selected proepty type
                                        className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto"
                                        onClick={() => togglePropertyType(typeName)}
                                    >
                                        {IconComponent}
                                        {typeName.charAt(0).toUpperCase() + typeName.slice(1)} {/* Capitalize first letter */}
                                    </Button>
                                );
                            })
                        }
                    </div>
                    <hr></hr>
                </div>

                {/* Price range */}
                {/* <div className="py-4"> */}
                <div className={`filter-section py-4 transition-all duration-300 ${activeSection === 'Price Range' ? 'section-highlight rounded-lg p-4 mt-2' : ''
                    }`}>
                    <h1 className="text-xl font-semibold">Price Range</h1>
                    <RangeSlider
                        minPrice={filters.priceMin}
                        maxPrice={filters.priceMax}
                        range={priceRange}
                        onSliderChange={handleSliderChange}
                    />
                    <div className="flex justify-between items-center w-full max-w-md mx-auto p-4">
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-medium text-gray-500 mb-2">Minimum</span>
                            <input
                                type="number"
                                className="border rounded-full px-4 py-2 bg-white text-gray-900 shadow-md text-center w-32"
                                value={filters.priceMin}
                                onChange={handleMinPrice}
                                min={priceRange.min}
                            />
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-sm font-medium text-gray-500 mb-2">Maximum</span>
                            <input
                                type="number"
                                className="border-2 rounded-full px-4 py-2 bg-gray-100 text-gray-900 shadow-md border-gray-900 text-center w-32"
                                value={filters.priceMax}
                                onChange={handleMaxPrice}
                                max={priceRange.max}
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Custom Footer with Buttons  , default antd footer is set falsed*/}
            <div className="flex justify-between gap-4 pt-4">
                <Button variant="text" className="flex items-center gap-2" onClick={clearAllFilters}>
                    Clear all{" "}
                    {/* will ad icon if required */}
                </Button>
                <Button
                    onClick={
                        // Handle apply filter logic here
                        handleDispatchFilter
                    }
                    type="primary"
                    className="rounded-full px-6"
                >
                    Apply
                </Button>
            </div>
        </Modal>
    );
};

export default FilterComponent;
