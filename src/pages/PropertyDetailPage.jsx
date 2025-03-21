import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@material-tailwind/react";
import "swiper/css";
import { PiDotsNineBold, PiUploadSimpleLight } from "react-icons/pi";
import { CarouselImages } from "../components/CarousalImages";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProperty } from "../redux/features/Properties/propertiesSlice";

import { FaCar, FaSwimmer, FaGuitar, FaHome, FaCloud } from 'react-icons/fa';
import { GrLock } from 'react-icons/gr';
import { RiMotorbikeFill } from 'react-icons/ri';
import { WiDaySunny, WiRain } from 'react-icons/wi';
import { FaWater } from 'react-icons/fa';
import HomeLoanOffers from "../components/HomeLoanOffers";
import EMICalculator from "../components/EMIcalculator";
import PropertyAminities from "../components/PropertyAminities";

import { AiOutlineUpload } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import BuilderContactCard from "../components/BuilderContactCard";
import { Dialog } from "@headlessui/react";
import ShareableCard from "../components/ShareableCard";
import ShareOptions from "../components/ShareOptions";
import { base_url } from "../utils/base_url";
import LocationLatLngMap from "../components/LocationLatLngMap";
import { Heart, TrendingUp, CircleDollarSign, IndianRupee, Images } from 'lucide-react';
import PropertyContactCard from "../components/PropertyContactCard";
import ImagePreview from "../components/ImagesPreview";
import PropertyDetailBuildingInfo from "../components/PropertyDetailBuildingInfo";
import PropertyCard from "../components/PropertyCard";
import HeadingCommon from "../components/HeadingCommon";


