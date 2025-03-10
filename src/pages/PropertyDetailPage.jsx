
// import React, { useEffect, useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { PiDotsNineBold, PiUploadSimpleLight } from "react-icons/pi";
// import { CarouselImages } from "../components/CarousalImages";
// import { useLocation, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleProperty } from "../redux/features/Properties/propertiesSlice";

// import { WiDaySunny, WiRain } from 'react-icons/wi';
// import { FaWater } from 'react-icons/fa';
// import HomeLoanOffers from "../components/HomeLoanOffers";
// import EMICalculator from "../components/EMIcalculator";
// import PropertyAminities from "../components/PropertyAminities";

// import { BsHeart, BsHeartFill } from 'react-icons/bs';
// import BuilderContactCard from "../components/BuilderContactCard";
// import LocationLatLngMap from "../components/LocationLatLngMap";
// import PropertyContactCard from "../components/PropertyContactCard";
// import ImagePreview from "../components/ImagesPreview";
// import PropertyCard from "../components/PropertyCard";
// import HeadingCommon from "../components/HeadingCommon";
// import PropertyDetailProjectInfo from "../components/PropertyDetailProjectInfo";
// import BuildingViewer from "../components/BuildingViewer";
// import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "framer-motion";
// import BuildingViewer2 from "../components/BuildingViewer2";
// import useWishlist from "../hooks/useWishlist";


// export const FacilitiesSection = ({ facilities }) => {
//     // Icon mapping for facilities
//     const facilityIcons = {
//         "Feng Shui / Vaastu Compliant": <WiDaySunny className="w-8 h-8 text-yellow-500" />,
//         "Water Storage": <FaWater className="w-8 h-8 text-blue-500" />,
//         "Rain Water Harvesting": <WiRain className="w-8 h-8 text-blue-400" />
//     };

//     // Default icon for unmapped facilities
//     const DefaultIcon = WiDaySunny;

//     if (!facilities || facilities.length === 0) return null;

//     return (
//         <div className="p-4 border rounded-lg shadow-sm bg-white">
//             <h3 className="text-2xl font-semibold text-black mb-6">Features</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {facilities.map((facility, index) => (
//                     <div key={index} className="flex items-center gap-4">
//                         <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
//                             {facilityIcons[facility] || <DefaultIcon className="w-8 h-8 text-black" />}
//                         </div>
//                         <span className="text-black text-sm font-medium">
//                             {facility}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
// function SinglePage() {
//     const { post_id } = useParams();
//     const dispatch = useDispatch();
//     const { propertyDetail } = useSelector(state => state.properties);
//     const [images, setImages] = useState([]);
//     const [isPopupVisible, setIsPopupVisible] = useState(false);
//     const [isAnimating, setIsAnimating] = useState(false); // Control animation state
//     const imagePreviewRef = useRef(null);
//     const [isHeaderVisible, setIsHeaderVisible] = useState(false);
//     const targetDivRef = useRef(null);
//     const isInView = useInView(targetDivRef, { margin: "-100px 0px 0px 0px" });
//     const [configAvailable, setConfigAvailable] = useState(true);


//     useEffect(() => {
//         setIsHeaderVisible(!isInView);
//     }, [isInView]);


//     const overviewRef = useRef(null);
//     const amenitiesRef = useRef(null);
//     const facilitiesRef = useRef(null);
//     const locationRef = useRef(null);
//     const loansRef = useRef(null);
//     const projectInfoRef = useRef(null);
//     const buildingViewRef = useRef(null);

//     // Add state for active section
//     const [activeSection, setActiveSection] = useState('overview');

//     const { isInWishlist, handleToggleWishlist } = useWishlist();

//     // Get the property ID and type
//     const propertyId = post_id;
//     const entityType = 'property'; // or 'project' or 'building' depending on your data

//     // Check if this property is in the wishlist
//     const isLiked = isInWishlist(propertyId, entityType);

//     const SCROLL_OFFSET = 120; // Adjust this value based on your header height + navigation height

//     const scrollToSection = (sectionRef, sectionId) => {
//         const element = sectionRef.current;
//         if (!element) return;

//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;

//         window.scrollTo({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });
//         setActiveSection(sectionId);
//     };

//     // Update the scroll detection accordingly
//     const handleScroll = () => {
//         const sections = [
//             { id: 'overview', ref: overviewRef },
//             { id: 'amenities', ref: amenitiesRef },
//             { id: 'facilities', ref: facilitiesRef },
//             { id: 'location', ref: locationRef },
//             { id: 'loans', ref: loansRef },
//             { id: 'projectInfo', ref: projectInfoRef },
//             { id: '3dview', ref: buildingViewRef }
//         ].filter(section => section.ref.current);

//         const currentSection = sections.find(section => {
//             const element = section.ref.current;
//             if (!element) return false;
//             const rect = element.getBoundingClientRect();
//             return rect.top <= SCROLL_OFFSET && rect.bottom >= SCROLL_OFFSET;
//         });

//         if (currentSection) {
//             setActiveSection(currentSection.id);
//         }
//     };

//     // Get available sections based on property data
//     const getAvailableSections = () => {
//         const sections = [
//             { id: 'overview', label: 'Overview', ref: overviewRef, always: true },
//             { id: '3dview', label: '3D View', ref: buildingViewRef, condition: configAvailable },
//             { id: 'amenities', label: 'Amenities', ref: amenitiesRef, condition: propertyDetail?.amenities?.length > 0 },
//             { id: 'facilities', label: 'Facilities', ref: facilitiesRef, condition: propertyDetail?.facilities?.length > 0 },
//             { id: 'location', label: 'Location', ref: locationRef, condition: propertyDetail?.latitude && propertyDetail?.longitude },
//             { id: 'loans', label: 'Home Loans', ref: loansRef, condition: propertyDetail?.price },
//             { id: 'projectInfo', label: 'Project Info', ref: projectInfoRef, condition: propertyDetail?.connectedWithProject },
//         ];

