// import React, { useEffect, useState } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import axios from "axios";
// import {base_url} from "../utils/base_url"

// function FloatButtonShowMap() {
//     const { properties } = useSelector((state) => state.properties);

//     const [showMap, setShowMap] = useState(false);

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//     };

//     const center = {
//         lat: 26.4735628, 
//         lng: 80.2855543,
//     };

//     return (
//         <>
//             {/* Button */}
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             {/* Sliding Map Container */}
//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[85vh] bg-white shadow-lg z-40 transition-transform duration-300 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 {/* Close Button */}
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer"
//                 >
//                     Close
//                 </button>

//                 {/* Google Map Content */}
//                 <div className="w-full h-full flex items-center justify-center">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={center}
//                             zoom={20}
//                         >
//                             {/* Add Markers for each property */}
//                             {properties.map((property, index) => (
//                                 <Marker
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     label={property.post_title}
//                                 />
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default FloatButtonShowMap;

// import React, { useState } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";

// function FloatButtonShowMap() {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//     };

//     const center = {
//         lat: properties[0]?.latitude || 26.4735628, // Default center if properties are empty
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -height,
//     });

//     return (
//         <>
//             {/* Button */}
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             {/* Sliding Map Container */}
//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-300 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 {/* Close Button */}
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer"
//                 >
//                     Close
//                 </button>

//                 {/* Google Map Content */}
//                 <div className="w-full h-full">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={center}
//                             zoom={20}
//                         >
//                             {/* Custom Markers for each property */}
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
//                                         {`$${property.price}`} {/* Display price */}
//                                     </div>
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default FloatButtonShowMap;


// import React, { useState } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";

// const FloatButtonShowMap = () => {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const center = {
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height + 4),
//     });

//     const handleMarkerClick = (property) => {
//         setSelectedProperty(property === selectedProperty ? null : property);
//     };

//     // Combined Marker and Card Component
//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative">
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                         transform transition-transform duration-200 cursor-pointer
//                         ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                     `}
//                 >
//                     <div className={`
//                         w-24 px-8 py-1.5 rounded-lg shadow-lg
//                         ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                         font-medium text-sm whitespace-nowrap
//                     `}>
//                         ₹{property.price}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 w-72">
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     setSelectedProperty(null);
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>
//                             <button
//                                 className="absolute top-3 right-12 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                                 </svg>
//                             </button>
//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">₹{property.price}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-300 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 <div className="w-full h-full">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={center}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                             }}
//                         >
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;

// import React, { useState } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";

// const FloatButtonShowMap = () => {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const center = {
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height + 4),
//     });

//     const handleMarkerClick = (property) => {
//         setSelectedProperty(property === selectedProperty ? null : property);
//     };

//     // Combined Marker and Card Component
//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative">
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                         transform transition-transform duration-200 cursor-pointer
//                         ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                     `}
//                 >
//                     <div className={`
//                         w-24 px-8 py-1.5 rounded-lg shadow-lg
//                         ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                         font-medium text-sm whitespace-nowrap
//                     `}>
//                         ₹{property.price}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 w-72">
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     setSelectedProperty(null);
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>
//                             <button
//                                 className="absolute top-3 right-12 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                                 </svg>
//                             </button>
//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">₹{property.price}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-300 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 <div className="w-full h-full">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={center}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                             }}
//                         >
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;

// import React, { useState } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView, Circle } from "@react-google-maps/api";

// const FloatButtonShowMap = () => {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const center = {
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height / 2),
//     });

//     const handleMarkerClick = (property) => {
//         setSelectedProperty(property === selectedProperty ? null : property);
//     };

//     // Combined Marker and Card Component
//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative">
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                         transform transition-transform duration-200 cursor-pointer
//                         ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                     `}
//                 >
//                     <div className={`
//                         w-24 px-8 py-1.5 rounded-lg shadow-lg text-center
//                         ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                         font-medium text-sm whitespace-nowrap
//                     `}>
//                         ₹{property.price}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div className="absolute top-1/2 left-full ml-4 transform -translate-y-1/2 z-10 w-80">
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     setSelectedProperty(null);
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>
//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">₹{property.price}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-300 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 <div className="w-full h-full relative">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={center}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                             }}
//                         >
//                             <Circle
//                                 center={center}
//                                 radius={500}
//                                 options={{
//                                     strokeColor: "#00BFFF",
//                                     strokeOpacity: 0.8,
//                                     strokeWeight: 2,
//                                     fillColor: "#ADD8E6",
//                                     fillOpacity: 0.35,
//                                 }}
//                             />
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;



// import React, { useState } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView, Circle } from "@react-google-maps/api";

// const FloatButtonShowMap = () => {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [mapCenter, setMapCenter] = useState({
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     });

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height / 2),
//     });

//     const handleMarkerClick = (property) => {
//         if (property === selectedProperty) {
//             setSelectedProperty(null);
//         } else {
//             setSelectedProperty(property);
//             setMapCenter({
//                 lat: property.latitude,
//                 lng: property.longitude,
//             });
//         }
//     };

//     const center = {
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     // Utility function to format price
//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`; // Crore
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lakh`; // Lakh
//         } else {
//             return `₹${price.toLocaleString()}`; // Less than 1 Lakh, show with commas
//         }
//     };

//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative">
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                     transform transition-transform duration-200 cursor-pointer
//                     ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                 `}
//                 >
//                     <div className={`
//                     w-28 px-8 py-1.5 rounded-lg shadow-lg text-center
//                     ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                     font-medium text-xs whitespace-nowrap
//                 `}>
//                         {/* Use formatPrice function to display formatted price */}
//                         {formatPrice(property.price)}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div className="absolute top-1/2 left-full ml-32 transform -translate-y-1/2 z-10 w-80">
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     setSelectedProperty(null);
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>
//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">{formatPrice(property.price)}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-300 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 <div className="w-full h-full relative">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={mapCenter}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                             }}
//                         >
//                             <Circle
//                                 center={center}
//                                 radius={500}
//                                 options={{
//                                     strokeColor: "#00BFFF",
//                                     strokeOpacity: 0.8,
//                                     strokeWeight: 2,
//                                     fillColor: "#ADD8E6",
//                                     fillOpacity: 0.35,
//                                 }}
//                             />
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;


// import React, { useState } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView, Circle } from "@react-google-maps/api";

