// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Button } from "@material-tailwind/react";
// import "swiper/css";
// import { PiDotsNineBold } from "react-icons/pi";
// import { CarouselImages } from "../components/CarousalImages";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleProperty } from "../redux/features/Properties/propertiesSlice";

// import { FaCar, FaSwimmer, FaGuitar, FaHome, FaCloud } from 'react-icons/fa';
// import { GrLock } from 'react-icons/gr';
// import { RiMotorbikeFill } from 'react-icons/ri';

// // Mapping amenities to their respective icons
// const amenityIconMap = {
//     "security patrol": <GrLock size={25} />,
//     "pet-friendly facilities": <FaHome size={25} />,
//     "parking (garage/open)": <FaCar size={25} />,
//     "valet parking": <FaCar size={25} />,
//     "guest parking": <FaCar size={25} />,
//     "bike storage": <RiMotorbikeFill size={25} />,
//     "parcel lockers": <FaHome size={25} />,
//     "business center": <FaCloud size={25} />,
//     "conference/meeting rooms": <FaCloud size={25} />,
//     "swimming-pool": <FaSwimmer size={25} />,
//     "gym": <FaGuitar size={25} />,
//     "parking": <FaCar size={25} />,
//     "24x7 security": <GrLock size={25} />,
//     "lift": <FaHome size={25} />,
//     "garden": <FaHome size={25} />,
//     "power backup": <FaCloud size={25} />
// };

// // Fallback icon for unknown amenities
// const fallbackIcon = <FaHome size={25} />;


// const SinglePage = () => {
//     const { post_id } = useParams()
//     const dispatch = useDispatch()
//     const { propertyDetail } = useSelector(state => state.properties)
//     const [images, setImages] = useState([])
//     console.log(images)

//     console.log(propertyDetail)

//     // Fetch property details
//     useEffect(() => {
//         dispatch(getSingleProperty(post_id));
//     }, [post_id, dispatch]);

//     // Collect all images when propertyDetail changes
//     useEffect(() => {
//         if (propertyDetail) {
//             const collectedImages = [];

//             if (propertyDetail.post_image) {
//                 collectedImages.push(propertyDetail.post_image);
//             }

//             if (propertyDetail.floor_plan_image) {
//                 collectedImages.push(propertyDetail.floor_plan_image);
//             }

//             if (Array.isArray(propertyDetail.galleryList)) {
//                 collectedImages.push(...propertyDetail.galleryList);
//             }

//             setImages(collectedImages);
//         }
//     }, [propertyDetail]);

//     const formatPrice = (price) => {
//         if (typeof price !== "number" || isNaN(price)) return "N/A";

//         // Convert the number to a string in the Indian numbering system
//         const indianFormat = new Intl.NumberFormat("en-IN", {
//             maximumFractionDigits: 0,
//         }).format(price);

//         // Determine the unit (Crore, Lakh, Thousand)
//         let unit = "";
//         if (price >= 1_00_00_000) {
//             unit = "Cr"; // Crore
//             price = (price / 1_00_00_000).toFixed(2);
//         } else if (price >= 1_00_000) {
//             unit = "Lakh"; // Lakh
//             price = (price / 1_00_000).toFixed(2);
//         } else if (price >= 1_000) {
//             unit = "Thousand"; // Thousand
//             price = (price / 1_000).toFixed(2);
//         } else {
//             price = price.toFixed(2);
//         }

//         return `₹${price} ${unit}`.trim();
//     };


//     return (
//         <div className="container mx-auto">
//             {/* Title */}
//             <div className="mb-2">
//                 <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 capitalize">
//                     {propertyDetail?.post_title}
//                 </h1>
//             </div>

//             <div className="relative">
//                 {/* Desktop Grid */}

//                 {/* if more than 3 image then grid is : 2:3 else 3:1 */}
//                 {
//                     images?.length > 3 ? <>
//                         {/* if images are more than 3 */}
//                         <div className="hidden lg:grid grid-cols-2 gap-2 items-center ">
//                             {/* Full Height Box on the Left */}
//                             <div className="bg-gray-200 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md h-96">
//                                 <CarouselImages images={images} />  {/* Set of images for carousal */}
//                             </div>

//                             {/* 2x2 Grid on the Right */}
//                             <div className="grid grid-cols-2 gap-2 h-full">
//                                 {
//                                     images?.slice(0, 4).map((image, index) => (
//                                         <img
//                                             key={index}
//                                             className="bg-green-200 flex items-center justify-center rounded-lg shadow-md h-48 w-full object-cover"
//                                             src={image}
//                                             alt={`Image ${index + 1}`}
//                                         />
//                                     ))
//                                 }
//                             </div>
//                         </div></> :
//                         <>
//                             {/* if images are 3 , issey kam to honi nhi h */}
//                             <div className="hidden lg:grid grid-cols-4 gap-4 items-center ">
//                                 {/* Full Height Box on the Left */}
//                                 <div className="bg-gray-200 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md h-96 col-span-3">
//                                     <CarouselImages images={images} />  {/* Set of images for carousal */}
//                                 </div>