//         return sections.filter(section => section.always || section.condition);
//     };



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

//         if (price >= 1_00_00_000) {
//             return `₹${(price / 1_00_00_000).toFixed(2)}Cr`;
//         } else if (price >= 1_00_000) {
//             return `₹${(price / 1_00_000).toFixed(2)}L`;
//         } else if (price >= 1_000) {
//             return `₹${(price / 1_000).toFixed(0)}K`;
//         }

//         return `₹${price}`;
//     };

//     const handleButtonClick = () => {
//         setIsPopupVisible(true); // Show popup
//         setIsAnimating(true); // Start animation
//     };

//     const handleClose = () => {
//         setIsAnimating(false); // Trigger animation out
//         // setTimeout(() => setIsPopupVisible(false), 100); // Hide popup after animation
//         setIsPopupVisible(false)
//     };


//     const [isShareOpen, setIsShareOpen] = useState(false);
//     const { pathname } = useLocation()

//     const propertyInfo = {
//         title: "Luxurious 2BHK Apartment",
//         description: "Spacious and well-lit apartment in the heart of the city.",
//         image: propertyDetail?.galleryList?.[0],
//         link: `http://localhost:5173${pathname}`,
//     };

//     const pricePerSqft = propertyDetail?.price && propertyDetail?.superBuiltupArea
//         ? Math.round(propertyDetail?.price / propertyDetail?.superBuiltupArea)
//         : 0;


//     return (
//         <div>
//             {/* Common Div at the Top */}
//             {/* Title */}
//             <div className="py-4 flex justify-between mx-8">
//                 <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 capitalize">
//                     {propertyDetail?.post_title}
//                 </h1>

//                 <div className="flex gap-4">
//                     <div
//                         className="flex items-center font-semibold gap-1 cursor-pointer hover:bg-gray-300 px-3 text-md rounded-md"
//                         onClick={(e) => handleToggleWishlist(e, { entityId: propertyId, entityType })}
//                     >
//                         {isLiked ? (
//                             <BsHeartFill size={25} className="text-red-500" />
//                         ) : (
//                             <BsHeart size={25} />
//                         )}
//                         {isLiked ? 'Saved' : 'Save'}
//                     </div>
//                 </div>
//             </div>

//             {/* info on scroll */}
//             <AnimatePresence>
//                 {isHeaderVisible && (
//                     <motion.div
//                         initial={{ y: -100, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         exit={{ y: -100, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                         // className="fixed top-0 left-0 right-0 bg-[#FFDE5A]  shadow-md z-50 py-3 px-8"
//                         className="fixed top-0 left-0 right-0 bg-[#000]/80 text-white shadow-md z-40 py-4 px-8 backdrop-blur-lg"

//                     >
//                         <div className="max-w-7xl mx-auto flex justify-between items-center">
//                             <div className="flex items-center gap-4">
//                                 <h1 className="text-2xl font-semibold text-white">
//                                     {propertyDetail?.post_title}
//                                 </h1>
//                                 <p className="text-sm text-gray-500">
//                                     {formatPrice(propertyDetail?.price)} • {propertyDetail?.bedrooms} BHK
//                                 </p>
//                             </div>
//                             <button
//                                 className="bg-[#FED42B] text-black px-4 py-2 rounded-lg hover:bg-[#ffdd54] transition-colors"
//                                 onClick={handleButtonClick}
//                             >
//                                 Contact Now
//                             </button>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* <div className="relative"> */}
//             <div ref={targetDivRef} className="relative mx-8">
//                 {/* Desktop Grid */}
//                 {images?.length > 3 ? (
//                     <div className="hidden lg:grid grid-cols-2 gap-2 items-center">
//                         <div className="bg-gray-200 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md h-96">
//                             <CarouselImages images={images} />
//                         </div>
//                         <div className="grid grid-cols-2 gap-2 h-full">
//                             {images?.slice(0, 4).map((image, index) => (
//                                 <img
//                                     key={index}
//                                     className="bg-green-200 flex items-center justify-center rounded-lg shadow-md h-48 w-full object-cover"
//                                     src={image}
//                                     alt={`Image ${index + 1}`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="hidden lg:grid grid-cols-4 gap-4 items-center">
//                         <div className="bg-gray-200 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md h-96 col-span-3">
//                             <CarouselImages images={images} />
//                         </div>
//                         <div className="grid gap-2 h-full">
//                             {images?.slice(0, 2).map((image, index) => (
//                                 <img
//                                     key={index}
//                                     className="bg-green-200 flex items-center justify-center rounded-lg shadow-md h-48 w-full object-cover"
//                                     src={image}
//                                     alt={`Image ${index + 1}`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 )}

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

//                 {/* <button
//                     variant="outlined"
//                     className="rounded-md hover:bg-black hover:text-white flex items-center gap-3 absolute bottom-5 right-5 px-3 py-2 bg-white shadow-lg z-10"
//                     onClick={() => imagePreviewRef.current.openGallery()} > */}
//                 <button
//                     className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-black rounded-lg hover:text-white transition-colors w-fit absolute bottom-5 right-5"
//                     onClick={() => imagePreviewRef.current.openGallery()}
//                 >
//                     <PiDotsNineBold size={25} />
//                     Show all photos
//                     <ImagePreview ref={imagePreviewRef} images={propertyDetail?.galleryList} />
//                 </button>
//             </div>


//             {/* labels click to scroll section */}
//             <motion.div
//                 className="sticky max-w-full top-[4.5rem] z-50 bg-[#fff]/50 backdrop-blur-lg py-2 px-8"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 <div className="flex gap-10 overflow-hidden">
//                     {getAvailableSections().map(({ id, label, ref }) => (
//                         <motion.button
//                             key={id}
//                             onClick={() => scrollToSection(ref, id)}
//                             className={`whitespace-nowrap rounded-full transition-colors ${activeSection === id
//                                 ? ' text-[crimson] underline underline-[crimson] underline-offset-4 font-semibold'
//                                 : 'text-gray-600'
//                                 }`}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             {label}
//                         </motion.button>
//                     ))}
//                 </div>
//             </motion.div>