// const FloatButtonShowMap = () => {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [mapCenter, setMapCenter] = useState({
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     });

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height / 2),
//     });

//     const handleMarkerClick = (property) => {
//         if (property === selectedProperty) {
//             setSelectedProperty(null);
//         } else {
//             setSelectedProperty(property);
//             setMapCenter({
//                 lat: property.latitude,
//                 lng: property.longitude,
//             });
//         }
//     };

//     const center = { // initailly with current position - hardcoded values added testing
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`; // Crore
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lakh`; // Lakh
//         } else {
//             return `₹${price.toLocaleString()}`; // Less than 1 Lakh, show with commas
//         }
//     };

//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative">
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                     transform transition-transform duration-300 cursor-pointer
//                     ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                 `}
//                 >
//                     <div className={`
//                     w-28 px-8 py-1.5 rounded-lg shadow-lg text-center
//                     ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                     font-medium text-xs whitespace-nowrap
//                 `}>
//                         {formatPrice(property.price)}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div className="absolute top-1/2 left-full ml-32 transform -translate-y-1/2 z-10 w-80 transition-transform duration-500 ease-in-out">
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     setSelectedProperty(null);
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>
//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">{formatPrice(property.price)}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-500 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 <div className="w-full h-full relative">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={mapCenter}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                                 disableDefaultUI: true,
//                                 zoomControl: true,
//                                 scrollwheel: false,
//                             }}
//                             onCenterChanged={() => { }}
//                         >
//                             <Circle
//                                 center={center}
//                                 radius={500}
//                                 options={{
//                                     strokeColor: "#00BFFF",
//                                     strokeOpacity: 0.8,
//                                     strokeWeight: 2,
//                                     fillColor: "#ADD8E6",
//                                     fillOpacity: 0.35,
//                                 }}
//                             />
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;


// import React, { useState } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView, Circle } from "@react-google-maps/api";

// const FloatButtonShowMap = () => {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [isClosing, setIsClosing] = useState(false);
//     const [mapCenter, setMapCenter] = useState({
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     });

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height / 2),
//     });

//     const handleMarkerClick = (property) => {
//         if (property === selectedProperty) {
//             handleCardClose();
//         } else {
//             setSelectedProperty(property);
//             setMapCenter({
//                 lat: property.latitude,
//                 lng: property.longitude,
//             });
//         }
//     };

//     const handleCardClose = () => {
//         setIsClosing(true);
//         setTimeout(() => {
//             setSelectedProperty(null);
//             setIsClosing(false);
//         }, 300); // Match this with CSS animation duration
//     };

//     const center = {
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lakh`;
//         } else {
//             return `₹${price.toLocaleString()}`;
//         }
//     };

//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative">
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                         transform transition-all duration-300 ease-in-out cursor-pointer
//                         ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                     `}
//                 >
//                     <div className={`
//                         w-28 px-8 py-1.5 rounded-lg shadow-lg text-center
//                         ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                         font-medium text-xs whitespace-nowrap
//                         transition-all duration-300 ease-in-out
//                     `}>
//                         {formatPrice(property.price)}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div
//                         className={`
//                             absolute top-1/2 left-full ml-32 transform -translate-y-1/2 z-10 w-80
//                             transition-all duration-300 ease-in-out
//                             ${isClosing
//                                 ? 'opacity-0 translate-x-[-20px]'
//                                 : 'opacity-100 translate-x-0 animate-cardPopup'
//                             }
//                         `}
//                     >
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleCardClose();
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 
//                                          transition-colors transform hover:rotate-90 duration-300"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>
//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">{formatPrice(property.price)}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <style jsx global>{`
//                 @keyframes cardPopup {
//                     0% {
//                         opacity: 0;
//                         transform: translate(-20px, -50%) scale(0.95);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translate(0, -50%) scale(1);
//                     }
//                 }
//                 .animate-cardPopup {
//                     animation: cardPopup 0.3s ease-out forwards;
//                 }
//             `}</style>
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-500 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 <div className="w-full h-full relative">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={mapCenter}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                                 disableDefaultUI: true,
//                                 zoomControl: true,
//                                 scrollwheel: false,
//                             }}
//                             onCenterChanged={() => { }}
//                         >
//                             <Circle
//                                 center={center}
//                                 radius={500}
//                                 options={{
//                                     strokeColor: "#00BFFF",
//                                     strokeOpacity: 0.8,
//                                     strokeWeight: 2,
//                                     fillColor: "#ADD8E6",
//                                     fillOpacity: 0.35,
//                                 }}
//                             />
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;

// import React, { useState, useRef } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView, Circle } from "@react-google-maps/api";

// const FloatButtonShowMap = () => {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [isClosing, setIsClosing] = useState(false);
//     const [mapCenter, setMapCenter] = useState({
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     });
//     const mapRef = useRef(null);

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height / 2),
//     });

//     const handleMarkerClick = (property) => {
//         if (property === selectedProperty) {
//             handleCardClose();
//         } else {
//             setSelectedProperty(property);
//             const newCenter = {
//                 lat: property.latitude,
//                 lng: property.longitude,
//             };
//             setMapCenter(newCenter);
            
//             // Smoothly pan to the new center
//             if (mapRef.current) {
//                 mapRef.current.panTo(newCenter);
//             }
//         }
//     };

//     const handleCardClose = () => {
//         setIsClosing(true);
//         setTimeout(() => {
//             setSelectedProperty(null);
//             setIsClosing(false);
//         }, 300);
//     };

