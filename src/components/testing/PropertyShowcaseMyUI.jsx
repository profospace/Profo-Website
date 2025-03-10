import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatCurrency, formatArea, truncateText } from '../../lib/utils';
import { Building, Home, MapPin, Bath, Bed, Square, Heart, Mail, Phone, Map } from 'lucide-react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import TagsCarousal from '../../Testing/TagsCarousal';
import { Popover, Tooltip } from 'antd';
import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineBed } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import CustomSelect from './CustomSelect';
import { useWishlist } from '../../hooks/useWishlist';
import ReportProperty from './ReportProperty';
import ShareProperty from './ShareProperty';
import { RiVerifiedBadgeFill } from "react-icons/ri";


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
                    {/* <div className="flex justify-between items-center mb-4">
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
                    </div> */}

                    <CustomSelect activeTab={activeTab}
                        sortBy={sortBy}
                        setSortBy={setSortBy} />

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
    // Add state for the share modal
    const [showShareModal, setShowShareModal] = useState(false);
    // Get wishlist functionality from custom hook
    const { isInWishlist, handleToggleWishlist } = useWishlist();


    // Check if this property is in the wishlist
    const isLiked = isInWishlist(property?.post_id, 'property');

    const [open, setOpen] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
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
    const [isHovering, setIsHovering] = useState(false);

    const nextSlide = (e) => {
        e.stopPropagation()
        setCurrentSlide((prev) => (prev === property?.galleryList?.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation()
        setCurrentSlide((prev) => (prev === 0 ? property?.galleryList?.length - 1 : prev - 1));
    };

    const goToSlide = (index, e) => {
        e.stopPropagation()
        setCurrentSlide(index);
    };

    const handleMapClick = (e) => {
        e.stopPropagation()
        // window.location.href = "mailto:agent@example.com";
    };

    const handleCallClick = (e) => {
        e.stopPropagation()
        if (property?.contactList?.[0]) {
            window.location.href = `tel:${property?.contactList?.[0]}`;
        } else {
            alert("Phone No. not available")
        }
    };

    const handleWhatsAppClick = (e) => {
        e.stopPropagation()
        window.location.href = "https://wa.me/971500000000";
    };

    const navigate = useNavigate()


    const handleFavoriteClick = (e) => {
        e.stopPropagation()
        // Use the wishlist hook to toggle the property in the wishlist
        handleToggleWishlist(e, {
            entityId: property?.post_id,
            entityType: 'property'
        });

    }

    const handleOptionClick = (type, e) => {
        e.stopPropagation()

        if (type == 'wishlist') {
            handleFavoriteClick(e)
        }

        else if (type == 'report') {
            setShowReportModal(true);
            hide();

        }

        else if (type == 'share') {
            setShowShareModal(true)
            hide();
        }



    }

    return (
        <>
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
                                    onClick={(e) => prevSlide(e)}
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
                                    onClick={(e) => nextSlide(e)}
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
                                onClick={(e) => goToSlide(index, e)}
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
                        onClick={(e) => handleFavoriteClick(e)}
                        className="absolute top-4 right-4 z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Heart
                            size={24}
                            className={`${isLiked ? "fill-red-500 text-red-500" : "text-white"}`}
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
                            onClick={(e) => handleCallClick(e)}
                            className="flex-1 flex items-center justify-center space-x-2 bg-[#FED42B] hover:bg-gray-200 text-black py-2 px-4 rounded-md transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Phone size={20} />
                            <span className="font-medium">Connect</span>
                        </motion.button>
                        <motion.button
                            onClick={(e) => handleMapClick(e)}
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
                                    <div className="flex flex-col space-y-2">
                                        <span onClick={(e) => { handleOptionClick('wishlist', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">{isLiked ? "💞 Remove From Wishlist" : '💖 Add to wishlist'}</span>
                                        <span onClick={(e) => { handleOptionClick('share', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Share</span>
                                        <span onClick={(e) => { handleOptionClick('report', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Report this property</span>
                                    </div>

                                </div>
                            }
                            // title="Options"
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                            placement="bottom"

                        >
                            <motion.button
                                onClick={(e) => { e.stopPropagation(); /* Add this line */ }}
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
            {/* Report Property Modal */}
            {showReportModal && (
                <ReportProperty
                    onClose={() => setShowReportModal(false)}
                    propertyId={property?.post_id}
                />
            )}

            {/* Share Property Modal */}
            <ShareProperty
                property={property}
                isVisible={showShareModal}
                onClose={() => setShowShareModal(false)}
            />
        </>
    );
};

// Project Card Component
const ProjectCard = ({ project }) => {
    // Add state for the share modal
    const [showShareModal, setShowShareModal] = useState(false);
    // Get wishlist functionality from custom hook
    const { isInWishlist, handleToggleWishlist } = useWishlist();

    // Check if this project is in the wishlist
    const isLiked = isInWishlist(project?.projectId, 'project');

    const [open, setOpen] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const naviagte = useNavigate()
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    // Use gallery images if available, or placeholders if not
    const images = project?.gallery && project?.gallery.length > 0
        ? project.gallery?.[0]?.images
        : [
            "https://images.bayut.com/thumbnails/761297891-800x600.webp",
            "https://images.bayut.com/thumbnails/761297894-1066x800.webp",
            "https://images.bayut.com/thumbnails/761297895-1066x800.webp",
        ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index, e) => {
        e.stopPropagation();
        setCurrentSlide(index);
    };

    const handleMapClick = (e) => {
        e.stopPropagation();
        // Open map with project location
    };

    const handleContactClick = (e) => {
        e.stopPropagation();
        // Contact action for project
    };

    const navigate = useNavigate();

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        // Use the wishlist hook to toggle the project in the wishlist
        handleToggleWishlist(e, {
            entityId: project?.projectId,
            entityType: 'project'
        });
    };

    const handleOptionClick = (type, e) => {
        e.stopPropagation();

        if (type === 'wishlist') {
            handleFavoriteClick(e);
        }
        else if (type === 'report') {
            setShowReportModal(true);
            hide();
        }
        else if (type === 'share') {
            setShowShareModal(true);
            hide();
        }
    };

    // Format project price as per unit area
    const pricePerSqFt = project?.overview?.priceRange?.pricePerSqFt?.toLocaleString() || 'N/A';

    // Get the first floor plan for display
    const firstFloorPlan = project?.floorPlans && project.floorPlans.length > 0 ? project.floorPlans[0] : null;

    return (
        <>
            <div
                onClick={() => navigate(`/api/details/project/${project?.projectId}`)}
                className="font-lato flex mb-8 flex-col md:flex-row rounded-lg overflow-hidden max-w-6xl mx-auto bg-white border border-[#DEDEDE] shadow-sm "
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* Left side - Image Carousel */}
                <div className="relative w-full md:w-4/5 h-80 md:h-auto max-h-80 overflow-hidden">
                    {/* Carousel images */}
                    <AnimatePresence initial={false} mode="wait">
                        <motion.img
                            key={currentSlide}
                            src={images[currentSlide] || "/api/placeholder/800/600"}
                            alt={`Project view ${currentSlide + 1}`}
                            className="w-full h-full object-cover max-h-72"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>

                    {/* Project type badge */}
                    {project?.type && <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow">
                        <Building className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-bold">{project?.type}</span>
                    </div>}

                    {/* Status badge */}
                    {/* <div className="absolute top-3 right-14 bg-blue-500 text-white rounded-full px-3 py-1 shadow">
                        <span className="text-xs font-bold">{project?.availabilityStatus || project?.status}</span>
                    </div> */}

                    {/* Navigation arrows - only visible on hover */}
                    <AnimatePresence>
                        {isHovering && (
                            <>
                                <motion.button
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-20"
                                    onClick={(e) => prevSlide(e)}
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
                                    onClick={(e) => nextSlide(e)}
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

                    {/* Carousel dots indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {images.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={(e) => goToSlide(index, e)}
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
                        onClick={(e) => handleFavoriteClick(e)}
                        className="absolute top-4 right-4 z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Heart
                            size={24}
                            className={`${isLiked ? "fill-red-500 text-red-500" : "text-white"}`}
                        />
                    </motion.button>
                </div>

                {/* Right side - Project details */}
                <div className="relative w-full p-5 flex flex-col">

                    {project?.reraNumber && (
                        <div className="absolute top-0 right-0 z-10">
                            <Tooltip
                                title={`${project?.reraValidity ? ` • Valid till ${project.reraValidity}` : ''}`}
                                placement="right"
                            >
                                <div className="flex items-center gap-1 bg-[#CB0A01] text-white px-3 py-1 rounded- text-xs font-semibold shadow-md">
                                    <span>RERA</span>
                                    <RiVerifiedBadgeFill />
                                </div>
                            </Tooltip>
                        </div>
                    )}


                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            {/* Project name */}
                            <div className="text-xl font-semibold text-gray-800 mb-1">{truncateText(project?.name, 22)}</div>

                            {/* Builder name */}
                            <div className="text-sm text-gray-600 mb-1">By {project?.builder?.name || "Premium Builder"}</div>
                        </div>
                        {/* Price with popover */}
                        <Popover

                            content={
                                <div className="p-2">
                                    <div className="text-sm font-semibold mb-1">Price Range</div>
                                    <div>
                                        {(() => {
                                            // Calculate min and max price from connected properties
                                            const propertyPrices = project?.connectedProperties
                                                ?.filter(prop => prop.price && !prop.priceOnRequest)
                                                ?.map(prop => prop.price) || [];

                                            if (propertyPrices.length === 0) {
                                                return <span className="text-gray-600">Price range unavailable</span>;
                                            }

                                            const minPrice = Math.min(...propertyPrices);
                                            const maxPrice = Math.max(...propertyPrices);

                                            return (
                                                <div className="text-gray-700">
                                                    <div>Min: ₹{minPrice.toLocaleString()}</div>
                                                    <div>Max: ₹{maxPrice.toLocaleString()}</div>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        Based on {propertyPrices.length} properties
                                                    </div>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                </div>
                            }
                            placement="bottom"
                            trigger="hover"
                        >
                            <div className="flex gap-2 mb-2 items-baseline cursor-help">
                                <div className="text-sm text-gray-800">Price from</div>
                                <div className="text-xl font-bold text-gray-800 flex items-center">
                                    ₹{firstFloorPlan?.price?.toLocaleString() || "N/A"}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </Popover>
                    </div>


                    {/* Project specs */}
                    <div className="flex items-center space-x-6 mb-1 text-md">
                        <div className="font-medium text-gray-800">
                            {project?.overview?.totalUnits || "150"} Units
                        </div>
                        <div className="font-medium text-gray-800">
                            {project?.overview?.totalTowers || "3"} Towers
                        </div>
                        <div className="font-medium text-gray-800">
                            {project?.floorPlans?.length || "3"} Configurations
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-2 mb-">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">
                            {truncateText(project?.location?.address, 30) || project?.location?.landmark + ", " + project?.location?.city}
                        </span>
                    </div>

                    {/* Floor plans tag */}
                    <div className="my-2">
                        <div className="flex flex-wrap gap-2">
                            {project?.floorPlans?.map((plan, index) => (
                                index < 3 && (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs hover:bg-blue-100 transition-colors"
                                    >
                                        <span>{plan.name}</span>
                                    </div>
                                )
                            ))}
                            {project?.floorPlans?.length > 3 && (
                                <div
                                    className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs border border-gray-400 hover:bg-gray-200 transition-colors cursor-pointer"
                                >
                                    <span>+{project.floorPlans.length - 3} more</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Amenities tags */}
                    <div className="min-h-5">
                        <div className="flex flex-wrap gap-2">
                            {(() => {
                                // Flatten all amenities into a single array
                                const allAmenities = project?.amenities?.flatMap(category =>
                                    category.items
                                ) || [];

                                // Display only the first 3 amenities
                                const displayAmenities = allAmenities.slice(0, 3).map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-500 rounded-md text-xs hover:bg-green-100 transition-colors"
                                    >
                                        <span>{item}</span>
                                    </div>
                                ));

                                // Calculate remaining amenities
                                const remainingAmenities = allAmenities.length - 3;

                                // Return the amenities plus the "+more" indicator if needed
                                return [
                                    ...displayAmenities,
                                    remainingAmenities > 0 ? (
                                        <div
                                            key="more"
                                            className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs border border-gray-400 hover:bg-gray-200 transition-colors cursor-pointer"
                                        >
                                            <span>+{remainingAmenities} more</span>
                                        </div>
                                    ) : null
                                ];
                            })()}
                        </div>
                    </div>



                    {/* Project timeline */}
                    <div className="flex items-center space-x-4 my-2 text-xs text-gray-600">
                        <div className="flex items-center space-x-1">
                            <span>Launch:</span>
                            <span className="font-medium">{new Date(project?.overview?.launchDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) || 'N/A'}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>Possession:</span>
                            <span className="font-medium">{new Date(project?.overview?.possessionDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) || 'N/A'}</span>
                        </div>

                        {/* RERA information */}
                        {project?.reraNumber && (
                            <div className=" flex items-center text-xs text-gray-600">
                                <span>RERA: {project.reraNumber}</span>
                                {project?.reraValidity && (
                                    <span>• Valid till {project.reraValidity}</span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Contact buttons */}
                    <div className="flex space-x-4 mt-1">
                        <motion.button
                            onClick={(e) => handleContactClick(e)}
                            className="flex-1 flex items-center justify-center space-x-2 bg-[#FED42B] hover:bg-yellow-300 text-black py-2 px-4 rounded-md transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Phone size={20} />
                            <span className="font-medium">Contact</span>
                        </motion.button>
                        <motion.button
                            onClick={(e) => handleMapClick(e)}
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
                                    {/* <div className="flex flex-col space-y-2">
                                        <span onClick={(e) => { handleOptionClick('wishlist', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">{isLiked ? "💞 Remove From Wishlist" : '💖 Add to wishlist'}</span>
                                        <span onClick={(e) => { handleOptionClick('share', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Share</span>
                                        <span onClick={(e) => { handleOptionClick('report', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Report this project</span>
                                    </div> */}
                                </div>
                            }
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                            placement="bottom"
                        >
                            <motion.button
                                onClick={(e) => { e.stopPropagation(); }}
                                className="flex items-center justify-center bg-transparent hover:bg-gray-200 text-black py-2 rounded-md transition-colors"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <HiOutlineDotsVertical size={20} />
                            </motion.button>
                        </Popover>
                    </div>


                </div>
            </div>

            {/* Report Project Modal */}
            {/* {showReportModal && (
                <ReportProject
                    onClose={() => setShowReportModal(false)}
                    projectId={project?.projectId}
                />
            )} */}

            {/* Share Project Modal */}
            {/* <ShareProject
                project={project}
                isVisible={showShareModal}
                onClose={() => setShowShareModal(false)}
            /> */}
        </>
    );
};



// Building Card Component
const BuildingCard = ({ building }) => {
    console.log(building)
    // Add state for the share modal
    const [showShareModal, setShowShareModal] = useState(false);
    // Get wishlist functionality from custom hook
    const { isInWishlist, handleToggleWishlist } = useWishlist();

    // Check if this building is in the wishlist
    const isLiked = isInWishlist(building?.buildingId, 'building');

    const [open, setOpen] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    // Use gallery images if available, or placeholders if not
    const images = building?.galleryList && building?.galleryList.length > 0
        ? building.galleryList
        : [
            "https://images.bayut.com/thumbnails/761297891-800x600.webp",
            "https://images.bayut.com/thumbnails/761297894-1066x800.webp",
            "https://images.bayut.com/thumbnails/761297895-1066x800.webp",
        ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index, e) => {
        e.stopPropagation();
        setCurrentSlide(index);
    };

    const handleMapClick = (e) => {
        e.stopPropagation();
        // Open map with building location
        if (building?.mapLink) {
            window.open(building.mapLink, '_blank');
        }
    };

    const handleContactClick = (e) => {
        e.stopPropagation();
        // Contact action for building
        if (building?.contactNumber) {
            window.location.href = `tel:${building.contactNumber}`;
        }
    };

    const navigate = useNavigate();

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        // Use the wishlist hook to toggle the building in the wishlist
        handleToggleWishlist(e, {
            entityId: building?.buildingId,
            entityType: 'building'
        });
    };

    const handleOptionClick = (type, e) => {
        e.stopPropagation();

        if (type === 'wishlist') {
            handleFavoriteClick(e);
        }
        else if (type === 'report') {
            setShowReportModal(true);
            hide();
        }
        else if (type === 'share') {
            setShowShareModal(true);
            hide();
        }
        else if (type === 'brochure' && building?.brochureLink) {
            window.open(building.brochureLink, '_blank');
            hide();
        }
    };

    return (
        <>
            <div
                onClick={() => navigate(`/api/details/building/${building?.buildingId}`)}
                className="font-lato flex mb-8 flex-col md:flex-row rounded-lg overflow-hidden max-w-6xl mx-auto bg-white border border-[#DEDEDE] shadow-sm"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* Left side - Image Carousel */}
                <div className="relative w-full md:w-4/5 h-80 md:h-auto max-h-80 overflow-hidden">
                    {/* Carousel images */}
                    <AnimatePresence initial={false} mode="wait">
                        <motion.img
                            key={currentSlide}
                            src={images[currentSlide] || "/api/placeholder/800/600"}
                            alt={`Building view ${currentSlide + 1}`}
                            className="w-full h-full object-cover max-h-72"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>

                    {/* Building type badge */}
                    {building?.type && <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow">
                        <Building className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-bold capitalize">{building?.type}</span>
                    </div>}

                    {/* Development status badge */}
                    {/* {building?.developmentStatus && (
                        <div className="absolute top-3 right-14 bg-blue-500 text-white rounded-full px-3 py-[1px] shadow">
                            <span className="text-xs font-bold capitalize">{building?.developmentStatus}</span>
                        </div>
                    )} */}

                    {/* Navigation arrows - only visible on hover */}
                    <AnimatePresence>
                        {isHovering && (
                            <>
                                <motion.button
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-20"
                                    onClick={(e) => prevSlide(e)}
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
                                    onClick={(e) => nextSlide(e)}
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

                    {/* Carousel dots indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {images.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={(e) => goToSlide(index, e)}
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
                        onClick={(e) => handleFavoriteClick(e)}
                        className="absolute top-4 right-4 z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Heart
                            size={24}
                            className={`${isLiked ? "fill-red-500 text-red-500" : "text-white"}`}
                        />
                    </motion.button>
                </div>

                {/* Right side - Building details */}
                <div className="relative w-full p-5 flex flex-col">
                    {/* LUDA badge (if available) */}
                    {building?.luda && (
                        <div className="absolute top-0 right-0 z-10">
                            <Tooltip
                                title={
                                    <div className="py-1">
                                        <span className="font-medium">LUDA: {building.luda}</span>
                                    </div>
                                }
                                placement="right"
                                overlayInnerStyle={{
                                    borderRadius: '12px 4px 12px 4px',
                                    border: '2px solid #4B5563',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    padding: '8px 12px'
                                }}
                                color="#FFFFFF"
                            >
                                <div className="flex items-center gap-1 bg-[#CB0A01] text-white px-3 py-1 text-xs font-semibold shadow-md">
                                    <span>LUDA</span>
                                    <RiVerifiedBadgeFill size={12} className="text-white" />
                                </div>
                            </Tooltip>
                        </div>
                    )}

                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            {/* Building name */}
                            <div className="text-xl font-semibold text-gray-800 mb-1">{truncateText(building?.name, 22)}</div>

                            {/* Owner name */}
                            <div className="text-sm text-gray-600 mb-1">Owner: {building?.ownerName || "N/A"}</div>
                        </div>

                        {/* Available Properties */}
                        <Popover
                            content={
                                <div className="p-2">
                                    <div className="text-sm font-semibold mb-1">Building Availability</div>
                                    <div className="text-gray-700">
                                        <div>Total Properties: {building?.totalProperties || "N/A"}</div>
                                        <div>Allocated: {building?.allocatedProperties || "N/A"}</div>
                                        <div>Available: {building?.freeProperties || "N/A"}</div>
                                        <div>Available Flats: {building?.numberOfFlatsAvailable || "N/A"}</div>
                                    </div>
                                </div>
                            }
                            placement="bottom"
                            trigger="hover"
                        >
                            <div className="flex gap-2 mb-2 items-baseline cursor-help">
                                <div className="text-sm text-gray-800">Available</div>
                                <div className="text-xl font-bold text-gray-800 flex items-center">
                                    {building?.freeProperties || "N/A"} units
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </Popover>
                    </div>

                    {/* Building specs */}
                    <div className="flex items-center space-x-6 mb-1 text-md">
                        <div className="font-medium text-gray-800">
                            {building?.totalFloors || "N/A"} Floors
                        </div>
                        <div className="font-medium text-gray-800">
                            {building?.storey || "N/A"} Storey
                        </div>
                        <div className="font-medium text-gray-800">
                            {building?.age || "N/A"} Years Old
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">
                            {truncateText(building?.frontRoad, 30) || "Address not available"}
                        </span>
                    </div>

                    {/* Available flats details */}
                    {building?.flatsDetails && building.flatsDetails.length > 0 && (
                        <div className="my-2">
                            <div className="flex flex-wrap gap-2">
                                {building.flatsDetails.map((floor, index) => (
                                    index < 3 && floor.availableFlats > 0 && (
                                        <div
                                            key={index}
                                            className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs hover:bg-blue-100 transition-colors"
                                        >
                                            <span>Floor {floor.floorNumber}: {floor.availableFlats} flat{floor.availableFlats > 1 ? 's' : ''}</span>
                                        </div>
                                    )
                                ))}
                                {building.flatsDetails.length > 3 && (
                                    <div
                                        className="flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs border border-gray-400 hover:bg-gray-200 transition-colors cursor-pointer"
                                    >
                                        <span>+{building.flatsDetails.length - 3} more</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Building USP */}
                    {building?.areaUSP && (
                        <div className="min-h-5">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-500 rounded-md text-xs hover:bg-green-100 transition-colors">
                                    <span className="capitalize">{building.areaUSP}</span>
                                </div>
                                {building?.parkingArea && (
                                    <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-500 rounded-md text-xs hover:bg-green-100 transition-colors">
                                        <span>Parking: {building.parkingArea} sqft</span>
                                    </div>
                                )}
                                {building?.allowPreBooking === "true" && (
                                    <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-500 rounded-md text-xs hover:bg-green-100 transition-colors">
                                        <span>Pre-booking Available</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Building timeline */}
                    <div className="flex items-center space-x-4 my-2 text-xs text-gray-600">
                        {building?.createdAt && (
                            <div className="flex items-center space-x-1">
                                <span>Added:</span>
                                <span className="font-medium">{new Date(building.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                            </div>
                        )}
                        {building?.developmentStatus && (
                            <div className="flex items-center space-x-1">
                                <span>Status:</span>
                                <span className="font-medium capitalize">{building.developmentStatus}</span>
                            </div>
                        )}
                    </div>

                    {/* Contact buttons */}
                    <div className="flex space-x-4 mt-1">
                        <motion.button
                            onClick={(e) => handleContactClick(e)}
                            className="flex-1 flex items-center justify-center space-x-2 bg-[#FED42B] hover:bg-yellow-300 text-black py-2 px-4 rounded-md transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Phone size={20} />
                            <span className="font-medium">Contact</span>
                        </motion.button>
                        <motion.button
                            onClick={(e) => handleMapClick(e)}
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
                                    <div className="flex flex-col space-y-2">
                                        <span onClick={(e) => { handleOptionClick('wishlist', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">{isLiked ? "💞 Remove From Wishlist" : '💖 Add to wishlist'}</span>
                                        <span onClick={(e) => { handleOptionClick('share', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Share</span>
                                        {building?.brochureLink && (
                                            <span onClick={(e) => { handleOptionClick('brochure', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Download Brochure</span>
                                        )}
                                        <span onClick={(e) => { handleOptionClick('report', e); hide(); }} className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Report this building</span>
                                    </div>
                                </div>
                            }
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                            placement="bottom"
                        >
                            <motion.button
                                onClick={(e) => { e.stopPropagation(); }}
                                className="flex items-center justify-center bg-transparent hover:bg-gray-200 text-black py-2 rounded-md transition-colors"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <HiOutlineDotsVertical size={20} />
                            </motion.button>
                        </Popover>
                    </div>
                </div>
            </div>

            {/* Report Building Modal */}
            {/* {showReportModal && (
                <ReportBuilding
                    onClose={() => setShowReportModal(false)}
                    buildingId={building?.buildingId}
                />
            )} */}

            {/* Share Building Modal */}
            {/* <ShareBuilding
                building={building}
                isVisible={showShareModal}
                onClose={() => setShowShareModal(false)}
            /> */}
        </>
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