//             {configAvailable ?
//                 (<>
//                     <div className='grid grid-cols-12 gap-2'>
//                         {/* first left div */}
//                         <div className='col-span-8 propertyContainer'>
//                             {/* Property Info Section */}
//                             <div ref={overviewRef} className="max-w-4xl mx-auto">
//                                 <div className="flex gap-2 mb-2">
//                                     <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
//                                         ✓ Verified
//                                     </span>
//                                     {/* <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded">
//                                 Featured
//                             </span> */}
//                                 </div>
//                                 {/* Header Section */}
//                                 <div className="">
//                                     {/* New Launch Badge */}

//                                     <h1 className="text-4xl font-bold text-gray-900 mb-1">{propertyDetail?.post_title}</h1>

//                                     <p className="text-gray-500">{propertyDetail?.address}</p>
//                                 </div>


//                                 <div className="max-w-3xl py-1">
//                                     <div className="flex flex-col space-y-2">
//                                         {/* Top badges */}


//                                         <div className="flex gap-8 items-center">
//                                             {/* Price section */}
//                                             <div>
//                                                 <div className="flex items-baseline">
//                                                     <div className="flex items-center">
//                                                         {/* <IndianRupee className="w-4 h-4" /> */}
//                                                         <span className="text-4xl font-semibold">
//                                                             {formatPrice(propertyDetail?.price)}
//                                                         </span>
//                                                     </div>
//                                                     <span className="ml-2 text-gray-500 text-sm">
//                                                         @ {pricePerSqft} per sq.ft.
//                                                     </span>
//                                                 </div>

//                                                 {/* EMI section */}
//                                                 <div className="text-blue-500">
//                                                     Estimated EMI ₹{propertyDetail?.price ? Math.round(propertyDetail?.price * 0.008).toLocaleString() : '0'}
//                                                 </div>
//                                             </div>

//                                             {/* Vertical Divider */}
//                                             <div className="w-px h-16 bg-gray-300"></div>

//                                             <div>
//                                                 {/* Property details */}
//                                                 <div className="flex flex-col justify-start items-start">
//                                                     <div className="text-3xl text-gray-700">
//                                                         {propertyDetail?.bedrooms}BHK {propertyDetail?.bathrooms}Baths
//                                                     </div>
//                                                     <div className="text-gray-500">
//                                                         {propertyDetail?.type_name} for {propertyDetail?.purpose}
//                                                     </div>
//                                                     {/* Location */}
//                                                     <div className="text-gray-500 text-sm">
//                                                         in {propertyDetail?.locality}, {propertyDetail?.address}, {propertyDetail?.city}
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div className="flex flex-wrap gap-2 mt-2">
//                                     <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
//                                         <svg
//                                             className="w-4 h-4 mr-1"
//                                             fill="currentColor"
//                                             viewBox="0 0 20 20"
//                                         >
//                                             <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                                             <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                                         </svg>
//                                         {propertyDetail?.purpose}
//                                     </div>
//                                     <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
//                                         {propertyDetail?.area} {propertyDetail?.areaUnit}
//                                     </div>
//                                     <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
//                                         {propertyDetail?.facilities?.length} Top Facilities
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         {/* first right div - contact */}
//                         <div className="col-span-4 p-5">
//                             <div className="sticky top-32">
//                                 <PropertyContactCard
//                                     handleButtonClick={handleButtonClick}
//                                     details={propertyDetail?.builder || {
//                                         ownershipTypes: propertyDetail?.ownershipTypes,
//                                         contactList: propertyDetail?.contactList,
//                                         region: propertyDetail?.region || ['City view', 'Hold'],
//                                         tags: propertyDetail?.tags?.length > 0 ? propertyDetail?.tags : ['Newly Added', 'Diwali Offer'],
//                                         ownerName: propertyDetail?.ownerName || "Ankit Kumar Singh",
//                                         createdAt: propertyDetail?.createdAt

//                                     }}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     {/* Building Viewer */}
//                     <div ref={buildingViewRef}>
//                         <BuildingViewer2 id={propertyDetail?.post_id} viewer="Property" configAvailable={configAvailable}
//                             setConfigAvailable={setConfigAvailable}
//                         />
//                     </div>

//                     <div className='grid grid-cols-12 '>
//                         {/* second left div */}
//                         <div className='col-span-8 propertyContainer flex flex-col gap-12'>
//                             {/* Amenities Section */}
//                             {propertyDetail?.amenities?.length > 0 && (
//                                 <div ref={amenitiesRef}>
//                                     <PropertyAminities
//                                         amenities={Array.from(
//                                             propertyDetail.amenities.reduce((map, amenity) => {
//                                                 const key = amenity.toLowerCase();
//                                                 if (!map.has(key)) {
//                                                     map.set(key, amenity);
//                                                 }
//                                                 return map;
//                                             }, new Map()).values()
//                                         )}
//                                     />
//                                 </div>
//                             )}



//                             {/* facities section */}
//                             {propertyDetail?.facilities?.length > 0 && (
//                                 <div ref={facilitiesRef}>
//                                     <FacilitiesSection
//                                         facilities={Array.from(
//                                             propertyDetail.facilities.reduce((map, facility) => {
//                                                 const key = facility.toLowerCase();
//                                                 if (!map.has(key)) {
//                                                     map.set(key, facility);
//                                                 }
//                                                 return map;
//                                             }, new Map()).values()
//                                         )}
//                                     />
//                                 </div>
//                             )}