//     const center = {
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lakh`;
//         } else {
//             return `₹${price.toLocaleString()}`;
//         }
//     };

//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative" style={{ zIndex: isSelected ? 1000 : 1 }}>
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                         transform transition-all duration-300 ease-in-out cursor-pointer
//                         ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                     `}
//                 >
//                     <div className={`
//                         w-28 px-8 py-1.5 rounded-lg shadow-lg text-center
//                         ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                         font-medium text-xs whitespace-nowrap
//                         transition-all duration-300 ease-in-out
//                     `}>
//                         {formatPrice(property.price)}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div
//                         className={`
//                             absolute top-1/2 left-full ml-32 transform -translate-y-1/2 z-10 w-80
//                             transition-all duration-300 ease-in-out
//                             ${isClosing
//                                 ? 'opacity-0 translate-x-[-20px]'
//                                 : 'opacity-100 translate-x-0 animate-cardPopup'
//                             }
//                         `}
//                     >
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleCardClose();
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 
//                                          transition-colors transform hover:rotate-90 duration-300"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>
//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">{formatPrice(property.price)}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <style jsx global>{`
//                 @keyframes cardPopup {
//                     0% {
//                         opacity: 0;
//                         transform: translate(-20px, -50%) scale(0.95);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translate(0, -50%) scale(1);
//                     }
//                 }
//                 .animate-cardPopup {
//                     animation: cardPopup 0.3s ease-out forwards;
//                 }
//             `}</style>
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-500 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 <div className="w-full h-full relative">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={mapCenter}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                                 disableDefaultUI: true,
//                                 zoomControl: true,
//                                 scrollwheel: false,
//                             }}
//                             onLoad={map => {
//                                 mapRef.current = map;
//                             }}
//                         >
//                             <Circle
//                                 center={center}
//                                 radius={500}
//                                 options={{
//                                     strokeColor: "#00BFFF",
//                                     strokeOpacity: 0.8,
//                                     strokeWeight: 2,
//                                     fillColor: "#ADD8E6",
//                                     fillOpacity: 0.35,
//                                 }}
//                             />
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;

// import React, { useState, useRef } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView, Circle } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";

// const FloatButtonShowMap = () => {
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [isClosing, setIsClosing] = useState(false);
//     const [mapCenter, setMapCenter] = useState({
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     });
//     const mapRef = useRef(null);

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const handleZoomIn = () => {
//         if (mapRef.current) {
//             const currentZoom = mapRef.current.getZoom();
//             mapRef.current.setZoom(currentZoom + 1);
//         }
//     };

//     const handleZoomOut = () => {
//         if (mapRef.current) {
//             const currentZoom = mapRef.current.getZoom();
//             mapRef.current.setZoom(currentZoom - 1);
//         }
//     };

//     const handleRecenter = () => {
//         if (mapRef.current) {
//             mapRef.current.panTo({
//                 lat: mapCenter.lat,
//                 lng: mapCenter.lng
//             });
//             mapRef.current.setZoom(22);
//         }
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height / 2),
//     });

//     const handleMarkerClick = (property) => {
//         if (property === selectedProperty) {
//             handleCardClose();
//         } else {
//             setSelectedProperty(property);
//             const newCenter = {
//                 lat: property.latitude,
//                 lng: property.longitude,
//             };
//             setMapCenter(newCenter);

//             if (mapRef.current) {
//                 mapRef.current.panTo(newCenter);
//             }
//         }
//     };

//     const handleCardClose = () => {
//         setIsClosing(true);
//         setTimeout(() => {
//             setSelectedProperty(null);
//             setIsClosing(false);
//         }, 300);
//     };

//     const center = {
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lakh`;
//         } else {
//             return `₹${price.toLocaleString()}`;
//         }
//     };

//     const navigate = useNavigate()

//     const handleNaigation = (id)=>{
//         console.log("Naviagton")
//         navigate(`/details/${id}`)
//     }

//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative" style={{ zIndex: isSelected ? 1000 : 1 }}>
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                         transform transition-all duration-300 ease-in-out cursor-pointer
//                         ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                     `}
//                 >
//                     <div className={`
//                         w-28 px-8 py-1.5 rounded-lg shadow-lg text-center
//                         ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                         font-medium text-xs whitespace-nowrap
//                         transition-all duration-300 ease-in-out
//                     `}>
//                         {formatPrice(property.price)}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div
//                         className={`
//                             absolute top-1/2 left-full ml-32 transform -translate-y-1/2 z-10 w-80
//                             transition-all duration-300 ease-in-out
//                             ${isClosing
//                                 ? 'opacity-0 translate-x-[-20px]'
//                                 : 'opacity-100 translate-x-0 animate-cardPopup'
//                             }
//                         `}
//                     >
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden" onClick={() => handleNaigation(property?.post_id)}>
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleCardClose();
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 hover:bg-gray-100 
//                                          transition-colors transform hover:rotate-90 duration-300"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>
//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="p-4" >
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">{formatPrice(property.price)}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <style jsx global>{`
//                 @keyframes cardPopup {
//                     0% {
//                         opacity: 0;
//                         transform: translate(-20px, -50%) scale(0.95);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translate(0, -50%) scale(1);
//                     }
//                 }
//                 .animate-cardPopup {
//                     animation: cardPopup 0.3s ease-out forwards;
//                 }
//             `}</style>
//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[87vh] bg-white shadow-lg z-40 transition-transform duration-500 ${showMap ? "translate-y-0" : "translate-y-full"
//                     }`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 {/* Custom Navigation Controls */}
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-lg shadow-lg">
//                     <button
//                         onClick={handleZoomIn}
//                         className="flex items-center justify-center w-10 h-10 border-b border-gray-200 hover:bg-gray-50 transition-colors"
//                         aria-label="Zoom in"
//                     >
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M12 5v14m-7-7h14" />
//                         </svg>
//                     </button>
//                     <button
//                         onClick={handleRecenter}
//                         className="flex items-center justify-center w-10 h-10 border-b border-gray-200 hover:bg-gray-50 transition-colors"
//                         aria-label="Recenter map"
//                     >
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M12 2L12 22M2 12L22 12" />
//                         </svg>
//                     </button>
//                     <button
//                         onClick={handleZoomOut}
//                         className="flex items-center justify-center w-10 h-10 hover:bg-gray-50 transition-colors"
//                         aria-label="Zoom out"
//                     >
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M5 12h14" />
//                         </svg>
//                     </button>
//                 </div>

//                 <div className="w-full h-full relative">
//                     <LoadScript googleMapsApiKey="AIzaSyDRTXePRjHx-5L6AwhWeDPLxU0fgVZQB3g">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={mapCenter}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                                 disableDefaultUI: true,
//                                 scrollwheel: false,
//                             }}
//                             onLoad={map => {
//                                 mapRef.current = map;
//                             }}
//                         >
//                             <Circle
//                                 center={center}
//                                 radius={500}
//                                 options={{
//                                     strokeColor: "#00BFFF",
//                                     strokeOpacity: 0.8,
//                                     strokeWeight: 2,
//                                     fillColor: "#ADD8E6",
//                                     fillOpacity: 0.35,
//                                 }}
//                             />
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;

