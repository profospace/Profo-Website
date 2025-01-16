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

import React, { useState, useRef, useEffect } from "react";
import { TbMap } from "react-icons/tb";
import { useSelector } from "react-redux";
import { GoogleMap, LoadScript, OverlayView, Circle } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

const FloatButtonShowMap = ({setShow}) => {
    const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

    const { properties } = useSelector((state) => state.properties);
    const [showMap, setShowMap] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [mapCenter, setMapCenter] = useState({
        lat: properties[0]?.latitude || 26.4735628,
        lng: properties[0]?.longitude || 80.2855543,
    });
    const mapRef = useRef(null);
    const navigate = useNavigate();

    const toggleMap = () => {
        setShowMap((prev) => !prev);
        setShow((prev)=> !prev)
        if (!showMap) setSelectedProperty(null);
    };

    const handleZoomIn = () => {
        if (mapRef.current) {
            const currentZoom = mapRef.current.getZoom();
            mapRef.current.setZoom(currentZoom + 1);
        }
    };

    const handleZoomOut = () => {
        if (mapRef.current) {
            const currentZoom = mapRef.current.getZoom();
            mapRef.current.setZoom(currentZoom - 1);
        }
    };

    const handleRecenter = () => {
        if (mapRef.current) {
            mapRef.current.panTo(mapCenter);
            mapRef.current.setZoom(22);
        }
    };

    const getPixelPositionOffset = (width, height) => ({
        x: -(width / 2),
        y: -(height / 2),
    });

    const handleMarkerClick = (property) => {
        if (property === selectedProperty) {
            handleCardClose();
        } else {
            setSelectedProperty(property);
        }
    };

    const handleCardClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedProperty(null);
            setIsClosing(false);
        }, 300);
    };

    const formatPrice = (price) => {
        if (price >= 10000000) {
            return `₹${(price / 10000000).toFixed(2)} Cr`;
        } else if (price >= 100000) {
            return `₹${(price / 100000).toFixed(2)} Lakh`;
        } else {
            return `₹${price.toLocaleString()}`;
        }
    };

    const handleNavigation = (id) => {
        navigate(`/details/${id}`);
    };

    const MarkerWithCard = ({ property }) => {
        const isSelected = selectedProperty === property;
        const cardRef = useRef(null);
        const [cardPosition, setCardPosition] = useState('right');
        const containerRef = useRef(null);

        useEffect(() => {
            if (isSelected && containerRef.current && mapRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const mapRect = mapRef.current.getDiv().getBoundingClientRect();

                // Calculate available space in each direction
                const spaceTop = containerRect.top - mapRect.top;
                const spaceBottom = mapRect.bottom - containerRect.bottom;
                const spaceLeft = containerRect.left - mapRect.left;
                const spaceRight = mapRect.right - containerRect.right;

                // Card dimensions
                const cardWidth = 320; // w-80 = 20rem = 320px
                const cardHeight = 300; // Approximate height of the card

                // Determine best position based on available space and card dimensions
                const positions = [
                    { position: 'top', space: spaceTop, required: cardHeight },
                    { position: 'bottom', space: spaceBottom, required: cardHeight },
                    { position: 'left', space: spaceLeft, required: cardWidth },
                    { position: 'right', space: spaceRight, required: cardWidth }
                ];

                const validPositions = positions.filter(p => p.space >= p.required);

                if (validPositions.length > 0) {
                    // Sort by available space and take the position with most space
                    const bestPosition = validPositions.sort((a, b) => b.space - a.space)[0];
                    setCardPosition(bestPosition.position);
                } else {
                    // Default to right if no position has enough space
                    setCardPosition('right');
                }
            }
        }, [isSelected]);

        const getCardPositionStyles = () => {
            const baseStyles = 'absolute z-10 w-80';

            const positionStyles = {
                top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
                bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
                left: 'top-1/2 right-full -translate-y-1/2 mr-2',
                right: 'top-1/2 left-full -translate-y-1/2 ml-2'
            };

            return `${baseStyles} ${positionStyles[cardPosition]}`;
        };

        return (
            <div
                ref={containerRef}
                className="relative"
                style={{ zIndex: isSelected ? 1000 : 1 }}
            >
                <div
                    onClick={() => handleMarkerClick(property)}
                    className={`
                        transform transition-all duration-300 ease-in-out cursor-pointer
                        ${isSelected ? 'scale-110' : 'hover:scale-105'}
                    `}
                >
                    <div
                        className={`
                            w-28 px-8 py-1.5 rounded-lg shadow-lg text-center
                            ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
                            font-medium text-xs whitespace-nowrap
                            transition-all duration-300 ease-in-out
                        `}
                    >
                        {formatPrice(property.price)}
                    </div>
                </div>

                {isSelected && (
                    <div
                        ref={cardRef}
                        className={`
                            ${getCardPositionStyles()}
                            transition-all duration-300 ease-in-out
                            ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-cardPopup'}
                        `}
                    >
                        <div
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            onClick={() => handleNavigation(property?.post_id)}
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCardClose();
                                }}
                                className="absolute top-3 right-3 z-20 bg-white rounded-full p-1.5 
                                         hover:bg-gray-100 transition-colors transform hover:rotate-90 duration-300"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4L12 12M4 12L12 4" />
                                </svg>
                            </button>

                            <div className="relative aspect-[1.5/1]">
                                <img
                                    src={property.galleryList[0]}
                                    alt={property.post_title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium text-base">{property.post_title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{property.address}</p>
                                    </div>
                                    {property.rating && (
                                        <div className="flex items-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                            <span className="ml-1 text-sm">{property.rating}</span>
                                        </div>
                                    )}
                                </div>
                                <p className="mt-3 text-sm">
                                    <span className="font-medium">{formatPrice(property.price)}</span> night
                                    <span className="mx-1">·</span>
                                    12-17 Jan
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <style jsx global>{`
                @keyframes cardPopup {
                    0% {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-cardPopup {
                    animation: cardPopup 0.3s ease-out forwards;
                }
            `}</style>

            <button
                onClick={toggleMap}
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center 
                         bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer 
                         hover:bg-gray-800 transition-colors"
            >
                <TbMap size={20} />
                <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
            </button>

            <div
                className={`fixed bottom-0 left-0 w-full h-[75vh] bg-white shadow-lg z-40 
                         transition-transform duration-500 ${showMap ? "translate-y-0" : "translate-y-full"}`}
            >
                <button
                    onClick={toggleMap}
                    className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full 
                             text-sm shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
                >
                    Close
                </button>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-lg shadow-lg">
                    <button
                        onClick={handleZoomIn}
                        className="flex items-center justify-center w-10 h-10 border-b border-gray-200 
                                 hover:bg-gray-50 transition-colors"
                        aria-label="Zoom in"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14m-7-7h14" />
                        </svg>
                    </button>
                    <button
                        onClick={handleRecenter}
                        className="flex items-center justify-center w-10 h-10 border-b border-gray-200 
                                 hover:bg-gray-50 transition-colors"
                        aria-label="Recenter map"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L12 22M2 12L22 12" />
                        </svg>
                    </button>
                    <button
                        onClick={handleZoomOut}
                        className="flex items-center justify-center w-10 h-10 hover:bg-gray-50 transition-colors"
                        aria-label="Zoom out"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14" />
                        </svg>
                    </button>
                </div>

                <div className="w-full h-full relative">
                    <LoadScript googleMapsApiKey={googleApiKey}>
                        <GoogleMap
                            mapContainerStyle={{ width: "100%", height: "100%" }}
                            center={mapCenter}
                            zoom={20}
                            options={{
                                styles: [
                                    {
                                        featureType: "poi",
                                        elementType: "labels",
                                        stylers: [{ visibility: "off" }],
                                    },
                                ],
                                disableDefaultUI: true,
                                scrollwheel: false,
                            }}
                            onLoad={map => {
                                mapRef.current = map;
                            }}
                        >
                            <Circle
                                center={mapCenter}
                                radius={500}
                                options={{
                                    strokeColor: "#00BFFF",
                                    strokeOpacity: 0.8,
                                    strokeWeight: 2,
                                    fillColor: "#ADD8E6",
                                    fillOpacity: 0.35,
                                }}
                            />
                            {properties.map((property, index) => (
                                <OverlayView
                                    key={index}
                                    position={{
                                        lat: property.latitude,
                                        lng: property.longitude,
                                    }}
                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    getPixelPositionOffset={getPixelPositionOffset}
                                >
                                    <MarkerWithCard property={property} />
                                </OverlayView>
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </>
    );
};

export default FloatButtonShowMap;