//                             {/* Property Info Cards */}
//                             <div className=" p-6 border rounded-lg shadow bg-white">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
//                                     {[
//                                         { label: "Price", value: propertyDetail?.priceOnRequest ? "Price on Request" : `${propertyDetail?.price?.toLocaleString()} ${propertyDetail?.priceUnit}` },
//                                         { label: "Property Type", value: propertyDetail?.type_name },
//                                         { label: "Super Built-up Area", value: `${propertyDetail?.superBuiltupArea} ${propertyDetail?.areaUnit}` },
//                                         { label: "Carpet Area", value: `${propertyDetail?.carpetArea} ${propertyDetail?.areaUnit}` },
//                                         { label: "Bedrooms", value: propertyDetail?.bedrooms },
//                                         { label: "Bathrooms", value: propertyDetail?.bathrooms },
//                                         { label: "Floor", value: `${propertyDetail?.floor}${propertyDetail?.floor ? 'th' : ''} Floor` },
//                                         { label: "Furnishing", value: propertyDetail?.furnishing },
//                                         { label: "Possession", value: propertyDetail?.possession },
//                                         { label: "Ownership Type", value: propertyDetail?.ownershipTypes?.[0] },
//                                         { label: "Property Status", value: propertyDetail?.status },
//                                         { label: "View Type", value: propertyDetail?.viewTypes?.[0] },
//                                         { label: "Property Condition", value: propertyDetail?.propertyConditions?.[0] },
//                                         { label: "Legal Status", value: propertyDetail?.legalStatuses?.[0] },
//                                         { label: "Security", value: propertyDetail?.facilities?.includes("24/7-security") ? "24/7 Available" : "Not Available" }
//                                     ].map(({ label, value }, index) => (
//                                         <div key={index} className="flex items-center flex-wrap gap-2">
//                                             <span className="text-gray-600 text-sm">{label}:</span>
//                                             <span className="text-gray-900 font-bold text-sm text-left">
//                                                 {value || "Not Specified"}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {propertyDetail?.latitude && propertyDetail?.longitude && (
//                                 <div ref={locationRef} className="">
//                                     <LocationLatLngMap latitude={propertyDetail?.latitude} longitude={propertyDetail?.longitude} />
//                                 </div>
//                             )}


//                             {/* <HomeLoanOffers /> */}
//                             {/* Home Loans Section */}
//                             {propertyDetail?.price && (
//                                 <div ref={loansRef}>
//                                     <HomeLoanOffers />
//                                 </div>
//                             )}

//                             {/* EMI calculator */}
//                             <EMICalculator price={propertyDetail?.price} />
//                         </div>
//                         {/* second right div */}
//                         <div className="col-span-4 p-5">
//                             <div className="sticky top-28">
//                                 <PropertyContactCard
//                                     handleButtonClick={handleButtonClick}
//                                     details={propertyDetail?.builder || {
//                                         ownershipTypes: propertyDetail?.ownershipTypes,
//                                         contactList: propertyDetail?.contactList,
//                                         region: propertyDetail?.region || ['City view', 'Hold'],
//                                         tags: propertyDetail?.tags?.length > 0 ? propertyDetail?.tags : ['Newly Added', 'Diwali Offer'],
//                                         ownerName: propertyDetail?.ownerName || "Ankit Kumar Singh",
//                                         createdAt: propertyDetail?.createdAt

//                                     }}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </>



//                 )
//                 :
//                 (<div className='grid grid-cols-12'>
//                     {/* left div */}
//                     <div className='col-span-8 propertyContainer flex flex-col gap-10'>
//                         {/* Property Info Section */}
//                         <div ref={overviewRef} className="max-w-4xl">
//                             <div className="flex gap-2 mb-2">
//                                 <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
//                                     ✓ Verified
//                                 </span>
//                                 {/* <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded">
//                                 Featured
//                             </span> */}
//                             </div>
//                             {/* Header Section */}
//                             <div className="">
//                                 {/* New Launch Badge */}

//                                 <h1 className="text-4xl font-bold text-gray-900 mb-1">{propertyDetail?.post_title}</h1>

//                                 <p className="text-gray-500">{propertyDetail?.address}</p>
//                             </div>


//                             <div className="max-w-3xl py-1">
//                                 <div className="flex flex-col space-y-2">
//                                     {/* Top badges */}


//                                     <div className="flex gap-8 items-center">
//                                         {/* Price section */}
//                                         <div>
//                                             <div className="flex items-baseline">
//                                                 <div className="flex items-center">
//                                                     {/* <IndianRupee className="w-4 h-4" /> */}
//                                                     <span className="text-4xl font-semibold">
//                                                         {formatPrice(propertyDetail?.price)}
//                                                     </span>
//                                                 </div>
//                                                 <span className="ml-2 text-gray-500 text-sm">
//                                                     @ {pricePerSqft} per sq.ft.
//                                                 </span>
//                                             </div>

//                                             {/* EMI section */}
//                                             <div className="text-blue-500">
//                                                 Estimated EMI ₹{propertyDetail?.price ? Math.round(propertyDetail?.price * 0.008).toLocaleString() : '0'}
//                                             </div>
//                                         </div>

//                                         {/* Vertical Divider */}
//                                         <div className="w-px h-16 bg-gray-300"></div>

//                                         <div>
//                                             {/* Property details */}
//                                             <div className="flex flex-col justify-start items-start">
//                                                 <div className="text-3xl text-gray-700">
//                                                     {propertyDetail?.bedrooms}BHK {propertyDetail?.bathrooms}Baths
//                                                 </div>
//                                                 <div className="text-gray-500">
//                                                     {propertyDetail?.type_name} for {propertyDetail?.purpose}
//                                                 </div>
//                                                 {/* Location */}
//                                                 <div className="text-gray-500 text-sm">
//                                                     in {propertyDetail?.locality}, {propertyDetail?.address}, {propertyDetail?.city}
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className="flex flex-wrap gap-2 mt-2">
//                                 <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
//                                     <svg
//                                         className="w-4 h-4 mr-1"
//                                         fill="currentColor"
//                                         viewBox="0 0 20 20"
//                                     >
//                                         <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                                         <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                                     </svg>
//                                     {propertyDetail?.purpose}
//                                 </div>
//                                 <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
//                                     {propertyDetail?.area} {propertyDetail?.areaUnit}
//                                 </div>
//                                 <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
//                                     {propertyDetail?.facilities?.length} Top Facilities
//                                 </div>
//                             </div>