// import React, { useState, useRef, useEffect } from "react";
// import { TbMap } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView, Circle } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";

// const FloatButtonShowMap = ({setShow}) => {
//     const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [isClosing, setIsClosing] = useState(false);
//     const [mapCenter, setMapCenter] = useState({
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     });
//     const mapRef = useRef(null);
//     const navigate = useNavigate();

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         setShow((prev)=> !prev)
//         if (!showMap) setSelectedProperty(null);
//     };

//     const handleZoomIn = () => {
//         if (mapRef.current) {
//             const currentZoom = mapRef.current.getZoom();
//             mapRef.current.setZoom(currentZoom + 1);
//         }
//     };

//     const handleZoomOut = () => {
//         if (mapRef.current) {
//             const currentZoom = mapRef.current.getZoom();
//             mapRef.current.setZoom(currentZoom - 1);
//         }
//     };

//     const handleRecenter = () => {
//         if (mapRef.current) {
//             mapRef.current.panTo(mapCenter);
//             mapRef.current.setZoom(22);
//         }
//     };

//     const getPixelPositionOffset = (width, height) => ({
//         x: -(width / 2),
//         y: -(height / 2),
//     });

//     const handleMarkerClick = (property) => {
//         if (property === selectedProperty) {
//             handleCardClose();
//         } else {
//             setSelectedProperty(property);
//         }
//     };

//     const handleCardClose = () => {
//         setIsClosing(true);
//         setTimeout(() => {
//             setSelectedProperty(null);
//             setIsClosing(false);
//         }, 300);
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lakh`;
//         } else {
//             return `₹${price.toLocaleString()}`;
//         }
//     };

//     const handleNavigation = (id) => {
//         navigate(`/details/${id}`);
//     };

//     const MarkerWithCard = ({ property }) => {
//         const isSelected = selectedProperty === property;
//         const cardRef = useRef(null);
//         const [cardPosition, setCardPosition] = useState('right');
//         const containerRef = useRef(null);

//         useEffect(() => {
//             if (isSelected && containerRef.current && mapRef.current) {
//                 const containerRect = containerRef.current.getBoundingClientRect();
//                 const mapRect = mapRef.current.getDiv().getBoundingClientRect();

//                 // Calculate available space in each direction
//                 const spaceTop = containerRect.top - mapRect.top;
//                 const spaceBottom = mapRect.bottom - containerRect.bottom;
//                 const spaceLeft = containerRect.left - mapRect.left;
//                 const spaceRight = mapRect.right - containerRect.right;

//                 // Card dimensions
//                 const cardWidth = 320; // w-80 = 20rem = 320px
//                 const cardHeight = 300; // Approximate height of the card

//                 // Determine best position based on available space and card dimensions
//                 const positions = [
//                     { position: 'top', space: spaceTop, required: cardHeight },
//                     { position: 'bottom', space: spaceBottom, required: cardHeight },
//                     { position: 'left', space: spaceLeft, required: cardWidth },
//                     { position: 'right', space: spaceRight, required: cardWidth }
//                 ];

//                 const validPositions = positions.filter(p => p.space >= p.required);

//                 if (validPositions.length > 0) {
//                     // Sort by available space and take the position with most space
//                     const bestPosition = validPositions.sort((a, b) => b.space - a.space)[0];
//                     setCardPosition(bestPosition.position);
//                 } else {
//                     // Default to right if no position has enough space
//                     setCardPosition('right');
//                 }
//             }
//         }, [isSelected]);

//         const getCardPositionStyles = () => {
//             const baseStyles = 'absolute z-10 w-80';

//             const positionStyles = {
//                 top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
//                 bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
//                 left: 'top-1/2 right-full -translate-y-1/2 mr-2',
//                 right: 'top-1/2 left-full -translate-y-1/2 ml-2'
//             };

//             return `${baseStyles} ${positionStyles[cardPosition]}`;
//         };

//         return (
//             <div
//                 ref={containerRef}
//                 className="relative"
//                 style={{ zIndex: isSelected ? 1000 : 1 }}
//             >
//                 <div
//                     onClick={() => handleMarkerClick(property)}
//                     className={`
//                         transform transition-all duration-300 ease-in-out cursor-pointer
//                         ${isSelected ? 'scale-110' : 'hover:scale-105'}
//                     `}
//                 >
//                     <div
//                         className={`
//                             w-28 px-8 py-1.5 rounded-lg shadow-lg text-center
//                             ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
//                             font-medium text-xs whitespace-nowrap
//                             transition-all duration-300 ease-in-out
//                         `}
//                     >
//                         {formatPrice(property.price)}
//                     </div>
//                 </div>

//                 {isSelected && (
//                     <div
//                         ref={cardRef}
//                         className={`
//                             ${getCardPositionStyles()}
//                             transition-all duration-300 ease-in-out
//                             ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-cardPopup'}
//                         `}
//                     >
//                         <div
//                             className="bg-white rounded-xl shadow-lg overflow-hidden"
//                             onClick={() => handleNavigation(property?.post_id)}
//                         >
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleCardClose();
//                                 }}
//                                 className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 
//                                          hover:bg-gray-100 transition-colors transform hover:rotate-90 duration-300"
//                             >
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M4 4L12 12M4 12L12 4" />
//                                 </svg>
//                             </button>

//                             <div className="relative aspect-[1.5/1]">
//                                 <img
//                                     src={property.galleryList[0]}
//                                     alt={property.post_title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>

//                             <div className="p-4">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h3 className="font-medium text-base">{property.post_title}</h3>
//                                         <p className="text-gray-600 text-sm mt-1">{property.address}</p>
//                                     </div>
//                                     {property.rating && (
//                                         <div className="flex items-center">
//                                             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                             </svg>
//                                             <span className="ml-1 text-sm">{property.rating}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-3 text-sm">
//                                     <span className="font-medium">{formatPrice(property.price)}</span> night
//                                     <span className="mx-1">·</span>
//                                     12-17 Jan
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <style jsx global>{`
//                 @keyframes cardPopup {
//                     0% {
//                         opacity: 0;
//                         transform: scale(0.95);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: scale(1);
//                     }
//                 }
//                 .animate-cardPopup {
//                     animation: cardPopup 0.3s ease-out forwards;
//                 }
//             `}</style>