//                                 {/* 2x2 Grid on the Right */}
//                                 <div className="grid gap-2 h-full">
//                                     {
//                                         images?.slice(0, 2).map((image, index) => (
//                                             <img
//                                                 key={index}
//                                                 className="bg-green-200 flex items-center justify-center rounded-lg shadow-md h-48 w-full object-cover"
//                                                 src={image}
//                                                 alt={`Image ${index + 1}`}
//                                             />
//                                         ))
//                                     }
//                                 </div>

//                             </div></>
//                 }






//                 {/* Mobile Carousel */}
//                 <div className="lg:hidden">
//                     <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
//                         {images.map((src, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="rounded-lg overflow-hidden shadow-md">
//                                     <img
//                                         src={src}
//                                         alt={`Gallery ${index}`}
//                                         className="w-full h-64 object-cover"
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 {/* This button will navigate to gallery */}
//                 <Button
//                     variant="outlined"
//                     className="flex items-center gap-3 absolute bottom-5 right-5 px-3 py-2 bg-white shadow-lg z-10"
//                 >
//                     <PiDotsNineBold size={25} />
//                     Show all photos
//                 </Button>
//             </div>

//             {/* Details Section */}
//             {/* <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
//                 <h2 className="text-xl font-semibold text-gray-700">
//                     {propertyDetail?.post_description}
//                 </h2>
//                 <p className="text-gray-600 mt-2">
//                     2 guests · {propertyDetail?.bedrooms || 0} bedroom · {propertyDetail?.floor || 0} floor · {propertyDetail?.bathrooms || 0} bathroom
//                 </p>
//             </div> */}

//             <div className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto my-5 border">
//                 {/* Top Section */}
//                 <div className="flex flex-wrap justify-between items-center">
//                     {/* Price Section */}
//                     <div className="flex items-center space-x-2">
//                         <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
//                             Featured
//                         </span>
//                         <h1 className="text-3xl font-semibold text-gray-800">
//                             {/* ₹4.6 Cr */}
//                             {formatPrice(propertyDetail?.price)}
//                             {/* ₹{propertyDetail?.price} */}
//                             <span className="text-sm font-normal text-gray-500">
//                                 {" "}
//                                 {/* @ 16,416 per sq.ft. */}
//                             </span>
//                         </h1>
//                     </div>
//                     <div>
//                         <p className="text-sm text-blue-600 font-medium">
//                             Estimated EMI {formatPrice(propertyDetail?.estimatedEMI)}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Middle Section */}
//                 <div className="flex flex-wrap mt-4 justify-between items-center">
//                     {/* Property Details */}
//                     <div>
//                         <h2 className="text-2xl font-medium text-gray-800">
//                             {propertyDetail?.bathrooms }Baths {propertyDetail?.bedrooms}Beds {propertyDetail?.floor}Floors
//                         </h2>
//                         <p className="text-sm text-gray-500">
//                             {propertyDetail?.type_name} for {propertyDetail?.purpose}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                             {propertyDetail?.address}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="flex flex-wrap items-center mt-6 gap-2">
//                     {/* RERA Status */}
//                     <div className="flex items-center space-x-2">
//                         <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                             RERA STATUS
//                         </span>
//                         <span className="text-sm font-medium text-gray-800">REGISTERED</span>
//                     </div>
//                     <p className="text-sm text-gray-500">
//                         Registration No: <span className="font-medium">73 OF 2017</span>
//                     </p>
//                 </div>
//             </div>

//             {/* Amenities - What this place offers */}
//             {propertyDetail?.amenities &&
//                 propertyDetail.amenities.filter(Boolean).length > 0 && (
//                     <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
//                         <h3 className="text-lg font-semibold text-gray-700 mb-4">What this place offers</h3>
//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//                             {Array.from(
//                                 new Set(propertyDetail.amenities.filter(Boolean))
//                             ).map((amenity, index) => (
//                                 <div
//                                     key={index}
//                                     className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
//                                 >
//                                     {/* Use the mapped icon or fallback */}
//                                     <div className="text-gray-600">
//                                         {amenityIconMap[amenity.toLowerCase()] || fallbackIcon}
//                                     </div>
//                                     <span className="text-gray-800 capitalize">{amenity}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}