//                         </div>

//                         {/* Amenities Section */}
//                         {propertyDetail?.amenities?.length > 0 && (
//                             <div ref={amenitiesRef}>
//                                 <PropertyAminities
//                                     amenities={Array.from(
//                                         propertyDetail.amenities.reduce((map, amenity) => {
//                                             const key = amenity.toLowerCase();
//                                             if (!map.has(key)) {
//                                                 map.set(key, amenity);
//                                             }
//                                             return map;
//                                         }, new Map()).values()
//                                     )}
//                                 />
//                             </div>
//                         )}



//                         {/* facities section */}
//                         {propertyDetail?.facilities?.length > 0 && (
//                             <div ref={facilitiesRef}>
//                                 <FacilitiesSection
//                                     facilities={Array.from(
//                                         propertyDetail.facilities.reduce((map, facility) => {
//                                             const key = facility.toLowerCase();
//                                             if (!map.has(key)) {
//                                                 map.set(key, facility);
//                                             }
//                                             return map;
//                                         }, new Map()).values()
//                                     )}
//                                 />
//                             </div>
//                         )}


//                         {/* Property Info Cards */}
//                         <div className=" p-6 border rounded-lg shadow bg-white">
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
//                                 {[
//                                     { label: "Price", value: propertyDetail?.priceOnRequest ? "Price on Request" : `${propertyDetail?.price?.toLocaleString()} ${propertyDetail?.priceUnit}` },
//                                     { label: "Property Type", value: propertyDetail?.type_name },
//                                     { label: "Super Built-up Area", value: `${propertyDetail?.superBuiltupArea} ${propertyDetail?.areaUnit}` },
//                                     { label: "Carpet Area", value: `${propertyDetail?.carpetArea} ${propertyDetail?.areaUnit}` },
//                                     { label: "Bedrooms", value: propertyDetail?.bedrooms },
//                                     { label: "Bathrooms", value: propertyDetail?.bathrooms },
//                                     { label: "Floor", value: `${propertyDetail?.floor}${propertyDetail?.floor ? 'th' : ''} Floor` },
//                                     { label: "Furnishing", value: propertyDetail?.furnishing },
//                                     { label: "Possession", value: propertyDetail?.possession },
//                                     { label: "Ownership Type", value: propertyDetail?.ownershipTypes?.[0] },
//                                     { label: "Property Status", value: propertyDetail?.status },
//                                     { label: "View Type", value: propertyDetail?.viewTypes?.[0] },
//                                     { label: "Property Condition", value: propertyDetail?.propertyConditions?.[0] },
//                                     { label: "Legal Status", value: propertyDetail?.legalStatuses?.[0] },
//                                     { label: "Security", value: propertyDetail?.facilities?.includes("24/7-security") ? "24/7 Available" : "Not Available" }
//                                 ].map(({ label, value }, index) => (
//                                     <div key={index} className="flex items-center flex-wrap gap-2">
//                                         <span className="text-gray-600 text-sm">{label}:</span>
//                                         <span className="text-gray-900 font-bold text-sm text-left">
//                                             {value || "Not Specified"}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {propertyDetail?.latitude && propertyDetail?.longitude && (
//                             <div ref={locationRef} className="">
//                                 <LocationLatLngMap latitude={propertyDetail?.latitude} longitude={propertyDetail?.longitude} />
//                             </div>
//                         )}


//                         {/* <HomeLoanOffers /> */}
//                         {/* Home Loans Section */}
//                         {propertyDetail?.price && (
//                             <div ref={loansRef}>
//                                 <HomeLoanOffers />
//                             </div>
//                         )}

//                         {/* EMI calculator */}
//                         <EMICalculator price={propertyDetail?.price} />
//                     </div>

//                     {/* contact card */}
//                     <div className='col-span-4 p-5'>
//                         <div className="sticky top-28">
//                             <PropertyContactCard
//                                 handleButtonClick={handleButtonClick}
//                                 details={propertyDetail?.builder || {
//                                     ownershipTypes: propertyDetail?.ownershipTypes,
//                                     contactList: propertyDetail?.contactList,
//                                     region: propertyDetail?.region || ['City view', 'Hold'],
//                                     tags: propertyDetail?.tags?.length > 0 ? propertyDetail?.tags : ['Newly Added', 'Diwali Offer'],
//                                     ownerName: propertyDetail?.ownerName || "Ankit Kumar Singh",
//                                     createdAt: propertyDetail?.createdAt,

//                                 }}
//                             />
//                         </div>
//                     </div>
//                 </div>)
//             }


//             {/* Common Div at the bottom */}
//             <div>
//                 {
//                     isPopupVisible && <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//                         <div
//                             className={` rounded-lg shadow-xl p-6 w-full  transform transition-transform duration-300 ${isAnimating ? "scale-100 opacity-100" : "scale-90 opacity-0"
//                                 }`}
//                         >
//                             <BuilderContactCard propertyDetail={propertyDetail} />
//                         </div>
//                     </div>
//                 }


//                 {propertyDetail?.connectedWithProject && (
//                     <div ref={projectInfoRef} className="container">
//                         <HeadingCommon title="Property Under The Project" dual />
//                         <PropertyDetailProjectInfo
//                             data={propertyDetail?.connectedWithProject}
//                             contactNumber={propertyDetail?.contactList?.[0]}
//                         />
//                     </div>
//                 )}