//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center 
//                          bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer 
//                          hover:bg-gray-800 transition-colors"
//             >
//                 <TbMap size={20} />
//                 <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>

//             <div
//                 className={`fixed bottom-0 left-0 w-full h-[75vh] bg-white shadow-lg z-40 
//                          transition-transform duration-500 ${showMap ? "translate-y-0" : "translate-y-full"}`}
//             >
//                 <button
//                     onClick={toggleMap}
//                     className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full 
//                              text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
//                 >
//                     Close
//                 </button>

//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-lg shadow-lg">
//                     <button
//                         onClick={handleZoomIn}
//                         className="flex items-center justify-center w-10 h-10 border-b border-gray-200 
//                                  hover:bg-gray-50 transition-colors"
//                         aria-label="Zoom in"
//                     >
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M12 5v14m-7-7h14" />
//                         </svg>
//                     </button>
//                     <button
//                         onClick={handleRecenter}
//                         className="flex items-center justify-center w-10 h-10 border-b border-gray-200 
//                                  hover:bg-gray-50 transition-colors"
//                         aria-label="Recenter map"
//                     >
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M12 2L12 22M2 12L22 12" />
//                         </svg>
//                     </button>
//                     <button
//                         onClick={handleZoomOut}
//                         className="flex items-center justify-center w-10 h-10 hover:bg-gray-50 transition-colors"
//                         aria-label="Zoom out"
//                     >
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M5 12h14" />
//                         </svg>
//                     </button>
//                 </div>

//                 <div className="w-full h-full relative">
//                     <LoadScript googleMapsApiKey={googleApiKey}>
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={mapCenter}
//                             zoom={20}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "poi",
//                                         elementType: "labels",
//                                         stylers: [{ visibility: "off" }],
//                                     },
//                                 ],
//                                 disableDefaultUI: true,
//                                 scrollwheel: false,
//                             }}
//                             onLoad={map => {
//                                 mapRef.current = map;
//                             }}
//                         >
//                             <Circle
//                                 center={mapCenter}
//                                 radius={500}
//                                 options={{
//                                     strokeColor: "#00BFFF",
//                                     strokeOpacity: 0.8,
//                                     strokeWeight: 2,
//                                     fillColor: "#ADD8E6",
//                                     fillOpacity: 0.35,
//                                 }}
//                             />
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={getPixelPositionOffset}
//                                 >
//                                     <MarkerWithCard property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FloatButtonShowMap;


// import React, { useState, useRef, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";

// const PropertyMap = ({ setShow }) => {
//     const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [isClosing, setIsClosing] = useState(false);
//     const [mapCenter, setMapCenter] = useState({
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     });
//     const mapRef = useRef(null);
//     const navigate = useNavigate();

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         setShow((prev) => !prev);
//         if (!showMap) setSelectedProperty(null);
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `from ${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `from ${(price / 100000).toFixed(2)} Lakh`;
//         } else {
//             return `from ${price.toLocaleString()}`;
//         }
//     };

//     const PropertyMarker = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div className="relative group">
//                 <div
//                     onClick={() => setSelectedProperty(property)}
//                     className={`
//             py-1 px-3 rounded-lg cursor-pointer transition-all duration-300
//             ${isSelected
//                             ? 'bg-blue-500 text-white shadow-lg scale-105'
//                             : 'bg-green-500 text-white shadow hover:scale-105'
//                         }
//           `}
//                 >
//                     <span className="text-sm font-medium whitespace-nowrap">
//                         {formatPrice(property.price)}
//                     </span>
//                 </div>