export const FacilitiesSection = ({ facilities }) => {
    // Icon mapping for facilities
    const facilityIcons = {
        "Feng Shui / Vaastu Compliant": <WiDaySunny className="w-8 h-8 text-yellow-500" />,
        "Water Storage": <FaWater className="w-8 h-8 text-blue-500" />,
        "Rain Water Harvesting": <WiRain className="w-8 h-8 text-blue-400" />
    };

    // Default icon for unmapped facilities
    const DefaultIcon = WiDaySunny;

    if (!facilities || facilities.length === 0) return null;

    return (
        <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-2xl font-semibold text-black mb-6">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                            {facilityIcons[facility] || <DefaultIcon className="w-8 h-8 text-black" />}
                        </div>
                        <span className="text-black text-sm font-medium">
                            {facility}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

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

const SinglePage = () => {
    const { post_id } = useParams();
    const dispatch = useDispatch();
    const { propertyDetail } = useSelector(state => state.properties);
    const [images, setImages] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // Control animation state
    const imagePreviewRef = useRef(null);


    console.log(propertyDetail)
    // Map configuration
    // const mapCenter = {
    //     lat: parseFloat(propertyDetail?.latitude) || 0,
    //     lng: parseFloat(propertyDetail?.longitude) || 0
    // };

    // const mapContainerStyle = {
    //     width: '100%',
    //     height: '480px',
    //     borderRadius: '12px'
    // };

    // const mapOptions = {
    //     disableDefaultUI: true,
    //     zoomControl: true,
    //     scrollwheel: false,
    //     styles: [
    //         {
    //             featureType: 'poi',
    //             elementType: 'labels',
    //             stylers: [{ visibility: 'off' }]
    //         },
    //         {
    //             featureType: 'transit',
    //             elementType: 'labels',
    //             stylers: [{ visibility: 'off' }]
    //         },
    //         {
    //             featureType: 'road',
    //             elementType: 'labels.text',
    //             stylers: [{ visibility: 'on' }]
    //         },
    //         {
    //             featureType: 'landscape',
    //             elementType: 'all',
    //             stylers: [{ color: '#f5f5f5' }]
    //         },
    //         {
    //             featureType: 'water',
    //             elementType: 'all',
    //             stylers: [{ color: '#e9e9e9' }]
    //         }
    //     ]
    // };

    // const customMarker = {
    //     url: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png", // Use default Google Maps marker or any accessible image URL
    //     scaledSize: { width: 40, height: 40 }, // Adjust size for visibility
    // };

    // Fetch property details
    useEffect(() => {
        dispatch(getSingleProperty(post_id));
    }, [post_id, dispatch]);

    // Collect all images when propertyDetail changes
    useEffect(() => {
        if (propertyDetail) {
            const collectedImages = [];
            if (propertyDetail.post_image) {
                collectedImages.push(propertyDetail.post_image);
            }
            if (propertyDetail.floor_plan_image) {
                collectedImages.push(propertyDetail.floor_plan_image);
            }
            if (Array.isArray(propertyDetail.galleryList)) {
                collectedImages.push(...propertyDetail.galleryList);
            }
            setImages(collectedImages);
        }
    }, [propertyDetail]);

    // const formatPrice = (price) => {
    //     if (typeof price !== "number" || isNaN(price)) return "N/A";

    //     const indianFormat = new Intl.NumberFormat("en-IN", {
    //         maximumFractionDigits: 0,
    //     }).format(price);

    //     let unit = "";
    //     if (price >= 1_00_00_000) {
    //         unit = "Cr";
    //         price = (price / 1_00_00_000).toFixed(2);
    //     } else if (price >= 1_00_000) {
    //         unit = "Lakh";
    //         price = (price / 1_00_000).toFixed(2);
    //     } else if (price >= 1_000) {
    //         unit = "Thousand";
    //         price = (price / 1_000).toFixed(2);
    //     } else {
    //         price = price.toFixed(2);
    //     }

    //     return `₹${price} ${unit}`.trim();
    // };

    const formatPrice = (price) => {
        if (typeof price !== "number" || isNaN(price)) return "N/A";

        if (price >= 1_00_00_000) {
            return `₹${(price / 1_00_00_000).toFixed(2)}Cr`;
        } else if (price >= 1_00_000) {
            return `₹${(price / 1_00_000).toFixed(2)}L`;
        } else if (price >= 1_000) {
            return `₹${(price / 1_000).toFixed(0)}K`;
        }

        return `₹${price}`;
    };

    const handleButtonClick = () => {
        setIsPopupVisible(true); // Show popup
        setIsAnimating(true); // Start animation
    };

    const handleClose = () => {
        setIsAnimating(false); // Trigger animation out
        // setTimeout(() => setIsPopupVisible(false), 100); // Hide popup after animation
        setIsPopupVisible(false)
    };


    const [isShareOpen, setIsShareOpen] = useState(false);
    const { pathname } = useLocation()

    const propertyInfo = {
        title: "Luxurious 2BHK Apartment",
        description: "Spacious and well-lit apartment in the heart of the city.",
        image: propertyDetail?.galleryList?.[0],
        link: `http://localhost:5173${pathname}`,
    };

    const pricePerSqft = propertyDetail?.price && propertyDetail?.superBuiltupArea
        ? Math.round(propertyDetail?.price / propertyDetail?.superBuiltupArea)
        : 0;


    return (
        <div className="mx-8 mt-24">
            {/* Title */}
            <div className="py-4 flex justify-between">
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 capitalize">
                    {propertyDetail?.post_title}
                </h1>

                <div className="flex gap-4">
                    {/* <div>
                        <div
                            className="flex items-center font-semibold gap-1 cursor-pointer hover:bg-gray-300 px-3 text-md rounded-md"
                            onClick={() => setIsShareOpen(true)}
                        >
                            <PiUploadSimpleLight size={25} />
                            <p className="underline">Share</p>
                        </div>
                        {isShareOpen && (
                            <Dialog open={isShareOpen} onClose={() => setIsShareOpen(false)}>
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="p-4">
                                        <ShareableCard
                                            title={propertyInfo.title}
                                            description={propertyInfo.description}
                                            image={propertyInfo.image}
                                            link={propertyInfo.link}
                                        />
                                        <ShareOptions />
                                    </div>
                                </div>
                            </Dialog>
                        )}
                    </div> */}

                    <div className="flex items-center font-semibold gap-1 cursor-pointer hover:bg-gray-300 px-3 text-md  rounded-md ">
                        <CiHeart size={25} />
                        <p className="underline">Share</p>
                    </div>
                </div>
            </div>






            <div className="relative">
                {/* Desktop Grid */}
                {images?.length > 3 ? (
                    <div className="hidden lg:grid grid-cols-2 gap-2 items-center">
                        <div className="bg-gray-200 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md h-96">
                            <CarouselImages images={images} />
                        </div>
                        <div className="grid grid-cols-2 gap-2 h-full">
                            {images?.slice(0, 4).map((image, index) => (
                                <img
                                    key={index}
                                    className="bg-green-200 flex items-center justify-center rounded-lg shadow-md h-48 w-full object-cover"
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="hidden lg:grid grid-cols-4 gap-4 items-center">
                        <div className="bg-gray-200 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md h-96 col-span-3">
                            <CarouselImages images={images} />
                        </div>
                        <div className="grid gap-2 h-full">
                            {images?.slice(0, 2).map((image, index) => (
                                <img
                                    key={index}
                                    className="bg-green-200 flex items-center justify-center rounded-lg shadow-md h-48 w-full object-cover"
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Mobile Carousel */}
                <div className="lg:hidden">
                    <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src={src}
                                        alt={`Gallery ${index}`}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* <button
                    variant="outlined"
                    className="rounded-md hover:bg-black hover:text-white flex items-center gap-3 absolute bottom-5 right-5 px-3 py-2 bg-white shadow-lg z-10"
                    onClick={() => imagePreviewRef.current.openGallery()} > */}
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-black rounded-lg hover:text-white transition-colors w-fit absolute bottom-5 right-5"
                    onClick={() => imagePreviewRef.current.openGallery()}
                >
                    <PiDotsNineBold size={25} />
                    Show all photos
                    <ImagePreview ref={imagePreviewRef} images={propertyDetail?.galleryList} />
                </button>
            </div>

            <div className="grid grid-flow-col grid-cols-12 gap-2 my-4">
                {/* left */}
                <div className="col-span-8">
                    {/* Property Info Section */}
                    <div className="max-w-4xl mx-auto p-4 py-6">
                        <div className="flex gap-2 mb-2">
                            <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
                                ✓ Verified
                            </span>
                            {/* <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded">
                                Featured
                            </span> */}
                        </div>
                        {/* Header Section */}
                        <div className="">
                            {/* New Launch Badge */}

                            <h1 className="text-4xl font-bold text-gray-900 mb-1">{propertyDetail?.post_title}</h1>

                            <p className="text-gray-500">{propertyDetail?.address}</p>
                        </div>


                        <div className="max-w-3xl py-1">
                            <div className="flex flex-col space-y-2">
                                {/* Top badges */}


                                <div className="flex gap-8 items-center">
                                    {/* Price section */}
                                    <div>
                                        <div className="flex items-baseline">
                                            <div className="flex items-center">
                                                {/* <IndianRupee className="w-4 h-4" /> */}
                                                <span className="text-4xl font-semibold">
                                                    {formatPrice(propertyDetail?.price)}
                                                </span>
                                            </div>
                                            <span className="ml-2 text-gray-500 text-sm">
                                                @ {pricePerSqft} per sq.ft.
                                            </span>
                                        </div>

                                        {/* EMI section */}
                                        <div className="text-blue-500">
                                            Estimated EMI ₹{propertyDetail?.price ? Math.round(propertyDetail?.price * 0.008).toLocaleString() : '0'}
                                        </div>
                                    </div>

                                    {/* Vertical Divider */}
                                    <div className="w-px h-16 bg-gray-300"></div>

                                    <div>
                                        {/* Property details */}
                                        <div className="flex flex-col justify-start items-start">
                                            <div className="text-3xl text-gray-700">
                                                {propertyDetail?.bedrooms}BHK {propertyDetail?.bathrooms}Baths
                                            </div>
                                            <div className="text-gray-500">
                                                {propertyDetail?.type_name} for {propertyDetail?.purpose}
                                            </div>
                                            {/* Location */}
                                            <div className="text-gray-500 text-sm">
                                                in {propertyDetail?.locality}, {propertyDetail?.address}, {propertyDetail?.city}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>





                        {/* Status Tags */}
                        {/* <div className="flex flex-wrap gap-2 mb-1 py-2">
                            <div className="flex items-center bg-black text-white px-3 py-1 rounded-md">
                                {propertyDetail?.bedrooms} bedrooms
                            </div>
                            <div className="bg-black  text-white  px-3 py-1 rounded-md">
                                {propertyDetail?.bathrooms} bathrooms
                            </div>
                            <div className="bg-black  text-white  px-3 py-1 rounded-md">
                                {propertyDetail?.floor} Floors
                            </div>
                           
                        </div> */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
                                <svg
                                    className="w-4 h-4 mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                {propertyDetail?.purpose}
                            </div>
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
                                {propertyDetail?.area} {propertyDetail?.areaUnit}
                            </div>
                            <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
                                {propertyDetail?.facilities?.length} Top Facilities
                            </div>
                        </div>

                    </div>

                    <PropertyAminities amenities={propertyDetail?.amenities} />

                    {/* facities section */}
                    {propertyDetail?.facilities && propertyDetail.facilities.length > 0 && (
                        <FacilitiesSection facilities={propertyDetail.facilities} />
                    )}

                    {/* Property Info Cards */}
                    <div className="mt-8 p-6 border rounded-lg shadow bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                            {[
                                { label: "Price", value: propertyDetail?.priceOnRequest ? "Price on Request" : `${propertyDetail?.price?.toLocaleString()} ${propertyDetail?.priceUnit}` },
                                { label: "Property Type", value: propertyDetail?.type_name },
                                { label: "Super Built-up Area", value: `${propertyDetail?.superBuiltupArea} ${propertyDetail?.areaUnit}` },
                                { label: "Carpet Area", value: `${propertyDetail?.carpetArea} ${propertyDetail?.areaUnit}` },
                                { label: "Bedrooms", value: propertyDetail?.bedrooms },
                                { label: "Bathrooms", value: propertyDetail?.bathrooms },
                                { label: "Floor", value: `${propertyDetail?.floor}${propertyDetail?.floor ? 'th' : ''} Floor` },
                                { label: "Furnishing", value: propertyDetail?.furnishing },
                                { label: "Possession", value: propertyDetail?.possession },
                                { label: "Ownership Type", value: propertyDetail?.ownershipTypes?.[0] },
                                { label: "Property Status", value: propertyDetail?.status },
                                { label: "View Type", value: propertyDetail?.viewTypes?.[0] },
                                { label: "Property Condition", value: propertyDetail?.propertyConditions?.[0] },
                                { label: "Legal Status", value: propertyDetail?.legalStatuses?.[0] },
                                { label: "Security", value: propertyDetail?.facilities?.includes("24/7-security") ? "24/7 Available" : "Not Available" }
                            ].map(({ label, value }, index) => (
                                <div key={index} className="flex items-center flex-wrap gap-2">
                                    <span className="text-gray-600 text-sm">{label}:</span>
                                    <span className="text-gray-900 font-bold text-sm text-left">
                                        {value || "Not Specified"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto">
                        {/* Map Section */}
                        <LocationLatLngMap latitude={propertyDetail?.latitude} longitude={propertyDetail?.longitude} />
                    </div>


                    {/* <HomeLoanOffers /> */}
                    <HomeLoanOffers />

                    {/* EMI caluc */}
                    <EMICalculator />
                </div>

                {/* right */}

                <div className="col-span-4">
                    <div className="sticky top-24">
                        <PropertyContactCard

                            handleButtonClick={handleButtonClick}
                            details={propertyDetail?.builder}
                        />
                    </div>
                </div>
            </div>


            {
                isPopupVisible && <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        className={` rounded-lg shadow-xl p-6 w-full  transform transition-transform duration-300 ${isAnimating ? "scale-100 opacity-100" : "scale-90 opacity-0"
                            }`}
                    >
                        <BuilderContactCard propertyDetail={propertyDetail} />
                    </div>
                </div>
            }

            {
                propertyDetail?.building && <PropertyDetailBuildingInfo data={propertyDetail?.building} />
            }


            {/* similiar properties */}
            {propertyDetail?.building?.connectedProperties && <div className="py-12">
                <HeadingCommon title="Similar Properties " dual="true" />
                <div className="grid grid-cols-3">
                    {
                        propertyDetail?.building?.connectedProperties?.map((property, index) => <PropertyCard property={property} />)
                    }
                </div>
            </div>}

        </div>
    );
};

export default SinglePage;