//                 {/* similiar properties */}
//                 {propertyDetail?.building?.connectedProperties && <div className="container py-12">
//                     <HeadingCommon title="Similar Properties " dual="true" />
//                     <div className=" grid grid-cols-3 gap-3">
//                         {
//                             propertyDetail?.building?.connectedProperties?.map((property, index) => <PropertyCard property={property} />)
//                         }
//                     </div>
//                 </div>}

//             </div>
//         </div>
//     )
// }

// export default SinglePage



import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PiDotsNineBold, PiUploadSimpleLight } from "react-icons/pi";
import { CarouselImages } from "../components/CarousalImages";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProperty } from "../redux/features/Properties/propertiesSlice";

import { WiDaySunny, WiRain } from 'react-icons/wi';
import { FaWater } from 'react-icons/fa';
import HomeLoanOffers from "../components/HomeLoanOffers";
import EMICalculator from "../components/EMIcalculator";
import PropertyAminities from "../components/PropertyAminities";

import { BsHeart, BsHeartFill } from 'react-icons/bs';
import BuilderContactCard from "../components/BuilderContactCard";
import LocationLatLngMap from "../components/LocationLatLngMap";
import PropertyContactCard from "../components/PropertyContactCard";
import ImagePreview from "../components/ImagesPreview";
import PropertyCard from "../components/PropertyCard";
import HeadingCommon from "../components/HeadingCommon";
import PropertyDetailProjectInfo from "../components/PropertyDetailProjectInfo";
import BuildingViewer from "../components/BuildingViewer";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import BuildingViewer2 from "../components/BuildingViewer2";
import useWishlist from "../hooks/useWishlist";
import BackButton from "../components/BackButton";


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
        <div className="p-4 border rounded-lg shadow-sm bg-white">
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
function SinglePage() {
    const { post_id } = useParams();
    const dispatch = useDispatch();
    const { propertyDetail } = useSelector(state => state.properties);
    const [images, setImages] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // Control animation state
    const imagePreviewRef = useRef(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const targetDivRef = useRef(null);
    const isInView = useInView(targetDivRef, { margin: "-100px 0px 0px 0px" });
    const [configAvailable, setConfigAvailable] = useState(true);
    const [showHearts, setShowHearts] = useState(false);


    useEffect(() => {
        setIsHeaderVisible(!isInView);
    }, [isInView]);


    const overviewRef = useRef(null);
    const amenitiesRef = useRef(null);
    const facilitiesRef = useRef(null);
    const locationRef = useRef(null);
    const loansRef = useRef(null);
    const projectInfoRef = useRef(null);
    const buildingViewRef = useRef(null);

    // Add state for active section
    const [activeSection, setActiveSection] = useState('overview');

    const { isInWishlist, handleToggleWishlist } = useWishlist();

    // Get the property ID and type
    const propertyId = post_id;
    const entityType = 'property'; // or 'project' or 'building' depending on your data

    // Check if this property is in the wishlist
    const isLiked = isInWishlist(propertyId, entityType);

    const SCROLL_OFFSET = 120; // Adjust this value based on your header height + navigation height

    const scrollToSection = (sectionRef, sectionId) => {
        const element = sectionRef.current;
        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        setActiveSection(sectionId);
    };

    // Update the scroll detection accordingly
    const handleScroll = () => {
        const sections = [
            { id: 'overview', ref: overviewRef },
            { id: 'amenities', ref: amenitiesRef },
            { id: 'facilities', ref: facilitiesRef },
            { id: 'location', ref: locationRef },
            { id: 'loans', ref: loansRef },
            { id: 'projectInfo', ref: projectInfoRef },
            { id: '3dview', ref: buildingViewRef }
        ].filter(section => section.ref.current);

        const currentSection = sections.find(section => {
            const element = section.ref.current;
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return rect.top <= SCROLL_OFFSET && rect.bottom >= SCROLL_OFFSET;
        });

        if (currentSection) {
            setActiveSection(currentSection.id);
        }
    };

    // Get available sections based on property data
    const getAvailableSections = () => {
        const sections = [
            { id: 'overview', label: 'Overview', ref: overviewRef, always: true },
            { id: '3dview', label: '3D View', ref: buildingViewRef, condition: configAvailable },
            { id: 'amenities', label: 'Amenities', ref: amenitiesRef, condition: propertyDetail?.amenities?.length > 0 },
            { id: 'facilities', label: 'Facilities', ref: facilitiesRef, condition: propertyDetail?.facilities?.length > 0 },
            { id: 'location', label: 'Location', ref: locationRef, condition: propertyDetail?.latitude && propertyDetail?.longitude },
            { id: 'loans', label: 'Home Loans', ref: loansRef, condition: propertyDetail?.price },
            { id: 'projectInfo', label: 'Project Info', ref: projectInfoRef, condition: propertyDetail?.connectedWithProject },
        ];

        return sections.filter(section => section.always || section.condition);
    };



    console.log(propertyDetail)

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

    // WishlistButton Component
    const WishlistButton = ({ isLiked, onClick, className }) => {
        return (
            <motion.div
                onClick={onClick}
                className={`flex items-center gap-2 cursor-pointer px-3 py-2 text-md rounded-md ${className}`}
                whileTap={{ scale: 0.95 }}
                layout
            >
                <motion.div
                    layout
                    initial={false}
                >
                    <AnimatePresence mode="wait">
                        {isLiked ? (
                            <motion.div
                                key="filled"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.5, opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 15
                                }}
                            >
                                <BsHeartFill size={25} className="text-red-500" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="outline"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.5, opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 15
                                }}
                            >
                                <BsHeart size={25} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.span
                    layout
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.1 }
                    }}
                    className="font-semibold"
                >
                    {isLiked ? 'Saved' : 'Save'}
                </motion.span>
            </motion.div>
        );
    };

    // FloatingHearts Component
    const FloatingHearts = ({ isVisible }) => {
        return (
            <AnimatePresence>
                {isVisible && (
                    <motion.div className="absolute pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                initial={{
                                    scale: 0,
                                    opacity: 0.8,
                                    x: 0,
                                    y: 0
                                }}
                                animate={{
                                    scale: [0.2, 1, 0.5],
                                    opacity: [0.8, 0.8, 0],
                                    x: Math.random() * 100 - 50,
                                    y: Math.random() * -100 - 20
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                    delay: i * 0.1
                                }}
                            >
                                <BsHeartFill className="text-red-500" size={i % 2 === 0 ? 16 : 12} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        );
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



    const handleWishlistToggle = (e) => {
        if (!isLiked) {
            setShowHearts(true);
            setTimeout(() => setShowHearts(false), 1500);
        }
        handleToggleWishlist(e, { entityId: propertyId, entityType });
    };

    return (
        <div>
            {/* Common Div at the Top */}
            {/* Title */}
            <div className="py-4 flex justify-between mx-8">
                <div className="flex items-center gap-2">
                <BackButton variant="minimal" label="" iconSize={30} />
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 capitalize">
                    {propertyDetail?.post_title}
                </h1>

                </div>

                {/* <div className="flex gap-4">
                    <div
                        className="flex items-center font-semibold gap-1 cursor-pointer hover:bg-gray-300 px-3 text-md rounded-md"
                        onClick={(e) => handleToggleWishlist(e, { entityId: propertyId, entityType })}
                    >
                        {isLiked ? (
                            <BsHeartFill size={25} className="text-red-500" />
                        ) : (
                            <BsHeart size={25} />
                        )}
                        {isLiked ? 'Saved' : 'Save'}
                    </div>
                </div> */}
                <div className="flex gap-4">
                    <div className="relative">
                        <WishlistButton
                            isLiked={isLiked}
                            onClick={handleWishlistToggle}
                            className="font-semibold"
                        />
                        <FloatingHearts isVisible={showHearts} />
                    </div>
                </div>
            </div>

            {/* info on scroll */}
            <AnimatePresence>
                {isHeaderVisible && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        // className="fixed top-0 left-0 right-0 bg-[#FFDE5A]  shadow-md z-50 py-3 px-8"
                        className="fixed top-0 left-0 right-0 bg-[#000]/80 text-white shadow-md z-40 py-4 px-8 backdrop-blur-lg"

                    >
                        <div className=" mx-auto flex justify-between items-center">
                            {/* <div className="flex items-center gap-4">
                                <h1 className="text-2xl font-semibold text-white">
                                    {propertyDetail?.post_title}
                                </h1>
                                <p className="text-sm text-gray-500">
                                    {formatPrice(propertyDetail?.price)} • {propertyDetail?.bedrooms} BHK
                                </p>
                            </div>
                            <button
                                className="bg-[#FED42B] text-black px-4 py-2 rounded-lg hover:bg-[#ffdd54] transition-colors"
                                onClick={handleButtonClick}
                            >
                                Contact Now
                            </button> */}
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-semibold text-white">
                                    {propertyDetail?.post_title}
                                </h1>
                                <p className="text-sm text-gray-500">
                                    {formatPrice(propertyDetail?.price)} • {propertyDetail?.bedrooms} BHK
                                </p>
                            </div>
                            <div className="relative ml-auto flex items-center gap-2">
                                <WishlistButton
                                    isLiked={isLiked}
                                    onClick={handleWishlistToggle}
                                    className="text-white"
                                />
                                <button
                                    className="bg-[#FED42B] text-black px-4 py-2 rounded-lg hover:bg-[#ffdd54] transition-colors"
                                    onClick={handleButtonClick}
                                >
                                    Contact Now
                                </button>
                                <FloatingHearts isVisible={showHearts} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* <div className="relative"> */}
            <div ref={targetDivRef} className="relative mx-8">
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


            {/* labels click to scroll section */}
            <motion.div
                className="sticky max-w-full top-[4.5rem] z-50 bg-[#fff]/50 backdrop-blur-lg py-2 px-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex gap-10 overflow-hidden">
                    {getAvailableSections().map(({ id, label, ref }) => (
                        <motion.button
                            key={id}
                            onClick={() => scrollToSection(ref, id)}
                            className={`whitespace-nowrap rounded-full transition-colors ${activeSection === id
                                ? ' text-[crimson] underline underline-[crimson] underline-offset-4 font-semibold'
                                : 'text-gray-600'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {label}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {configAvailable ?
                (<>
                    <div className='grid grid-cols-12 gap-2'>
                        {/* first left div */}
                        <div className='col-span-8 propertyContainer'>
                            {/* Property Info Section */}
                            <div ref={overviewRef} className="max-w-4xl mx-auto">
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
                        </div>
                        {/* first right div - contact */}
                        <div className="col-span-4 p-5">
                            <div className="sticky top-32">
                                <PropertyContactCard
                                    handleButtonClick={handleButtonClick}
                                    details={propertyDetail?.builder || {
                                        ownershipTypes: propertyDetail?.ownershipTypes,
                                        contactList: propertyDetail?.contactList,
                                        region: propertyDetail?.region || ['City view', 'Hold'],
                                        tags: propertyDetail?.tags?.length > 0 ? propertyDetail?.tags : ['Newly Added', 'Diwali Offer'],
                                        ownerName: propertyDetail?.ownerName || "Ankit Kumar Singh",
                                        createdAt: propertyDetail?.createdAt

                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Building Viewer */}
                    <div ref={buildingViewRef}>
                        <BuildingViewer2 id={propertyDetail?.post_id} viewer="Property" configAvailable={configAvailable}
                            setConfigAvailable={setConfigAvailable}
                        />
                    </div>

                    <div className='grid grid-cols-12 '>
                        {/* second left div */}
                        <div className='col-span-8 propertyContainer flex flex-col gap-12'>
                            {/* Amenities Section */}
                            {propertyDetail?.amenities?.length > 0 && (
                                <div ref={amenitiesRef}>
                                    <PropertyAminities
                                        amenities={Array.from(
                                            propertyDetail.amenities.reduce((map, amenity) => {
                                                const key = amenity.toLowerCase();
                                                if (!map.has(key)) {
                                                    map.set(key, amenity);
                                                }
                                                return map;
                                            }, new Map()).values()
                                        )}
                                    />
                                </div>
                            )}



                            {/* facities section */}
                            {propertyDetail?.facilities?.length > 0 && (
                                <div ref={facilitiesRef}>
                                    <FacilitiesSection
                                        facilities={Array.from(
                                            propertyDetail.facilities.reduce((map, facility) => {
                                                const key = facility.toLowerCase();
                                                if (!map.has(key)) {
                                                    map.set(key, facility);
                                                }
                                                return map;
                                            }, new Map()).values()
                                        )}
                                    />
                                </div>
                            )}


                            {/* Property Info Cards */}
                            <div className=" p-6 border rounded-lg shadow bg-white">
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

                            {propertyDetail?.latitude && propertyDetail?.longitude && (
                                <div ref={locationRef} className="">
                                    <LocationLatLngMap latitude={propertyDetail?.latitude} longitude={propertyDetail?.longitude} />
                                </div>
                            )}


                            {/* <HomeLoanOffers /> */}
                            {/* Home Loans Section */}
                            {propertyDetail?.price && (
                                <div ref={loansRef}>
                                    <HomeLoanOffers />
                                </div>
                            )}

                            {/* EMI calculator */}
                            <EMICalculator price={propertyDetail?.price} />
                        </div>
                        {/* second right div */}
                        <div className="col-span-4 p-5">
                            <div className="sticky top-28">
                                <PropertyContactCard
                                    handleButtonClick={handleButtonClick}
                                    details={propertyDetail?.builder || {
                                        ownershipTypes: propertyDetail?.ownershipTypes,
                                        contactList: propertyDetail?.contactList,
                                        region: propertyDetail?.region || ['City view', 'Hold'],
                                        tags: propertyDetail?.tags?.length > 0 ? propertyDetail?.tags : ['Newly Added', 'Diwali Offer'],
                                        ownerName: propertyDetail?.ownerName || "Ankit Kumar Singh",
                                        createdAt: propertyDetail?.createdAt

                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </>



                )
                :
                (<div className='grid grid-cols-12'>
                    {/* left div */}
                    <div className='col-span-8 propertyContainer flex flex-col gap-10'>
                        {/* Property Info Section */}
                        <div ref={overviewRef} className="max-w-4xl">
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

                        {/* Amenities Section */}
                        {propertyDetail?.amenities?.length > 0 && (
                            <div ref={amenitiesRef}>
                                <PropertyAminities
                                    amenities={Array.from(
                                        propertyDetail.amenities.reduce((map, amenity) => {
                                            const key = amenity.toLowerCase();
                                            if (!map.has(key)) {
                                                map.set(key, amenity);
                                            }
                                            return map;
                                        }, new Map()).values()
                                    )}
                                />
                            </div>
                        )}



                        {/* facities section */}
                        {propertyDetail?.facilities?.length > 0 && (
                            <div ref={facilitiesRef}>
                                <FacilitiesSection
                                    facilities={Array.from(
                                        propertyDetail.facilities.reduce((map, facility) => {
                                            const key = facility.toLowerCase();
                                            if (!map.has(key)) {
                                                map.set(key, facility);
                                            }
                                            return map;
                                        }, new Map()).values()
                                    )}
                                />
                            </div>
                        )}


                        {/* Property Info Cards */}
                        <div className=" p-6 border rounded-lg shadow bg-white">
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

                        {propertyDetail?.latitude && propertyDetail?.longitude && (
                            <div ref={locationRef} className="">
                                <LocationLatLngMap latitude={propertyDetail?.latitude} longitude={propertyDetail?.longitude} />
                            </div>
                        )}


                        {/* <HomeLoanOffers /> */}
                        {/* Home Loans Section */}
                        {propertyDetail?.price && (
                            <div ref={loansRef}>
                                <HomeLoanOffers />
                            </div>
                        )}

                        {/* EMI calculator */}
                        <EMICalculator price={propertyDetail?.price} />
                    </div>

                    {/* contact card */}
                    <div className='col-span-4 p-5'>
                        <div className="sticky top-28">
                            <PropertyContactCard
                                handleButtonClick={handleButtonClick}
                                details={propertyDetail?.builder || {
                                    ownershipTypes: propertyDetail?.ownershipTypes,
                                    contactList: propertyDetail?.contactList,
                                    region: propertyDetail?.region || ['City view', 'Hold'],
                                    tags: propertyDetail?.tags?.length > 0 ? propertyDetail?.tags : ['Newly Added', 'Diwali Offer'],
                                    ownerName: propertyDetail?.ownerName || "Ankit Kumar Singh",
                                    createdAt: propertyDetail?.createdAt,

                                }}
                            />
                        </div>
                    </div>
                </div>)
            }


            {/* Common Div at the bottom */}
            <div>
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


                {propertyDetail?.connectedWithProject && (
                    <div ref={projectInfoRef} className="container">
                        <HeadingCommon title="Property Under The Project" dual />
                        <PropertyDetailProjectInfo
                            data={propertyDetail?.connectedWithProject}
                            contactNumber={propertyDetail?.contactList?.[0]}
                        />
                    </div>
                )}


                {/* similiar properties */}
                {propertyDetail?.building?.connectedProperties && <div className="container py-12">
                    <HeadingCommon title="Similar Properties " dual="true" />
                    <div className=" grid grid-cols-3 gap-3">
                        {
                            propertyDetail?.building?.connectedProperties?.map((property, index) => <PropertyCard property={property} />)
                        }
                    </div>
                </div>}

            </div>
        </div>
    )
}

export default SinglePage