//                 {isSelected && (
//                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg p-4 w-72 z-50">
//                         <div className="relative">
//                             <img
//                                 src={property.galleryList[0]}
//                                 alt={property.post_title}
//                                 className="w-full h-48 object-cover rounded-lg"
//                             />
//                             <div className="absolute top-2 right-2">
//                                 <button
//                                     onClick={() => setSelectedProperty(null)}
//                                     className="p-1 bg-white rounded-full hover:bg-gray-100"
//                                 >
//                                     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                         <path d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="mt-3">
//                             <h3 className="font-medium">{property.post_title}</h3>
//                             <p className="text-sm text-gray-600 mt-1">{property.address}</p>
//                             <div className="flex items-center justify-between mt-2">
//                                 <span className="text-sm font-medium">
//                                     {formatPrice(property.price)}
//                                 </span>
//                                 {property.rating && (
//                                     <div className="flex items-center">
//                                         <span className="text-yellow-400">★</span>
//                                         <span className="ml-1 text-sm">{property.rating}</span>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//             <div className={`
//         fixed inset-0 bg-white z-40 transition-transform duration-500
//         ${showMap ? "translate-y-0" : "translate-y-full"}
//       `}>
//                 <div className="h-16 border-b flex items-center justify-between px-4">
//                     <button
//                         onClick={() => setShowMap(false)}
//                         className="p-2 hover:bg-gray-100 rounded-full"
//                     >
//                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </button>
//                     <div className="flex space-x-4">
//                         <button className="p-2 hover:bg-gray-100 rounded-full">
//                             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M12 5v14M5 12h14" />
//                             </svg>
//                         </button>
//                         <button className="p-2 hover:bg-gray-100 rounded-full">
//                             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </button>
//                         <button className="p-2 hover:bg-gray-100 rounded-full">
//                             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 <div className="h-[calc(100vh-4rem)]">
//                     <LoadScript googleMapsApiKey={googleApiKey}>
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={mapCenter}
//                             zoom={14}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "all",
//                                         elementType: "all",
//                                         stylers: [{ saturation: -100 }]
//                                     }
//                                 ],
//                                 disableDefaultUI: true,
//                                 clickableIcons: false,
//                             }}
//                             onLoad={map => {
//                                 mapRef.current = map;
//                             }}
//                         >
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={(width, height) => ({
//                                         x: -(width / 2),
//                                         y: -(height / 2),
//                                     })}
//                                 >
//                                     <PropertyMarker property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>
//             </div>

//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 
//                  bg-white text-black px-6 py-3 rounded-full shadow-lg 
//                  hover:bg-gray-50 transition-colors flex items-center space-x-2"
//             >
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
//                 </svg>
//                 <span className="font-medium">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>
//         </>
//     );
// };

// export default PropertyMap;

// import React, { useState, useRef, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import { HomeIcon, MapPinIcon, PhoneIcon } from "lucide-react";
// import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

// const PropertyMap = ({ setShow }) => {
//     const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
//     const { properties } = useSelector((state) => state.properties);
//     const [showMap, setShowMap] = useState(false);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [showSidePanel, setShowSidePanel] = useState(true);
//     const [mapCenter, setMapCenter] = useState({
//         lat: properties[0]?.latitude || 26.4735628,
//         lng: properties[0]?.longitude || 80.2855543,
//     });
//     const mapRef = useRef(null);
//     const navigate = useNavigate();

//     // Reset side panel visibility when property selection changes
//     useEffect(() => {
//         if (selectedProperty) {
//             setShowSidePanel(true);
//         }
//     }, [selectedProperty]);

//     const toggleMap = () => {
//         setShowMap((prev) => !prev);
//         setShow((prev) => !prev);
//         if (!showMap) {
//             setSelectedProperty(null);
//             setShowSidePanel(true);
//         }
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `${(price / 100000).toFixed(2)} Lakh`;
//         } else {
//             return `${price.toLocaleString()}`;
//         }
//     };

//     const PropertyMarker = ({ property }) => {
//         const isSelected = selectedProperty === property;

//         return (
//             <div
//                 onClick={() => setSelectedProperty(property)}
//                 className={`
//           py-1 px-3 w-20 text-center rounded-lg cursor-pointer transition-all duration-300
//           ${isSelected
//                         ? 'bg-blue-500 text-white shadow-lg scale-105'
//                         : 'bg-green-500 text-white shadow hover:scale-105'
//                     }
//         `}
//             >
//                 <span className="text-sm font-medium whitespace-nowrap">
//                     {formatPrice(property.price)}
//                 </span>
//             </div>
//         );
//     };

//     const SidePanelToggle = () => (
//         <button
//             onClick={() => setShowSidePanel(prev => !prev)}
//             className={`
//         absolute left-96 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-r-full p-2
//         transform transition-transform duration-300 z-50
//         ${showSidePanel ? 'translate-x-0' : '-translate-x-96'}
//       `}
//         >
//             <svg
//                 className={`w-6 h-6 transform transition-transform duration-300 ${showSidePanel ? 'rotate-0' : 'rotate-180'}`}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//             >
//                 <path d="M15 19l-7-7 7-7" />
//             </svg>
//         </button>
//     );

//     const PropertyCard = ({ property }) => {
//         if (!property) return null;

//         const formatPrice = (price, priceUnit = "INR") => {
//             return new Intl.NumberFormat('en-IN', {
//                 style: 'currency',
//                 currency: priceUnit,
//                 maximumFractionDigits: 0,
//             }).format(price);
//         };

//         return (
//             <div
//                 className={`
//           fixed left-0 top-16 w-[400px] h-[calc(100vh-4rem)] bg-white shadow-lg z-40 
//           transform transition-transform duration-300 ease-in-out
//           ${showSidePanel ? 'translate-x-0' : '-translate-x-full'}
//         `}
//             >
//                 <div className="relative h-full overflow-hidden">
//                     {/* Header with close button */}
//                     {/* <div className="absolute top-6 left-0 right-0 h-14 bg-white border-b flex items-center justify-between px-4 z-10">
//                         <h2 className="text-lg font-medium">Property Details</h2>
//                         <button
//                             onClick={() => setSelectedProperty(null)}
//                             className="p-2 hover:bg-gray-100 rounded-full"
//                         >
//                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div> */}

//                     {/* Scrollable content */}
//                     <div className="h-full overflow-y-auto pt-8 pb-4">
//                         {/* Main image */}
//                         <div className="relative w-full">
//                             <img
//                                 src={property?.post_image}
//                                 alt={property?.post_title}
//                                 className="w-full h-full max-h-60 p-2 object-cover rounded-3xl"
//                             />
//                             <div className="absolute top-4 right-4 flex gap-2">
//                                 <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
//                                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                         <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                                     </svg>
//                                 </button>
//                                 <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
//                                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                         <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
//                                 {property?.galleryList?.length || 1} photos
//                             </div>
//                         </div>

//                         {/* Content sections */}
//                         <div className="px-4 space-y-6 mt-1">
//                             {/* Basic Info */}
//                             <div>
                                
//                                     <div>
//                                         <h1 className="text-xl font-semibold">{property?.post_title}</h1>
//                                         <div className="flex items-center text-gray-600 mt-1">
//                                             <MapPinIcon className="w-4 h-4 mr-1" />
//                                             <p className="text-sm">{property?.address}, {property?.city}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-between mt-1">
//                                         <p className="text-xl font-bold">{formatPrice(property?.price)}</p>
//                                     <span className="text-sm capitalize text-black px-4 py-1 rounded-sm bg-[#FED42B] ">{property?.purpose}</span>
//                                     </div>
//                             </div>

//                             {/* Key Details */}
//                             <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
//                                 <div>
//                                     <p className="text-gray-600 text-sm">Area</p>
//                                     <p className="font-medium">{property?.area} {property?.areaUnit || "sq"}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-gray-600 text-sm">Type</p>
//                                     <p className="font-medium">{property?.type_name}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-gray-600 text-sm">Floor</p>
//                                     <p className="font-medium">{property?.floor}</p>
//                                 </div>
//                             </div>

//                             {/* Features */}
//                             <div>
//                                 <h3 className="text-lg font-medium mb-3">Features</h3>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div className="flex items-center">
//                                         <BuildingOffice2Icon className="w-5 h-5 mr-2 text-gray-600" />
//                                         <span>{property?.bedrooms} Bedrooms</span>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <HomeIcon className="w-5 h-5 mr-2 text-gray-600" />
//                                         <span>{property?.bathrooms} Bathrooms</span>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <HomeIcon className="w-5 h-5 mr-2 text-gray-600" />
//                                         <span>{property?.furnishing}</span>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <HomeIcon className="w-5 h-5 mr-2 text-gray-600" />
//                                         <span>{property?.possession}</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Amenities */}
//                             {property?.amenities?.length > 0 && (
//                                 <div>
//                                     <h3 className="text-lg font-medium mb-3">Amenities</h3>
//                                     <div className="grid grid-cols-2 gap-2">
//                                         {property?.amenities.map((amenity, index) => (
//                                             <div key={index} className="flex items-center text-sm">
//                                                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                                                 {amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Description */}
//                             <div>
//                                 <h3 className="text-lg font-medium mb-2">Description</h3>
//                                 <p className="text-gray-600">{property?.post_description}</p>
//                             </div>

//                             {/* Contact */}
//                             <div>
//                                 <h3 className="text-lg font-medium mb-3">Contact</h3>
//                                 <div className="space-y-2">
//                                     {property?.contactList.map((contact, index) => (
//                                         <div key={index} className="flex items-center">
//                                             <PhoneIcon className="w-5 h-5 mr-2 text-gray-600" />
//                                             <span>{contact}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Action Buttons */}
//                             <div className="flex gap-4">
//                                 <button
//                                     onClick={() => navigate(`/details/${property?.post_id}`)}
//                                     className="flex-1 bg-[#FED42B] text-black py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
//                                 >
//                                     View Details
//                                 </button>
//                                 <button className="flex-1 border border-blue-500 text-blue-500 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
//                                     Contact Agent
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <>
//             <div className={`
//         fixed inset-0 bg-white z-30 transition-transform duration-500
//         ${showMap ? "translate-y-0" : "translate-y-full"}
//       `}>
//                 <div className="h-16 border-b flex items-center justify-between px-4">
//                     <button
//                         onClick={() => setShowMap(false)}
//                         className="p-2 hover:bg-gray-100 rounded-full"
//                     >
//                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                             <path d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </button>
//                     <div className="flex space-x-4">
//                         <button className="p-2 hover:bg-gray-100 rounded-full">
//                             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </button>
//                         <button className="p-2 hover:bg-gray-100 rounded-full">
//                             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 <div className="h-[calc(100vh-4rem)]">
//                     <LoadScript googleMapsApiKey={googleApiKey}>
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={mapCenter}
//                             zoom={14}
//                             options={{
//                                 styles: [
//                                     {
//                                         featureType: "all",
//                                         elementType: "all",
//                                         stylers: [{ saturation: -100 }]
//                                     }
//                                 ],
//                                 disableDefaultUI: true,
//                                 clickableIcons: false,
//                             }}
//                             onLoad={map => {
//                                 mapRef.current = map;
//                             }}
//                         >
//                             {properties.map((property, index) => (
//                                 <OverlayView
//                                     key={index}
//                                     position={{
//                                         lat: property.latitude,
//                                         lng: property.longitude,
//                                     }}
//                                     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//                                     getPixelPositionOffset={(width, height) => ({
//                                         x: -(width / 2),
//                                         y: -(height / 2),
//                                     })}
//                                 >
//                                     <PropertyMarker property={property} />
//                                 </OverlayView>
//                             ))}
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>

//                 {selectedProperty && <PropertyCard property={selectedProperty} />}
//                 {selectedProperty && <SidePanelToggle />}
//             </div>

//             <button
//                 onClick={toggleMap}
//                 className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 
//                  bg-white text-black px-6 py-3 rounded-full shadow-lg 
//                  hover:bg-gray-50 transition-colors flex items-center space-x-2"
//             >
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
//                 </svg>
//                 <span className="font-medium">{showMap ? "Hide Map" : "Show Map"}</span>
//             </button>
//         </>
//     );
// };

// export default PropertyMap;


// ***************************************************************


import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { HomeIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

const PropertyMap = ({ setShow }) => {
    const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const { properties } = useSelector((state) => state.properties);
    const [showMap, setShowMap] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showSidePanel, setShowSidePanel] = useState(true);
    const [isCardAnimating, setIsCardAnimating] = useState(false);
    const [mapCenter, setMapCenter] = useState({
        lat: properties[0]?.latitude || 26.4735628,
        lng: properties[0]?.longitude || 80.2855543,
    });
    const mapRef = useRef(null);
    const navigate = useNavigate();

    // Handle card animation
    useEffect(() => {
        if (selectedProperty) {
            setIsCardAnimating(true);
            setTimeout(() => setIsCardAnimating(false), 300);
        }
    }, [selectedProperty]);

    // Reset side panel visibility when property selection changes
    useEffect(() => {
        if (selectedProperty) {
            setShowSidePanel(true);
        }
    }, [selectedProperty]);

    const toggleMap = () => {
        setShowMap((prev) => !prev);
        setShow((prev) => !prev);
        if (!showMap) {
            setSelectedProperty(null);
            setShowSidePanel(true);
        }
    };

    const formatPrice = (price) => {
        if (price >= 10000000) {
            return `${(price / 10000000).toFixed(2)} Cr`;
        } else if (price >= 100000) {
            return `${(price / 100000).toFixed(2)} Lakh`;
        } else {
            return `${price.toLocaleString()}`;
        }
    };

    // Custom map styles with greenery
    const mapStyles = [
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#dde2e3" }]
        },
        {
            featureType: "landscape.natural.landcover",
            elementType: "geometry",
            stylers: [{ color: "#9cc69c" }]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#a3c7df" }]
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#91b391" }]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }]
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }]
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }]
        }
    ];

    const PropertyMarker = ({ property }) => {
        const isSelected = selectedProperty === property;

        return (
            <div
                onClick={() => setSelectedProperty(property)}
                className={`
                    py-1 px-3 w-20 text-center rounded-lg cursor-pointer
                    transform transition-all duration-300 ease-in-out
                    hover:shadow-xl
                    ${isSelected
                        ? 'bg-blue-500 text-white shadow-lg scale-110'
                        : 'bg-green-500 text-white shadow-md hover:scale-105'
                    }
                `}
            >
                <span className="text-sm font-medium whitespace-nowrap">
                    {formatPrice(property.price)}
                </span>
            </div>
        );
    };

    const SidePanelToggle = () => (
        <button
            onClick={() => setShowSidePanel(prev => !prev)}
            className={`
                absolute left-96 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-r-full p-2
                transform transition-all duration-300 ease-in-out z-50
                ${showSidePanel ? 'translate-x-0' : '-translate-x-96'}
                hover:bg-gray-50
            `}
        >
            <svg
                className={`w-6 h-6 transform transition-all duration-300 ease-in-out ${showSidePanel ? 'rotate-0' : 'rotate-180'}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );

    const PropertyCard = ({ property }) => {
        if (!property) return null;

        const formatPrice = (price, priceUnit = "INR") => {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: priceUnit,
                maximumFractionDigits: 0,
            }).format(price);
        };

        return (
            <div
                className={`
                    fixed left-0 top-16 w-[400px] h-[calc(100vh-4rem)] bg-white shadow-lg z-40
                    transform transition-all duration-300 ease-in-out
                    ${showSidePanel ? 'translate-x-0' : '-translate-x-full'}
                    ${isCardAnimating ? 'animate-slide-in' : ''}
                `}
            >
                <div className="relative h-full overflow-hidden">
                    <div className="h-full overflow-y-auto pt-8 pb-4">
                        {/* Main image */}
                        <div className="relative w-full group">
                            <img
                                src={property?.post_image}
                                alt={property?.post_title}
                                className="w-full h-full max-h-60 p-2 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-all duration-200 hover:scale-110">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-all duration-200 hover:scale-110">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                                {property?.galleryList?.length || 1} photos
                            </div>
                        </div>

                        {/* Content sections */}
                        <div className="px-4 space-y-6 mt-1">
                            {/* Basic Info */}
                            <div className="transform transition-all duration-300 hover:translate-x-1">
                                <div>
                                    <h1 className="text-xl font-semibold">{property?.post_title}</h1>
                                    <div className="flex items-center text-gray-600 mt-1">
                                        <MapPinIcon className="w-4 h-4 mr-1" />
                                        <p className="text-sm">{property?.address}, {property?.city}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <p className="text-xl font-bold">{formatPrice(property?.price)}</p>
                                    <span className="text-sm capitalize text-black px-4 py-1 rounded-sm bg-[#FED42B] transition-all duration-200 hover:brightness-110">
                                        {property?.purpose}
                                    </span>
                                </div>
                            </div>

                            {/* Key Details */}
                            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
                                <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
                                    <p className="text-gray-600 text-sm">Area</p>
                                    <p className="font-medium">{property?.area} {property?.areaUnit || "sq"}</p>
                                </div>
                                <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
                                    <p className="text-gray-600 text-sm">Type</p>
                                    <p className="font-medium">{property?.type_name}</p>
                                </div>
                                <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
                                    <p className="text-gray-600 text-sm">Floor</p>
                                    <p className="font-medium">{property?.floor}</p>
                                </div>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className="text-lg font-medium mb-3">Features</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center transform transition-all duration-200 hover:translate-x-1">
                                        <BuildingOffice2Icon className="w-5 h-5 mr-2 text-gray-600" />
                                        <span>{property?.bedrooms} Bedrooms</span>
                                    </div>
                                    <div className="flex items-center transform transition-all duration-200 hover:translate-x-1">
                                        <HomeIcon className="w-5 h-5 mr-2 text-gray-600" />
                                        <span>{property?.bathrooms} Bathrooms</span>
                                    </div>
                                    <div className="flex items-center transform transition-all duration-200 hover:translate-x-1">
                                        <HomeIcon className="w-5 h-5 mr-2 text-gray-600" />
                                        <span>{property?.furnishing}</span>
                                    </div>
                                    <div className="flex items-center transform transition-all duration-200 hover:translate-x-1">
                                        <HomeIcon className="w-5 h-5 mr-2 text-gray-600" />
                                        <span>{property?.possession}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Amenities */}
                            {property?.amenities?.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Amenities</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {property?.amenities.map((amenity, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center text-sm transform transition-all duration-200 hover:translate-x-1"
                                            >
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                {amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Description */}
                            <div className="transform transition-all duration-300 hover:translate-x-1">
                                <h3 className="text-lg font-medium mb-2">Description</h3>
                                <p className="text-gray-600">{property?.post_description}</p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h3 className="text-lg font-medium mb-3">Contact</h3>
                                <div className="space-y-2">
                                    {property?.contactList.map((contact, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center transform transition-all duration-200 hover:translate-x-1"
                                        >
                                            <PhoneIcon className="w-5 h-5 mr-2 text-gray-600" />
                                            <span>{contact}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() => navigate(`/details/${property?.post_id}`)}
                                    className="flex-1 bg-[#FED42B] text-black py-3 rounded-lg font-medium 
                                        transition-all duration-300 ease-in-out
                                        hover:bg-[#FED42B]/90 hover:scale-105 hover:shadow-md"
                                >
                                    View Details
                                </button>
                                <button
                                    className="flex-1 border border-blue-500 text-blue-500 py-3 rounded-lg font-medium 
                                        transition-all duration-300 ease-in-out
                                        hover:bg-blue-50 hover:scale-105 hover:shadow-md"
                                >
                                    Contact Agent
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {/* <div className={`
        fixed inset-0 bg-white z-30 transition-transform duration-500
        ${showMap ? "translate-y-0" : "translate-y-full"}
      `}> */}
            <div className={`
    fixed inset-0 top-36 bg-white z-30 transition-transform duration-500 
    ${showMap ? "translate-y-0" : "translate-y-full"}
`}>
                {/* <div className="h-16 border-b flex items-center justify-between px-4">
                    <button
                        onClick={() => setShowMap(false)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                </div> */}

                <div className="h-[calc(100vh-6rem)]">
                    <LoadScript googleMapsApiKey={googleApiKey}>
                        <GoogleMap
                            mapContainerStyle={{ width: "100%", height: "100%" }}
                            center={mapCenter}
                            zoom={14}
                            options={{
                                styles: [
                                    {
                                        featureType: "all",
                                        elementType: "all",
                                    }
                                ],
                                disableDefaultUI: true,
                                clickableIcons: false,
                            }}
                            onLoad={map => {
                                mapRef.current = map;
                            }}
                        >
                            {properties.map((property, index) => (
                                <OverlayView
                                    key={index}
                                    position={{
                                        lat: property.latitude,
                                        lng: property.longitude,
                                    }}
                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    getPixelPositionOffset={(width, height) => ({
                                        x: -(width / 2),
                                        y: -(height / 2),
                                    })}
                                >
                                    <PropertyMarker property={property} />
                                </OverlayView>
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>

                {selectedProperty && <PropertyCard property={selectedProperty} />}
                {selectedProperty && <SidePanelToggle />}
            </div>

            <button
                onClick={toggleMap}
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 
                 bg-white text-black px-6 py-3 rounded-full shadow-lg 
                 hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="font-medium">{showMap ? "Hide Map" : "Show Map"}</span>
            </button>
        </>
    );
}

export default PropertyMap;