import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatCurrency, formatArea, truncateText } from '../../lib/utils';
import { Building, Home, MapPin, Bath, Bed, Square, Heart, Mail, Phone, Map } from 'lucide-react';
import { IoBedSharp } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import TagsCarousal from '../../Testing/TagsCarousal';
import { Button, Popover } from 'antd';
import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineBed } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const PropertyShowcase = ({
    properties = [],
    projects = [],
    buildings = [],
    sortBy,
    setSortBy
}) => {
    const [activeTab, setActiveTab] = useState('properties');

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Format price for display
    const formatPrice = (price, priceOnRequest) => {
        if (priceOnRequest) return 'Price on Request';
        return formatCurrency(price, 'INR');
    };

    // Function to truncate text
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    // Count total items
    const propertiesCount = properties?.length || 0;
    const projectsCount = projects?.length || 0;
    const buildingsCount = buildings?.length || 0;

    // Sort function based on selected sorting option
    const sortItems = (items) => {
        if (!sortBy) return items;

        const sortedItems = [...items];

        switch (sortBy) {
            case 'price-low-high':
                return sortedItems.sort((a, b) => (a.price || 0) - (b.price || 0));
            case 'price-high-low':
                return sortedItems.sort((a, b) => (b.price || 0) - (a.price || 0));
            case 'newest':
                return sortedItems.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
            case 'oldest':
                return sortedItems.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));
            case 'most-viewed':
                return sortedItems.sort((a, b) => (b.total_views || 0) - (a.total_views || 0));
            default:
                return items;
        }
    };

    // calc - h , divide no. of ads , each section ref store then make sticky at that ref
    

    return (
        <div className="flex flex-col gap-6 pb-10 px-6">
            {/* Main content */}
            {/* Tabs */}
            <div className="flex border-b border-gray-200 ">
                <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'properties'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                    onClick={() => handleTabChange('properties')}
                >
                    Properties ({propertiesCount})
                </button>
                <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'projects'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                    onClick={() => handleTabChange('projects')}
                >
                    Projects ({projectsCount})
                </button>
                <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'buildings'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                    onClick={() => handleTabChange('buildings')}
                >
                    Buildings ({buildingsCount})
                </button>
            </div>

            <div className='flex gap-6'>
                <div className="flex-1">

                    {/* Sorting option */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">
                            {activeTab === 'properties' && 'Properties'}
                            {activeTab === 'projects' && 'Projects'}
                            {activeTab === 'buildings' && 'Buildings'}
                        </h2>
                        <div className="flex items-center">
                            <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
                                Sort by:
                            </label>
                            <select
                                id="sort"
                                value={sortBy || ''}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="py-1 px-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Relevance</option>
                                <option value="price-low-high">Price: Low to High</option>
                                <option value="price-high-low">Price: High to Low</option>
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="most-viewed">Most Viewed</option>
                            </select>
                        </div>
                    </div>

                    {/* Content based on active tab */}
                    <AnimatePresence mode="wait">
                        {activeTab === 'properties' && (
                            <motion.div
                                key="properties"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {sortItems(properties).map((property) => (
                                    <PropertyCard key={property._id} property={property} />
                                ))}
                                {properties.length === 0 && (
                                    <EmptyState type="properties" />
                                )}
                            </motion.div>
                        )}

                        {activeTab === 'projects' && (
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {sortItems(projects).map((project) => (
                                    <ProjectCard key={project._id} project={project} />
                                ))}
                                {projects.length === 0 && (
                                    <EmptyState type="projects" />
                                )}
                            </motion.div>
                        )}

                        {activeTab === 'buildings' && (
                            <motion.div
                                key="buildings"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {sortItems(buildings).map((building) => (
                                    <BuildingCard key={building._id} building={building} />
                                ))}
                                {buildings.length === 0 && (
                                    <EmptyState type="buildings" />
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Ads space */}
                <div className="w-full lg:w-80 flex-shrink-0">
                    <div className="space-y-4">
                        {/* First Ad */}
                        <div className=" overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            <img
                                src="https://tpc.googlesyndication.com/simgad/3259129370883811493"
                                alt="Advertisement"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Second Ad */}
                        <div className=" overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mt-4">
                            <img
                                src="https://tpc.googlesyndication.com/simgad/9893830573851395315"
                                alt="Advertisement"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Third Ad */}
                        <div className=" overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mt-4">
                            <img
                                src="https://tpc.googlesyndication.com/simgad/4391919387331327912"
                                alt="Advertisement"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PropertyCard = ({ property }) => {

    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    // console.log("propertyCard", property)
    // Images for carousel
    const images = [
        "https://images.bayut.com/thumbnails/761297891-800x600.webp",
        "https://images.bayut.com/thumbnails/761297894-1066x800.webp",
        "https://images.bayut.com/thumbnails/761297895-1066x800.webp",
        "https://images.bayut.com/thumbnails/761297896-1066x800.webp",
        "https://images.bayut.com/thumbnails/760667991-800x600.webp"
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === property?.galleryList?.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? property?.galleryList?.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleEmailClick = () => {
        // window.location.href = "mailto:agent@example.com";
    };

    const handleCallClick = () => {
        if (property?.contactList?.[0]) {
            window.location.href = `tel:${property?.contactList?.[0]}`;
        } else {
            alert("Phone No. not available")
        }
    };

    const handleWhatsAppClick = () => {
        window.location.href = "https://wa.me/971500000000";
    };

    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/api/details/${property?.post_id}`)}
            className="font-lato flex mb-8 flex-col md:flex-row rounded-lg overflow-hidden max-w-6xl mx-auto bg-white border border-[#DEDEDE] "
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Left side - Image Carousel */}
            <div className="relative w-full md:w-4/5 h-80 md:h-auto max-h-80 overflow-hidden">
                {/* Carousel images */}
                <AnimatePresence initial={false} mode="wait">
                    <motion.img
                        key={currentSlide}
                        src={property?.galleryList?.[currentSlide]}
                        alt={`Property view ${currentSlide + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>

                {/* TruCheck badge */}
                <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="text-xs font-bold">{property?.type_name}</span>
                </div>

                {/* Navigation arrows - only visible on hover */}
                <AnimatePresence>
                    {isHovering && (
                        <>
                            <motion.button
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-20"
                                onClick={prevSlide}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>
                            <motion.button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-20"
                                onClick={nextSlide}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </>
                    )}
                </AnimatePresence>

                {/* TruBroker badge */}
                {/* <div className="absolute bottom-12 left-4 flex items-center space-x-2 z-10">
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white bg-gray-300">
                        <img src="/api/placeholder/40/40" alt="Agent" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-bold text-white">TruBroker™</span>
                </div> */}

                {/* BlackBrick watermark */}
                {/* <div className="absolute bottom-6 right-4 z-10">
                    <div className="text-white text-xl font-bold opacity-90">BlackBrick.</div>
                </div> */}

                {/* Carousel dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                        ></motion.button>
                    ))}
                </div>

                {/* Dark overlay at bottom of carousel */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Favorite button */}
                <motion.button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Heart
                        size={24}
                        className={`${isFavorite ? "fill-white text-white" : "text-white"}`}
                    />
                </motion.button>
            </div>

            {/* Right side - Property details */}
            <div className="w-full  p-5 flex flex-col">
                {/* Price */}
                <div className="flex gap-2 mb-2 items-baseline">
                    <div className="text-xl md:text-xl text-gray-800">INR</div>
                    <div className="text-xl md:text-2xl font-semibold text-gray-800">{property?.price || 'Unavailable'}</div>
                </div>
                <div className="flex gap-2 mb-2 items-baseline">
                    {property?.post_title || 'Unavailable'}
                </div>

                {/* Property type and specs */}
                <div className="flex items-center space-x-6 mb-2 text-md">
                    <div className="border-r-2 pr-4 font-extrabold text-gray-800">{property?.type_name}</div>
                    <div className='flex gap-4 items-center border-r-2 pr-4'>
                        <div className="flex items-center space-x-1">
                            <MdOutlineBed />
                            <span className="text-gray-700 font-bold">{property?.bedrooms}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <LiaBathSolid />
                            <span className="text-gray-700 font-bold">{property?.bathrooms}</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-700 font-bold">Area: {property?.area} sqft</span>
                    </div>
                </div>


                {/* Location */}
                <div className="flex items-start space-x-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">
                        {property?.address}
                    </span>
                </div>

                {/* Open house tag */}
                <div className="my-1">
                    <TagsCarousal property={property} />
                </div>


                {/* Amenities tag
                <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                        {(() => {
                            // Create a Set to track unique amenities (case-insensitive)
                            const uniqueAmenities = new Set();
                            const uniqueAmenitiesArray = [];

                            // Process amenities to handle case sensitivity
                            property?.amenities?.forEach(amenity => {
                                // Convert to lowercase for case-insensitive comparison
                                const lowerCaseAmenity = amenity.toLowerCase();

                                // Only add if not already in the set
                                if (!uniqueAmenities.has(lowerCaseAmenity)) {
                                    uniqueAmenities.add(lowerCaseAmenity);
                                    uniqueAmenitiesArray.push(amenity); // Keep original casing for display
                                }
                            });

                            // Map the unique amenities array
                            return uniqueAmenitiesArray.map((amenity, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-500 rounded-full text-xs border border-green-500 hover:bg-gray-200 transition-colors"
                                >
                                    <span>{amenity}</span>
                                </div>
                            ));
                        })()}
                    </div>
                </div> */}


                {/* Amenities tag */}
                <div className="my-2">
                    <div className="flex flex-wrap gap-2">
                        {(() => {
                            // Create a Set to track unique amenities (case-insensitive)
                            const uniqueAmenities = new Set();
                            const uniqueAmenitiesArray = [];

                            // Process amenities to handle case sensitivity
                            property?.amenities?.forEach(amenity => {
                                // Convert to lowercase for case-insensitive comparison
                                const lowerCaseAmenity = amenity.toLowerCase();

                                // Only add if not already in the set
                                if (!uniqueAmenities.has(lowerCaseAmenity)) {
                                    uniqueAmenities.add(lowerCaseAmenity);
                                    uniqueAmenitiesArray.push(amenity); // Keep original casing for display
                                }
                            });

                            // Define how many amenities to show initially
                            const maxDisplayed = 4;
                            const visibleAmenities = uniqueAmenitiesArray.slice(0, maxDisplayed);
                            const remainingCount = uniqueAmenitiesArray.length - maxDisplayed;

                            // Map the visible amenities
                            const displayedAmenities = visibleAmenities.map((amenity, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-500 rounded-md text-xs hover:bg-gray-200 transition-colors"
                                >
                                    <span>{amenity}</span>
                                </div>
                            ));

                            // Add the "+X more" element if there are remaining amenities
                            if (remainingCount > 0) {
                                displayedAmenities.push(
                                    <div
                                        key="more"
                                        className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs border border-gray-400 hover:bg-gray-200 transition-colors cursor-pointer"
                                        title={uniqueAmenitiesArray.slice(maxDisplayed).join(', ')}
                                    >
                                        <span>+{remainingCount} more</span>
                                    </div>
                                );
                            }

                            return displayedAmenities;
                        })()}
                    </div>
                </div>





                {/* Contact buttons */}
                <div className="flex space-x-4 mt-2">
                    <motion.button
                        onClick={handleCallClick}
                        className="flex-1 flex items-center justify-center space-x-2 bg-[#FED42B] hover:bg-gray-200 text-black py-2 px-4 rounded-md transition-colors"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Phone size={20} />
                        <span className="font-medium">Connect</span>
                    </motion.button>
                    <motion.button
                        onClick={handleEmailClick}
                        className="flex items-center justify-center space-x-2 bg-[#E5EFF0] hover:bg-gray-200 text-black py-2 px-4 rounded-md transition-colors"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Map size={20} />
                        <span className="font-medium">Map</span>
                    </motion.button>

                    

                    <Popover
                        content={
                            <div className="flex flex-col space-y-2 p-1">
                                <a onClick={() => { handleOptionClick('edit'); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">💖 Add to wishlist</a>
                                <a onClick={() => { handleOptionClick('share'); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Share</a>
                                <a onClick={() => { handleOptionClick('delete'); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Delete</a>
                                <a onClick={() => { handleOptionClick('delete'); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Report this property</a>
                            </div>
                        }
                        // title="Options"
                        trigger="click"
                        open={open}
                        onOpenChange={handleOpenChange}
                        placement="bottom"
                        
                    >
                        <motion.button
                            onClick={handleEmailClick}
                            className="flex items-center justify-center bg-transparent hover:bg-gray-200 text-black py-2 rounded-md transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <HiOutlineDotsVertical size={20} />
                        </motion.button>
                    </Popover>

                </div>


                {/* Last visited note */}
                {/* <div className="flex items-center space-x-2 text-xs text-blue-800 bg-blue-50 p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Agent last visited this property on 7th of March</span>
                </div> */}

                {/* BlackBrick logo */}
                {/* <div className="mt-4 flex justify-end">
                    <div className="text-black text-lg font-bold">BlackBrick.</div>
                </div> */}
            </div>
        </div>
    );
};

// Project Card Component
const ProjectCard = ({ project }) => {
    // Get floor plans range
    const getFloorPlanPriceRange = (floorPlans) => {
        if (!floorPlans || floorPlans.length === 0) return '';

        const prices = floorPlans.map(plan => plan.price).filter(price => price);
        if (prices.length === 0) return '';

        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        if (minPrice === maxPrice) {
            return formatCurrency(minPrice, 'INR');
        }

        return `${formatCurrency(minPrice, 'INR')} - ${formatCurrency(maxPrice, 'INR')}`;
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3 h-52 overflow-hidden relative">
                    {project.gallery && project.gallery.length > 0 && project.gallery[0].images && project.gallery[0].images.length > 0 ? (
                        <img
                            src={project.gallery[0].images[0]}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src="/api/placeholder/300/200"
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full p-3 flex flex-col justify-between">
                        <div className="flex justify-between">
                            {project.type && (
                                <div className="bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
                                    {project.type.replace('_', ' ')}
                                </div>
                            )}
                            {project.availabilityStatus && (
                                <div className="bg-orange-500 text-white px-2 py-1 text-xs font-medium rounded">
                                    {project.availabilityStatus.replace('_', ' ')}
                                </div>
                            )}
                        </div>
                        <div>
                            {project.status && (
                                <div className="bg-green-600 text-white px-3 py-1 text-xs font-medium rounded inline-block">
                                    {project.status}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                        <div className="text-lg font-bold text-blue-600">
                            {project.overview && project.overview.priceRange ?
                                `${formatCurrency(project.overview.priceRange.pricePerSqFt, 'INR')}/sqft` :
                                (project.floorPlans ? getFloorPlanPriceRange(project.floorPlans) : '')}
                        </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                        <MapPin size={16} className="mr-1 flex-shrink-0" />
                        <span className="text-sm truncate">
                            {project.location ?
                                (project.location.address || `${project.location.city}, ${project.location.state}`) :
                                'Location not specified'}
                        </span>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {truncateText(project.description, 120)}
                    </p>

                    <div className="flex flex-wrap gap-5 mt-2 mb-4">
                        {project.overview && project.overview.totalUnits && (
                            <div className="flex items-center text-sm text-gray-700">
                                <Home size={16} className="mr-1 text-gray-500" />
                                <span>{project.overview.totalUnits} Units</span>
                            </div>
                        )}
                        {project.overview && project.overview.totalTowers && (
                            <div className="flex items-center text-sm text-gray-700">
                                <Building size={16} className="mr-1 text-gray-500" />
                                <span>{project.overview.totalTowers} Towers</span>
                            </div>
                        )}
                        {project.floorPlans && project.floorPlans.length > 0 && (
                            <div className="flex items-center text-sm text-gray-700">
                                <Square size={16} className="mr-1 text-gray-500" />
                                <span>{project.floorPlans.length} Floor Plans</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        {project.builder && (
                            <div className="text-xs text-gray-500 flex items-center">
                                <Building size={14} className="mr-1" />
                                By: {project.builder.name || 'Unknown Builder'}
                            </div>
                        )}
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Building Card Component
const BuildingCard = ({ building }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3 h-52 overflow-hidden relative">
                    {building.galleryList && building.galleryList.length > 0 ? (
                        <img
                            src={building.galleryList[0]}
                            alt={building.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src="/api/placeholder/300/200"
                            alt={building.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full p-3 flex flex-col justify-between">
                        <div className="flex justify-between">
                            {building.type && (
                                <div className="bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
                                    {building.type.charAt(0).toUpperCase() + building.type.slice(1)}
                                </div>
                            )}
                            {building.allowPreBooking === 'on' && (
                                <div className="bg-purple-600 text-white px-2 py-1 text-xs font-medium rounded">
                                    Pre-booking
                                </div>
                            )}
                        </div>
                        <div>
                            {building.developmentStatus && (
                                <div className="bg-green-600 text-white px-3 py-1 text-xs font-medium rounded inline-block">
                                    {building.developmentStatus.charAt(0).toUpperCase() + building.developmentStatus.slice(1)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{building.name}</h3>

                    <div className="flex items-center text-gray-600 mb-3">
                        <MapPin size={16} className="mr-1 flex-shrink-0" />
                        <span className="text-sm truncate">{building.frontRoad || 'Location not specified'}</span>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {truncateText(building.description, 120)}
                    </p>

                    <div className="flex flex-wrap gap-5 mt-2 mb-4">
                        {building.totalFloors && (
                            <div className="flex items-center text-sm text-gray-700">
                                <Building size={16} className="mr-1 text-gray-500" />
                                <span>{building.totalFloors} {parseInt(building.totalFloors) > 1 ? 'Floors' : 'Floor'}</span>
                            </div>
                        )}
                        {building.numberOfFlatsAvailable > 0 && (
                            <div className="flex items-center text-sm text-gray-700">
                                <Home size={16} className="mr-1 text-gray-500" />
                                <span>{building.numberOfFlatsAvailable} {building.numberOfFlatsAvailable > 1 ? 'Units' : 'Unit'} Available</span>
                            </div>
                        )}
                        {building.age && (
                            <div className="flex items-center text-sm text-gray-700">
                                <span className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {building.age} {parseInt(building.age) > 1 ? 'Years' : 'Year'} Old
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        {building.ownerName && (
                            <div className="text-xs text-gray-500 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Owner: {building.ownerName}
                            </div>
                        )}
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            View Building
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Empty State Component
const EmptyState = ({ type }) => {
    return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-gray-400 mb-2">
                <Building size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No {type} found</h3>
            <p className="text-gray-600">
                Try adjusting your filters or search query
            </p>
        </div>
    );
};

export default PropertyShowcase;