//             {/* More info Cards */}
//             <div className="mt-8 p-6 border rounded-lg shadow bg-white">
//                 <div className="grid grid-cols-3 gap-x-8 gap-y-4">
//                     {[
//                         { label: "Transaction Type", value: "Resale" },
//                         { label: "Property Ownership", value: "Freehold" },
//                         { label: "Flooring", value: "Marble" },
//                         { label: "Width of facing road", value: "210.0 Feet" },
//                         { label: "Gated Community", value: "Yes" },
//                         { label: "Furnishing", value: "Semifurnished" },
//                         { label: "WheelChair Friendly", value: "Yes" },
//                         { label: "Pet Friendly", value: "Yes" },
//                         { label: "Parking", value: "2 Covered" },
//                         { label: "Property Code", value: "Z76171153" },
//                         { label: "Water Source", value: "Municipal corporation" },
//                         { label: "Power Backup", value: "Full" },
//                     ].map(({ label, value, tooltip }, index) => (
//                         <div key={index} className="flex items-center flex-wrap gap-2">
//                             <span className="text-gray-600 text-sm">{label}:</span>
//                             <span className=" text-gray-900 font-bold text-sm text-left">
//                                 {value}
//                             </span>

//                         </div>
//                     ))}
//                 </div>

//             </div>







//         </div>
//     );
// };

// export default SinglePage;



import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@material-tailwind/react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
import RealEstateListing from "../components/RealEstateListing";
import PropertyAminities from "../components/PropertyAminities";

import { AiOutlineUpload } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import BuilderContactCard from "../components/BuilderContactCard";
import { Dialog } from "@headlessui/react";
import ShareableCard from "../components/ShareableCard";
import ShareOptions from "../components/ShareOptions";
import { base_url } from "../utils/base_url";

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

    console.log(propertyDetail)
    // Map configuration
    const mapCenter = {
        lat: parseFloat(propertyDetail?.latitude) || 0,
        lng: parseFloat(propertyDetail?.longitude) || 0
    };

    const mapContainerStyle = {
        width: '100%',
        height: '480px',
        borderRadius: '12px'
    };

    const mapOptions = {
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text',
                stylers: [{ visibility: 'on' }]
            },
            {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [{ color: '#f5f5f5' }]
            },
            {
                featureType: 'water',
                elementType: 'all',
                stylers: [{ color: '#e9e9e9' }]
            }
        ]
    };

    const customMarker = {
        url: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png", // Use default Google Maps marker or any accessible image URL
        scaledSize: { width: 40, height: 40 }, // Adjust size for visibility
    };

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

    const formatPrice = (price) => {
        if (typeof price !== "number" || isNaN(price)) return "N/A";

        const indianFormat = new Intl.NumberFormat("en-IN", {
            maximumFractionDigits: 0,
        }).format(price);

        let unit = "";
        if (price >= 1_00_00_000) {
            unit = "Cr";
            price = (price / 1_00_00_000).toFixed(2);
        } else if (price >= 1_00_000) {
            unit = "Lakh";
            price = (price / 1_00_000).toFixed(2);
        } else if (price >= 1_000) {
            unit = "Thousand";
            price = (price / 1_000).toFixed(2);
        } else {
            price = price.toFixed(2);
        }

        return `₹${price} ${unit}`.trim();
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

    

    return (
        <div className="mx-8">
            {/* Title */}
            <div className="py-4 flex justify-between">
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 capitalize">
                    {propertyDetail?.post_title}
                </h1>

                <div className="flex gap-4">
                    {/* <div className="flex items-center font-semibold gap-1 cursor-pointer hover:bg-gray-300 px-3 text-md  rounded-md ">
                        <PiUploadSimpleLight size={25} />
                        <p className="underline">Share</p>
                    </div> */}
                    <div>
                        <div
                            className="flex items-center font-semibold gap-1 cursor-pointer hover:bg-gray-300 px-3 text-md rounded-md"
                            onClick={() => setIsShareOpen(true)}
                        >
                            <PiUploadSimpleLight size={25} />
                            <p className="underline">Share</p>
                        </div>
                        {/* Modal */}
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
                    </div>

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

                <Button
                    variant="outlined"
                    className="flex items-center gap-3 absolute bottom-5 right-5 px-3 py-2 bg-white shadow-lg z-10"
                >
                    <PiDotsNineBold size={25} />
                    Show all photos
                </Button>
            </div>

            <div className="grid grid-flow-col grid-cols-12 gap-2 my-4">
                {/* left */}
                <div className="col-span-8">
                    {/* Property Details Card */}
                    <div className="bg-white shadow-sm rounded-lg p-6 w-full mx-auto border">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    Featured
                                </span>
                                <h1 className="text-3xl font-semibold text-gray-800">
                                    {formatPrice(propertyDetail?.price)}
                                </h1>
                            </div>
                            <div>
                                <p className="text-sm text-blue-600 font-medium">
                                    Estimated EMI {formatPrice(propertyDetail?.estimatedEMI)}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-4 justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-medium text-gray-800">
                                    {propertyDetail?.bathrooms}Baths {propertyDetail?.bedrooms}Beds {propertyDetail?.floor}Floors
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {propertyDetail?.type_name} for {propertyDetail?.purpose}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {propertyDetail?.address}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center mt-6 gap-2">
                            <div className="flex items-center space-x-2">
                                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                    RERA STATUS
                                </span>
                                <span className="text-sm font-medium text-gray-800">REGISTERED</span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Registration No: <span className="font-medium">73 OF 2017</span>
                            </p>
                        </div>
                    </div>

                    {/* Amenities Section */}
                    {/* {propertyDetail?.amenities && propertyDetail.amenities.filter(Boolean).length > 0 && (
                        <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">What this place offers</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {Array.from(new Set(propertyDetail.amenities.filter(Boolean))).map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
                                    >
                                        <div className="text-gray-600">
                                            {amenityIconMap[amenity.toLowerCase()] || fallbackIcon}
                                        </div>
                                        <span className="text-gray-800 capitalize">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )} */}
                    <PropertyAminities amenities={propertyDetail?.amenities} />

                    {/* facities section */}
                    {propertyDetail?.facilities && propertyDetail.facilities.length > 0 && (
                        <FacilitiesSection facilities={propertyDetail.facilities} />
                    )}

                    {/* Property Info Cards */}
                    <div className="mt-8 p-6 border rounded-lg shadow bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                            {[
                                { label: "Transaction Type", value: "Resale" },
                                { label: "Property Ownership", value: "Freehold" },
                                { label: "Flooring", value: "Marble" },
                                { label: "Width of facing road", value: "210.0 Feet" },
                                { label: "Gated Community", value: "Yes" },
                                { label: "Furnishing", value: "Semifurnished" },
                                { label: "WheelChair Friendly", value: "Yes" },
                                { label: "Pet Friendly", value: "Yes" },
                                { label: "Parking", value: "2 Covered" },
                                { label: "Property Code", value: "Z76171153" },
                                { label: "Water Source", value: "Municipal corporation" },
                                { label: "Power Backup", value: "Full" },
                            ].map(({ label, value }, index) => (
                                <div key={index} className="flex items-center flex-wrap gap-2">
                                    <span className="text-gray-600 text-sm">{label}:</span>
                                    <span className="text-gray-900 font-bold text-sm text-left">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map Section */}
                    {/* <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Where you'll be</h3>

                <div className="mb-4">
                    <h4 className="text-base font-medium text-gray-800">{propertyDetail?.address}</h4>
                </div>

                <div className="relative rounded-lg overflow-hidden">
                    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={mapCenter}
                            zoom={15}
                            options={mapOptions}
                        >
                            <Marker
                                position={mapCenter}
                                icon={customMarker}
                            />

                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg z-10">
                                <p className="text-sm font-medium text-gray-700">
                                    Exact location provided after booking
                                </p>
                            </div>
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div> */}

                    <div className="container mx-auto">
                        {/* Map Section */}
                        <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Where you'll be</h3>
                            <div className="relative rounded-lg overflow-hidden">
                                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
                                    <GoogleMap
                                        mapContainerStyle={mapContainerStyle}
                                        center={mapCenter}
                                        zoom={15}
                                        options={mapOptions}
                                    >
                                        {mapCenter.lat !== 0 && mapCenter.lng !== 0 ? (
                                            <Marker
                                                position={mapCenter}
                                                icon={customMarker} // Use the updated marker icon
                                            />
                                        ) : (
                                            <p className="text-red-500">
                                                Unable to display marker: Invalid coordinates
                                            </p>
                                        )}
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </div>
                    </div>


                    {/* <HomeLoanOffers /> */}
                    <HomeLoanOffers />

                    {/* EMI caluc */}
                    <EMICalculator />
                </div>

                {/* right */}

                <div className="col-span-4">
                    <div className="sticky top-24">
                        <RealEstateListing
                            
                            handleButtonClick={handleButtonClick}
                            price={propertyDetail?.price}
                            title={`${propertyDetail?.bathrooms} Baths ${propertyDetail?.bedrooms} Beds ${propertyDetail?.floor} Floors`}
                            location={propertyDetail?.address}
                            agentName="Mikhailova Ekaterina"
                            agencyName="Agency Samolet Plus MSK Sever"
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


        </div>
    );
};

export default SinglePage;
